'use client';

import {
    Activity,
    AlertCircle,
    ArrowLeft,
    BarChart3,
    ChevronDown, ChevronRight,
    Download,
    TrendingDown,
    TrendingUp
} from 'lucide-react';
import React, { useState } from 'react';

interface TrendData {
    period: string;
    actual: number;
    budget: number;
    forecast: number;
    lastYear: number;
    variance: number;
    variancePercent: number;
    yoyGrowth: number;
}

interface CategoryData {
    name: string;
    expanded: boolean;
    data: TrendData[];
    subcategories?: {
        name: string;
        data: TrendData[];
    }[];
}

export default function TrendAnalysisView({ onBack }: { onBack: () => void }) {
    const [selectedPeriod, setSelectedPeriod] = useState('monthly');
    const [selectedYear, setSelectedYear] = useState('2024');
    const [showVarianceOnly, setShowVarianceOnly] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Revenue']));

    // Sample data structure
    const categories: CategoryData[] = [
        {
            name: 'Revenue',
            expanded: true,
            data: [
                { period: 'Jan', actual: 25800, budget: 25000, forecast: 25500, lastYear: 23400, variance: 800, variancePercent: 3.2, yoyGrowth: 10.3 },
                { period: 'Feb', actual: 27000, budget: 26000, forecast: 26500, lastYear: 24200, variance: 1000, variancePercent: 3.8, yoyGrowth: 11.6 },
                { period: 'Mar', actual: 27600, budget: 27000, forecast: 27200, lastYear: 25100, variance: 600, variancePercent: 2.2, yoyGrowth: 10.0 },
                { period: 'Apr', actual: 28300, budget: 28000, forecast: 28100, lastYear: 25800, variance: 300, variancePercent: 1.1, yoyGrowth: 9.7 },
                { period: 'May', actual: 29100, budget: 28500, forecast: 28800, lastYear: 26400, variance: 600, variancePercent: 2.1, yoyGrowth: 10.2 },
                { period: 'Jun', actual: 29800, budget: 29000, forecast: 29400, lastYear: 27200, variance: 800, variancePercent: 2.8, yoyGrowth: 9.6 },
                { period: 'Jul', actual: 0, budget: 30000, forecast: 30800, lastYear: 28100, variance: 0, variancePercent: 0, yoyGrowth: 0 },
                { period: 'Aug', actual: 0, budget: 31000, forecast: 31800, lastYear: 29000, variance: 0, variancePercent: 0, yoyGrowth: 0 },
                { period: 'Sep', actual: 0, budget: 31500, forecast: 32400, lastYear: 29800, variance: 0, variancePercent: 0, yoyGrowth: 0 },
                { period: 'Oct', actual: 0, budget: 32000, forecast: 33200, lastYear: 30500, variance: 0, variancePercent: 0, yoyGrowth: 0 },
                { period: 'Nov', actual: 0, budget: 33000, forecast: 34000, lastYear: 31200, variance: 0, variancePercent: 0, yoyGrowth: 0 },
                { period: 'Dec', actual: 0, budget: 34000, forecast: 35200, lastYear: 32000, variance: 0, variancePercent: 0, yoyGrowth: 0 }
            ],
            subcategories: [
                {
                    name: 'Digital Products',
                    data: [
                        { period: 'Jan', actual: 12500, budget: 12000, forecast: 12200, lastYear: 10800, variance: 500, variancePercent: 4.2, yoyGrowth: 15.7 },
                        { period: 'Feb', actual: 13200, budget: 12800, forecast: 13000, lastYear: 11200, variance: 400, variancePercent: 3.1, yoyGrowth: 17.9 },
                        { period: 'Mar', actual: 13800, budget: 13500, forecast: 13600, lastYear: 11800, variance: 300, variancePercent: 2.2, yoyGrowth: 16.9 },
                        { period: 'Apr', actual: 14100, budget: 14000, forecast: 14050, lastYear: 12400, variance: 100, variancePercent: 0.7, yoyGrowth: 13.7 },
                        { period: 'May', actual: 14500, budget: 14200, forecast: 14400, lastYear: 12900, variance: 300, variancePercent: 2.1, yoyGrowth: 12.4 },
                        { period: 'Jun', actual: 14900, budget: 14500, forecast: 14700, lastYear: 13400, variance: 400, variancePercent: 2.8, yoyGrowth: 11.2 }
                    ]
                },
                {
                    name: 'Physical Products',
                    data: [
                        { period: 'Jan', actual: 8200, budget: 8000, forecast: 8100, lastYear: 7600, variance: 200, variancePercent: 2.5, yoyGrowth: 7.9 },
                        { period: 'Feb', actual: 8500, budget: 8200, forecast: 8350, lastYear: 7800, variance: 300, variancePercent: 3.7, yoyGrowth: 9.0 },
                        { period: 'Mar', actual: 8300, budget: 8300, forecast: 8300, lastYear: 8000, variance: 0, variancePercent: 0, yoyGrowth: 3.8 },
                        { period: 'Apr', actual: 8600, budget: 8500, forecast: 8550, lastYear: 8200, variance: 100, variancePercent: 1.2, yoyGrowth: 4.9 },
                        { period: 'May', actual: 8900, budget: 8700, forecast: 8800, lastYear: 8400, variance: 200, variancePercent: 2.3, yoyGrowth: 6.0 },
                        { period: 'Jun', actual: 9100, budget: 8900, forecast: 9000, lastYear: 8700, variance: 200, variancePercent: 2.2, yoyGrowth: 4.6 }
                    ]
                },
                {
                    name: 'Services',
                    data: [
                        { period: 'Jan', actual: 5100, budget: 5000, forecast: 5200, lastYear: 5000, variance: 100, variancePercent: 2.0, yoyGrowth: 2.0 },
                        { period: 'Feb', actual: 5300, budget: 5000, forecast: 5150, lastYear: 5200, variance: 300, variancePercent: 6.0, yoyGrowth: 1.9 },
                        { period: 'Mar', actual: 5500, budget: 5200, forecast: 5300, lastYear: 5300, variance: 300, variancePercent: 5.8, yoyGrowth: 3.8 },
                        { period: 'Apr', actual: 5600, budget: 5500, forecast: 5500, lastYear: 5200, variance: 100, variancePercent: 1.8, yoyGrowth: 7.7 },
                        { period: 'May', actual: 5700, budget: 5600, forecast: 5600, lastYear: 5100, variance: 100, variancePercent: 1.8, yoyGrowth: 11.8 },
                        { period: 'Jun', actual: 5800, budget: 5600, forecast: 5700, lastYear: 5100, variance: 200, variancePercent: 3.6, yoyGrowth: 13.7 }
                    ]
                }
            ]
        },
        {
            name: 'Costs',
            expanded: false,
            data: [
                { period: 'Jan', actual: 18500, budget: 19000, forecast: 18700, lastYear: 17800, variance: -500, variancePercent: -2.6, yoyGrowth: 3.9 },
                { period: 'Feb', actual: 19200, budget: 19500, forecast: 19300, lastYear: 18200, variance: -300, variancePercent: -1.5, yoyGrowth: 5.5 },
                { period: 'Mar', actual: 19800, budget: 20000, forecast: 19900, lastYear: 18800, variance: -200, variancePercent: -1.0, yoyGrowth: 5.3 },
                { period: 'Apr', actual: 20100, budget: 20500, forecast: 20300, lastYear: 19200, variance: -400, variancePercent: -2.0, yoyGrowth: 4.7 },
                { period: 'May', actual: 20600, budget: 21000, forecast: 20800, lastYear: 19600, variance: -400, variancePercent: -1.9, yoyGrowth: 5.1 },
                { period: 'Jun', actual: 21200, budget: 21500, forecast: 21300, lastYear: 20100, variance: -300, variancePercent: -1.4, yoyGrowth: 5.5 }
            ]
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

    const getVarianceColor = (variance: number): string => {
        if (variance > 0) return 'text-green-600';
        if (variance < 0) return 'text-red-600';
        return 'text-gray-600';
    };

    const getVarianceBackground = (variance: number): string => {
        if (variance > 0) return 'bg-green-50';
        if (variance < 0) return 'bg-red-50';
        return 'bg-gray-50';
    };

    const toggleCategory = (categoryName: string) => {
        const newExpanded = new Set(expandedCategories);
        if (newExpanded.has(categoryName)) {
            newExpanded.delete(categoryName);
        } else {
            newExpanded.add(categoryName);
        }
        setExpandedCategories(newExpanded);
    };

    const calculateTotals = (data: TrendData[]): TrendData => {
        const totals = data.reduce((acc, period) => ({
            period: 'Total',
            actual: acc.actual + period.actual,
            budget: acc.budget + period.budget,
            forecast: acc.forecast + period.forecast,
            lastYear: acc.lastYear + period.lastYear,
            variance: acc.variance + period.variance,
            variancePercent: 0,
            yoyGrowth: 0
        }), {
            period: 'Total',
            actual: 0,
            budget: 0,
            forecast: 0,
            lastYear: 0,
            variance: 0,
            variancePercent: 0,
            yoyGrowth: 0
        });

        // Calculate percentages for totals
        if (totals.budget > 0) {
            totals.variancePercent = (totals.variance / totals.budget) * 100;
        }
        if (totals.lastYear > 0) {
            totals.yoyGrowth = ((totals.actual - totals.lastYear) / totals.lastYear) * 100;
        }

        return totals;
    };

    const getSparklineData = (data: TrendData[], metric: 'actual' | 'budget' | 'forecast') => {
        const actualData = data.slice(0, 6); // Only show actual months
        const max = Math.max(...actualData.map(d => d[metric]));
        const min = Math.min(...actualData.map(d => d[metric]));
        const range = max - min;

        return actualData.map((d, i) => {
            const height = range === 0 ? 50 : ((d[metric] - min) / range) * 40 + 10;
            return { x: i * 16, y: 60 - height, height };
        });
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
                        <h1 className="text-xl font-semibold text-gray-900">Trend Analysis</h1>
                    </div>

                    <div className="flex items-center space-x-3">
                        <select
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.target.value)}
                            className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="yearly">Yearly</option>
                        </select>

                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>

                        <label className="flex items-center space-x-2 text-sm">
                            <input
                                type="checkbox"
                                checked={showVarianceOnly}
                                onChange={(e) => setShowVarianceOnly(e.target.checked)}
                                className="rounded text-blue-600"
                            />
                            <span>Variance Focus</span>
                        </label>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            <Download className="h-4 w-4" />
                            <span>Export</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Key Insights */}
            <div className="px-6 py-4 bg-yellow-50 border-b border-yellow-200">
                <div className="flex items-start space-x-4">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Key Trends & Insights</h3>
                        <div className="grid grid-cols-4 gap-4 text-sm">
                            <div>
                                <span className="text-gray-600">Revenue Growth YTD:</span>
                                <span className="ml-2 font-medium text-green-600">+10.4% vs LY</span>
                            </div>
                            <div>
                                <span className="text-gray-600">Budget Variance YTD:</span>
                                <span className="ml-2 font-medium text-green-600">+2.8%</span>
                            </div>
                            <div>
                                <span className="text-gray-600">Forecast Accuracy:</span>
                                <span className="ml-2 font-medium text-blue-600">96.5%</span>
                            </div>
                            <div>
                                <span className="text-gray-600">Trend Direction:</span>
                                <span className="ml-2 font-medium text-green-600 flex items-center inline-flex">
                                    <TrendingUp className="h-4 w-4 mr-1" />
                                    Positive
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Table */}
            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="sticky left-0 bg-gray-50 px-6 py-3 text-left text-sm font-medium text-gray-700 w-64">
                                        Category / Metric
                                    </th>
                                    <th className="px-3 py-3 text-center text-sm font-medium text-gray-700 min-w-[80px]">
                                        Trend
                                    </th>
                                    {categories[0].data.map(period => (
                                        <th key={period.period} className="px-4 py-3 text-center text-sm font-medium text-gray-700 min-w-[100px] border-l border-gray-200">
                                            {period.period}
                                            {period.actual === 0 && (
                                                <span className="block text-xs text-gray-500 font-normal">Forecast</span>
                                            )}
                                        </th>
                                    ))}
                                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 min-w-[120px] border-l-2 border-gray-300 bg-gray-100">
                                        Total/Avg
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, catIndex) => (
                                    <React.Fragment key={category.name}>
                                        {/* Category Header */}
                                        <tr className="bg-gray-100 border-b border-gray-200">
                                            <td colSpan={15} className="px-6 py-2">
                                                <button
                                                    onClick={() => toggleCategory(category.name)}
                                                    className="flex items-center space-x-2 text-sm font-semibold text-gray-900"
                                                >
                                                    {expandedCategories.has(category.name) ? (
                                                        <ChevronDown className="h-4 w-4" />
                                                    ) : (
                                                        <ChevronRight className="h-4 w-4" />
                                                    )}
                                                    <span>{category.name}</span>
                                                </button>
                                            </td>
                                        </tr>

                                        {expandedCategories.has(category.name) && (
                                            <>
                                                {/* Main Metrics */}
                                                <tr className="border-b border-gray-200 hover:bg-gray-50">
                                                    <td className="sticky left-0 bg-white px-6 py-3 text-sm font-medium text-gray-900">
                                                        Actual / Forecast
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        <svg width="80" height="30" className="mx-auto">
                                                            {getSparklineData(category.data, 'actual').map((point, i) => (
                                                                <rect
                                                                    key={i}
                                                                    x={point.x}
                                                                    y={point.y}
                                                                    width="12"
                                                                    height={point.height}
                                                                    fill="#3B82F6"
                                                                    opacity="0.8"
                                                                />
                                                            ))}
                                                        </svg>
                                                    </td>
                                                    {category.data.map((period, i) => (
                                                        <td
                                                            key={i}
                                                            className={`px-4 py-3 text-center text-sm border-l border-gray-200 ${period.actual === 0 ? 'text-purple-600 italic' : 'text-gray-900'
                                                                }`}
                                                        >
                                                            {formatCurrency(period.actual || period.forecast)}
                                                        </td>
                                                    ))}
                                                    <td className="px-4 py-3 text-center text-sm font-semibold border-l-2 border-gray-300 bg-gray-50">
                                                        {formatCurrency(calculateTotals(category.data).actual)}
                                                    </td>
                                                </tr>

                                                {!showVarianceOnly && (
                                                    <>
                                                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                                                            <td className="sticky left-0 bg-white px-6 py-3 text-sm text-gray-700">
                                                                Budget
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                <svg width="80" height="30" className="mx-auto">
                                                                    {getSparklineData(category.data, 'budget').map((point, i) => (
                                                                        <rect
                                                                            key={i}
                                                                            x={point.x}
                                                                            y={point.y}
                                                                            width="12"
                                                                            height={point.height}
                                                                            fill="#6B7280"
                                                                            opacity="0.6"
                                                                        />
                                                                    ))}
                                                                </svg>
                                                            </td>
                                                            {category.data.map((period, i) => (
                                                                <td key={i} className="px-4 py-3 text-center text-sm text-gray-600 border-l border-gray-200">
                                                                    {formatCurrency(period.budget)}
                                                                </td>
                                                            ))}
                                                            <td className="px-4 py-3 text-center text-sm font-medium border-l-2 border-gray-300 bg-gray-50">
                                                                {formatCurrency(calculateTotals(category.data).budget)}
                                                            </td>
                                                        </tr>

                                                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                                                            <td className="sticky left-0 bg-white px-6 py-3 text-sm text-gray-700">
                                                                Prior Year
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                <Activity className="h-4 w-4 mx-auto text-gray-400" />
                                                            </td>
                                                            {category.data.map((period, i) => (
                                                                <td key={i} className="px-4 py-3 text-center text-sm text-gray-500 border-l border-gray-200">
                                                                    {formatCurrency(period.lastYear)}
                                                                </td>
                                                            ))}
                                                            <td className="px-4 py-3 text-center text-sm font-medium border-l-2 border-gray-300 bg-gray-50">
                                                                {formatCurrency(calculateTotals(category.data).lastYear)}
                                                            </td>
                                                        </tr>
                                                    </>
                                                )}

                                                {/* Variance Row */}
                                                <tr className={`border-b border-gray-200 ${showVarianceOnly ? '' : 'bg-yellow-50'}`}>
                                                    <td className="sticky left-0 bg-yellow-50 px-6 py-3 text-sm font-medium text-gray-900">
                                                        Variance to Budget
                                                    </td>
                                                    <td className="px-3 py-3 bg-yellow-50">
                                                        {calculateTotals(category.data).variance > 0 ? (
                                                            <TrendingUp className="h-4 w-4 mx-auto text-green-600" />
                                                        ) : (
                                                            <TrendingDown className="h-4 w-4 mx-auto text-red-600" />
                                                        )}
                                                    </td>
                                                    {category.data.map((period, i) => (
                                                        <td
                                                            key={i}
                                                            className={`px-4 py-3 text-center text-sm font-medium border-l border-gray-200 ${period.actual === 0 ? 'text-gray-400' : getVarianceBackground(period.variance)
                                                                }`}
                                                        >
                                                            {period.actual > 0 && (
                                                                <div className={getVarianceColor(period.variance)}>
                                                                    {formatCurrency(period.variance)}
                                                                    <span className="block text-xs">
                                                                        ({period.variancePercent > 0 ? '+' : ''}{period.variancePercent.toFixed(1)}%)
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </td>
                                                    ))}
                                                    <td className={`px-4 py-3 text-center text-sm font-semibold border-l-2 border-gray-300 ${getVarianceBackground(calculateTotals(category.data).variance)
                                                        }`}>
                                                        <div className={getVarianceColor(calculateTotals(category.data).variance)}>
                                                            {formatCurrency(calculateTotals(category.data).variance)}
                                                            <span className="block text-xs">
                                                                ({calculateTotals(category.data).variancePercent > 0 ? '+' : ''}
                                                                {calculateTotals(category.data).variancePercent.toFixed(1)}%)
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>

                                                {/* YoY Growth Row */}
                                                <tr className="border-b-2 border-gray-300">
                                                    <td className="sticky left-0 bg-white px-6 py-3 text-sm font-medium text-gray-900">
                                                        YoY Growth %
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        <BarChart3 className="h-4 w-4 mx-auto text-gray-400" />
                                                    </td>
                                                    {category.data.map((period, i) => (
                                                        <td
                                                            key={i}
                                                            className={`px-4 py-3 text-center text-sm font-medium border-l border-gray-200 ${period.actual === 0 ? 'text-gray-400' : ''
                                                                }`}
                                                        >
                                                            {period.yoyGrowth !== 0 && (
                                                                <span className={getVarianceColor(period.yoyGrowth)}>
                                                                    {period.yoyGrowth > 0 ? '+' : ''}{period.yoyGrowth.toFixed(1)}%
                                                                </span>
                                                            )}
                                                        </td>
                                                    ))}
                                                    <td className="px-4 py-3 text-center text-sm font-semibold border-l-2 border-gray-300 bg-gray-50">
                                                        <span className={getVarianceColor(calculateTotals(category.data).yoyGrowth)}>
                                                            {calculateTotals(category.data).yoyGrowth > 0 ? '+' : ''}
                                                            {calculateTotals(category.data).yoyGrowth.toFixed(1)}%
                                                        </span>
                                                    </td>
                                                </tr>

                                                {/* Subcategories */}
                                                {category.subcategories && category.subcategories.map((subcat, subIndex) => (
                                                    <tr key={subIndex} className="border-b border-gray-200 hover:bg-gray-50">
                                                        <td className="sticky left-0 bg-white px-6 py-2 text-sm text-gray-700">
                                                            <span className="ml-6">└ {subcat.name}</span>
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            <div className="h-4" />
                                                        </td>
                                                        {subcat.data.map((period, i) => (
                                                            <td key={i} className="px-4 py-2 text-center text-sm text-gray-600 border-l border-gray-200">
                                                                {formatCurrency(period.actual)}
                                                                {period.variance !== 0 && (
                                                                    <span className={`block text-xs ${getVarianceColor(period.variance)}`}>
                                                                        {period.variance > 0 ? '+' : ''}{period.variancePercent.toFixed(1)}%
                                                                    </span>
                                                                )}
                                                            </td>
                                                        ))}
                                                        <td className="px-4 py-2 text-center text-sm border-l-2 border-gray-300 bg-gray-50">
                                                            {formatCurrency(subcat.data.reduce((sum, p) => sum + p.actual, 0))}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Analysis Notes */}
                <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-md font-semibold text-gray-900 mb-4">Trend Analysis Summary</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                                Positive Trends
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                                <li>• Digital Products showing consistent 15%+ YoY growth</li>
                                <li>• Revenue exceeding budget for 6 consecutive months</li>
                                <li>• Services revenue accelerating in Q2</li>
                                <li>• Cost control better than budget by 1.8% YTD</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <AlertCircle className="h-4 w-4 mr-2 text-yellow-600" />
                                Areas to Watch
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                                <li>• Physical Products growth slowing to single digits</li>
                                <li>• Q3 forecast shows seasonal headwinds</li>
                                <li>• Services margin compression in recent months</li>
                                <li>• Cost inflation accelerating faster than pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 