'use client';

import { automotiveBusinessDimensions, consoleCategories } from '@/lib/automotive-business-dimensions';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Activity,
    AlertCircle,
    ArrowRight,
    BarChart3,
    Building,
    CheckCircle,
    ChevronRight,
    Clock,
    DollarSign,
    Factory,
    Globe,
    Grid,
    Leaf,
    Maximize2,
    Package,
    Search,
    Shield,
    Smartphone,
    Target,
    TrendingDown,
    TrendingUp,
    Truck,
    Wrench
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Map icon names to components
const iconMap: { [key: string]: any } = {
    Globe,
    Package,
    TrendingUp,
    DollarSign,
    Factory,
    Truck,
    Wrench,
    Smartphone,
    BarChart3,
    Building,
    TrendingDown,
    Shield,
    Target,
    Leaf
};

// Console performance data with more detail
const consolePerformance: { [key: string]: any } = {
    'market-demand': {
        current: 18.2,
        target: 20,
        trend: -0.3,
        status: 'attention',
        lastUpdated: '2 hours ago',
        keyInsights: [
            'SUV segment share increased to 45% of sales',
            'EV demand growing 35% YoY but below forecast'
        ],
        metrics: {
            'Market Share': { value: '18.2%', change: -0.3 },
            'Segment Growth': { value: '8.5%', change: 2.1 }
        }
    },
    'product-portfolio': {
        current: 42,
        target: 45,
        trend: 2.1,
        status: 'on-track',
        lastUpdated: '1 hour ago',
        keyInsights: [
            'New EV models achieving 120% of target',
            'Luxury trim take rate up 8%'
        ],
        metrics: {
            'Model Mix %': { value: '42%', change: 2.1 },
            'Launch Success Rate': { value: '87%', change: 5.2 }
        }
    },
    'volume-production': {
        current: 2.8,
        target: 3.2,
        trend: 8.5,
        status: 'on-track',
        lastUpdated: '30 min ago',
        keyInsights: [
            'Production efficiency improved 12%',
            'Inventory turns at optimal levels'
        ],
        metrics: {
            'Production Volume': { value: '2.8M', change: 8.5 },
            'Capacity Utilization': { value: '87.5%', change: 3.2 }
        }
    },
    'pricing-revenue': {
        current: 48.5,
        target: 52,
        trend: 3.2,
        status: 'on-track',
        lastUpdated: '1 hour ago',
        keyInsights: [
            'ATP increased $2,500 per unit',
            'Incentive spend reduced by 18%'
        ],
        metrics: {
            'Avg Transaction Price': { value: '$48.5K', change: 3.2 },
            'Revenue per Unit': { value: '$52K', change: 5.1 }
        }
    },
    'manufacturing-quality': {
        current: 95.2,
        target: 98,
        trend: -1.2,
        status: 'critical',
        lastUpdated: '3 hours ago',
        keyInsights: [
            'Quality scores impacted by supplier issues',
            'Warranty claims up 15% vs prior year'
        ],
        metrics: {
            'Quality Score': { value: '95.2%', change: -1.2 },
            'First Pass Yield': { value: '92.1%', change: -2.3 }
        }
    },
    'supply-chain': {
        current: 87,
        target: 95,
        trend: -5.2,
        status: 'critical',
        lastUpdated: '1 hour ago',
        keyInsights: [
            'Chip shortage impacting production',
            'Alternative suppliers qualified for 60% of parts'
        ],
        metrics: {
            'Supply Chain Health': { value: '87%', change: -5.2 },
            'On-Time Delivery': { value: '82%', change: -8.1 }
        }
    },
    'service-aftermarket': {
        current: 82,
        target: 85,
        trend: 2.5,
        status: 'on-track',
        lastUpdated: '2 hours ago',
        keyInsights: [
            'Service retention at all-time high',
            'Parts e-commerce revenue up 45%'
        ],
        metrics: {
            'Service Retention': { value: '82%', change: 2.5 },
            'Parts Revenue': { value: '+28%', change: 4.2 }
        }
    },
    'digital-innovation': {
        current: 68,
        target: 75,
        trend: 12.3,
        status: 'on-track',
        lastUpdated: '4 hours ago',
        keyInsights: [
            'OTA updates adopted by 68% of fleet',
            'Digital sales channel growing 35% MoM'
        ],
        metrics: {
            'Digital Adoption': { value: '68%', change: 12.3 },
            'Connected Services': { value: '45%', change: 8.7 }
        }
    },
    'financial-results': {
        current: 14.2,
        target: 16,
        trend: -0.8,
        status: 'attention',
        lastUpdated: '30 min ago',
        keyInsights: [
            'EBIT margin impacted by commodity costs',
            'Working capital improvement of $500M'
        ],
        metrics: {
            'EBIT Margin': { value: '14.2%', change: -0.8 },
            'Free Cash Flow': { value: '$2.1B', change: 5.2 }
        }
    },
    'capital-allocation': {
        current: 18.5,
        target: 22,
        trend: 1.2,
        status: 'on-track',
        lastUpdated: '1 hour ago',
        keyInsights: [
            'EV investments on track at $5B',
            'Manufacturing optimization saving $200M'
        ],
        metrics: {
            'ROIC': { value: '18.5%', change: 1.2 },
            'Capex Efficiency': { value: '92%', change: 3.1 }
        }
    },
    'cost-productivity': {
        current: 2500,
        target: 2000,
        trend: -8.2,
        status: 'critical',
        lastUpdated: '2 hours ago',
        keyInsights: [
            'Material costs up $2,500 per vehicle',
            'Labor productivity improved 8%'
        ],
        metrics: {
            'Cost per Vehicle': { value: '+$2.5K', change: 8.2 },
            'Productivity': { value: '+8%', change: 3.1 }
        }
    },
    'risk-compliance': {
        current: 98,
        target: 100,
        trend: 0,
        status: 'on-track',
        lastUpdated: '5 hours ago',
        keyInsights: [
            'Zero safety recalls in 12 months',
            'Cybersecurity maturity improved to A+'
        ],
        metrics: {
            'Compliance Score': { value: '98%', change: 0 },
            'Risk Mitigation': { value: '95%', change: 2.1 }
        }
    },
    'competitive-intelligence': {
        current: 73,
        target: 80,
        trend: -2.1,
        status: 'attention',
        lastUpdated: '3 hours ago',
        keyInsights: [
            'Tesla maintaining price pressure',
            'Chinese OEMs entering key markets'
        ],
        metrics: {
            'Competitive Index': { value: '73', change: -2.1 },
            'Market Position': { value: '#3', change: 0 }
        }
    },
    'sustainability-esg': {
        current: 45,
        target: 60,
        trend: 5.2,
        status: 'on-track',
        lastUpdated: '1 day ago',
        keyInsights: [
            'Carbon neutral in 3 plants',
            'EV mix reached 18% of sales'
        ],
        metrics: {
            'ESG Score': { value: '45/60', change: 5.2 },
            'Carbon Reduction': { value: '-23%', change: 8.1 }
        }
    }
};

// Driver tree data for each console
const driverTreeData: { [key: string]: any } = {
    default: {
        name: 'Select a Console',
        value: 'Choose a business console to view its performance drivers',
        change: 0,
        children: []
    },
    'market-demand': {
        name: 'Market Share',
        value: '18.2%',
        change: -0.3,
        children: [
            {
                name: 'Revenue',
                value: '↓ 2.96%',
                change: -2.96,
                children: [
                    { name: 'Volume', value: '↑ 2.8M units', change: 8.5 },
                    { name: 'Price/Mix', value: '↓ 5.1%', change: -5.1 }
                ]
            },
            {
                name: 'SG&A',
                value: '↑ 3.11%',
                change: 3.11,
                children: [
                    { name: 'Marketing', value: '↑ 4.2%', change: 4.2 },
                    { name: 'Distribution', value: '↑ 2.1%', change: 2.1 }
                ]
            },
            {
                name: 'COGS',
                value: '↑ 23.8%',
                change: 23.8,
                children: [
                    {
                        name: 'Raw Materials',
                        value: '↑ 25.5%',
                        change: 25.5,
                        children: [
                            { name: 'Steel', value: '↑ 18%', change: 18 },
                            { name: 'Chips', value: '↑ 42%', change: 42 }
                        ]
                    },
                    { name: 'Labor', value: '↑ 5.9%', change: 5.9 },
                    { name: 'Overhead', value: '↑ 1.4%', change: 1.4 }
                ]
            }
        ]
    },
    'product-portfolio': {
        name: 'Portfolio Performance',
        value: '42% Mix',
        change: 2.1,
        children: [
            {
                name: 'EV Models',
                value: '↑ 120%',
                change: 120,
                children: [
                    { name: 'Luxury EV', value: '↑ 15%', change: 15 },
                    { name: 'Mass Market EV', value: '↑ 8%', change: 8 }
                ]
            },
            {
                name: 'ICE Models',
                value: '↓ 5%',
                change: -5,
                children: [
                    { name: 'SUVs', value: '↑ 3%', change: 3 },
                    { name: 'Sedans', value: '↓ 12%', change: -12 }
                ]
            }
        ]
    },
    // Add more driver trees for other consoles as needed
};

export default function BusinessInsightConsoles() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedConsole, setSelectedConsole] = useState<string>('market-demand');

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'on-track':
                return <CheckCircle className="w-4 h-4 text-green-500" />;
            case 'attention':
                return <AlertCircle className="w-4 h-4 text-yellow-500" />;
            case 'critical':
                return <AlertCircle className="w-4 h-4 text-red-500" />;
            default:
                return <Activity className="w-4 h-4 text-gray-500" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'on-track':
                return 'text-green-600 bg-green-50 border-green-200';
            case 'attention':
                return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'critical':
                return 'text-red-600 bg-red-50 border-red-200';
            default:
                return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

    const filteredConsoles = automotiveBusinessDimensions.filter(console => {
        const matchesSearch = console.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            console.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || console.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Driver Tree Component with enhanced visuals
    const DriverNode = ({ node, level }: { node: any; level: number }) => {
        const [isExpanded, setIsExpanded] = useState(level < 2);
        const hasChildren = node.children && node.children.length > 0;

        return (
            <div className="relative">
                {/* Connecting line for child nodes */}
                {level > 0 && (
                    <div className="absolute left-0 top-0 w-8 h-full">
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300"></div>
                        <div className="absolute left-0 top-6 w-4 h-px bg-gray-300"></div>
                    </div>
                )}

                <div className={`${level > 0 ? 'ml-8' : ''}`}>
                    <div
                        className={`relative flex items-center justify-between p-3 rounded-lg transition-all ${level === 0 ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 shadow-md' :
                            level === 1 ? 'bg-white border border-gray-200 shadow-sm' :
                                'bg-gray-50 border border-gray-200'
                            } ${hasChildren ? 'cursor-pointer hover:shadow-md' : ''}`}
                        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
                    >
                        <div className="flex items-center space-x-3 flex-1">
                            {hasChildren && (
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isExpanded ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'
                                    }`}>
                                    <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90 text-white' : 'text-gray-500'
                                        }`} />
                                </div>
                            )}
                            <div className="flex-1">
                                <p className={`font-medium ${level === 0 ? 'text-lg text-gray-900' :
                                    level === 1 ? 'text-base text-gray-800' :
                                        'text-sm text-gray-700'
                                    }`}>
                                    {node.name}
                                </p>
                                <p className={`${level === 0 ? 'text-sm' : 'text-xs'} text-gray-500 mt-0.5`}>
                                    {node.value}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                            {/* Change indicator with visual bar */}
                            <div className="flex items-center space-x-2">
                                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full transition-all ${node.change > 0 ? 'bg-red-500' : 'bg-green-500'
                                            }`}
                                        style={{ width: `${Math.min(Math.abs(node.change) * 2, 100)}%` }}
                                    />
                                </div>
                                <span className={`text-sm font-semibold min-w-[50px] text-right ${node.change > 0 ? 'text-red-600' :
                                    node.change < 0 ? 'text-green-600' :
                                        'text-gray-600'
                                    }`}>
                                    {node.change > 0 ? '+' : ''}{node.change}%
                                </span>
                            </div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isExpanded && hasChildren && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="relative mt-2"
                            >
                                {node.children.map((child: any, index: number) => (
                                    <div key={index} className="relative">
                                        {/* Vertical line connecting siblings */}
                                        {index < node.children.length - 1 && (
                                            <div className="absolute left-4 top-12 bottom-0 w-px bg-gray-300"></div>
                                        )}
                                        <DriverNode
                                            node={child}
                                            level={level + 1}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="px-4 sm:px-6 lg:px-8 py-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Business Insight Consoles</h1>
                        <p className="text-sm text-gray-500 mt-1">Automotive Business Performance • 14 Strategic Dimensions</p>
                    </div>

                    {/* Search and Filters */}
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search business dimensions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Category Tabs */}
                            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${selectedCategory === 'all'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    All Consoles ({automotiveBusinessDimensions.length})
                                </button>
                                {Object.entries(consoleCategories).map(([key, category]) => (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedCategory(key)}
                                        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${selectedCategory === key
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                    >
                                        {category.name} ({category.count})
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Split Layout */}
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-12 gap-6">
                    {/* Left Side - Console Cards - More compact */}
                    <div className="col-span-5 max-h-[calc(100vh-200px)] overflow-y-auto">
                        <div className="space-y-3 pr-4 pb-4 p-2">
                            {filteredConsoles.map((console) => {
                                const IconComponent = iconMap[console.icon];
                                const performance = consolePerformance[console.id] || {};
                                const isActive = console.id === 'market-demand';
                                const isSelected = selectedConsole === console.id;

                                return (
                                    <motion.div
                                        key={console.id}
                                        whileHover={{ scale: 1.005 }}
                                        className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer relative ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                                            }`}
                                        onClick={() => setSelectedConsole(console.id)}
                                    >
                                        <div className="p-4">
                                            <div className="flex items-start space-x-3">
                                                <div className={`p-2 rounded-lg flex-shrink-0 ${performance.status === 'on-track' ? 'bg-green-50' :
                                                    performance.status === 'attention' ? 'bg-yellow-50' :
                                                        performance.status === 'critical' ? 'bg-red-50' :
                                                            'bg-gray-50'
                                                    }`}>
                                                    <IconComponent className={`w-5 h-5 ${performance.status === 'on-track' ? 'text-green-600' :
                                                        performance.status === 'attention' ? 'text-yellow-600' :
                                                            performance.status === 'critical' ? 'text-red-600' :
                                                                'text-gray-600'
                                                        }`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center space-x-2">
                                                        <h3 className="text-base font-semibold text-gray-900 truncate">{console.name}</h3>
                                                        {getStatusIcon(performance.status)}
                                                    </div>
                                                    <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{console.description}</p>

                                                    {/* Key Metrics - Compact */}
                                                    {performance.metrics && (
                                                        <div className="mt-2 grid grid-cols-2 gap-2">
                                                            {Object.entries(performance.metrics).slice(0, 2).map(([key, metric]: [string, any]) => (
                                                                <div key={key} className="flex items-center justify-between p-1.5 bg-gray-50 rounded">
                                                                    <div className="min-w-0">
                                                                        <p className="text-xs text-gray-500 truncate">{key}</p>
                                                                        <p className="text-xs font-semibold text-gray-900">{metric.value}</p>
                                                                    </div>
                                                                    <span className={`text-xs font-medium ml-2 ${metric.change > 0 ? 'text-green-600' :
                                                                        metric.change < 0 ? 'text-red-600' :
                                                                            'text-gray-600'
                                                                        }`}>
                                                                        {metric.change > 0 ? '+' : ''}{metric.change}%
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Action Button */}
                                                    <div className="mt-3">
                                                        {isActive ? (
                                                            <Link
                                                                href={`/functions/fpa/management-reporting/business-consoles/${console.id}`}
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                                                            >
                                                                View Console
                                                                <ArrowRight className="w-3 h-3 ml-1" />
                                                            </Link>
                                                        ) : (
                                                            <button
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-500 bg-gray-100 rounded cursor-not-allowed"
                                                                disabled
                                                            >
                                                                Coming Soon
                                                                <Clock className="w-3 h-3 ml-1" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side - Dynamic Driver Tree */}
                    <div className="col-span-7">
                        <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Performance Driver Tree</h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {automotiveBusinessDimensions.find(c => c.id === selectedConsole)?.name || 'Select a console to view driver analysis'}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                                        title="Expand all"
                                    >
                                        <Maximize2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                                        title="View as grid"
                                    >
                                        <Grid className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Driver Tree Container */}
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 min-h-[400px]">
                                {selectedConsole && driverTreeData[selectedConsole] ? (
                                    <div className="space-y-2">
                                        <DriverNode
                                            node={driverTreeData[selectedConsole]}
                                            level={0}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-96 text-gray-400">
                                        <div className="text-center">
                                            <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                                            <p className="text-lg font-medium">Select a Business Console</p>
                                            <p className="text-sm mt-2">Click on any console card to view its performance drivers</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Legend and Actions */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-700 mb-3">Understanding the Driver Tree</p>
                                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-2 bg-red-500 rounded-full" />
                                                <span className="text-gray-600">Performance deterioration</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-2 bg-green-500 rounded-full" />
                                                <span className="text-gray-600">Performance improvement</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 bg-blue-500" />
                                                <span className="text-gray-600">Expanded node</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white" />
                                                <span className="text-gray-600">Collapsed node</span>
                                            </div>
                                        </div>
                                    </div>
                                    {selectedConsole === 'market-demand' && (
                                        <Link
                                            href={`/functions/fpa/management-reporting/business-consoles/market-demand`}
                                            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                        >
                                            <span>Open Full Console</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}