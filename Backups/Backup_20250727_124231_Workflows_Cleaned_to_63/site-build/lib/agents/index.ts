// AI Agent Definitions for Future of Finance Platform

export interface AIAgent {
    id: string;
    name: string;
    title: string;
    description: string;
    capabilities: string[];
    icon: string;
    category: 'forecasting' | 'analysis' | 'automation' | 'insights' | 'risk';
    status: 'active' | 'beta' | 'coming-soon';
    confidence: number;
    specialty: string;
    useCases: string[];
    integrations: string[];
}

export const AI_AGENTS: Record<string, AIAgent> = {
    'forecast-optimizer': {
        id: 'forecast-optimizer',
        name: 'Forecast Optimizer',
        title: 'Predictive Forecasting AI',
        description: 'Advanced ML model that analyzes historical data, market trends, and external factors to generate highly accurate financial forecasts.',
        capabilities: [
            'Real-time forecast generation',
            'Scenario modeling and simulation',
            'Confidence interval calculation',
            'Seasonal pattern recognition',
            'Market trend integration',
            'Risk-adjusted projections'
        ],
        icon: '🎯',
        category: 'forecasting',
        status: 'active',
        confidence: 96,
        specialty: 'Revenue and profit forecasting with 95%+ accuracy',
        useCases: [
            'Annual budget planning',
            'Quarterly forecast updates',
            'Revenue pipeline prediction',
            'Cash flow forecasting',
            'Market expansion modeling'
        ],
        integrations: ['Salesforce', 'SAP', 'Oracle', 'PowerBI', 'Snowflake']
    },

    'variance-detective': {
        id: 'variance-detective',
        name: 'Variance Detective',
        title: 'Automated Variance Analysis',
        description: 'AI-powered variance analysis that automatically identifies deviations, root causes, and recommends corrective actions.',
        capabilities: [
            'Automated variance detection',
            'Root cause analysis',
            'Impact quantification',
            'Corrective action recommendations',
            'Trend pattern analysis',
            'Anomaly detection'
        ],
        icon: '🔍',
        category: 'analysis',
        status: 'active',
        confidence: 92,
        specialty: 'Real-time variance analysis and root cause identification',
        useCases: [
            'Budget vs actual analysis',
            'Performance variance investigation',
            'Cost center anomaly detection',
            'Revenue stream analysis',
            'Operational efficiency tracking'
        ],
        integrations: ['Excel', 'Tableau', 'Power BI', 'QlikSense', 'Looker']
    },

    'cash-flow-prophet': {
        id: 'cash-flow-prophet',
        name: 'Cash Flow Prophet',
        title: 'Intelligent Cash Management',
        description: 'Predictive cash flow management AI that optimizes working capital and prevents liquidity issues.',
        capabilities: [
            'Daily cash position forecasting',
            'Working capital optimization',
            'Payment timing optimization',
            'Liquidity risk assessment',
            'Investment opportunity identification',
            'Currency hedging recommendations'
        ],
        icon: '💰',
        category: 'forecasting',
        status: 'active',
        confidence: 89,
        specialty: 'Cash flow prediction and working capital optimization',
        useCases: [
            '13-week cash flow rolling forecast',
            'Supplier payment optimization',
            'Customer collection acceleration',
            'Investment timing decisions',
            'Credit facility management'
        ],
        integrations: ['Treasury systems', 'Banking APIs', 'ERP systems', 'Payment platforms']
    },

    'risk-sentinel': {
        id: 'risk-sentinel',
        name: 'Risk Sentinel',
        title: 'Financial Risk Monitor',
        description: 'Continuous risk monitoring AI that identifies financial threats and opportunities before they impact the business.',
        capabilities: [
            'Real-time risk scoring',
            'Credit risk assessment',
            'Market risk monitoring',
            'Operational risk detection',
            'Stress testing automation',
            'Regulatory compliance tracking'
        ],
        icon: '🛡️',
        category: 'risk',
        status: 'beta',
        confidence: 85,
        specialty: 'Proactive financial risk identification and mitigation',
        useCases: [
            'Customer credit risk assessment',
            'Market volatility monitoring',
            'Regulatory compliance tracking',
            'Fraud detection and prevention',
            'Portfolio risk analysis'
        ],
        integrations: ['Credit bureaus', 'Market data feeds', 'Compliance systems', 'Banking platforms']
    },

    'insight-engine': {
        id: 'insight-engine',
        name: 'Insight Engine',
        title: 'Strategic Intelligence AI',
        description: 'Advanced analytics AI that transforms data into actionable business insights and strategic recommendations.',
        capabilities: [
            'Pattern recognition across datasets',
            'Strategic recommendation generation',
            'Performance benchmarking',
            'Market opportunity identification',
            'Competitive analysis automation',
            'Business intelligence synthesis'
        ],
        icon: '🧠',
        category: 'insights',
        status: 'active',
        confidence: 94,
        specialty: 'Strategic business insights and recommendation engine',
        useCases: [
            'Strategic planning support',
            'Market opportunity analysis',
            'Performance optimization',
            'Competitive intelligence',
            'Investment decision support'
        ],
        integrations: ['Business intelligence tools', 'Market research platforms', 'CRM systems', 'External data sources']
    },

    'automation-orchestrator': {
        id: 'automation-orchestrator',
        name: 'Automation Orchestrator',
        title: 'Process Automation AI',
        description: 'Intelligent automation platform that streamlines financial processes and eliminates manual tasks.',
        capabilities: [
            'Process automation design',
            'Workflow optimization',
            'Exception handling',
            'Quality control automation',
            'Approval routing intelligence',
            'Performance monitoring'
        ],
        icon: '⚡',
        category: 'automation',
        status: 'active',
        confidence: 98,
        specialty: 'Financial process automation and optimization',
        useCases: [
            'Month-end close automation',
            'Accounts payable processing',
            'Expense report management',
            'Budget approval workflows',
            'Financial reporting automation'
        ],
        integrations: ['RPA platforms', 'ERP systems', 'Document management', 'Approval systems']
    }
};

export const getAgentsByCategory = (category: AIAgent['category']): AIAgent[] => {
    return Object.values(AI_AGENTS).filter(agent => agent.category === category);
};

export const getActiveAgents = (): AIAgent[] => {
    return Object.values(AI_AGENTS).filter(agent => agent.status === 'active');
};

export const getAgentById = (id: string): AIAgent | undefined => {
    return AI_AGENTS[id];
};

export const AI_AGENT_CATEGORIES = [
    { id: 'forecasting', name: 'Forecasting', description: 'Predictive analytics and future planning' },
    { id: 'analysis', name: 'Analysis', description: 'Data analysis and variance investigation' },
    { id: 'automation', name: 'Automation', description: 'Process automation and workflow optimization' },
    { id: 'insights', name: 'Insights', description: 'Strategic intelligence and recommendations' },
    { id: 'risk', name: 'Risk Management', description: 'Risk monitoring and mitigation' }
] as const; 