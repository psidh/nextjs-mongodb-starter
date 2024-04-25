import { NextResponse, NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  try {
    // your logic here to be
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
