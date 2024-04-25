import mongoose from 'mongoose';
import { NextResponse, NextRequest } from 'next/server';

export default async function Connect() {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI!);

    if (response) {
      return NextResponse.json({ message: 'connected the db' });
    }
  } catch (error: any) {
    console.log('Error connecting to the mongodb');
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
