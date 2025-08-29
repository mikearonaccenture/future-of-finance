'use client';

import { ArrowRight, CheckCircle, Lightbulb, Play, Rocket, Target, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';

interface NextStepsProps {
    selectedFunction: string;
}

const JOURNEY_CONTENT = {
    fpa: {
        functionName: "FP&A",
        phase1: {
            title: "Phase 1: Quick Wins",
            items: [
                "Deploy forecasting AI for top revenue drivers",
                "Automate monthly variance analysis",
                "Reduce reporting effort by 50%",
                "Deliver first AI-generated insights"
            ]
        },
        phase2: {
            title: "Phase 2: Scale Success",
            items: [
                "Full P&L AI forecasting activated",
                "Scenario modeling at scale",
                "95% forecast accuracy achieved",
                "Business partners self-serving insights"
            ]
        },
        phase3: {
            title: "Phase 3: Full Transformation",
            items: [
                "Predictive FP&A fully operational",
                "Real-time performance monitoring",
                "Strategic advisor role achieved",
                "Continuous planning culture"
            ]
        }
    },
    procureToPay: {
        functionName: "Procure to Pay",
        phase1: {
            title: "Phase 1: Quick Wins",
            items: [
                "AI invoice processing for top vendors",
                "Duplicate payment prevention activated",
                "70% touchless processing achieved",
                "Immediate savings captured"
            ]
        },
        phase2: {
            title: "Phase 2: Scale Success",
            items: [
                "95% invoice automation achieved",
                "Dynamic discount optimization live",
                "Supplier portal launched",
                "Working capital improvement visible"
            ]
        },
        phase3: {
            title: "Phase 3: Full Transformation",
            items: [
                "99% straight-through processing",
                "Predictive cash flow optimization",
                "Strategic sourcing AI deployed",
                "Best-in-class P2P metrics"
            ]
        }
    },
    orderToCash: {
        functionName: "Order to Cash",
        phase1: {
            title: "Phase 1: Quick Wins",
            items: [
                "AI credit decisions automated",
                "Smart collections for key accounts",
                "DSO reduction initiated",
                "Customer portal MVP launched"
            ]
        },
        phase2: {
            title: "Phase 2: Scale Success",
            items: [
                "Predictive collections portfolio-wide",
                "AI-powered dispute resolution",
                "95% cash application automated",
                "Revenue leakage eliminated"
            ]
        },
        phase3: {
            title: "Phase 3: Full Transformation",
            items: [
                "Fully AI-optimized O2C process",
                "Complete customer self-service",
                "Industry-leading DSO achieved",
                "Revenue maximization engine live"
            ]
        }
    },
    costAccounting: {
        functionName: "Cost Accounting",
        phase1: {
            title: "Phase 1: Quick Wins",
            items: [
                "Real-time costs for key products",
                "AI variance analysis activated",
                "Profitability visibility improved",
                "Initial pricing optimizations"
            ]
        },
        phase2: {
            title: "Phase 2: Scale Success",
            items: [
                "Dynamic costing across portfolio",
                "Activity-based costing with AI",
                "Margin optimization active",
                "Predictive cost modeling live"
            ]
        },
        phase3: {
            title: "Phase 3: Full Transformation",
            items: [
                "Real-time cost intelligence",
                "AI-driven pricing decisions",
                "Profitability maximized",
                "Sustainable cost advantage"
            ]
        }
    },
    controllership: {
        functionName: "Controllership",
        phase1: {
            title: "Phase 1: Quick Wins",
            items: [
                "Auto-reconciliation for key accounts",
                "AI journal entry validation",
                "Close cycle reduction started",
                "Anomaly detection activated"
            ]
        },
        phase2: {
            title: "Phase 2: Scale Success",
            items: [
                "Accelerated close achieved",
                "Continuous controls monitoring",
                "AI-powered SOX testing",
                "Real-time consolidation"
            ]
        },
        phase3: {
            title: "Phase 3: Full Transformation",
            items: [
                "Continuous close operational",
                "Zero manual journal entries",
                "Predictive control environment",
                "Strategic controllership realized"
            ]
        }
    },
    corporateFinance: {
        functionName: "Corporate Finance",
        phase1: {
            title: "Phase 1: Quick Wins",
            items: [
                "AI cash forecasting launched",
                "Automated cash positioning",
                "Tax provision automation",
                "Initial optimization wins"
            ]
        },
        phase2: {
            title: "Phase 2: Scale Success",
            items: [
                "Global cash optimization",
                "FX hedging automated",
                "Tax scenario modeling live",
                "Risk prediction active"
            ]
        },
        phase3: {
            title: "Phase 3: Full Transformation",
            items: [
                "AI-optimized treasury",
                "Predictive tax planning",
                "Enterprise risk managed",
                "Optimal capital structure"
            ]
        }
    },
    investorRelations: {
        functionName: "Investor Relations",
        phase1: {
            title: "Phase 1: Quick Wins",
            items: [
                "AI earnings draft generation",
                "Automated peer analysis",
                "Investor chatbot launched",
                "Quick perception wins"
            ]
        },
        phase2: {
            title: "Phase 2: Scale Success",
            items: [
                "Predictive Q&A preparation",
                "Real-time market intelligence",
                "AI narrative generation",
                "Proactive investor outreach"
            ]
        },
        phase3: {
            title: "Phase 3: Full Transformation",
            items: [
                "AI-powered IR platform",
                "Predictive shareholder analytics",
                "Premium valuation achieved",
                "Best-in-class IR function"
            ]
        }
    },
    default: {
        functionName: "Finance",
        phase1: {
            title: "Phase 1: Quick Wins",
            items: [
                "AI automation for key processes",
                "Initial efficiency gains captured",
                "Team trained on AI tools",
                "Early value demonstrated"
            ]
        },
        phase2: {
            title: "Phase 2: Scale Success",
            items: [
                "Enterprise-wide AI deployment",
                "Process optimization at scale",
                "Advanced analytics live",
                "Significant ROI achieved"
            ]
        },
        phase3: {
            title: "Phase 3: Full Transformation",
            items: [
                "Fully AI-enabled function",
                "Strategic value creation",
                "Industry-leading metrics",
                "Continuous innovation culture"
            ]
        }
    }
};

export default function NextSteps({ selectedFunction }: NextStepsProps) {
    const journeyContent = JOURNEY_CONTENT[selectedFunction as keyof typeof JOURNEY_CONTENT] || JOURNEY_CONTENT.default;

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 80;
            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top + window.pageYOffset;
            let offsetPosition = elementTop - navHeight + 100;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const methodologyPhases = [
        {
            icon: <Lightbulb />,
            title: "Create the Strategy",
            subtitle: "AI-Powered Discovery & Planning",
            activities: [
                "Assess: AI analyzes your current state comprehensively",
                "Value: Machine learning identifies hidden value pools",
                "Target: Predictive models set optimal objectives",
                "Prioritize: AI ranks initiatives by ROI and impact"
            ],
            color: "#3b82f6"
        },
        {
            icon: <Target />,
            title: "Design the Future",
            subtitle: "Intelligent Architecture & Roadmapping",
            activities: [
                "Design: AI generates future state options with trade-offs",
                "Plan: Automated roadmap creation with dependency mapping"
            ],
            color: "#8b5cf6"
        },
        {
            icon: <Rocket />,
            title: "Deliver",
            subtitle: "Continuous Value Creation",
            activities: [
                "Execute: AI agents deployed incrementally",
                "Measure: Real-time value tracking",
                "Optimize: Continuous learning and improvement"
            ],
            color: "#10b981"
        }
    ];

    return (
        <section id="step-6" style={{
            minHeight: '100vh',
            padding: '4rem 2rem 2rem 2rem',
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, #0a0a0a 100%)',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <span style={{
                        fontSize: '0.75rem',
                        color: '#60a5fa',
                        fontWeight: '600',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.1em',
                        display: 'block'
                    }}>
                        Step 6: Let's Get Started
                    </span>
                    <h2 style={{
                        fontSize: '2rem',
                        marginBottom: '0.5rem',
                        background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '600',
                        letterSpacing: '-0.02em'
                    }}>
                        Your AI-Accelerated Transformation Journey
                    </h2>
                    <p style={{
                        fontSize: '1rem',
                        color: '#cbd5e1',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontWeight: '300'
                    }}>
                        Our proven methodology delivers results through three strategic phases
                    </p>
                </div>

                {/* Methodology Phases */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1rem',
                    marginBottom: '2rem'
                }}>
                    {methodologyPhases.map((phase, idx) => (
                        <div key={idx} style={{
                            background: 'rgba(17, 24, 39, 0.5)',
                            borderRadius: '0.5rem',
                            padding: '1rem',
                            border: '2px solid transparent',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${phase.color}33`;
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 10px 20px ${phase.color}26`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            {/* Phase Header */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: '0.75rem'
                            }}>
                                <div style={{
                                    width: '2rem',
                                    height: '2rem',
                                    background: `linear-gradient(135deg, ${phase.color}, ${phase.color}cc)`,
                                    borderRadius: '0.375rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}>
                                    {phase.icon}
                                </div>
                                <div>
                                    <h3 style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: '#ffffff',
                                        marginBottom: '0.063rem'
                                    }}>
                                        {phase.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.688rem',
                                        color: phase.color,
                                        fontWeight: '500'
                                    }}>
                                        {phase.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Activities */}
                            <div style={{
                                fontSize: '0.75rem',
                                color: '#cbd5e1',
                                lineHeight: '1.5'
                            }}>
                                <p style={{
                                    fontSize: '0.688rem',
                                    fontWeight: '600',
                                    color: '#94a3b8',
                                    textTransform: 'uppercase' as const,
                                    letterSpacing: '0.05em',
                                    marginBottom: '0.375rem'
                                }}>
                                    Core Activities:
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {phase.activities.map((activity, actIdx) => (
                                        <li key={actIdx} style={{
                                            marginBottom: '0.25rem',
                                            paddingLeft: '0.75rem',
                                            position: 'relative' as const,
                                            fontSize: '0.75rem'
                                        }}>
                                            <span style={{
                                                position: 'absolute' as const,
                                                left: 0,
                                                top: '0.313rem',
                                                width: '0.188rem',
                                                height: '0.188rem',
                                                borderRadius: '50%',
                                                background: phase.color
                                            }} />
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dynamic Journey Roadmap */}
                <div style={{
                    background: 'rgba(59, 130, 246, 0.05)',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                    <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        textAlign: 'center',
                        marginBottom: '0.375rem'
                    }}>
                        Your {journeyContent.functionName} Transformation Journey
                    </h3>
                    <p style={{
                        fontSize: '0.813rem',
                        color: '#94a3b8',
                        textAlign: 'center',
                        marginBottom: '1.25rem'
                    }}>
                        Start seeing value immediately. Scale at your pace. Transform completely.
                    </p>

                    {/* Journey Timeline */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1rem'
                    }}>
                        {/* Phase 1 */}
                        <div style={{
                            background: 'rgba(16, 185, 129, 0.1)',
                            borderRadius: '0.375rem',
                            padding: '1rem',
                            border: '1px solid rgba(16, 185, 129, 0.2)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.375rem',
                                marginBottom: '0.75rem'
                            }}>
                                <Zap style={{ width: '1rem', height: '1rem', color: '#10b981' }} />
                                <h4 style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#10b981'
                                }}>
                                    {journeyContent.phase1.title}
                                </h4>
                            </div>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {journeyContent.phase1.items.map((item, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.375rem',
                                        marginBottom: '0.375rem',
                                        fontSize: '0.688rem',
                                        color: '#d1fae5'
                                    }}>
                                        <CheckCircle style={{
                                            width: '0.75rem',
                                            height: '0.75rem',
                                            color: '#10b981',
                                            flexShrink: 0,
                                            marginTop: '0.063rem'
                                        }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Phase 2 */}
                        <div style={{
                            background: 'rgba(139, 92, 246, 0.1)',
                            borderRadius: '0.375rem',
                            padding: '1rem',
                            border: '1px solid rgba(139, 92, 246, 0.2)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.375rem',
                                marginBottom: '0.75rem'
                            }}>
                                <TrendingUp style={{ width: '1rem', height: '1rem', color: '#8b5cf6' }} />
                                <h4 style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#8b5cf6'
                                }}>
                                    {journeyContent.phase2.title}
                                </h4>
                            </div>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {journeyContent.phase2.items.map((item, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.375rem',
                                        marginBottom: '0.375rem',
                                        fontSize: '0.688rem',
                                        color: '#e9d5ff'
                                    }}>
                                        <CheckCircle style={{
                                            width: '0.75rem',
                                            height: '0.75rem',
                                            color: '#8b5cf6',
                                            flexShrink: 0,
                                            marginTop: '0.063rem'
                                        }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Phase 3 */}
                        <div style={{
                            background: 'rgba(251, 191, 36, 0.1)',
                            borderRadius: '0.375rem',
                            padding: '1rem',
                            border: '1px solid rgba(251, 191, 36, 0.2)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.375rem',
                                marginBottom: '0.75rem'
                            }}>
                                <Rocket style={{ width: '1rem', height: '1rem', color: '#fbbf24' }} />
                                <h4 style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#fbbf24'
                                }}>
                                    {journeyContent.phase3.title}
                                </h4>
                            </div>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {journeyContent.phase3.items.map((item, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.375rem',
                                        marginBottom: '0.375rem',
                                        fontSize: '0.688rem',
                                        color: '#fef3c7'
                                    }}>
                                        <CheckCircle style={{
                                            width: '0.75rem',
                                            height: '0.75rem',
                                            color: '#fbbf24',
                                            flexShrink: 0,
                                            marginTop: '0.063rem'
                                        }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div style={{
                    textAlign: 'center',
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(59, 130, 246, 0.3)'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: '0.375rem'
                    }}>
                        Ready to Start Your Journey?
                    </h3>
                    <p style={{
                        fontSize: '0.875rem',
                        color: '#cbd5e1',
                        marginBottom: '1.25rem'
                    }}>
                        Transform how your {journeyContent.functionName} team works with AI-powered solutions
                    </p>

                    {selectedFunction === 'fpa' ? (
                        <Link
                                                                            href="/functions/fpa/forecasting"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.875rem 2rem',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                color: 'white',
                                fontSize: '0.938rem',
                                fontWeight: '600',
                                borderRadius: '0.5rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.25)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.25)';
                            }}
                        >
                            <Play style={{ width: '1rem', height: '1rem' }} />
                            Experience the Platform
                        </Link>
                    ) : (
                        <button
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.875rem 2rem',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                color: 'white',
                                fontSize: '0.938rem',
                                fontWeight: '600',
                                borderRadius: '0.5rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.25)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.25)';
                            }}
                        >
                            <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                            Schedule a Discussion
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
} 