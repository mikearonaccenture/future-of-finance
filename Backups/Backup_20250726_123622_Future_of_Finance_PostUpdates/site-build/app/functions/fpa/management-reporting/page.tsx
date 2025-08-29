'use client';

import {
    Activity,
    AlertCircle,
    ArrowLeft,
    ArrowRight,
    BarChart3,
    BookOpen,
    Building,
    CheckCircle,
    ChevronRight,
    DollarSign,
    Factory,
    FileText,
    Globe,
    Home,
    Leaf,
    Link2,
    Lock,
    Package,
    Search,
    Shield,
    Smartphone,
    Target,
    TrendingDown,
    TrendingUp,
    Truck,
    Wrench,
    X
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

// Mock user data - in production, this would come from auth/session
const currentUser = {
    name: 'Sarah Johnson',
    role: 'CFO',
    avatar: '/api/placeholder/150/150',
    department: 'Finance'
};

// Icon mapping for business dimensions
const categoryIcons: { [key: string]: any } = {
    Market: Globe,
    'Supply Chain': Truck,
    Portfolio: Package,
    Pricing: DollarSign,
    Cost: TrendingDown,
    Quality: Factory,
    Financial: BarChart3,
    Digital: Smartphone,
    Aftermarket: Wrench,
    Compliance: Shield,
    Sustainability: Leaf,
    Strategy: Target,
    Capital: Building,
    Volume: Activity
};

// AI-generated insights based on user role - linked to Business Insight Consoles
const getPersonalizedInsights = (role: string) => {
    // Base insights connected to Automotive Business Consoles
    const baseInsights = [
        {
            id: 1,
            title: 'Market Share Declining',
            metric: '18.2%',
            change: -0.3,
            status: 'critical',
            insight: 'Lost 0.3% to new EV entrants',
            actions: ['Competitive analysis', 'Counter strategy'],
            category: 'Market',
            consoleId: 'market-demand',
            priority: 1
        },
        {
            id: 2,
            title: 'Supply Chain Crisis',
            metric: '94%',
            change: -2.1,
            status: 'critical',
            insight: 'Chip shortage affecting 3 models',
            actions: ['Alt suppliers', 'Adjust production'],
            category: 'Supply Chain',
            consoleId: 'supply-chain',
            priority: 2
        },
        {
            id: 3,
            title: 'EV Mix Below Target',
            metric: '42%',
            change: 2.1,
            status: 'warning',
            insight: 'Premium EV adoption lagging',
            actions: ['Review pricing', 'Marketing push'],
            category: 'Portfolio',
            consoleId: 'product-portfolio',
            priority: 3
        },
        {
            id: 4,
            title: 'Revenue/Unit Rising',
            metric: '$48.5K',
            change: 3.2,
            status: 'success',
            insight: 'ATP up $1,500 via mix',
            actions: ['Sustain strategy', 'Expand premium'],
            category: 'Pricing',
            consoleId: 'pricing-revenue',
            priority: 4
        },
        {
            id: 5,
            title: 'Cost Per Vehicle',
            metric: '$32.5K',
            change: -8.3,
            status: 'warning',
            insight: 'Material costs up $2,500',
            actions: ['Negotiate suppliers', 'Design optimization'],
            category: 'Cost',
            consoleId: 'cost-productivity',
            priority: 5
        },
        {
            id: 6,
            title: 'Manufacturing Excellence',
            metric: '92.3%',
            change: 1.8,
            status: 'success',
            insight: 'Zero critical quality issues',
            actions: ['Best practice sharing', 'Expand to all plants'],
            category: 'Quality',
            consoleId: 'manufacturing-quality',
            priority: 6
        },
        {
            id: 7,
            title: 'EBIT Margin Pressure',
            metric: '12.5%',
            change: 0.8,
            status: 'warning',
            insight: 'Commodity impact -120bps',
            actions: ['Cost recovery', 'Efficiency gains'],
            category: 'Financial',
            consoleId: 'financial-results',
            priority: 7
        },
        {
            id: 8,
            title: 'Digital Revenue Growth',
            metric: '68%',
            change: 15,
            status: 'success',
            insight: 'Connected services +45%',
            actions: ['Scale offerings', 'New features'],
            category: 'Digital',
            consoleId: 'digital-innovation',
            priority: 8
        },
        {
            id: 9,
            title: 'Service Revenue Up',
            metric: '$3.2B',
            change: 12,
            status: 'success',
            insight: 'Parts e-commerce +28%',
            actions: ['Expand online', 'Loyalty program'],
            category: 'Aftermarket',
            consoleId: 'aftermarket-services',
            priority: 9
        },
        {
            id: 10,
            title: 'Safety Excellence',
            metric: '98%',
            change: 0.5,
            status: 'success',
            insight: 'Zero recalls in 12 months',
            actions: ['Maintain standards', 'Predictive quality'],
            category: 'Compliance',
            consoleId: 'risk-compliance',
            priority: 10
        },
        {
            id: 11,
            title: 'EV Transition',
            metric: '18%',
            change: 8,
            status: 'info',
            insight: '3 plants carbon neutral',
            actions: ['Accelerate rollout', 'Public reporting'],
            category: 'Sustainability',
            consoleId: 'sustainability-esg',
            priority: 11
        },
        {
            id: 12,
            title: 'Competitive Position',
            metric: '#3',
            change: 0,
            status: 'info',
            insight: 'Tech gap closing on ADAS',
            actions: ['Partnership strategy', 'R&D investment'],
            category: 'Strategy',
            consoleId: 'competitive-intelligence',
            priority: 12
        },
        {
            id: 13,
            title: 'Capital Efficiency',
            metric: '18.2%',
            change: 1.2,
            status: 'success',
            insight: 'ROIC improving via optimization',
            actions: ['Continue capex discipline', 'Focus high-ROI projects'],
            category: 'Capital',
            consoleId: 'capital-allocation',
            priority: 13
        },
        {
            id: 14,
            title: 'Production Volume',
            metric: '2.8M',
            change: 8.5,
            status: 'success',
            insight: 'Q4 capacity at 88% utilization',
            actions: ['Plan Q1 maintenance', 'Optimize shift patterns'],
            category: 'Volume',
            consoleId: 'volume-production',
            priority: 14
        }
    ];

    // Role-specific prioritization for automotive company
    const roleSpecificOrder = {
        CFO: [1, 2, 7, 5, 3, 4, 13, 11, 12, 6, 8, 9, 10, 14], // Focus on market share, supply chain, financial performance
        Controller: [5, 7, 6, 10, 9, 4, 14, 1, 2, 3, 8, 13, 11, 12], // Focus on costs, margins, quality, compliance
        Analyst: [1, 3, 4, 8, 12, 14, 6, 7, 2, 5, 9, 13, 10, 11] // Focus on market analysis, portfolio, digital trends
    };

    const insights = {
        CFO: baseInsights.sort((a, b) =>
            roleSpecificOrder.CFO.indexOf(a.id) - roleSpecificOrder.CFO.indexOf(b.id)
        ),
        Controller: baseInsights.sort((a, b) =>
            roleSpecificOrder.Controller.indexOf(a.id) - roleSpecificOrder.Controller.indexOf(b.id)
        ),
        Analyst: baseInsights.sort((a, b) =>
            roleSpecificOrder.Analyst.indexOf(a.id) - roleSpecificOrder.Analyst.indexOf(b.id)
        )
    };

    return insights[role as keyof typeof insights] || insights.CFO;
};

export default function ManagementReportingPlatform() {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');
    const [insights] = useState(getPersonalizedInsights(currentUser.role));
    const [selectedInsight, setSelectedInsight] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would trigger AI-powered search
        console.log('Searching for:', searchQuery);
    };

    const handleInsightClick = (insight: any) => {
        setSelectedInsight(insight);
        setShowModal(true);
    };

    const getVisualizationType = (category: string) => {
        // Return different visualization components based on business category
        const visualizations: { [key: string]: string } = {
            Market: 'pie', // Market share pie chart
            'Supply Chain': 'flow', // Supply chain flow diagram
            Portfolio: 'stacked', // Stacked bar for product mix
            Pricing: 'line', // Price trend line
            Cost: 'waterfall', // Cost breakdown waterfall
            Quality: 'gauge', // Quality gauge
            Financial: 'combo', // Combo chart for financial metrics
            Digital: 'progress', // Progress bars for digital adoption
            Aftermarket: 'donut', // Donut chart for service revenue
            Compliance: 'score', // Compliance score card
            Sustainability: 'area', // Area chart for ESG progress
            Strategy: 'radar', // Radar chart for competitive position
            Capital: 'scatter', // Scatter plot for ROI
            Volume: 'bar' // Bar chart for production volume
        };
        return visualizations[category] || 'bar';
    };

    const navigationItems = [
        {
            name: 'Home',
            href: '/functions/fpa/management-reporting',
            icon: Home,
            gradient: 'from-blue-500 to-blue-600'
        },
        {
            name: 'Executive Summary',
            href: '/functions/fpa/management-reporting/executive-summary',
            icon: BarChart3,
            gradient: 'from-purple-500 to-purple-600'
        },
        {
            name: 'Monthly Operating Report',
            href: '/functions/fpa/management-reporting/monthly-report',
            icon: FileText,
            gradient: 'from-green-500 to-green-600'
        },
        {
            name: 'Business Insight Consoles',
            href: '/functions/fpa/management-reporting/business-consoles',
            icon: Target,
            gradient: 'from-orange-500 to-orange-600'
        },
        {
            name: 'Report HUB',
            href: '/functions/fpa/management-reporting/report-hub',
            icon: BookOpen,
            gradient: 'from-red-500 to-red-600'
        },
        {
            name: 'Connected Enterprise Planning',
            href: '/functions/fpa/forecasting',
            icon: Link2,
            gradient: 'from-indigo-500 to-indigo-600'
        },
        {
            name: 'Month-end Close',
            href: '/functions/fpa/management-reporting/month-end-close',
            icon: Lock,
            gradient: 'from-gray-500 to-gray-600'
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'success': return 'text-green-600 bg-green-50';
            case 'warning': return 'text-yellow-600 bg-yellow-50';
            case 'critical': return 'text-red-600 bg-red-50';
            default: return 'text-blue-600 bg-blue-50';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'success': return <CheckCircle className="w-5 h-5" />;
            case 'warning': return <AlertCircle className="w-5 h-5" />;
            case 'critical': return <AlertCircle className="w-5 h-5" />;
            default: return <TrendingUp className="w-5 h-5" />;
        }
    };

    const renderMiniVisualization = (insight: any, type: string) => {
        const getStatusClasses = () => {
            if (insight.status === 'success') return { bg: 'bg-green-400', border: 'border-green-400', text: 'text-green-600' };
            if (insight.status === 'warning') return { bg: 'bg-amber-400', border: 'border-amber-400', text: 'text-amber-600' };
            if (insight.status === 'critical') return { bg: 'bg-red-400', border: 'border-red-400', text: 'text-red-600' };
            return { bg: 'bg-blue-400', border: 'border-blue-400', text: 'text-blue-600' };
        };

        const statusClasses = getStatusClasses();

        switch (type) {
            case 'pie':
                // Market share pie chart
                return (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full border-4 border-gray-300 relative overflow-hidden">
                            <div
                                className={`absolute inset-0 ${statusClasses.bg}`}
                                style={{ clipPath: `polygon(50% 50%, 50% 0%, ${18.2}% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 0%, 50% 0%)` }}
                            />
                        </div>
                        <span className="ml-2 text-xs font-bold text-gray-700">18.2%</span>
                    </div>
                );

            case 'gauge':
                // Quality gauge
                return (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative">
                            <svg className="w-8 h-8 transform -rotate-90">
                                <circle cx="16" cy="16" r="14" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                                <circle cx="16" cy="16" r="14"
                                    stroke={insight.status === 'success' ? '#10b981' : insight.status === 'warning' ? '#f59e0b' : insight.status === 'critical' ? '#ef4444' : '#3b82f6'}
                                    strokeWidth="3" fill="none"
                                    strokeDasharray={`${2 * Math.PI * 14 * 0.923} ${2 * Math.PI * 14}`} />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">92%</span>
                        </div>
                    </div>
                );

            case 'progress':
                // Digital adoption progress bars
                return (
                    <div className="flex flex-col justify-center h-full px-1 space-y-1">
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full ${statusClasses.bg} rounded-full`} style={{ width: '68%' }} />
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full ${statusClasses.bg} rounded-full opacity-75`} style={{ width: '85%' }} />
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full ${statusClasses.bg} rounded-full opacity-50`} style={{ width: '45%' }} />
                        </div>
                    </div>
                );

            case 'line':
                // Price trend line
                return (
                    <svg className="w-full h-full" viewBox="0 0 100 32">
                        <polyline
                            points="5,28 20,24 35,26 50,18 65,15 80,12 95,8"
                            fill="none"
                            stroke={insight.status === 'success' ? '#10b981' : insight.status === 'warning' ? '#f59e0b' : insight.status === 'critical' ? '#ef4444' : '#3b82f6'}
                            strokeWidth="2"
                        />
                        <circle cx="95" cy="8" r="3" fill={insight.status === 'success' ? '#10b981' : insight.status === 'warning' ? '#f59e0b' : insight.status === 'critical' ? '#ef4444' : '#3b82f6'} />
                    </svg>
                );

            case 'donut':
                // Service revenue donut
                return (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full border-4 border-gray-300 relative overflow-hidden">
                            <div className="absolute inset-2 bg-gray-50 rounded-full" />
                            <div
                                className={`absolute inset-0 ${statusClasses.bg}`}
                                style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 75% 100%)' }}
                            />
                        </div>
                    </div>
                );

            case 'area':
                // Sustainability area chart
                return (
                    <svg className="w-full h-full" viewBox="0 0 100 32">
                        <path
                            d="M 5,28 Q 20,24 35,20 T 65,15 Q 80,12 95,5 L 95,32 L 5,32 Z"
                            fill={insight.status === 'success' ? '#10b981' : insight.status === 'warning' ? '#f59e0b' : insight.status === 'critical' ? '#ef4444' : '#3b82f6'}
                            fillOpacity="0.3"
                        />
                        <path
                            d="M 5,28 Q 20,24 35,20 T 65,15 Q 80,12 95,5"
                            fill="none"
                            stroke={insight.status === 'success' ? '#10b981' : insight.status === 'warning' ? '#f59e0b' : insight.status === 'critical' ? '#ef4444' : '#3b82f6'}
                            strokeWidth="2"
                        />
                    </svg>
                );

            default:
                // Default bar chart
                return (
                    <div className="flex items-end justify-between h-full px-1 space-x-0.5">
                        {[40, 55, 35, 60, 45, 70, 50, 65].map((height, idx) => (
                            <div
                                key={idx}
                                className={`flex-1 rounded-t transition-all duration-300 ${idx === 7 ? statusClasses.bg : 'bg-gray-300'}`}
                                style={{ height: `${height}%` }}
                            />
                        ))}
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                {/* Left Navigation - Matching layout.tsx */}
                <div className="w-80 bg-white shadow-lg h-screen sticky top-0">
                    <div className="p-6">
                        {/* Back to Finance Portal */}
                        <Link
                            href="/functions/fpa"
                            className="group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all mb-6"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Back to Finance Portal</span>
                        </Link>

                        {/* Platform Title */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900">Management</h2>
                            <p className="text-lg text-gray-600">Reporting Platform</p>
                            <div className="w-12 h-1 bg-blue-600 rounded-full mt-2"></div>
                        </div>

                        {/* Navigation Menu - Matching layout.tsx style */}
                        <nav className="space-y-2">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`group flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${isActive
                                            ? `bg-gradient-to-r ${item.gradient} text-white shadow-md transform scale-105`
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-lg transition-transform group-hover:scale-110 ${isActive
                                            ? 'bg-white/20'
                                            : `bg-gradient-to-r ${item.gradient} text-white`
                                            }`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <span className={`text-sm font-medium ${isActive ? '' : 'group-hover:text-gray-900'}`}>
                                            {item.name}
                                        </span>
                                        <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                                            }`} />
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">

                    {/* Hero Section with lots of negative space */}
                    <div className="bg-white px-8 py-12">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* User Profile */}
                            <div className="mb-8">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    {/* Avatar with actual image */}
                                    <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white">
                                        <img
                                            src="/images/Sarah-Johnson-CFO-headshot.png"
                                            alt="Sarah Johnson"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Status indicator */}
                                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                                </div>
                                <h1 className="text-3xl font-light text-gray-900">
                                    Hi Sarah, how can I help you?
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">{currentUser.name} • {currentUser.role}</p>
                            </div>

                            {/* AI-Powered Search Bar */}
                            <form onSubmit={handleSearch} className="mb-16">
                                <div className="relative max-w-2xl mx-auto">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Ask anything about your business data..."
                                        className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                                    >
                                        AI Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* AI-Generated Insights - 14 Cards Linked to Business Consoles */}
                    <div className="bg-white px-8 pb-12">
                        <div className="max-w-[2400px] mx-auto px-16">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-left">
                                Your Personalized AI-driven Insights & Actions
                            </h2>

                            {/* First Row - Top 5 Critical Insights */}
                            <div className="grid grid-cols-5 gap-5 mb-5">
                                {insights.slice(0, 5).map((insight) => (
                                    <div
                                        key={insight.id}
                                        className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group flex flex-col min-h-[240px]"
                                        onClick={() => handleInsightClick(insight)}
                                    >
                                        {/* Status indicator bar */}
                                        <div className={`absolute top-0 left-0 w-full h-1 ${insight.status === 'success' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                            insight.status === 'warning' ? 'bg-gradient-to-r from-yellow-500 to-amber-500' :
                                                insight.status === 'critical' ? 'bg-gradient-to-r from-red-500 to-rose-500' :
                                                    'bg-gradient-to-r from-blue-500 to-indigo-500'
                                            }`} />

                                        {/* Top Section with Icon and Change */}
                                        <div className="flex items-start justify-between mb-2">
                                            {/* Category Icon */}
                                            <div className={`p-2 rounded-lg ${insight.status === 'success' ? 'bg-green-50' :
                                                insight.status === 'warning' ? 'bg-amber-50' :
                                                    insight.status === 'critical' ? 'bg-red-50' :
                                                        'bg-blue-50'
                                                }`}>
                                                {(() => {
                                                    const Icon = categoryIcons[insight.category] || Activity;
                                                    return <Icon className={`w-4 h-4 ${insight.status === 'success' ? 'text-green-600' :
                                                        insight.status === 'warning' ? 'text-amber-600' :
                                                            insight.status === 'critical' ? 'text-red-600' :
                                                                'text-blue-600'
                                                        }`} />;
                                                })()}
                                            </div>

                                            {/* Change indicator with mini sparkline */}
                                            <div className="flex flex-col items-end">
                                                <span className={`text-sm font-bold ${insight.change > 0 ? 'text-green-600' :
                                                    insight.change < 0 ? 'text-red-600' : 'text-gray-600'
                                                    }`}>
                                                    {insight.change > 0 ? '+' : ''}{insight.change}%
                                                </span>
                                                {/* Mini trend indicator */}
                                                <div className="flex items-center mt-0.5">
                                                    {insight.change > 0 ?
                                                        <TrendingUp className="w-3 h-3 text-green-500" /> :
                                                        insight.change < 0 ?
                                                            <TrendingDown className="w-3 h-3 text-red-500" /> :
                                                            <Activity className="w-3 h-3 text-gray-400" />
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {/* Metric with Visual */}
                                        <div className="mb-2">
                                            <p className="text-2xl font-bold text-gray-900">{insight.metric}</p>
                                            <h3 className="text-xs font-semibold text-gray-700 line-clamp-1 mt-0.5">{insight.title}</h3>

                                            {/* Dynamic visualization based on category */}
                                            <div className="mt-2 h-8 bg-gray-50 rounded overflow-hidden">
                                                {renderMiniVisualization(insight, getVisualizationType(insight.category))}
                                            </div>
                                        </div>

                                        {/* Insight */}
                                        <p className="text-xs text-gray-600 mb-2 line-clamp-1 font-medium">{insight.insight}</p>

                                        {/* Actions Preview with Category */}
                                        <div className="border-t pt-2 mt-auto">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-medium text-gray-500">{insight.category}</span>
                                                <div className="flex items-center text-xs text-blue-600 group-hover:text-blue-700">
                                                    <span className="font-medium">View Details</span>
                                                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Second Row - Next 5 Important Insights */}
                            <div className="grid grid-cols-5 gap-5 mb-5">
                                {insights.slice(5, 10).map((insight) => (
                                    <div
                                        key={insight.id}
                                        className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group flex flex-col min-h-[240px]"
                                        onClick={() => handleInsightClick(insight)}
                                    >
                                        {/* Status indicator bar */}
                                        <div className={`absolute top-0 left-0 w-full h-1 ${insight.status === 'success' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                            insight.status === 'warning' ? 'bg-gradient-to-r from-yellow-500 to-amber-500' :
                                                insight.status === 'critical' ? 'bg-gradient-to-r from-red-500 to-rose-500' :
                                                    'bg-gradient-to-r from-blue-500 to-indigo-500'
                                            }`} />

                                        {/* Top Section with Icon and Change */}
                                        <div className="flex items-start justify-between mb-2">
                                            {/* Category Icon */}
                                            <div className={`p-2 rounded-lg ${insight.status === 'success' ? 'bg-green-50' :
                                                insight.status === 'warning' ? 'bg-amber-50' :
                                                    insight.status === 'critical' ? 'bg-red-50' :
                                                        'bg-blue-50'
                                                }`}>
                                                {(() => {
                                                    const Icon = categoryIcons[insight.category] || Activity;
                                                    return <Icon className={`w-4 h-4 ${insight.status === 'success' ? 'text-green-600' :
                                                        insight.status === 'warning' ? 'text-amber-600' :
                                                            insight.status === 'critical' ? 'text-red-600' :
                                                                'text-blue-600'
                                                        }`} />;
                                                })()}
                                            </div>

                                            {/* Change indicator with mini sparkline */}
                                            <div className="flex flex-col items-end">
                                                <span className={`text-sm font-bold ${insight.change > 0 ? 'text-green-600' :
                                                    insight.change < 0 ? 'text-red-600' : 'text-gray-600'
                                                    }`}>
                                                    {insight.change > 0 ? '+' : ''}{insight.change}%
                                                </span>
                                                {/* Mini trend indicator */}
                                                <div className="flex items-center mt-0.5">
                                                    {insight.change > 0 ?
                                                        <TrendingUp className="w-3 h-3 text-green-500" /> :
                                                        insight.change < 0 ?
                                                            <TrendingDown className="w-3 h-3 text-red-500" /> :
                                                            <Activity className="w-3 h-3 text-gray-400" />
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {/* Metric with Visual */}
                                        <div className="mb-2">
                                            <p className="text-2xl font-bold text-gray-900">{insight.metric}</p>
                                            <h3 className="text-xs font-semibold text-gray-700 line-clamp-1 mt-0.5">{insight.title}</h3>

                                            {/* Dynamic visualization based on category */}
                                            <div className="mt-2 h-8 bg-gray-50 rounded overflow-hidden">
                                                {renderMiniVisualization(insight, getVisualizationType(insight.category))}
                                            </div>
                                        </div>

                                        {/* Insight */}
                                        <p className="text-xs text-gray-600 mb-2 line-clamp-1 font-medium">{insight.insight}</p>

                                        {/* Actions Preview with Category */}
                                        <div className="border-t pt-2 mt-auto">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-medium text-gray-500">{insight.category}</span>
                                                <div className="flex items-center text-xs text-blue-600 group-hover:text-blue-700">
                                                    <span className="font-medium">View Details</span>
                                                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Third Row - Last 4 Insights */}
                            <div className="grid grid-cols-5 gap-5 mb-5">
                                {insights.slice(10, 14).map((insight) => (
                                    <div
                                        key={insight.id}
                                        className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group flex flex-col min-h-[240px]"
                                        onClick={() => handleInsightClick(insight)}
                                    >
                                        {/* Status indicator bar */}
                                        <div className={`absolute top-0 left-0 w-full h-1 ${insight.status === 'success' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                            insight.status === 'warning' ? 'bg-gradient-to-r from-yellow-500 to-amber-500' :
                                                insight.status === 'critical' ? 'bg-gradient-to-r from-red-500 to-rose-500' :
                                                    'bg-gradient-to-r from-blue-500 to-indigo-500'
                                            }`} />

                                        {/* Top Section with Icon and Change */}
                                        <div className="flex items-start justify-between mb-2">
                                            {/* Category Icon */}
                                            <div className={`p-2 rounded-lg ${insight.status === 'success' ? 'bg-green-50' :
                                                insight.status === 'warning' ? 'bg-amber-50' :
                                                    insight.status === 'critical' ? 'bg-red-50' :
                                                        'bg-blue-50'
                                                }`}>
                                                {(() => {
                                                    const Icon = categoryIcons[insight.category] || Activity;
                                                    return <Icon className={`w-4 h-4 ${insight.status === 'success' ? 'text-green-600' :
                                                        insight.status === 'warning' ? 'text-amber-600' :
                                                            insight.status === 'critical' ? 'text-red-600' :
                                                                'text-blue-600'
                                                        }`} />;
                                                })()}
                                            </div>

                                            {/* Change indicator with mini sparkline */}
                                            <div className="flex flex-col items-end">
                                                <span className={`text-sm font-bold ${insight.change > 0 ? 'text-green-600' :
                                                    insight.change < 0 ? 'text-red-600' : 'text-gray-600'
                                                    }`}>
                                                    {insight.change > 0 ? '+' : ''}{insight.change}%
                                                </span>
                                                {/* Mini trend indicator */}
                                                <div className="flex items-center mt-0.5">
                                                    {insight.change > 0 ?
                                                        <TrendingUp className="w-3 h-3 text-green-500" /> :
                                                        insight.change < 0 ?
                                                            <TrendingDown className="w-3 h-3 text-red-500" /> :
                                                            <Activity className="w-3 h-3 text-gray-400" />
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {/* Metric with Visual */}
                                        <div className="mb-2">
                                            <p className="text-2xl font-bold text-gray-900">{insight.metric}</p>
                                            <h3 className="text-xs font-semibold text-gray-700 line-clamp-1 mt-0.5">{insight.title}</h3>

                                            {/* Dynamic visualization based on category */}
                                            <div className="mt-2 h-8 bg-gray-50 rounded overflow-hidden">
                                                {renderMiniVisualization(insight, getVisualizationType(insight.category))}
                                            </div>
                                        </div>

                                        {/* Insight */}
                                        <p className="text-xs text-gray-600 mb-2 line-clamp-1 font-medium">{insight.insight}</p>

                                        {/* Actions Preview with Category */}
                                        <div className="border-t pt-2 mt-auto">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-medium text-gray-500">{insight.category}</span>
                                                <div className="flex items-center text-xs text-blue-600 group-hover:text-blue-700">
                                                    <span className="font-medium">View Details</span>
                                                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Insight Details */}
            {showModal && selectedInsight && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-gray-50 to-white border-b px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className={`p-3 rounded-lg ${selectedInsight.status === 'success' ? 'bg-green-50' :
                                        selectedInsight.status === 'warning' ? 'bg-amber-50' :
                                            selectedInsight.status === 'critical' ? 'bg-red-50' :
                                                'bg-blue-50'
                                        }`}>
                                        {(() => {
                                            const Icon = categoryIcons[selectedInsight.category] || Activity;
                                            return <Icon className={`w-6 h-6 ${selectedInsight.status === 'success' ? 'text-green-600' :
                                                selectedInsight.status === 'warning' ? 'text-amber-600' :
                                                    selectedInsight.status === 'critical' ? 'text-red-600' :
                                                        'text-blue-600'
                                                }`} />;
                                        })()}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">{selectedInsight.title}</h2>
                                        <p className="text-sm text-gray-500">{selectedInsight.category} Performance</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="px-6 py-4 overflow-y-auto max-h-[calc(90vh-200px)]">
                            {/* Key Metric Display */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-sm text-gray-600 mb-1">Current Performance</p>
                                    <p className="text-3xl font-bold text-gray-900">{selectedInsight.metric}</p>
                                    <div className="flex items-center mt-2">
                                        <span className={`text-sm font-medium ${selectedInsight.change > 0 ? 'text-green-600' :
                                            selectedInsight.change < 0 ? 'text-red-600' : 'text-gray-600'
                                            }`}>
                                            {selectedInsight.change > 0 ? '+' : ''}{selectedInsight.change}%
                                        </span>
                                        {selectedInsight.change > 0 ?
                                            <TrendingUp className="w-4 h-4 text-green-500 ml-1" /> :
                                            selectedInsight.change < 0 ?
                                                <TrendingDown className="w-4 h-4 text-red-500 ml-1" /> :
                                                <Activity className="w-4 h-4 text-gray-400 ml-1" />
                                        }
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-sm text-gray-600 mb-1">Target</p>
                                    <p className="text-3xl font-bold text-gray-900">
                                        {selectedInsight.category === 'Market' ? '20%' :
                                            selectedInsight.category === 'Supply Chain' ? '98%' :
                                                selectedInsight.category === 'Portfolio' ? '45%' :
                                                    selectedInsight.category === 'Pricing' ? '$52K' :
                                                        selectedInsight.category === 'Cost' ? '$30K' :
                                                            selectedInsight.category === 'Quality' ? '95%' :
                                                                selectedInsight.category === 'Financial' ? '14%' :
                                                                    selectedInsight.category === 'Digital' ? '80%' :
                                                                        selectedInsight.category === 'Aftermarket' ? '$3.5B' :
                                                                            selectedInsight.category === 'Compliance' ? '99%' :
                                                                                selectedInsight.category === 'Sustainability' ? '85%' :
                                                                                    selectedInsight.category === 'Strategy' ? '#2' :
                                                                                        selectedInsight.category === 'Capital' ? '20%' :
                                                                                            '3.2M'}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">Year-end target</p>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-sm text-gray-600 mb-1">Status</p>
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${selectedInsight.status === 'success' ? 'bg-green-100 text-green-800' :
                                        selectedInsight.status === 'warning' ? 'bg-amber-100 text-amber-800' :
                                            selectedInsight.status === 'critical' ? 'bg-red-100 text-red-800' :
                                                'bg-blue-100 text-blue-800'
                                        }`}>
                                        {selectedInsight.status === 'success' ? 'On Track' :
                                            selectedInsight.status === 'warning' ? 'Needs Attention' :
                                                selectedInsight.status === 'critical' ? 'Critical' :
                                                    'Monitoring'}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Updated 2 hours ago</p>
                                </div>
                            </div>

                            {/* Detailed Visualization */}
                            <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trend</h3>
                                <div className="h-48 bg-white rounded-lg flex items-center justify-center">
                                    {/* This would be a more detailed chart in production */}
                                    <p className="text-gray-500">Detailed {getVisualizationType(selectedInsight.category)} visualization</p>
                                </div>
                            </div>

                            {/* AI-Driven Insights */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI-Driven Analysis</h3>
                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                    <p className="text-sm text-gray-700">{selectedInsight.insight}</p>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm font-medium text-gray-900">Key Drivers:</p>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {selectedInsight.category === 'Market' && (
                                                <>
                                                    <li>• New EV competitors entering key markets</li>
                                                    <li>• Price pressure in mid-size SUV segment</li>
                                                    <li>• Strong performance in luxury segment (+2.1%)</li>
                                                </>
                                            )}
                                            {selectedInsight.category === 'Supply Chain' && (
                                                <>
                                                    <li>• Global semiconductor shortage impacting production</li>
                                                    <li>• Alternative supplier qualification 65% complete</li>
                                                    <li>• Logistics costs increased 18% YoY</li>
                                                </>
                                            )}
                                            {selectedInsight.category === 'Quality' && (
                                                <>
                                                    <li>• PPM improved by 23% through AI quality control</li>
                                                    <li>• Predictive maintenance reducing defects</li>
                                                    <li>• New plant achieving world-class standards</li>
                                                </>
                                            )}
                                            {/* Add more category-specific insights */}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Recommended Actions */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommended Actions</h3>
                                <div className="space-y-3">
                                    {selectedInsight.actions.map((action: string, idx: number) => (
                                        <div key={idx} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <span className="text-sm font-bold text-blue-600">{idx + 1}</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900">{action}</p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {idx === 0 ? 'Immediate priority - Next 7 days' :
                                                        idx === 1 ? 'Short-term - Next 30 days' :
                                                            'Medium-term - Next quarter'}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="bg-gray-50 px-6 py-4 border-t flex items-center justify-between">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    router.push(`/functions/fpa/management-reporting/business-consoles/${selectedInsight.consoleId}`);
                                }}
                                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                            >
                                <span>Continue to Console</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}