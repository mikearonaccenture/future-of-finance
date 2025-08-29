'use client';

import { ComprehensiveAIAgents, getAgentsForTower as getComprehensiveAgentsForTower } from '@/ai-agents-expanded';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import SEO from '@/components/SEO';
import { STATS } from '@/lib/constants';
import { getActivitiesForPlatform, getAgentsForWorkflow, getWorkflowsForActivity, PLATFORMS } from '@/lib/finance-ecosystem-data';
import { MASTER_FINANCE_TAXONOMY } from '@/lib/finance-taxonomy-master';
import { ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Prototype {
  name: string;
  status: 'live' | 'coming-soon';
  link?: string;
}

interface Tower {
  name: string;
  gradient: string;
  prototypes: Prototype[];
}

const financeTowers: Tower[] = [
  {
    name: 'Procure to Pay',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    prototypes: [
      { name: 'Intelligent Invoice Processing Platform', status: 'coming-soon' },
      { name: 'Supplier Collaboration Platform', status: 'coming-soon' },
      { name: 'Employee Experience Platform', status: 'coming-soon' }
    ]
  },
  {
    name: 'Order to Cash',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    prototypes: [
      { name: 'Intelligent Receivables Platform', status: 'coming-soon' },
      { name: 'Customer Experience Portal', status: 'coming-soon' }
    ]
  },
  {
    name: 'Cost Accounting',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    prototypes: [
      { name: 'Dynamic Cost Engine', status: 'coming-soon' }
    ]
  },
  {
    name: 'Controllership',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    prototypes: [
      { name: 'Continuous Close Platform', status: 'coming-soon' },
      { name: 'Control & Compliance Suite', status: 'coming-soon' },
      { name: 'Regulatory Intelligence Platform', status: 'coming-soon' },
      { name: 'Statutory Reporting Hub', status: 'coming-soon' }
    ]
  },
  {
    name: 'Corporate Finance',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    prototypes: [
      { name: 'Tax Intelligence Platform', status: 'coming-soon' },
      { name: 'Treasury Command Center', status: 'coming-soon' },
      { name: 'Risk & Analytics Suite', status: 'coming-soon' }
    ]
  },
  {
    name: 'FP&A',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    prototypes: [
      { name: 'Connected Enterprise Planning Platform', status: 'live', link: '/functions/fpa/forecasting' },
      { name: 'Management Reporting Platform', status: 'live', link: '/functions/fpa/management-reporting' }
    ]
  },
  {
    name: 'Investor Relations',
    gradient: 'linear-gradient(135deg, #764ba2 0%, #f953c6 100%)',
    prototypes: [
      { name: 'Investor Intelligence Platform', status: 'coming-soon' },
      { name: 'Market Intelligence Suite', status: 'coming-soon' }
    ]
  }
];

export default function Home() {
  const router = useRouter();
  const [selectedTower, setSelectedTower] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  // Map functional towers to agent categories
  const towerToCategory: { [key: string]: string } = {
    'Procure to Pay': 'Procure to Pay',
    'Order to Cash': 'Order to Cash',
    'Cost Accounting': 'Product Costing',
    'Controllership': 'Record to Report',
    'Corporate Finance': 'Corporate Finance',
    'FP&A': 'Plan to Perform',
    'Investor Relations': 'Investor Relations'
  };

  // Get agents for a specific tower
  const getAgentsForTower = (towerName: string) => {
    return getComprehensiveAgentsForTower(towerName);
  };

  // Calculate live counts
  const liveCount = financeTowers.reduce((count, tower) =>
    count + tower.prototypes.filter(p => p.status === 'live').length, 0
  );

  return (
    <>
      <SEO
        title="Future of Finance - AI-Powered Finance Transformation"
        description="Experience the AI-powered future of finance. Transform your finance function with intelligent platforms that automate, analyze, and accelerate business value."
      />
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
              marginBottom: '2rem',
              maxWidth: '800px',
              margin: '0 auto 2rem auto',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              Reimagine how your finance team works to unlock business value
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '3rem',
              flexWrap: 'wrap' as const
            }}>
              <button
                onClick={() => {
                  const element = document.getElementById('finance-activities');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
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
                See the Future
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

        {/* Finance Activities Section */}
        <section id="finance-activities" style={{
          padding: '8rem 1rem',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)'
        }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              Work Done Today, Done Tomorrow
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              63 core business activities across the finance function - today, still performed tomorrow
            </p>

            {/* Finance Activities Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(7, 1fr)`,
              gap: '0.75rem',
              overflowX: 'auto'
            }}>
              {MASTER_FINANCE_TAXONOMY.map((area) => {
                // Define gradients for each area
                const gradients: { [key: string]: string } = {
                  'procure-to-pay': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  'order-to-cash': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  'cost-accounting': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  'controllership': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  'corporate-finance': 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                  'fpa': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  'investor-relations': 'linear-gradient(135deg, #764ba2 0%, #f953c6 100%)'
                };

                const borderColors: { [key: string]: string } = {
                  'procure-to-pay': 'rgba(102, 126, 234, 0.3)',
                  'order-to-cash': 'rgba(240, 147, 251, 0.3)',
                  'cost-accounting': 'rgba(79, 172, 254, 0.3)',
                  'controllership': 'rgba(250, 112, 154, 0.3)',
                  'corporate-finance': 'rgba(48, 207, 208, 0.3)',
                  'fpa': 'rgba(59, 130, 246, 0.3)',
                  'investor-relations': 'rgba(118, 75, 162, 0.3)'
                };

                const gradient = gradients[area.id];
                const borderColor = borderColors[area.id];

                // Determine if this area has many activities
                const hasMany = area.totalActivities > 10;

                return (
                  <div key={area.id} style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    minHeight: '550px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <h3 style={{
                      fontSize: '0.9375rem',
                      fontWeight: '600',
                      marginBottom: '0.75rem',
                      background: gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {area.name}
                    </h3>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      marginBottom: '0.5rem'
                    }}>
                      {area.totalActivities} Activities
                    </div>

                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      flex: 1,
                      overflowY: 'auto'
                    }}>
                      {/* For areas with subcategories, show activities under each subcategory */}
                      {area.subCategories ? (
                        area.subCategories.map((subCat) => (
                          <div key={subCat.id} style={{ marginBottom: '0.75rem' }}>
                            <div style={{
                              fontSize: '0.6875rem',
                              color: '#60a5fa',
                              fontWeight: '600',
                              marginBottom: '0.375rem',
                              textTransform: 'uppercase',
                              letterSpacing: '0.025em'
                            }}>
                              {subCat.name}
                            </div>
                            {subCat.activities.map((activity, idx) => (
                              <li key={activity.id} style={{
                                fontSize: '0.6875rem',
                                color: '#cbd5e1',
                                marginBottom: '0.375rem',
                                paddingLeft: '0.75rem',
                                borderLeft: `2px solid ${borderColor}`,
                                lineHeight: '1.3'
                              }}>
                                {activity.name}
                              </li>
                            ))}
                          </div>
                        ))
                      ) : (
                        /* For areas without subcategories, show activities directly */
                        area.activities && area.activities.map((activity, idx) => (
                          <li key={activity.id} style={{
                            fontSize: '0.6875rem',
                            color: '#cbd5e1',
                            marginBottom: '0.375rem',
                            paddingLeft: '0.5rem',
                            borderLeft: `2px solid ${borderColor}`,
                            lineHeight: '1.3'
                          }}>
                            {activity.name}
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section style={{
          padding: '6rem 1rem',
          background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Streamlined Through Human+ AI Platforms
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              17 platforms that drive workflow consolidation, simplification, and standardization across your finance organization
            </p>

            {/* The Power of Platform Consolidation */}
            <div style={{
              textAlign: 'center',
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              marginBottom: '2rem',
              maxWidth: '800px',
              margin: '0 auto 2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#60a5fa' }}>
                The Power of Platform Consolidation
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24' }}>63</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Business Activities</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#22c55e' }}>17</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Unified Platforms</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>300+</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>AI Agents</div>
                </div>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${financeTowers.length}, 1fr)`,
              gap: '0.75rem',
              overflowX: 'auto'
            }}>
              {financeTowers.map((tower, index) => {
                const liveCount = tower.prototypes.filter(p => p.status === 'live').length;
                return (
                  <div
                    key={index}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0.75rem',
                      padding: '1.25rem',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '320px',
                      display: 'flex',
                      flexDirection: 'column'
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
                      background: tower.gradient,
                      opacity: 0.05,
                      transform: 'rotate(-45deg)',
                      transition: 'opacity 0.3s ease'
                    }} />

                    {/* Tower Header */}
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '1.25rem',
                      marginTop: '2rem',
                      background: tower.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      position: 'relative',
                      zIndex: 1,
                      lineHeight: '1.2'
                    }}>
                      {tower.name}
                    </h3>

                    {/* Prototypes List */}
                    <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                      {tower.prototypes.map((prototype, protoIndex) => (
                        <div
                          key={protoIndex}
                          style={{
                            marginBottom: '0.625rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.125rem'
                          }}
                        >
                          <span style={{
                            color: prototype.status === 'live' ? '#60a5fa' : '#64748b',
                            fontSize: '0.75rem',
                            display: 'block',
                            lineHeight: '1.3'
                          }}>
                            {prototype.name}
                          </span>
                          {prototype.status === 'live' ? (
                            <Link
                              href={prototype.link!}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                color: '#60a5fa',
                                fontSize: '0.625rem',
                                textDecoration: 'none',
                                fontWeight: '500',
                                transition: 'all 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#93bbfc';
                                e.currentTarget.style.transform = 'translateX(2px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#60a5fa';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              View Demo
                              <ChevronRight style={{ width: '0.5rem', height: '0.5rem' }} />
                            </Link>
                          ) : (
                            <span style={{
                              color: '#475569',
                              fontSize: '0.625rem',
                              fontStyle: 'italic'
                            }}>
                              Coming Soon
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Status Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      background: liveCount > 0
                        ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                        : 'rgba(100, 116, 139, 0.1)',
                      border: liveCount > 0
                        ? '1px solid rgba(16, 185, 129, 0.4)'
                        : '1px solid rgba(100, 116, 139, 0.3)',
                      borderRadius: '2rem',
                      padding: liveCount > 0 ? '0.25rem 0.625rem' : '0.125rem 0.375rem',
                      fontSize: liveCount > 0 ? '0.625rem' : '0.5rem',
                      fontWeight: liveCount > 0 ? '700' : '600',
                      color: liveCount > 0 ? '#ffffff' : '#64748b',
                      boxShadow: liveCount > 0 ? '0 2px 8px rgba(16, 185, 129, 0.3)' : 'none'
                    }}>
                      {liveCount > 0
                        ? `${liveCount} LIVE`
                        : 'Coming Soon'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reimagined Workflows Section */}
        <section style={{
          padding: '6rem 1rem',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Condensed Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                Reimagined{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Workflows
                </span>
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#94a3b8',
                marginBottom: '2rem',
                maxWidth: '800px',
                margin: '0 auto 2rem auto'
              }}>
                From today's manual reality to tomorrow's automated value creation
              </p>

              {/* CTA Button */}
              <Link href="/workflows">
                <button style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '1.5rem',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.3)';
                  }}
                >
                  See New Ways of Working
                  <ChevronRight size={20} />
                </button>
              </Link>
            </div>

            {/* Compact Horizontal Compression Visualization */}
            <div style={{
              maxWidth: '1400px',
              margin: '0 auto 3rem',
              padding: '2rem 1rem',
              background: 'rgba(139, 92, 246, 0.03)',
              borderRadius: '1rem',
              border: '1px solid rgba(139, 92, 246, 0.1)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr 1fr',
                gap: '2rem',
                alignItems: 'center',
                minHeight: '400px'
              }}>
                {/* Today's Reality - Left Side */}
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1.5rem',
                    color: '#ef4444'
                  }}>
                    Today's Reality
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#f87171', marginBottom: '0.25rem' }}>Manual handoffs</div>
                        <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Endless email chains and spreadsheet versions</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#f87171', marginBottom: '0.25rem' }}>Siloed processes</div>
                        <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Teams working in isolation with limited visibility</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#f87171', marginBottom: '0.25rem' }}>Reactive firefighting</div>
                        <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Always playing catch-up with urgent requests</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Compression Visualization */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  position: 'relative',
                  minHeight: '450px',
                  padding: '2rem 0'
                }}>
                  <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-end' }}>
                    {/* Today's Finance Stack - Left Side */}
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.75rem' }}>
                        <div style={{
                          textAlign: 'right',
                          fontSize: '0.75rem',
                          color: '#94a3b8',
                          height: '376px',
                          display: 'flex',
                          flexDirection: 'column',
                          paddingTop: '20px'
                        }}>
                          <div style={{ height: '180px', display: 'flex', alignItems: 'center' }}>
                            <div>Transactional<br />Activities<br />(80% effort)</div>
                          </div>
                          <div style={{ height: '118px', display: 'flex', alignItems: 'center' }}>
                            <div>Manual<br />Processes</div>
                          </div>
                          <div style={{ height: '58px', display: 'flex', alignItems: 'center' }}>
                            <div>Strategic<br />Finance<br />(Limited)</div>
                          </div>
                        </div>
                        <div>
                          <div style={{
                            width: '60px',
                            height: '200px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '0.5rem',
                            position: 'relative',
                            overflow: 'hidden'
                          }}>
                            <div style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(180deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)'
                            }} />
                          </div>
                          <div style={{
                            width: '60px',
                            height: '120px',
                            background: 'rgba(203, 213, 225, 0.95)',
                            border: '2px solid rgba(203, 213, 225, 0.3)',
                            borderRadius: '0.5rem',
                            marginTop: '-2px'
                          }} />
                          <div style={{
                            width: '60px',
                            height: '60px',
                            background: 'rgba(139, 92, 246, 0.95)',
                            border: '2px solid rgba(139, 92, 246, 0.3)',
                            borderRadius: '0.5rem',
                            marginTop: '-2px'
                          }} />
                        </div>
                      </div>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#94a3b8',
                        marginTop: '1.5rem'
                      }}>
                        Traditional Finance
                      </h4>
                    </div>

                    {/* Compression Arrow - positioned to start from top of Traditional stack */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginBottom: '122px' // Adjusted to align top of arrow with top of bars (moved up 8px more)
                    }}>
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: '#3b82f6',
                        marginBottom: '0.5rem',
                        textAlign: 'center',
                        marginTop: '24px' // Adjusted to better align with Traditional Finance bar
                      }}>
                        AI + Automation
                      </div>
                      <svg width="40" height="266" viewBox="0 0 40 266">
                        <defs>
                          <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
                            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 3 0 L 37 0 L 37 226 L 40 226 L 20 266 L 0 226 L 3 226 Z"
                          fill="url(#arrowGrad)"
                          stroke="rgba(139, 92, 246, 0.3)"
                          strokeWidth="1"
                        />
                        <line x1="10" y1="20" x2="30" y2="20" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.6">
                          <animate attributeName="y1" values="20;246;20" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="y2" values="20;246;20" dur="3s" repeatCount="indefinite" />
                        </line>
                        <line x1="10" y1="130" x2="30" y2="130" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.6">
                          <animate attributeName="y1" values="130;256;130" dur="3s" begin="0.5s" repeatCount="indefinite" />
                          <animate attributeName="y2" values="130;256;130" dur="3s" begin="0.5s" repeatCount="indefinite" />
                        </line>
                      </svg>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#8b5cf6',
                        marginTop: '0.5rem',
                        fontWeight: '600',
                        letterSpacing: '0.02em',
                        textAlign: 'center'
                      }}>
                        COMPRESS
                      </div>
                    </div>

                    {/* Tomorrow's Stack - Modern Finance */}
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.75rem' }}>
                        <div>
                          <div style={{
                            width: '60px',
                            height: '140px',
                            background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                            border: '2px solid rgba(236, 72, 153, 0.3)',
                            borderRadius: '0.5rem',
                            position: 'relative',
                            boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)'
                          }}>
                            <div style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
                            }} />
                          </div>
                          <div style={{
                            width: '60px',
                            height: '40px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            border: '2px solid rgba(34, 197, 94, 0.3)',
                            borderRadius: '0.5rem',
                            marginTop: '-2px'
                          }} />
                          <div style={{
                            width: '60px',
                            height: '30px',
                            background: 'rgba(203, 213, 225, 0.95)',
                            border: '2px solid rgba(59, 130, 246, 0.3)',
                            borderRadius: '0.5rem',
                            marginTop: '-2px'
                          }} />
                          <div style={{
                            width: '60px',
                            height: '30px',
                            background: 'rgba(139, 92, 246, 0.95)',
                            border: '2px solid rgba(139, 92, 246, 0.3)',
                            borderRadius: '0.5rem',
                            marginTop: '-2px'
                          }} />
                        </div>
                        <div style={{
                          textAlign: 'left',
                          fontSize: '0.75rem',
                          color: '#94a3b8',
                          height: '238px',
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                          <div style={{ height: '138px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ color: '#ec4899', fontWeight: '600' }}>Strategic<br />Insights<br />(New Capacity)</div>
                          </div>
                          <div style={{ height: '38px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ color: '#22c55e' }}>Automated<br />(95%)</div>
                          </div>
                          <div style={{ height: '28px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ color: '#3b82f6' }}>Real-time<br />Reporting</div>
                          </div>
                          <div style={{ height: '28px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ color: '#8b5cf6' }}>Human+AI</div>
                          </div>
                        </div>
                      </div>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginTop: '1.5rem'
                      }}>
                        Modern Finance
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Tomorrow's Efficiency - Right Side */}
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Tomorrow's Efficiency
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: '#22c55e', fontSize: '1.25rem' }}>✓</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#4ade80', marginBottom: '0.25rem' }}>80% reduction</div>
                        <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>In time spent on routine tasks</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: '#22c55e', fontSize: '1.25rem' }}>✓</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#4ade80', marginBottom: '0.25rem' }}>10x increase</div>
                        <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>In strategic analysis capacity</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: '#22c55e', fontSize: '1.25rem' }}>✓</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#4ade80', marginBottom: '0.25rem' }}>100% real-time</div>
                        <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Insights and decision support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            {/* Human Impact Statement */}
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>

            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section style={{
          background: '#0a0a0a',
          padding: '3rem 1rem'
        }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Powered by{' '}
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                AI Agents
              </span>
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              Intelligent assistants that think, learn, and evolve with your business
            </p>



            {/* Agent Status Legend */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginBottom: '2rem',
              marginTop: '2rem',
              fontSize: '0.875rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '1rem',
                  height: '1rem',
                  background: 'rgba(34, 197, 94, 0.2)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '0.25rem'
                }} />
                <span style={{ color: '#94a3b8' }}>Active</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '1rem',
                  height: '1rem',
                  background: 'rgba(251, 191, 36, 0.2)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  borderRadius: '0.25rem'
                }} />
                <span style={{ color: '#94a3b8' }}>In Development</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '1rem',
                  height: '1rem',
                  background: 'rgba(107, 114, 128, 0.2)',
                  border: '1px solid rgba(107, 114, 128, 0.3)',
                  borderRadius: '0.25rem'
                }} />
                <span style={{ color: '#94a3b8' }}>Planned</span>
              </div>
            </div>

            {/* AI Agents Preview Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1rem' }}>
              {financeTowers.map((tower, towerIdx) => {
                const agents = getComprehensiveAgentsForTower(tower.name);
                // Deduplicate agents by creating a unique key for each
                const uniqueAgents = agents.reduce((acc, agent, index) => {
                  const key = `${agent.id}-${index}`;
                  if (!acc.some(a => a.id === agent.id && a.status === agent.status)) {
                    acc.push({ ...agent, uniqueKey: key });
                  }
                  return acc;
                }, [] as any[]);
                const displayAgents = uniqueAgents.slice(0, 12); // Show up to 12 agents (4 rows of 3)

                return (
                  <div
                    key={`tower-${towerIdx}-${tower.name.replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedTower(tower.name)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0.75rem',
                      padding: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                  >
                    <h3 style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      marginBottom: '0.75rem',
                      background: tower.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {tower.name}
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '0.25rem',
                      marginBottom: '0.5rem'
                    }}>
                      {displayAgents.map((agent, idx) => (
                        <div
                          key={`agent-${tower.name.replace(/\s+/g, '-')}-${agent.id}-${idx}-${agent.status || 'unknown'}`}
                          style={{
                            background: agent.status === 'active'
                              ? 'rgba(34, 197, 94, 0.2)'
                              : agent.status === 'in-development'
                                ? 'rgba(251, 191, 36, 0.2)'
                                : 'rgba(107, 114, 128, 0.2)',
                            border: `1px solid ${agent.status === 'active'
                              ? 'rgba(34, 197, 94, 0.3)'
                              : agent.status === 'in-development'
                                ? 'rgba(251, 191, 36, 0.3)'
                                : 'rgba(107, 114, 128, 0.3)'
                              }`,
                            borderRadius: '0.375rem',
                            padding: '0.125rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <span style={{
                            fontSize: '0.625rem',
                            fontWeight: '600',
                            color: agent.status === 'active'
                              ? '#22c55e'
                              : agent.status === 'in-development'
                                ? '#fbbf24'
                                : '#6b7280'
                          }}>
                            {agent.id}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#64748b',
                      textAlign: 'center'
                    }}>
                      {agents.length} agents
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Value Creation Section */}
        <section style={{
          background: '#000000',
          padding: '4rem 1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                lineHeight: '1.2'
              }}>
                Creating Significant{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Value
                </span>
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#94a3b8',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Transforming finance operations and accelerating business growth through AI-powered capabilities
              </p>
            </div>

            {/* Value Cards Section */}
            <div style={{
              marginBottom: '3rem'
            }}>
              {/* Section Headers */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#60a5fa',
                  textAlign: 'center'
                }}>
                  Optimize Operations
                </h4>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#a78bfa',
                  textAlign: 'center'
                }}>
                  Accelerate Growth
                </h4>
              </div>

              {/* All 6 Cards in One Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '1rem'
              }}>
                {/* Cost Efficiency Card */}
                <div style={{
                  background: 'rgba(59, 130, 246, 0.05)',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '1rem',
                  padding: '1rem',
                  transition: 'all 0.3s ease'
                }}>
                  {/* Icon and Title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '0.5rem',
                      background: 'rgba(59, 130, 246, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: 0
                    }}>
                      Cost Efficiency
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#cbd5e1',
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    Transform operational economics through AI-powered automation and intelligent resource optimization.
                  </p>

                  {/* Key Metrics */}
                  <div style={{
                    borderTop: '1px solid rgba(59, 130, 246, 0.2)',
                    paddingTop: '1rem'
                  }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: '800', fontSize: '1.5rem' }}>30-50%</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>cost reduction</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: '#cbd5e1' }}>
                      <div>• 80% faster</div>
                      <div>• Zero redundancy</div>
                    </div>
                  </div>
                </div>

                {/* Operational Excellence Card */}
                <div style={{
                  background: 'rgba(139, 92, 246, 0.05)',
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '1rem',
                  padding: '1rem',
                  transition: 'all 0.3s ease'
                }}>
                  {/* Icon and Title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '0.5rem',
                      background: 'rgba(139, 92, 246, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17M2 12L12 17L22 12" />
                      </svg>
                    </div>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: 0
                    }}>
                      Operational Excellence
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#cbd5e1',
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    Bulletproof business continuity with self-healing systems and predictive risk mitigation.
                  </p>

                  {/* Key Metrics */}
                  <div style={{
                    borderTop: '1px solid rgba(139, 92, 246, 0.2)',
                    paddingTop: '1rem'
                  }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: '800', fontSize: '1.5rem' }}>99.9%</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>uptime</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: '#cbd5e1' }}>
                      <div>• 75% fewer incidents</div>
                      <div>• $10M+ protected</div>
                    </div>
                  </div>
                </div>

                {/* Future-Proof Resilience Card */}
                <div style={{
                  background: 'rgba(34, 197, 94, 0.05)',
                  border: '2px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '1rem',
                  padding: '1rem',
                  transition: 'all 0.3s ease'
                }}>
                  {/* Icon and Title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '0.5rem',
                      background: 'rgba(34, 197, 94, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: 0
                    }}>
                      Future-Proof Resilience
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#cbd5e1',
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    Navigate any disruption with climate-adaptive strategies and agnostic architecture.
                  </p>

                  {/* Key Metrics */}
                  <div style={{
                    borderTop: '1px solid rgba(34, 197, 94, 0.2)',
                    paddingTop: '1rem'
                  }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: '800', fontSize: '1.5rem' }}>90%</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>faster recovery</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: '#cbd5e1' }}>
                      <div>• 100% compliant</div>
                      <div>• 3x agility</div>
                    </div>
                  </div>
                </div>

                {/* Data Card */}
                <div style={{
                  background: 'rgba(236, 72, 153, 0.05)',
                  border: '2px solid rgba(236, 72, 153, 0.3)',
                  borderRadius: '1rem',
                  padding: '1rem',
                  transition: 'all 0.3s ease'
                }}>
                  {/* Icon and Title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '0.5rem',
                      background: 'rgba(236, 72, 153, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: 0
                    }}>
                      Data
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#cbd5e1',
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    Unified truth engine with real-time insights and AI-verified accuracy across the enterprise.
                  </p>

                  {/* Key Metrics */}
                  <div style={{
                    borderTop: '1px solid rgba(236, 72, 153, 0.2)',
                    paddingTop: '1rem'
                  }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: '800', fontSize: '1.5rem' }}>100%</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>data integrity</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: '#cbd5e1' }}>
                      <div>• 10x insights</div>
                      <div>• Zero compliance risk</div>
                    </div>
                  </div>
                </div>

                {/* Speed & Agility Card */}
                <div style={{
                  background: 'rgba(251, 191, 36, 0.05)',
                  border: '2px solid rgba(251, 191, 36, 0.3)',
                  borderRadius: '1rem',
                  padding: '1rem',
                  transition: 'all 0.3s ease'
                }}>
                  {/* Icon and Title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '0.5rem',
                      background: 'rgba(251, 191, 36, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: 0
                    }}>
                      Speed & Agility
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#cbd5e1',
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    Move at market speed with instant strategic pivots and real-time decision support.
                  </p>

                  {/* Key Metrics */}
                  <div style={{
                    borderTop: '1px solid rgba(251, 191, 36, 0.2)',
                    paddingTop: '1rem'
                  }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: '800', fontSize: '1.5rem' }}>5x</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>faster reporting</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: '#cbd5e1' }}>
                      <div>• 30-day M&A</div>
                      <div>• 24/7 response</div>
                    </div>
                  </div>
                </div>

                {/* Insights Card */}
                <div style={{
                  background: 'rgba(59, 130, 246, 0.05)',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '1rem',
                  padding: '1rem',
                  transition: 'all 0.3s ease'
                }}>
                  {/* Icon and Title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '0.5rem',
                      background: 'rgba(59, 130, 246, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35M11 5v6l4 2" />
                      </svg>
                    </div>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: 0
                    }}>
                      Insights
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#cbd5e1',
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    Turn data into dollars with predictive margin optimization and smart capital deployment.
                  </p>

                  {/* Key Metrics */}
                  <div style={{
                    borderTop: '1px solid rgba(59, 130, 246, 0.2)',
                    paddingTop: '1rem'
                  }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: '800', fontSize: '1.5rem' }}>15-20%</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>profit growth</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: '#cbd5e1' }}>
                      <div>• $50M+ revenue</div>
                      <div>• 2x cash velocity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Value Creation Opportunity Summary - Compact */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              borderRadius: '1rem',
              border: '2px solid rgba(139, 92, 246, 0.3)',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Total Value Creation Opportunity
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <div>
                  <div style={{
                    fontSize: '2.25rem',
                    fontWeight: '800',
                    color: '#10b981',
                    marginBottom: '0.25rem',
                    lineHeight: '1'
                  }}>
                    $100M+
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: '500'
                  }}>
                    Annual Value
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '2.25rem',
                    fontWeight: '800',
                    color: '#3b82f6',
                    marginBottom: '0.25rem',
                    lineHeight: '1'
                  }}>
                    24+ Months
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: '500'
                  }}>
                    To Transform
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '2.25rem',
                    fontWeight: '800',
                    color: '#fbbf24',
                    marginBottom: '0.25rem',
                    lineHeight: '1'
                  }}>
                    10x
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: '500'
                  }}>
                    Performance Gain
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tower Details Modal */}
        {
          selectedTower && (
            <div
              onClick={() => {
                setSelectedTower(null);
                setSelectedActivity(null);
              }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '2rem',
                backdropFilter: 'blur(4px)'
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: '#1a1a1a',
                  borderRadius: '1rem',
                  padding: '2rem',
                  maxWidth: '1200px',
                  width: '100%',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    background: financeTowers.find(t => t.name === selectedTower)?.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {selectedTower} Ecosystem
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedTower(null);
                      setSelectedActivity(null);
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '0.5rem',
                      padding: '0.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Get platforms for this tower */}
                {(() => {
                  const towerPlatforms = PLATFORMS.filter(p =>
                    p.functionalArea === selectedTower
                  );

                  return (
                    <div style={{ display: 'grid', gap: '2rem' }}>
                      {towerPlatforms.map(platform => {
                        // Get activities for this platform
                        const platformActivities = getActivitiesForPlatform(platform.id);

                        // Get all agents for this platform's activities
                        const allAgentIds = new Set<string>();
                        const activityAgentMap = new Map<string, Set<string>>();

                        platformActivities.forEach(activity => {
                          const activityAgentIds = new Set<string>();
                          const workflows = getWorkflowsForActivity(activity.id);
                          workflows.forEach(workflow => {
                            const workflowAgents = getAgentsForWorkflow(workflow.id || '');
                            workflowAgents.forEach(agentId => {
                              allAgentIds.add(agentId);
                              activityAgentIds.add(agentId);
                            });
                          });
                          activityAgentMap.set(activity.id, activityAgentIds);
                        });

                        // Get agent objects
                        const towerName = selectedTower.toLowerCase().replace(/\s+/g, '').replace('&', '');
                        let agents: any[] = [];

                        // If we have workflow-based agents, use those
                        if (allAgentIds.size > 0) {
                          agents = Array.from(allAgentIds).map(id => {
                            // Try to find in tower-specific agents
                            // Map tower names to property names
                            const towerMap: { [key: string]: string } = {
                              'procuretopay': 'procureToPay',
                              'ordertocash': 'orderToCash',
                              'costaccounting': 'costAccounting',
                              'controllership': 'recordToReport',
                              'corporatefinance': 'corporateFinance',
                              'fpa': 'fpAndA',
                              'investorrelations': 'investorRelations'
                            };

                            const propertyName = towerMap[towerName] || towerName;
                            let agent = ComprehensiveAIAgents[propertyName as keyof typeof ComprehensiveAIAgents]?.find((a: any) => a.id === id);
                            // If not found, try cross-functional
                            if (!agent) {
                              agent = ComprehensiveAIAgents.crossFunctionalAgents.find(a => a.id === id);
                            }
                            return agent;
                          }).filter(Boolean);
                        } else {
                          // If no workflow agents found, show all agents for this tower
                          agents = getComprehensiveAgentsForTower(selectedTower);
                        }

                        return (
                          <div key={platform.id} style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '0.75rem',
                            padding: '1.5rem'
                          }}>
                            <h4 style={{
                              fontSize: '1.25rem',
                              fontWeight: '600',
                              marginBottom: '0.5rem',
                              color: '#60a5fa'
                            }}>
                              {platform.name}
                            </h4>
                            <p style={{
                              color: '#94a3b8',
                              marginBottom: '1rem',
                              fontSize: '0.875rem'
                            }}>
                              {platform.description}
                            </p>

                            {/* Activities supported by this platform */}
                            <div style={{ marginBottom: '1rem' }}>
                              <h5 style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                marginBottom: '0.5rem',
                                color: '#e2e8f0'
                              }}>
                                Supported Activities:
                              </h5>
                              <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                              }}>
                                {platformActivities.map(activity => (
                                  <span
                                    key={activity.id}
                                    onClick={() => setSelectedActivity(
                                      selectedActivity === activity.id ? null : activity.id
                                    )}
                                    style={{
                                      background: selectedActivity === activity.id
                                        ? 'rgba(59, 130, 246, 0.3)'
                                        : 'rgba(59, 130, 246, 0.1)',
                                      border: selectedActivity === activity.id
                                        ? '2px solid rgba(59, 130, 246, 0.6)'
                                        : '1px solid rgba(59, 130, 246, 0.3)',
                                      borderRadius: '0.375rem',
                                      padding: '0.25rem 0.75rem',
                                      fontSize: '0.875rem',
                                      color: '#93c5fd',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease'
                                    }}
                                  >
                                    {activity.name}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Agents for this platform */}
                            {agents.length > 0 && (
                              <div>
                                <h5 style={{
                                  fontSize: '1rem',
                                  fontWeight: '600',
                                  marginBottom: '0.5rem',
                                  color: '#e2e8f0'
                                }}>
                                  Powered by {agents.length} AI Agents:
                                </h5>
                                <div style={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                                  gap: '0.375rem',
                                  maxHeight: '500px',
                                  overflowY: 'auto',
                                  padding: '0.5rem',
                                  background: 'rgba(0, 0, 0, 0.2)',
                                  borderRadius: '0.5rem'
                                }}>
                                  {agents.map((agent, agentIdx) => {
                                    const isHighlighted = selectedActivity &&
                                      activityAgentMap.get(selectedActivity)?.has(agent.id);

                                    return agent && (
                                      <div
                                        key={`${platform.id}-${agent.id}-${agentIdx}`}
                                        onClick={() => {
                                          setSelectedAgent(agent);
                                          setSelectedTower(null);
                                        }}
                                        style={{
                                          background: isHighlighted
                                            ? 'rgba(139, 92, 246, 0.3)'
                                            : 'rgba(139, 92, 246, 0.1)',
                                          border: isHighlighted
                                            ? '2px solid rgba(139, 92, 246, 0.6)'
                                            : '1px solid rgba(139, 92, 246, 0.3)',
                                          borderRadius: '0.375rem',
                                          padding: '0.5rem',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s ease',
                                          transform: isHighlighted ? 'scale(1.05)' : 'scale(1)'
                                        }}
                                      >
                                        <div style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'space-between',
                                          marginBottom: '0.125rem'
                                        }}>
                                          <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            color: isHighlighted ? '#c4b5fd' : '#a78bfa'
                                          }}>
                                            {agent.id}
                                          </span>
                                          <span style={{
                                            fontSize: '0.5rem',
                                            padding: '0.0625rem 0.25rem',
                                            borderRadius: '0.125rem',
                                            background: agent.status === 'active'
                                              ? 'rgba(34, 197, 94, 0.2)'
                                              : agent.status === 'in-development'
                                                ? 'rgba(251, 191, 36, 0.2)'
                                                : 'rgba(107, 114, 128, 0.2)',
                                            color: agent.status === 'active'
                                              ? '#22c55e'
                                              : agent.status === 'in-development'
                                                ? '#fbbf24'
                                                : '#6b7280'
                                          }}>
                                            {agent.status}
                                          </span>
                                        </div>
                                        <div style={{
                                          fontSize: '0.625rem',
                                          color: isHighlighted ? '#f3f4f6' : '#e2e8f0',
                                          lineHeight: '1.2'
                                        }}>
                                          {agent.name}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
            </div>
          )
        }

        {/* Agent Detail Popup */}
        {
          selectedAgent && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1001,
              padding: '2rem'
            }} onClick={() => setSelectedAgent(null)}>
              <div style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '1rem',
                padding: '3rem',
                maxWidth: '900px',
                width: '80vw',
                position: 'relative'
              }} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedAgent(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                  }}
                >
                  ×
                </button>

                {/* Agent Symbol */}
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: selectedAgent.status === 'active'
                    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                    : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  {selectedAgent.id}
                </div>

                {/* Agent Details */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  textAlign: 'center'
                }}>
                  {selectedAgent.fullName}
                </h3>

                <p style={{
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  {selectedAgent.description}
                </p>

                {/* Capabilities */}
                <div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '0.75rem'
                  }}>
                    Capabilities
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {selectedAgent.capabilities.map((capability: string, index: number) => (
                      <li key={index} style={{
                        fontSize: '0.875rem',
                        color: '#cbd5e1',
                        marginBottom: '0.5rem',
                        paddingLeft: '1.5rem',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#60a5fa'
                        }}>•</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status Badge */}
                <div style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '2rem',
                    background: selectedAgent.status === 'active'
                      ? 'rgba(16, 185, 129, 0.1)'
                      : 'rgba(245, 158, 11, 0.1)',
                    border: `1px solid ${selectedAgent.status === 'active' ? '#10b981' : '#f59e0b'}`,
                    color: selectedAgent.status === 'active' ? '#10b981' : '#f59e0b',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {selectedAgent.status === 'active' ? 'Ready for Deployment' : 'In Development'}
                  </span>
                </div>
              </div>
            </div>
          )
        }

        {/* Start Your Reinvention CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 100%)',
          padding: '6rem 1rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Ready to{' '}
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Transform Your Finance Function?
              </span>
            </h2>
            <p style={{
              fontSize: '1.5rem',
              color: '#94a3b8',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Join leading organizations who are already reimagining their finance operations
              with AI-powered platforms and intelligent workflows.
            </p>
            <Link href="/start-reinvention">
              <button style={{
                padding: '1.5rem 3rem',
                fontSize: '1.25rem',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)';
                }}
              >
                Start Your Reinvention
                <ChevronRight size={24} />
              </button>
            </Link>
          </div>
        </section>

        <Footer />
      </div >
    </>
  );
}
