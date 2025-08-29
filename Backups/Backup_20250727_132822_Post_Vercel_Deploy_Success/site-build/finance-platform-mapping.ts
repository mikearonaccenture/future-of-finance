// Finance Activities to Platform Mapping Analysis
// This maps all activities from the finance taxonomy to our existing platforms

export interface PlatformMapping {
    activity: string;
    subActivities: string[];
    currentPlatform?: string;
    suggestedPlatform?: string;
    platformGap: boolean;
    aiAgentsRequired: string[];
}

export interface PlatformCoverage {
    platform: string;
    description: string;
    activitiesCovered: string[];
    percentageCoverage: number;
    status: 'live' | 'planned' | 'proposed' | 'coming-soon';
}

// Define platform types as constants for consistency
export const EXISTING_PLATFORMS = {
    // Procure to Pay Platforms (2 platforms)
    INTELLIGENT_INVOICE: 'Intelligent Invoice Processing Platform',
    SUPPLIER_COLLABORATION: 'Supplier Collaboration Platform',

    // Order to Cash Platforms (2 platforms)
    INTELLIGENT_RECEIVABLES: 'Intelligent Receivables Platform',
    CUSTOMER_EXPERIENCE: 'Customer Experience Portal',

    // Cost Accounting Platforms (2 platforms)
    DYNAMIC_COST_ENGINE: 'Dynamic Cost Engine',
    PROFITABILITY_ANALYTICS: 'Profitability Analytics Platform',

    // Controllership Platforms (4 platforms)
    CONTINUOUS_CLOSE: 'Continuous Close Platform',
    CONTROL_COMPLIANCE: 'Control & Compliance Suite',
    REGULATORY_INTELLIGENCE: 'Regulatory Intelligence Platform',
    STATUTORY_REPORTING_HUB: 'Statutory Reporting Hub',

    // Corporate Finance Platforms (3 platforms)
    TAX_INTELLIGENCE: 'Tax Intelligence Platform',
    TREASURY_COMMAND: 'Treasury Command Center',
    RISK_ANALYTICS: 'Risk & Analytics Suite',

    // FP&A Platforms (2 platforms)
    CONNECTED_ENTERPRISE: 'Connected Enterprise Planning Platform',
    MANAGEMENT_REPORTING: 'Management Reporting Platform',

    // Investor Relations Platforms (2 platforms)
    INVESTOR_INTELLIGENCE: 'Investor Intelligence Platform',
    MARKET_INTELLIGENCE: 'Market Intelligence Suite'
} as const;

// Complete Activity Mapping based on Finance Taxonomy
export const ACTIVITY_TO_PLATFORM_MAPPING: PlatformMapping[] = [
    // PROCURE TO PAY
    {
        activity: 'Invoice to Pay',
        subActivities: ['Receipt & Scanning', 'Invoice Processing', 'Payment Processing'],
        currentPlatform: EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
        suggestedPlatform: undefined,
        platformGap: false,
        aiAgentsRequired: ['IC', 'IP', 'IV', 'IE', 'PP', 'PS', 'PR']
    },
    {
        activity: 'Vendor Statement Reconciliation',
        subActivities: ['Statement matching', 'Dispute resolution'],
        currentPlatform: EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
        suggestedPlatform: undefined,
        platformGap: false,
        aiAgentsRequired: ['SR', 'VS', 'DH']
    },
    {
        activity: 'Accounts Payable Reconciliation',
        subActivities: ['AP ledger maintenance', 'Reconciliation'],
        currentPlatform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        platformGap: false,
        aiAgentsRequired: ['AP', 'BR', 'AC']
    },
    {
        activity: 'Procurement Card Administration',
        subActivities: ['Card management', 'Transaction monitoring'],
        currentPlatform: EXISTING_PLATFORMS.SUPPLIER_COLLABORATION,
        suggestedPlatform: undefined,
        platformGap: false,
        aiAgentsRequired: ['PC', 'PM']
    },
    {
        activity: 'Travel & Expense Administration',
        subActivities: ['Expense processing', 'Policy compliance'],
        currentPlatform: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        suggestedPlatform: undefined,
        platformGap: false,
        aiAgentsRequired: ['TE', 'EA', 'ER']
    },
    {
        activity: 'AP Reporting & Analytics',
        subActivities: ['Spend analysis', 'Vendor analytics'],
        currentPlatform: EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS,
        platformGap: false,
        aiAgentsRequired: ['AR', 'SA', 'RT']
    },
    {
        activity: 'Invoice to Pay Support Help Desk',
        subActivities: ['Query resolution', 'Process support'],
        currentPlatform: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        suggestedPlatform: undefined,
        platformGap: false,
        aiAgentsRequired: ['IH', 'HL']
    },

    // ORDER TO CASH
    {
        activity: 'Receivable Management',
        subActivities: ['Credit Management', 'Collections'],
        currentPlatform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        suggestedPlatform: undefined,
        platformGap: false,
        aiAgentsRequired: ['CA', 'CM', 'CR']
    },
    {
        activity: 'Manage Customer Billing',
        subActivities: ['Invoice generation', 'Billing cycles'],
        currentPlatform: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        suggestedPlatform: undefined,
        platformGap: false,
        aiAgentsRequired: ['IG', 'BA', 'IB']
    },
    {
        activity: 'Collections & Disputes Management',
        subActivities: ['Collection strategy', 'Dispute resolution'],
        currentPlatform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        suggestedPlatform: undefined,
        platformGap: false,
        aiAgentsRequired: ['CM', 'CC', 'DM']
    },
    {
        activity: 'Deductions Management',
        subActivities: ['Deduction processing', 'Root cause analysis'],
        currentPlatform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        suggestedPlatform: undefined,
        platformGap: false,
        aiAgentsRequired: ['DD', 'DR', 'DC']
    },
    {
        activity: 'Maintain AR Ledger and Apply Cash',
        subActivities: ['Cash application', 'AR maintenance'],
        currentPlatform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        platformGap: false,
        aiAgentsRequired: ['ML', 'CA', 'CR']
    },
    {
        activity: 'Manage Customer Requests & Inquiries',
        subActivities: ['Query handling', 'Service requests'],
        currentPlatform: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        suggestedPlatform: undefined,
        platformGap: false,
        aiAgentsRequired: ['CQ', 'CS']
    },
    {
        activity: 'Order Modifications',
        subActivities: ['Order changes', 'Cancellations'],
        currentPlatform: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        platformGap: false,
        aiAgentsRequired: ['OM', 'OC']
    },
    {
        activity: 'Revenue Assurance',
        subActivities: ['Revenue validation', 'Leak detection'],
        currentPlatform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        platformGap: false,
        aiAgentsRequired: ['RV', 'RA']
    },

    // COST ACCOUNTING
    {
        activity: 'Product Costing',
        subActivities: ['Standard costing', 'Activity-based costing'],
        currentPlatform: EXISTING_PLATFORMS.DYNAMIC_COST_ENGINE,
        platformGap: false,
        aiAgentsRequired: ['CC', 'SC', 'AB']
    },
    {
        activity: 'Product & Service Costing',
        subActivities: ['Service line costing', 'Profitability analysis'],
        currentPlatform: EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS,
        platformGap: false,
        aiAgentsRequired: ['PS', 'PA', 'SC']
    },
    {
        activity: 'Inventory Accounting',
        subActivities: ['Inventory valuation', 'Cost of goods sold'],
        currentPlatform: EXISTING_PLATFORMS.DYNAMIC_COST_ENGINE,
        platformGap: false,
        aiAgentsRequired: ['IA', 'IC']
    },

    // CONTROLLERSHIP (RECORD TO REPORT)
    {
        activity: 'General Accounting',
        subActivities: ['GL maintenance', 'Journal entries'],
        currentPlatform: EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB,
        platformGap: false,
        aiAgentsRequired: ['GA', 'JE', 'GL']
    },
    {
        activity: 'Cash Management and Banking',
        subActivities: ['Bank reconciliation', 'Cash positioning'],
        currentPlatform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        platformGap: false,
        aiAgentsRequired: ['CM', 'BR']
    },
    {
        activity: 'Intercompany Accounting',
        subActivities: ['IC reconciliation', 'Netting'],
        currentPlatform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        platformGap: false,
        aiAgentsRequired: ['IA', 'IR', 'NM']
    },
    {
        activity: 'Asset Accounting',
        subActivities: ['Fixed assets', 'Depreciation'],
        currentPlatform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        platformGap: false,
        aiAgentsRequired: ['AA', 'FA']
    },
    {
        activity: 'Lease Accounting',
        subActivities: ['Lease classification', 'ROU assets'],
        currentPlatform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        platformGap: false,
        aiAgentsRequired: ['LA']
    },
    {
        activity: 'Partner and Revenue Accounting',
        subActivities: ['Revenue recognition', 'Partner settlements'],
        currentPlatform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        platformGap: false,
        aiAgentsRequired: ['RR', 'RV']
    },
    {
        activity: 'Project Accounting',
        subActivities: ['Project tracking', 'WIP management'],
        currentPlatform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        platformGap: false,
        aiAgentsRequired: ['PA', 'PR']
    },
    {
        activity: 'Period Close',
        subActivities: ['Close tasks', 'Reconciliations', 'Reporting'],
        currentPlatform: EXISTING_PLATFORMS.CONTINUOUS_CLOSE,
        platformGap: false,
        aiAgentsRequired: ['CC', 'CT', 'FP']
    },
    {
        activity: 'Perform Financial Reporting',
        subActivities: ['Statement preparation', 'Disclosures'],
        currentPlatform: EXISTING_PLATFORMS.MANAGEMENT_REPORTING,
        platformGap: false,
        aiAgentsRequired: ['RG', 'FS', 'IG']
    },
    {
        activity: 'BS Reconciliation & Analytics',
        subActivities: ['Balance sheet recs', 'Account analysis'],
        currentPlatform: EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB,
        platformGap: false,
        aiAgentsRequired: ['BR', 'BT', 'RL']
    },
    {
        activity: 'Perform Joint Venture Accounting',
        subActivities: ['JV calculations', 'Partner billing'],
        currentPlatform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        platformGap: false,
        aiAgentsRequired: ['JV']
    },
    {
        activity: 'Manage Policy, Controls and Referencing',
        subActivities: ['Policy management', 'Control framework'],
        currentPlatform: EXISTING_PLATFORMS.REGULATORY_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['PC', 'CF']
    },
    {
        activity: 'Group Reporting & Consolidations',
        subActivities: ['Consolidation', 'Group reporting'],
        currentPlatform: EXISTING_PLATFORMS.REGULATORY_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['GR', 'CO']
    },
    {
        activity: 'Financial Statements & Disclosures',
        subActivities: ['Statement preparation', 'Disclosure notes'],
        currentPlatform: EXISTING_PLATFORMS.REGULATORY_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['FS', 'DN']
    },
    {
        activity: 'Statutory and GAAP Reporting Adjustments',
        subActivities: ['Adjustments', 'Reconciliations'],
        currentPlatform: EXISTING_PLATFORMS.REGULATORY_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['SA', 'GR']
    },
    {
        activity: 'Statutory Reporting',
        subActivities: ['Local statutory reporting', 'Compliance'],
        currentPlatform: EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB,
        platformGap: false,
        aiAgentsRequired: ['SR', 'SC']
    },
    {
        activity: 'Regulatory Reporting',
        subActivities: ['Regulatory filings', 'Compliance'],
        currentPlatform: EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB,
        platformGap: false,
        aiAgentsRequired: ['RR', 'RF']
    },
    {
        activity: 'Audit & Response Management',
        subActivities: ['Audit coordination', 'Response management'],
        currentPlatform: EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB,
        platformGap: false,
        aiAgentsRequired: ['AM', 'RM']
    },

    // CORPORATE FINANCE
    {
        activity: 'Manage Tax Planning and Strategy',
        subActivities: ['Structure optimization', 'Transfer pricing'],
        currentPlatform: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['TP', 'FT']
    },
    {
        activity: 'Manage Direct Tax',
        subActivities: ['Income tax', 'Corporate tax'],
        currentPlatform: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['DT', 'CT']
    },
    {
        activity: 'Manage Indirect Tax',
        subActivities: ['VAT/GST', 'Sales tax'],
        currentPlatform: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['IT', 'ST']
    },
    {
        activity: 'Manage Transfer Pricing',
        subActivities: ['TP documentation', 'Benchmarking'],
        currentPlatform: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['TP', 'BM']
    },
    {
        activity: 'Manage Digital Tax Compliance',
        subActivities: ['Digital tax', 'E-filing'],
        currentPlatform: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['DT', 'EF']
    },
    {
        activity: 'Manage Interactions with Authorities',
        subActivities: ['Tax audits', 'Disputes'],
        currentPlatform: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['TA', 'TD']
    },
    {
        activity: 'Manage Tax Function Governance',
        subActivities: ['Tax controls', 'Risk management'],
        currentPlatform: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['TG', 'TR']
    },
    {
        activity: 'Treasury Operating Model & Governance',
        subActivities: ['Policy management', 'Controls'],
        currentPlatform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        platformGap: false,
        aiAgentsRequired: ['TO', 'SE']
    },
    {
        activity: 'Bank Relationship Management',
        subActivities: ['Bank fees', 'Service management'],
        currentPlatform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        platformGap: false,
        aiAgentsRequired: ['BR', 'BG']
    },
    {
        activity: 'Cash and Liquidity Management',
        subActivities: ['Cash forecasting', 'Liquidity planning'],
        currentPlatform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        platformGap: false,
        aiAgentsRequired: ['CF', 'LP', 'LC']
    },
    {
        activity: 'Investment Management',
        subActivities: ['Portfolio management', 'Performance tracking'],
        currentPlatform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        platformGap: false,
        aiAgentsRequired: ['IM', 'VA', 'PO']
    },
    {
        activity: 'Debt Management',
        subActivities: ['Debt issuance', 'Covenant monitoring'],
        currentPlatform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        platformGap: false,
        aiAgentsRequired: ['DM', 'CC', 'BC']
    },
    {
        activity: 'Treasury Accounting',
        subActivities: ['FX accounting', 'Derivative accounting'],
        currentPlatform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        platformGap: false,
        aiAgentsRequired: ['TA', 'DA']
    },
    {
        activity: 'Financial Risk Management',
        subActivities: ['FX hedging', 'Interest rate risk'],
        currentPlatform: EXISTING_PLATFORMS.RISK_ANALYTICS,
        platformGap: false,
        aiAgentsRequired: ['FH', 'IH', 'CH', 'RA']
    },
    {
        activity: 'Treasury KPI Reporting and Analytics',
        subActivities: ['Treasury metrics', 'Performance analysis'],
        currentPlatform: EXISTING_PLATFORMS.RISK_ANALYTICS,
        platformGap: false,
        aiAgentsRequired: ['KR', 'PA']
    },

    // FP&A
    {
        activity: 'Financial Planning and Analysis',
        subActivities: ['Planning', 'Analysis', 'Reporting'],
        currentPlatform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        platformGap: false,
        aiAgentsRequired: ['DG', 'PA', 'VA']
    },
    {
        activity: 'Strategic or LR Planning',
        subActivities: ['Long-range planning', 'Strategic initiatives'],
        currentPlatform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        platformGap: false,
        aiAgentsRequired: ['SP', 'SA', 'SG']
    },
    {
        activity: 'Integrated Enterprise Planning',
        subActivities: ['Cross-functional planning', 'Scenario modeling'],
        currentPlatform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        platformGap: false,
        aiAgentsRequired: ['IE', 'SM', 'OA']
    },
    {
        activity: 'Budgeting',
        subActivities: ['Annual budgets', 'Department budgets'],
        currentPlatform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        platformGap: false,
        aiAgentsRequired: ['BM', 'BP', 'ZB']
    },
    {
        activity: 'Dynamic Forecasting',
        subActivities: ['Rolling forecasts', 'Driver-based planning'],
        currentPlatform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        platformGap: false,
        aiAgentsRequired: ['DF', 'RF', 'DB']
    },
    {
        activity: 'Decision Support & Modelling',
        subActivities: ['What-if analysis', 'Business cases'],
        currentPlatform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        platformGap: false,
        aiAgentsRequired: ['DS', 'WA', 'MC']
    },
    {
        activity: 'Reporting & Analysis',
        subActivities: ['Management reporting', 'Variance analysis'],
        currentPlatform: EXISTING_PLATFORMS.MANAGEMENT_REPORTING,
        platformGap: false,
        aiAgentsRequired: ['RP', 'MR', 'VA']
    },

    // INVESTOR RELATIONS
    {
        activity: 'Investor Relations',
        subActivities: ['Earnings calls', 'Investor communications'],
        currentPlatform: EXISTING_PLATFORMS.INVESTOR_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['EC', 'PM', 'WM']
    },
    {
        activity: 'Quarterly Earnings',
        subActivities: ['Earnings prep', 'Release management'],
        currentPlatform: EXISTING_PLATFORMS.INVESTOR_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['EC', 'ER', 'QP']
    },
    {
        activity: 'Competitive Intelligence',
        subActivities: ['Peer analysis', 'Market monitoring'],
        currentPlatform: EXISTING_PLATFORMS.MARKET_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['CI', 'PC', 'MS']
    },
    {
        activity: 'Stock Surveillance',
        subActivities: ['Price monitoring', 'Trading analysis'],
        currentPlatform: EXISTING_PLATFORMS.MARKET_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['SC', 'SV', 'TD']
    },
    {
        activity: 'Investment Community Relationship Mgmt',
        subActivities: ['Analyst relations', 'Investor targeting'],
        currentPlatform: EXISTING_PLATFORMS.MARKET_INTELLIGENCE,
        platformGap: false,
        aiAgentsRequired: ['IC', 'AC', 'TA']
    }
];

// Platform Coverage Analysis
export const PLATFORM_COVERAGE: PlatformCoverage[] = [
    // P2P Platforms
    {
        platform: EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
        description: 'Touchless invoice processing from receipt to payment',
        activitiesCovered: [
            'Invoice to Pay',
            'Vendor Statement Reconciliation'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },
    {
        platform: EXISTING_PLATFORMS.SUPPLIER_COLLABORATION,
        description: 'AI-enabled supplier engagement and optimization',
        activitiesCovered: [
            'Procurement Card Administration'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },

    // O2C Platforms
    {
        platform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        description: 'AI-driven credit to cash optimization',
        activitiesCovered: [
            'Receivable Management',
            'Collections & Disputes Management',
            'Deductions Management'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },
    {
        platform: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        description: 'Self-service billing and payment platform',
        activitiesCovered: [
            'Travel & Expense Administration',
            'Invoice to Pay Support Help Desk',
            'Manage Customer Requests & Inquiries',
            'Manage Customer Billing'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },

    // Cost Accounting Platforms
    {
        platform: EXISTING_PLATFORMS.DYNAMIC_COST_ENGINE,
        description: 'Living cost models that update continuously',
        activitiesCovered: [
            'Product Costing',
            'Inventory Accounting'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },
    {
        platform: EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS,
        description: 'True margin visibility at every level',
        activitiesCovered: [
            'Product & Service Costing',
            'AP Reporting & Analytics'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },

    // Controllership Platforms
    {
        platform: EXISTING_PLATFORMS.CONTINUOUS_CLOSE,
        description: 'Transform month-end from marathon to sprint',
        activitiesCovered: [
            'Period Close'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },
    {
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        description: 'Proactive risk management and audit readiness',
        activitiesCovered: [
            'Accounts Payable Reconciliation',
            'Maintain AR Ledger and Apply Cash',
            'Revenue Assurance',
            'Intercompany Accounting',
            'Asset Accounting',
            'Lease Accounting',
            'Partner and Revenue Accounting',
            'Project Accounting',
            'Perform Joint Venture Accounting'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },
    {
        platform: EXISTING_PLATFORMS.REGULATORY_INTELLIGENCE,
        description: 'Policy, controls, and group reporting management',
        activitiesCovered: [
            'Manage Policy, Controls and Referencing',
            'Group Reporting & Consolidations',
            'Financial Statements & Disclosures',
            'Statutory and GAAP Reporting Adjustments'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },
    {
        platform: EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB,
        description: 'From close to disclosure in hours, not days',
        activitiesCovered: [
            'General Accounting',
            'Perform Financial Reporting',
            'BS Reconciliation & Analytics',
            'Statutory Reporting',
            'Regulatory Reporting',
            'Audit & Response Management'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },

    // Corporate Finance Platforms
    {
        platform: EXISTING_PLATFORMS.TREASURY_COMMAND,
        description: 'AI-driven cash and liquidity optimization',
        activitiesCovered: [
            'Cash Management and Banking',
            'Treasury',
            'Treasury Operating Model & Governance',
            'Bank Relationship Management',
            'Cash and Liquidity Management',
            'Investment Management',
            'Debt Management'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },
    {
        platform: EXISTING_PLATFORMS.TAX_INTELLIGENCE,
        description: 'Strategic tax planning and compliance automation',
        activitiesCovered: [
            'Tax',
            'Manage Tax Planning and Strategy'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },
    {
        platform: EXISTING_PLATFORMS.RISK_ANALYTICS,
        description: 'Proactive identification and mitigation',
        activitiesCovered: [
            'Financial Risk Management'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },

    // FP&A Platforms
    {
        platform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        description: 'A unified workspace for all planning activities',
        activitiesCovered: [
            'Financial Planning and Analysis',
            'Strategic or LR Planning',
            'Integrated Enterprise Planning',
            'Budgeting',
            'Dynamic Forecasting',
            'Decision Support & Modelling'
        ],
        percentageCoverage: 100,
        status: 'live'
    },
    {
        platform: EXISTING_PLATFORMS.MANAGEMENT_REPORTING,
        description: 'Transform data into actionable insights with AI-driven analytics',
        activitiesCovered: [
            'Reporting & Analysis'
        ],
        percentageCoverage: 100,
        status: 'live'
    },

    // Investor Relations Platforms
    {
        platform: EXISTING_PLATFORMS.INVESTOR_INTELLIGENCE,
        description: 'From prep to presentation in record time',
        activitiesCovered: [
            'Investor Relations',
            'Quarterly Earnings'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },
    {
        platform: EXISTING_PLATFORMS.MARKET_INTELLIGENCE,
        description: '24/7 intelligent investor communication',
        activitiesCovered: [
            'Competitive Intelligence',
            'Stock Surveillance',
            'Investment Community Relationship Mgmt'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    },
    {
        platform: EXISTING_PLATFORMS.MARKET_INTELLIGENCE,
        description: 'Stay ahead of market movements',
        activitiesCovered: [
            'Competitive Intelligence',
            'Stock Surveillance'
        ],
        percentageCoverage: 100,
        status: 'coming-soon'
    }
];

// Gap Analysis
export function analyzePlatformGaps() {
    const totalActivities = ACTIVITY_TO_PLATFORM_MAPPING.length;
    const activitiesWithPlatforms = ACTIVITY_TO_PLATFORM_MAPPING.filter(a => !a.platformGap).length;
    const activitiesWithoutPlatforms = ACTIVITY_TO_PLATFORM_MAPPING.filter(a => a.platformGap).length;

    const gapsByFunction = {
        'Intelligent Invoice': ACTIVITY_TO_PLATFORM_MAPPING.filter(a =>
            a.suggestedPlatform === EXISTING_PLATFORMS.INTELLIGENT_INVOICE && a.platformGap).length,
        'Employee Experience': ACTIVITY_TO_PLATFORM_MAPPING.filter(a =>
            a.suggestedPlatform === EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE && a.platformGap).length,
        'Revenue Operations': ACTIVITY_TO_PLATFORM_MAPPING.filter(a =>
            a.suggestedPlatform === EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS && a.platformGap).length,
        'Working Capital': ACTIVITY_TO_PLATFORM_MAPPING.filter(a =>
            a.suggestedPlatform === EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES && a.platformGap).length,
        'Cost Accounting': 0,
        'Controllership': 0,
        'Corporate Finance': 0,
        'FP&A': 0,
        'Investor Relations': 0
    };

    return {
        totalActivities,
        activitiesWithPlatforms,
        activitiesWithoutPlatforms,
        coveragePercentage: (activitiesWithPlatforms / totalActivities) * 100,
        gapsByFunction,
        missingPlatforms: [EXISTING_PLATFORMS.INTELLIGENT_INVOICE, EXISTING_PLATFORMS.SUPPLIER_COLLABORATION, EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES, EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE, EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS, EXISTING_PLATFORMS.CONTINUOUS_CLOSE, EXISTING_PLATFORMS.CONTROL_COMPLIANCE, EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB, EXISTING_PLATFORMS.TAX_INTELLIGENCE, EXISTING_PLATFORMS.TREASURY_COMMAND, EXISTING_PLATFORMS.RISK_ANALYTICS, EXISTING_PLATFORMS.CONNECTED_ENTERPRISE, EXISTING_PLATFORMS.MANAGEMENT_REPORTING, EXISTING_PLATFORMS.INVESTOR_INTELLIGENCE, EXISTING_PLATFORMS.MARKET_INTELLIGENCE]
    };
}

// Get activities by platform
export function getActivitiesByPlatform(platformName: string): string[] {
    return ACTIVITY_TO_PLATFORM_MAPPING
        .filter(mapping =>
            mapping.currentPlatform === platformName ||
            mapping.suggestedPlatform === platformName
        )
        .map(mapping => mapping.activity);
}

// Get AI agents required by platform
export function getAIAgentsByPlatform(platformName: string): string[] {
    const agentSet = new Set<string>();

    ACTIVITY_TO_PLATFORM_MAPPING
        .filter(mapping =>
            mapping.currentPlatform === platformName ||
            mapping.suggestedPlatform === platformName
        )
        .forEach(mapping => {
            mapping.aiAgentsRequired.forEach(agent => agentSet.add(agent));
        });

    return Array.from(agentSet);
} 