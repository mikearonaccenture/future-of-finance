/**
 * Complete Finance Ecosystem Mapping
 * This file serves as the single source of truth for all relationships between:
 * - Finance Activities (46)
 * - Platforms (21)
 * - Workflows (Current & Future State)
 * - AI Agents (300+)
 * - Human Checkpoints
 * - Functional Areas (7)
 */

import { ComprehensiveAIAgents } from './ai-agents-expanded';
import { EXISTING_PLATFORMS } from './finance-platform-mapping';
import { orderToCashWorkflows } from './workflows/order-to-cash-workflows';
import { procureToPayWorkflows } from './workflows/procure-to-pay-workflows';
import { recordToReportWorkflows } from './workflows/record-to-report-workflows';

// Define comprehensive types
export interface FinanceActivity {
    id: string;
    name: string;
    functionalArea: string;
    platform: string;
    subActivities: string[];
    workflows: WorkflowReference[];
}

export interface Platform {
    id: string;
    name: string;
    description: string;
    functionalArea: string;
    activities: string[]; // Activity IDs
    status: 'live' | 'coming-soon';
}

export interface WorkflowReference {
    workflowId: string;
    activityId: string;
    platformId: string;
}

export interface AgentUsage {
    agentId: string;
    workflowId: string;
    activityId: string;
    platformId: string;
    functionalArea: string;
    stepNumber: number;
    frequency: 'high' | 'medium' | 'low'; // Based on usage across workflows
}

export interface AgentCatalogEntry {
    id: string;
    name: string;
    description: string;
    capabilities: string[];
    status: 'active' | 'beta' | 'planned';
    functionalAreas: string[]; // Can be used across multiple areas
    usageLocations: AgentUsage[];
    totalUsageCount: number;
    isCrossFunctional: boolean;
}

export interface HumanCheckpoint {
    id: string;
    type: 'approval' | 'compliance' | 'risk' | 'review' | 'decision';
    description: string;
    workflowId: string;
    stepNumber: number;
    required: boolean;
    escalationPath?: string;
}

// 1. Finance Taxonomy - All 46 Activities
export const FINANCE_TAXONOMY: FinanceActivity[] = [
    // Procure to Pay Activities (5)
    {
        id: 'p2p-invoice-to-pay',
        name: 'Invoice to Pay',
        functionalArea: 'Procure to Pay',
        platform: EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
        subActivities: ['Invoice receipt', 'Invoice validation', 'Payment processing'],
        workflows: ['invoice-processing-workflow']
    },
    {
        id: 'p2p-vendor-reconciliation',
        name: 'Vendor Statement Reconciliation',
        functionalArea: 'Procure to Pay',
        platform: EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
        subActivities: ['Statement matching', 'Discrepancy resolution'],
        workflows: ['vendor-reconciliation-workflow']
    },
    {
        id: 'p2p-procurement-card',
        name: 'Procurement Card Administration',
        functionalArea: 'Procure to Pay',
        platform: EXISTING_PLATFORMS.SUPPLIER_COLLABORATION,
        subActivities: ['Card management', 'Transaction monitoring'],
        workflows: ['procurement-card-workflow']
    },
    {
        id: 'p2p-travel-expense',
        name: 'Travel & Expense Administration',
        functionalArea: 'Procure to Pay',
        platform: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        subActivities: ['Expense processing', 'Policy compliance'],
        workflows: ['expense-management-workflow']
    },
    {
        id: 'p2p-ap-reporting',
        name: 'AP Reporting & Analytics',
        functionalArea: 'Procure to Pay',
        platform: EXISTING_PLATFORMS.STRATEGIC_SPEND,
        subActivities: ['Spend analysis', 'Vendor analytics'],
        workflows: ['ap-analytics-workflow']
    },

    // Order to Cash Activities (7)
    {
        id: 'o2c-customer-order',
        name: 'Customer Order & Contracts Management',
        functionalArea: 'Order to Cash',
        platform: EXISTING_PLATFORMS.REVENUE_INTELLIGENCE,
        subActivities: ['Order processing', 'Contract management'],
        workflows: ['order-management-workflow']
    },
    {
        id: 'o2c-receivable-mgmt',
        name: 'Receivable Management',
        functionalArea: 'Order to Cash',
        platform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        subActivities: ['Credit Management', 'Collections'],
        workflows: ['receivables-workflow']
    },
    {
        id: 'o2c-customer-billing',
        name: 'Manage Customer Billing',
        functionalArea: 'Order to Cash',
        platform: EXISTING_PLATFORMS.REVENUE_INTELLIGENCE,
        subActivities: ['Invoice generation', 'Billing cycles'],
        workflows: ['billing-workflow']
    },
    {
        id: 'o2c-collections',
        name: 'Collections & Disputes Management',
        functionalArea: 'Order to Cash',
        platform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        subActivities: ['Collection strategy', 'Dispute resolution'],
        workflows: ['collections-workflow']
    },
    {
        id: 'o2c-deductions',
        name: 'Deductions Management',
        functionalArea: 'Order to Cash',
        platform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        subActivities: ['Deduction processing', 'Root cause analysis'],
        workflows: ['deductions-workflow']
    },
    {
        id: 'o2c-ar-ledger',
        name: 'Maintain AR Ledger and Apply Cash',
        functionalArea: 'Order to Cash',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        subActivities: ['Cash application', 'AR maintenance'],
        workflows: ['cash-application-workflow']
    },
    {
        id: 'o2c-customer-requests',
        name: 'Manage Customer Requests & Inquiries',
        functionalArea: 'Order to Cash',
        platform: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        subActivities: ['Query handling', 'Service requests'],
        workflows: ['customer-service-workflow']
    },

    // Cost Accounting Activities (3)
    {
        id: 'ca-product-costing',
        name: 'Product Costing',
        functionalArea: 'Cost Accounting',
        platform: EXISTING_PLATFORMS.DYNAMIC_COST_ENGINE,
        subActivities: ['Standard costing', 'Activity-based costing'],
        workflows: ['product-costing-workflow']
    },
    {
        id: 'ca-service-costing',
        name: 'Product & Service Costing',
        functionalArea: 'Cost Accounting',
        platform: EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS,
        subActivities: ['Service line costing', 'Profitability analysis'],
        workflows: ['service-costing-workflow']
    },
    {
        id: 'ca-inventory',
        name: 'Inventory Accounting',
        functionalArea: 'Cost Accounting',
        platform: EXISTING_PLATFORMS.INVENTORY_INTELLIGENCE,
        subActivities: ['Inventory valuation', 'Cost of goods sold'],
        workflows: ['inventory-accounting-workflow']
    },

    // Controllership Activities (13)
    {
        id: 'ctrl-general-accounting',
        name: 'General Accounting',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.FINANCIAL_REPORTING_HUB,
        subActivities: ['GL maintenance', 'Journal entries'],
        workflows: ['general-accounting-workflow']
    },
    {
        id: 'ctrl-ap-reconciliation',
        name: 'Accounts Payable Reconciliation',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        subActivities: ['AP ledger maintenance', 'Reconciliation'],
        workflows: ['ap-reconciliation-workflow']
    },
    {
        id: 'ctrl-intercompany',
        name: 'Intercompany Accounting',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        subActivities: ['IC reconciliation', 'Netting'],
        workflows: ['intercompany-workflow']
    },
    {
        id: 'ctrl-asset-accounting',
        name: 'Asset Accounting',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        subActivities: ['Fixed assets', 'Depreciation'],
        workflows: ['asset-accounting-workflow']
    },
    {
        id: 'ctrl-lease-accounting',
        name: 'Lease Accounting',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        subActivities: ['Lease classification', 'ROU assets'],
        workflows: ['lease-accounting-workflow']
    },
    {
        id: 'ctrl-revenue-accounting',
        name: 'Partner and Revenue Accounting',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        subActivities: ['Revenue recognition', 'Partner settlements'],
        workflows: ['revenue-accounting-workflow']
    },
    {
        id: 'ctrl-project-accounting',
        name: 'Project Accounting',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        subActivities: ['Project tracking', 'WIP management'],
        workflows: ['project-accounting-workflow']
    },
    {
        id: 'ctrl-period-close',
        name: 'Period Close',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.CONTINUOUS_CLOSE,
        subActivities: ['Close tasks', 'Reconciliations', 'Reporting'],
        workflows: ['period-close-workflow']
    },
    {
        id: 'ctrl-financial-reporting',
        name: 'Perform Financial Reporting',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.FINANCIAL_REPORTING_HUB,
        subActivities: ['Statement preparation', 'Disclosures'],
        workflows: ['financial-reporting-workflow']
    },
    {
        id: 'ctrl-bs-reconciliation',
        name: 'BS Reconciliation & Analytics',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.FINANCIAL_REPORTING_HUB,
        subActivities: ['Balance sheet recs', 'Account analysis'],
        workflows: ['bs-reconciliation-workflow']
    },
    {
        id: 'ctrl-revenue-assurance',
        name: 'Revenue Assurance Control Management',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        subActivities: ['Revenue validation', 'Leak detection'],
        workflows: ['revenue-assurance-workflow']
    },
    {
        id: 'ctrl-jv-accounting',
        name: 'Perform Joint Venture Accounting',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        subActivities: ['JV calculations', 'Partner billing'],
        workflows: ['jv-accounting-workflow']
    },
    {
        id: 'ctrl-help-desk',
        name: 'Invoice to Pay Support Help Desk',
        functionalArea: 'Controllership',
        platform: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        subActivities: ['Query resolution', 'Process support'],
        workflows: ['help-desk-workflow']
    },

    // Corporate Finance Activities (9)
    {
        id: 'cf-tax',
        name: 'Tax',
        functionalArea: 'Corporate Finance',
        platform: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        subActivities: ['Tax Planning', 'Compliance', 'Reporting'],
        workflows: ['tax-workflow']
    },
    {
        id: 'cf-treasury',
        name: 'Treasury',
        functionalArea: 'Corporate Finance',
        platform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        subActivities: ['Cash Management', 'Investments', 'Debt'],
        workflows: ['treasury-workflow']
    },
    {
        id: 'cf-tax-planning',
        name: 'Manage Tax Planning and Strategy',
        functionalArea: 'Corporate Finance',
        platform: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        subActivities: ['Structure optimization', 'Transfer pricing'],
        workflows: ['tax-planning-workflow']
    },
    {
        id: 'cf-treasury-governance',
        name: 'Treasury Operating Model & Governance',
        functionalArea: 'Corporate Finance',
        platform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        subActivities: ['Policy management', 'Controls'],
        workflows: ['treasury-governance-workflow']
    },
    {
        id: 'cf-bank-relationship',
        name: 'Bank Relationship Management',
        functionalArea: 'Corporate Finance',
        platform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        subActivities: ['Bank fees', 'Service management'],
        workflows: ['bank-relationship-workflow']
    },
    {
        id: 'cf-cash-liquidity',
        name: 'Cash and Liquidity Management',
        functionalArea: 'Corporate Finance',
        platform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        subActivities: ['Cash forecasting', 'Liquidity planning'],
        workflows: ['cash-liquidity-workflow']
    },
    {
        id: 'cf-investment-mgmt',
        name: 'Investment Management',
        functionalArea: 'Corporate Finance',
        platform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        subActivities: ['Portfolio management', 'Performance tracking'],
        workflows: ['investment-workflow']
    },
    {
        id: 'cf-debt-mgmt',
        name: 'Debt Management',
        functionalArea: 'Corporate Finance',
        platform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        subActivities: ['Debt issuance', 'Covenant monitoring'],
        workflows: ['debt-management-workflow']
    },
    {
        id: 'cf-risk-mgmt',
        name: 'Financial Risk Management',
        functionalArea: 'Corporate Finance',
        platform: EXISTING_PLATFORMS.RISK_MANAGEMENT,
        subActivities: ['FX hedging', 'Interest rate risk'],
        workflows: ['risk-management-workflow']
    },

    // FP&A Activities (7)
    {
        id: 'fpa-planning-analysis',
        name: 'Financial Planning and Analysis',
        functionalArea: 'FP&A',
        platform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        subActivities: ['Planning', 'Analysis', 'Reporting'],
        workflows: ['fpa-planning-workflow']
    },
    {
        id: 'fpa-strategic-planning',
        name: 'Strategic or LR Planning',
        functionalArea: 'FP&A',
        platform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        subActivities: ['Long-range planning', 'Strategic initiatives'],
        workflows: ['strategic-planning-workflow']
    },
    {
        id: 'fpa-integrated-planning',
        name: 'Integrated Enterprise Planning',
        functionalArea: 'FP&A',
        platform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        subActivities: ['Cross-functional planning', 'Scenario modeling'],
        workflows: ['integrated-planning-workflow']
    },
    {
        id: 'fpa-budgeting',
        name: 'Budgeting',
        functionalArea: 'FP&A',
        platform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        subActivities: ['Annual budgets', 'Department budgets'],
        workflows: ['budgeting-workflow']
    },
    {
        id: 'fpa-forecasting',
        name: 'Dynamic Forecasting',
        functionalArea: 'FP&A',
        platform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        subActivities: ['Rolling forecasts', 'Driver-based planning'],
        workflows: ['forecasting-workflow']
    },
    {
        id: 'fpa-decision-support',
        name: 'Decision Support & Modelling',
        functionalArea: 'FP&A',
        platform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        subActivities: ['What-if analysis', 'Business cases'],
        workflows: ['decision-support-workflow']
    },
    {
        id: 'fpa-reporting',
        name: 'Reporting & Analysis',
        functionalArea: 'FP&A',
        platform: EXISTING_PLATFORMS.MANAGEMENT_REPORTING,
        subActivities: ['Management reporting', 'Variance analysis'],
        workflows: ['management-reporting-workflow']
    },

    // Investor Relations Activities (6)
    {
        id: 'ir-investor-relations',
        name: 'Investor Relations',
        functionalArea: 'Investor Relations',
        platform: EXISTING_PLATFORMS.EARNINGS_INTELLIGENCE,
        subActivities: ['Earnings calls', 'Investor communications'],
        workflows: ['investor-relations-workflow']
    },
    {
        id: 'ir-quarterly-earnings',
        name: 'Quarterly Earnings',
        functionalArea: 'Investor Relations',
        platform: EXISTING_PLATFORMS.EARNINGS_INTELLIGENCE,
        subActivities: ['Earnings prep', 'Release management'],
        workflows: ['quarterly-earnings-workflow']
    },
    {
        id: 'ir-competitive-intel',
        name: 'Competitive Intelligence',
        functionalArea: 'Investor Relations',
        platform: EXISTING_PLATFORMS.MARKET_INTELLIGENCE,
        subActivities: ['Peer analysis', 'Market monitoring'],
        workflows: ['competitive-intel-workflow']
    },
    {
        id: 'ir-stock-surveillance',
        name: 'Stock Surveillance',
        functionalArea: 'Investor Relations',
        platform: EXISTING_PLATFORMS.MARKET_INTELLIGENCE,
        subActivities: ['Price monitoring', 'Trading analysis'],
        workflows: ['stock-surveillance-workflow']
    },
    {
        id: 'ir-community-mgmt',
        name: 'Investment Community Relationship Mgmt',
        functionalArea: 'Investor Relations',
        platform: EXISTING_PLATFORMS.STAKEHOLDER_ENGAGEMENT,
        subActivities: ['Analyst relations', 'Investor targeting'],
        workflows: ['community-mgmt-workflow']
    },
    {
        id: 'ir-marketing-events',
        name: 'Marketing & Events',
        functionalArea: 'Investor Relations',
        platform: EXISTING_PLATFORMS.STAKEHOLDER_ENGAGEMENT,
        subActivities: ['Investor days', 'Roadshows'],
        workflows: ['marketing-events-workflow']
    }
];

// 2. Platform Definitions with Activity Mappings
export const PLATFORMS: Platform[] = [
    // Procure to Pay Platforms
    {
        id: 'intelligent-invoice',
        name: EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
        description: 'Touchless invoice processing from receipt to payment',
        functionalArea: 'Procure to Pay',
        activities: ['p2p-invoice-to-pay', 'p2p-vendor-reconciliation'],
        status: 'coming-soon'
    },
    {
        id: 'strategic-spend',
        name: EXISTING_PLATFORMS.STRATEGIC_SPEND,
        description: 'Turn spending data into savings opportunities',
        functionalArea: 'Procure to Pay',
        activities: ['p2p-ap-reporting'],
        status: 'coming-soon'
    },
    {
        id: 'supplier-collaboration',
        name: EXISTING_PLATFORMS.SUPPLIER_COLLABORATION,
        description: 'AI-enabled supplier engagement and optimization',
        functionalArea: 'Procure to Pay',
        activities: ['p2p-procurement-card'],
        status: 'coming-soon'
    },
    // Order to Cash Platforms
    {
        id: 'intelligent-receivables',
        name: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        description: 'AI-driven credit to cash optimization',
        functionalArea: 'Order to Cash',
        activities: ['o2c-receivable-mgmt', 'o2c-collections', 'o2c-deductions'],
        status: 'coming-soon'
    },
    {
        id: 'customer-experience',
        name: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        description: 'Self-service billing and payment platform',
        functionalArea: 'Order to Cash',
        activities: ['p2p-travel-expense', 'o2c-customer-requests', 'ctrl-help-desk'],
        status: 'coming-soon'
    },
    {
        id: 'revenue-intelligence',
        name: EXISTING_PLATFORMS.REVENUE_INTELLIGENCE,
        description: 'Ensure every dollar earned is collected',
        functionalArea: 'Order to Cash',
        activities: ['o2c-customer-order', 'o2c-customer-billing'],
        status: 'coming-soon'
    },
    // Cost Accounting Platforms
    {
        id: 'dynamic-cost-engine',
        name: EXISTING_PLATFORMS.DYNAMIC_COST_ENGINE,
        description: 'Living cost models that update continuously',
        functionalArea: 'Cost Accounting',
        activities: ['ca-product-costing'],
        status: 'coming-soon'
    },
    {
        id: 'profitability-analytics',
        name: EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS,
        description: 'True margin visibility at every level',
        functionalArea: 'Cost Accounting',
        activities: ['ca-service-costing'],
        status: 'coming-soon'
    },
    {
        id: 'inventory-intelligence',
        name: EXISTING_PLATFORMS.INVENTORY_INTELLIGENCE,
        description: 'Optimize inventory while minimizing costs',
        functionalArea: 'Cost Accounting',
        activities: ['ca-inventory'],
        status: 'coming-soon'
    },
    // Controllership Platforms
    {
        id: 'continuous-close',
        name: EXISTING_PLATFORMS.CONTINUOUS_CLOSE,
        description: 'Transform month-end from marathon to sprint',
        functionalArea: 'Controllership',
        activities: ['ctrl-period-close'],
        status: 'coming-soon'
    },
    {
        id: 'control-compliance',
        name: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        description: 'Proactive risk management and audit readiness',
        functionalArea: 'Controllership',
        activities: [
            'ctrl-ap-reconciliation', 'o2c-ar-ledger', 'ctrl-revenue-assurance',
            'ctrl-intercompany', 'ctrl-asset-accounting', 'ctrl-lease-accounting',
            'ctrl-revenue-accounting', 'ctrl-project-accounting', 'ctrl-jv-accounting'
        ],
        status: 'coming-soon'
    },
    {
        id: 'financial-reporting-hub',
        name: EXISTING_PLATFORMS.FINANCIAL_REPORTING_HUB,
        description: 'From close to disclosure in hours, not days',
        functionalArea: 'Controllership',
        activities: ['ctrl-general-accounting', 'ctrl-financial-reporting', 'ctrl-bs-reconciliation'],
        status: 'coming-soon'
    },
    // Corporate Finance Platforms
    {
        id: 'treasury-command',
        name: EXISTING_PLATFORMS.TREASURY_COMMAND,
        description: 'AI-driven cash and liquidity optimization',
        functionalArea: 'Corporate Finance',
        activities: [
            'cf-treasury', 'cf-treasury-governance', 'cf-bank-relationship',
            'cf-cash-liquidity', 'cf-investment-mgmt', 'cf-debt-mgmt'
        ],
        status: 'coming-soon'
    },
    {
        id: 'tax-intelligence',
        name: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        description: 'Strategic tax planning and compliance automation',
        functionalArea: 'Corporate Finance',
        activities: ['cf-tax', 'cf-tax-planning'],
        status: 'coming-soon'
    },
    {
        id: 'risk-management',
        name: EXISTING_PLATFORMS.RISK_MANAGEMENT,
        description: 'Proactive identification and mitigation',
        functionalArea: 'Corporate Finance',
        activities: ['cf-risk-mgmt'],
        status: 'coming-soon'
    },
    // FP&A Platforms
    {
        id: 'connected-enterprise',
        name: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        description: 'A unified workspace for all planning activities',
        functionalArea: 'FP&A',
        activities: [
            'fpa-planning-analysis', 'fpa-strategic-planning', 'fpa-integrated-planning',
            'fpa-budgeting', 'fpa-forecasting', 'fpa-decision-support'
        ],
        status: 'live'
    },
    {
        id: 'management-reporting',
        name: EXISTING_PLATFORMS.MANAGEMENT_REPORTING,
        description: 'Transform data into actionable insights',
        functionalArea: 'FP&A',
        activities: ['fpa-reporting'],
        status: 'live'
    },
    // Investor Relations Platforms
    {
        id: 'earnings-intelligence',
        name: EXISTING_PLATFORMS.EARNINGS_INTELLIGENCE,
        description: 'From prep to presentation in record time',
        functionalArea: 'Investor Relations',
        activities: ['ir-investor-relations', 'ir-quarterly-earnings'],
        status: 'coming-soon'
    },
    {
        id: 'stakeholder-engagement',
        name: EXISTING_PLATFORMS.STAKEHOLDER_ENGAGEMENT,
        description: '24/7 intelligent investor communication',
        functionalArea: 'Investor Relations',
        activities: ['ir-community-mgmt', 'ir-marketing-events'],
        status: 'coming-soon'
    },
    {
        id: 'market-intelligence',
        name: EXISTING_PLATFORMS.MARKET_INTELLIGENCE,
        description: 'Stay ahead of market movements',
        functionalArea: 'Investor Relations',
        activities: ['ir-competitive-intel', 'ir-stock-surveillance'],
        status: 'coming-soon'
    }
];

// Function to get all agents used in workflows and track their usage
export function buildAgentCatalog(): AgentCatalogEntry[] {
    const agentUsageMap = new Map<string, AgentUsage[]>();

    // Process all workflows to find agent usage
    const allWorkflows = [
        ...Object.values(procureToPayWorkflows),
        ...Object.values(orderToCashWorkflows),
        ...Object.values(recordToReportWorkflows)
    ];

    allWorkflows.forEach(workflow => {
        const activity = FINANCE_TAXONOMY.find(a =>
            a.workflows.includes(workflow.id || '')
        );

        if (!activity) return;

        const platform = PLATFORMS.find(p =>
            p.activities.includes(activity.id)
        );

        if (!platform) return;

        // Process future state steps
        workflow.futureState.forEach((step, index) => {
            step.aiAgents?.forEach(agentId => {
                const usage: AgentUsage = {
                    agentId,
                    workflowId: workflow.id || '',
                    activityId: activity.id,
                    platformId: platform.id,
                    functionalArea: activity.functionalArea,
                    stepNumber: index + 1,
                    frequency: 'medium' // Will be calculated based on total usage
                };

                if (!agentUsageMap.has(agentId)) {
                    agentUsageMap.set(agentId, []);
                }
                agentUsageMap.get(agentId)!.push(usage);
            });
        });
    });

    // Build catalog entries
    const catalog: AgentCatalogEntry[] = [];

    // Get all agents from comprehensive list
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

    allAgents.forEach(agent => {
        const usageLocations = agentUsageMap.get(agent.id) || [];
        const totalUsageCount = usageLocations.length;

        // Determine frequency based on usage count
        let frequency: 'high' | 'medium' | 'low' = 'low';
        if (totalUsageCount > 10) frequency = 'high';
        else if (totalUsageCount > 5) frequency = 'medium';

        // Update frequency in usage locations
        usageLocations.forEach(loc => {
            loc.frequency = frequency;
        });

        // Get unique functional areas
        const functionalAreas = Array.from(new Set(
            usageLocations.map(u => u.functionalArea)
        ));

        catalog.push({
            id: agent.id,
            name: agent.name,
            description: agent.description,
            capabilities: agent.capabilities,
            status: agent.status === 'active' ? 'active' :
                agent.status === 'in-development' ? 'beta' : 'planned',
            functionalAreas: functionalAreas.length > 0 ? functionalAreas : [agent.tower],
            usageLocations,
            totalUsageCount,
            isCrossFunctional: functionalAreas.length > 1
        });
    });

    return catalog.sort((a, b) => b.totalUsageCount - a.totalUsageCount);
}

// Helper functions
export function getActivitiesForPlatform(platformId: string): FinanceActivity[] {
    const platform = PLATFORMS.find(p => p.id === platformId);
    if (!platform) return [];

    return FINANCE_TAXONOMY.filter(activity =>
        platform.activities.includes(activity.id)
    );
}

export function getWorkflowsForActivity(activityId: string): any[] {
    const activity = FINANCE_TAXONOMY.find(a => a.id === activityId);
    if (!activity) return [];

    const allWorkflows = [
        ...Object.values(procureToPayWorkflows),
        ...Object.values(orderToCashWorkflows),
        ...Object.values(recordToReportWorkflows)
    ];

    return allWorkflows.filter(workflow =>
        activity.workflows.includes(workflow.id || '')
    );
}

export function getAgentsForWorkflow(workflowId: string): string[] {
    const allWorkflows = [
        ...Object.values(procureToPayWorkflows),
        ...Object.values(orderToCashWorkflows),
        ...Object.values(recordToReportWorkflows)
    ];

    const workflow = allWorkflows.find(w => w.id === workflowId);
    if (!workflow) return [];

    const agents = new Set<string>();
    workflow.futureState.forEach(step => {
        step.aiAgents?.forEach(agent => agents.add(agent));
    });

    return Array.from(agents);
}

export function getMostUsedAgents(limit: number = 10): AgentCatalogEntry[] {
    const catalog = buildAgentCatalog();
    return catalog.slice(0, limit);
}

export function getCrossFunctionalAgents(): AgentCatalogEntry[] {
    const catalog = buildAgentCatalog();
    return catalog.filter(agent => agent.isCrossFunctional);
}

// Summary statistics
export function getEcosystemSummary() {
    const catalog = buildAgentCatalog();

    return {
        totalActivities: FINANCE_TAXONOMY.length,
        totalPlatforms: PLATFORMS.length,
        livePlatforms: PLATFORMS.filter(p => p.status === 'live').length,
        totalAgents: catalog.length,
        activeAgents: catalog.filter(a => a.status === 'active').length,
        crossFunctionalAgents: catalog.filter(a => a.isCrossFunctional).length,
        mostUsedAgents: getMostUsedAgents(5),
        functionalAreaBreakdown: {
            'Procure to Pay': FINANCE_TAXONOMY.filter(a => a.functionalArea === 'Procure to Pay').length,
            'Order to Cash': FINANCE_TAXONOMY.filter(a => a.functionalArea === 'Order to Cash').length,
            'Cost Accounting': FINANCE_TAXONOMY.filter(a => a.functionalArea === 'Cost Accounting').length,
            'Controllership': FINANCE_TAXONOMY.filter(a => a.functionalArea === 'Controllership').length,
            'Corporate Finance': FINANCE_TAXONOMY.filter(a => a.functionalArea === 'Corporate Finance').length,
            'FP&A': FINANCE_TAXONOMY.filter(a => a.functionalArea === 'FP&A').length,
            'Investor Relations': FINANCE_TAXONOMY.filter(a => a.functionalArea === 'Investor Relations').length
        }
    };
} 