'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function FPAPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the forecasting platform
        router.push('/functions/fpa/forecasting');
    }, [router]);

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0a0a0a',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    border: '3px solid #3b82f6',
                    borderTopColor: 'transparent',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    animation: 'spin 1s linear infinite'
                }} />
                <p style={{ color: '#94a3b8' }}>Redirecting to FP&A Forecasting Platform...</p>
            </div>
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
} 