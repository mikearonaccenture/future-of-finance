'use client';

import { ComprehensiveAIAgents } from '@/ai-agents-expanded';
import SEO from '@/components/SEO';
import Navigation from '@/components/layout/Navigation';
import { FINANCE_TAXONOMY } from '@/finance-ecosystem-complete';
import { corporateFinanceWorkflows } from '@/workflows/corporate-finance-workflows';
import { costAccountingWorkflows } from '@/workflows/cost-accounting-workflows';
import { fpAndAWorkflows } from '@/workflows/fpa-workflows';
import { investorRelationsWorkflows } from '@/workflows/investor-relations-workflows';
import { orderToCashWorkflows } from '@/workflows/order-to-cash-workflows';
import { procureToPayWorkflows } from '@/workflows/procure-to-pay-workflows';
import { recordToReportWorkflows } from '@/workflows/record-to-report-workflows';
import { AlertCircle, Bot, CheckCircle, Clock, Users, X } from 'lucide-react';
import React, { useState } from 'react'; // Added for React.Fragment

// Combine all workflows
const allWorkflows = [
    ...procureToPayWorkflows,
    ...orderToCashWorkflows,
    ...recordToReportWorkflows,
    ...fpAndAWorkflows,
    ...corporateFinanceWorkflows,
    ...costAccountingWorkflows,
    ...investorRelationsWorkflows
];

// Get agent details by ID
const getAgentById = (agentId: string) => {
    const allAgents = [
        ...ComprehensiveAIAgents.procureToPay,
        ...ComprehensiveAIAgents.orderToCash,
        ...ComprehensiveAIAgents.costAccounting,
        ...ComprehensiveAIAgents.recordToReport,
        ...ComprehensiveAIAgents.corporateFinance,
        ...ComprehensiveAIAgents.fpAndA,
        ...ComprehensiveAIAgents.investorRelations,
        ...ComprehensiveAIAgents.crossFunctionalAgents
    ];
    return allAgents.find(agent => agent.id === agentId);
};

export default function WorkflowsPage() {
    const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
    const [selectedWorkflow, setSelectedWorkflow] = useState<any>(null);
    const [viewMode, setViewMode] = useState<'current' | 'future'>('future');
    const [selectedStep, setSelectedStep] = useState<any>(null);

    // Get workflows for selected activity
    const getWorkflowsForActivity = (activityId: string) => {
        const activity = FINANCE_TAXONOMY.find(a => a.id === activityId);
        if (!activity) return [];

        // Map activity names to workflow names
        const workflowMap: { [key: string]: string[] } = {
            // Procure to Pay activities
            'p2p-invoice-pay': ['Invoice to Pay'],
            'p2p-vendor-mgmt': ['Vendor Management'],
            'p2p-procurement-card': ['Procurement Operations'],
            'p2p-travel-expense': ['Travel & Expense Management'],
            'p2p-ap-reporting': ['Contract Management'],
            // Order to Cash activities
            'o2c-customer-order': ['Customer Order Management'],
            'o2c-receivable-mgmt': ['Credit Management', 'Collections Management'],
            'o2c-customer-billing': ['Customer Billing'],
            'o2c-collections': ['Collections Management', 'Deductions Management'],
            'o2c-cash-application': ['Cash Application'],
            'o2c-credit-mgmt': ['Credit Management'],
            // Controllership (Record to Report) activities
            'r2r-period-close': ['Period Close'],
            'r2r-general-accounting': ['General Accounting'],
            'r2r-financial-reporting': ['Financial Reporting'],
            'r2r-consolidation': ['Consolidation & Intercompany'],
            'r2r-regulatory': ['Regulatory & Compliance Reporting'],
            'r2r-fixed-assets': ['Fixed Assets & Lease Accounting'],
            // FP&A activities
            'fpa-financial-planning': ['Financial Planning and Analysis'],
            'fpa-strategic-planning': ['Strategic or LR Planning'],
            'fpa-integrated-planning': ['Integrated Enterprise Planning'],
            'fpa-budgeting': ['Budgeting'],
            'fpa-dynamic-forecasting': ['Dynamic Forecasting'],
            'fpa-decision-support': ['Decision Support & Modeling'],
            // Corporate Finance activities
            'cf-ma-support': ['M&A Support'],
            'cf-capital-allocation': ['Capital Allocation'],
            'cf-valuation': ['Valuation Analysis'],
            'cf-strategic-initiatives': ['Strategic Initiatives'],
            'cf-investment-analysis': ['Investment Analysis'],
            'cf-debt-mgmt': ['Debt Management'],
            'cf-dividend-policy': ['Dividend Policy'],
            'cf-financial-strategy': ['Financial Strategy'],
            // Cost Accounting activities
            'ca-product-costing': ['Product Costing'],
            'ca-service-profitability': ['Service Line Profitability'],
            'ca-cost-allocation': ['Cost Allocation'],
            'ca-variance-analysis': ['Variance Analysis'],
            'ca-standard-costing': ['Standard Costing'],
            'ca-activity-based': ['Activity-Based Costing'],
            // Investor Relations activities
            'ir-earnings-comm': ['Earnings Communications'],
            'ir-investor-meetings': ['Investor Meetings'],
            'ir-market-analysis': ['Market Analysis'],
            'ir-esg-reporting': ['ESG Reporting'],
            'ir-shareholder-services': ['Shareholder Services'],
            'ir-regulatory-filings': ['Regulatory Filings']
        };

        const workflowNames = workflowMap[activityId] || [];
        return allWorkflows.filter(w => workflowNames.includes(w.name));
    };

    const selectedWorkflows = selectedActivity ? getWorkflowsForActivity(selectedActivity) : [];

    return (
        <>
            <SEO
                title="See Agents in Action | Future of Finance"
                description="Explore how AI agents transform finance workflows. See detailed step-by-step processes with AI automation and human checkpoints."
            />
            <Navigation />

            <div style={{
                minHeight: '100vh',
                background: '#0a0a0a',
                color: '#e2e8f0',
                paddingTop: '5rem'
            }}>
                {/* Header */}
                <div style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(10, 10, 10, 0.8)',
                    backdropFilter: 'blur(10px)',
                    position: 'sticky',
                    top: '4rem',
                    zIndex: 40
                }}>
                    <div style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '1.5rem 2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <h1 style={{
                                fontSize: '1.875rem',
                                fontWeight: 'bold',
                                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                margin: 0
                            }}>
                                See Agents in Action
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div style={{ display: 'flex', height: 'calc(100vh - 80px)' }}>
                    {/* Left Sidebar - Activities */}
                    <div style={{
                        width: '300px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                        overflowY: 'auto',
                        padding: '1.5rem'
                    }}>
                        <h2 style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            color: '#e2e8f0'
                        }}>
                            Select an Activity
                        </h2>

                        {/* Group activities by functional area */}
                        {['Procure to Pay', 'Order to Cash', 'Controllership', 'FP&A', 'Corporate Finance', 'Cost Accounting', 'Investor Relations'].map(area => {
                            const areaActivities = FINANCE_TAXONOMY.filter(a => a.functionalArea === area);
                            if (areaActivities.length === 0) return null;

                            return (
                                <div key={area} style={{ marginBottom: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '0.875rem',
                                        fontWeight: '600',
                                        color: '#94a3b8',
                                        marginBottom: '0.75rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {area}
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {areaActivities.map(activity => {
                                            const hasWorkflow = getWorkflowsForActivity(activity.id).length > 0;

                                            return (
                                                <button
                                                    key={activity.id}
                                                    onClick={() => {
                                                        if (hasWorkflow) {
                                                            setSelectedActivity(activity.id);
                                                            setSelectedWorkflow(getWorkflowsForActivity(activity.id)[0]);
                                                        }
                                                    }}
                                                    disabled={!hasWorkflow}
                                                    style={{
                                                        background: selectedActivity === activity.id
                                                            ? 'rgba(139, 92, 246, 0.2)'
                                                            : hasWorkflow
                                                                ? 'rgba(255, 255, 255, 0.02)'
                                                                : 'transparent',
                                                        border: selectedActivity === activity.id
                                                            ? '1px solid rgba(139, 92, 246, 0.5)'
                                                            : '1px solid rgba(255, 255, 255, 0.1)',
                                                        borderRadius: '0.5rem',
                                                        padding: '0.75rem 1rem',
                                                        textAlign: 'left',
                                                        color: hasWorkflow ? '#f3f4f6' : '#6b7280',
                                                        cursor: hasWorkflow ? 'pointer' : 'not-allowed',
                                                        transition: 'all 0.2s ease',
                                                        fontSize: '0.875rem',
                                                        opacity: hasWorkflow ? 1 : 0.5
                                                    }}
                                                >
                                                    {activity.name}
                                                    {!hasWorkflow && (
                                                        <span style={{
                                                            fontSize: '0.75rem',
                                                            color: '#6b7280',
                                                            marginLeft: '0.5rem'
                                                        }}>
                                                            (Coming Soon)
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Main Content Area */}
                    <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
                        {!selectedWorkflow ? (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                textAlign: 'center'
                            }}>
                                <Bot size={64} style={{ color: '#6b7280', marginBottom: '1rem' }} />
                                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                                    See Agents in Action
                                </h2>
                                <p style={{ color: '#94a3b8', maxWidth: '500px', fontSize: '1.125rem' }}>
                                    Click on a workflow to the left to see an optimized workflow with AI agents in action.
                                </p>
                            </div>
                        ) : (
                            <div>
                                {/* Workflow Header */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                        {selectedWorkflow.name}
                                    </h2>
                                    <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>
                                        {selectedWorkflow.description}
                                    </p>

                                    {/* Platform Badge */}
                                    {selectedWorkflow.platform && (
                                        <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                                borderRadius: '2rem',
                                                padding: '0.5rem 1.25rem',
                                                fontSize: '0.875rem'
                                            }}>
                                                <span style={{ color: '#94a3b8' }}>Platform:</span>
                                                <span style={{ color: '#60a5fa', fontWeight: '600' }}>
                                                    {selectedWorkflow.platform}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* View Mode Toggle */}
                                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                        <button
                                            onClick={() => setViewMode('current')}
                                            style={{
                                                padding: '0.5rem 1.5rem',
                                                background: viewMode === 'current'
                                                    ? 'rgba(239, 68, 68, 0.2)'
                                                    : 'transparent',
                                                border: '1px solid ' + (viewMode === 'current'
                                                    ? 'rgba(239, 68, 68, 0.5)'
                                                    : 'rgba(255, 255, 255, 0.2)'),
                                                borderRadius: '0.5rem',
                                                color: viewMode === 'current' ? '#ef4444' : '#94a3b8',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease'
                                            }}
                                        >
                                            Current State
                                        </button>
                                        <button
                                            onClick={() => setViewMode('future')}
                                            style={{
                                                padding: '0.5rem 1.5rem',
                                                background: viewMode === 'future'
                                                    ? 'rgba(34, 197, 94, 0.2)'
                                                    : 'transparent',
                                                border: '1px solid ' + (viewMode === 'future'
                                                    ? 'rgba(34, 197, 94, 0.5)'
                                                    : 'rgba(255, 255, 255, 0.2)'),
                                                borderRadius: '0.5rem',
                                                color: viewMode === 'future' ? '#22c55e' : '#94a3b8',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease'
                                            }}
                                        >
                                            Future State (AI-Powered)
                                        </button>
                                    </div>
                                </div>

                                {/* Visual Process Flow */}
                                <div style={{
                                    overflowX: 'auto',
                                    overflowY: 'hidden',
                                    padding: '2rem 0',
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    borderRadius: '1rem',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '2rem',
                                        padding: '2rem',
                                        minWidth: 'fit-content'
                                    }}>
                                        {selectedWorkflow.currentStateWorkflow.map((step: any, idx: number) => {
                                            const state = viewMode === 'current' ? step.currentState : step.futureState;
                                            const isLastStep = idx === selectedWorkflow.currentStateWorkflow.length - 1;

                                            return (
                                                <React.Fragment key={idx}>
                                                    {/* Process Step Box */}
                                                    <div style={{
                                                        background: viewMode === 'future'
                                                            ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
                                                            : 'rgba(239, 68, 68, 0.1)',
                                                        border: `2px solid ${viewMode === 'future'
                                                            ? 'rgba(139, 92, 246, 0.3)'
                                                            : 'rgba(239, 68, 68, 0.3)'}`,
                                                        borderRadius: '1rem',
                                                        padding: '1.5rem',
                                                        width: '300px',
                                                        minHeight: '200px',
                                                        position: 'relative',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        transform: 'scale(1)',
                                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                                                    }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.transform = 'scale(1.05)';
                                                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.transform = 'scale(1)';
                                                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                                                        }}
                                                        onClick={() => setSelectedStep({ ...step, state: viewMode === 'current' ? step.currentState : step.futureState })}
                                                    >
                                                        {/* Step Number Badge */}
                                                        <div style={{
                                                            position: 'absolute',
                                                            top: '-15px',
                                                            left: '50%',
                                                            transform: 'translateX(-50%)',
                                                            background: viewMode === 'future'
                                                                ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                                                                : '#ef4444',
                                                            color: 'white',
                                                            width: '40px',
                                                            height: '40px',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontWeight: 'bold',
                                                            fontSize: '1.125rem',
                                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                                                        }}>
                                                            {step.stepNumber}
                                                        </div>

                                                        {/* Step Title */}
                                                        <h3 style={{
                                                            fontSize: '1.125rem',
                                                            fontWeight: '600',
                                                            marginBottom: '1rem',
                                                            marginTop: '1rem',
                                                            color: viewMode === 'future' ? '#c4b5fd' : '#fca5a5'
                                                        }}>
                                                            {step.description}
                                                        </h3>

                                                        {/* Key Info */}
                                                        <div style={{ marginBottom: '0.75rem' }}>
                                                            <div style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '0.5rem',
                                                                marginBottom: '0.5rem'
                                                            }}>
                                                                <Clock size={14} style={{ color: '#60a5fa' }} />
                                                                <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                                                    {state.timeRequired || state.timeReduction}
                                                                </span>
                                                            </div>

                                                            {viewMode === 'future' && state.aiAgents && (
                                                                <div style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '0.5rem',
                                                                    marginBottom: '0.5rem'
                                                                }}>
                                                                    <Bot size={14} style={{ color: '#a78bfa' }} />
                                                                    <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                                                        {state.aiAgents.length} AI Agents
                                                                    </span>
                                                                </div>
                                                            )}

                                                            {viewMode === 'future' && state.humanCheckpoints && (
                                                                <div style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '0.5rem'
                                                                }}>
                                                                    <Users size={14} style={{ color: '#fbbf24' }} />
                                                                    <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                                                        {state.humanCheckpoints.length} Checkpoints
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Main Activities Preview */}
                                                        <div style={{
                                                            fontSize: '0.75rem',
                                                            color: '#cbd5e1',
                                                            lineHeight: '1.5'
                                                        }}>
                                                            {state.activities.slice(0, 2).map((activity: string, i: number) => (
                                                                <div key={i} style={{ marginBottom: '0.25rem' }}>
                                                                    • {activity}
                                                                </div>
                                                            ))}
                                                            {state.activities.length > 2 && (
                                                                <div style={{ color: '#6b7280', fontStyle: 'italic' }}>
                                                                    +{state.activities.length - 2} more...
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Click for Details */}
                                                        <div style={{
                                                            position: 'absolute',
                                                            bottom: '0.75rem',
                                                            right: '0.75rem',
                                                            fontSize: '0.75rem',
                                                            color: '#6b7280',
                                                            fontStyle: 'italic'
                                                        }}>
                                                            Click for details →
                                                        </div>
                                                    </div>

                                                    {/* Arrow Connector */}
                                                    {!isLastStep && (
                                                        <div style={{
                                                            position: 'relative',
                                                            width: '60px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <svg width="60" height="40" style={{ position: 'absolute' }}>
                                                                <defs>
                                                                    <marker
                                                                        id={`arrowhead-${idx}`}
                                                                        markerWidth="10"
                                                                        markerHeight="10"
                                                                        refX="9"
                                                                        refY="3"
                                                                        orient="auto"
                                                                    >
                                                                        <polygon
                                                                            points="0 0, 10 3, 0 6"
                                                                            fill={viewMode === 'future' ? '#8b5cf6' : '#ef4444'}
                                                                        />
                                                                    </marker>
                                                                </defs>
                                                                <line
                                                                    x1="0"
                                                                    y1="20"
                                                                    x2="50"
                                                                    y2="20"
                                                                    stroke={viewMode === 'future' ? '#8b5cf6' : '#ef4444'}
                                                                    strokeWidth="2"
                                                                    markerEnd={`url(#arrowhead-${idx})`}
                                                                />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Summary Stats */}
                                <div style={{
                                    marginTop: '2rem',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    <div style={{
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        border: '1px solid rgba(59, 130, 246, 0.3)',
                                        borderRadius: '0.75rem',
                                        padding: '1rem',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>
                                            {selectedWorkflow.totalSteps}
                                        </div>
                                        <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                            Process Steps
                                        </div>
                                    </div>

                                    {viewMode === 'future' && (
                                        <>
                                            <div style={{
                                                background: 'rgba(139, 92, 246, 0.1)',
                                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                                borderRadius: '0.75rem',
                                                padding: '1rem',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a78bfa' }}>
                                                    {selectedWorkflow.aiAgentsUsed?.length || 0}
                                                </div>
                                                <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                                    AI Agents
                                                </div>
                                            </div>

                                            <div style={{
                                                background: 'rgba(251, 191, 36, 0.1)',
                                                border: '1px solid rgba(251, 191, 36, 0.3)',
                                                borderRadius: '0.75rem',
                                                padding: '1rem',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>
                                                    {selectedWorkflow.humanCheckpointsCount || 0}
                                                </div>
                                                <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                                    Human Checkpoints
                                                </div>
                                            </div>

                                            <div style={{
                                                background: 'rgba(34, 197, 94, 0.1)',
                                                border: '1px solid rgba(34, 197, 94, 0.3)',
                                                borderRadius: '0.75rem',
                                                padding: '1rem',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>
                                                    {selectedWorkflow.estimatedTimeSavings || '75%'}
                                                </div>
                                                <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                                    Time Savings
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Detailed View Modal would go here when clicking on a step */}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Step Details Modal */}
            {selectedStep && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.8)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    overflow: 'auto'
                }}
                    onClick={() => setSelectedStep(null)}
                >
                    <div style={{
                        background: '#1a1a1a',
                        borderRadius: '1rem',
                        maxWidth: '800px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflow: 'auto',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        position: 'relative'
                    }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div style={{
                            padding: '2rem',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            position: 'sticky',
                            top: 0,
                            background: '#1a1a1a',
                            zIndex: 1
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                        <div style={{
                                            background: viewMode === 'future'
                                                ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                                                : '#ef4444',
                                            color: 'white',
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            fontSize: '1.125rem'
                                        }}>
                                            {selectedStep.stepNumber}
                                        </div>
                                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
                                            {selectedStep.description}
                                        </h2>
                                    </div>
                                    <p style={{ color: '#94a3b8', margin: 0 }}>
                                        {viewMode === 'future' ? 'Future State (AI-Powered)' : 'Current State'}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedStep(null)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#94a3b8',
                                        cursor: 'pointer',
                                        padding: '0.5rem'
                                    }}
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div style={{ padding: '2rem' }}>
                            {/* Activities Section */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: '#60a5fa'
                                }}>
                                    Activities
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'grid',
                                    gap: '0.75rem'
                                }}>
                                    {selectedStep.state.activities.map((activity: string, idx: number) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.75rem',
                                            padding: '0.75rem',
                                            background: 'rgba(96, 165, 250, 0.1)',
                                            border: '1px solid rgba(96, 165, 250, 0.2)',
                                            borderRadius: '0.5rem'
                                        }}>
                                            <CheckCircle size={20} style={{ color: '#60a5fa', flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>
                                                {activity}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* AI Agents Section (Future State Only) */}
                            {viewMode === 'future' && selectedStep.state.aiAgents && selectedStep.state.aiAgents.length > 0 && (
                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '1.125rem',
                                        fontWeight: '600',
                                        marginBottom: '1rem',
                                        color: '#a78bfa'
                                    }}>
                                        AI Agents ({selectedStep.state.aiAgents.length})
                                    </h3>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                                        gap: '1rem'
                                    }}>
                                        {selectedStep.state.aiAgents.map((agentId: string) => {
                                            const agent = getAgentById(agentId);
                                            return (
                                                <div key={agentId} style={{
                                                    background: 'rgba(139, 92, 246, 0.1)',
                                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                                    borderRadius: '0.75rem',
                                                    padding: '1rem',
                                                    transition: 'all 0.2s ease'
                                                }}>
                                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                        <Bot size={20} style={{ color: '#a78bfa', flexShrink: 0, marginTop: '2px' }} />
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{
                                                                fontSize: '0.875rem',
                                                                fontWeight: '600',
                                                                color: '#a78bfa',
                                                                marginBottom: '0.25rem'
                                                            }}>
                                                                {agentId}
                                                            </div>
                                                            {agent && (
                                                                <>
                                                                    <div style={{
                                                                        fontSize: '0.875rem',
                                                                        color: '#e2e8f0',
                                                                        marginBottom: '0.5rem'
                                                                    }}>
                                                                        {agent.name}
                                                                    </div>
                                                                    <div style={{
                                                                        fontSize: '0.75rem',
                                                                        color: '#94a3b8',
                                                                        lineHeight: '1.4'
                                                                    }}>
                                                                        {agent.description}
                                                                    </div>
                                                                    {agent.capabilities && (
                                                                        <div style={{ marginTop: '0.5rem' }}>
                                                                            <div style={{
                                                                                fontSize: '0.625rem',
                                                                                color: '#6b7280',
                                                                                textTransform: 'uppercase',
                                                                                marginBottom: '0.25rem'
                                                                            }}>
                                                                                Capabilities:
                                                                            </div>
                                                                            <div style={{
                                                                                fontSize: '0.75rem',
                                                                                color: '#cbd5e1'
                                                                            }}>
                                                                                {agent.capabilities.slice(0, 2).join(', ')}
                                                                                {agent.capabilities.length > 2 && ` +${agent.capabilities.length - 2} more`}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Human Checkpoints Section (Future State Only) */}
                            {viewMode === 'future' && selectedStep.state.humanCheckpoints && selectedStep.state.humanCheckpoints.length > 0 && (
                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '1.125rem',
                                        fontWeight: '600',
                                        marginBottom: '1rem',
                                        color: '#fbbf24'
                                    }}>
                                        Human Checkpoints
                                    </h3>
                                    <div style={{
                                        display: 'grid',
                                        gap: '0.75rem'
                                    }}>
                                        {selectedStep.state.humanCheckpoints.map((checkpoint: string, idx: number) => (
                                            <div key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.75rem',
                                                background: 'rgba(251, 191, 36, 0.1)',
                                                border: '1px solid rgba(251, 191, 36, 0.2)',
                                                borderRadius: '0.5rem'
                                            }}>
                                                <Users size={20} style={{ color: '#fbbf24' }} />
                                                <span style={{
                                                    fontSize: '0.875rem',
                                                    color: '#fbbf24'
                                                }}>
                                                    {checkpoint}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Time & Efficiency */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1rem',
                                marginBottom: '2rem'
                            }}>
                                <div style={{
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.2)',
                                    borderRadius: '0.75rem',
                                    padding: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}>
                                    <Clock size={20} style={{ color: '#22c55e' }} />
                                    <div>
                                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                                            {viewMode === 'future' ? 'Time Reduction' : 'Time Required'}
                                        </div>
                                        <div style={{ fontSize: '0.875rem', color: '#22c55e', fontWeight: '600' }}>
                                            {selectedStep.state.timeReduction || selectedStep.state.timeRequired}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pain Points (Current State Only) */}
                            {viewMode === 'current' && selectedStep.state.painPoints && (
                                <div>
                                    <h3 style={{
                                        fontSize: '1.125rem',
                                        fontWeight: '600',
                                        marginBottom: '1rem',
                                        color: '#ef4444'
                                    }}>
                                        Pain Points
                                    </h3>
                                    <div style={{
                                        display: 'grid',
                                        gap: '0.75rem'
                                    }}>
                                        {selectedStep.state.painPoints.map((pain: string, idx: number) => (
                                            <div key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '0.75rem',
                                                padding: '0.75rem',
                                                background: 'rgba(239, 68, 68, 0.1)',
                                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                                borderRadius: '0.5rem'
                                            }}>
                                                <AlertCircle size={20} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                                                <span style={{
                                                    fontSize: '0.875rem',
                                                    color: '#fca5a5'
                                                }}>
                                                    {pain}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 