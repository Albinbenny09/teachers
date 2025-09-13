import { NextResponse, type NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

function secret(): string {
  const s = process.env.JWT_SECRET;
  if (!s) throw new Error("JWT_SECRET is not set");
  return s;
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname.startsWith('/admin') && url.pathname !== '/admin/login') {
    const token = req.cookies.get('auth')?.value;
    if (!token) {
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }

    try {
      jwt.verify(token, secret());
      return NextResponse.next();
    } catch (err) {
      console.log('JWT verify failed:', err);
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
  runtime: 'nodejs', // ensure env vars are available
};
