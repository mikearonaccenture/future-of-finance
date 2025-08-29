import { motion } from 'framer-motion';
import {
    Activity,
    BarChart3,
    Download,
    Filter,
    Globe,
    Maximize2,
    Target,
    TrendingUp,
    Users
} from 'lucide-react';
import { useState } from 'react';

export default function Analytics() {
    const [selectedView, setSelectedView] = useState('market-share');
    const [timeRange, setTimeRange] = useState('12m');

    // Market Share Data
    const marketShareData = {
        overall: {
            current: 18.5,
            previous: 17.7,
            competitors: [
                { name: 'Competitor A', share: 22.3 },
                { name: 'Competitor B', share: 19.8 },
                { name: 'Us', share: 18.5 },
                { name: 'Competitor C', share: 15.2 },
                { name: 'Others', share: 24.2 }
            ]
        },
        bySegment: [
            { segment: 'Luxury SUV', ourShare: 32.1, marketSize: '$45B', growth: 8.5 },
            { segment: 'Electric Vehicles', ourShare: 21.3, marketSize: '$38B', growth: 35.2 },
            { segment: 'Mid-Size Sedan', ourShare: 15.8, marketSize: '$52B', growth: -2.1 },
            { segment: 'Compact Cars', ourShare: 8.2, marketSize: '$28B', growth: -8.5 },
            { segment: 'Commercial Fleet', ourShare: 25.6, marketSize: '$35B', growth: 12.3 }
        ],
        trend: [
            { month: 'Jan', share: 17.2 },
            { month: 'Feb', share: 17.3 },
            { month: 'Mar', share: 17.5 },
            { month: 'Apr', share: 17.6 },
            { month: 'May', share: 17.8 },
            { month: 'Jun', share: 17.9 },
            { month: 'Jul', share: 18.0 },
            { month: 'Aug', share: 18.1 },
            { month: 'Sep', share: 18.2 },
            { month: 'Oct', share: 18.5 }
        ]
    };

    // Demand Forecast Data
    const demandForecastData = {
        forecast: [
            { month: 'Nov', actual: null, forecast: 2.35, lower: 2.20, upper: 2.50 },
            { month: 'Dec', actual: null, forecast: 2.42, lower: 2.25, upper: 2.58 },
            { month: 'Jan', actual: null, forecast: 2.38, lower: 2.20, upper: 2.55 },
            { month: 'Feb', actual: null, forecast: 2.45, lower: 2.28, upper: 2.62 },
            { month: 'Mar', actual: null, forecast: 2.52, lower: 2.35, upper: 2.70 },
            { month: 'Apr', actual: null, forecast: 2.58, lower: 2.40, upper: 2.76 }
        ],
        historical: [
            { month: 'May', actual: 2.05, forecast: 2.08 },
            { month: 'Jun', actual: 2.12, forecast: 2.10 },
            { month: 'Jul', actual: 2.18, forecast: 2.15 },
            { month: 'Aug', actual: 2.22, forecast: 2.20 },
            { month: 'Sep', actual: 2.25, forecast: 2.24 },
            { month: 'Oct', actual: 2.30, forecast: 2.28 }
        ],
        accuracy: 97.8,
        drivers: [
            { driver: 'Economic Growth', impact: '+15%', correlation: 0.85 },
            { driver: 'EV Incentives', impact: '+12%', correlation: 0.78 },
            { driver: 'Interest Rates', impact: '-8%', correlation: -0.65 },
            { driver: 'Fuel Prices', impact: '+5%', correlation: 0.45 }
        ]
    };

    // Competitive Analysis
    const competitiveData = {
        positioning: [
            {
                company: 'Tesla',
                price: 85,
                quality: 88,
                innovation: 95,
                customerSat: 90,
                marketShare: 15.2
            },
            {
                company: 'Us',
                price: 75,
                quality: 92,
                innovation: 78,
                customerSat: 85,
                marketShare: 18.5
            },
            {
                company: 'Toyota',
                price: 65,
                quality: 90,
                innovation: 70,
                customerSat: 88,
                marketShare: 22.3
            },
            {
                company: 'BYD',
                price: 55,
                quality: 75,
                innovation: 82,
                customerSat: 78,
                marketShare: 12.8
            }
        ],
        strengthsWeaknesses: {
            us: {
                strengths: ['Quality', 'Brand Heritage', 'Dealer Network'],
                weaknesses: ['Digital Experience', 'EV Range', 'Price Point']
            },
            competitors: {
                strengths: ['Innovation (Tesla)', 'Price (BYD)', 'Reliability (Toyota)'],
                weaknesses: ['Service Network (Tesla)', 'Brand Perception (BYD)', 'EV Transition (Toyota)']
            }
        }
    };

    // Regional Performance
    const regionalData = {
        map: [
            { region: 'North America', share: 22.3, units: 850000, growth: 8.5, potential: 'high' },
            { region: 'Europe', share: 15.8, units: 520000, growth: -2.1, potential: 'medium' },
            { region: 'Asia Pacific', share: 12.1, units: 1200000, growth: 18.5, potential: 'very high' },
            { region: 'Latin America', share: 28.5, units: 180000, growth: 5.2, potential: 'medium' },
            { region: 'Middle East & Africa', share: 18.2, units: 95000, growth: 12.3, potential: 'high' }
        ],
        opportunities: [
            { market: 'China', opportunity: 'EV Market Entry', value: '$2.5B', probability: 75 },
            { market: 'India', opportunity: 'Compact Car Launch', value: '$1.2B', probability: 60 },
            { market: 'Brazil', opportunity: 'Fleet Expansion', value: '$800M', probability: 85 }
        ]
    };

    const renderMarketShareChart = () => (
        <div className="space-y-6">
            {/* Overall Market Share */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Overall Market Share</h4>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <div className="space-y-3">
                            {marketShareData.overall.competitors.map((competitor, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="text-sm text-gray-600 w-32">{competitor.name}</span>
                                    <div className="flex-1 mx-3">
                                        <div className="w-full bg-gray-200 rounded-full h-6">
                                            <div
                                                className={`h-6 rounded-full flex items-center justify-end pr-2 text-xs font-medium text-white ${competitor.name === 'Us' ? 'bg-blue-600' : 'bg-gray-400'
                                                    }`}
                                                style={{ width: `${competitor.share}%` }}
                                            >
                                                {competitor.share}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-gray-900">{marketShareData.overall.current}%</p>
                            <p className="text-sm text-gray-500 mt-1">Current Market Share</p>
                            <p className={`text-sm font-medium mt-2 ${marketShareData.overall.current > marketShareData.overall.previous
                                ? 'text-green-600' : 'text-red-600'
                                }`}>
                                {marketShareData.overall.current > marketShareData.overall.previous ? '+' : ''}
                                {(marketShareData.overall.current - marketShareData.overall.previous).toFixed(1)}pp vs last year
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Market Share by Segment */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Market Share by Segment</h4>
                <div className="space-y-4">
                    {marketShareData.bySegment.map((segment, index) => (
                        <div key={index} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium text-gray-900">{segment.segment}</h5>
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm text-gray-500">Market Size: {segment.marketSize}</span>
                                    <span className={`text-sm font-medium ${segment.growth > 0 ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {segment.growth > 0 ? '+' : ''}{segment.growth}% growth
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm font-medium text-gray-900 w-16">{segment.ourShare}%</span>
                                <div className="flex-1 mx-3">
                                    <div className="w-full bg-gray-200 rounded-full h-4">
                                        <div
                                            className="h-4 rounded-full bg-blue-600"
                                            style={{ width: `${segment.ourShare}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Market Share Trend */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Market Share Trend</h4>
                <div className="h-64 flex items-end space-x-2">
                    {marketShareData.trend.map((month, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                            <div className="relative w-full group">
                                <div
                                    className="w-full bg-blue-600 rounded-t hover:bg-blue-700 transition-colors cursor-pointer"
                                    style={{ height: `${month.share * 10}px` }}
                                >
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs font-medium text-gray-900">{month.share}%</span>
                                    </div>
                                </div>
                            </div>
                            <span className="text-xs text-gray-500 mt-2">{month.month}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderDemandForecast = () => (
        <div className="space-y-6">
            {/* Forecast Chart */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-semibold text-gray-900">Demand Forecast (Million Units)</h4>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Forecast Accuracy:</span>
                        <span className="text-sm font-medium text-green-600">{demandForecastData.accuracy}%</span>
                    </div>
                </div>

                <div className="h-64 relative">
                    {/* Chart would go here - showing forecast with confidence intervals */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <div className="text-center">
                            <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                            <p className="text-sm">Interactive forecast chart with confidence intervals</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-4">
                    <div className="text-center">
                        <p className="text-xs text-gray-500">Next Month</p>
                        <p className="text-lg font-bold text-gray-900">2.35M</p>
                        <p className="text-xs text-gray-600">±0.15M</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500">Q1 2025</p>
                        <p className="text-lg font-bold text-gray-900">7.35M</p>
                        <p className="text-xs text-gray-600">±0.45M</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500">FY 2025</p>
                        <p className="text-lg font-bold text-gray-900">30.2M</p>
                        <p className="text-xs text-gray-600">±2.1M</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500">Growth Rate</p>
                        <p className="text-lg font-bold text-green-600">+12.5%</p>
                        <p className="text-xs text-gray-600">YoY</p>
                    </div>
                </div>
            </div>

            {/* Demand Drivers */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Key Demand Drivers</h4>
                <div className="space-y-4">
                    {demandForecastData.drivers.map((driver, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">{driver.driver}</p>
                                <div className="mt-1 flex items-center">
                                    <span className="text-xs text-gray-500 mr-3">Correlation: {driver.correlation}</span>
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${driver.correlation > 0 ? 'bg-green-500' : 'bg-red-500'
                                                }`}
                                            style={{ width: `${Math.abs(driver.correlation) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <span className={`text-sm font-medium ml-4 ${driver.impact.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                }`}>
                                {driver.impact}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderCompetitiveAnalysis = () => (
        <div className="space-y-6">
            {/* Competitive Positioning */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Competitive Positioning Matrix</h4>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-3">Performance Metrics</h5>
                        <div className="space-y-3">
                            {['Price Competitiveness', 'Quality Perception', 'Innovation Index', 'Customer Satisfaction'].map((metric, idx) => (
                                <div key={idx}>
                                    <p className="text-xs text-gray-600 mb-1">{metric}</p>
                                    <div className="space-y-1">
                                        {competitiveData.positioning.map((company, index) => (
                                            <div key={index} className="flex items-center">
                                                <span className="text-xs text-gray-700 w-16">{company.company}</span>
                                                <div className="flex-1 mx-2">
                                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                                        <div
                                                            className={`h-3 rounded-full ${company.company === 'Us' ? 'bg-blue-600' : 'bg-gray-400'
                                                                }`}
                                                            style={{
                                                                width: `${metric === 'Price Competitiveness' ? company.price :
                                                                    metric === 'Quality Perception' ? company.quality :
                                                                        metric === 'Innovation Index' ? company.innovation :
                                                                            company.customerSat
                                                                    }%`
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <span className="text-xs text-gray-600 w-10 text-right">
                                                    {metric === 'Price Competitiveness' ? company.price :
                                                        metric === 'Quality Perception' ? company.quality :
                                                            metric === 'Innovation Index' ? company.innovation :
                                                                company.customerSat}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-3">Competitive Radar</h5>
                        <div className="relative h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                            <div className="text-center text-gray-400">
                                <Activity className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-xs">Radar chart visualization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Strengths & Weaknesses Analysis */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Competitive SWOT Analysis</h4>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-3">Our Position</h5>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs font-medium text-green-700 mb-2">Strengths</p>
                                <ul className="space-y-1">
                                    {competitiveData.strengthsWeaknesses.us.strengths.map((strength, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">+</span>
                                            {strength}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-red-700 mb-2">Weaknesses</p>
                                <ul className="space-y-1">
                                    {competitiveData.strengthsWeaknesses.us.weaknesses.map((weakness, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                                            <span className="text-red-500 mr-2">-</span>
                                            {weakness}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-3">Competitor Landscape</h5>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs font-medium text-green-700 mb-2">Their Strengths</p>
                                <ul className="space-y-1">
                                    {competitiveData.strengthsWeaknesses.competitors.strengths.map((strength, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">+</span>
                                            {strength}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-red-700 mb-2">Their Weaknesses</p>
                                <ul className="space-y-1">
                                    {competitiveData.strengthsWeaknesses.competitors.weaknesses.map((weakness, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                                            <span className="text-red-500 mr-2">-</span>
                                            {weakness}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderRegionalPerformance = () => (
        <div className="space-y-6">
            {/* Regional Map */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Global Market Presence</h4>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center text-gray-400">
                        <Globe className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">Interactive world map with regional performance</p>
                    </div>
                </div>

                {/* Regional Stats */}
                <div className="grid grid-cols-5 gap-4">
                    {regionalData.map.map((region, index) => (
                        <div key={index} className="text-center">
                            <p className="text-xs text-gray-500">{region.region}</p>
                            <p className="text-lg font-bold text-gray-900">{region.share}%</p>
                            <p className={`text-xs font-medium ${region.growth > 0 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                {region.growth > 0 ? '+' : ''}{region.growth}%
                            </p>
                            <p className="text-xs text-gray-600 mt-1">{(region.units / 1000).toFixed(0)}K units</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Regional Deep Dive */}
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-base font-semibold text-gray-900 mb-4">Regional Performance Matrix</h4>
                    <div className="space-y-3">
                        {regionalData.map.map((region, index) => (
                            <div key={index} className="border rounded-lg p-3">
                                <div className="flex items-center justify-between mb-2">
                                    <h5 className="text-sm font-medium text-gray-900">{region.region}</h5>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${region.potential === 'very high' ? 'bg-green-100 text-green-700' :
                                        region.potential === 'high' ? 'bg-blue-100 text-blue-700' :
                                            'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {region.potential} potential
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-xs">
                                    <div>
                                        <span className="text-gray-500">Share</span>
                                        <p className="font-medium text-gray-900">{region.share}%</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Units</span>
                                        <p className="font-medium text-gray-900">{(region.units / 1000).toFixed(0)}K</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Growth</span>
                                        <p className={`font-medium ${region.growth > 0 ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                            {region.growth > 0 ? '+' : ''}{region.growth}%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-base font-semibold text-gray-900 mb-4">Market Opportunities</h4>
                    <div className="space-y-4">
                        {regionalData.opportunities.map((opp, index) => (
                            <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-4 border border-blue-200">
                                <div className="flex items-center justify-between mb-2">
                                    <h5 className="text-sm font-semibold text-gray-900">{opp.market}</h5>
                                    <span className="text-sm font-medium text-blue-600">{opp.value}</span>
                                </div>
                                <p className="text-sm text-gray-700 mb-2">{opp.opportunity}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="text-xs text-gray-500 mr-2">Success Probability:</span>
                                        <div className="w-24 bg-gray-200 rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full bg-blue-600"
                                                style={{ width: `${opp.probability}%` }}
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-gray-700 ml-2">{opp.probability}%</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Analytics Header */}
            <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <h2 className="text-lg font-semibold text-gray-900">Market Analytics</h2>
                        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                            {[
                                { id: 'market-share', name: 'Market Share', icon: Target },
                                { id: 'demand-forecast', name: 'Demand Forecast', icon: TrendingUp },
                                { id: 'competitive', name: 'Competitive Analysis', icon: Users },
                                { id: 'regional', name: 'Regional Performance', icon: Globe }
                            ].map((view) => {
                                const Icon = view.icon;
                                return (
                                    <button
                                        key={view.id}
                                        onClick={() => setSelectedView(view.id)}
                                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${selectedView === view.id
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                    >
                                        <Icon className="w-3 h-3" />
                                        <span>{view.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <select
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                            className="text-sm bg-white border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="1m">Last Month</option>
                            <option value="3m">Last 3 Months</option>
                            <option value="6m">Last 6 Months</option>
                            <option value="12m">Last 12 Months</option>
                            <option value="all">All Time</option>
                        </select>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                            <Filter className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                            <Maximize2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                            <Download className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Dynamic Content Based on Selected View */}
            <motion.div
                key={selectedView}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                {selectedView === 'market-share' && renderMarketShareChart()}
                {selectedView === 'demand-forecast' && renderDemandForecast()}
                {selectedView === 'competitive' && renderCompetitiveAnalysis()}
                {selectedView === 'regional' && renderRegionalPerformance()}
            </motion.div>
        </div>
    );
} 