'use client';

import { motion } from 'framer-motion';
import {
    AlertTriangle,
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Bot,
    Calendar,
    CheckCircle,
    ChevronRight,
    Clock,
    Download,
    Edit,
    FileText,
    Filter,
    Maximize2,
    Search,
    Send,
    Sparkles,
    Zap
} from 'lucide-react';
import { useState } from 'react';

interface PerformanceJourneyProps {
    onBack: () => void;
}

interface Alert {
    id: string;
    type: 'warning' | 'success' | 'critical';
    message: string;
    value?: string;
    trend?: 'up' | 'down';
    action?: string;
}

interface Report {
    id: string;
    name: string;
    type: 'recent' | 'scheduled' | 'custom' | 'flash';
    lastUpdated: string;
    frequency?: string;
    owner?: string;
}

interface PerformanceNode {
    id: string;
    name: string;
    level: 'company' | 'region' | 'bu' | 'product';
    metrics: {
        revenue: number;
        revenueVsPlan: number;
        margin: number;
        marginVsPlan: number;
        volume: number;
        volumeVsPlan: number;
    };
    sparkline: number[];
    children?: PerformanceNode[];
}

export default function PerformanceJourney({ onBack }: PerformanceJourneyProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedReportType, setSelectedReportType] = useState<string | null>(null);
    const [expandedNodes, setExpandedNodes] = useState<string[]>(['company']);
    const [selectedCell, setSelectedCell] = useState<string | null>(null);
    const [narrativeGenerated, setNarrativeGenerated] = useState(false);
    const [editingNarrative, setEditingNarrative] = useState(false);

    // Mock data
    const alerts: Alert[] = [
        {
            id: '1',
            type: 'warning',
            message: 'EMEA Revenue -12% vs forecast',
            value: '-$4.2M',
            trend: 'down',
            action: 'Review EMEA Detail'
        },
        {
            id: '2',
            type: 'warning',
            message: 'Inventory spike +$2.3M',
            value: '+18%',
            trend: 'up',
            action: 'Analyze Inventory'
        },
        {
            id: '3',
            type: 'success',
            message: 'Margins recovered +40bps',
            value: '28.4%',
            trend: 'up',
            action: 'View Margin Report'
        }
    ];

    const aiSuggestions = [
        { id: '1', label: 'EMEA Detail', reason: 'Due to revenue alert' },
        { id: '2', label: 'Inventory Analysis', reason: 'Unusual spike detected' }
    ];

    const recentReports: Report[] = [
        {
            id: '1',
            name: 'Daily Flash Report',
            type: 'recent',
            lastUpdated: '2 hours ago'
        },
        {
            id: '2',
            name: 'Weekly P&L Summary',
            type: 'recent',
            lastUpdated: '1 day ago'
        },
        {
            id: '3',
            name: 'March Close Analysis',
            type: 'recent',
            lastUpdated: '3 days ago'
        }
    ];

    const scheduledReports: Report[] = [
        {
            id: '1',
            name: 'Monday Morning Brief',
            type: 'scheduled',
            lastUpdated: 'Every Monday 6 AM',
            frequency: 'Weekly',
            owner: 'CFO Office'
        },
        {
            id: '2',
            name: 'Month-End Package',
            type: 'scheduled',
            lastUpdated: 'Last day of month',
            frequency: 'Monthly',
            owner: 'FP&A Team'
        }
    ];

    const performanceData: PerformanceNode = {
        id: 'company',
        name: 'Global Company',
        level: 'company',
        metrics: {
            revenue: 485.2,
            revenueVsPlan: -2.3,
            margin: 28.4,
            marginVsPlan: 0.4,
            volume: 98500,
            volumeVsPlan: -1.2
        },
        sparkline: [92, 94, 91, 95, 93, 97, 95, 98, 96, 94, 95, 97],
        children: [
            {
                id: 'na',
                name: 'North America',
                level: 'region',
                metrics: {
                    revenue: 245.6,
                    revenueVsPlan: 2.1,
                    margin: 29.2,
                    marginVsPlan: 0.8,
                    volume: 52000,
                    volumeVsPlan: 1.5
                },
                sparkline: [95, 96, 94, 97, 96, 98, 97, 99, 98, 96, 97, 98],
                children: [
                    {
                        id: 'na-retail',
                        name: 'Retail Division',
                        level: 'bu',
                        metrics: {
                            revenue: 145.2,
                            revenueVsPlan: 3.2,
                            margin: 28.5,
                            marginVsPlan: 0.5,
                            volume: 32000,
                            volumeVsPlan: 2.8
                        },
                        sparkline: [94, 95, 96, 98, 97, 99, 98, 100, 99, 97, 98, 99]
                    },
                    {
                        id: 'na-commercial',
                        name: 'Commercial Division',
                        level: 'bu',
                        metrics: {
                            revenue: 100.4,
                            revenueVsPlan: 0.8,
                            margin: 30.1,
                            marginVsPlan: 1.2,
                            volume: 20000,
                            volumeVsPlan: -0.5
                        },
                        sparkline: [96, 97, 93, 96, 95, 97, 96, 98, 97, 95, 96, 97]
                    }
                ]
            },
            {
                id: 'emea',
                name: 'EMEA',
                level: 'region',
                metrics: {
                    revenue: 142.3,
                    revenueVsPlan: -12.0,
                    margin: 27.2,
                    marginVsPlan: -1.8,
                    volume: 28500,
                    volumeVsPlan: -8.5
                },
                sparkline: [98, 96, 94, 92, 90, 88, 87, 86, 85, 84, 83, 82],
                children: [
                    {
                        id: 'emea-uk',
                        name: 'UK & Ireland',
                        level: 'bu',
                        metrics: {
                            revenue: 65.4,
                            revenueVsPlan: -8.2,
                            margin: 28.1,
                            marginVsPlan: -0.9,
                            volume: 14000,
                            volumeVsPlan: -6.2
                        },
                        sparkline: [96, 94, 92, 90, 88, 87, 86, 85, 84, 83, 82, 81]
                    },
                    {
                        id: 'emea-central',
                        name: 'Central Europe',
                        level: 'bu',
                        metrics: {
                            revenue: 76.9,
                            revenueVsPlan: -15.3,
                            margin: 26.5,
                            marginVsPlan: -2.5,
                            volume: 14500,
                            volumeVsPlan: -10.5
                        },
                        sparkline: [99, 97, 95, 93, 91, 88, 86, 84, 82, 80, 78, 76]
                    }
                ]
            },
            {
                id: 'apac',
                name: 'APAC',
                level: 'region',
                metrics: {
                    revenue: 97.3,
                    revenueVsPlan: 4.5,
                    margin: 29.1,
                    marginVsPlan: 1.2,
                    volume: 18000,
                    volumeVsPlan: 3.8
                },
                sparkline: [88, 90, 92, 94, 95, 97, 98, 100, 101, 102, 103, 104]
            }
        ]
    };

    const generatedNarrative = {
        summary: "Q1 performance shows mixed results with overall revenue tracking 2.3% below plan at $485.2M, though margins have improved 40bps to 28.4%.",
        achievements: [
            "North America outperformed with +2.1% revenue growth, driven by strong Retail performance (+3.2%)",
            "APAC continues momentum with +4.5% growth and margin expansion of 120bps",
            "Global margins recovered to 28.4%, exceeding plan by 40bps through cost initiatives"
        ],
        concerns: [
            "EMEA significantly underperforming at -12% revenue variance, requiring immediate intervention",
            "Central Europe showing accelerating decline with -15.3% variance",
            "Inventory levels spiked $2.3M (+18%) above normal, indicating potential demand softness"
        ],
        recommendations: [
            "Conduct deep-dive review of EMEA operations with regional leadership by EOW",
            "Implement inventory reduction plan targeting $1.5M reduction in next 30 days",
            "Accelerate NA expansion to offset EMEA weakness"
        ]
    };

    const getAlertIcon = (type: string) => {
        switch (type) {
            case 'warning':
                return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
            case 'critical':
                return <AlertTriangle className="h-5 w-5 text-red-600" />;
            case 'success':
                return <CheckCircle className="h-5 w-5 text-green-600" />;
            default:
                return null;
        }
    };

    const getPerformanceColor = (value: number) => {
        if (value >= 5) return 'bg-green-500 text-white';
        if (value >= 2) return 'bg-green-400 text-white';
        if (value >= 0) return 'bg-green-300 text-gray-900';
        if (value >= -2) return 'bg-yellow-300 text-gray-900';
        if (value >= -5) return 'bg-orange-400 text-white';
        return 'bg-red-500 text-white';
    };

    const toggleNode = (nodeId: string) => {
        setExpandedNodes(prev =>
            prev.includes(nodeId)
                ? prev.filter(id => id !== nodeId)
                : [...prev, nodeId]
        );
    };

    const renderPerformanceNode = (node: PerformanceNode, depth: number = 0) => {
        const isExpanded = expandedNodes.includes(node.id);
        const hasChildren = node.children && node.children.length > 0;
        const indent = depth * 24;

        return (
            <div key={node.id}>
                <div
                    className={`
                        grid grid-cols-7 gap-2 p-3 border-b border-gray-200 hover:bg-gray-50 
                        ${selectedCell === node.id ? 'bg-blue-50' : ''}
                        ${depth === 0 ? 'font-semibold bg-gray-50' : ''}
                    `}
                    style={{ paddingLeft: `${indent + 12}px` }}
                >
                    <div className="col-span-2 flex items-center space-x-2">
                        {hasChildren && (
                            <button
                                onClick={() => toggleNode(node.id)}
                                className="p-0.5 hover:bg-gray-200 rounded"
                            >
                                <ChevronRight
                                    className={`h-4 w-4 text-gray-600 transition-transform ${isExpanded ? 'rotate-90' : ''
                                        }`}
                                />
                            </button>
                        )}
                        <span className="truncate">{node.name}</span>
                    </div>

                    <div
                        className={`text-center px-2 py-1 rounded cursor-pointer ${getPerformanceColor(node.metrics.revenueVsPlan)}`}
                        onClick={() => setSelectedCell(node.id)}
                    >
                        <div className="text-xs opacity-75">Revenue</div>
                        <div className="font-medium">${node.metrics.revenue}M</div>
                        <div className="text-xs">
                            {node.metrics.revenueVsPlan > 0 ? '+' : ''}{node.metrics.revenueVsPlan}%
                        </div>
                    </div>

                    <div
                        className={`text-center px-2 py-1 rounded cursor-pointer ${getPerformanceColor(node.metrics.marginVsPlan)}`}
                        onClick={() => setSelectedCell(node.id)}
                    >
                        <div className="text-xs opacity-75">Margin</div>
                        <div className="font-medium">{node.metrics.margin}%</div>
                        <div className="text-xs">
                            {node.metrics.marginVsPlan > 0 ? '+' : ''}{node.metrics.marginVsPlan}%
                        </div>
                    </div>

                    <div
                        className={`text-center px-2 py-1 rounded cursor-pointer ${getPerformanceColor(node.metrics.volumeVsPlan)}`}
                        onClick={() => setSelectedCell(node.id)}
                    >
                        <div className="text-xs opacity-75">Volume</div>
                        <div className="font-medium">{(node.metrics.volume / 1000).toFixed(1)}K</div>
                        <div className="text-xs">
                            {node.metrics.volumeVsPlan > 0 ? '+' : ''}{node.metrics.volumeVsPlan}%
                        </div>
                    </div>

                    <div className="col-span-2 flex items-center justify-center px-2">
                        <div className="w-full max-w-[120px] h-8">
                            <svg viewBox="0 0 120 32" className="w-full h-full">
                                <polyline
                                    fill="none"
                                    stroke="#3B82F6"
                                    strokeWidth="2"
                                    points={node.sparkline
                                        .map((value, i) => `${i * 10},${32 - (value / 105) * 32}`)
                                        .join(' ')}
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {isExpanded && hasChildren && node.children!.map(child =>
                    renderPerformanceNode(child, depth + 1)
                )}
            </div>
        );
    };

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
                            <h1 className="text-xl font-semibold text-gray-900">Performance Mission Control</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                                <Filter className="h-5 w-5" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                                <Download className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1: Alert Center Banner */}
            <div className="bg-yellow-50 border-b border-yellow-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Zap className="h-5 w-5 text-yellow-600" />
                            <span className="font-medium text-yellow-900">AI-Detected Anomalies</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            {alerts.map((alert) => (
                                <div key={alert.id} className="flex items-center space-x-2">
                                    {getAlertIcon(alert.type)}
                                    <span className={`text-sm ${alert.type === 'warning' ? 'text-yellow-800' :
                                            alert.type === 'success' ? 'text-green-800' :
                                                'text-red-800'
                                        }`}>
                                        {alert.message}
                                    </span>
                                    {alert.value && (
                                        <span className={`text-sm font-bold ${alert.type === 'warning' ? 'text-yellow-900' :
                                                alert.type === 'success' ? 'text-green-900' :
                                                    'text-red-900'
                                            }`}>
                                            {alert.value}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                {/* Section 2: Smart Report Launcher */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Smart Report Launcher</h2>

                        {/* AI Search Box */}
                        <div className="relative mb-6">
                            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                            <Bot className="absolute right-4 top-3.5 h-5 w-5 text-blue-600" />
                            <input
                                type="text"
                                placeholder="What do you need to see?"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-12 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Report Categories */}
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            {['Recent Reports', 'Scheduled Reports', 'Custom Analytics', 'Flash Updates'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedReportType(type)}
                                    className={`
                                        px-4 py-3 rounded-lg border transition-all
                                        ${selectedReportType === type
                                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                                            : 'border-gray-300 hover:border-gray-400 text-gray-700'
                                        }
                                    `}
                                >
                                    {type === 'Recent Reports' && <Clock className="h-5 w-5 inline mr-2" />}
                                    {type === 'Scheduled Reports' && <Calendar className="h-5 w-5 inline mr-2" />}
                                    {type === 'Custom Analytics' && <BarChart3 className="h-5 w-5 inline mr-2" />}
                                    {type === 'Flash Updates' && <Zap className="h-5 w-5 inline mr-2" />}
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* AI Suggestions */}
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <div className="flex items-start space-x-2">
                                <Sparkles className="h-5 w-5 text-blue-600 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium text-blue-900">
                                        Based on today's alerts, you should review:
                                    </p>
                                    <div className="flex space-x-3 mt-2">
                                        {aiSuggestions.map((suggestion) => (
                                            <button
                                                key={suggestion.id}
                                                className="px-4 py-2 bg-white text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors text-sm"
                                            >
                                                {suggestion.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Report List */}
                        {selectedReportType === 'Recent Reports' && (
                            <div className="mt-6 space-y-3">
                                {recentReports.map((report) => (
                                    <div
                                        key={report.id}
                                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <FileText className="h-5 w-5 text-gray-600" />
                                            <div>
                                                <p className="font-medium text-gray-900">{report.name}</p>
                                                <p className="text-sm text-gray-600">{report.lastUpdated}</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="h-5 w-5 text-gray-400" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.section>

                {/* Section 3: Interactive Performance Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">Interactive Performance Grid</h2>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <span>Click any cell for instant drill-down</span>
                                <Maximize2 className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    {/* Grid Header */}
                    <div className="grid grid-cols-7 gap-2 p-3 bg-gray-100 border-b border-gray-300 text-sm font-medium text-gray-700">
                        <div className="col-span-2">Hierarchy</div>
                        <div className="text-center">Revenue</div>
                        <div className="text-center">Margin</div>
                        <div className="text-center">Volume</div>
                        <div className="col-span-2 text-center">12-Month Trend</div>
                    </div>

                    {/* Performance Grid */}
                    <div className="max-h-96 overflow-y-auto">
                        {renderPerformanceNode(performanceData)}
                    </div>

                    {/* Legend */}
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <div className="flex items-center justify-center space-x-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-green-500 rounded"></div>
                                <span className="text-gray-600">&gt; +5%</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-green-400 rounded"></div>
                                <span className="text-gray-600">+2% to +5%</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-yellow-300 rounded"></div>
                                <span className="text-gray-600">-2% to +2%</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-orange-400 rounded"></div>
                                <span className="text-gray-600">-5% to -2%</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-red-500 rounded"></div>
                                <span className="text-gray-600">&lt; -5%</span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Section 4: AI Narrative Generator */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                            <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
                            AI Narrative Generator
                        </h2>
                    </div>

                    {!narrativeGenerated ? (
                        <div className="text-center py-12">
                            <Bot className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                            <p className="text-gray-600 mb-6">Generate an executive summary based on current performance data</p>
                            <button
                                onClick={() => setNarrativeGenerated(true)}
                                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                            >
                                Generate Executive Summary
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* Summary */}
                            <div className={editingNarrative ? 'space-y-4' : ''}>
                                <h3 className="font-medium text-gray-900">Executive Summary</h3>
                                <p className={`text-gray-700 ${editingNarrative ? 'p-3 border border-gray-300 rounded-lg' : ''}`}
                                    contentEditable={editingNarrative}
                                    suppressContentEditableWarning={true}>
                                    {generatedNarrative.summary}
                                </p>
                            </div>

                            {/* Key Achievements */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-3">Key Achievements</h3>
                                <ul className="space-y-2">
                                    {generatedNarrative.achievements.map((achievement, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                                            <span className={`text-gray-700 ${editingNarrative ? 'p-2 border border-gray-300 rounded flex-1' : ''}`}
                                                contentEditable={editingNarrative}
                                                suppressContentEditableWarning={true}>
                                                {achievement}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Areas of Concern */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-3">Areas of Concern</h3>
                                <ul className="space-y-2">
                                    {generatedNarrative.concerns.map((concern, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                                            <span className={`text-gray-700 ${editingNarrative ? 'p-2 border border-gray-300 rounded flex-1' : ''}`}
                                                contentEditable={editingNarrative}
                                                suppressContentEditableWarning={true}>
                                                {concern}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Recommended Actions */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-3">Recommended Actions</h3>
                                <ul className="space-y-2">
                                    {generatedNarrative.recommendations.map((recommendation, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5" />
                                            <span className={`text-gray-700 ${editingNarrative ? 'p-2 border border-gray-300 rounded flex-1' : ''}`}
                                                contentEditable={editingNarrative}
                                                suppressContentEditableWarning={true}>
                                                {recommendation}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-3 pt-4 border-t border-gray-200">
                                <button
                                    onClick={() => setEditingNarrative(!editingNarrative)}
                                    className={`px-4 py-2 rounded-lg transition-colors ${editingNarrative
                                            ? 'bg-green-600 text-white hover:bg-green-700'
                                            : 'bg-gray-600 text-white hover:bg-gray-700'
                                        }`}
                                >
                                    <Edit className="h-4 w-4 inline mr-2" />
                                    {editingNarrative ? 'Save' : 'Edit'}
                                </button>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    <CheckCircle className="h-4 w-4 inline mr-2" />
                                    Approve
                                </button>
                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                    <Send className="h-4 w-4 inline mr-2" />
                                    Distribute
                                </button>
                            </div>
                        </div>
                    )}
                </motion.section>
            </div>
        </div>
    );
} 