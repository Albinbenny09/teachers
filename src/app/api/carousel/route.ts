// src/app/api/carousel/route.ts
import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { z } from 'zod';
import { getUserFromCookie } from '@/lib/auth';

export async function GET() {
  const db = getDb();
  const rows = db.prepare('SELECT id, url, title, subtitle, order_index FROM carousel_images ORDER BY order_index, id').all();
  return NextResponse.json(rows);
}

const createSchema = z.object({
  url: z.string().min(1),
  title: z.string().optional().nullable(),
  subtitle: z.string().optional().nullable(),
  order_index: z.number().int().min(0).optional(),
});

export async function POST(req: Request) {
  if (!getUserFromCookie()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json().catch(() => null);
  const parse = createSchema.safeParse(body);
  if (!parse.success) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const { url, title, subtitle, order_index = 0 } = parse.data;
  const db = getDb();
  const stmt = db.prepare('INSERT INTO carousel_images (url, title, subtitle, order_index) VALUES (?, ?, ?, ?)');
  const info = stmt.run(url, title ?? null, subtitle ?? null, order_index);
  return NextResponse.json({ id: info.lastInsertRowid });
}