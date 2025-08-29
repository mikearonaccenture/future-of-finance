'use client';

import { forecastData } from '@/lib/forecast-data';
import { motion } from 'framer-motion';
import {
    AlertCircle,
    Brain,
    CheckCircle,
    ChevronDown,
    Clock,
    DollarSign,
    Globe,
    Link2,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react';
import { useState } from 'react';

export default function PlanningView() {
    const [selectedDriver, setSelectedDriver] = useState('driver-1');
    const [showExternalData, setShowExternalData] = useState(true);
    const [activeSession, setActiveSession] = useState('session-1');

    const { drivers: planningDrivers, external: externalDataSources, planning: planningSessions } = forecastData;
    const currentDriver = planningDrivers.find(d => d.id === selectedDriver);
    const currentSession = planningSessions.find(s => s.id === activeSession);

    const getImpactColor = (value: number) => {
        if (value > 0) return 'text-green-600';
        if (value < 0) return 'text-red-600';
        return 'text-gray-600';
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800';
            case 'in_progress': return 'bg-blue-100 text-blue-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'delayed': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6">
            {/* Driver-Based Planning Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Driver-Based Planning</h3>
                        <p className="text-sm text-gray-500 mt-1">Adjust key business drivers to model financial impact</p>
                    </div>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        Run Sensitivity Analysis →
                    </button>
                </div>

                {/* Driver Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
                    {planningDrivers.map((driver) => (
                        <motion.button
                            key={driver.id}
                            onClick={() => setSelectedDriver(driver.id)}
                            className={`p-3 rounded-lg border text-left transition-all ${selectedDriver === driver.id
                                    ? 'bg-blue-50 border-blue-300'
                                    : 'bg-white border-gray-200 hover:border-gray-300'
                                }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <p className="text-sm font-medium text-gray-900">{driver.name}</p>
                            <p className="text-xs text-gray-500 mt-1">
                                {driver.currentValue} → {driver.plannedValue} {driver.unit}
                            </p>
                        </motion.button>
                    ))}
                </div>

                {/* Selected Driver Details */}
                {currentDriver && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Driver Impact */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900">Financial Impact</h4>
                            <div className="space-y-3">
                                {currentDriver.impact.map((impact, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{impact.metric}</p>
                                            <p className="text-xs text-gray-500">
                                                ${(impact.sensitivity / 1000).toFixed(0)}K per {currentDriver.unit}
                                            </p>
                                        </div>
                                        <div className={`text-right ${getImpactColor(impact.totalImpact)}`}>
                                            <p className="font-semibold">
                                                {impact.totalImpact > 0 ? '+' : ''}${(impact.totalImpact / 1000000).toFixed(1)}M
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Driver Relationships */}
                            <div className="pt-4 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3">Related Drivers</h4>
                                <div className="space-y-2">
                                    {currentDriver.relationships.map((rel, index) => (
                                        <div key={index} className="flex items-center justify-between text-sm">
                                            <div className="flex items-center space-x-2">
                                                <Link2 className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-700">{rel.targetDriver}</span>
                                            </div>
                                            <span className={`font-medium ${rel.relationship === 'direct' ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                {rel.relationship === 'direct' ? '↑' : '↓'} {(rel.coefficient * 100).toFixed(0)}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Historical Performance */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Historical Performance</h4>
                            <div className="space-y-2">
                                {currentDriver.historicalData.map((history) => (
                                    <div key={history.period} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{history.period}</p>
                                            <p className="text-xs text-gray-500">{history.value} {currentDriver.unit}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-gray-900">
                                                ${(history.actualImpact / 1000000).toFixed(1)}M
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* External Data Integration */}
            {showExternalData && (
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-blue-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">External Market Indicators</h3>
                        <button
                            onClick={() => setShowExternalData(false)}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {externalDataSources.map((source) => {
                            const Icon = source.type === 'market' ? TrendingUp :
                                source.type === 'economic' ? DollarSign :
                                    source.type === 'competitor' ? Users : Globe;

                            return (
                                <div key={source.id} className="bg-white rounded-lg p-4 border border-blue-100">
                                    <div className="flex items-start justify-between mb-2">
                                        <Icon className="w-5 h-5 text-blue-600" />
                                        <span className={`text-xs font-medium ${source.trend === 'up' ? 'text-green-600' :
                                                source.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                                            }`}>
                                            {source.trend === 'up' ? '↑' : source.trend === 'down' ? '↓' : '→'}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-gray-900">{source.name}</h4>
                                    <p className="text-xl font-bold text-gray-900 mt-1">
                                        {source.currentValue}%
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">{source.impact}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Collaborative Planning Sessions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Active Planning Sessions</h3>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                        New Session
                    </button>
                </div>

                {currentSession && (
                    <div className="space-y-6">
                        {/* Session Header */}
                        <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                                <h4 className="font-semibold text-gray-900">{currentSession.name}</h4>
                                <p className="text-sm text-gray-500 mt-1">
                                    {currentSession.participants.length} participants •
                                    Due {new Date(currentSession.timeline.end).toLocaleDateString()}
                                </p>
                            </div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(currentSession.status)
                                }`}>
                                {currentSession.status.replace('_', ' ')}
                            </span>
                        </div>

                        {/* Milestones */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Key Milestones</h4>
                            <div className="space-y-3">
                                {currentSession.timeline.milestones.map((milestone, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            {milestone.status === 'completed' ? (
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                            ) : milestone.status === 'delayed' ? (
                                                <AlertCircle className="w-5 h-5 text-red-600" />
                                            ) : (
                                                <Clock className="w-5 h-5 text-gray-400" />
                                            )}
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{milestone.name}</p>
                                                <p className="text-xs text-gray-500">
                                                    {new Date(milestone.date).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <span className={`text-xs font-medium ${milestone.status === 'completed' ? 'text-green-600' :
                                                milestone.status === 'delayed' ? 'text-red-600' : 'text-gray-500'
                                            }`}>
                                            {milestone.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tasks */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Active Tasks</h4>
                            <div className="space-y-2">
                                {currentSession.tasks.map((task) => (
                                    <div key={task.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <input
                                                type="checkbox"
                                                checked={task.status === 'completed'}
                                                className="rounded border-gray-300 text-blue-600"
                                                readOnly
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{task.title}</p>
                                                <p className="text-xs text-gray-500">Assigned to {task.assignee}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-500">
                                            Due {new Date(task.dueDate).toLocaleDateString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Comments */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Recent Discussion</h4>
                            <div className="space-y-3">
                                {currentSession.comments.slice(0, 2).map((comment) => (
                                    <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <p className="text-sm font-medium text-gray-900">{comment.author}</p>
                                            <p className="text-xs text-gray-500">
                                                {new Date(comment.timestamp).toLocaleString()}
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-700">{comment.text}</p>
                                        {comment.replies.length > 0 && (
                                            <button className="text-xs font-medium text-blue-600 hover:text-blue-700 mt-2">
                                                View {comment.replies.length} replies →
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* AI Planning Recommendations */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                    <Brain className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-purple-900">
                            AI Planning Recommendations
                        </h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-sm text-purple-800 flex items-start">
                                <Zap className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                Increase Sales Headcount by 10 FTEs to achieve Q3 revenue target (95% confidence)
                            </li>
                            <li className="text-sm text-purple-800 flex items-start">
                                <Zap className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                Marketing spend efficiency declining - reallocate $500K to content marketing
                            </li>
                            <li className="text-sm text-purple-800 flex items-start">
                                <Zap className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                Consider 5-7% price increase given competitor movements and low churn risk
                            </li>
                        </ul>
                        <button className="text-sm font-medium text-purple-600 hover:text-purple-700 mt-3">
                            View Detailed Analysis →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 