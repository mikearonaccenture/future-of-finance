'use client';

import { ChevronRight, Layers, Users, Workflow, X } from 'lucide-react';
import { useState } from 'react';
import { ComprehensiveAIAgents } from './ai-agents-expanded';
import { ACTIVITY_TO_PLATFORM_MAPPING, EXISTING_PLATFORMS } from './finance-platform-mapping';
import { SubActivity } from './finance-workflows-overview';
import { orderToCashWorkflows } from './workflows/order-to-cash-workflows';
import { procureToPayWorkflows } from './workflows/procure-to-pay-workflows';
import { recordToReportWorkflows } from './workflows/record-to-report-workflows';

interface AgentUsageSummary {
    agentId: string;
    agentName: string;
    totalUsage: number;
    workflows: string[];
    platforms: string[];
}

interface WorkflowDetail {
    workflow: SubActivity;
    platform: string;
    function: string;
}

export default function FinanceEcosystemVisualization() {
    const [selectedView, setSelectedView] = useState<'agents' | 'workflows' | 'platforms'>('platforms');
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
    const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowDetail | null>(null);
    const [selectedAgent, setSelectedAgent] = useState<AgentUsageSummary | null>(null);

    // Aggregate all workflows by platform
    const workflowsByPlatform = {
        [EXISTING_PLATFORMS.PROCURE_TO_PAY]: procureToPayWorkflows.map(w => ({ workflow: w, function: 'Procure to Pay' })),
        [EXISTING_PLATFORMS.ORDER_TO_CASH]: orderToCashWorkflows.map(w => ({ workflow: w, function: 'Order to Cash' })),
        [EXISTING_PLATFORMS.CONTROLLERSHIP]: recordToReportWorkflows.map(w => ({ workflow: w, function: 'Record to Report' })),
        // Add other platforms as workflows are created
        [EXISTING_PLATFORMS.FPA_FORECASTING]: [],
        [EXISTING_PLATFORMS.MANAGEMENT_REPORTING]: [],
        [EXISTING_PLATFORMS.TREASURY]: [],
        [EXISTING_PLATFORMS.TAX]: [],
        [EXISTING_PLATFORMS.COST_ACCOUNTING]: [],
        [EXISTING_PLATFORMS.INVESTOR_RELATIONS]: []
    };

    // Calculate agent usage across all workflows
    const calculateAgentUsage = (): AgentUsageSummary[] => {
        const agentMap = new Map<string, AgentUsageSummary>();

        // Process all workflows
        Object.entries(workflowsByPlatform).forEach(([platform, workflows]) => {
            workflows.forEach(({ workflow }) => {
                workflow.aiAgentsUsed.forEach(({ agentId, frequency }) => {
                    if (!agentMap.has(agentId)) {
                        const agent = findAgentById(agentId);
                        agentMap.set(agentId, {
                            agentId,
                            agentName: agent?.name || agentId,
                            totalUsage: 0,
                            workflows: [],
                            platforms: []
                        });
                    }

                    const summary = agentMap.get(agentId)!;
                    summary.totalUsage += frequency;

                    const workflowName = `${workflow.name}`;
                    if (!summary.workflows.includes(workflowName)) {
                        summary.workflows.push(workflowName);
                    }

                    if (!summary.platforms.includes(platform)) {
                        summary.platforms.push(platform);
                    }
                });
            });
        });

        return Array.from(agentMap.values()).sort((a, b) => b.totalUsage - a.totalUsage);
    };

    // Find agent by ID in comprehensive agents
    const findAgentById = (agentId: string) => {
        for (const category of Object.values(ComprehensiveAIAgents)) {
            if (Array.isArray(category)) {
                const agent = category.find(a => a.id === agentId);
                if (agent) return agent;
            }
        }
        return null;
    };

    const agentUsageSummary = calculateAgentUsage();

    // Platform view component
    const PlatformView = () => (
        <div style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>
                Finance Platform Ecosystem
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
            }}>
                {Object.entries(EXISTING_PLATFORMS).map(([key, platform]) => {
                    const activities = ACTIVITY_TO_PLATFORM_MAPPING.filter(a => a.currentPlatform === platform);
                    const workflows = workflowsByPlatform[platform] || [];
                    const agentCount = new Set(
                        workflows.flatMap(w => w.workflow.aiAgentsUsed.map(a => a.agentId))
                    ).size;

                    return (
                        <div
                            key={key}
                            onClick={() => setSelectedPlatform(platform)}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                ':hover': {
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#60a5fa' }}>
                                {platform}
                            </h3>
                            <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                                <p>Activities: {activities.length}</p>
                                <p>Workflows: {workflows.length}</p>
                                <p>AI Agents: {agentCount}</p>
                            </div>
                            <div style={{
                                marginTop: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                color: '#60a5fa',
                                fontSize: '0.875rem'
                            }}>
                                View Details <ChevronRight size={16} style={{ marginLeft: '0.5rem' }} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    // Agent view component
    const AgentView = () => (
        <div style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>
                AI Agent Usage Analysis
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '1rem',
                maxHeight: '70vh',
                overflowY: 'auto'
            }}>
                {agentUsageSummary.map((agent) => (
                    <div
                        key={agent.agentId}
                        onClick={() => setSelectedAgent(agent)}
                        style={{
                            background: agent.totalUsage > 5
                                ? 'rgba(34, 197, 94, 0.1)'
                                : agent.totalUsage > 2
                                    ? 'rgba(251, 191, 36, 0.1)'
                                    : 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${agent.totalUsage > 5
                                    ? 'rgba(34, 197, 94, 0.3)'
                                    : agent.totalUsage > 2
                                        ? 'rgba(251, 191, 36, 0.3)'
                                        : 'rgba(255, 255, 255, 0.1)'
                                }`,
                            borderRadius: '8px',
                            padding: '1rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: agent.totalUsage > 5 ? '#22c55e' : agent.totalUsage > 2 ? '#fbbf24' : '#60a5fa'
                        }}>
                            {agent.agentId}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#fff', marginTop: '0.25rem' }}>
                            {agent.agentName}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.5rem' }}>
                            Used {agent.totalUsage}x across {agent.workflows.length} workflows
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    // Workflow view component
    const WorkflowView = () => (
        <div style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>
                Workflow Library
            </h2>

            {Object.entries(workflowsByPlatform).map(([platform, workflows]) => {
                if (workflows.length === 0) return null;

                return (
                    <div key={platform} style={{ marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#60a5fa' }}>
                            {platform}
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                            gap: '1rem'
                        }}>
                            {workflows.map(({ workflow, function: funcName }) => (
                                <div
                                    key={workflow.name}
                                    onClick={() => setSelectedWorkflow({ workflow, platform, function: funcName })}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '8px',
                                        padding: '1rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    }}
                                >
                                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                                        {workflow.name}
                                    </h4>
                                    <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>
                                        {workflow.description}
                                    </p>
                                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                                        <span>Steps: {workflow.totalSteps}</span>
                                        <span>Agents: {workflow.aiAgentsUsed.length}</span>
                                        <span>Savings: {workflow.estimatedTimeSavings}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );

    // Platform detail modal
    const PlatformDetailModal = () => {
        if (!selectedPlatform) return null;

        const activities = ACTIVITY_TO_PLATFORM_MAPPING.filter(a => a.currentPlatform === selectedPlatform);
        const workflows = workflowsByPlatform[selectedPlatform] || [];

        return (
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
                zIndex: 1000,
                padding: '2rem'
            }}>
                <div style={{
                    background: '#1a1a1a',
                    borderRadius: '16px',
                    padding: '2rem',
                    maxWidth: '1000px',
                    width: '100%',
                    maxHeight: '80vh',
                    overflow: 'auto',
                    position: 'relative'
                }}>
                    <button
                        onClick={() => setSelectedPlatform(null)}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={24} />
                    </button>

                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#60a5fa' }}>
                        {selectedPlatform}
                    </h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Activities Covered</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {activities.map((activity) => (
                                <span
                                    key={activity.activity}
                                    style={{
                                        background: 'rgba(96, 165, 250, 0.2)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    {activity.activity}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Workflows</h3>
                        {workflows.length > 0 ? (
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {workflows.map(({ workflow }) => (
                                    <div
                                        key={workflow.name}
                                        onClick={() => {
                                            setSelectedPlatform(null);
                                            setSelectedWorkflow({ workflow, platform: selectedPlatform, function: 'N/A' });
                                        }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            padding: '1rem',
                                            borderRadius: '8px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <h4>{workflow.name}</h4>
                                        <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                                            {workflow.totalSteps} steps • {workflow.aiAgentsUsed.length} agents • {workflow.estimatedTimeSavings}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Workflows being developed...</p>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // Workflow detail modal
    const WorkflowDetailModal = () => {
        if (!selectedWorkflow) return null;

        const { workflow, platform, function: funcName } = selectedWorkflow;

        return (
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
                zIndex: 1000,
                padding: '2rem'
            }}>
                <div style={{
                    background: '#1a1a1a',
                    borderRadius: '16px',
                    padding: '2rem',
                    maxWidth: '1200px',
                    width: '100%',
                    maxHeight: '80vh',
                    overflow: 'auto',
                    position: 'relative'
                }}>
                    <button
                        onClick={() => setSelectedWorkflow(null)}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={24} />
                    </button>

                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ fontSize: '0.875rem', color: '#60a5fa', marginBottom: '0.5rem' }}>
                            {funcName} • {platform}
                        </div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                            {workflow.name}
                        </h2>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            {workflow.description}
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Workflow Steps</h3>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {workflow.currentStateWorkflow.map((step) => (
                                <div key={step.stepNumber} style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    padding: '1.5rem',
                                    borderRadius: '8px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
                                        <span style={{
                                            background: '#60a5fa',
                                            color: '#000',
                                            width: '2rem',
                                            height: '2rem',
                                            borderRadius: '50%',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '1rem',
                                            fontWeight: 'bold'
                                        }}>
                                            {step.stepNumber}
                                        </span>
                                        <h4 style={{ fontSize: '1.125rem' }}>{step.description}</h4>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <h5 style={{ color: '#ef4444', marginBottom: '0.5rem' }}>Current State</h5>
                                            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                                                Time: {step.currentState.timeRequired}
                                            </p>
                                            <ul style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem' }}>
                                                {step.currentState.painPoints.map((pain, i) => (
                                                    <li key={i}>• {pain}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 style={{ color: '#22c55e', marginBottom: '0.5rem' }}>Future State</h5>
                                            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                                                Time Reduction: {step.futureState.timeReduction}
                                            </p>
                                            <div style={{ marginTop: '0.5rem' }}>
                                                <p style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                                                    AI Agents:
                                                </p>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                                                    {step.futureState.aiAgents.map((agentId) => {
                                                        const agent = findAgentById(agentId);
                                                        return (
                                                            <span
                                                                key={agentId}
                                                                style={{
                                                                    background: 'rgba(96, 165, 250, 0.2)',
                                                                    padding: '0.25rem 0.5rem',
                                                                    borderRadius: '12px',
                                                                    fontSize: '0.75rem'
                                                                }}
                                                                title={agent?.name || agentId}
                                                            >
                                                                {agentId}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            {step.futureState.humanCheckpoints.length > 0 && (
                                                <div style={{ marginTop: '0.5rem' }}>
                                                    <p style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                                                        Human Checkpoints:
                                                    </p>
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                                                        {step.futureState.humanCheckpoints.map((checkpoint) => (
                                                            <span
                                                                key={checkpoint}
                                                                style={{
                                                                    background: 'rgba(251, 191, 36, 0.2)',
                                                                    padding: '0.25rem 0.5rem',
                                                                    borderRadius: '12px',
                                                                    fontSize: '0.75rem'
                                                                }}
                                                            >
                                                                {checkpoint}
                                                            </span>
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

                    <div style={{
                        background: 'rgba(96, 165, 250, 0.1)',
                        padding: '1rem',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Total AI Agents</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{workflow.aiAgentsUsed.length}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Human Checkpoints</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{workflow.humanCheckpointsCount}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Time Savings</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{workflow.estimatedTimeSavings}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Agent detail modal
    const AgentDetailModal = () => {
        if (!selectedAgent) return null;

        const agent = findAgentById(selectedAgent.agentId);

        return (
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
                zIndex: 1000,
                padding: '2rem'
            }}>
                <div style={{
                    background: '#1a1a1a',
                    borderRadius: '16px',
                    padding: '2rem',
                    maxWidth: '800px',
                    width: '100%',
                    maxHeight: '80vh',
                    overflow: 'auto',
                    position: 'relative'
                }}>
                    <button
                        onClick={() => setSelectedAgent(null)}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={24} />
                    </button>

                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: selectedAgent.totalUsage > 5 ? '#22c55e' : selectedAgent.totalUsage > 2 ? '#fbbf24' : '#60a5fa',
                            marginBottom: '0.5rem'
                        }}>
                            {selectedAgent.agentId}
                        </div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            {selectedAgent.agentName}
                        </h2>
                        {agent && (
                            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                {agent.description}
                            </p>
                        )}
                    </div>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Usage Statistics</h3>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                padding: '1rem',
                                borderRadius: '8px'
                            }}>
                                <p>Total Usage: <strong>{selectedAgent.totalUsage}x</strong></p>
                                <p>Used in {selectedAgent.workflows.length} workflows</p>
                                <p>Deployed across {selectedAgent.platforms.length} platforms</p>
                            </div>
                        </div>

                        {agent && (
                            <>
                                <div>
                                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Capabilities</h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {agent.capabilities.map((capability, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    background: 'rgba(96, 165, 250, 0.2)',
                                                    padding: '0.5rem 1rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.875rem'
                                                }}
                                            >
                                                {capability}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Workflow Steps</h3>
                                    <ul style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                        {agent.workflowSteps.map((step, i) => (
                                            <li key={i}>• {step}</li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}

                        <div>
                            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Used In Workflows</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {selectedAgent.workflows.map((workflow) => (
                                    <span
                                        key={workflow}
                                        style={{
                                            background: 'rgba(139, 92, 246, 0.2)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        {workflow}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Platforms</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {selectedAgent.platforms.map((platform) => (
                                    <span
                                        key={platform}
                                        style={{
                                            background: 'rgba(34, 197, 94, 0.2)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        {platform}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#000',
            color: '#fff'
        }}>
            {/* Navigation */}
            <div style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1rem 2rem',
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
            }}>
                <button
                    onClick={() => setSelectedView('platforms')}
                    style={{
                        background: selectedView === 'platforms' ? 'rgba(96, 165, 250, 0.2)' : 'transparent',
                        border: 'none',
                        color: selectedView === 'platforms' ? '#60a5fa' : '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <Layers size={20} />
                    Platforms
                </button>
                <button
                    onClick={() => setSelectedView('workflows')}
                    style={{
                        background: selectedView === 'workflows' ? 'rgba(96, 165, 250, 0.2)' : 'transparent',
                        border: 'none',
                        color: selectedView === 'workflows' ? '#60a5fa' : '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <Workflow size={20} />
                    Workflows
                </button>
                <button
                    onClick={() => setSelectedView('agents')}
                    style={{
                        background: selectedView === 'agents' ? 'rgba(96, 165, 250, 0.2)' : 'transparent',
                        border: 'none',
                        color: selectedView === 'agents' ? '#60a5fa' : '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <Users size={20} />
                    AI Agents
                </button>
            </div>

            {/* Main Content */}
            {selectedView === 'platforms' && <PlatformView />}
            {selectedView === 'workflows' && <WorkflowView />}
            {selectedView === 'agents' && <AgentView />}

            {/* Modals */}
            {selectedPlatform && <PlatformDetailModal />}
            {selectedWorkflow && <WorkflowDetailModal />}
            {selectedAgent && <AgentDetailModal />}
        </div>
    );
} 