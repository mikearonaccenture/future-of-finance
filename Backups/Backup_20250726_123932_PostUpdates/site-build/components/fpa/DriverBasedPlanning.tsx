'use client';

import { motion } from 'framer-motion';
import {
    AlertCircle,
    ChevronDown,
    ChevronRight,
    GitBranch,
    Info,
    Lock,
    RefreshCw,
    Save,
    Sliders,
    Unlock
} from 'lucide-react';
import { useState } from 'react';

interface BusinessDriver {
    id: string;
    name: string;
    value: number;
    unit: string;
    type: 'input' | 'calculated';
    formula?: string;
    children?: BusinessDriver[];
    variance: number;
    impact: 'high' | 'medium' | 'low';
    locked?: boolean;
    historicalValues?: { period: string; value: number }[];
}

export default function DriverBasedPlanning() {
    const [drivers, setDrivers] = useState<BusinessDriver[]>([
        {
            id: 'revenue',
            name: 'Total Revenue',
            value: 485000000,
            unit: '$',
            type: 'calculated',
            formula: 'Volume × Average Selling Price',
            variance: 8.5,
            impact: 'high',
            children: [
                {
                    id: 'volume',
                    name: 'Total Volume',
                    value: 12500000,
                    unit: 'units',
                    type: 'calculated',
                    formula: 'Market Size × Market Share',
                    variance: 5.2,
                    impact: 'high',
                    children: [
                        {
                            id: 'market-size',
                            name: 'Market Size',
                            value: 50000000,
                            unit: 'units',
                            type: 'input',
                            variance: 3.0,
                            impact: 'medium',
                            historicalValues: [
                                { period: '2023', value: 47000000 },
                                { period: '2024', value: 48500000 }
                            ]
                        },
                        {
                            id: 'market-share',
                            name: 'Market Share',
                            value: 25,
                            unit: '%',
                            type: 'input',
                            variance: 2.2,
                            impact: 'high',
                            historicalValues: [
                                { period: '2023', value: 23.5 },
                                { period: '2024', value: 24.3 }
                            ]
                        }
                    ]
                },
                {
                    id: 'asp',
                    name: 'Average Selling Price',
                    value: 38.8,
                    unit: '$',
                    type: 'calculated',
                    formula: 'Base Price × (1 + Price Increase %)',
                    variance: 3.3,
                    impact: 'high',
                    children: [
                        {
                            id: 'base-price',
                            name: 'Base Price',
                            value: 37.5,
                            unit: '$',
                            type: 'input',
                            variance: 0,
                            impact: 'medium'
                        },
                        {
                            id: 'price-increase',
                            name: 'Price Increase',
                            value: 3.5,
                            unit: '%',
                            type: 'input',
                            variance: 0.5,
                            impact: 'high'
                        }
                    ]
                }
            ]
        }
    ]);

    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['revenue', 'volume', 'asp']));
    const [selectedDriver, setSelectedDriver] = useState<BusinessDriver | null>(null);
    const [tempValues, setTempValues] = useState<Record<string, number>>({});
    const [showImpact, setShowImpact] = useState(false);

    const toggleNode = (driverId: string) => {
        setExpandedNodes(prev => {
            const newSet = new Set(prev);
            if (newSet.has(driverId)) {
                newSet.delete(driverId);
            } else {
                newSet.add(driverId);
            }
            return newSet;
        });
    };

    const handleSliderChange = (driverId: string, value: number) => {
        setTempValues(prev => ({ ...prev, [driverId]: value }));
        setShowImpact(true);
    };

    const calculateImpact = () => {
        // Simplified impact calculation
        const volumeChange = ((tempValues['market-share'] || drivers[0].children![0].children![1].value) - drivers[0].children![0].children![1].value) / 100;
        const priceChange = ((tempValues['price-increase'] || drivers[0].children![1].children![1].value) - drivers[0].children![1].children![1].value) / 100;

        const currentRevenue = drivers[0].value;
        const newRevenue = currentRevenue * (1 + volumeChange) * (1 + priceChange);

        return {
            revenue: newRevenue - currentRevenue,
            margin: (newRevenue - currentRevenue) * 0.25, // Simplified margin impact
            cashFlow: (newRevenue - currentRevenue) * 0.15 // Simplified cash flow impact
        };
    };

    const getVarianceColor = (variance: number) => {
        if (variance > 5) return 'text-green-600';
        if (variance < -5) return 'text-red-600';
        return 'text-gray-600';
    };

    const getSensitivityColor = (impact: string) => {
        switch (impact) {
            case 'high': return 'bg-red-100 text-red-700';
            case 'medium': return 'bg-yellow-100 text-yellow-700';
            case 'low': return 'bg-green-100 text-green-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const renderDriverNode = (driver: BusinessDriver, level: number = 0) => {
        const hasChildren = driver.children && driver.children.length > 0;
        const isExpanded = expandedNodes.has(driver.id);
        const tempValue = tempValues[driver.id] || driver.value;

        return (
            <div key={driver.id} className={`${level > 0 ? 'ml-8' : ''}`}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`bg-white rounded-lg border ${selectedDriver?.id === driver.id ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                        } p-4 mb-3 cursor-pointer hover:shadow-md transition-shadow`}
                    onClick={() => setSelectedDriver(driver)}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            {hasChildren && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleNode(driver.id);
                                    }}
                                    className="p-1 hover:bg-gray-100 rounded"
                                >
                                    {isExpanded ? (
                                        <ChevronDown className="h-4 w-4 text-gray-500" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4 text-gray-500" />
                                    )}
                                </button>
                            )}

                            <div className={`p-2 rounded-lg ${driver.type === 'input' ? 'bg-blue-50' : 'bg-purple-50'
                                }`}>
                                {driver.type === 'input' ? (
                                    <Sliders className={`h-4 w-4 ${driver.type === 'input' ? 'text-blue-600' : 'text-purple-600'
                                        }`} />
                                ) : (
                                    <GitBranch className="h-4 w-4 text-purple-600" />
                                )}
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">{driver.name}</h3>
                                {driver.formula && (
                                    <p className="text-xs text-gray-500 mt-0.5">{driver.formula}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <div className="flex items-baseline space-x-1">
                                    <span className="text-lg font-semibold text-gray-900">
                                        {driver.unit === '$' ? '$' : ''}
                                        {tempValue.toLocaleString()}
                                        {driver.unit === '%' ? '%' : ''}
                                        {driver.unit === 'units' ? ' units' : ''}
                                    </span>
                                    {tempValues[driver.id] && (
                                        <span className="text-sm text-blue-600">
                                            ({((tempValue - driver.value) / driver.value * 100).toFixed(1)}%)
                                        </span>
                                    )}
                                </div>
                                <div className={`text-sm font-medium ${getVarianceColor(driver.variance)}`}>
                                    {driver.variance > 0 ? '+' : ''}{driver.variance}% vs LY
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSensitivityColor(driver.impact)
                                    }`}>
                                    {driver.impact}
                                </span>
                                {driver.locked ? (
                                    <Lock className="h-4 w-4 text-gray-400" />
                                ) : (
                                    <Unlock className="h-4 w-4 text-gray-400" />
                                )}
                            </div>
                        </div>
                    </div>

                    {driver.type === 'input' && selectedDriver?.id === driver.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Adjust Value</span>
                                <span className="text-sm text-gray-500">
                                    Current: {driver.value}{driver.unit === '%' ? '%' : ''}
                                </span>
                            </div>
                            <input
                                type="range"
                                min={driver.value * 0.7}
                                max={driver.value * 1.3}
                                step={driver.unit === '%' ? 0.1 : driver.value * 0.01}
                                value={tempValue}
                                onChange={(e) => handleSliderChange(driver.id, parseFloat(e.target.value))}
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>-30%</span>
                                <span>Base</span>
                                <span>+30%</span>
                            </div>
                        </div>
                    )}
                </motion.div>

                {hasChildren && isExpanded && (
                    <div className="mt-2">
                        {driver.children!.map(child => renderDriverNode(child, level + 1))}
                    </div>
                )}
            </div>
        );
    };

    const impact = showImpact ? calculateImpact() : null;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Driver-Based Planning</h2>
                    <p className="text-sm text-gray-500 mt-1">Model business drivers and analyze sensitivities</p>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => {
                            setTempValues({});
                            setShowImpact(false);
                        }}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        <RefreshCw className="h-4 w-4 mr-2 inline" />
                        Reset to Base
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        <Save className="h-4 w-4 mr-2 inline" />
                        Save Scenario
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Driver Tree */}
                <div className="lg:col-span-2">
                    <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Business Driver Hierarchy</h3>
                            <div className="flex items-center space-x-2 text-sm">
                                <div className="flex items-center space-x-1">
                                    <div className="h-3 w-3 bg-blue-100 rounded"></div>
                                    <span className="text-gray-600">Input</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="h-3 w-3 bg-purple-100 rounded"></div>
                                    <span className="text-gray-600">Calculated</span>
                                </div>
                            </div>
                        </div>

                        {drivers.map(driver => renderDriverNode(driver))}
                    </div>
                </div>

                {/* Impact Preview & Details */}
                <div className="space-y-6">
                    {/* Real-time Impact */}
                    {showImpact && impact && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-xl border border-gray-200 p-6"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">P&L Impact Preview</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Revenue Impact</span>
                                    <span className={`text-sm font-semibold ${impact.revenue > 0 ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {impact.revenue > 0 ? '+' : ''}${(impact.revenue / 1000000).toFixed(1)}M
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Margin Impact</span>
                                    <span className={`text-sm font-semibold ${impact.margin > 0 ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {impact.margin > 0 ? '+' : ''}${(impact.margin / 1000000).toFixed(1)}M
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Cash Flow Impact</span>
                                    <span className={`text-sm font-semibold ${impact.cashFlow > 0 ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {impact.cashFlow > 0 ? '+' : ''}${(impact.cashFlow / 1000000).toFixed(1)}M
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-800">
                                    <Info className="h-4 w-4 inline mr-1" />
                                    Impact calculated based on current driver adjustments
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Selected Driver Details */}
                    {selectedDriver && (
                        <div className="bg-white rounded-xl border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Driver Details</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-gray-500">Name</p>
                                    <p className="font-medium text-gray-900">{selectedDriver.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Type</p>
                                    <p className="font-medium text-gray-900 capitalize">{selectedDriver.type}</p>
                                </div>
                                {selectedDriver.formula && (
                                    <div>
                                        <p className="text-sm text-gray-500">Formula</p>
                                        <p className="font-medium text-gray-900">{selectedDriver.formula}</p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm text-gray-500">Sensitivity</p>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSensitivityColor(selectedDriver.impact)
                                        }`}>
                                        {selectedDriver.impact} impact
                                    </span>
                                </div>
                            </div>

                            {/* Historical Trend */}
                            {selectedDriver.historicalValues && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm font-medium text-gray-900 mb-2">Historical Trend</p>
                                    <div className="space-y-2">
                                        {selectedDriver.historicalValues.map((hist, idx) => (
                                            <div key={idx} className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">{hist.period}</span>
                                                <span className="font-medium text-gray-900">
                                                    {hist.value.toLocaleString()}{selectedDriver.unit === '%' ? '%' : ''}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Tips */}
                    <div className="bg-blue-50 rounded-xl p-4">
                        <h4 className="text-sm font-semibold text-blue-900 mb-2">
                            <AlertCircle className="h-4 w-4 inline mr-1" />
                            Planning Tips
                        </h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Click on any driver to see details</li>
                            <li>• Adjust input drivers to see real-time impact</li>
                            <li>• Save scenarios for comparison</li>
                            <li>• High sensitivity drivers have the most impact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 