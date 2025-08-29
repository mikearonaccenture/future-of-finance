'use client';

import { forecastData } from '@/lib/forecast-data';
import { motion } from 'framer-motion';
import {
    AlertTriangle,
    BarChart3,
    Brain,
    ChevronRight,
    Percent,
    Shuffle,
    TrendingDown,
    TrendingUp,
    Zap
} from 'lucide-react';
import { useState } from 'react';
import ForecastChart from '../charts/ForecastChart';

export default function ScenariosView() {
    const [selectedScenario, setSelectedScenario] = useState('scenario-3'); // Base case
    const [compareMode, setCompareMode] = useState(false);
    const [selectedComparison, setSelectedComparison] = useState<string[]>(['scenario-3', 'scenario-1']);

    const { scenarios, insights } = forecastData;
    const scenarioInsights = insights.filter(i => i.type === 'predictive' || i.type === 'prescriptive');

    const getScenarioIcon = (type: string) => {
        switch (type) {
            case 'optimistic': return TrendingUp;
            case 'pessimistic': return TrendingDown;
            case 'base': return BarChart3;
            default: return Shuffle;
        }
    };

    const getScenarioColor = (type: string) => {
        switch (type) {
            case 'optimistic': return 'bg-green-100 text-green-800 border-green-200';
            case 'pessimistic': return 'bg-red-100 text-red-800 border-red-200';
            case 'base': return 'bg-blue-100 text-blue-800 border-blue-200';
            default: return 'bg-purple-100 text-purple-800 border-purple-200';
        }
    };

    const activeScenario = scenarios.find(s => s.id === selectedScenario);
    const probabilityWeightedRevenue = scenarios.reduce((total, scenario) => {
        const revenueImpact = scenario.impacts.find(i => i.metric === 'Revenue');
        return total + (revenueImpact ? revenueImpact.scenarioCase * (scenario.probability / 100) : 0);
    }, 0);

    return (
        <div className="space-y-6">
            {/* AI Scenario Insights */}
            {scenarioInsights.length > 0 && (
                <motion.div
                    className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-start space-x-3">
                        <Brain className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-purple-900">
                                AI Scenario Analysis: {scenarioInsights[0].title}
                            </h3>
                            <p className="text-sm text-purple-800 mt-1">
                                {scenarioInsights[0].description}
                            </p>
                            <div className="flex items-center space-x-4 mt-3">
                                <span className="text-sm font-medium text-purple-900">
                                    Confidence: {scenarioInsights[0].confidence}%
                                </span>
                                <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
                                    Adjust Scenarios →
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Scenario Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {scenarios.map((scenario) => {
                    const Icon = getScenarioIcon(scenario.type);
                    const revenueImpact = scenario.impacts.find(i => i.metric === 'Revenue');
                    const colorClass = getScenarioColor(scenario.type);

                    return (
                        <motion.div
                            key={scenario.id}
                            onClick={() => setSelectedScenario(scenario.id)}
                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedScenario === scenario.id
                                    ? 'border-blue-500 shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {selectedScenario === scenario.id && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                    <ChevronRight className="w-4 h-4 text-white" />
                                </div>
                            )}
                            <div className="flex items-start justify-between mb-3">
                                <div className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${colorClass}`}>
                                    <Icon className="w-3 h-3 mr-1" />
                                    {scenario.type}
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Percent className="w-3 h-3 text-gray-400" />
                                    <span className="text-sm font-semibold text-gray-900">{scenario.probability}%</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">{scenario.name}</h3>
                            <p className="text-xs text-gray-500 mb-3">{scenario.description}</p>
                            {revenueImpact && (
                                <div className="pt-3 border-t border-gray-100">
                                    <p className="text-sm font-medium text-gray-900">
                                        ${(revenueImpact.scenarioCase / 1000000).toFixed(1)}M
                                    </p>
                                    <p className={`text-xs ${revenueImpact.variancePercent > 0 ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {revenueImpact.variancePercent > 0 ? '+' : ''}{revenueImpact.variancePercent.toFixed(1)}% vs Base
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Probability-Weighted Outcome */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Probability-Weighted Revenue Forecast
                        </h3>
                        <p className="text-sm text-gray-600">
                            Expected outcome based on scenario probabilities
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold text-gray-900">
                            ${(probabilityWeightedRevenue / 1000000).toFixed(1)}M
                        </p>
                        <p className="text-sm text-gray-500 mt-1">FY 2025 Expected</p>
                    </div>
                </div>
            </div>

            {/* Scenario Details */}
            {activeScenario && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Key Assumptions */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Assumptions</h3>
                        <div className="space-y-3">
                            {activeScenario.assumptions.map((assumption) => (
                                <div key={assumption.id} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">
                                                {assumption.description}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {assumption.rationale}
                                            </p>
                                        </div>
                                        <div className="text-right ml-4">
                                            <p className={`text-sm font-semibold ${assumption.changePercent > 0 ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                {assumption.changePercent > 0 ? '+' : ''}{assumption.changePercent}%
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {assumption.baseValue} → {assumption.scenarioValue}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Financial Impact */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Impact</h3>
                        <div className="space-y-4">
                            {activeScenario.impacts.map((impact, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">{impact.metric}</p>
                                        <div className="flex items-center space-x-3 mt-1">
                                            <span className="text-sm text-gray-500">
                                                Base: ${(impact.baseCase / 1000000).toFixed(1)}M
                                            </span>
                                            <span className="text-gray-400">→</span>
                                            <span className="text-sm font-medium text-gray-900">
                                                ${(impact.scenarioCase / 1000000).toFixed(1)}M
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`text-right ${impact.variancePercent > 0 ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        <p className="font-semibold">
                                            {impact.variancePercent > 0 ? '+' : ''}{impact.variancePercent.toFixed(1)}%
                                        </p>
                                        <p className="text-xs">
                                            ${(Math.abs(impact.variance) / 1000000).toFixed(1)}M
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Scenario Comparison Mode */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Scenario Comparison</h3>
                    <button
                        onClick={() => setCompareMode(!compareMode)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${compareMode
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {compareMode ? 'Exit Compare' : 'Compare Scenarios'}
                    </button>
                </div>

                {compareMode ? (
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                            {scenarios.map((scenario) => (
                                <label key={scenario.id} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedComparison.includes(scenario.id)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedComparison([...selectedComparison, scenario.id]);
                                            } else {
                                                setSelectedComparison(selectedComparison.filter(id => id !== scenario.id));
                                            }
                                        }}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">{scenario.name}</span>
                                </label>
                            ))}
                        </div>

                        {/* Comparison Chart */}
                        <ForecastChart
                            data={scenarios
                                .filter(s => selectedComparison.includes(s.id))
                                .map(s => {
                                    const revenue = s.impacts.find(i => i.metric === 'Revenue');
                                    return {
                                        month: s.name,
                                        date: s.id,
                                        actual: 0,
                                        forecast: revenue ? revenue.scenarioCase / 1000000 : 0,
                                        revenue: revenue ? revenue.scenarioCase / 1000000 : 0,
                                        expenses: 0,
                                        variance: 0
                                    };
                                })}
                            type="line"
                            height={250}
                        />
                    </div>
                ) : (
                    <div className="h-64 flex items-center justify-center text-gray-500">
                        <p>Click "Compare Scenarios" to visualize multiple scenarios</p>
                    </div>
                )}
            </div>

            {/* Scenario Planning Actions */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-amber-900">
                            Recommended Actions Based on Scenario Analysis
                        </h3>
                        <ul className="mt-2 space-y-1">
                            <li className="text-sm text-amber-800 flex items-start">
                                <Zap className="w-3 h-3 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                Establish $10M credit facility to mitigate recession scenario cash risk
                            </li>
                            <li className="text-sm text-amber-800 flex items-start">
                                <Zap className="w-3 h-3 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                Prepare flexible hiring plan that can scale up/down based on Q2 performance
                            </li>
                            <li className="text-sm text-amber-800 flex items-start">
                                <Zap className="w-3 h-3 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                Lock in long-term vendor contracts now to hedge against inflation
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 