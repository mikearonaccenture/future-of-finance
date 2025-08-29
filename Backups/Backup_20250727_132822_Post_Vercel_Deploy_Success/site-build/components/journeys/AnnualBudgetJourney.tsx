'use client';

import { motion } from 'framer-motion';
import {
    AlertCircle,
    ArrowLeft,
    BarChart3,
    Brain,
    Building,
    Calendar,
    CheckCircle,
    ChevronRight,
    GitBranch,
    Layers,
    MessageSquare,
    Settings,
    Target,
    TrendingUp
} from 'lucide-react';
import { useState } from 'react';

interface AnnualBudgetJourneyProps {
    onBack: () => void;
}

interface BudgetProgress {
    stage: string;
    progress: number;
    status: 'on-track' | 'at-risk' | 'delayed';
}

interface Department {
    id: string;
    name: string;
    submitted: number;
    allocated: number;
    aiRecommended: number;
    status: 'submitted' | 'in-review' | 'approved' | 'rejected';
    justification: string;
    children?: Department[];
}

interface BudgetScenario {
    id: string;
    name: string;
    selected: boolean;
    impact: {
        revenue: number;
        margin: number;
        headcount: number;
        initiatives: string;
    };
}

export default function AnnualBudgetJourney({ onBack }: AnnualBudgetJourneyProps) {
    const [expandedDepts, setExpandedDepts] = useState<string[]>(['sales', 'marketing']);
    const [selectedScenarios, setSelectedScenarios] = useState<string[]>(['target-margin']);
    const [activeView, setActiveView] = useState<'overview' | 'builder' | 'scenarios'>('overview');

    // Mock data
    const budgetProgress: BudgetProgress[] = [
        { stage: 'Data Collection', progress: 80, status: 'on-track' },
        { stage: 'Department Reviews', progress: 60, status: 'on-track' },
        { stage: 'Consolidation', progress: 40, status: 'on-track' },
        { stage: 'Executive Review', progress: 0, status: 'on-track' }
    ];

    const daysToDeadline = 32;
    const overallStatus = 'on-track';

    const aiInsights = {
        totalVariance: 18,
        varianceAmount: 12,
        topROI: [
            { area: 'Digital', roi: 3.2 },
            { area: 'Automation', roi: 2.8 }
        ],
        riskAreas: [
            { area: 'EMEA headcount', variance: '+45%' },
            { area: 'Marketing spend', variance: '+32%' }
        ]
    };

    const departments: Department[] = [
        {
            id: 'sales',
            name: 'Sales',
            submitted: 52.5,
            allocated: 45.0,
            aiRecommended: 48.5,
            status: 'in-review',
            justification: 'Need additional headcount for APAC expansion',
            children: [
                {
                    id: 'sales-na',
                    name: 'North America',
                    submitted: 25.0,
                    allocated: 22.0,
                    aiRecommended: 23.5,
                    status: 'approved',
                    justification: 'Maintaining current team with 5% merit increase'
                },
                {
                    id: 'sales-emea',
                    name: 'EMEA',
                    submitted: 18.5,
                    allocated: 15.0,
                    aiRecommended: 16.0,
                    status: 'in-review',
                    justification: '10 new hires for market expansion'
                },
                {
                    id: 'sales-apac',
                    name: 'APAC',
                    submitted: 9.0,
                    allocated: 8.0,
                    aiRecommended: 9.0,
                    status: 'submitted',
                    justification: 'New office setup and initial team'
                }
            ]
        },
        {
            id: 'marketing',
            name: 'Marketing',
            submitted: 18.5,
            allocated: 14.0,
            aiRecommended: 15.5,
            status: 'in-review',
            justification: 'Digital transformation and brand refresh initiatives'
        },
        {
            id: 'operations',
            name: 'Operations',
            submitted: 78.0,
            allocated: 75.0,
            aiRecommended: 76.0,
            status: 'approved',
            justification: 'Cost optimization through automation'
        },
        {
            id: 'it',
            name: 'IT',
            submitted: 28.0,
            allocated: 23.0,
            aiRecommended: 25.5,
            status: 'submitted',
            justification: 'Cloud migration and cybersecurity upgrades'
        }
    ];

    const budgetScenarios: BudgetScenario[] = [
        {
            id: 'target-margin',
            name: 'Achieve Target Margin',
            selected: true,
            impact: {
                revenue: 485,
                margin: 28.5,
                headcount: 2650,
                initiatives: 'Balanced growth and efficiency'
            }
        },
        {
            id: 'max-growth',
            name: 'Maximize Growth',
            selected: false,
            impact: {
                revenue: 525,
                margin: 25.2,
                headcount: 2850,
                initiatives: 'Aggressive expansion'
            }
        },
        {
            id: 'conservative',
            name: 'Conservative Case',
            selected: false,
            impact: {
                revenue: 455,
                margin: 30.1,
                headcount: 2500,
                initiatives: 'Focus on profitability'
            }
        },
        {
            id: 'board-recommended',
            name: 'Board Recommended',
            selected: false,
            impact: {
                revenue: 495,
                margin: 27.8,
                headcount: 2700,
                initiatives: 'Strategic balance'
            }
        }
    ];

    const getProgressColor = (progress: number) => {
        if (progress >= 80) return 'bg-green-500';
        if (progress >= 60) return 'bg-blue-500';
        if (progress >= 40) return 'bg-yellow-500';
        return 'bg-gray-300';
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'approved': return 'bg-green-100 text-green-700';
            case 'in-review': return 'bg-yellow-100 text-yellow-700';
            case 'submitted': return 'bg-blue-100 text-blue-700';
            case 'rejected': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const toggleDepartment = (deptId: string) => {
        setExpandedDepts(prev =>
            prev.includes(deptId)
                ? prev.filter(id => id !== deptId)
                : [...prev, deptId]
        );
    };

    const toggleScenario = (scenarioId: string) => {
        setSelectedScenarios(prev =>
            prev.includes(scenarioId)
                ? prev.filter(id => id !== scenarioId)
                : [...prev, scenarioId]
        );
    };

    const calculateTotalBudget = (type: 'submitted' | 'allocated' | 'aiRecommended') => {
        return departments.reduce((sum, dept) => sum + dept[type], 0);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-xl font-semibold text-gray-900">Budget Central Command</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 text-sm font-medium rounded-full ${overallStatus === 'on-track' ? 'bg-green-100 text-green-700' :
                                    'bg-yellow-100 text-yellow-700'
                                }`}>
                                {overallStatus === 'on-track' ? 'On Track' : 'At Risk'}
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
                {/* Section 1: Budget Status Dashboard */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Budget Status Dashboard</h2>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-5 w-5 text-gray-600" />
                                <span className="text-sm font-medium text-gray-900">
                                    Days to Deadline: <span className="text-2xl font-bold text-blue-600">{daysToDeadline}</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Progress Tracker */}
                    <div className="space-y-4">
                        {budgetProgress.map((stage, index) => (
                            <div key={index} className="relative">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                                    <span className="text-sm font-semibold text-gray-900">{stage.progress}%</span>
                                </div>
                                <div className="relative h-6 bg-gray-200 rounded-lg overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${stage.progress}%` }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`absolute left-0 top-0 h-full ${getProgressColor(stage.progress)}`}
                                    />
                                    {/* Progress blocks visualization */}
                                    <div className="absolute inset-0 flex">
                                        {Array.from({ length: 10 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className={`flex-1 border-r border-gray-300 ${i === 9 ? 'border-r-0' : ''
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Stats */}
                    <div className="mt-6 grid grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600">Departments Submitted</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">18/24</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600">Total Requested</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">$512M</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600">Target Budget</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">$485M</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600">Variance</p>
                            <p className="text-2xl font-bold text-red-600 mt-1">+$27M</p>
                        </div>
                    </div>
                </motion.section>

                {/* Section 2: AI Budget Insights */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                            <Brain className="h-5 w-5 text-blue-600 mr-2" />
                            AI Analysis of Submitted Budgets
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {/* Total Variance Alert */}
                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                            <AlertCircle className="h-5 w-5 text-red-600 mb-2" />
                            <p className="text-sm font-medium text-red-900">Budget Overage Alert</p>
                            <p className="text-2xl font-bold text-red-900 mt-1">+{aiInsights.totalVariance}%</p>
                            <p className="text-sm text-red-700">Total requests exceed target by ${aiInsights.varianceAmount}M</p>
                        </div>

                        {/* Highest ROI Investments */}
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <TrendingUp className="h-5 w-5 text-green-600 mb-2" />
                            <p className="text-sm font-medium text-green-900">Highest ROI Investments</p>
                            <div className="mt-2 space-y-1">
                                {aiInsights.topROI.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-sm text-green-800">{item.area}</span>
                                        <span className="text-sm font-bold text-green-900">{item.roi}x</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Risk Areas */}
                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <AlertCircle className="h-5 w-5 text-yellow-600 mb-2" />
                            <p className="text-sm font-medium text-yellow-900">Risk Areas</p>
                            <div className="mt-2 space-y-1">
                                {aiInsights.riskAreas.map((area, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-sm text-yellow-800">{area.area}</span>
                                        <span className="text-sm font-bold text-yellow-900">{area.variance}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Layers className="h-4 w-4 inline mr-2" />
                            View Optimization Scenarios
                        </button>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            <Calendar className="h-4 w-4 inline mr-2" />
                            Schedule Budget Reviews
                        </button>
                    </div>
                </motion.section>

                {/* Section 3: Interactive Budget Builder */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Interactive Budget Builder</h2>
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600">Submitted</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                                <span className="text-gray-600">Allocated</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-600">AI Recommended</span>
                            </div>
                        </div>
                    </div>

                    {/* Department Tree View */}
                    <div className="space-y-3">
                        {departments.map((dept) => (
                            <div key={dept.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                <div
                                    className="p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                                    onClick={() => toggleDepartment(dept.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <ChevronRight className={`h-5 w-5 text-gray-600 transition-transform ${expandedDepts.includes(dept.id) ? 'rotate-90' : ''
                                                }`} />
                                            <Building className="h-5 w-5 text-gray-600" />
                                            <span className="font-medium text-gray-900">{dept.name}</span>
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(dept.status)}`}>
                                                {dept.status.replace('-', ' ')}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-6">
                                            <div className="text-right">
                                                <p className="text-xs text-gray-500">Submitted</p>
                                                <p className="text-sm font-bold text-blue-600">${dept.submitted}M</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-500">Allocated</p>
                                                <p className="text-sm font-bold text-gray-900">${dept.allocated}M</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-500">AI Recommended</p>
                                                <p className="text-sm font-bold text-purple-600">${dept.aiRecommended}M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {expandedDepts.includes(dept.id) && (
                                    <div className="border-t border-gray-200">
                                        {/* Sub-departments */}
                                        {dept.children && (
                                            <div className="bg-white">
                                                {dept.children.map((child) => (
                                                    <div key={child.id} className="flex items-center justify-between p-4 pl-12 border-b border-gray-100 last:border-b-0">
                                                        <div className="flex items-center space-x-3">
                                                            <span className="text-sm text-gray-700">{child.name}</span>
                                                            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(child.status)}`}>
                                                                {child.status}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center space-x-6 text-sm">
                                                            <span className="text-blue-600">${child.submitted}M</span>
                                                            <span className="text-gray-900">${child.allocated}M</span>
                                                            <span className="text-purple-600">${child.aiRecommended}M</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Justification Panel */}
                                        <div className="p-4 bg-yellow-50 border-t border-yellow-100">
                                            <div className="flex items-start space-x-2">
                                                <MessageSquare className="h-4 w-4 text-yellow-600 mt-0.5" />
                                                <div>
                                                    <p className="text-sm font-medium text-yellow-900">Justification</p>
                                                    <p className="text-sm text-yellow-800 mt-1">{dept.justification}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Budget Totals */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-sm text-gray-600">Total Submitted</p>
                                <p className="text-xl font-bold text-blue-600">${calculateTotalBudget('submitted')}M</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Allocated</p>
                                <p className="text-xl font-bold text-gray-900">${calculateTotalBudget('allocated')}M</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">AI Recommended</p>
                                <p className="text-xl font-bold text-purple-600">${calculateTotalBudget('aiRecommended')}M</p>
                            </div>
                        </div>
                    </div>

                    {/* Trade-off Simulator */}
                    <div className="mt-4 flex justify-center">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <GitBranch className="h-5 w-5 inline mr-2" />
                            Open Trade-off Simulator
                        </button>
                    </div>
                </motion.section>

                {/* Section 4: Budget Scenario Modeler */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Budget Scenario Modeler</h2>
                        <p className="text-sm text-gray-600">Select scenarios to compare their impact on P&L, headcount, and initiatives</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {budgetScenarios.map((scenario) => (
                            <div
                                key={scenario.id}
                                onClick={() => toggleScenario(scenario.id)}
                                className={`
                                    relative p-6 rounded-xl border-2 cursor-pointer transition-all
                                    ${selectedScenarios.includes(scenario.id)
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }
                                `}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className={`
                                            w-5 h-5 rounded border-2 flex items-center justify-center
                                            ${selectedScenarios.includes(scenario.id)
                                                ? 'border-blue-500 bg-blue-500'
                                                : 'border-gray-300'
                                            }
                                        `}>
                                            {selectedScenarios.includes(scenario.id) && (
                                                <CheckCircle className="h-3 w-3 text-white" />
                                            )}
                                        </div>
                                        <h3 className="font-medium text-gray-900">{scenario.name}</h3>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600">Revenue</p>
                                            <p className="font-bold text-gray-900">${scenario.impact.revenue}M</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Margin</p>
                                            <p className="font-bold text-gray-900">{scenario.impact.margin}%</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Headcount</p>
                                            <p className="font-bold text-gray-900">{scenario.impact.headcount.toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Focus</p>
                                            <p className="font-medium text-gray-900 text-xs">{scenario.impact.initiatives}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scenario Comparison */}
                    {selectedScenarios.length > 0 && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <h4 className="text-sm font-medium text-blue-900 mb-3">Selected Scenarios Comparison</h4>
                            <div className="grid grid-cols-4 gap-4 text-sm">
                                <div className="font-medium text-blue-800">Metric</div>
                                {selectedScenarios.map(id => {
                                    const scenario = budgetScenarios.find(s => s.id === id);
                                    return scenario && (
                                        <div key={id} className="font-medium text-blue-800">
                                            {scenario.name}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="mt-2 space-y-2">
                                {['Revenue', 'Margin %', 'Headcount'].map((metric) => (
                                    <div key={metric} className="grid grid-cols-4 gap-4 text-sm">
                                        <div className="text-blue-700">{metric}</div>
                                        {selectedScenarios.map(id => {
                                            const scenario = budgetScenarios.find(s => s.id === id);
                                            if (!scenario) return null;
                                            const value = metric === 'Revenue' ? `$${scenario.impact.revenue}M` :
                                                metric === 'Margin %' ? `${scenario.impact.margin}%` :
                                                    scenario.impact.headcount.toLocaleString();
                                            return (
                                                <div key={id} className="font-medium text-blue-900">
                                                    {value}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-6 flex justify-center space-x-3">
                        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            <Target className="h-5 w-5 inline mr-2" />
                            Apply Selected Scenario
                        </button>
                        <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                            <BarChart3 className="h-5 w-5 inline mr-2" />
                            Detailed Analysis
                        </button>
                    </div>
                </motion.section>
            </div>
        </div>
    );
} 