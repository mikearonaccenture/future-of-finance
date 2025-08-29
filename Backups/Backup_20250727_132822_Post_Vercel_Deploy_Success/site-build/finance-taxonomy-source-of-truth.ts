/**
 * FINANCE TAXONOMY - SINGLE SOURCE OF TRUTH
 * =========================================
 * 
 * This file represents the canonical structure of our finance transformation:
 * - 7 Functional Areas
 * - 63 Core Business Activities  
 * - 17 Logical Platforms
 * 
 * All other files should reference this structure.
 */

export const FINANCE_TAXONOMY = {
    functionalAreas: 7,
    totalActivities: 63,
    totalPlatforms: 17,

    structure: {
        // 1. PROCURE TO PAY (9 activities, 2 platforms)
        "Procure to Pay": {
            activityCount: 9,
            platformCount: 2,
            activities: [
                "Invoice to Pay",
                "Receipt & Scanning",
                "Invoice Processing",
                "Payment Processing",
                "Vendor Statement Reconciliation",
                "Accounts Payable Reconciliation",
                "Procurement Card Administration",
                "Travel & Expense Administration",
                "AP Reporting & Analytics"
            ],
            platforms: [
                "Intelligent Invoice Processing Platform",
                "Supplier Collaboration Platform"
            ]
        },

        // 2. ORDER TO CASH (7 activities, 2 platforms)
        "Order to Cash": {
            activityCount: 7,
            platformCount: 2,
            activities: [
                "Receivable Management",
                "Credit Management",
                "Manage Customer Billing",
                "Collections & Disputes Management",
                "Deductions Management",
                "Maintain AR Ledger and Apply Cash",
                "Manage Customer Requests & Inquiries"
            ],
            platforms: [
                "Intelligent Receivables Platform",
                "Customer Experience Portal"
            ]
        },

        // 3. COST ACCOUNTING (2 activities, 2 platforms)
        "Cost Accounting": {
            activityCount: 2,
            platformCount: 2,
            activities: [
                "Product Costing",
                "Product & Service Costing"
            ],
            platforms: [
                "Dynamic Cost Engine",
                "Profitability Analytics Platform"
            ]
        },

        // 4. CONTROLLERSHIP (18 activities, 4 platforms)
        "Controllership": {
            activityCount: 18,
            platformCount: 4,
            activities: [
                // Record to Report (11 activities)
                "General Accounting",
                "Cash Management and Banking",
                "Intercompany Accounting",
                "Asset Accounting",
                "Lease Accounting",
                "Partner and Revenue Accounting",
                "Project Accounting",
                "Period Close",
                "Perform Financial Reporting",
                "BS Reconciliation & Analytics",
                "Perform Joint Venture Accounting",
                // Statutory-Regulatory Reporting (7 activities)
                "Manage Policy, Controls and Referencing",
                "Group Reporting & Consolidations",
                "Financial Statements & Disclosures",
                "Statutory and GAAP Reporting Adjustments",
                "Statutory Reporting",
                "Regulatory Reporting",
                "Audit & Response Management"
            ],
            platforms: [
                "Continuous Close Platform",
                "Control & Compliance Suite",
                "Regulatory Intelligence Platform",
                "Statutory Reporting Hub"
            ]
        },

        // 5. CORPORATE FINANCE (15 activities, 3 platforms)
        "Corporate Finance": {
            activityCount: 15,
            platformCount: 3,
            activities: [
                // Tax (7 activities)
                "Manage Tax Planning and Strategy",
                "Manage Direct Tax",
                "Manage Indirect Tax",
                "Manage Transfer Pricing",
                "Manage Digital Tax Compliance",
                "Manage Interactions with Authorities",
                "Manage Tax Function Governance",
                // Treasury (8 activities)
                "Treasury Operating Model & Governance",
                "Bank Relationship Management",
                "Cash and Liquidity Management",
                "Investment Management",
                "Debt Management",
                "Treasury Accounting",
                "Financial Risk Management",
                "Treasury KPI Reporting and Analytics"
            ],
            platforms: [
                "Tax Intelligence Platform",
                "Treasury Command Center",
                "Risk & Analytics Suite"
            ]
        },

        // 6. FINANCIAL PLANNING & ANALYSIS (7 activities, 2 platforms)
        "Financial Planning & Analysis": {
            activityCount: 7,
            platformCount: 2,
            activities: [
                "Financial Planning and Analysis",
                "Strategic or LR Planning",
                "Integrated Enterprise Planning",
                "Budgeting",
                "Dynamic Forecasting",
                "Decision Support & Modelling",
                "Reporting & Analysis"
            ],
            platforms: [
                "Connected Enterprise Planning Platform",
                "Management Reporting Platform"
            ]
        },

        // 7. INVESTOR RELATIONS (5 activities, 2 platforms)
        "Investor Relations": {
            activityCount: 5,
            platformCount: 2,
            activities: [
                "Investor Relations",
                "Quarterly Earnings",
                "Competitive Intelligence",
                "Stock Surveillance",
                "Investment Community Relationship Mgmt"
            ],
            platforms: [
                "Investor Intelligence Platform",
                "Market Intelligence Suite"
            ]
        }
    }
};

// Validation function to ensure consistency
export function validateTaxonomy(): boolean {
    const areas = Object.values(FINANCE_TAXONOMY.structure);

    // Check functional area count
    if (areas.length !== FINANCE_TAXONOMY.functionalAreas) {
        console.error(`Functional area mismatch: Expected ${FINANCE_TAXONOMY.functionalAreas}, got ${areas.length}`);
        return false;
    }

    // Check total activities
    const totalActivities = areas.reduce((sum, area) => sum + area.activityCount, 0);
    if (totalActivities !== FINANCE_TAXONOMY.totalActivities) {
        console.error(`Activity count mismatch: Expected ${FINANCE_TAXONOMY.totalActivities}, got ${totalActivities}`);
        return false;
    }

    // Check total platforms
    const totalPlatforms = areas.reduce((sum, area) => sum + area.platformCount, 0);
    if (totalPlatforms !== FINANCE_TAXONOMY.totalPlatforms) {
        console.error(`Platform count mismatch: Expected ${FINANCE_TAXONOMY.totalPlatforms}, got ${totalPlatforms}`);
        return false;
    }

    // Verify each area's counts match
    for (const [areaName, area] of Object.entries(FINANCE_TAXONOMY.structure)) {
        if (area.activities.length !== area.activityCount) {
            console.error(`${areaName}: Activity count mismatch`);
            return false;
        }
        if (area.platforms.length !== area.platformCount) {
            console.error(`${areaName}: Platform count mismatch`);
            return false;
        }
    }

    return true;
}

// Run validation
console.log('Finance Taxonomy Validation:', validateTaxonomy() ? 'PASSED ✓' : 'FAILED ✗'); 