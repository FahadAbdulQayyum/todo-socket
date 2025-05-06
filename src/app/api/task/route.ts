import { NextResponse } from 'next/server';
import { Task } from '../../../../models/Task';
import { v4 as uuidv4 } from 'uuid';
import { connectToDatabase } from '@/app/dashboard/db';
import jwt from 'jsonwebtoken';

// POST: Create a new task
export async function POST(req: Request) {
  try {
    const { title, description } = await req.json();

    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    let decoded;
    try {
    decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string };
    } catch (err) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    console.log('POST /api/tasks - userId:', decoded.userId, 'title:', title, 'description:', description);

    await connectToDatabase();

    const newTask = new Task({
      taskId: uuidv4(),
      userId: decoded.userId,
      title,
      description,
    });

    await newTask.save();
    return NextResponse.json({ message: 'Task created successfully' }, { status: 201 });
  } catch (error) {
    console.error('POST /api/tasks error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT: Update an existing task by taskId
export async function PUT(req: Request) {
  try {
    const { taskId, title, description } = await req.json();
    console.log('PUT /api/tasks - taskId:', taskId, 'title:', title, 'description:', description);

    if (!taskId) {
      return NextResponse.json({ error: 'taskId is required' }, { status: 400 });
    }

    await connectToDatabase();

    const updatedTask = await Task.findOneAndUpdate(
      { taskId },
      { title, description },
      { new: true }
    );

    if (!updatedTask) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Task updated successfully', task: updatedTask }, { status: 200 });
  } catch (error) {
    console.error('PUT /api/tasks error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE: Delete a task by taskId
export async function DELETE(req: Request) {
  console.log('DELETE /api/tasks - Request received');
  try {
    const body = await req.json();
    const { taskId } = body;
    console.log('DELETE /api/tasks - taskId:', taskId);

    if (!taskId) {
      console.log('DELETE /api/tasks - taskId is missing');
      return NextResponse.json({ error: 'taskId is required' }, { status: 400 });
    }

    await connectToDatabase();
    console.log('DELETE /api/tasks - Connected to MongoDB');

    const deletedTask = await Task.findOneAndDelete({ taskId });
    console.log('DELETE /api/tasks - Deleted task:', deletedTask);

    if (!deletedTask) {
      console.log('DELETE /api/tasks - Task not found for taskId:', taskId);
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Task deleted successfully', task: deletedTask }, { status: 200 });
  } catch (error) {
    console.error('DELETE /api/tasks error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET: Fetch tasks by userId (to support client-side fetchTasks)
export async function GET(req: Request) {
  try {
    console.log('GET /api/tasks - Request received');
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    console.log('GET /api/tasks - userId:', userId);

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    await connectToDatabase();
    const tasks = await Task.find({ userId });
    console.log('GET /api/tasks - Tasks found:', tasks.length);

    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error('GET /api/tasks error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}