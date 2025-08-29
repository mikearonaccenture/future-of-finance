'use client';

import { motion } from 'framer-motion';
import {
    Activity,
    ChevronRight,
    Minus,
    Target,
    TrendingDown,
    TrendingUp
} from 'lucide-react';
import { useState } from 'react';

interface DataPoint {
    value: number;
    date: string;
}

interface EnhancedKPICardProps {
    title: string;
    value: string | number;
    change: number;
    changeLabel?: string;
    target?: string | number;
    targetLabel?: string;
    dataPoints: DataPoint[];
    unit?: string;
    format?: 'currency' | 'percentage' | 'number';
    onClick?: () => void;
    status?: 'good' | 'warning' | 'critical';
    lastUpdated?: string;
}

export default function EnhancedKPICard({
    title,
    value,
    change,
    changeLabel = 'vs last period',
    target,
    targetLabel = 'Target',
    dataPoints,
    unit = '',
    format = 'number',
    onClick,
    status,
    lastUpdated
}: EnhancedKPICardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const formatValue = (val: string | number) => {
        if (format === 'currency') {
            return typeof val === 'number'
                ? new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                    notation: val > 1000000 ? 'compact' : 'standard'
                }).format(val)
                : val;
        } else if (format === 'percentage') {
            return typeof val === 'number' ? `${val.toFixed(1)}%` : val;
        }
        return `${val}${unit}`;
    };

    const getTrendIcon = () => {
        if (change > 0) return TrendingUp;
        if (change < 0) return TrendingDown;
        return Minus;
    };

    const TrendIcon = getTrendIcon();
    const trendColor = change > 0 ? '#10b981' : change < 0 ? '#ef4444' : '#6b7280';

    // Create sparkline path
    const createSparklinePath = () => {
        if (!dataPoints || dataPoints.length < 2) return '';

        const width = 120;
        const height = 30;
        const padding = 2;

        const values = dataPoints.map(d => d.value);
        const minValue = Math.min(...values);
        const maxValue = Math.max(...values);
        const range = maxValue - minValue || 1;

        const points = dataPoints.map((point, index) => {
            const x = (index / (dataPoints.length - 1)) * (width - 2 * padding) + padding;
            const y = height - ((point.value - minValue) / range) * (height - 2 * padding) - padding;
            return `${x},${y}`;
        });

        return `M ${points.join(' L ')}`;
    };

    const getStatusColor = () => {
        switch (status) {
            case 'good': return 'border-green-200 bg-green-50';
            case 'warning': return 'border-amber-200 bg-amber-50';
            case 'critical': return 'border-red-200 bg-red-50';
            default: return 'border-gray-200 bg-white';
        }
    };

    return (
        <motion.div
            className={`relative rounded-xl border ${getStatusColor()} p-6 cursor-pointer transition-all duration-200 ${isHovered ? 'shadow-lg' : 'shadow-sm'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-600">{title}</h3>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center text-xs text-blue-600 font-medium"
                    >
                        View Details
                        <ChevronRight className="h-3 w-3 ml-1" />
                    </motion.div>
                )}
            </div>

            {/* Main Value */}
            <div className="mb-2">
                <p className="text-2xl font-bold text-gray-900">
                    {formatValue(value)}
                </p>
            </div>

            {/* Change Indicator */}
            <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center">
                    <TrendIcon
                        className="h-4 w-4 mr-1"
                        style={{ color: trendColor }}
                    />
                    <span
                        className="text-sm font-medium"
                        style={{ color: trendColor }}
                    >
                        {change > 0 ? '+' : ''}{change.toFixed(1)}%
                    </span>
                </div>
                <span className="text-xs text-gray-500">{changeLabel}</span>
            </div>

            {/* Target Display */}
            {target && (
                <div className="flex items-center justify-between mb-3 p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-1">
                        <Target className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-600">{targetLabel}:</span>
                    </div>
                    <span className="text-xs font-medium text-gray-900">
                        {formatValue(target)}
                    </span>
                </div>
            )}

            {/* Sparkline Chart */}
            <div className="mt-4 pt-3 border-t border-gray-100">
                <svg width="100%" height="30" viewBox="0 0 120 30" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="15" x2="120" y2="15" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2" />

                    {/* Sparkline */}
                    <path
                        d={createSparklinePath()}
                        fill="none"
                        stroke={trendColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Area under sparkline */}
                    <path
                        d={`${createSparklinePath()} L 120,30 L 0,30 Z`}
                        fill={trendColor}
                        fillOpacity="0.1"
                    />

                    {/* Last point indicator */}
                    {dataPoints.length > 0 && (
                        <circle
                            cx="118"
                            cy={30 - ((dataPoints[dataPoints.length - 1].value - Math.min(...dataPoints.map(d => d.value))) /
                                (Math.max(...dataPoints.map(d => d.value)) - Math.min(...dataPoints.map(d => d.value)) || 1)) * 26 - 2}
                            r="2"
                            fill={trendColor}
                        />
                    )}
                </svg>
            </div>

            {/* Last Updated */}
            {lastUpdated && (
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                    {lastUpdated}
                </div>
            )}

            {/* Activity Indicator */}
            {status && (
                <div className={`absolute top-2 right-2 p-1.5 rounded-full ${status === 'good' ? 'bg-green-100' :
                        status === 'warning' ? 'bg-amber-100' :
                            'bg-red-100'
                    }`}>
                    <Activity className={`h-3 w-3 ${status === 'good' ? 'text-green-600' :
                            status === 'warning' ? 'text-amber-600' :
                                'text-red-600'
                        }`} />
                </div>
            )}
        </motion.div>
    );
} 