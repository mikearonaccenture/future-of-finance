'use client';

import {
    AlertCircle,
    ArrowLeft, Calendar,
    ChevronDown,
    ChevronUp,
    Download,
    Minus,
    TrendingDown,
    TrendingUp
} from 'lucide-react';
import { useState } from 'react';

interface PeriodData {
    revenue: number;
    costs: number;
    grossMargin: number;
    operatingExpenses: number;
    ebitda: number;
    netIncome: number;

    // Key metrics
    revenueGrowth: number;
    marginPercent: number;
    ebitdaMargin: number;

    // Volume metrics
    unitsSold: number;
    avgSellingPrice: number;
    customerCount: number;

    // Efficiency metrics
    revenuePerEmployee: number;
    costPerUnit: number;
    daysInventory: number;
}

interface ComparisonData {
    category: string;
    subcategories?: string[];
    isExpanded: boolean;
    period1: PeriodData;
    period2: PeriodData;
    variance: {
        amount: number;
        percent: number;
    };
}

export default function ComparativeAnalysisView({ onBack }: { onBack: () => void }) {
    const [period1, setPeriod1] = useState('Q2 2024');
    const [period2, setPeriod2] = useState('Q1 2024');
    const [viewMode, setViewMode] = useState<'values' | 'variance' | 'percent'>('values');
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Financial Performance']));
    const [showDetails, setShowDetails] = useState(true);

    // Sample comparison data
    const comparisonData: ComparisonData[] = [
        {
            category: 'Financial Performance',
            subcategories: ['Revenue Details', 'Cost Structure', 'Profitability'],
            isExpanded: true,
            period1: {
                revenue: 86700,
                costs: 62400,
                grossMargin: 24300,
                operatingExpenses: 15200,
                ebitda: 9100,
                netIncome: 6800,
                revenueGrowth: 8.2,
                marginPercent: 28.0,
                ebitdaMargin: 10.5,
                unitsSold: 145000,
                avgSellingPrice: 598,
                customerCount: 3250,
                revenuePerEmployee: 867,
                costPerUnit: 430,
                daysInventory: 45
            },
            period2: {
                revenue: 80100,
                costs: 58900,
                grossMargin: 21200,
                operatingExpenses: 14800,
                ebitda: 6400,
                netIncome: 4200,
                revenueGrowth: 5.4,
                marginPercent: 26.5,
                ebitdaMargin: 8.0,
                unitsSold: 138000,
                avgSellingPrice: 580,
                customerCount: 3180,
                revenuePerEmployee: 801,
                costPerUnit: 427,
                daysInventory: 48
            },
            variance: {
                amount: 6600,
                percent: 8.2
            }
        },
        {
            category: 'Operational Metrics',
            subcategories: ['Volume Analysis', 'Pricing Analysis', 'Efficiency Metrics'],
            isExpanded: false,
            period1: {
                revenue: 0,
                costs: 0,
                grossMargin: 0,
                operatingExpenses: 0,
                ebitda: 0,
                netIncome: 0,
                revenueGrowth: 0,
                marginPercent: 0,
                ebitdaMargin: 0,
                unitsSold: 145000,
                avgSellingPrice: 598,
                customerCount: 3250,
                revenuePerEmployee: 867,
                costPerUnit: 430,
                daysInventory: 45
            },
            period2: {
                revenue: 0,
                costs: 0,
                grossMargin: 0,
                operatingExpenses: 0,
                ebitda: 0,
                netIncome: 0,
                revenueGrowth: 0,
                marginPercent: 0,
                ebitdaMargin: 0,
                unitsSold: 138000,
                avgSellingPrice: 580,
                customerCount: 3180,
                revenuePerEmployee: 801,
                costPerUnit: 427,
                daysInventory: 48
            },
            variance: {
                amount: 7000,
                percent: 5.1
            }
        }
    ];

    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value * 1000);
    };

    const formatNumber = (value: number): string => {
        return new Intl.NumberFormat('en-US').format(value);
    };

    const getVarianceColor = (variance: number, isPositiveGood: boolean = true): string => {
        if (variance === 0) return 'text-gray-600';
        const isPositive = variance > 0;
        if (isPositiveGood) {
            return isPositive ? 'text-green-600' : 'text-red-600';
        } else {
            return isPositive ? 'text-red-600' : 'text-green-600';
        }
    };

    const getVarianceIcon = (variance: number, isPositiveGood: boolean = true) => {
        if (variance === 0) return <Minus className="h-4 w-4" />;
        const isPositive = variance > 0;
        if (isPositiveGood) {
            return isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />;
        } else {
            return isPositive ? <TrendingDown className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />;
        }
    };

    const toggleCategory = (category: string) => {
        const newExpanded = new Set(expandedCategories);
        if (newExpanded.has(category)) {
            newExpanded.delete(category);
        } else {
            newExpanded.add(category);
        }
        setExpandedCategories(newExpanded);
    };

    const calculateVariance = (value1: number, value2: number): { amount: number; percent: number } => {
        const amount = value1 - value2;
        const percent = value2 !== 0 ? (amount / value2) * 100 : 0;
        return { amount, percent };
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onBack}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span>Back to Forecast Details</span>
                        </button>
                        <div className="border-l border-gray-300 h-6" />
                        <h1 className="text-xl font-semibold text-gray-900">Period Comparison Analysis</h1>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <select
                                value={period1}
                                onChange={(e) => setPeriod1(e.target.value)}
                                className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Q2 2024">Q2 2024</option>
                                <option value="Q1 2024">Q1 2024</option>
                                <option value="Q4 2023">Q4 2023</option>
                                <option value="Q3 2023">Q3 2023</option>
                            </select>
                            <span className="text-gray-500">vs</span>
                            <select
                                value={period2}
                                onChange={(e) => setPeriod2(e.target.value)}
                                className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Q1 2024">Q1 2024</option>
                                <option value="Q4 2023">Q4 2023</option>
                                <option value="Q3 2023">Q3 2023</option>
                                <option value="Q2 2023">Q2 2023 (Prior Year)</option>
                            </select>
                        </div>

                        <div className="border-l border-gray-300 h-6" />

                        <div className="flex items-center bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('values')}
                                className={`px-3 py-1 text-sm rounded ${viewMode === 'values'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Values
                            </button>
                            <button
                                onClick={() => setViewMode('variance')}
                                className={`px-3 py-1 text-sm rounded ${viewMode === 'variance'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Variance
                            </button>
                            <button
                                onClick={() => setViewMode('percent')}
                                className={`px-3 py-1 text-sm rounded ${viewMode === 'percent'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                % Change
                            </button>
                        </div>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            <Download className="h-4 w-4" />
                            <span>Export</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="px-6 py-4">
                <div className="grid grid-cols-5 gap-4">
                    {[
                        { label: 'Revenue', value1: 86700, value2: 80100, format: 'currency', isPositiveGood: true },
                        { label: 'Gross Margin %', value1: 28.0, value2: 26.5, format: 'percent', isPositiveGood: true },
                        { label: 'EBITDA', value1: 9100, value2: 6400, format: 'currency', isPositiveGood: true },
                        { label: 'Units Sold', value1: 145000, value2: 138000, format: 'number', isPositiveGood: true },
                        { label: 'Cost per Unit', value1: 430, value2: 427, format: 'currency', isPositiveGood: false }
                    ].map((metric, index) => {
                        const variance = calculateVariance(metric.value1, metric.value2);
                        return (
                            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                                <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                                <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">{period1}:</span>
                                        <span className="text-sm font-semibold">
                                            {metric.format === 'currency' && formatCurrency(metric.value1)}
                                            {metric.format === 'percent' && `${metric.value1}%`}
                                            {metric.format === 'number' && formatNumber(metric.value1)}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">{period2}:</span>
                                        <span className="text-sm">
                                            {metric.format === 'currency' && formatCurrency(metric.value2)}
                                            {metric.format === 'percent' && `${metric.value2}%`}
                                            {metric.format === 'number' && formatNumber(metric.value2)}
                                        </span>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <div className={`flex items-center justify-between ${getVarianceColor(variance.percent, metric.isPositiveGood)}`}>
                                            <span className="flex items-center">
                                                {getVarianceIcon(variance.percent, metric.isPositiveGood)}
                                            </span>
                                            <span className="text-sm font-medium">
                                                {variance.percent > 0 ? '+' : ''}{variance.percent.toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="px-6 pb-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 w-80">
                                    Metric
                                </th>
                                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700 w-40">
                                    {period1}
                                </th>
                                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700 w-40">
                                    {period2}
                                </th>
                                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700 w-40">
                                    Variance
                                </th>
                                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 w-32">
                                    % Change
                                </th>
                                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 w-24">
                                    Trend
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Financial Performance Section */}
                            <tr className="bg-gray-100 border-b border-gray-200">
                                <td colSpan={6} className="px-6 py-2">
                                    <button
                                        onClick={() => toggleCategory('Financial Performance')}
                                        className="flex items-center space-x-2 text-sm font-semibold text-gray-900"
                                    >
                                        {expandedCategories.has('Financial Performance') ? (
                                            <ChevronDown className="h-4 w-4" />
                                        ) : (
                                            <ChevronUp className="h-4 w-4" />
                                        )}
                                        <span>Financial Performance</span>
                                    </button>
                                </td>
                            </tr>

                            {expandedCategories.has('Financial Performance') && (
                                <>
                                    {/* Revenue */}
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-6 py-3 text-sm font-medium text-gray-900">
                                            Revenue
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right font-semibold">
                                            {formatCurrency(86700)}
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            {formatCurrency(80100)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-right font-medium ${getVarianceColor(6600)}`}>
                                            {formatCurrency(6600)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-center font-medium ${getVarianceColor(8.2)}`}>
                                            +8.2%
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <div className="flex justify-center text-green-600">
                                                <TrendingUp className="h-4 w-4" />
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Cost of Goods Sold */}
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-6 py-3 text-sm text-gray-700 pl-10">
                                            Cost of Goods Sold
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            {formatCurrency(62400)}
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            {formatCurrency(58900)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-right ${getVarianceColor(3500, false)}`}>
                                            {formatCurrency(3500)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-center ${getVarianceColor(5.9, false)}`}>
                                            +5.9%
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <div className="flex justify-center text-red-600">
                                                <TrendingUp className="h-4 w-4" />
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Gross Margin */}
                                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                                        <td className="px-6 py-3 text-sm font-medium text-gray-900 pl-10">
                                            Gross Margin
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right font-semibold">
                                            {formatCurrency(24300)}
                                            <span className="block text-xs text-gray-600">28.0%</span>
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            {formatCurrency(21200)}
                                            <span className="block text-xs text-gray-600">26.5%</span>
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-right font-medium ${getVarianceColor(3100)}`}>
                                            {formatCurrency(3100)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-center font-medium ${getVarianceColor(14.6)}`}>
                                            +14.6%
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <div className="flex justify-center text-green-600">
                                                <TrendingUp className="h-4 w-4" />
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Operating Expenses */}
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-6 py-3 text-sm text-gray-700 pl-10">
                                            Operating Expenses
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            {formatCurrency(15200)}
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            {formatCurrency(14800)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-right ${getVarianceColor(400, false)}`}>
                                            {formatCurrency(400)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-center ${getVarianceColor(2.7, false)}`}>
                                            +2.7%
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <div className="flex justify-center text-yellow-600">
                                                <Minus className="h-4 w-4" />
                                            </div>
                                        </td>
                                    </tr>

                                    {/* EBITDA */}
                                    <tr className="border-b-2 border-gray-300 hover:bg-gray-50 bg-green-50">
                                        <td className="px-6 py-3 text-sm font-medium text-gray-900 pl-10">
                                            EBITDA
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right font-semibold">
                                            {formatCurrency(9100)}
                                            <span className="block text-xs text-gray-600">10.5%</span>
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            {formatCurrency(6400)}
                                            <span className="block text-xs text-gray-600">8.0%</span>
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-right font-medium ${getVarianceColor(2700)}`}>
                                            {formatCurrency(2700)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-center font-medium ${getVarianceColor(42.2)}`}>
                                            +42.2%
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <div className="flex justify-center text-green-600">
                                                <TrendingUp className="h-4 w-4" />
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )}

                            {/* Operational Metrics Section */}
                            <tr className="bg-gray-100 border-b border-gray-200">
                                <td colSpan={6} className="px-6 py-2">
                                    <button
                                        onClick={() => toggleCategory('Operational Metrics')}
                                        className="flex items-center space-x-2 text-sm font-semibold text-gray-900"
                                    >
                                        {expandedCategories.has('Operational Metrics') ? (
                                            <ChevronDown className="h-4 w-4" />
                                        ) : (
                                            <ChevronUp className="h-4 w-4" />
                                        )}
                                        <span>Operational Metrics</span>
                                    </button>
                                </td>
                            </tr>

                            {expandedCategories.has('Operational Metrics') && (
                                <>
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-6 py-3 text-sm font-medium text-gray-900">
                                            Units Sold
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right font-semibold">
                                            {formatNumber(145000)}
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            {formatNumber(138000)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-right font-medium ${getVarianceColor(7000)}`}>
                                            {formatNumber(7000)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-center font-medium ${getVarianceColor(5.1)}`}>
                                            +5.1%
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <div className="flex justify-center text-green-600">
                                                <TrendingUp className="h-4 w-4" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-6 py-3 text-sm text-gray-700 pl-10">
                                            Average Selling Price
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            ${formatNumber(598)}
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            ${formatNumber(580)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-right ${getVarianceColor(18)}`}>
                                            ${formatNumber(18)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-center ${getVarianceColor(3.1)}`}>
                                            +3.1%
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <div className="flex justify-center text-green-600">
                                                <TrendingUp className="h-4 w-4" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-6 py-3 text-sm text-gray-700 pl-10">
                                            Customer Count
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            {formatNumber(3250)}
                                        </td>
                                        <td className="px-6 py-3 text-sm text-right">
                                            {formatNumber(3180)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-right ${getVarianceColor(70)}`}>
                                            {formatNumber(70)}
                                        </td>
                                        <td className={`px-6 py-3 text-sm text-center ${getVarianceColor(2.2)}`}>
                                            +2.2%
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <div className="flex justify-center text-green-600">
                                                <TrendingUp className="h-4 w-4" />
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Insights Panel */}
                <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        Key Insights from Period Comparison
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Positive Developments</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">•</span>
                                    Revenue growth of 8.2% driven by both volume (+5.1%) and price (+3.1%)
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">•</span>
                                    Gross margin improved 150 bps from operational efficiencies
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">•</span>
                                    EBITDA margin expanded to 10.5%, up from 8.0%
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">•</span>
                                    Customer base expanded by 70 accounts (+2.2%)
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Areas of Concern</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-red-600 mr-2">•</span>
                                    Cost inflation of 5.9% outpacing price increases of 3.1%
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-600 mr-2">•</span>
                                    Operating expenses growing, though controlled at 2.7%
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 mr-2">•</span>
                                    Days inventory decreased but still above target of 40 days
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 mr-2">•</span>
                                    Revenue per employee growth lagging overall revenue growth
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 