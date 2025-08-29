'use client';

import ForecastChart from '@/components/charts/ForecastChart';
import AIAssistant from '@/components/fpa/AIAssistant';
import ExecutiveDashboard from '@/components/fpa/ExecutiveDashboard';
import ForecastsView from '@/components/fpa/ForecastsView';
import JourneySelection from '@/components/fpa/JourneySelection';
import PlanningWorkspace from '@/components/fpa/PlanningWorkspace';
import ReportsView from '@/components/fpa/ReportsView';
import ScenariosView from '@/components/fpa/ScenariosView';
import AnnualBudgetJourney from '@/components/journeys/AnnualBudgetJourney';
import ExecutiveJourney from '@/components/journeys/ExecutiveJourney';
import LongRangeJourney from '@/components/journeys/LongRangeJourney';
import PerformanceJourney from '@/components/journeys/PerformanceJourney';
import QuarterlyJourney from '@/components/journeys/QuarterlyJourney';
import ScenariosJourney from '@/components/journeys/ScenariosJourney';
import { aiAgents, aiPredictions } from '@/lib/demo-data';
import { forecastData } from '@/lib/forecast-data';
import { Industry, industryConfigs } from '@/lib/industry-config';
import { motion } from 'framer-motion';
import {
    Activity,
    AlertCircle,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    Bell,
    Brain,
    DollarSign,
    Home,
    Layers,
    PieChart,
    Search,
    Settings,
    Target,
    TrendingDown,
    TrendingUp,
    X
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Mock data for the forecast chart
const mockForecastData = [
    { month: 'Jan 2025', date: '2025-01', actual: 42000000, forecast: 41500000, revenue: 42000000, expenses: 28000000, variance: 500000 },
    { month: 'Feb 2025', date: '2025-02', actual: 43500000, forecast: 43000000, revenue: 43500000, expenses: 29000000, variance: 500000 },
    { month: 'Mar 2025', date: '2025-03', actual: 45200000, forecast: 44800000, revenue: 45200000, expenses: 30000000, variance: 400000 },
    { month: 'Apr 2025', date: '2025-04', actual: 0, forecast: 46500000, revenue: 0, expenses: 0, variance: 1000000 },
    { month: 'May 2025', date: '2025-05', actual: 0, forecast: 48200000, revenue: 0, expenses: 0, variance: 1200000 },
    { month: 'Jun 2025', date: '2025-06', actual: 0, forecast: 49100000, revenue: 0, expenses: 0, variance: 1500000 },
];

export default function ForecastingPlatform() {
    const [isAIOpen, setIsAIOpen] = useState(false);
    const [activeView, setActiveView] = useState('Executive');
    const [selectedTimeframe, setSelectedTimeframe] = useState('Q1 2025');
    const [selectedIndustry, setSelectedIndustry] = useState<Industry>('consumer-goods');
    const [selectedJourney, setSelectedJourney] = useState<string | null>(null);

    const industryConfig = industryConfigs[selectedIndustry];

    const navItems = [
        { icon: Home, label: 'Executive', value: 'Executive' },
        { icon: BarChart3, label: 'Forecasts', value: 'Forecasts' },
        { icon: Layers, label: 'Scenarios', value: 'Scenarios' },
        { icon: Target, label: 'Planning', value: 'Planning' },
        { icon: PieChart, label: 'Reports', value: 'Reports' },
    ];

    // Generate industry-specific dashboard metrics
    const getDashboardMetrics = () => {
        switch (selectedIndustry) {
            case 'consumer-goods':
                return {
                    primary: { label: 'Net Revenue', value: '$47.2M', change: '+5.2%', changeLabel: 'vs plan' },
                    secondary: { label: 'Gross Margin', value: '42.3%', change: '+1.2pp', changeLabel: 'vs LY' },
                    tertiary: { label: 'Units Sold', value: '2.8M', change: '+15%', changeLabel: 'YoY' },
                    quaternary: { label: 'Fill Rate', value: '94.7%', change: '+2.3%', changeLabel: 'vs last Q' }
                };
            case 'financial-services':
                return {
                    primary: { label: 'Net Interest Income', value: '$82.5M', change: '+8.3%', changeLabel: 'vs plan' },
                    secondary: { label: 'Cost-Income Ratio', value: '48.2%', change: '-3.1pp', changeLabel: 'vs LY' },
                    tertiary: { label: 'ROA', value: '1.35%', change: '+0.12pp', changeLabel: 'YoY' },
                    quaternary: { label: 'NIM', value: '3.21%', change: '+0.08pp', changeLabel: 'vs last Q' }
                };
            case 'life-sciences':
                return {
                    primary: { label: 'Product Revenue', value: '$156.8M', change: '+12.4%', changeLabel: 'vs plan' },
                    secondary: { label: 'R&D % of Sales', value: '18.5%', change: '-0.8pp', changeLabel: 'vs LY' },
                    tertiary: { label: 'Pipeline NPV', value: '$2.3B', change: '+22%', changeLabel: 'YoY' },
                    quaternary: { label: 'Launch Success', value: '87%', change: '+5%', changeLabel: 'vs target' }
                };
            default:
                return {
                    primary: { label: 'Revenue', value: '$47.2M', change: '+5.2%', changeLabel: 'vs plan' },
                    secondary: { label: 'EBITDA Margin', value: '23.5%', change: '+1.2pp', changeLabel: 'vs LY' },
                    tertiary: { label: 'Cash Position', value: '$78.3M', change: 'Stable', changeLabel: 'outlook' },
                    quaternary: { label: 'Forecast Accuracy', value: '94.7%', change: '+2.3%', changeLabel: 'vs last Q' }
                };
        }
    };

    const metrics = getDashboardMetrics();

    // Show journey selection screen if no journey is selected
    if (!selectedJourney) {
        return <JourneySelection onJourneySelect={setSelectedJourney} />;
    }

    // Show specific journey based on selection
    if (selectedJourney === 'executive') {
        return <ExecutiveJourney onBack={() => setSelectedJourney(null)} />;
    }

    if (selectedJourney === 'quarterly-forecast') {
        return <QuarterlyJourney onBack={() => setSelectedJourney(null)} />;
    }

    if (selectedJourney === 'scenario-modeling') {
        return <ScenariosJourney onBack={() => setSelectedJourney(null)} />;
    }

    if (selectedJourney === 'annual-budget') {
        return <AnnualBudgetJourney onBack={() => setSelectedJourney(null)} />;
    }

    if (selectedJourney === 'performance-monitoring') {
        return <PerformanceJourney onBack={() => setSelectedJourney(null)} />;
    }

    if (selectedJourney === 'long-range') {
        return <LongRangeJourney onBack={() => setSelectedJourney(null)} />;
    }

    // Admin journey placeholder
    if (selectedJourney === 'admin') {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Admin & Data Management
                    </h2>
                    <p className="text-gray-600 mb-6">This journey is being developed</p>
                    <button
                        onClick={() => setSelectedJourney(null)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Command Center
                    </button>
                </div>
            </div>
        );
    }

    // Legacy view for other journeys (to be replaced with journey-specific components)
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Left side */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/"
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span className="hidden sm:inline">Back to Portal</span>
                            </Link>

                            <div className="hidden sm:block w-px h-8 bg-gray-200" />

                            <div>
                                <h1 className="text-xl font-semibold text-gray-900">Connected Enterprise Planning Platform</h1>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="flex items-center space-x-4">
                            {/* Industry Selector */}
                            <div className="flex items-center space-x-2">
                                <label htmlFor="industry" className="text-sm font-medium text-gray-700">
                                    Industry:
                                </label>
                                <select
                                    id="industry"
                                    value={selectedIndustry}
                                    onChange={(e) => setSelectedIndustry(e.target.value as Industry)}
                                    className="block w-48 pl-3 pr-10 py-1.5 text-sm border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                                >
                                    <option value="consumer-goods">Consumer Goods</option>
                                    <option value="financial-services">Financial Services</option>
                                    <option value="life-sciences">Life Sciences</option>
                                    <option value="technology">Technology</option>
                                </select>
                            </div>

                            <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                                <Search className="w-5 h-5" />
                            </button>

                            <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                                <Bell className="w-5 h-5" />
                            </button>

                            <button
                                onClick={() => setIsAIOpen(true)}
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <Brain className="w-4 h-4 mr-2" />
                                AI Assistant
                            </button>

                            <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                                <Settings className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sub-navigation */}
                <div className="bg-white border-t border-gray-100">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <nav className="flex space-x-6">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.value}
                                        onClick={() => setActiveView(item.value)}
                                        className={`flex items-center space-x-2 px-1 py-3 border-b-2 transition-colors ${activeView === item.value
                                            ? 'border-blue-600 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </header>

            {/* AI Agents Status Bar */}
            <div className="bg-blue-50 border-b border-blue-100">
                <div className="px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Activity className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium text-blue-900">AI Agents Active</span>
                            </div>

                            {/* Agent Status Pills */}
                            <div className="flex items-center space-x-3">
                                {aiAgents?.slice(0, 4).map((agent) => (
                                    <div
                                        key={agent.id}
                                        className="flex items-center space-x-2 px-3 py-1 bg-white rounded-full border border-blue-200"
                                    >
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${agent.color === 'blue' ? 'bg-blue-500' :
                                            agent.color === 'purple' ? 'bg-purple-500' :
                                                agent.color === 'orange' ? 'bg-orange-500' :
                                                    'bg-green-500'
                                            }`}>
                                            {agent.symbol}
                                        </div>
                                        <span className="text-xs text-gray-700">{agent.name}</span>
                                        <span className="text-xs text-gray-500">• {agent.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            View Details →
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="px-4 sm:px-6 lg:px-8 py-6">
                {activeView === 'Executive' && (
                    <ExecutiveDashboard />
                )}

                {activeView === 'Dashboard' && false && (
                    <>
                        {/* Executive Summary */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Executive Dashboard - {industryConfig.name}</h2>
                                    <p className="text-sm text-gray-500 mt-1">Real-time financial intelligence and forecasting</p>
                                </div>

                                {/* Time Period Selector */}
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setSelectedTimeframe('Q1 2025')}
                                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${selectedTimeframe === 'Q1 2025'
                                            ? 'bg-gray-900 text-white'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        Q1 2025
                                    </button>
                                    <button
                                        onClick={() => setSelectedTimeframe('FY 2025')}
                                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${selectedTimeframe === 'FY 2025'
                                            ? 'bg-gray-900 text-white'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        FY 2025
                                    </button>
                                </div>
                            </div>

                            {/* Key Metrics Grid - Industry Specific */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                {/* Primary Metric */}
                                <motion.div
                                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">{metrics.primary.label}</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">{metrics.primary.value}</p>
                                        </div>
                                        <div className="p-2 bg-green-50 rounded-lg">
                                            <TrendingUp className="w-5 h-5 text-green-600" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            <ArrowUpRight className="w-4 h-4 text-green-600" />
                                            <span className="text-sm font-medium text-green-600">{metrics.primary.change}</span>
                                            <span className="text-sm text-gray-500">{metrics.primary.changeLabel}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-xs font-bold text-blue-600">
                                                AI
                                            </div>
                                            <span className="text-xs text-gray-500">95%</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Secondary Metric */}
                                <motion.div
                                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">{metrics.secondary.label}</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">{metrics.secondary.value}</p>
                                        </div>
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            <BarChart3 className="w-5 h-5 text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            <ArrowUpRight className="w-4 h-4 text-green-600" />
                                            <span className="text-sm font-medium text-green-600">{metrics.secondary.change}</span>
                                            <span className="text-sm text-gray-500">{metrics.secondary.changeLabel}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center text-xs font-bold text-orange-600">
                                                ML
                                            </div>
                                            <span className="text-xs text-gray-500">91%</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Tertiary Metric */}
                                <motion.div
                                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">{metrics.tertiary.label}</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">{metrics.tertiary.value}</p>
                                        </div>
                                        <div className="p-2 bg-purple-50 rounded-lg">
                                            <DollarSign className="w-5 h-5 text-purple-600" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            <span className="text-sm font-medium text-green-600">{metrics.tertiary.change}</span>
                                            <span className="text-sm text-gray-500">{metrics.tertiary.changeLabel}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center text-xs font-bold text-green-600">
                                                RT
                                            </div>
                                            <span className="text-xs text-gray-500">Live</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Quaternary Metric */}
                                <motion.div
                                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">{metrics.quaternary.label}</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">{metrics.quaternary.value}</p>
                                        </div>
                                        <div className="p-2 bg-amber-50 rounded-lg">
                                            <Target className="w-5 h-5 text-amber-600" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            <ArrowUpRight className="w-4 h-4 text-green-600" />
                                            <span className="text-sm font-medium text-green-600">{metrics.quaternary.change}</span>
                                            <span className="text-sm text-gray-500">{metrics.quaternary.changeLabel}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-xs font-bold text-purple-600">
                                                SA
                                            </div>
                                            <span className="text-xs text-gray-500">97%</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* AI Insights Alert - Industry Specific */}
                            {aiPredictions && aiPredictions.length > 0 && (
                                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                                    <div className="flex items-start space-x-3">
                                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <div className="flex-1">
                                            <h3 className="text-sm font-semibold text-amber-900">
                                                AI Insight: {industryConfig.forecastDrivers[0]?.name || aiPredictions[0].title}
                                            </h3>
                                            <p className="text-sm text-amber-800 mt-1">
                                                {selectedIndustry === 'consumer-goods'
                                                    ? 'Raw material costs trending 15% higher. Recommend forward contracts for Q2-Q3 to lock in pricing and protect margins.'
                                                    : selectedIndustry === 'financial-services'
                                                        ? 'Interest rate environment shifting. Net interest margin compression expected. Recommend duration adjustment in investment portfolio.'
                                                        : aiPredictions[0].description
                                                }
                                            </p>
                                            <div className="flex items-center space-x-4 mt-3">
                                                <button className="text-sm font-medium text-amber-900 hover:text-amber-700">
                                                    View Details →
                                                </button>
                                                <button className="text-sm font-medium text-amber-900 hover:text-amber-700">
                                                    Take Action
                                                </button>
                                            </div>
                                        </div>
                                        <button className="text-amber-600 hover:text-amber-700">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Industry-Specific Business Metrics */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                {/* Business Health Indicators */}
                                <div className="bg-white rounded-xl border border-gray-200 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Health Indicators</h3>
                                    <div className="space-y-4">
                                        {industryConfig.businessMetrics.map((metric) => (
                                            <div key={metric.id} className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{metric.name}</p>
                                                    <p className="text-xs text-gray-500 mt-0.5">{metric.insight}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-semibold text-gray-900">
                                                        {metric.value}{metric.unit === '%' ? '%' : metric.unit === 'index' ? '' : metric.unit}
                                                    </p>
                                                    <div className="flex items-center justify-end mt-1">
                                                        {metric.trend === 'up' ? (
                                                            <TrendingUp className="w-4 h-4 text-green-600" />
                                                        ) : metric.trend === 'down' ? (
                                                            <TrendingDown className="w-4 h-4 text-red-600" />
                                                        ) : (
                                                            <ArrowRight className="w-4 h-4 text-gray-400" />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Top Drivers Impact */}
                                <div className="bg-white rounded-xl border border-gray-200 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performance Drivers</h3>
                                    <div className="space-y-3">
                                        {industryConfig.forecastDrivers.filter(d => d.impact === 'high').slice(0, 3).map((driver) => (
                                            <div key={driver.id} className="p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">{driver.name}</p>
                                                        <p className="text-xs text-gray-500 mt-1">{driver.description}</p>
                                                    </div>
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                                                        High
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Main Chart */}
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {selectedIndustry === 'consumer-goods' ? 'Net Revenue & Units Trend' :
                                                selectedIndustry === 'financial-services' ? 'Net Interest Income Trend' :
                                                    'Revenue Forecast vs Actuals'}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">Monthly view with AI-powered predictions</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                            <span className="text-sm text-gray-600">Forecast</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span className="text-sm text-gray-600">Actual</span>
                                        </div>
                                    </div>
                                </div>

                                <ForecastChart
                                    data={mockForecastData}
                                    type="line"
                                    height={350}
                                    showVariance={true}
                                    animated={true}
                                />
                            </div>
                        </div>
                    </>
                )}

                {activeView === 'Forecasts' && <ForecastsView selectedIndustry={selectedIndustry} />}
                {activeView === 'Scenarios' && <ScenariosView />}
                {activeView === 'Planning' && <PlanningWorkspace />}
                {activeView === 'Reports' && <ReportsView />}
            </main>

            {/* AI Assistant Modal */}
            <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
        </div>
    );
} 