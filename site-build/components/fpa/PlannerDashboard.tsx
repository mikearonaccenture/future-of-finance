'use client';

import { motion } from 'framer-motion';
import {
    Activity,
    BarChart3,
    Bell,
    BookOpen,
    CheckCircle,
    ChevronRight,
    Clock,
    FileText,
    MessageSquare,
    Plus,
    Search,
    Settings,
    Star,
    User
} from 'lucide-react';
import { useState } from 'react';
import EnhancedKPICard from '../ui/EnhancedKPICard';

interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'in-progress' | 'completed';
    type: 'forecast' | 'review' | 'approval' | 'analysis';
    assignedBy?: string;
}

interface Approval {
    id: string;
    title: string;
    submittedBy: string;
    submittedDate: Date;
    type: 'forecast' | 'assumption' | 'variance';
    urgency: 'urgent' | 'normal';
    impact: string;
}

interface RecentChange {
    id: string;
    entity: string;
    field: string;
    oldValue: string;
    newValue: string;
    changedBy: string;
    timestamp: Date;
    impact: 'high' | 'medium' | 'low';
}

export default function PlannerDashboard() {
    const [selectedTimeframe, setSelectedTimeframe] = useState('this-week');
    const [showAllTasks, setShowAllTasks] = useState(false);

    // Mock data
    const tasks: Task[] = [
        {
            id: '1',
            title: 'Complete Q2 2025 Revenue Forecast',
            description: 'Update revenue projections for all product lines',
            dueDate: new Date('2024-03-15'),
            priority: 'high',
            status: 'in-progress',
            type: 'forecast',
            assignedBy: 'CFO'
        },
        {
            id: '2',
            title: 'Review EMEA Variance Explanations',
            description: 'Analyze and document Q1 variances > $100K',
            dueDate: new Date('2024-03-12'),
            priority: 'medium',
            status: 'pending',
            type: 'review'
        },
        {
            id: '3',
            title: 'Approve Marketing Budget Reforecast',
            description: 'Review and approve updated marketing spend',
            dueDate: new Date('2024-03-10'),
            priority: 'high',
            status: 'pending',
            type: 'approval'
        }
    ];

    const approvals: Approval[] = [
        {
            id: '1',
            title: 'North America Q2 Volume Forecast',
            submittedBy: 'John Smith',
            submittedDate: new Date('2024-03-08'),
            type: 'forecast',
            urgency: 'urgent',
            impact: '+$2.4M vs prior version'
        },
        {
            id: '2',
            title: 'Price Increase Assumption Update',
            submittedBy: 'Sarah Johnson',
            submittedDate: new Date('2024-03-07'),
            type: 'assumption',
            urgency: 'normal',
            impact: '3.5% → 4.2% ASP growth'
        }
    ];

    const recentChanges: RecentChange[] = [
        {
            id: '1',
            entity: 'Premium Products - Q2 Forecast',
            field: 'Volume',
            oldValue: '2.8M units',
            newValue: '3.1M units',
            changedBy: 'You',
            timestamp: new Date('2024-03-09T14:30:00'),
            impact: 'high'
        },
        {
            id: '2',
            entity: 'Raw Material Cost Assumption',
            field: 'Inflation Rate',
            oldValue: '4.5%',
            newValue: '5.2%',
            changedBy: 'Mike Chen',
            timestamp: new Date('2024-03-09T10:15:00'),
            impact: 'medium'
        }
    ];

    const quickAccessLinks = [
        { label: 'Forecast Grid', icon: FileText, href: '/forecast-input' },
        { label: 'Assumptions', icon: Settings, href: '/assumptions' },
        { label: 'Variance Analysis', icon: BarChart3, href: '/variance' },
        { label: 'Reports', icon: FileText, href: '/reports' }
    ];

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high': return 'text-red-600 bg-red-50';
            case 'medium': return 'text-yellow-600 bg-yellow-50';
            case 'low': return 'text-green-600 bg-green-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    const getTaskIcon = (type: string) => {
        switch (type) {
            case 'forecast': return BarChart3;
            case 'review': return Search;
            case 'approval': return CheckCircle;
            case 'analysis': return Activity;
            default: return FileText;
        }
    };

    const formatDate = (date: Date) => {
        const days = Math.ceil((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
        if (days === 0) return 'Today';
        if (days === 1) return 'Tomorrow';
        if (days < 0) return `${Math.abs(days)} days overdue`;
        return `${days} days`;
    };

    // Generate sparkline data
    const generateSparklineData = (baseValue: number, variance: number = 0.1) => {
        return Array.from({ length: 12 }, (_, i) => ({
            value: baseValue * (1 + (Math.random() - 0.5) * variance),
            date: new Date(2024, i, 1).toISOString()
        }));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Planning Dashboard</h1>
                    <p className="text-sm text-gray-500 mt-1">Welcome back, Sarah</p>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Bell className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                        <MessageSquare className="h-5 w-5" />
                    </button>
                    <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-gray-600" />
                    </div>
                </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <EnhancedKPICard
                    title="My Forecast Accuracy"
                    value={94.2}
                    change={2.1}
                    changeLabel="vs last month"
                    target={92}
                    dataPoints={generateSparklineData(92, 0.05)}
                    format="percentage"
                    status="good"
                    onClick={() => console.log('Accuracy clicked')}
                />
                <EnhancedKPICard
                    title="Areas Managed"
                    value={12}
                    change={0}
                    changeLabel="business units"
                    dataPoints={generateSparklineData(12, 0)}
                    format="number"
                    onClick={() => console.log('Areas clicked')}
                />
                <EnhancedKPICard
                    title="On-Time Completion"
                    value={98.5}
                    change={3.2}
                    changeLabel="vs team avg"
                    target={95}
                    dataPoints={generateSparklineData(95, 0.08)}
                    format="percentage"
                    status="good"
                    onClick={() => console.log('Completion clicked')}
                />
                <EnhancedKPICard
                    title="Pending Approvals"
                    value={5}
                    change={-28.6}
                    changeLabel="from last week"
                    dataPoints={generateSparklineData(7, 0.3)}
                    format="number"
                    status="warning"
                    onClick={() => console.log('Approvals clicked')}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* My Tasks */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">My Tasks</h2>
                            <div className="flex items-center space-x-2">
                                <select
                                    value={selectedTimeframe}
                                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                                    className="text-sm border-gray-300 rounded-md"
                                >
                                    <option value="today">Today</option>
                                    <option value="this-week">This Week</option>
                                    <option value="all">All Tasks</option>
                                </select>
                                <button className="p-1 text-blue-600 hover:text-blue-700">
                                    <Plus className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {tasks.slice(0, showAllTasks ? undefined : 3).map(task => {
                                const TaskIcon = getTaskIcon(task.type);
                                const isOverdue = task.dueDate < new Date() && task.status !== 'completed';

                                return (
                                    <motion.div
                                        key={task.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start space-x-3">
                                                <div className={`p-2 rounded-lg ${task.status === 'completed' ? 'bg-green-100' :
                                                        task.status === 'in-progress' ? 'bg-blue-100' :
                                                            'bg-gray-100'
                                                    }`}>
                                                    <TaskIcon className={`h-4 w-4 ${task.status === 'completed' ? 'text-green-600' :
                                                            task.status === 'in-progress' ? 'text-blue-600' :
                                                                'text-gray-600'
                                                        }`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-medium text-gray-900">{task.title}</h3>
                                                    <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                                                    <div className="flex items-center space-x-3 mt-2">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                                                            {task.priority} priority
                                                        </span>
                                                        <span className={`text-xs ${isOverdue ? 'text-red-600' : 'text-gray-500'}`}>
                                                            <Clock className="h-3 w-3 inline mr-1" />
                                                            {formatDate(task.dueDate)}
                                                        </span>
                                                        {task.assignedBy && (
                                                            <span className="text-xs text-gray-500">
                                                                from {task.assignedBy}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="p-1 text-gray-400 hover:text-gray-600">
                                                <ChevronRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {tasks.length > 3 && !showAllTasks && (
                            <button
                                onClick={() => setShowAllTasks(true)}
                                className="w-full mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium"
                            >
                                View all {tasks.length} tasks →
                            </button>
                        )}
                    </div>

                    {/* My Approvals */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">My Approvals</h2>
                            <span className="px-2 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
                                {approvals.length} pending
                            </span>
                        </div>

                        <div className="space-y-3">
                            {approvals.map(approval => (
                                <div
                                    key={approval.id}
                                    className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2">
                                                <h3 className="font-medium text-gray-900">{approval.title}</h3>
                                                {approval.urgency === 'urgent' && (
                                                    <span className="px-2 py-0.5 text-xs font-medium text-red-600 bg-red-100 rounded-full">
                                                        Urgent
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Submitted by {approval.submittedBy} • {approval.submittedDate.toLocaleDateString()}
                                            </p>
                                            <p className="text-sm font-medium text-blue-600 mt-2">
                                                Impact: {approval.impact}
                                            </p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="px-3 py-1 text-sm font-medium text-green-600 bg-green-50 rounded hover:bg-green-100">
                                                Approve
                                            </button>
                                            <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
                                                Review
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-4">
                    {/* Quick Access */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Access</h3>
                        <div className="space-y-2">
                            {quickAccessLinks.map(link => (
                                <button
                                    key={link.label}
                                    className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                                >
                                    <link.icon className="h-4 w-4 text-gray-400" />
                                    <span>{link.label}</span>
                                    <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Recent Changes */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Recent Changes</h3>
                        <div className="space-y-3">
                            {recentChanges.map(change => (
                                <div key={change.id} className="text-sm">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900">{change.entity}</p>
                                            <p className="text-gray-600 mt-1">
                                                {change.field}: {change.oldValue} → {change.newValue}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                by {change.changedBy} • {change.timestamp.toLocaleTimeString()}
                                            </p>
                                        </div>
                                        <span className={`px-2 py-1 text-xs rounded-full ${change.impact === 'high' ? 'bg-red-100 text-red-600' :
                                                change.impact === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                                                    'bg-green-100 text-green-600'
                                            }`}>
                                            {change.impact}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">
                            View all changes →
                        </button>
                    </div>

                    {/* Team Calendar */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Dates</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Q2 Forecast Due</span>
                                <span className="font-medium text-gray-900">Mar 15</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Board Review</span>
                                <span className="font-medium text-gray-900">Mar 20</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Month-End Close</span>
                                <span className="font-medium text-gray-900">Mar 31</span>
                            </div>
                        </div>
                    </div>

                    {/* Help & Resources */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Help & Resources</h3>
                        <div className="space-y-2">
                            <button className="w-full flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900">
                                <BookOpen className="h-4 w-4" />
                                <span>Planning Guide</span>
                            </button>
                            <button className="w-full flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900">
                                <MessageSquare className="h-4 w-4" />
                                <span>Ask Finance Team</span>
                            </button>
                            <button className="w-full flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900">
                                <Star className="h-4 w-4" />
                                <span>Best Practices</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 