'use client';

import { aiAgents } from '@/lib/demo-data';
import { motion } from 'framer-motion';
import { AlertTriangle, Bell, CheckCircle, Info, TrendingUp, X, Zap } from 'lucide-react';
import { useState } from 'react';

interface Alert {
    id: string;
    type: 'critical' | 'warning' | 'opportunity' | 'info';
    title: string;
    message: string;
    agentId: string;
    confidence: number;
    impact: string;
    timeframe: string;
    actions: string[];
    priority: 'high' | 'medium' | 'low';
}

export default function PredictiveAlertsBar() {
    const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);
    const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

    const alerts: Alert[] = [
        {
            id: 'alert-1',
            type: 'opportunity',
            title: 'Revenue Acceleration Detected',
            message: 'Q4 showing 23% above forecast. SaaS expansion driving $2.3M uplift. Recommend increasing Q1 targets by 8-12%.',
            agentId: 'fi',
            confidence: 94.7,
            impact: '+$2.3M',
            timeframe: 'Q1 2025',
            actions: ['Adjust Q1 Budget', 'Review SaaS Strategy', 'Analyze Market Trends'],
            priority: 'high'
        },
        {
            id: 'alert-2',
            type: 'warning',
            title: 'EMEA Variance Investigation',
            message: 'Analyzing $2.3M negative variance. Root causes identified: FX impact (-$800K), delayed deals (-$1.2M).',
            agentId: 'vd',
            confidence: 91.2,
            impact: '-$2.3M',
            timeframe: 'March 2025',
            actions: ['Implement FX Hedging', 'Accelerate Deal Closure', 'Review Pricing'],
            priority: 'high'
        },
        {
            id: 'alert-3',
            type: 'critical',
            title: 'Market Contraction Risk',
            message: 'Economic indicators suggest 34% probability of Q3 market contraction. Defensive scenario recommended.',
            agentId: 'sa',
            confidence: 78.5,
            impact: 'Potential -15%',
            timeframe: 'Q3 2025',
            actions: ['Prepare Scenarios', 'Cost Reduction Plan', 'Cash Preservation'],
            priority: 'high'
        },
        {
            id: 'alert-4',
            type: 'info',
            title: 'Consolidation Complete',
            message: 'All 23 entities processed successfully. Month-end close on track for 2.3-day cycle.',
            agentId: 'co',
            confidence: 99.1,
            impact: '14 hours saved',
            timeframe: 'Current',
            actions: ['Review Reports', 'Validate Results'],
            priority: 'medium'
        }
    ];

    const visibleAlerts = alerts.filter(alert => !dismissedAlerts.includes(alert.id));

    const getAlertIcon = (type: Alert['type']) => {
        switch (type) {
            case 'critical':
                return <AlertTriangle className="w-5 h-5 text-rose-500" />;
            case 'warning':
                return <AlertTriangle className="w-5 h-5 text-amber-500" />;
            case 'opportunity':
                return <TrendingUp className="w-5 h-5 text-emerald-500" />;
            default:
                return <Info className="w-5 h-5 text-sky-500" />;
        }
    };

    const getAlertBg = (type: Alert['type']) => {
        switch (type) {
            case 'critical':
                return 'bg-rose-50 border-rose-200 text-rose-800';
            case 'warning':
                return 'bg-amber-50 border-amber-200 text-amber-800';
            case 'opportunity':
                return 'bg-emerald-50 border-emerald-200 text-emerald-800';
            default:
                return 'bg-sky-50 border-sky-200 text-sky-800';
        }
    };

    const getAgentInfo = (agentId: string) => {
        const agent = aiAgents?.find(a => a.id === agentId);
        if (!agent) return { symbol: 'AI', color: 'bg-slate-500', name: 'AI Agent' };

        const colorMap = {
            'blue': 'bg-blue-500',
            'purple': 'bg-purple-500',
            'orange': 'bg-orange-500',
            'green': 'bg-emerald-500'
        };

        return {
            symbol: agent.symbol,
            color: colorMap[agent.color as keyof typeof colorMap] || 'bg-slate-500',
            name: agent.name
        };
    };

    const dismissAlert = (alertId: string) => {
        setDismissedAlerts(prev => [...prev, alertId]);
    };

    const takeAction = (action: string, alert: Alert) => {
        console.log(`Taking action: ${action} for alert: ${alert.title}`);
        // Here you would implement the actual action logic
    };

    if (visibleAlerts.length === 0) {
        return null;
    }

    return (
        <>
            {/* Main Alerts Bar */}
            <motion.div
                className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-8 py-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-lg font-semibold text-slate-900">AI Insights</h2>
                        </div>
                        <div className="h-6 w-px bg-slate-300" />
                        <div className="flex items-center space-x-2 px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-lg">
                            <Bell className="w-4 h-4 text-indigo-600" />
                            <span className="text-sm font-medium text-indigo-700">{visibleAlerts.length} active insights</span>
                        </div>
                    </div>

                    {/* Agent Status Indicators */}
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-slate-600">Active Agents:</span>
                        <div className="flex space-x-2">
                            {aiAgents?.map((agent) => (
                                <div
                                    key={agent.id}
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-md transition-transform hover:scale-110 ${agent.color === 'blue' ? 'bg-blue-500 shadow-blue-500/25' :
                                            agent.color === 'purple' ? 'bg-purple-500 shadow-purple-500/25' :
                                                agent.color === 'orange' ? 'bg-orange-500 shadow-orange-500/25' :
                                                    'bg-emerald-500 shadow-emerald-500/25'
                                        }`}
                                    title={`${agent.name} - ${agent.currentActivity}`}
                                >
                                    {agent.symbol}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Alerts Carousel */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {visibleAlerts.slice(0, 2).map((alert, index) => (
                        <motion.div
                            key={alert.id}
                            className={`p-5 rounded-xl border-2 cursor-pointer hover:shadow-lg transition-all duration-300 ${getAlertBg(alert.type)}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedAlert(alert)}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4 flex-1">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-current/10 flex items-center justify-center">
                                        {getAlertIcon(alert.type)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <h4 className="text-base font-semibold text-slate-900 truncate">{alert.title}</h4>
                                            <div className="flex items-center space-x-2">
                                                <div className={`w-6 h-6 ${getAgentInfo(alert.agentId).color} rounded-md flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                                                    {getAgentInfo(alert.agentId).symbol}
                                                </div>
                                                <span className="text-sm font-medium text-slate-600">{alert.confidence}%</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-700 mb-3 leading-relaxed line-clamp-2">{alert.message}</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                                            <div className="bg-white/50 rounded-lg p-2">
                                                <span className="text-slate-500 block">Impact</span>
                                                <div className="font-semibold text-slate-900 mt-0.5">{alert.impact}</div>
                                            </div>
                                            <div className="bg-white/50 rounded-lg p-2">
                                                <span className="text-slate-500 block">Timeline</span>
                                                <div className="font-semibold text-slate-900 mt-0.5">{alert.timeframe}</div>
                                            </div>
                                            <div className="bg-white/50 rounded-lg p-2">
                                                <span className="text-slate-500 block">Priority</span>
                                                <div className={`font-semibold mt-0.5 ${alert.priority === 'high' ? 'text-rose-600' :
                                                        alert.priority === 'medium' ? 'text-amber-600' : 'text-emerald-600'
                                                    }`}>{alert.priority.toUpperCase()}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedAlert(alert);
                                        }}
                                        className="px-3 py-1.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition-all text-xs"
                                    >
                                        Details
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            dismissAlert(alert.id);
                                        }}
                                        className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors"
                                    >
                                        <X className="w-4 h-4 text-slate-500" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Show More Link */}
                {visibleAlerts.length > 2 && (
                    <div className="mt-4 text-center">
                        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                            View {visibleAlerts.length - 2} more insights →
                        </button>
                    </div>
                )}
            </motion.div>

            {/* Alert Detail Modal */}
            {selectedAlert && (
                <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedAlert(null)}
                >
                    <motion.div
                        className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className={`p-6 border-b border-slate-200 ${getAlertBg(selectedAlert.type)}`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-current/10 flex items-center justify-center">
                                        {getAlertIcon(selectedAlert.type)}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900">{selectedAlert.title}</h3>
                                        <div className="flex items-center space-x-3 mt-2">
                                            <div className={`w-8 h-8 ${getAgentInfo(selectedAlert.agentId).color} rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                                                {getAgentInfo(selectedAlert.agentId).symbol}
                                            </div>
                                            <span className="text-base font-medium text-slate-700">
                                                {getAgentInfo(selectedAlert.agentId).name}
                                            </span>
                                            <span className="text-sm text-slate-600 bg-white/80 px-3 py-1 rounded-lg">
                                                {selectedAlert.confidence}% confidence
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedAlert(null)}
                                    className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-500" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <p className="text-slate-700 mb-6 leading-relaxed">{selectedAlert.message}</p>

                            {/* Impact Metrics */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <div className="text-sm font-medium text-slate-600 mb-1">Financial Impact</div>
                                    <div className="text-xl font-semibold text-slate-900">{selectedAlert.impact}</div>
                                </div>
                                <div className="text-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <div className="text-sm font-medium text-slate-600 mb-1">Timeline</div>
                                    <div className="text-xl font-semibold text-slate-900">{selectedAlert.timeframe}</div>
                                </div>
                                <div className="text-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <div className="text-sm font-medium text-slate-600 mb-1">Confidence</div>
                                    <div className="text-xl font-semibold text-slate-900">{selectedAlert.confidence}%</div>
                                </div>
                            </div>

                            {/* Recommended Actions */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-slate-900 mb-3">Recommended Actions</h4>
                                <div className="space-y-2">
                                    {selectedAlert.actions.map((action, index) => (
                                        <button
                                            key={index}
                                            onClick={() => takeAction(action, selectedAlert)}
                                            className="w-full text-left p-4 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl transition-all hover:shadow-md"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium text-indigo-900">{action}</span>
                                                <CheckCircle className="w-5 h-5 text-indigo-600" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-3">
                                <button
                                    onClick={() => {
                                        dismissAlert(selectedAlert.id);
                                        setSelectedAlert(null);
                                    }}
                                    className="flex-1 px-5 py-2.5 bg-white text-slate-700 font-medium rounded-xl border border-slate-300 hover:bg-slate-50 transition-all"
                                >
                                    Dismiss Alert
                                </button>
                                <button
                                    onClick={() => setSelectedAlert(null)}
                                    className="flex-1 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
                                >
                                    Take Action Later
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
} 