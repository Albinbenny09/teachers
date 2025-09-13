// src/lib/auth.ts
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const COOKIE_NAME = "auth";
const MAX_AGE = 60 * 60 * 8; // 8h

function secret(): string {
  const s = process.env.JWT_SECRET;
  if (!s) throw new Error("JWT_SECRET is not set");
  return s;
}

export async function setAuthCookie(payload: { id: number; username: string }) {
  const token = jwt.sign(payload, secret(), { expiresIn: MAX_AGE });

  const cookieStore = await cookies(); // 👈 must await in route handlers
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
    secure: process.env.NODE_ENV === 'production', // important for local dev
  });
  
  console.log('setAuthCookie done');
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "auth",      // same name as your login cookie
    value: "",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 0,         // removes the cookie
  });
}

export async function getUserFromCookie(): Promise<{ id: number; username: string } | null> {
  const cookieStore = await cookies();
  const c = cookieStore.get(COOKIE_NAME)?.value;
  if (!c) return null;
  try {
    return jwt.verify(c, secret()) as { id: number; username: string };
  } catch {
    return null;
  }
}
