// Comprehensive synthetic data for enhanced forecasting platform

// Types and Interfaces
export interface AIInsight {
    id: string;
    type: 'predictive' | 'prescriptive' | 'diagnostic' | 'comparative';
    category: 'revenue' | 'cost' | 'margin' | 'cash' | 'operational';
    title: string;
    description: string;
    impact: {
        value: number;
        percentage: number;
        timeframe: string;
    };
    confidence: number;
    priority: 'critical' | 'high' | 'medium' | 'low';
    suggestedActions: Action[];
    supportingData: any[];
    generatedBy: string;
    generatedAt: Date;
    status: 'new' | 'viewed' | 'actioned' | 'dismissed';
}

export interface Action {
    id: string;
    title: string;
    description: string;
    estimatedImpact: string;
    effort: 'low' | 'medium' | 'high';
    timeline: string;
    owner?: string;
    status: 'suggested' | 'in_progress' | 'completed';
}

export interface ManagementAdjustment {
    id: string;
    forecastLineId: string;
    originalValue: number;
    adjustedValue: number;
    adjustmentAmount: number;
    adjustmentType: 'increase' | 'decrease';
    reason: string;
    justification: string;
    approvedBy: string;
    createdBy: string;
    createdAt: Date;
    category: 'revenue' | 'cost' | 'headcount' | 'capex';
    status: 'draft' | 'pending_approval' | 'approved' | 'rejected';
    comments: Comment[];
}

export interface Comment {
    id: string;
    author: string;
    text: string;
    timestamp: Date;
}

export interface BottomsUpDetail {
    id: string;
    level: 'company' | 'division' | 'region' | 'product' | 'customer';
    parentId?: string;
    name: string;
    metrics: {
        revenue: number;
        cost: number;
        margin: number;
        marginPercent: number;
        units?: number;
        headcount?: number;
    };
    forecast: ForecastDetail[];
    variance: VarianceDetail;
    children?: BottomsUpDetail[];
}

export interface ForecastDetail {
    period: string;
    mlForecast: number;
    manualForecast: number;
    actualValue?: number;
    managementAdjustment?: number;
    finalForecast: number;
    confidence: number;
    drivers: Driver[];
}

export interface Driver {
    name: string;
    value: number;
    impact: number;
    unit: string;
}

export interface TrendData {
    metric: string;
    periods: TrendPeriod[];
    statistics: {
        trend: 'increasing' | 'decreasing' | 'stable';
        avgGrowthRate: number;
        volatility: number;
        seasonalPattern?: string;
    };
}

export interface TrendPeriod {
    period: string;
    actual: number;
    forecast: number;
    budget: number;
    priorYear: number;
    mlPrediction: number;
    manualOverride?: number;
}

export interface AccuracyComparison {
    method: string;
    metrics: {
        mape: number; // Mean Absolute Percentage Error
        rmse: number; // Root Mean Square Error
        bias: number;
        r2: number; // R-squared
    };
    periodAccuracy: PeriodAccuracy[];
    improvements: {
        vsManual: number;
        vsPriorModel: number;
    };
}

export interface PeriodAccuracy {
    period: string;
    actual: number;
    forecast: number;
    error: number;
    errorPercent: number;
}

export interface Scenario {
    id: string;
    name: string;
    description: string;
    type: 'optimistic' | 'base' | 'pessimistic' | 'custom';
    probability: number;
    assumptions: Assumption[];
    impacts: ScenarioImpact[];
    createdBy: string;
    createdAt: Date;
    status: 'draft' | 'active' | 'archived';
}

export interface Assumption {
    id: string;
    category: string;
    description: string;
    baseValue: number;
    scenarioValue: number;
    changePercent: number;
    rationale: string;
}

export interface ScenarioImpact {
    metric: string;
    baseCase: number;
    scenarioCase: number;
    variance: number;
    variancePercent: number;
}

export interface VarianceDetail {
    total: number;
    totalPercent: number;
    components: VarianceComponent[];
}

export interface VarianceComponent {
    name: string;
    amount: number;
    percentage: number;
    driver: string;
    explanation: string;
}

// AI-Generated Insights Data
export const aiInsights: AIInsight[] = [
    {
        id: 'insight-1',
        type: 'predictive',
        category: 'revenue',
        title: 'Q2 Revenue Acceleration Opportunity',
        description: 'Based on current sales pipeline velocity and conversion trends, Q2 revenue is tracking 15% above forecast. Enterprise segment showing 23% YoY growth with 3 major deals in final stages.',
        impact: {
            value: 3200000,
            percentage: 15,
            timeframe: 'Q2 2025'
        },
        confidence: 87.5,
        priority: 'high',
        suggestedActions: [
            {
                id: 'action-1',
                title: 'Increase Q2 revenue forecast',
                description: 'Adjust Q2 forecast upward by 10-15% based on pipeline analysis',
                estimatedImpact: '+$2.5M-3.5M',
                effort: 'low',
                timeline: 'Immediate',
                status: 'suggested'
            },
            {
                id: 'action-2',
                title: 'Accelerate hiring in Customer Success',
                description: 'Add 5 CS headcount to support increased customer base',
                estimatedImpact: 'Protect $5M ARR',
                effort: 'medium',
                timeline: '30 days',
                status: 'suggested'
            }
        ],
        supportingData: [
            { metric: 'Pipeline velocity', value: '+23%', trend: 'up' },
            { metric: 'Win rate', value: '68%', trend: 'up' },
            { metric: 'ACV', value: '$125K', trend: 'stable' }
        ],
        generatedBy: 'Revenue Intelligence Agent',
        generatedAt: new Date(),
        status: 'new'
    },
    {
        id: 'insight-2',
        type: 'diagnostic',
        category: 'cost',
        title: 'Marketing Spend Efficiency Declining',
        description: 'CAC has increased 34% QoQ while lead quality decreased. Paid search campaigns showing negative ROI in 3 key markets. Attribution analysis reveals content marketing outperforming paid by 3.2x.',
        impact: {
            value: -890000,
            percentage: -22,
            timeframe: 'Q1 2025'
        },
        confidence: 92.3,
        priority: 'critical',
        suggestedActions: [
            {
                id: 'action-3',
                title: 'Reallocate paid search budget',
                description: 'Shift $500K from underperforming paid campaigns to content and SEO',
                estimatedImpact: '+45% ROI improvement',
                effort: 'medium',
                timeline: '2 weeks',
                status: 'suggested'
            },
            {
                id: 'action-4',
                title: 'Implement attribution modeling',
                description: 'Deploy multi-touch attribution to better track channel performance',
                estimatedImpact: 'Better allocation of $2M quarterly spend',
                effort: 'high',
                timeline: '45 days',
                status: 'suggested'
            }
        ],
        supportingData: [
            { metric: 'CAC', value: '$1,234', trend: 'up' },
            { metric: 'Lead quality score', value: '62/100', trend: 'down' },
            { metric: 'Content ROI', value: '3.2x', trend: 'up' }
        ],
        generatedBy: 'Cost Optimization Agent',
        generatedAt: new Date(),
        status: 'viewed'
    },
    {
        id: 'insight-3',
        type: 'prescriptive',
        category: 'margin',
        title: 'Gross Margin Improvement Opportunity via Pricing',
        description: 'Analysis of customer willingness-to-pay indicates 8-12% pricing power in Enterprise tier. Competitors raised prices 10% on average. Churn risk minimal based on NPS and usage data.',
        impact: {
            value: 4500000,
            percentage: 3.5,
            timeframe: 'FY 2025'
        },
        confidence: 78.9,
        priority: 'high',
        suggestedActions: [
            {
                id: 'action-5',
                title: 'Implement tiered price increase',
                description: 'Raise Enterprise tier by 10%, Pro by 7%, Starter unchanged',
                estimatedImpact: '+$4.5M ARR, +3.5% margin',
                effort: 'medium',
                timeline: '60 days notice required',
                status: 'suggested'
            },
            {
                id: 'action-6',
                title: 'Launch value communication campaign',
                description: 'Proactive outreach highlighting new features and ROI',
                estimatedImpact: 'Reduce churn risk by 40%',
                effort: 'low',
                timeline: '30 days before increase',
                status: 'suggested'
            }
        ],
        supportingData: [
            { metric: 'Price elasticity', value: '-0.3', trend: 'stable' },
            { metric: 'Competitor avg price', value: '+10%', trend: 'up' },
            { metric: 'NPS', value: '67', trend: 'up' }
        ],
        generatedBy: 'Pricing Optimization Agent',
        generatedAt: new Date(),
        status: 'new'
    },
    {
        id: 'insight-4',
        type: 'comparative',
        category: 'operational',
        title: 'Productivity Below Industry Benchmark',
        description: 'Revenue per employee 23% below SaaS benchmark of $250K. Top quartile peers averaging $300K. Primary gap in Sales and R&D efficiency.',
        impact: {
            value: -12000000,
            percentage: -23,
            timeframe: 'Annual'
        },
        confidence: 95.1,
        priority: 'medium',
        suggestedActions: [
            {
                id: 'action-7',
                title: 'Sales automation initiative',
                description: 'Implement CRM automation and AI-powered lead scoring',
                estimatedImpact: '+30% sales productivity',
                effort: 'high',
                timeline: '90 days',
                status: 'suggested'
            },
            {
                id: 'action-8',
                title: 'R&D platform consolidation',
                description: 'Consolidate development tools and implement DevOps best practices',
                estimatedImpact: '+25% developer velocity',
                effort: 'high',
                timeline: '120 days',
                status: 'suggested'
            }
        ],
        supportingData: [
            { metric: 'Revenue/employee', value: '$192K', trend: 'stable' },
            { metric: 'Industry median', value: '$250K', trend: 'up' },
            { metric: 'Top quartile', value: '$300K', trend: 'up' }
        ],
        generatedBy: 'Benchmarking Agent',
        generatedAt: new Date(),
        status: 'new'
    },
    {
        id: 'insight-5',
        type: 'predictive',
        category: 'cash',
        title: 'Cash Crunch Risk in Q3',
        description: 'Based on current burn rate and collection patterns, cash reserves may dip below minimum threshold in August. AR aging increasing with 3 major accounts 60+ days overdue.',
        impact: {
            value: -8500000,
            percentage: -15,
            timeframe: 'Q3 2025'
        },
        confidence: 71.2,
        priority: 'critical',
        suggestedActions: [
            {
                id: 'action-9',
                title: 'Accelerate collections',
                description: 'Executive outreach to overdue accounts, offer early payment discounts',
                estimatedImpact: '+$5M cash in 30 days',
                effort: 'low',
                timeline: 'Immediate',
                status: 'suggested'
            },
            {
                id: 'action-10',
                title: 'Establish credit facility',
                description: 'Secure $10M revolving credit line as safety net',
                estimatedImpact: 'Eliminate cash risk',
                effort: 'medium',
                timeline: '45 days',
                status: 'suggested'
            }
        ],
        supportingData: [
            { metric: 'Days cash on hand', value: '87', trend: 'down' },
            { metric: 'AR >60 days', value: '$8.5M', trend: 'up' },
            { metric: 'Monthly burn', value: '$2.1M', trend: 'stable' }
        ],
        generatedBy: 'Cash Management Agent',
        generatedAt: new Date(),
        status: 'new'
    }
];

// Management Adjustments Data
export const managementAdjustments: ManagementAdjustment[] = [
    {
        id: 'adj-1',
        forecastLineId: 'revenue-q2-2025',
        originalValue: 48500000,
        adjustedValue: 51000000,
        adjustmentAmount: 2500000,
        adjustmentType: 'increase',
        reason: 'Conservative ML model not capturing recent win rate improvement',
        justification: 'Sales leadership confirms 3 enterprise deals closing in Q2 not reflected in model due to recent signature. Each worth $800K+.',
        approvedBy: 'Sarah Chen (CFO)',
        createdBy: 'Michael Roberts (VP Sales)',
        createdAt: new Date('2025-03-15'),
        category: 'revenue',
        status: 'approved',
        comments: [
            {
                id: 'comment-1',
                author: 'Sarah Chen',
                text: 'Approved based on signed LOIs. Please update weekly on progress.',
                timestamp: new Date('2025-03-16')
            },
            {
                id: 'comment-2',
                author: 'Michael Roberts',
                text: 'Two deals already in legal review, confident in close dates.',
                timestamp: new Date('2025-03-16')
            }
        ]
    },
    {
        id: 'adj-2',
        forecastLineId: 'opex-r&d-q2-2025',
        originalValue: 12300000,
        adjustedValue: 13100000,
        adjustmentAmount: 800000,
        adjustmentType: 'increase',
        reason: 'Additional headcount needed for AI initiative',
        justification: 'Board approved strategic AI investment. Need 8 senior ML engineers starting April.',
        approvedBy: 'Sarah Chen (CFO)',
        createdBy: 'David Kim (CTO)',
        createdAt: new Date('2025-03-10'),
        category: 'cost',
        status: 'approved',
        comments: [
            {
                id: 'comment-3',
                author: 'Sarah Chen',
                text: 'Approved as strategic investment. ROI tracking required.',
                timestamp: new Date('2025-03-11')
            }
        ]
    },
    {
        id: 'adj-3',
        forecastLineId: 'revenue-emea-q3-2025',
        originalValue: 15600000,
        adjustedValue: 14200000,
        adjustmentAmount: -1400000,
        adjustmentType: 'decrease',
        reason: 'Regulatory delays in Germany and France',
        justification: 'New data privacy regulations pushing deals to Q4. Legal team estimates 60-90 day delay.',
        approvedBy: 'Sarah Chen (CFO)',
        createdBy: 'Emma Thompson (VP EMEA)',
        createdAt: new Date('2025-03-18'),
        category: 'revenue',
        status: 'pending_approval',
        comments: [
            {
                id: 'comment-4',
                author: 'Emma Thompson',
                text: 'Working with legal to expedite. May recover 30% if regulations clarify by May.',
                timestamp: new Date('2025-03-18')
            }
        ]
    },
    {
        id: 'adj-4',
        forecastLineId: 'cogs-q2-2025',
        originalValue: 18900000,
        adjustedValue: 17800000,
        adjustmentAmount: -1100000,
        adjustmentType: 'decrease',
        reason: 'AWS credits and negotiated hosting discount',
        justification: 'Secured $800K in AWS credits plus 15% discount on committed spend for 2 years.',
        approvedBy: 'Sarah Chen (CFO)',
        createdBy: 'Alex Patel (VP Ops)',
        createdAt: new Date('2025-03-12'),
        category: 'cost',
        status: 'approved',
        comments: [
            {
                id: 'comment-5',
                author: 'Sarah Chen',
                text: 'Excellent work. Please share negotiation playbook with other vendors.',
                timestamp: new Date('2025-03-13')
            }
        ]
    }
];

// Bottoms-Up Detail Views
export const bottomsUpHierarchy: BottomsUpDetail = {
    id: 'company-total',
    level: 'company',
    name: 'Global Revenue',
    metrics: {
        revenue: 185000000,
        cost: 142000000,
        margin: 43000000,
        marginPercent: 23.2,
        units: 450000,
        headcount: 750
    },
    forecast: [
        {
            period: '2025-Q1',
            mlForecast: 45000000,
            manualForecast: 44000000,
            actualValue: 45200000,
            managementAdjustment: 500000,
            finalForecast: 45500000,
            confidence: 92.5,
            drivers: [
                { name: 'New Customers', value: 145, impact: 18000000, unit: 'count' },
                { name: 'Expansion Revenue', value: 35, impact: 12000000, unit: '%' },
                { name: 'Churn', value: -8, impact: -3000000, unit: '%' }
            ]
        },
        {
            period: '2025-Q2',
            mlForecast: 48500000,
            manualForecast: 47000000,
            managementAdjustment: 2500000,
            finalForecast: 51000000,
            confidence: 87.3,
            drivers: [
                { name: 'New Customers', value: 165, impact: 20000000, unit: 'count' },
                { name: 'Expansion Revenue', value: 38, impact: 14000000, unit: '%' },
                { name: 'Churn', value: -7, impact: -2800000, unit: '%' }
            ]
        }
    ],
    variance: {
        total: 1200000,
        totalPercent: 2.7,
        components: [
            { name: 'Price', amount: 800000, percentage: 66.7, driver: 'Price increase', explanation: '5% price increase implemented in January' },
            { name: 'Volume', amount: 600000, percentage: 50, driver: 'Customer growth', explanation: 'Better than expected new logo acquisition' },
            { name: 'Mix', amount: -200000, percentage: -16.7, driver: 'Product mix', explanation: 'Higher starter tier mix than planned' }
        ]
    },
    children: [
        {
            id: 'americas',
            level: 'region',
            parentId: 'company-total',
            name: 'Americas',
            metrics: {
                revenue: 111000000,
                cost: 78000000,
                margin: 33000000,
                marginPercent: 29.7,
                units: 270000,
                headcount: 420
            },
            forecast: [
                {
                    period: '2025-Q1',
                    mlForecast: 27000000,
                    manualForecast: 26500000,
                    actualValue: 27200000,
                    finalForecast: 27000000,
                    confidence: 94.1,
                    drivers: [
                        { name: 'Enterprise Deals', value: 45, impact: 12000000, unit: 'count' },
                        { name: 'SMB Growth', value: 125, impact: 8000000, unit: '%' },
                        { name: 'Renewal Rate', value: 92, impact: 7000000, unit: '%' }
                    ]
                }
            ],
            variance: {
                total: 700000,
                totalPercent: 2.6,
                components: [
                    { name: 'Enterprise expansion', amount: 500000, percentage: 71.4, driver: 'Upsell', explanation: 'Enterprise upsell exceeded plan by 15%' },
                    { name: 'SMB acquisition', amount: 200000, percentage: 28.6, driver: 'Marketing', explanation: 'Improved marketing ROI in US market' }
                ]
            },
            children: [
                {
                    id: 'north-america',
                    level: 'product',
                    parentId: 'americas',
                    name: 'North America',
                    metrics: {
                        revenue: 89000000,
                        cost: 58000000,
                        margin: 31000000,
                        marginPercent: 34.8,
                        units: 195000,
                        headcount: 310
                    },
                    forecast: [
                        {
                            period: '2025-Q1',
                            mlForecast: 21600000,
                            manualForecast: 21200000,
                            actualValue: 21800000,
                            finalForecast: 21600000,
                            confidence: 95.2,
                            drivers: []
                        }
                    ],
                    variance: {
                        total: 200000,
                        totalPercent: 0.9,
                        components: []
                    }
                },
                {
                    id: 'latin-america',
                    level: 'product',
                    parentId: 'americas',
                    name: 'Latin America',
                    metrics: {
                        revenue: 22000000,
                        cost: 20000000,
                        margin: 2000000,
                        marginPercent: 9.1,
                        units: 75000,
                        headcount: 110
                    },
                    forecast: [
                        {
                            period: '2025-Q1',
                            mlForecast: 5400000,
                            manualForecast: 5300000,
                            actualValue: 5400000,
                            finalForecast: 5400000,
                            confidence: 88.7,
                            drivers: []
                        }
                    ],
                    variance: {
                        total: 100000,
                        totalPercent: 1.9,
                        components: []
                    }
                }
            ]
        },
        {
            id: 'emea',
            level: 'region',
            parentId: 'company-total',
            name: 'EMEA',
            metrics: {
                revenue: 55500000,
                cost: 46000000,
                margin: 9500000,
                marginPercent: 17.1,
                units: 135000,
                headcount: 220
            },
            forecast: [
                {
                    period: '2025-Q1',
                    mlForecast: 13500000,
                    manualForecast: 13000000,
                    actualValue: 13400000,
                    managementAdjustment: -100000,
                    finalForecast: 13400000,
                    confidence: 85.3,
                    drivers: [
                        { name: 'UK Market', value: 32, impact: 4500000, unit: '%' },
                        { name: 'DACH Region', value: 28, impact: 3800000, unit: '%' },
                        { name: 'FX Impact', value: -2.5, impact: -400000, unit: '%' }
                    ]
                }
            ],
            variance: {
                total: -100000,
                totalPercent: -0.7,
                components: [
                    { name: 'FX headwind', amount: -400000, percentage: 400, driver: 'Currency', explanation: 'EUR and GBP weaker than planned' },
                    { name: 'Volume upside', amount: 300000, percentage: -300, driver: 'Sales execution', explanation: 'Better sales productivity in UK' }
                ]
            }
        },
        {
            id: 'apac',
            level: 'region',
            parentId: 'company-total',
            name: 'APAC',
            metrics: {
                revenue: 18500000,
                cost: 18000000,
                margin: 500000,
                marginPercent: 2.7,
                units: 45000,
                headcount: 110
            },
            forecast: [
                {
                    period: '2025-Q1',
                    mlForecast: 4500000,
                    manualForecast: 4500000,
                    actualValue: 4600000,
                    finalForecast: 4500000,
                    confidence: 79.8,
                    drivers: [
                        { name: 'Japan Growth', value: 45, impact: 2000000, unit: '%' },
                        { name: 'ANZ Expansion', value: 35, impact: 1500000, unit: '%' },
                        { name: 'SE Asia', value: 55, impact: 1000000, unit: '%' }
                    ]
                }
            ],
            variance: {
                total: 100000,
                totalPercent: 2.2,
                components: [
                    { name: 'Japan outperformance', amount: 150000, percentage: 150, driver: 'Market share', explanation: 'Competitor exit accelerated share gain' },
                    { name: 'SE Asia delay', amount: -50000, percentage: -50, driver: 'Timing', explanation: 'Singapore deal pushed to Q2' }
                ]
            }
        }
    ]
};

// Trending Over Time Data
export const trendingData: TrendData[] = [
    {
        metric: 'Revenue',
        periods: [
            { period: '2024-Q1', actual: 38500000, forecast: 38000000, budget: 37500000, priorYear: 32000000, mlPrediction: 38200000 },
            { period: '2024-Q2', actual: 40200000, forecast: 39800000, budget: 39500000, priorYear: 34500000, mlPrediction: 40000000 },
            { period: '2024-Q3', actual: 42100000, forecast: 41500000, budget: 41000000, priorYear: 36200000, mlPrediction: 41800000 },
            { period: '2024-Q4', actual: 44800000, forecast: 44000000, budget: 43500000, priorYear: 38100000, mlPrediction: 44200000 },
            { period: '2025-Q1', actual: 45200000, forecast: 45500000, budget: 45000000, priorYear: 38500000, mlPrediction: 45000000, manualOverride: 45500000 },
            { period: '2025-Q2', actual: 0, forecast: 51000000, budget: 48000000, priorYear: 40200000, mlPrediction: 48500000, manualOverride: 51000000 },
            { period: '2025-Q3', actual: 0, forecast: 52500000, budget: 51000000, priorYear: 42100000, mlPrediction: 52800000 },
            { period: '2025-Q4', actual: 0, forecast: 56000000, budget: 54000000, priorYear: 44800000, mlPrediction: 56500000 }
        ],
        statistics: {
            trend: 'increasing',
            avgGrowthRate: 8.2,
            volatility: 3.4,
            seasonalPattern: 'Q4 peak, Q1 trough'
        }
    },
    {
        metric: 'Gross Margin %',
        periods: [
            { period: '2024-Q1', actual: 68.5, forecast: 68.0, budget: 67.5, priorYear: 65.2, mlPrediction: 68.2 },
            { period: '2024-Q2', actual: 69.2, forecast: 68.8, budget: 68.5, priorYear: 66.1, mlPrediction: 69.0 },
            { period: '2024-Q3', actual: 69.8, forecast: 69.5, budget: 69.0, priorYear: 66.8, mlPrediction: 69.6 },
            { period: '2024-Q4', actual: 70.5, forecast: 70.0, budget: 69.5, priorYear: 67.3, mlPrediction: 70.2 },
            { period: '2025-Q1', actual: 70.8, forecast: 70.5, budget: 70.0, priorYear: 68.5, mlPrediction: 70.6 },
            { period: '2025-Q2', actual: 0, forecast: 71.2, budget: 70.5, priorYear: 69.2, mlPrediction: 71.0, manualOverride: 71.2 },
            { period: '2025-Q3', actual: 0, forecast: 71.5, budget: 71.0, priorYear: 69.8, mlPrediction: 71.4 },
            { period: '2025-Q4', actual: 0, forecast: 72.0, budget: 71.5, priorYear: 70.5, mlPrediction: 71.8 }
        ],
        statistics: {
            trend: 'increasing',
            avgGrowthRate: 1.2,
            volatility: 0.8,
            seasonalPattern: 'Stable with slight Q4 improvement'
        }
    },
    {
        metric: 'Operating Expenses',
        periods: [
            { period: '2024-Q1', actual: 31200000, forecast: 31500000, budget: 32000000, priorYear: 28500000, mlPrediction: 31300000 },
            { period: '2024-Q2', actual: 32800000, forecast: 33000000, budget: 33500000, priorYear: 30200000, mlPrediction: 32900000 },
            { period: '2024-Q3', actual: 34200000, forecast: 34500000, budget: 35000000, priorYear: 31800000, mlPrediction: 34400000 },
            { period: '2024-Q4', actual: 35900000, forecast: 36000000, budget: 36500000, priorYear: 33200000, mlPrediction: 35800000 },
            { period: '2025-Q1', actual: 36800000, forecast: 37000000, budget: 37500000, priorYear: 31200000, mlPrediction: 36900000 },
            { period: '2025-Q2', actual: 0, forecast: 39500000, budget: 39000000, priorYear: 32800000, mlPrediction: 38700000, manualOverride: 39500000 },
            { period: '2025-Q3', actual: 0, forecast: 40200000, budget: 40500000, priorYear: 34200000, mlPrediction: 40000000 },
            { period: '2025-Q4', actual: 0, forecast: 41800000, budget: 42000000, priorYear: 35900000, mlPrediction: 41500000 }
        ],
        statistics: {
            trend: 'increasing',
            avgGrowthRate: 6.8,
            volatility: 2.1,
            seasonalPattern: 'Linear growth with Q1 hiring spike'
        }
    },
    {
        metric: 'Headcount',
        periods: [
            { period: '2024-Q1', actual: 612, forecast: 615, budget: 620, priorYear: 520, mlPrediction: 613 },
            { period: '2024-Q2', actual: 648, forecast: 650, budget: 655, priorYear: 545, mlPrediction: 647 },
            { period: '2024-Q3', actual: 685, forecast: 685, budget: 690, priorYear: 572, mlPrediction: 684 },
            { period: '2024-Q4', actual: 720, forecast: 720, budget: 725, priorYear: 598, mlPrediction: 719 },
            { period: '2025-Q1', actual: 750, forecast: 755, budget: 760, priorYear: 612, mlPrediction: 752 },
            { period: '2025-Q2', actual: 0, forecast: 795, budget: 800, priorYear: 648, mlPrediction: 788, manualOverride: 795 },
            { period: '2025-Q3', actual: 0, forecast: 825, budget: 835, priorYear: 685, mlPrediction: 822 },
            { period: '2025-Q4', actual: 0, forecast: 860, budget: 870, priorYear: 720, mlPrediction: 856 }
        ],
        statistics: {
            trend: 'increasing',
            avgGrowthRate: 5.2,
            volatility: 1.8,
            seasonalPattern: 'Q1/Q3 hiring pushes'
        }
    },
    {
        metric: 'Cash Flow',
        periods: [
            { period: '2024-Q1', actual: 8200000, forecast: 8000000, budget: 7500000, priorYear: 5200000, mlPrediction: 8100000 },
            { period: '2024-Q2', actual: 9500000, forecast: 9200000, budget: 8800000, priorYear: 6100000, mlPrediction: 9300000 },
            { period: '2024-Q3', actual: 7800000, forecast: 7500000, budget: 7200000, priorYear: 5800000, mlPrediction: 7600000 },
            { period: '2024-Q4', actual: 12200000, forecast: 12000000, budget: 11500000, priorYear: 8200000, mlPrediction: 12100000 },
            { period: '2025-Q1', actual: 8900000, forecast: 8800000, budget: 8500000, priorYear: 8200000, mlPrediction: 8850000 },
            { period: '2025-Q2', actual: 0, forecast: 11200000, budget: 10500000, priorYear: 9500000, mlPrediction: 10800000, manualOverride: 11200000 },
            { period: '2025-Q3', actual: 0, forecast: 9500000, budget: 9000000, priorYear: 7800000, mlPrediction: 9300000 },
            { period: '2025-Q4', actual: 0, forecast: 14500000, budget: 13800000, priorYear: 12200000, mlPrediction: 14200000 }
        ],
        statistics: {
            trend: 'increasing',
            avgGrowthRate: 12.5,
            volatility: 18.3,
            seasonalPattern: 'Strong Q4, weak Q3 due to annual payments'
        }
    }
];

// Accuracy Comparison Data
export const accuracyComparisons: AccuracyComparison[] = [
    {
        method: 'AI/ML Ensemble Model',
        metrics: {
            mape: 4.2,
            rmse: 1820000,
            bias: 0.3,
            r2: 0.94
        },
        periodAccuracy: [
            { period: '2024-Q1', actual: 38500000, forecast: 38200000, error: 300000, errorPercent: 0.78 },
            { period: '2024-Q2', actual: 40200000, forecast: 40000000, error: 200000, errorPercent: 0.50 },
            { period: '2024-Q3', actual: 42100000, forecast: 41800000, error: 300000, errorPercent: 0.71 },
            { period: '2024-Q4', actual: 44800000, forecast: 44200000, error: 600000, errorPercent: 1.34 },
            { period: '2025-Q1', actual: 45200000, forecast: 45000000, error: 200000, errorPercent: 0.44 }
        ],
        improvements: {
            vsManual: 68.5,
            vsPriorModel: 35.2
        }
    },
    {
        method: 'Manual Forecast',
        metrics: {
            mape: 13.4,
            rmse: 3450000,
            bias: -2.1,
            r2: 0.76
        },
        periodAccuracy: [
            { period: '2024-Q1', actual: 38500000, forecast: 38000000, error: 500000, errorPercent: 1.30 },
            { period: '2024-Q2', actual: 40200000, forecast: 39800000, error: 400000, errorPercent: 1.00 },
            { period: '2024-Q3', actual: 42100000, forecast: 41500000, error: 600000, errorPercent: 1.42 },
            { period: '2024-Q4', actual: 44800000, forecast: 44000000, error: 800000, errorPercent: 1.79 },
            { period: '2025-Q1', actual: 45200000, forecast: 44000000, error: 1200000, errorPercent: 2.65 }
        ],
        improvements: {
            vsManual: 0,
            vsPriorModel: -8.5
        }
    },
    {
        method: 'Simple Time Series',
        metrics: {
            mape: 8.7,
            rmse: 2650000,
            bias: 1.2,
            r2: 0.85
        },
        periodAccuracy: [
            { period: '2024-Q1', actual: 38500000, forecast: 37800000, error: 700000, errorPercent: 1.82 },
            { period: '2024-Q2', actual: 40200000, forecast: 39600000, error: 600000, errorPercent: 1.49 },
            { period: '2024-Q3', actual: 42100000, forecast: 41200000, error: 900000, errorPercent: 2.14 },
            { period: '2024-Q4', actual: 44800000, forecast: 43500000, error: 1300000, errorPercent: 2.90 },
            { period: '2025-Q1', actual: 45200000, forecast: 44500000, error: 700000, errorPercent: 1.55 }
        ],
        improvements: {
            vsManual: 35.1,
            vsPriorModel: 0
        }
    },
    {
        method: 'Budget',
        metrics: {
            mape: 15.8,
            rmse: 3950000,
            bias: -3.5,
            r2: 0.68
        },
        periodAccuracy: [
            { period: '2024-Q1', actual: 38500000, forecast: 37500000, error: 1000000, errorPercent: 2.60 },
            { period: '2024-Q2', actual: 40200000, forecast: 39500000, error: 700000, errorPercent: 1.74 },
            { period: '2024-Q3', actual: 42100000, forecast: 41000000, error: 1100000, errorPercent: 2.61 },
            { period: '2024-Q4', actual: 44800000, forecast: 43500000, error: 1300000, errorPercent: 2.90 },
            { period: '2025-Q1', actual: 45200000, forecast: 45000000, error: 200000, errorPercent: 0.44 }
        ],
        improvements: {
            vsManual: -17.9,
            vsPriorModel: -81.6
        }
    }
];

// Scenario Modeling Data
export const scenarios: Scenario[] = [
    {
        id: 'scenario-1',
        name: 'Economic Recession',
        description: 'Moderate recession impacting customer spending and new logo acquisition',
        type: 'pessimistic',
        probability: 25,
        assumptions: [
            {
                id: 'assum-1',
                category: 'Revenue',
                description: 'New customer acquisition rate',
                baseValue: 150,
                scenarioValue: 90,
                changePercent: -40,
                rationale: 'Companies freeze new software purchases during recession'
            },
            {
                id: 'assum-2',
                category: 'Revenue',
                description: 'Churn rate',
                baseValue: 8,
                scenarioValue: 15,
                changePercent: 87.5,
                rationale: 'Cost cutting drives higher churn, especially in SMB'
            },
            {
                id: 'assum-3',
                category: 'Cost',
                description: 'Hiring freeze impact',
                baseValue: 100,
                scenarioValue: 60,
                changePercent: -40,
                rationale: 'Implement hiring freeze except critical roles'
            }
        ],
        impacts: [
            { metric: 'Revenue', baseCase: 204700000, scenarioCase: 168900000, variance: -35800000, variancePercent: -17.5 },
            { metric: 'EBITDA', baseCase: 47500000, scenarioCase: 28200000, variance: -19300000, variancePercent: -40.6 },
            { metric: 'Cash', baseCase: 89400000, scenarioCase: 54200000, variance: -35200000, variancePercent: -39.4 },
            { metric: 'Headcount', baseCase: 860, scenarioCase: 720, variance: -140, variancePercent: -16.3 }
        ],
        createdBy: 'Sarah Chen',
        createdAt: new Date('2025-03-01'),
        status: 'active'
    },
    {
        id: 'scenario-2',
        name: 'Accelerated Growth',
        description: 'Market expansion and competitor weakness drive above-plan growth',
        type: 'optimistic',
        probability: 30,
        assumptions: [
            {
                id: 'assum-4',
                category: 'Revenue',
                description: 'Win rate improvement',
                baseValue: 25,
                scenarioValue: 35,
                changePercent: 40,
                rationale: 'Main competitor acquired, creating opportunity'
            },
            {
                id: 'assum-5',
                category: 'Revenue',
                description: 'Average deal size',
                baseValue: 125000,
                scenarioValue: 145000,
                changePercent: 16,
                rationale: 'Moving upmarket with enterprise features'
            },
            {
                id: 'assum-6',
                category: 'Cost',
                description: 'Sales & Marketing investment',
                baseValue: 45000000,
                scenarioValue: 58000000,
                changePercent: 28.9,
                rationale: 'Invest to capture market opportunity'
            }
        ],
        impacts: [
            { metric: 'Revenue', baseCase: 204700000, scenarioCase: 248900000, variance: 44200000, variancePercent: 21.6 },
            { metric: 'EBITDA', baseCase: 47500000, scenarioCase: 61200000, variance: 13700000, variancePercent: 28.8 },
            { metric: 'Market Share', baseCase: 12.5, scenarioCase: 16.8, variance: 4.3, variancePercent: 34.4 },
            { metric: 'Headcount', baseCase: 860, scenarioCase: 980, variance: 120, variancePercent: 14.0 }
        ],
        createdBy: 'Michael Roberts',
        createdAt: new Date('2025-03-05'),
        status: 'active'
    },
    {
        id: 'scenario-3',
        name: 'Base Case',
        description: 'Current forecast with management adjustments',
        type: 'base',
        probability: 45,
        assumptions: [
            {
                id: 'assum-7',
                category: 'Revenue',
                description: 'Organic growth rate',
                baseValue: 100,
                scenarioValue: 100,
                changePercent: 0,
                rationale: 'Maintain current trajectory'
            }
        ],
        impacts: [
            { metric: 'Revenue', baseCase: 204700000, scenarioCase: 204700000, variance: 0, variancePercent: 0 },
            { metric: 'EBITDA', baseCase: 47500000, scenarioCase: 47500000, variance: 0, variancePercent: 0 },
            { metric: 'Cash', baseCase: 89400000, scenarioCase: 89400000, variance: 0, variancePercent: 0 },
            { metric: 'Headcount', baseCase: 860, scenarioCase: 860, variance: 0, variancePercent: 0 }
        ],
        createdBy: 'System',
        createdAt: new Date('2025-03-01'),
        status: 'active'
    },
    {
        id: 'scenario-4',
        name: 'M&A Integration',
        description: 'Acquisition of competitor and integration costs/synergies',
        type: 'custom',
        probability: 15,
        assumptions: [
            {
                id: 'assum-8',
                category: 'Revenue',
                description: 'Acquired revenue',
                baseValue: 0,
                scenarioValue: 35000000,
                changePercent: 100,
                rationale: '$35M revenue company acquisition'
            },
            {
                id: 'assum-9',
                category: 'Cost',
                description: 'Integration costs',
                baseValue: 0,
                scenarioValue: 12000000,
                changePercent: 100,
                rationale: 'One-time integration and severance costs'
            },
            {
                id: 'assum-10',
                category: 'Cost',
                description: 'Synergy savings',
                baseValue: 0,
                scenarioValue: -8000000,
                changePercent: 100,
                rationale: 'Eliminate duplicate functions and systems'
            }
        ],
        impacts: [
            { metric: 'Revenue', baseCase: 204700000, scenarioCase: 239700000, variance: 35000000, variancePercent: 17.1 },
            { metric: 'EBITDA', baseCase: 47500000, scenarioCase: 43500000, variance: -4000000, variancePercent: -8.4 },
            { metric: 'One-time Costs', baseCase: 0, scenarioCase: 12000000, variance: 12000000, variancePercent: 100 },
            { metric: 'Headcount', baseCase: 860, scenarioCase: 1050, variance: 190, variancePercent: 22.1 }
        ],
        createdBy: 'David Chen',
        createdAt: new Date('2025-03-10'),
        status: 'draft'
    }
];

// Comparison Views Data
export interface ComparisonView {
    id: string;
    name: string;
    type: 'period' | 'scenario' | 'version' | 'forecast';
    datasets: ComparisonDataset[];
    metrics: string[];
    variance: VarianceAnalysis[];
}

export interface ComparisonDataset {
    label: string;
    data: { [metric: string]: number };
    color: string;
}

export interface VarianceAnalysis {
    metric: string;
    base: number;
    comparison: number;
    variance: number;
    variancePercent: number;
    explanation?: string;
}

export const comparisonViews: ComparisonView[] = [
    {
        id: 'comp-1',
        name: 'Q1 2025 Actuals vs Forecast vs Budget',
        type: 'period',
        datasets: [
            {
                label: 'Actuals',
                data: {
                    Revenue: 45200000,
                    'Gross Profit': 31990000,
                    EBITDA: 8400000,
                    'Operating Cash Flow': 8900000,
                    Headcount: 750
                },
                color: '#10b981'
            },
            {
                label: 'AI/ML Forecast',
                data: {
                    Revenue: 45000000,
                    'Gross Profit': 31815000,
                    EBITDA: 8100000,
                    'Operating Cash Flow': 8850000,
                    Headcount: 752
                },
                color: '#3b82f6'
            },
            {
                label: 'Management Adjusted',
                data: {
                    Revenue: 45500000,
                    'Gross Profit': 32130000,
                    EBITDA: 8300000,
                    'Operating Cash Flow': 8800000,
                    Headcount: 755
                },
                color: '#8b5cf6'
            },
            {
                label: 'Budget',
                data: {
                    Revenue: 45000000,
                    'Gross Profit': 31500000,
                    EBITDA: 7875000,
                    'Operating Cash Flow': 8500000,
                    Headcount: 760
                },
                color: '#ef4444'
            }
        ],
        metrics: ['Revenue', 'Gross Profit', 'EBITDA', 'Operating Cash Flow', 'Headcount'],
        variance: [
            {
                metric: 'Revenue',
                base: 45000000,
                comparison: 45200000,
                variance: 200000,
                variancePercent: 0.4,
                explanation: 'Better than expected close rate in March'
            },
            {
                metric: 'Gross Profit',
                base: 31500000,
                comparison: 31990000,
                variance: 490000,
                variancePercent: 1.6,
                explanation: 'Improved margins from pricing optimization'
            },
            {
                metric: 'EBITDA',
                base: 7875000,
                comparison: 8400000,
                variance: 525000,
                variancePercent: 6.7,
                explanation: 'Cost controls and revenue upside'
            }
        ]
    },
    {
        id: 'comp-2',
        name: 'FY 2025 Scenario Comparison',
        type: 'scenario',
        datasets: [
            {
                label: 'Recession Case',
                data: {
                    Revenue: 168900000,
                    EBITDA: 28200000,
                    'EBITDA Margin': 16.7,
                    'Cash Balance': 54200000,
                    'Revenue Growth': -17.5
                },
                color: '#ef4444'
            },
            {
                label: 'Base Case',
                data: {
                    Revenue: 204700000,
                    EBITDA: 47500000,
                    'EBITDA Margin': 23.2,
                    'Cash Balance': 89400000,
                    'Revenue Growth': 24.2
                },
                color: '#3b82f6'
            },
            {
                label: 'Growth Case',
                data: {
                    Revenue: 248900000,
                    EBITDA: 61200000,
                    'EBITDA Margin': 24.6,
                    'Cash Balance': 124600000,
                    'Revenue Growth': 51.0
                },
                color: '#10b981'
            },
            {
                label: 'M&A Case',
                data: {
                    Revenue: 239700000,
                    EBITDA: 43500000,
                    'EBITDA Margin': 18.1,
                    'Cash Balance': 65200000,
                    'Revenue Growth': 45.4
                },
                color: '#f59e0b'
            }
        ],
        metrics: ['Revenue', 'EBITDA', 'EBITDA Margin', 'Cash Balance', 'Revenue Growth'],
        variance: [
            {
                metric: 'Revenue',
                base: 204700000,
                comparison: 248900000,
                variance: 44200000,
                variancePercent: 21.6,
                explanation: 'Growth case assumes market share gain'
            },
            {
                metric: 'EBITDA',
                base: 47500000,
                comparison: 28200000,
                variance: -19300000,
                variancePercent: -40.6,
                explanation: 'Recession case shows significant margin pressure'
            }
        ]
    },
    {
        id: 'comp-3',
        name: 'Regional Performance Comparison',
        type: 'period',
        datasets: [
            {
                label: 'Americas',
                data: {
                    'Q1 Revenue': 27200000,
                    'Q1 Growth %': 18.5,
                    'Q1 Margin %': 29.7,
                    'Q2 Forecast': 29500000,
                    'FY Forecast': 125800000
                },
                color: '#3b82f6'
            },
            {
                label: 'EMEA',
                data: {
                    'Q1 Revenue': 13400000,
                    'Q1 Growth %': 12.3,
                    'Q1 Margin %': 17.1,
                    'Q2 Forecast': 14200000,
                    'FY Forecast': 58900000
                },
                color: '#10b981'
            },
            {
                label: 'APAC',
                data: {
                    'Q1 Revenue': 4600000,
                    'Q1 Growth %': 35.7,
                    'Q1 Margin %': 2.7,
                    'Q2 Forecast': 5300000,
                    'FY Forecast': 22500000
                },
                color: '#f59e0b'
            }
        ],
        metrics: ['Q1 Revenue', 'Q1 Growth %', 'Q1 Margin %', 'Q2 Forecast', 'FY Forecast'],
        variance: [
            {
                metric: 'Q1 Revenue',
                base: 13400000,
                comparison: 27200000,
                variance: 13800000,
                variancePercent: 103.0,
                explanation: 'Americas significantly larger than EMEA'
            },
            {
                metric: 'Q1 Growth %',
                base: 12.3,
                comparison: 35.7,
                variance: 23.4,
                variancePercent: 190.2,
                explanation: 'APAC showing highest growth rate'
            }
        ]
    },
    {
        id: 'comp-4',
        name: 'Forecast Method Accuracy',
        type: 'forecast',
        datasets: [
            {
                label: 'AI/ML Ensemble',
                data: {
                    'MAPE %': 4.2,
                    'Bias %': 0.3,
                    'R-squared': 0.94,
                    'Avg Error': 320000,
                    'Max Error': 600000
                },
                color: '#10b981'
            },
            {
                label: 'Manual Forecast',
                data: {
                    'MAPE %': 13.4,
                    'Bias %': -2.1,
                    'R-squared': 0.76,
                    'Avg Error': 700000,
                    'Max Error': 1200000
                },
                color: '#ef4444'
            },
            {
                label: 'Time Series',
                data: {
                    'MAPE %': 8.7,
                    'Bias %': 1.2,
                    'R-squared': 0.85,
                    'Avg Error': 860000,
                    'Max Error': 1300000
                },
                color: '#f59e0b'
            },
            {
                label: 'Budget',
                data: {
                    'MAPE %': 15.8,
                    'Bias %': -3.5,
                    'R-squared': 0.68,
                    'Avg Error': 960000,
                    'Max Error': 1300000
                },
                color: '#6b7280'
            }
        ],
        metrics: ['MAPE %', 'Bias %', 'R-squared', 'Avg Error', 'Max Error'],
        variance: [
            {
                metric: 'MAPE %',
                base: 13.4,
                comparison: 4.2,
                variance: -9.2,
                variancePercent: -68.7,
                explanation: 'AI/ML 68.7% more accurate than manual'
            },
            {
                metric: 'R-squared',
                base: 0.76,
                comparison: 0.94,
                variance: 0.18,
                variancePercent: 23.7,
                explanation: 'AI/ML explains 94% of variance vs 76% manual'
            }
        ]
    }
];

// Driver-Based Planning Data
export interface PlanningDriver {
    id: string;
    name: string;
    category: 'revenue' | 'cost' | 'operational';
    currentValue: number;
    plannedValue: number;
    unit: string;
    impact: {
        metric: string;
        sensitivity: number; // $ impact per unit change
        totalImpact: number;
    }[];
    relationships: DriverRelationship[];
    historicalData: DriverHistorical[];
}

export interface DriverRelationship {
    targetDriver: string;
    relationship: 'direct' | 'inverse' | 'exponential';
    coefficient: number;
}

export interface DriverHistorical {
    period: string;
    value: number;
    actualImpact: number;
}

export const planningDrivers: PlanningDriver[] = [
    {
        id: 'driver-1',
        name: 'Sales Headcount',
        category: 'revenue',
        currentValue: 85,
        plannedValue: 95,
        unit: 'FTEs',
        impact: [
            { metric: 'Revenue', sensitivity: 480000, totalImpact: 4800000 },
            { metric: 'Sales Cost', sensitivity: 150000, totalImpact: 1500000 }
        ],
        relationships: [
            { targetDriver: 'New Customers', relationship: 'direct', coefficient: 1.8 },
            { targetDriver: 'Pipeline Value', relationship: 'direct', coefficient: 2.5 }
        ],
        historicalData: [
            { period: '2024-Q1', value: 72, actualImpact: 34560000 },
            { period: '2024-Q2', value: 76, actualImpact: 36480000 },
            { period: '2024-Q3', value: 80, actualImpact: 38400000 },
            { period: '2024-Q4', value: 82, actualImpact: 39360000 }
        ]
    },
    {
        id: 'driver-2',
        name: 'Average Deal Size',
        category: 'revenue',
        currentValue: 125000,
        plannedValue: 135000,
        unit: 'USD',
        impact: [
            { metric: 'Revenue', sensitivity: 320, totalImpact: 3200000 },
            { metric: 'Commission', sensitivity: 32, totalImpact: 320000 }
        ],
        relationships: [
            { targetDriver: 'Enterprise Mix', relationship: 'direct', coefficient: 0.8 },
            { targetDriver: 'Sales Cycle', relationship: 'direct', coefficient: 0.3 }
        ],
        historicalData: [
            { period: '2024-Q1', value: 115000, actualImpact: 36800000 },
            { period: '2024-Q2', value: 118000, actualImpact: 37760000 },
            { period: '2024-Q3', value: 122000, actualImpact: 39040000 },
            { period: '2024-Q4', value: 125000, actualImpact: 40000000 }
        ]
    },
    {
        id: 'driver-3',
        name: 'Customer Churn Rate',
        category: 'revenue',
        currentValue: 8,
        plannedValue: 6,
        unit: '%',
        impact: [
            { metric: 'Revenue', sensitivity: -2100000, totalImpact: 4200000 },
            { metric: 'Customer Success Cost', sensitivity: -50000, totalImpact: 100000 }
        ],
        relationships: [
            { targetDriver: 'NPS Score', relationship: 'inverse', coefficient: -0.5 },
            { targetDriver: 'Support Tickets', relationship: 'direct', coefficient: 1.2 }
        ],
        historicalData: [
            { period: '2024-Q1', value: 9.5, actualImpact: -3990000 },
            { period: '2024-Q2', value: 9.0, actualImpact: -3780000 },
            { period: '2024-Q3', value: 8.5, actualImpact: -3570000 },
            { period: '2024-Q4', value: 8.0, actualImpact: -3360000 }
        ]
    },
    {
        id: 'driver-4',
        name: 'Marketing Spend',
        category: 'cost',
        currentValue: 4500000,
        plannedValue: 5200000,
        unit: 'USD/quarter',
        impact: [
            { metric: 'Pipeline Generated', sensitivity: 5.2, totalImpact: 3640000 },
            { metric: 'Brand Awareness', sensitivity: 0.008, totalImpact: 5.6 }
        ],
        relationships: [
            { targetDriver: 'Lead Volume', relationship: 'direct', coefficient: 3.5 },
            { targetDriver: 'CAC', relationship: 'direct', coefficient: 0.7 }
        ],
        historicalData: [
            { period: '2024-Q1', value: 3800000, actualImpact: 19760000 },
            { period: '2024-Q2', value: 4000000, actualImpact: 20800000 },
            { period: '2024-Q3', value: 4200000, actualImpact: 21840000 },
            { period: '2024-Q4', value: 4500000, actualImpact: 23400000 }
        ]
    },
    {
        id: 'driver-5',
        name: 'R&D Headcount',
        category: 'cost',
        currentValue: 180,
        plannedValue: 210,
        unit: 'FTEs',
        impact: [
            { metric: 'Product Features', sensitivity: 0.8, totalImpact: 24 },
            { metric: 'R&D Cost', sensitivity: 180000, totalImpact: 5400000 }
        ],
        relationships: [
            { targetDriver: 'Feature Velocity', relationship: 'direct', coefficient: 0.9 },
            { targetDriver: 'Technical Debt', relationship: 'inverse', coefficient: -0.3 }
        ],
        historicalData: [
            { period: '2024-Q1', value: 165, actualImpact: 29700000 },
            { period: '2024-Q2', value: 170, actualImpact: 30600000 },
            { period: '2024-Q3', value: 175, actualImpact: 31500000 },
            { period: '2024-Q4', value: 180, actualImpact: 32400000 }
        ]
    }
];

// External Data Integration Examples
export interface ExternalDataSource {
    id: string;
    name: string;
    type: 'market' | 'economic' | 'competitor' | 'weather' | 'social';
    currentValue: number;
    trend: 'up' | 'down' | 'stable';
    impact: string;
    lastUpdated: Date;
    forecast: ExternalForecast[];
}

export interface ExternalForecast {
    period: string;
    value: number;
    confidence: number;
}

export const externalDataSources: ExternalDataSource[] = [
    {
        id: 'ext-1',
        name: 'SaaS Market Growth Rate',
        type: 'market',
        currentValue: 18.5,
        trend: 'stable',
        impact: 'Positive tailwind for new customer acquisition',
        lastUpdated: new Date(),
        forecast: [
            { period: '2025-Q2', value: 18.2, confidence: 85 },
            { period: '2025-Q3', value: 17.8, confidence: 78 },
            { period: '2025-Q4', value: 17.5, confidence: 72 }
        ]
    },
    {
        id: 'ext-2',
        name: 'US GDP Growth',
        type: 'economic',
        currentValue: 2.1,
        trend: 'down',
        impact: 'Slower growth may impact enterprise spending',
        lastUpdated: new Date(),
        forecast: [
            { period: '2025-Q2', value: 1.8, confidence: 82 },
            { period: '2025-Q3', value: 1.6, confidence: 75 },
            { period: '2025-Q4', value: 1.9, confidence: 68 }
        ]
    },
    {
        id: 'ext-3',
        name: 'Competitor Pricing Index',
        type: 'competitor',
        currentValue: 102.5,
        trend: 'up',
        impact: 'Competitors raising prices, opportunity for us to follow',
        lastUpdated: new Date(),
        forecast: [
            { period: '2025-Q2', value: 104.2, confidence: 88 },
            { period: '2025-Q3', value: 105.1, confidence: 82 },
            { period: '2025-Q4', value: 105.8, confidence: 76 }
        ]
    },
    {
        id: 'ext-4',
        name: 'Tech Sector Sentiment',
        type: 'social',
        currentValue: 68.5,
        trend: 'up',
        impact: 'Positive sentiment supporting brand and sales',
        lastUpdated: new Date(),
        forecast: [
            { period: '2025-Q2', value: 70.2, confidence: 72 },
            { period: '2025-Q3', value: 71.5, confidence: 65 },
            { period: '2025-Q4', value: 72.1, confidence: 58 }
        ]
    }
];

// Variance Analysis Detail
export interface VarianceAnalysisDetail {
    id: string;
    period: string;
    metric: string;
    actual: number;
    forecast: number;
    budget: number;
    priorYear: number;
    variance: {
        vsForecast: VarianceBreakdown;
        vsBudget: VarianceBreakdown;
        vsPriorYear: VarianceBreakdown;
    };
    rootCauses: RootCause[];
    recommendations: string[];
}

export interface VarianceBreakdown {
    total: number;
    totalPercent: number;
    components: {
        price: number;
        volume: number;
        mix: number;
        fx: number;
        other: number;
    };
}

export interface RootCause {
    factor: string;
    impact: number;
    description: string;
    evidence: string[];
}

export const varianceAnalysisDetails: VarianceAnalysisDetail[] = [
    {
        id: 'var-1',
        period: '2025-Q1',
        metric: 'Revenue',
        actual: 45200000,
        forecast: 45000000,
        budget: 45000000,
        priorYear: 38500000,
        variance: {
            vsForecast: {
                total: 200000,
                totalPercent: 0.4,
                components: {
                    price: 450000,
                    volume: 150000,
                    mix: -350000,
                    fx: -50000,
                    other: 0
                }
            },
            vsBudget: {
                total: 200000,
                totalPercent: 0.4,
                components: {
                    price: 450000,
                    volume: 150000,
                    mix: -350000,
                    fx: -50000,
                    other: 0
                }
            },
            vsPriorYear: {
                total: 6700000,
                totalPercent: 17.4,
                components: {
                    price: 2200000,
                    volume: 4800000,
                    mix: -200000,
                    fx: -100000,
                    other: 0
                }
            }
        },
        rootCauses: [
            {
                factor: 'Price Increase',
                impact: 450000,
                description: '5% price increase implemented successfully with minimal churn',
                evidence: [
                    'Churn rate remained at 8% vs 10% modeled',
                    '95% of renewals accepted new pricing',
                    'Enterprise segment showed 0% price resistance'
                ]
            },
            {
                factor: 'Product Mix Shift',
                impact: -350000,
                description: 'Higher proportion of Starter tier sales than planned',
                evidence: [
                    'Starter tier was 42% of new sales vs 35% planned',
                    'Enterprise sales cycle extended by 15 days',
                    'SMB segment grew 25% YoY'
                ]
            }
        ],
        recommendations: [
            'Accelerate enterprise sales enablement to improve mix',
            'Consider additional price increase for FY26 given low resistance',
            'Invest in product features to drive tier upgrades'
        ]
    }
];

// Collaborative Planning Data
export interface PlanningSession {
    id: string;
    name: string;
    type: 'annual' | 'quarterly' | 'monthly' | 'adhoc';
    status: 'draft' | 'in_progress' | 'review' | 'approved';
    participants: Participant[];
    timeline: {
        start: Date;
        end: Date;
        milestones: Milestone[];
    };
    tasks: PlanningTask[];
    comments: ThreadedComment[];
}

export interface Participant {
    id: string;
    name: string;
    role: string;
    department: string;
    responsibilities: string[];
}

export interface Milestone {
    name: string;
    date: Date;
    status: 'pending' | 'completed' | 'delayed';
}

export interface PlanningTask {
    id: string;
    title: string;
    assignee: string;
    dueDate: Date;
    status: 'not_started' | 'in_progress' | 'completed';
    dependencies: string[];
}

export interface ThreadedComment {
    id: string;
    author: string;
    text: string;
    timestamp: Date;
    replies: ThreadedComment[];
    attachments?: string[];
}

export const planningSessions: PlanningSession[] = [
    {
        id: 'session-1',
        name: 'Q2 2025 Quarterly Forecast',
        type: 'quarterly',
        status: 'in_progress',
        participants: [
            {
                id: 'p1',
                name: 'Sarah Chen',
                role: 'CFO',
                department: 'Finance',
                responsibilities: ['Final approval', 'Board presentation']
            },
            {
                id: 'p2',
                name: 'Michael Roberts',
                role: 'VP Sales',
                department: 'Sales',
                responsibilities: ['Sales forecast', 'Pipeline review']
            },
            {
                id: 'p3',
                name: 'Emma Thompson',
                role: 'VP EMEA',
                department: 'Regional',
                responsibilities: ['EMEA forecast', 'FX impact analysis']
            }
        ],
        timeline: {
            start: new Date('2025-03-15'),
            end: new Date('2025-03-31'),
            milestones: [
                { name: 'Initial submissions', date: new Date('2025-03-20'), status: 'completed' },
                { name: 'Finance review', date: new Date('2025-03-25'), status: 'pending' },
                { name: 'Final approval', date: new Date('2025-03-30'), status: 'pending' }
            ]
        },
        tasks: [
            {
                id: 't1',
                title: 'Update sales pipeline forecast',
                assignee: 'Michael Roberts',
                dueDate: new Date('2025-03-20'),
                status: 'completed',
                dependencies: []
            },
            {
                id: 't2',
                title: 'Review EMEA regulatory impact',
                assignee: 'Emma Thompson',
                dueDate: new Date('2025-03-22'),
                status: 'in_progress',
                dependencies: ['t1']
            },
            {
                id: 't3',
                title: 'Consolidate regional forecasts',
                assignee: 'Sarah Chen',
                dueDate: new Date('2025-03-25'),
                status: 'not_started',
                dependencies: ['t1', 't2']
            }
        ],
        comments: [
            {
                id: 'c1',
                author: 'Sarah Chen',
                text: 'Please ensure all management adjustments are documented with clear justification.',
                timestamp: new Date('2025-03-16'),
                replies: [
                    {
                        id: 'c2',
                        author: 'Michael Roberts',
                        text: 'Will include deal-by-deal analysis for all adjustments >$500K',
                        timestamp: new Date('2025-03-16'),
                        replies: []
                    }
                ]
            }
        ]
    }
];

// Helper function to get current period data
export function getCurrentPeriodData() {
    const currentQuarter = 'Q1 2025';
    return {
        revenue: {
            actual: 45200000,
            forecast: 45500000,
            mlForecast: 45000000,
            budget: 45000000,
            priorYear: 38500000
        },
        metrics: {
            grossMargin: 70.8,
            ebitdaMargin: 18.6,
            cashConversion: 95.2,
            dso: 62,
            headcount: 750
        },
        insights: aiInsights.filter(i => i.status === 'new').slice(0, 3),
        alerts: aiInsights.filter(i => i.priority === 'critical' || i.priority === 'high')
    };
}

// Helper function to calculate weighted scenario outcome
export function calculateWeightedScenarioOutcome(metric: string): number {
    const weightedValue = scenarios.reduce((total, scenario) => {
        const impact = scenario.impacts.find(i => i.metric === metric);
        if (impact) {
            return total + (impact.scenarioCase * (scenario.probability / 100));
        }
        return total;
    }, 0);
    return Math.round(weightedValue);
}

// Export all data collections
export const forecastData = {
    insights: aiInsights,
    managementAdjustments,
    bottomsUp: bottomsUpHierarchy,
    trending: trendingData,
    accuracy: accuracyComparisons,
    scenarios,
    comparisons: comparisonViews,
    drivers: planningDrivers,
    external: externalDataSources,
    variance: varianceAnalysisDetails,
    planning: planningSessions
}; 