import { NextResponse, NextRequest } from 'next/server';

export  function GET(request: NextRequest) {
  try {
    // your logic here to be
    return NextResponse.json({message: "All okay"}, {status : 200})

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
