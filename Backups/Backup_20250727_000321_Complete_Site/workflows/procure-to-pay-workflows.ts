// Procure to Pay Detailed Workflows
import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

export const procureToPayWorkflows: SubActivity[] = [
    {
        name: 'Invoice to Pay',
        description: 'End-to-end invoice processing from receipt to payment',
        platform: EXISTING_PLATFORMS.INTELLIGENT_INVOICE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Invoice Receipt & Channel Management',
                currentState: {
                    activities: ['Manual mail sorting and date stamping', 'Physical document scanning and filing', 'Email attachment downloading from multiple inboxes', 'Vendor portal login and bulk download', 'Invoice registration in tracking spreadsheet'],
                    timeRequired: '30-60 minutes per batch',
                    painPoints: ['Multiple receipt channels to monitor', 'Manual data entry prone to errors', 'Lost or misfiled invoices', 'Duplicate processing risk', 'No real-time visibility']
                },
                futureState: {
                    activities: ['Automated multi-channel invoice capture', 'AI-powered document classification', 'Real-time invoice tracking dashboard'],
                    aiAgents: ['IC', 'IP', 'DC'], // Invoice Capture Agent, Invoice Parser, Document Classifier
                    humanCheckpoints: [],
                    timeReduction: '90% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Data Extraction & Initial Validation',
                currentState: {
                    activities: ['Manual line-by-line data entry', 'Visual verification against source document', 'Vendor master database lookup', 'GL coding based on description', 'Currency conversion calculations'],
                    timeRequired: '15-20 minutes per invoice',
                    painPoints: ['High data entry error rates', 'Missing or incorrect vendor information', 'Inconsistent GL coding', 'Manual calculations prone to errors']
                },
                futureState: {
                    activities: ['AI-powered OCR with 99%+ accuracy', 'Automatic vendor matching and enrichment', 'Smart GL coding suggestions', 'Automated currency conversions'],
                    aiAgents: ['IP', 'IV', 'IE', 'VM'], // Invoice Parser, Invoice Validator, Invoice Enricher, Vendor Matcher
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Purchase Order Matching',
                currentState: {
                    activities: ['Manual PO number search in ERP', 'Line item quantity verification', 'Price variance calculations', 'Receipt document lookup', 'Tolerance threshold checking'],
                    timeRequired: '20-30 minutes per invoice',
                    painPoints: ['Time-consuming manual matching', 'Missing PO references', 'Complex multi-PO invoices', 'Unclear tolerance policies']
                },
                futureState: {
                    activities: ['Automated 2-way and 3-way matching', 'AI-powered fuzzy matching for complex cases', 'Dynamic tolerance management', 'Automatic PO suggestion for non-PO invoices'],
                    aiAgents: ['PM', 'TW', 'TM'], // PO Matcher, Three-Way Matcher, Tolerance Manager
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Discrepancy Resolution',
                currentState: {
                    activities: ['Email communications with vendors', 'Internal inquiry with requesters', 'Price variance investigation', 'Quantity discrepancy resolution', 'Documentation of resolution steps'],
                    timeRequired: '1-3 days per discrepancy',
                    painPoints: ['Lengthy email chains', 'Lack of audit trail', 'Repeated issues with same vendors', 'No root cause analysis']
                },
                futureState: {
                    activities: ['AI-powered discrepancy categorization', 'Automated vendor collaboration portal', 'Smart resolution recommendations', 'Pattern recognition for recurring issues'],
                    aiAgents: ['DR', 'VC', 'PA'], // Discrepancy Resolver, Vendor Communicator, Pattern Analyzer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.VENDOR_NEGOTIATION],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Approval Workflow & Compliance',
                currentState: {
                    activities: ['Manual approval matrix lookup', 'Email-based approval requests', 'Follow-up reminders for pending approvals', 'Delegation handling during absences', 'Compliance documentation gathering'],
                    timeRequired: '2-5 days cycle time',
                    painPoints: ['Approval bottlenecks', 'Lost approval emails', 'Unclear delegation rules', 'Manual compliance checks']
                },
                futureState: {
                    activities: ['Smart approval routing based on AI analysis', 'Mobile-first approval interface', 'Predictive approval recommendations', 'Automated compliance validation'],
                    aiAgents: ['AV', 'WF', 'CC', 'AR'], // Approval Validator, Workflow Facilitator, Compliance Checker, Approval Recommender
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL, HUMAN_CHECKPOINT_TYPES.COMPLIANCE_REVIEW],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Payment Scheduling & Optimization',
                currentState: {
                    activities: ['Payment term verification', 'Cash flow impact analysis', 'Discount opportunity identification', 'Payment method selection', 'Foreign exchange rate checking'],
                    timeRequired: '15-30 minutes per invoice',
                    painPoints: ['Missed early payment discounts', 'Suboptimal payment timing', 'Manual FX calculations', 'Cash flow surprises']
                },
                futureState: {
                    activities: ['AI-optimized payment scheduling', 'Automatic discount capture', 'Dynamic cash flow optimization', 'Real-time FX optimization'],
                    aiAgents: ['PS', 'DI', 'CF', 'FX'], // Payment Scheduler, Discount Identifier, Cash Flow Optimizer, FX Manager
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.TREASURY_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 7,
                description: 'Payment Execution & Confirmation',
                currentState: {
                    activities: ['Payment file creation in ERP', 'Bank portal file upload', 'Payment confirmation tracking', 'Remittance advice preparation', 'Failed payment investigation'],
                    timeRequired: '30-45 minutes per payment run',
                    painPoints: ['Manual file handling errors', 'Lack of payment visibility', 'Delayed remittance sending', 'Time-consuming failure resolution']
                },
                futureState: {
                    activities: ['Automated payment file generation', 'Direct bank integration', 'Real-time payment tracking', 'Automatic remittance delivery'],
                    aiAgents: ['PP', 'BI', 'PT', 'RM'], // Payment Processor, Bank Integrator, Payment Tracker, Remittance Manager
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.FINAL_SIGNOFF],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 8,
                description: 'Reconciliation & Continuous Improvement',
                currentState: {
                    activities: ['Bank statement reconciliation', 'Outstanding payment investigation', 'Month-end accrual calculations', 'Audit documentation preparation', 'Process metrics reporting'],
                    timeRequired: '2-3 hours daily',
                    painPoints: ['Manual reconciliation errors', 'Missing documentation for audits', 'Lack of process insights', 'Reactive issue resolution']
                },
                futureState: {
                    activities: ['AI-powered automatic reconciliation', 'Predictive accrual calculations', 'Real-time process analytics', 'Continuous improvement recommendations'],
                    aiAgents: ['PR', 'AC', 'AA', 'PI'], // Payment Reconciler, Accrual Calculator, Analytics Agent, Process Improver
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.QUALITY_ASSURANCE],
                    timeReduction: '85% reduction'
                }
            }
        ],
        futureStateWorkflow: [], // Will be populated from above
        totalSteps: 8,
        aiAgentsUsed: ['IC', 'IP', 'DC', 'IV', 'IE', 'VM', 'PM', 'TW', 'TM', 'DR', 'VC', 'PA', 'AV', 'WF', 'CC', 'AR', 'PS', 'DI', 'CF', 'FX', 'PP', 'BI', 'PT', 'RM', 'PR', 'AC', 'AA', 'PI'],
        humanCheckpointsCount: 7,
        estimatedTimeSavings: '80%'
    },
    {
        name: 'Vendor Management',
        description: 'Vendor onboarding, maintenance, and performance management',
        platform: EXISTING_PLATFORMS.SUPPLIER_COLLABORATION,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Vendor Onboarding',
                currentState: {
                    activities: ['Form collection', 'Document verification', 'Reference checks', 'System setup'],
                    timeRequired: '3-5 days',
                    painPoints: ['Incomplete documentation', 'Manual verification', 'Duplicate vendors']
                },
                futureState: {
                    activities: ['Digital onboarding portal', 'Automated verification', 'AI-powered screening'],
                    aiAgents: ['VS', 'VM', 'CA'], // Vendor Screener, Vendor Master Manager, Compliance Auditor
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.COMPLIANCE_REVIEW, HUMAN_CHECKPOINT_TYPES.RISK_ASSESSMENT],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Vendor Master Maintenance',
                currentState: {
                    activities: ['Change requests processing', 'Data updates', 'Approval workflows', 'Audit logging'],
                    timeRequired: '30-60 minutes per change',
                    painPoints: ['Manual updates', 'Approval delays', 'Data quality issues']
                },
                futureState: {
                    activities: ['Self-service updates', 'Automated validation', 'Smart approval routing'],
                    aiAgents: ['VM', 'DQ', 'AV'], // Vendor Master Manager, Data Quality Guardian, Approval Validator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Vendor Performance Management',
                currentState: {
                    activities: ['KPI tracking', 'Scorecard updates', 'Performance reviews', 'Issue tracking'],
                    timeRequired: '8-10 hours monthly per vendor category',
                    painPoints: ['Manual scorecarding', 'Delayed feedback', 'Inconsistent metrics']
                },
                futureState: {
                    activities: ['Automated KPI tracking', 'Real-time scorecards', 'Predictive analytics'],
                    aiAgents: ['VP', 'PM', 'PI'], // Vendor Performance Tracker, Performance Monitor, Process Improver
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.STRATEGIC_DECISION],
                    timeReduction: '80% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'VS', frequency: 1 },
            { agentId: 'VM', frequency: 2 },
            { agentId: 'CA', frequency: 1 },
            { agentId: 'DQ', frequency: 1 },
            { agentId: 'AV', frequency: 1 },
            { agentId: 'VP', frequency: 1 },
            { agentId: 'PM', frequency: 1 },
            { agentId: 'PI', frequency: 1 }
        ],
        humanCheckpointsCount: 4,
        estimatedTimeSavings: '75% overall'
    },
    {
        name: 'Travel & Expense Management',
        description: 'Employee travel booking and expense report processing',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Expense Report Submission',
                currentState: {
                    activities: ['Receipt collection', 'Manual form filling', 'Receipt scanning', 'Submission'],
                    timeRequired: '45-60 minutes per report',
                    painPoints: ['Lost receipts', 'Policy confusion', 'Manual data entry']
                },
                futureState: {
                    activities: ['Mobile receipt capture', 'AI-powered categorization', 'Auto-population'],
                    aiAgents: ['TE', 'IP', 'IE'], // T&E Examiner, Invoice Parser, Invoice Enricher
                    humanCheckpoints: [],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Policy Compliance Check',
                currentState: {
                    activities: ['Manual policy review', 'Exception identification', 'Documentation requests'],
                    timeRequired: '20-30 minutes per report',
                    painPoints: ['Inconsistent application', 'Policy interpretation', 'High error rates']
                },
                futureState: {
                    activities: ['Automated policy checking', 'Real-time guidance', 'Smart exception handling'],
                    aiAgents: ['TE', 'CC', 'EA'], // T&E Examiner, Compliance Checker, Expense Auditor
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Approval & Reimbursement',
                currentState: {
                    activities: ['Manager review', 'Approval routing', 'Payment processing', 'Employee notification'],
                    timeRequired: '2-3 days cycle time',
                    painPoints: ['Approval delays', 'Manual routing', 'Payment delays']
                },
                futureState: {
                    activities: ['Smart approval routing', 'Automated reimbursement', 'Real-time notifications'],
                    aiAgents: ['ER', 'AV', 'PP'], // Expense Router, Approval Validator, Payment Processor
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'TE', frequency: 2 },
            { agentId: 'IP', frequency: 1 },
            { agentId: 'IE', frequency: 1 },
            { agentId: 'CC', frequency: 1 },
            { agentId: 'EA', frequency: 1 },
            { agentId: 'ER', frequency: 1 },
            { agentId: 'AV', frequency: 1 },
            { agentId: 'PP', frequency: 1 }
        ],
        humanCheckpointsCount: 2,
        estimatedTimeSavings: '78% overall'
    },
    {
        name: 'Procurement Operations',
        description: 'Purchase requisition to purchase order process',
        platform: EXISTING_PLATFORMS.STRATEGIC_SPEND,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Purchase Requisition Creation',
                currentState: {
                    activities: ['Need identification through email/phone', 'Manual form completion in multiple systems', 'Detailed specification writing', 'Catalog browsing across vendors', 'Budget availability checking'],
                    timeRequired: '30-45 minutes per requisition',
                    painPoints: ['Complex multi-page forms', 'Unclear product specifications', 'No real-time budget visibility', 'Duplicate requisitions', 'Missing approver information']
                },
                futureState: {
                    activities: ['Guided requisition with smart forms', 'AI-powered product suggestions', 'Real-time budget validation', 'Duplicate detection', 'Auto-populated approver chains'],
                    aiAgents: ['PR', 'RQ', 'BV', 'CE'], // Purchase Requisitioner, Requisition Qualifier, Budget Validator, Catalog Engine
                    humanCheckpoints: [],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Technical & Business Validation',
                currentState: {
                    activities: ['Technical specification review', 'Business justification validation', 'Alternative product research', 'Cost-benefit analysis', 'Compliance verification'],
                    timeRequired: '1-2 days',
                    painPoints: ['Lack of technical expertise', 'Incomplete justifications', 'Manual compliance checks', 'No standardized evaluation']
                },
                futureState: {
                    activities: ['AI-powered spec validation', 'Automated justification scoring', 'Smart alternative suggestions', 'Real-time compliance checking'],
                    aiAgents: ['TS', 'BJ', 'PA', 'CC'], // Technical Spec Validator, Business Justification Analyzer, Product Alternative Suggester, Compliance Checker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.TECHNICAL_REVIEW],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Sourcing & Supplier Selection',
                currentState: {
                    activities: ['Supplier database search', 'RFQ document preparation', 'Quote collection via email', 'Bid tabulation in Excel', 'Supplier capability assessment'],
                    timeRequired: '3-5 days',
                    painPoints: ['Manual supplier search', 'Inconsistent RFQ formats', 'Time-consuming bid comparison', 'Limited supplier insights']
                },
                futureState: {
                    activities: ['AI-powered supplier matching', 'Automated RFQ generation', 'Digital bid collection portal', 'Intelligent bid analysis', 'Predictive supplier scoring'],
                    aiAgents: ['SP', 'RG', 'BA', 'SS'], // Sourcing Pilot, RFQ Generator, Bid Analyzer, Supplier Scorer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.VENDOR_SELECTION],
                    timeReduction: '60% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Price Negotiation & Terms',
                currentState: {
                    activities: ['Price benchmarking research', 'Negotiation strategy planning', 'Multiple negotiation rounds', 'Terms and conditions review', 'Final pricing documentation'],
                    timeRequired: '2-4 days',
                    painPoints: ['Limited benchmark data', 'Inconsistent negotiation approaches', 'Lengthy back-and-forth', 'Complex T&C reviews']
                },
                futureState: {
                    activities: ['AI-powered price benchmarking', 'Negotiation strategy recommendations', 'Automated negotiation workflows', 'Smart T&C analysis'],
                    aiAgents: ['PB', 'CN', 'TC', 'NS'], // Price Benchmarker, Contract Negotiator Assistant, Terms & Conditions Analyzer, Negotiation Strategist
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.PRICE_APPROVAL, HUMAN_CHECKPOINT_TYPES.LEGAL_REVIEW],
                    timeReduction: '65% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Approval Workflow Routing',
                currentState: {
                    activities: ['Approval matrix lookup', 'Sequential approval routing', 'Email-based approvals', 'Escalation handling', 'Approval documentation'],
                    timeRequired: '3-5 days',
                    painPoints: ['Complex approval hierarchies', 'Approval bottlenecks', 'No mobile approvals', 'Poor visibility to status']
                },
                futureState: {
                    activities: ['Smart approval routing', 'Parallel approval processing', 'Mobile-first approvals', 'AI-powered escalations', 'Real-time status tracking'],
                    aiAgents: ['AR', 'AV', 'WF', 'EM'], // Approval Router, Approval Validator, Workflow Facilitator, Escalation Manager
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.APPROVAL, HUMAN_CHECKPOINT_TYPES.BUDGET_APPROVAL],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Purchase Order Generation',
                currentState: {
                    activities: ['Manual PO creation', 'Data entry from requisition', 'Terms transcription', 'PO number assignment', 'Distribution to supplier'],
                    timeRequired: '30-60 minutes per PO',
                    painPoints: ['Data re-entry errors', 'Manual number assignment', 'Delayed transmission', 'No confirmation tracking']
                },
                futureState: {
                    activities: ['Automated PO generation', 'Smart data population', 'Auto-numbering', 'Digital transmission', 'Confirmation tracking'],
                    aiAgents: ['PO', 'DD', 'DT', 'CT'], // PO Generator, Data Deduplicator, Document Transmitter, Confirmation Tracker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.FINAL_SIGNOFF],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 7,
                description: 'Contract Creation & Management',
                currentState: {
                    activities: ['Contract template selection', 'Terms customization', 'Legal review coordination', 'Signature collection', 'Contract filing'],
                    timeRequired: '3-7 days',
                    painPoints: ['Wrong template selection', 'Manual customization', 'Lengthy legal reviews', 'Signature delays']
                },
                futureState: {
                    activities: ['AI template recommendation', 'Smart clause library', 'Automated legal review', 'Digital signature workflow', 'Auto-filing and indexing'],
                    aiAgents: ['CT', 'CL', 'LR', 'SM'], // Contract Template Selector, Clause Librarian, Legal Reviewer Assistant, Signature Manager
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.LEGAL_REVIEW, HUMAN_CHECKPOINT_TYPES.CONTRACT_APPROVAL],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 8,
                description: 'Supplier Onboarding & Setup',
                currentState: {
                    activities: ['Supplier data collection', 'System setup in ERP', 'Banking details verification', 'Compliance documentation', 'Communication of PO terms'],
                    timeRequired: '1-2 days',
                    painPoints: ['Incomplete supplier data', 'Manual system setup', 'Compliance gaps', 'Communication delays']
                },
                futureState: {
                    activities: ['Digital supplier portal', 'Automated system setup', 'Real-time verification', 'Smart compliance tracking', 'Automated communications'],
                    aiAgents: ['SO', 'VM', 'CV', 'CM'], // Supplier Onboarder, Vendor Master Manager, Compliance Verifier, Communication Manager
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.COMPLIANCE_REVIEW],
                    timeReduction: '80% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 8,
        aiAgentsUsed: ['PR', 'RQ', 'BV', 'CE', 'TS', 'BJ', 'PA', 'CC', 'SP', 'RG', 'BA', 'SS', 'PB', 'CN', 'TC', 'NS', 'AR', 'AV', 'WF', 'EM', 'PO', 'DD', 'DT', 'CT', 'CL', 'LR', 'SM', 'SO', 'VM', 'CV', 'CM'],
        humanCheckpointsCount: 11,
        estimatedTimeSavings: '68%'
    },
    {
        name: 'Contract Management',
        description: 'Contract creation, negotiation, and compliance management',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Contract Creation & Review',
                currentState: {
                    activities: ['Template selection', 'Terms customization', 'Legal review', 'Risk assessment'],
                    timeRequired: '2-3 days',
                    painPoints: ['Manual drafting', 'Version control', 'Review bottlenecks']
                },
                futureState: {
                    activities: ['AI-powered drafting', 'Automated risk scoring', 'Smart clause recommendations'],
                    aiAgents: ['CM', 'CN', 'RK', 'CC'], // Contract Monitor, Contract Negotiator Assistant, Risk Manager, Compliance Checker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.RISK_ASSESSMENT, HUMAN_CHECKPOINT_TYPES.COMPLIANCE_REVIEW],
                    timeReduction: '60% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Contract Execution & Storage',
                currentState: {
                    activities: ['Signature collection', 'Document filing', 'System updates', 'Notification sending'],
                    timeRequired: '2-4 hours per contract',
                    painPoints: ['Manual tracking', 'Filing errors', 'Access issues']
                },
                futureState: {
                    activities: ['E-signature integration', 'Automated filing', 'Smart notifications'],
                    aiAgents: ['CM', 'DC', 'WF'], // Contract Monitor, Document Curator, Workflow Facilitator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.FINAL_SIGNOFF],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Contract Compliance Monitoring',
                currentState: {
                    activities: ['Milestone tracking', 'Performance monitoring', 'Renewal management', 'Compliance checks'],
                    timeRequired: '5-10 hours monthly',
                    painPoints: ['Manual tracking', 'Missed milestones', 'Renewal delays']
                },
                futureState: {
                    activities: ['Automated monitoring', 'Predictive alerts', 'Performance analytics'],
                    aiAgents: ['CM', 'CE', 'PM', 'NC'], // Contract Monitor, Contract Enforcer, Performance Monitor, Notification Center
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.STRATEGIC_DECISION],
                    timeReduction: '85% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'CM', frequency: 3 },
            { agentId: 'CN', frequency: 1 },
            { agentId: 'RK', frequency: 1 },
            { agentId: 'CC', frequency: 1 },
            { agentId: 'DC', frequency: 1 },
            { agentId: 'WF', frequency: 1 },
            { agentId: 'CE', frequency: 1 },
            { agentId: 'PM', frequency: 1 },
            { agentId: 'NC', frequency: 1 }
        ],
        humanCheckpointsCount: 4,
        estimatedTimeSavings: '75% overall'
    }
]; 