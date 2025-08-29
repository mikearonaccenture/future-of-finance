import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const secret = new TextEncoder().encode(
    process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Allow access to login page and auth API routes without authentication
    if (pathname === '/login' || pathname.startsWith('/api/auth/')) {
        return NextResponse.next();
    }

    // Allow access to static files and Next.js internals
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/favicon.ico') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Check for auth token
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
        // Redirect to login if no token
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        // Verify the token
        await jwtVerify(token, secret);
        return NextResponse.next();
    } catch (error) {
        // Token is invalid or expired, redirect to login
        const response = NextResponse.redirect(new URL('/login', request.url));
        // Clear the invalid token
        response.cookies.set('auth-token', '', {
            httpOnly: true,
            expires: new Date(0),
            path: '/',
        });
        return response;
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/auth (auth API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
    ],
}; 