import { Server } from 'socket.io';
import mongoose from 'mongoose';

const io = new Server(3001, {
  cors: {
    origin: '*', // Allow all origins (or restrict to specific origins in production)
  },
});

const MONGODB_URI = "mongodb+srv://fahad:fahad@contactmanager.abu8h.mongodb.net/socket?retryWrites=true&w=majority"

// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI!, {}).then(() => {
mongoose.connect(MONGODB_URI, {}).then(() => {
  console.log('Connected to MongoDB');

  const Task = mongoose.model('Task', new mongoose.Schema({
    taskId: String,
    userId: String,
    title: String,
    description: String,
    completed: Boolean,
    createdAt: Date,
    updatedAt: Date,
  }));

  // Watch for changes in the tasks collection
  const changeStream = Task.watch();

  changeStream.on('change', (change) => {
    console.log('Change detected:', change);

    if (change.operationType === 'insert') {
      const newTask = change.fullDocument;
      io.emit('newTask', newTask); // Emit the new task to all connected clients
    }

    if (change.operationType === 'update') {
      const updatedTaskId = change.documentKey._id.toString();
      const updatedFields = change.updateDescription?.updatedFields;

      io.emit('taskUpdated', { taskId: updatedTaskId, ...updatedFields }); // Emit the updated task
    }
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

console.log('WebSocket server running on port 3001');














// // socket/index.ts
// import { Server } from 'socket.io';
// import mongoose from 'mongoose';

// const io = new Server(3001, {
//   cors: {
//     origin: '*', // Allow all origins (or restrict to specific origins in production)
//   },
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI!, {}).then(() => {
//   console.log('Connected to MongoDB');

//   const Task = mongoose.model('Task', new mongoose.Schema({
//     taskId: String,
//     userId: String,
//     title: String,
//     description: String,
//     completed: Boolean,
//     createdAt: Date,
//     updatedAt: Date,
//   }));

//   // Watch for changes in the tasks collection
//   const changeStream = Task.watch();

//   changeStream.on('change', (change) => {
//     console.log('Change detected:', change);

//     if (change.operationType === 'insert') {
//       const newTask = change.fullDocument;
//       io.emit('newTask', newTask); // Emit the new task to all connected clients
//     }

//     if (change.operationType === 'update') {
//       const updatedTaskId = change.documentKey._id.toString();
//       const updatedFields = change.updateDescription?.updatedFields;

//       io.emit('taskUpdated', { taskId: updatedTaskId, ...updatedFields }); // Emit the updated task
//     }
//   });
// }).catch((err) => {
//   console.error('Failed to connect to MongoDB:', err);
// });

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// console.log('WebSocket server running on port 3001');











// // // Use CommonJS syntax
// // const { Server } = require('socket.io');

// // const io = new Server(3001, {
// //   cors: {
// //     origin: '*', // Allow all origins (or restrict to specific origins in production)
// //   },
// // });

// // io.on('connection', (socket: any) => {
// //   console.log('A user connected');

// //   socket.on('disconnect', () => {
// //     console.log('User disconnected');
// //   });
// // });

// // console.log('WebSocket server running on port 3001');











// // // import { Server } from 'socket.io';

// // // const io = new Server(3001, {
// // //   cors: {
// // //     origin: '*',
// // //   },
// // // });

// // // io.on('connection', (socket) => {
// // //   console.log('A user connected');

// // //   socket.on('disconnect', () => {
// // //     console.log('User disconnected');
// // //   });
// // // });

// // // export default io;