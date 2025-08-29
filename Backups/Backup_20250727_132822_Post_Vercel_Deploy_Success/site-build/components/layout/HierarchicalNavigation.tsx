'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
    Activity,
    BarChart3,
    Brain,
    Calculator,
    Calendar,
    ChevronDown,
    ChevronRight,
    Clock,
    Database,
    FileText,
    GitBranch,
    Home,
    Layers,
    Search,
    Target,
    TrendingUp,
    Users
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
    id: string;
    label: string;
    icon: any;
    href?: string;
    children?: NavItem[];
    badge?: string;
}

interface HierarchicalNavigationProps {
    onNavigate?: (path: string) => void;
}

export default function HierarchicalNavigation({ onNavigate }: HierarchicalNavigationProps) {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        'forecasting': true
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const pathname = usePathname();

    const navigation: NavItem[] = [
        {
            id: 'executive',
            label: 'Executive View',
            icon: Home,
            href: '/functions/fpa/executive'
        },
        {
            id: 'forecasting',
            label: 'Forecasting Hub',
            icon: TrendingUp,
            children: [
                {
                    id: 'statistical',
                    label: 'Statistical Forecast',
                    icon: Brain,
                    href: '/functions/fpa/forecasting/statistical',
                    badge: 'ML'
                },
                {
                    id: 'driver-based',
                    label: 'Driver-Based Model',
                    icon: GitBranch,
                    href: '/functions/fpa/forecasting/drivers'
                },
                {
                    id: 'scenario-planning',
                    label: 'Scenario Planning',
                    icon: Layers,
                    href: '/functions/fpa/forecasting/scenarios'
                },
                {
                    id: 'accuracy-tracking',
                    label: 'Accuracy Tracking',
                    icon: Target,
                    href: '/functions/fpa/forecasting/accuracy'
                }
            ]
        },
        {
            id: 'analysis',
            label: 'Analysis Center',
            icon: BarChart3,
            children: [
                {
                    id: 'variance',
                    label: 'Variance Analysis',
                    icon: Activity,
                    href: '/functions/fpa/analysis/variance'
                },
                {
                    id: 'margin',
                    label: 'Margin Analytics',
                    icon: Calculator,
                    href: '/functions/fpa/analysis/margin'
                },
                {
                    id: 'what-if',
                    label: 'What-If Modeling',
                    icon: Database,
                    href: '/functions/fpa/analysis/what-if'
                },
                {
                    id: 'trends',
                    label: 'Trend Analysis',
                    icon: TrendingUp,
                    href: '/functions/fpa/analysis/trends'
                }
            ]
        },
        {
            id: 'planning',
            label: 'Planning Workspace',
            icon: Target,
            children: [
                {
                    id: 'annual',
                    label: 'Annual Planning',
                    icon: Calendar,
                    href: '/functions/fpa/planning/annual'
                },
                {
                    id: 'rolling',
                    label: 'Rolling Forecast',
                    icon: Clock,
                    href: '/functions/fpa/planning/rolling'
                },
                {
                    id: 'collaboration',
                    label: 'Team Collaboration',
                    icon: Users,
                    href: '/functions/fpa/planning/collaboration'
                }
            ]
        }
    ];

    const quickAccess = [
        { label: 'Monthly Close', icon: Clock, href: '/functions/fpa/close' },
        { label: 'Board Report', icon: FileText, href: '/functions/fpa/board' },
        { label: 'KPI Dashboard', icon: Activity, href: '/functions/fpa/kpis' }
    ];

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const handleNavClick = (href: string) => {
        if (onNavigate) {
            onNavigate(href);
        }
    };

    // Search functionality
    const searchResults = navigation.flatMap(section => {
        const results: { label: string; href: string; parent?: string }[] = [];

        if (section.href && section.label.toLowerCase().includes(searchQuery.toLowerCase())) {
            results.push({ label: section.label, href: section.href });
        }

        if (section.children) {
            section.children.forEach(child => {
                if (child.label.toLowerCase().includes(searchQuery.toLowerCase())) {
                    results.push({
                        label: child.label,
                        href: child.href || '',
                        parent: section.label
                    });
                }
            });
        }

        return results;
    }).filter(result => searchQuery.length > 0);

    // Generate breadcrumbs
    const generateBreadcrumbs = () => {
        const parts = pathname.split('/').filter(Boolean);
        const breadcrumbs: { label: string; href: string }[] = [];

        parts.forEach((part, index) => {
            const href = '/' + parts.slice(0, index + 1).join('/');
            const navItem = findNavItemByPath(href);
            if (navItem) {
                breadcrumbs.push({ label: navItem.label, href });
            } else {
                breadcrumbs.push({
                    label: part.charAt(0).toUpperCase() + part.slice(1).replace('-', ' '),
                    href
                });
            }
        });

        return breadcrumbs;
    };

    const findNavItemByPath = (path: string): NavItem | null => {
        for (const section of navigation) {
            if (section.href === path) return section;
            if (section.children) {
                const child = section.children.find(c => c.href === path);
                if (child) return child;
            }
        }
        return null;
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <div className="bg-white border-b border-gray-200">
            {/* Breadcrumbs */}
            <div className="px-4 sm:px-6 lg:px-8 py-2 border-b border-gray-100">
                <nav className="flex items-center space-x-2 text-sm">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={crumb.href} className="flex items-center">
                            {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}
                            {index === breadcrumbs.length - 1 ? (
                                <span className="text-gray-900 font-medium">{crumb.label}</span>
                            ) : (
                                <Link
                                    href={crumb.href}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    {crumb.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Main Navigation */}
            <div className="px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Nav Sections */}
                    <nav className="flex items-center space-x-8">
                        {navigation.map((section) => (
                            <div key={section.id} className="relative">
                                {section.children ? (
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className={`flex items-center space-x-2 text-sm font-medium transition-colors ${expandedSections[section.id]
                                                ? 'text-gray-900'
                                                : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        <section.icon className="h-5 w-5" />
                                        <span>{section.label}</span>
                                        {expandedSections[section.id] ? (
                                            <ChevronDown className="h-4 w-4" />
                                        ) : (
                                            <ChevronRight className="h-4 w-4" />
                                        )}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => section.href && handleNavClick(section.href)}
                                        className={`flex items-center space-x-2 text-sm font-medium transition-colors ${pathname === section.href
                                                ? 'text-blue-600'
                                                : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        <section.icon className="h-5 w-5" />
                                        <span>{section.label}</span>
                                    </button>
                                )}

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {section.children && expandedSections[section.id] && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                                        >
                                            <div className="py-2">
                                                {section.children.map((child) => (
                                                    <button
                                                        key={child.id}
                                                        onClick={() => child.href && handleNavClick(child.href)}
                                                        className={`w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 ${pathname === child.href
                                                                ? 'text-blue-600 bg-blue-50'
                                                                : 'text-gray-700'
                                                            }`}
                                                    >
                                                        <div className="flex items-center space-x-3">
                                                            <child.icon className="h-4 w-4" />
                                                            <span>{child.label}</span>
                                                        </div>
                                                        {child.badge && (
                                                            <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                                                                {child.badge}
                                                            </span>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    {/* Right Side - Search and Quick Access */}
                    <div className="flex items-center space-x-4">
                        {/* Quick Access */}
                        <div className="hidden lg:flex items-center space-x-2">
                            <span className="text-xs text-gray-500 mr-2">Quick Access:</span>
                            {quickAccess.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => handleNavClick(item.href)}
                                    className="flex items-center space-x-1 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                                >
                                    <item.icon className="h-3 w-3" />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Global Search */}
                        <div className="relative">
                            <button
                                onClick={() => setShowSearch(!showSearch)}
                                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <Search className="h-5 w-5" />
                            </button>

                            <AnimatePresence>
                                {showSearch && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                                    >
                                        <div className="p-4">
                                            <input
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                placeholder="Search across all data and pages..."
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                autoFocus
                                            />

                                            {searchResults.length > 0 && (
                                                <div className="mt-3 space-y-1">
                                                    {searchResults.map((result, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => {
                                                                handleNavClick(result.href);
                                                                setShowSearch(false);
                                                                setSearchQuery('');
                                                            }}
                                                            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-md"
                                                        >
                                                            <div className="font-medium text-gray-900">{result.label}</div>
                                                            {result.parent && (
                                                                <div className="text-xs text-gray-500">{result.parent}</div>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 