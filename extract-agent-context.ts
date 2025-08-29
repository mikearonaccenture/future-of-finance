// Agent Context Extraction Script
// Purpose: Extract complete context for all 519 agents from workflow files

import * as fs from 'fs';
import * as path from 'path';

interface AgentContext {
    agentId: string;
    occurrences: {
        workflow: string;
        activityName: string;
        stepNumber: number;
        stepDescription: string;
        otherAgentsInStep: string[];
        fullContext: string;
    }[];
    inferredPurpose?: string;
    suggestedCategory?: string;
}

interface WorkflowStep {
    stepNumber: number;
    description: string;
    currentState?: {
        activities: string[];
        timeRequired: string;
        painPoints: string[];
    };
    futureState?: {
        activities: string[];
        aiAgents: string[];
        humanCheckpoints?: string[];
        timeReduction?: string;
    };
}

interface SubActivity {
    name: string;
    description: string;
    platform?: string;
    currentStateWorkflow: WorkflowStep[];
}

// Extract all workflow files
function getWorkflowFiles(dir: string): string[] {
    const files = fs.readdirSync(dir);
    return files
        .filter(file => file.endsWith('-workflows.ts'))
        .map(file => path.join(dir, file));
}

// Parse workflow file and extract agent contexts
function extractAgentsFromWorkflow(filePath: string): Map<string, AgentContext> {
    const contexts = new Map<string, AgentContext>();
    const workflowName = path.basename(filePath, '.ts');

    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Extract workflow arrays
        const workflowMatches = content.match(/export const \w+: SubActivity\[\] = \[([\s\S]*?)\];/g);

        if (!workflowMatches) return contexts;

        workflowMatches.forEach(match => {
            // Extract individual activities
            const activityMatches = match.match(/\{[\s\S]*?name: ['"`]([^'"`]+)['"`][\s\S]*?currentStateWorkflow: \[([\s\S]*?)\s*\]\s*\}/g);

            if (!activityMatches) return;

            activityMatches.forEach(activityMatch => {
                const activityName = activityMatch.match(/name: ['"`]([^'"`]+)['"`]/)?.[1] || 'Unknown Activity';

                // Extract steps with aiAgents
                const stepMatches = activityMatch.match(/\{[\s\S]*?stepNumber: (\d+)[\s\S]*?description: ['"`]([^'"`]+)['"`][\s\S]*?futureState: \{[\s\S]*?aiAgents: \[([^\]]+)\][\s\S]*?\}/g);

                if (!stepMatches) return;

                stepMatches.forEach(stepMatch => {
                    const stepNumber = parseInt(stepMatch.match(/stepNumber: (\d+)/)?.[1] || '0');
                    const description = stepMatch.match(/description: ['"`]([^'"`]+)['"`]/)?.[1] || '';
                    const agentsMatch = stepMatch.match(/aiAgents: \[([^\]]+)\]/)?.[1] || '';

                    // Extract agent IDs and their descriptions
                    const agentParts = agentsMatch.split(',').map(part => {
                        const match = part.trim().match(/['"`]([^'"`]+)['"`]/);
                        return match ? match[1] : '';
                    }).filter(id => id);

                    // Extract comments that explain agents
                    const commentMatch = agentsMatch.match(/\/\/(.+)$/);
                    const agentDescriptions = commentMatch ?
                        commentMatch[1].split(',').map(d => d.trim()) : [];

                    agentParts.forEach((agentId, index) => {
                        if (!agentId) return;

                        if (!contexts.has(agentId)) {
                            contexts.set(agentId, {
                                agentId,
                                occurrences: []
                            });
                        }

                        const context = contexts.get(agentId)!;
                        context.occurrences.push({
                            workflow: workflowName,
                            activityName,
                            stepNumber,
                            stepDescription: description,
                            otherAgentsInStep: agentParts.filter(id => id !== agentId),
                            fullContext: agentDescriptions[index] || ''
                        });
                    });
                });
            });
        });

    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }

    return contexts;
}

// Infer purpose from context
function inferAgentPurpose(context: AgentContext): void {
    const { agentId, occurrences } = context;

    // Collect all descriptions and contexts
    const allDescriptions = occurrences.map(o => o.fullContext).filter(c => c);
    const stepDescriptions = occurrences.map(o => o.stepDescription);

    // Common patterns for categorization
    const categoryPatterns = {
        'Data': /data|extract|gather|collect|aggregate|integrat/i,
        'Validation': /validat|verif|check|audit|complian/i,
        'Processing': /process|automat|generat|creat|build/i,
        'Analysis': /analy|insight|detect|investigat|report/i,
        'Approval': /approv|review|authoriz|sign/i,
        'Communication': /notif|alert|email|messag|communicat/i,
        'Reconciliation': /reconcil|match|compar|balanc/i,
        'Optimization': /optim|improve|efficien|recommend/i,
        'Risk': /risk|fraud|complian|audit|control/i,
        'Financial': /financ|account|ledger|journal|payment/i
    };

    // Try to categorize based on patterns
    for (const [category, pattern] of Object.entries(categoryPatterns)) {
        const allText = [...allDescriptions, ...stepDescriptions].join(' ');
        if (pattern.test(allText)) {
            context.suggestedCategory = category;
            break;
        }
    }

    // Infer purpose from most common description
    if (allDescriptions.length > 0) {
        // Find most common description
        const descCounts = new Map<string, number>();
        allDescriptions.forEach(desc => {
            descCounts.set(desc, (descCounts.get(desc) || 0) + 1);
        });

        const mostCommon = Array.from(descCounts.entries())
            .sort((a, b) => b[1] - a[1])[0];

        if (mostCommon) {
            context.inferredPurpose = mostCommon[0];
        }
    }

    // If no description, infer from ID pattern
    if (!context.inferredPurpose) {
        const idPatterns: Record<string, string> = {
            '^A[A-Z]$': 'Automation/Approval Agent',
            '^D[A-Z]$': 'Data Management Agent',
            '^R[A-Z]$': 'Reporting/Reconciliation Agent',
            '^V[A-Z]$': 'Validation/Verification Agent',
            '^C[A-Z]$': 'Control/Compliance Agent',
            '^P[A-Z]$': 'Processing/Payment Agent',
            '^S[A-Z]$': 'System/Smart Agent',
            '^T[A-Z]$': 'Transaction/Tracking Agent',
            '-': 'Domain-Specific Agent (Good naming!)'
        };

        for (const [pattern, purpose] of Object.entries(idPatterns)) {
            if (new RegExp(pattern).test(agentId)) {
                context.inferredPurpose = purpose;
                break;
            }
        }
    }
}

// Main execution
function analyzeAllAgents() {
    console.log('Starting Agent Context Extraction...\n');

    const workflowDir = path.join(__dirname, 'site-build', 'workflows');
    const workflowFiles = getWorkflowFiles(workflowDir);

    console.log(`Found ${workflowFiles.length} workflow files\n`);

    // Collect all agent contexts
    const allAgents = new Map<string, AgentContext>();

    workflowFiles.forEach(file => {
        const contexts = extractAgentsFromWorkflow(file);

        // Merge contexts
        contexts.forEach((context, agentId) => {
            if (allAgents.has(agentId)) {
                const existing = allAgents.get(agentId)!;
                existing.occurrences.push(...context.occurrences);
            } else {
                allAgents.set(agentId, context);
            }
        });
    });

    console.log(`\nFound ${allAgents.size} unique agents across all workflows\n`);

    // Infer purposes
    allAgents.forEach(context => inferAgentPurpose(context));

    // Generate comprehensive report
    generateReport(allAgents);

    // Save raw data for further analysis
    saveRawData(allAgents);
}

// Generate human-readable report
function generateReport(agents: Map<string, AgentContext>) {
    let report = '# Agent Context Analysis Report\n\n';
    report += `Generated: ${new Date().toISOString()}\n\n`;
    report += `## Summary\n\n`;
    report += `- Total Unique Agents: ${agents.size}\n`;

    // Category breakdown
    const categories = new Map<string, number>();
    agents.forEach(agent => {
        const cat = agent.suggestedCategory || 'Uncategorized';
        categories.set(cat, (categories.get(cat) || 0) + 1);
    });

    report += '\n### Agent Categories\n\n';
    Array.from(categories.entries())
        .sort((a, b) => b[1] - a[1])
        .forEach(([cat, count]) => {
            report += `- ${cat}: ${count} agents\n`;
        });

    // Most used agents
    const usageCounts = Array.from(agents.entries())
        .map(([id, context]) => ({
            id,
            count: context.occurrences.length,
            purpose: context.inferredPurpose
        }))
        .sort((a, b) => b.count - a.count);

    report += '\n### Top 20 Most Used Agents\n\n';
    usageCounts.slice(0, 20).forEach(({ id, count, purpose }) => {
        report += `- **${id}**: ${count} occurrences - ${purpose || 'Unknown purpose'}\n`;
    });

    // Potential duplicates
    report += '\n### Potential Duplicate Groups\n\n';
    report += identifyDuplicates(agents);

    // Save report
    fs.writeFileSync('agent-context-report.md', report);
    console.log('Report saved to agent-context-report.md');
}

// Identify potential duplicate agents
function identifyDuplicates(agents: Map<string, AgentContext>): string {
    let duplicateReport = '';

    // Group by similar IDs
    const groups = new Map<string, string[]>();

    // Group by prefix (first letter for 2-letter IDs)
    agents.forEach((context, id) => {
        if (id.length === 2) {
            const prefix = id[0];
            if (!groups.has(prefix)) {
                groups.set(prefix, []);
            }
            groups.get(prefix)!.push(id);
        }
    });

    // Report groups with multiple agents
    groups.forEach((ids, prefix) => {
        if (ids.length > 1) {
            duplicateReport += `\n#### ${prefix}* Series (${ids.length} agents)\n`;
            ids.sort().forEach(id => {
                const context = agents.get(id)!;
                duplicateReport += `- ${id}: ${context.inferredPurpose || 'Unknown'}\n`;
            });
        }
    });

    return duplicateReport;
}

// Save raw data for further analysis
function saveRawData(agents: Map<string, AgentContext>) {
    const data = {
        extractionDate: new Date().toISOString(),
        totalAgents: agents.size,
        agents: Array.from(agents.entries()).map(([id, context]) => ({
            id,
            ...context
        }))
    };

    fs.writeFileSync('agent-context-data.json', JSON.stringify(data, null, 2));
    console.log('Raw data saved to agent-context-data.json');
}

// Run the analysis
analyzeAllAgents(); 