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
import { STATS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
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
      <section className="mobile-padding-section" style={{
        background: '#0a0a0a',
        padding: '8rem 2rem 6rem 2rem',
        textAlign: 'center' as const,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="mobile-text-4xl" style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            lineHeight: '1.1'
          }}>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Experience the AI-Powered
            </span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Future of Finance
            </span>
          </h1>

          <p className="mobile-text-xl" style={{
            fontSize: '1.75rem',
            color: '#cbd5e1',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Reimagine how your finance team works to unlock business value
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '6rem',
            flexWrap: 'wrap' as const
          }}>
            <button
              onClick={() => scrollToSection('finance-reinvention')}
              style={{
                padding: '1.25rem 2.5rem',
                fontSize: '1.125rem',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)';
              }}
            >
              Begin Your Journey
            </button>
          </div>

          {/* Stats Grid */}
          <div className="mobile-gap-2" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {Object.entries({
              planningTimeReduction: { main: 'Less Manual Work', sub: '(automate the mundane)' },
              forecastAccuracy: { main: 'Real-Time Intelligence', sub: '(always-on insights)' },
              insightSpeed: { main: 'Faster Decision Making', sub: '(minutes not weeks)' },
              roi: { main: 'Finance Team Ranking', sub: '(in your industry)' }
            }).map(([key, labelData]) => (
              <div key={key} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  {STATS[key as keyof typeof STATS]}
                </div>
                <div>
                  <div style={{ color: '#e2e8f0', marginBottom: '0.25rem' }}>
                    {labelData.main}
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.875rem' }}>
                    {labelData.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
