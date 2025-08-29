'use client';

import { ArrowRight, Badge, BarChart3, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const functions = [
    {
        id: 'fpa',
        title: 'FP&A Forecasting Platform',
        description: 'Integrated planning, forecasting, and analytics platform for modern finance teams',
        icon: TrendingUp,
        href: '/functions/fpa',
        features: ['Predictive forecasting', 'Scenario modeling', 'Real-time collaboration', 'AI-powered insights'],
        status: 'beta'
    },
    {
        id: 'mrp',
        title: 'Management Reporting Platform',
        description: 'Single entry point for all finance reporting & insights with AI-driven actions',
        icon: BarChart3,
        href: '/functions/fpa/management-reporting',
        features: ['AI-powered insights', 'Role-based dashboards', 'Unified reporting hub', 'Month-end close automation'],
        status: 'beta'
    },
    // Add more functions here as they're developed
];

export default function FunctionsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Finance Function Prototypes
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our collection of next-generation finance platforms designed to transform how finance teams work
                    </p>
                </div>

                {/* Function Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {functions.map((func) => {
                        const Icon = func.icon;
                        return (
                            <Link
                                key={func.id}
                                href={func.href}
                                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                            <Icon className="w-8 h-8 text-blue-600" />
                                        </div>
                                        {func.status && (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                {func.status}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {func.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6">
                                        {func.description}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {func.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-sm text-gray-500">
                                                <Badge className="w-4 h-4 mr-2 text-green-500" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                                        Explore Platform
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Coming Soon Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        More Prototypes Coming Soon
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We're continuously developing new prototypes to showcase the future of finance technology.
                        Check back regularly for updates and new platform demonstrations.
                    </p>
                </div>
            </div>
        </div>
    );
} 