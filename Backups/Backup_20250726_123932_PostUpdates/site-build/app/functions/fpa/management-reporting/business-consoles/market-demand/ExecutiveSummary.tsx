import { motion } from 'framer-motion';
import {
    Activity,
    AlertCircle, CheckCircle,
    Globe,
    Target,
    TrendingDown,
    TrendingUp,
    Zap
} from 'lucide-react';

export default function ExecutiveSummary() {
    // Key Market Metrics
    const keyMetrics = [
        {
            label: 'Market Share',
            value: '18.5%',
            change: 0.8,
            vsTarget: { value: 19.2, status: 'below' },
            trend: [15.2, 16.1, 16.8, 17.2, 17.5, 18.1, 18.5],
            insight: 'Gaining share in EV segment (+2.1pp)'
        },
        {
            label: 'Total Demand',
            value: '2.3M',
            subLabel: 'units',
            change: 12.5,
            vsTarget: { value: 2.1, status: 'above' },
            trend: [1.8, 1.9, 2.0, 2.1, 2.1, 2.2, 2.3],
            insight: 'Q4 acceleration from new launches'
        },
        {
            label: 'Order Pipeline',
            value: '$8.7B',
            change: 15.2,
            vsTarget: { value: 8.0, status: 'above' },
            trend: [6.5, 6.8, 7.2, 7.5, 7.9, 8.3, 8.7],
            insight: 'Strong pre-orders for 2025 models'
        },
        {
            label: 'Customer Acquisition',
            value: '145K',
            subLabel: 'new/month',
            change: -5.3,
            vsTarget: { value: 160, status: 'below' },
            trend: [165, 158, 152, 148, 145, 142, 145],
            insight: 'Conversion rate declining'
        }
    ];

    // Market Position Summary
    const marketPosition = {
        overallRank: 3,
        totalPlayers: 12,
        strongestSegments: ['Luxury SUV', 'Electric Vehicles', 'Commercial Fleet'],
        weakestSegments: ['Compact Cars', 'Entry-level Sedans'],
        competitiveThreat: 'High',
        marketTrend: 'Growing'
    };

    // AI-Generated Strategic Insights
    const strategicInsights = [
        {
            type: 'opportunity',
            priority: 'high',
            title: 'EV Market Expansion Opportunity',
            description: 'Growing demand in EV segment with 35% YoY growth. Recommend accelerating EV production capacity.',
            impact: '$500M revenue potential',
            action: 'Increase EV production by 40%'
        },
        {
            type: 'risk',
            priority: 'critical',
            title: 'Market Share Erosion in Mid-Tier',
            description: 'Losing 0.5pp share monthly to new entrants in $30-50K segment.',
            impact: '$200M revenue at risk',
            action: 'Launch competitive pricing strategy'
        },
        {
            type: 'trend',
            priority: 'medium',
            title: 'Shift to Online Purchasing',
            description: '42% of customers now prefer online configuration and purchase.',
            impact: 'Reduce dealer costs by 15%',
            action: 'Enhance digital sales platform'
        }
    ];

    // Regional Performance
    const regionalPerformance = [
        { region: 'North America', share: 22.3, growth: 8.5, status: 'strong' },
        { region: 'Europe', share: 15.8, growth: -2.1, status: 'declining' },
        { region: 'Asia Pacific', share: 12.1, growth: 18.5, status: 'growing' },
        { region: 'Latin America', share: 28.5, growth: 5.2, status: 'stable' }
    ];

    const renderSparkline = (data: number[]) => {
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min;
        const width = 100;
        const height = 32;

        const points = data.map((value, index) => {
            const x = (index / (data.length - 1)) * width;
            const y = height - ((value - min) / range) * height;
            return `${x},${y}`;
        }).join(' ');

        return (
            <svg width={width} height={height} className="inline-block">
                <polyline
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    points={points}
                />
                <circle cx={width} cy={height - ((data[data.length - 1] - min) / range) * height} r="2" fill="#3b82f6" />
            </svg>
        );
    };

    return (
        <div className="space-y-6">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-4 gap-4">
                {keyMetrics.map((metric, index) => (
                    <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-medium text-gray-600">{metric.label}</h3>
                            {metric.change > 0 ? (
                                <TrendingUp className="w-4 h-4 text-green-500" />
                            ) : (
                                <TrendingDown className="w-4 h-4 text-red-500" />
                            )}
                        </div>

                        <div className="mb-3">
                            <p className="text-2xl font-bold text-gray-900">
                                {metric.value}
                                {metric.subLabel && (
                                    <span className="text-sm font-normal text-gray-500 ml-1">{metric.subLabel}</span>
                                )}
                            </p>
                            <p className={`text-sm font-medium ${metric.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {metric.change > 0 ? '+' : ''}{metric.change}% vs last period
                            </p>
                        </div>

                        <div className="mb-3">
                            {renderSparkline(metric.trend)}
                        </div>

                        <div className="pt-3 border-t border-gray-100">
                            <p className="text-xs text-gray-600">{metric.insight}</p>
                            <div className="mt-1 flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                    Target: {metric.vsTarget.value}{metric.subLabel ? ` ${metric.subLabel}` : '%'}
                                </span>
                                <span className={`text-xs font-medium ${metric.vsTarget.status === 'above' ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {metric.vsTarget.status === 'above' ? 'Above' : 'Below'} target
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Market Position and Regional Performance */}
            <div className="grid grid-cols-3 gap-6">
                {/* Market Position Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-blue-600" />
                        Market Position
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm text-gray-600">Overall Ranking</span>
                            <span className="text-2xl font-bold text-gray-900">
                                #{marketPosition.overallRank}
                                <span className="text-sm font-normal text-gray-500">/{marketPosition.totalPlayers}</span>
                            </span>
                        </div>

                        <div>
                            <p className="text-xs font-medium text-gray-700 mb-2">Strongest Segments</p>
                            <div className="flex flex-wrap gap-2">
                                {marketPosition.strongestSegments.map((segment) => (
                                    <span key={segment} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                        {segment}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-medium text-gray-700 mb-2">Improvement Areas</p>
                            <div className="flex flex-wrap gap-2">
                                {marketPosition.weakestSegments.map((segment) => (
                                    <span key={segment} className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                                        {segment}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-3 border-t">
                            <div className="text-center">
                                <p className="text-xs text-gray-500">Competitive Threat</p>
                                <p className={`text-sm font-medium ${marketPosition.competitiveThreat === 'High' ? 'text-red-600' : 'text-green-600'
                                    }`}>
                                    {marketPosition.competitiveThreat}
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-gray-500">Market Trend</p>
                                <p className="text-sm font-medium text-green-600">{marketPosition.marketTrend}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Regional Performance */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-blue-600" />
                        Regional Performance
                    </h3>

                    <div className="space-y-3">
                        {regionalPerformance.map((region) => (
                            <div key={region.region} className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">{region.region}</p>
                                    <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${region.status === 'strong' ? 'bg-green-500' :
                                                region.status === 'growing' ? 'bg-blue-500' :
                                                    region.status === 'stable' ? 'bg-yellow-500' :
                                                        'bg-red-500'
                                                }`}
                                            style={{ width: `${region.share}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="ml-4 text-right">
                                    <p className="text-sm font-medium text-gray-900">{region.share}%</p>
                                    <p className={`text-xs ${region.growth > 0 ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {region.growth > 0 ? '+' : ''}{region.growth}%
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 pt-4 border-t">
                        <p className="text-xs text-gray-600">
                            <span className="font-medium">Key Insight:</span> APAC region showing strongest growth potential with
                            emerging EV market demand
                        </p>
                    </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-sm p-6 text-white"
                >
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Zap className="w-5 h-5 mr-2" />
                        Quick Actions
                    </h3>

                    <div className="space-y-3">
                        <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
                            <p className="text-sm font-medium">View Demand Forecast</p>
                            <p className="text-xs opacity-80">Next 12 months projection</p>
                        </button>
                        <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
                            <p className="text-sm font-medium">Competitive Analysis</p>
                            <p className="text-xs opacity-80">Deep dive comparison</p>
                        </button>
                        <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
                            <p className="text-sm font-medium">Market Entry Strategy</p>
                            <p className="text-xs opacity-80">New segment opportunities</p>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Strategic Insights */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl shadow-sm p-6"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-blue-600" />
                    AI-Powered Strategic Insights
                </h3>

                <div className="grid grid-cols-3 gap-4">
                    {strategicInsights.map((insight, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-lg border ${insight.type === 'opportunity' ? 'bg-green-50 border-green-200' :
                                insight.type === 'risk' ? 'bg-red-50 border-red-200' :
                                    'bg-blue-50 border-blue-200'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                    {insight.type === 'opportunity' ? (
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                    ) : insight.type === 'risk' ? (
                                        <AlertCircle className="w-5 h-5 text-red-600" />
                                    ) : (
                                        <Activity className="w-5 h-5 text-blue-600" />
                                    )}
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${insight.priority === 'critical' ? 'bg-red-100 text-red-700' :
                                        insight.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                                            'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {insight.priority} priority
                                    </span>
                                </div>
                            </div>

                            <h4 className="text-sm font-semibold text-gray-900 mb-1">{insight.title}</h4>
                            <p className="text-xs text-gray-600 mb-3">{insight.description}</p>

                            <div className="space-y-2 pt-3 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">Impact</span>
                                    <span className="text-xs font-medium text-gray-900">{insight.impact}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">Action</span>
                                    <span className="text-xs font-medium text-blue-600">{insight.action}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
} 