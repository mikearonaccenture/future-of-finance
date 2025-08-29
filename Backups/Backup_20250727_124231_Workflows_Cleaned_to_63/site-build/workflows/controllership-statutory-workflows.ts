import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { SubActivity, HUMAN_CHECKPOINT_TYPES } from '../finance-workflows-overview';

export const controllershipStatutoryWorkflows: SubActivity[] = [
    {
        name: 'Financial Statements & Disclosures',
        description: 'Preparation of financial statements and regulatory disclosures',
        platform: EXISTING_PLATFORMS.REGULATORY_INTELLIGENCE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Data Collection & Aggregation',
                currentState: {
                    activities: [
                        'Manual data collection from systems',
                        'Spreadsheet consolidation',
                        'Email chase for missing data'
                    ],
                    painPoints: [
                        'Time-consuming data gathering',
                        'Version control issues',
                        'Risk of data errors'
                    ],
                    timeRequired: '5-7 days'
                },
                futureState: {
                    activities: [
                        'Automated data extraction',
                        'Real-time consolidation',
                        'AI-powered completeness checks'
                    ],
                    timeReduction: '80% faster',
                    aiAgents: ['CTRL-DCA', 'CTRL-FSC'],
                    humanCheckpoints: ['Data Validation']
                }
            },
            {
                stepNumber: 2,
                description: 'Trial Balance Review & Adjustments',
                currentState: {
                    activities: [
                        'Review trial balance',
                        'Identify required adjustments',
                        'Process journal entries',
                        'Update supporting schedules'
                    ],
                    painPoints: [
                        'Manual adjustment tracking',
                        'Supporting documentation gaps',
                        'Version control challenges'
                    ],
                    timeRequired: '2-3 days'
                },
                futureState: {
                    activities: [
                        'AI anomaly detection',
                        'Automated adjustment suggestions',
                        'Smart journal entry generation',
                        'Real-time schedule updates'
                    ],
                    timeReduction: '80% faster',
                    aiAgents: ['CTRL-ADA', 'CTRL-JEG', 'CTRL-SSU'],
                    humanCheckpoints: ['Adjustment Approval']
                }
            },
            {
                stepNumber: 3,
                description: 'Statement Compilation & Formatting',
                currentState: {
                    activities: [
                        'Compile financial statements',
                        'Apply formatting standards',
                        'Cross-check calculations',
                        'Ensure internal consistency'
                    ],
                    painPoints: [
                        'Complex formatting rules',
                        'Manual cross-checking',
                        'Multiple format requirements'
                    ],
                    timeRequired: '2-3 days'
                },
                futureState: {
                    activities: [
                        'AI-powered compilation',
                        'Automated formatting',
                        'Smart consistency checks',
                        'Multi-format generation'
                    ],
                    timeReduction: '85% faster',
                    aiAgents: ['CTRL-FSP', 'CTRL-FFC', 'CTRL-MFG'],
                    humanCheckpoints: ['Format Review']
                }
            },
            {
                stepNumber: 4,
                description: 'Disclosure Note Preparation',
                currentState: {
                    activities: [
                        'Draft disclosure notes',
                        'Update for current events',
                        'Ensure regulatory compliance',
                        'Internal review cycles'
                    ],
                    painPoints: [
                        'Complex disclosure requirements',
                        'Keeping current with regulations',
                        'Consistency across notes'
                    ],
                    timeRequired: '3-4 days'
                },
                futureState: {
                    activities: [
                        'AI disclosure generation',
                        'Regulatory update monitoring',
                        'Automated compliance checking',
                        'Smart review workflows'
                    ],
                    timeReduction: '75% faster',
                    aiAgents: ['CTRL-NDG', 'CF-RUM', 'CF-RCC'],
                    humanCheckpoints: ['Disclosure Approval']
                }
            },
            {
                stepNumber: 5,
                description: 'Management Review & Commentary',
                currentState: {
                    activities: [
                        'Prepare MD&A sections',
                        'Analyze variances',
                        'Draft executive commentary',
                        'Coordinate approvals'
                    ],
                    painPoints: [
                        'Time-consuming analysis',
                        'Multiple stakeholder inputs',
                        'Iteration delays'
                    ],
                    timeRequired: '2-3 days'
                },
                futureState: {
                    activities: [
                        'AI-assisted analysis',
                        'Automated variance explanations',
                        'Smart commentary drafting',
                        'Digital approval workflows'
                    ],
                    timeReduction: '70% faster',
                    aiAgents: ['CTRL-MAA', 'CTRL-VEG', 'CTRL-CDG'],
                    humanCheckpoints: ['Executive Review']
                }
            },
            {
                stepNumber: 6,
                description: 'XBRL Tagging & Filing',
                currentState: {
                    activities: [
                        'Manual XBRL tagging',
                        'Validation checks',
                        'Test filing submissions',
                        'Final submission'
                    ],
                    painPoints: [
                        'Complex tagging requirements',
                        'Manual validation process',
                        'Filing deadline pressure'
                    ],
                    timeRequired: '1-2 days'
                },
                futureState: {
                    activities: [
                        'Automated XBRL tagging',
                        'AI validation checks',
                        'Smart filing preparation',
                        'Auto-submission capabilities'
                    ],
                    timeReduction: '90% faster',
                    aiAgents: ['CTRL-XTG', 'CTRL-FVA', 'CTRL-ASC'],
                    humanCheckpoints: ['Filing Authorization']
                }
            }
        ],
        totalSteps: 6,
        estimatedTimeSavings: '75%',
        aiAgentsUsed: ['CTRL-DCA', 'CTRL-FSC', 'CTRL-ADA', 'CTRL-JEG', 'CTRL-SSU', 'CTRL-FSP', 'CTRL-FFC', 'CTRL-MFG', 'CTRL-NDG', 'CF-RUM', 'CF-RCC', 'CTRL-MAA', 'CTRL-VEG', 'CTRL-CDG', 'CTRL-XTG', 'CTRL-FVA', 'CTRL-ASC'],
        humanCheckpointsCount: 6
    },
    {
        name: 'Statutory and GAAP Reporting Adjustments',
        description: 'Managing adjustments between different reporting standards',
        platform: EXISTING_PLATFORMS.REGULATORY_INTELLIGENCE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Identify Adjustment Requirements',
                currentState: {
                    activities: [
                        'Manual review of standards',
                        'Identify GAAP differences',
                        'Document adjustment needs'
                    ],
                    painPoints: [
                        'Complex standard interpretation',
                        'Risk of missing adjustments',
                        'Knowledge management challenges'
                    ],
                    timeRequired: '2 days per period'
                },
                futureState: {
                    activities: [
                        'AI-powered standards analysis',
                        'Automated difference identification',
                        'Smart adjustment suggestions'
                    ],
                    timeReduction: '85% faster',
                    aiAgents: ['CTRL-SAA', 'CF-RKM'],
                    humanCheckpoints: ['Technical Validation']
                }
            },
            {
                stepNumber: 2,
                description: 'Map Standards & Impact Analysis',
                currentState: {
                    activities: [
                        'Map local GAAP to IFRS/US GAAP',
                        'Analyze financial impact',
                        'Document methodology',
                        'Review prior period adjustments'
                    ],
                    painPoints: [
                        'Multiple standard complexity',
                        'Manual impact assessment',
                        'Inconsistent methodology'
                    ],
                    timeRequired: '2-3 days'
                },
                futureState: {
                    activities: [
                        'AI standards mapping',
                        'Automated impact modeling',
                        'Intelligent methodology suggestions',
                        'Prior period pattern analysis'
                    ],
                    timeReduction: '80% faster',
                    aiAgents: ['CTRL-STM', 'CTRL-IAM', 'CTRL-PPA'],
                    humanCheckpoints: ['Methodology Approval']
                }
            },
            {
                stepNumber: 3,
                description: 'Calculate & Validate Adjustments',
                currentState: {
                    activities: [
                        'Detailed adjustment calculations',
                        'Tax impact assessment',
                        'Cross-validate amounts',
                        'Create supporting schedules'
                    ],
                    painPoints: [
                        'Complex calculations',
                        'Tax implications unclear',
                        'Manual validation errors'
                    ],
                    timeRequired: '2-3 days'
                },
                futureState: {
                    activities: [
                        'Automated calculations',
                        'AI tax impact analysis',
                        'Smart validation checks',
                        'Auto-generated schedules'
                    ],
                    timeReduction: '85% faster',
                    aiAgents: ['CTRL-AJC', 'CF-TIA', 'CTRL-SVC', 'CTRL-SSG'],
                    humanCheckpoints: ['Calculation Review']
                }
            },
            {
                stepNumber: 4,
                description: 'Prepare Adjustment Entries',
                currentState: {
                    activities: [
                        'Draft journal entries',
                        'Document entry rationale',
                        'Route for approvals',
                        'Update GL mapping'
                    ],
                    painPoints: [
                        'Manual entry preparation',
                        'Approval bottlenecks',
                        'GL mapping complexity'
                    ],
                    timeRequired: '1-2 days'
                },
                futureState: {
                    activities: [
                        'AI-generated entries',
                        'Auto-documentation',
                        'Smart approval routing',
                        'Dynamic GL mapping'
                    ],
                    timeReduction: '80% faster',
                    aiAgents: ['CTRL-JEG', 'CTRL-ADG', 'P2P-AO', 'CTRL-GLM'],
                    humanCheckpoints: ['Entry Approval']
                }
            },
            {
                stepNumber: 5,
                description: 'Post & Reconcile Adjustments',
                currentState: {
                    activities: [
                        'Post adjustment entries',
                        'Reconcile between standards',
                        'Validate financial statements',
                        'Clear reconciling items'
                    ],
                    painPoints: [
                        'Manual reconciliation',
                        'Time-consuming validation',
                        'Reconciling item backlog'
                    ],
                    timeRequired: '1-2 days'
                },
                futureState: {
                    activities: [
                        'Automated posting',
                        'AI reconciliation',
                        'Real-time validation',
                        'Smart item clearing'
                    ],
                    timeReduction: '85% faster',
                    aiAgents: ['CTRL-JPA', 'CTRL-REC', 'CTRL-FSV', 'CTRL-SIC'],
                    humanCheckpoints: ['Reconciliation Sign-off']
                }
            },
            {
                stepNumber: 6,
                description: 'Documentation & Reporting',
                currentState: {
                    activities: [
                        'Prepare adjustment summary',
                        'Update disclosure notes',
                        'Create audit documentation',
                        'File regulatory reports'
                    ],
                    painPoints: [
                        'Documentation burden',
                        'Multiple report formats',
                        'Tight filing deadlines'
                    ],
                    timeRequired: '1-2 days'
                },
                futureState: {
                    activities: [
                        'Auto-generated summaries',
                        'Smart disclosure updates',
                        'AI audit documentation',
                        'Automated filing'
                    ],
                    timeReduction: '75% faster',
                    aiAgents: ['CTRL-ASG', 'CTRL-NDG', 'CTRL-AAD', 'CTRL-AFG'],
                    humanCheckpoints: ['Final Review']
                }
            }
        ],
        totalSteps: 6,
        estimatedTimeSavings: '80%',
        aiAgentsUsed: ['CTRL-SAA', 'CF-RKM', 'CTRL-STM', 'CTRL-IAM', 'CTRL-PPA', 'CTRL-AJC', 'CF-TIA', 'CTRL-SVC', 'CTRL-SSG', 'CTRL-JEG', 'CTRL-ADG', 'P2P-AO', 'CTRL-GLM', 'CTRL-JPA', 'CTRL-REC', 'CTRL-FSV', 'CTRL-SIC', 'CTRL-ASG', 'CTRL-NDG', 'CTRL-AAD', 'CTRL-AFG'],
        humanCheckpointsCount: 6
    }
]; 