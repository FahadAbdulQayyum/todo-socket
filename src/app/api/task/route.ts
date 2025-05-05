import { NextResponse } from 'next/server';
import { Task } from '../../../../models/Task';
import { v4 as uuidv4 } from 'uuid';
import { connectToDatabase } from '@/app/dashboard/db';

export async function POST(req: Request) {
  try {
    const { userId, title, description } = await req.json();

    console.log('...u(task)...', userId, title, description)

    // Connect to MongoDB
    await connectToDatabase();
    
    const newTask = new Task({
      taskId: uuidv4(),
      userId,
      title,
      description,
    });

    await newTask.save();
    return NextResponse.json({ message: 'Task created successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}