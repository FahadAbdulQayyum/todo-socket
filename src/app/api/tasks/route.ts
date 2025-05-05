// app/api/tasks/route.ts
import { NextResponse } from 'next/server';
import { Task } from '../../../../models/Task';
import { connectToDatabase } from '@/app/dashboard/db';

export async function GET(req: Request) {
  try {
    
    // Connect to MongoDB
    await connectToDatabase();
    
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    console.log('...t(task)...', userId, searchParams)

    const tasks = await Task.find({ userId });
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}