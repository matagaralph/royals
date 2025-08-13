import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  async function middleware(req) {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
      cookieName:
        process.env.NODE_ENV === 'production'
          ? '__Secure-next-auth.session-token'
          : 'next-auth.session-token',
    });

    const isAuth = !!token;
    const userRole = token?.role;
    const isAuthPage =
      req.nextUrl.pathname.startsWith('/sign-in') || req.nextUrl.pathname.startsWith('/register');

    if (isAuthPage) {
      if (isAuth) {
        let redirectUrl = userRole === 'owner' || userRole === 'issuer' ? '/admin' : '/shopper';
        return NextResponse.redirect(new URL(redirectUrl, req.url));
      }
      return null;
    }

    if (isAuth) {
      if (req.nextUrl.pathname === '/') {
        let redirectUrl = userRole === 'owner' || userRole === 'issuer' ? '/admin' : '/shopper';
        return NextResponse.redirect(new URL(redirectUrl, req.url));
      }
      if (userRole === 'owner' || userRole === 'issuer') {
        if (req.nextUrl.pathname.startsWith('/shopper')) {
          return NextResponse.redirect(new URL('/admin', req.url));
        }
      } else if (userRole === 'shopper') {
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return NextResponse.redirect(new URL('/shopper', req.url));
        }
      }
      return null;
    }

    if (
      !isAuth &&
      (req.nextUrl.pathname.startsWith('/admin') || req.nextUrl.pathname.startsWith('/shopper'))
    ) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }
      return NextResponse.redirect(new URL(`/sign-in?from=${encodeURIComponent(from)}`, req.url));
    }

    return null;
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
  matcher: ['/admin/:path*', '/shopper/:path*', '/sign-in', '/register', '/'],
};
