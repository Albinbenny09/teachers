// src/app/api/auth/logout/route.ts
import { NextResponse } from 'next/server';
import { clearAuthCookie } from '@/lib/auth';

export async function POST() {
    ;
  clearAuthCookie();
   const url = '/admin/login';
  return NextResponse.redirect(url);
 
}