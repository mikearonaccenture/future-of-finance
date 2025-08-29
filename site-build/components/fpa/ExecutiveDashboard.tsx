'use client';

import { motion } from 'framer-motion';
import {
    Activity,
    AlertCircle,
    AlertTriangle,
    Briefcase,
    Calendar,
    CheckCircle,
    Clock,
    TrendingUp,
    XCircle
} from 'lucide-react';
import { useEffect, useState } from 'react';
import EnhancedKPICard from '../ui/EnhancedKPICard';

interface HealthIndicator {
    metric: string;
    status: 'green' | 'amber' | 'red';
    value: string;
    trend: string;
    target: string;
}

export default function ExecutiveDashboard() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Mock data for sparklines
    const generateSparklineData = (baseValue: number, variance: number = 0.1) => {
        return Array.from({ length: 12 }, (_, i) => ({
            value: baseValue * (1 + (Math.random() - 0.5) * variance),
            date: new Date(2024, i, 1).toISOString()
        }));
    };

    const healthIndicators: HealthIndicator[] = [
        {
            metric: 'Revenue',
            status: 'green',
            value: '$156.3M',
            trend: '+8.5%',
            target: '$150M'
        },
        {
            metric: 'Gross Margin',
            status: 'amber',
            value: '42.3%',
            trend: '-0.8%',
            target: '43.0%'
        },
        {
            metric: 'Cash Flow',
            status: 'green',
            value: '$11.3M',
            trend: '+18%',
            target: '$10M'
        },
        {
            metric: 'Working Capital',
            status: 'red',
            value: '143 days',
            trend: '+5 days',
            target: '135 days'
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'green': return <CheckCircle className="h-5 w-5 text-green-600" />;
            case 'amber': return <AlertCircle className="h-5 w-5 text-amber-600" />;
            case 'red': return <XCircle className="h-5 w-5 text-red-600" />;
            default: return null;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'green': return 'bg-green-50 border-green-200';
            case 'amber': return 'bg-amber-50 border-amber-200';
            case 'red': return 'bg-red-50 border-red-200';
            default: return 'bg-gray-50 border-gray-200';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header with Last Updated */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Executive Dashboard</h1>
                <div className="text-sm text-gray-500">
                    Last Updated: {currentTime.toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </div>
            </div>

            {/* Executive Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <EnhancedKPICard
                    title="Forecast Confidence"
                    value={89}
                    change={2.5}
                    changeLabel="vs last month"
                    target={85}
                    dataPoints={generateSparklineData(87, 0.05)}
                    format="percentage"
                    status="good"
                    onClick={() => console.log('Forecast Confidence clicked')}
                />
                <EnhancedKPICard
                    title="YTD Performance vs Plan"
                    value={102.3}
                    change={3.2}
                    changeLabel="variance"
                    target={100}
                    targetLabel="Plan"
                    dataPoints={generateSparklineData(100, 0.08)}
                    format="percentage"
                    status="good"
                    onClick={() => console.log('YTD Performance clicked')}
                />
                <EnhancedKPICard
                    title="FY Outlook"
                    value={625000000}
                    change={8.5}
                    changeLabel="vs prior year"
                    target={600000000}
                    dataPoints={generateSparklineData(580000000, 0.12)}
                    format="currency"
                    status="good"
                    onClick={() => console.log('FY Outlook clicked')}
                />
            </div>

            {/* Key Insights Panel */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
            >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Insights & Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Top Risk */}
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <div className="flex items-start space-x-3">
                            <div className="p-2 bg-red-100 rounded-lg">
                                <AlertTriangle className="h-5 w-5 text-red-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-red-900">Top Risk</h3>
                                <p className="text-sm text-red-800 mt-1">
                                    Raw material cost inflation accelerating
                                </p>
                                <p className="text-lg font-bold text-red-900 mt-2">-$8.9M</p>
                                <p className="text-xs text-red-700">EBITDA impact if unmitigated</p>
                                <button className="mt-3 text-sm font-medium text-red-700 hover:text-red-800">
                                    Review Mitigation Plan →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Top Opportunity */}
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-start space-x-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <TrendingUp className="h-5 w-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-green-900">Top Opportunity</h3>
                                <p className="text-sm text-green-800 mt-1">
                                    Q2 volume growth upside identified
                                </p>
                                <p className="text-lg font-bold text-green-900 mt-2">+$12.5M</p>
                                <p className="text-xs text-green-700">Revenue potential</p>
                                <button className="mt-3 text-sm font-medium text-green-700 hover:text-green-800">
                                    Capture Opportunity →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Key Decision Required */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-start space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Briefcase className="h-5 w-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-blue-900">Decision Required</h3>
                                <p className="text-sm text-blue-800 mt-1">
                                    Pricing strategy for new product launch
                                </p>
                                <div className="flex items-center space-x-2 mt-2">
                                    <Clock className="h-4 w-4 text-blue-600" />
                                    <p className="text-sm font-medium text-blue-900">Due: March 15</p>
                                </div>
                                <p className="text-xs text-blue-700 mt-1">Board presentation scheduled</p>
                                <button className="mt-3 text-sm font-medium text-blue-700 hover:text-blue-800">
                                    Review Analysis →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Business Health Scorecard */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Business Health Scorecard</h2>
                </div>
                <div className="p-6">
                    <div className="space-y-3">
                        {healthIndicators.map((indicator, index) => (
                            <motion.div
                                key={indicator.metric}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`rounded-lg border p-4 ${getStatusColor(indicator.status)}`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        {getStatusIcon(indicator.status)}
                                        <div>
                                            <h3 className="font-medium text-gray-900">{indicator.metric}</h3>
                                            <div className="flex items-center space-x-4 mt-1 text-sm">
                                                <span className="text-gray-600">Current: {indicator.value}</span>
                                                <span className={`font-medium ${indicator.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                                    }`}>
                                                    {indicator.trend}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Target</p>
                                        <p className="font-medium text-gray-900">{indicator.target}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Story of the Month */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6"
            >
                <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                        <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold text-blue-900 mb-3">Story of the Month</h2>
                        <ul className="space-y-2 text-sm text-blue-800">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Premium product line exceeded expectations with 22% growth, driven by sustainability messaging and successful influencer partnerships in key demographics.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Supply chain resilience improved with dual-sourcing strategy implementation, reducing single-supplier dependency from 45% to 24% of critical materials.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Digital transformation initiatives yielding results: e-commerce channel efficiency improved by 18%, with customer acquisition costs down 12% QoQ.</span>
                            </li>
                        </ul>
                        <div className="mt-4 flex items-center justify-between">
                            <button className="text-sm font-medium text-blue-700 hover:text-blue-800">
                                View Full Report →
                            </button>
                            <div className="flex items-center space-x-2 text-xs text-blue-600">
                                <Activity className="h-3 w-3" />
                                <span>Updated 2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
} 