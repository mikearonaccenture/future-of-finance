'use client';

import { AlertTriangle, ChevronDown, Zap } from 'lucide-react';

interface CreateUrgencyProps {
    selectedFunction: string;
}

const URGENCY_CONTENT = {
    shared: {
        revolution: {
            title: "The AI Revolution is Here",
            quote: "2024 is the iPhone moment for Finance AI. Early adopters will create insurmountable advantages.",
            stats: [
                { label: "of Fortune 500 CFOs implementing AI", value: "73%", detail: "(up from 12% in 2023)" },
                { label: "in value shifts to AI leaders by 2027", value: "$4.2T", detail: "(McKinsey)" },
                { label: "First-mover window closes in", value: "18mo", detail: "" }
            ]
        },
        acceleration: [
            "AI capabilities doubling every 6 months",
            "Implementation costs dropping 40% annually",
            "ROI timelines compressed from years to months"
        ]
    },
    fpa: {
        opportunity: {
            title: "🚀 FP&A Value Creation",
            points: [
                "$15-30M annual value from better decisions",
                "80% effort reduction = 10 FTEs to strategy",
                "95% forecast accuracy = board credibility"
            ]
        },
        cost: {
            title: "⚠️ Cost of Waiting",
            points: [
                "1,000+ better competitor decisions monthly",
                "42% of analysts actively job hunting",
                "$2M in missed opportunities per month"
            ]
        },
        tipping: "By Q4 2025, companies without AI-powered FP&A will be functionally obsolete."
    },
    'procure-to-pay': {
        opportunity: {
            title: "🚀 P2P Value Creation",
            points: [
                "$8-15M working capital in 90 days",
                "2% spend recovery instantly",
                "99% invoice automation = 15 FTEs freed"
            ]
        },
        cost: {
            title: "⚠️ Cost of Waiting",
            points: [
                "$500K monthly in duplicate payments",
                "20% of suppliers exploring competitors",
                "Fraud risk increases 15% monthly"
            ]
        },
        tipping: "By 2025, suppliers will demand AI-enabled payments. Manual AP faces 30% higher costs."
    },
    'order-to-cash': {
        opportunity: {
            title: "🚀 O2C Value Creation",
            points: [
                "15-day DSO reduction = $20M+ cash",
                "50% bad debt reduction",
                "3% revenue uplift from accuracy"
            ]
        },
        cost: {
            title: "⚠️ Cost of Waiting",
            points: [
                "$1M+ tied up monthly",
                "5% of customers exploring alternatives",
                "Collection costs up 20% annually"
            ]
        },
        tipping: "B2B buyers expect B2C experiences. Manual O2C loses 15% of customers by 2025."
    },
    'cost-accounting': {
        opportunity: {
            title: "🚀 Cost Value Creation",
            points: [
                "5-10% margin improvement",
                "$10M+ from optimized pricing",
                "Real-time make/buy decisions"
            ]
        },
        cost: {
            title: "⚠️ Cost of Waiting",
            points: [
                "$800K monthly in wrong pricing",
                "Competitors cherry-picking customers",
                "Decisions based on fiction"
            ]
        },
        tipping: "Dynamic pricing is table stakes by 2025. Standard costs = 20-30% disadvantage."
    },
    'controllership': {
        opportunity: {
            title: "🚀 Control Value Creation",
            points: [
                "3-day close = 7 days for strategy",
                "100% SOX compliance, 50% less effort",
                "Zero material adjustments"
            ]
        },
        cost: {
            title: "⚠️ Cost of Waiting",
            points: [
                "15 days monthly on manual close",
                "$2M annual audit fees",
                "30% talent turnover"
            ]
        },
        tipping: "Continuous close standard by 2025. 15-day closes become unemployable."
    },
    'corporate-finance': {
        opportunity: {
            title: "🚀 Corp Finance Value",
            points: [
                "15-20% tax optimization",
                "$25M+ from working capital AI",
                "95% cash forecast accuracy"
            ]
        },
        cost: {
            title: "⚠️ Cost of Waiting",
            points: [
                "$1.5M missed tax savings monthly",
                "$3M suboptimal cash deployment",
                "200bps funding disadvantage"
            ]
        },
        tipping: "By 2025, manual tax faces 3x audit risk. Manual treasury misses 50% of opportunities."
    },
    'investor-relations': {
        opportunity: {
            title: "🚀 IR Value Creation",
            points: [
                "20% valuation premium",
                "90% reduction in prep time",
                "24/7 intelligent response"
            ]
        },
        cost: {
            title: "⚠️ Cost of Waiting",
            points: [
                "Competitors gain mindshare",
                "$100M+ market cap gap",
                "Best talent leaving"
            ]
        },
        tipping: "By 2025, traditional IR trades at 15-20% discount to AI-powered peers."
    },
    default: {
        opportunity: {
            title: "🚀 Value Creation",
            points: [
                "30-50% efficiency gains",
                "Premium valuations",
                "Top talent magnet"
            ]
        },
        cost: {
            title: "⚠️ Cost of Waiting",
            points: [
                "20% higher costs by 2025",
                "40% turnover of best people",
                "Reactive scrambling"
            ]
        },
        tipping: "The window for competitive advantage closes in 18 months."
    }
};

export default function CreateUrgency({ selectedFunction }: CreateUrgencyProps) {
    const functionData = URGENCY_CONTENT[selectedFunction as keyof typeof URGENCY_CONTENT];
    const functionContent = (functionData && 'opportunity' in functionData) ? functionData : URGENCY_CONTENT.default;
    const sharedContent = URGENCY_CONTENT.shared;

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
        <section id="step-3" style={{
            minHeight: '100vh',
            padding: '4rem 2rem 2rem 2rem',
            background: 'linear-gradient(180deg, #0a0a0a 0%, rgba(15, 23, 42, 0.5) 100%)',
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
                        Step 3: Why Now?
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
                        The AI Revolution is Here
                    </h2>
                    <p style={{
                        fontSize: '1rem',
                        color: '#fbbf24',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontWeight: '500',
                        fontStyle: 'italic' as const
                    }}>
                        "{sharedContent.revolution.quote}"
                    </p>
                </div>

                {/* Market Reality Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                    marginBottom: '1.5rem'
                }}>
                    {sharedContent.revolution.stats.map((stat, idx) => (
                        <div key={idx} style={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '0.5rem',
                            padding: '0.75rem',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '1.75rem',
                                fontWeight: 'bold',
                                color: '#3b82f6',
                                marginBottom: '0.125rem'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '0.75rem',
                                color: '#cbd5e1'
                            }}>
                                {stat.label}
                            </div>
                            {stat.detail && (
                                <div style={{
                                    fontSize: '0.688rem',
                                    color: '#94a3b8',
                                    marginTop: '0.125rem'
                                }}>
                                    {stat.detail}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Two Column Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                }}>
                    {/* Left Column - Opportunity */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        border: '2px solid rgba(16, 185, 129, 0.3)'
                    }}>
                        <h3 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#10b981',
                            marginBottom: '0.75rem'
                        }}>
                            {functionContent.opportunity.title}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {functionContent.opportunity.points.map((point, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.375rem',
                                    marginBottom: '0.375rem',
                                    fontSize: '0.813rem',
                                    color: '#d1fae5'
                                }}>
                                    <span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Cost of Waiting */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        border: '2px solid rgba(239, 68, 68, 0.3)'
                    }}>
                        <h3 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#ef4444',
                            marginBottom: '0.75rem'
                        }}>
                            {functionContent.cost.title}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {functionContent.cost.points.map((point, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.375rem',
                                    marginBottom: '0.375rem',
                                    fontSize: '0.813rem',
                                    color: '#fef3c7'
                                }}>
                                    <span style={{ color: '#ef4444', flexShrink: 0 }}>×</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Acceleration Points */}
                <div style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: '0.5rem',
                    padding: '0.75rem',
                    marginBottom: '1rem',
                    textAlign: 'center'
                }}>
                    <Zap style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        color: '#8b5cf6',
                        margin: '0 auto 0.375rem auto'
                    }} />
                    <h4 style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#8b5cf6',
                        marginBottom: '0.375rem'
                    }}>
                        The Acceleration is Exponential
                    </h4>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        flexWrap: 'wrap' as const
                    }}>
                        {sharedContent.acceleration.map((point, idx) => (
                            <span key={idx} style={{
                                fontSize: '0.75rem',
                                color: '#e9d5ff'
                            }}>
                                {point}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tipping Point */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%)',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    textAlign: 'center'
                }}>
                    <AlertTriangle style={{
                        width: '1.25rem',
                        height: '1.25rem',
                        color: '#fbbf24',
                        margin: '0 auto 0.375rem auto'
                    }} />
                    <h4 style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#fbbf24',
                        marginBottom: '0.25rem'
                    }}>
                        The Tipping Point
                    </h4>
                    <p style={{
                        fontSize: '0.813rem',
                        color: '#fef3c7',
                        margin: 0,
                        fontStyle: 'italic' as const
                    }}>
                        {functionContent.tipping}
                    </p>
                </div>

                {/* Bottom Message */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '1.5rem'
                }}>
                    <p style={{
                        fontSize: '1rem',
                        color: '#cbd5e1',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontWeight: '300'
                    }}>
                        The question isn't whether to adopt AI in Finance, but whether you'll lead or follow.
                    </p>
                    <p style={{
                        fontSize: '0.813rem',
                        color: '#94a3b8',
                        marginTop: '0.375rem'
                    }}>
                        Every day you wait, the gap widens. Your competitors get smarter. Your talent gets frustrated.
                    </p>
                </div>

                {/* Next Step Button */}
                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={() => scrollToSection('step-4')}
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
                        See The Capabilities
                        <ChevronDown style={{ width: '1rem', height: '1rem' }} />
                    </button>
                </div>
            </div>
        </section>
    );
} 