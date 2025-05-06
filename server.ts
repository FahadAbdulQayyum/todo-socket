import { WebSocket, Server } from 'ws';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cron from 'node-cron';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || '';
const DB_NAME = process.env.DB_NAME || '';
const COLLECTION_NAME = process.env.COLLECTION_NAME || '';

// Initialize WebSocket server
const wss = new Server({ port: 8080 });

console.log('WebSocket server is running on ws://localhost:8080');

// Connect to MongoDB
const client = new MongoClient(MONGODB_URI);
async function start() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        // Watch for changes in the collection
        const changeStream = collection.watch();

        changeStream.on('change', (change) => {
            console.log('Change detected:', change);

            // Broadcast the change to all connected WebSocket clients
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(change));
                }
            });
        });

        // Cron job to fetch incomplete tasks and notify clients
        // cron.schedule('0 8 * * *', async () => {
        cron.schedule('* * * * *', async () => {
            try {
                const incompleteTasks = await collection.find({
                    completed: false,
                    createdAt: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
                }).toArray();

                console.log('Incomplete tasks fetched:', incompleteTasks);

                // Notify all connected WebSocket clients about incomplete tasks
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(
                            JSON.stringify({
                                type: 'incompleteTasks',
                                data: incompleteTasks,
                            })
                        );
                    }
                });
            } catch (error) {
                console.error('Error fetching incomplete tasks:', error);
            }
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

start();

// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});