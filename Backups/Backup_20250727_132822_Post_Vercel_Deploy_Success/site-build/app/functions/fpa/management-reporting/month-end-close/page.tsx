'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
    AlertCircle,
    AlertTriangle,
    Bell,
    BookOpen,
    Building,
    Calculator,
    Calendar,
    CheckCircle,
    ChevronDown,
    Clock,
    Database,
    Edit2,
    FileText,
    Play,
    Plus,
    RotateCw,
    Send,
    Shield,
    Users,
    XCircle,
    Zap
} from 'lucide-react';
import { useState } from 'react';

// Close process phases
const closePhases = [
    { id: 'pre-close', name: 'Pre-Close', days: '1-3', icon: Calendar },
    { id: 'erp', name: 'ERP Activities', days: '4-5', icon: Database },
    { id: 'journals', name: 'Journals', days: '5-7', icon: Calculator },
    { id: 'review', name: 'Review & Adjust', days: '7-9', icon: FileText },
    { id: 'consolidation', name: 'Consolidation', days: '9-10', icon: Building },
    { id: 'post-close', name: 'Post-Close', days: '11-15', icon: CheckCircle }
];

// Mock data for close activities
const closeActivities = {
    'pre-close': [
        {
            id: 1,
            task: 'Send accrual reminders to department heads',
            assignee: 'Sarah Chen',
            status: 'completed',
            dueDate: 'Day 1',
            priority: 'high',
            dependencies: [],
            notes: 'All departments notified'
        },
        {
            id: 2,
            task: 'Review and approve pending purchase orders',
            assignee: 'Michael Torres',
            status: 'in-progress',
            dueDate: 'Day 2',
            priority: 'high',
            dependencies: [],
            progress: 65,
            blockers: '5 POs pending manager approval'
        },
        {
            id: 3,
            task: 'Validate fixed asset additions',
            assignee: 'Lisa Wang',
            status: 'pending',
            dueDate: 'Day 3',
            priority: 'medium',
            dependencies: [2]
        },
        {
            id: 4,
            task: 'Collect intercompany confirmations',
            assignee: 'David Kim',
            status: 'pending',
            dueDate: 'Day 3',
            priority: 'high',
            dependencies: []
        }
    ],
    'erp': [
        {
            id: 5,
            task: 'Run AP/AR aging reports',
            assignee: 'System',
            status: 'pending',
            dueDate: 'Day 4',
            priority: 'high',
            dependencies: [],
            automated: true
        },
        {
            id: 6,
            task: 'Close sub-ledgers (AP, AR, Inventory)',
            assignee: 'James Wilson',
            status: 'pending',
            dueDate: 'Day 4',
            priority: 'critical',
            dependencies: [5]
        },
        {
            id: 7,
            task: 'Run month-end allocation processes',
            assignee: 'System',
            status: 'pending',
            dueDate: 'Day 5',
            priority: 'high',
            dependencies: [6],
            automated: true
        },
        {
            id: 8,
            task: 'Update period close calendar',
            assignee: 'Amanda Foster',
            status: 'pending',
            dueDate: 'Day 5',
            priority: 'medium',
            dependencies: [6]
        }
    ],
    'journals': [
        {
            id: 9,
            task: 'Calculate and post accruals',
            assignee: 'Rachel Green',
            status: 'pending',
            dueDate: 'Day 5',
            priority: 'high',
            dependencies: [4],
            entries: 23
        },
        {
            id: 10,
            task: 'Post depreciation entries',
            assignee: 'System',
            status: 'pending',
            dueDate: 'Day 6',
            priority: 'high',
            dependencies: [3],
            automated: true,
            entries: 156
        },
        {
            id: 11,
            task: 'Review and post manual adjustments',
            assignee: 'Robert Martinez',
            status: 'pending',
            dueDate: 'Day 6',
            priority: 'high',
            dependencies: [],
            entries: 12,
            requiresApproval: true
        },
        {
            id: 12,
            task: 'Complete intercompany eliminations',
            assignee: 'CFO Team',
            status: 'pending',
            dueDate: 'Day 7',
            priority: 'critical',
            dependencies: [11],
            entries: 8
        }
    ],
    'review': [
        {
            id: 13,
            task: 'Review preliminary P&L',
            assignee: 'Controller',
            status: 'pending',
            dueDate: 'Day 7',
            priority: 'critical',
            dependencies: [12]
        },
        {
            id: 14,
            task: 'Validate balance sheet reconciliations',
            assignee: 'Treasury Team',
            status: 'pending',
            dueDate: 'Day 8',
            priority: 'high',
            dependencies: [13]
        },
        {
            id: 15,
            task: 'Perform flux analysis',
            assignee: 'FP&A Team',
            status: 'pending',
            dueDate: 'Day 8',
            priority: 'high',
            dependencies: [13]
        },
        {
            id: 16,
            task: 'Close general ledger',
            assignee: 'Controller',
            status: 'pending',
            dueDate: 'Day 9',
            priority: 'critical',
            dependencies: [14, 15],
            requiresApproval: true
        }
    ],
    'consolidation': [
        {
            id: 17,
            task: 'Run consolidation process',
            assignee: 'System',
            status: 'pending',
            dueDate: 'Day 9',
            priority: 'critical',
            dependencies: [16],
            automated: true
        },
        {
            id: 18,
            task: 'Review consolidated results',
            assignee: 'CFO',
            status: 'pending',
            dueDate: 'Day 10',
            priority: 'critical',
            dependencies: [17]
        },
        {
            id: 19,
            task: 'Prepare executive reporting package',
            assignee: 'FP&A Team',
            status: 'pending',
            dueDate: 'Day 10',
            priority: 'high',
            dependencies: [18]
        }
    ],
    'post-close': [
        {
            id: 20,
            task: 'Complete account reconciliations',
            assignee: 'Accounting Team',
            status: 'pending',
            dueDate: 'Day 11-13',
            priority: 'high',
            dependencies: [],
            items: 47
        },
        {
            id: 21,
            task: 'Review aged items and provisions',
            assignee: 'Credit Team',
            status: 'pending',
            dueDate: 'Day 12',
            priority: 'medium',
            dependencies: []
        },
        {
            id: 22,
            task: 'Perform close quality review',
            assignee: 'Internal Audit',
            status: 'pending',
            dueDate: 'Day 14',
            priority: 'medium',
            dependencies: [20]
        },
        {
            id: 23,
            task: 'Document process improvements',
            assignee: 'Process Team',
            status: 'pending',
            dueDate: 'Day 15',
            priority: 'low',
            dependencies: [22]
        }
    ]
};

// Close metrics
const closeMetrics = {
    currentMonth: 'November 2024',
    closeDay: 2,
    totalDays: 15,
    tasksCompleted: 2,
    totalTasks: 23,
    onTrack: false,
    criticalIssues: 1,
    automationRate: 26,
    lastMonthDays: 14
};

export default function MonthEndClose() {
    const [activePhase, setActivePhase] = useState('pre-close');
    const [expandedTasks, setExpandedTasks] = useState<number[]>([]);
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterPriority, setFilterPriority] = useState('all');

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-4 h-4 text-green-500" />;
            case 'in-progress':
                return <Clock className="w-4 h-4 text-blue-500" />;
            case 'pending':
                return <AlertCircle className="w-4 h-4 text-gray-400" />;
            case 'blocked':
                return <XCircle className="w-4 h-4 text-red-500" />;
            default:
                return <AlertCircle className="w-4 h-4 text-gray-400" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-700 border-green-200';
            case 'in-progress':
                return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'pending':
                return 'bg-gray-100 text-gray-700 border-gray-200';
            case 'blocked':
                return 'bg-red-100 text-red-700 border-red-200';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'critical':
                return 'bg-red-100 text-red-700 border-red-200';
            case 'high':
                return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'medium':
                return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'low':
                return 'bg-gray-100 text-gray-700 border-gray-200';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const toggleTaskExpansion = (taskId: number) => {
        setExpandedTasks(prev =>
            prev.includes(taskId)
                ? prev.filter(id => id !== taskId)
                : [...prev, taskId]
        );
    };

    // Filter tasks
    const activeTasks = closeActivities[activePhase as keyof typeof closeActivities] || [];
    const filteredTasks = activeTasks.filter(task => {
        const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
        const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
        return matchesStatus && matchesPriority;
    });

    const progressPercentage = (closeMetrics.tasksCompleted / closeMetrics.totalTasks) * 100;

    return (
        <div className="bg-gray-50">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Month-End Close Command Center</h1>
                                <p className="text-sm text-gray-500">{closeMetrics.currentMonth} • Day {closeMetrics.closeDay} of {closeMetrics.totalDays}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                                <Bell className="w-4 h-4" />
                                <span>Send Reminders</span>
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <RotateCw className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Phase Tabs */}
            <div className="bg-white border-b border-gray-200">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-1 overflow-x-auto">
                        {closePhases.map((phase) => {
                            const Icon = phase.icon;
                            const phaseTasks = closeActivities[phase.id as keyof typeof closeActivities] || [];
                            const completed = phaseTasks.filter(t => t.status === 'completed').length;
                            const total = phaseTasks.length;

                            return (
                                <button
                                    key={phase.id}
                                    onClick={() => setActivePhase(phase.id)}
                                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activePhase === phase.id
                                        ? 'text-blue-600 border-blue-600'
                                        : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{phase.name}</span>
                                    <span className="text-xs text-gray-400">({completed}/{total})</span>
                                    {completed === total && total > 0 && (
                                        <CheckCircle className="w-3 h-3 text-green-500" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                {/* Overall Progress */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Close Progress Overview</h2>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-500">Status:</span>
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${closeMetrics.onTrack ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                    }`}>
                                    {closeMetrics.onTrack ? 'On Track' : 'Behind Schedule'}
                                </span>
                            </div>
                            {closeMetrics.criticalIssues > 0 && (
                                <div className="flex items-center space-x-1 text-red-600">
                                    <AlertTriangle className="w-4 h-4" />
                                    <span className="text-sm font-medium">{closeMetrics.criticalIssues} Critical Issue</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-gray-600">Overall Completion</span>
                            <span className="font-medium text-gray-900">{Math.round(progressPercentage)}%</span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progressPercentage}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                            />
                        </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-4 gap-4">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{closeMetrics.tasksCompleted}</p>
                            <p className="text-xs text-gray-500">Tasks Completed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{closeMetrics.totalTasks - closeMetrics.tasksCompleted}</p>
                            <p className="text-xs text-gray-500">Tasks Remaining</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{closeMetrics.automationRate}%</p>
                            <p className="text-xs text-gray-500">Automation Rate</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{closeMetrics.totalDays - closeMetrics.closeDay}</p>
                            <p className="text-xs text-gray-500">Days Remaining</p>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="text-sm bg-white border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Status</option>
                            <option value="completed">Completed</option>
                            <option value="in-progress">In Progress</option>
                            <option value="pending">Pending</option>
                            <option value="blocked">Blocked</option>
                        </select>
                        <select
                            value={filterPriority}
                            onChange={(e) => setFilterPriority(e.target.value)}
                            className="text-sm bg-white border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Priorities</option>
                            <option value="critical">Critical</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                        <Plus className="w-4 h-4" />
                        <span>Add Task</span>
                    </button>
                </div>

                {/* Task List */}
                <div className="space-y-3">
                    {filteredTasks.map((task) => (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div
                                className="p-4 cursor-pointer"
                                onClick={() => toggleTaskExpansion(task.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 flex-1">
                                        {getStatusIcon(task.status)}
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3">
                                                <h4 className="font-medium text-gray-900">{task.task}</h4>
                                                {'automated' in task && task.automated && (
                                                    <span className="inline-flex items-center px-2 py-0.5 text-xs bg-purple-100 text-purple-700 rounded-md">
                                                        <Zap className="w-3 h-3 mr-1" />
                                                        Automated
                                                    </span>
                                                )}
                                                {'requiresApproval' in task && task.requiresApproval && (
                                                    <span className="inline-flex items-center px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-md">
                                                        <Shield className="w-3 h-3 mr-1" />
                                                        Approval Required
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                                <span className="flex items-center">
                                                    <Users className="w-3 h-3 mr-1" />
                                                    {task.assignee}
                                                </span>
                                                <span className="flex items-center">
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    {task.dueDate}
                                                </span>
                                                <span className={`px-2 py-0.5 text-xs rounded-md border ${getPriorityColor(task.priority)}`}>
                                                    {task.priority}
                                                </span>
                                                {'entries' in task && task.entries && (
                                                    <span className="flex items-center">
                                                        <FileText className="w-3 h-3 mr-1" />
                                                        {task.entries} entries
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        {task.status === 'in-progress' && 'progress' in task && task.progress && (
                                            <div className="w-24">
                                                <div className="flex items-center justify-between text-xs mb-1">
                                                    <span className="text-gray-500">Progress</span>
                                                    <span className="font-medium">{task.progress}%</span>
                                                </div>
                                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-blue-500 rounded-full"
                                                        style={{ width: `${task.progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <button
                                            className="p-2 hover:bg-gray-100 rounded transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Handle edit
                                            }}
                                        >
                                            <Edit2 className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedTasks.includes(task.id) ? 'rotate-180' : ''
                                            }`} />
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <AnimatePresence>
                                {expandedTasks.includes(task.id) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="px-4 pb-4 border-t border-gray-100"
                                    >
                                        <div className="pt-4 space-y-3">
                                            {task.dependencies && task.dependencies.length > 0 && (
                                                <div>
                                                    <p className="text-sm font-medium text-gray-700 mb-1">Dependencies:</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {task.dependencies.map(depId => {
                                                            const depTask = activeTasks.find(t => t.id === depId);
                                                            return depTask ? (
                                                                <span key={depId} className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                                                    {depTask.task}
                                                                </span>
                                                            ) : null;
                                                        })}
                                                    </div>
                                                </div>
                                            )}

                                            {'blockers' in task && task.blockers && (
                                                <div className="p-3 bg-red-50 rounded-lg">
                                                    <p className="text-sm font-medium text-red-900 mb-1">Blockers:</p>
                                                    <p className="text-sm text-red-700">{task.blockers}</p>
                                                </div>
                                            )}

                                            {'notes' in task && task.notes && (
                                                <div>
                                                    <p className="text-sm font-medium text-gray-700 mb-1">Notes:</p>
                                                    <p className="text-sm text-gray-600">{task.notes}</p>
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between pt-3">
                                                <div className="flex items-center space-x-2">
                                                    <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors flex items-center space-x-1">
                                                        <BookOpen className="w-3 h-3" />
                                                        <span>View Details</span>
                                                    </button>
                                                    <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors flex items-center space-x-1">
                                                        <Send className="w-3 h-3" />
                                                        <span>Send Update</span>
                                                    </button>
                                                </div>
                                                {task.status === 'pending' && (
                                                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center space-x-1">
                                                        <Play className="w-3 h-3" />
                                                        <span>Start Task</span>
                                                    </button>
                                                )}
                                                {task.status === 'in-progress' && (
                                                    <button className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center space-x-1">
                                                        <CheckCircle className="w-3 h-3" />
                                                        <span>Mark Complete</span>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredTasks.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                        <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
                        <p className="text-sm text-gray-500">Try adjusting your filters or check another phase</p>
                    </div>
                )}
            </div>
        </div>
    );
} 