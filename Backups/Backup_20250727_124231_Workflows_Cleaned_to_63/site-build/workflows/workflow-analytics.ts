// Workflow Analytics - Agent Usage Aggregation
import { ComprehensiveAIAgents } from '../ai-agents-expanded';
import { AgentUsageStats, FinanceWorkflowSystem, SubActivity } from '../finance-workflows-overview';
import { orderToCashWorkflows } from './order-to-cash-workflows';
import { procureToPayWorkflows } from './procure-to-pay-workflows';
import { recordToReportWorkflows } from './record-to-report-workflows';

// Aggregate all workflows
const allWorkflows: { function: string; workflows: SubActivity[] }[] = [
    { function: 'Procure to Pay', workflows: procureToPayWorkflows },
    { function: 'Order to Cash', workflows: orderToCashWorkflows },
    { function: 'Record to Report', workflows: recordToReportWorkflows },
    // Additional workflow files will be added here
];

// Calculate agent usage statistics
export function calculateAgentUsageStats(): AgentUsageStats[] {
    const agentUsageMap = new Map<string, {
        totalUsage: number;
        functions: Set<string>;
        workflows: Set<string>;
    }>();

    // Process all workflows
    allWorkflows.forEach(({ function: funcName, workflows }) => {
        workflows.forEach(workflow => {
            workflow.aiAgentsUsed.forEach(({ agentId, frequency }) => {
                if (!agentUsageMap.has(agentId)) {
                    agentUsageMap.set(agentId, {
                        totalUsage: 0,
                        functions: new Set(),
                        workflows: new Set()
                    });
                }

                const stats = agentUsageMap.get(agentId)!;
                stats.totalUsage += frequency;
                stats.functions.add(funcName);
                stats.workflows.add(`${funcName} - ${workflow.name}`);
            });
        });
    });

    // Convert to AgentUsageStats array
    const agentUsageStats: AgentUsageStats[] = [];

    agentUsageMap.forEach((stats, agentId) => {
        // Find agent details from comprehensive agents
        let agentName = agentId;
        let found = false;

        // Search in all agent categories
        Object.values(ComprehensiveAIAgents).forEach(agents => {
            if (Array.isArray(agents)) {
                const agent = agents.find(a => a.id === agentId);
                if (agent) {
                    agentName = agent.name;
                    found = true;
                }
            }
        });

        // Determine criticality based on usage
        let criticalityScore: 'high' | 'medium' | 'low';
        if (stats.totalUsage > 5 || stats.functions.size > 2) {
            criticalityScore = 'high';
        } else if (stats.totalUsage > 2 || stats.functions.size > 1) {
            criticalityScore = 'medium';
        } else {
            criticalityScore = 'low';
        }

        agentUsageStats.push({
            agentId,
            agentName,
            totalUsageCount: stats.totalUsage,
            functionsUsedIn: Array.from(stats.functions),
            workflowsUsedIn: Array.from(stats.workflows),
            criticalityScore
        });
    });

    // Sort by total usage count (descending)
    return agentUsageStats.sort((a, b) => b.totalUsageCount - a.totalUsageCount);
}

// Get human checkpoint summary
export function getHumanCheckpointSummary() {
    const checkpointCounts = {
        approvals: 0,
        complianceChecks: 0,
        riskAssessments: 0,
        qualityReviews: 0,
        strategicDecisions: 0,
        exceptionHandling: 0,
        finalSignoffs: 0
    };

    allWorkflows.forEach(({ workflows }) => {
        workflows.forEach(workflow => {
            workflow.currentStateWorkflow.forEach(step => {
                step.futureState.humanCheckpoints.forEach(checkpoint => {
                    switch (checkpoint) {
                        case 'Approval Required':
                            checkpointCounts.approvals++;
                            break;
                        case 'Compliance Review':
                            checkpointCounts.complianceChecks++;
                            break;
                        case 'Risk Assessment':
                            checkpointCounts.riskAssessments++;
                            break;
                        case 'Quality Assurance':
                            checkpointCounts.qualityReviews++;
                            break;
                        case 'Strategic Decision':
                            checkpointCounts.strategicDecisions++;
                            break;
                        case 'Exception Handling':
                            checkpointCounts.exceptionHandling++;
                            break;
                        case 'Final Sign-off':
                            checkpointCounts.finalSignoffs++;
                            break;
                    }
                });
            });
        });
    });

    return checkpointCounts;
}

// Get top agents by usage
export function getTopAgentsByUsage(limit: number = 10): AgentUsageStats[] {
    return calculateAgentUsageStats().slice(0, limit);
}

// Get agents used in multiple functions (cross-functional)
export function getCrossFunctionalAgents(): AgentUsageStats[] {
    return calculateAgentUsageStats().filter(agent => agent.functionsUsedIn.length > 1);
}

// Get workflow complexity summary
export function getWorkflowComplexitySummary() {
    const summary = {
        totalWorkflows: 0,
        totalSteps: 0,
        totalAgentsUsed: new Set<string>(),
        averageStepsPerWorkflow: 0,
        averageAgentsPerWorkflow: 0,
        averageTimeSavings: 0
    };

    let totalTimeSavings = 0;

    allWorkflows.forEach(({ workflows }) => {
        workflows.forEach(workflow => {
            summary.totalWorkflows++;
            summary.totalSteps += workflow.totalSteps;

            workflow.aiAgentsUsed.forEach(({ agentId }) => {
                summary.totalAgentsUsed.add(agentId);
            });

            // Extract average time savings percentage
            const savingsMatch = workflow.estimatedTimeSavings.match(/(\d+)/);
            if (savingsMatch) {
                totalTimeSavings += parseInt(savingsMatch[1]);
            }
        });
    });

    summary.averageStepsPerWorkflow = summary.totalSteps / summary.totalWorkflows;
    summary.averageAgentsPerWorkflow = summary.totalAgentsUsed.size / summary.totalWorkflows;
    summary.averageTimeSavings = totalTimeSavings / summary.totalWorkflows;

    return summary;
}

// Generate comprehensive workflow system report
export function generateWorkflowSystemReport(): FinanceWorkflowSystem {
    const agentUsageStats = calculateAgentUsageStats();
    const humanCheckpoints = getHumanCheckpointSummary();
    const complexitySummary = getWorkflowComplexitySummary();

    const functions = allWorkflows.map(({ function: name, workflows }) => ({
        name,
        subActivities: workflows
    }));

    return {
        functions,
        totalWorkflows: complexitySummary.totalWorkflows,
        totalAIAgents: complexitySummary.totalAgentsUsed.size,
        agentUsageStats,
        humanCheckpointCategories: {
            approvals: humanCheckpoints.approvals,
            complianceChecks: humanCheckpoints.complianceChecks,
            riskAssessments: humanCheckpoints.riskAssessments,
            qualityReviews: humanCheckpoints.qualityReviews,
            strategicDecisions: humanCheckpoints.strategicDecisions
        }
    };
}

// Agent usage insights
export function getAgentUsageInsights() {
    const stats = calculateAgentUsageStats();
    const topAgents = getTopAgentsByUsage(5);
    const crossFunctional = getCrossFunctionalAgents();

    return {
        mostUsedAgents: topAgents.map(a => ({
            agent: `${a.agentName} (${a.agentId})`,
            usage: a.totalUsageCount,
            functions: a.functionsUsedIn.join(', ')
        })),
        crossFunctionalAgents: crossFunctional.map(a => ({
            agent: `${a.agentName} (${a.agentId})`,
            functionsCount: a.functionsUsedIn.length,
            functions: a.functionsUsedIn.join(', ')
        })),
        criticalAgents: stats.filter(a => a.criticalityScore === 'high').map(a => ({
            agent: `${a.agentName} (${a.agentId})`,
            reason: a.totalUsageCount > 5 ? 'High frequency usage' : 'Used across multiple functions'
        }))
    };
} 