'use client';

import { FEATURED_PROTOTYPE } from '@/lib/constants';
import Link from 'next/link';

export default function FeaturedPrototype() {
    return (
        <section id="prototypes" style={{
            padding: '4rem 2rem',
            background: 'rgba(255, 255, 255, 0.02)'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center'
            }}>
                {/* Content */}
                <div>
                    <h3 style={{
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Featured: {FEATURED_PROTOTYPE.title}
                    </h3>

                    <p style={{
                        fontSize: '1rem',
                        color: '#94a3b8',
                        marginBottom: '2rem',
                        lineHeight: '1.6'
                    }}>
                        {FEATURED_PROTOTYPE.description}
                    </p>

                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '2rem 0'
                    }}>
                        {FEATURED_PROTOTYPE.features.map((feature, index) => (
                            <li
                                key={index}
                                style={{
                                    padding: '0.5rem 0',
                                    color: '#94a3b8',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Link
                        href={FEATURED_PROTOTYPE.demoUrl}
                        style={{
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '0.5rem',
                            textDecoration: 'none',
                            fontWeight: '600',
                            transition: 'all 0.3s',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        Try Live Demo
                    </Link>
                </div>

                {/* Demo Preview */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative' as const,
                    overflow: 'hidden'
                }}>
                    <div style={{
                        height: '400px',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#94a3b8'
                    }}>
                        [Interactive Demo Preview]
                    </div>
                </div>
            </div>
        </section>
    );
} 