'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
    Activity,
    AlertCircle,
    AlertTriangle,
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Bell,
    Briefcase,
    Calendar,
    CheckCircle,
    ChevronRight,
    DollarSign,
    Download,
    Eye,
    FileText,
    Maximize2,
    MessageSquare,
    Share2,
    Shield,
    Sparkles,
    Target,
    TrendingDown,
    TrendingUp,
    TrendUp,
    Users,
    X,
    Zap
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ExecutiveSummaryPage() {
    const router = useRouter();
    const [selectedInsight, setSelectedInsight] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [activeView, setActiveView] = useState('overview');
    const [showAIChat, setShowAIChat] = useState(false);

    // Get current time for personalized greeting
    const hour = new Date().getHours();
    const timeGreeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

    // Enhanced KPI data with sparkline trends
    const kpis = [
        {
            label: 'Sales',
        value: '$125.4M',
        change: 8.2,
            target: '$115.4M',
            status: 'above',
            forecast: '3% above forecast',
            sparkline: [45, 52, 48, 58, 55, 62, 65, 68],
            icon: TrendingUp,
            color: 'green'
        },
        {
            label: 'Revenue',
        value: '$112.3M',
        change: 6.7,
            target: '$105.7M',
            status: 'above',
            forecast: 'On track to hit target',
            sparkline: [40, 42, 45, 43, 48, 50, 52, 55],
            icon: DollarSign,
            color: 'green'
        },
        {
            label: 'Profit',
        value: '$24.8M',
        change: -2.1,
            target: '$26.2M',
            status: 'below',
            forecast: 'Margin pressure detected',
            sparkline: [30, 32, 35, 33, 31, 29, 28, 27],
            icon: BarChart3,
            color: 'yellow'
        },
        {
            label: 'Cash Flow',
        value: '$45.2M',
        change: -5.3,
            target: '$48.8M',
            status: 'critical',
            forecast: 'Collection delays impacting',
            sparkline: [60, 58, 55, 52, 48, 45, 43, 42],
            icon: Activity,
            color: 'red'
        },
        {
            label: 'Capital',
        value: '$185.7M',
        change: 3.2,
            target: '$180.0M',
            status: 'above',
            forecast: 'Exceeding plan',
            sparkline: [170, 172, 175, 178, 180, 182, 184, 186],
            icon: Briefcase,
            color: 'green'
        }
    ];

    // AI Executive Briefing
    const executiveBriefing = {
        summary: "Performance is mixed this quarter with strong revenue growth offset by margin compression and cash flow challenges.",
        keyHighlights: [
            { type: 'positive', text: 'Sales exceed forecast by 8.2%, driven by EV segment growth' },
            { type: 'warning', text: 'Profit margins under pressure from increased supply chain costs' },
            { type: 'critical', text: 'Cash collection cycle extended to 52 days, impacting working capital' },
            { type: 'positive', text: 'Digital services revenue up 42% YoY, exceeding all targets' }
        ],
        recommendations: [
            'Immediate action required on accounts receivable to improve cash position',
            'Review pricing strategy to protect margins in Q4',
            'Accelerate cost reduction initiatives in manufacturing'
        ]
    };

    // Key Decisions Required
    const keyDecisions = [
        {
            id: 1,
            title: 'Approve $15M investment in EV battery facility',
            urgency: 'high',
            dueDate: 'Oct 28',
            impact: 'Critical for 2025 production targets',
            owner: 'Board',
            status: 'pending'
        },
        {
            id: 2,
            title: 'Q4 pricing strategy for mid-tier vehicles',
            urgency: 'medium',
            dueDate: 'Nov 5',
            impact: 'Expected $8-12M revenue impact',
            owner: 'Executive Committee',
            status: 'in-review'
        },
        {
            id: 3,
            title: 'Workforce optimization plan approval',
            urgency: 'high',
            dueDate: 'Oct 30',
            impact: '$5M annual savings potential',
            owner: 'CEO/CHRO',
            status: 'pending'
        }
    ];

    // Top Risks & Opportunities
    const risksOpportunities = {
        risks: [
            {
                title: 'Supply chain disruption risk',
                probability: 'High',
                impact: '$10-15M',
                mitigation: 'Dual sourcing strategy 65% complete',
                trend: 'increasing'
            },
            {
                title: 'Competitive pricing pressure',
                probability: 'Medium',
                impact: '$5-8M',
                mitigation: 'Value engineering initiatives underway',
                trend: 'stable'
            },
            {
                title: 'Regulatory compliance (EU)',
                probability: 'Low',
                impact: '$2-3M',
                mitigation: 'Compliance team fully staffed',
                trend: 'decreasing'
            }
        ],
        opportunities: [
            {
                title: 'EV market expansion',
                probability: 'High',
                impact: '$20-30M',
                action: 'Accelerate product launches',
                trend: 'increasing'
            },
            {
                title: 'Digital services growth',
                probability: 'Very High',
                impact: '$15-20M',
                action: 'Increase marketing spend by 25%',
                trend: 'increasing'
            },
            {
                title: 'Emerging markets entry',
                probability: 'Medium',
                impact: '$10-15M',
                action: 'Finalize partnership deals',
                trend: 'stable'
            }
        ]
    };

    // Enhanced business insights with more detail
const businessInsights = [
    {
        id: 1,
            category: 'Volume',
            title: 'Q4 volume accelerating from new launches',
        metric: '2.3M units',
        change: 12.5,
            status: 'high',
            insight: 'EV segment driving 35% of growth',
            drivers: ['3 new model launches', 'Strong pre-orders', 'Dealer inventory optimization'],
            actions: ['Scale production capacity', 'Secure battery supply', 'Expand dealer network']
    },
    {
        id: 2,
            category: 'Profitability',
            title: 'Margin compression from input costs',
            metric: '28.5% margin',
        change: -1.8,
            status: 'medium',
            insight: 'Raw material costs up 18% YoY',
            drivers: ['Steel prices +22%', 'Logistics costs +15%', 'Energy costs +12%'],
            actions: ['Implement value engineering', 'Renegotiate supplier contracts', 'Accelerate automation']
    },
    {
        id: 3,
            category: 'Manufacturing',
            title: 'Record efficiency post-transformation',
        metric: '94.2% OEE',
        change: 3.1,
            status: 'low',
            insight: 'AI-powered quality control reducing defects',
            drivers: ['Predictive maintenance', 'Digital twin optimization', 'Workforce upskilling'],
            actions: ['Roll out to 3 more plants', 'Invest in advanced robotics', 'Expand IoT sensors']
    },
    {
        id: 4,
            category: 'Customer',
            title: 'NPS declining in key segments',
        metric: '68 NPS',
        change: -8,
            status: 'critical',
            insight: 'Service quality issues impacting satisfaction',
            drivers: ['Parts availability -15%', 'Service wait times +25%', 'Digital experience gaps'],
            actions: ['Urgent service center audit', 'Implement parts predictive stocking', 'Launch mobile service app']
    },
    {
        id: 5,
            category: 'Working Capital',
            title: 'Cash conversion cycle extending',
        metric: '$142M',
        change: 15.2,
            status: 'high',
            insight: 'Dealer financing terms impacting collections',
            drivers: ['DSO increased to 52 days', 'Inventory turns down 10%', 'Payables optimization'],
            actions: ['Tighten credit policies', 'Implement dynamic discounting', 'Optimize inventory levels']
    },
    {
        id: 6,
            category: 'Digital',
            title: 'Digital revenue exceeding all targets',
            metric: '42% growth',
        change: 18.5,
            status: 'medium',
            insight: 'Connected services adoption at 78%',
            drivers: ['Subscription renewals 85%', 'New service launches', 'Partnership revenues'],
            actions: ['Expand service portfolio', 'Enhance user experience', 'Scale infrastructure']
        }
    ];

    const renderSparkline = (data: number[], color: string) => {
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min;
        const width = 80;
        const height = 30;

        const points = data.map((value, index) => {
            const x = (index / (data.length - 1)) * width;
            const y = height - ((value - min) / range) * height;
            return `${x},${y}`;
        }).join(' ');

        return (
            <svg width={width} height={height} className="inline-block">
                <polyline
                    fill="none"
                    stroke={color === 'green' ? '#10b981' : color === 'red' ? '#ef4444' : '#f59e0b'}
                    strokeWidth="2"
                    points={points}
                />
                <circle
                    cx={width}
                    cy={height - ((data[data.length - 1] - min) / range) * height}
                    r="2"
                    fill={color === 'green' ? '#10b981' : color === 'red' ? '#ef4444' : '#f59e0b'}
                />
            </svg>
        );
    };

    const handleInsightClick = (insight: any) => {
        setSelectedInsight(insight);
        setShowModal(true);
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-white">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Executive Summary</h1>
                            <p className="text-sm text-gray-500">{timeGreeting}, Sarah • Real-time insights as of {new Date().toLocaleTimeString()}</p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center space-x-3">
                            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                                <Bell className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setShowAIChat(!showAIChat)}
                                className="flex items-center space-x-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                            >
                                <MessageSquare className="w-4 h-4" />
                                <span className="text-sm font-medium">AI Assistant</span>
                            </button>
                            <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                                <Download className="w-4 h-4" />
                                <span className="text-sm font-medium">Export</span>
                            </button>
                            <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                                <Share2 className="w-4 h-4" />
                                <span className="text-sm font-medium">Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* AI Executive Briefing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">AI Executive Briefing</h2>
                                <p className="text-sm text-gray-600">{executiveBriefing.summary}</p>
                            </div>
                        </div>
                        <span className="text-xs text-gray-500">Updated 2 mins ago</span>
                                </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Key Highlights</h3>
                            <div className="space-y-2">
                                {executiveBriefing.keyHighlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start space-x-2">
                                        {highlight.type === 'positive' ?
                                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /> :
                                            highlight.type === 'warning' ?
                                                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5" /> :
                                                <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                                        }
                                        <span className="text-sm text-gray-700">{highlight.text}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Recommended Actions</h3>
                            <div className="space-y-2">
                                {executiveBriefing.recommendations.map((rec, idx) => (
                                    <div key={idx} className="flex items-start space-x-2">
                                        <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                                            {idx + 1}
                                        </span>
                                        <span className="text-sm text-gray-700">{rec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Enhanced KPI Cards */}
                <div className="grid grid-cols-5 gap-4 mb-8">
                    {kpis.map((kpi, index) => (
                        <motion.div
                            key={kpi.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                        >
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center space-x-2">
                                        <div className={`p-2 rounded-lg ${kpi.color === 'green' ? 'bg-green-50' :
                                            kpi.color === 'red' ? 'bg-red-50' : 'bg-amber-50'
                                            }`}>
                                            <kpi.icon className={`w-4 h-4 ${kpi.color === 'green' ? 'text-green-600' :
                                                kpi.color === 'red' ? 'text-red-600' : 'text-amber-600'
                                                }`} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-600">{kpi.label}</span>
                                    </div>
                                    <Eye className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="mb-3">
                                    <div className="flex items-baseline justify-between mb-1">
                                        <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                                        <span className={`text-sm font-semibold flex items-center ${kpi.change > 0 ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                            {kpi.change > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                            {Math.abs(kpi.change)}%
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-500">vs target <span className="font-medium">{kpi.target}</span></span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        {renderSparkline(kpi.sparkline, kpi.color)}
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-400 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>

                                <div className="mt-2 pt-2 border-t border-gray-100">
                                    <p className="text-xs text-gray-600 flex items-center">
                                        <Activity className="w-3 h-3 mr-1" />
                                        {kpi.forecast}
                                    </p>
                                </div>
                            </div>

                            {/* Status bar */}
                            <div className={`h-1 ${kpi.color === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                kpi.color === 'red' ? 'bg-gradient-to-r from-red-500 to-rose-500' :
                                    'bg-gradient-to-r from-yellow-500 to-amber-500'
                                }`} />
                        </motion.div>
                    ))}
            </div>

                {/* View Tabs */}
                <div className="flex items-center space-x-1 mb-6 bg-gray-100 rounded-lg p-1 w-fit">
                    {['overview', 'decisions', 'risks', 'insights'].map((view) => (
                        <button
                            key={view}
                            onClick={() => setActiveView(view)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeView === view
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {view.charAt(0).toUpperCase() + view.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Content based on active view */}
                <AnimatePresence mode="wait">
                    {activeView === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-3 gap-6"
                        >
                            {/* Business Insights Grid */}
                            {businessInsights.map((insight, index) => (
                                <motion.div
                                key={insight.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer border ${insight.status === 'critical' ? 'border-red-200' :
                                        insight.status === 'high' ? 'border-amber-200' :
                                            insight.status === 'medium' ? 'border-blue-200' : 'border-gray-200'
                                        }`}
                                    onClick={() => handleInsightClick(insight)}
                                >
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${insight.status === 'critical' ? 'bg-red-100 text-red-700' :
                                                insight.status === 'high' ? 'bg-amber-100 text-amber-700' :
                                                    insight.status === 'medium' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                                }`}>
                                                {insight.category}
                                            </span>
                                            <span className={`text-sm font-bold flex items-center ${insight.change > 0 ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                {insight.change > 0 ? '+' : ''}{insight.change}%
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{insight.metric}</h3>
                                        <p className="text-sm font-medium text-gray-700 mb-2">{insight.title}</p>
                                        <p className="text-sm text-gray-600 mb-3">{insight.insight}</p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-xs text-gray-500">
                                                <Activity className="w-3 h-3 mr-1" />
                                                {insight.drivers.length} drivers
                                            </div>
                                            <div className="flex items-center text-xs text-blue-600 font-medium">
                                                <span>{insight.actions.length} actions</span>
                                                <ArrowRight className="w-3 h-3 ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeView === 'decisions' && (
                        <motion.div
                            key="decisions"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="bg-white rounded-xl shadow-sm">
                                <div className="p-6 border-b border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                                        <Shield className="w-5 h-5 mr-2 text-blue-600" />
                                        Key Decisions Required
                                    </h2>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {keyDecisions.map((decision) => (
                                        <div key={decision.id} className="p-6 hover:bg-gray-50 transition-colors">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <h3 className="text-base font-medium text-gray-900">{decision.title}</h3>
                                                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${decision.urgency === 'high' ? 'bg-red-100 text-red-700' :
                                                            'bg-amber-100 text-amber-700'
                                                            }`}>
                                                            {decision.urgency} urgency
                                                        </span>
                                                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${decision.status === 'pending' ? 'bg-gray-100 text-gray-700' :
                                                            'bg-blue-100 text-blue-700'
                                                            }`}>
                                                            {decision.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-2">{decision.impact}</p>
                                                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                        <span className="flex items-center">
                                                            <Calendar className="w-3 h-3 mr-1" />
                                                            Due: {decision.dueDate}
                                                        </span>
                                                        <span className="flex items-center">
                                                            <Users className="w-3 h-3 mr-1" />
                                                            {decision.owner}
                                                        </span>
                                                    </div>
                                                </div>
                                                <button className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                                    Review
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                        </div>
                                    </div>
                        </motion.div>
                    )}

                    {activeView === 'risks' && (
                        <motion.div
                            key="risks"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {/* Risks */}
                            <div className="bg-white rounded-xl shadow-sm">
                                <div className="p-6 border-b border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                                        <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                                        Top Risks
                                    </h2>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {risksOpportunities.risks.map((risk, idx) => (
                                        <div key={idx} className="p-6">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-base font-medium text-gray-900">{risk.title}</h3>
                                                <div className="flex items-center">
                                                    {risk.trend === 'increasing' && <TrendingUp className="w-4 h-4 text-red-500" />}
                                                    {risk.trend === 'stable' && <Activity className="w-4 h-4 text-gray-500" />}
                                                    {risk.trend === 'decreasing' && <TrendingDown className="w-4 h-4 text-green-500" />}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 mb-3">
                                                <div>
                                                    <span className="text-xs text-gray-500">Probability</span>
                                                    <p className={`text-sm font-medium ${risk.probability === 'High' ? 'text-red-600' :
                                                        risk.probability === 'Medium' ? 'text-amber-600' : 'text-green-600'
                                                        }`}>{risk.probability}</p>
                                                </div>
                                                <div>
                                                    <span className="text-xs text-gray-500">Impact</span>
                                                    <p className="text-sm font-medium text-gray-900">{risk.impact}</p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <span className="text-xs font-medium text-gray-700">Mitigation:</span>
                                                <p className="text-xs text-gray-600 mt-1">{risk.mitigation}</p>
                                            </div>
                                        </div>
                                    ))}
                                        </div>
                                    </div>

                            {/* Opportunities */}
                            <div className="bg-white rounded-xl shadow-sm">
                                <div className="p-6 border-b border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                                        <Zap className="w-5 h-5 mr-2 text-green-600" />
                                        Top Opportunities
                                    </h2>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {risksOpportunities.opportunities.map((opp, idx) => (
                                        <div key={idx} className="p-6">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-base font-medium text-gray-900">{opp.title}</h3>
                                                <div className="flex items-center">
                                                    {opp.trend === 'increasing' && <TrendingUp className="w-4 h-4 text-green-500" />}
                                                    {opp.trend === 'stable' && <Activity className="w-4 h-4 text-gray-500" />}
                                                    {opp.trend === 'decreasing' && <TrendingDown className="w-4 h-4 text-red-500" />}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 mb-3">
                                                <div>
                                                    <span className="text-xs text-gray-500">Probability</span>
                                                    <p className={`text-sm font-medium ${opp.probability === 'Very High' || opp.probability === 'High' ? 'text-green-600' :
                                                        opp.probability === 'Medium' ? 'text-amber-600' : 'text-red-600'
                                                        }`}>{opp.probability}</p>
                                                </div>
                                                <div>
                                                    <span className="text-xs text-gray-500">Potential</span>
                                                    <p className="text-sm font-medium text-gray-900">{opp.impact}</p>
                                                </div>
                                            </div>
                                            <div className="bg-green-50 rounded-lg p-3">
                                                <span className="text-xs font-medium text-green-700">Action:</span>
                                                <p className="text-xs text-green-600 mt-1">{opp.action}</p>
                                            </div>
                                                    </div>
                                                ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeView === 'insights' && (
                        <motion.div
                            key="insights"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-6"
                        >
                            {/* Strategic Initiatives Tracker */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                                    Strategic Initiatives Progress
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        { name: 'EV Platform Launch', progress: 78, status: 'on-track', impact: '$50M', dueDate: 'Q1 2025' },
                                        { name: 'Digital Transformation', progress: 45, status: 'at-risk', impact: '$30M', dueDate: 'Q2 2025' },
                                        { name: 'Cost Reduction Program', progress: 92, status: 'ahead', impact: '$15M', dueDate: 'Q4 2024' },
                                        { name: 'Market Expansion - Asia', progress: 35, status: 'delayed', impact: '$25M', dueDate: 'Q3 2025' }
                                    ].map((initiative, idx) => (
                                        <div key={idx} className="border rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="text-sm font-medium text-gray-900">{initiative.name}</h4>
                                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${initiative.status === 'ahead' ? 'bg-green-100 text-green-700' :
                                                    initiative.status === 'on-track' ? 'bg-blue-100 text-blue-700' :
                                                        initiative.status === 'at-risk' ? 'bg-amber-100 text-amber-700' :
                                                            'bg-red-100 text-red-700'
                                                    }`}>
                                                    {initiative.status}
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                                <div
                                                    className={`h-2 rounded-full ${initiative.status === 'ahead' ? 'bg-green-500' :
                                                        initiative.status === 'on-track' ? 'bg-blue-500' :
                                                            initiative.status === 'at-risk' ? 'bg-amber-500' :
                                                                'bg-red-500'
                                                        }`}
                                                    style={{ width: `${initiative.progress}%` }}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>{initiative.progress}% complete</span>
                                                <span>Impact: {initiative.impact}</span>
                                                <span>Due: {initiative.dueDate}</span>
                                            </div>
                                        </div>
                                                            ))}
                                                        </div>
                                                    </div>

                            {/* Competitor Benchmarking */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                                        Competitive Position
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            { metric: 'Market Share', us: 18.5, competitor: 22.3, trend: 'up' },
                                            { metric: 'Revenue Growth', us: 6.7, competitor: 5.2, trend: 'up' },
                                            { metric: 'Operating Margin', us: 28.5, competitor: 31.2, trend: 'down' },
                                            { metric: 'Customer Satisfaction', us: 68, competitor: 72, trend: 'down' },
                                            { metric: 'Innovation Index', us: 7.8, competitor: 6.9, trend: 'up' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between">
                                                <span className="text-sm text-gray-700">{item.metric}</span>
                                                <div className="flex items-center space-x-3">
                                                    <span className={`text-sm font-medium ${item.us > item.competitor ? 'text-green-600' : 'text-red-600'
                                                        }`}>
                                                        {item.us}%
                                                    </span>
                                                    <span className="text-xs text-gray-500">vs</span>
                                                    <span className="text-sm text-gray-600">{item.competitor}%</span>
                                                    {item.trend === 'up' ?
                                                        <TrendingUp className="w-3 h-3 text-green-500" /> :
                                                        <TrendingDown className="w-3 h-3 text-red-500" />
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-blue-600" />
                                        Talent & Culture
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-gray-900">94%</p>
                                            <p className="text-xs text-gray-500">Employee Engagement</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-gray-900">12%</p>
                                            <p className="text-xs text-gray-500">Attrition Rate</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-gray-900">87</p>
                                            <p className="text-xs text-gray-500">eNPS Score</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-gray-900">78%</p>
                                            <p className="text-xs text-gray-500">Leadership Pipeline</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t">
                                        <p className="text-xs text-gray-600">
                                            <span className="font-medium">Key Risk:</span> Technical talent retention in EV division
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* External Market Conditions */}
                            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-sm p-6 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <TrendUp className="w-5 h-5 mr-2 text-blue-600" />
                                    Market & Economic Indicators
                                </h3>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                                        <p className="text-xs text-gray-500 mb-1">GDP Growth</p>
                                        <p className="text-lg font-bold text-gray-900">2.8%</p>
                                        <p className="text-xs text-green-600">↑ 0.3pp</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                                        <p className="text-xs text-gray-500 mb-1">Interest Rate</p>
                                        <p className="text-lg font-bold text-gray-900">5.25%</p>
                                        <p className="text-xs text-gray-600">Stable</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                                        <p className="text-xs text-gray-500 mb-1">Oil Price</p>
                                        <p className="text-lg font-bold text-gray-900">$82/bbl</p>
                                        <p className="text-xs text-red-600">↑ 8%</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                                        <p className="text-xs text-gray-500 mb-1">Consumer Confidence</p>
                                        <p className="text-lg font-bold text-gray-900">98.7</p>
                                        <p className="text-xs text-red-600">↓ 2.1</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Meeting Prep & Schedule */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                            Upcoming Reviews
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Board Meeting</p>
                                    <p className="text-xs text-gray-500">Oct 28, 2:00 PM</p>
                                </div>
                                <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                                    Prep Materials →
                                </button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Investor Call</p>
                                    <p className="text-xs text-gray-500">Oct 30, 9:00 AM</p>
                                </div>
                                <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                                    View Script →
                                </button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Strategy Review</p>
                                    <p className="text-xs text-gray-500">Nov 2, 1:00 PM</p>
                                </div>
                                <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                                    Agenda →
                                </button>
                            </div>
                        </div>
                </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                            <FileText className="w-5 h-5 mr-2 text-blue-600" />
                            Quick Actions
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                            <button className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Export to PPT
                            </button>
                            <button className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Board Deck
                            </button>
                            <button className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Share Report
                            </button>
                            <button className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Set Alerts
                        </button>
                            <button className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                What-If
                        </button>
                            <button className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Compliance
                        </button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-sm p-6 text-white">
                        <h3 className="text-base font-semibold mb-4">Performance Pulse</h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Overall Health Score</span>
                                <span className="text-2xl font-bold">87/100</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-white h-2 rounded-full" style={{ width: '87%' }} />
                            </div>
                            <p className="text-xs opacity-90 mt-2">
                                3 areas need immediate attention
                            </p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/20">
                            <div className="flex items-center justify-between text-xs">
                                <span className="opacity-90">Compliance</span>
                                <span className="font-medium">98%</span>
                            </div>
                            <div className="flex items-center justify-between text-xs mt-1">
                                <span className="opacity-90">Risk Level</span>
                                <span className="font-medium">Medium</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Modal for Insight Details */}
            <AnimatePresence>
                {showModal && selectedInsight && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="bg-gradient-to-r from-gray-50 to-white border-b px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">{selectedInsight.title}</h2>
                                        <p className="text-sm text-gray-500">{selectedInsight.category} Analysis</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                            onClick={() => {/* Full screen logic */ }}
                                        >
                                            <Maximize2 className="w-5 h-5 text-gray-500" />
                                        </button>
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            <X className="w-5 h-5 text-gray-500" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="px-6 py-4 overflow-y-auto max-h-[calc(90vh-200px)]">
                                {/* Performance Overview */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <p className="text-sm text-gray-600 mb-1">Current</p>
                                        <p className="text-3xl font-bold text-gray-900">{selectedInsight.metric}</p>
                                        <p className={`text-sm font-medium mt-2 ${selectedInsight.change > 0 ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                            {selectedInsight.change > 0 ? '+' : ''}{selectedInsight.change}% MTD
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <p className="text-sm text-gray-600 mb-1">Forecast</p>
                                        <p className="text-3xl font-bold text-gray-900">
                                            {selectedInsight.category === 'Volume' ? '2.5M' :
                                                selectedInsight.category === 'Profitability' ? '27.2%' :
                                                    selectedInsight.category === 'Manufacturing' ? '95.1%' :
                                                        selectedInsight.category === 'Customer' ? '72' :
                                                            selectedInsight.category === 'Working Capital' ? '$138M' :
                                                                '48%'}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2">End of quarter</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <p className="text-sm text-gray-600 mb-1">vs Target</p>
                                        <p className="text-3xl font-bold text-gray-900">
                                            {selectedInsight.change > 0 ? '+' : ''}{(selectedInsight.change * 0.8).toFixed(1)}%
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2">Performance gap</p>
                                    </div>
                                </div>

                                {/* Key Drivers */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Performance Drivers</h3>
                                    <div className="space-y-2">
                                        {selectedInsight.drivers.map((driver: string, idx: number) => (
                                            <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                                <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-green-500' : idx === 1 ? 'bg-amber-500' : 'bg-blue-500'
                                                    }`} />
                                                <span className="text-sm font-medium text-gray-700">{driver}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Detailed Chart */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Trend Analysis</h3>
                                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                                        <p className="text-gray-500">Interactive {selectedInsight.category} Chart</p>
                                    </div>
                                </div>

                                {/* Recommended Actions */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommended Actions</h3>
                                    <div className="space-y-3">
                                        {selectedInsight.actions.map((action: string, idx: number) => (
                                            <div key={idx} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                                                    {idx + 1}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-gray-900">{action}</p>
                                                    <p className="text-xs text-gray-600 mt-1">
                                                        Priority: {idx === 0 ? 'Immediate' : idx === 1 ? 'High' : 'Medium'}
                                                    </p>
                                                </div>
                                                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                                                    Assign →
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="bg-gray-50 px-6 py-4 border-t flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                        Export Analysis
                                    </button>
                                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                        Schedule Review
                                    </button>
                                </div>
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        router.push('/functions/fpa/management-reporting/business-consoles');
                                    }}
                                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                                >
                                    <span>Deep Dive Analysis</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* AI Chat Assistant */}
            <AnimatePresence>
                {showAIChat && (
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 300 }}
                        className="fixed right-4 bottom-4 w-96 h-[600px] bg-white rounded-xl shadow-2xl z-50 flex flex-col"
                    >
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900">AI Assistant</h3>
                                    <p className="text-xs text-gray-500">Ask me anything about your data</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowAIChat(false)}
                                className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto">
                            <div className="space-y-4">
                                <div className="bg-blue-50 rounded-lg p-3">
                                    <p className="text-sm text-gray-700">
                                        Hi Sarah! I've analyzed your executive summary. Your cash flow situation needs immediate attention.
                                        Would you like me to show you specific actions to improve collections?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    placeholder="Ask about performance, risks, or actions..."
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 