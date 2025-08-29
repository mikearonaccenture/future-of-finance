'use client';

import { useState } from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

interface WaterfallDataPoint {
    name: string;
    value: number;
    impact: number;
    type: 'start' | 'end' | 'positive' | 'negative';
    description?: string;
    percentage?: number;
}

interface WaterfallChartProps {
    data: WaterfallDataPoint[];
    title: string;
    format?: 'currency' | 'percentage' | 'number';
    height?: number;
    showPercentage?: boolean;
}

export default function WaterfallChart({
    data,
    title,
    format = 'currency',
    height = 400,
    showPercentage = true
}: WaterfallChartProps) {
    const [hoveredBar, setHoveredBar] = useState<number | null>(null);

    // Calculate cumulative values for positioning
    const processedData = data.reduce((acc: any[], item, index) => {
        const prevValue = index > 0 ? acc[index - 1].cumulative : 0;
        let cumulative = prevValue;
        let start = prevValue;
        let end = prevValue;

        if (item.type === 'start') {
            cumulative = item.value;
            start = 0;
            end = item.value;
        } else if (item.type === 'end') {
            cumulative = item.value;
            start = 0;
            end = item.value;
        } else {
            cumulative = prevValue + item.impact;
            if (item.impact > 0) {
                start = prevValue;
                end = cumulative;
            } else {
                start = cumulative;
                end = prevValue;
            }
        }

        return [...acc, {
            ...item,
            start,
            end,
            cumulative,
            barValue: Math.abs(end - start)
        }];
    }, []);

    const formatValue = (value: number) => {
        if (format === 'currency') {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
                notation: Math.abs(value) > 1000000 ? 'compact' : 'standard'
            }).format(value);
        } else if (format === 'percentage') {
            return `${value.toFixed(1)}%`;
        }
        return value.toLocaleString();
    };

    const getBarColor = (type: string) => {
        switch (type) {
            case 'start':
            case 'end':
                return '#6b7280';
            case 'positive':
                return '#10b981';
            case 'negative':
                return '#ef4444';
            default:
                return '#6b7280';
        }
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            const isTotal = data.type === 'start' || data.type === 'end';

            return (
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-2">{label}</p>
                    <div className="space-y-1">
                        <div className="flex items-center justify-between space-x-4">
                            <span className="text-sm text-gray-600">
                                {isTotal ? 'Total:' : 'Impact:'}
                            </span>
                            <span className={`text-sm font-medium ${data.type === 'positive' ? 'text-green-600' :
                                    data.type === 'negative' ? 'text-red-600' :
                                        'text-gray-900'
                                }`}>
                                {!isTotal && data.impact > 0 ? '+' : ''}{formatValue(isTotal ? data.value : data.impact)}
                            </span>
                        </div>
                        {data.percentage !== undefined && (
                            <div className="flex items-center justify-between space-x-4">
                                <span className="text-sm text-gray-600">Change:</span>
                                <span className="text-sm font-medium text-gray-900">
                                    {data.percentage > 0 ? '+' : ''}{data.percentage.toFixed(1)}%
                                </span>
                            </div>
                        )}
                        {data.description && (
                            <p className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-100">
                                {data.description}
                            </p>
                        )}
                    </div>
                </div>
            );
        }
        return null;
    };

    const CustomBar = (props: any) => {
        const { fill, x, y, width, height, index } = props;
        const data = processedData[index];

        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fill}
                    fillOpacity={hoveredBar === index ? 0.8 : 1}
                    stroke={hoveredBar === index ? '#374151' : 'none'}
                    strokeWidth={hoveredBar === index ? 2 : 0}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}
                />

                {/* Connector lines */}
                {index > 0 && index < processedData.length - 1 && (
                    <line
                        x1={x + width}
                        y1={y}
                        x2={x + width + (props.xAxis.width / processedData.length - width) / 2}
                        y2={y}
                        stroke="#9ca3af"
                        strokeWidth={1}
                        strokeDasharray="2 2"
                    />
                )}
            </g>
        );
    };

    const renderCustomLabel = (props: any) => {
        const { x, y, width, height, value, index } = props;
        const data = processedData[index];
        const isTotal = data.type === 'start' || data.type === 'end';
        const displayValue = isTotal ? data.value : data.impact;

        return (
            <g>
                <text
                    x={x + width / 2}
                    y={data.type === 'negative' ? y + height + 15 : y - 5}
                    fill={getBarColor(data.type)}
                    textAnchor="middle"
                    fontSize={12}
                    fontWeight="600"
                >
                    {!isTotal && displayValue > 0 ? '+' : ''}{formatValue(displayValue)}
                </text>
                {showPercentage && data.percentage !== undefined && (
                    <text
                        x={x + width / 2}
                        y={data.type === 'negative' ? y + height + 30 : y - 20}
                        fill="#6b7280"
                        textAnchor="middle"
                        fontSize={10}
                    >
                        ({data.percentage > 0 ? '+' : ''}{data.percentage.toFixed(1)}%)
                    </text>
                )}
            </g>
        );
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-gray-600">Positive Impact</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                        <span className="text-gray-600">Negative Impact</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-gray-500 rounded"></div>
                        <span className="text-gray-600">Total</span>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={height}>
                <BarChart
                    data={processedData}
                    margin={{ top: 40, right: 30, left: 40, bottom: 60 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 11 }}
                        angle={-45}
                        textAnchor="end"
                        height={80}
                    />
                    <YAxis
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => {
                            if (format === 'currency') {
                                return `$${(value / 1000000).toFixed(0)}M`;
                            }
                            return value.toLocaleString();
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />

                    {/* Invisible bars for positioning */}
                    <Bar dataKey="start" stackId="stack" fill="transparent" />

                    {/* Visible bars */}
                    <Bar
                        dataKey="barValue"
                        stackId="stack"
                        shape={<CustomBar />}
                        label={renderCustomLabel}
                    >
                        {processedData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getBarColor(entry.type)} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
} 