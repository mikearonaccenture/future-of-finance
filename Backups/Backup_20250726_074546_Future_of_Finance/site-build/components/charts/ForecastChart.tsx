'use client';

import { motion } from 'framer-motion';
import React from 'react';
import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

interface ForecastData {
    month: string;
    date: string;
    actual: number;
    forecast: number;
    revenue: number;
    expenses: number;
    variance: number;
}

interface ForecastChartProps {
    data: ForecastData[];
    type?: 'line' | 'area';
    showVariance?: boolean;
    height?: number;
    animated?: boolean;
}

const ForecastChart: React.FC<ForecastChartProps> = ({
    data,
    type = 'line',
    showVariance = false,
    height = 300,
    animated = true,
}) => {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg"
                >
                    <p className="text-gray-700 font-medium mb-2">{label}</p>
                    {payload.map((entry: any, index: number) => (
                        <p key={index} style={{ color: entry.color }} className="text-sm">
                            {entry.name}: {formatCurrency(entry.value)}
                        </p>
                    ))}
                    {showVariance && payload[0] && payload[0].payload.actual > 0 && (
                        <p className="text-gray-500 text-xs mt-2">
                            Confidence: ±{Math.abs(payload[0].payload.variance / payload[0].value * 100).toFixed(1)}%
                        </p>
                    )}
                </motion.div>
            );
        }
        return null;
    };

    const chartVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    const Chart = type === 'area' ? AreaChart : LineChart;

    return (
        <motion.div
            variants={animated ? chartVariants : undefined}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
            className="w-full"
        >
            <ResponsiveContainer width="100%" height={height}>
                <Chart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                    <XAxis
                        dataKey="month"
                        stroke="#6b7280"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#6b7280"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={formatCurrency}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ color: '#6b7280' }}
                        iconType="line"
                    />

                    {/* Current date reference line */}
                    <ReferenceLine
                        x="Mar 2025"
                        stroke="#ef4444"
                        strokeDasharray="2 2"
                        label={{ value: "Current", position: "top" }}
                    />

                    {type === 'area' ? (
                        <>
                            <Area
                                type="monotone"
                                dataKey="actual"
                                stackId="1"
                                stroke="#10b981"
                                fill="url(#actualGradient)"
                                strokeWidth={2}
                                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                                name="Actual"
                            />
                            <Area
                                type="monotone"
                                dataKey="forecast"
                                stackId="2"
                                stroke="#3b82f6"
                                fill="url(#forecastGradient)"
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                                name="Forecast"
                            />
                        </>
                    ) : (
                        <>
                            <Line
                                type="monotone"
                                dataKey="actual"
                                stroke="#10b981"
                                strokeWidth={3}
                                dot={{ fill: '#10b981', strokeWidth: 2, r: 5 }}
                                activeDot={{ r: 7, stroke: '#10b981', strokeWidth: 2 }}
                                name="Actual"
                                connectNulls={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="forecast"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                strokeDasharray="8 4"
                                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 5 }}
                                activeDot={{ r: 7, stroke: '#3b82f6', strokeWidth: 2 }}
                                name="Forecast"
                            />
                        </>
                    )}

                    {/* Gradient definitions */}
                    <defs>
                        <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                        </linearGradient>
                        <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                </Chart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default ForecastChart; 