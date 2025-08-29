'use client';

import { ComprehensiveAIAgents } from '@/ai-agents-expanded';
import SEO from '@/components/SEO';
import Navigation from '@/components/layout/Navigation';
import { buildAgentCatalog, getEcosystemSummary } from '@/lib/finance-ecosystem-data';
import { Bot, ChevronRight, Clock, Search, Users, X, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';

// Get all agents with proper categorization
const getAllAgents = () => {
    const allAgents = [
        ...ComprehensiveAIAgents.procureToPay.map(a => ({ ...a, functionalArea: 'Procure to Pay' })),
        ...ComprehensiveAIAgents.orderToCash.map(a => ({ ...a, functionalArea: 'Order to Cash' })),
        ...ComprehensiveAIAgents.costAccounting.map(a => ({ ...a, functionalArea: 'Cost Accounting' })),
        ...ComprehensiveAIAgents.recordToReport.map(a => ({ ...a, functionalArea: 'Controllership' })),
        ...ComprehensiveAIAgents.corporateFinance.map(a => ({ ...a, functionalArea: 'Corporate Finance' })),
        ...ComprehensiveAIAgents.fpAndA.map(a => ({ ...a, functionalArea: 'FP&A' })),
        ...ComprehensiveAIAgents.investorRelations.map(a => ({ ...a, functionalArea: 'Investor Relations' })),
        ...ComprehensiveAIAgents.crossFunctionalAgents.map(a => ({ ...a, functionalArea: 'Cross-Functional' }))
    ];
    return allAgents;
};

export default function FinanceAIAgentLibrary() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFunction, setSelectedFunction] = useState<string>('all');
    const [selectedStatus, setSelectedStatus] = useState<string>('all');
    const [selectedAgent, setSelectedAgent] = useState<any>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Get all agents and catalog data
    const allAgents = useMemo(() => getAllAgents(), []);
        const agentCatalog = useMemo(() => buildAgentCatalog(), []);
    const ecosystemSummary = useMemo(() => getEcosystemSummary(), []);

    // Filter agents based on search and filters
    const filteredAgents = useMemo(() => {
        return allAgents.filter(agent => {
            const matchesSearch = searchTerm === '' ||
                agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                agent.id.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesFunction = selectedFunction === 'all' || agent.functionalArea === selectedFunction;
            const matchesStatus = selectedStatus === 'all' || agent.status === selectedStatus;

            return matchesSearch && matchesFunction && matchesStatus;
        });
    }, [allAgents, searchTerm, selectedFunction, selectedStatus]);

    // Get usage data for an agent
    const getAgentUsageData = (agentId: string) => {
        const catalogEntry = agentCatalog.find(a => a.id === agentId);
        return catalogEntry || null;
    };

    const functionalAreas = ['all', 'Procure to Pay', 'Order to Cash', 'Cost Accounting',
        'Controllership', 'Corporate Finance', 'FP&A', 'Investor Relations', 'Cross-Functional'];
    const statuses = ['all', 'ready', 'in-development', 'planned'];

    return (
        <>
            <SEO
                title="Finance AI Agent Library - Future of Finance"
                description="Explore our comprehensive library of 300+ AI agents transforming finance operations across all functional areas."
            />
            <Navigation />
            <div style={{
                minHeight: '100vh',
                background: '#0a0a0a',
                color: '#e2e8f0',
                paddingTop: '5rem'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '2rem'
                }}>
                    {/* Header */}
                    <div style={{
                        marginBottom: '3rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        paddingBottom: '2rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <h1 style={{
                                fontSize: '1.875rem',
                                fontWeight: 'bold',
                                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                margin: 0
                            }}>
                                Finance AI Agent Library
                            </h1>
                        </div>

                        {/* View Toggle */}
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                                onClick={() => setViewMode('grid')}
                                style={{
                                    padding: '0.5rem 1rem',
                                    background: viewMode === 'grid' ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                                    border: '1px solid rgba(59, 130, 246, 0.3)',
                                    borderRadius: '0.375rem',
                                    color: viewMode === 'grid' ? '#60a5fa' : '#94a3b8',
                                    cursor: 'pointer'
                                }}>
                                Grid View
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                style={{
                                    padding: '0.5rem 1rem',
                                    background: viewMode === 'list' ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                                    border: '1px solid rgba(59, 130, 246, 0.3)',
                                    borderRadius: '0.375rem',
                                    color: viewMode === 'list' ? '#60a5fa' : '#94a3b8',
                                    cursor: 'pointer'
                                }}>
                                List View
                            </button>
                        </div>
                    </div>

                    {/* Summary Stats */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                        marginBottom: '2rem'
                    }}>
                        <div style={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            borderRadius: '0.5rem',
                            padding: '1.5rem',
                            textAlign: 'center'
                        }}>
                            <Bot size={32} style={{ margin: '0 auto 0.5rem', color: '#60a5fa' }} />
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>
                                {ecosystemSummary.totalAgents}
                            </div>
                            <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Total AI Agents</div>
                        </div>

                        <div style={{
                            background: 'rgba(34, 197, 94, 0.1)',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            borderRadius: '0.5rem',
                            padding: '1.5rem',
                            textAlign: 'center'
                        }}>
                            <Zap size={32} style={{ margin: '0 auto 0.5rem', color: '#22c55e' }} />
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>
                                {allAgents.filter(a => a.status === 'ready').length}
                            </div>
                            <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Production Ready</div>
                        </div>

                        <div style={{
                            background: 'rgba(251, 191, 36, 0.1)',
                            border: '1px solid rgba(251, 191, 36, 0.3)',
                            borderRadius: '0.5rem',
                            padding: '1.5rem',
                            textAlign: 'center'
                        }}>
                            <Clock size={32} style={{ margin: '0 auto 0.5rem', color: '#fbbf24' }} />
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>
                                {allAgents.filter(a => a.status === 'in-development').length}
                            </div>
                            <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>In Development</div>
                        </div>

                        <div style={{
                            background: 'rgba(139, 92, 246, 0.1)',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            borderRadius: '0.5rem',
                            padding: '1.5rem',
                            textAlign: 'center'
                        }}>
                            <Users size={32} style={{ margin: '0 auto 0.5rem', color: '#8b5cf6' }} />
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                                {ecosystemSummary.crossFunctionalAgents}
                            </div>
                            <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Cross-Functional</div>
                        </div>
                    </div>

                    {/* Search and Filters */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.5rem',
                        padding: '1.5rem',
                        marginBottom: '2rem'
                    }}>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            {/* Search Bar */}
                            <div style={{ flex: '1', minWidth: '300px', position: 'relative' }}>
                                <Search size={20} style={{
                                    position: 'absolute',
                                    left: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#6b7280'
                                }} />
                                <input
                                    type="text"
                                    placeholder="Search agents by name, ID, or capability..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem 0.75rem 3rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '0.375rem',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            {/* Function Filter */}
                            <select
                                value={selectedFunction}
                                onChange={(e) => setSelectedFunction(e.target.value)}
                                style={{
                                    padding: '0.75rem 1rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '0.375rem',
                                    color: '#ffffff',
                                    fontSize: '1rem',
                                    cursor: 'pointer'
                                }}
                            >
                                {functionalAreas.map(area => (
                                    <option key={area} value={area} style={{ background: '#1a1a1a' }}>
                                        {area === 'all' ? 'All Functions' : area}
                                    </option>
                                ))}
                            </select>

                            {/* Status Filter */}
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                style={{
                                    padding: '0.75rem 1rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '0.375rem',
                                    color: '#ffffff',
                                    fontSize: '1rem',
                                    cursor: 'pointer'
                                }}
                            >
                                {statuses.map(status => (
                                    <option key={status} value={status} style={{ background: '#1a1a1a' }}>
                                        {status === 'all' ? 'All Statuses' :
                                            status === 'ready' ? 'Production Ready' :
                                                status === 'in-development' ? 'In Development' : 'Planned'}
                                    </option>
                                ))}
                            </select>

                            {/* Results Count */}
                            <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                                {filteredAgents.length} agents found
                            </div>
                        </div>
                    </div>

                    {/* Agent Grid/List */}
                    <div style={{
                        display: viewMode === 'grid' ? 'grid' : 'flex',
                        gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(350px, 1fr))' : undefined,
                        flexDirection: viewMode === 'list' ? 'column' : undefined,
                        gap: '1rem'
                    }}>
                        {filteredAgents.map(agent => {
                            const usageData = getAgentUsageData(agent.id);

                            return (
                                <div
                                    key={`${agent.functionalArea}-${agent.id}`}
                                    onClick={() => setSelectedAgent(agent)}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '0.5rem',
                                        padding: '1.5rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                                        <div>
                                            <span style={{
                                                fontSize: '1.125rem',
                                                fontWeight: '600',
                                                color: '#f3f4f6'
                                            }}>
                                                {agent.name}
                                            </span>
                                            <span style={{
                                                marginLeft: '0.5rem',
                                                fontSize: '0.875rem',
                                                color: '#6b7280'
                                            }}>
                                                ({agent.id})
                                            </span>
                                        </div>

                                        <span style={{
                                            fontSize: '0.75rem',
                                            padding: '0.25rem 0.5rem',
                                            borderRadius: '0.25rem',
                                            background: agent.status === 'ready'
                                                ? 'rgba(34, 197, 94, 0.2)'
                                                : agent.status === 'in-development'
                                                    ? 'rgba(251, 191, 36, 0.2)'
                                                    : 'rgba(107, 114, 128, 0.2)',
                                            color: agent.status === 'ready'
                                                ? '#22c55e'
                                                : agent.status === 'in-development'
                                                    ? '#fbbf24'
                                                    : '#6b7280'
                                        }}>
                                            {agent.status === 'ready' ? 'Ready' :
                                                agent.status === 'in-development' ? 'Beta' : 'Planned'}
                                        </span>
                                    </div>

                                    <div style={{
                                        fontSize: '0.875rem',
                                        color: '#94a3b8',
                                        marginBottom: '0.75rem',
                                        lineHeight: '1.5'
                                    }}>
                                        {agent.description}
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            padding: '0.25rem 0.5rem',
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            border: '1px solid rgba(59, 130, 246, 0.3)',
                                            borderRadius: '0.25rem',
                                            color: '#60a5fa'
                                        }}>
                                            {agent.functionalArea}
                                        </span>

                                        {usageData && usageData.totalUsageCount > 0 && (
                                            <span style={{
                                                fontSize: '0.75rem',
                                                padding: '0.25rem 0.5rem',
                                                background: 'rgba(139, 92, 246, 0.1)',
                                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                                borderRadius: '0.25rem',
                                                color: '#a78bfa'
                                            }}>
                                                Used in {usageData.totalUsageCount} workflows
                                            </span>
                                        )}

                                        {agent.crossFunctional && (
                                            <span style={{
                                                fontSize: '0.75rem',
                                                padding: '0.25rem 0.5rem',
                                                background: 'rgba(236, 72, 153, 0.1)',
                                                border: '1px solid rgba(236, 72, 153, 0.3)',
                                                borderRadius: '0.25rem',
                                                color: '#ec4899'
                                            }}>
                                                Cross-functional
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Agent Detail Modal */}
                {selectedAgent && (
                    <div
                        onClick={() => setSelectedAgent(null)}
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
                                maxWidth: '800px',
                                width: '100%',
                                maxHeight: '90vh',
                                overflow: 'auto',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'start',
                                marginBottom: '2rem'
                            }}>
                                <div>
                                    <h2 style={{
                                        fontSize: '1.875rem',
                                        fontWeight: 'bold',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {selectedAgent.name}
                                    </h2>
                                    <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                                        Agent ID: {selectedAgent.id}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setSelectedAgent(null)}
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

                            {/* Agent Details */}
                            <div style={{ display: 'grid', gap: '2rem' }}>
                                {/* Description */}
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                        Description
                                    </h3>
                                    <p style={{ color: '#e5e7eb', lineHeight: '1.75' }}>
                                        {selectedAgent.description}
                                    </p>
                                </div>

                                {/* Status & Function */}
                                <div style={{ display: 'flex', gap: '2rem' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#94a3b8' }}>
                                            Status
                                        </h4>
                                        <span style={{
                                            fontSize: '0.875rem',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '0.375rem',
                                            background: selectedAgent.status === 'ready'
                                                ? 'rgba(34, 197, 94, 0.2)'
                                                : selectedAgent.status === 'in-development'
                                                    ? 'rgba(251, 191, 36, 0.2)'
                                                    : 'rgba(107, 114, 128, 0.2)',
                                            color: selectedAgent.status === 'ready'
                                                ? '#22c55e'
                                                : selectedAgent.status === 'in-development'
                                                    ? '#fbbf24'
                                                    : '#6b7280',
                                            display: 'inline-block'
                                        }}>
                                            {selectedAgent.status === 'ready' ? 'Production Ready' :
                                                selectedAgent.status === 'in-development' ? 'In Development' : 'Planned'}
                                        </span>
                                    </div>

                                    <div>
                                        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#94a3b8' }}>
                                            Functional Area
                                        </h4>
                                        <span style={{
                                            fontSize: '0.875rem',
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            border: '1px solid rgba(59, 130, 246, 0.3)',
                                            borderRadius: '0.375rem',
                                            color: '#60a5fa',
                                            display: 'inline-block'
                                        }}>
                                            {selectedAgent.functionalArea}
                                        </span>
                                    </div>
                                </div>

                                {/* Capabilities */}
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                                        Capabilities
                                    </h3>
                                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                                        {selectedAgent.capabilities.map((capability: string, idx: number) => (
                                            <div key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem'
                                            }}>
                                                <ChevronRight size={16} style={{ color: '#60a5fa' }} />
                                                <span style={{ color: '#e5e7eb' }}>{capability}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Workflow Steps */}
                                {selectedAgent.workflowSteps && selectedAgent.workflowSteps.length > 0 && (
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                                            Workflow Integration
                                        </h3>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {selectedAgent.workflowSteps.map((step: string, idx: number) => (
                                                <span key={idx} style={{
                                                    fontSize: '0.875rem',
                                                    padding: '0.5rem 1rem',
                                                    background: 'rgba(139, 92, 246, 0.1)',
                                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                                    borderRadius: '0.375rem',
                                                    color: '#a78bfa'
                                                }}>
                                                    {step}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
} 