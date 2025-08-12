import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  async function middleware(req) {
    const token = await getToken({
      req: req,
      secret: process.env.NEXTAUTH_SECRET,
      cookieName:
        process.env.NODE_ENV === 'production'
          ? '__Secure-next-auth.session-token'
          : 'next-auth.session-token',
    });

    const isAuth = !!token;
    const userRole = token?.role;
    const isAuthPage =
      req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register');

    if (isAuthPage) {
      if (isAuth) {
        const redirectUrl = userRole === 'owner' || userRole === 'issuer' ? '/owner' : '/';
        return NextResponse.redirect(new URL(redirectUrl, req.url));
      }

      return null;
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/owner/:path*', '/login', '/register'],
};
