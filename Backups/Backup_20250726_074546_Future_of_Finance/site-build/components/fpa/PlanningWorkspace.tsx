'use client';

import { motion } from 'framer-motion';
import {
    BarChart3,
    Calculator,
    Calendar,
    ChevronRight,
    Download,
    GitBranch,
    Grid3x3,
    History,
    Settings,
    Shield,
    Upload,
    User
} from 'lucide-react';
import { useState } from 'react';
import AssumptionManagement from './AssumptionManagement';
import DriverBasedPlanning from './DriverBasedPlanning';
import ForecastInputGrid from './ForecastInputGrid';
import PlannerDashboard from './PlannerDashboard';

type WorkspaceView = 'dashboard' | 'forecast-grid' | 'assumptions' | 'drivers' | 'workflow' | 'variance';

interface Product {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    sku: string;
    hierarchy: string[];
}

export default function PlanningWorkspace() {
    const [activeView, setActiveView] = useState<WorkspaceView>('dashboard');

    // Mock data for demonstration
    const mockProducts: Product[] = [
        {
            id: 'prod-1',
            name: 'Premium Widget A',
            category: 'Premium Products',
            subcategory: 'Widgets',
            sku: 'PWA-001',
            hierarchy: ['Consumer Goods', 'Premium Products', 'Widgets']
        },
        {
            id: 'prod-2',
            name: 'Standard Widget B',
            category: 'Standard Products',
            subcategory: 'Widgets',
            sku: 'SWB-001',
            hierarchy: ['Consumer Goods', 'Standard Products', 'Widgets']
        },
        {
            id: 'prod-3',
            name: 'Premium Gadget X',
            category: 'Premium Products',
            subcategory: 'Gadgets',
            sku: 'PGX-001',
            hierarchy: ['Consumer Goods', 'Premium Products', 'Gadgets']
        }
    ];

    const mockPeriods = ['Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025'];

    const navigationItems = [
        {
            id: 'dashboard',
            label: 'My Dashboard',
            icon: User,
            description: 'Personal tasks and metrics'
        },
        {
            id: 'forecast-grid',
            label: 'Forecast Input',
            icon: Grid3x3,
            description: 'Excel-like forecast entry'
        },
        {
            id: 'assumptions',
            label: 'Assumptions',
            icon: Settings,
            description: 'Manage planning assumptions'
        },
        {
            id: 'drivers',
            label: 'Driver Planning',
            icon: GitBranch,
            description: 'Business driver modeling'
        },
        {
            id: 'workflow',
            label: 'Workflow',
            icon: Calendar,
            description: 'Approval and submission flow'
        },
        {
            id: 'variance',
            label: 'Variance Analysis',
            icon: BarChart3,
            description: 'Detailed variance workbench'
        }
    ];

    const handleSaveGrid = (data: any) => {
        console.log('Saving grid data:', data);
        // In a real app, this would save to backend
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                {/* Sidebar Navigation */}
                <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Planning Workspace</h2>
                        <p className="text-sm text-gray-500 mt-1">Detailed forecast management</p>
                    </div>

                    <nav className="p-4 space-y-1">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveView(item.id as WorkspaceView)}
                                className={`w-full flex items-start space-x-3 px-3 py-2 rounded-lg transition-colors ${activeView === item.id
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                <item.icon className={`h-5 w-5 mt-0.5 ${activeView === item.id ? 'text-blue-700' : 'text-gray-400'
                                    }`} />
                                <div className="flex-1 text-left">
                                    <p className={`text-sm font-medium ${activeView === item.id ? 'text-blue-700' : 'text-gray-900'
                                        }`}>
                                        {item.label}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                                </div>
                                {activeView === item.id && (
                                    <ChevronRight className="h-4 w-4 text-blue-700" />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Quick Actions */}
                    <div className="p-4 border-t border-gray-200">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Quick Actions
                        </p>
                        <div className="space-y-2">
                            <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                                <Upload className="h-4 w-4" />
                                <span>Import Data</span>
                            </button>
                            <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                                <Download className="h-4 w-4" />
                                <span>Export Template</span>
                            </button>
                            <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                                <History className="h-4 w-4" />
                                <span>Version History</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-auto">
                    <motion.div
                        key={activeView}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-6"
                    >
                        {activeView === 'dashboard' && <PlannerDashboard />}

                        {activeView === 'forecast-grid' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Forecast Input Grid</h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Enter and manage detailed forecast data by product and period
                                    </p>
                                </div>
                                <ForecastInputGrid
                                    products={mockProducts}
                                    periods={mockPeriods}
                                    onSave={handleSaveGrid}
                                />
                            </div>
                        )}

                        {activeView === 'assumptions' && <AssumptionManagement />}

                        {activeView === 'drivers' && <DriverBasedPlanning />}

                        {activeView === 'workflow' && (
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Forecast Workflow</h2>
                                <div className="space-y-4">
                                    {/* Workflow Status Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-600">Not Started</span>
                                                <span className="text-2xl font-bold text-gray-900">3</span>
                                            </div>
                                            <div className="text-xs text-gray-500">Business Units</div>
                                        </div>
                                        <div className="bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-blue-600">In Progress</span>
                                                <span className="text-2xl font-bold text-blue-900">5</span>
                                            </div>
                                            <div className="text-xs text-blue-500">Business Units</div>
                                        </div>
                                        <div className="bg-yellow-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-yellow-600">Under Review</span>
                                                <span className="text-2xl font-bold text-yellow-900">2</span>
                                            </div>
                                            <div className="text-xs text-yellow-500">Business Units</div>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-green-600">Approved</span>
                                                <span className="text-2xl font-bold text-green-900">4</span>
                                            </div>
                                            <div className="text-xs text-green-500">Business Units</div>
                                        </div>
                                    </div>

                                    {/* Workflow Items */}
                                    <div className="mt-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Submission Status</h3>
                                        <div className="space-y-3">
                                            <div className="bg-white border border-gray-200 rounded-lg p-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">North America Region</h4>
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            Last updated: 2 hours ago by John Smith
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                                                            In Progress
                                                        </span>
                                                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                                            View Details →
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-3 flex items-center space-x-4 text-sm text-gray-600">
                                                    <span>75% Complete</span>
                                                    <span>•</span>
                                                    <span>3 validations pending</span>
                                                    <span>•</span>
                                                    <span>Due: March 15</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeView === 'variance' && (
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Variance Analysis Workbench</h2>
                                <div className="space-y-6">
                                    {/* Variance Summary */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-red-50 rounded-lg p-4">
                                            <h3 className="text-sm font-medium text-red-900">Unfavorable Variances</h3>
                                            <p className="text-2xl font-bold text-red-900 mt-2">-$2.4M</p>
                                            <p className="text-sm text-red-700 mt-1">23 items</p>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4">
                                            <h3 className="text-sm font-medium text-green-900">Favorable Variances</h3>
                                            <p className="text-2xl font-bold text-green-900 mt-2">+$1.8M</p>
                                            <p className="text-sm text-green-700 mt-1">18 items</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <h3 className="text-sm font-medium text-gray-900">Net Variance</h3>
                                            <p className="text-2xl font-bold text-gray-900 mt-2">-$0.6M</p>
                                            <p className="text-sm text-gray-700 mt-1">-2.1% vs Budget</p>
                                        </div>
                                    </div>

                                    {/* Variance Categories */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Variance by Category</h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center space-x-3">
                                                    <Calculator className="h-5 w-5 text-gray-600" />
                                                    <div>
                                                        <p className="font-medium text-gray-900">Volume</p>
                                                        <p className="text-sm text-gray-500">Lower sales volume in Q1</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold text-red-600">-$1.2M</p>
                                                    <p className="text-sm text-gray-500">-4.5%</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center space-x-3">
                                                    <Shield className="h-5 w-5 text-gray-600" />
                                                    <div>
                                                        <p className="font-medium text-gray-900">Price</p>
                                                        <p className="text-sm text-gray-500">Better pricing realization</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold text-green-600">+$0.8M</p>
                                                    <p className="text-sm text-gray-500">+3.0%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 