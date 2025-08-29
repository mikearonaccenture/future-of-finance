import { addMonths, endOfMonth, format, startOfMonth, subMonths } from 'date-fns';

// AI Agents Configuration
export interface AIAgent {
    id: string;
    name: string;
    symbol: string;
    status: 'active' | 'processing' | 'investigating' | 'syncing';
    color: string;
    currentActivity: string;
    confidence: number;
    lastUpdate: string;
}

export const aiAgents: AIAgent[] = [
    {
        id: 'fi',
        name: 'Forecast Intelligence Agent',
        symbol: 'FI',
        status: 'active',
        color: 'blue',
        currentActivity: 'Analyzing 1.2M data points across 47 drivers',
        confidence: 94.7,
        lastUpdate: '2 min ago'
    },
    {
        id: 'sa',
        name: 'Scenario Architect Agent',
        symbol: 'SA',
        status: 'processing',
        color: 'purple',
        currentActivity: 'Generating recession scenario based on economic indicators',
        confidence: 87.3,
        lastUpdate: '5 min ago'
    },
    {
        id: 'vd',
        name: 'Variance Detective Agent',
        symbol: 'VD',
        status: 'investigating',
        color: 'orange',
        currentActivity: 'Analyzing $2.3M variance in European revenue',
        confidence: 91.2,
        lastUpdate: '3 min ago'
    },
    {
        id: 'co',
        name: 'Consolidation Orchestrator Agent',
        symbol: 'CO',
        status: 'syncing',
        color: 'green',
        currentActivity: 'Consolidating forecasts from 23 entities',
        confidence: 99.1,
        lastUpdate: '1 min ago'
    }
];

// Agent Notifications
export interface AgentNotification {
    id: string;
    agentId: string;
    type: 'info' | 'warning' | 'success' | 'insight';
    title: string;
    message: string;
    timestamp: string;
    actions?: string[];
    priority: 'low' | 'medium' | 'high';
}

export const agentNotifications: AgentNotification[] = [
    {
        id: 'fn-1',
        agentId: 'fi',
        type: 'success',
        title: 'Forecast Accuracy Improved',
        message: 'March actuals processed. Forecast accuracy improved by 2.3%',
        timestamp: '2 min ago',
        actions: ['View Details', 'Update Model'],
        priority: 'medium'
    },
    {
        id: 'fn-2',
        agentId: 'fi',
        type: 'warning',
        title: 'Unusual Pattern Detected',
        message: 'Unusual pattern detected in APAC region. Investigating...',
        timestamp: '5 min ago',
        actions: ['Investigate', 'Create Alert'],
        priority: 'high'
    },
    {
        id: 'fn-3',
        agentId: 'sa',
        type: 'info',
        title: 'Scenario Update',
        message: 'Created 3 new scenarios based on Fed rate decision',
        timestamp: '8 min ago',
        actions: ['Review Scenarios', 'Compare Impact'],
        priority: 'medium'
    },
    {
        id: 'fn-4',
        agentId: 'vd',
        type: 'insight',
        title: 'Variance Analysis Complete',
        message: 'Root cause identified: Currency impact (-$800K), Delayed deals (-$1.2M)',
        timestamp: '10 min ago',
        actions: ['View Analysis', 'Take Action'],
        priority: 'high'
    }
];

// Enhanced KPI data
export const kpiData = {
    revenue: {
        value: 47.2,
        unit: 'M',
        trend: 'up' as const,
        change: '+8.3%',
        subtitle: 'vs. plan',
        confidence: 94.7,
        forecast: 49.1,
        target: 45.0
    },
    ebitda: {
        value: 23.5,
        unit: '%',
        trend: 'up' as const,
        change: '+2.1pp',
        subtitle: 'margin expansion',
        confidence: 91.2,
        forecast: 24.1,
        target: 22.0
    },
    cash: {
        value: 12.8,
        unit: 'M',
        trend: 'stable' as const,
        change: '+0.2%',
        subtitle: 'strong position',
        confidence: 96.5,
        forecast: 13.2,
        target: 10.0
    },
    accuracy: {
        value: 94.7,
        unit: '%',
        trend: 'up' as const,
        change: '+2.3%',
        subtitle: 'AI-powered',
        confidence: 99.1,
        forecast: 95.5,
        target: 95.0
    }
};

// Scenario modeling data with Monte Carlo support
export const scenarioData = {
    marketGrowth: {
        value: 5.2,
        min: -5,
        max: 15,
        step: 0.1,
        unit: '%',
        distribution: 'normal',
        volatility: 2.1
    },
    winRate: {
        value: 35,
        min: 20,
        max: 50,
        step: 1,
        unit: '%',
        distribution: 'beta',
        volatility: 3.5
    },
    avgDealSize: {
        value: 125,
        min: 75,
        max: 200,
        step: 5,
        unit: 'K',
        distribution: 'lognormal',
        volatility: 15.2
    }
};

// Calculate scenario impact with Monte Carlo simulation
export function calculateImpact(marketGrowth: number, winRate: number, avgDealSize: number) {
    const baseRevenue = 50; // $50M baseline
    const _baseDeals = 400; // 400 deals baseline

    // Calculate revenue impact
    const marketMultiplier = 1 + (marketGrowth / 100);
    const winMultiplier = winRate / 35; // Normalized to baseline 35%
    const dealSizeMultiplier = avgDealSize / 125; // Normalized to baseline $125K

    const newRevenue = baseRevenue * marketMultiplier * winMultiplier * dealSizeMultiplier;
    const revenueImpact = newRevenue - baseRevenue;

    // Calculate margin impact (simplified)
    const marginImpact = (revenueImpact * 0.3); // Assume 30% incremental margin

    // Calculate probability based on how far from baseline
    const marketDelta = Math.abs(marketGrowth - 5.2) / 10;
    const winDelta = Math.abs(winRate - 35) / 15;
    const dealDelta = Math.abs(avgDealSize - 125) / 62.5;

    const avgDelta = (marketDelta + winDelta + dealDelta) / 3;
    const probability = Math.max(20, Math.round(90 - (avgDelta * 40)));

    return {
        revenue: revenueImpact,
        margin: marginImpact,
        probability: probability,
        scenarios: {
            optimistic: revenueImpact * 1.3,
            realistic: revenueImpact,
            pessimistic: revenueImpact * 0.7
        }
    };
}

// AI Predictions with agent attribution
export const aiPredictions = [
    {
        id: 1,
        agentId: 'fi',
        type: 'opportunity',
        title: 'Revenue Acceleration Pattern',
        description: 'Detected 23% revenue acceleration in Q4. SaaS expansion driving $2.3M uplift. Recommend increasing Q1 targets.',
        confidence: 94.7,
        impact: '$2.3M',
        timeframe: 'Q1 2025',
        probability: 87
    },
    {
        id: 2,
        agentId: 'vd',
        type: 'warning',
        title: 'EMEA Variance Investigation',
        description: 'Analyzing $2.3M negative variance in European operations. Root causes: FX impact (-$800K), deal delays (-$1.2M).',
        confidence: 91.2,
        impact: '-$2.3M',
        timeframe: 'March 2025',
        probability: 95
    },
    {
        id: 3,
        agentId: 'sa',
        type: 'insight',
        title: 'Market Contraction Scenario',
        description: 'Economic indicators suggest 34% probability of Q3 market contraction. Defensive scenario recommended.',
        confidence: 78.5,
        impact: '-8% costs',
        timeframe: 'Q3 2025',
        probability: 34
    }
];

// AI Assistant messages with agent integration
export const aiAssistantMessages = [
    {
        role: 'assistant' as const,
        content: `Hello! I'm your AI-powered FP&A assistant. I'm currently coordinating with our specialized agents:

🔵 **Forecast Intelligence (FI)** - Analyzing forecast accuracy (94.7% confidence)
🟣 **Scenario Architect (SA)** - Running Monte Carlo simulations  
🟠 **Variance Detective (VD)** - Investigating EMEA variance
🟢 **Consolidation Orchestrator (CO)** - Processing 23 entities

How can I help you with your financial planning today?`,
        timestamp: new Date(Date.now() - 600000).toISOString()
    }
];

// Enhanced forecast data generation with time series
export function generateForecastData(scenarios?: any, timeRange?: { start: Date; end: Date }) {
    const startDate = timeRange?.start || subMonths(new Date(), 12);
    const endDate = timeRange?.end || addMonths(new Date(), 12);

    const data = [];
    let currentDate = startOfMonth(startDate);

    // Base metrics
    let baseRevenue = 10000000;
    let baseExpenses = 7500000;

    // Apply scenarios if provided
    if (scenarios) {
        baseRevenue *= (1 + (scenarios.revenueGrowth || 0) / 100);
        baseExpenses *= (1 + (scenarios.costReduction || 0) / 100);
    }

    while (currentDate <= endOfMonth(endDate)) {
        const monthsFromStart = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30));

        // Seasonal and growth patterns
        const seasonalFactor = 1 + 0.1 * Math.sin((currentDate.getMonth() / 12) * 2 * Math.PI);
        const growthFactor = 1 + (monthsFromStart * 0.02); // 2% monthly growth
        const randomFactor = 0.9 + Math.random() * 0.2; // ±10% variance

        const revenue = baseRevenue * seasonalFactor * growthFactor * randomFactor;
        const expenses = baseExpenses * (0.95 + Math.random() * 0.1) * growthFactor;

        data.push({
            month: format(currentDate, 'MMM yyyy'),
            date: currentDate.toISOString(),
            actual: Math.round(revenue - expenses),
            forecast: Math.round((revenue - expenses) * (1 + (Math.random() - 0.5) * 0.1)),
            revenue: Math.round(revenue),
            expenses: Math.round(expenses),
            variance: Math.round((Math.random() - 0.5) * 500000),
            confidence: Math.round(85 + Math.random() * 15),
        });

        currentDate = addMonths(currentDate, 1);
    }

    return data;
}

// Monte Carlo simulation for scenario analysis
export function runMonteCarloSimulation(baseScenario: any, iterations: number = 1000) {
    const results: number[] = [];

    for (let i = 0; i < iterations; i++) {
        // Add random variations to each parameter
        const marketGrowth = baseScenario.marketGrowth + (Math.random() - 0.5) * 4;
        const winRate = Math.max(10, Math.min(60, baseScenario.winRate + (Math.random() - 0.5) * 10));
        const avgDealSize = Math.max(50, baseScenario.avgDealSize + (Math.random() - 0.5) * 40);

        const impact = calculateImpact(marketGrowth, winRate, avgDealSize);
        results.push(impact.revenue);
    }

    // Calculate percentiles
    results.sort((a, b) => a - b);

    return {
        p10: results[Math.floor(iterations * 0.1)],
        p25: results[Math.floor(iterations * 0.25)],
        p50: results[Math.floor(iterations * 0.5)],
        p75: results[Math.floor(iterations * 0.75)],
        p90: results[Math.floor(iterations * 0.9)],
        mean: results.reduce((a, b) => a + b, 0) / iterations,
        std: Math.sqrt(results.reduce((acc, val) => acc + Math.pow(val - results.reduce((a, b) => a + b, 0) / iterations, 2), 0) / iterations)
    };
}

// Variance analysis data with root cause breakdown
export const varianceData = {
    totalVariance: -2.3,
    currency: 'M',
    components: [
        {
            name: 'Volume',
            impact: -1.2,
            percentage: 52,
            rootCause: 'Supply chain delays in APAC',
            action: 'Accelerate supplier diversification'
        },
        {
            name: 'Price',
            impact: -0.3,
            percentage: 13,
            rootCause: 'Competitive pressure',
            action: 'Implement value-based pricing'
        },
        {
            name: 'FX',
            impact: -0.8,
            percentage: 35,
            rootCause: 'Unhedged EUR exposure',
            action: 'Increase hedge ratio to 80%'
        }
    ]
};

// Chart data generation utilities
export function generateChartData(type: 'line' | 'bar' | 'area', months: number = 12) {
    const data = [];
    const startDate = subMonths(new Date(), months);

    for (let i = 0; i < months; i++) {
        const date = addMonths(startDate, i);
        const baseValue = 1000000;
        const seasonality = 1 + 0.1 * Math.sin((i / 12) * 2 * Math.PI);
        const growth = 1 + (i * 0.02);
        const variance = 0.9 + Math.random() * 0.2;

        data.push({
            month: format(date, 'MMM'),
            fullDate: date.toISOString(),
            value: Math.round(baseValue * seasonality * growth * variance),
            forecast: Math.round(baseValue * seasonality * growth * (variance + 0.05)),
            target: Math.round(baseValue * growth * 1.1),
            confidence: Math.round(85 + Math.random() * 15),
        });
    }

    return data;
}

// Export enhanced utility functions
export { addMonths, endOfMonth, format, startOfMonth, subMonths } from 'date-fns';
