// 14 Automotive Business Dimensions for Business Insight Consoles

export const automotiveBusinessDimensions = [
    // Commercial Performance (4 consoles)
    {
        id: 'market-demand',
        name: 'Market & Demand Intelligence',
        category: 'Commercial Performance',
        description: 'Market share, segment trends, regional performance, and competitive positioning',
        icon: 'Globe',
        color: 'from-blue-500 to-blue-600',
        metrics: ['Market Share %', 'Segment Growth', 'Regional Mix', 'Dealer Network'],
        focusAreas: [
            'Market share by segment (SUV, Sedan, EV, Luxury)',
            'Regional demand patterns and forecasting',
            'Dealer performance and inventory',
            'Competitive market analysis',
            'Customer demographics and preferences'
        ]
    },
    {
        id: 'product-portfolio',
        name: 'Product Portfolio Performance',
        category: 'Commercial Performance',
        description: 'Product mix optimization, lifecycle management, and new model performance',
        icon: 'Package',
        color: 'from-purple-500 to-purple-600',
        metrics: ['Model Mix %', 'Launch Success Rate', 'Portfolio Profitability', 'Take Rate'],
        focusAreas: [
            'Model performance by segment',
            'Feature and option take rates',
            'Product lifecycle stage analysis',
            'New model launch tracking',
            'Trim level optimization'
        ]
    },
    {
        id: 'volume-production',
        name: 'Volume & Production Planning',
        category: 'Commercial Performance',
        description: 'Sales volume, production capacity, and demand-supply optimization',
        icon: 'TrendingUp',
        color: 'from-green-500 to-green-600',
        metrics: ['Units Sold', 'Production Capacity', 'Days Supply', 'Fill Rate'],
        focusAreas: [
            'Sales volume by model and region',
            'Production capacity utilization',
            'Demand-supply matching',
            'Inventory optimization',
            'Sales forecast accuracy'
        ]
    },
    {
        id: 'pricing-revenue',
        name: 'Pricing & Revenue Management',
        category: 'Commercial Performance',
        description: 'Pricing strategy, incentives, revenue per unit, and margin optimization',
        icon: 'DollarSign',
        color: 'from-emerald-500 to-emerald-600',
        metrics: ['ATP (Average Transaction Price)', 'Incentive Spend', 'Revenue/Unit', 'Price Realization'],
        focusAreas: [
            'Average transaction price trends',
            'Incentive effectiveness',
            'Regional pricing strategies',
            'Competitive pricing analysis',
            'Revenue optimization opportunities'
        ]
    },

    // Operational Performance (4 consoles)
    {
        id: 'manufacturing-quality',
        name: 'Manufacturing & Quality Excellence',
        category: 'Operational Performance',
        description: 'Production efficiency, quality metrics, and manufacturing performance',
        icon: 'Factory',
        color: 'from-orange-500 to-orange-600',
        metrics: ['OEE', 'Quality Score', 'PPM', 'First Pass Yield'],
        focusAreas: [
            'Overall Equipment Effectiveness (OEE)',
            'Quality metrics (PPM, warranty claims)',
            'Production line efficiency',
            'Labor productivity',
            'Manufacturing cost per unit'
        ]
    },
    {
        id: 'supply-chain',
        name: 'Supply Chain Resilience',
        category: 'Operational Performance',
        description: 'Supplier performance, parts availability, logistics, and risk management',
        icon: 'Truck',
        color: 'from-indigo-500 to-indigo-600',
        metrics: ['Parts Availability', 'Supplier Score', 'Logistics Cost', 'Lead Time'],
        focusAreas: [
            'Supplier performance and risk',
            'Parts availability and shortages',
            'Logistics optimization',
            'Supply chain costs',
            'Alternative sourcing strategies'
        ]
    },
    {
        id: 'aftermarket-services',
        name: 'Aftermarket & Services',
        category: 'Operational Performance',
        description: 'Parts sales, service revenue, warranty performance, and customer retention',
        icon: 'Wrench',
        color: 'from-amber-500 to-amber-600',
        metrics: ['Service Revenue', 'Parts Sales', 'Warranty Cost', 'Service Retention'],
        focusAreas: [
            'Parts and accessories revenue',
            'Service center performance',
            'Warranty cost management',
            'Customer service retention',
            'Connected services adoption'
        ]
    },
    {
        id: 'digital-innovation',
        name: 'Digital & Mobility Services',
        category: 'Operational Performance',
        description: 'Connected services, digital sales, mobility solutions, and technology adoption',
        icon: 'Smartphone',
        color: 'from-cyan-500 to-cyan-600',
        metrics: ['Digital Revenue', 'Connected Vehicles', 'App Adoption', 'Service Subscriptions'],
        focusAreas: [
            'Connected vehicle services',
            'Digital sales channels',
            'Mobility service offerings',
            'Software update adoption',
            'Digital customer engagement'
        ]
    },

    // Financial Performance (3 consoles)
    {
        id: 'financial-results',
        name: 'Financial Results & Performance',
        category: 'Financial Performance',
        description: 'P&L performance, cash flow, working capital, and financial KPIs',
        icon: 'BarChart3',
        color: 'from-red-500 to-red-600',
        metrics: ['Revenue', 'EBIT Margin', 'Free Cash Flow', 'ROIC'],
        focusAreas: [
            'Revenue and profitability trends',
            'Cost structure optimization',
            'Cash flow management',
            'Working capital efficiency',
            'Financial forecast accuracy'
        ]
    },
    {
        id: 'capital-allocation',
        name: 'Capital Allocation & Investment',
        category: 'Financial Performance',
        description: 'Capex efficiency, R&D investments, M&A activity, and shareholder returns',
        icon: 'Building',
        color: 'from-violet-500 to-violet-600',
        metrics: ['Capex/Revenue', 'R&D Spend', 'ROI', 'Dividend Yield'],
        focusAreas: [
            'Capital expenditure efficiency',
            'R&D investment returns',
            'Manufacturing footprint optimization',
            'Strategic acquisitions',
            'Shareholder value creation'
        ]
    },
    {
        id: 'cost-productivity',
        name: 'Cost Management & Productivity',
        category: 'Financial Performance',
        description: 'Cost reduction initiatives, productivity improvements, and efficiency gains',
        icon: 'TrendingDown',
        color: 'from-pink-500 to-pink-600',
        metrics: ['Cost/Vehicle', 'Labor Productivity', 'Material Cost', 'Overhead Rate'],
        focusAreas: [
            'Variable cost reduction',
            'Fixed cost optimization',
            'Labor productivity improvements',
            'Material cost management',
            'Overhead efficiency'
        ]
    },

    // Risk & Strategic (3 consoles)
    {
        id: 'risk-compliance',
        name: 'Risk & Compliance Management',
        category: 'Risk & Strategic',
        description: 'Enterprise risk, regulatory compliance, safety standards, and governance',
        icon: 'Shield',
        color: 'from-gray-500 to-gray-600',
        metrics: ['Risk Score', 'Compliance Rate', 'Safety Rating', 'Audit Findings'],
        focusAreas: [
            'Regulatory compliance (emissions, safety)',
            'Enterprise risk assessment',
            'Cybersecurity threats',
            'Product recall management',
            'ESG compliance and reporting'
        ]
    },
    {
        id: 'competitive-intelligence',
        name: 'Competitive Intelligence & Strategy',
        category: 'Risk & Strategic',
        description: 'Competitor analysis, market positioning, strategic threats and opportunities',
        icon: 'Target',
        color: 'from-teal-500 to-teal-600',
        metrics: ['Relative Market Share', 'Product Competitiveness', 'Price Position', 'Tech Leadership'],
        focusAreas: [
            'Competitor product analysis',
            'Market share movements',
            'Technology benchmarking',
            'Pricing competitiveness',
            'Strategic partnership opportunities'
        ]
    },
    {
        id: 'sustainability-esg',
        name: 'Sustainability & ESG Performance',
        category: 'Risk & Strategic',
        description: 'Environmental impact, social responsibility, EV transition, and sustainability goals',
        icon: 'Leaf',
        color: 'from-green-600 to-green-700',
        metrics: ['Carbon Footprint', 'EV Mix %', 'Renewable Energy %', 'ESG Score'],
        focusAreas: [
            'Carbon emission reduction',
            'EV transition progress',
            'Sustainable manufacturing',
            'Social impact initiatives',
            'ESG ratings and reporting'
        ]
    }
];

// Console structure template for each dimension
export const consoleStructure = {
    pages: [
        {
            id: 'executive-summary',
            name: 'Executive Summary',
            description: 'High-level KPIs, trends, and AI-driven insights'
        },
        {
            id: 'business-narrative',
            name: 'Business Narrative',
            description: 'Contextual analysis and strategic implications'
        },
        {
            id: 'analytics-dashboard',
            name: 'Analytics Dashboard',
            description: 'Interactive visualizations and deep-dive analytics'
        },
        {
            id: 'data-views',
            name: 'Data Views',
            description: 'Detailed tables, reports, and data exploration'
        },
        {
            id: 'custom-analysis',
            name: 'Custom Analysis',
            description: 'User-defined views and ad-hoc analysis tools'
        }
    ],

    // Standard components for each console
    components: {
        executiveSummary: [
            'Key Metrics Cards',
            'Trend Analysis',
            'AI Insights & Recommendations',
            'Performance vs Targets',
            'Risk Indicators'
        ],
        businessNarrative: [
            'Monthly Commentary',
            'Strategic Implications',
            'Action Items',
            'Success Stories',
            'Challenge Areas'
        ],
        analytics: [
            'Time Series Charts',
            'Comparative Analysis',
            'Correlation Matrix',
            'Predictive Models',
            'Scenario Planning'
        ],
        dataViews: [
            'Detailed Tables',
            'Pivot Analysis',
            'Export Capabilities',
            'Drill-down Features',
            'Custom Filters'
        ]
    }
};

// Helper function to get console by ID
export function getBusinessConsole(id: string) {
    return automotiveBusinessDimensions.find(console => console.id === id);
}

// Helper function to get consoles by category
export function getConsolesByCategory(category: string) {
    return automotiveBusinessDimensions.filter(console => console.category === category);
}

// Categories for grouping
export const consoleCategories = [
    {
        name: 'Commercial Performance',
        count: 4,
        description: 'Market position, product performance, and revenue optimization'
    },
    {
        name: 'Operational Performance',
        count: 4,
        description: 'Manufacturing, supply chain, and operational excellence'
    },
    {
        name: 'Financial Performance',
        count: 3,
        description: 'Financial results, capital efficiency, and cost management'
    },
    {
        name: 'Risk & Strategic',
        count: 3,
        description: 'Risk management, competitive position, and sustainability'
    }
]; 