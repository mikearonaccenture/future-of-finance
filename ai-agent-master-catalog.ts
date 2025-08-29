/**
 * AI Agent Master Catalog
 * Built systematically by reviewing all 63 workflows
 * Single source of truth for all AI agents
 */

export interface AIAgentMasterCatalog {
    // Identity
    id: string;                          // Format: DOMAIN-FUNCTION-SEQUENCE
    name: string;                        // Human-readable name
    description: string;                 // Clear description of purpose

    // Capabilities
    capabilities: string[];              // What the agent can do
    primaryFunction: string;             // Main purpose (from naming convention)

    // Source of Truth Tracking
    financeFunctions: string[];          // Which of the 7 functions use this
    activities: string[];                // Which of the 63 activities use this
    workflows: WorkflowReference[];      // Specific workflow files and steps
    platforms: string[];                 // Which of the 17 platforms

    // Usage Tracking
    frequency: number;                   // Total usage count across all workflows
    crossFunctional: boolean;           // Used across multiple finance functions?
    firstSeen: {                        // Where first discovered/created
        workflow: string;
        date: string;
    };

    // Relationships
    relatedAgents: string[];            // Similar agents (by ID)
    replacedAgents: string[];           // Legacy agents this replaces

    // Technical Details
    status: 'active' | 'in-development' | 'planned' | 'deprecated';
    integrationType: 'standalone' | 'platform-specific' | 'connector';
    platformRequirements?: string[];    // Specific platform needs

    // Metadata
    createdDate: string;
    lastUpdated: string;
    reviewedBy: string;
    notes?: string;
}

export interface WorkflowReference {
    workflowFile: string;               // e.g., 'fpa-workflows.ts'
    activityName: string;               // e.g., 'Annual Budget Planning'
    stepNumbers: number[];              // Which steps use this agent
    stepDescriptions: string[];         // What those steps do
}

// Domain definitions matching our 7 finance functions
export const FINANCE_FUNCTIONS = {
    FPA: 'Financial Planning & Analysis',
    RTR: 'Record to Report',
    PTP: 'Procure to Pay',
    OTC: 'Order to Cash',
    TAX: 'Tax Management',
    TRS: 'Treasury',
    CRP: 'Corporate Finance',
    CTL: 'Controllership',
    INV: 'Investor Relations'
} as const;

// The 17 platforms in our ecosystem
export const PLATFORMS = [
    'Connected Enterprise',
    'SAP S/4HANA',
    'Oracle Cloud',
    'BlackLine',
    'Anaplan',
    'Coupa',
    'HighRadius',
    'Workiva',
    'Kyriba',
    'ONESOURCE',
    'Tableau',
    'Power BI',
    'Databricks',
    'ServiceNow',
    'Salesforce',
    'Microsoft 365',
    'Custom AI Platform'
] as const;

// Initialize empty catalog - will be populated as we review workflows
export const MASTER_AGENT_CATALOG: AIAgentMasterCatalog[] = [];

// Helper type for legacy agent mapping during migration
export interface LegacyAgentMapping {
    legacyId: string;
    newId: string;
    migrationNotes: string;
}

// Track legacy mappings as we build
export const LEGACY_MAPPINGS: LegacyAgentMapping[] = [];

// Catalog statistics (updated as we build)
export const CATALOG_STATS = {
    totalAgents: 0,
    crossFunctionalAgents: 0,
    agentsByFunction: {} as Record<string, number>,
    agentsByPlatform: {} as Record<string, number>,
    averageAgentsPerWorkflow: 0,
    mostUsedAgents: [] as { id: string; count: number }[],
    lastUpdated: new Date().toISOString()
};

// Export functions for catalog management
export function addAgent(agent: AIAgentMasterCatalog): void {
    // Check if agent already exists
    const existing = MASTER_AGENT_CATALOG.find(a => a.id === agent.id);
    if (existing) {
        throw new Error(`Agent ${agent.id} already exists in catalog`);
    }

    // Add to catalog
    MASTER_AGENT_CATALOG.push(agent);
    updateCatalogStats();
}

export function findAgentsByFunction(financeFunction: string): AIAgentMasterCatalog[] {
    return MASTER_AGENT_CATALOG.filter(agent =>
        agent.financeFunctions.includes(financeFunction)
    );
}

export function findAgentsByCapability(capability: string): AIAgentMasterCatalog[] {
    return MASTER_AGENT_CATALOG.filter(agent =>
        agent.capabilities.some(cap =>
            cap.toLowerCase().includes(capability.toLowerCase())
        )
    );
}

export function findCrossFunctionalAgents(): AIAgentMasterCatalog[] {
    return MASTER_AGENT_CATALOG.filter(agent => agent.crossFunctional);
}

export function updateAgentUsage(
    agentId: string,
    workflow: WorkflowReference
): void {
    const agent = MASTER_AGENT_CATALOG.find(a => a.id === agentId);
    if (!agent) {
        throw new Error(`Agent ${agentId} not found in catalog`);
    }

    // Add workflow reference
    const existingWorkflow = agent.workflows.find(w =>
        w.workflowFile === workflow.workflowFile
    );

    if (existingWorkflow) {
        // Update existing workflow reference
        existingWorkflow.stepNumbers.push(...workflow.stepNumbers);
        existingWorkflow.stepDescriptions.push(...workflow.stepDescriptions);
    } else {
        // Add new workflow reference
        agent.workflows.push(workflow);
    }

    // Update frequency
    agent.frequency = agent.workflows.reduce((sum, w) =>
        sum + w.stepNumbers.length, 0
    );

    // Update cross-functional flag
    const uniqueFunctions = new Set(agent.financeFunctions);
    agent.crossFunctional = uniqueFunctions.size > 1;

    // Update last modified
    agent.lastUpdated = new Date().toISOString();

    updateCatalogStats();
}

function updateCatalogStats(): void {
    CATALOG_STATS.totalAgents = MASTER_AGENT_CATALOG.length;
    CATALOG_STATS.crossFunctionalAgents = MASTER_AGENT_CATALOG.filter(
        a => a.crossFunctional
    ).length;

    // Reset counters
    CATALOG_STATS.agentsByFunction = {};
    CATALOG_STATS.agentsByPlatform = {};

    // Count by function and platform
    MASTER_AGENT_CATALOG.forEach(agent => {
        agent.financeFunctions.forEach(func => {
            CATALOG_STATS.agentsByFunction[func] =
                (CATALOG_STATS.agentsByFunction[func] || 0) + 1;
        });

        agent.platforms.forEach(platform => {
            CATALOG_STATS.agentsByPlatform[platform] =
                (CATALOG_STATS.agentsByPlatform[platform] || 0) + 1;
        });
    });

    // Find most used agents
    CATALOG_STATS.mostUsedAgents = MASTER_AGENT_CATALOG
        .map(a => ({ id: a.id, count: a.frequency }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

    CATALOG_STATS.lastUpdated = new Date().toISOString();
}

// Export function to generate catalog report
export function generateCatalogReport(): string {
    const report = `
# AI Agent Master Catalog Report

Generated: ${new Date().toISOString()}

## Summary Statistics
- Total Agents: ${CATALOG_STATS.totalAgents}
- Cross-Functional Agents: ${CATALOG_STATS.crossFunctionalAgents}
- Average Reuse: ${(CATALOG_STATS.crossFunctionalAgents / CATALOG_STATS.totalAgents * 100).toFixed(1)}%

## Agents by Function
${Object.entries(CATALOG_STATS.agentsByFunction)
            .map(([func, count]) => `- ${func}: ${count} agents`)
            .join('\n')}

## Top 10 Most Used Agents
${CATALOG_STATS.mostUsedAgents
            .map((agent, i) => `${i + 1}. ${agent.id} - ${agent.count} uses`)
            .join('\n')}

## Full Catalog
${MASTER_AGENT_CATALOG
            .map(agent => `
### ${agent.id} - ${agent.name}
- **Description**: ${agent.description}
- **Functions**: ${agent.financeFunctions.join(', ')}
- **Activities**: ${agent.activities.join(', ')}
- **Frequency**: ${agent.frequency} uses
- **Cross-Functional**: ${agent.crossFunctional ? 'Yes' : 'No'}
- **Status**: ${agent.status}
`).join('\n')}
`;

    return report;
} 