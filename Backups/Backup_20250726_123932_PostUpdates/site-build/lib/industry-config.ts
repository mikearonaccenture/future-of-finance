// Industry-specific configurations for FP&A forecasting

export type Industry = 'consumer-goods' | 'financial-services' | 'life-sciences' | 'technology';

export interface IndustryConfig {
    id: Industry;
    name: string;
    description: string;
    kpis: KPIConfig[];
    forecastDrivers: ForecastDriver[];
    businessMetrics: BusinessMetric[];
}

export interface KPIConfig {
    id: string;
    name: string;
    category: 'revenue' | 'cost' | 'operational' | 'market';
    unit: string;
    format: 'currency' | 'percentage' | 'number' | 'ratio';
    description: string;
    calculation?: string;
}

export interface ForecastDriver {
    id: string;
    name: string;
    category: 'market' | 'product' | 'customer' | 'operational' | 'financial';
    impact: 'high' | 'medium' | 'low';
    description: string;
    metrics: string[]; // KPI IDs this driver impacts
}

export interface BusinessMetric {
    id: string;
    name: string;
    value: number;
    unit: string;
    trend: 'up' | 'down' | 'stable';
    insight?: string;
}

// Consumer Goods Industry Configuration
export const consumerGoodsConfig: IndustryConfig = {
    id: 'consumer-goods',
    name: 'Consumer Goods',
    description: 'Fast-moving consumer goods and retail products',
    kpis: [
        // Revenue KPIs
        {
            id: 'gross-revenue',
            name: 'Gross Revenue',
            category: 'revenue',
            unit: 'USD',
            format: 'currency',
            description: 'Total revenue before returns and allowances'
        },
        {
            id: 'net-revenue',
            name: 'Net Revenue',
            category: 'revenue',
            unit: 'USD',
            format: 'currency',
            description: 'Revenue after returns, allowances, and discounts'
        },
        {
            id: 'units-sold',
            name: 'Units Sold',
            category: 'revenue',
            unit: 'units',
            format: 'number',
            description: 'Total volume of products sold'
        },
        {
            id: 'asp',
            name: 'Average Selling Price (ASP)',
            category: 'revenue',
            unit: 'USD/unit',
            format: 'currency',
            description: 'Average price per unit sold',
            calculation: 'Net Revenue / Units Sold'
        },
        {
            id: 'market-share',
            name: 'Market Share',
            category: 'market',
            unit: '%',
            format: 'percentage',
            description: 'Percentage of total market captured'
        },
        // Cost KPIs
        {
            id: 'cogs',
            name: 'Cost of Goods Sold',
            category: 'cost',
            unit: 'USD',
            format: 'currency',
            description: 'Direct costs of producing goods sold'
        },
        {
            id: 'gross-margin',
            name: 'Gross Margin',
            category: 'cost',
            unit: '%',
            format: 'percentage',
            description: 'Gross profit as percentage of revenue',
            calculation: '(Net Revenue - COGS) / Net Revenue'
        },
        {
            id: 'trade-spend',
            name: 'Trade Spend',
            category: 'cost',
            unit: 'USD',
            format: 'currency',
            description: 'Promotional and trade marketing expenses'
        },
        {
            id: 'distribution-costs',
            name: 'Distribution Costs',
            category: 'cost',
            unit: 'USD',
            format: 'currency',
            description: 'Logistics and distribution expenses'
        },
        // Operational KPIs
        {
            id: 'inventory-turnover',
            name: 'Inventory Turnover',
            category: 'operational',
            unit: 'times',
            format: 'ratio',
            description: 'How many times inventory is sold and replaced',
            calculation: 'COGS / Average Inventory'
        },
        {
            id: 'fill-rate',
            name: 'Order Fill Rate',
            category: 'operational',
            unit: '%',
            format: 'percentage',
            description: 'Percentage of orders fulfilled completely'
        },
        {
            id: 'otif',
            name: 'On-Time In-Full (OTIF)',
            category: 'operational',
            unit: '%',
            format: 'percentage',
            description: 'Orders delivered on time and complete'
        },
        {
            id: 'forecast-accuracy',
            name: 'Demand Forecast Accuracy',
            category: 'operational',
            unit: '%',
            format: 'percentage',
            description: 'Accuracy of demand predictions'
        }
    ],
    forecastDrivers: [
        {
            id: 'consumer-demand',
            name: 'Consumer Demand Trends',
            category: 'market',
            impact: 'high',
            description: 'Changes in consumer preferences and purchasing behavior',
            metrics: ['units-sold', 'gross-revenue', 'market-share']
        },
        {
            id: 'pricing-strategy',
            name: 'Pricing & Promotions',
            category: 'financial',
            impact: 'high',
            description: 'Product pricing changes and promotional activities',
            metrics: ['asp', 'net-revenue', 'gross-margin', 'trade-spend']
        },
        {
            id: 'new-product-launches',
            name: 'New Product Launches',
            category: 'product',
            impact: 'high',
            description: 'Introduction of new SKUs and product lines',
            metrics: ['units-sold', 'gross-revenue', 'market-share']
        },
        {
            id: 'retail-distribution',
            name: 'Retail Distribution Expansion',
            category: 'customer',
            impact: 'medium',
            description: 'Number of retail outlets and geographic coverage',
            metrics: ['units-sold', 'distribution-costs', 'fill-rate']
        },
        {
            id: 'raw-material-costs',
            name: 'Raw Material Costs',
            category: 'operational',
            impact: 'high',
            description: 'Commodity prices and supply chain costs',
            metrics: ['cogs', 'gross-margin']
        },
        {
            id: 'competitive-activity',
            name: 'Competitive Activity',
            category: 'market',
            impact: 'medium',
            description: 'Competitor pricing, promotions, and product launches',
            metrics: ['market-share', 'asp', 'units-sold']
        },
        {
            id: 'seasonality',
            name: 'Seasonal Demand Patterns',
            category: 'market',
            impact: 'medium',
            description: 'Seasonal fluctuations in consumer demand',
            metrics: ['units-sold', 'inventory-turnover', 'fill-rate']
        },
        {
            id: 'e-commerce-growth',
            name: 'E-commerce Channel Growth',
            category: 'customer',
            impact: 'medium',
            description: 'Online sales growth and digital transformation',
            metrics: ['units-sold', 'distribution-costs', 'gross-revenue']
        }
    ],
    businessMetrics: [
        {
            id: 'category-growth',
            name: 'Category Growth Rate',
            value: 4.2,
            unit: '%',
            trend: 'up',
            insight: 'Overall category growing above GDP'
        },
        {
            id: 'brand-health',
            name: 'Brand Health Score',
            value: 78,
            unit: 'index',
            trend: 'stable',
            insight: 'Strong brand perception maintained'
        },
        {
            id: 'retailer-satisfaction',
            name: 'Retailer Satisfaction',
            value: 8.2,
            unit: '/10',
            trend: 'up',
            insight: 'Improved service levels driving satisfaction'
        }
    ]
};

// Financial Services Industry Configuration (placeholder)
export const financialServicesConfig: IndustryConfig = {
    id: 'financial-services',
    name: 'Financial Services',
    description: 'Banking, insurance, and financial institutions',
    kpis: [
        {
            id: 'net-interest-income',
            name: 'Net Interest Income',
            category: 'revenue',
            unit: 'USD',
            format: 'currency',
            description: 'Income from lending minus cost of funds'
        },
        {
            id: 'fee-income',
            name: 'Non-Interest Income',
            category: 'revenue',
            unit: 'USD',
            format: 'currency',
            description: 'Fees and commissions from services'
        },
        {
            id: 'nim',
            name: 'Net Interest Margin',
            category: 'revenue',
            unit: '%',
            format: 'percentage',
            description: 'Net interest income as % of earning assets'
        },
        {
            id: 'cost-income-ratio',
            name: 'Cost-to-Income Ratio',
            category: 'cost',
            unit: '%',
            format: 'percentage',
            description: 'Operating costs as % of operating income'
        },
        {
            id: 'roa',
            name: 'Return on Assets',
            category: 'operational',
            unit: '%',
            format: 'percentage',
            description: 'Net income as % of total assets'
        },
        {
            id: 'loan-loss-provision',
            name: 'Loan Loss Provisions',
            category: 'cost',
            unit: 'USD',
            format: 'currency',
            description: 'Reserves for potential loan defaults'
        }
    ],
    forecastDrivers: [
        {
            id: 'interest-rates',
            name: 'Interest Rate Environment',
            category: 'market',
            impact: 'high',
            description: 'Central bank rates and yield curves',
            metrics: ['net-interest-income', 'nim']
        },
        {
            id: 'loan-growth',
            name: 'Loan Portfolio Growth',
            category: 'operational',
            impact: 'high',
            description: 'Growth in lending portfolio',
            metrics: ['net-interest-income', 'loan-loss-provision']
        },
        {
            id: 'credit-quality',
            name: 'Credit Quality Trends',
            category: 'operational',
            impact: 'high',
            description: 'Default rates and credit performance',
            metrics: ['loan-loss-provision', 'roa']
        }
    ],
    businessMetrics: []
};

// Life Sciences Industry Configuration (placeholder)
export const lifeSciencesConfig: IndustryConfig = {
    id: 'life-sciences',
    name: 'Life Sciences',
    description: 'Pharmaceuticals, biotech, and medical devices',
    kpis: [
        {
            id: 'product-revenue',
            name: 'Product Revenue',
            category: 'revenue',
            unit: 'USD',
            format: 'currency',
            description: 'Revenue from drug and device sales'
        },
        {
            id: 'r-and-d-expense',
            name: 'R&D Expense',
            category: 'cost',
            unit: 'USD',
            format: 'currency',
            description: 'Research and development spending'
        },
        {
            id: 'pipeline-value',
            name: 'Pipeline NPV',
            category: 'operational',
            unit: 'USD',
            format: 'currency',
            description: 'Net present value of drug pipeline'
        }
    ],
    forecastDrivers: [
        {
            id: 'clinical-trials',
            name: 'Clinical Trial Progress',
            category: 'product',
            impact: 'high',
            description: 'Success rates and trial milestones',
            metrics: ['pipeline-value', 'r-and-d-expense']
        },
        {
            id: 'patent-expiry',
            name: 'Patent Expirations',
            category: 'product',
            impact: 'high',
            description: 'Loss of exclusivity on key products',
            metrics: ['product-revenue']
        }
    ],
    businessMetrics: []
};

// Map of all industry configurations
export const industryConfigs: Record<Industry, IndustryConfig> = {
    'consumer-goods': consumerGoodsConfig,
    'financial-services': financialServicesConfig,
    'life-sciences': lifeSciencesConfig,
    'technology': consumerGoodsConfig // Default to consumer goods for now
};

// Helper function to get KPIs by category
export function getKPIsByCategory(industry: Industry, category: string) {
    return industryConfigs[industry].kpis.filter(kpi => kpi.category === category);
}

// Helper function to get high-impact drivers
export function getHighImpactDrivers(industry: Industry) {
    return industryConfigs[industry].forecastDrivers.filter(driver => driver.impact === 'high');
} 