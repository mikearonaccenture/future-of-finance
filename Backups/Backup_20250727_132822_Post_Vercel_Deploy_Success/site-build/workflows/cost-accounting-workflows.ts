// Cost Accounting Workflows

import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

export const costAccountingWorkflows: SubActivity[] = [
    {
        name: 'Product Costing',
        description: 'Standard cost calculation, variance analysis, and product profitability',
        platform: EXISTING_PLATFORMS.DYNAMIC_COST_ENGINE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Cost Component Collection',
                currentState: {
                    activities: ['Material cost gathering from multiple systems', 'Labor rate compilation', 'Machine hour tracking', 'Overhead pool identification', 'BOM verification'],
                    timeRequired: '2-3 days per product line',
                    painPoints: ['Data scattered across systems', 'Manual consolidation', 'Outdated BOMs', 'Complex overhead structures']
                },
                futureState: {
                    activities: ['Automated multi-system data aggregation', 'Real-time cost feeds', 'AI BOM validation', 'Dynamic cost pooling'],
                    aiAgents: ['DA', 'CF', 'BV', 'CP'], // Data Aggregator, Cost Feeder, BOM Validator, Cost Pooler
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Standard Cost Calculation',
                currentState: {
                    activities: ['Material cost rollup', 'Labor standard calculations', 'Overhead rate application', 'Cost sheet preparation', 'Management review'],
                    timeRequired: '1-2 days per product',
                    painPoints: ['Manual calculations', 'Version control issues', 'Inconsistent methodologies', 'Error-prone rollups']
                },
                futureState: {
                    activities: ['AI-powered cost modeling', 'Automated rollup calculations', 'Dynamic rate optimization', 'Real-time cost visibility'],
                    aiAgents: ['CM', 'RC', 'RO', 'CV'], // Cost Modeler, Rollup Calculator, Rate Optimizer, Cost Visualizer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.COST_VALIDATION],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Variance Analysis',
                currentState: {
                    activities: ['Actual vs standard comparison', 'Variance calculation', 'Root cause investigation', 'Explanation documentation', 'Report preparation'],
                    timeRequired: '3-4 days monthly',
                    painPoints: ['Time-consuming analysis', 'Manual variance calculations', 'Limited root cause visibility', 'Delayed insights']
                },
                futureState: {
                    activities: ['Real-time variance detection', 'AI root cause analysis', 'Predictive variance alerts', 'Automated reporting'],
                    aiAgents: ['VD', 'RC', 'PA', 'AR'], // Variance Detector, Root Cause Analyzer, Predictive Alerter, Auto Reporter
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.VARIANCE_REVIEW],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Margin Analysis',
                currentState: {
                    activities: ['Product margin calculation', 'Customer profitability analysis', 'Channel performance review', 'Mix analysis', 'Pricing recommendations'],
                    timeRequired: '2-3 days per analysis',
                    painPoints: ['Complex calculations', 'Data integration challenges', 'Static analysis', 'Limited insights']
                },
                futureState: {
                    activities: ['AI-driven margin optimization', 'Dynamic profitability modeling', 'Real-time mix analysis', 'Predictive pricing'],
                    aiAgents: ['MO', 'PM', 'MA', 'PP'], // Margin Optimizer, Profitability Modeler, Mix Analyzer, Predictive Pricer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.MARGIN_APPROVAL],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Cost Allocation',
                currentState: {
                    activities: ['Cost center mapping', 'Allocation basis determination', 'Distribution calculations', 'Journal entry preparation', 'Reconciliation'],
                    timeRequired: '3-4 days monthly',
                    painPoints: ['Complex allocation rules', 'Manual calculations', 'Reconciliation errors', 'Audit trail gaps']
                },
                futureState: {
                    activities: ['AI allocation engine', 'Automated distribution', 'Smart reconciliation', 'Blockchain audit trail'],
                    aiAgents: ['AE', 'AD', 'SR', 'BA'], // Allocation Engine, Auto Distributor, Smart Reconciler, Blockchain Auditor
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ALLOCATION_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Reporting & Analytics',
                currentState: {
                    activities: ['Report template maintenance', 'Data compilation', 'Trend analysis', 'Executive summary preparation', 'Distribution'],
                    timeRequired: '2-3 days per cycle',
                    painPoints: ['Manual report generation', 'Limited analytics', 'Static reporting', 'Distribution delays']
                },
                futureState: {
                    activities: ['Real-time dashboards', 'AI-powered insights', 'Predictive analytics', 'Automated distribution'],
                    aiAgents: ['RD', 'AI', 'PA', 'AD'], // Real-time Dashboard, AI Insights, Predictive Analytics, Auto Distributor
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            }
        ],
        totalSteps: 6,
        futureStateWorkflow: [],
        estimatedTimeSavings: '79%',
        aiAgentsUsed: ['DA', 'CF', 'BV', 'CP', 'CM', 'RC', 'RO', 'CV', 'VD', 'PA', 'AR', 'MO', 'PM', 'MA', 'PP', 'AE', 'AD', 'SR', 'BA', 'RD', 'AI'],
        humanCheckpointsCount: 4
    },
    {
        name: 'Product & Service Costing',
        description: 'Comprehensive costing for both products and services across the organization',
        platform: EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Service Activity Mapping',
                currentState: {
                    activities: ['Service catalog review', 'Activity identification', 'Resource mapping', 'Time tracking setup', 'Cost driver identification'],
                    timeRequired: '1-2 weeks initial setup',
                    painPoints: ['Incomplete service definitions', 'Manual activity mapping', 'Poor time tracking', 'Unclear cost drivers']
                },
                futureState: {
                    activities: ['AI service classification', 'Automated activity detection', 'Smart resource mapping', 'Real-time tracking'],
                    aiAgents: ['SC', 'AD', 'RM', 'RT'], // Service Classifier, Activity Detector, Resource Mapper, Real-time Tracker
                    humanCheckpoints: [],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Resource Cost Assignment',
                currentState: {
                    activities: ['Labor cost allocation', 'Material usage tracking', 'Equipment cost assignment', 'Facility cost distribution', 'Support cost allocation'],
                    timeRequired: '3-4 days monthly',
                    painPoints: ['Manual allocations', 'Inaccurate time tracking', 'Complex distribution rules', 'Missing cost data']
                },
                futureState: {
                    activities: ['AI-driven cost assignment', 'Automated time capture', 'Dynamic allocation engine', 'Real-time cost tracking'],
                    aiAgents: ['CA', 'TC', 'AE', 'CT'], // Cost Assigner, Time Capturer, Allocation Engine, Cost Tracker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.COST_ASSIGNMENT_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Revenue Matching',
                currentState: {
                    activities: ['Service revenue identification', 'Contract mapping', 'Revenue recognition', 'Unbilled revenue tracking', 'Adjustment processing'],
                    timeRequired: '2-3 days per period',
                    painPoints: ['Complex revenue rules', 'Manual matching', 'Recognition timing issues', 'Adjustment errors']
                },
                futureState: {
                    activities: ['Automated revenue matching', 'AI recognition engine', 'Real-time unbilled tracking', 'Smart adjustments'],
                    aiAgents: ['RM', 'RE', 'UT', 'SA'], // Revenue Matcher, Recognition Engine, Unbilled Tracker, Smart Adjuster
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.REVENUE_RECOGNITION],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Profitability Calculation',
                currentState: {
                    activities: ['Margin calculation', 'Service line P&L preparation', 'Customer profitability analysis', 'Contribution margin analysis', 'Break-even calculations'],
                    timeRequired: '2-3 days per analysis',
                    painPoints: ['Manual calculations', 'Data quality issues', 'Limited drill-down capability', 'Static analysis']
                },
                futureState: {
                    activities: ['Real-time profitability engine', 'AI margin optimization', 'Dynamic P&L generation', 'Predictive analytics'],
                    aiAgents: ['PE', 'MO', 'PG', 'PA'], // Profitability Engine, Margin Optimizer, P&L Generator, Predictive Analytics
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.PROFITABILITY_VALIDATION],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Performance Optimization',
                currentState: {
                    activities: ['Unprofitable service identification', 'Cost reduction opportunities', 'Pricing analysis', 'Service mix optimization', 'Action plan development'],
                    timeRequired: '1-2 weeks per cycle',
                    painPoints: ['Manual analysis', 'Limited optimization tools', 'Reactive approach', 'Slow implementation']
                },
                futureState: {
                    activities: ['AI opportunity detection', 'Automated cost optimization', 'Dynamic pricing engine', 'Real-time mix optimization'],
                    aiAgents: ['OD', 'CO', 'PE', 'MO'], // Opportunity Detector, Cost Optimizer, Pricing Engine, Mix Optimizer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.OPTIMIZATION_APPROVAL],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Reporting & Insights',
                currentState: {
                    activities: ['Report preparation', 'Dashboard updates', 'Trend analysis', 'Benchmarking', 'Executive presentations'],
                    timeRequired: '2-3 days monthly',
                    painPoints: ['Manual reporting', 'Limited insights', 'Static dashboards', 'Time-consuming analysis']
                },
                futureState: {
                    activities: ['AI-powered dashboards', 'Automated insights generation', 'Real-time benchmarking', 'Predictive reporting'],
                    aiAgents: ['DD', 'IG', 'RB', 'PR'], // Dynamic Dashboard, Insights Generator, Real-time Benchmarker, Predictive Reporter
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            }
        ],
        totalSteps: 6,
        futureStateWorkflow: [],
        estimatedTimeSavings: '78%',
        aiAgentsUsed: ['SC', 'AD', 'RM', 'RT', 'CA', 'TC', 'AE', 'CT', 'RE', 'UT', 'SA', 'PE', 'MO', 'PG', 'PA', 'OD', 'CO', 'DD', 'IG', 'RB', 'PR'],
        humanCheckpointsCount: 4
    }
]; 