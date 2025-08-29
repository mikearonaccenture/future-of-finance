'use client';

import { motion } from 'framer-motion';
import {
    AlertCircle,
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Brain,
    Calendar,
    CheckCircle,
    DollarSign,
    FileText,
    GitBranch,
    Globe,
    Map,
    Settings,
    Sparkles,
    Target,
    TrendingUp,
    X,
    Zap
} from 'lucide-react';
import { useState } from 'react';

interface LongRangeJourneyProps {
    onBack: () => void;
}

interface Assumption {
    id: string;
    category: string;
    description: string;
    value: string;
    confidence: number;
    impact: 'high' | 'medium' | 'low';
}

interface Scenario {
    id: string;
    name: string;
    color: string;
    selected: boolean;
    growth: number[];
    description: string;
}

interface Initiative {
    id: string;
    name: string;
    category: string;
    startYear: number;
    startQuarter: number;
    duration: number; // in quarters
    investment: number;
    expectedReturn: number;
    status: 'planned' | 'in-progress' | 'at-risk' | 'completed';
    dependencies: string[];
    riskLevel: 'low' | 'medium' | 'high';
}

interface StrategicOption {
    id: string;
    name: string;
    score: number;
    pros: string[];
    cons: string[];
    successFactors: string[];
    investmentRequired: number;
    timeToValue: string;
    riskProfile: 'conservative' | 'moderate' | 'aggressive';
}

export default function LongRangeJourney({ onBack }: LongRangeJourneyProps) {
    const [selectedScenarios, setSelectedScenarios] = useState<string[]>(['base']);
    const [scenarioBlend, setScenarioBlend] = useState({ base: 60, growth: 30, disruption: 10 });
    const [selectedOption, setSelectedOption] = useState<string>('ma-led');
    const [showInitiativeDetails, setShowInitiativeDetails] = useState<string | null>(null);

    // Mock data
    const marketIntelligence = {
        summary: "Industry growing 8% CAGR, consolidation accelerating, digital disruption in 2-3 years",
        keyTrends: [
            "Market consolidation expected to accelerate with 3-4 major players emerging",
            "Digital-first competitors capturing 15% market share annually",
            "Regulatory changes in EU and APAC markets creating new opportunities",
            "Sustainability becoming key differentiator for premium segments"
        ],
        threats: [
            "New entrants with asset-light models",
            "Technology disruption in core processes",
            "Changing consumer preferences"
        ],
        opportunities: [
            "Adjacent market expansion ($2B TAM)",
            "Digital services revenue streams",
            "Emerging markets growth"
        ]
    };

    const assumptions: Assumption[] = [
        {
            id: '1',
            category: 'Market',
            description: 'Industry CAGR',
            value: '8%',
            confidence: 85,
            impact: 'high'
        },
        {
            id: '2',
            category: 'Market',
            description: 'Digital adoption rate',
            value: '25% YoY',
            confidence: 70,
            impact: 'high'
        },
        {
            id: '3',
            category: 'Economic',
            description: 'GDP growth',
            value: '2.5%',
            confidence: 65,
            impact: 'medium'
        },
        {
            id: '4',
            category: 'Competitive',
            description: 'Market share retention',
            value: '85%',
            confidence: 75,
            impact: 'high'
        },
        {
            id: '5',
            category: 'Technology',
            description: 'AI/ML cost reduction',
            value: '15%',
            confidence: 80,
            impact: 'medium'
        },
        {
            id: '6',
            category: 'Regulatory',
            description: 'Compliance costs',
            value: '+$5M/yr',
            confidence: 90,
            impact: 'medium'
        }
    ];

    const scenarios: Scenario[] = [
        {
            id: 'base',
            name: 'Base Case',
            color: '#6B7280',
            selected: true,
            growth: [5, 5.5, 6, 6.5, 7],
            description: 'Steady growth with current strategy'
        },
        {
            id: 'growth',
            name: 'Growth Case',
            color: '#10B981',
            selected: false,
            growth: [7, 9, 11, 13, 15],
            description: 'Aggressive expansion and M&A'
        },
        {
            id: 'disruption',
            name: 'Disruption Case',
            color: '#EF4444',
            selected: false,
            growth: [5, 4, 2, -1, -3],
            description: 'Market disruption impacts'
        }
    ];

    const initiatives: Initiative[] = [
        {
            id: '1',
            name: 'Digital Transformation',
            category: 'Technology',
            startYear: 2025,
            startQuarter: 3,
            duration: 8,
            investment: 45,
            expectedReturn: 125,
            status: 'planned',
            dependencies: ['2'],
            riskLevel: 'medium'
        },
        {
            id: '2',
            name: 'Cloud Migration',
            category: 'Technology',
            startYear: 2025,
            startQuarter: 1,
            duration: 6,
            investment: 20,
            expectedReturn: 35,
            status: 'in-progress',
            dependencies: [],
            riskLevel: 'low'
        },
        {
            id: '3',
            name: 'APAC Expansion',
            category: 'Geographic',
            startYear: 2026,
            startQuarter: 1,
            duration: 12,
            investment: 80,
            expectedReturn: 180,
            status: 'planned',
            dependencies: ['1'],
            riskLevel: 'high'
        },
        {
            id: '4',
            name: 'Product Innovation Lab',
            category: 'R&D',
            startYear: 2025,
            startQuarter: 2,
            duration: 20,
            investment: 30,
            expectedReturn: 90,
            status: 'planned',
            dependencies: [],
            riskLevel: 'medium'
        },
        {
            id: '5',
            name: 'Strategic Acquisition',
            category: 'M&A',
            startYear: 2026,
            startQuarter: 3,
            duration: 4,
            investment: 150,
            expectedReturn: 280,
            status: 'planned',
            dependencies: ['3'],
            riskLevel: 'high'
        }
    ];

    const strategicOptions: StrategicOption[] = [
        {
            id: 'organic',
            name: 'Organic Growth',
            score: 72,
            pros: [
                'Lower risk profile',
                'Maintains culture',
                'Predictable execution'
            ],
            cons: [
                'Slower growth',
                'May miss market window',
                'Limited scale advantages'
            ],
            successFactors: [
                'Strong execution capability',
                'Market share defense',
                'Innovation pipeline'
            ],
            investmentRequired: 120,
            timeToValue: '3-4 years',
            riskProfile: 'conservative'
        },
        {
            id: 'ma-led',
            name: 'M&A Led',
            score: 85,
            pros: [
                'Rapid scale achievement',
                'Market consolidation play',
                'Instant capabilities'
            ],
            cons: [
                'Integration complexity',
                'Culture risks',
                'High capital needs'
            ],
            successFactors: [
                'Strong M&A track record',
                'Integration playbook',
                'Available targets'
            ],
            investmentRequired: 350,
            timeToValue: '2-3 years',
            riskProfile: 'aggressive'
        },
        {
            id: 'partnership',
            name: 'Partnership',
            score: 68,
            pros: [
                'Shared risk/investment',
                'Complementary capabilities',
                'Market access'
            ],
            cons: [
                'Control limitations',
                'Slower decisions',
                'Profit sharing'
            ],
            successFactors: [
                'Aligned partners',
                'Clear governance',
                'Win-win structure'
            ],
            investmentRequired: 80,
            timeToValue: '2 years',
            riskProfile: 'moderate'
        }
    ];

    const years = [2025, 2026, 2027, 2028, 2029];
    const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

    const getConfidenceColor = (confidence: number) => {
        if (confidence >= 80) return 'text-green-600 bg-green-100';
        if (confidence >= 60) return 'text-yellow-600 bg-yellow-100';
        return 'text-red-600 bg-red-100';
    };

    const getInitiativePosition = (initiative: Initiative) => {
        const startQuarterIndex = (initiative.startYear - 2025) * 4 + (initiative.startQuarter - 1);
        const width = (initiative.duration / 20) * 100; // 20 quarters total
        const left = (startQuarterIndex / 20) * 100;
        return { left: `${left}%`, width: `${width}%` };
    };

    const getRiskColor = (risk: string) => {
        switch (risk) {
            case 'low': return 'bg-green-500';
            case 'medium': return 'bg-yellow-500';
            case 'high': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    const toggleScenario = (scenarioId: string) => {
        setSelectedScenarios(prev =>
            prev.includes(scenarioId)
                ? prev.filter(id => id !== scenarioId)
                : [...prev, scenarioId]
        );
    };

    const calculateBlendedGrowth = () => {
        const weights = {
            base: scenarioBlend.base / 100,
            growth: scenarioBlend.growth / 100,
            disruption: scenarioBlend.disruption / 100
        };

        return years.map((_, index) => {
            let blendedGrowth = 0;
            scenarios.forEach(scenario => {
                blendedGrowth += scenario.growth[index] * weights[scenario.id as keyof typeof weights];
            });
            return blendedGrowth.toFixed(1);
        });
    };

    const aiFlag = {
        message: "Digital transformation must start by Q3 to capture market window",
        urgency: 'high',
        impact: '$45M revenue at risk if delayed'
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-xl font-semibold text-gray-900">Strategic Planning Canvas</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">Planning Horizon: 2025-2029</span>
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                                <Settings className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                {/* Section 1: Strategic Context Setting */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Globe className="h-5 w-5 text-blue-600 mr-2" />
                        Strategic Context Setting
                    </h2>

                    {/* AI Market Intelligence Summary */}
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-start space-x-3">
                            <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                                <p className="font-medium text-blue-900">AI Market Intelligence Summary</p>
                                <p className="text-blue-800 mt-1">{marketIntelligence.summary}</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Trends Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="p-4 bg-green-50 rounded-lg">
                            <h4 className="font-medium text-green-900 mb-2 flex items-center">
                                <TrendingUp className="h-4 w-4 mr-2" />
                                Opportunities
                            </h4>
                            <ul className="space-y-1">
                                {marketIntelligence.opportunities.map((opp, index) => (
                                    <li key={index} className="text-sm text-green-800">• {opp}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-lg">
                            <h4 className="font-medium text-yellow-900 mb-2 flex items-center">
                                <AlertCircle className="h-4 w-4 mr-2" />
                                Threats
                            </h4>
                            <ul className="space-y-1">
                                {marketIntelligence.threats.map((threat, index) => (
                                    <li key={index} className="text-sm text-yellow-800">• {threat}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                            <h4 className="font-medium text-purple-900 mb-2 flex items-center">
                                <Sparkles className="h-4 w-4 mr-2" />
                                Key Trends
                            </h4>
                            <ul className="space-y-1">
                                {marketIntelligence.keyTrends.slice(0, 3).map((trend, index) => (
                                    <li key={index} className="text-sm text-purple-800 truncate" title={trend}>
                                        • {trend}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Key Assumptions Dashboard */}
                    <div>
                        <h3 className="font-medium text-gray-900 mb-3">Key Assumptions Dashboard</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {assumptions.map((assumption) => (
                                <div key={assumption.id} className="p-3 border border-gray-200 rounded-lg">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{assumption.description}</p>
                                            <p className="text-xs text-gray-600">{assumption.category}</p>
                                        </div>
                                        <span className="text-lg font-bold text-gray-900">{assumption.value}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xs text-gray-600">Confidence:</span>
                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getConfidenceColor(assumption.confidence)}`}>
                                                {assumption.confidence}%
                                            </span>
                                        </div>
                                        <span className={`text-xs font-medium ${assumption.impact === 'high' ? 'text-red-600' :
                                                assumption.impact === 'medium' ? 'text-yellow-600' :
                                                    'text-green-600'
                                            }`}>
                                            {assumption.impact.toUpperCase()} IMPACT
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Section 2: Scenario Planning Studio */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <GitBranch className="h-5 w-5 text-purple-600 mr-2" />
                        Scenario Planning Studio
                    </h2>

                    {/* Visual Scenario Builder */}
                    <div className="mb-6">
                        <div className="grid grid-cols-6 gap-2 mb-4 text-sm font-medium text-gray-700">
                            <div></div>
                            {years.map(year => (
                                <div key={year} className="text-center">{year}</div>
                            ))}
                        </div>

                        {/* Scenario Lines */}
                        <div className="space-y-3">
                            {scenarios.map((scenario) => (
                                <div key={scenario.id} className="grid grid-cols-6 gap-2 items-center">
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => toggleScenario(scenario.id)}
                                            className={`w-4 h-4 rounded border-2 ${selectedScenarios.includes(scenario.id)
                                                    ? `bg-${scenario.color} border-${scenario.color}`
                                                    : 'border-gray-300'
                                                }`}
                                            style={{
                                                backgroundColor: selectedScenarios.includes(scenario.id) ? scenario.color : 'transparent',
                                                borderColor: selectedScenarios.includes(scenario.id) ? scenario.color : '#D1D5DB'
                                            }}
                                        />
                                        <span className="text-sm font-medium text-gray-900">{scenario.name}</span>
                                    </div>
                                    {scenario.growth.map((growth, index) => (
                                        <div key={index} className="relative h-12">
                                            <div className="absolute inset-0 flex items-center">
                                                <div
                                                    className="h-2 w-full rounded"
                                                    style={{
                                                        backgroundColor: scenario.color,
                                                        opacity: selectedScenarios.includes(scenario.id) ? 1 : 0.3,
                                                        transform: `scaleY(${Math.abs(growth) / 15})`,
                                                        transformOrigin: growth >= 0 ? 'bottom' : 'top'
                                                    }}
                                                />
                                            </div>
                                            <span className={`absolute right-0 top-0 text-xs font-medium ${selectedScenarios.includes(scenario.id) ? 'text-gray-900' : 'text-gray-400'
                                                }`}>
                                                {growth > 0 ? '+' : ''}{growth}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scenario Blending */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-3">Scenario Blending</h3>
                        <div className="space-y-3">
                            {Object.entries(scenarioBlend).map(([key, value]) => {
                                const scenario = scenarios.find(s => s.id === key);
                                return scenario && (
                                    <div key={key} className="flex items-center space-x-4">
                                        <span className="w-32 text-sm font-medium text-gray-700">{scenario.name}</span>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={value}
                                            onChange={(e) => {
                                                const newValue = parseInt(e.target.value);
                                                const total = Object.entries(scenarioBlend)
                                                    .filter(([k]) => k !== key)
                                                    .reduce((sum, [, v]) => sum + v, 0);

                                                if (total + newValue <= 100) {
                                                    setScenarioBlend(prev => ({ ...prev, [key]: newValue }));
                                                }
                                            }}
                                            className="flex-1"
                                            style={{ accentColor: scenario.color }}
                                        />
                                        <span className="w-12 text-sm font-medium text-gray-900">{value}%</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Blended Results */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-900">Blended Growth Forecast</span>
                                <span className="text-xs text-gray-600">
                                    Total: {Object.values(scenarioBlend).reduce((sum, v) => sum + v, 0)}%
                                </span>
                            </div>
                            <div className="grid grid-cols-5 gap-2 text-center">
                                {calculateBlendedGrowth().map((growth, index) => (
                                    <div key={index} className="p-2 bg-blue-100 rounded">
                                        <p className="text-xs text-blue-600">{years[index]}</p>
                                        <p className="text-sm font-bold text-blue-900">+{growth}%</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Section 3: Strategic Initiative Roadmap */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                            <Map className="h-5 w-5 text-green-600 mr-2" />
                            Strategic Initiative Roadmap
                        </h2>

                        {/* AI Flag */}
                        {aiFlag && (
                            <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200 flex items-start space-x-2">
                                <Zap className="h-5 w-5 text-red-600 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium text-red-900">{aiFlag.message}</p>
                                    <p className="text-xs text-red-700 mt-1">{aiFlag.impact}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Timeline Header */}
                    <div className="mb-4">
                        <div className="grid grid-cols-5 gap-1 text-xs font-medium text-gray-600 text-center mb-2">
                            {years.map(year => (
                                <div key={year} className="grid grid-cols-4 gap-0">
                                    {quarters.map(q => (
                                        <div key={`${year}-${q}`} className="px-1">{q}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-5 gap-1 text-sm font-medium text-gray-900 text-center">
                            {years.map(year => (
                                <div key={year}>{year}</div>
                            ))}
                        </div>
                    </div>

                    {/* Gantt Chart */}
                    <div className="space-y-3 mb-6">
                        {initiatives.map((initiative) => {
                            const position = getInitiativePosition(initiative);
                            return (
                                <div key={initiative.id} className="relative">
                                    <div className="grid grid-cols-6 gap-2 items-center mb-1">
                                        <div className="col-span-1">
                                            <p className="text-sm font-medium text-gray-900">{initiative.name}</p>
                                            <p className="text-xs text-gray-600">{initiative.category}</p>
                                        </div>
                                        <div className="col-span-5 relative h-10">
                                            <div className="absolute inset-0 bg-gray-100 rounded"></div>
                                            <div
                                                className={`absolute h-8 top-1 rounded flex items-center px-2 cursor-pointer hover:opacity-90 transition-opacity ${initiative.status === 'in-progress' ? 'bg-blue-500' :
                                                        initiative.status === 'at-risk' ? 'bg-red-500' :
                                                            initiative.status === 'completed' ? 'bg-green-500' :
                                                                'bg-gray-400'
                                                    }`}
                                                style={position}
                                                onClick={() => setShowInitiativeDetails(initiative.id)}
                                            >
                                                <div className="flex items-center space-x-2 text-white text-xs">
                                                    <DollarSign className="h-3 w-3" />
                                                    <span>{initiative.investment}M</span>
                                                    <ArrowRight className="h-3 w-3" />
                                                    <span>{initiative.expectedReturn}M</span>
                                                    <div className={`ml-auto w-2 h-2 rounded-full ${getRiskColor(initiative.riskLevel)}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Initiative Details */}
                    {showInitiativeDetails && (
                        <div className="p-4 bg-blue-50 rounded-lg">
                            {(() => {
                                const initiative = initiatives.find(i => i.id === showInitiativeDetails);
                                return initiative && (
                                    <div className="grid grid-cols-4 gap-4">
                                        <div>
                                            <p className="text-xs text-blue-600">Investment</p>
                                            <p className="text-lg font-bold text-blue-900">${initiative.investment}M</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-blue-600">Expected Return</p>
                                            <p className="text-lg font-bold text-blue-900">${initiative.expectedReturn}M</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-blue-600">ROI</p>
                                            <p className="text-lg font-bold text-blue-900">
                                                {((initiative.expectedReturn / initiative.investment - 1) * 100).toFixed(0)}%
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-blue-600">Risk Level</p>
                                            <p className="text-lg font-bold text-blue-900 capitalize">{initiative.riskLevel}</p>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                    )}

                    {/* Legend */}
                    <div className="flex items-center justify-between text-xs text-gray-600 pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                                <span>In Progress</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-gray-400 rounded"></div>
                                <span>Planned</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-red-500 rounded"></div>
                                <span>At Risk</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span>Risk Level:</span>
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Low</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span>Medium</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span>High</span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Section 4: Strategic Options Evaluator */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Brain className="h-5 w-5 text-purple-600 mr-2" />
                        Strategic Options Evaluator
                    </h2>

                    <p className="text-sm text-gray-600 mb-6">AI-powered recommendations based on market conditions and capabilities</p>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {strategicOptions.map((option) => (
                            <div
                                key={option.id}
                                onClick={() => setSelectedOption(option.id)}
                                className={`
                                    relative p-4 rounded-xl border-2 cursor-pointer transition-all
                                    ${selectedOption === option.id
                                        ? 'border-purple-500 bg-purple-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }
                                `}
                            >
                                {/* Score Badge */}
                                <div className="absolute top-4 right-4">
                                    <div className={`
                                        w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg
                                        ${option.score >= 80 ? 'bg-green-100 text-green-700' :
                                            option.score >= 70 ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-orange-100 text-orange-700'}
                                    `}>
                                        {option.score}
                                    </div>
                                </div>

                                <h3 className="font-medium text-gray-900 mb-2">{option.name}</h3>
                                <p className="text-xs text-gray-600 mb-3">Score: {option.score}/100</p>

                                {/* Key Metrics */}
                                <div className="space-y-2 mb-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Investment</span>
                                        <span className="font-medium text-gray-900">${option.investmentRequired}M</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Time to Value</span>
                                        <span className="font-medium text-gray-900">{option.timeToValue}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Risk Profile</span>
                                        <span className={`font-medium capitalize ${option.riskProfile === 'conservative' ? 'text-green-600' :
                                                option.riskProfile === 'moderate' ? 'text-yellow-600' :
                                                    'text-red-600'
                                            }`}>
                                            {option.riskProfile}
                                        </span>
                                    </div>
                                </div>

                                {/* Pros and Cons Summary */}
                                <div className="text-xs text-gray-600">
                                    <p>✓ {option.pros.length} advantages</p>
                                    <p>✗ {option.cons.length} challenges</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Selected Option Details */}
                    {selectedOption && (() => {
                        const option = strategicOptions.find(o => o.id === selectedOption);
                        return option && (
                            <div className="p-4 bg-purple-50 rounded-lg">
                                <h4 className="font-medium text-purple-900 mb-4">{option.name} - Detailed Analysis</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <h5 className="text-sm font-medium text-purple-800 mb-2">Pros</h5>
                                        <ul className="space-y-1">
                                            {option.pros.map((pro, index) => (
                                                <li key={index} className="text-sm text-purple-700 flex items-start">
                                                    <CheckCircle className="h-4 w-4 text-green-600 mr-1 mt-0.5" />
                                                    {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-medium text-purple-800 mb-2">Cons</h5>
                                        <ul className="space-y-1">
                                            {option.cons.map((con, index) => (
                                                <li key={index} className="text-sm text-purple-700 flex items-start">
                                                    <X className="h-4 w-4 text-red-600 mr-1 mt-0.5" />
                                                    {con}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-medium text-purple-800 mb-2">Success Factors</h5>
                                        <ul className="space-y-1">
                                            {option.successFactors.map((factor, index) => (
                                                <li key={index} className="text-sm text-purple-700 flex items-start">
                                                    <Target className="h-4 w-4 text-purple-600 mr-1 mt-0.5" />
                                                    {factor}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}

                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-3 mt-6">
                        <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                            <BarChart3 className="h-5 w-5 inline mr-2" />
                            Model Details
                        </button>
                        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <FileText className="h-5 w-5 inline mr-2" />
                            Create Presentation
                        </button>
                        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            <Calendar className="h-5 w-5 inline mr-2" />
                            Schedule Strategy Session
                        </button>
                    </div>
                </motion.section>
            </div>
        </div>
    );
} 