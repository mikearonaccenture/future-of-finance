// Workflow-Agent Analysis Script
// Purpose: Analyze which agents are used in which workflows

import { getPrimaryMappingForOldId } from './agent-id-mapping';
import { MASTER_AGENT_CATALOG, findAgentByLegacyId } from './agent-master-catalog';

// Interface for workflow analysis
interface WorkflowAgentUsage {
    workflowName: string;
    workflowFile: string;
    totalSteps: number;
    agentsUsed: {
        oldId: string;
        newId: string;
        agentName: string;
        frequency: number;
    }[];
}

// Sample workflow data structure (this would be imported from actual workflow files)
interface WorkflowStep {
    stepNumber: number;
    description: string;
    futureState?: {
        aiAgents?: string[];
    };
}

interface SubActivity {
    name: string;
    description: string;
    currentStateWorkflow: WorkflowStep[];
}

// Analyze a single workflow
function analyzeWorkflow(
    workflowName: string,
    workflowFile: string,
    workflow: SubActivity[]
): WorkflowAgentUsage[] {
    const results: WorkflowAgentUsage[] = [];

    workflow.forEach(activity => {
        const agentUsage = new Map<string, number>();
        let totalSteps = 0;

        // Count agents in each step
        activity.currentStateWorkflow.forEach(step => {
            totalSteps++;
            if (step.futureState?.aiAgents) {
                step.futureState.aiAgents.forEach(agentId => {
                    const count = agentUsage.get(agentId) || 0;
                    agentUsage.set(agentId, count + 1);
                });
            }
        });

        // Convert to array with new IDs
        const agentsUsed = Array.from(agentUsage.entries()).map(([oldId, frequency]) => {
            const mapping = getPrimaryMappingForOldId(oldId);
            const agent = mapping ? findAgentByLegacyId(oldId) : undefined;

            return {
                oldId,
                newId: mapping?.newId || 'UNKNOWN',
                agentName: agent?.name || mapping?.agentName || 'Unknown Agent',
                frequency
            };
        });

        results.push({
            workflowName: activity.name,
            workflowFile,
            totalSteps,
            agentsUsed
        });
    });

    return results;
}

// Aggregate all agent usage across workflows
function aggregateAgentUsage(allWorkflows: WorkflowAgentUsage[]) {
    const agentStats = new Map<string, {
        newId: string;
        name: string;
        totalUsage: number;
        workflows: string[];
        oldIds: Set<string>;
    }>();

    allWorkflows.forEach(workflow => {
        workflow.agentsUsed.forEach(agent => {
            const key = agent.newId;
            const stats = agentStats.get(key) || {
                newId: agent.newId,
                name: agent.agentName,
                totalUsage: 0,
                workflows: [],
                oldIds: new Set<string>()
            };

            stats.totalUsage += agent.frequency;
            stats.workflows.push(`${workflow.workflowName} (${agent.frequency}x)`);
            stats.oldIds.add(agent.oldId);

            agentStats.set(key, stats);
        });
    });

    return agentStats;
}

// Generate summary report
export function generateWorkflowAgentReport() {
    console.log('# Workflow-Agent Usage Analysis\n');
    console.log('## Analysis Summary\n');

    // This would be populated with actual workflow data
    console.log('### Workflow Files to Analyze:');
    console.log('- fpa-workflows.ts');
    console.log('- record-to-report-workflows.ts');
    console.log('- procure-to-pay-workflows.ts');
    console.log('- order-to-cash-workflows.ts');
    console.log('- corporate-finance-workflows.ts');
    console.log('- cost-accounting-workflows.ts');
    console.log('- investor-relations-workflows.ts');
    console.log('- controllership-workflows.ts');
    console.log('- ... and additional workflow files\n');

    console.log('### Analysis Approach:');
    console.log('1. Extract all aiAgents arrays from workflow steps');
    console.log('2. Map old agent IDs to new standardized IDs');
    console.log('3. Count usage frequency per workflow');
    console.log('4. Identify unused agents');
    console.log('5. Find most frequently used agents\n');

    // Example output structure
    console.log('## Sample Output Structure:\n');
    console.log('### Most Used Agents:');
    console.log('1. FPA-VARIANCE-001 (Variance Detective) - 45 uses across 12 workflows');
    console.log('2. RTR-JOURNAL-001 (Journal Entry Creator) - 38 uses across 8 workflows');
    console.log('3. PTP-INVOICE-001 (Invoice Capture Agent) - 32 uses across 6 workflows\n');

    console.log('### Unused Agents:');
    console.log('- Agents defined in catalog but not referenced in any workflow\n');

    console.log('### Workflow Coverage:');
    console.log('- Workflows with most AI agents');
    console.log('- Workflows with no AI agents (automation opportunities)\n');

    console.log('### ID Migration Impact:');
    console.log('- Total legacy ID references to update');
    console.log('- Workflows affected by ID changes');
    console.log('- Conflicted IDs requiring manual review\n');
}

// Helper to validate all agent references exist
export function validateAgentReferences(workflows: WorkflowAgentUsage[]) {
    const issues: string[] = [];
    const validAgents = new Set(MASTER_AGENT_CATALOG.flatMap(a => a.legacyIds));

    workflows.forEach(workflow => {
        workflow.agentsUsed.forEach(agent => {
            if (!validAgents.has(agent.oldId)) {
                issues.push(`Unknown agent ID '${agent.oldId}' in ${workflow.workflowName}`);
            }
        });
    });

    return issues;
}

// Export analysis functions
export {
    SubActivity, WorkflowAgentUsage, WorkflowStep, aggregateAgentUsage, analyzeWorkflow
};
