import { NextResponse } from 'next/server';
import { Task } from '../../../../models/Task';
import { connectToDatabase } from '@/app/dashboard/db';
import jwt from 'jsonwebtoken';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    
    // Connect to MongoDB
    await connectToDatabase();
    
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
    const userId = decoded.userId;

    const tasks = await Task.find({ userId });
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}