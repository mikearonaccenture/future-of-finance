import { ComprehensiveAIAgents } from '@/ai-agents-expanded';
import { ACTIVITY_TO_PLATFORM_MAPPING, EXISTING_PLATFORMS } from '@/finance-platform-mapping';
import { corporateFinanceWorkflows } from '@/workflows/corporate-finance-workflows';
import { costAccountingWorkflows } from '@/workflows/cost-accounting-workflows';
import { fpAndAWorkflows } from '@/workflows/fpa-workflows';
import { investorRelationsWorkflows } from '@/workflows/investor-relations-workflows';
import { orderToCashWorkflows } from '@/workflows/order-to-cash-workflows';
import { procureToPayWorkflows } from '@/workflows/procure-to-pay-workflows';
import { recordToReportWorkflows } from '@/workflows/record-to-report-workflows';

// Define platform structure
export interface Platform {
    id: string;
    name: string;
    functionalArea: string;
    description?: string;
}

// Define activity structure
export interface Activity {
    id: string;
    name: string;
    platform?: string;
    subActivities?: string[];
}

// Define workflow structure
export interface Workflow {
    id?: string;
    name: string;
    platform?: string;
    activity?: string;
}

// Create PLATFORMS array from our platform definitions
export const PLATFORMS: Platform[] = [
    // Procure to Pay
    { id: 'intelligent-invoice', name: EXISTING_PLATFORMS.INTELLIGENT_INVOICE, functionalArea: 'procure-to-pay' },
    { id: 'supplier-collaboration', name: EXISTING_PLATFORMS.SUPPLIER_COLLABORATION, functionalArea: 'procure-to-pay' },

    // Order to Cash
    { id: 'intelligent-receivables', name: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES, functionalArea: 'order-to-cash' },
    { id: 'customer-experience', name: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE, functionalArea: 'order-to-cash' },

    // Cost Accounting
    { id: 'dynamic-cost-engine', name: EXISTING_PLATFORMS.DYNAMIC_COST_ENGINE, functionalArea: 'cost-accounting' },
    { id: 'profitability-analytics', name: EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS, functionalArea: 'cost-accounting' },

    // Controllership
    { id: 'continuous-close', name: EXISTING_PLATFORMS.CONTINUOUS_CLOSE, functionalArea: 'controllership' },
    { id: 'control-compliance', name: EXISTING_PLATFORMS.CONTROL_COMPLIANCE, functionalArea: 'controllership' },
    { id: 'regulatory-intelligence', name: EXISTING_PLATFORMS.REGULATORY_INTELLIGENCE, functionalArea: 'controllership' },
    { id: 'statutory-reporting-hub', name: EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB, functionalArea: 'controllership' },

    // Corporate Finance
    { id: 'tax-intelligence', name: EXISTING_PLATFORMS.TAX_INTELLIGENCE, functionalArea: 'corporate-finance' },
    { id: 'treasury-command', name: EXISTING_PLATFORMS.TREASURY_COMMAND, functionalArea: 'corporate-finance' },
    { id: 'risk-analytics', name: EXISTING_PLATFORMS.RISK_ANALYTICS, functionalArea: 'corporate-finance' },

    // FP&A
    { id: 'connected-enterprise', name: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE, functionalArea: 'fpa' },
    { id: 'management-reporting', name: EXISTING_PLATFORMS.MANAGEMENT_REPORTING, functionalArea: 'fpa' },

    // Investor Relations
    { id: 'investor-intelligence', name: EXISTING_PLATFORMS.INVESTOR_INTELLIGENCE, functionalArea: 'investor-relations' },
    { id: 'market-intelligence', name: EXISTING_PLATFORMS.MARKET_INTELLIGENCE, functionalArea: 'investor-relations' }
];

// Get all workflows
const allWorkflows = [
    ...procureToPayWorkflows,
    ...orderToCashWorkflows,
    ...recordToReportWorkflows,
    ...corporateFinanceWorkflows,
    ...costAccountingWorkflows,
    ...fpAndAWorkflows,
    ...investorRelationsWorkflows
];

// Helper function to get activities for a platform
export function getActivitiesForPlatform(platformId: string): Activity[] {
    const platform = PLATFORMS.find(p => p.id === platformId);
    if (!platform) return [];

    return ACTIVITY_TO_PLATFORM_MAPPING
        .filter(mapping => mapping.currentPlatform === platform.name)
        .map(mapping => ({
            id: mapping.activity.toLowerCase().replace(/\s+/g, '-'),
            name: mapping.activity,
            platform: platform.name,
            subActivities: mapping.subActivities
        }));
}

// Helper function to get workflows for an activity
export function getWorkflowsForActivity(activityId: string): Workflow[] {
    const activityName = activityId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return allWorkflows
        .filter(workflow => workflow.name.toLowerCase().includes(activityName.toLowerCase()))
        .map(workflow => ({
            id: workflow.name.toLowerCase().replace(/\s+/g, '-'),
            name: workflow.name,
            platform: workflow.platform,
            activity: activityName
        }));
}

// Helper function to get agents for a workflow
export function getAgentsForWorkflow(workflowId: string): any[] {
    if (!workflowId) return [];

    const workflow = allWorkflows.find(w =>
        w.name.toLowerCase().replace(/\s+/g, '-') === workflowId
    );

    if (!workflow || !workflow.aiAgentsUsed) return [];

    // Get agent details from ComprehensiveAIAgents
    const agents: any[] = [];

    workflow.aiAgentsUsed.forEach((agentInfo: any) => {
        const agentId = typeof agentInfo === 'string' ? agentInfo : agentInfo.agentId;

        // Search through all agent categories
        for (const category of Object.values(ComprehensiveAIAgents)) {
            if (Array.isArray(category)) {
                const agent = category.find(a => a.id === agentId);
                if (agent) {
                    agents.push(agent);
                    break;
                }
            }
        }
    });

    return agents;
}

// Build agent catalog with usage data
export function buildAgentCatalog() {
    const catalog: any[] = [];
    
    // For each workflow, track agent usage
    const agentUsageMap = new Map<string, number>();
    
    allWorkflows.forEach(workflow => {
        if (workflow.aiAgentsUsed) {
            workflow.aiAgentsUsed.forEach((agentInfo: any) => {
                const agentId = typeof agentInfo === 'string' ? agentInfo : agentInfo.agentId;
                agentUsageMap.set(agentId, (agentUsageMap.get(agentId) || 0) + 1);
            });
        }
    });
    
    // Build catalog entries
    agentUsageMap.forEach((count, agentId) => {
        catalog.push({
            id: agentId,
            totalUsageCount: count
        });
    });
    
    return catalog;
}

// Get agent catalog summary
export function getAgentCatalogSummary() {
    const summary = {
        totalAgents: 0,
        byCategory: {} as Record<string, number>
    };
    
    // Count agents by category
    Object.entries(ComprehensiveAIAgents).forEach(([category, agents]) => {
        if (Array.isArray(agents)) {
            summary.byCategory[category] = agents.length;
            summary.totalAgents += agents.length;
        }
    });
    
    return summary;
}

// Get ecosystem summary
export function getEcosystemSummary() {
    // Count cross-functional agents
    let crossFunctionalCount = 0;
    const crossFunctionalAgents = (ComprehensiveAIAgents as any)['crossFunctionalAgents'];
    if (crossFunctionalAgents) {
        crossFunctionalCount = crossFunctionalAgents.length;
    }
    
    return {
        totalFunctions: 7,
        totalActivities: 63,
        totalPlatforms: 17,
        totalWorkflows: allWorkflows.length,
        totalAgents: Object.values(ComprehensiveAIAgents)
            .filter(Array.isArray)
            .reduce((sum, agents) => sum + agents.length, 0),
        crossFunctionalAgents: crossFunctionalCount
    };
} 