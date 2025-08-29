'use client';

import { Brain, ChevronDown, Server, UserCheck, Users } from 'lucide-react';

const pillars = [
    {
        icon: Users,
        title: 'Strategic Finance Expertise',
        description: 'In finance we have former CFOs, controllers, Finance Strategists, process management experts, etc. Folks that understand where you\'re at today and can help craft the future.',
        gradient: 'linear-gradient(135deg, #3b82f6, #1e40af)'
    },
    {
        icon: Brain,
        title: 'Data & AI Expertise',
        description: 'Data and AI are robust capabilities with experts in data engineering, data platform builds and AI expertise in building AI/ML models, leveraging existing AI ecosystems, AI agents and AI refinery',
        gradient: 'linear-gradient(135deg, #8b5cf6, #6b21a8)'
    },
    {
        icon: Server,
        title: 'Technology Expertise',
        description: 'Technology includes experts in technology architecture and platforms like SAP, Oracle, Workday and more, ensuring that you have the optimized tech architecture to deliver value',
        gradient: 'linear-gradient(135deg, #10b981, #047857)'
    },
    {
        icon: UserCheck,
        title: 'People Expertise',
        description: 'People focuses on the talent and skills you need for the journey, the change management and adoption, and what this then means for your future state model so you are optimized and designed for success in the future',
        gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
    }
];

export default function FinanceReinvention() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 80;
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            let offsetPosition = elementTop - navHeight;
            offsetPosition += 100;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="mobile-padding-section" style={{
            minHeight: '100vh',
            padding: '6rem 2rem 3rem 2rem',
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, #0a0a0a 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{ maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
                {/* Main Title */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="mobile-text-3xl" style={{
                        fontSize: '3rem',
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '700',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.1'
                    }}>
                        We Bring Finance Reinvention
                    </h2>
                    <p className="mobile-text-xl" style={{
                        fontSize: '1.5rem',
                        color: '#cbd5e1',
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontWeight: '300',
                        lineHeight: '1.4'
                    }}>
                        We meet you where you are today and help shape your future.
                    </p>
                    <p className="mobile-text-lg" style={{
                        fontSize: '1.125rem',
                        color: '#94a3b8',
                        maxWidth: '1200px',
                        margin: '1rem auto 0',
                        fontWeight: '300',
                        lineHeight: '1.5',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Powered by our deep finance expertise, data & AI capabilities, technology partnerships, and people strategists.
                    </p>
                </div>

                {/* Four Pillars Grid */}
                <div className="mobile-grid-1" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.5rem',
                    marginBottom: '3rem'
                }}>
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={index}
                                className="mobile-padding"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '1rem',
                                    padding: '2rem',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                }}
                            >
                                {/* Background Gradient Effect */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-50%',
                                    right: '-50%',
                                    width: '200%',
                                    height: '200%',
                                    background: pillar.gradient,
                                    opacity: 0.05,
                                    transform: 'rotate(-45deg)',
                                    transition: 'opacity 0.3s ease'
                                }} />

                                {/* Icon */}
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '0.75rem',
                                    background: pillar.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    <Icon style={{ width: '24px', height: '24px', color: 'white' }} />
                                </div>

                                {/* Pillar Number */}
                                <span className="mobile-text-sm" style={{
                                    fontSize: '0.75rem',
                                    color: '#64748b',
                                    fontWeight: '600',
                                    textTransform: 'uppercase' as const,
                                    letterSpacing: '0.1em',
                                    marginBottom: '0.25rem',
                                    display: 'block',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    Pillar {index + 1}
                                </span>

                                {/* Title */}
                                <h3 className="mobile-text-xl" style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '0.75rem',
                                    background: pillar.gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    position: 'relative',
                                    zIndex: 1,
                                    lineHeight: '1.2'
                                }}>
                                    {pillar.title}
                                </h3>

                                {/* Description */}
                                <p className="mobile-text-base" style={{
                                    color: '#94a3b8',
                                    fontSize: '0.875rem',
                                    lineHeight: '1.5',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    {pillar.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Next Step Button */}
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <button
                        onClick={() => scrollToSection('step-1')}
                        style={{
                            background: 'rgba(148, 163, 184, 0.1)',
                            border: '1px solid rgba(148, 163, 184, 0.2)',
                            borderRadius: '0.5rem',
                            padding: '0.75rem 2rem',
                            color: '#94a3b8',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(148, 163, 184, 0.15)';
                            e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.3)';
                            e.currentTarget.style.color = '#cbd5e1';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(148, 163, 184, 0.1)';
                            e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)';
                            e.currentTarget.style.color = '#94a3b8';
                        }}
                    >
                        Let's Get Started!
                        <ChevronDown style={{ width: '1rem', height: '1rem' }} />
                    </button>
                </div>
            </div>
        </section>
    );
} 