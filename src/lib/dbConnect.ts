import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

console.log('MONGODB_URI...:', MONGODB_URI);

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = {
    conn: null as typeof mongoose | null,
    promise: null as Promise<typeof mongoose> | null,
};

export const dbConnect = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
            console.log('Connected to MongoDB');
            return mongoose;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};