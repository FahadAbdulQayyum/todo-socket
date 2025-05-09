import { NextResponse } from 'next/server';
import { Task } from '../../../../../models/Task';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '@/app/dashboard/db';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    // Extract the JWT token from the request headers or cookies
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Verify the token
    let decoded;
    try {
    decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string };
    } catch (err) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Check if the user is an admin
    if (decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    // Fetch all tasks from the database
    const tasks = await Task.find({}).populate('userId', 'email'); // Optionally populate userId with email

    // Return the tasks
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}