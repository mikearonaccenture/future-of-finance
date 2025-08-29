'use client';

import { MarketIntelligence } from '@/lib/cfo-analytics-types';
import { motion } from 'framer-motion';
import {
    Activity,
    AlertTriangle,
    BarChart3,
    Building2,
    Globe,
    Info,
    Percent,
    TrendingDown,
    TrendingUp
} from 'lucide-react';
import { useState } from 'react';

interface MarketIntelligenceViewProps {
    marketData: MarketIntelligence;
    onCFOInsight: (area: string, insight: string) => void;
}

export default function MarketIntelligenceView({
    marketData,
    onCFOInsight
}: MarketIntelligenceViewProps) {
    const [activeView, setActiveView] = useState<'competitors' | 'economic' | 'trends'>('competitors');
    const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            notation: 'compact',
            maximumSignificantDigits: 3
        }).format(value);
    };

    const formatPercentage = (value: number) => {
        return `${(value * 100).toFixed(1)}%`;
    };

    const getGrowthColor = (growth: number) => {
        if (growth > 0.1) return 'text-green-600';
        if (growth > 0.05) return 'text-green-500';
        if (growth > 0) return 'text-gray-600';
        return 'text-red-600';
    };

    const getImpactColor = (impact: 'positive' | 'negative' | 'neutral') => {
        switch (impact) {
            case 'positive': return 'text-green-600 bg-green-50';
            case 'negative': return 'text-red-600 bg-red-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* View Selector */}
            <div className="border-b border-gray-200">
                <div className="flex">
                    <button
                        onClick={() => setActiveView('competitors')}
                        className={`flex-1 px-6 py-4 text-sm font-medium ${activeView === 'competitors'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <div className="flex items-center justify-center space-x-2">
                            <Building2 className="h-4 w-4" />
                            <span>Competitor Analysis</span>
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveView('economic')}
                        className={`flex-1 px-6 py-4 text-sm font-medium ${activeView === 'economic'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <div className="flex items-center justify-center space-x-2">
                            <Globe className="h-4 w-4" />
                            <span>Economic Indicators</span>
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveView('trends')}
                        className={`flex-1 px-6 py-4 text-sm font-medium ${activeView === 'trends'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <div className="flex items-center justify-center space-x-2">
                            <Activity className="h-4 w-4" />
                            <span>Industry Trends</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="p-6">
                {/* Competitor Analysis */}
                {activeView === 'competitors' && (
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">Competitive Landscape</h3>
                            <button
                                onClick={() => onCFOInsight('competitors', 'Strategic positioning vs competition')}
                                className="px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100"
                            >
                                Add CFO Insight
                            </button>
                        </div>

                        {/* Competitor Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Company
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Revenue
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Market Share
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Gross Margin
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            EBITDA Margin
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Revenue Growth
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Position
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {marketData.competitorBenchmarks.map((company, index) => (
                                        <tr
                                            key={company.company}
                                            className={`hover:bg-gray-50 cursor-pointer ${company.company === 'Our Company' ? 'bg-blue-50' : ''
                                                }`}
                                            onClick={() => setSelectedCompetitor(company.company)}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {company.company}
                                                {company.company === 'Our Company' && (
                                                    <span className="ml-2 px-2 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
                                                        You
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                                                {formatCurrency(company.revenue)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                                                {formatPercentage(company.marketShare)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                                                {formatPercentage(company.grossMargin)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                                                {formatPercentage(company.ebitdaMargin)}
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${getGrowthColor(company.revenueGrowth)}`}>
                                                {formatPercentage(company.revenueGrowth)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${index === 0 ? 'bg-yellow-100 text-yellow-800' :
                                                        index === 1 ? 'bg-gray-100 text-gray-800' :
                                                            index === 2 ? 'bg-orange-100 text-orange-800' :
                                                                'bg-gray-50 text-gray-600'
                                                    }`}>
                                                    #{index + 1}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Competitive Insights */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h4 className="text-sm font-semibold text-blue-900 mb-2">Market Position</h4>
                                <p className="text-2xl font-bold text-blue-900">#3</p>
                                <p className="text-sm text-blue-700 mt-1">
                                    Growing faster than market average
                                </p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <h4 className="text-sm font-semibold text-green-900 mb-2">Margin Leadership</h4>
                                <p className="text-2xl font-bold text-green-900">42.9%</p>
                                <p className="text-sm text-green-700 mt-1">
                                    Best-in-class gross margins
                                </p>
                            </div>
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <h4 className="text-sm font-semibold text-amber-900 mb-2">Growth Opportunity</h4>
                                <p className="text-2xl font-bold text-amber-900">$625M</p>
                                <p className="text-sm text-amber-700 mt-1">
                                    Gap to market leader revenue
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Economic Indicators */}
                {activeView === 'economic' && (
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">Economic Environment</h3>
                            <button
                                onClick={() => onCFOInsight('economic', 'Macro factors impact on forecast')}
                                className="px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100"
                            >
                                Add CFO Insight
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Key Economic Metrics */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-sm font-medium text-gray-700">GDP Growth</h4>
                                    <TrendingUp className="h-4 w-4 text-gray-400" />
                                </div>
                                <p className="text-2xl font-bold text-gray-900">
                                    {formatPercentage(marketData.economicIndicators.gdpGrowth)}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">Moderate expansion</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-sm font-medium text-gray-700">Inflation Rate</h4>
                                    <Percent className="h-4 w-4 text-gray-400" />
                                </div>
                                <p className="text-2xl font-bold text-gray-900">
                                    {formatPercentage(marketData.economicIndicators.inflation)}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">Above target range</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-sm font-medium text-gray-700">Interest Rates</h4>
                                    <BarChart3 className="h-4 w-4 text-gray-400" />
                                </div>
                                <p className="text-2xl font-bold text-gray-900">
                                    {formatPercentage(marketData.economicIndicators.interestRates)}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">Peak cycle expected</p>
                            </div>
                        </div>

                        {/* Exchange Rates */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-gray-900 mb-4">Exchange Rates (vs USD)</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {Object.entries(marketData.economicIndicators.exchangeRates).map(([currency, rate]) => (
                                    <div key={currency} className="p-3 bg-white border border-gray-200 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-700">{currency}</span>
                                            <span className="text-sm font-bold text-gray-900">{rate.toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Commodity Prices */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-gray-900 mb-4">Key Commodity Prices</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {Object.entries(marketData.economicIndicators.commodityPrices).map(([commodity, price]) => (
                                    <div key={commodity} className="p-3 bg-white border border-gray-200 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-700">{commodity}</span>
                                            <span className="text-sm font-bold text-gray-900">
                                                ${typeof price === 'number' ? price.toFixed(2) : price}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CFO Decision Point */}
                        <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                            <div className="flex items-start space-x-3">
                                <AlertTriangle className="h-5 w-5 text-purple-600 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-semibold text-purple-900">CFO Decision Required</h4>
                                    <p className="text-sm text-purple-700 mt-1">
                                        Rising interest rates and commodity inflation require hedging strategy review.
                                        Consider locking in Q3-Q4 rates and commodity prices.
                                    </p>
                                    <div className="flex space-x-2 mt-3">
                                        <button className="px-3 py-1 text-sm text-white bg-purple-600 rounded hover:bg-purple-700">
                                            Review Hedging
                                        </button>
                                        <button className="px-3 py-1 text-sm text-purple-600 border border-purple-300 rounded hover:bg-purple-50">
                                            Schedule Discussion
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Industry Trends */}
                {activeView === 'trends' && (
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">Industry Dynamics</h3>
                            <button
                                onClick={() => onCFOInsight('trends', 'Strategic implications of trends')}
                                className="px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100"
                            >
                                Add CFO Insight
                            </button>
                        </div>

                        <div className="space-y-4">
                            {marketData.industryTrends.map((trend, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3">
                                                <div className={`p-2 rounded-lg ${getImpactColor(trend.impact)}`}>
                                                    {trend.impact === 'positive' ? (
                                                        <TrendingUp className="h-4 w-4" />
                                                    ) : trend.impact === 'negative' ? (
                                                        <TrendingDown className="h-4 w-4" />
                                                    ) : (
                                                        <Activity className="h-4 w-4" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-gray-900">{trend.trend}</h4>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Impact: {(trend.magnitude * 100).toFixed(0)}% • Timeline: {trend.timeframe}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Trend Analysis */}
                                            <div className="mt-3 pl-11">
                                                <div className="flex items-center space-x-4 text-sm">
                                                    <div>
                                                        <span className="text-gray-500">Revenue Impact:</span>
                                                        <span className={`ml-2 font-medium ${trend.impact === 'positive' ? 'text-green-600' :
                                                                trend.impact === 'negative' ? 'text-red-600' :
                                                                    'text-gray-600'
                                                            }`}>
                                                            {trend.impact === 'positive' ? '+' : trend.impact === 'negative' ? '-' : ''}
                                                            ${Math.abs(trend.magnitude * 156300000 / 1000000).toFixed(1)}M
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500">Confidence:</span>
                                                        <span className="ml-2 font-medium text-gray-900">85%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="p-1 text-gray-400 hover:text-gray-600">
                                            <Info className="h-4 w-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Strategic Implications */}
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h4 className="text-sm font-semibold text-blue-900 mb-3">Strategic Implications</h4>
                            <ul className="space-y-2 text-sm text-blue-800">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Accelerate premium product launches to capture sustainability premium</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Lock in raw material contracts before further inflation impact</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Invest in e-commerce infrastructure to capture channel shift</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 