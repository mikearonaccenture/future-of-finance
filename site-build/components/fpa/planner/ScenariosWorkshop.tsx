'use client';

import {
    ArrowLeft,
    CheckCircle,
    Copy, Download,
    Play,
    Plus,
    Save,
    Settings,
    Sliders,
    TrendingDown,
    TrendingUp
} from 'lucide-react';
import { useState } from 'react';

interface Scenario {
    id: string;
    name: string;
    type: 'base' | 'optimistic' | 'pessimistic' | 'custom';
    assumptions: {
        marketGrowth: number;
        costInflation: number;
        efficiency: number;
        winRate: number;
        priceIncrease: number;
    };
    results: {
        revenue: number;
        costs: number;
        margin: number;
        ebitda: number;
        cashFlow: number;
    };
    probability: number;
    status: 'draft' | 'active' | 'archived';
}

interface Driver {
    id: string;
    name: string;
    currentValue: number;
    unit: string;
    min: number;
    max: number;
    impact: 'high' | 'medium' | 'low';
}

export default function ScenariosWorkshop({ onBack }: { onBack: () => void }) {
    const [selectedScenario, setSelectedScenario] = useState<string>('base');
    const [compareMode, setCompareMode] = useState(false);
    const [selectedForComparison, setSelectedForComparison] = useState<string[]>(['base', 'optimistic']);
    const [showSensitivity, setShowSensitivity] = useState(false);

    const [scenarios, setScenarios] = useState<Scenario[]>([
        {
            id: 'base',
            name: 'Base Case',
            type: 'base',
            assumptions: {
                marketGrowth: 5,
                costInflation: 3,
                efficiency: 2,
                winRate: 35,
                priceIncrease: 2
            },
            results: {
                revenue: 125300,
                costs: 89700,
                margin: 28.4,
                ebitda: 35600,
                cashFlow: 28900
            },
            probability: 50,
            status: 'active'
        },
        {
            id: 'optimistic',
            name: 'Growth Scenario',
            type: 'optimistic',
            assumptions: {
                marketGrowth: 8,
                costInflation: 2,
                efficiency: 4,
                winRate: 42,
                priceIncrease: 3
            },
            results: {
                revenue: 142800,
                costs: 93200,
                margin: 34.7,
                ebitda: 49600,
                cashFlow: 39800
            },
            probability: 25,
            status: 'active'
        },
        {
            id: 'pessimistic',
            name: 'Conservative',
            type: 'pessimistic',
            assumptions: {
                marketGrowth: 2,
                costInflation: 5,
                efficiency: 1,
                winRate: 28,
                priceIncrease: 0
            },
            results: {
                revenue: 108900,
                costs: 85300,
                margin: 21.7,
                ebitda: 23600,
                cashFlow: 18200
            },
            probability: 25,
            status: 'active'
        }
    ]);

    const drivers: Driver[] = [
        { id: 'market', name: 'Market Growth', currentValue: 5, unit: '%', min: -5, max: 15, impact: 'high' },
        { id: 'costs', name: 'Cost Inflation', currentValue: 3, unit: '%', min: 0, max: 10, impact: 'high' },
        { id: 'efficiency', name: 'Efficiency Gains', currentValue: 2, unit: '%', min: 0, max: 8, impact: 'medium' },
        { id: 'win', name: 'Win Rate', currentValue: 35, unit: '%', min: 20, max: 50, impact: 'high' },
        { id: 'price', name: 'Price Increase', currentValue: 2, unit: '%', min: -2, max: 5, impact: 'medium' }
    ];

    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value * 1000);
    };

    const getScenarioColor = (type: string): string => {
        switch (type) {
            case 'optimistic': return 'border-green-300 bg-green-50';
            case 'pessimistic': return 'border-red-300 bg-red-50';
            case 'base': return 'border-blue-300 bg-blue-50';
            default: return 'border-purple-300 bg-purple-50';
        }
    };

    const getImpactColor = (impact: string): string => {
        switch (impact) {
            case 'high': return 'text-red-600 bg-red-100';
            case 'medium': return 'text-yellow-600 bg-yellow-100';
            case 'low': return 'text-green-600 bg-green-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    const handleDriverChange = (driverId: string, newValue: number) => {
        // In real app, this would recalculate scenario results
        console.log(`Driver ${driverId} changed to ${newValue}`);
    };

    const currentScenario = scenarios.find(s => s.id === selectedScenario) || scenarios[0];

    const calculateWeightedAverage = () => {
        const weighted = scenarios.reduce((acc, scenario) => {
            const weight = scenario.probability / 100;
            return {
                revenue: acc.revenue + (scenario.results.revenue * weight),
                margin: acc.margin + (scenario.results.margin * weight),
                ebitda: acc.ebitda + (scenario.results.ebitda * weight),
                cashFlow: acc.cashFlow + (scenario.results.cashFlow * weight)
            };
        }, { revenue: 0, margin: 0, ebitda: 0, cashFlow: 0 });
        return weighted;
    };

    const weightedResults = calculateWeightedAverage();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onBack}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span>Back to Forecast Command</span>
                        </button>
                        <div className="border-l border-gray-300 h-6" />
                        <h1 className="text-xl font-semibold text-gray-900">Scenario Workshop</h1>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => setShowSensitivity(!showSensitivity)}
                            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border ${showSensitivity
                                    ? 'bg-purple-50 border-purple-300 text-purple-700'
                                    : 'bg-white border-gray-300 text-gray-700'
                                }`}
                        >
                            <Sliders className="h-4 w-4" />
                            <span className="text-sm">Sensitivity</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                            <Play className="h-4 w-4" />
                            <span>Run Monte Carlo</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            <Download className="h-4 w-4" />
                            <span>Export Analysis</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex h-[calc(100vh-4rem)]">
                {/* Scenario List Sidebar */}
                <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-sm font-semibold text-gray-900">Scenarios</h2>
                            <button className="p-1 hover:bg-gray-100 rounded">
                                <Plus className="h-4 w-4 text-gray-600" />
                            </button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={compareMode}
                                onChange={(e) => setCompareMode(e.target.checked)}
                                className="rounded text-blue-600"
                            />
                            <label className="text-sm text-gray-600">Compare Mode</label>
                        </div>
                    </div>

                    <div className="p-2">
                        {scenarios.map(scenario => (
                            <div
                                key={scenario.id}
                                onClick={() => !compareMode && setSelectedScenario(scenario.id)}
                                className={`p-3 rounded-lg mb-2 cursor-pointer border transition-all ${getScenarioColor(scenario.type)
                                    } ${selectedScenario === scenario.id && !compareMode ? 'ring-2 ring-blue-500' : ''}`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2">
                                            {compareMode && (
                                                <input
                                                    type="checkbox"
                                                    checked={selectedForComparison.includes(scenario.id)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedForComparison([...selectedForComparison, scenario.id]);
                                                        } else {
                                                            setSelectedForComparison(selectedForComparison.filter(id => id !== scenario.id));
                                                        }
                                                    }}
                                                    className="rounded text-blue-600"
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            )}
                                            <h3 className="text-sm font-medium text-gray-900">{scenario.name}</h3>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Probability: {scenario.probability}%
                                        </p>
                                    </div>
                                    {scenario.type === 'base' ? (
                                        <CheckCircle className="h-4 w-4 text-blue-600" />
                                    ) : scenario.type === 'optimistic' ? (
                                        <TrendingUp className="h-4 w-4 text-green-600" />
                                    ) : scenario.type === 'pessimistic' ? (
                                        <TrendingDown className="h-4 w-4 text-red-600" />
                                    ) : (
                                        <Settings className="h-4 w-4 text-purple-600" />
                                    )}
                                </div>

                                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                                    <div>
                                        <p className="text-gray-500">Revenue</p>
                                        <p className="font-medium">{formatCurrency(scenario.results.revenue)}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Margin</p>
                                        <p className="font-medium">{scenario.results.margin}%</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Weighted Average */}
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Probability-Weighted</h3>
                        <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Revenue</span>
                                <span className="font-medium">{formatCurrency(weightedResults.revenue)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Margin</span>
                                <span className="font-medium">{weightedResults.margin.toFixed(1)}%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">EBITDA</span>
                                <span className="font-medium">{formatCurrency(weightedResults.ebitda)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto">
                    {compareMode ? (
                        // Comparison View
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Scenario Comparison</h2>

                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200">
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Metric</th>
                                            {selectedForComparison.map(id => {
                                                const scenario = scenarios.find(s => s.id === id);
                                                return (
                                                    <th key={id} className="px-6 py-3 text-center text-sm font-medium text-gray-700">
                                                        {scenario?.name}
                                                    </th>
                                                );
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Revenue</td>
                                            {selectedForComparison.map(id => {
                                                const scenario = scenarios.find(s => s.id === id);
                                                return (
                                                    <td key={id} className="px-6 py-4 text-center text-sm">
                                                        {formatCurrency(scenario?.results.revenue || 0)}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Costs</td>
                                            {selectedForComparison.map(id => {
                                                const scenario = scenarios.find(s => s.id === id);
                                                return (
                                                    <td key={id} className="px-6 py-4 text-center text-sm">
                                                        {formatCurrency(scenario?.results.costs || 0)}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Margin %</td>
                                            {selectedForComparison.map(id => {
                                                const scenario = scenarios.find(s => s.id === id);
                                                return (
                                                    <td key={id} className="px-6 py-4 text-center text-sm">
                                                        {scenario?.results.margin}%
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">EBITDA</td>
                                            {selectedForComparison.map(id => {
                                                const scenario = scenarios.find(s => s.id === id);
                                                return (
                                                    <td key={id} className="px-6 py-4 text-center text-sm">
                                                        {formatCurrency(scenario?.results.ebitda || 0)}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cash Flow</td>
                                            {selectedForComparison.map(id => {
                                                const scenario = scenarios.find(s => s.id === id);
                                                return (
                                                    <td key={id} className="px-6 py-4 text-center text-sm">
                                                        {formatCurrency(scenario?.results.cashFlow || 0)}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Key Assumptions Comparison */}
                            <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <h3 className="text-md font-semibold text-gray-900 mb-4">Key Assumptions</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {['marketGrowth', 'costInflation', 'winRate'].map(key => (
                                        <div key={key} className="text-sm">
                                            <p className="text-gray-600 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                                            {selectedForComparison.map(id => {
                                                const scenario = scenarios.find(s => s.id === id);
                                                return (
                                                    <div key={id} className="flex items-center justify-between mb-1">
                                                        <span className="text-xs text-gray-500">{scenario?.name}:</span>
                                                        <span className="font-medium">{scenario?.assumptions[key as keyof typeof scenario.assumptions]}%</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Single Scenario View
                        <div className="p-6">
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold text-gray-900">{currentScenario.name}</h2>
                                <p className="text-sm text-gray-600">Adjust drivers to see real-time impact on financial outcomes</p>
                            </div>

                            {/* Results Summary */}
                            <div className="grid grid-cols-5 gap-4 mb-6">
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <p className="text-sm text-gray-600">Revenue</p>
                                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(currentScenario.results.revenue)}</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <p className="text-sm text-gray-600">Costs</p>
                                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(currentScenario.results.costs)}</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <p className="text-sm text-gray-600">Margin</p>
                                    <p className="text-2xl font-bold text-gray-900">{currentScenario.results.margin}%</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <p className="text-sm text-gray-600">EBITDA</p>
                                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(currentScenario.results.ebitda)}</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <p className="text-sm text-gray-600">Cash Flow</p>
                                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(currentScenario.results.cashFlow)}</p>
                                </div>
                            </div>

                            {/* Driver Controls */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <h3 className="text-md font-semibold text-gray-900 mb-4">Scenario Drivers</h3>

                                <div className="space-y-6">
                                    {drivers.map(driver => (
                                        <div key={driver.id} className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-sm font-medium text-gray-900">{driver.name}</span>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(driver.impact)}`}>
                                                        {driver.impact} impact
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="number"
                                                        value={driver.currentValue}
                                                        onChange={(e) => handleDriverChange(driver.id, parseFloat(e.target.value))}
                                                        className="w-20 px-2 py-1 text-right text-sm border border-gray-300 rounded"
                                                    />
                                                    <span className="text-sm text-gray-600">{driver.unit}</span>
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    type="range"
                                                    min={driver.min}
                                                    max={driver.max}
                                                    value={driver.currentValue}
                                                    onChange={(e) => handleDriverChange(driver.id, parseFloat(e.target.value))}
                                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                                />
                                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                                    <span>{driver.min}{driver.unit}</span>
                                                    <span>{driver.max}{driver.unit}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                    <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                                        Reset to Base
                                    </button>
                                    <div className="flex items-center space-x-3">
                                        <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                                            <Copy className="h-4 w-4 inline mr-2" />
                                            Duplicate
                                        </button>
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                            <Save className="h-4 w-4 inline mr-2" />
                                            Save Scenario
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Sensitivity Analysis */}
                            {showSensitivity && (
                                <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                    <h3 className="text-md font-semibold text-gray-900 mb-4">Sensitivity Analysis</h3>
                                    <div className="space-y-3">
                                        {drivers.map(driver => {
                                            const sensitivity = driver.impact === 'high' ? 85 : driver.impact === 'medium' ? 60 : 30;
                                            return (
                                                <div key={driver.id} className="flex items-center space-x-4">
                                                    <span className="text-sm text-gray-700 w-32">{driver.name}</span>
                                                    <div className="flex-1 bg-gray-200 rounded-full h-4 relative overflow-hidden">
                                                        <div
                                                            className={`h-full ${driver.impact === 'high' ? 'bg-red-500' :
                                                                    driver.impact === 'medium' ? 'bg-yellow-500' :
                                                                        'bg-green-500'
                                                                }`}
                                                            style={{ width: `${sensitivity}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-gray-600 w-12 text-right">{sensitivity}%</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 