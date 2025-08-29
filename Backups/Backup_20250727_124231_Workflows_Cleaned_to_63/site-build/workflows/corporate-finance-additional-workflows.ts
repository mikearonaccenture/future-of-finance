// Additional Corporate Finance Workflows

import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

export const corporateFinanceAdditionalWorkflows: SubActivity[] = [
    {
        name: 'Cash Management and Banking',
        description: 'Cash positioning, bank account management, and banking operations',
        platform: EXISTING_PLATFORMS.CASH_TREASURY_MANAGEMENT,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Daily Cash Positioning',
                currentState: {
                    activities: ['Bank statement collection', 'Balance aggregation', 'Cash position calculation', 'Forecast comparison', 'Reporting preparation'],
                    timeRequired: '2-3 hours daily',
                    painPoints: ['Manual statement gathering', 'Multiple bank portals', 'Time zone challenges', 'Reconciliation delays']
                },
                futureState: {
                    activities: ['Automated bank feeds', 'Real-time aggregation', 'AI cash positioning', 'Predictive forecasting', 'Auto-reporting'],
                    aiAgents: ['ABF', 'RTA', 'ACP', 'PFC'], // Automated Bank Feeds, Real-Time Aggregator, AI Cash Positioning, Predictive Forecast Comparator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.POSITION_VALIDATION],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Bank Account Management',
                currentState: {
                    activities: ['Account opening/closing', 'Signatory management', 'Documentation maintenance', 'Compliance tracking', 'Fee analysis'],
                    timeRequired: '1-2 weeks per request',
                    painPoints: ['Complex documentation', 'Slow bank processes', 'Manual tracking', 'Compliance burden']
                },
                futureState: {
                    activities: ['Digital account lifecycle', 'E-signature integration', 'Smart documentation', 'Auto-compliance checks', 'AI fee optimization'],
                    aiAgents: ['DAL', 'ESI', 'SDM', 'AFO'], // Digital Account Lifecycle, E-Signature Integration, Smart Documentation Manager, AI Fee Optimizer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ACCOUNT_APPROVAL],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Payment Operations',
                currentState: {
                    activities: ['Payment initiation', 'Approval routing', 'Execution monitoring', 'Confirmation tracking', 'Exception handling'],
                    timeRequired: '4-6 hours daily',
                    painPoints: ['Manual payment entry', 'Complex approvals', 'Limited visibility', 'Error resolution time']
                },
                futureState: {
                    activities: ['Automated payment creation', 'Smart approval routing', 'Real-time execution tracking', 'AI confirmation matching', 'Predictive exception handling'],
                    aiAgents: ['APC', 'SAR', 'RET', 'PEH'], // Automated Payment Creator, Smart Approval Router, Real-time Execution Tracker, Predictive Exception Handler
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.PAYMENT_AUTHORIZATION],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Bank Reconciliation',
                currentState: {
                    activities: ['Transaction matching', 'Discrepancy identification', 'Investigation process', 'Adjustment entries', 'Documentation'],
                    timeRequired: '2-3 days monthly per account',
                    painPoints: ['Manual matching', 'High transaction volumes', 'Complex investigations', 'Delayed close process']
                },
                futureState: {
                    activities: ['AI transaction matching', 'Auto-discrepancy detection', 'Smart investigation', 'Automated adjustments', 'Real-time documentation'],
                    aiAgents: ['ATM', 'ADD', 'SIE', 'AAJ'], // AI Transaction Matcher, Auto-Discrepancy Detector, Smart Investigation Engine, Automated Adjustment Journal
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.RECONCILIATION_REVIEW],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Banking Analytics',
                currentState: {
                    activities: ['Fee analysis', 'Service utilization review', 'Relationship profitability', 'Optimization opportunities', 'Reporting'],
                    timeRequired: '1 week quarterly',
                    painPoints: ['Data fragmentation', 'Manual analysis', 'Limited insights', 'Optimization delays']
                },
                futureState: {
                    activities: ['Real-time fee tracking', 'AI utilization analysis', 'Dynamic profitability scoring', 'Optimization engine', 'Automated insights'],
                    aiAgents: ['RFT', 'AUA', 'DPS', 'OPE'], // Real-time Fee Tracker, AI Utilization Analyzer, Dynamic Profitability Scorer, Optimization Engine
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ANALYTICS_REVIEW],
                    timeReduction: '75% reduction'
                }
            }
        ],
        totalSteps: 5,
        estimatedTimeSavings: '79%',
        aiAgentsUsed: ['ABF', 'RTA', 'ACP', 'PFC', 'DAL', 'ESI', 'SDM', 'AFO', 'APC', 'SAR', 'RET', 'PEH', 'ATM', 'ADD', 'SIE', 'AAJ', 'RFT', 'AUA', 'DPS', 'OPE'],
        humanCheckpointsCount: 5
    }
]; 