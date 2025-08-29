// Record to Report Detailed Workflows
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

export const recordToReportWorkflows: SubActivity[] = [
    {
        name: 'Period Close',
        description: 'Monthly and quarterly financial close process',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Close Preparation & Task Management',
                currentState: {
                    activities: ['Close calendar review', 'Task assignment', 'Dependency tracking', 'Status meetings'],
                    timeRequired: '4-6 hours',
                    painPoints: ['Manual coordination', 'Visibility gaps', 'Bottleneck identification']
                },
                futureState: {
                    activities: ['Automated task orchestration', 'Real-time status tracking', 'AI-powered bottleneck prediction'],
                    aiAgents: ['CC', 'CT', 'WF'], // Close Calendar Manager, Close Task Tracker, Workflow Facilitator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.STRATEGIC_DECISION],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Subledger Close & Reconciliation',
                currentState: {
                    activities: ['Subledger processing', 'Interface runs', 'Reconciliation', 'Exception investigation'],
                    timeRequired: '8-12 hours per subledger',
                    painPoints: ['Manual reconciliation', 'Interface errors', 'Time-consuming investigations']
                },
                futureState: {
                    activities: ['Automated processing', 'AI reconciliation', 'Smart exception resolution'],
                    aiAgents: ['SR', 'BR', 'EC'], // Subledger Reconciler, Balance Reconciler, Exception Coordinator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Journal Entry Processing',
                currentState: {
                    activities: ['Manual journal creation', 'Recurring entry processing', 'Approval routing', 'Posting'],
                    timeRequired: '6-8 hours',
                    painPoints: ['Manual entry creation', 'Approval delays', 'Posting errors']
                },
                futureState: {
                    activities: ['Automated journal creation', 'Smart approval routing', 'Auto-posting'],
                    aiAgents: ['JE', 'JV', 'AV'], // Journal Entry Creator, Journal Validator, Approval Validator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL, HUMAN_CHECKPOINT_TYPES.COMPLIANCE_REVIEW],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Accruals & Estimates',
                currentState: {
                    activities: ['Accrual calculation', 'Documentation gathering', 'Review and approval', 'Reversal setup'],
                    timeRequired: '4-6 hours',
                    painPoints: ['Manual calculations', 'Missing support', 'Inconsistent methodology']
                },
                futureState: {
                    activities: ['AI-powered accrual calculation', 'Automated documentation', 'Smart reversals'],
                    aiAgents: ['AI', 'PA', 'ML'], // Accrual Identifier, Prepaid Accountant, Machine Learning Engine
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.QUALITY_ASSURANCE],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Financial Statement Generation',
                currentState: {
                    activities: ['Trial balance review', 'Statement preparation', 'Tie-out procedures', 'Package assembly'],
                    timeRequired: '8-10 hours',
                    painPoints: ['Manual preparation', 'Version control', 'Last-minute changes']
                },
                futureState: {
                    activities: ['Automated statement generation', 'Real-time tie-outs', 'Dynamic package assembly'],
                    aiAgents: ['TB', 'FS', 'RG'], // Trial Balance Analyzer, Financial Statement Preparer, Report Generator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.FINAL_SIGNOFF],
                    timeReduction: '80% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 5,
        aiAgentsUsed: [
            { agentId: 'CC', frequency: 1 },
            { agentId: 'CT', frequency: 1 },
            { agentId: 'WF', frequency: 1 },
            { agentId: 'SR', frequency: 1 },
            { agentId: 'BR', frequency: 1 },
            { agentId: 'EC', frequency: 1 },
            { agentId: 'JE', frequency: 1 },
            { agentId: 'JV', frequency: 1 },
            { agentId: 'AV', frequency: 1 },
            { agentId: 'AI', frequency: 1 },
            { agentId: 'PA', frequency: 1 },
            { agentId: 'ML', frequency: 1 },
            { agentId: 'TB', frequency: 1 },
            { agentId: 'FS', frequency: 1 },
            { agentId: 'RG', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '75% overall'
    },
    {
        name: 'General Accounting',
        description: 'Day-to-day accounting operations and maintenance',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'GL Maintenance & Master Data',
                currentState: {
                    activities: ['Account setup', 'Hierarchy maintenance', 'Mapping updates', 'Access management'],
                    timeRequired: '2-3 hours per request',
                    painPoints: ['Manual updates', 'Approval delays', 'Documentation gaps']
                },
                futureState: {
                    activities: ['Self-service updates', 'Automated validation', 'Smart access control'],
                    aiAgents: ['GL', 'MD', 'DQ'], // GL Maintainer, Master Data Guardian, Data Quality Guardian
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Daily Transaction Processing',
                currentState: {
                    activities: ['Transaction review', 'Coding verification', 'Error correction', 'Posting'],
                    timeRequired: '3-4 hours daily',
                    painPoints: ['Volume of transactions', 'Coding errors', 'Manual review']
                },
                futureState: {
                    activities: ['Automated coding', 'AI validation', 'Exception-only review'],
                    aiAgents: ['JE', 'JV', 'EC'], // Journal Entry Creator, Journal Validator, Exception Coordinator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Account Analysis & Reconciliation',
                currentState: {
                    activities: ['Balance analysis', 'Variance investigation', 'Supporting documentation', 'Clearing items'],
                    timeRequired: '6-8 hours per account group',
                    painPoints: ['Manual analysis', 'Missing documentation', 'Uncleared items']
                },
                futureState: {
                    activities: ['AI-powered analysis', 'Automated documentation', 'Smart clearing'],
                    aiAgents: ['BR', 'RL', 'VA'], // Balance Reconciler, Rollforward Ledger, Variance Analyzer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.QUALITY_ASSURANCE],
                    timeReduction: '75% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'GL', frequency: 1 },
            { agentId: 'MD', frequency: 1 },
            { agentId: 'DQ', frequency: 1 },
            { agentId: 'JE', frequency: 1 },
            { agentId: 'JV', frequency: 1 },
            { agentId: 'EC', frequency: 1 },
            { agentId: 'BR', frequency: 1 },
            { agentId: 'RL', frequency: 1 },
            { agentId: 'VA', frequency: 1 }
        ],
        humanCheckpointsCount: 3,
        estimatedTimeSavings: '77% overall'
    },
    {
        name: 'Financial Reporting',
        description: 'Internal and external financial reporting',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Report Data Collection',
                currentState: {
                    activities: ['Data extraction', 'Consolidation', 'Validation', 'Adjustments'],
                    timeRequired: '4-6 hours per report',
                    painPoints: ['Multiple data sources', 'Manual consolidation', 'Version control']
                },
                futureState: {
                    activities: ['Automated data collection', 'Real-time consolidation', 'AI validation'],
                    aiAgents: ['DA', 'CA', 'DQ'], // Data Aggregator, Consolidation Agent (FPA), Data Quality Guardian
                    humanCheckpoints: [],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Report Generation & Formatting',
                currentState: {
                    activities: ['Report building', 'Formatting', 'Chart creation', 'Narrative writing'],
                    timeRequired: '6-8 hours per report',
                    painPoints: ['Manual formatting', 'Inconsistent presentation', 'Time-consuming narratives']
                },
                futureState: {
                    activities: ['Automated report generation', 'Dynamic visualization', 'AI narrative creation'],
                    aiAgents: ['RG', 'MR', 'FC'], // Report Generator, Management Reporter, Flux Commentator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.QUALITY_ASSURANCE],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Review & Distribution',
                currentState: {
                    activities: ['Management review', 'Revision processing', 'Final approval', 'Distribution'],
                    timeRequired: '2-3 hours',
                    painPoints: ['Review cycles', 'Version management', 'Distribution errors']
                },
                futureState: {
                    activities: ['AI-assisted review', 'Version control', 'Automated distribution'],
                    aiAgents: ['CQ', 'AV', 'NC'], // Close Quality Checker, Approval Validator, Notification Center
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.FINAL_SIGNOFF],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'DA', frequency: 1 },
            { agentId: 'CA', frequency: 1 },
            { agentId: 'DQ', frequency: 1 },
            { agentId: 'RG', frequency: 1 },
            { agentId: 'MR', frequency: 1 },
            { agentId: 'FC', frequency: 1 },
            { agentId: 'CQ', frequency: 1 },
            { agentId: 'AV', frequency: 1 },
            { agentId: 'NC', frequency: 1 }
        ],
        humanCheckpointsCount: 2,
        estimatedTimeSavings: '75% overall'
    },
    {
        name: 'Consolidation & Intercompany',
        description: 'Multi-entity consolidation and elimination',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Entity Data Collection',
                currentState: {
                    activities: ['Package collection', 'Currency translation', 'Mapping verification', 'Data validation'],
                    timeRequired: '6-8 hours per close',
                    painPoints: ['Multiple currencies', 'Mapping issues', 'Timing differences']
                },
                futureState: {
                    activities: ['Automated collection', 'Real-time translation', 'AI validation'],
                    aiAgents: ['CE', 'CY', 'DQ'], // Consolidation Engine, Currency Translator, Data Quality Guardian
                    humanCheckpoints: [],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Intercompany Reconciliation',
                currentState: {
                    activities: ['Balance matching', 'Dispute resolution', 'Adjustment processing', 'Documentation'],
                    timeRequired: '8-10 hours',
                    painPoints: ['Timing differences', 'Dispute resolution', 'Manual matching']
                },
                futureState: {
                    activities: ['AI matching', 'Automated dispute resolution', 'Smart adjustments'],
                    aiAgents: ['IR', 'EC', 'BR'], // Intercompany Reconciler, Exception Coordinator, Balance Reconciler
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Elimination & Consolidation',
                currentState: {
                    activities: ['Elimination entries', 'Minority interest', 'Equity pickup', 'Consolidated statements'],
                    timeRequired: '4-6 hours',
                    painPoints: ['Complex eliminations', 'Manual calculations', 'Error prone']
                },
                futureState: {
                    activities: ['Automated eliminations', 'AI calculations', 'Real-time consolidation'],
                    aiAgents: ['EJ', 'CE', 'FS'], // Elimination Judge, Consolidation Engine, Financial Statement Preparer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.COMPLIANCE_REVIEW, HUMAN_CHECKPOINT_TYPES.FINAL_SIGNOFF],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'CE', frequency: 2 },
            { agentId: 'CY', frequency: 1 },
            { agentId: 'DQ', frequency: 1 },
            { agentId: 'IR', frequency: 1 },
            { agentId: 'EC', frequency: 1 },
            { agentId: 'BR', frequency: 1 },
            { agentId: 'EJ', frequency: 1 },
            { agentId: 'FS', frequency: 1 }
        ],
        humanCheckpointsCount: 3,
        estimatedTimeSavings: '75% overall'
    },
    {
        name: 'Regulatory & Compliance Reporting',
        description: 'Statutory and regulatory reporting requirements',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Data Preparation & Mapping',
                currentState: {
                    activities: ['Local GAAP conversion', 'Tax adjustments', 'Regulatory mapping', 'Data validation'],
                    timeRequired: '8-10 hours per filing',
                    painPoints: ['Complex conversions', 'Manual mapping', 'Regulatory changes']
                },
                futureState: {
                    activities: ['Automated conversion', 'AI mapping', 'Regulatory updates'],
                    aiAgents: ['SR', 'GR', 'TD'], // Statutory Reporter, GAAP Reporter, Tax Determiner
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.COMPLIANCE_REVIEW],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Report Generation & Review',
                currentState: {
                    activities: ['Report creation', 'XBRL tagging', 'Internal review', 'External review'],
                    timeRequired: '6-8 hours',
                    painPoints: ['Manual tagging', 'Review cycles', 'Last-minute changes']
                },
                futureState: {
                    activities: ['Automated generation', 'AI tagging', 'Smart review'],
                    aiAgents: ['XR', 'RR', 'CC'], // XBRL Reporter, Regulatory Reporter, Compliance Checker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.QUALITY_ASSURANCE, HUMAN_CHECKPOINT_TYPES.COMPLIANCE_REVIEW],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Filing & Confirmation',
                currentState: {
                    activities: ['Final approval', 'Electronic filing', 'Confirmation tracking', 'Archive management'],
                    timeRequired: '2-3 hours',
                    painPoints: ['Filing errors', 'Deadline management', 'Confirmation delays']
                },
                futureState: {
                    activities: ['Automated filing', 'Real-time tracking', 'Smart archiving'],
                    aiAgents: ['AV', 'NC', 'DA'], // Approval Validator, Notification Center, Document Archiver
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.FINAL_SIGNOFF],
                    timeReduction: '80% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'SR', frequency: 1 },
            { agentId: 'GR', frequency: 1 },
            { agentId: 'TD', frequency: 1 },
            { agentId: 'XR', frequency: 1 },
            { agentId: 'RR', frequency: 1 },
            { agentId: 'CC', frequency: 1 },
            { agentId: 'AV', frequency: 1 },
            { agentId: 'NC', frequency: 1 },
            { agentId: 'DA', frequency: 1 }
        ],
        humanCheckpointsCount: 5,
        estimatedTimeSavings: '75% overall'
    },
    {
        name: 'Fixed Assets & Lease Accounting',
        description: 'Asset lifecycle and lease management',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Asset/Lease Addition & Setup',
                currentState: {
                    activities: ['Asset registration', 'Lease analysis', 'Classification', 'System setup'],
                    timeRequired: '1-2 hours per asset/lease',
                    painPoints: ['Manual data entry', 'Classification complexity', 'Documentation']
                },
                futureState: {
                    activities: ['Automated registration', 'AI classification', 'Smart setup'],
                    aiAgents: ['FA', 'LA', 'DC'], // Fixed Asset Accountant, Lease Accountant, Document Curator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Depreciation & Amortization',
                currentState: {
                    activities: ['Calculation runs', 'Rate verification', 'Adjustment processing', 'Journal creation'],
                    timeRequired: '4-6 hours monthly',
                    painPoints: ['Manual adjustments', 'Multiple books', 'Error corrections']
                },
                futureState: {
                    activities: ['Automated calculations', 'Multi-book processing', 'Smart journaling'],
                    aiAgents: ['FA', 'BV', 'JE'], // Fixed Asset Accountant, Book Validator, Journal Entry Creator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.QUALITY_ASSURANCE],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Impairment & Disposal',
                currentState: {
                    activities: ['Impairment testing', 'Disposal processing', 'Gain/loss calculation', 'Reporting'],
                    timeRequired: '2-3 hours per transaction',
                    painPoints: ['Complex calculations', 'Documentation requirements', 'Approval delays']
                },
                futureState: {
                    activities: ['AI impairment testing', 'Automated disposal', 'Real-time reporting'],
                    aiAgents: ['FA', 'VA', 'AV'], // Fixed Asset Accountant, Valuation Analyst (CF), Approval Validator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL, HUMAN_CHECKPOINT_TYPES.COMPLIANCE_REVIEW],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'FA', frequency: 3 },
            { agentId: 'LA', frequency: 1 },
            { agentId: 'DC', frequency: 1 },
            { agentId: 'BV', frequency: 1 },
            { agentId: 'JE', frequency: 1 },
            { agentId: 'VA', frequency: 1 },
            { agentId: 'AV', frequency: 1 }
        ],
        humanCheckpointsCount: 4,
        estimatedTimeSavings: '75% overall'
    }
]; 