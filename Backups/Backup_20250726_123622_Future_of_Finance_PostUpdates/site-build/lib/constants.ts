export const FINANCE_TAXONOMY = {
    procureToPay: {
        name: "Procure to Pay",
        icon: "🛒",
        description: "Intelligent automation that streamlines purchasing and payments while preventing fraud.",
        activities: [
            "Invoice to Pay",
            "Receipt & Scanning",
            "Invoice Processing",
            "Payment Processing",
            "Vendor Statement Reconciliation",
            "Accounts Payable Reconciliation",
            "Procurement Card Administration",
            "Travel & Expense Administration",
            "AP Reporting & Analytics",
            "Invoice to Pay Support Help Desk"
        ],
        prototypes: [
            {
                id: "intelligent-ap",
                name: "Intelligent AP Automation",
                status: "concept",
                coverage: ["invoice-processing", "fraud-detection", "automation"]
            }
        ],
        stats: {
            status: "Coming Soon",
            processes: 10
        }
    },
    orderToCash: {
        name: "Order to Cash",
        icon: "💰",
        description: "AI-optimized collections and credit management that maximizes cash flow.",
        activities: [
            "Receivable Management",
            "Credit Management",
            "Product & Service Costing",
            "Manage Customer Billing",
            "Collections & Disputes Management",
            "Maintain AR Ledger and Apply Cash",
            "Deductions Management",
            "Manage Customer Requests & Inquiries",
            "Revenue Assurance Control Management"
        ],
        prototypes: [
            {
                id: "cash-collection-optimizer",
                name: "AI Cash Collection Optimizer",
                status: "concept",
                coverage: ["collections", "credit", "customer-analytics"]
            }
        ],
        stats: {
            status: "Coming Soon",
            processes: 8
        }
    },
    costAccounting: {
        name: "Cost Accounting",
        icon: "💲",
        description: "AI-driven cost management and profitability analysis that optimizes resource allocation.",
        activities: [
            "Product Costing",
            "Product & Service Costing",
            "Inventory Accounting",
            "Cash Management and Banking",
            "Intercompany Accounting",
            "Asset Accounting",
            "Lease Accounting",
            "Partner and Revenue Accounting",
            "Project Accounting"
        ],
        prototypes: [
            {
                id: "smart-costing",
                name: "Smart Cost Allocation Engine",
                status: "concept",
                coverage: ["cost-allocation", "profitability-analysis", "resource-optimization"]
            }
        ],
        stats: {
            status: "Coming Soon",
            processes: 9
        }
    },
    controllership: {
        name: "Controllership",
        icon: "📋",
        description: "Autonomous close processes and intelligent controls that ensure accuracy and compliance.",
        activities: [
            "Record to Report",
            "General Accounting",
            "Cash Management and Banking",
            "Intercompany Accounting",
            "Asset Accounting",
            "Lease Accounting",
            "Partner and Revenue Accounting",
            "Project Accounting",
            "Period Close",
            "Statutory-Regulatory Reporting",
            "Manage Policy, Controls and Reporting",
            "Group Reporting & Consolidations",
            "Financial Statements & Disclosures",
            "Statutory and GAAP Reporting Adjustments",
            "Statutory Reporting",
            "Regulatory Reporting",
            "Audit & Response Management"
        ],
        prototypes: [
            {
                id: "autonomous-close",
                name: "Autonomous Close Platform",
                status: "concept",
                coverage: ["period-close", "reconciliation", "reporting"]
            },
            {
                id: "intelligent-controls",
                name: "Intelligent Controls & Compliance",
                status: "concept",
                coverage: ["controls", "compliance", "audit"]
            }
        ],
        stats: {
            status: "Coming Soon",
            processes: 15
        }
    },
    corporateFinance: {
        name: "Corporate Finance",
        icon: "💼",
        description: "AI-driven tax optimization and treasury management for maximum efficiency.",
        activities: [
            "Tax",
            "Manage Tax Planning and Strategy",
            "Manage Direct Tax",
            "Manage Indirect Tax",
            "Manage Transfer Pricing",
            "Manage Digital Tax Compliance",
            "Manage Interactions with Authorities",
            "Manage Tax Function Governance",
            "Treasury",
            "Treasury Operating Model & Governance",
            "Bank Relationship Management",
            "Cash and Liquidity Management",
            "Investment Management",
            "Debt Management",
            "Treasury Accounting",
            "Financial Risk Management",
            "Treasury KPI Reporting and Analytics"
        ],
        prototypes: [
            {
                id: "tax-optimization",
                name: "AI Tax Optimization Suite",
                status: "concept",
                coverage: ["tax-planning", "transfer-pricing", "compliance"]
            },
            {
                id: "intelligent-treasury",
                name: "Intelligent Treasury Platform",
                status: "concept",
                coverage: ["cash-forecasting", "hedging", "liquidity"]
            }
        ],
        stats: {
            status: "Coming Soon",
            processes: 14
        }
    },
    fpa: {
        name: "FP&A",
        icon: "📊",
        description: "AI-powered planning, forecasting, and analysis that predicts the future with unprecedented accuracy.",
        activities: [
            "Financial Planning and Analysis",
            "Strategic or LR Planning",
            "Integrated Enterprise Planning",
            "Budgeting",
            "Dynamic Forecasting",
            "Decision Support & Modelling",
            "Reporting & Analysis",
            "Data / System Effectiveness & Governance"
        ],
        prototypes: [
            {
                id: "forecasting-platform",
                name: "Integrated Forecasting Platform",
                status: "live",
                coverage: ["planning", "budgeting", "forecasting", "modeling", "analytics"]
            },
            {
                id: "management-reporting",
                name: "Management Reporting Platform",
                status: "live",
                coverage: ["reporting", "analysis", "kpi", "ai-insights", "month-end-close"]
            }
        ],
        stats: {
            prototypesReady: 2,
            processesTransformed: 9
        }
    },
    investorRelations: {
        name: "Investor Relations",
        icon: "📈",
        description: "Predictive analytics and automated insights for superior stakeholder communication.",
        activities: [
            "Investor Relations",
            "Quarterly Earnings",
            "Competitive Intelligence",
            "Stock Surveillance",
            "Investment Community Relationship Mgmt",
            "Marketing & Events"
        ],
        prototypes: [
            {
                id: "investor-intelligence",
                name: "AI Investor Intelligence",
                status: "concept",
                coverage: ["sentiment-analysis", "predictive-qa", "earnings-automation"]
            }
        ],
        stats: {
            status: "Coming Soon",
            processes: 6
        }
    }
};

export const STATS = {
    planningTimeReduction: "90%",
    forecastAccuracy: "24/7",
    insightSpeed: "10x",
    roi: "#1"
};

export const FEATURED_PROTOTYPE = {
    title: "Integrated Forecasting Platform",
    description: "Experience how AI transforms financial planning with our flagship FP&A prototype. See real-time predictions, automated insights, and scenario modeling that adapts as fast as your business changes.",
    features: [
        "AI-powered rolling forecasts with 95% accuracy",
        "Natural language queries for instant insights",
        "Automated scenario generation and analysis",
        "Real-time collaboration across departments",
        "Predictive alerts 30-90 days in advance"
    ],
    demoUrl: "/functions/fpa/forecasting"
}; 