// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getDb } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { setAuthCookie } from '@/lib/auth';

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parse = schema.safeParse(body);
  if (!parse.success) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const { username, password } = parse.data;
  const db = getDb();
  const row = db.prepare('SELECT id, username, password_hash FROM admins WHERE username = ?').get(username) as { id: number; username: string; password_hash: string } | undefined;
  if (!row) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const ok = bcrypt.compareSync(password, row.password_hash);
  if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  await setAuthCookie({ id: row.id, username: row.username });
  return NextResponse.json({ success: true });
}