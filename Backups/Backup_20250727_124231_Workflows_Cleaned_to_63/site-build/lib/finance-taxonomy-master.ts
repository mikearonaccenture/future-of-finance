// Master Finance Taxonomy - Single Source of Truth
// Total: 63 activities across 7 functional areas

export interface Activity {
    id: string;
    name: string;
    description?: string;
}

export interface SubCategory {
    id: string;
    name: string;
    activities: Activity[];
}

export interface FunctionalArea {
    id: string;
    name: string;
    subCategories?: SubCategory[];
    activities?: Activity[];
    totalActivities: number;
}

export const MASTER_FINANCE_TAXONOMY: FunctionalArea[] = [
    {
        id: 'procure-to-pay',
        name: 'Procure to Pay',
        totalActivities: 9,
        activities: [
            { id: 'p2p-invoice-to-pay', name: 'Invoice to Pay' },
            { id: 'p2p-receipt-scanning', name: 'Receipt & Scanning' },
            { id: 'p2p-invoice-processing', name: 'Invoice Processing' },
            { id: 'p2p-payment-processing', name: 'Payment Processing' },
            { id: 'p2p-vendor-statement-reconciliation', name: 'Vendor Statement Reconciliation' },
            { id: 'p2p-accounts-payable-reconciliation', name: 'Accounts Payable Reconciliation' },
            { id: 'p2p-procurement-card-administration', name: 'Procurement Card Administration' },
            { id: 'p2p-travel-expense-administration', name: 'Travel & Expense Administration' },
            { id: 'p2p-ap-reporting-analytics', name: 'AP Reporting & Analytics' }
        ]
    },
    {
        id: 'order-to-cash',
        name: 'Order to Cash',
        totalActivities: 7,
        activities: [
            { id: 'o2c-receivable-management', name: 'Receivable Management' },
            { id: 'o2c-credit-management', name: 'Credit Management' },
            { id: 'o2c-manage-customer-billing', name: 'Manage Customer Billing' },
            { id: 'o2c-collections-disputes-management', name: 'Collections & Disputes Management' },
            { id: 'o2c-maintain-ar-ledger-apply-cash', name: 'Maintain AR Ledger and Apply Cash' },
            { id: 'o2c-deductions-management', name: 'Deductions Management' },
            { id: 'o2c-manage-customer-requests-inquiries', name: 'Manage Customer Requests & Inquiries' }
        ]
    },
    {
        id: 'cost-accounting',
        name: 'Cost Accounting',
        totalActivities: 2,
        activities: [
            { id: 'ca-product-costing', name: 'Product Costing' },
            { id: 'ca-product-service-costing', name: 'Product & Service Costing' }
        ]
    },
    {
        id: 'controllership',
        name: 'Controllership',
        totalActivities: 18,
        subCategories: [
            {
                id: 'record-to-report',
                name: 'Record to Report',
                activities: [
                    { id: 'ctrl-r2r-general-accounting', name: 'General Accounting' },
                    { id: 'ctrl-r2r-cash-management-banking', name: 'Cash Management and Banking' },
                    { id: 'ctrl-r2r-intercompany-accounting', name: 'Intercompany Accounting' },
                    { id: 'ctrl-r2r-asset-accounting', name: 'Asset Accounting' },
                    { id: 'ctrl-r2r-lease-accounting', name: 'Lease Accounting' },
                    { id: 'ctrl-r2r-partner-revenue-accounting', name: 'Partner and Revenue Accounting' },
                    { id: 'ctrl-r2r-project-accounting', name: 'Project Accounting' },
                    { id: 'ctrl-r2r-period-close', name: 'Period Close' },
                    { id: 'ctrl-r2r-perform-financial-reporting', name: 'Perform Financial Reporting' },
                    { id: 'ctrl-r2r-bs-reconciliation-analytics', name: 'BS Reconciliation & Analytics' },
                    { id: 'ctrl-r2r-perform-joint-venture-accounting', name: 'Perform Joint Venture Accounting' }
                ]
            },
            {
                id: 'statutory-regulatory-reporting',
                name: 'Statutory-Regulatory Reporting',
                activities: [
                    { id: 'ctrl-srr-manage-policy-controls-referencing', name: 'Manage Policy, Controls and Referencing' },
                    { id: 'ctrl-srr-group-reporting-consolidations', name: 'Group Reporting & Consolidations' },
                    { id: 'ctrl-srr-financial-statements-disclosures', name: 'Financial Statements & Disclosures' },
                    { id: 'ctrl-srr-statutory-gaap-reporting-adjustments', name: 'Statutory and GAAP Reporting Adjustments' },
                    { id: 'ctrl-srr-statutory-reporting', name: 'Statutory Reporting' },
                    { id: 'ctrl-srr-regulatory-reporting', name: 'Regulatory Reporting' },
                    { id: 'ctrl-srr-audit-response-management', name: 'Audit & Response Management' }
                ]
            }
        ]
    },
    {
        id: 'corporate-finance',
        name: 'Corporate Finance',
        totalActivities: 15,
        subCategories: [
            {
                id: 'tax',
                name: 'Tax',
                activities: [
                    { id: 'cf-tax-manage-tax-planning-strategy', name: 'Manage Tax Planning and Strategy' },
                    { id: 'cf-tax-manage-direct-tax', name: 'Manage Direct Tax' },
                    { id: 'cf-tax-manage-indirect-tax', name: 'Manage Indirect Tax' },
                    { id: 'cf-tax-manage-transfer-pricing', name: 'Manage Transfer Pricing' },
                    { id: 'cf-tax-manage-digital-tax-compliance', name: 'Manage Digital Tax Compliance' },
                    { id: 'cf-tax-manage-interactions-authorities', name: 'Manage Interactions with Authorities' },
                    { id: 'cf-tax-manage-tax-function-governance', name: 'Manage Tax Function Governance' }
                ]
            },
            {
                id: 'treasury',
                name: 'Treasury',
                activities: [
                    { id: 'cf-treasury-operating-model-governance', name: 'Treasury Operating Model & Governance' },
                    { id: 'cf-treasury-bank-relationship-management', name: 'Bank Relationship Management' },
                    { id: 'cf-treasury-cash-liquidity-management', name: 'Cash and Liquidity Management' },
                    { id: 'cf-treasury-investment-management', name: 'Investment Management' },
                    { id: 'cf-treasury-debt-management', name: 'Debt Management' },
                    { id: 'cf-treasury-accounting', name: 'Treasury Accounting' },
                    { id: 'cf-treasury-financial-risk-management', name: 'Financial Risk Management' },
                    { id: 'cf-treasury-kpi-reporting-analytics', name: 'Treasury KPI Reporting and Analytics' }
                ]
            }
        ]
    },
    {
        id: 'fpa',
        name: 'Financial Planning and Analysis',
        totalActivities: 7,
        activities: [
            { id: 'fpa-financial-planning-analysis', name: 'Financial Planning and Analysis' },
            { id: 'fpa-strategic-lr-planning', name: 'Strategic or LR Planning' },
            { id: 'fpa-integrated-enterprise-planning', name: 'Integrated Enterprise Planning' },
            { id: 'fpa-budgeting', name: 'Budgeting' },
            { id: 'fpa-dynamic-forecasting', name: 'Dynamic Forecasting' },
            { id: 'fpa-decision-support-modelling', name: 'Decision Support & Modelling' },
            { id: 'fpa-reporting-analysis', name: 'Reporting & Analysis' }
        ]
    },
    {
        id: 'investor-relations',
        name: 'Investor Relations',
        totalActivities: 5,
        activities: [
            { id: 'ir-investor-relations', name: 'Investor Relations' },
            { id: 'ir-quarterly-earnings', name: 'Quarterly Earnings' },
            { id: 'ir-competitive-intelligence', name: 'Competitive Intelligence' },
            { id: 'ir-stock-surveillance', name: 'Stock Surveillance' },
            { id: 'ir-investment-community-relationship-mgmt', name: 'Investment Community Relationship Mgmt' }
        ]
    }
];

// Helper functions to get activities
export function getAllActivities(): Activity[] {
    const activities: Activity[] = [];

    MASTER_FINANCE_TAXONOMY.forEach(area => {
        if (area.activities) {
            activities.push(...area.activities);
        }
        if (area.subCategories) {
            area.subCategories.forEach(subCat => {
                activities.push(...subCat.activities);
            });
        }
    });

    return activities;
}

export function getActivityById(activityId: string): Activity | undefined {
    return getAllActivities().find(activity => activity.id === activityId);
}

export function getActivitiesByFunctionalArea(functionalAreaId: string): Activity[] {
    const area = MASTER_FINANCE_TAXONOMY.find(fa => fa.id === functionalAreaId);
    if (!area) return [];

    const activities: Activity[] = [];
    if (area.activities) {
        activities.push(...area.activities);
    }
    if (area.subCategories) {
        area.subCategories.forEach(subCat => {
            activities.push(...subCat.activities);
        });
    }

    return activities;
}

export function getTotalActivityCount(): number {
    return MASTER_FINANCE_TAXONOMY.reduce((total, area) => total + area.totalActivities, 0);
}

// Export for backward compatibility
export const FINANCE_ACTIVITIES_COUNT = getTotalActivityCount(); // 63 