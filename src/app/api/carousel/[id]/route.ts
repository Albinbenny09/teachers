// src/app/api/carousel/[id]/route.ts
import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { z } from 'zod';
import { getUserFromCookie } from '@/lib/auth';

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!getUserFromCookie()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  const db = getDb();
  db.prepare('DELETE FROM carousel_images WHERE id = ?').run(Number(id));
  return NextResponse.json({ success: true });
}

const updateSchema = z.object({
  url: z.string().min(1).optional(),
  title: z.string().optional().nullable(),
  subtitle: z.string().optional().nullable(),
  order_index: z.number().int().min(0).optional(),
});

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!getUserFromCookie()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  const body = await req.json().catch(() => null);
  const parse = updateSchema.safeParse(body);
  if (!parse.success) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const fields = parse.data;
  const sets: string[] = [];
  const values: unknown[] = [];
  for (const [k, v] of Object.entries(fields)) {
    sets.push(`${k} = ?`);
    values.push(v);
  }
  if (sets.length === 0) return NextResponse.json({ success: true });
  values.push(Number(id));

  const db = getDb();
  db.prepare(`UPDATE carousel_images SET ${sets.join(', ')} WHERE id = ?`).run(...values);
  return NextResponse.json({ success: true });
}