'use client';

import AIAssistant from '@/components/fpa/AIAssistant';
import JourneySelection from '@/components/fpa/JourneySelection';
import AnnualBudgetJourney from '@/components/journeys/AnnualBudgetJourney';
import ExecutiveJourney from '@/components/journeys/ExecutiveJourney';
import LongRangeJourney from '@/components/journeys/LongRangeJourney';
import PerformanceJourney from '@/components/journeys/PerformanceJourney';
import QuarterlyJourney from '@/components/journeys/QuarterlyJourney';
import ScenariosJourney from '@/components/journeys/ScenariosJourney';

import SEO from '@/components/SEO';
import { Industry } from '@/lib/industry-config';
import {
    Activity,
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Calendar,
    ChevronRight,
    Home,
    LineChart,
    Menu,
    Target,
    TrendingUp,
    X
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Mock user data - matching Management Reporting
const currentUser = {
    name: 'Sarah Johnson',
    role: 'CFO',
    avatar: '/images/Sarah-Johnson-CFO-headshot.png',
    department: 'Finance'
};

// Mock data for the forecast chart
const mockForecastData = [
    { month: 'Jan 2025', date: '2025-01', actual: 42000000, forecast: 41500000, revenue: 42000000, expenses: 28000000, variance: 500000 },
    { month: 'Feb 2025', date: '2025-02', actual: 43500000, forecast: 43000000, revenue: 43500000, expenses: 29000000, variance: 500000 },
    { month: 'Mar 2025', date: '2025-03', actual: 45200000, forecast: 44800000, revenue: 45200000, expenses: 30000000, variance: 400000 },
    { month: 'Apr 2025', date: '2025-04', actual: 0, forecast: 46500000, revenue: 0, expenses: 0, variance: 1000000 },
    { month: 'May 2025', date: '2025-05', actual: 0, forecast: 48200000, revenue: 0, expenses: 0, variance: 1200000 },
    { month: 'Jun 2025', date: '2025-06', actual: 0, forecast: 49800000, revenue: 0, expenses: 0, variance: 800000 },
    { month: 'Jul 2025', date: '2025-07', actual: 0, forecast: 51200000, revenue: 0, expenses: 0, variance: 1500000 },
    { month: 'Aug 2025', date: '2025-08', actual: 0, forecast: 52800000, revenue: 0, expenses: 0, variance: 1800000 },
    { month: 'Sep 2025', date: '2025-09', actual: 0, forecast: 54200000, revenue: 0, expenses: 0, variance: 1200000 },
    { month: 'Oct 2025', date: '2025-10', actual: 0, forecast: 55800000, revenue: 0, expenses: 0, variance: 1600000 },
    { month: 'Nov 2025', date: '2025-11', actual: 0, forecast: 57200000, revenue: 0, expenses: 0, variance: 1400000 },
    { month: 'Dec 2025', date: '2025-12', actual: 0, forecast: 59000000, revenue: 0, expenses: 0, variance: 2000000 }
];

// Navigation items for the dropdown menu
const navigationItems = [
    {
        name: 'Executive Dashboard',
        href: '/functions/fpa/forecasting?view=executive',
        icon: BarChart3,
        gradient: 'from-purple-500 to-purple-600',
        description: 'Strategic oversight and decision-making hub'
    },
    {
        name: 'Quarterly & Monthly Forecasting',
        href: '/functions/fpa/forecasting?view=quarterly',
        icon: TrendingUp,
        gradient: 'from-blue-500 to-blue-600',
        description: 'Short-term forecasting and monthly close'
    },
    {
        name: 'Scenarios & Decisions',
        href: '/functions/fpa/forecasting?view=scenarios',
        icon: Target,
        gradient: 'from-orange-500 to-orange-600',
        description: 'What-if analysis and decision support'
    },
    {
        name: 'Annual Plan & Budget',
        href: '/functions/fpa/forecasting?view=annual',
        icon: Calendar,
        gradient: 'from-green-500 to-green-600',
        description: 'Annual planning and resource allocation'
    },
    {
        name: 'Performance & Reports',
        href: '/functions/fpa/forecasting?view=performance',
        icon: Activity,
        gradient: 'from-red-500 to-red-600',
        description: 'Real-time monitoring and reporting'
    },
    {
        name: 'Long Range Outlook',
        href: '/functions/fpa/forecasting?view=longrange',
        icon: LineChart,
        gradient: 'from-indigo-500 to-indigo-600',
        description: '3-5 year strategic planning'
    }
];

export default function ConnectedEnterprisePlanningPlatform() {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeView, setActiveView] = useState<string>('journey'); // Default to journey selection
    const [selectedJourney, setSelectedJourney] = useState<string>('');
    const [showAIAssistant, setShowAIAssistant] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [shouldPulse, setShouldPulse] = useState(true);
    const [selectedIndustry, setSelectedIndustry] = useState<Industry>('consumer-goods');
    const [notifications, setNotifications] = useState(3);

    // Get view from URL params
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const view = urlParams.get('view');
        if (view) {
            setSelectedJourney(view);
            setActiveView('selected');
        }
    }, []);

    // Stop pulsing after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => setShouldPulse(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    const handleJourneySelect = (journey: string) => {
        setSelectedJourney(journey);
        setActiveView('selected');
        // Update URL without full page refresh
        window.history.pushState({}, '', `/functions/fpa/forecasting?view=${journey}`);
    };

    const handleBackToCommandCenter = () => {
        setActiveView('journey');
        setSelectedJourney('');
        window.history.pushState({}, '', '/functions/fpa/forecasting');
    };

    // Render the selected journey component
    const renderSelectedJourney = () => {
        switch (selectedJourney) {
            case 'executive':
                return <ExecutiveJourney onBack={handleBackToCommandCenter} />;
            case 'quarterly':
                return <QuarterlyJourney onBack={handleBackToCommandCenter} />;
            case 'scenarios':
                return <ScenariosJourney onBack={handleBackToCommandCenter} />;
            case 'annual':
                return <AnnualBudgetJourney onBack={handleBackToCommandCenter} />;
            case 'performance':
                return <PerformanceJourney onBack={handleBackToCommandCenter} />;
            case 'longrange':
                return <LongRangeJourney onBack={handleBackToCommandCenter} />;
            default:
                return null;
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#f8fafc',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
            <SEO
                title="Connected Enterprise Planning Platform - AI-Powered FP&A"
                description="Experience the future of financial planning and analysis. Our AI-powered platform delivers real-time forecasting, automated scenario planning, and intelligent insights for strategic decision-making."
            />

            {/* Top Header - Matching Management Reporting Platform style */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="flex items-center justify-between h-16 px-4">
                    <div className="flex items-center space-x-4">
                        {/* Menu Toggle Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg hover:bg-gray-100 transition-all ${shouldPulse && !isMenuOpen ? 'animate-pulse bg-blue-100' : ''
                                }`}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5 text-gray-600" />
                            ) : (
                                <Menu className="w-5 h-5 text-gray-600" />
                            )}
                        </button>

                        {/* Platform Title */}
                        <div>
                            <h1 className="text-lg font-bold text-gray-900">Connected Enterprise Planning Platform</h1>
                            <div className="w-12 h-1 bg-blue-600 rounded-full mt-1"></div>
                        </div>
                    </div>

                    {/* Right Side - User Avatar */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <div className="text-right">
                                <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                                <p className="text-xs text-gray-500">{currentUser.role}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                                <img
                                    src={currentUser.avatar}
                                    alt={currentUser.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-1">
                {/* Left Navigation Dropdown */}
                <div className={`${isMenuOpen ? 'w-80' : 'w-0'} bg-white shadow-lg transition-all duration-300 overflow-hidden flex-shrink-0`}>
                    <div className="h-full flex flex-col">
                        <div className="flex-1 p-6 overflow-y-auto">
                            {/* Command Center Link */}
                            <Link
                                href="/functions/fpa/forecasting"
                                className="group flex items-center space-x-3 px-4 py-3 mb-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all"
                                onClick={handleBackToCommandCenter}
                            >
                                <div className="p-2 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 text-white">
                                    <Home className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Command Center</span>
                            </Link>

                            {/* Navigation Menu */}
                            <nav className="space-y-2">
                                {navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = selectedJourney === item.href.split('=')[1];

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleJourneySelect(item.href.split('=')[1]);
                                                setIsMenuOpen(false);
                                            }}
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
                                            <div className="flex-1">
                                                <span className={`text-sm font-medium ${isActive ? '' : 'group-hover:text-gray-900'}`}>
                                                    {item.name}
                                                </span>
                                                <p className={`text-xs mt-0.5 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                                                    {item.description}
                                                </p>
                                            </div>
                                            <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                                                }`} />
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Links Section */}
                        <div className="p-6 border-t border-gray-200 space-y-3">
                            <Link
                                href="/functions/fpa/management-reporting"
                                className="group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all"
                            >
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">Management Reporting Platform</span>
                            </Link>
                            <Link
                                href="/"
                                className="group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">Back to Future of Finance</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto">
                    {activeView === 'journey' ? (
                        // Journey Selection View (Command Center)
                        <div className="p-8">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-light text-gray-900 mb-2">Command Center</h2>
                                <p className="text-lg text-gray-600">Select your planning journey to get started</p>
                            </div>
                            <JourneySelection onJourneySelect={handleJourneySelect} />
                        </div>
                    ) : (
                        // Selected Journey View
                        <div className="h-full">
                            {renderSelectedJourney()}
                        </div>
                    )}
                </div>
            </div>

            {/* AI Assistant */}
            {showAIAssistant && (
                <AIAssistant
                    isOpen={showAIAssistant}
                    onClose={() => setShowAIAssistant(false)}
                />
            )}
        </div>
    );
} 