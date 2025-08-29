'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
    Activity,
    ArrowLeft,
    BarChart3,
    Download,
    FileText,
    Globe,
    RefreshCw,
    Settings,
    Share2,
    Sparkles,
    Target
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Import sub-components (we'll create these next)
import Analytics from './Analytics';
import BusinessNarrative from './BusinessNarrative';
import Custom from './Custom';
import DataView from './DataView';
import ExecutiveSummary from './ExecutiveSummary';

export default function MarketDemandConsole() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('executive-summary');
    const [lastUpdated, setLastUpdated] = useState(new Date());

    // Tab configuration
    const tabs = [
        { id: 'executive-summary', name: 'Executive Summary', icon: Target },
        { id: 'business-narrative', name: 'Business Narrative', icon: FileText },
        { id: 'analytics', name: 'Analytics', icon: BarChart3 },
        { id: 'data-view', name: 'Data View', icon: Activity },
        { id: 'custom', name: 'Custom', icon: Settings }
    ];

    const handleRefresh = () => {
        setLastUpdated(new Date());
        // Trigger data refresh logic here
    };

    return (
        <div className="bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/functions/fpa/management-reporting/business-consoles"
                                className="group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">Back to Consoles</span>
                            </Link>
                            <div className="h-4 w-px bg-gray-300" />
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">Market & Demand Console</h1>
                                    <p className="text-sm text-gray-500">
                                        Commercial Performance • Last updated: {lastUpdated.toLocaleTimeString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={handleRefresh}
                                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                            >
                                <RefreshCw className="w-5 h-5" />
                            </button>
                            <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                                <Download className="w-4 h-4" />
                                <span className="text-sm font-medium">Export</span>
                            </button>
                            <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                                <Share2 className="w-4 h-4" />
                                <span className="text-sm font-medium">Share</span>
                            </button>
                            <button className="flex items-center space-x-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-sm font-medium">AI Insights</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-all
                                        ${activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }
                                    `}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{tab.name}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <AnimatePresence mode="wait">
                    {activeTab === 'executive-summary' && (
                        <motion.div
                            key="executive-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ExecutiveSummary />
                        </motion.div>
                    )}
                    {activeTab === 'business-narrative' && (
                        <motion.div
                            key="business-narrative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <BusinessNarrative />
                        </motion.div>
                    )}
                    {activeTab === 'analytics' && (
                        <motion.div
                            key="analytics"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Analytics />
                        </motion.div>
                    )}
                    {activeTab === 'data-view' && (
                        <motion.div
                            key="data-view"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <DataView />
                        </motion.div>
                    )}
                    {activeTab === 'custom' && (
                        <motion.div
                            key="custom"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Custom />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
} 