'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
    AlertTriangle,
    BarChart3,
    DollarSign,
    Edit3,
    FileText,
    Filter,
    Globe,
    History,
    Link,
    Package,
    Save,
    Search,
    TrendingUp,
    Upload,
    User,
    X
} from 'lucide-react';
import { useState } from 'react';

interface Assumption {
    id: string;
    category: 'pricing' | 'volume' | 'costs' | 'market' | 'economic';
    name: string;
    description: string;
    currentValue: number;
    priorValue: number;
    unit: string;
    source: string;
    lastUpdated: Date;
    owner: string;
    confidenceLevel: 'high' | 'medium' | 'low';
    sensitivity: 'high' | 'medium' | 'low';
    validation: {
        min?: number;
        max?: number;
        rule?: string;
    };
    linkedForecasts: string[];
    history: {
        timestamp: Date;
        oldValue: number;
        newValue: number;
        changedBy: string;
        reason: string;
    }[];
    attachments?: {
        name: string;
        url: string;
        uploadedBy: string;
        uploadedAt: Date;
    }[];
}

interface AssumptionSet {
    id: string;
    name: string;
    description: string;
    assumptions: string[]; // assumption IDs
    createdBy: string;
    createdAt: Date;
    isActive: boolean;
}

export default function AssumptionManagement() {
    const [assumptions, setAssumptions] = useState<Assumption[]>([
        {
            id: '1',
            category: 'pricing',
            name: 'Average Selling Price Growth',
            description: 'Year-over-year price increase for core products',
            currentValue: 3.5,
            priorValue: 3.0,
            unit: '%',
            source: 'Strategic Pricing Committee',
            lastUpdated: new Date('2024-03-01'),
            owner: 'John Smith',
            confidenceLevel: 'high',
            sensitivity: 'high',
            validation: { min: 0, max: 10 },
            linkedForecasts: ['Q2-2025-Revenue', 'FY2025-Plan'],
            history: [
                {
                    timestamp: new Date('2024-03-01'),
                    oldValue: 3.0,
                    newValue: 3.5,
                    changedBy: 'John Smith',
                    reason: 'Updated based on competitive analysis'
                }
            ]
        },
        {
            id: '2',
            category: 'volume',
            name: 'Market Growth Rate',
            description: 'Overall market volume growth expectation',
            currentValue: 5.2,
            priorValue: 4.8,
            unit: '%',
            source: 'Nielsen Market Data',
            lastUpdated: new Date('2024-02-28'),
            owner: 'Sarah Johnson',
            confidenceLevel: 'medium',
            sensitivity: 'high',
            validation: { min: -5, max: 15 },
            linkedForecasts: ['Q2-2025-Volume', 'Strategic-Plan-2025'],
            history: []
        }
    ]);

    const [selectedAssumption, setSelectedAssumption] = useState<Assumption | null>(null);
    const [editingAssumption, setEditingAssumption] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showHistory, setShowHistory] = useState(false);
    const [assumptionSets, setAssumptionSets] = useState<AssumptionSet[]>([]);
    const [activeSet, setActiveSet] = useState<string | null>(null);

    const categories = [
        { id: 'pricing', label: 'Pricing', icon: DollarSign, color: 'blue' },
        { id: 'volume', label: 'Volume', icon: Package, color: 'green' },
        { id: 'costs', label: 'Costs', icon: TrendingUp, color: 'red' },
        { id: 'market', label: 'Market', icon: Globe, color: 'purple' },
        { id: 'economic', label: 'Economic', icon: BarChart3, color: 'indigo' }
    ];

    const getConfidenceColor = (level: string) => {
        switch (level) {
            case 'high': return 'text-green-600 bg-green-50';
            case 'medium': return 'text-yellow-600 bg-yellow-50';
            case 'low': return 'text-red-600 bg-red-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    const getSensitivityColor = (level: string) => {
        switch (level) {
            case 'high': return 'bg-red-100 text-red-700';
            case 'medium': return 'bg-yellow-100 text-yellow-700';
            case 'low': return 'bg-green-100 text-green-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const filteredAssumptions = assumptions.filter(assumption => {
        const matchesCategory = selectedCategory === 'all' || assumption.category === selectedCategory;
        const matchesSearch = assumption.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            assumption.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleUpdateAssumption = (id: string, newValue: number, reason: string) => {
        setAssumptions(prev => prev.map(assumption => {
            if (assumption.id === id) {
                return {
                    ...assumption,
                    priorValue: assumption.currentValue,
                    currentValue: newValue,
                    lastUpdated: new Date(),
                    history: [
                        ...assumption.history,
                        {
                            timestamp: new Date(),
                            oldValue: assumption.currentValue,
                            newValue,
                            changedBy: 'Current User',
                            reason
                        }
                    ]
                };
            }
            return assumption;
        }));
        setEditingAssumption(null);
    };

    const calculateImpact = (assumption: Assumption) => {
        // Simplified impact calculation
        const changePercent = ((assumption.currentValue - assumption.priorValue) / assumption.priorValue) * 100;
        const impactMultiplier = assumption.sensitivity === 'high' ? 2 : assumption.sensitivity === 'medium' ? 1 : 0.5;
        return changePercent * impactMultiplier;
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Assumption Management Center</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage and track all planning assumptions</p>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        <Upload className="h-4 w-4 mr-2 inline" />
                        Import
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        Create Assumption
                    </button>
                </div>
            </div>

            {/* Assumption Sets */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Assumption Sets</h3>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        + New Set
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                        Base Case
                    </button>
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Optimistic
                    </button>
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Conservative
                    </button>
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Stress Test
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Assumption List */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Filters */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                {/* Category Filter */}
                                <div className="flex items-center space-x-2">
                                    <Filter className="h-4 w-4 text-gray-400" />
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="all">All Categories</option>
                                        {categories.map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Search */}
                                <div className="relative">
                                    <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search assumptions..."
                                        className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="text-sm text-gray-500">
                                {filteredAssumptions.length} assumptions
                            </div>
                        </div>
                    </div>

                    {/* Assumption Cards */}
                    <div className="space-y-4">
                        {filteredAssumptions.map(assumption => {
                            const category = categories.find(c => c.id === assumption.category);
                            const Icon = category?.icon || Globe;
                            const impact = calculateImpact(assumption);

                            return (
                                <motion.div
                                    key={assumption.id}
                                    layout
                                    className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
                                    onClick={() => setSelectedAssumption(assumption)}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start space-x-3">
                                            <div className={`p-2 rounded-lg bg-${category?.color || 'gray'}-50`}>
                                                <Icon className={`h-5 w-5 text-${category?.color || 'gray'}-600`} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900">{assumption.name}</h4>
                                                <p className="text-sm text-gray-600 mt-1">{assumption.description}</p>

                                                <div className="flex items-center space-x-4 mt-3">
                                                    <div>
                                                        <span className="text-xs text-gray-500">Current:</span>
                                                        <span className="ml-2 text-sm font-semibold text-gray-900">
                                                            {assumption.currentValue}{assumption.unit}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-xs text-gray-500">Prior:</span>
                                                        <span className="ml-2 text-sm text-gray-600">
                                                            {assumption.priorValue}{assumption.unit}
                                                        </span>
                                                    </div>
                                                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${impact > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                        }`}>
                                                        {impact > 0 ? '+' : ''}{impact.toFixed(1)}% impact
                                                    </div>
                                                </div>

                                                <div className="flex items-center space-x-3 mt-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(assumption.confidenceLevel)}`}>
                                                        {assumption.confidenceLevel} confidence
                                                    </span>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSensitivityColor(assumption.sensitivity)}`}>
                                                        {assumption.sensitivity} sensitivity
                                                    </span>
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <User className="h-3 w-3 mr-1" />
                                                        {assumption.owner}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {editingAssumption === assumption.id ? (
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleUpdateAssumption(assumption.id, assumption.currentValue, 'Manual update');
                                                    }}
                                                    className="p-1 text-green-600 hover:text-green-700"
                                                >
                                                    <Save className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setEditingAssumption(null);
                                                    }}
                                                    className="p-1 text-red-600 hover:text-red-700"
                                                >
                                                    <X className="h-4 w-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setEditingAssumption(assumption.id);
                                                }}
                                                className="p-1 text-gray-400 hover:text-gray-600"
                                            >
                                                <Edit3 className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Validation Warning */}
                                    {assumption.validation && (assumption.currentValue < (assumption.validation.min || -Infinity) ||
                                        assumption.currentValue > (assumption.validation.max || Infinity)) && (
                                            <div className="mt-3 p-2 bg-red-50 rounded-lg flex items-center space-x-2">
                                                <AlertTriangle className="h-4 w-4 text-red-600" />
                                                <span className="text-sm text-red-700">
                                                    Value outside acceptable range ({assumption.validation.min} - {assumption.validation.max})
                                                </span>
                                            </div>
                                        )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Detail Panel */}
                <div className="space-y-4">
                    {selectedAssumption && (
                        <div className="bg-white rounded-xl border border-gray-200 p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Assumption Details</h3>
                                <button
                                    onClick={() => setSelectedAssumption(null)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Metadata */}
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-gray-500">Source</p>
                                    <p className="text-sm font-medium text-gray-900">{selectedAssumption.source}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Last Updated</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        {selectedAssumption.lastUpdated.toLocaleDateString()}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Validation Rule</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        {selectedAssumption.validation.min} - {selectedAssumption.validation.max} {selectedAssumption.unit}
                                    </p>
                                </div>
                            </div>

                            {/* Linked Forecasts */}
                            <div className="mt-4">
                                <p className="text-sm font-medium text-gray-900 mb-2">Linked Forecasts</p>
                                <div className="space-y-1">
                                    {selectedAssumption.linkedForecasts.map(forecast => (
                                        <div key={forecast} className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700">
                                            <Link className="h-3 w-3" />
                                            <span>{forecast}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-4 space-y-2">
                                <button
                                    onClick={() => setShowHistory(true)}
                                    className="w-full px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 flex items-center justify-center space-x-2"
                                >
                                    <History className="h-4 w-4" />
                                    <span>View History</span>
                                </button>
                                <button className="w-full px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 flex items-center justify-center space-x-2">
                                    <FileText className="h-4 w-4" />
                                    <span>Attach Document</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Impact Preview */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Preview</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Revenue Impact</span>
                                <span className="text-sm font-semibold text-green-600">+$2.4M</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Margin Impact</span>
                                <span className="text-sm font-semibold text-red-600">-0.8pp</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Volume Impact</span>
                                <span className="text-sm font-semibold text-green-600">+180K units</span>
                            </div>
                        </div>
                        <button className="w-full mt-4 px-3 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                            Run Full Impact Analysis
                        </button>
                    </div>
                </div>
            </div>

            {/* History Modal */}
            <AnimatePresence>
                {showHistory && selectedAssumption && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
                        onClick={() => setShowHistory(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Change History: {selectedAssumption.name}
                                    </h3>
                                    <button
                                        onClick={() => setShowHistory(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 overflow-y-auto max-h-[60vh]">
                                <div className="space-y-4">
                                    {selectedAssumption.history.map((change, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="p-2 bg-gray-100 rounded-full">
                                                <User className="h-4 w-4 text-gray-600" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2">
                                                    <span className="font-medium text-gray-900">{change.changedBy}</span>
                                                    <span className="text-sm text-gray-500">
                                                        {change.timestamp.toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className="mt-1">
                                                    <span className="text-sm text-gray-600">Changed from </span>
                                                    <span className="text-sm font-medium text-gray-900">
                                                        {change.oldValue}{selectedAssumption.unit}
                                                    </span>
                                                    <span className="text-sm text-gray-600"> to </span>
                                                    <span className="text-sm font-medium text-gray-900">
                                                        {change.newValue}{selectedAssumption.unit}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1">{change.reason}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 