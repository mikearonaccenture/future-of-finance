'use client';

import { Activity, ArrowRight, BarChart, BarChart3, BookOpen, Brain, ChevronDown, Coins, CreditCard, DollarSign, Eye, Factory, FileText, Globe, Megaphone, Package, Receipt, Shield, Sparkles, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

interface HowSectionProps {
    selectedFunction: string;
}

const CAPABILITIES_BY_FUNCTION = {
    fpa: {
        title: "AI-Powered Platforms for Your FP&A Team",
        subtitle: "Digital workspaces where your team collaborates with AI to deliver unprecedented insights",
        platforms: [
            {
                icon: <Activity />,
                title: "Connected Enterprise Planning Platform",
                description: "A unified workspace for all planning activities - from strategic long-range planning to dynamic forecasting",
                capabilities: [
                    "Long-range strategic planning with scenario modeling",
                    "Annual budgeting with intelligent recommendations",
                    "Rolling forecasts that adapt in real-time",
                    "Monthly POV analysis and variance explanations"
                ],
                isAvailable: true,
                href: "/functions/fpa/forecasting"
            },
            {
                icon: <BarChart3 />,
                title: "Management Reporting Platform",
                description: "Transform data into actionable insights with AI-driven analytics and automated narratives",
                capabilities: [
                    "Self-service business intelligence dashboards",
                    "Automated monthly business review decks",
                    "Real-time KPI monitoring with predictive alerts",
                    "Natural language Q&A for instant insights"
                ],
                isAvailable: true,
                href: "/functions/fpa/management-reporting"
            }
        ],
        poweredBy: "Powered by forecasting intelligence, anomaly detection, and natural language agents"
    },
    procureToPay: {
        title: "AI-Powered Platforms for Your P2P Team",
        subtitle: "Intelligent automation that transforms procurement from transactional to strategic",
        platforms: [
            {
                icon: <Receipt />,
                title: "Intelligent Invoice Processing Platform",
                description: "Touchless invoice processing from receipt to payment",
                capabilities: [
                    "99% straight-through processing with AI extraction",
                    "Smart 3-way matching with anomaly resolution",
                    "Automated approval routing based on AI rules",
                    "Real-time duplicate payment prevention"
                ],
                isAvailable: false
            },
            {
                icon: <DollarSign />,
                title: "Strategic Spend Analytics Platform",
                description: "Turn spending data into savings opportunities",
                capabilities: [
                    "Real-time spend visibility across all categories",
                    "Contract compliance monitoring with alerts",
                    "Savings opportunity identification",
                    "Supplier performance scorecarding"
                ],
                isAvailable: false
            },
            {
                icon: <Users />,
                title: "Supplier Collaboration Portal",
                description: "AI-enabled supplier engagement and optimization",
                capabilities: [
                    "Self-service supplier onboarding with AI verification",
                    "Dynamic discount optimization",
                    "Automated payment scheduling",
                    "Predictive supplier risk monitoring"
                ],
                isAvailable: false
            }
        ],
        poweredBy: "Powered by OCR, machine learning, spend analytics, and predictive modeling"
    },
    orderToCash: {
        title: "AI-Powered Platforms for Your O2C Team",
        subtitle: "Accelerate cash collection while delighting customers",
        platforms: [
            {
                icon: <CreditCard />,
                title: "Intelligent Receivables Platform",
                description: "AI-driven credit to cash optimization",
                capabilities: [
                    "Real-time credit decisions with ML models",
                    "Predictive collection strategies by customer",
                    "Automated dispute resolution workflow",
                    "Dynamic payment term optimization"
                ],
                isAvailable: false
            },
            {
                icon: <Globe />,
                title: "Customer Experience Portal",
                description: "Self-service billing and payment platform",
                capabilities: [
                    "24/7 invoice access and payment options",
                    "AI chatbot for billing inquiries",
                    "Automated statement generation",
                    "Proactive payment reminders"
                ],
                isAvailable: false
            },
            {
                icon: <TrendingUp />,
                title: "Revenue Intelligence Suite",
                description: "Ensure every dollar earned is collected",
                capabilities: [
                    "Revenue leakage detection and prevention",
                    "Cash application with 95%+ auto-match",
                    "Deduction validity analysis",
                    "DSO optimization recommendations"
                ],
                isAvailable: false
            }
        ],
        poweredBy: "Powered by behavioral analytics, NLP, and predictive algorithms"
    },
    costAccounting: {
        title: "AI-Powered Platforms for Your Cost Team",
        subtitle: "Real-time cost intelligence for competitive advantage",
        platforms: [
            {
                icon: <Factory />,
                title: "Dynamic Cost Engine",
                description: "Living cost models that update continuously",
                capabilities: [
                    "Real-time standard cost updates",
                    "Activity-based costing with AI allocation",
                    "Predictive cost modeling",
                    "Automated variance analysis with root cause"
                ],
                isAvailable: false
            },
            {
                icon: <BarChart />,
                title: "Profitability Analytics Platform",
                description: "True margin visibility at every level",
                capabilities: [
                    "Multi-dimensional profitability analysis",
                    "Customer/product/channel margin insights",
                    "What-if pricing simulation",
                    "Cost driver identification"
                ],
                isAvailable: false
            },
            {
                icon: <Package />,
                title: "Inventory Intelligence System",
                description: "Optimize inventory while minimizing costs",
                capabilities: [
                    "Obsolescence prediction and prevention",
                    "Cycle count optimization with AI",
                    "WIP valuation automation",
                    "Cost of quality tracking"
                ],
                isAvailable: false
            }
        ],
        poweredBy: "Powered by IoT integration, machine learning, and predictive analytics"
    },
    controllership: {
        title: "AI-Powered Platforms for Your Controllership Team",
        subtitle: "Continuous control and real-time compliance",
        platforms: [
            {
                icon: <BookOpen />,
                title: "Continuous Close Platform",
                description: "Transform month-end from marathon to sprint",
                capabilities: [
                    "Automated journal entry generation",
                    "Real-time account reconciliation",
                    "Intelligent close task management",
                    "AI-powered anomaly detection"
                ],
                isAvailable: false
            },
            {
                icon: <Shield />,
                title: "Control & Compliance Suite",
                description: "Proactive risk management and audit readiness",
                capabilities: [
                    "Continuous control monitoring",
                    "Automated SOX testing",
                    "Real-time segregation of duties",
                    "Audit trail with full documentation"
                ],
                isAvailable: false
            },
            {
                icon: <FileText />,
                title: "Financial Reporting Hub",
                description: "From close to disclosure in hours, not days",
                capabilities: [
                    "Automated financial statement generation",
                    "XBRL tagging with AI validation",
                    "Management reporting packages",
                    "Board deck automation"
                ],
                isAvailable: false
            }
        ],
        poweredBy: "Powered by RPA, anomaly detection, and natural language generation"
    },
    corporateFinance: {
        title: "AI-Powered Platforms for Your Tax & Treasury Team",
        subtitle: "Optimize cash and tax position with intelligent automation",
        platforms: [
            {
                icon: <Coins />,
                title: "Treasury Command Center",
                description: "AI-driven cash and liquidity optimization",
                capabilities: [
                    "ML-powered cash forecasting (95%+ accuracy)",
                    "Automated cash positioning",
                    "Dynamic FX hedging strategies",
                    "Real-time bank connectivity"
                ],
                isAvailable: false
            },
            {
                icon: <FileText />,
                title: "Tax Intelligence Platform",
                description: "Strategic tax planning and compliance automation",
                capabilities: [
                    "Real-time tax provision calculations",
                    "Transfer pricing optimization",
                    "Multi-jurisdiction compliance",
                    "Tax scenario modeling"
                ],
                isAvailable: false
            },
            {
                icon: <Shield />,
                title: "Risk Management Suite",
                description: "Proactive identification and mitigation",
                capabilities: [
                    "Continuous covenant monitoring",
                    "Fraud detection with ML",
                    "Interest rate optimization",
                    "Counterparty risk assessment"
                ],
                isAvailable: false
            }
        ],
        poweredBy: "Powered by predictive models, API connectivity, and optimization algorithms"
    },
    investorRelations: {
        title: "AI-Powered Platforms for Your IR Team",
        subtitle: "Shape the narrative with data-driven storytelling",
        platforms: [
            {
                icon: <Megaphone />,
                title: "Earnings Intelligence Platform",
                description: "From prep to presentation in record time",
                capabilities: [
                    "AI-generated earnings materials",
                    "Predictive Q&A with suggested responses",
                    "Peer benchmarking automation",
                    "Sentiment analysis of analyst reports"
                ],
                isAvailable: false
            },
            {
                icon: <Globe />,
                title: "Stakeholder Engagement Hub",
                description: "24/7 intelligent investor communication",
                capabilities: [
                    "AI chatbot for investor queries",
                    "Automated targeting and outreach",
                    "Real-time perception tracking",
                    "Event planning and follow-up"
                ],
                isAvailable: false
            },
            {
                icon: <Eye />,
                title: "Market Intelligence Suite",
                description: "Stay ahead of market movements",
                capabilities: [
                    "Stock price driver analysis",
                    "Consensus estimate tracking",
                    "Competitive intelligence monitoring",
                    "ESG reporting automation"
                ],
                isAvailable: false
            }
        ],
        poweredBy: "Powered by NLP, sentiment analysis, and generative AI"
    },
    default: {
        title: "AI-Powered Platforms for Finance Teams",
        subtitle: "Digital workspaces where your team collaborates with AI to deliver unprecedented value",
        platforms: [
            {
                icon: <Brain />,
                title: "Intelligent Automation Platform",
                description: "End-to-end process automation with AI",
                capabilities: [
                    "Process mining and optimization",
                    "Intelligent document processing",
                    "Automated workflow orchestration",
                    "Real-time performance monitoring"
                ],
                isAvailable: false
            },
            {
                icon: <BarChart3 />,
                title: "Analytics & Insights Platform",
                description: "Transform data into strategic advantage",
                capabilities: [
                    "Self-service analytics",
                    "Predictive insights",
                    "Automated reporting",
                    "Natural language Q&A"
                ],
                isAvailable: false
            },
            {
                icon: <Shield />,
                title: "Risk & Compliance Platform",
                description: "Proactive risk management and control",
                capabilities: [
                    "Continuous monitoring",
                    "Automated compliance",
                    "Risk prediction",
                    "Audit automation"
                ],
                isAvailable: false
            }
        ],
        poweredBy: "Powered by AI, machine learning, and intelligent automation"
    }
};

export default function HowSection({ selectedFunction }: HowSectionProps) {
    const functionCapabilities = CAPABILITIES_BY_FUNCTION[selectedFunction as keyof typeof CAPABILITIES_BY_FUNCTION] || CAPABILITIES_BY_FUNCTION.default;

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

    return (
        <section id="step-4" style={{
            minHeight: '100vh',
            padding: '6rem 2rem 2rem 2rem',
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, #0a0a0a 100%)',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <span style={{
                        fontSize: '0.875rem',
                        color: '#60a5fa',
                        fontWeight: '600',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.1em',
                        display: 'block'
                    }}>
                        Step 4: The Capabilities
                    </span>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: '0.75rem',
                        background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '600',
                        letterSpacing: '-0.02em'
                    }}>
                        {functionCapabilities.title}
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: '#cbd5e1',
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontWeight: '300'
                    }}>
                        {functionCapabilities.subtitle}
                    </p>
                </div>

                {/* Platform Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: selectedFunction === 'fpa' ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gap: '1.5rem',
                    marginBottom: '2rem',
                    maxWidth: selectedFunction === 'fpa' ? '800px' : '100%',
                    margin: selectedFunction === 'fpa' ? '0 auto 2rem auto' : '0 0 2rem 0'
                }}>
                    {functionCapabilities.platforms.map((platform, idx) => (
                        <div key={idx} style={{
                            background: 'rgba(17, 24, 39, 0.5)',
                            borderRadius: '0.75rem',
                            padding: '1.5rem',
                            border: '2px solid transparent',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            position: 'relative' as const
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            {/* Coming Soon Badge */}
                            {!platform.isAvailable && (
                                <div style={{
                                    position: 'absolute',
                                    top: '0.75rem',
                                    right: '0.75rem',
                                    background: 'rgba(251, 191, 36, 0.2)',
                                    border: '1px solid rgba(251, 191, 36, 0.3)',
                                    borderRadius: '0.375rem',
                                    padding: '0.25rem 0.75rem',
                                    fontSize: '0.75rem',
                                    fontWeight: '500',
                                    color: '#fbbf24',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                }}>
                                    <Sparkles style={{ width: '0.75rem', height: '0.75rem' }} />
                                    Coming soon
                                </div>
                            )}

                            {/* Platform Header */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <div style={{
                                    width: '2.25rem',
                                    height: '2.25rem',
                                    background: platform.isAvailable
                                        ? 'linear-gradient(135deg, #10b981, #059669)'
                                        : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}>
                                    {platform.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    color: '#ffffff',
                                    marginRight: platform.isAvailable ? '0' : '120px'
                                }}>
                                    {platform.title}
                                </h3>
                            </div>

                            {/* Platform Description */}
                            <p style={{
                                color: '#94a3b8',
                                fontSize: '0.813rem',
                                lineHeight: '1.5',
                                marginBottom: '1rem'
                            }}>
                                {platform.description}
                            </p>

                            {/* Key Capabilities */}
                            <div style={{
                                paddingTop: '0.75rem',
                                borderTop: '1px solid rgba(148, 163, 184, 0.1)'
                            }}>
                                <h4 style={{
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    color: '#60a5fa',
                                    textTransform: 'uppercase' as const,
                                    letterSpacing: '0.05em',
                                    marginBottom: '0.5rem'
                                }}>
                                    Key Capabilities:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {platform.capabilities.map((capability, capIdx) => (
                                        <li key={capIdx} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.5rem',
                                            marginBottom: '0.375rem',
                                            fontSize: '0.75rem',
                                            color: '#cbd5e1'
                                        }}>
                                            <span style={{
                                                color: platform.isAvailable ? '#10b981' : '#60a5fa',
                                                flexShrink: 0,
                                                marginTop: '0.125rem'
                                            }}>•</span>
                                            <span>{capability}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Platform Button */}
                            {platform.isAvailable && selectedFunction === 'fpa' && (
                                <div style={{
                                    marginTop: '1rem',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid rgba(148, 163, 184, 0.1)'
                                }}>
                                    <Link
                                        href={platform.href || "/functions/fpa/forecasting"}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.375rem',
                                            padding: '0.5rem 1rem',
                                            background: 'linear-gradient(135deg, #10b981, #059669)',
                                            color: 'white',
                                            borderRadius: '0.375rem',
                                            textDecoration: 'none',
                                            fontSize: '0.813rem',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease',
                                            width: '100%',
                                            justifyContent: 'center'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-1px)';
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        View Platform
                                        <ArrowRight style={{ width: '0.875rem', height: '0.875rem' }} />
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Powered By */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '2rem',
                    padding: '1rem',
                    background: 'rgba(139, 92, 246, 0.05)',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(139, 92, 246, 0.1)'
                }}>
                    <Brain style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        color: '#8b5cf6',
                        margin: '0 auto 0.5rem auto'
                    }} />
                    <p style={{
                        fontSize: '0.875rem',
                        color: '#e9d5ff',
                        fontStyle: 'italic' as const,
                        margin: 0
                    }}>
                        {functionCapabilities.poweredBy}
                    </p>
                </div>

                {/* Next Step Button */}
                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={() => scrollToSection('step-5')}
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
                        Explore Success Pillars
                        <ChevronDown style={{ width: '1rem', height: '1rem' }} />
                    </button>
                </div>
            </div>
        </section>
    );
} 