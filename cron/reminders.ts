import cron from 'node-cron';
import { Task } from '../models/Task';

cron.schedule('0 8 * * *', async () => {
  const incompleteTasks = await Task.find({ completed: false, createdAt: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } });

  incompleteTasks.forEach((task) => {
    console.log(`Reminder: Task ID ${task.taskId}, Title: ${task.title}, Description: ${task.description}`);
  });
});