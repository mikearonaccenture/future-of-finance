'use client';

import { motion } from 'framer-motion';
import {
    Activity,
    ArrowLeft,
    BarChart3,
    Calendar,
    Lightbulb,
    Settings,
    Target,
    TrendingUp
} from 'lucide-react';
import Link from 'next/link';

interface Journey {
    id: string;
    name: string;
    icon: any;
    color: string;
    description: string;
    capabilities: string[];
}

interface JourneySelectionProps {
    onJourneySelect: (journeyId: string) => void;
}

export default function JourneySelection({ onJourneySelect }: JourneySelectionProps) {
    const journeys: Journey[] = [
        {
            id: 'executive',
            name: 'Executive Dashboard',
            icon: BarChart3,
            color: 'purple',
            description: 'Strategic oversight and decision-making hub',
            capabilities: [
                'Real-time business health monitoring',
                'AI-powered insights & alerts',
                'Decision queue with impact analysis',
                'Board-ready presentations'
            ]
        },
            {
        id: 'quarterly-forecast',
        name: 'Quarterly & Monthly Forecasting',
        icon: Target,
        color: 'blue',
        description: 'Short-term forecasting and monthly close',
        capabilities: [
            'Rolling 13-week forecasts',
            'AI/ML predictions',
            'Flash close estimates',
            'Collaborative workflows'
        ]
    },
        {
            id: 'scenario-modeling',
            name: 'Scenarios & Decisions',
            icon: Lightbulb,
            color: 'orange',
            description: 'What-if analysis and decision support',
            capabilities: [
                'Interactive scenario modeling',
                'Sensitivity analysis',
                'ROI calculators',
                'Monte Carlo simulations'
            ]
        },
        {
            id: 'annual-budget',
            name: 'Annual Plan & Budget',
            icon: Calendar,
            color: 'green',
            description: 'Annual planning and resource allocation',
            capabilities: [
                'Zero-based budgeting',
                'Headcount planning',
                'Capital allocation',
                'Multi-level approvals'
            ]
        },
        {
            id: 'performance-monitoring',
            name: 'Performance & Reports',
            icon: Activity,
            color: 'red',
            description: 'Real-time monitoring and reporting',
            capabilities: [
                'Automated report generation',
                'Live KPI dashboards',
                'Self-service analytics',
                'Mobile-optimized views'
            ]
        },
        {
            id: 'long-range',
            name: 'Long Range Outlook',
            icon: TrendingUp,
            color: 'indigo',
            description: '3-5 year strategic planning',
            capabilities: [
                'Market scenario modeling',
                'Portfolio optimization',
                'Growth strategies',
                'Strategic roadmaps'
            ]
        }
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: string } = {
            purple: 'bg-purple-50 hover:bg-purple-100 border-purple-200 hover:border-purple-300',
            blue: 'bg-blue-50 hover:bg-blue-100 border-blue-200 hover:border-blue-300',
            orange: 'bg-orange-50 hover:bg-orange-100 border-orange-200 hover:border-orange-300',
            green: 'bg-green-50 hover:bg-green-100 border-green-200 hover:border-green-300',
            red: 'bg-red-50 hover:bg-red-100 border-red-200 hover:border-red-300',
            indigo: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200 hover:border-indigo-300'
        };
        return colorMap[color] || colorMap.blue;
    };

    const getIconColor = (color: string) => {
        const iconColorMap: { [key: string]: string } = {
            purple: 'text-purple-600',
            blue: 'text-blue-600',
            orange: 'text-orange-600',
            green: 'text-green-600',
            red: 'text-red-600',
            indigo: 'text-indigo-600'
        };
        return iconColorMap[color] || iconColorMap.blue;
    };

    const getTextColor = (color: string) => {
        const textColorMap: { [key: string]: string } = {
            purple: 'text-purple-700',
            blue: 'text-blue-700',
            orange: 'text-orange-700',
            green: 'text-green-700',
            red: 'text-red-700',
            indigo: 'text-indigo-700'
        };
        return textColorMap[color] || textColorMap.blue;
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header with Back Button */}
            <div className="flex items-center justify-between px-8 pt-6">
                <Link
                    href="/"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span>Back to Finance Portal</span>
                </Link>
            </div>

            {/* Title Section */}
            <div className="pt-8 pb-12 text-center">
                <h1 className="text-3xl font-light text-gray-900">Connected Enterprise Planning Platform</h1>
                <p className="text-gray-500 mt-2">Command Center</p>
            </div>

            {/* Main Content - Centered Cards in Single Row */}
            <div className="flex-1 flex items-center justify-center px-8">
                <div className="grid grid-cols-6 gap-6 max-w-7xl w-full">
                    {journeys.map((journey, index) => (
                        <motion.div
                            key={journey.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => onJourneySelect(journey.id)}
                            className={`
                                group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-200
                                ${getColorClasses(journey.color)}
                                transform hover:scale-105 hover:shadow-xl
                            `}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                {/* Icon */}
                                <journey.icon className={`h-12 w-12 ${getIconColor(journey.color)}`} />

                                {/* Title */}
                                <h3 className={`text-sm font-semibold ${getTextColor(journey.color)}`}>
                                    {journey.name}
                                </h3>

                                {/* Description */}
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    {journey.description}
                                </p>

                                {/* Capabilities - Always visible */}
                                <div className="space-y-1 transition-all duration-200">
                                    {journey.capabilities.map((capability, idx) => (
                                        <div key={idx} className="flex items-start space-x-1">
                                            <span className={`text-xs ${getTextColor(journey.color)} mt-0.5`}>•</span>
                                            <span className="text-xs text-gray-500 group-hover:text-gray-700 text-left transition-colors">{capability}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Admin Button - Bottom of Screen */}
            <div className="pb-8 flex justify-center">
                <button
                    onClick={() => onJourneySelect('admin')}
                    className="
                        flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-900
                        bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 hover:border-gray-300
                        transition-all duration-200
                    "
                >
                    <Settings className="h-5 w-5" />
                    <span>Admin & Data</span>
                </button>
            </div>
        </div>
    );
} 