'use client';

import { motion } from 'framer-motion';
import {
    AlertCircle,
    ArrowDown,
    ArrowLeft,
    ArrowUp,
    Brain,
    Clock,
    Copy,
    Download,
    Edit3,
    Eye,
    GitBranch,
    Lock,
    RefreshCw,
    TrendingDown,
    TrendingUp,
    Upload,
    Users,
    Zap
} from 'lucide-react';
import { useState } from 'react';
import AdjustForecastView from '../fpa/planner/AdjustForecastView';
import ReviewDetailsView from '../fpa/planner/ReviewDetailsView';
import ScenariosWorkshop from '../fpa/planner/ScenariosWorkshop';

interface QuarterlyJourneyProps {
    onBack: () => void;
}

type BusinessUnit = 'north-america' | 'emea' | 'apac' | 'digital' | 'services';

interface ForecastMetric {
    label: string;
    forecast: number;
    priorForecast: number;
    plan: number;
    confidence: number;
}

interface AIInsight {
    id: string;
    type: 'warning' | 'opportunity' | 'risk';
    title: string;
    impact: string;
    detail: string;
}

interface GridCell {
    id: string;
    product: string;
    month: string;
    value: number;
    status: 'unchanged' | 'ai-suggested' | 'needs-input' | 'updated';
    aiSuggestion?: number;
    lastUpdated?: string;
}

export default function QuarterlyJourney({ onBack }: QuarterlyJourneyProps) {
    const [selectedBU, setSelectedBU] = useState<BusinessUnit>('north-america');
    const [selectedCells, setSelectedCells] = useState<string[]>([]);
    const [showReviewDetails, setShowReviewDetails] = useState(false);
    const [showAdjustForecast, setShowAdjustForecast] = useState(false);
    const [showScenarios, setShowScenarios] = useState(false);

    // Mock data
    const forecastMetrics: ForecastMetric[] = [
        {
            label: 'Current Month',
            forecast: 42.3,
            priorForecast: 41.8,
            plan: 40.5,
            confidence: 94
        },
        {
            label: 'Current Quarter',
            forecast: 128.7,
            priorForecast: 126.2,
            plan: 125.0,
            confidence: 87
        },
        {
            label: 'Rolling 3 Months',
            forecast: 132.5,
            priorForecast: 130.1,
            plan: 128.8,
            confidence: 82
        },
        {
            label: 'FY Projection',
            forecast: 512.4,
            priorForecast: 505.2,
            plan: 498.0,
            confidence: 75
        }
    ];

    const aiInsights: AIInsight[] = [
        {
            id: '1',
            type: 'warning',
            title: 'Customer X delayed $2M order',
            impact: 'Q2 impact',
            detail: 'Major retail customer pushing order to next quarter due to inventory adjustments'
        },
        {
            id: '2',
            type: 'opportunity',
            title: 'Digital channel trending +23% above model',
            impact: 'Upside $1.5M',
            detail: 'E-commerce performance exceeding ML predictions, driven by new marketing campaign'
        },
        {
            id: '3',
            type: 'risk',
            title: 'Supply chain alert: Component shortage risk',
            impact: '$800K exposure',
            detail: 'Key semiconductor supplier indicating 4-week delay on critical components'
        }
    ];

    const businessUnits = [
        { id: 'north-america', label: 'North America', hasUpdates: 3 },
        { id: 'emea', label: 'EMEA', hasUpdates: 1 },
        { id: 'apac', label: 'APAC', hasUpdates: 5 },
        { id: 'digital', label: 'Digital', hasUpdates: 0 },
        { id: 'services', label: 'Services', hasUpdates: 2 }
    ];

    // Mock grid data
    const gridData: GridCell[] = [
        { id: '1', product: 'Product A', month: 'Jan', value: 12.5, status: 'unchanged' },
        { id: '2', product: 'Product A', month: 'Feb', value: 13.2, status: 'ai-suggested', aiSuggestion: 13.8 },
        { id: '3', product: 'Product A', month: 'Mar', value: 14.1, status: 'needs-input' },
        { id: '4', product: 'Product B', month: 'Jan', value: 8.3, status: 'updated', lastUpdated: '2 hours ago' },
        { id: '5', product: 'Product B', month: 'Feb', value: 8.7, status: 'unchanged' },
        { id: '6', product: 'Product B', month: 'Mar', value: 9.1, status: 'ai-suggested', aiSuggestion: 9.4 },
        { id: '7', product: 'Product C', month: 'Jan', value: 15.6, status: 'unchanged' },
        { id: '8', product: 'Product C', month: 'Feb', value: 16.2, status: 'needs-input' },
        { id: '9', product: 'Product C', month: 'Mar', value: 16.8, status: 'updated', lastUpdated: 'Yesterday' }
    ];

    const waterfallData = [
        { label: 'Prior Forecast', value: 126.2, type: 'start' },
        { label: 'Volume', value: 3.2, type: 'positive' },
        { label: 'Price', value: -0.8, type: 'negative' },
        { label: 'Mix', value: 1.5, type: 'positive' },
        { label: 'New/Lost', value: -1.4, type: 'negative' },
        { label: 'Current Forecast', value: 128.7, type: 'end' }
    ];

    const getInsightIcon = (type: string) => {
        switch (type) {
            case 'warning': return AlertCircle;
            case 'opportunity': return TrendingUp;
            case 'risk': return TrendingDown;
            default: return Zap;
        }
    };

    const getInsightColor = (type: string) => {
        switch (type) {
            case 'warning': return 'text-yellow-600 bg-yellow-50';
            case 'opportunity': return 'text-green-600 bg-green-50';
            case 'risk': return 'text-red-600 bg-red-50';
            default: return 'text-blue-600 bg-blue-50';
        }
    };

    const getCellStyle = (status: string) => {
        switch (status) {
            case 'unchanged': return 'bg-white';
            case 'ai-suggested': return 'bg-yellow-50 border-yellow-300';
            case 'needs-input': return 'bg-red-50 border-red-300';
            case 'updated': return 'bg-green-50 border-green-300';
            default: return 'bg-white';
        }
    };

    const handleCellClick = (cellId: string) => {
        setSelectedCells(prev =>
            prev.includes(cellId)
                ? prev.filter(id => id !== cellId)
                : [...prev, cellId]
        );
    };

    const handleApplyAISuggestions = () => {
        console.log('Applying AI suggestions...');
        // In real app, would update cells with AI suggestions
    };

    if (showReviewDetails) {
        return <ReviewDetailsView onBack={() => setShowReviewDetails(false)} />;
    }

    if (showAdjustForecast) {
        return <AdjustForecastView onBack={() => setShowAdjustForecast(false)} />;
    }

    if (showScenarios) {
        return <ScenariosWorkshop onBack={() => setShowScenarios(false)} />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={onBack}
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <ArrowLeft className="h-5 w-5" />
                                <span>Back to Command Center</span>
                            </button>
                            <div className="h-6 w-px bg-gray-300" />
                            <h1 className="text-xl font-semibold text-gray-900">Forecast Command Center</h1>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-600">
                                <Clock className="h-4 w-4 inline mr-1" />
                                Last AI Run: 10 mins ago
                            </span>
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                                <RefreshCw className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                {/* Section 1: Forecast Summary Strip */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {forecastMetrics.map((metric, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-sm font-medium text-gray-600 mb-3">{metric.label}</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center space-x-2">
                                        <span className="text-2xl font-bold text-gray-900">${metric.forecast}M</span>
                                        <div className={`flex items-center text-sm ${metric.forecast > metric.priorForecast ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                            {metric.forecast > metric.priorForecast ? (
                                                <ArrowUp className="h-3 w-3" />
                                            ) : (
                                                <ArrowDown className="h-3 w-3" />
                                            )}
                                            <span>{Math.abs(metric.forecast - metric.priorForecast).toFixed(1)}</span>
                                        </div>
                                    </div>
                                    <div className="text-xs space-y-1">
                                        <div className="flex justify-between text-gray-600">
                                            <span>vs Prior:</span>
                                            <span className={metric.forecast > metric.priorForecast ? 'text-green-600' : 'text-red-600'}>
                                                {((metric.forecast / metric.priorForecast - 1) * 100).toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>vs Plan:</span>
                                            <span className={metric.forecast > metric.plan ? 'text-green-600' : 'text-red-600'}>
                                                {((metric.forecast / metric.plan - 1) * 100).toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="flex items-center justify-center space-x-2">
                                            <span className="text-xs text-gray-500">Confidence:</span>
                                            <div className="flex items-center">
                                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${metric.confidence > 85 ? 'bg-green-500' :
                                                            metric.confidence > 70 ? 'bg-yellow-500' :
                                                                'bg-red-500'
                                                            }`}
                                                        style={{ width: `${metric.confidence}%` }}
                                                    />
                                                </div>
                                                <span className="ml-2 text-xs font-medium">{metric.confidence}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Section 2: AI Forecast Insights */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                            <Brain className="h-5 w-5 text-blue-600 mr-2" />
                            AI Detection: {aiInsights.length} Material Changes Since Last Week
                        </h2>
                        <span className="text-sm text-gray-600">
                            Powered by ML Forecast Engine
                        </span>
                    </div>

                    <div className="space-y-3 mb-4">
                        {aiInsights.map((insight) => {
                            const Icon = getInsightIcon(insight.type);
                            return (
                                <div key={insight.id} className={`p-4 rounded-lg flex items-start space-x-3 ${getInsightColor(insight.type)}`}>
                                    <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h4 className="font-medium text-gray-900">{insight.title}</h4>
                                                <p className="text-sm text-gray-600 mt-1">{insight.detail}</p>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-900 ml-4">
                                                → {insight.impact}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex space-x-3">
                        <button
                            onClick={() => setShowReviewDetails(true)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Eye className="h-4 w-4 inline mr-2" />
                            Review Details
                        </button>
                        <button
                            onClick={() => setShowAdjustForecast(true)}
                            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            <Edit3 className="h-4 w-4 inline mr-2" />
                            Adjust Forecast
                        </button>
                        <button
                            onClick={() => setShowScenarios(true)}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            <GitBranch className="h-4 w-4 inline mr-2" />
                            Create Scenarios
                        </button>
                    </div>
                </motion.section>

                {/* Section 3: Input Dashboard */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200"
                >
                    {/* Business Unit Tabs */}
                    <div className="border-b border-gray-200">
                        <div className="flex space-x-1 p-2">
                            {businessUnits.map((bu) => (
                                <button
                                    key={bu.id}
                                    onClick={() => setSelectedBU(bu.id as BusinessUnit)}
                                    className={`
                                        flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
                                        ${selectedBU === bu.id
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }
                                    `}
                                >
                                    <span className="font-medium">{bu.label}</span>
                                    {bu.hasUpdates > 0 && (
                                        <span className={`
                                            px-2 py-0.5 text-xs rounded-full
                                            ${selectedBU === bu.id
                                                ? 'bg-blue-200 text-blue-800'
                                                : 'bg-gray-200 text-gray-700'
                                            }
                                        `}>
                                            {bu.hasUpdates}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid and Quick Actions */}
                    <div className="p-6">
                        {/* Legend */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4 text-xs">
                                <div className="flex items-center space-x-1">
                                    <div className="w-4 h-4 bg-white border border-gray-300 rounded"></div>
                                    <span className="text-gray-600">No change needed</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="w-4 h-4 bg-yellow-50 border border-yellow-300 rounded"></div>
                                    <span className="text-gray-600">AI suggests update</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="w-4 h-4 bg-red-50 border border-red-300 rounded"></div>
                                    <span className="text-gray-600">Requires input</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="w-4 h-4 bg-green-50 border border-green-300 rounded"></div>
                                    <span className="text-gray-600">Recently updated</span>
                                </div>
                            </div>
                            <span className="text-sm text-gray-600">
                                {selectedCells.length} cells selected
                            </span>
                        </div>

                        {/* Grid */}
                        <div className="overflow-x-auto mb-4">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Jan
                                        </th>
                                        <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Feb
                                        </th>
                                        <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Mar
                                        </th>
                                        <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Q1 Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {['Product A', 'Product B', 'Product C'].map((product) => {
                                        const productCells = gridData.filter(cell => cell.product === product);
                                        const q1Total = productCells.reduce((sum, cell) => sum + cell.value, 0);

                                        return (
                                            <tr key={product}>
                                                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {product}
                                                </td>
                                                {productCells.map((cell) => (
                                                    <td key={cell.id} className="px-3 py-4 whitespace-nowrap text-sm text-center">
                                                        <div
                                                            onClick={() => handleCellClick(cell.id)}
                                                            className={`
                                                                relative px-3 py-2 rounded cursor-pointer border
                                                                ${getCellStyle(cell.status)}
                                                                ${selectedCells.includes(cell.id) ? 'ring-2 ring-blue-500' : ''}
                                                            `}
                                                        >
                                                            <span className="font-medium">${cell.value}M</span>
                                                            {cell.status === 'ai-suggested' && cell.aiSuggestion && (
                                                                <div className="text-xs text-yellow-700 mt-1">
                                                                    AI: ${cell.aiSuggestion}M
                                                                </div>
                                                            )}
                                                            {cell.status === 'updated' && cell.lastUpdated && (
                                                                <div className="text-xs text-green-700 mt-1">
                                                                    {cell.lastUpdated}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </td>
                                                ))}
                                                <td className="px-3 py-4 whitespace-nowrap text-sm text-center font-bold text-gray-900">
                                                    ${q1Total.toFixed(1)}M
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    <tr className="bg-gray-50">
                                        <td className="px-3 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                            Total
                                        </td>
                                        {['Jan', 'Feb', 'Mar'].map((month) => {
                                            const monthTotal = gridData
                                                .filter(cell => cell.month === month)
                                                .reduce((sum, cell) => sum + cell.value, 0);
                                            return (
                                                <td key={month} className="px-3 py-4 whitespace-nowrap text-sm text-center font-bold text-gray-900">
                                                    ${monthTotal.toFixed(1)}M
                                                </td>
                                            );
                                        })}
                                        <td className="px-3 py-4 whitespace-nowrap text-sm text-center font-bold text-gray-900">
                                            ${gridData.reduce((sum, cell) => sum + cell.value, 0).toFixed(1)}M
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Quick Actions Bar */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex space-x-3">
                                <button
                                    onClick={handleApplyAISuggestions}
                                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center space-x-2"
                                >
                                    <Zap className="h-4 w-4" />
                                    <span>Apply AI Suggestions</span>
                                </button>
                                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
                                    <Copy className="h-4 w-4" />
                                    <span>Copy Last Month</span>
                                </button>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                                    <Users className="h-4 w-4" />
                                    <span>Request BU Input</span>
                                </button>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                                    <Lock className="h-4 w-4" />
                                    <span>Lock Forecast</span>
                                </button>
                            </div>
                            <div className="flex space-x-2">
                                <button className="p-2 text-gray-600 hover:text-gray-900">
                                    <Upload className="h-5 w-5" />
                                </button>
                                <button className="p-2 text-gray-600 hover:text-gray-900">
                                    <Download className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Section 4: Variance Waterfall */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Variance Waterfall Analysis</h2>
                        <span className="text-sm text-gray-600">Auto-generated • Click bars to drill down</span>
                    </div>

                    {/* Waterfall Chart Visualization */}
                    <div className="relative h-64">
                        <div className="absolute inset-0 flex items-end justify-between px-4">
                            {waterfallData.map((item, index) => {
                                const isStart = item.type === 'start';
                                const isEnd = item.type === 'end';
                                const isPositive = item.type === 'positive';
                                const height = Math.abs(item.value) * 1.5; // Scale for visualization

                                return (
                                    <div key={index} className="flex-1 mx-1 flex flex-col items-center">
                                        {/* Value label */}
                                        <span className={`text-sm font-medium mb-2 ${isPositive ? 'text-green-600' :
                                            item.type === 'negative' ? 'text-red-600' :
                                                'text-gray-900'
                                            }`}>
                                            {isPositive || item.type === 'negative' ?
                                                `${item.type === 'positive' ? '+' : ''}${item.value}` :
                                                `$${item.value}M`
                                            }
                                        </span>

                                        {/* Bar */}
                                        <div
                                            className={`
                                                w-full rounded-t cursor-pointer transition-all hover:opacity-80
                                                ${isStart || isEnd ? 'bg-gray-600' :
                                                    isPositive ? 'bg-green-500' : 'bg-red-500'}
                                            `}
                                            style={{ height: `${height}px` }}
                                            title={`Click to see ${item.label} details`}
                                        />

                                        {/* Label */}
                                        <span className="text-xs text-gray-600 mt-2 text-center">
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Baseline */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300" />
                    </div>

                    {/* Summary */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Total Variance from Prior Forecast</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">+$2.5M</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Variance %</p>
                                <p className="text-2xl font-bold text-green-600 mt-1">+2.0%</p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
} 