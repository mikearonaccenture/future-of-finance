import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { SubActivity, HUMAN_CHECKPOINT_TYPES } from '../finance-workflows-overview';

export const procureToPayAdditionalWorkflows: SubActivity[] = [
    {
        name: 'Receipt & Scanning',
        description: 'Digital receipt capture and scanning for expense management',
        platform: EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Physical Receipt Collection',
                currentState: {
                    activities: [
                        'Employees collect paper receipts',
                        'Store receipts in physical folders',
                        'Wait to batch receipts for submission'
                    ],
                    painPoints: [
                        'Lost or damaged receipts',
                        'Delayed expense reporting',
                        'Manual storage and retrieval'
                    ],
                    timeRequired: '2-3 days per batch'
                },
                futureState: {
                    activities: [
                        'Mobile app captures receipt instantly',
                        'AI extracts data automatically',
                        'Digital storage with search capability'
                    ],
                    timeReduction: '95% faster',
                    aiAgents: ['O2C-DOCE', 'O2C-OA'],
                    humanCheckpoints: ['Exception Review']
                }
            },
            {
                stepNumber: 2,
                description: 'Data Extraction & Categorization',
                currentState: {
                    activities: [
                        'Manual data entry from receipts',
                        'Expense type categorization',
                        'Project/cost center assignment',
                        'Currency conversion if needed'
                    ],
                    painPoints: [
                        'Data entry errors',
                        'Inconsistent categorization',
                        'Wrong coding assignments'
                    ],
                    timeRequired: '10-15 min per receipt'
                },
                futureState: {
                    activities: [
                        'AI extracts all receipt data',
                        'Auto-categorization using ML',
                        'Smart coding suggestions',
                        'Automatic currency conversion'
                    ],
                    timeReduction: '85% faster',
                    aiAgents: ['P2P-DE', 'P2P-CA', 'P2P-MLC'],
                    humanCheckpoints: ['Category Override']
                }
            },
            {
                stepNumber: 3,
                description: 'Policy Compliance Validation',
                currentState: {
                    activities: [
                        'Manual policy checking',
                        'Receipt limit verification',
                        'Required receipt validation',
                        'Exception documentation'
                    ],
                    painPoints: [
                        'Policy interpretation varies',
                        'Manual checking time-consuming',
                        'Inconsistent enforcement'
                    ],
                    timeRequired: '5-10 min per receipt'
                },
                futureState: {
                    activities: [
                        'Automated policy engine checks',
                        'Real-time limit validation',
                        'AI flags potential issues',
                        'Auto-documentation of exceptions'
                    ],
                    timeReduction: '90% faster',
                    aiAgents: ['P2P-PV', 'CTRL-CA'],
                    humanCheckpoints: ['Policy Exception Approval']
                }
            },
            {
                stepNumber: 4,
                description: 'Expense Report Integration',
                currentState: {
                    activities: [
                        'Attach receipts to expense reports',
                        'Match receipts to credit card transactions',
                        'Complete expense report forms',
                        'Submit for approval'
                    ],
                    painPoints: [
                        'Manual matching errors',
                        'Missing receipts discovered late',
                        'Duplicate submissions'
                    ],
                    timeRequired: '20-30 min per report'
                },
                futureState: {
                    activities: [
                        'Auto-attachment to expense reports',
                        'AI matches to card transactions',
                        'Smart duplicate detection',
                        'Pre-populated report generation'
                    ],
                    timeReduction: '80% faster',
                    aiAgents: ['P2P-EM', 'P2P-DDA'],
                    humanCheckpoints: ['Report Review']
                }
            },
            {
                stepNumber: 5,
                description: 'Approval & Reimbursement Processing',
                currentState: {
                    activities: [
                        'Manager review and approval',
                        'Finance team verification',
                        'Reimbursement calculation',
                        'Payment processing'
                    ],
                    painPoints: [
                        'Approval delays',
                        'Manual reimbursement calculations',
                        'Processing bottlenecks'
                    ],
                    timeRequired: '2-5 days'
                },
                futureState: {
                    activities: [
                        'Smart routing for approvals',
                        'AI-assisted review',
                        'Automated reimbursement calculation',
                        'Direct payment initiation'
                    ],
                    timeReduction: '75% faster',
                    aiAgents: ['P2P-AO', 'P2P-RC', 'P2P-PI'],
                    humanCheckpoints: ['Final Approval', 'Payment Authorization']
                }
            }
        ],
        totalSteps: 5,
        futureStateWorkflow: [],
        estimatedTimeSavings: '85%',
        aiAgentsUsed: ['O2C-DOCE', 'O2C-OA', 'P2P-DE', 'P2P-CA', 'P2P-MLC', 'P2P-PV', 'CTRL-CA', 'P2P-EM', 'P2P-DDA', 'P2P-AO', 'P2P-RC', 'P2P-PI'],
        humanCheckpointsCount: 5
    },
    {
        name: 'Invoice Processing',
        description: 'End-to-end invoice processing from receipt to approval',
        platform: EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Invoice Receipt & Registration',
                currentState: {
                    activities: [
                        'Receive invoices via mail/email',
                        'Manual sorting and registration',
                        'Physical filing and storage'
                    ],
                    painPoints: [
                        'Multiple invoice formats',
                        'Manual registration delays',
                        'Risk of lost invoices'
                    ],
                    timeRequired: '30 min per invoice'
                },
                futureState: {
                    activities: [
                        'Multi-channel invoice capture',
                        'AI-powered registration',
                        'Automatic digital archiving'
                    ],
                    timeReduction: '85% faster',
                    aiAgents: ['P2P-ICE', 'P2P-DE'],
                    humanCheckpoints: ['Exception Handling']
                }
            },
            {
                stepNumber: 2,
                description: 'Data Extraction & Enrichment',
                currentState: {
                    activities: [
                        'Manual data entry',
                        'Vendor master lookup',
                        'Purchase order identification',
                        'Line item details capture'
                    ],
                    painPoints: [
                        'Data entry errors',
                        'Missing vendor information',
                        'Incorrect PO references'
                    ],
                    timeRequired: '15 min per invoice'
                },
                futureState: {
                    activities: [
                        'AI-powered data extraction',
                        'Automatic vendor enrichment',
                        'Smart PO matching',
                        'Line item auto-population'
                    ],
                    timeReduction: '95% faster',
                    aiAgents: ['P2P-DE', 'P2P-VE', 'P2P-POM'],
                    humanCheckpoints: ['Data Verification']
                }
            },
            {
                stepNumber: 3,
                description: 'Duplicate & Fraud Detection',
                currentState: {
                    activities: [
                        'Manual duplicate checking',
                        'Basic fraud indicators review',
                        'Historical invoice comparison',
                        'Vendor verification'
                    ],
                    painPoints: [
                        'Duplicate payments occur',
                        'Fraud detected too late',
                        'Time-consuming checks'
                    ],
                    timeRequired: '10 min per invoice'
                },
                futureState: {
                    activities: [
                        'AI duplicate detection',
                        'Advanced fraud analytics',
                        'Pattern recognition',
                        'Real-time alerts'
                    ],
                    timeReduction: '90% faster',
                    aiAgents: ['P2P-DDA', 'P2P-FDA', 'CROSS-RAA'],
                    humanCheckpoints: ['Fraud Alert Review']
                }
            },
            {
                stepNumber: 4,
                description: 'Three-Way Matching & Validation',
                currentState: {
                    activities: [
                        'PO to invoice matching',
                        'Receipt verification',
                        'Price variance analysis',
                        'Quantity reconciliation'
                    ],
                    painPoints: [
                        'Manual matching errors',
                        'Missing receipts',
                        'Tolerance exceptions'
                    ],
                    timeRequired: '20 min per invoice'
                },
                futureState: {
                    activities: [
                        'Automated 3-way matching',
                        'AI variance resolution',
                        'Smart tolerance handling',
                        'Exception predictions'
                    ],
                    timeReduction: '85% faster',
                    aiAgents: ['P2P-VM', 'P2P-TVH', 'P2P-EP'],
                    humanCheckpoints: ['Variance Approval']
                }
            },
            {
                stepNumber: 5,
                description: 'GL Coding & Tax Validation',
                currentState: {
                    activities: [
                        'Manual GL code assignment',
                        'Tax calculation verification',
                        'Cost center allocation',
                        'Project code assignment'
                    ],
                    painPoints: [
                        'Coding inconsistencies',
                        'Tax calculation errors',
                        'Allocation mistakes'
                    ],
                    timeRequired: '15 min per invoice'
                },
                futureState: {
                    activities: [
                        'AI-powered GL coding',
                        'Automated tax validation',
                        'Smart cost allocation',
                        'ML-based suggestions'
                    ],
                    timeReduction: '90% faster',
                    aiAgents: ['P2P-GLC', 'CF-TVC', 'P2P-CAE'],
                    humanCheckpoints: ['Coding Override']
                }
            },
            {
                stepNumber: 6,
                description: 'Approval Workflow & Posting',
                currentState: {
                    activities: [
                        'Route to approvers',
                        'Chase for approvals',
                        'Handle escalations',
                        'Post to ERP'
                    ],
                    painPoints: [
                        'Approval delays',
                        'Lost in email chains',
                        'Manual posting errors'
                    ],
                    timeRequired: '2-5 days'
                },
                futureState: {
                    activities: [
                        'Smart approval routing',
                        'Mobile approvals',
                        'Auto-escalation',
                        'Automated ERP posting'
                    ],
                    timeReduction: '80% faster',
                    aiAgents: ['P2P-AO', 'CROSS-NAE', 'P2P-EPP'],
                    humanCheckpoints: ['Final Approval', 'Posting Verification']
                }
            }
        ],
        totalSteps: 6,
        futureStateWorkflow: [],
        estimatedTimeSavings: '85%',
        aiAgentsUsed: ['P2P-ICE', 'P2P-DE', 'P2P-VE', 'P2P-POM', 'P2P-DDA', 'P2P-FDA', 'CROSS-RAA', 'P2P-VM', 'P2P-TVH', 'P2P-EP', 'P2P-GLC', 'CF-TVC', 'P2P-CAE', 'P2P-AO', 'CROSS-NAE', 'P2P-EPP'],
        humanCheckpointsCount: 6
    },
    {
        name: 'Payment Processing',
        description: 'Payment execution and reconciliation process',
        platform: EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Payment Selection & Prioritization',
                currentState: {
                    activities: [
                        'Review due invoices',
                        'Apply payment terms',
                        'Consider cash discounts',
                        'Prioritize critical vendors'
                    ],
                    painPoints: [
                        'Manual selection process',
                        'Missed discount opportunities',
                        'Suboptimal cash management'
                    ],
                    timeRequired: '2-3 hours'
                },
                futureState: {
                    activities: [
                        'AI payment optimization',
                        'Dynamic cash forecasting',
                        'Automatic discount capture',
                        'Smart vendor prioritization'
                    ],
                    timeReduction: '85% faster',
                    aiAgents: ['P2P-PSO', 'CF-CFO', 'P2P-DC'],
                    humanCheckpoints: ['Strategy Override']
                }
            },
            {
                stepNumber: 2,
                description: 'Payment File Preparation',
                currentState: {
                    activities: [
                        'Extract payment data',
                        'Verify bank details',
                        'Format payment files',
                        'Apply security controls'
                    ],
                    painPoints: [
                        'Manual data extraction',
                        'Bank detail errors',
                        'Multiple file formats'
                    ],
                    timeRequired: '1-2 hours per run'
                },
                futureState: {
                    activities: [
                        'Automated data extraction',
                        'AI bank validation',
                        'Universal format conversion',
                        'Enhanced security protocols'
                    ],
                    timeReduction: '80% faster',
                    aiAgents: ['P2P-PFG', 'P2P-BDV', 'CROSS-SC'],
                    humanCheckpoints: ['File Approval']
                }
            },
            {
                stepNumber: 3,
                description: 'Payment Authorization & Release',
                currentState: {
                    activities: [
                        'Obtain payment approvals',
                        'Apply dual controls',
                        'Release to banks',
                        'Confirm transmission'
                    ],
                    painPoints: [
                        'Multiple approval layers',
                        'Manual authorization',
                        'Delayed releases'
                    ],
                    timeRequired: '1-2 hours'
                },
                futureState: {
                    activities: [
                        'Smart approval routing',
                        'Digital authorization',
                        'Automated bank submission',
                        'Real-time confirmations'
                    ],
                    timeReduction: '75% faster',
                    aiAgents: ['P2P-PAM', 'CF-FDS', 'P2P-BCS'],
                    humanCheckpoints: ['Final Authorization']
                }
            },
            {
                stepNumber: 4,
                description: 'Payment Execution & Monitoring',
                currentState: {
                    activities: [
                        'Track payment status',
                        'Monitor bank responses',
                        'Handle rejections',
                        'Process returns'
                    ],
                    painPoints: [
                        'Limited visibility',
                        'Manual status checks',
                        'Slow rejection handling'
                    ],
                    timeRequired: '2-3 hours daily'
                },
                futureState: {
                    activities: [
                        'Real-time payment tracking',
                        'AI anomaly detection',
                        'Automated rejection handling',
                        'Predictive failure prevention'
                    ],
                    timeReduction: '85% faster',
                    aiAgents: ['CF-CPM', 'P2P-RE', 'P2P-PFP'],
                    humanCheckpoints: ['Exception Review']
                }
            },
            {
                stepNumber: 5,
                description: 'Payment Reconciliation & Clearing',
                currentState: {
                    activities: [
                        'Match to bank statements',
                        'Clear payment suspense',
                        'Update vendor balances',
                        'Investigate discrepancies'
                    ],
                    painPoints: [
                        'Manual reconciliation',
                        'Unmatched items backlog',
                        'Delayed investigations'
                    ],
                    timeRequired: '3-4 hours daily'
                },
                futureState: {
                    activities: [
                        'Auto bank reconciliation',
                        'AI-powered matching',
                        'Real-time balance updates',
                        'Smart discrepancy resolution'
                    ],
                    timeReduction: '90% faster',
                    aiAgents: ['P2P-PRE', 'P2P-VSA', 'CTRL-RAI'],
                    humanCheckpoints: ['Reconciliation Sign-off']
                }
            }
        ],
        totalSteps: 5,
        futureStateWorkflow: [],
        estimatedTimeSavings: '82%',
        aiAgentsUsed: ['P2P-PSO', 'CF-CFO', 'P2P-DC', 'P2P-PFG', 'P2P-BDV', 'CROSS-SC', 'P2P-PAM', 'CF-FDS', 'P2P-BCS', 'CF-CPM', 'P2P-RE', 'P2P-PFP', 'P2P-PRE', 'P2P-VSA', 'CTRL-RAI'],
        humanCheckpointsCount: 5
    }
]; 