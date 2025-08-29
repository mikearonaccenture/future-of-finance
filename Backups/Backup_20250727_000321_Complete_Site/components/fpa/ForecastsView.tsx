'use client';

import { forecastData } from '@/lib/forecast-data';
import { getHighImpactDrivers, Industry, industryConfigs } from '@/lib/industry-config';
import { 
    mockPLStatement, 
    mockBalanceSheet, 
    mockCashFlow,
    mockWorkingCapital,
    mockMarketIntelligence,
    mockRiskMetrics,
    mockSensitivityAnalysis,
    mockBusinessDrivers
} from '@/lib/cfo-mock-data';
import { motion } from 'framer-motion';
import {
    AlertCircle,
    BarChart,
    Brain,
    Calendar,
    Clock,
    DollarSign,
    Edit3,
    Globe,
    Layers,
    Package,
    Percent,
    Save,
    TrendingDown,
    TrendingUp,
    Zap,
    FileText,
    Shield,
    Activity
} from 'lucide-react';
import { useState } from 'react';
import ForecastChart from '../charts/ForecastChart';
import FinancialStatementView from './FinancialStatementView';
import MarketIntelligenceView from './MarketIntelligenceView';
import RiskSensitivityView from './RiskSensitivityView';

interface TimeHorizon {
    id: string;
    label: string;
    description: string;
    icon: any;
}

interface ForecastRow {
    kpiId: string;
    periods: {
        [period: string]: {
            mlForecast: number;
            humanAdjustment: number;
            finalForecast: number;
            actual?: number;
            variance?: number;
            confidence: number;
        };
    };
}

export default function ForecastsView({ selectedIndustry = 'consumer-goods' }: { selectedIndustry?: Industry }) {
    const [selectedHorizon, setSelectedHorizon] = useState('quarterly');
    const [selectedPeriod, setSelectedPeriod] = useState('2025');
    const [showAdjustments, setShowAdjustments] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [showDrivers, setShowDrivers] = useState(true);
    const [activeView, setActiveView] = useState<'forecast' | 'statements' | 'market' | 'risk'>('forecast');

    // Get industry-specific configuration
    const industryConfig = industryConfigs[selectedIndustry];
    const highImpactDrivers = getHighImpactDrivers(selectedIndustry);

    const handleCFOAdjustment = (statement: string, line: string, adjustment: number) => {
        console.log('CFO Adjustment:', { statement, line, adjustment });
        // In a real app, this would update the forecast data
    };

    const handleCFOInsight = (area: string, insight: string) => {
        console.log('CFO Insight:', { area, insight });
        // In a real app, this would save the insight
    };

    const timeHorizons: TimeHorizon[] = [
        { id: 'longrange', label: 'Long Range', description: '3-5 Year Strategic Plan', icon: TrendingUp },
        { id: 'annual', label: 'Annual Budget', description: 'FY 2025 Operating Plan', icon: Calendar },
        { id: 'quarterly', label: 'Quarterly Forecast', description: 'Rolling 4-Quarter View', icon: BarChart },
        { id: 'monthly', label: 'Monthly POV', description: '30-60-90 Day Outlook', icon: Clock }
    ];

    const { trending, managementAdjustments, insights, bottomsUp } = forecastData;
    const currentTrend = trending.find(t => t.metric === 'Revenue');
    const activeAdjustments = managementAdjustments.filter(a => a.status === 'approved' || a.status === 'pending_approval');

    // Generate sample forecast data for industry KPIs
    const generateForecastData = (kpiId: string): ForecastRow => {
        const baseValue = Math.random() * 1000000 + 500000;
        const periods = ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'];
        const data: ForecastRow = {
            kpiId,
            periods: {}
        };

        periods.forEach((period, index) => {
            const growth = 1 + (Math.random() * 0.1 - 0.02); // -2% to +8% growth
            const mlForecast = baseValue * Math.pow(growth, index);
            const humanAdjustment = mlForecast * (Math.random() * 0.06 - 0.03); // ±3% adjustment

            data.periods[period] = {
                mlForecast,
                humanAdjustment,
                finalForecast: mlForecast + humanAdjustment,
                actual: index === 0 ? mlForecast * (1 + Math.random() * 0.02 - 0.01) : undefined,
                variance: index === 0 ? (Math.random() * 0.04 - 0.02) : undefined,
                confidence: 85 + Math.random() * 10
            };
        });

        return data;
    };

    const formatValue = (value: number, format: string, unit: string) => {
        switch (format) {
            case 'currency':
                return `$${(value / 1000000).toFixed(2)}M`;
            case 'percentage':
                return `${value.toFixed(1)}%`;
            case 'number':
                return unit === 'units' ? `${(value / 1000).toFixed(0)}K` : value.toFixed(0);
            case 'ratio':
                return value.toFixed(2);
            default:
                return value.toFixed(0);
        }
    };

    const getVarianceColor = (variance: number) => {
        if (variance > 0.02) return 'text-green-600';
        if (variance < -0.02) return 'text-red-600';
        return 'text-gray-600';
    };

    return (
        <div className="space-y-6">
            {/* Enhanced View Tabs */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="border-b border-gray-200">
                    <div className="flex overflow-x-auto">
                        <button
                            onClick={() => setActiveView('forecast')}
                            className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium whitespace-nowrap ${
                                activeView === 'forecast'
                                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <BarChart className="h-4 w-4" />
                            <span>Forecast Details</span>
                        </button>
                        <button
                            onClick={() => setActiveView('statements')}
                            className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium whitespace-nowrap ${
                                activeView === 'statements'
                                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <FileText className="h-4 w-4" />
                            <span>Financial Statements</span>
                        </button>
                        <button
                            onClick={() => setActiveView('market')}
                            className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium whitespace-nowrap ${
                                activeView === 'market'
                                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <Globe className="h-4 w-4" />
                            <span>Market Intelligence</span>
                        </button>
                        <button
                            onClick={() => setActiveView('risk')}
                            className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium whitespace-nowrap ${
                                activeView === 'risk'
                                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <Shield className="h-4 w-4" />
                            <span>Risk & Sensitivity</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Forecast Details View */}
            {activeView === 'forecast' && (
                <>
                    {/* Time Horizon Selector */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {timeHorizons.map((horizon) => {
                    const Icon = horizon.icon;
                    return (
                        <motion.button
                            key={horizon.id}
                            onClick={() => setSelectedHorizon(horizon.id)}
                            className={`p-4 rounded-xl border transition-all ${selectedHorizon === horizon.id
                                    ? 'bg-blue-50 border-blue-300 shadow-md'
                                    : 'bg-white border-gray-200 hover:border-gray-300'
                                }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-start justify-between">
                                <div className="text-left">
                                    <h3 className={`font-semibold ${selectedHorizon === horizon.id ? 'text-blue-900' : 'text-gray-900'
                                        }`}>
                                        {horizon.label}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{horizon.description}</p>
                                </div>
                                <Icon className={`w-5 h-5 ${selectedHorizon === horizon.id ? 'text-blue-600' : 'text-gray-400'
                                    }`} />
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* Main Content Area */}
            {selectedHorizon === 'quarterly' && (
                <div className="space-y-6">
                    {/* AI Insights Alert */}
                    <motion.div
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-start space-x-3">
                            <Brain className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-blue-900">
                                    AI Forecast Insight: Q2 Volume Growth Opportunity
                                </h3>
                                <p className="text-sm text-blue-800 mt-1">
                                    Based on seasonal patterns and new product launch timing, Q2 unit sales forecast
                                    shows 12% upside potential. Recommend increasing production by 8% to capture demand
                                    while maintaining 95% fill rate.
                                </p>
                                <div className="flex items-center space-x-4 mt-3">
                                    <span className="text-sm font-medium text-blue-900">
                                        Impact: +$3.2M revenue, +180K units
                                    </span>
                                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                                        Apply Recommendation →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Forecast Controls */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setShowAdjustments(!showAdjustments)}
                                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center space-x-2 ${showAdjustments
                                            ? 'bg-purple-100 text-purple-700'
                                            : 'bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    <Layers className="w-4 h-4" />
                                    <span>{showAdjustments ? 'Hide' : 'Show'} Human Adjustments</span>
                                </button>
                                <button
                                    onClick={() => setShowDrivers(!showDrivers)}
                                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center space-x-2 ${showDrivers
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    <Zap className="w-4 h-4" />
                                    <span>{showDrivers ? 'Hide' : 'Show'} Drivers</span>
                                </button>
                            </div>
                            <button
                                onClick={() => setEditMode(!editMode)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center space-x-2 ${editMode
                                        ? 'bg-red-600 text-white'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                            >
                                {editMode ? (
                                    <>
                                        <Save className="w-4 h-4" />
                                        <span>Save Changes</span>
                                    </>
                                ) : (
                                    <>
                                        <Edit3 className="w-4 h-4" />
                                        <span>Edit Forecast</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* KPI Forecast Table */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Quarterly KPI Forecast - {industryConfig.name}
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            KPI
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Q1 2025
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Q2 2025
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Q3 2025
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Q4 2025
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            FY 2025
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {industryConfig.kpis.slice(0, 8).map((kpi) => {
                                        const forecastRow = generateForecastData(kpi.id);
                                        const periods = ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'];
                                        const fyTotal = periods.reduce((sum, period) =>
                                            sum + forecastRow.periods[period].finalForecast, 0
                                        );

                                        return (
                                            <tr key={kpi.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">{kpi.name}</div>
                                                        <div className="text-xs text-gray-500">{kpi.description}</div>
                                                    </div>
                                                </td>
                                                {periods.map((period) => {
                                                    const data = forecastRow.periods[period];
                                                    return (
                                                        <td key={period} className="px-6 py-4 whitespace-nowrap text-center">
                                                            <div className="space-y-1">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {formatValue(data.finalForecast, kpi.format, kpi.unit)}
                                                                </div>
                                                                {showAdjustments && data.humanAdjustment !== 0 && (
                                                                    <div className="flex items-center justify-center space-x-1">
                                                                        <span className="text-xs text-gray-500">ML:</span>
                                                                        <span className="text-xs text-gray-600">
                                                                            {formatValue(data.mlForecast, kpi.format, kpi.unit)}
                                                                        </span>
                                                                        <span className={`text-xs font-medium ${data.humanAdjustment > 0 ? 'text-green-600' : 'text-red-600'
                                                                            }`}>
                                                                            ({data.humanAdjustment > 0 ? '+' : ''}{(data.humanAdjustment / data.mlForecast * 100).toFixed(1)}%)
                                                                        </span>
                                                                    </div>
                                                                )}
                                                                {data.actual && (
                                                                    <div className={`text-xs ${getVarianceColor(data.variance || 0)}`}>
                                                                        Actual: {formatValue(data.actual, kpi.format, kpi.unit)}
                                                                    </div>
                                                                )}
                                                                <div className="flex items-center justify-center space-x-1">
                                                                    <Brain className="w-3 h-3 text-blue-500" />
                                                                    <span className="text-xs text-gray-500">
                                                                        {data.confidence.toFixed(0)}% conf
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    );
                                                })}
                                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                                    <div className="text-sm font-bold text-gray-900">
                                                        {formatValue(fyTotal, kpi.format, kpi.unit)}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Forecast Drivers Section */}
                    {showDrivers && (
                        <div className="bg-white rounded-xl border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Key Forecast Drivers</h3>
                                <span className="text-sm text-gray-500">
                                    Industry: {industryConfig.name}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {highImpactDrivers.map((driver, index) => (
                                    <motion.div
                                        key={driver.id}
                                        className="border border-gray-200 rounded-lg p-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{driver.name}</h4>
                                                <p className="text-sm text-gray-500 mt-1">{driver.description}</p>
                                            </div>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                High Impact
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Current Impact</span>
                                                <span className="font-medium text-gray-900">
                                                    {driver.category === 'market' ? '+8.2%' :
                                                        driver.category === 'operational' ? '-3.1%' :
                                                            driver.category === 'product' ? '+5.7%' : '+2.4%'}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Forecast Trend</span>
                                                <span className="flex items-center space-x-1">
                                                    {driver.category === 'market' || driver.category === 'product' ? (
                                                        <>
                                                            <TrendingUp className="w-4 h-4 text-green-600" />
                                                            <span className="font-medium text-green-600">Improving</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TrendingDown className="w-4 h-4 text-red-600" />
                                                            <span className="font-medium text-red-600">Challenging</span>
                                                        </>
                                                    )}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <p className="text-xs font-medium text-gray-700 mb-2">Impacts:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {driver.metrics.map((metricId) => {
                                                    const kpi = industryConfig.kpis.find(k => k.id === metricId);
                                                    return kpi ? (
                                                        <span key={metricId} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                                                            {kpi.name}
                                                        </span>
                                                    ) : null;
                                                })}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Additional Driver Insights */}
                            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <div className="flex items-start space-x-3">
                                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-amber-900">
                                            Driver-Based Recommendations
                                        </h4>
                                        <ul className="mt-2 space-y-1 text-sm text-amber-800">
                                            <li>• Raw material costs trending up 15% - consider forward contracts</li>
                                            <li>• E-commerce channel showing 25% growth - increase digital inventory allocation</li>
                                            <li>• Competitor promotion intensity increasing - prepare defensive pricing strategy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Visual Forecast Chart */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Net Revenue Forecast</h3>
                                <p className="text-sm text-gray-500 mt-1">AI/ML forecast with management adjustments</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">ML Forecast</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Final Forecast</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Actual</span>
                                </div>
                            </div>
                        </div>

                        {currentTrend && (
                            <ForecastChart
                                data={currentTrend.periods.map(p => ({
                                    month: p.period,
                                    date: p.period,
                                    actual: p.actual || 0,
                                    forecast: showAdjustments && p.manualOverride ? p.manualOverride : p.mlPrediction,
                                    revenue: p.actual || p.forecast,
                                    expenses: p.actual ? p.actual * 0.65 : p.forecast * 0.65,
                                    variance: Math.abs((p.actual || p.forecast) - p.budget)
                                }))}
                                type="line"
                                height={300}
                                showVariance={true}
                            />
                        )}
                    </div>
                </div>
            )}

            {/* Other time horizons remain the same but would be enhanced similarly */}
            {selectedHorizon === 'annual' && (
                <div className="space-y-6">
                    {/* Enhanced Annual Budget View */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">FY 2025 Operating Plan - {industryConfig.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-gray-900">8.2M</p>
                                <p className="text-sm text-gray-500 mt-1">Units Forecast</p>
                                <p className="text-xs text-green-600 mt-2">+15% YoY</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-gray-900">$156.3M</p>
                                <p className="text-sm text-gray-500 mt-1">Net Revenue</p>
                                <p className="text-xs text-green-600 mt-2">+18.5% YoY</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <Percent className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-gray-900">42.3%</p>
                                <p className="text-sm text-gray-500 mt-1">Gross Margin</p>
                                <p className="text-xs text-green-600 mt-2">+2.1pp YoY</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <Globe className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-gray-900">18.7%</p>
                                <p className="text-sm text-gray-500 mt-1">Market Share</p>
                                <p className="text-xs text-green-600 mt-2">+1.3pp YoY</p>
                            </div>
                        </div>
                    </div>

                    {/* Product Category Breakdown */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Category Performance</h3>
                        <div className="space-y-4">
                            {['Premium Products', 'Core Products', 'Value Products', 'New Launches'].map((category, index) => {
                                const revenues = [78.5, 52.3, 18.4, 7.1];
                                const margins = [52.1, 41.2, 28.5, 35.8];
                                const growth = [22.5, 15.2, 8.3, 145.2];

                                return (
                                    <div key={category} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <Package className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{category}</p>
                                                <p className="text-sm text-gray-500">Margin: {margins[index]}%</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-gray-900">${revenues[index]}M</p>
                                            <p className={`text-sm ${growth[index] > 20 ? 'text-green-600' : 'text-gray-600'}`}>
                                                +{growth[index]}% YoY
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {selectedHorizon === 'longrange' && (
                <div className="space-y-6">
                    {/* Strategic Plan Overview */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">3-Year Strategic Growth Plan</h3>
                        <p className="text-blue-100 mb-6">Market Leadership in {industryConfig.name}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <p className="text-3xl font-bold">$350M</p>
                                <p className="text-blue-100">2027 Revenue Target</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">25%</p>
                                <p className="text-blue-100">Market Share Goal</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">15M</p>
                                <p className="text-blue-100">Units Sold Target</p>
                            </div>
                        </div>
                    </div>

                    {/* Strategic Initiatives */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategic Growth Drivers</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                                <Zap className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Geographic Expansion</h4>
                                    <p className="text-sm text-gray-600 mt-1">Enter 5 new markets in APAC and LATAM</p>
                                    <p className="text-sm font-medium text-green-600 mt-2">Revenue Impact: +$45M by 2027</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Premium Product Portfolio</h4>
                                    <p className="text-sm text-gray-600 mt-1">Launch 15 new premium SKUs with 50%+ margins</p>
                                    <p className="text-sm font-medium text-blue-600 mt-2">Margin Impact: +4.5pp by 2027</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                                <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Digital Transformation</h4>
                                    <p className="text-sm text-gray-600 mt-1">D2C channel to reach 30% of total sales</p>
                                    <p className="text-sm font-medium text-purple-600 mt-2">Channel Mix: Direct sales +$75M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedHorizon === 'monthly' && (
                <div className="space-y-6">
                    {/* 30-60-90 Day View with Industry Focus */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Point of View - {industryConfig.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {['30 Days', '60 Days', '90 Days'].map((period, index) => {
                                const revenues = [12.8, 25.2, 38.7];
                                const units = [892, 1756, 2698];
                                const fillRates = [94.2, 92.8, 91.5];
                                const risks = ['Promo overlap risk', 'Supply chain delay', 'Competitor launch'];

                                return (
                                    <div key={period} className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-3">{period} Outlook</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="text-sm text-gray-500">Revenue Forecast</p>
                                                <p className="text-xl font-bold text-gray-900">${revenues[index]}M</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Units (000s)</p>
                                                <p className="text-lg font-semibold text-blue-600">{units[index]}K</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Fill Rate</p>
                                                <p className="text-lg font-semibold text-green-600">{fillRates[index]}%</p>
                                            </div>
                                            <div className="pt-3 border-t border-gray-100">
                                                <p className="text-sm font-medium text-amber-600 flex items-center">
                                                    <AlertCircle className="w-4 h-4 mr-1" />
                                                    {risks[index]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Monthly Action Items */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <div className="flex items-start space-x-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-amber-900">
                                    Immediate Actions Required
                                </h3>
                                <ul className="mt-2 space-y-1">
                                    <li className="text-sm text-amber-800 flex items-start">
                                        <span className="mr-2">•</span>
                                        Increase safety stock for top 5 SKUs by 20% ahead of promotion
                                    </li>
                                    <li className="text-sm text-amber-800 flex items-start">
                                        <span className="mr-2">•</span>
                                        Lock in Q2 raw material pricing - 8% increase expected
                                    </li>
                                    <li className="text-sm text-amber-800 flex items-start">
                                        <span className="mr-2">•</span>
                                        Accelerate new product launch to counter competitor activity
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
                </>
            )}

            {/* Financial Statements View */}
            {activeView === 'statements' && (
                <FinancialStatementView
                    plStatement={mockPLStatement}
                    balanceSheet={mockBalanceSheet}
                    cashFlow={mockCashFlow}
                    onCFOAdjustment={handleCFOAdjustment}
                />
            )}

            {/* Market Intelligence View */}
            {activeView === 'market' && (
                <MarketIntelligenceView
                    marketData={mockMarketIntelligence}
                    onCFOInsight={handleCFOInsight}
                />
            )}

            {/* Risk & Sensitivity View */}
            {activeView === 'risk' && (
                <RiskSensitivityView
                    riskMetrics={mockRiskMetrics}
                    sensitivityAnalysis={mockSensitivityAnalysis}
                    workingCapital={mockWorkingCapital}
                    businessDrivers={mockBusinessDrivers}
                    onCFODecision={handleCFOInsight}
                />
            )}
        </div>
    );
} 