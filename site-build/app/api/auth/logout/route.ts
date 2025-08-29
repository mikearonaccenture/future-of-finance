import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const response = NextResponse.json(
        { success: true, message: 'Logout successful' },
        { status: 200 }
    );

    // Clear the auth cookie
    response.cookies.set('auth-token', '', {
        httpOnly: true,
        expires: new Date(0),
        path: '/',
    });

    return response;
} 