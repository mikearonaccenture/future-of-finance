'use client';

import {
    ArrowLeft, BarChart3,
    BookOpen,
    ChevronRight,
    FileText,
    Home,
    Link2, Lock, Search,
    Target
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function ManagementReportingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');

    // Don't show the layout on the main MRP landing page
    const isLandingPage = pathname === '/functions/fpa/management-reporting';

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
            gradient: 'from-gray-500 to-gray-600'
        }
    ];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search functionality
        console.log('Searching for:', searchQuery);
    };

    if (isLandingPage) {
        // For the landing page, just render children without the layout
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Navigation */}
            <div className="w-80 bg-white shadow-lg">
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
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar with User Profile and Search */}
                <div className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* AI-Powered Search Bar */}
                        <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Ask anything about your business data..."
                                    className="w-full pl-12 pr-32 py-4 text-lg border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    AI Search
                                </button>
                            </div>
                        </form>

                        {/* User Profile */}
                        <div className="flex items-center space-x-4 ml-6">
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

                {/* Page Content */}
                <div className="flex-1 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
} 