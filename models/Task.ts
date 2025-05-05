// models/Task.ts
import { Schema, model, Document, models } from 'mongoose';

export interface ITask extends Document {
  taskId: string;
  userId: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<ITask>(
  {
    taskId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { 
    timestamps: true,
    collection: 'tasks'
   }
);

export const Task = models.Task || model<ITask>('Task', TaskSchema);