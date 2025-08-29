import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

// Hard-coded credentials (in production, these would be in a database)
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'michael.j.aron';

// Create a hashed version of the password for comparison
const HASHED_PASSWORD = bcrypt.hashSync(VALID_PASSWORD, 10);

// Secret key for JWT (in production, use environment variable)
const secret = new TextEncoder().encode(
    process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password } = body;

        // Validate credentials
        if (username !== VALID_USERNAME) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Check password
        const isValidPassword = bcrypt.compareSync(password, HASHED_PASSWORD);
        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Create JWT token
        const token = await new SignJWT({ username })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(secret);

        // Create response with token
        const response = NextResponse.json(
            { success: true, message: 'Login successful' },
            { status: 200 }
        );

        // Set the token as an HTTP-only cookie
        response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 