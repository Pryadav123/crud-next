import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { name, description } = await req.json();
  await db.query('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, params.id]);
  return NextResponse.json({ message: 'Updated' });
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  await db.query('DELETE FROM items WHERE id = ?', [params.id]);
  return NextResponse.json({ message: 'Deleted' });
}
