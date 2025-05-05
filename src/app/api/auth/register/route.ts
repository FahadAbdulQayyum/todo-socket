// app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import { User } from '../../../../../models/User';
import { v4 as uuidv4 } from 'uuid';
import { connectToDatabase } from '@/app/dashboard/db';

export async function POST(req: Request) {
  try {
    const { email, password, role } = await req.json();

    console.log('...e...', email, password, role)

    // Connect to MongoDB
    await connectToDatabase();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Create new user
    const newUser = new User({
      userId: uuidv4(),
      email,
      password,
      role,
    });

    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}