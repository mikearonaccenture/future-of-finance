'use client';

import { Brain, Calculator, Calendar, FileText } from 'lucide-react';
import { useState } from 'react';
import {
    Area,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

interface DataPoint {
    period: string;
    actual?: number;
    mlForecast?: number;
    budget?: number;
    latestEstimate?: number;
    confidenceUpper?: number;
    confidenceLower?: number;
    isForecast: boolean;
}

interface EnhancedForecastChartProps {
    data: DataPoint[];
    title?: string;
    metric?: string;
    accuracy?: number;
    format?: 'currency' | 'percentage' | 'number';
    height?: number;
}

export default function EnhancedForecastChart({
    data,
    title = 'Forecast Analysis',
    metric = 'Value',
    accuracy = 92.5,
    format = 'currency',
    height = 400
}: EnhancedForecastChartProps) {
    const [selectedVersion, setSelectedVersion] = useState<'mlForecast' | 'budget' | 'latestEstimate'>('mlForecast');
    const [showConfidenceBands, setShowConfidenceBands] = useState(true);

    // Find the transition point between actual and forecast
    const transitionIndex = data.findIndex(d => d.isForecast);
    const transitionPeriod = transitionIndex >= 0 ? data[transitionIndex].period : null;

    const formatValue = (value: number) => {
        if (format === 'currency') {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
                notation: value > 1000000 ? 'compact' : 'standard'
            }).format(value);
        } else if (format === 'percentage') {
            return `${value.toFixed(1)}%`;
        }
        return value.toLocaleString();
    };

    const versionConfig = {
        mlForecast: {
            name: 'ML Forecast',
            color: '#7c3aed',
            icon: Brain,
            strokeDasharray: '8 4'
        },
        budget: {
            name: 'Budget',
            color: '#f59e0b',
            icon: FileText,
            strokeDasharray: '4 4'
        },
        latestEstimate: {
            name: 'Latest Estimate',
            color: '#10b981',
            icon: Calculator,
            strokeDasharray: '12 4'
        }
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            const dataPoint = data.find(d => d.period === label);
            const isForecast = dataPoint?.isForecast || false;

            return (
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-2">{label}</p>
                    {payload.map((entry: any, index: number) => {
                        if (entry.dataKey === 'actual' && entry.value) {
                            return (
                                <div key={index} className="flex items-center justify-between space-x-4">
                                    <span className="text-sm text-gray-600">Actual:</span>
                                    <span className="text-sm font-medium text-gray-900">
                                        {formatValue(entry.value)}
                                    </span>
                                </div>
                            );
                        }
                        if (entry.dataKey === selectedVersion && entry.value) {
                            return (
                                <div key={index} className="flex items-center justify-between space-x-4">
                                    <span className="text-sm text-gray-600">
                                        {versionConfig[selectedVersion].name}:
                                    </span>
                                    <span className="text-sm font-medium" style={{ color: entry.color }}>
                                        {formatValue(entry.value)}
                                    </span>
                                </div>
                            );
                        }
                        return null;
                    })}
                    {showConfidenceBands && dataPoint?.confidenceUpper && (
                        <div className="mt-2 pt-2 border-t border-gray-100">
                            <div className="text-xs text-gray-500">
                                Confidence Range: {formatValue(dataPoint.confidenceLower || 0)} - {formatValue(dataPoint.confidenceUpper)}
                            </div>
                        </div>
                    )}
                    <div className="mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${isForecast ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                            {isForecast ? 'Forecast' : 'Actual'}
                        </span>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Forecast Accuracy: <span className="font-medium text-gray-900">{accuracy}%</span>
                    </p>
                </div>

                {/* Version Toggle */}
                <div className="flex items-center space-x-2">
                    {(Object.keys(versionConfig) as Array<keyof typeof versionConfig>).map((version) => {
                        const config = versionConfig[version];
                        const Icon = config.icon;
                        const isSelected = selectedVersion === version;

                        return (
                            <button
                                key={version}
                                onClick={() => setSelectedVersion(version)}
                                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isSelected
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <Icon className="h-4 w-4" />
                                <span>{config.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-end mb-4">
                <label className="flex items-center space-x-2 text-sm">
                    <input
                        type="checkbox"
                        checked={showConfidenceBands}
                        onChange={(e) => setShowConfidenceBands(e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-600">Show confidence bands</span>
                </label>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={height}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                        dataKey="period"
                        tick={{ fontSize: 12 }}
                        stroke="#6b7280"
                    />
                    <YAxis
                        tick={{ fontSize: 12 }}
                        stroke="#6b7280"
                        tickFormatter={(value) => {
                            if (format === 'currency') {
                                return `$${(value / 1000000).toFixed(0)}M`;
                            }
                            return value.toLocaleString();
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />

                    {/* Transition Line */}
                    {transitionPeriod && (
                        <ReferenceLine
                            x={transitionPeriod}
                            stroke="#6b7280"
                            strokeWidth={2}
                            strokeDasharray="4 4"
                            label={{
                                value: "Forecast →",
                                position: "top",
                                fill: "#6b7280",
                                fontSize: 12
                            }}
                        />
                    )}

                    {/* Confidence Bands */}
                    {showConfidenceBands && (
                        <Area
                            type="monotone"
                            dataKey="confidenceUpper"
                            stackId="1"
                            stroke="none"
                            fill={versionConfig[selectedVersion].color}
                            fillOpacity={0.1}
                        />
                    )}
                    {showConfidenceBands && (
                        <Area
                            type="monotone"
                            dataKey="confidenceLower"
                            stackId="2"
                            stroke="none"
                            fill="#ffffff"
                            fillOpacity={1}
                        />
                    )}

                    {/* Actual Data Line */}
                    <Line
                        type="monotone"
                        dataKey="actual"
                        stroke="#1e40af"
                        strokeWidth={3}
                        dot={{ fill: '#1e40af', r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Actual"
                        connectNulls={false}
                    />

                    {/* Forecast Line */}
                    <Line
                        type="monotone"
                        dataKey={selectedVersion}
                        stroke={versionConfig[selectedVersion].color}
                        strokeWidth={3}
                        strokeDasharray={versionConfig[selectedVersion].strokeDasharray}
                        dot={{ fill: versionConfig[selectedVersion].color, r: 4 }}
                        activeDot={{ r: 6 }}
                        name={versionConfig[selectedVersion].name}
                    />

                    <Legend
                        wrapperStyle={{ paddingTop: '20px' }}
                        iconType="line"
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* Forecast Info */}
            <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-0.5 bg-blue-600"></div>
                        <span className="text-gray-600">Actual Data</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-0.5 border-b-2 border-dashed border-purple-600"></div>
                        <span className="text-gray-600">Forecast Data</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>Last updated: Today</span>
                </div>
            </div>
        </div>
    );
} 