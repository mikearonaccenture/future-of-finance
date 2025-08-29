'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
    Building,
    Calendar,
    ChevronRight,
    Clock,
    DollarSign,
    Download,
    Eye,
    FileText,
    Filter,
    Grid,
    List,
    Search,
    Share2,
    Shield,
    Sparkles,
    Star,
    TrendingUp,
    Zap
} from 'lucide-react';
import { useState } from 'react';

// Report categories
const categories = [
    { id: 'all', name: 'All Reports', count: 147 },
    { id: 'financial', name: 'Financial', count: 42, icon: DollarSign },
    { id: 'operational', name: 'Operational', count: 38, icon: Building },
    { id: 'sales', name: 'Sales & Marketing', count: 28, icon: TrendingUp },
    { id: 'compliance', name: 'Compliance', count: 15, icon: Shield },
    { id: 'executive', name: 'Executive', count: 12, icon: Star },
    { id: 'custom', name: 'Custom Reports', count: 12, icon: Zap }
];

// Mock report data
const allReports = [
    // Financial Reports
    {
        id: 1,
        name: 'Monthly Financial Dashboard',
        category: 'financial',
        description: 'Comprehensive P&L, balance sheet, and cash flow analysis',
        frequency: 'Monthly',
        owner: 'Sarah Chen',
        department: 'Finance',
        lastUpdated: '2 hours ago',
        nextUpdate: 'Dec 1, 2024',
        format: 'PowerBI',
        tags: ['P&L', 'Balance Sheet', 'Cash Flow', 'Executive'],
        views: 1245,
        rating: 4.8,
        isFavorite: true,
        aiInsight: 'Most viewed report - 95% of executives access monthly'
    },
    {
        id: 2,
        name: 'Revenue Analysis by Product',
        category: 'financial',
        description: 'Deep dive into product line revenue performance and trends',
        frequency: 'Weekly',
        owner: 'Michael Torres',
        department: 'FP&A',
        lastUpdated: '1 day ago',
        nextUpdate: 'Nov 29, 2024',
        format: 'Tableau',
        tags: ['Revenue', 'Product Analysis', 'Trends'],
        views: 892,
        rating: 4.6,
        isFavorite: false,
        aiInsight: 'Trending up - 40% more views this month'
    },
    {
        id: 3,
        name: 'Working Capital Report',
        category: 'financial',
        description: 'DSO, DIO, DPO analysis with cash conversion cycle',
        frequency: 'Weekly',
        owner: 'Lisa Wang',
        department: 'Treasury',
        lastUpdated: '3 days ago',
        nextUpdate: 'Nov 28, 2024',
        format: 'Excel',
        tags: ['Working Capital', 'Cash', 'Treasury'],
        views: 567,
        rating: 4.3,
        isFavorite: false
    },
    // Operational Reports
    {
        id: 4,
        name: 'Manufacturing KPI Dashboard',
        category: 'operational',
        description: 'OEE, quality metrics, and production efficiency tracking',
        frequency: 'Daily',
        owner: 'James Wilson',
        department: 'Operations',
        lastUpdated: '4 hours ago',
        nextUpdate: 'Tomorrow',
        format: 'PowerBI',
        tags: ['Manufacturing', 'KPI', 'Efficiency', 'Quality'],
        views: 1123,
        rating: 4.9,
        isFavorite: true,
        aiInsight: 'Critical for daily ops meetings - 100% usage rate'
    },
    {
        id: 5,
        name: 'Supply Chain Performance',
        category: 'operational',
        description: 'Vendor performance, lead times, and inventory metrics',
        frequency: 'Weekly',
        owner: 'Amanda Foster',
        department: 'Supply Chain',
        lastUpdated: '2 days ago',
        nextUpdate: 'Dec 2, 2024',
        format: 'Tableau',
        tags: ['Supply Chain', 'Inventory', 'Vendors'],
        views: 678,
        rating: 4.5,
        isFavorite: false
    },
    // Sales Reports
    {
        id: 6,
        name: 'Sales Pipeline Analysis',
        category: 'sales',
        description: 'Pipeline coverage, conversion rates, and forecast accuracy',
        frequency: 'Weekly',
        owner: 'David Kim',
        department: 'Sales Ops',
        lastUpdated: '1 day ago',
        nextUpdate: 'Nov 30, 2024',
        format: 'Salesforce',
        tags: ['Sales', 'Pipeline', 'Forecast'],
        views: 934,
        rating: 4.7,
        isFavorite: true
    },
    {
        id: 7,
        name: 'Customer Segmentation Report',
        category: 'sales',
        description: 'Customer analysis by segment, geography, and product',
        frequency: 'Monthly',
        owner: 'Rachel Green',
        department: 'Marketing',
        lastUpdated: '1 week ago',
        nextUpdate: 'Dec 15, 2024',
        format: 'PowerBI',
        tags: ['Customer', 'Segmentation', 'Marketing'],
        views: 445,
        rating: 4.4,
        isFavorite: false
    },
    // Compliance Reports
    {
        id: 8,
        name: 'SOX Compliance Dashboard',
        category: 'compliance',
        description: 'Control testing status and audit findings tracker',
        frequency: 'Quarterly',
        owner: 'Robert Martinez',
        department: 'Internal Audit',
        lastUpdated: '2 weeks ago',
        nextUpdate: 'Jan 15, 2025',
        format: 'Excel',
        tags: ['SOX', 'Compliance', 'Audit'],
        views: 234,
        rating: 4.2,
        isFavorite: false
    },
    // Executive Reports
    {
        id: 9,
        name: 'Board Deck - Monthly',
        category: 'executive',
        description: 'Executive summary for board of directors meeting',
        frequency: 'Monthly',
        owner: 'CFO Office',
        department: 'Executive',
        lastUpdated: '5 days ago',
        nextUpdate: 'Dec 5, 2024',
        format: 'PowerPoint',
        tags: ['Board', 'Executive', 'Strategic'],
        views: 89,
        rating: 5.0,
        isFavorite: true,
        aiInsight: 'Restricted access - Board members only'
    },
    {
        id: 10,
        name: 'Strategic KPI Scorecard',
        category: 'executive',
        description: 'Company-wide strategic objectives and KPI tracking',
        frequency: 'Weekly',
        owner: 'Strategy Team',
        department: 'Strategy',
        lastUpdated: '3 hours ago',
        nextUpdate: 'Dec 1, 2024',
        format: 'Tableau',
        tags: ['Strategy', 'KPI', 'Executive'],
        views: 567,
        rating: 4.8,
        isFavorite: true
    }
];

export default function ReportHub() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState('popular');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedReport, setSelectedReport] = useState<number | null>(null);

    // Filter reports based on category and search
    const filteredReports = allReports.filter(report => {
        const matchesCategory = selectedCategory === 'all' || report.category === selectedCategory;
        const matchesSearch = report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            report.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            report.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    // Sort reports
    const sortedReports = [...filteredReports].sort((a, b) => {
        switch (sortBy) {
            case 'popular':
                return b.views - a.views;
            case 'recent':
                return a.id - b.id; // In real app, would use actual date
            case 'rating':
                return b.rating - a.rating;
            case 'name':
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    const getFormatColor = (format: string) => {
        const colors: { [key: string]: string } = {
            'PowerBI': 'bg-yellow-100 text-yellow-700 border-yellow-200',
            'Tableau': 'bg-blue-100 text-blue-700 border-blue-200',
            'Excel': 'bg-green-100 text-green-700 border-green-200',
            'Salesforce': 'bg-purple-100 text-purple-700 border-purple-200',
            'PowerPoint': 'bg-red-100 text-red-700 border-red-200'
        };
        return colors[format] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getFrequencyIcon = (frequency: string) => {
        switch (frequency.toLowerCase()) {
            case 'daily':
                return <Clock className="w-3 h-3" />;
            case 'weekly':
            case 'monthly':
            case 'quarterly':
                return <Calendar className="w-3 h-3" />;
            default:
                return <Clock className="w-3 h-3" />;
        }
    };

    return (
        <div className="bg-gray-50">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Report HUB</h1>
                                <p className="text-sm text-gray-500">Your Netflix of Finance Reports • 10 reports available</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            {/* View Mode Toggle */}
                            <div className="flex items-center bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                                        }`}
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                                        }`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Sort Dropdown */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="text-sm bg-white border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="recent">Recently Updated</option>
                                <option value="rating">Highest Rated</option>
                                <option value="name">Alphabetical</option>
                            </select>

                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`p-2 rounded-lg transition-colors ${showFilters ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-600'
                                    }`}
                            >
                                <Filter className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="px-6 pb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search reports by name, description, or tags..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        {searchQuery && (
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                                {sortedReports.length} results
                            </span>
                        )}
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="px-6 pb-0">
                    <div className="flex space-x-1 overflow-x-auto">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${selectedCategory === category.id
                                        ? 'bg-gray-50 text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {Icon && <Icon className="w-4 h-4" />}
                                    <span>{category.name}</span>
                                    <span className="text-xs text-gray-400">({category.count})</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Filters Panel */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-6 bg-white rounded-lg border border-gray-200 p-4"
                        >
                            <div className="grid grid-cols-4 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Frequency</label>
                                    <select className="w-full text-sm border border-gray-300 rounded px-3 py-1.5">
                                        <option>All Frequencies</option>
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                        <option>Quarterly</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Department</label>
                                    <select className="w-full text-sm border border-gray-300 rounded px-3 py-1.5">
                                        <option>All Departments</option>
                                        <option>Finance</option>
                                        <option>Operations</option>
                                        <option>Sales</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Format</label>
                                    <select className="w-full text-sm border border-gray-300 rounded px-3 py-1.5">
                                        <option>All Formats</option>
                                        <option>PowerBI</option>
                                        <option>Tableau</option>
                                        <option>Excel</option>
                                        <option>PowerPoint</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Rating</label>
                                    <select className="w-full text-sm border border-gray-300 rounded px-3 py-1.5">
                                        <option>All Ratings</option>
                                        <option>4+ Stars</option>
                                        <option>4.5+ Stars</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* AI Insights Bar */}
                {selectedCategory === 'all' && !searchQuery && (
                    <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                    <Sparkles className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900">AI Recommendations</h3>
                                    <p className="text-xs text-gray-600">
                                        Based on your role and recent activity, you might be interested in the Revenue Analysis and Manufacturing KPI reports
                                    </p>
                                </div>
                            </div>
                            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                View Suggestions
                            </button>
                        </div>
                    </div>
                )}

                {/* Reports Grid/List */}
                <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-4' : 'space-y-3'}>
                    {sortedReports.map((report) => {
                        const CategoryIcon = categories.find(c => c.id === report.category)?.icon || FileText;

                        return viewMode === 'grid' ? (
                            // Grid View
                            <motion.div
                                key={report.id}
                                whileHover={{ y: -2 }}
                                className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-all cursor-pointer relative overflow-hidden"
                                onClick={() => setSelectedReport(report.id)}
                            >
                                {/* Favorite Badge */}
                                {report.isFavorite && (
                                    <Star className="absolute top-3 right-3 w-4 h-4 text-yellow-500 fill-current" />
                                )}

                                {/* Header */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-gray-50 rounded-lg">
                                            <CategoryIcon className="w-5 h-5 text-gray-700" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 line-clamp-1">{report.name}</h3>
                                            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-0.5">
                                                <span className={`px-2 py-0.5 rounded-md border ${getFormatColor(report.format)}`}>
                                                    {report.format}
                                                </span>
                                                <span className="flex items-center">
                                                    {getFrequencyIcon(report.frequency)}
                                                    <span className="ml-1">{report.frequency}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{report.description}</p>

                                {/* AI Insight */}
                                {report.aiInsight && (
                                    <div className="mb-3 p-2 bg-blue-50 rounded text-xs text-blue-700 flex items-center space-x-1">
                                        <Sparkles className="w-3 h-3" />
                                        <span>{report.aiInsight}</span>
                                    </div>
                                )}

                                {/* Metadata */}
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <div className="flex items-center space-x-3">
                                        <span className="flex items-center">
                                            <Eye className="w-3 h-3 mr-1" />
                                            {report.views.toLocaleString()}
                                        </span>
                                        <span className="flex items-center">
                                            <Star className="w-3 h-3 mr-1" />
                                            {report.rating}
                                        </span>
                                    </div>
                                    <span>Updated {report.lastUpdated}</span>
                                </div>

                                {/* Owner Info */}
                                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
                                            {report.owner.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className="text-xs text-gray-600">{report.owner}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                            </motion.div>
                        ) : (
                            // List View
                            <motion.div
                                key={report.id}
                                whileHover={{ x: 2 }}
                                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all cursor-pointer"
                                onClick={() => setSelectedReport(report.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 flex-1">
                                        <div className="p-2 bg-gray-50 rounded-lg">
                                            <CategoryIcon className="w-5 h-5 text-gray-700" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3">
                                                <h3 className="font-semibold text-gray-900">{report.name}</h3>
                                                {report.isFavorite && (
                                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                                )}
                                                <span className={`px-2 py-0.5 text-xs rounded-md border ${getFormatColor(report.format)}`}>
                                                    {report.format}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                                                <span>{report.owner} • {report.department}</span>
                                                <span className="flex items-center">
                                                    {getFrequencyIcon(report.frequency)}
                                                    <span className="ml-1">{report.frequency}</span>
                                                </span>
                                                <span>Updated {report.lastUpdated}</span>
                                                <span className="flex items-center">
                                                    <Eye className="w-3 h-3 mr-1" />
                                                    {report.views.toLocaleString()} views
                                                </span>
                                                <span className="flex items-center">
                                                    <Star className="w-3 h-3 mr-1" />
                                                    {report.rating}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                                            <Download className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                                            <Share2 className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                                {report.aiInsight && (
                                    <div className="mt-3 ml-14 p-2 bg-blue-50 rounded text-xs text-blue-700 flex items-center space-x-1 inline-flex">
                                        <Sparkles className="w-3 h-3" />
                                        <span>{report.aiInsight}</span>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Empty State */}
                {sortedReports.length === 0 && (
                    <div className="text-center py-12">
                        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No reports found</h3>
                        <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    );
} 