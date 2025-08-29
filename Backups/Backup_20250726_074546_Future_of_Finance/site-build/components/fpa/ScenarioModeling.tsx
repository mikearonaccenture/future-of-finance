'use client';

import { aiAgents, calculateImpact, runMonteCarloSimulation, scenarioData } from '@/lib/demo-data';
import { motion } from 'framer-motion';
import { BarChart3, Play, RefreshCw, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function ScenarioModeling() {
    const [marketGrowth, setMarketGrowth] = useState(scenarioData?.marketGrowth?.value || 5.2);
    const [winRate, setWinRate] = useState(scenarioData?.winRate?.value || 35);
    const [avgDealSize, setAvgDealSize] = useState(scenarioData?.avgDealSize?.value || 125);
    const [isRunningMonteCarlo, setIsRunningMonteCarlo] = useState(false);
    const [monteCarloResults, setMonteCarloResults] = useState<any>(null);
    const [selectedScenario, setSelectedScenario] = useState<'optimistic' | 'realistic' | 'pessimistic'>('realistic');

    const impact = calculateImpact ? calculateImpact(marketGrowth, winRate, avgDealSize) : null;
    const scenarioAgent = aiAgents?.find(agent => agent.id === 'sa');

    const runMonteCarlo = async () => {
        setIsRunningMonteCarlo(true);

        // Simulate processing time
        setTimeout(() => {
            const results = runMonteCarloSimulation ? runMonteCarloSimulation({
                marketGrowth,
                winRate,
                avgDealSize
            }, 10000) : null;

            setMonteCarloResults(results);
            setIsRunningMonteCarlo(false);
        }, 3000);
    };

    const getScenarioColor = (scenario: string) => {
        switch (scenario) {
            case 'optimistic': return 'text-emerald-600';
            case 'realistic': return 'text-sky-600';
            case 'pessimistic': return 'text-amber-600';
            default: return 'text-slate-600';
        }
    };

    const getScenarioLabel = (scenario: string) => {
        switch (scenario) {
            case 'optimistic': return 'P90 (Optimistic)';
            case 'realistic': return 'P50 (Base Case)';
            case 'pessimistic': return 'P10 (Conservative)';
            default: return scenario;
        }
    };

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Header with Agent Status */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                    <h3 className="text-2xl font-semibold text-slate-900">AI Scenario Modeling</h3>
                    {scenarioAgent && (
                        <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium border ${scenarioAgent.status === 'processing'
                                ? 'bg-purple-50 text-purple-800 border-purple-200'
                                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            }`}>
                            <div className={`w-2 h-2 rounded-full ${scenarioAgent.status === 'processing' ? 'bg-purple-400 animate-pulse' : 'bg-emerald-400'
                                }`} />
                            <span>{scenarioAgent.symbol} {scenarioAgent.status === 'processing' ? 'Processing' : 'Ready'}</span>
                        </div>
                    )}
                </div>
                <button
                    onClick={runMonteCarlo}
                    disabled={isRunningMonteCarlo}
                    className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isRunningMonteCarlo ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                        <Play className="w-4 h-4" />
                    )}
                    <span>{isRunningMonteCarlo ? 'Running...' : 'Monte Carlo'}</span>
                </button>
            </div>

            {/* Current Agent Activity */}
            {scenarioAgent && (
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
                    <div className="flex items-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-md">
                            {scenarioAgent.symbol}
                        </div>
                        <div>
                            <span className="text-purple-900 font-semibold">{scenarioAgent.currentActivity}</span>
                            <span className="text-purple-700 ml-2">• Confidence: {scenarioAgent.confidence}%</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Controls */}
                <div className="space-y-6">
                    {/* Market Growth Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <label className="text-sm font-semibold text-slate-700">Market Growth Rate</label>
                            <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-slate-900">{marketGrowth.toFixed(1)}%</span>
                                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">
                                    ({scenarioData?.marketGrowth?.distribution || 'normal'})
                                </span>
                            </div>
                        </div>
                        <input
                            type="range"
                            min={scenarioData?.marketGrowth?.min || 0}
                            max={scenarioData?.marketGrowth?.max || 10}
                            step={scenarioData?.marketGrowth?.step || 0.1}
                            value={marketGrowth}
                            onChange={(e) => setMarketGrowth(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 slider-indigo"
                        />
                        <div className="flex justify-between text-xs text-slate-500 mt-2">
                            <span>{scenarioData?.marketGrowth?.min || 0}%</span>
                            <span>Volatility: ±{scenarioData?.marketGrowth?.volatility || 2}%</span>
                            <span>{scenarioData?.marketGrowth?.max || 10}%</span>
                        </div>
                    </div>

                    {/* Win Rate Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <label className="text-sm font-semibold text-slate-700">Sales Win Rate</label>
                            <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-slate-900">{winRate}%</span>
                                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">
                                    ({scenarioData?.winRate?.distribution || 'beta'})
                                </span>
                            </div>
                        </div>
                        <input
                            type="range"
                            min={scenarioData?.winRate?.min || 20}
                            max={scenarioData?.winRate?.max || 50}
                            step={scenarioData?.winRate?.step || 1}
                            value={winRate}
                            onChange={(e) => setWinRate(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 slider-emerald"
                        />
                        <div className="flex justify-between text-xs text-slate-500 mt-2">
                            <span>{scenarioData?.winRate?.min || 20}%</span>
                            <span>Volatility: ±{scenarioData?.winRate?.volatility || 3}%</span>
                            <span>{scenarioData?.winRate?.max || 50}%</span>
                        </div>
                    </div>

                    {/* Average Deal Size Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <label className="text-sm font-semibold text-slate-700">Average Deal Size</label>
                            <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-slate-900">${avgDealSize}K</span>
                                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">
                                    ({scenarioData?.avgDealSize?.distribution || 'lognormal'})
                                </span>
                            </div>
                        </div>
                        <input
                            type="range"
                            min={scenarioData?.avgDealSize?.min || 75}
                            max={scenarioData?.avgDealSize?.max || 200}
                            step={scenarioData?.avgDealSize?.step || 5}
                            value={avgDealSize}
                            onChange={(e) => setAvgDealSize(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 slider-purple"
                        />
                        <div className="flex justify-between text-xs text-slate-500 mt-2">
                            <span>${scenarioData?.avgDealSize?.min || 75}K</span>
                            <span>Volatility: ±{scenarioData?.avgDealSize?.volatility || 15}%</span>
                            <span>${scenarioData?.avgDealSize?.max || 200}K</span>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                    {/* Scenario Outcomes */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                        <h4 className="text-sm font-semibold text-slate-900 mb-4 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2 text-indigo-500" />
                            Scenario Outcomes
                        </h4>
                        <div className="space-y-2">
                            {impact?.scenarios ? Object.entries(impact.scenarios).map(([scenario, value]) => (
                                <button
                                    key={scenario}
                                    onClick={() => setSelectedScenario(scenario as any)}
                                    className={`w-full text-left p-3 rounded-lg border transition-all hover:shadow-md duration-200 ${selectedScenario === scenario
                                            ? 'border-indigo-300 bg-indigo-50 shadow-sm'
                                            : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-semibold text-slate-800">
                                            {getScenarioLabel(scenario)}
                                        </span>
                                        <span className={`text-lg font-bold ${getScenarioColor(scenario)}`}>
                                            {value >= 0 ? '+' : ''}${(value as number).toFixed(1)}M
                                        </span>
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1">
                                        Probability: {scenario === 'realistic' ? impact.probability :
                                            scenario === 'optimistic' ? Math.max(10, impact.probability - 20) :
                                                Math.max(5, impact.probability - 40)}%
                                    </div>
                                </button>
                            )) : (
                                <div className="text-center py-4 text-slate-500">Loading scenarios...</div>
                            )}
                        </div>
                    </div>

                    {/* Quick Impact Summary */}
                    {impact && (
                        <motion.div
                            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-200"
                            key={`${marketGrowth}-${winRate}-${avgDealSize}`}
                            initial={{ opacity: 0.8, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 className="text-sm font-semibold text-slate-900 mb-3">Real-time Impact Analysis</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-xs text-slate-600 mb-1">Revenue Impact</div>
                                    <div className="text-lg font-bold text-indigo-600">
                                        {impact.revenue >= 0 ? '+' : ''}${impact.revenue.toFixed(1)}M
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-xs text-slate-600 mb-1">Margin Impact</div>
                                    <div className="text-lg font-bold text-emerald-600">
                                        {impact.margin >= 0 ? '+' : ''}{impact.margin.toFixed(1)}pp
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-xs text-slate-600 mb-1">Confidence</div>
                                    <div className="text-lg font-bold text-purple-600">{impact.probability}%</div>
                                </div>
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-xs text-slate-600 mb-1">Risk Level</div>
                                    <div className={`text-lg font-bold ${impact.probability > 70 ? 'text-emerald-600' :
                                            impact.probability > 40 ? 'text-amber-600' : 'text-rose-600'
                                        }`}>
                                        {impact.probability > 70 ? 'Low' :
                                            impact.probability > 40 ? 'Medium' : 'High'}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Monte Carlo Results */}
            {monteCarloResults && (
                <motion.div
                    className="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <BarChart3 className="w-5 h-5 text-purple-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Monte Carlo Simulation Results</h4>
                        <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">(10,000 iterations)</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                        <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-xs text-slate-600 mb-2">P10 (Conservative)</div>
                            <div className="text-xl font-bold text-amber-600">
                                ${monteCarloResults.p10.toFixed(1)}M
                            </div>
                        </div>
                        <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-xs text-slate-600 mb-2">P25</div>
                            <div className="text-xl font-bold text-yellow-600">
                                ${monteCarloResults.p25.toFixed(1)}M
                            </div>
                        </div>
                        <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-xs text-slate-600 mb-2">P50 (Median)</div>
                            <div className="text-xl font-bold text-sky-600">
                                ${monteCarloResults.p50.toFixed(1)}M
                            </div>
                        </div>
                        <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-xs text-slate-600 mb-2">P75</div>
                            <div className="text-xl font-bold text-emerald-600">
                                ${monteCarloResults.p75.toFixed(1)}M
                            </div>
                        </div>
                        <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-xs text-slate-600 mb-2">P90 (Optimistic)</div>
                            <div className="text-xl font-bold text-green-600">
                                ${monteCarloResults.p90.toFixed(1)}M
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 text-sm bg-white p-4 rounded-lg shadow-sm">
                        <div>
                            <span className="text-slate-600">Mean: </span>
                            <span className="font-bold text-slate-900">${monteCarloResults.mean.toFixed(1)}M</span>
                        </div>
                        <div>
                            <span className="text-slate-600">Std Dev: </span>
                            <span className="font-bold text-slate-900">±${monteCarloResults.std.toFixed(1)}M</span>
                        </div>
                    </div>

                    {/* Visual Distribution */}
                    <div className="mt-6">
                        <div className="h-4 bg-gradient-to-r from-amber-200 via-yellow-200 via-sky-200 via-emerald-200 to-green-200 rounded-full relative shadow-inner">
                            <div
                                className="absolute top-0 w-1 h-4 bg-slate-800 rounded-full shadow-lg"
                                style={{ left: '50%', transform: 'translateX(-50%)' }}
                            />
                        </div>
                        <div className="text-xs text-slate-500 mt-2 text-center font-medium">
                            Probability distribution of revenue impact outcomes
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Processing Indicator */}
            {isRunningMonteCarlo && (
                <motion.div
                    className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="flex items-center space-x-4">
                        <RefreshCw className="w-6 h-6 text-purple-600 animate-spin" />
                        <div>
                            <div className="text-lg font-semibold text-purple-900">Running Monte Carlo Simulation...</div>
                            <div className="text-sm text-purple-700">Processing 10,000 iterations with probability distributions</div>
                        </div>
                    </div>
                </motion.div>
            )}

            <style jsx>{`
                /* Custom slider styles */
                .slider-indigo::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
                .slider-emerald::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: linear-gradient(135deg, #10b981, #34d399);
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
                .slider-purple::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: linear-gradient(135deg, #8b5cf6, #a855f7);
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </motion.div>
    );
} 