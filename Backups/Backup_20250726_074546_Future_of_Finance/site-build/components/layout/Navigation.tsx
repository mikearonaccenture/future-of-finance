'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Navigation() {
    const [showFunctionsDropdown, setShowFunctionsDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowFunctionsDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const functions = [
        { name: 'FP&A Connected Enterprise Planning Platform', href: '/functions/fpa' }
    ];

    return (
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
                    {/* Functions Dropdown */}
                    <div ref={dropdownRef} style={{ position: 'relative' }}>
                        <button
                            onClick={() => setShowFunctionsDropdown(!showFunctionsDropdown)}
                            style={{
                                color: showFunctionsDropdown ? '#ffffff' : '#cbd5e1',
                                fontSize: '1rem',
                                fontWeight: '500',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.375rem',
                                padding: '0.5rem 0',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                if (!showFunctionsDropdown) {
                                    e.currentTarget.style.color = '#ffffff';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!showFunctionsDropdown) {
                                    e.currentTarget.style.color = '#cbd5e1';
                                }
                            }}
                        >
                            Prototypes & Capabilities
                            <ChevronDown style={{
                                width: '1rem',
                                height: '1rem',
                                transition: 'transform 0.3s ease',
                                transform: showFunctionsDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
                            }} />
                        </button>

                        {/* Dropdown Menu */}
                        {showFunctionsDropdown && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                marginTop: '0.5rem',
                                background: 'rgba(17, 24, 39, 0.95)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '0.75rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '0.5rem',
                                minWidth: '350px',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                            }}>
                                {functions.map((func) => (
                                    <Link
                                        key={func.name}
                                        href={func.href}
                                        onClick={() => setShowFunctionsDropdown(false)}
                                        style={{
                                            display: 'block',
                                            padding: '0.75rem 1rem',
                                            color: '#cbd5e1',
                                            textDecoration: 'none',
                                            borderRadius: '0.5rem',
                                            transition: 'all 0.2s ease',
                                            fontSize: '0.938rem',
                                            whiteSpace: 'nowrap'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                                            e.currentTarget.style.color = '#ffffff';
                                            e.currentTarget.style.transform = 'translateX(4px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = '#cbd5e1';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        {func.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
} 