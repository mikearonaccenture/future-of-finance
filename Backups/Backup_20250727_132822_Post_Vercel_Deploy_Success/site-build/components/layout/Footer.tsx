'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, #0a0a0a 100%)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '4rem 2rem 2rem 2rem'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Company Info */}
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Future of Finance
                        </h3>
                        <p style={{
                            color: '#94a3b8',
                            fontSize: '0.938rem',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem'
                        }}>
                            Transforming finance teams with AI-powered platforms that amplify human potential.
                        </p>
                        {/* Social Links */}
                        <div style={{
                            display: 'flex',
                            gap: '1rem'
                        }}>
                            {[
                                { icon: <Linkedin />, href: '#', label: 'LinkedIn' },
                                { icon: <Twitter />, href: '#', label: 'Twitter' },
                                { icon: <Github />, href: '#', label: 'GitHub' },
                                { icon: <Mail />, href: '#', label: 'Email' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    style={{
                                        width: '2.5rem',
                                        height: '2.5rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '0.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#94a3b8',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)';
                                        e.currentTarget.style.color = '#ffffff';
                                        e.currentTarget.style.borderColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.color = '#94a3b8';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Finance Functions - Column 1 */}
                    <div>
                        <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#ffffff',
                            marginBottom: '1rem'
                        }}>
                            Core Functions
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            {[
                                { name: 'FP&A', href: '/functions/fpa' },
                                { name: 'Controllership', href: '/functions/controllership' },
                                { name: 'Order to Cash', href: '/functions/order-to-cash' },
                                { name: 'Procure to Pay', href: '/functions/procure-to-pay' }
                            ].map((item) => (
                                <li key={item.name} style={{ marginBottom: '0.75rem' }}>
                                    <a
                                        href={item.href}
                                        style={{
                                            color: '#94a3b8',
                                            fontSize: '0.938rem',
                                            textDecoration: 'none',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#60a5fa';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = '#94a3b8';
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Finance Functions - Column 2 */}
                    <div>
                        <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#ffffff',
                            marginBottom: '1rem'
                        }}>
                            Specialized Functions
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            {[
                                { name: 'Corporate Finance', href: '/functions/corporate-finance' },
                                { name: 'Cost Accounting', href: '/functions/cost-accounting' },
                                { name: 'Investor Relations', href: '/functions/investor-relations' }
                            ].map((item) => (
                                <li key={item.name} style={{ marginBottom: '0.75rem' }}>
                                    <a
                                        href={item.href}
                                        style={{
                                            color: '#94a3b8',
                                            fontSize: '0.938rem',
                                            textDecoration: 'none',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#60a5fa';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = '#94a3b8';
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexWrap: 'wrap' as const,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <p style={{
                        color: '#64748b',
                        fontSize: '0.875rem'
                    }}>
                        © {currentYear} Future of Finance. All rights reserved.
                    </p>
                    <p style={{
                        color: '#64748b',
                        fontSize: '0.875rem'
                    }}>
                        Built with AI • Powered by Innovation
                    </p>
                </div>
            </div>
        </footer>
    );
} 