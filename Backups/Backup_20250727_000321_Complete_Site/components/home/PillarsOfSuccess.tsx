'use client';

import { Brain, ChevronDown, Cpu, Target, UserCheck, Workflow } from 'lucide-react';

interface PillarsOfSuccessProps {
    selectedFunction: string;
}

const PILLAR_CONTENT = {
    fpa: {
        process: {
            tagline: "Transform your 15-day planning cycles into continuous, AI-driven forecasting",
            focus: "Forecast cycle reduction from 15 days to 3",
            metric: "Planning cycle time",
            quickWin: "Automated variance analysis",
            priority: "Monthly forecast workflow"
        },
        dataAI: {
            tagline: "Unlock predictive insights from your historical patterns",
            priority: "Time series forecasting",
            dataFocus: "Historical financials + drivers",
            useCase: "Anomaly detection in actuals",
            roi: "95% forecast accuracy"
        },
        technology: {
            tagline: "Create a connected planning ecosystem with real-time data",
            integration: "ERP + CRM + HCM systems",
            architecture: "Collaborative planning platform",
            scalability: "Multi-scenario processing",
            realTime: "Daily sales feeds"
        },
        people: {
            tagline: "Evolve from number crunchers to strategic advisors",
            skills: "Data storytelling, scenario modeling, AI prompting",
            evolution: "Financial Analyst → Strategic Business Partner",
            training: "Predictive analytics and visualization",
            metric: "80% time on strategic work"
        }
    },
    procureToPay: {
        process: {
            tagline: "Achieve 99% touchless invoice processing while strengthening controls",
            focus: "Invoice automation end-to-end",
            metric: "Manual touch rate (<1%)",
            quickWin: "Auto-coding implementation",
            priority: "3-way match workflow"
        },
        dataAI: {
            tagline: "Extract intelligence from every invoice and payment",
            priority: "OCR and document intelligence",
            dataFocus: "Invoice data + vendor master",
            useCase: "Duplicate payment prevention",
            roi: "2% spend recovery"
        },
        technology: {
            tagline: "Build straight-through processing from PO to payment",
            integration: "ERP + procurement + banking",
            architecture: "Document processing pipeline",
            scalability: "Invoice volume growth",
            realTime: "Payment status updates"
        },
        people: {
            tagline: "Shift focus from processing to strategic sourcing",
            skills: "Spend analytics, supplier relationship management",
            evolution: "AP Clerk → Procurement Analyst",
            training: "Strategic sourcing and negotiation",
            metric: "$10M+ in sourcing savings"
        }
    },
    orderToCash: {
        process: {
            tagline: "Accelerate collections with AI-driven customer workflows",
            focus: "Collection process optimization",
            metric: "Days Sales Outstanding (DSO)",
            quickWin: "Automated dunning sequences",
            priority: "Dispute resolution workflow"
        },
        dataAI: {
            tagline: "Predict payment behavior before sending invoices",
            priority: "Payment prediction models",
            dataFocus: "Customer payment history",
            useCase: "Collection strategy optimization",
            roi: "30% DSO reduction"
        },
        technology: {
            tagline: "Connect customer touchpoints for seamless experiences",
            integration: "ERP + CRM + billing systems",
            architecture: "Customer portal infrastructure",
            scalability: "Transaction volume",
            realTime: "Credit decisions"
        },
        people: {
            tagline: "Transform from collectors to customer success partners",
            skills: "Customer analytics, relationship management",
            evolution: "Collector → Revenue Optimization Specialist",
            training: "Predictive analytics and CRM",
            metric: "95% customer satisfaction"
        }
    },
    costAccounting: {
        process: {
            tagline: "Move from monthly standards to real-time cost intelligence",
            focus: "Dynamic cost calculation",
            metric: "Cost update frequency",
            quickWin: "Automated variance explanations",
            priority: "Cost roll-up workflow"
        },
        dataAI: {
            tagline: "Transform cost data into profitability intelligence",
            priority: "Cost driver analysis",
            dataFocus: "Transactional cost data",
            useCase: "Margin optimization",
            roi: "5% margin improvement"
        },
        technology: {
            tagline: "Integrate operations data for accurate cost allocation",
            integration: "ERP + MES + inventory",
            architecture: "Cost calculation engine",
            scalability: "SKU complexity",
            realTime: "Production costs"
        },
        people: {
            tagline: "Become profitability consultants, not cost calculators",
            skills: "Margin analysis, pricing strategy, AI modeling",
            evolution: "Cost Accountant → Profitability Analyst",
            training: "Advanced analytics and pricing",
            metric: "5% margin improvement"
        }
    },
    controllership: {
        process: {
            tagline: "Compress your 15-day close into a 3-day continuous process",
            focus: "Close acceleration",
            metric: "Days to close",
            quickWin: "Auto-reconciliation setup",
            priority: "Month-end close workflow"
        },
        dataAI: {
            tagline: "Ensure accuracy with continuous AI validation",
            priority: "Anomaly detection",
            dataFocus: "GL transactions + sub-ledgers",
            useCase: "Journal entry validation",
            roi: "Zero material adjustments"
        },
        technology: {
            tagline: "Automate the close with integrated reconciliation",
            integration: "All financial systems",
            architecture: "Close management platform",
            scalability: "Entity consolidation",
            realTime: "Balance updates"
        },
        people: {
            tagline: "Lead continuous improvement, not just compliance",
            skills: "Process automation, data analytics, risk management",
            evolution: "Controller → Strategic Finance Leader",
            training: "Automation tools and analytics",
            metric: "3-day close achievement"
        }
    },
    corporateFinance: {
        process: {
            tagline: "Automate compliance while optimizing cash and tax positions",
            focus: "Treasury and tax automation",
            metric: "Manual compliance tasks",
            quickWin: "Cash position automation",
            priority: "Daily cash workflow"
        },
        dataAI: {
            tagline: "Optimize positions with predictive analytics",
            priority: "Cash flow forecasting",
            dataFocus: "Banking + transaction data",
            useCase: "Liquidity optimization",
            roi: "15% cash efficiency gain"
        },
        technology: {
            tagline: "Connect all banking and tax systems globally",
            integration: "Banks + TMS + tax engines",
            architecture: "Treasury workstation",
            scalability: "Multi-currency/entity",
            realTime: "Cash positions"
        },
        people: {
            tagline: "Optimize enterprise value, not just manage cash",
            skills: "AI modeling, risk analytics, strategic planning",
            evolution: "Treasury Analyst → Capital Optimizer",
            training: "Advanced modeling and automation",
            metric: "200bps funding advantage"
        }
    },
    investorRelations: {
        process: {
            tagline: "Streamline earnings prep from weeks to days with AI assistance",
            focus: "Earnings process efficiency",
            metric: "Earnings prep time",
            quickWin: "Automated peer analysis",
            priority: "Quarterly earnings workflow"
        },
        dataAI: {
            tagline: "Generate insights that shape your equity story",
            priority: "Natural language generation",
            dataFocus: "Financial + market data",
            useCase: "Earnings narrative creation",
            roi: "20% valuation premium"
        },
        technology: {
            tagline: "Create an intelligent communication platform",
            integration: "Financial systems + market data",
            architecture: "IR portal and analytics",
            scalability: "Stakeholder growth",
            realTime: "Market movements"
        },
        people: {
            tagline: "Shape market perception with data-driven narratives",
            skills: "Data visualization, AI content creation, analytics",
            evolution: "IR Manager → Strategic Storyteller",
            training: "Advanced analytics and communication",
            metric: "Top quartile valuation multiple"
        }
    },
    default: {
        process: {
            tagline: "Standardize and optimize your finance workflows",
            focus: "End-to-end process optimization",
            metric: "Process efficiency",
            quickWin: "Workflow automation",
            priority: "Core finance processes"
        },
        dataAI: {
            tagline: "Enable intelligent decision-making with AI",
            priority: "Predictive analytics",
            dataFocus: "Financial and operational data",
            useCase: "Automated insights",
            roi: "Strategic value creation"
        },
        technology: {
            tagline: "Build a scalable digital foundation",
            integration: "Core financial systems",
            architecture: "Modern tech stack",
            scalability: "Future growth",
            realTime: "Critical processes"
        },
        people: {
            tagline: "Transform your team for the AI era",
            skills: "Digital and analytical capabilities",
            evolution: "Traditional → Strategic roles",
            training: "AI and automation tools",
            metric: "Team productivity gains"
        }
    }
};

export default function PillarsOfSuccess({ selectedFunction }: PillarsOfSuccessProps) {
    const functionContent = PILLAR_CONTENT[selectedFunction as keyof typeof PILLAR_CONTENT] || PILLAR_CONTENT.default;

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

    const pillars = [
        {
            icon: <Workflow />,
            title: "Process",
            subtitle: "Standardize & Optimize",
            coreElements: [
                "Map and document current processes",
                "Identify automation opportunities",
                "Design future state workflows",
                "Establish governance framework"
            ],
            dynamic: functionContent.process,
            color: "#3b82f6"
        },
        {
            icon: <Brain />,
            title: "Data & AI",
            subtitle: "Enable Intelligence",
            coreElements: [
                "Assess data quality and readiness",
                "Build unified data model",
                "Deploy AI agents incrementally",
                "Establish AI governance policies"
            ],
            dynamic: functionContent.dataAI,
            color: "#8b5cf6"
        },
        {
            icon: <Cpu />,
            title: "Technology",
            subtitle: "Build the Foundation",
            coreElements: [
                "Integrate with existing systems",
                "Ensure security and compliance",
                "Plan for scalability",
                "Enable real-time processing"
            ],
            dynamic: functionContent.technology,
            color: "#10b981"
        },
        {
            icon: <UserCheck />,
            title: "People",
            subtitle: "Transform Together",
            coreElements: [
                "Upskill teams on AI tools",
                "Redefine roles and responsibilities",
                "Build change champions",
                "Create continuous learning culture"
            ],
            dynamic: functionContent.people,
            color: "#f59e0b"
        }
    ];

    return (
        <section id="step-5" style={{
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
                        Step 5: The Pillars for Success
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
                        Four Pillars to Support Your Transformation
                    </h2>
                    <p style={{
                        fontSize: '1rem',
                        color: '#cbd5e1',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontWeight: '300'
                    }}>
                        Success requires excellence across all dimensions of change
                    </p>
                </div>

                {/* Pillars Grid - 4 columns */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                }}>
                    {pillars.map((pillar, idx) => (
                        <div key={idx} style={{
                            background: 'rgba(17, 24, 39, 0.5)',
                            borderRadius: '0.5rem',
                            padding: '1rem',
                            border: '2px solid transparent',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${pillar.color}33`;
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 10px 20px ${pillar.color}26`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            {/* Pillar Header */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column' as const,
                                alignItems: 'center',
                                marginBottom: '0.75rem',
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    background: `linear-gradient(135deg, ${pillar.color}, ${pillar.color}cc)`,
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    marginBottom: '0.5rem'
                                }}>
                                    {pillar.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: '#ffffff',
                                    marginBottom: '0.125rem'
                                }}>
                                    {pillar.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.688rem',
                                    color: pillar.color,
                                    fontWeight: '500'
                                }}>
                                    {pillar.subtitle}
                                </p>
                            </div>

                            {/* Dynamic Tagline */}
                            <p style={{
                                fontSize: '0.75rem',
                                color: '#fbbf24',
                                fontStyle: 'italic' as const,
                                marginBottom: '0.75rem',
                                lineHeight: '1.3',
                                minHeight: '2.5rem'
                            }}>
                                "{pillar.dynamic.tagline}"
                            </p>

                            {/* Core Elements */}
                            <div style={{
                                background: 'rgba(148, 163, 184, 0.05)',
                                borderRadius: '0.375rem',
                                padding: '0.5rem',
                                marginBottom: '0.75rem'
                            }}>
                                <h4 style={{
                                    fontSize: '0.688rem',
                                    fontWeight: '600',
                                    color: '#94a3b8',
                                    textTransform: 'uppercase' as const,
                                    letterSpacing: '0.05em',
                                    marginBottom: '0.375rem'
                                }}>
                                    Core Elements:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {pillar.coreElements.map((element, elemIdx) => (
                                        <li key={elemIdx} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.25rem',
                                            marginBottom: '0.188rem',
                                            fontSize: '0.688rem',
                                            color: '#cbd5e1'
                                        }}>
                                            <span style={{
                                                color: pillar.color,
                                                flexShrink: 0,
                                                marginTop: '0.063rem',
                                                fontSize: '0.625rem'
                                            }}>•</span>
                                            <span>{element}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Dynamic Details */}
                            <div style={{
                                fontSize: '0.688rem'
                            }}>
                                {pillar.title === "Process" && (
                                    <>
                                        <div style={{ marginBottom: '0.375rem' }}>
                                            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.625rem' }}>Focus:</span>
                                            <p style={{ color: '#e2e8f0', margin: 0, fontSize: '0.688rem' }}>{(pillar.dynamic as any).focus}</p>
                                        </div>
                                        <div style={{ marginBottom: '0.375rem' }}>
                                            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.625rem' }}>Quick Win:</span>
                                            <p style={{ color: '#e2e8f0', margin: 0, fontSize: '0.688rem' }}>{(pillar.dynamic as any).quickWin}</p>
                                        </div>
                                    </>
                                )}
                                {pillar.title === "Data & AI" && (
                                    <>
                                        <div style={{ marginBottom: '0.375rem' }}>
                                            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.625rem' }}>Priority AI:</span>
                                            <p style={{ color: '#e2e8f0', margin: 0, fontSize: '0.688rem' }}>{(pillar.dynamic as any).priority}</p>
                                        </div>
                                        <div style={{ marginBottom: '0.375rem' }}>
                                            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.625rem' }}>ROI Driver:</span>
                                            <p style={{ color: '#e2e8f0', margin: 0, fontSize: '0.688rem' }}>{(pillar.dynamic as any).roi}</p>
                                        </div>
                                    </>
                                )}
                                {pillar.title === "Technology" && (
                                    <>
                                        <div style={{ marginBottom: '0.375rem' }}>
                                            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.625rem' }}>Integration:</span>
                                            <p style={{ color: '#e2e8f0', margin: 0, fontSize: '0.688rem' }}>{(pillar.dynamic as any).integration}</p>
                                        </div>
                                        <div style={{ marginBottom: '0.375rem' }}>
                                            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.625rem' }}>Real-time:</span>
                                            <p style={{ color: '#e2e8f0', margin: 0, fontSize: '0.688rem' }}>{(pillar.dynamic as any).realTime}</p>
                                        </div>
                                    </>
                                )}
                                {pillar.title === "People" && (
                                    <>
                                        <div style={{ marginBottom: '0.375rem' }}>
                                            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.625rem' }}>Role Evolution:</span>
                                            <p style={{ color: '#e2e8f0', margin: 0, fontSize: '0.688rem' }}>{(pillar.dynamic as any).evolution}</p>
                                        </div>
                                        <div style={{ marginBottom: '0.375rem' }}>
                                            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.625rem' }}>Success Metric:</span>
                                            <p style={{ color: '#e2e8f0', margin: 0, fontSize: '0.688rem' }}>{(pillar.dynamic as any).metric}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{
                    textAlign: 'center',
                    padding: '1rem',
                    background: 'rgba(59, 130, 246, 0.05)',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    marginBottom: '1.5rem'
                }}>
                    <Target style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        color: '#60a5fa',
                        margin: '0 auto 0.5rem auto'
                    }} />
                    <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: '0.375rem'
                    }}>
                        Excellence Across All Dimensions
                    </h3>
                    <p style={{
                        fontSize: '0.813rem',
                        color: '#cbd5e1',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Success in finance transformation requires a holistic approach. These four pillars work together
                        to ensure your AI journey delivers sustainable value.
                    </p>
                </div>

                {/* Next Step Button */}
                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={() => scrollToSection('step-6')}
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
                        Let's Get Started
                        <ChevronDown style={{ width: '1rem', height: '1rem' }} />
                    </button>
                </div>
            </div>
        </section>
    );
} 