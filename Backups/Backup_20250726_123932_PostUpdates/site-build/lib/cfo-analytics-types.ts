// CFO Analytics Types
export interface FinancialStatement {
    period: string;
    actual?: number;
    mlForecast: number;
    cfoAdjustment: number;
    finalForecast: number;
    confidence: number;
    assumptions: string[];
}

export interface PLStatement {
    revenue: FinancialStatement;
    cogs: FinancialStatement;
    grossProfit: FinancialStatement;
    grossMargin: FinancialStatement;
    opex: {
        sales: FinancialStatement;
        marketing: FinancialStatement;
        rd: FinancialStatement;
        ga: FinancialStatement;
        total: FinancialStatement;
    };
    ebitda: FinancialStatement;
    ebitdaMargin: FinancialStatement;
    depreciation: FinancialStatement;
    ebit: FinancialStatement;
    interestExpense: FinancialStatement;
    taxExpense: FinancialStatement;
    netIncome: FinancialStatement;
    netMargin: FinancialStatement;
    eps: FinancialStatement;
}

export interface BalanceSheet {
    assets: {
        cash: FinancialStatement;
        accountsReceivable: FinancialStatement;
        inventory: FinancialStatement;
        prepaidExpenses: FinancialStatement;
        currentAssets: FinancialStatement;
        ppe: FinancialStatement;
        intangibles: FinancialStatement;
        totalAssets: FinancialStatement;
    };
    liabilities: {
        accountsPayable: FinancialStatement;
        accruedExpenses: FinancialStatement;
        shortTermDebt: FinancialStatement;
        currentLiabilities: FinancialStatement;
        longTermDebt: FinancialStatement;
        totalLiabilities: FinancialStatement;
    };
    equity: {
        commonStock: FinancialStatement;
        retainedEarnings: FinancialStatement;
        totalEquity: FinancialStatement;
    };
}

export interface CashFlow {
    operating: {
        netIncome: FinancialStatement;
        depreciation: FinancialStatement;
        workingCapitalChanges: FinancialStatement;
        totalOperating: FinancialStatement;
    };
    investing: {
        capex: FinancialStatement;
        acquisitions: FinancialStatement;
        assetSales: FinancialStatement;
        totalInvesting: FinancialStatement;
    };
    financing: {
        debtIssuance: FinancialStatement;
        debtRepayment: FinancialStatement;
        dividends: FinancialStatement;
        shareRepurchase: FinancialStatement;
        totalFinancing: FinancialStatement;
    };
    netCashFlow: FinancialStatement;
    endingCash: FinancialStatement;
}

export interface WorkingCapitalMetrics {
    dso: FinancialStatement; // Days Sales Outstanding
    dio: FinancialStatement; // Days Inventory Outstanding
    dpo: FinancialStatement; // Days Payables Outstanding
    cashConversionCycle: FinancialStatement;
    workingCapitalTurnover: FinancialStatement;
}

export interface MarketIntelligence {
    competitorBenchmarks: {
        company: string;
        revenue: number;
        marketShare: number;
        grossMargin: number;
        ebitdaMargin: number;
        revenueGrowth: number;
    }[];
    economicIndicators: {
        gdpGrowth: number;
        inflation: number;
        interestRates: number;
        exchangeRates: { [currency: string]: number };
        commodityPrices: { [commodity: string]: number };
    };
    industryTrends: {
        trend: string;
        impact: 'positive' | 'negative' | 'neutral';
        magnitude: number;
        timeframe: string;
    }[];
}

export interface RiskMetrics {
    liquidityRisk: {
        currentRatio: number;
        quickRatio: number;
        cashBurnRate: number;
        runwayMonths: number;
    };
    creditRisk: {
        debtToEquity: number;
        interestCoverage: number;
        debtServiceCoverage: number;
        creditRating: string;
    };
    operationalRisk: {
        customerConcentration: number;
        supplierConcentration: number;
        inventoryObsolescence: number;
        keyPersonnelRisk: string;
    };
    marketRisk: {
        betaCoefficient: number;
        currencyExposure: number;
        commodityExposure: number;
        interestRateSensitivity: number;
    };
}

export interface SensitivityAnalysis {
    variable: string;
    baseCase: number;
    scenarios: {
        name: string;
        change: number;
        revenueImpact: number;
        ebitdaImpact: number;
        cashFlowImpact: number;
        probability: number;
    }[];
}

export interface CFODecision {
    id: string;
    type: 'adjustment' | 'approval' | 'rejection' | 'escalation';
    area: string;
    description: string;
    impact: {
        financial: number;
        strategic: string;
        risk: string;
    };
    rationale: string;
    alternatives: string[];
    timestamp: Date;
    status: 'pending' | 'approved' | 'implemented';
}

export interface ForecastAccuracy {
    period: string;
    kpi: string;
    mlForecast: number;
    humanForecast: number;
    actual: number;
    mlError: number;
    humanError: number;
    mlMape: number; // Mean Absolute Percentage Error
    humanMape: number;
    biasDirection: 'over' | 'under' | 'accurate';
}

export interface BusinessDriver {
    id: string;
    name: string;
    category: 'volume' | 'price' | 'cost' | 'efficiency' | 'market';
    currentValue: number;
    forecastValue: number;
    impact: {
        revenue: number;
        margin: number;
        cashFlow: number;
    };
    controllability: 'high' | 'medium' | 'low';
    leadTime: string;
    dependencies: string[];
} 