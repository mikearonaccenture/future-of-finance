'use client';

import { motion } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Brain,
    Calendar,
    CheckCircle,
    DollarSign,
    FileText,
    Lightbulb,
    Settings,
    TrendingUp,
    Users
} from 'lucide-react';
import { useState } from 'react';

interface ScenariosJourneyProps {
    onBack: () => void;
}

interface Scenario {
    id: string;
    name: string;
    npv: number;
    payback: number;
    riskScore: number;
    resources: {
        capital: number;
        headcount: number;
        timeline: string;
    };
    keyMetrics: {
        revenue: number;
        margin: number;
        marketShare: number;
        roi: number;
    };
}

interface SensitivitySlider {
    id: string;
    label: string;
    value: number;
    impact: 'positive' | 'negative' | 'neutral';
}

export default function ScenariosJourney({ onBack }: ScenariosJourneyProps) {
    const [activeScenario, setActiveScenario] = useState<string>('accelerated');
    const [sliders, setSliders] = useState<SensitivitySlider[]>([
        { id: 'market-growth', label: 'Market Growth Rate', value: 50, impact: 'positive' },
        { id: 'competitive', label: 'Competitive Response', value: 40, impact: 'negative' },
        { id: 'execution', label: 'Execution Speed', value: 70, impact: 'positive' },
        { id: 'capital', label: 'Capital Availability', value: 60, impact: 'neutral' }
    ]);

    // Mock data
    const currentDecision = {
        question: "Should we accelerate Store Expansion Plan?",
        context: {
            market: "Market growing at 15% YoY, competitors expanding aggressively",
            competitive: "Main competitor announced 50 new locations in our core markets",
            financial: "$45M capital available, strong cash position, debt capacity of $30M"
        },
        aiRecommendation: "Accelerated plan optimal given current market window",
        confidenceScore: 87
    };

    const scenarios: Record<string, Scenario> = {
        base: {
            id: 'base',
            name: 'BASE CASE',
            npv: 42.5,
            payback: 3.2,
            riskScore: 35,
            resources: {
                capital: 25,
                headcount: 150,
                timeline: '24 months'
            },
            keyMetrics: {
                revenue: 125,
                margin: 22,
                marketShare: 12,
                roi: 28
            }
        },
        accelerated: {
            id: 'accelerated',
            name: 'ACCELERATED',
            npv: 58.3,
            payback: 2.8,
            riskScore: 65,
            resources: {
                capital: 45,
                headcount: 250,
                timeline: '18 months'
            },
            keyMetrics: {
                revenue: 175,
                margin: 20,
                marketShare: 18,
                roi: 32
            }
        },
        conservative: {
            id: 'conservative',
            name: 'CONSERVATIVE',
            npv: 28.7,
            payback: 4.5,
            riskScore: 20,
            resources: {
                capital: 15,
                headcount: 100,
                timeline: '36 months'
            },
            keyMetrics: {
                revenue: 85,
                margin: 24,
                marketShare: 8,
                roi: 22
            }
        }
    };

    const handleSliderChange = (sliderId: string, newValue: number) => {
        setSliders(prev => prev.map(slider =>
            slider.id === sliderId ? { ...slider, value: newValue } : slider
        ));
        // In real app, would recalculate scenarios based on sensitivity
    };

    const getRiskColor = (score: number) => {
        if (score < 30) return 'text-green-600 bg-green-50';
        if (score < 60) return 'text-yellow-600 bg-yellow-50';
        return 'text-red-600 bg-red-50';
    };

    const getScenarioStyle = (scenarioId: string) => {
        if (scenarioId === activeScenario) {
            return 'ring-2 ring-blue-500 bg-blue-50';
        }
        return 'hover:bg-gray-50';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={onBack}
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <ArrowLeft className="h-5 w-5" />
                                <span>Back to Command Center</span>
                            </button>
                            <div className="h-6 w-px bg-gray-300" />
                            <h1 className="text-xl font-semibold text-gray-900">Active Decision Workshop</h1>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-600">
                                <Brain className="h-4 w-4 inline mr-1" />
                                AI Confidence: {currentDecision.confidenceScore}%
                            </span>
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                                <Settings className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                {/* Section 1: Current Decision Context */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h2 className="text-sm font-medium text-gray-600 mb-2">ACTIVE QUESTION</h2>
                            <h3 className="text-2xl font-bold text-gray-900">{currentDecision.question}</h3>
                        </div>
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                            Decision Required
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                                <TrendingUp className="h-5 w-5 text-blue-600" />
                                <h4 className="font-medium text-blue-900">Market Conditions</h4>
                            </div>
                            <p className="text-sm text-blue-800">{currentDecision.context.market}</p>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                                <Users className="h-5 w-5 text-yellow-600" />
                                <h4 className="font-medium text-yellow-900">Competitive Landscape</h4>
                            </div>
                            <p className="text-sm text-yellow-800">{currentDecision.context.competitive}</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                                <DollarSign className="h-5 w-5 text-green-600" />
                                <h4 className="font-medium text-green-900">Financial Capacity</h4>
                            </div>
                            <p className="text-sm text-green-800">{currentDecision.context.financial}</p>
                        </div>
                    </div>
                </motion.section>

                {/* Section 2: Scenario Comparison Dashboard */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Scenario Comparison</h2>
                        <div className="flex items-center space-x-2">
                            <Brain className="h-5 w-5 text-blue-600" />
                            <p className="text-sm text-gray-600">
                                AI Recommendation: <span className="font-medium text-blue-600">{currentDecision.aiRecommendation}</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.values(scenarios).map((scenario) => (
                            <div
                                key={scenario.id}
                                onClick={() => setActiveScenario(scenario.id)}
                                className={`
                                    relative p-6 rounded-xl border-2 cursor-pointer transition-all
                                    ${getScenarioStyle(scenario.id)}
                                    ${scenario.id === 'accelerated' ? 'border-blue-300' : 'border-gray-200'}
                                `}
                            >
                                {/* AI Recommended Badge */}
                                {scenario.id === 'accelerated' && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                                            AI Recommended
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
                                    {scenario.name}
                                </h3>

                                {/* Key Metrics */}
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-gray-600">3-Year NPV</p>
                                        <p className="text-2xl font-bold text-gray-900">${scenario.npv}M</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Payback Period</p>
                                        <p className="text-lg font-semibold text-gray-900">{scenario.payback} years</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Risk Score</p>
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full ${scenario.riskScore < 30 ? 'bg-green-500' :
                                                            scenario.riskScore < 60 ? 'bg-yellow-500' :
                                                                'bg-red-500'
                                                        }`}
                                                    style={{ width: `${scenario.riskScore}%` }}
                                                />
                                            </div>
                                            <span className={`text-sm font-medium px-2 py-1 rounded ${getRiskColor(scenario.riskScore)}`}>
                                                {scenario.riskScore}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pt-3 border-t border-gray-200">
                                        <p className="text-sm font-medium text-gray-900 mb-2">Resource Requirements</p>
                                        <div className="space-y-1 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Capital:</span>
                                                <span className="font-medium">${scenario.resources.capital}M</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Headcount:</span>
                                                <span className="font-medium">{scenario.resources.headcount}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Timeline:</span>
                                                <span className="font-medium">{scenario.resources.timeline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {activeScenario === scenario.id && (
                                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                                        <CheckCircle className="h-6 w-6 text-blue-600 bg-white rounded-full" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Additional Metrics Comparison */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-900 mb-3">Detailed Comparison</h4>
                        <div className="grid grid-cols-4 gap-4 text-sm">
                            <div className="font-medium text-gray-600">Metric</div>
                            {Object.values(scenarios).map(scenario => (
                                <div key={scenario.id} className={`text-center font-medium ${scenario.id === activeScenario ? 'text-blue-600' : 'text-gray-900'
                                    }`}>
                                    {scenario.name}
                                </div>
                            ))}

                            {['Revenue (Y3)', 'Margin %', 'Market Share %', 'ROI %'].map((metric, idx) => {
                                const metricKey = ['revenue', 'margin', 'marketShare', 'roi'][idx] as keyof Scenario['keyMetrics'];
                                return (
                                    <>
                                        <div key={`${metric}-label`} className="text-gray-600">{metric}</div>
                                        {Object.values(scenarios).map(scenario => (
                                            <div key={`${scenario.id}-${metric}`} className={`text-center ${scenario.id === activeScenario ? 'font-semibold text-blue-600' : ''
                                                }`}>
                                                {metricKey === 'revenue' ? `$${scenario.keyMetrics[metricKey]}M` :
                                                    `${scenario.keyMetrics[metricKey]}%`}
                                            </div>
                                        ))}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </motion.section>

                {/* Section 3: Sensitivity Sliders */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Sensitivity Analysis</h2>
                        <p className="text-sm text-gray-600">Adjust parameters to see real-time P&L impact</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            {sliders.map((slider) => (
                                <div key={slider.id}>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="text-sm font-medium text-gray-900">
                                            {slider.label}
                                        </label>
                                        <span className={`text-sm font-medium ${slider.impact === 'positive' ? 'text-green-600' :
                                                slider.impact === 'negative' ? 'text-red-600' :
                                                    'text-gray-600'
                                            }`}>
                                            {slider.value}%
                                        </span>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={slider.value}
                                            onChange={(e) => handleSliderChange(slider.id, parseInt(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                            style={{
                                                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${slider.value}%, #E5E7EB ${slider.value}%, #E5E7EB 100%)`
                                            }}
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                                            <span>Low</span>
                                            <span>Base</span>
                                            <span>High</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Real-time Impact Display */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-sm font-medium text-gray-900 mb-4">Real-time P&L Impact</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Base NPV</span>
                                    <span className="text-lg font-semibold">$58.3M</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Sensitivity Adjustment</span>
                                    <span className="text-lg font-semibold text-green-600">+$4.2M</span>
                                </div>
                                <div className="pt-3 border-t border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-900">Adjusted NPV</span>
                                        <span className="text-2xl font-bold text-gray-900">$62.5M</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-900">
                                    <Lightbulb className="h-4 w-4 inline mr-1" />
                                    Current settings suggest <span className="font-semibold">7% improvement</span> over base case
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Section 4: Decision Package Generator */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Decision Package Generator</h2>
                        <p className="text-sm text-gray-600">AI pre-fills with analysis, risks, and recommendations</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="group relative overflow-hidden rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition-all">
                            <div className="relative z-10">
                                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate Board Presentation</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    15-slide deck with executive summary, financials, and recommendation
                                </p>
                                <div className="flex items-center text-sm text-blue-600">
                                    <span>Create Now</span>
                                    <ArrowRight className="h-4 w-4 ml-1" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>

                        <button className="group relative overflow-hidden rounded-xl border-2 border-gray-200 p-6 hover:border-green-300 transition-all">
                            <div className="relative z-10">
                                <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Business Case</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Detailed business case with ROI analysis, risks, and implementation plan
                                </p>
                                <div className="flex items-center text-sm text-green-600">
                                    <span>Generate</span>
                                    <ArrowRight className="h-4 w-4 ml-1" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>

                        <button className="group relative overflow-hidden rounded-xl border-2 border-gray-200 p-6 hover:border-purple-300 transition-all">
                            <div className="relative z-10">
                                <Calendar className="h-12 w-12 text-purple-600 mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Review</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Book stakeholder review with pre-read materials and agenda
                                </p>
                                <div className="flex items-center text-sm text-purple-600">
                                    <span>Schedule</span>
                                    <ArrowRight className="h-4 w-4 ml-1" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>

                    {/* AI Summary */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-start space-x-3">
                            <Brain className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-medium text-blue-900 mb-1">AI Analysis Summary</h4>
                                <p className="text-sm text-blue-800">
                                    Based on current parameters, the accelerated expansion plan shows strongest NPV with manageable risk.
                                    Key success factors: rapid execution, securing prime locations, and maintaining service quality during scale-up.
                                    Primary risk: competitive response requiring 15-20% higher marketing spend in Y1-Y2.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Custom slider styles */}
            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: #3B82F6;
                    border-radius: 50%;
                    cursor: pointer;
                    border: 2px solid white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .slider::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    background: #3B82F6;
                    border-radius: 50%;
                    cursor: pointer;
                    border: 2px solid white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
            `}</style>
        </div>
    );
} 