'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationLinks = [
        { href: '/', label: 'Home' },
        { href: '/see-the-future', label: 'See the Future' },
        { href: '/ecosystem', label: 'Finance AI Agent Library' },
        { href: '/workflows', label: 'See Agents in Action' },
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                background: 'rgba(10, 10, 10, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 50,
                padding: '1rem 2rem'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Link href="/" style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textDecoration: 'none'
                    }}>
                        Future of Finance
                    </Link>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem'
                    }}>
                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px',
                                alignItems: 'flex-end'
                            }}
                            aria-label="Open navigation menu"
                        >
                            <span style={{
                                display: 'block',
                                width: '24px',
                                height: '2px',
                                background: '#cbd5e1',
                                transition: 'all 0.3s ease'
                            }}></span>
                            <span style={{
                                display: 'block',
                                width: '18px',
                                height: '2px',
                                background: '#cbd5e1',
                                transition: 'all 0.3s ease'
                            }}></span>
                            <span style={{
                                display: 'block',
                                width: '24px',
                                height: '2px',
                                background: '#cbd5e1',
                                transition: 'all 0.3s ease'
                            }}></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Slide-out Menu */}
            {isMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 100,
                            animation: 'fadeIn 0.3s ease'
                        }}
                    />

                    {/* Menu Panel */}
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: '320px',
                        background: 'rgba(10, 10, 10, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                        zIndex: 101,
                        padding: '2rem',
                        overflowY: 'auto',
                        animation: 'slideInRight 0.3s ease'
                    }}>
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#cbd5e1',
                                padding: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '0.5rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.color = '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'none';
                                e.currentTarget.style.color = '#cbd5e1';
                            }}
                            aria-label="Close navigation menu"
                        >
                            <X size={24} />
                        </button>

                        {/* Menu Title */}
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '3rem',
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Navigation
                        </h2>

                        {/* Navigation Links */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                        }}>
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        color: '#cbd5e1',
                                        textDecoration: 'none',
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        display: 'block',
                                        transition: 'all 0.3s ease',
                                        fontSize: '1.1rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                                        e.currentTarget.style.color = '#ffffff';
                                        e.currentTarget.style.transform = 'translateX(8px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'none';
                                        e.currentTarget.style.color = '#cbd5e1';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Platform Section */}
                        <div style={{
                            marginTop: '3rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <h3 style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                marginBottom: '1rem',
                                color: '#94a3b8',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Platforms
                            </h3>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}>
                                <Link
                                    href="/functions/fpa/forecasting"
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        color: '#94a3b8',
                                        textDecoration: 'none',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '0.5rem',
                                        display: 'block',
                                        transition: 'all 0.3s ease',
                                        fontSize: '0.95rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                                        e.currentTarget.style.color = '#60a5fa';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'none';
                                        e.currentTarget.style.color = '#94a3b8';
                                    }}
                                >
                                    Connected Enterprise Planning
                                </Link>
                                <Link
                                    href="/functions/fpa/management-reporting"
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        color: '#94a3b8',
                                        textDecoration: 'none',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '0.5rem',
                                        display: 'block',
                                        transition: 'all 0.3s ease',
                                        fontSize: '0.95rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                                        e.currentTarget.style.color = '#60a5fa';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'none';
                                        e.currentTarget.style.color = '#94a3b8';
                                    }}
                                >
                                    Management Reporting Platform
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
} 