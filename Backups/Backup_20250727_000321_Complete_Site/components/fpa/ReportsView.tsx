'use client';

import { forecastData } from '@/lib/forecast-data';
import { motion } from 'framer-motion';
import {
    AlertTriangle,
    BarChart2,
    Brain,
    CheckCircle,
    ChevronRight,
    FileText,
    Percent,
    TrendingUp
} from 'lucide-react';
import { useState } from 'react';
import ForecastChart from '../charts/ForecastChart';

export default function ReportsView() {
    const [selectedReport, setSelectedReport] = useState('accuracy');
    const [selectedPeriod, setSelectedPeriod] = useState('Q1 2025');
    const [showDetails, setShowDetails] = useState(true);

    const { accuracy, variance, comparisons, insights } = forecastData;
    const reportInsights = insights.filter(i => i.type === 'diagnostic' || i.type === 'comparative');

    const reportTypes = [
        { id: 'accuracy', label: 'Accuracy Comparison', icon: Percent },
        { id: 'variance', label: 'Variance Analysis', icon: BarChart2 },
        { id: 'submissions', label: 'Forecast Submissions', icon: FileText },
        { id: 'comparison', label: 'Period Comparisons', icon: TrendingUp }
    ];

    const getAccuracyColor = (mape: number) => {
        if (mape < 5) return 'text-green-600';
        if (mape < 10) return 'text-yellow-600';
        return 'text-red-600';
    };

    return (
        <div className="space-y-6">
            {/* Report Type Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {reportTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                        <motion.button
                            key={type.id}
                            onClick={() => setSelectedReport(type.id)}
                            className={`p-4 rounded-xl border transition-all ${selectedReport === type.id
                                    ? 'bg-blue-50 border-blue-300 shadow-md'
                                    : 'bg-white border-gray-200 hover:border-gray-300'
                                }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Icon className={`w-5 h-5 ${selectedReport === type.id ? 'text-blue-600' : 'text-gray-400'
                                        }`} />
                                    <span className={`font-medium ${selectedReport === type.id ? 'text-blue-900' : 'text-gray-900'
                                        }`}>
                                        {type.label}
                                    </span>
                                </div>
                                <ChevronRight className={`w-4 h-4 ${selectedReport === type.id ? 'text-blue-600' : 'text-gray-400'
                                    }`} />
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* Accuracy Comparison Report */}
            {selectedReport === 'accuracy' && (
                <div className="space-y-6">
                    {/* AI Insight */}
                    {reportInsights.length > 0 && (
                        <motion.div
                            className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex items-start space-x-3">
                                <Brain className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-green-900">
                                        Forecast Accuracy Insight
                                    </h3>
                                    <p className="text-sm text-green-800 mt-1">
                                        AI/ML model outperforming manual forecasts by 68.7%. Consider increasing automation
                                        threshold from $500K to $2M for faster processing.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Method Comparison Grid */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Forecast Method Accuracy</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {accuracy.map((method) => (
                                <div key={method.method} className="border border-gray-200 rounded-lg p-4">
                                    <h4 className="font-medium text-gray-900 mb-3">{method.method}</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">MAPE</span>
                                            <span className={`font-semibold ${getAccuracyColor(method.metrics.mape)}`}>
                                                {method.metrics.mape.toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">R²</span>
                                            <span className="font-semibold text-gray-900">
                                                {(method.metrics.r2 * 100).toFixed(0)}%
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">vs Manual</span>
                                            <span className={`font-semibold ${method.improvements.vsManual > 0 ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                {method.improvements.vsManual > 0 ? '+' : ''}{method.improvements.vsManual.toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Accuracy Chart */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Period-by-Period Accuracy</h3>
                        <ForecastChart
                            data={accuracy[0].periodAccuracy.map(p => ({
                                month: p.period,
                                date: p.period,
                                actual: p.actual / 1000000,
                                forecast: p.forecast / 1000000,
                                revenue: p.actual / 1000000,
                                expenses: 0,
                                variance: Math.abs(p.error) / 1000000
                            }))}
                            type="line"
                            height={300}
                            showVariance={true}
                        />
                    </div>
                </div>
            )}

            {/* Variance Analysis Report */}
            {selectedReport === 'variance' && variance.length > 0 && (
                <div className="space-y-6">
                    {/* Variance Summary */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Q1 2025 Variance Analysis</h3>

                        {/* Variance Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-500">vs Forecast</p>
                                <p className="text-2xl font-bold text-green-600 mt-1">+0.4%</p>
                                <p className="text-sm text-gray-600 mt-1">$200K favorable</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-500">vs Budget</p>
                                <p className="text-2xl font-bold text-green-600 mt-1">+0.4%</p>
                                <p className="text-sm text-gray-600 mt-1">$200K favorable</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-500">vs Prior Year</p>
                                <p className="text-2xl font-bold text-green-600 mt-1">+17.4%</p>
                                <p className="text-sm text-gray-600 mt-1">$6.7M growth</p>
                            </div>
                        </div>

                        {/* Variance Components */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900">Variance Breakdown</h4>
                            {variance[0].variance.vsForecast.components && (
                                <div className="space-y-3">
                                    {Object.entries(variance[0].variance.vsForecast.components).map(([key, value]) => {
                                        if (value === 0) return null;
                                        return (
                                            <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <span className="text-sm font-medium text-gray-900 capitalize">
                                                    {key} Impact
                                                </span>
                                                <span className={`font-semibold ${value > 0 ? 'text-green-600' : 'text-red-600'
                                                    }`}>
                                                    {value > 0 ? '+' : ''}${(value / 1000000).toFixed(1)}M
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Root Causes */}
                        {variance[0].rootCauses && variance[0].rootCauses.length > 0 && (
                            <div className="mt-6 space-y-4">
                                <h4 className="font-semibold text-gray-900">Root Cause Analysis</h4>
                                {variance[0].rootCauses.map((cause, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <h5 className="font-medium text-gray-900">{cause.factor}</h5>
                                            <span className={`font-semibold ${cause.impact > 0 ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                ${(Math.abs(cause.impact) / 1000000).toFixed(1)}M
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">{cause.description}</p>
                                        <div className="space-y-1">
                                            {cause.evidence.map((evidence, idx) => (
                                                <div key={idx} className="flex items-start space-x-2">
                                                    <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <p className="text-xs text-gray-500">{evidence}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Forecast Submissions Report */}
            {selectedReport === 'submissions' && (
                <div className="space-y-6">
                    {/* Submission Timeline */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Q2 2025 Forecast Submission Status</h3>

                        <div className="space-y-4">
                            {['Americas', 'EMEA', 'APAC', 'Product', 'Services'].map((region, index) => {
                                const statuses = ['completed', 'in_progress', 'in_progress', 'pending', 'pending'];
                                const dates = ['Mar 20', 'Mar 22', 'Mar 21', 'Mar 23', 'Mar 23'];
                                const progress = [100, 75, 80, 0, 0];

                                return (
                                    <div key={region} className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <h4 className="font-medium text-gray-900">{region}</h4>
                                                <p className="text-sm text-gray-500">Due: {dates[index]}</p>
                                            </div>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statuses[index] === 'completed' ? 'bg-green-100 text-green-800' :
                                                    statuses[index] === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-gray-100 text-gray-800'
                                                }`}>
                                                {statuses[index].replace('_', ' ')}
                                            </span>
                                        </div>
                                        <div className="relative pt-1">
                                            <div className="flex mb-2 items-center justify-between">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block text-blue-600">
                                                        {progress[index]}% Complete
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${progress[index]}%` }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Submission Quality Metrics */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Submission Quality Metrics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                                <p className="text-3xl font-bold text-green-600">92%</p>
                                <p className="text-sm text-gray-600 mt-1">On-Time Submission Rate</p>
                            </div>
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                <p className="text-3xl font-bold text-blue-600">3.2</p>
                                <p className="text-sm text-gray-600 mt-1">Avg Revision Cycles</p>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-lg">
                                <p className="text-3xl font-bold text-purple-600">87%</p>
                                <p className="text-sm text-gray-600 mt-1">Data Completeness</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Period Comparisons Report */}
            {selectedReport === 'comparison' && (
                <div className="space-y-6">
                    {comparisons.filter(c => c.type === 'period').map((comparison) => (
                        <div key={comparison.id} className="bg-white rounded-xl border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">{comparison.name}</h3>

                            {/* Comparison Table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Metric
                                            </th>
                                            {comparison.datasets.map((dataset) => (
                                                <th key={dataset.label} className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    {dataset.label}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {comparison.metrics.map((metric) => (
                                            <tr key={metric}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {metric}
                                                </td>
                                                {comparison.datasets.map((dataset) => (
                                                    <td key={`${metric}-${dataset.label}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                                        {metric === 'Headcount'
                                                            ? dataset.data[metric].toLocaleString()
                                                            : `$${(dataset.data[metric] / 1000000).toFixed(1)}M`
                                                        }
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Variance Highlights */}
                            {comparison.variance && comparison.variance.length > 0 && (
                                <div className="mt-6 space-y-3">
                                    <h4 className="font-semibold text-gray-900">Key Variances</h4>
                                    {comparison.variance.map((v, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{v.metric}</p>
                                                <p className="text-xs text-gray-500">{v.explanation}</p>
                                            </div>
                                            <div className={`text-right ${v.variancePercent > 0 ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                <p className="font-semibold">
                                                    {v.variancePercent > 0 ? '+' : ''}{v.variancePercent.toFixed(1)}%
                                                </p>
                                                <p className="text-xs">
                                                    ${(Math.abs(v.variance) / 1000000).toFixed(1)}M
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Report Actions */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-amber-900">
                            Recommended Actions from Report Analysis
                        </h3>
                        <ul className="mt-2 space-y-1">
                            <li className="text-sm text-amber-800">
                                • Automate forecast adjustments below $2M threshold
                            </li>
                            <li className="text-sm text-amber-800">
                                • Focus variance review on price and mix impacts
                            </li>
                            <li className="text-sm text-amber-800">
                                • Accelerate EMEA and APAC submission timelines
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 