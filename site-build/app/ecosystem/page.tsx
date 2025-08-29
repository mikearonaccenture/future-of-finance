'use client';

import SEO from '@/components/SEO';
import Navigation from '@/components/layout/Navigation';
import { Activity, Bot, Building, ChevronRight, Database, Filter, Grid, Layers, List, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

// Interface for agent data from our master catalog
interface AgentData {
    descriptive_id: string;
    description: string;
    domain: string;
    workflows: string[];
    platforms: string[];
    capabilities: string[];
    brief_description?: string;
    agent_type?: string;
    systems_integrated?: string[];
    data_sources?: string[];
    output_destinations?: string[];
    compliance_requirements?: string[];
    risk_rating?: string;
    status?: string;
    version?: string;
}

// Domain mapping for display
const domainDisplayNames: Record<string, string> = {
    'PTP': 'Procure to Pay',
    'O2C': 'Order to Cash',
    'CTL': 'Controllership',
    'CF': 'Corporate Finance',
    'CA': 'Cost Accounting',
    'FPA': 'Financial Planning & Analysis',
    'IR': 'Investor Relations',
    'GEN': 'General/Cross-functional'
};

// Agent type icons
const agentTypeIcons: Record<string, string> = {
    'data_extraction': '📊',
    'validation': '✓',
    'calculation': '🧮',
    'reporting': '📈',
    'approval': '✅',
    'integration': '🔗',
    'automation': '🤖',
    'monitoring': '👁️'
};

export default function AgentCatalogBrowser() {
    const [agents, setAgents] = useState<Record<string, AgentData>>({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDomain, setSelectedDomain] = useState<string>('all');
    const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
    const [selectedWorkflow, setSelectedWorkflow] = useState<string>('all');
    const [selectedAgent, setSelectedAgent] = useState<AgentData | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

    // Load agent catalog
    useEffect(() => {
        fetch('/agent-catalog.json')
            .then(res => res.json())
            .then(data => {
                setAgents(data.agents || {});
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load agent catalog:', err);
                setLoading(false);
            });
    }, []);

    // Extract unique values for filters
    const { domains, platforms, workflows } = useMemo(() => {
        const domainSet = new Set<string>();
        const platformSet = new Set<string>();
        const workflowSet = new Set<string>();

        Object.values(agents).forEach(agent => {
            domainSet.add(agent.domain);
            agent.platforms?.forEach(p => platformSet.add(p));
            agent.workflows?.forEach(w => workflowSet.add(w));
        });

        return {
            domains: Array.from(domainSet).sort(),
            platforms: Array.from(platformSet).sort(),
            workflows: Array.from(workflowSet).sort()
        };
    }, [agents]);

    // Filter agents based on all criteria
    const filteredAgents = useMemo(() => {
        return Object.entries(agents).filter(([id, agent]) => {
            // Search filter
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = searchTerm === '' ||
                agent.description.toLowerCase().includes(searchLower) ||
                agent.descriptive_id.toLowerCase().includes(searchLower) ||
                agent.capabilities?.some(cap => cap.toLowerCase().includes(searchLower));

            // Domain filter
            const matchesDomain = selectedDomain === 'all' || agent.domain === selectedDomain;

            // Platform filter
            const matchesPlatform = selectedPlatform === 'all' ||
                agent.platforms?.includes(selectedPlatform);

            // Workflow filter
            const matchesWorkflow = selectedWorkflow === 'all' ||
                agent.workflows?.includes(selectedWorkflow);

            return matchesSearch && matchesDomain && matchesPlatform && matchesWorkflow;
        });
    }, [agents, searchTerm, selectedDomain, selectedPlatform, selectedWorkflow]);

    // Count agents by domain for stats
    const domainCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        Object.values(agents).forEach(agent => {
            counts[agent.domain] = (counts[agent.domain] || 0) + 1;
        });
        return counts;
    }, [agents]);

    if (loading) {
        return (
            <>
                <Navigation />
                <div style={{
                    minHeight: '100vh',
                    background: '#0a0a0a',
                    color: '#e2e8f0',
                    paddingTop: '5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <Bot size={48} style={{ margin: '0 auto 1rem', color: '#60a5fa' }} />
                        <div>Loading agent catalog...</div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <SEO
                title="AI Agent Catalog - Future of Finance"
                description="Browse our comprehensive catalog of 719 AI agents transforming finance operations across all functional areas."
            />
            <Navigation />
            <div style={{
                minHeight: '100vh',
                background: '#0a0a0a',
                color: '#e2e8f0',
                paddingTop: '5rem'
            }}>
                <div style={{
                    maxWidth: '1600px',
                    margin: '0 auto',
                    padding: '2rem'
                }}>
                    {/* Header */}
                    <div style={{
                        marginBottom: '3rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        paddingBottom: '2rem'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            marginBottom: '1.5rem'
                        }}>
                            <h1 style={{
                                fontSize: '2.25rem',
                                fontWeight: 'bold',
                                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                margin: 0
                            }}>
                                AI Agent Catalog
                            </h1>

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
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                    <Grid size={16} />
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
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                    <List size={16} />
                                    List View
                                </button>
                            </div>
                        </div>

                        {/* Summary Stats */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: '1rem'
                        }}>
                            <div style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                borderRadius: '0.5rem',
                                padding: '1rem',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa' }}>
                                    {Object.keys(agents).length}
                                </div>
                                <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Total Agents</div>
                            </div>

                            {Object.entries(domainCounts).map(([domain, count]) => (
                                <div key={domain} style={{
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                    borderRadius: '0.5rem',
                                    padding: '1rem',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a78bfa' }}>
                                        {count}
                                    </div>
                                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                                        {domainDisplayNames[domain] || domain}
                                    </div>
                                </div>
                            ))}
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
                        {/* Main Search Bar */}
                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ position: 'relative' }}>
                                <Search size={20} style={{
                                    position: 'absolute',
                                    left: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#6b7280'
                                }} />
                                <input
                                    type="text"
                                    placeholder="Search by name, ID, capability, or any metadata..."
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
                        </div>

                        {/* Filter Bar */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            {/* Domain Filter */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Building size={16} style={{ color: '#6b7280' }} />
                                <select
                                    value={selectedDomain}
                                    onChange={(e) => setSelectedDomain(e.target.value)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '0.375rem',
                                        color: '#ffffff',
                                        fontSize: '0.875rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="all" style={{ background: '#1a1a1a' }}>All Functions</option>
                                    {domains.map(domain => (
                                        <option key={domain} value={domain} style={{ background: '#1a1a1a' }}>
                                            {domainDisplayNames[domain] || domain}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Platform Filter */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Layers size={16} style={{ color: '#6b7280' }} />
                                <select
                                    value={selectedPlatform}
                                    onChange={(e) => setSelectedPlatform(e.target.value)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '0.375rem',
                                        color: '#ffffff',
                                        fontSize: '0.875rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="all" style={{ background: '#1a1a1a' }}>All Platforms</option>
                                    {platforms.map(platform => (
                                        <option key={platform} value={platform} style={{ background: '#1a1a1a' }}>
                                            {platform}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Workflow Filter */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Activity size={16} style={{ color: '#6b7280' }} />
                                <select
                                    value={selectedWorkflow}
                                    onChange={(e) => setSelectedWorkflow(e.target.value)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '0.375rem',
                                        color: '#ffffff',
                                        fontSize: '0.875rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="all" style={{ background: '#1a1a1a' }}>All Activities</option>
                                    {workflows.map(workflow => (
                                        <option key={workflow} value={workflow} style={{ background: '#1a1a1a' }}>
                                            {workflow}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Advanced Filters Toggle */}
                            <button
                                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    background: 'transparent',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '0.375rem',
                                    color: '#94a3b8',
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Filter size={16} />
                                Advanced Filters
                            </button>

                            {/* Results Count */}
                            <div style={{ marginLeft: 'auto', color: '#94a3b8', fontSize: '0.875rem' }}>
                                {filteredAgents.length} of {Object.keys(agents).length} agents
                            </div>
                        </div>

                        {/* Advanced Filters Panel */}
                        {showAdvancedFilters && (
                            <div style={{
                                marginTop: '1rem',
                                paddingTop: '1rem',
                                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                    Filter by metadata presence:
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    <button
                                        onClick={() => {
                                            setSearchTerm('capabilities:');
                                        }}
                                        style={{
                                            padding: '0.25rem 0.75rem',
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            border: '1px solid rgba(59, 130, 246, 0.3)',
                                            borderRadius: '0.25rem',
                                            color: '#60a5fa',
                                            fontSize: '0.75rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Has Capabilities
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSearchTerm('platforms:');
                                        }}
                                        style={{
                                            padding: '0.25rem 0.75rem',
                                            background: 'rgba(139, 92, 246, 0.1)',
                                            border: '1px solid rgba(139, 92, 246, 0.3)',
                                            borderRadius: '0.25rem',
                                            color: '#a78bfa',
                                            fontSize: '0.75rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Has Platforms
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Agent Grid/List */}
                    <div style={{
                        display: viewMode === 'grid' ? 'grid' : 'flex',
                        gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(250px, 1fr))' : undefined,
                        flexDirection: viewMode === 'list' ? 'column' : undefined,
                        gap: '0.75rem'
                    }}>
                        {filteredAgents.map(([id, agent]) => (
                            <div
                                key={id}
                                onClick={() => setSelectedAgent(agent)}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '0.75rem',
                                    padding: '1.25rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)';
                                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(59, 130, 246, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Agent Type Icon */}
                                <div style={{
                                    position: 'absolute',
                                    top: '0.75rem',
                                    right: '0.75rem',
                                    fontSize: '1.25rem',
                                    opacity: 0.3
                                }}>
                                    {agentTypeIcons[agent.agent_type || 'automation'] || '🤖'}
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                    position: 'relative'
                                }}>
                                    {/* Agent Name & Domain */}
                                    <div>
                                        <div style={{
                                            fontSize: '0.9375rem',
                                            fontWeight: '600',
                                            color: '#f3f4f6',
                                            marginBottom: '0.25rem',
                                            paddingRight: '2rem'
                                        }}>
                                            {agent.description}
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{
                                                fontSize: '0.625rem',
                                                padding: '0.125rem 0.375rem',
                                                borderRadius: '0.25rem',
                                                background: 'rgba(139, 92, 246, 0.2)',
                                                color: '#a78bfa',
                                                fontWeight: '500'
                                            }}>
                                                {domainDisplayNames[agent.domain] || agent.domain}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Brief Description */}
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: '#94a3b8',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        lineHeight: '1.4',
                                        minHeight: '2.1rem'
                                    }}>
                                        {agent.brief_description || 'AI-powered automation agent'}
                                    </div>

                                    {/* Key Attributes */}
                                    <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                                        {/* Agent Type */}
                                        {agent.agent_type && (
                                            <span style={{
                                                fontSize: '0.625rem',
                                                padding: '0.25rem 0.5rem',
                                                background: 'rgba(59, 130, 246, 0.1)',
                                                border: '1px solid rgba(59, 130, 246, 0.2)',
                                                borderRadius: '1rem',
                                                color: '#60a5fa',
                                                textTransform: 'capitalize',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.25rem'
                                            }}>
                                                <span style={{ fontSize: '0.75rem' }}>
                                                    {agentTypeIcons[agent.agent_type] || '⚡'}
                                                </span>
                                                {agent.agent_type}
                                            </span>
                                        )}

                                        {/* Risk Rating */}
                                        {agent.risk_rating && (
                                            <span style={{
                                                fontSize: '0.625rem',
                                                padding: '0.25rem 0.5rem',
                                                background: agent.risk_rating === 'High'
                                                    ? 'rgba(239, 68, 68, 0.15)'
                                                    : agent.risk_rating === 'Medium'
                                                        ? 'rgba(251, 191, 36, 0.15)'
                                                        : 'rgba(34, 197, 94, 0.15)',
                                                border: `1px solid ${agent.risk_rating === 'High'
                                                        ? 'rgba(239, 68, 68, 0.3)'
                                                        : agent.risk_rating === 'Medium'
                                                            ? 'rgba(251, 191, 36, 0.3)'
                                                            : 'rgba(34, 197, 94, 0.3)'
                                                    }`,
                                                borderRadius: '1rem',
                                                color: agent.risk_rating === 'High'
                                                    ? '#ef4444'
                                                    : agent.risk_rating === 'Medium'
                                                        ? '#fbbf24'
                                                        : '#22c55e',
                                                fontWeight: '500'
                                            }}>
                                                {agent.risk_rating}
                                            </span>
                                        )}

                                        {/* Status Indicator */}
                                        {agent.status && (
                                            <span style={{
                                                fontSize: '0.625rem',
                                                padding: '0.25rem 0.5rem',
                                                background: agent.status === 'active'
                                                    ? 'rgba(34, 197, 94, 0.15)'
                                                    : 'rgba(107, 114, 128, 0.15)',
                                                border: `1px solid ${agent.status === 'active'
                                                        ? 'rgba(34, 197, 94, 0.3)'
                                                        : 'rgba(107, 114, 128, 0.3)'
                                                    }`,
                                                borderRadius: '1rem',
                                                color: agent.status === 'active'
                                                    ? '#22c55e'
                                                    : '#6b7280',
                                                textTransform: 'capitalize',
                                                fontWeight: '500'
                                            }}>
                                                {agent.status === 'active' ? '● Active' : '○ Dev'}
                                            </span>
                                        )}
                                    </div>

                                    {/* Quick Stats */}
                                    <div style={{
                                        display: 'flex',
                                        gap: '1rem',
                                        paddingTop: '0.5rem',
                                        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                                        fontSize: '0.625rem',
                                        color: '#6b7280'
                                    }}>
                                        {agent.systems_integrated && agent.systems_integrated.length > 0 && (
                                            <span>{agent.systems_integrated.length} systems</span>
                                        )}
                                        {agent.capabilities && agent.capabilities.length > 0 && (
                                            <span>{agent.capabilities.length} capabilities</span>
                                        )}
                                        {agent.compliance_requirements && agent.compliance_requirements.length > 0 && (
                                            <span>{agent.compliance_requirements.length} compliance</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredAgents.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            padding: '4rem',
                            color: '#6b7280'
                        }}>
                            <Database size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                            <div>No agents found matching your filters</div>
                        </div>
                    )}
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
                            background: 'rgba(0, 0, 0, 0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            padding: '2rem',
                            backdropFilter: 'blur(8px)'
                        }}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                                borderRadius: '1.5rem',
                                padding: '2.5rem',
                                maxWidth: '1000px',
                                width: '100%',
                                maxHeight: '90vh',
                                overflow: 'auto',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            {/* Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'start',
                                marginBottom: '2rem',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                paddingBottom: '1.5rem'
                            }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                        <span style={{ fontSize: '2rem' }}>
                                            {agentTypeIcons[selectedAgent.agent_type || 'automation'] || '🤖'}
                                        </span>
                                        <h2 style={{
                                            fontSize: '2rem',
                                            fontWeight: 'bold',
                                            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            {selectedAgent.description}
                                        </h2>
                                    </div>
                                    <p style={{
                                        color: '#e5e7eb',
                                        fontSize: '1.125rem',
                                        marginBottom: '0.75rem'
                                    }}>
                                        {selectedAgent.brief_description}
                                    </p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            padding: '0.25rem 0.75rem',
                                            background: 'rgba(139, 92, 246, 0.2)',
                                            border: '1px solid rgba(139, 92, 246, 0.3)',
                                            borderRadius: '1rem',
                                            color: '#a78bfa'
                                        }}>
                                            ID: {selectedAgent.descriptive_id}
                                        </span>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            padding: '0.25rem 0.75rem',
                                            background: 'rgba(59, 130, 246, 0.2)',
                                            border: '1px solid rgba(59, 130, 246, 0.3)',
                                            borderRadius: '1rem',
                                            color: '#60a5fa'
                                        }}>
                                            v{selectedAgent.version || '1.0.0'}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedAgent(null)}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '0.75rem',
                                        padding: '0.75rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Key Metrics */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1rem',
                                marginBottom: '2rem'
                            }}>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '0.75rem',
                                    padding: '1.25rem',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '0.875rem',
                                        color: '#94a3b8',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        Type
                                    </div>
                                    <div style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '600',
                                        color: '#f3f4f6',
                                        textTransform: 'capitalize'
                                    }}>
                                        {selectedAgent.agent_type || 'Automation'}
                                    </div>
                                </div>

                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '0.75rem',
                                    padding: '1.25rem',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '0.875rem',
                                        color: '#94a3b8',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        Domain
                                    </div>
                                    <div style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '600',
                                        color: '#f3f4f6'
                                    }}>
                                        {domainDisplayNames[selectedAgent.domain] || selectedAgent.domain}
                                    </div>
                                </div>

                                <div style={{
                                    background: selectedAgent.risk_rating === 'High'
                                        ? 'rgba(239, 68, 68, 0.1)'
                                        : selectedAgent.risk_rating === 'Medium'
                                            ? 'rgba(251, 191, 36, 0.1)'
                                            : 'rgba(34, 197, 94, 0.1)',
                                    border: `1px solid ${selectedAgent.risk_rating === 'High'
                                        ? 'rgba(239, 68, 68, 0.3)'
                                        : selectedAgent.risk_rating === 'Medium'
                                            ? 'rgba(251, 191, 36, 0.3)'
                                            : 'rgba(34, 197, 94, 0.3)'
                                        }`,
                                    borderRadius: '0.75rem',
                                    padding: '1.25rem',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '0.875rem',
                                        color: '#94a3b8',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        Risk Level
                                    </div>
                                    <div style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '600',
                                        color: selectedAgent.risk_rating === 'High'
                                            ? '#ef4444'
                                            : selectedAgent.risk_rating === 'Medium'
                                                ? '#fbbf24'
                                                : '#22c55e'
                                    }}>
                                        {selectedAgent.risk_rating || 'Medium'}
                                    </div>
                                </div>

                                <div style={{
                                    background: selectedAgent.status === 'active'
                                        ? 'rgba(34, 197, 94, 0.1)'
                                        : 'rgba(107, 114, 128, 0.1)',
                                    border: `1px solid ${selectedAgent.status === 'active'
                                        ? 'rgba(34, 197, 94, 0.3)'
                                        : 'rgba(107, 114, 128, 0.3)'
                                        }`,
                                    borderRadius: '0.75rem',
                                    padding: '1.25rem',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '0.875rem',
                                        color: '#94a3b8',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        Status
                                    </div>
                                    <div style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '600',
                                        color: selectedAgent.status === 'active'
                                            ? '#22c55e'
                                            : '#6b7280',
                                        textTransform: 'capitalize'
                                    }}>
                                        {selectedAgent.status || 'Active'}
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Sections */}
                            <div style={{ display: 'grid', gap: '2rem' }}>
                                {/* Capabilities */}
                                {selectedAgent.capabilities && selectedAgent.capabilities.length > 0 && (
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: '600',
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ color: '#60a5fa' }}>⚡</span>
                                            Core Capabilities
                                            <span style={{
                                                fontSize: '0.875rem',
                                                padding: '0.125rem 0.5rem',
                                                background: 'rgba(59, 130, 246, 0.1)',
                                                borderRadius: '1rem',
                                                color: '#60a5fa'
                                            }}>
                                                {selectedAgent.capabilities.length}
                                            </span>
                                        </h3>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                            gap: '0.75rem'
                                        }}>
                                            {selectedAgent.capabilities.map((capability: string, idx: number) => (
                                                <div key={idx} style={{
                                                    display: 'flex',
                                                    alignItems: 'start',
                                                    gap: '0.75rem',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255, 255, 255, 0.02)',
                                                    borderRadius: '0.5rem',
                                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                                }}>
                                                    <ChevronRight size={16} style={{ color: '#60a5fa', marginTop: '0.125rem', flexShrink: 0 }} />
                                                    <span style={{ color: '#e5e7eb', fontSize: '0.875rem', lineHeight: '1.5' }}>{capability}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Integration & Data Flow */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '1.5rem'
                                }}>
                                    {/* Systems Integrated */}
                                    {selectedAgent.systems_integrated && selectedAgent.systems_integrated.length > 0 && (
                                        <div>
                                            <h4 style={{
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                marginBottom: '0.75rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                color: '#a78bfa'
                                            }}>
                                                <Layers size={18} />
                                                Systems Integrated
                                            </h4>
                                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                {selectedAgent.systems_integrated.map((system: string, idx: number) => (
                                                    <span key={idx} style={{
                                                        fontSize: '0.75rem',
                                                        padding: '0.375rem 0.75rem',
                                                        background: 'rgba(139, 92, 246, 0.1)',
                                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                                        borderRadius: '0.375rem',
                                                        color: '#a78bfa'
                                                    }}>
                                                        {system}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Data Sources */}
                                    {selectedAgent.data_sources && selectedAgent.data_sources.length > 0 && (
                                        <div>
                                            <h4 style={{
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                marginBottom: '0.75rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                color: '#22c55e'
                                            }}>
                                                <Database size={18} />
                                                Data Sources
                                            </h4>
                                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                {selectedAgent.data_sources.map((source: string, idx: number) => (
                                                    <span key={idx} style={{
                                                        fontSize: '0.75rem',
                                                        padding: '0.375rem 0.75rem',
                                                        background: 'rgba(34, 197, 94, 0.1)',
                                                        border: '1px solid rgba(34, 197, 94, 0.3)',
                                                        borderRadius: '0.375rem',
                                                        color: '#22c55e'
                                                    }}>
                                                        {source}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Output Destinations */}
                                    {selectedAgent.output_destinations && selectedAgent.output_destinations.length > 0 && (
                                        <div>
                                            <h4 style={{
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                marginBottom: '0.75rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                color: '#fbbf24'
                                            }}>
                                                <Activity size={18} />
                                                Output Destinations
                                            </h4>
                                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                {selectedAgent.output_destinations.map((dest: string, idx: number) => (
                                                    <span key={idx} style={{
                                                        fontSize: '0.75rem',
                                                        padding: '0.375rem 0.75rem',
                                                        background: 'rgba(251, 191, 36, 0.1)',
                                                        border: '1px solid rgba(251, 191, 36, 0.3)',
                                                        borderRadius: '0.375rem',
                                                        color: '#fbbf24'
                                                    }}>
                                                        {dest}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Compliance & Governance */}
                                {selectedAgent.compliance_requirements && selectedAgent.compliance_requirements.length > 0 && (
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: '600',
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ color: '#ef4444' }}>🛡️</span>
                                            Compliance & Governance
                                        </h3>
                                        <div style={{
                                            background: 'rgba(239, 68, 68, 0.05)',
                                            border: '1px solid rgba(239, 68, 68, 0.2)',
                                            borderRadius: '0.75rem',
                                            padding: '1rem'
                                        }}>
                                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                {selectedAgent.compliance_requirements.map((req: string, idx: number) => (
                                                    <span key={idx} style={{
                                                        fontSize: '0.875rem',
                                                        padding: '0.5rem 1rem',
                                                        background: 'rgba(239, 68, 68, 0.1)',
                                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                                        borderRadius: '0.375rem',
                                                        color: '#f87171',
                                                        fontWeight: '500'
                                                    }}>
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Platforms & Activities */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '1.5rem'
                                }}>
                                    {/* Platforms */}
                                    {selectedAgent.platforms && selectedAgent.platforms.length > 0 && (
                                        <div>
                                            <h4 style={{
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                marginBottom: '0.75rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                color: '#60a5fa'
                                            }}>
                                                <Layers size={18} />
                                                Supported Platforms
                                            </h4>
                                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                {selectedAgent.platforms.map((platform: string, idx: number) => (
                                                    <span key={idx} style={{
                                                        fontSize: '0.75rem',
                                                        padding: '0.375rem 0.75rem',
                                                        background: 'rgba(59, 130, 246, 0.1)',
                                                        border: '1px solid rgba(59, 130, 246, 0.3)',
                                                        borderRadius: '0.375rem',
                                                        color: '#60a5fa',
                                                        fontWeight: '500'
                                                    }}>
                                                        {platform.replace(/_/g, ' ')}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Activities */}
                                    {selectedAgent.workflows && selectedAgent.workflows.length > 0 && (
                                        <div>
                                            <h4 style={{
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                marginBottom: '0.75rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                color: '#a78bfa'
                                            }}>
                                                <Activity size={18} />
                                                Connected Activities
                                            </h4>
                                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                {selectedAgent.workflows.map((workflow: string, idx: number) => (
                                                    <span key={idx} style={{
                                                        fontSize: '0.75rem',
                                                        padding: '0.375rem 0.75rem',
                                                        background: 'rgba(139, 92, 246, 0.1)',
                                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                                        borderRadius: '0.375rem',
                                                        color: '#a78bfa',
                                                        fontWeight: '500',
                                                        textTransform: 'capitalize'
                                                    }}>
                                                        {workflow.replace(/-/g, ' ')}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
} 