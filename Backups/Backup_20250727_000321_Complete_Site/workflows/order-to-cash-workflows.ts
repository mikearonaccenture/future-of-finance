// Order to Cash Detailed Workflows
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

export const orderToCashWorkflows: SubActivity[] = [
    {
        name: 'Customer Order Management',
        description: 'Order entry through fulfillment process',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Order Entry & Validation',
                currentState: {
                    activities: ['Manual order entry', 'Customer verification', 'Product availability check', 'Pricing lookup'],
                    timeRequired: '20-30 minutes per order',
                    painPoints: ['Data entry errors', 'Pricing discrepancies', 'Inventory visibility']
                },
                futureState: {
                    activities: ['Multi-channel order capture', 'Automated validation', 'Real-time availability'],
                    aiAgents: ['OE', 'OV', 'OA'], // Order Entry Agent, Order Validator, Order Allocator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Credit Check & Approval',
                currentState: {
                    activities: ['Credit limit verification', 'Payment terms review', 'Manual approval routing', 'Order hold management'],
                    timeRequired: '30-60 minutes per order',
                    painPoints: ['Manual credit checks', 'Delayed approvals', 'Inconsistent decisions']
                },
                futureState: {
                    activities: ['Automated credit scoring', 'Smart approval routing', 'Real-time limit management'],
                    aiAgents: ['CA', 'CM', 'AV'], // Credit Analyzer, Credit Monitor, Approval Validator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.RISK_ASSESSMENT, HUMAN_CHECKPOINT_TYPES.APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Order Fulfillment & Shipping',
                currentState: {
                    activities: ['Warehouse notification', 'Pick/pack instructions', 'Shipping arrangement', 'Tracking updates'],
                    timeRequired: '1-2 days',
                    painPoints: ['Communication delays', 'Manual tracking', 'Shipping errors']
                },
                futureState: {
                    activities: ['Automated fulfillment', 'Optimized routing', 'Real-time tracking'],
                    aiAgents: ['OS', 'SM', 'NC'], // Order Scheduler, Shipment Monitor, Notification Center
                    humanCheckpoints: [],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'OE', frequency: 1 },
            { agentId: 'OV', frequency: 1 },
            { agentId: 'OA', frequency: 1 },
            { agentId: 'CA', frequency: 1 },
            { agentId: 'CM', frequency: 1 },
            { agentId: 'AV', frequency: 1 },
            { agentId: 'OS', frequency: 1 },
            { agentId: 'SM', frequency: 1 },
            { agentId: 'NC', frequency: 1 }
        ],
        humanCheckpointsCount: 3,
        estimatedTimeSavings: '77% overall'
    },
    {
        name: 'Customer Billing',
        description: 'Invoice generation and delivery process',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Invoice Generation',
                currentState: {
                    activities: ['Billing data collection', 'Invoice creation', 'Tax calculation', 'Format preparation'],
                    timeRequired: '15-20 minutes per invoice',
                    painPoints: ['Manual data gathering', 'Calculation errors', 'Format inconsistencies']
                },
                futureState: {
                    activities: ['Automated invoice generation', 'Smart tax engine', 'Dynamic formatting'],
                    aiAgents: ['IG', 'BA', 'TC'], // Invoice Generator, Billing Automator, Tax Calculator
                    humanCheckpoints: [],
                    timeReduction: '90% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Invoice Review & Approval',
                currentState: {
                    activities: ['Accuracy verification', 'Approval routing', 'Exception handling', 'Adjustment processing'],
                    timeRequired: '30-45 minutes per batch',
                    painPoints: ['Manual review', 'Approval delays', 'Error corrections']
                },
                futureState: {
                    activities: ['AI-powered validation', 'Exception-only review', 'Auto-approval for standard invoices'],
                    aiAgents: ['IV', 'AV', 'EC'], // Invoice Validator (from P2P), Approval Validator, Exception Coordinator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING, HUMAN_CHECKPOINT_TYPES.QUALITY_ASSURANCE],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Invoice Delivery',
                currentState: {
                    activities: ['Print/email preparation', 'Customer portal upload', 'Delivery confirmation', 'Resend management'],
                    timeRequired: '10-15 minutes per invoice',
                    painPoints: ['Multiple delivery channels', 'Failed deliveries', 'Customer preferences']
                },
                futureState: {
                    activities: ['Omni-channel delivery', 'Automated confirmation', 'Smart retry logic'],
                    aiAgents: ['IB', 'CP', 'NC'], // Invoice Broadcaster, Customer Portal Manager, Notification Center
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'IG', frequency: 1 },
            { agentId: 'BA', frequency: 1 },
            { agentId: 'TC', frequency: 1 },
            { agentId: 'IV', frequency: 1 },
            { agentId: 'AV', frequency: 1 },
            { agentId: 'EC', frequency: 1 },
            { agentId: 'IB', frequency: 1 },
            { agentId: 'CP', frequency: 1 },
            { agentId: 'NC', frequency: 1 }
        ],
        humanCheckpointsCount: 2,
        estimatedTimeSavings: '85% overall'
    },
    {
        name: 'Collections Management',
        description: 'Customer payment collection and follow-up',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Collection Strategy & Prioritization',
                currentState: {
                    activities: ['Aging analysis', 'Risk assessment', 'Worklist creation', 'Strategy assignment'],
                    timeRequired: '2-3 hours daily',
                    painPoints: ['Manual prioritization', 'Static strategies', 'Resource allocation']
                },
                futureState: {
                    activities: ['AI-powered prioritization', 'Dynamic strategy optimization', 'Predictive analytics'],
                    aiAgents: ['CM', 'CP', 'AG'], // Collections Manager, Collections Predictor, Aging Analyzer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.STRATEGIC_DECISION],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Customer Contact & Negotiation',
                currentState: {
                    activities: ['Call preparation', 'Customer outreach', 'Payment negotiation', 'Promise tracking'],
                    timeRequired: '30-45 minutes per account',
                    painPoints: ['Time-consuming calls', 'Inconsistent approach', 'Poor documentation']
                },
                futureState: {
                    activities: ['AI-assisted communication', 'Automated outreach', 'Smart negotiation support'],
                    aiAgents: ['CC', 'PM', 'DO'], // Collections Caller, Promise Manager, Dunning Orchestrator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL],
                    timeReduction: '60% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Payment Application & Follow-up',
                currentState: {
                    activities: ['Payment monitoring', 'Promise verification', 'Follow-up scheduling', 'Escalation management'],
                    timeRequired: '20-30 minutes per account',
                    painPoints: ['Manual tracking', 'Missed follow-ups', 'Delayed escalations']
                },
                futureState: {
                    activities: ['Automated monitoring', 'Smart follow-up', 'Predictive escalation'],
                    aiAgents: ['CA', 'PM', 'NC'], // Cash Applier, Promise Manager, Notification Center
                    humanCheckpoints: [],
                    timeReduction: '80% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'CM', frequency: 1 },
            { agentId: 'CP', frequency: 1 },
            { agentId: 'AG', frequency: 1 },
            { agentId: 'CC', frequency: 1 },
            { agentId: 'PM', frequency: 2 },
            { agentId: 'DO', frequency: 1 },
            { agentId: 'CA', frequency: 1 },
            { agentId: 'NC', frequency: 1 }
        ],
        humanCheckpointsCount: 2,
        estimatedTimeSavings: '72% overall'
    },
    {
        name: 'Cash Application',
        description: 'Customer payment processing and application',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Payment Receipt & Identification',
                currentState: {
                    activities: ['Bank file download', 'Check processing', 'Customer identification', 'Remittance handling'],
                    timeRequired: '30-45 minutes per batch',
                    painPoints: ['Multiple payment channels', 'Missing remittance', 'Customer identification']
                },
                futureState: {
                    activities: ['Automated payment capture', 'AI-powered matching', 'Smart identification'],
                    aiAgents: ['CR', 'LB', 'ED'], // Cash Reconciler, Lockbox Processor, EDI Director
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Invoice Matching & Application',
                currentState: {
                    activities: ['Invoice lookup', 'Amount matching', 'Partial payment handling', 'Discount processing'],
                    timeRequired: '10-15 minutes per payment',
                    painPoints: ['Complex matching logic', 'Partial payments', 'Discount disputes']
                },
                futureState: {
                    activities: ['AI-powered matching', 'Automated application', 'Smart discount handling'],
                    aiAgents: ['CA', 'CR', 'FC'], // Cash Applier, Cash Reconciler, Finance Charge Calculator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Exception Resolution',
                currentState: {
                    activities: ['Research unmatched items', 'Customer contact', 'Application decision', 'Adjustment processing'],
                    timeRequired: '20-30 minutes per exception',
                    painPoints: ['Time-consuming research', 'Customer delays', 'Manual adjustments']
                },
                futureState: {
                    activities: ['AI-assisted research', 'Automated customer outreach', 'Smart resolution'],
                    aiAgents: ['UP', 'CQ', 'EC'], // Unapplied Processor, Customer Query Handler, Exception Coordinator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'CR', frequency: 2 },
            { agentId: 'LB', frequency: 1 },
            { agentId: 'ED', frequency: 1 },
            { agentId: 'CA', frequency: 1 },
            { agentId: 'FC', frequency: 1 },
            { agentId: 'UP', frequency: 1 },
            { agentId: 'CQ', frequency: 1 },
            { agentId: 'EC', frequency: 1 }
        ],
        humanCheckpointsCount: 2,
        estimatedTimeSavings: '78% overall'
    },
    {
        name: 'Deductions Management',
        description: 'Customer deduction processing and resolution',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Deduction Identification & Coding',
                currentState: {
                    activities: ['Deduction identification', 'Reason coding', 'Documentation gathering', 'Initial assessment'],
                    timeRequired: '15-20 minutes per deduction',
                    painPoints: ['Manual identification', 'Inconsistent coding', 'Missing documentation']
                },
                futureState: {
                    activities: ['Automated identification', 'AI-powered coding', 'Smart documentation retrieval'],
                    aiAgents: ['DD', 'DM', 'DC'], // Deduction Detective, Deductions Manager, Document Curator
                    humanCheckpoints: [],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Validity Assessment & Resolution',
                currentState: {
                    activities: ['Root cause analysis', 'Validity determination', 'Approval routing', 'Customer communication'],
                    timeRequired: '30-45 minutes per deduction',
                    painPoints: ['Complex investigations', 'Approval delays', 'Dispute management']
                },
                futureState: {
                    activities: ['AI-powered analysis', 'Automated validity checking', 'Smart resolution'],
                    aiAgents: ['DD', 'DR', 'AV'], // Deduction Detective, Deduction Resolver, Approval Validator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL, HUMAN_CHECKPOINT_TYPES.COMPLIANCE_REVIEW],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Recovery & Prevention',
                currentState: {
                    activities: ['Collection efforts', 'Credit memo processing', 'Root cause tracking', 'Process improvement'],
                    timeRequired: '20-30 minutes per deduction',
                    painPoints: ['Low recovery rates', 'Recurring issues', 'Manual tracking']
                },
                futureState: {
                    activities: ['Automated recovery', 'Predictive prevention', 'Continuous improvement'],
                    aiAgents: ['DC', 'PI', 'PM'], // Deduction Collector, Process Improver, Performance Monitor
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.STRATEGIC_DECISION],
                    timeReduction: '75% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'DD', frequency: 2 },
            { agentId: 'DM', frequency: 1 },
            { agentId: 'DC', frequency: 2 },
            { agentId: 'DR', frequency: 1 },
            { agentId: 'AV', frequency: 1 },
            { agentId: 'PI', frequency: 1 },
            { agentId: 'PM', frequency: 1 }
        ],
        humanCheckpointsCount: 3,
        estimatedTimeSavings: '75% overall'
    },
    {
        name: 'Credit Management',
        description: 'Customer credit evaluation and monitoring',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Credit Application & Evaluation',
                currentState: {
                    activities: ['Application review', 'Financial analysis', 'Reference checking', 'Risk scoring'],
                    timeRequired: '2-3 hours per application',
                    painPoints: ['Manual analysis', 'Inconsistent scoring', 'Delayed decisions']
                },
                futureState: {
                    activities: ['Automated analysis', 'AI risk scoring', 'Real-time decisioning'],
                    aiAgents: ['CA', 'CR', 'RK'], // Credit Analyzer, Credit Reviewer, Risk Manager
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.RISK_ASSESSMENT, HUMAN_CHECKPOINT_TYPES.APPROVAL],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Credit Limit Management',
                currentState: {
                    activities: ['Periodic reviews', 'Limit calculations', 'Approval processing', 'System updates'],
                    timeRequired: '30-45 minutes per review',
                    painPoints: ['Infrequent reviews', 'Static limits', 'Manual calculations']
                },
                futureState: {
                    activities: ['Dynamic limit management', 'Continuous monitoring', 'Automated adjustments'],
                    aiAgents: ['CM', 'RL', 'ML'], // Credit Monitor, Risk Limiter, Machine Learning Engine
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Credit Monitoring & Alerts',
                currentState: {
                    activities: ['Exposure tracking', 'Alert generation', 'Block management', 'Reporting'],
                    timeRequired: '2-3 hours daily',
                    painPoints: ['Reactive monitoring', 'Missed alerts', 'Manual blocking']
                },
                futureState: {
                    activities: ['Predictive monitoring', 'Smart alerts', 'Automated actions'],
                    aiAgents: ['CM', 'NC', 'PM'], // Credit Monitor, Notification Center, Performance Monitor
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'CA', frequency: 1 },
            { agentId: 'CR', frequency: 1 },
            { agentId: 'RK', frequency: 1 },
            { agentId: 'CM', frequency: 2 },
            { agentId: 'RL', frequency: 1 },
            { agentId: 'ML', frequency: 1 },
            { agentId: 'NC', frequency: 1 },
            { agentId: 'PM', frequency: 1 }
        ],
        humanCheckpointsCount: 3,
        estimatedTimeSavings: '78% overall'
    }
]; 