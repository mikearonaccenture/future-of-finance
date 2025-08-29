'use client';

import {
    AlertCircle,
    ArrowLeft,
    CheckCircle,
    Clock,
    Copy,
    FileText,
    GitBranch,
    MessageSquare,
    Minus, Plus,
    Save,
    Trash2,
    XCircle
} from 'lucide-react';
import { useState } from 'react';

interface ForecastVersion {
    id: string;
    name: string;
    author: string;
    timestamp: string;
    status: 'draft' | 'in-review' | 'approved' | 'rejected';
    changes: number;
    comments: number;
}

interface AdjustmentRow {
    id: string;
    category: string;
    product: string;
    currentForecast: number;
    adjustment: number;
    newForecast: number;
    reason?: string;
    confidence: 'high' | 'medium' | 'low';
}

export default function AdjustForecastView({ onBack }: { onBack: () => void }) {
    const [activeVersion, setActiveVersion] = useState('v1');
    const [showComments, setShowComments] = useState(false);
    const [adjustments, setAdjustments] = useState<AdjustmentRow[]>([
        {
            id: '1',
            category: 'Digital Products',
            product: 'Software Licenses',
            currentForecast: 45600,
            adjustment: 2300,
            newForecast: 47900,
            reason: 'New enterprise deal closing Q3',
            confidence: 'high'
        },
        {
            id: '2',
            category: 'Digital Products',
            product: 'Cloud Services',
            currentForecast: 32100,
            adjustment: -1200,
            newForecast: 30900,
            reason: 'Customer churn higher than expected',
            confidence: 'medium'
        },
        {
            id: '3',
            category: 'Physical Products',
            product: 'Hardware Sales',
            currentForecast: 28900,
            adjustment: 0,
            newForecast: 28900,
            confidence: 'high'
        },
        {
            id: '4',
            category: 'Services',
            product: 'Consulting',
            currentForecast: 18700,
            adjustment: 1500,
            newForecast: 20200,
            reason: 'Additional project approved',
            confidence: 'medium'
        }
    ]);

    const versions: ForecastVersion[] = [
        {
            id: 'v1',
            name: 'Q3 Base Forecast',
            author: 'ML Model',
            timestamp: '2 hours ago',
            status: 'approved',
            changes: 0,
            comments: 0
        },
        {
            id: 'v2',
            name: 'Sales Team Input',
            author: 'Sarah Chen',
            timestamp: '1 hour ago',
            status: 'in-review',
            changes: 4,
            comments: 3
        },
        {
            id: 'v3',
            name: 'Executive Adjustment',
            author: 'Michael Ross',
            timestamp: '30 mins ago',
            status: 'draft',
            changes: 2,
            comments: 1
        }
    ];

    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value * 1000);
    };

    const getAdjustmentColor = (adjustment: number): string => {
        if (adjustment > 0) return 'text-green-600';
        if (adjustment < 0) return 'text-red-600';
        return 'text-gray-500';
    };

    const getConfidenceColor = (confidence: string): string => {
        switch (confidence) {
            case 'high': return 'bg-green-100 text-green-800';
            case 'medium': return 'bg-yellow-100 text-yellow-800';
            case 'low': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'approved': return <CheckCircle className="h-4 w-4 text-green-600" />;
            case 'rejected': return <XCircle className="h-4 w-4 text-red-600" />;
            case 'in-review': return <Clock className="h-4 w-4 text-yellow-600" />;
            default: return <FileText className="h-4 w-4 text-gray-600" />;
        }
    };

    const handleAdjustmentChange = (id: string, newAdjustment: number) => {
        setAdjustments(prev => prev.map(row => {
            if (row.id === id) {
                return {
                    ...row,
                    adjustment: newAdjustment,
                    newForecast: row.currentForecast + newAdjustment
                };
            }
            return row;
        }));
    };

    const totalCurrentForecast = adjustments.reduce((sum, row) => sum + row.currentForecast, 0);
    const totalAdjustment = adjustments.reduce((sum, row) => sum + row.adjustment, 0);
    const totalNewForecast = adjustments.reduce((sum, row) => sum + row.newForecast, 0);

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
                        <h1 className="text-xl font-semibold text-gray-900">Adjust Forecast</h1>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => setShowComments(!showComments)}
                            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border ${showComments
                                    ? 'bg-blue-50 border-blue-300 text-blue-700'
                                    : 'bg-white border-gray-300 text-gray-700'
                                }`}
                        >
                            <MessageSquare className="h-4 w-4" />
                            <span className="text-sm">Comments (4)</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                            <GitBranch className="h-4 w-4" />
                            <span>Create Version</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            <Save className="h-4 w-4" />
                            <span>Save Changes</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex h-[calc(100vh-4rem)]">
                {/* Version Sidebar */}
                <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-sm font-semibold text-gray-900 mb-1">Forecast Versions</h2>
                        <p className="text-xs text-gray-600">Compare and manage different scenarios</p>
                    </div>

                    <div className="p-2">
                        {versions.map(version => (
                            <div
                                key={version.id}
                                onClick={() => setActiveVersion(version.id)}
                                className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors ${activeVersion === version.id
                                        ? 'bg-blue-50 border border-blue-300'
                                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">{version.name}</h3>
                                        <p className="text-xs text-gray-600">{version.author} • {version.timestamp}</p>
                                    </div>
                                    {getStatusIcon(version.status)}
                                </div>

                                <div className="flex items-center space-x-4 text-xs">
                                    <span className="text-gray-600">
                                        {version.changes} changes
                                    </span>
                                    <span className="text-gray-600">
                                        {version.comments} comments
                                    </span>
                                </div>

                                <div className="mt-2">
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${version.status === 'approved' ? 'bg-green-100 text-green-800' :
                                            version.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                version.status === 'in-review' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-gray-100 text-gray-800'
                                        }`}>
                                        {version.status.replace('-', ' ')}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto">
                    {/* Summary Stats */}
                    <div className="bg-white border-b border-gray-200 px-6 py-4">
                        <div className="grid grid-cols-4 gap-6">
                            <div>
                                <p className="text-sm text-gray-600">Current Forecast</p>
                                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalCurrentForecast)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Adjustments</p>
                                <p className={`text-2xl font-bold ${getAdjustmentColor(totalAdjustment)}`}>
                                    {totalAdjustment > 0 ? '+' : ''}{formatCurrency(totalAdjustment)}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">New Forecast</p>
                                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalNewForecast)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Change %</p>
                                <p className={`text-2xl font-bold ${getAdjustmentColor(totalAdjustment)}`}>
                                    {totalAdjustment > 0 ? '+' : ''}{((totalAdjustment / totalCurrentForecast) * 100).toFixed(1)}%
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Adjustments Table */}
                    <div className="p-6">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Category / Product</th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">Current Forecast</th>
                                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">Adjustment</th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">New Forecast</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Reason</th>
                                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">Confidence</th>
                                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {adjustments.map((row, index) => (
                                        <tr key={row.id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{row.product}</p>
                                                    <p className="text-xs text-gray-500">{row.category}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm text-gray-900">
                                                {formatCurrency(row.currentForecast)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-center space-x-2">
                                                    <button
                                                        onClick={() => handleAdjustmentChange(row.id, row.adjustment - 100)}
                                                        className="p-1 rounded hover:bg-gray-200"
                                                    >
                                                        <Minus className="h-4 w-4 text-gray-600" />
                                                    </button>
                                                    <input
                                                        type="number"
                                                        value={row.adjustment}
                                                        onChange={(e) => handleAdjustmentChange(row.id, parseInt(e.target.value) || 0)}
                                                        className={`w-24 px-2 py-1 text-center text-sm font-medium rounded border ${row.adjustment !== 0 ? 'border-blue-300 bg-blue-50' : 'border-gray-300'
                                                            } ${getAdjustmentColor(row.adjustment)}`}
                                                    />
                                                    <button
                                                        onClick={() => handleAdjustmentChange(row.id, row.adjustment + 100)}
                                                        className="p-1 rounded hover:bg-gray-200"
                                                    >
                                                        <Plus className="h-4 w-4 text-gray-600" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                                                {formatCurrency(row.newForecast)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <input
                                                    type="text"
                                                    value={row.reason || ''}
                                                    placeholder="Add reason..."
                                                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                                />
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(row.confidence)}`}>
                                                    {row.confidence}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <div className="flex items-center justify-center space-x-2">
                                                    <button className="p-1 text-gray-400 hover:text-gray-600">
                                                        <Copy className="h-4 w-4" />
                                                    </button>
                                                    <button className="p-1 text-gray-400 hover:text-gray-600">
                                                        <MessageSquare className="h-4 w-4" />
                                                    </button>
                                                    <button className="p-1 text-gray-400 hover:text-red-600">
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Add New Adjustment */}
                        <div className="mt-4">
                            <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors">
                                <Plus className="h-5 w-5 inline mr-2" />
                                Add New Adjustment
                            </button>
                        </div>
                    </div>
                </div>

                {/* Comments Panel */}
                {showComments && (
                    <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-semibold text-gray-900">Comments & Discussion</h2>
                                <button
                                    onClick={() => setShowComments(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <XCircle className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="p-4 space-y-4">
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-medium">SC</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">Sarah Chen</p>
                                        <p className="text-xs text-gray-600">1 hour ago</p>
                                        <p className="text-sm text-gray-700 mt-1">
                                            The software licenses adjustment looks good based on the pipeline review.
                                            We have verbal confirmation from Enterprise Client X.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 rounded-lg p-3">
                                <div className="flex items-start space-x-3">
                                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">System Alert</p>
                                        <p className="text-xs text-gray-600">30 mins ago</p>
                                        <p className="text-sm text-gray-700 mt-1">
                                            Cloud Services adjustment exceeds 5% threshold and requires VP approval.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t border-gray-200">
                            <textarea
                                placeholder="Add a comment..."
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                rows={3}
                            />
                            <button className="mt-2 w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                                Post Comment
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 