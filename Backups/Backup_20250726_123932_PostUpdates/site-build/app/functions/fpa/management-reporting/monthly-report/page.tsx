'use client';

import { motion } from 'framer-motion';
import {
    Activity,
    AlertCircle,
    BarChart3,
    Building,
    CheckCircle,
    DollarSign,
    Download,
    FileText,
    Globe,
    Package,
    Presentation,
    Share2,
    ShoppingCart,
    Target,
    TrendingDown,
    TrendingUp,
    Truck,
    Users
} from 'lucide-react';
import { useState } from 'react';

// Monthly report sections
const reportSections = [
    { id: 'executive', name: 'Executive Summary', icon: FileText },
    { id: 'financial', name: 'Financial Performance', icon: DollarSign },
    { id: 'revenue', name: 'Revenue Analysis', icon: TrendingUp },
    { id: 'operations', name: 'Operations', icon: Building },
    { id: 'sales', name: 'Sales & Marketing', icon: ShoppingCart },
    { id: 'product', name: 'Product Performance', icon: Package },
    { id: 'customer', name: 'Customer Metrics', icon: Users },
    { id: 'regional', name: 'Regional Performance', icon: Globe },
    { id: 'outlook', name: 'Outlook & Risks', icon: Target }
];

// Executive Summary Data
const executiveSummary = {
    period: 'November 2024',
    keyHighlights: [
        { label: 'Revenue', value: '$42.3M', change: 8.2, vsTarget: 'Above plan by $2.1M' },
        { label: 'EBITDA', value: '$12.1M', change: 5.7, vsTarget: 'On track' },
        { label: 'Cash Flow', value: '$8.4M', change: -3.2, vsTarget: 'Below plan by $1.2M' },
        { label: 'NPS Score', value: '72', change: 4, vsTarget: 'Above target' }
    ],
    achievements: [
        'Launched new product line in APAC with $2.3M initial sales',
        'Completed acquisition of TechCo, adding $5M annual revenue',
        'Achieved 15% reduction in operational costs through automation'
    ],
    challenges: [
        'Supply chain delays impacting North America deliveries',
        'Increased competition in European markets affecting margins',
        'Customer churn rate increased to 5.2% from 4.1%'
    ]
};

// Financial Performance Data
const financialData = {
    pnl: {
        revenue: { actual: 42300000, budget: 40200000, lastYear: 39100000 },
        cogs: { actual: 25380000, budget: 24120000, lastYear: 23460000 },
        grossProfit: { actual: 16920000, budget: 16080000, lastYear: 15640000 },
        opex: { actual: 8460000, budget: 8440000, lastYear: 8120000 },
        ebitda: { actual: 8460000, budget: 7640000, lastYear: 7520000 },
        netIncome: { actual: 6345000, budget: 5730000, lastYear: 5640000 }
    },
    margins: {
        gross: { actual: 40.0, budget: 40.0, lastYear: 40.0 },
        ebitda: { actual: 20.0, budget: 19.0, lastYear: 19.2 },
        net: { actual: 15.0, budget: 14.3, lastYear: 14.4 }
    },
    cashFlow: {
        operating: 8400000,
        investing: -2100000,
        financing: -1500000,
        netChange: 4800000,
        endingCash: 45600000
    }
};

// Revenue Analysis Data
const revenueData = {
    byProduct: [
        { name: 'Product A', revenue: 15840000, growth: 12.3, mix: 37.5 },
        { name: 'Product B', revenue: 10575000, growth: 8.1, mix: 25.0 },
        { name: 'Product C', revenue: 8460000, growth: -2.4, mix: 20.0 },
        { name: 'Services', revenue: 7425000, growth: 15.7, mix: 17.5 }
    ],
    byRegion: [
        { name: 'North America', revenue: 16920000, growth: 10.2, mix: 40.0 },
        { name: 'Europe', revenue: 12690000, growth: 5.3, mix: 30.0 },
        { name: 'APAC', revenue: 8460000, growth: 18.7, mix: 20.0 },
        { name: 'LATAM', revenue: 4230000, growth: -1.2, mix: 10.0 }
    ],
    byChannel: [
        { name: 'Direct Sales', revenue: 21150000, growth: 9.8, mix: 50.0 },
        { name: 'Partners', revenue: 12690000, growth: 7.2, mix: 30.0 },
        { name: 'Online', revenue: 8460000, growth: 25.3, mix: 20.0 }
    ]
};

// Operations Data
const operationsData = {
    manufacturing: {
        oee: 92.3,
        quality: 99.2,
        onTimeDelivery: 94.5,
        inventory: {
            raw: 12300000,
            wip: 4500000,
            finished: 8700000,
            turnover: 8.2
        }
    },
    supplyChain: {
        vendorPerformance: 91.2,
        leadTime: 42,
        stockouts: 23,
        fillRate: 96.7
    },
    efficiency: [
        { metric: 'Units per Hour', value: 1250, target: 1200, trend: 'up' },
        { metric: 'Cost per Unit', value: 23.45, target: 24.00, trend: 'down' },
        { metric: 'Scrap Rate', value: 1.8, target: 2.0, trend: 'down' },
        { metric: 'Energy per Unit', value: 2.3, target: 2.5, trend: 'down' }
    ]
};

export default function MonthlyOperatingReport() {
    const [activeSection, setActiveSection] = useState('executive');
    const [selectedMonth, setSelectedMonth] = useState('November 2024');

    const getChangeIcon = (change: number) => {
        return change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;
    };

    const getChangeColor = (change: number) => {
        return change > 0 ? 'text-green-600' : 'text-red-600';
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    const formatPercent = (value: number) => {
        return `${value.toFixed(1)}%`;
    };

    return (
        <div className="bg-gray-50">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Monthly Operating Report</h1>
                                <p className="text-sm text-gray-500">{selectedMonth} • Board & Executive Review</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="text-sm bg-white text-gray-700 border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>November 2024</option>
                                <option>October 2024</option>
                                <option>September 2024</option>
                            </select>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Presentation className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Download className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Share2 className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Tabs */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-1 overflow-x-auto">
                        {reportSections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeSection === section.id
                                        ? 'text-blue-600 border-blue-600'
                                        : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{section.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {activeSection === 'executive' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {/* Key Metrics */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Performance Indicators</h2>
                            <div className="grid grid-cols-4 gap-4">
                                {executiveSummary.keyHighlights.map((metric) => (
                                    <div key={metric.label} className="bg-white rounded-lg border border-gray-200 p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-sm text-gray-600">{metric.label}</p>
                                            <div className={`flex items-center space-x-1 ${getChangeColor(metric.change)}`}>
                                                {getChangeIcon(metric.change)}
                                                <span className="text-sm font-medium">{Math.abs(metric.change)}%</span>
                                            </div>
                                        </div>
                                        <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                                        <p className="text-xs text-gray-500">{metric.vsTarget}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements & Challenges */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">Key Achievements</h3>
                                </div>
                                <ul className="space-y-3">
                                    {executiveSummary.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-xs font-medium text-center leading-6 mr-3 flex-shrink-0">
                                                {idx + 1}
                                            </span>
                                            <span className="text-sm text-gray-700">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <AlertCircle className="w-5 h-5 text-amber-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">Key Challenges</h3>
                                </div>
                                <ul className="space-y-3">
                                    {executiveSummary.challenges.map((challenge, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="inline-block w-6 h-6 bg-amber-100 text-amber-700 rounded-full text-xs font-medium text-center leading-6 mr-3 flex-shrink-0">
                                                {idx + 1}
                                            </span>
                                            <span className="text-sm text-gray-700">{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeSection === 'financial' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {/* P&L Summary */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Profit & Loss Summary</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Line Item</th>
                                            <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">Actual</th>
                                            <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">Budget</th>
                                            <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">Variance</th>
                                            <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">Last Year</th>
                                            <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">YoY %</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(financialData.pnl).map(([key, values]) => {
                                            const variance = ((values.actual - values.budget) / values.budget * 100).toFixed(1);
                                            const yoy = ((values.actual - values.lastYear) / values.lastYear * 100).toFixed(1);
                                            return (
                                                <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-3 px-4 text-sm font-medium text-gray-900 capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </td>
                                                    <td className="text-right py-3 px-4 text-sm text-gray-900">
                                                        {formatCurrency(values.actual)}
                                                    </td>
                                                    <td className="text-right py-3 px-4 text-sm text-gray-600">
                                                        {formatCurrency(values.budget)}
                                                    </td>
                                                    <td className={`text-right py-3 px-4 text-sm font-medium ${parseFloat(variance) >= 0 ? 'text-green-600' : 'text-red-600'
                                                        }`}>
                                                        {variance}%
                                                    </td>
                                                    <td className="text-right py-3 px-4 text-sm text-gray-600">
                                                        {formatCurrency(values.lastYear)}
                                                    </td>
                                                    <td className={`text-right py-3 px-4 text-sm font-medium ${parseFloat(yoy) >= 0 ? 'text-green-600' : 'text-red-600'
                                                        }`}>
                                                        {yoy}%
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Margins & Cash Flow */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Margins */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Margin Analysis</h3>
                                <div className="space-y-4">
                                    {Object.entries(financialData.margins).map(([key, values]) => (
                                        <div key={key}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm font-medium text-gray-700 capitalize">
                                                    {key} Margin
                                                </span>
                                                <span className="text-sm font-bold text-gray-900">
                                                    {formatPercent(values.actual)}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-xs">
                                                <span className="text-gray-500">Budget: {formatPercent(values.budget)}</span>
                                                <span className="text-gray-400">•</span>
                                                <span className="text-gray-500">LY: {formatPercent(values.lastYear)}</span>
                                            </div>
                                            <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                                                    style={{ width: `${values.actual}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cash Flow */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cash Flow Summary</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between py-2">
                                        <span className="text-sm text-gray-700">Operating Activities</span>
                                        <span className="text-sm font-medium text-green-600">
                                            +{formatCurrency(financialData.cashFlow.operating)}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <span className="text-sm text-gray-700">Investing Activities</span>
                                        <span className="text-sm font-medium text-red-600">
                                            {formatCurrency(financialData.cashFlow.investing)}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <span className="text-sm text-gray-700">Financing Activities</span>
                                        <span className="text-sm font-medium text-red-600">
                                            {formatCurrency(financialData.cashFlow.financing)}
                                        </span>
                                    </div>
                                    <div className="border-t pt-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-900">Net Change</span>
                                            <span className="text-sm font-bold text-blue-600">
                                                +{formatCurrency(financialData.cashFlow.netChange)}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-sm font-medium text-gray-900">Ending Cash</span>
                                            <span className="text-lg font-bold text-gray-900">
                                                {formatCurrency(financialData.cashFlow.endingCash)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeSection === 'revenue' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {/* Revenue by Product */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Product Line</h2>
                            <div className="space-y-4">
                                {revenueData.byProduct.map((product) => (
                                    <div key={product.name} className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm font-medium text-gray-900">{product.name}</span>
                                                <span className="text-sm font-bold text-gray-900">
                                                    {formatCurrency(product.revenue)}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                <span className={`font-medium ${product.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {product.growth >= 0 ? '+' : ''}{product.growth}% YoY
                                                </span>
                                                <span>{product.mix}% of total</span>
                                            </div>
                                            <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                                                    style={{ width: `${product.mix}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Revenue by Region & Channel */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* By Region */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Region</h3>
                                <div className="space-y-3">
                                    {revenueData.byRegion.map((region) => (
                                        <div key={region.name} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <Globe className="w-4 h-4 text-gray-400" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{region.name}</p>
                                                    <p className="text-xs text-gray-500">{region.mix}% of total</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-gray-900">
                                                    {formatCurrency(region.revenue)}
                                                </p>
                                                <p className={`text-xs font-medium ${region.growth >= 0 ? 'text-green-600' : 'text-red-600'
                                                    }`}>
                                                    {region.growth >= 0 ? '+' : ''}{region.growth}%
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* By Channel */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Channel</h3>
                                <div className="space-y-3">
                                    {revenueData.byChannel.map((channel) => (
                                        <div key={channel.name} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <ShoppingCart className="w-4 h-4 text-gray-400" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{channel.name}</p>
                                                    <p className="text-xs text-gray-500">{channel.mix}% of total</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-gray-900">
                                                    {formatCurrency(channel.revenue)}
                                                </p>
                                                <p className={`text-xs font-medium ${channel.growth >= 0 ? 'text-green-600' : 'text-red-600'
                                                    }`}>
                                                    {channel.growth >= 0 ? '+' : ''}{channel.growth}%
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeSection === 'operations' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {/* Manufacturing KPIs */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Manufacturing Performance</h2>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="bg-white rounded-lg border border-gray-200 p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-sm text-gray-600">OEE</p>
                                        <Activity className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{operationsData.manufacturing.oee}%</p>
                                    <p className="text-xs text-green-600 mt-1">+2.1% vs last month</p>
                                </div>
                                <div className="bg-white rounded-lg border border-gray-200 p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-sm text-gray-600">Quality Rate</p>
                                        <CheckCircle className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{operationsData.manufacturing.quality}%</p>
                                    <p className="text-xs text-green-600 mt-1">Above target</p>
                                </div>
                                <div className="bg-white rounded-lg border border-gray-200 p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-sm text-gray-600">On-Time Delivery</p>
                                        <Truck className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{operationsData.manufacturing.onTimeDelivery}%</p>
                                    <p className="text-xs text-amber-600 mt-1">-1.2% vs target</p>
                                </div>
                                <div className="bg-white rounded-lg border border-gray-200 p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-sm text-gray-600">Inventory Turnover</p>
                                        <Package className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{operationsData.manufacturing.inventory.turnover}x</p>
                                    <p className="text-xs text-green-600 mt-1">Improving</p>
                                </div>
                            </div>
                        </div>

                        {/* Efficiency Metrics */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Operational Efficiency</h3>
                            <div className="grid grid-cols-2 gap-6">
                                {operationsData.efficiency.map((metric) => (
                                    <div key={metric.metric} className="flex items-center justify-between py-3 border-b border-gray-100">
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-2 rounded-lg ${metric.trend === 'up' && metric.metric.includes('Units') ? 'bg-green-50' :
                                                metric.trend === 'down' && !metric.metric.includes('Units') ? 'bg-green-50' :
                                                    'bg-red-50'
                                                }`}>
                                                {metric.trend === 'up' ?
                                                    <TrendingUp className="w-4 h-4 text-green-600" /> :
                                                    <TrendingDown className="w-4 h-4 text-green-600" />
                                                }
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{metric.metric}</p>
                                                <p className="text-xs text-gray-500">Target: {metric.target}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                                            <p className={`text-xs font-medium ${(metric.trend === 'up' && metric.metric.includes('Units')) ||
                                                (metric.trend === 'down' && !metric.metric.includes('Units'))
                                                ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                {metric.trend === 'up' ? 'Increasing' : 'Decreasing'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Other sections would follow similar patterns... */}
                {['sales', 'product', 'customer', 'regional', 'outlook'].includes(activeSection) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center h-96"
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BarChart3 className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {reportSections.find(s => s.id === activeSection)?.name} Section
                            </h3>
                            <p className="text-sm text-gray-500">
                                This section would contain detailed {activeSection} metrics and analysis
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
} 