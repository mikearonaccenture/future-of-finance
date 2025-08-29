'use client';

import {
    ArrowLeft, BarChart3,
    BookOpen,
    ChevronRight,
    FileText,
    Home,
    Link2, Lock,
    Menu,
    Search,
    Target,
    X
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function ManagementReportingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [shouldPulse, setShouldPulse] = useState(false);

    // Don't show the layout on the main MRP landing page
    const isLandingPage = pathname === '/functions/fpa/management-reporting';

    // Check if we're on the home page to set initial menu state
    useEffect(() => {
        const isHomePage = pathname === '/functions/fpa/management-reporting';
        if (isHomePage) {
            setIsMenuOpen(false);
            setShouldPulse(true);
            // Stop pulsing after 3 seconds
            const timer = setTimeout(() => setShouldPulse(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    const navigationItems = [
        {
            icon: Home,
            label: 'Home',
            href: '/functions/fpa/management-reporting',
            gradient: 'from-blue-500 to-blue-600'
        },
        {
            icon: BarChart3,
            label: 'Executive Summary',
            href: '/functions/fpa/management-reporting/executive-summary',
            gradient: 'from-purple-500 to-purple-600'
        },
        {
            icon: FileText,
            label: 'Monthly Operating Report',
            href: '/functions/fpa/management-reporting/monthly-report',
            gradient: 'from-green-500 to-green-600'
        },
        {
            icon: Target,
            label: 'Business Insight Consoles',
            href: '/functions/fpa/management-reporting/business-consoles',
            gradient: 'from-orange-500 to-orange-600'
        },
        {
            icon: BookOpen,
            label: 'Report HUB',
            href: '/functions/fpa/management-reporting/report-hub',
            gradient: 'from-red-500 to-red-600'
        },
        {
            icon: Link2,
            label: 'Connected Enterprise Planning',
            href: '/functions/fpa/forecasting',
            gradient: 'from-indigo-500 to-indigo-600'
        },
        {
            icon: Lock,
            label: 'Month-end Close',
            href: '/functions/fpa/management-reporting/month-end-close',
            gradient: 'from-gray-600 to-gray-700'
        }
    ];

    // Return only children if it's the landing page
    if (isLandingPage) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Top Header */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="flex items-center justify-between h-16 px-4">
                    {/* Left side - Menu toggle and Platform Title */}
                    <div className="flex items-center space-x-4 flex-1">
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
                            <h1 className="text-lg font-bold text-gray-900">Management Reporting Platform</h1>
                            <div className="w-12 h-1 bg-blue-600 rounded-full mt-1"></div>
                        </div>
                    </div>

                    {/* Center - AI Search Bar */}
                    <div className="flex items-center justify-center flex-1">
                        <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-lg">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Ask anything about your business data..."
                                    className="w-full pl-12 pr-24 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 text-sm rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    AI Search
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right side - User Profile */}
                    <div className="flex items-center justify-end flex-1">
                        <div className="flex items-center space-x-3">
                            <div className="text-right">
                                <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                                <p className="text-xs text-gray-500">CFO</p>
                            </div>
                            <div className="relative">
                                <img
                                    src="/images/Sarah-Johnson-CFO-headshot.png"
                                    alt="Sarah Johnson"
                                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                                />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Navigation */}
                <div className={`${isMenuOpen ? 'w-80' : 'w-0'} bg-white shadow-lg transition-all duration-300 overflow-hidden flex-shrink-0`}>
                    <div className="h-full flex flex-col">
                        <div className="flex-1 p-6 overflow-y-auto">
                            {/* Navigation Menu */}
                            <nav className="space-y-2">
                                {navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = pathname === item.href ||
                                        (item.href !== '/functions/fpa/management-reporting' && pathname.startsWith(item.href));

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
                                                {item.label}
                                            </span>
                                            <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                                                }`} />
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Back to Future of Finance - Bottom */}
                        <div className="p-6 border-t border-gray-200">
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

                {/* Page Content */}
                <div className="flex-1 overflow-auto">
                    <div className="w-full h-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
} 