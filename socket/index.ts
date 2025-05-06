import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cron from 'node-cron';

// Initialize WebSocket server
const io = new Server(3001, {
  cors: {
    origin: process.env.NODE_ENV === 'production' ? ['https://your-production-domain.com'] : '*', // Restrict origins in production
    methods: ['GET', 'POST'],
  },
});

// MongoDB connection URI
const MONGODB_URI =
  "mongodb+srv://fahad:fahad@contactmanager.abu8h.mongodb.net/socket?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {})
  .then(async () => {
    console.log("Connected to MongoDB");

    // Define Task model
    const Task = mongoose.model(
      "Task",
      new mongoose.Schema({
        taskId: String,
        userId: String,
        title: String,
        description: String,
        completed: Boolean,
        createdAt: Date,
        updatedAt: Date,
      })
    );

    // Watch for changes in the tasks collection
    const changeStream = Task.watch();

    changeStream.on("change", (change) => {
      console.log("Change detected:", change);

      if (change.operationType === "insert") {
        const newTask = change.fullDocument;
        io.emit("newTask", newTask); // Emit the new task to all connected clients
      }

      if (change.operationType === "update") {
        const updatedTaskId = change.documentKey._id.toString();
        const updatedFields = change.updateDescription?.updatedFields;

        io.emit("taskUpdated", { taskId: updatedTaskId, ...updatedFields }); // Emit the updated task
      }
    });

    // Cron job to fetch incomplete tasks
    cron.schedule("* * * * *", async () => {
      console.log("Cron job triggered at:", new Date());

      try {
        const incompleteTasks = await Task.find({ completed: false }).lean(); // Use .lean() for plain JavaScript objects
        console.log("Incomplete tasks fetched:", incompleteTasks);

        // Notify all connected clients about incomplete tasks
        io.emit("incompleteTasks", incompleteTasks);
      } catch (error) {
        console.error("Error fetching incomplete tasks:", error);
      }
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

console.log("WebSocket server running on port 3001");