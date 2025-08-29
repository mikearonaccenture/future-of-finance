'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp, ChevronRight, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface KPICardProps {
    title: string;
    value: number;
    unit: string;
    trend: 'up' | 'down' | 'stable';
    subtitle: string;
    index: number;
    confidence?: number;
    forecast?: number;
    target?: number;
    agentId?: string;
    onClick?: () => void;
}

export default function KPICard({
    title,
    value,
    unit,
    trend,
    subtitle,
    index,
    confidence = 95,
    forecast,
    target,
    agentId = 'fi',
    onClick
}: KPICardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const getTrendIcon = () => {
        switch (trend) {
            case 'up':
                return <ArrowUp className="w-4 h-4 text-emerald-600" />;
            case 'down':
                return <ArrowDown className="w-4 h-4 text-rose-600" />;
            default:
                return <TrendingUp className="w-4 h-4 text-slate-600" />;
        }
    };

    const getTrendColor = () => {
        switch (trend) {
            case 'up':
                return 'text-emerald-600';
            case 'down':
                return 'text-rose-600';
            default:
                return 'text-slate-600';
        }
    };

    const getConfidenceColor = () => {
        if (confidence >= 90) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        if (confidence >= 75) return 'bg-amber-50 text-amber-700 border-amber-200';
        return 'bg-rose-50 text-rose-700 border-rose-200';
    };

    const getAgentInfo = () => {
        switch (agentId) {
            case 'fi':
                return { symbol: 'FI', color: 'bg-blue-500', name: 'Forecast Intelligence' };
            case 'sa':
                return { symbol: 'SA', color: 'bg-purple-500', name: 'Scenario Architect' };
            case 'vd':
                return { symbol: 'VD', color: 'bg-orange-500', name: 'Variance Detective' };
            case 'co':
                return { symbol: 'CO', color: 'bg-emerald-500', name: 'Consolidation Orchestrator' };
            default:
                return { symbol: 'AI', color: 'bg-slate-500', name: 'AI Agent' };
        }
    };

    const agent = getAgentInfo();

    return (
        <motion.div
            className={`bg-white rounded-2xl shadow-sm p-6 border border-slate-200 cursor-pointer hover:shadow-lg transition-all duration-200 ${isHovered ? 'border-indigo-300 scale-[1.02]' : ''
                }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-semibold text-slate-600">{title}</h3>
                    {isHovered && <ChevronRight className="w-4 h-4 text-slate-400 animate-pulse" />}
                </div>

                {/* Agent Indicator */}
                <div
                    className={`w-8 h-8 ${agent.color} rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-md`}
                    title={agent.name}
                >
                    {agent.symbol}
                </div>
            </div>

            {/* Main Value and Trend */}
            <div className="mb-4">
                <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-slate-900">
                        {unit === '%' ? value.toFixed(1) : value.toFixed(1)}
                    </span>
                    <span className="text-xl text-slate-500 font-medium">{unit}</span>
                </div>

                <div className="flex items-center space-x-2">
                    {getTrendIcon()}
                    <span className={`text-sm font-medium ${getTrendColor()}`}>
                        {subtitle}
                    </span>
                </div>
            </div>

            {/* Confidence Badge */}
            <div className="mb-4">
                <div className={`inline-flex px-3 py-1.5 rounded-lg text-xs font-medium border ${getConfidenceColor()}`}>
                    {confidence}% confidence
                </div>
            </div>

            {/* Progress Indicators */}
            <div className="space-y-3">
                {/* Target Progress */}
                {target && (
                    <div>
                        <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                            <span>vs. Target ({target}{unit})</span>
                            <span className="font-medium">{((value / target) * 100).toFixed(0)}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                            <motion.div
                                className={`h-2 rounded-full ${value >= target ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'bg-gradient-to-r from-indigo-400 to-indigo-600'
                                    }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min(100, (value / target) * 100)}%` }}
                                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                            />
                        </div>
                    </div>
                )}

                {/* Forecast Preview */}
                {forecast && (
                    <div>
                        <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-slate-500">Next Period</span>
                            <span className="font-medium text-slate-900">{forecast.toFixed(1)}{unit}</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                            <motion.div
                                className="h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${confidence}%` }}
                                transition={{ duration: 1.2, delay: index * 0.1 + 0.8 }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Expanded Details on Hover */}
            {isHovered && (
                <motion.div
                    className="mt-4 pt-4 border-t border-slate-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <span className="text-slate-500">Current:</span>
                            <div className="font-bold text-slate-900 text-sm">{value.toFixed(1)}{unit}</div>
                        </div>
                        {forecast && (
                            <div className="bg-indigo-50 p-3 rounded-lg">
                                <span className="text-indigo-600">Forecast:</span>
                                <div className="font-bold text-indigo-900 text-sm">{forecast.toFixed(1)}{unit}</div>
                            </div>
                        )}
                    </div>
                    <div className="mt-3 text-center">
                        <span className="text-xs text-slate-400">Click for detailed analysis</span>
                    </div>
                </motion.div>
            )}

            {/* Mini Sparkline */}
            <div className="mt-4 h-10 relative overflow-hidden bg-slate-50 rounded-lg p-1">
                <svg className="w-full h-full" viewBox="0 0 100 20">
                    <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={trend === 'up' ? '#10b981' : trend === 'down' ? '#ef4444' : '#64748b'} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={trend === 'up' ? '#10b981' : trend === 'down' ? '#ef4444' : '#64748b'} stopOpacity="0.1" />
                        </linearGradient>
                    </defs>

                    {/* Generate sparkline path */}
                    <motion.path
                        d={`M 0 ${12 + Math.sin(0) * 2} ${Array.from({ length: 15 }, (_, i) =>
                            `L ${i * 6.67} ${12 + Math.sin(i * 0.4) * 2 + (trend === 'up' ? -i * 0.15 : trend === 'down' ? i * 0.15 : 0)}`
                        ).join(' ')}`}
                        stroke={trend === 'up' ? '#10b981' : trend === 'down' ? '#ef4444' : '#64748b'}
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: index * 0.1 + 1 }}
                    />

                    {/* Fill area under curve */}
                    <motion.path
                        d={`M 0 20 ${Array.from({ length: 15 }, (_, i) =>
                            `L ${i * 6.67} ${12 + Math.sin(i * 0.4) * 2 + (trend === 'up' ? -i * 0.15 : trend === 'down' ? i * 0.15 : 0)}`
                        ).join(' ')} L 100 20 Z`}
                        fill={`url(#gradient-${index})`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.1 + 1.5 }}
                    />
                </svg>
            </div>
        </motion.div>
    );
} 