import {
    BalanceSheet,
    BusinessDriver,
    CashFlow,
    MarketIntelligence,
    PLStatement,
    RiskMetrics,
    SensitivityAnalysis,
    WorkingCapitalMetrics
} from './cfo-analytics-types';

// Helper function to create financial statement entries
function createFinancialEntry(
    period: string,
    baseValue: number,
    growthRate: number = 0.05,
    confidence: number = 90
) {
    const mlForecast = baseValue * (1 + growthRate);
    const cfoAdjustment = mlForecast * (Math.random() * 0.04 - 0.02); // ±2% adjustment

    return {
        period,
        mlForecast,
        cfoAdjustment,
        finalForecast: mlForecast + cfoAdjustment,
        confidence,
        assumptions: [
            'Market growth continues at current pace',
            'No major supply chain disruptions',
            'Exchange rates remain stable'
        ]
    };
}

// P&L Statement Mock Data
export const mockPLStatement: PLStatement = {
    revenue: createFinancialEntry('Q2 2025', 156300000, 0.085, 92),
    cogs: createFinancialEntry('Q2 2025', 89200000, 0.075, 88),
    grossProfit: createFinancialEntry('Q2 2025', 67100000, 0.098, 91),
    grossMargin: createFinancialEntry('Q2 2025', 0.429, 0.01, 93),
    opex: {
        sales: createFinancialEntry('Q2 2025', 18700000, 0.06, 94),
        marketing: createFinancialEntry('Q2 2025', 12400000, 0.08, 89),
        rd: createFinancialEntry('Q2 2025', 9800000, 0.10, 87),
        ga: createFinancialEntry('Q2 2025', 7600000, 0.04, 95),
        total: createFinancialEntry('Q2 2025', 48500000, 0.065, 90)
    },
    ebitda: createFinancialEntry('Q2 2025', 18600000, 0.15, 88),
    ebitdaMargin: createFinancialEntry('Q2 2025', 0.119, 0.02, 89),
    depreciation: createFinancialEntry('Q2 2025', 3200000, 0.03, 96),
    ebit: createFinancialEntry('Q2 2025', 15400000, 0.18, 87),
    interestExpense: createFinancialEntry('Q2 2025', 1800000, -0.02, 98),
    taxExpense: createFinancialEntry('Q2 2025', 3400000, 0.18, 92),
    netIncome: createFinancialEntry('Q2 2025', 10200000, 0.22, 86),
    netMargin: createFinancialEntry('Q2 2025', 0.065, 0.03, 88),
    eps: createFinancialEntry('Q2 2025', 2.04, 0.22, 86)
};

// Balance Sheet Mock Data
export const mockBalanceSheet: BalanceSheet = {
    assets: {
        cash: createFinancialEntry('Q2 2025', 45000000, 0.12, 95),
        accountsReceivable: createFinancialEntry('Q2 2025', 38000000, 0.085, 91),
        inventory: createFinancialEntry('Q2 2025', 52000000, 0.06, 88),
        prepaidExpenses: createFinancialEntry('Q2 2025', 3500000, 0.04, 96),
        currentAssets: createFinancialEntry('Q2 2025', 138500000, 0.08, 90),
        ppe: createFinancialEntry('Q2 2025', 125000000, 0.04, 94),
        intangibles: createFinancialEntry('Q2 2025', 28000000, 0.02, 97),
        totalAssets: createFinancialEntry('Q2 2025', 291500000, 0.06, 92)
    },
    liabilities: {
        accountsPayable: createFinancialEntry('Q2 2025', 28000000, 0.07, 89),
        accruedExpenses: createFinancialEntry('Q2 2025', 12000000, 0.05, 92),
        shortTermDebt: createFinancialEntry('Q2 2025', 15000000, -0.10, 95),
        currentLiabilities: createFinancialEntry('Q2 2025', 55000000, 0.03, 91),
        longTermDebt: createFinancialEntry('Q2 2025', 80000000, -0.05, 96),
        totalLiabilities: createFinancialEntry('Q2 2025', 135000000, -0.02, 93)
    },
    equity: {
        commonStock: createFinancialEntry('Q2 2025', 50000000, 0, 100),
        retainedEarnings: createFinancialEntry('Q2 2025', 106500000, 0.12, 90),
        totalEquity: createFinancialEntry('Q2 2025', 156500000, 0.10, 92)
    }
};

// Cash Flow Mock Data
export const mockCashFlow: CashFlow = {
    operating: {
        netIncome: createFinancialEntry('Q2 2025', 10200000, 0.22, 86),
        depreciation: createFinancialEntry('Q2 2025', 3200000, 0.03, 96),
        workingCapitalChanges: createFinancialEntry('Q2 2025', -2100000, 0.15, 82),
        totalOperating: createFinancialEntry('Q2 2025', 11300000, 0.18, 88)
    },
    investing: {
        capex: createFinancialEntry('Q2 2025', -8500000, 0.12, 85),
        acquisitions: createFinancialEntry('Q2 2025', -15000000, 0, 70),
        assetSales: createFinancialEntry('Q2 2025', 2000000, 0, 60),
        totalInvesting: createFinancialEntry('Q2 2025', -21500000, 0.08, 75)
    },
    financing: {
        debtIssuance: createFinancialEntry('Q2 2025', 20000000, 0, 90),
        debtRepayment: createFinancialEntry('Q2 2025', -5000000, 0, 98),
        dividends: createFinancialEntry('Q2 2025', -3060000, 0.10, 95),
        shareRepurchase: createFinancialEntry('Q2 2025', -5000000, 0, 80),
        totalFinancing: createFinancialEntry('Q2 2025', 6940000, -0.20, 85)
    },
    netCashFlow: createFinancialEntry('Q2 2025', -3260000, 0.25, 82),
    endingCash: createFinancialEntry('Q2 2025', 41740000, 0.08, 90)
};

// Working Capital Metrics
export const mockWorkingCapital: WorkingCapitalMetrics = {
    dso: createFinancialEntry('Q2 2025', 88, -0.02, 92),
    dio: createFinancialEntry('Q2 2025', 120, -0.04, 88),
    dpo: createFinancialEntry('Q2 2025', 65, 0.03, 90),
    cashConversionCycle: createFinancialEntry('Q2 2025', 143, -0.03, 89),
    workingCapitalTurnover: createFinancialEntry('Q2 2025', 5.2, 0.05, 91)
};

// Market Intelligence
export const mockMarketIntelligence: MarketIntelligence = {
    competitorBenchmarks: [
        {
            company: 'Competitor A',
            revenue: 1250000000,
            marketShare: 0.22,
            grossMargin: 0.415,
            ebitdaMargin: 0.108,
            revenueGrowth: 0.065
        },
        {
            company: 'Competitor B',
            revenue: 980000000,
            marketShare: 0.17,
            grossMargin: 0.398,
            ebitdaMargin: 0.095,
            revenueGrowth: 0.072
        },
        {
            company: 'Our Company',
            revenue: 625000000,
            marketShare: 0.11,
            grossMargin: 0.429,
            ebitdaMargin: 0.119,
            revenueGrowth: 0.085
        },
        {
            company: 'Competitor C',
            revenue: 540000000,
            marketShare: 0.09,
            grossMargin: 0.382,
            ebitdaMargin: 0.082,
            revenueGrowth: 0.045
        }
    ],
    economicIndicators: {
        gdpGrowth: 0.028,
        inflation: 0.032,
        interestRates: 0.0525,
        exchangeRates: {
            'EUR': 0.92,
            'GBP': 0.79,
            'JPY': 147.25,
            'CNY': 7.18
        },
        commodityPrices: {
            'Oil': 78.50,
            'Natural Gas': 2.85,
            'Aluminum': 2250,
            'Copper': 8500,
            'Wheat': 550
        }
    },
    industryTrends: [
        {
            trend: 'Sustainability focus driving premium product demand',
            impact: 'positive',
            magnitude: 0.15,
            timeframe: '12-18 months'
        },
        {
            trend: 'Raw material cost inflation',
            impact: 'negative',
            magnitude: 0.08,
            timeframe: '6-9 months'
        },
        {
            trend: 'E-commerce channel growth',
            impact: 'positive',
            magnitude: 0.22,
            timeframe: '24 months'
        },
        {
            trend: 'Supply chain regionalization',
            impact: 'neutral',
            magnitude: 0.05,
            timeframe: '18-24 months'
        }
    ]
};

// Risk Metrics
export const mockRiskMetrics: RiskMetrics = {
    liquidityRisk: {
        currentRatio: 2.52,
        quickRatio: 1.57,
        cashBurnRate: 2800000,
        runwayMonths: 16.2
    },
    creditRisk: {
        debtToEquity: 0.61,
        interestCoverage: 8.56,
        debtServiceCoverage: 2.35,
        creditRating: 'BBB+'
    },
    operationalRisk: {
        customerConcentration: 0.18,
        supplierConcentration: 0.24,
        inventoryObsolescence: 0.032,
        keyPersonnelRisk: 'Medium - succession planning in progress'
    },
    marketRisk: {
        betaCoefficient: 1.15,
        currencyExposure: 0.35,
        commodityExposure: 0.28,
        interestRateSensitivity: -0.12
    }
};

// Sensitivity Analysis
export const mockSensitivityAnalysis: SensitivityAnalysis[] = [
    {
        variable: 'Raw Material Costs',
        baseCase: 89200000,
        scenarios: [
            {
                name: 'Best Case (-5%)',
                change: -0.05,
                revenueImpact: 0,
                ebitdaImpact: 4460000,
                cashFlowImpact: 3345000,
                probability: 0.20
            },
            {
                name: 'Base Case',
                change: 0,
                revenueImpact: 0,
                ebitdaImpact: 0,
                cashFlowImpact: 0,
                probability: 0.50
            },
            {
                name: 'Worst Case (+10%)',
                change: 0.10,
                revenueImpact: 0,
                ebitdaImpact: -8920000,
                cashFlowImpact: -6690000,
                probability: 0.30
            }
        ]
    },
    {
        variable: 'Sales Volume',
        baseCase: 3800000,
        scenarios: [
            {
                name: 'Strong Growth (+8%)',
                change: 0.08,
                revenueImpact: 12504000,
                ebitdaImpact: 7502400,
                cashFlowImpact: 5626800,
                probability: 0.25
            },
            {
                name: 'Moderate Growth (+3%)',
                change: 0.03,
                revenueImpact: 4689000,
                ebitdaImpact: 2813400,
                cashFlowImpact: 2110050,
                probability: 0.55
            },
            {
                name: 'Flat Growth',
                change: 0,
                revenueImpact: 0,
                ebitdaImpact: 0,
                cashFlowImpact: 0,
                probability: 0.20
            }
        ]
    },
    {
        variable: 'Exchange Rates (USD/EUR)',
        baseCase: 0.92,
        scenarios: [
            {
                name: 'USD Strengthens',
                change: -0.05,
                revenueImpact: -3125000,
                ebitdaImpact: -1875000,
                cashFlowImpact: -1406250,
                probability: 0.35
            },
            {
                name: 'Stable',
                change: 0,
                revenueImpact: 0,
                ebitdaImpact: 0,
                cashFlowImpact: 0,
                probability: 0.40
            },
            {
                name: 'USD Weakens',
                change: 0.05,
                revenueImpact: 3125000,
                ebitdaImpact: 1875000,
                cashFlowImpact: 1406250,
                probability: 0.25
            }
        ]
    }
];

// Business Drivers
export const mockBusinessDrivers: BusinessDriver[] = [
    {
        id: 'volume-growth',
        name: 'Unit Volume Growth',
        category: 'volume',
        currentValue: 3800000,
        forecastValue: 4104000,
        impact: {
            revenue: 12504000,
            margin: 0.008,
            cashFlow: 5626800
        },
        controllability: 'high',
        leadTime: '3-6 months',
        dependencies: ['production-capacity', 'sales-force-effectiveness']
    },
    {
        id: 'price-realization',
        name: 'Average Selling Price',
        category: 'price',
        currentValue: 41.13,
        forecastValue: 42.36,
        impact: {
            revenue: 4674000,
            margin: 0.012,
            cashFlow: 3505500
        },
        controllability: 'medium',
        leadTime: '1-3 months',
        dependencies: ['competitor-pricing', 'brand-strength']
    },
    {
        id: 'raw-material-cost',
        name: 'Raw Material Cost/Unit',
        category: 'cost',
        currentValue: 23.47,
        forecastValue: 24.41,
        impact: {
            revenue: 0,
            margin: -0.022,
            cashFlow: -3572000
        },
        controllability: 'low',
        leadTime: '6-9 months',
        dependencies: ['commodity-prices', 'supplier-contracts']
    },
    {
        id: 'production-efficiency',
        name: 'Manufacturing Efficiency',
        category: 'efficiency',
        currentValue: 0.875,
        forecastValue: 0.895,
        impact: {
            revenue: 0,
            margin: 0.005,
            cashFlow: 1890000
        },
        controllability: 'high',
        leadTime: '6-12 months',
        dependencies: ['capex-investments', 'workforce-training']
    },
    {
        id: 'market-share',
        name: 'Market Share %',
        category: 'market',
        currentValue: 0.11,
        forecastValue: 0.115,
        impact: {
            revenue: 28409000,
            margin: 0.003,
            cashFlow: 12784050
        },
        controllability: 'medium',
        leadTime: '12-18 months',
        dependencies: ['marketing-spend', 'product-innovation', 'distribution-expansion']
    }
]; 