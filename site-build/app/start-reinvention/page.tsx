'use client';

import CreateUrgency from '@/components/home/CreateUrgency';
import CurrentFutureState from '@/components/home/CurrentFutureState';
import FinanceReinvention from '@/components/home/FinanceReinvention';
import FunctionGrid from '@/components/home/FunctionGrid';
import HowSection from '@/components/home/HowSection';
import NextSteps from '@/components/home/NextSteps';
import PillarsOfSuccess from '@/components/home/PillarsOfSuccess';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function StartReinvention() {
    const [selectedFunction, setSelectedFunction] = useState('fpa');

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // For a presentation-like experience, we want to show the full section
            // accounting for the navigation bar
            const navHeight = 80;
            const viewportHeight = window.innerHeight;
            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top + window.pageYOffset;

            // If the section is taller than viewport, just offset by nav height
            // Otherwise, center it in the available space
            let offsetPosition = elementTop - navHeight;

            // Add additional offset to show more of the section content
            // and ensure bottom buttons are visible
            offsetPosition += 100;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div style={{ background: '#0a0a0a', color: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            <style jsx global>{`
        @media (max-width: 768px) {
          .mobile-text-4xl { font-size: 2.5rem !important; }
          .mobile-text-3xl { font-size: 2rem !important; }
          .mobile-text-2xl { font-size: 1.5rem !important; }
          .mobile-text-xl { font-size: 1.25rem !important; }
          .mobile-text-lg { font-size: 1.125rem !important; }
          .mobile-text-base { font-size: 1rem !important; }
          .mobile-text-sm { font-size: 0.875rem !important; }
          .mobile-padding { padding: 1rem !important; }
          .mobile-padding-section { padding: 3rem 1rem !important; }
          .mobile-grid-1 { grid-template-columns: 1fr !important; }
          .mobile-hidden { display: none !important; }
          .mobile-stack { flex-direction: column !important; }
          .mobile-gap-2 { gap: 0.5rem !important; }
          .mobile-mb-4 { margin-bottom: 1rem !important; }
        }
      `}</style>
            <Navigation />

            {/* Hero Section */}
            <section style={{
                paddingTop: '6rem',
                paddingBottom: '3rem',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{
                    textAlign: 'center',
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 1rem'
                }}>
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1'
                    }}>
                        Start Your{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Reinvention
                        </span>
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: '#94a3b8',
                        marginBottom: '3rem',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        Transform your finance function step by step with AI-powered innovation
                    </p>
                </div>
            </section>

            {/* Finance Reinvention Section */}
            <div id="finance-reinvention">
                <FinanceReinvention />
            </div>

            {/* Step 1: Process Prioritization */}
            <section id="step-1" style={{
                minHeight: '100vh',
                padding: '4rem 1rem',
                display: 'flex',
                flexDirection: 'column' as const,
                justifyContent: 'center',
                background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            fontSize: '0.875rem',
                            color: '#60a5fa',
                            fontWeight: '600',
                            textTransform: 'uppercase' as const,
                            letterSpacing: '0.1em',
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            STEP 1: PROCESS PRIORITIZATION
                        </span>
                        <h2 style={{
                            fontSize: '3rem',
                            marginBottom: '1rem',
                            color: '#ffffff',
                            fontWeight: 'bold',
                            letterSpacing: '-0.02em'
                        }}>
                            What process should you prioritize first?
                        </h2>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#94a3b8',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            Select the function with the highest pain points and ROI potential
                        </p>
                    </div>

                    <FunctionGrid onFunctionSelect={setSelectedFunction} selectedFunction={selectedFunction} />

                    {/* Next Step Button */}
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <button
                            onClick={() => scrollToSection('step-2')}
                            style={{
                                background: 'rgba(148, 163, 184, 0.05)',
                                border: '1px solid rgba(148, 163, 184, 0.2)',
                                borderRadius: '0.5rem',
                                padding: '0.75rem 2rem',
                                color: '#94a3b8',
                                fontSize: '1rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(148, 163, 184, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.3)';
                                e.currentTarget.style.color = '#cbd5e1';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(148, 163, 184, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)';
                                e.currentTarget.style.color = '#94a3b8';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            See the Transformation
                            <ChevronDown style={{ width: '1.25rem', height: '1.25rem' }} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Step 2: Current vs Future State */}
            <CurrentFutureState selectedFunction={selectedFunction} />

            {/* Step 3: Create Urgency */}
            <CreateUrgency selectedFunction={selectedFunction} />

            {/* Step 4: See the Future */}
            <HowSection selectedFunction={selectedFunction} />

            {/* Step 5: The Pillars for Success */}
            <PillarsOfSuccess selectedFunction={selectedFunction} />

            {/* Step 6: Let's Get Started */}
            <NextSteps selectedFunction={selectedFunction} />

            <Footer />
        </div>
    );
}