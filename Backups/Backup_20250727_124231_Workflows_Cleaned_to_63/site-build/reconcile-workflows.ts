import { FINANCE_TAXONOMY } from './finance-taxonomy-source-of-truth.js';

// Get all activities from source of truth
const sourceOfTruthActivities = new Set<string>();
Object.values(FINANCE_TAXONOMY.structure).forEach(area => {
    area.activities.forEach(activity => {
        sourceOfTruthActivities.add(activity);
    });
});

// Current workflow activities (from the grep output)
const currentWorkflowActivities = [
    'Accounts Payable Reconciliation',
    'Activity-Based Costing',
    'AP Reporting & Analytics',
    'Asset Accounting',
    'Audit & Response Management',
    'Bank Relationship Management',
    'BS Reconciliation & Analytics',
    'Budgeting',
    'Cash and Liquidity Management',
    'Cash Management and Banking',
    'Cash Management',
    'Collections & Disputes Management',
    'Competitive Intelligence',
    'Consolidation & Intercompany',
    'Cost Allocation',
    'Credit Management',
    'Data / System Effectiveness & Governance',
    'Debt Management',
    'Decision Support & Modeling',
    'Deductions Management',
    'Dynamic Forecasting',
    'ESG Reporting',
    'Financial Planning and Analysis',
    'Financial Reporting',
    'Financial Risk Management',
    'Financial Statements & Disclosures',
    'General Accounting',
    'Group Reporting & Consolidations',
    'Integrated Enterprise Planning',
    'Intercompany Accounting',
    'Inventory Accounting',
    'Investment Community Relationship Mgmt',
    'Investment Management',
    'Investor Relations',
    'Invoice Processing',
    'Invoice to Pay Support Help Desk',
    'Invoice to Pay',
    'Lease Accounting',
    'Maintain AR Ledger and Apply Cash',
    'Manage Customer Billing',
    'Manage Customer Requests & Inquiries',
    'Manage Digital Tax Compliance',
    'Manage Direct Tax',
    'Manage Indirect Tax',
    'Manage Interactions with Authorities',
    'Manage Policy, Controls and Referencing',
    'Manage Tax Function Governance',
    'Manage Tax Planning and Strategy',
    'Manage Transfer Pricing',
    'Marketing & Events',
    'Order Modifications',
    'Partner Accounting',
    'Partner and Revenue Accounting',
    'Payment Processing',
    'Perform Financial Reporting',
    'Perform Joint Venture Accounting',
    'Period Close',
    'Procurement Card Administration',
    'Product & Service Costing',
    'Product Costing',
    'Project Accounting',
    'Quarterly Earnings',
    'Receipt & Scanning',
    'Receivable Management',
    'Regulatory Filings',
    'Regulatory Reporting',
    'Reporting & Analysis',
    'Revenue Assurance',
    'Shareholder Services',
    'Standard Costing',
    'Statutory and GAAP Reporting Adjustments',
    'Statutory Reporting',
    'Stock Surveillance',
    'Strategic or LR Planning',
    'Travel & Expense Administration',
    'Treasury Accounting',
    'Treasury KPI Reporting and Analytics',
    'Treasury Operations & Governance',
    'Variance Analysis',
    'Vendor Statement Reconciliation'
];

console.log('=== WORKFLOW RECONCILIATION REPORT ===\n');

// Find workflows that need to be removed (not in source of truth)
const workflowsToRemove = currentWorkflowActivities.filter(activity =>
    !sourceOfTruthActivities.has(activity)
);

console.log(`Workflows to REMOVE (${workflowsToRemove.length}):`);
workflowsToRemove.forEach(activity => console.log(`  - ${activity}`));

// Find activities missing workflows
const missingWorkflows = Array.from(sourceOfTruthActivities).filter(activity =>
    !currentWorkflowActivities.includes(activity)
);

console.log(`\nActivities MISSING workflows (${missingWorkflows.length}):`);
missingWorkflows.forEach(activity => console.log(`  - ${activity}`));

// Check for potential naming mismatches
console.log('\nPotential naming mismatches:');

// Treasury Operations & Governance vs Treasury Operating Model & Governance
if (currentWorkflowActivities.includes('Treasury Operations & Governance') &&
    sourceOfTruthActivities.has('Treasury Operating Model & Governance')) {
    console.log('  - "Treasury Operations & Governance" should be "Treasury Operating Model & Governance"');
}

// Decision Support & Modeling vs Decision Support & Modelling
if (currentWorkflowActivities.includes('Decision Support & Modeling') &&
    sourceOfTruthActivities.has('Decision Support & Modelling')) {
    console.log('  - "Decision Support & Modeling" should be "Decision Support & Modelling"');
}

// Invoice to Pay Support Help Desk might need to be removed or mapped differently
if (currentWorkflowActivities.includes('Invoice to Pay Support Help Desk')) {
    console.log('  - "Invoice to Pay Support Help Desk" is not in source of truth');
}

console.log('\n=== SUMMARY ===');
console.log(`Current workflows: ${currentWorkflowActivities.length}`);
console.log(`Target workflows: ${sourceOfTruthActivities.size}`);
console.log(`Workflows to remove: ${workflowsToRemove.length}`);
console.log(`Workflows to add: ${missingWorkflows.length}`); 