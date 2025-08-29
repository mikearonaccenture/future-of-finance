'use client';

import SEO from '@/components/SEO';
import Navigation from '@/components/layout/Navigation';
import { getAgentInfo } from '@/lib/agent-catalog';
import { MASTER_FINANCE_TAXONOMY } from '@/lib/finance-taxonomy-master';
import { controllershipWorkflows } from '@/workflows/controllership-workflows';
import { corporateFinanceWorkflows } from '@/workflows/corporate-finance-workflows';
import { costAccountingWorkflows } from '@/workflows/cost-accounting-workflows';
import { fpAndAWorkflows } from '@/workflows/fpa-workflows';
import { investorRelationsWorkflows } from '@/workflows/investor-relations-workflows';
import { orderToCashWorkflows } from '@/workflows/order-to-cash-workflows';
import { procureToPayWorkflows } from '@/workflows/procure-to-pay-workflows';
import { AlertCircle, Bot, CheckCircle, ChevronDown, ChevronRight, Clock, Users, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Agent catalog interface
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

// Platform mapping based on our 17 platforms structure
const PLATFORM_MAPPING = {
    'procure-to-pay': [
        {
            id: 'intelligent-invoice',
            name: 'Intelligent Invoice Processing Platform',
            activities: ['p2p-invoice-to-pay', 'p2p-receipt-scanning', 'p2p-invoice-processing', 'p2p-payment-processing']
        },
        {
            id: 'supplier-collaboration',
            name: 'Supplier Collaboration Platform',
            activities: ['p2p-vendor-statement-reconciliation', 'p2p-accounts-payable-reconciliation']
        },
        {
            id: 'employee-experience',
            name: 'Employee Experience Platform',
            activities: ['p2p-procurement-card-administration', 'p2p-travel-expense-administration', 'p2p-ap-reporting-analytics']
        }
    ],
    'order-to-cash': [
        {
            id: 'intelligent-receivables',
            name: 'Intelligent Receivables Platform',
            activities: ['o2c-receivable-management', 'o2c-credit-management', 'o2c-collections-disputes-management', 'o2c-deductions-management']
        },
        {
            id: 'customer-experience',
            name: 'Customer Experience Portal',
            activities: ['o2c-manage-customer-billing', 'o2c-maintain-ar-ledger-apply-cash', 'o2c-manage-customer-requests-inquiries']
        }
    ],
    'cost-accounting': [
        {
            id: 'dynamic-cost-engine',
            name: 'Dynamic Cost Engine',
            activities: ['ca-product-costing', 'ca-product-service-costing']
        }
    ],
    'controllership': [
        {
            id: 'continuous-close',
            name: 'Continuous Close Platform',
            activities: ['ctrl-r2r-general-accounting', 'ctrl-r2r-cash-management-banking', 'ctrl-r2r-intercompany-accounting', 'ctrl-r2r-asset-accounting', 'ctrl-r2r-period-close', 'ctrl-r2r-perform-financial-reporting']
        },
        {
            id: 'control-compliance',
            name: 'Control & Compliance Suite',
            activities: ['ctrl-r2r-lease-accounting', 'ctrl-r2r-partner-revenue-accounting', 'ctrl-r2r-project-accounting', 'ctrl-r2r-bs-reconciliation-analytics', 'ctrl-r2r-perform-joint-venture-accounting']
        },
        {
            id: 'regulatory-intelligence',
            name: 'Regulatory Intelligence Platform',
            activities: ['ctrl-srr-manage-policy-controls-referencing', 'ctrl-srr-group-reporting-consolidations', 'ctrl-srr-financial-statements-disclosures', 'ctrl-srr-statutory-gaap-reporting-adjustments']
        },
        {
            id: 'statutory-reporting',
            name: 'Statutory Reporting Hub',
            activities: ['ctrl-srr-statutory-reporting', 'ctrl-srr-regulatory-reporting', 'ctrl-srr-audit-response-management']
        }
    ],
    'corporate-finance': [
        {
            id: 'tax-intelligence',
            name: 'Tax Intelligence Platform',
            activities: ['cf-tax-manage-tax-planning-strategy', 'cf-tax-manage-direct-tax', 'cf-tax-manage-indirect-tax', 'cf-tax-manage-transfer-pricing', 'cf-tax-manage-digital-tax-compliance', 'cf-tax-manage-interactions-authorities', 'cf-tax-manage-tax-function-governance']
        },
        {
            id: 'treasury-command',
            name: 'Treasury Command Center',
            activities: ['cf-treasury-operating-model-governance', 'cf-treasury-bank-relationship-management', 'cf-treasury-cash-liquidity-management', 'cf-treasury-investment-management', 'cf-treasury-debt-management']
        },
        {
            id: 'risk-analytics',
            name: 'Risk & Analytics Suite',
            activities: ['cf-treasury-accounting', 'cf-treasury-financial-risk-management', 'cf-treasury-kpi-reporting-analytics']
        }
    ],
    'fpa': [
        {
            id: 'connected-enterprise',
            name: 'Connected Enterprise Planning Platform',
            activities: ['fpa-financial-planning-analysis', 'fpa-strategic-lr-planning', 'fpa-integrated-enterprise-planning', 'fpa-budgeting', 'fpa-dynamic-forecasting', 'fpa-decision-support-modelling']
        },
        {
            id: 'management-reporting',
            name: 'Management Reporting Platform',
            activities: ['fpa-reporting-analysis']
        }
    ],
    'investor-relations': [
        {
            id: 'investor-intelligence',
            name: 'Investor Intelligence Platform',
            activities: ['ir-investor-relations', 'ir-quarterly-earnings']
        },
        {
            id: 'market-intelligence',
            name: 'Market Intelligence Suite',
            activities: ['ir-competitive-intelligence', 'ir-stock-surveillance', 'ir-investment-community-relationship-mgmt']
        }
    ]
};

// Define gradients for each function area (matching the taxonomy page)
const functionGradients: { [key: string]: string } = {
    'procure-to-pay': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'order-to-cash': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'cost-accounting': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'controllership': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'corporate-finance': 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'fpa': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    'investor-relations': 'linear-gradient(135deg, #764ba2 0%, #f953c6 100%)'
};

// Combine all workflows
const allWorkflows = [
    ...procureToPayWorkflows,
    ...orderToCashWorkflows,
    ...controllershipWorkflows,
    ...corporateFinanceWorkflows,
    ...costAccountingWorkflows,
    ...fpAndAWorkflows,
    ...investorRelationsWorkflows
];

// Workflow mapping
const workflowMap: { [key: string]: string[] } = {
    // Procure to Pay
    'p2p-invoice-to-pay': ['Invoice to Pay'],
    'p2p-receipt-scanning': ['Receipt & Scanning'],
    'p2p-invoice-processing': ['Invoice Processing'],
    'p2p-payment-processing': ['Payment Processing'],
    'p2p-vendor-statement-reconciliation': ['Vendor Statement Reconciliation'],
    'p2p-accounts-payable-reconciliation': ['Accounts Payable Reconciliation'],
    'p2p-procurement-card-administration': ['Procurement Card Administration'],
    'p2p-travel-expense-administration': ['Travel & Expense Administration'],
    'p2p-ap-reporting-analytics': ['AP Reporting & Analytics'],

    // Order to Cash
    'o2c-receivable-management': ['Receivable Management'],
    'o2c-credit-management': ['Credit Management'],
    'o2c-manage-customer-billing': ['Manage Customer Billing'],
    'o2c-collections-disputes-management': ['Collections & Disputes Management'],
    'o2c-maintain-ar-ledger-apply-cash': ['Maintain AR Ledger and Apply Cash'],
    'o2c-deductions-management': ['Deductions Management'],
    'o2c-manage-customer-requests-inquiries': ['Manage Customer Requests & Inquiries'],

    // Cost Accounting
    'ca-product-costing': ['Product Costing'],
    'ca-product-service-costing': ['Product & Service Costing'],

    // Controllership - Record to Report
    'ctrl-r2r-general-accounting': ['General Accounting'],
    'ctrl-r2r-cash-management-banking': ['Cash Management and Banking'],
    'ctrl-r2r-intercompany-accounting': ['InterCompany Accounting'],
    'ctrl-r2r-asset-accounting': ['Asset Accounting'],
    'ctrl-r2r-lease-accounting': ['Lease Accounting'],
    'ctrl-r2r-partner-revenue-accounting': ['Partner and Revenue Accounting'],
    'ctrl-r2r-project-accounting': ['Project Accounting'],
    'ctrl-r2r-period-close': ['Period Close'],
    'ctrl-r2r-perform-financial-reporting': ['Perform Financial Reporting'],
    'ctrl-r2r-bs-reconciliation-analytics': ['BS Reconciliation & Analytics'],
    'ctrl-r2r-perform-joint-venture-accounting': ['Perform Joint Venture Accounting'],

    // Controllership - Statutory Regulatory Reporting
    'ctrl-srr-manage-policy-controls-referencing': ['Manage Policy, Controls and Referencing'],
    'ctrl-srr-group-reporting-consolidations': ['Group Reporting & Consolidations'],
    'ctrl-srr-financial-statements-disclosures': ['Financial Statements & Disclosures'],
    'ctrl-srr-statutory-gaap-reporting-adjustments': ['Statutory and GAAP Reporting Adjustments'],
    'ctrl-srr-statutory-reporting': ['Statutory Reporting'],
    'ctrl-srr-regulatory-reporting': ['Regulatory Reporting'],
    'ctrl-srr-audit-response-management': ['Audit & Response Management'],

    // Corporate Finance - Tax activities
    'cf-tax-manage-tax-planning-strategy': ['Manage Tax Planning and Strategy'],
    'cf-tax-manage-direct-tax': ['Manage Direct Tax'],
    'cf-tax-manage-indirect-tax': ['Manage Indirect Tax'],
    'cf-tax-manage-transfer-pricing': ['Manage Transfer Pricing'],
    'cf-tax-manage-digital-tax-compliance': ['Manage Digital Tax Compliance'],
    'cf-tax-manage-interactions-authorities': ['Manage Interactions with Authorities'],
    'cf-tax-manage-tax-function-governance': ['Manage Tax Function Governance'],

    // Corporate Finance - Treasury activities
    'cf-treasury-operating-model-governance': ['Treasury Operating Model & Governance'],
    'cf-treasury-bank-relationship-management': ['Bank Relationship Management'],
    'cf-treasury-cash-liquidity-management': ['Cash and Liquidity Management'],
    'cf-treasury-investment-management': ['Investment Management'],
    'cf-treasury-debt-management': ['Debt Management'],
    'cf-treasury-accounting': ['Treasury Accounting'],
    'cf-treasury-financial-risk-management': ['Financial Risk Management'],
    'cf-treasury-kpi-reporting-analytics': ['Treasury KPI Reporting and Analytics'],

    // FP&A activities
    'fpa-financial-planning-analysis': ['Financial Planning and Analysis'],
    'fpa-strategic-lr-planning': ['Strategic or LR Planning'],
    'fpa-integrated-enterprise-planning': ['Integrated Enterprise Planning'],
    'fpa-budgeting': ['Budgeting'],
    'fpa-dynamic-forecasting': ['Dynamic Forecasting'],
    'fpa-decision-support-modelling': ['Decision Support & Modelling'],
    'fpa-reporting-analysis': ['Reporting & Analysis'],

    // Investor Relations activities
    'ir-investor-relations': ['Investor Relations'],
    'ir-quarterly-earnings': ['Quarterly Earnings'],
    'ir-competitive-intelligence': ['Competitive Intelligence'],
    'ir-stock-surveillance': ['Stock Surveillance'],
    'ir-investment-community-relationship-mgmt': ['Investment Community Relationship Mgmt']
};

export default function WorkflowsPage() {
    const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
    const [selectedWorkflow, setSelectedWorkflow] = useState<any>(null);
    const [viewMode, setViewMode] = useState<'current' | 'future'>('future');
    const [selectedStep, setSelectedStep] = useState<any>(null);
    const [expandedFunctions, setExpandedFunctions] = useState<Set<string>>(new Set());
    const [expandedPlatforms, setExpandedPlatforms] = useState<Set<string>>(new Set());
    const [agentCatalog, setAgentCatalog] = useState<Record<string, AgentData>>({});

    // Load agent catalog
    useEffect(() => {
        fetch('/agent-catalog.json')
            .then(res => res.json())
            .then(data => {
                setAgentCatalog(data.agents || {});
            })
            .catch(err => {
                console.error('Failed to load agent catalog:', err);
            });
    }, []);

    // Combine all workflows
    const allWorkflows = [
        ...procureToPayWorkflows,
        ...orderToCashWorkflows,
        ...controllershipWorkflows,
        ...corporateFinanceWorkflows,
        ...costAccountingWorkflows,
        ...fpAndAWorkflows,
        ...investorRelationsWorkflows
    ];

    // Calculate unique AI agents used in a workflow
    const getUniqueAIAgentsForWorkflow = (workflow: any) => {
        if (!workflow || !workflow.currentStateWorkflow) return [];

        const uniqueAgents = new Set<string>();

        workflow.currentStateWorkflow.forEach((step: any) => {
            if (step.futureState && step.futureState.aiAgents) {
                step.futureState.aiAgents.forEach((agentId: string) => {
                    uniqueAgents.add(agentId);
                });
            }
        });

        return Array.from(uniqueAgents);
    };

    // Get the workflow for an activity
    const getWorkflowForActivity = (activityId: string) => {
        const activityNames = workflowMap[activityId] || [];
        return allWorkflows.find(w => activityNames.includes(w.name));
    };

    const selectedWorkflows = selectedActivity ? [getWorkflowForActivity(selectedActivity)].filter(Boolean) : [];

    // Add aiAgentsUsed to selectedWorkflow
    const enhancedSelectedWorkflow = selectedWorkflow ? {
        ...selectedWorkflow,
        aiAgentsUsed: getUniqueAIAgentsForWorkflow(selectedWorkflow)
    } : null;

    // Toggle function expansion
    const toggleFunction = (functionId: string) => {
        const newExpanded = new Set(expandedFunctions);
        if (newExpanded.has(functionId)) {
            newExpanded.delete(functionId);
            // Also collapse all platforms under this function
            const platforms = PLATFORM_MAPPING[functionId as keyof typeof PLATFORM_MAPPING] || [];
            platforms.forEach(p => {
                expandedPlatforms.delete(`${functionId}-${p.id}`);
            });
            setExpandedPlatforms(new Set(expandedPlatforms));
        } else {
            newExpanded.add(functionId);
        }
        setExpandedFunctions(newExpanded);
    };

    // Toggle platform expansion
    const togglePlatform = (functionId: string, platformId: string) => {
        const key = `${functionId}-${platformId}`;
        const newExpanded = new Set(expandedPlatforms);
        if (newExpanded.has(key)) {
            newExpanded.delete(key);
        } else {
            newExpanded.add(key);
        }
        setExpandedPlatforms(newExpanded);
    };

    // Updated getAgentById to use catalog
    const getAgentById = (agentId: string) => {
        // First check if it's in our catalog by descriptive_id
        const agent = Object.values(agentCatalog).find(a => a.descriptive_id === agentId);
        if (agent) {
            return {
                id: agent.descriptive_id,
                name: agent.description,
                description: agent.brief_description || agent.description,
                capabilities: agent.capabilities || [],
                status: agent.status || 'ready'
            };
        }
        return null;
    };

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
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>
                        <h1 style={{
                            fontSize: '1.875rem',
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            margin: 0,
                            marginBottom: '0.5rem'
                        }}>
                            See Agents in Action
                        </h1>
                        <p style={{
                            color: '#94a3b8',
                            fontSize: '1rem',
                            margin: 0
                        }}>
                            Click on activity to see Agentic workflows.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div style={{ display: 'flex', height: 'calc(100vh - 80px)' }}>
                    {/* Left Sidebar - Hierarchical Activities */}
                    <div style={{
                        width: '350px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                        overflowY: 'auto',
                        padding: '1.5rem'
                    }}>
                        <div style={{
                            marginBottom: '1.5rem'
                        }}>
                            <h2 style={{
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                marginBottom: '0.25rem',
                                color: '#e2e8f0'
                            }}>
                                Select your Function → Platform → Activity
                            </h2>
                            <p style={{
                                fontSize: '0.875rem',
                                color: '#94a3b8',
                                margin: 0
                            }}>
                                to see workflows
                            </p>
                        </div>

                        {/* Hierarchical Menu */}
                        {MASTER_FINANCE_TAXONOMY.map(func => {
                            const isExpanded = expandedFunctions.has(func.id);
                            const platforms = PLATFORM_MAPPING[func.id as keyof typeof PLATFORM_MAPPING] || [];

                            return (
                                <div key={func.id} style={{ marginBottom: '1rem' }}>
                                    {/* Function Level */}
                                    <div
                                        onClick={() => toggleFunction(func.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '0.75rem 1rem',
                                            background: isExpanded ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '0.5rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            marginBottom: isExpanded ? '0.5rem' : 0
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = isExpanded ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)';
                                        }}
                                    >
                                        <div>
                                            <h3 style={{
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                background: functionGradients[func.id],
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                marginBottom: '0.25rem'
                                            }}>
                                                {func.name}
                                            </h3>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                color: '#94a3b8'
                                            }}>
                                                {func.totalActivities} activities
                                            </span>
                                        </div>
                                        {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                    </div>

                                    {/* Platforms Level */}
                                    {isExpanded && (
                                        <div style={{ marginLeft: '1rem' }}>
                                            {platforms.map(platform => {
                                                const platformKey = `${func.id}-${platform.id}`;
                                                const isPlatformExpanded = expandedPlatforms.has(platformKey);

                                                return (
                                                    <div key={platform.id} style={{ marginBottom: '0.5rem' }}>
                                                        <div
                                                            onClick={() => togglePlatform(func.id, platform.id)}
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                padding: '0.5rem 0.75rem',
                                                                background: isPlatformExpanded ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                                                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                                                borderRadius: '0.375rem',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s ease',
                                                                marginBottom: isPlatformExpanded ? '0.25rem' : 0
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.background = isPlatformExpanded ? 'rgba(139, 92, 246, 0.1)' : 'transparent';
                                                            }}
                                                        >
                                                            <div style={{ flex: 1 }}>
                                                                <div style={{
                                                                    fontSize: '0.875rem',
                                                                    fontWeight: '500',
                                                                    color: '#a78bfa',
                                                                    marginBottom: '0.125rem'
                                                                }}>
                                                                    {platform.name}
                                                                </div>
                                                                <span style={{
                                                                    fontSize: '0.75rem',
                                                                    color: '#94a3b8'
                                                                }}>
                                                                    {platform.activities.length} activities
                                                                </span>
                                                            </div>
                                                            {isPlatformExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                                        </div>

                                                        {/* Activities Level */}
                                                        {isPlatformExpanded && (
                                                            <div style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                                                                {platform.activities.map(activityId => {
                                                                    // Find the activity details
                                                                    let activity;
                                                                    if (func.activities) {
                                                                        activity = func.activities.find(a => a.id === activityId);
                                                                    }
                                                                    if (!activity && func.subCategories) {
                                                                        for (const sub of func.subCategories) {
                                                                            activity = sub.activities.find(a => a.id === activityId);
                                                                            if (activity) break;
                                                                        }
                                                                    }

                                                                    const hasWorkflow = !!getWorkflowForActivity(activityId);

                                                                    return (
                                                                        <button
                                                                            key={activityId}
                                                                            onClick={() => {
                                                                                if (hasWorkflow) {
                                                                                    setSelectedActivity(activityId);
                                                                                    setSelectedWorkflow(getWorkflowForActivity(activityId));
                                                                                }
                                                                            }}
                                                                            disabled={!hasWorkflow}
                                                                            style={{
                                                                                width: '100%',
                                                                                background: selectedActivity === activityId
                                                                                    ? 'rgba(59, 130, 246, 0.2)'
                                                                                    : hasWorkflow
                                                                                        ? 'rgba(255, 255, 255, 0.02)'
                                                                                        : 'transparent',
                                                                                border: selectedActivity === activityId
                                                                                    ? '1px solid rgba(59, 130, 246, 0.5)'
                                                                                    : '1px solid rgba(255, 255, 255, 0.1)',
                                                                                borderRadius: '0.375rem',
                                                                                padding: '0.5rem 0.75rem',
                                                                                textAlign: 'left',
                                                                                color: hasWorkflow ? '#f3f4f6' : '#6b7280',
                                                                                cursor: hasWorkflow ? 'pointer' : 'not-allowed',
                                                                                transition: 'all 0.2s ease',
                                                                                fontSize: '0.875rem',
                                                                                opacity: hasWorkflow ? 1 : 0.5,
                                                                                marginBottom: '0.25rem',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'space-between'
                                                                            }}
                                                                        >
                                                                            <span>{activity?.name || activityId}</span>
                                                                            {!hasWorkflow && (
                                                                                <span style={{
                                                                                    fontSize: '0.625rem',
                                                                                    color: '#6b7280'
                                                                                }}>
                                                                                    Soon
                                                                                </span>
                                                                            )}
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
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
                                <Bot size={80} style={{ color: '#8b5cf6', marginBottom: '1.5rem' }} />
                                <p style={{
                                    color: '#94a3b8',
                                    maxWidth: '500px',
                                    fontSize: '1.5rem',
                                    fontWeight: '500'
                                }}>
                                    Click on activity to see Agentic workflows.
                                </p>
                            </div>
                        ) : (
                            <div>
                                {/* Workflow Header */}
                                <div style={{
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    gap: '2rem'
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            marginBottom: '0.5rem'
                                        }}>
                                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
                                                {selectedWorkflow.name}
                                            </h2>
                                            {/* Platform Badge */}
                                            {selectedWorkflow.platform && (
                                                <div style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.25rem',
                                                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                                                    border: '1px solid rgba(59, 130, 246, 0.3)',
                                                    borderRadius: '1rem',
                                                    padding: '0.25rem 0.75rem',
                                                    fontSize: '0.75rem'
                                                }}>
                                                    <span style={{ color: '#94a3b8' }}>Platform:</span>
                                                    <span style={{ color: '#60a5fa', fontWeight: '600' }}>
                                                        {selectedWorkflow.platform}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>
                                            {selectedWorkflow.description}
                                        </p>
                                    </div>

                                    {/* View Mode Toggle */}
                                    <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                                        <button
                                            onClick={() => setViewMode('current')}
                                            style={{
                                                padding: '0.4rem 1rem',
                                                background: viewMode === 'current'
                                                    ? 'rgba(239, 68, 68, 0.2)'
                                                    : 'transparent',
                                                border: '1px solid ' + (viewMode === 'current'
                                                    ? 'rgba(239, 68, 68, 0.5)'
                                                    : 'rgba(255, 255, 255, 0.2)'),
                                                borderRadius: '0.375rem',
                                                color: viewMode === 'current' ? '#ef4444' : '#94a3b8',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            Current State
                                        </button>
                                        <button
                                            onClick={() => setViewMode('future')}
                                            style={{
                                                padding: '0.4rem 1rem',
                                                background: viewMode === 'future'
                                                    ? 'rgba(34, 197, 94, 0.2)'
                                                    : 'transparent',
                                                border: '1px solid ' + (viewMode === 'future'
                                                    ? 'rgba(34, 197, 94, 0.5)'
                                                    : 'rgba(255, 255, 255, 0.2)'),
                                                borderRadius: '0.375rem',
                                                color: viewMode === 'future' ? '#22c55e' : '#94a3b8',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            Future State (AI-Powered)
                                        </button>
                                    </div>
                                </div>

                                {/* Summary Stats - Compact */}
                                <div style={{
                                    marginBottom: '1rem',
                                    marginTop: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '2rem',
                                    flexWrap: 'wrap'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#60a5fa' }}>
                                            {selectedWorkflow.totalSteps}
                                        </div>
                                        <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                            Process Steps
                                        </div>
                                    </div>

                                    {viewMode === 'future' && (
                                        <>
                                            <div style={{
                                                width: '1px',
                                                height: '30px',
                                                background: 'rgba(255, 255, 255, 0.1)'
                                            }} />

                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}>
                                                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#a78bfa' }}>
                                                    {enhancedSelectedWorkflow?.aiAgentsUsed?.length || 0}
                                                </div>
                                                <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                                    AI Agents
                                                </div>
                                            </div>

                                            <div style={{
                                                width: '1px',
                                                height: '30px',
                                                background: 'rgba(255, 255, 255, 0.1)'
                                            }} />

                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}>
                                                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#fbbf24' }}>
                                                    {selectedWorkflow.humanCheckpointsCount || 0}
                                                </div>
                                                <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                                    Human Checkpoints
                                                </div>
                                            </div>

                                            <div style={{
                                                width: '1px',
                                                height: '30px',
                                                background: 'rgba(255, 255, 255, 0.1)'
                                            }} />

                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}>
                                                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#22c55e' }}>
                                                    {selectedWorkflow.estimatedTimeSavings || '75%'}
                                                </div>
                                                <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                                    Time Savings
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Visual Process Flow */}
                                <div style={{
                                    overflowX: 'auto',
                                    overflowY: 'hidden',
                                    padding: '1rem',
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    borderRadius: '0.75rem',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    {(() => {
                                        const steps = selectedWorkflow.currentStateWorkflow;
                                        const midPoint = Math.ceil(steps.length / 2);
                                        const firstRow = steps.slice(0, midPoint);
                                        const secondRow = steps.slice(midPoint);

                                        return (
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '2rem',
                                                minWidth: 'fit-content'
                                            }}>
                                                {/* First Row */}
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '1rem'
                                                }}>
                                                    {firstRow.map((step: any, idx: number) => {
                                                        const state = viewMode === 'current' ? step.currentState : step.futureState;
                                                        const isLastInRow = idx === firstRow.length - 1;
                                                        const hasNextRow = secondRow.length > 0;

                                                        return (
                                                            <React.Fragment key={idx}>
                                                                {/* Process Step Box */}
                                                                <div style={{
                                                                    background: viewMode === 'future'
                                                                        ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
                                                                        : 'rgba(239, 68, 68, 0.1)',
                                                                    border: `1px solid ${viewMode === 'future'
                                                                        ? 'rgba(139, 92, 246, 0.3)'
                                                                        : 'rgba(239, 68, 68, 0.3)'}`,
                                                                    borderRadius: '0.5rem',
                                                                    padding: '0.85rem',
                                                                    width: '172px',
                                                                    minHeight: '115px',
                                                                    position: 'relative',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.3s ease',
                                                                    transform: 'scale(1)',
                                                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
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
                                                                        top: '-10px',
                                                                        left: '50%',
                                                                        transform: 'translateX(-50%)',
                                                                        background: viewMode === 'future'
                                                                            ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                                                                            : '#ef4444',
                                                                        color: 'white',
                                                                        width: '28px',
                                                                        height: '28px',
                                                                        borderRadius: '50%',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        fontWeight: 'bold',
                                                                        fontSize: '0.75rem',
                                                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                                                                    }}>
                                                                        {step.stepNumber}
                                                                    </div>

                                                                    {/* Step Title */}
                                                                    <h3 style={{
                                                                        fontSize: '0.875rem',
                                                                        fontWeight: '600',
                                                                        marginBottom: '0.5rem',
                                                                        marginTop: '0.5rem',
                                                                        color: viewMode === 'future' ? '#c4b5fd' : '#fca5a5'
                                                                    }}>
                                                                        {step.description}
                                                                    </h3>

                                                                    {/* Key Info */}
                                                                    <div style={{ marginBottom: '0.25rem' }}>
                                                                        <div style={{
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: '0.25rem',
                                                                            marginBottom: '0.25rem'
                                                                        }}>
                                                                            <Clock size={10} style={{ color: '#60a5fa' }} />
                                                                            <span style={{ fontSize: '0.625rem', color: '#94a3b8' }}>
                                                                                {state.timeRequired || state.timeReduction}
                                                                            </span>
                                                                        </div>

                                                                        {viewMode === 'future' && state.aiAgents && (
                                                                            <div style={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: '0.25rem',
                                                                                marginBottom: '0.25rem'
                                                                            }}>
                                                                                <Bot size={10} style={{ color: '#a78bfa' }} />
                                                                                <span style={{ fontSize: '0.625rem', color: '#94a3b8' }}>
                                                                                    {state.aiAgents.length} AI Agents
                                                                                </span>
                                                                            </div>
                                                                        )}

                                                                        {viewMode === 'future' && state.humanCheckpoints && (
                                                                            <div style={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: '0.25rem'
                                                                            }}>
                                                                                <Users size={10} style={{ color: '#fbbf24' }} />
                                                                                <span style={{ fontSize: '0.625rem', color: '#94a3b8' }}>
                                                                                    {state.humanCheckpoints.length} Checkpoints
                                                                                </span>
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    {/* Main Activities Preview */}
                                                                    <div style={{
                                                                        fontSize: '0.5rem',
                                                                        color: '#cbd5e1',
                                                                        lineHeight: '1.2'
                                                                    }}>
                                                                        {state.activities.slice(0, 1).map((activity: string, i: number) => (
                                                                            <div key={i} style={{ marginBottom: '0.125rem' }}>
                                                                                • {activity.length > 25 ? activity.substring(0, 25) + '...' : activity}
                                                                            </div>
                                                                        ))}
                                                                        {state.activities.length > 1 && (
                                                                            <div style={{ color: '#6b7280', fontStyle: 'italic' }}>
                                                                                +{state.activities.length - 1} more...
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    {/* Click for Details */}
                                                                    <div style={{
                                                                        position: 'absolute',
                                                                        bottom: '0.25rem',
                                                                        right: '0.25rem',
                                                                        fontSize: '0.5rem',
                                                                        color: '#6b7280',
                                                                        fontStyle: 'italic'
                                                                    }}>
                                                                        Click for details →
                                                                    </div>
                                                                </div>

                                                                {/* Arrow Connector */}
                                                                {!isLastInRow && (
                                                                    <div style={{
                                                                        position: 'relative',
                                                                        width: '30px',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center'
                                                                    }}>
                                                                        <svg width="30" height="20" style={{ position: 'absolute' }}>
                                                                            <defs>
                                                                                <marker
                                                                                    id={`arrowhead-row1-${idx}`}
                                                                                    markerWidth="6"
                                                                                    markerHeight="6"
                                                                                    refX="5"
                                                                                    refY="2"
                                                                                    orient="auto"
                                                                                >
                                                                                    <polygon
                                                                                        points="0 0, 6 2, 0 4"
                                                                                        fill={viewMode === 'future' ? '#8b5cf6' : '#ef4444'}
                                                                                    />
                                                                                </marker>
                                                                            </defs>
                                                                            <line
                                                                                x1="0"
                                                                                y1="10"
                                                                                x2="25"
                                                                                y2="10"
                                                                                stroke={viewMode === 'future' ? '#8b5cf6' : '#ef4444'}
                                                                                strokeWidth="1"
                                                                                markerEnd={`url(#arrowhead-row1-${idx})`}
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                )}
                                                            </React.Fragment>
                                                        );
                                                    })}
                                                </div>

                                                {/* Second Row */}
                                                {secondRow.length > 0 && (
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '1rem',
                                                        marginLeft: '100px' // Offset second row for visual flow
                                                    }}>
                                                        {secondRow.map((step: any, idx: number) => {
                                                            const state = viewMode === 'current' ? step.currentState : step.futureState;
                                                            const actualIdx = idx + midPoint;
                                                            const isLastInRow = idx === secondRow.length - 1;

                                                            return (
                                                                <React.Fragment key={actualIdx}>
                                                                    {/* Process Step Box */}
                                                                    <div style={{
                                                                        background: viewMode === 'future'
                                                                            ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
                                                                            : 'rgba(239, 68, 68, 0.1)',
                                                                        border: `1px solid ${viewMode === 'future'
                                                                            ? 'rgba(139, 92, 246, 0.3)'
                                                                            : 'rgba(239, 68, 68, 0.3)'}`,
                                                                        borderRadius: '0.5rem',
                                                                        padding: '0.85rem',
                                                                        width: '172px',
                                                                        minHeight: '115px',
                                                                        position: 'relative',
                                                                        cursor: 'pointer',
                                                                        transition: 'all 0.3s ease',
                                                                        transform: 'scale(1)',
                                                                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
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
                                                                            top: '-10px',
                                                                            left: '50%',
                                                                            transform: 'translateX(-50%)',
                                                                            background: viewMode === 'future'
                                                                                ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                                                                                : '#ef4444',
                                                                            color: 'white',
                                                                            width: '28px',
                                                                            height: '28px',
                                                                            borderRadius: '50%',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            fontWeight: 'bold',
                                                                            fontSize: '0.75rem',
                                                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                                                                        }}>
                                                                            {step.stepNumber}
                                                                        </div>

                                                                        {/* Step Title */}
                                                                        <h3 style={{
                                                                            fontSize: '0.75rem',
                                                                            fontWeight: '600',
                                                                            marginBottom: '0.5rem',
                                                                            marginTop: '0.5rem',
                                                                            color: viewMode === 'future' ? '#c4b5fd' : '#fca5a5'
                                                                        }}>
                                                                            {step.description}
                                                                        </h3>

                                                                        {/* Key Info */}
                                                                        <div style={{ marginBottom: '0.25rem' }}>
                                                                            <div style={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: '0.25rem',
                                                                                marginBottom: '0.25rem'
                                                                            }}>
                                                                                <Clock size={10} style={{ color: '#60a5fa' }} />
                                                                                <span style={{ fontSize: '0.625rem', color: '#94a3b8' }}>
                                                                                    {state.timeRequired || state.timeReduction}
                                                                                </span>
                                                                            </div>

                                                                            {viewMode === 'future' && state.aiAgents && (
                                                                                <div style={{
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    gap: '0.25rem',
                                                                                    marginBottom: '0.25rem'
                                                                                }}>
                                                                                    <Bot size={10} style={{ color: '#a78bfa' }} />
                                                                                    <span style={{ fontSize: '0.625rem', color: '#94a3b8' }}>
                                                                                        {state.aiAgents.length} AI Agents
                                                                                    </span>
                                                                                </div>
                                                                            )}

                                                                            {viewMode === 'future' && state.humanCheckpoints && (
                                                                                <div style={{
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    gap: '0.25rem'
                                                                                }}>
                                                                                    <Users size={10} style={{ color: '#fbbf24' }} />
                                                                                    <span style={{ fontSize: '0.625rem', color: '#94a3b8' }}>
                                                                                        {state.humanCheckpoints.length} Checkpoints
                                                                                    </span>
                                                                                </div>
                                                                            )}
                                                                        </div>

                                                                        {/* Main Activities Preview */}
                                                                        <div style={{
                                                                            fontSize: '0.5rem',
                                                                            color: '#cbd5e1',
                                                                            lineHeight: '1.2'
                                                                        }}>
                                                                            {state.activities.slice(0, 1).map((activity: string, i: number) => (
                                                                                <div key={i} style={{ marginBottom: '0.125rem' }}>
                                                                                    • {activity.length > 25 ? activity.substring(0, 25) + '...' : activity}
                                                                                </div>
                                                                            ))}
                                                                            {state.activities.length > 1 && (
                                                                                <div style={{ color: '#6b7280', fontStyle: 'italic' }}>
                                                                                    +{state.activities.length - 1} more...
                                                                                </div>
                                                                            )}
                                                                        </div>

                                                                        {/* Click for Details */}
                                                                        <div style={{
                                                                            position: 'absolute',
                                                                            bottom: '0.25rem',
                                                                            right: '0.25rem',
                                                                            fontSize: '0.5rem',
                                                                            color: '#6b7280',
                                                                            fontStyle: 'italic'
                                                                        }}>
                                                                            Click for details →
                                                                        </div>
                                                                    </div>

                                                                    {/* Arrow Connector */}
                                                                    {!isLastInRow && (
                                                                        <div style={{
                                                                            position: 'relative',
                                                                            width: '30px',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center'
                                                                        }}>
                                                                            <svg width="30" height="20" style={{ position: 'absolute' }}>
                                                                                <defs>
                                                                                    <marker
                                                                                        id={`arrowhead-row2-${idx}`}
                                                                                        markerWidth="6"
                                                                                        markerHeight="6"
                                                                                        refX="5"
                                                                                        refY="2"
                                                                                        orient="auto"
                                                                                    >
                                                                                        <polygon
                                                                                            points="0 0, 6 2, 0 4"
                                                                                            fill={viewMode === 'future' ? '#8b5cf6' : '#ef4444'}
                                                                                        />
                                                                                    </marker>
                                                                                </defs>
                                                                                <line
                                                                                    x1="0"
                                                                                    y1="10"
                                                                                    x2="25"
                                                                                    y2="10"
                                                                                    stroke={viewMode === 'future' ? '#8b5cf6' : '#ef4444'}
                                                                                    strokeWidth="1"
                                                                                    markerEnd={`url(#arrowhead-row2-${idx})`}
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    )}
                                                                </React.Fragment>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
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
                                            const agentInfo = getAgentInfo(agentId);
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
                                                                color: '#e2e8f0',
                                                                marginBottom: '0.25rem'
                                                            }}>
                                                                {agentInfo.name}
                                                            </div>
                                                            <div style={{
                                                                fontSize: '0.75rem',
                                                                color: '#6b7280',
                                                                marginBottom: '0.5rem',
                                                                fontFamily: 'monospace'
                                                            }}>
                                                                ID: {agentId}
                                                            </div>
                                                            {agent && (
                                                                <>
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