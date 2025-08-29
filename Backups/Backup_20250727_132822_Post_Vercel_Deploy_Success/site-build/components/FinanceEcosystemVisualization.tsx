'use client';

import { ComprehensiveAIAgents } from '@/ai-agents-expanded';
import { ACTIVITY_TO_PLATFORM_MAPPING, EXISTING_PLATFORMS } from '@/finance-platform-mapping';
import { corporateFinanceWorkflows } from '@/workflows/corporate-finance-workflows';
import { costAccountingWorkflows } from '@/workflows/cost-accounting-workflows';
import { fpAndAWorkflows } from '@/workflows/fpa-workflows';
import { investorRelationsWorkflows } from '@/workflows/investor-relations-workflows';
import { orderToCashWorkflows } from '@/workflows/order-to-cash-workflows';
import { procureToPayWorkflows } from '@/workflows/procure-to-pay-workflows';
import { recordToReportWorkflows } from '@/workflows/record-to-report-workflows';
import { Bot, CheckCircle, ChevronRight, Layers, Users, Workflow } from 'lucide-react';
import { useState } from 'react';

// Helper to get workflows for a platform
const getWorkflowsForPlatform = (platformName: string) => {
    const activities = ACTIVITY_TO_PLATFORM_MAPPING.filter(
        mapping => mapping.currentPlatform === platformName
    );

    const workflows: any[] = [];

    activities.forEach(activity => {
        // Map activities to their workflows
        if (platformName === EXISTING_PLATFORMS.INTELLIGENT_INVOICE ||
            platformName === EXISTING_PLATFORMS.SUPPLIER_COLLABORATION) {
            procureToPayWorkflows.forEach(workflow => {
                if (activity.subActivities.some(sub => workflow.name.includes(sub))) {
                    workflows.push({
                        ...workflow,
                        activity: activity.activity,
                        platform: platformName
                    });
                }
            });
        } else if (platformName === EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES ||
            platformName === EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE) {
            orderToCashWorkflows.forEach(workflow => {
                if (activity.subActivities.some(sub => workflow.name.includes(sub))) {
                    workflows.push({
                        ...workflow,
                        activity: activity.activity,
                        platform: platformName
                    });
                }
            });
        } else if (platformName === EXISTING_PLATFORMS.CONTINUOUS_CLOSE ||
            platformName === EXISTING_PLATFORMS.CONTROL_COMPLIANCE ||
            platformName === EXISTING_PLATFORMS.REGULATORY_INTELLIGENCE ||
            platformName === EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB) {
            recordToReportWorkflows.forEach(workflow => {
                if (activity.subActivities.some(sub => workflow.name.includes(sub))) {
                    workflows.push({
                        ...workflow,
                        activity: activity.activity,
                        platform: platformName
                    });
                }
            });
        } else if (platformName === EXISTING_PLATFORMS.TAX_INTELLIGENCE ||
            platformName === EXISTING_PLATFORMS.TREASURY_COMMAND ||
            platformName === EXISTING_PLATFORMS.RISK_ANALYTICS) {
            corporateFinanceWorkflows.forEach(workflow => {
                if (activity.subActivities.some(sub => workflow.name.includes(sub))) {
                    workflows.push({
                        ...workflow,
                        activity: activity.activity,
                        platform: platformName
                    });
                }
            });
        } else if (platformName === EXISTING_PLATFORMS.DYNAMIC_COST_ENGINE ||
            platformName === EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS) {
            costAccountingWorkflows.forEach(workflow => {
                if (activity.subActivities.some(sub => workflow.name.includes(sub))) {
                    workflows.push({
                        ...workflow,
                        activity: activity.activity,
                        platform: platformName
                    });
                }
            });
        } else if (platformName === EXISTING_PLATFORMS.CONNECTED_ENTERPRISE ||
            platformName === EXISTING_PLATFORMS.MANAGEMENT_REPORTING) {
            fpAndAWorkflows.forEach(workflow => {
                if (activity.subActivities.some(sub => workflow.name.includes(sub))) {
                    workflows.push({
                        ...workflow,
                        activity: activity.activity,
                        platform: platformName
                    });
                }
            });
        } else if (platformName === EXISTING_PLATFORMS.INVESTOR_INTELLIGENCE ||
            platformName === EXISTING_PLATFORMS.MARKET_INTELLIGENCE) {
            investorRelationsWorkflows.forEach(workflow => {
                if (activity.subActivities.some(sub => workflow.name.includes(sub))) {
                    workflows.push({
                        ...workflow,
                        activity: activity.activity,
                        platform: platformName
                    });
                }
            });
        }
    });

    return workflows;
};

// Helper to find agent by ID
const findAgentById = (agentId: string) => {
    for (const category of Object.values(ComprehensiveAIAgents)) {
        if (Array.isArray(category)) {
            const agent = category.find(a => a.id === agentId);
            if (agent) return agent;
        }
    }
    return null;
};

export default function FinanceEcosystemVisualization() {
    const [selectedView, setSelectedView] = useState<'overview' | 'platform' | 'workflow' | 'agent'>('overview');
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
    const [selectedWorkflow, setSelectedWorkflow] = useState<any>(null);
    const [selectedAgent, setSelectedAgent] = useState<any>(null);

    // Group platforms by function
    const platformsByFunction: Record<string, string[]> = {
        'Procure to Pay': [
            EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
            EXISTING_PLATFORMS.SUPPLIER_COLLABORATION
        ],
        'Order to Cash': [
            EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
            EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE
        ],
        'Controllership': [
            EXISTING_PLATFORMS.CONTINUOUS_CLOSE,
            EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
            EXISTING_PLATFORMS.REGULATORY_INTELLIGENCE,
            EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB
        ],
        'Corporate Finance': [
            EXISTING_PLATFORMS.TAX_INTELLIGENCE,
            EXISTING_PLATFORMS.TREASURY_COMMAND,
            EXISTING_PLATFORMS.RISK_ANALYTICS
        ],
        'FP&A': [
            EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
            EXISTING_PLATFORMS.MANAGEMENT_REPORTING
        ],
        'Cost Accounting': [
            EXISTING_PLATFORMS.DYNAMIC_COST_ENGINE,
            EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS
        ],
        'Investor Relations': [
            EXISTING_PLATFORMS.INVESTOR_INTELLIGENCE,
            EXISTING_PLATFORMS.MARKET_INTELLIGENCE
        ]
    };

    const renderOverview = () => (
        <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                Finance Transformation Ecosystem
            </h2>
            <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '3rem' }}>
                From business activities to AI-powered workflows
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                {/* Finance Functions */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <Layers size={48} style={{ color: '#60a5fa', margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>7</h3>
                    <p style={{ color: '#94a3b8' }}>Finance Functions</p>
                </div>

                {/* Business Activities */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <Workflow size={48} style={{ color: '#22c55e', margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>46</h3>
                    <p style={{ color: '#94a3b8' }}>Business Activities</p>
                </div>

                {/* Platforms */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <Users size={48} style={{ color: '#fbbf24', margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>12</h3>
                    <p style={{ color: '#94a3b8' }}>Platforms</p>
                </div>

                {/* AI Agents */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <Bot size={48} style={{ color: '#8b5cf6', margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>300+</h3>
                    <p style={{ color: '#94a3b8' }}>AI Agents</p>
                </div>
            </div>

            {/* Functions Grid */}
            <div style={{ marginTop: '4rem' }}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>
                    Explore by Finance Function
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    {Object.entries(platformsByFunction).map(([functionName, platforms]) => {
                        const activityCount = ACTIVITY_TO_PLATFORM_MAPPING.filter(
                            mapping => mapping.currentPlatform && platforms.includes(mapping.currentPlatform)
                        ).length;

                        return (
                            <div
                                key={functionName}
                                onClick={() => {
                                    setSelectedView('platform');
                                    setSelectedPlatform(platforms[0]);
                                }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                                    {functionName}
                                </h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                            {platforms.length} Platform{platforms.length > 1 ? 's' : ''}
                                        </p>
                                        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                            {activityCount} Activities
                                        </p>
                                    </div>
                                    <ChevronRight size={20} style={{ color: '#60a5fa' }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const renderPlatformView = () => {
        if (!selectedPlatform) return null;

        const activities = ACTIVITY_TO_PLATFORM_MAPPING.filter(
            mapping => mapping.currentPlatform === selectedPlatform
        );
        const workflows = getWorkflowsForPlatform(selectedPlatform);

        return (
            <div>
                {/* Breadcrumb */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                    <button
                        onClick={() => setSelectedView('overview')}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#60a5fa',
                            cursor: 'pointer',
                            padding: 0,
                            fontSize: '1rem'
                        }}
                    >
                        Overview
                    </button>
                    <ChevronRight size={16} style={{ color: '#64748b' }} />
                    <span>{selectedPlatform}</span>
                </div>

                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                    {selectedPlatform}
                </h2>

                {/* Platform Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                    marginBottom: '3rem'
                }}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>
                            {activities.length}
                        </div>
                        <div style={{ color: '#94a3b8' }}>Business Activities</div>
                    </div>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>
                            {workflows.length}
                        </div>
                        <div style={{ color: '#94a3b8' }}>Workflows</div>
                    </div>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                            {new Set(activities.flatMap(a => a.aiAgentsRequired)).size}
                        </div>
                        <div style={{ color: '#94a3b8' }}>AI Agents</div>
                    </div>
                </div>

                {/* Workflows */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                        Workflows & Activities
                    </h3>
                    {workflows.map((workflow, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedWorkflow(workflow);
                                setSelectedView('workflow');
                            }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                marginBottom: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                                        {workflow.name}
                                    </h4>
                                    <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                                        {workflow.description}
                                    </p>
                                    <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem' }}>
                                        <span style={{ color: '#60a5fa' }}>
                                            {workflow.totalSteps} steps
                                        </span>
                                        <span style={{ color: '#8b5cf6' }}>
                                            {workflow.aiAgentsUsed.length} AI agents
                                        </span>
                                        <span style={{ color: '#22c55e' }}>
                                            {workflow.estimatedTimeSavings}
                                        </span>
                                    </div>
                                </div>
                                <ChevronRight size={20} style={{ color: '#60a5fa' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderWorkflowView = () => {
        if (!selectedWorkflow) return null;

        return (
            <div>
                {/* Breadcrumb */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                    <button
                        onClick={() => setSelectedView('overview')}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#60a5fa',
                            cursor: 'pointer',
                            padding: 0,
                            fontSize: '1rem'
                        }}
                    >
                        Overview
                    </button>
                    <ChevronRight size={16} style={{ color: '#64748b' }} />
                    <button
                        onClick={() => setSelectedView('platform')}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#60a5fa',
                            cursor: 'pointer',
                            padding: 0,
                            fontSize: '1rem'
                        }}
                    >
                        {selectedWorkflow.platform}
                    </button>
                    <ChevronRight size={16} style={{ color: '#64748b' }} />
                    <span>{selectedWorkflow.name}</span>
                </div>

                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    {selectedWorkflow.name}
                </h2>
                <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>
                    {selectedWorkflow.description}
                </p>

                {/* Workflow Steps */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                        Future State Workflow
                    </h3>
                    {selectedWorkflow.currentStateWorkflow.map((step: any, index: number) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                marginBottom: '1rem',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                                    borderRadius: '8px',
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '1.25rem',
                                    flexShrink: 0
                                }}>
                                    {step.stepNumber}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                                        {step.description}
                                    </h4>

                                    {/* AI Agents */}
                                    {step.futureState?.aiAgents && step.futureState.aiAgents.length > 0 && (
                                        <div style={{ marginBottom: '0.75rem' }}>
                                            <span style={{ fontSize: '0.875rem', color: '#64748b' }}>AI Agents: </span>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                                                {step.futureState.aiAgents.map((agentId: string) => {
                                                    const agent = findAgentById(agentId);
                                                    return (
                                                        <button
                                                            key={agentId}
                                                            onClick={() => {
                                                                setSelectedAgent(agent);
                                                                setSelectedView('agent');
                                                            }}
                                                            style={{
                                                                background: 'rgba(139, 92, 246, 0.2)',
                                                                color: '#8b5cf6',
                                                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                                                borderRadius: '8px',
                                                                padding: '0.25rem 0.75rem',
                                                                fontSize: '0.75rem',
                                                                fontWeight: '600',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            {agentId} - {agent?.name || 'Agent'}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Human Checkpoints */}
                                    {step.futureState?.humanCheckpoints && step.futureState.humanCheckpoints.length > 0 && (
                                        <div>
                                            <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Human Checkpoints: </span>
                                            <div style={{ marginTop: '0.5rem' }}>
                                                {step.futureState.humanCheckpoints.map((checkpoint: string, idx: number) => (
                                                    <div key={idx} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        fontSize: '0.875rem',
                                                        color: '#fbbf24',
                                                        marginBottom: '0.25rem'
                                                    }}>
                                                        <CheckCircle size={16} />
                                                        {checkpoint}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderAgentView = () => {
        if (!selectedAgent) return null;

        return (
            <div>
                {/* Back button */}
                <button
                    onClick={() => setSelectedView('workflow')}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#60a5fa',
                        cursor: 'pointer',
                        padding: '0.5rem 0',
                        fontSize: '1rem',
                        marginBottom: '2rem'
                    }}
                >
                    ← Back to Workflow
                </button>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '3rem',
                    textAlign: 'center'
                }}>
                    {/* Agent Symbol */}
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: selectedAgent.status === 'ready'
                            ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                            : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                    }}>
                        {selectedAgent.id}
                    </div>

                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        {selectedAgent.fullName}
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
                        {selectedAgent.description}
                    </p>

                    {/* Capabilities */}
                    <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                            Capabilities
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {selectedAgent.capabilities.map((capability: string, index: number) => (
                                <li key={index} style={{
                                    marginBottom: '0.75rem',
                                    paddingLeft: '1.5rem',
                                    position: 'relative',
                                    color: '#cbd5e1'
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
                    <div>
                        <span style={{
                            padding: '0.5rem 1.5rem',
                            borderRadius: '24px',
                            background: selectedAgent.status === 'ready'
                                ? 'rgba(16, 185, 129, 0.1)'
                                : 'rgba(245, 158, 11, 0.1)',
                            border: `1px solid ${selectedAgent.status === 'ready' ? '#10b981' : '#f59e0b'}`,
                            color: selectedAgent.status === 'ready' ? '#10b981' : '#f59e0b',
                            fontSize: '0.875rem',
                            fontWeight: '600'
                        }}>
                            {selectedAgent.status === 'ready' ? 'Ready for Deployment' : 'In Development'}
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div style={{
            minHeight: '100vh',
            padding: '2rem',
            background: '#000000',
            color: '#ffffff'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {selectedView === 'overview' && renderOverview()}
                {selectedView === 'platform' && renderPlatformView()}
                {selectedView === 'workflow' && renderWorkflowView()}
                {selectedView === 'agent' && renderAgentView()}
            </div>
        </div>
    );
} 