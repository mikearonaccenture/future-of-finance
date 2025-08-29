'use client';

import { motion } from 'framer-motion';
import {
    AlertTriangle,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Brain,
    ChevronRight,
    Clock,
    TrendingDown,
    TrendingUp,
    Zap
} from 'lucide-react';
import { useState } from 'react';

interface ExecutiveJourneyProps {
    onBack?: () => void;
}

interface Decision {
    id: string;
    title: string;
    impact: string;
    value: string;
}

interface AIAction {
    id: string;
    title: string;
    roi: string;
    detail: string;
}

interface InsightCard {
    id: string;
    title: string;
    points: string[];
}

export default function ExecutiveJourney({ onBack }: ExecutiveJourneyProps = {}) {
    const [expandedInsight, setExpandedInsight] = useState<string | null>(null);

    // Mock data
    const decisions: Decision[] = [
        {
            id: '1',
            title: 'Marketing Budget +$2.5M',
            impact: '+$8.2M Revenue',
            value: '2.5M'
        },
        {
            id: '2',
            title: 'Headcount Add: 25 Sales',
            impact: '$12M Pipeline',
            value: '3.2M'
        },
        {
            id: '3',
            title: 'Price Increase: Core Product',
            impact: '+$4.5M Margin',
            value: '5%'
        }
    ];

    const aiActions: AIAction[] = [
        {
            id: '1',
            title: 'Accelerate Digital Shift',
            roi: '3.2x vs Traditional',
            detail: 'Shift 40% of traditional spend to digital channels'
        },
        {
            id: '2',
            title: 'Fix Working Capital Now',
            roi: 'Free up: $4.5M in 30 days',
            detail: 'Optimize payment terms and reduce inventory'
        }
    ];

    const insights: InsightCard[] = [
        {
            id: '1',
            title: 'What Changed Since Yesterday',
            points: [
                'APAC sales exceeded forecast by 18%',
                'Supply chain costs increased 3.2%',
                'Customer churn down to 2.1% (best ever)'
            ]
        },
        {
            id: '2',
            title: 'Emerging Risks',
            points: [
                'Competitor launching similar product Q2',
                'Key supplier capacity constraints emerging',
                'FX headwinds building in EUR markets'
            ]
        },
        {
            id: '3',
            title: 'Upside Opportunities',
            points: [
                'M&A target available at 30% discount',
                'New channel partner ready to sign',
                'AI cost reduction potential: $2.8M'
            ]
        },
        {
            id: '4',
            title: 'Competitor Moves',
            points: [
                'CompetitorX cut prices by 15% in EMEA',
                'CompetitorY acquired AI startup for $50M',
                'Market leader announced hiring freeze'
            ]
        }
    ];

    const handleDecision = (decisionId: string, action: string) => {
        console.log(`Decision ${decisionId}: ${action}`);
        // In real app, would send to backend
    };

    const handleAIAction = (actionId: string, action: string) => {
        console.log(`AI Action ${actionId}: ${action}`);
        // In real app, would trigger action
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            {onBack && (
                                <>
                                    <button
                                        onClick={onBack}
                                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        <ArrowLeft className="h-5 w-5" />
                                        <span>Back to Command Center</span>
                                    </button>
                                    <div className="h-6 w-px bg-gray-300" />
                                </>
                            )}
                            <h1 className="text-xl font-semibold text-gray-900">Executive Brief</h1>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>Last updated: 2 minutes ago</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Single Scrollable Page */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
                {/* Section 1: Headline Story */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
                >
                    <h2 className="text-sm font-medium text-gray-600 mb-4">TODAY'S BUSINESS POSITION</h2>

                    {/* AI Narrative */}
                    <div className="mb-6">
                        <p className="text-2xl font-light text-gray-900 leading-relaxed">
                            Revenue tracking <span className="font-semibold text-green-600">12% ahead</span> of plan,
                            but margin compression of <span className="font-semibold text-red-600">80bps</span> requires immediate action
                        </p>
                    </div>

                    {/* Three Critical Numbers */}
                    <div className="grid grid-cols-3 gap-8 mb-6">
                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-1">Revenue Position</p>
                            <p className="text-4xl font-bold text-gray-900">+$14.2M</p>
                            <div className="flex items-center justify-center mt-1">
                                <TrendingUp className="h-5 w-5 text-green-600 mr-1" />
                                <span className="text-sm text-green-600">vs. Plan</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-1">Margin Delta</p>
                            <p className="text-4xl font-bold text-gray-900">-80bps</p>
                            <div className="flex items-center justify-center mt-1">
                                <TrendingDown className="h-5 w-5 text-red-600 mr-1" />
                                <span className="text-sm text-red-600">vs. Target</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-1">Cash Days</p>
                            <p className="text-4xl font-bold text-gray-900">42</p>
                            <div className="flex items-center justify-center mt-1">
                                <ArrowRight className="h-5 w-5 text-yellow-600 mr-1" />
                                <span className="text-sm text-yellow-600">No Change</span>
                            </div>
                        </div>
                    </div>

                    {/* Business Health Score */}
                    <div className="flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-600">Overall Business Health</span>
                        <div className="flex items-center space-x-2">
                            <span className="text-3xl font-bold text-gray-900">78</span>
                            <span className="text-lg text-gray-600">/100</span>
                        </div>
                        <ArrowUp className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-green-600">+3 from last week</span>
                    </div>
                </motion.section>

                {/* Section 2: Decision & Action Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                    <div className="grid grid-cols-2 divide-x divide-gray-200">
                        {/* Decisions Required */}
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
                                DECISIONS REQUIRED ({decisions.length})
                            </h3>
                            <div className="space-y-4">
                                {decisions.map((decision) => (
                                    <div key={decision.id} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-medium text-gray-900">{decision.title}</h4>
                                            <span className="text-sm font-semibold text-orange-700">${decision.value}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">Impact: {decision.impact}</p>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleDecision(decision.id, 'approve')}
                                                className="px-3 py-1.5 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleDecision(decision.id, 'modify')}
                                                className="px-3 py-1.5 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700 transition-colors"
                                            >
                                                Modify
                                            </button>
                                            <button
                                                onClick={() => handleDecision(decision.id, 'deny')}
                                                className="px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                                            >
                                                Deny
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* AI-Recommended Actions */}
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Brain className="h-5 w-5 text-blue-600 mr-2" />
                                AI-RECOMMENDED ACTIONS ({aiActions.length})
                            </h3>
                            <div className="space-y-4">
                                {aiActions.map((action) => (
                                    <div key={action.id} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                        <h4 className="font-medium text-gray-900 mb-1">{action.title}</h4>
                                        <p className="text-sm text-gray-600 mb-1">ROI: {action.roi}</p>
                                        <p className="text-sm text-gray-500 mb-3">{action.detail}</p>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleAIAction(action.id, 'execute')}
                                                className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                                            >
                                                Execute
                                            </button>
                                            <button
                                                onClick={() => handleAIAction(action.id, 'analyze')}
                                                className="px-3 py-1.5 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors"
                                            >
                                                {action.id === '2' ? 'Schedule Meet' : 'Analyze More'}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Section 3: Performance Pulse */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    <h2 className="text-lg font-semibold text-gray-900">Performance Pulse</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Revenue Bridge */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Revenue Bridge</h3>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">Plan</span>
                                    <span className="text-sm font-medium">$125M</span>
                                </div>
                                <div className="flex items-center justify-between text-green-600">
                                    <span className="text-xs">+ Volume</span>
                                    <span className="text-sm font-medium">+$18M</span>
                                </div>
                                <div className="flex items-center justify-between text-red-600">
                                    <span className="text-xs">- Price</span>
                                    <span className="text-sm font-medium">-$4M</span>
                                </div>
                                <div className="flex items-center justify-between text-green-600">
                                    <span className="text-xs">+ New Products</span>
                                    <span className="text-sm font-medium">+$2M</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                                    <span className="text-xs font-medium text-gray-900">Actual</span>
                                    <span className="text-sm font-bold text-gray-900">$141M</span>
                                </div>
                            </div>
                        </div>

                        {/* Margin Walk */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Margin Walk</h3>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">Target</span>
                                    <span className="text-sm font-medium">28.5%</span>
                                </div>
                                <div className="flex items-center justify-between text-red-600">
                                    <span className="text-xs">- Price Impact</span>
                                    <span className="text-sm font-medium">-0.4%</span>
                                </div>
                                <div className="flex items-center justify-between text-red-600">
                                    <span className="text-xs">- Mix Shift</span>
                                    <span className="text-sm font-medium">-0.3%</span>
                                </div>
                                <div className="flex items-center justify-between text-red-600">
                                    <span className="text-xs">- Cost Inflation</span>
                                    <span className="text-sm font-medium">-0.5%</span>
                                </div>
                                <div className="flex items-center justify-between text-green-600">
                                    <span className="text-xs">+ Productivity</span>
                                    <span className="text-sm font-medium">+0.4%</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                                    <span className="text-xs font-medium text-gray-900">Current</span>
                                    <span className="text-sm font-bold text-gray-900">27.7%</span>
                                </div>
                            </div>
                        </div>

                        {/* Cash Conversion */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Cash Conversion</h3>
                            <div className="text-center py-2">
                                <p className="text-3xl font-bold text-gray-900">42</p>
                                <p className="text-xs text-gray-600">Days Cash Conversion</p>
                            </div>
                            <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
                                <p className="text-xs font-medium text-yellow-900">Improvement Opportunity</p>
                                <p className="text-sm font-bold text-yellow-900 mt-1">5 days = $4.5M</p>
                            </div>
                            <div className="mt-2 text-xs text-gray-600">
                                <div className="flex justify-between">
                                    <span>DSO: 45 days</span>
                                    <span className="text-red-600">↑ 2</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>DPO: 38 days</span>
                                    <span className="text-green-600">↑ 3</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>DIO: 35 days</span>
                                    <span className="text-gray-600">—</span>
                                </div>
                            </div>
                        </div>

                        {/* Initiative Health */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Initiative Health</h3>
                            <div className="space-y-2">
                                {[
                                    { name: 'Digital Transform', status: 'green', progress: 65 },
                                    { name: 'Cost Excellence', status: 'green', progress: 78 },
                                    { name: 'Market Expansion', status: 'amber', progress: 45 },
                                    { name: 'Product Launch', status: 'green', progress: 82 },
                                    { name: 'M&A Integration', status: 'red', progress: 32 }
                                ].map((initiative, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className={`h-2 w-2 rounded-full ${initiative.status === 'green' ? 'bg-green-500' :
                                                    initiative.status === 'amber' ? 'bg-yellow-500' :
                                                        'bg-red-500'
                                                }`} />
                                            <span className="text-xs text-gray-700">{initiative.name}</span>
                                        </div>
                                        <span className="text-xs font-medium">{initiative.progress}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Section 4: AI Insights Bar */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                            <Zap className="h-5 w-5 text-purple-600 mr-2" />
                            AI Insights
                        </h2>
                        <span className="text-sm text-gray-600">Swipe or scroll →</span>
                    </div>

                    {/* Scrollable insights container */}
                    <div className="overflow-x-auto pb-4">
                        <div className="flex space-x-4" style={{ minWidth: 'max-content' }}>
                            {insights.map((insight) => (
                                <div
                                    key={insight.id}
                                    className="w-80 flex-shrink-0 bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                                    onClick={() => setExpandedInsight(
                                        expandedInsight === insight.id ? null : insight.id
                                    )}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium text-gray-900">{insight.title}</h3>
                                        <ChevronRight className={`h-4 w-4 text-gray-600 transition-transform ${expandedInsight === insight.id ? 'rotate-90' : ''
                                            }`} />
                                    </div>
                                    {expandedInsight === insight.id && (
                                        <ul className="space-y-2 mt-3">
                                            {insight.points.map((point, index) => (
                                                <li key={index} className="text-sm text-gray-700 flex items-start">
                                                    <span className="text-purple-600 mr-2">•</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {expandedInsight !== insight.id && (
                                        <p className="text-sm text-gray-600">Click to expand</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
} 