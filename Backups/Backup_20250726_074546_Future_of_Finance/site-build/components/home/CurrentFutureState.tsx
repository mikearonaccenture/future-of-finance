'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';

interface CurrentFutureStateProps {
    selectedFunction: string;
}

interface StateSection {
    heading: string;
    points: string[];
}

interface StateConfig {
    title: string;
    sections?: StateSection[];
    points?: string[];
    emotion: string;
}

interface FunctionState {
    current: StateConfig;
    future: StateConfig;
}

const FUNCTION_STATES: Record<string, FunctionState> = {
    fpa: {
        current: {
            title: "😫 Today's Reality",
            sections: [
                {
                    heading: "Data Chaos",
                    points: [
                        "3-5 days collecting data from 20+ Excel files",
                        "Version control: \"Budget_v27_FINAL_FINAL.xlsx\"",
                        "2 weeks for reports that are obsolete on arrival"
                    ]
                },
                {
                    heading: "Time Wasted",
                    points: [
                        "70% fire-fighting: \"Why is this number different?\"",
                        "25% data janitor work: Fixing broken formulas",
                        "5% actual analysis: The job you were hired to do"
                    ]
                },
                {
                    heading: "Business Frustration",
                    points: [
                        "\"What if we change pricing?\" → \"Give me 3 days...\"",
                        "Always saying \"No, because...\" instead of \"Yes, and...\"",
                        "Seen as the police, not strategic partners"
                    ]
                }
            ],
            emotion: "Your FP&A team is drowning in spreadsheets instead of driving strategy"
        },
        future: {
            title: "🚀 AI-Powered Tomorrow",
            sections: [
                {
                    heading: "Automated Excellence",
                    points: [
                        "Real-time data feeds with auto-anomaly detection",
                        "Zero manual consolidation - AI handles everything",
                        "Flash reporting in hours with AI narratives"
                    ]
                },
                {
                    heading: "Strategic Focus",
                    points: [
                        "70% strategic advisory on growth initiatives",
                        "25% predictive insights on what's coming next",
                        "5% oversight while AI handles grunt work"
                    ]
                },
                {
                    heading: "True Partnership",
                    points: [
                        "\"What if...?\" → \"Here are 3 scenarios with ROI\"",
                        "Proactive alerts 30-60 days before P&L impact",
                        "From \"No\" department to innovation enabler"
                    ]
                }
            ],
            emotion: "Your FP&A team becomes the strategic advisor every executive wants"
        }
    },
    procureToPay: {
        current: {
            title: "😫 Today's Reality",
            sections: [
                {
                    heading: "Invoice & Payment Chaos",
                    points: [
                        "500+ paper invoices weekly in \"the pile\"",
                        "40% of invoices stuck in approval limbo",
                        "$2M+ annual leakage from duplicate payments"
                    ]
                },
                {
                    heading: "Manual Process Overload",
                    points: [
                        "15 minutes per invoice for manual entry",
                        "Email ping-pong: Chasing 50+ approvals",
                        "2-week expense reimbursement cycles"
                    ]
                },
                {
                    heading: "Compliance Nightmares",
                    points: [
                        "No spend visibility until after the fact",
                        "Maverick spending everywhere",
                        "Missing approvals, SOX deficiencies"
                    ]
                }
            ],
            emotion: "Your AP team is drowning in paper, vendors hate you, and nobody knows what we're really spending"
        },
        future: {
            title: "🚀 AI-Powered Tomorrow",
            sections: [
                {
                    heading: "Intelligent Automation",
                    points: [
                        "99% touchless invoice processing",
                        "AI resolves discrepancies automatically",
                        "Zero duplicate payments"
                    ]
                },
                {
                    heading: "Process Excellence",
                    points: [
                        "30-second invoice processing",
                        "Mobile one-click approvals",
                        "Same-day expense reimbursement"
                    ]
                },
                {
                    heading: "Strategic Value",
                    points: [
                        "2% discount capture on all spending",
                        "Real-time spend analytics",
                        "15-20% working capital freed up"
                    ]
                }
            ],
            emotion: "Your P2P function runs itself, captures every discount, and provides strategic spend intelligence"
        }
    },
    orderToCash: {
        current: {
            title: "😫 Today's Reality",
            sections: [
                {
                    heading: "Revenue Leakage",
                    points: [
                        "2-3% revenue loss from billing errors",
                        "45+ days DSO with cash tied up",
                        "6-8 week dispute resolution"
                    ]
                },
                {
                    heading: "Collections Chaos",
                    points: [
                        "Manual spreadsheet dunning",
                        "90% time on 10% of revenue",
                        "4 hours daily matching payments"
                    ]
                },
                {
                    heading: "Customer Frustration",
                    points: [
                        "\"Call you back in 3 days\" for billing inquiries",
                        "Good customers blocked, bad ones slip through",
                        "Frequent revenue restatements"
                    ]
                }
            ],
            emotion: "Your O2C team is always behind, customers are frustrated, and cash is stuck in the pipeline"
        },
        future: {
            title: "🚀 AI-Powered Tomorrow",
            sections: [
                {
                    heading: "Revenue Optimization",
                    points: [
                        "100% billing accuracy guaranteed",
                        "DSO reduced to 30 days",
                        "24-hour dispute resolution"
                    ]
                },
                {
                    heading: "Intelligent Collections",
                    points: [
                        "AI predicts late payments before they happen",
                        "95% straight-through cash application",
                        "80% deduction auto-validation"
                    ]
                },
                {
                    heading: "Customer Delight",
                    points: [
                        "Self-service everything instantly",
                        "Proactive issue prevention",
                        "Perfect revenue recognition"
                    ]
                }
            ],
            emotion: "Your O2C function accelerates cash, delights customers, and prevents revenue leakage"
        }
    },
    costAccounting: {
        current: {
            title: "😫 Today's Reality",
            sections: [
                {
                    heading: "Costing Crisis",
                    points: [
                        "Standard costs wrong by month 2",
                        "Overhead allocation distorts profitability",
                        "Variances: \"It's timing\" (but is it?)"
                    ]
                },
                {
                    heading: "Inventory Mysteries",
                    points: [
                        "Cycle count discrepancies everywhere",
                        "Year-end obsolescence surprises",
                        "Product profitability is fiction"
                    ]
                },
                {
                    heading: "Decision Gaps",
                    points: [
                        "Pricing based on wrong costs",
                        "Make vs buy takes weeks to analyze",
                        "Cost reduction shooting in the dark"
                    ]
                }
            ],
            emotion: "Your cost accounting provides precise wrong answers, driving bad decisions across the business"
        },
        future: {
            title: "🚀 AI-Powered Tomorrow",
            sections: [
                {
                    heading: "Dynamic Intelligence",
                    points: [
                        "Real-time cost updates daily",
                        "AI traces actual resource consumption",
                        "Root cause variance analysis"
                    ]
                },
                {
                    heading: "Inventory Excellence",
                    points: [
                        "AI-driven perpetual accuracy",
                        "Obsolescence prediction before aging",
                        "True margin visibility by SKU"
                    ]
                },
                {
                    heading: "Strategic Management",
                    points: [
                        "Dynamic pricing optimization",
                        "Instant make/buy decisions",
                        "AI reveals savings opportunities"
                    ]
                }
            ],
            emotion: "Your cost accounting provides real-time intelligence that drives profitability and competitive advantage"
        }
    },
    controllership: {
        current: {
            title: "😫 Today's Reality",
            sections: [
                {
                    heading: "Monthly Close Marathon",
                    points: [
                        "10-15 day close cycle",
                        "500+ manual journal entries",
                        "200+ reconciliations always off"
                    ]
                },
                {
                    heading: "Compliance Burden",
                    points: [
                        "SOX: Binders of screenshots nobody reads",
                        "3 months audit prep, still missing items",
                        "Lease accounting spreadsheet nightmare"
                    ]
                },
                {
                    heading: "Reporting Struggles",
                    points: [
                        "48-hour board package fire drill",
                        "\"Flash\" reporting arrives day 5",
                        "Too busy closing to analyze"
                    ]
                }
            ],
            emotion: "Your controllership team is always closing last month, never looking forward, and dreading the next audit"
        },
        future: {
            title: "🚀 AI-Powered Tomorrow",
            sections: [
                {
                    heading: "Continuous Close",
                    points: [
                        "3-day soft close with AI automation",
                        "Zero manual entries required",
                        "Real-time reconciliations"
                    ]
                },
                {
                    heading: "Automated Compliance",
                    points: [
                        "AI tests 100% of transactions",
                        "Always audit-ready documentation",
                        "Lease accounting fully automated"
                    ]
                },
                {
                    heading: "Strategic Reporting",
                    points: [
                        "Board packages in minutes",
                        "Real-time flash available hour 1",
                        "Predictive analytics built-in"
                    ]
                }
            ],
            emotion: "Your controllership function ensures real-time accuracy, continuous compliance, and strategic insights"
        }
    },
    corporateFinance: {
        current: {
            title: "😫 Today's Reality",
            sections: [
                {
                    heading: "Tax Complexity",
                    points: [
                        "Quarter-end tax provision scrambles",
                        "Transfer pricing always behind",
                        "Finding tax savings after it's too late"
                    ]
                },
                {
                    heading: "Treasury Blind Spots",
                    points: [
                        "Cash forecast ±20% accuracy",
                        "Manual updates across 50 accounts",
                        "Surprise FX gains/losses quarterly"
                    ]
                },
                {
                    heading: "Risk Gaps",
                    points: [
                        "Manual covenant calculations",
                        "Bank fees too high, no time to fix",
                        "Hoping controls catch fraud"
                    ]
                }
            ],
            emotion: "Your corporate finance team is reactive, manually intensive, and always one step behind risks"
        },
        future: {
            title: "🚀 AI-Powered Tomorrow",
            sections: [
                {
                    heading: "Tax Intelligence",
                    points: [
                        "Real-time tax provision calculations",
                        "AI finds legal tax savings proactively",
                        "Multi-jurisdiction optimization"
                    ]
                },
                {
                    heading: "Treasury Optimization",
                    points: [
                        "95%+ cash forecast accuracy",
                        "Automated optimal cash sweeps",
                        "Dynamic FX hedging strategies"
                    ]
                },
                {
                    heading: "Proactive Risk",
                    points: [
                        "Continuous covenant monitoring",
                        "AI negotiates bank fees",
                        "Fraud detected instantly"
                    ]
                }
            ],
            emotion: "Your corporate finance function optimizes cash, minimizes taxes legally, and prevents risks proactively"
        }
    },
    investorRelations: {
        current: {
            title: "😫 Today's Reality",
            sections: [
                {
                    heading: "Earnings Scramble",
                    points: [
                        "2-week marathon deck iterations",
                        "Script writing until 2 AM",
                        "Guessing what analysts will ask"
                    ]
                },
                {
                    heading: "Stakeholder Chaos",
                    points: [
                        "\"Let me get back to you\" (forget to)",
                        "Manually scanning competitor calls",
                        "Spreadsheets for investor days"
                    ]
                },
                {
                    heading: "Market Gaps",
                    points: [
                        "Finding stock moves from Twitter",
                        "Quarterly scramble for peer comps",
                        "New ESG request weekly"
                    ]
                }
            ],
            emotion: "Your IR team is always reacting to the market, struggling to stay on message, and drowning in requests"
        },
        future: {
            title: "🚀 AI-Powered Tomorrow",
            sections: [
                {
                    heading: "Earnings Excellence",
                    points: [
                        "AI drafts materials in hours",
                        "Predictive Q&A with 90% accuracy",
                        "Data-driven guidance models"
                    ]
                },
                {
                    heading: "Proactive Engagement",
                    points: [
                        "24/7 investor chatbot",
                        "Real-time competitive intel",
                        "Automated event management"
                    ]
                },
                {
                    heading: "Market Intelligence",
                    points: [
                        "AI explains stock moves instantly",
                        "Living peer benchmarks daily",
                        "ESG command center"
                    ]
                }
            ],
            emotion: "Your IR team shapes the narrative proactively, backed by AI intelligence that keeps you ahead of the market"
        }
    },
    default: {
        current: {
            title: "😓 Today's Reality",
            points: [
                "Manual, time-consuming processes",
                "Limited visibility and insights",
                "High error rates and rework",
                "Teams focused on tasks, not strategy",
                "Disconnected systems and data",
                "Reactive decision making"
            ],
            emotion: "Your team is overwhelmed and unable to focus on value-add activities"
        },
        future: {
            title: "🚀 AI-Powered Tomorrow",
            points: [
                "Automated, intelligent workflows",
                "Real-time visibility and predictive insights",
                "Near-zero error rates",
                "Teams focused on strategic analysis",
                "Integrated, intelligent systems",
                "Proactive, data-driven decisions"
            ],
            emotion: "Your team is empowered to drive strategic value for the business"
        }
    }
};

export default function CurrentFutureState({ selectedFunction }: CurrentFutureStateProps) {
    const states = FUNCTION_STATES[selectedFunction as keyof typeof FUNCTION_STATES] || FUNCTION_STATES.default;

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
        <section id="step-2" style={{
            minHeight: '100vh',
            padding: '6rem 2rem 2rem 2rem',
            background: 'linear-gradient(180deg, #0a0a0a 0%, rgba(15, 23, 42, 0.5) 100%)',
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
                        Step 2: The Transformation
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
                        Where You Are Today vs. Where You Want to Be
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: '#94a3b8',
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontWeight: '300'
                    }}>
                        Visualize your transformation journey with clear before and after states
                    </p>
                </div>

                {/* Comparison Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    gap: '2rem',
                    alignItems: 'stretch'
                }}>
                    {/* Current State */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        border: '2px solid rgba(239, 68, 68, 0.3)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            color: '#ef4444',
                            marginBottom: '1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            {states.current.title}
                        </h3>

                        {/* Check if current state has sections (new structure) or points (old structure) */}
                        {states.current.sections ? (
                            states.current.sections.map((section, sectionIdx) => (
                                <div key={sectionIdx} style={{ marginBottom: '1rem' }}>
                                    <h4 style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: '#fbbf24',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {section.heading}
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {section.points.map((point, idx) => (
                                            <li key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '0.375rem',
                                                marginBottom: '0.375rem',
                                                fontSize: '0.813rem',
                                                color: '#fef3c7',
                                                lineHeight: '1.4'
                                            }}>
                                                <span style={{
                                                    color: '#ef4444',
                                                    fontSize: '1rem',
                                                    lineHeight: '1',
                                                    flexShrink: 0,
                                                    marginTop: '-0.125rem'
                                                }}>
                                                    ❌
                                                </span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : states.current.points ? (
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '0 0 1.5rem 0'
                            }}>
                                {states.current.points?.map((point, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.5rem',
                                        marginBottom: '0.625rem',
                                        color: '#fca5a5'
                                    }}>
                                        <span style={{
                                            color: '#ef4444',
                                            fontSize: '1rem',
                                            marginTop: '-2px'
                                        }}>
                                            ×
                                        </span>
                                        <span style={{ fontSize: '0.875rem', lineHeight: '1.4' }}>
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        <div style={{
                            padding: '0.75rem',
                            background: 'rgba(239, 68, 68, 0.1)',
                            borderRadius: '0.5rem',
                            border: '1px solid rgba(239, 68, 68, 0.2)'
                        }}>
                            <p style={{
                                color: '#fca5a5',
                                fontSize: '0.75rem',
                                fontStyle: 'italic' as const,
                                margin: 0,
                                lineHeight: '1.4'
                            }}>
                                "{states.current.emotion}"
                            </p>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                            borderRadius: '50%',
                            width: '3rem',
                            height: '3rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                        }}>
                            <ArrowRight style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                        </div>
                    </div>

                    {/* Future State */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        border: '2px solid rgba(16, 185, 129, 0.3)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            color: '#10b981',
                            marginBottom: '1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            {states.future.title}
                        </h3>

                        {/* Check if future state has sections (new structure) or points (old structure) */}
                        {states.future.sections ? (
                            states.future.sections.map((section, sectionIdx) => (
                                <div key={sectionIdx} style={{ marginBottom: '1rem' }}>
                                    <h4 style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: '#34d399',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {section.heading}
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {section.points.map((point, idx) => (
                                            <li key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '0.375rem',
                                                marginBottom: '0.375rem',
                                                fontSize: '0.813rem',
                                                color: '#d1fae5',
                                                lineHeight: '1.4'
                                            }}>
                                                <span style={{
                                                    color: '#10b981',
                                                    fontSize: '1rem',
                                                    lineHeight: '1',
                                                    flexShrink: 0,
                                                    marginTop: '-0.125rem'
                                                }}>
                                                    ✅
                                                </span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : states.future.points ? (
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '0 0 1.5rem 0'
                            }}>
                                {states.future.points.map((point, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.5rem',
                                        marginBottom: '0.625rem',
                                        color: '#86efac'
                                    }}>
                                        <span style={{
                                            color: '#10b981',
                                            fontSize: '1rem',
                                            marginTop: '-2px'
                                        }}>
                                            ✓
                                        </span>
                                        <span style={{ fontSize: '0.875rem', lineHeight: '1.4' }}>
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        <div style={{
                            padding: '0.75rem',
                            background: 'rgba(16, 185, 129, 0.1)',
                            borderRadius: '0.5rem',
                            border: '1px solid rgba(16, 185, 129, 0.2)'
                        }}>
                            <p style={{
                                color: '#86efac',
                                fontSize: '0.75rem',
                                fontStyle: 'italic' as const,
                                margin: 0,
                                lineHeight: '1.4'
                            }}>
                                "{states.future.emotion}"
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '2rem'
                }}>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#cbd5e1',
                        fontWeight: '300'
                    }}>
                        Which reality do you want for your team?
                    </p>
                </div>

                {/* Next Step Button */}
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button
                        onClick={() => scrollToSection('step-3')}
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
                        Why Now?
                        <ChevronDown style={{ width: '1rem', height: '1rem' }} />
                    </button>
                </div>
            </div>
        </section>
    );
} 