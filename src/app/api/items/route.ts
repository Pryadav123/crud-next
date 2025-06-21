import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  const [rows] = await db.query('SELECT * FROM items');
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const { name, description } = await req.json();
  if (!name || !description) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  await db.query('INSERT INTO items (name, description) VALUES (?, ?)', [name, description]);
  return NextResponse.json({ message: 'Item added' });
}
