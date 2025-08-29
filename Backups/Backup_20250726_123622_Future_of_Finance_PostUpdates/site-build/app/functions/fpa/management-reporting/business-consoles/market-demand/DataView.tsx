import { motion } from 'framer-motion';
import {
    Calendar,
    ChevronDown,
    ChevronUp,
    Download,
    Edit,
    Eye,
    FileText,
    Filter,
    MoreVertical,
    Search,
    TrendingUp, Users
} from 'lucide-react';
import { useState } from 'react';

export default function DataView() {
    const [activeDataset, setActiveDataset] = useState('sales-performance');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

    // Sales Performance Data
    const salesData = [
        {
            id: 1,
            region: 'North America',
            segment: 'Luxury SUV',
            model: 'X7 Premier',
            units: 12500,
            revenue: '$875M',
            marketShare: '32.1%',
            growth: '+8.5%',
            status: 'strong'
        },
        {
            id: 2,
            region: 'Europe',
            segment: 'Electric Vehicles',
            model: 'E-Drive 500',
            units: 8900,
            revenue: '$623M',
            marketShare: '21.3%',
            growth: '+35.2%',
            status: 'growing'
        },
        {
            id: 3,
            region: 'Asia Pacific',
            segment: 'Mid-Size Sedan',
            model: 'Accord Elite',
            units: 15600,
            revenue: '$468M',
            marketShare: '15.8%',
            growth: '-2.1%',
            status: 'declining'
        },
        {
            id: 4,
            region: 'Latin America',
            segment: 'Compact Cars',
            model: 'City Plus',
            units: 6200,
            revenue: '$124M',
            marketShare: '8.2%',
            growth: '-8.5%',
            status: 'weak'
        },
        {
            id: 5,
            region: 'Middle East',
            segment: 'Commercial Fleet',
            model: 'WorkForce Pro',
            units: 3400,
            revenue: '$289M',
            marketShare: '25.6%',
            growth: '+12.3%',
            status: 'strong'
        }
    ];

    // Market Intelligence Data
    const marketData = [
        {
            id: 1,
            competitor: 'Tesla',
            product: 'Model Y',
            segment: 'Electric SUV',
            price: '$52,990',
            marketShare: '15.2%',
            monthlyVolume: '28,500',
            trend: 'up',
            threat: 'high'
        },
        {
            id: 2,
            competitor: 'Toyota',
            product: 'Camry Hybrid',
            segment: 'Mid-Size Sedan',
            price: '$28,400',
            marketShare: '22.3%',
            monthlyVolume: '42,100',
            trend: 'stable',
            threat: 'medium'
        },
        {
            id: 3,
            competitor: 'BYD',
            product: 'Seal',
            segment: 'Electric Sedan',
            price: '$35,800',
            marketShare: '12.8%',
            monthlyVolume: '18,900',
            trend: 'up',
            threat: 'high'
        },
        {
            id: 4,
            competitor: 'Ford',
            product: 'F-150 Lightning',
            segment: 'Electric Truck',
            price: '$59,900',
            marketShare: '8.5%',
            monthlyVolume: '12,300',
            trend: 'up',
            threat: 'medium'
        }
    ];

    // Customer Insights Data
    const customerData = [
        {
            id: 1,
            segment: 'Premium Buyers',
            size: '2.5M',
            avgPurchaseValue: '$68,500',
            satisfaction: 88,
            retention: 92,
            growthRate: '+5.2%',
            keyPreferences: ['Quality', 'Technology', 'Brand']
        },
        {
            id: 2,
            segment: 'Value Seekers',
            size: '4.8M',
            avgPurchaseValue: '$32,200',
            satisfaction: 75,
            retention: 68,
            growthRate: '-2.1%',
            keyPreferences: ['Price', 'Fuel Efficiency', 'Reliability']
        },
        {
            id: 3,
            segment: 'EV Enthusiasts',
            size: '1.2M',
            avgPurchaseValue: '$55,800',
            satisfaction: 92,
            retention: 85,
            growthRate: '+42.5%',
            keyPreferences: ['Sustainability', 'Innovation', 'Performance']
        },
        {
            id: 4,
            segment: 'Fleet Managers',
            size: '0.8M',
            avgPurchaseValue: '$285,000',
            satisfaction: 82,
            retention: 88,
            growthRate: '+12.8%',
            keyPreferences: ['TCO', 'Reliability', 'Service']
        }
    ];

    const handleSort = (key: string) => {
        setSortConfig({
            key,
            direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
        });
    };

    const renderSalesTable = () => (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-gray-900">Sales Performance by Region & Segment</h3>
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                            <Filter className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                            <Download className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left">
                                <button
                                    onClick={() => handleSort('region')}
                                    className="flex items-center space-x-1 text-xs font-medium text-gray-700 uppercase tracking-wider hover:text-gray-900"
                                >
                                    <span>Region</span>
                                    {sortConfig.key === 'region' && (
                                        sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                                    )}
                                </button>
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Segment
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Model
                            </th>
                            <th className="px-6 py-3 text-right">
                                <button
                                    onClick={() => handleSort('units')}
                                    className="flex items-center space-x-1 text-xs font-medium text-gray-700 uppercase tracking-wider hover:text-gray-900 ml-auto"
                                >
                                    <span>Units</span>
                                    {sortConfig.key === 'units' && (
                                        sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                                    )}
                                </button>
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Revenue
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Market Share
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Growth
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {salesData.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {row.region}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {row.segment}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {row.model}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {row.units.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {row.revenue}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {row.marketShare}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                                    <span className={`font-medium ${row.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {row.growth}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${row.status === 'strong' ? 'bg-green-100 text-green-700' :
                                        row.status === 'growing' ? 'bg-blue-100 text-blue-700' :
                                            row.status === 'declining' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-red-100 text-red-700'
                                        }`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <div className="flex items-center justify-center space-x-1">
                                        <button className="p-1 text-gray-400 hover:text-gray-600">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-1 text-gray-400 hover:text-gray-600">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-1 text-gray-400 hover:text-gray-600">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                    Showing 1 to 5 of 128 results
                </p>
                <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                        Previous
                    </button>
                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
                        1
                    </button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                        2
                    </button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                        3
                    </button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );

    const renderMarketTable = () => (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-base font-semibold text-gray-900">Competitive Market Intelligence</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Competitor
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Product
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Segment
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Market Share
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Monthly Volume
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Trend
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Threat Level
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {marketData.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {row.competitor}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {row.product}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {row.segment}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {row.price}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {row.marketShare}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {row.monthlyVolume}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {row.trend === 'up' ?
                                        <TrendingUp className="w-4 h-4 text-green-600 mx-auto" /> :
                                        <div className="w-4 h-4 bg-gray-400 rounded-full mx-auto" />
                                    }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${row.threat === 'high' ? 'bg-red-100 text-red-700' :
                                        row.threat === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-green-100 text-green-700'
                                        }`}>
                                        {row.threat}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderCustomerTable = () => (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-base font-semibold text-gray-900">Customer Segment Analysis</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Segment
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Size
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Avg Purchase
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Satisfaction
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Retention
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Growth
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                Key Preferences
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {customerData.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {row.segment}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {row.size}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {row.avgPurchaseValue}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <div className="flex items-center justify-center">
                                        <span className="text-sm font-medium text-gray-900 mr-2">{row.satisfaction}%</span>
                                        <div className="w-16 bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${row.satisfaction >= 90 ? 'bg-green-500' :
                                                    row.satisfaction >= 80 ? 'bg-blue-500' :
                                                        row.satisfaction >= 70 ? 'bg-yellow-500' :
                                                            'bg-red-500'
                                                    }`}
                                                style={{ width: `${row.satisfaction}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <div className="flex items-center justify-center">
                                        <span className="text-sm font-medium text-gray-900 mr-2">{row.retention}%</span>
                                        <div className="w-16 bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${row.retention >= 90 ? 'bg-green-500' :
                                                    row.retention >= 80 ? 'bg-blue-500' :
                                                        row.retention >= 70 ? 'bg-yellow-500' :
                                                            'bg-red-500'
                                                    }`}
                                                style={{ width: `${row.retention}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                                    <span className={`font-medium ${row.growthRate.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {row.growthRate}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    <div className="flex flex-wrap gap-1">
                                        {row.keyPreferences.map((pref, idx) => (
                                            <span key={idx} className="inline-flex px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">
                                                {pref}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Data View Selector */}
            <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <h2 className="text-lg font-semibold text-gray-900">Data Views</h2>
                        <div className="flex items-center space-x-2">
                            {[
                                { id: 'sales-performance', name: 'Sales Performance', icon: TrendingUp },
                                { id: 'market-intelligence', name: 'Market Intelligence', icon: Eye },
                                { id: 'customer-insights', name: 'Customer Insights', icon: Users }
                            ].map((dataset) => {
                                const Icon = dataset.icon;
                                return (
                                    <button
                                        key={dataset.id}
                                        onClick={() => setActiveDataset(dataset.id)}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeDataset === dataset.id
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{dataset.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">Date Range</span>
                        </button>
                        <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                            <FileText className="w-4 h-4" />
                            <span className="text-sm">Export</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Data Tables */}
            <motion.div
                key={activeDataset}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                {activeDataset === 'sales-performance' && renderSalesTable()}
                {activeDataset === 'market-intelligence' && renderMarketTable()}
                {activeDataset === 'customer-insights' && renderCustomerTable()}
            </motion.div>

            {/* Data Summary Cards */}
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-xs text-gray-500 mb-1">Total Records</p>
                    <p className="text-2xl font-bold text-gray-900">2,847</p>
                    <p className="text-xs text-gray-600 mt-1">Across all datasets</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-xs text-gray-500 mb-1">Last Updated</p>
                    <p className="text-2xl font-bold text-gray-900">2h ago</p>
                    <p className="text-xs text-gray-600 mt-1">Real-time sync enabled</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-xs text-gray-500 mb-1">Data Quality</p>
                    <p className="text-2xl font-bold text-green-600">98.5%</p>
                    <p className="text-xs text-gray-600 mt-1">High confidence</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-xs text-gray-500 mb-1">API Calls</p>
                    <p className="text-2xl font-bold text-gray-900">1.2K</p>
                    <p className="text-xs text-gray-600 mt-1">Today</p>
                </div>
            </div>
        </div>
    );
} 