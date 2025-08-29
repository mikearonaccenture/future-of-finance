'use client';

import { ComprehensiveAIAgents, getAgentsForTower as getComprehensiveAgentsForTower } from '@/ai-agents-expanded';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import SEO from '@/components/SEO';
import { getActivitiesForPlatform, getAgentsForWorkflow, getWorkflowsForActivity, PLATFORMS } from '@/finance-ecosystem-complete';
import { ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
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
            { name: 'Strategic Spend Analytics Platform', status: 'coming-soon' },
            { name: 'Supplier Collaboration Portal', status: 'coming-soon' }
        ]
    },
    {
        name: 'Order to Cash',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        prototypes: [
            { name: 'Intelligent Receivables Platform', status: 'coming-soon' },
            { name: 'Customer Experience Portal', status: 'coming-soon' },
            { name: 'Revenue Intelligence Suite', status: 'coming-soon' }
        ]
    },
    {
        name: 'Cost Accounting',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        prototypes: [
            { name: 'Dynamic Cost Engine', status: 'coming-soon' },
            { name: 'Profitability Analytics Platform', status: 'coming-soon' },
            { name: 'Inventory Intelligence System', status: 'coming-soon' }
        ]
    },
    {
        name: 'Controllership',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        prototypes: [
            { name: 'Continuous Close Platform', status: 'coming-soon' },
            { name: 'Control & Compliance Suite', status: 'coming-soon' },
            { name: 'Financial Reporting Hub', status: 'coming-soon' }
        ]
    },
    {
        name: 'Corporate Finance',
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        prototypes: [
            { name: 'Treasury Command Center', status: 'coming-soon' },
            { name: 'Tax Intelligence Platform', status: 'coming-soon' },
            { name: 'Risk Management Suite', status: 'coming-soon' }
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
            { name: 'Earnings Intelligence Platform', status: 'coming-soon' },
            { name: 'Stakeholder Engagement Hub', status: 'coming-soon' },
            { name: 'Market Intelligence Suite', status: 'coming-soon' }
        ]
    }
];

export default function SeeTheFuture() {
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
                title="See the Future - AI Finance Platforms & Capabilities"
                description="Explore our comprehensive suite of AI-powered finance platforms. From automated FP&A to intelligent reporting, discover how we're transforming every aspect of finance operations."
            />
            <div style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
                <Navigation />

                {/* Hero Section */}
                <section style={{
                    paddingTop: '6rem',
                    paddingBottom: '3rem',
                    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                    minHeight: '300px',
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
                            See the{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Future of Finance
                            </span>
                        </h1>
                        <p style={{
                            fontSize: '1.5rem',
                            color: '#94a3b8',
                            marginBottom: '3rem',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            Transforming finance through AI-powered platforms
                        </p>
                    </div>
                </section>

                {/* Finance Activities Section */}
                <section style={{
                    padding: '4rem 1rem',
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
                            marginBottom: '3rem'
                        }}>
                            44 core business activities across the finance function - today, still performed tomorrow
                        </p>

                        {/* Finance Activities Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(7, 1fr)`,
                            gap: '0.75rem',
                            overflowX: 'auto'
                        }}>
                            {/* Procure to Pay Activities */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.75rem',
                                padding: '1.25rem',
                                minHeight: '380px'
                            }}>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Procure to Pay
                                </h3>
                                <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                                    5 Activities
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(102, 126, 234, 0.3)' }}>Invoice to Pay</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(102, 126, 234, 0.3)' }}>Vendor Statement Reconciliation</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(102, 126, 234, 0.3)' }}>Procurement Card Administration</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(102, 126, 234, 0.3)' }}>Travel & Expense Administration</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(102, 126, 234, 0.3)' }}>Invoice to Pay Support Help Desk</li>
                                </ul>
                            </div>

                            {/* Order to Cash Activities */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.75rem',
                                padding: '1.25rem',
                                minHeight: '380px'
                            }}>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Order to Cash
                                </h3>
                                <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                                    6 Activities
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(240, 147, 251, 0.3)' }}>Receivable Management</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(240, 147, 251, 0.3)' }}>Manage Customer Billing</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(240, 147, 251, 0.3)' }}>Collections & Disputes Management</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(240, 147, 251, 0.3)' }}>Deductions Management</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(240, 147, 251, 0.3)' }}>Manage Customer Requests & Inquiries</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(240, 147, 251, 0.3)' }}>Customer Order & Contracts Management</li>
                                </ul>
                            </div>

                            {/* Cost Accounting Activities */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.75rem',
                                padding: '1.25rem',
                                minHeight: '380px'
                            }}>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Cost Accounting
                                </h3>
                                <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                                    3 Activities
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(79, 172, 254, 0.3)' }}>Product Costing</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(79, 172, 254, 0.3)' }}>Product & Service Costing</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(79, 172, 254, 0.3)' }}>Inventory Accounting</li>
                                </ul>
                            </div>

                            {/* Controllership Activities */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.75rem',
                                padding: '1rem',
                                minHeight: '500px'
                            }}>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginBottom: '0.75rem',
                                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Controllership
                                </h3>
                                <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                                    12 Activities
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>Lease Accounting</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>Partner and Revenue Accounting</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>Project Accounting</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>Period Close</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>BS Reconciliation & Analytics</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>Perform Joint Venture Accounting</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>General Accounting</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>Intercompany Accounting</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>Asset Accounting</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>Revenue Assurance Control Management</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>Accounts Payable Reconciliation</li>
                                    <li style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.375rem', paddingLeft: '0.5rem', borderLeft: '2px solid rgba(250, 112, 154, 0.3)' }}>Perform Financial Reporting</li>
                                </ul>
                            </div>

                            {/* Corporate Finance Activities */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.75rem',
                                padding: '1.25rem',
                                minHeight: '380px'
                            }}>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Corporate Finance
                                </h3>
                                <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                                    8 Activities
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(48, 207, 208, 0.3)' }}>Cash Management and Banking</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(48, 207, 208, 0.3)' }}>Manage Tax Planning and Strategy</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(48, 207, 208, 0.3)' }}>Treasury Operating Model & Governance</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(48, 207, 208, 0.3)' }}>Bank Relationship Management</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(48, 207, 208, 0.3)' }}>Cash and Liquidity Management</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(48, 207, 208, 0.3)' }}>Investment Management</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(48, 207, 208, 0.3)' }}>Debt Management</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(48, 207, 208, 0.3)' }}>Financial Risk Management</li>
                                </ul>
                            </div>

                            {/* FP&A Activities */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.75rem',
                                padding: '1.25rem',
                                minHeight: '380px'
                            }}>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    FP&A
                                </h3>
                                <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                                    8 Activities
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(59, 130, 246, 0.3)' }}>Financial Planning and Analysis</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(59, 130, 246, 0.3)' }}>Strategic or LR Planning</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(59, 130, 246, 0.3)' }}>Integrated Enterprise Planning</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(59, 130, 246, 0.3)' }}>Budgeting</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(59, 130, 246, 0.3)' }}>Dynamic Forecasting</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(59, 130, 246, 0.3)' }}>Decision Support & Modelling</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(59, 130, 246, 0.3)' }}>Reporting & Analysis</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(59, 130, 246, 0.3)' }}>Data / System Effectiveness & Governance</li>
                                </ul>
                            </div>

                            {/* Investor Relations Activities */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.75rem',
                                padding: '1.25rem',
                                minHeight: '380px'
                            }}>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    background: 'linear-gradient(135deg, #764ba2 0%, #f953c6 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Investor Relations
                                </h3>
                                <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                                    6 Activities
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(118, 75, 162, 0.3)' }}>Investor Relations</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(118, 75, 162, 0.3)' }}>Quarterly Earnings</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(118, 75, 162, 0.3)' }}>Competitive Intelligence</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(118, 75, 162, 0.3)' }}>Stock Surveillance</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(118, 75, 162, 0.3)' }}>Investment Community Relationship Mgmt</li>
                                    <li style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(118, 75, 162, 0.3)' }}>Marketing & Events</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Platforms Section */}
                <section style={{
                    padding: '4rem 1rem',
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
                            Simplified Through Activity-Focused Platforms
                        </h2>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#94a3b8',
                            textAlign: 'center',
                            marginBottom: '3rem'
                        }}>
                            21 unified platforms that streamline your finance operations
                        </p>

                        {/* The Power of Platform Consolidation */}
                        <div style={{
                            textAlign: 'center',
                            padding: '2rem',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            marginBottom: '3rem',
                            maxWidth: '1200px',
                            margin: '0 auto 3rem'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#60a5fa' }}>
                                The Power of Platform Consolidation
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fbbf24' }}>44</div>
                                    <div style={{ color: '#94a3b8' }}>Business Activities</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#22c55e' }}>21</div>
                                    <div style={{ color: '#94a3b8' }}>Unified Platforms</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#8b5cf6' }}>300+</div>
                                    <div style={{ color: '#94a3b8' }}>AI Agents</div>
                                </div>
                            </div>
                            <p style={{ marginTop: '1.5rem', color: '#94a3b8', fontSize: '1rem' }}>
                                Platform consolidation drives simplification, standardization, and rationalization across your finance operations
                            </p>
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

                {/* AI Agents Section */}
                <section style={{
                    background: '#0a0a0a',
                    padding: '4rem 1rem',
                    minHeight: '100vh'
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
                            marginBottom: '3rem'
                        }}>
                            Intelligent assistants that think, learn, and evolve with your business
                        </p>

                        {/* Call to Action */}
                        <div style={{ marginTop: '3rem', marginBottom: '3rem', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <Link href="/ecosystem">
                                <button style={{
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '2rem',
                                    padding: '1rem 3rem',
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    Explore the Agent Library
                                    <ChevronRight size={20} />
                                </button>
                            </Link>

                            <Link href="/workflows">
                                <button style={{
                                    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '2rem',
                                    padding: '1rem 3rem',
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    See Agents in Action
                                    <ChevronRight size={20} />
                                </button>
                            </Link>
                        </div>

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
                                            transition: 'all 0.3s ease',
                                            ':hover': {
                                                borderColor: 'rgba(59, 130, 246, 0.5)',
                                                background: 'rgba(255, 255, 255, 0.05)'
                                            }
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

                {/* Tower Details Modal */}
                                    {selectedTower && (
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
                )}

                {/* Agent Detail Popup */}
                {selectedAgent && (
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
                )}

                <Footer />
            </div>
        </>
    );
} 