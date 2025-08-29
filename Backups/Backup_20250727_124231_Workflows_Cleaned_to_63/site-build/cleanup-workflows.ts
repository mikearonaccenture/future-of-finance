import * as fs from 'fs';
import * as path from 'path';
import { FINANCE_TAXONOMY } from './finance-taxonomy-source-of-truth';

// Get all valid activities from source of truth
const validActivities = new Set<string>();
Object.values(FINANCE_TAXONOMY.structure).forEach(area => {
    area.activities.forEach(activity => {
        validActivities.add(activity);
    });
});

// Define workflows to remove per file
const workflowsToRemove = {
    'record-to-report-workflows.ts': ['Financial Reporting', 'Consolidation & Intercompany', 'Partner Accounting'],
    'order-to-cash-workflows.ts': ['Credit Management', 'Revenue Assurance', 'Order Modifications'],
    'investor-relations-workflows.ts': ['ESG Reporting', 'Shareholder Services', 'Regulatory Filings'],
    'fpa-additional-workflows.ts': ['Data / System Effectiveness & Governance'],
    'investor-relations-additional-workflows.ts': ['Marketing & Events'],
    'controllership-additional-workflows.ts': ['Invoice to Pay Support Help Desk']
};

// Process each file
Object.entries(workflowsToRemove).forEach(([filename, toRemove]) => {
    const filepath = path.join('workflows', filename);

    try {
        // Read the file
        const content = fs.readFileSync(filepath, 'utf8');

        // Parse to find workflow array
        const match = content.match(/export const \w+: SubActivity\[\] = \[([\s\S]*)\];/);
        if (!match) {
            console.log(`Could not parse ${filename}`);
            return;
        }

        // Split into individual workflow objects
        const workflowsSection = match[1];
        const workflows: string[] = [];
        let currentWorkflow = '';
        let braceCount = 0;
        let inWorkflow = false;

        for (let i = 0; i < workflowsSection.length; i++) {
            const char = workflowsSection[i];

            if (char === '{' && !inWorkflow && braceCount === 0) {
                inWorkflow = true;
                currentWorkflow = char;
                braceCount = 1;
            } else if (inWorkflow) {
                currentWorkflow += char;
                if (char === '{') braceCount++;
                else if (char === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        workflows.push(currentWorkflow);
                        currentWorkflow = '';
                        inWorkflow = false;
                    }
                }
            }
        }

        // Filter out unwanted workflows
        const filteredWorkflows = workflows.filter(workflow => {
            const nameMatch = workflow.match(/name:\s*['"]([^'"]+)['"]/);
            if (nameMatch) {
                const workflowName = nameMatch[1];
                return !toRemove.includes(workflowName);
            }
            return true;
        });

        // Reconstruct the file
        const importSection = content.substring(0, content.indexOf('export const'));
        const exportMatch = content.match(/export const (\w+): SubActivity\[\] = \[/);
        const arrayName = exportMatch ? exportMatch[1] : 'workflows';

        const newContent = importSection +
            `export const ${arrayName}: SubActivity[] = [\n    ` +
            filteredWorkflows.join(',\n    ') +
            '\n];';

        // Write back to file
        fs.writeFileSync(filepath, newContent);

        console.log(`Updated ${filename}:`);
        console.log(`  - Removed ${toRemove.length} workflows`);
        console.log(`  - Remaining workflows: ${filteredWorkflows.length}`);

    } catch (error) {
        console.error(`Error processing ${filename}:`, error);
    }
});

console.log('\nWorkflow cleanup complete!'); 