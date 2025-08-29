// Additional Controllership Workflows

import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

export const controllershipAdditionalWorkflows: SubActivity[] = [
    {
        name: 'Perform Joint Venture Accounting',
        description: 'Joint venture accounting, partner billing, and profit sharing calculations',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'JV Agreement Management',
                currentState: {
                    activities: ['Manual agreement tracking', 'Excel-based terms management', 'Paper contract storage', 'Email-based updates', 'Manual milestone tracking'],
                    timeRequired: '2-3 days monthly',
                    painPoints: ['Complex agreement terms', 'Version control issues', 'Missing documentation', 'Manual calculations']
                },
                futureState: {
                    activities: ['Digital agreement repository', 'AI contract analysis', 'Automated term extraction', 'Smart milestone tracking', 'Real-time updates'],
                    aiAgents: ['DAR', 'ACA', 'ATE', 'SMT'], // Digital Agreement Repository, AI Contract Analyzer, Automated Term Extractor, Smart Milestone Tracker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.AGREEMENT_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Cost & Revenue Allocation',
                currentState: {
                    activities: ['Manual cost gathering', 'Excel allocation models', 'Revenue split calculations', 'Expense categorization', 'Partner share computation'],
                    timeRequired: '3-4 days',
                    painPoints: ['Complex allocation rules', 'Manual calculation errors', 'Time-consuming process', 'Audit trail gaps']
                },
                futureState: {
                    activities: ['Automated cost aggregation', 'AI allocation engine', 'Dynamic revenue splitting', 'Smart categorization', 'Real-time computations'],
                    aiAgents: ['ACA', 'AAE', 'DRS', 'RTC'], // Automated Cost Aggregator, AI Allocation Engine, Dynamic Revenue Splitter, Real-Time Calculator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ALLOCATION_APPROVAL],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Partner Billing & Statements',
                currentState: {
                    activities: ['Manual statement preparation', 'Supporting detail compilation', 'Invoice generation', 'Dispute resolution', 'Payment tracking'],
                    timeRequired: '2-3 days',
                    painPoints: ['Time-intensive preparation', 'Billing errors', 'Dispute management', 'Payment delays']
                },
                futureState: {
                    activities: ['Automated statement generation', 'Digital documentation', 'Smart invoice creation', 'AI dispute resolution', 'Real-time payment tracking'],
                    aiAgents: ['ASG', 'SIC', 'ADR', 'PTR'], // Automated Statement Generator, Smart Invoice Creator, AI Dispute Resolver, Payment Tracker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.BILLING_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Financial Reporting & Compliance',
                currentState: {
                    activities: ['JV financial statements', 'Consolidation adjustments', 'Regulatory reporting', 'Audit support', 'Tax compliance'],
                    timeRequired: '3-4 days quarterly',
                    painPoints: ['Complex consolidation', 'Manual adjustments', 'Regulatory complexity', 'Audit preparation time']
                },
                futureState: {
                    activities: ['Automated JV reporting', 'AI consolidation engine', 'RegTech compliance', 'Digital audit trail', 'Smart tax calculations'],
                    aiAgents: ['AJR', 'ACE', 'RTC', 'DAT'], // Automated JV Reporter, AI Consolidation Engine, RegTech Compliance, Digital Audit Trail
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.FINANCIAL_REVIEW],
                    timeReduction: '80% reduction'
                }
            }
        ],
        totalSteps: 4,
        futureStateWorkflow: [],
        estimatedTimeSavings: '80%',
        aiAgentsUsed: ['DAR', 'ACA', 'ATE', 'SMT', 'ACA', 'AAE', 'DRS', 'RTC', 'ASG', 'SIC', 'ADR', 'PTR', 'AJR', 'ACE', 'RTC', 'DAT'],
        humanCheckpointsCount: 4
    },
    {
        name: 'Accounts Payable Reconciliation',
        description: 'AP ledger reconciliation, vendor statement matching, and balance confirmations',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'AP Ledger Preparation',
                currentState: {
                    activities: ['GL balance extraction', 'Sub-ledger detail pull', 'Aging report generation', 'Open item listing', 'Accrual identification'],
                    timeRequired: '1-2 days monthly',
                    painPoints: ['Manual data extraction', 'System discrepancies', 'Timing differences', 'Volume of transactions']
                },
                futureState: {
                    activities: ['Automated data extraction', 'Real-time ledger sync', 'AI aging analysis', 'Smart item matching', 'Auto-accrual detection'],
                    aiAgents: ['ADE', 'RLS', 'AAA', 'SIM'], // Automated Data Extractor, Real-time Ledger Sync, AI Aging Analysis, Smart Item Matcher
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DATA_VALIDATION],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Vendor Statement Reconciliation',
                currentState: {
                    activities: ['Statement collection', 'Line-by-line matching', 'Discrepancy identification', 'Missing invoice tracking', 'Dispute documentation'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual matching process', 'High volume of statements', 'Complex discrepancies', 'Time-consuming investigations']
                },
                futureState: {
                    activities: ['Digital statement intake', 'AI-powered matching', 'Auto-discrepancy detection', 'Smart dispute routing', 'Predictive reconciliation'],
                    aiAgents: ['DSI', 'APM', 'ADD', 'SDR'], // Digital Statement Intake, AI-Powered Matching, Auto-Discrepancy Detection, Smart Dispute Router
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DISCREPANCY_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Balance Confirmation',
                currentState: {
                    activities: ['Confirmation letter preparation', 'Vendor communication', 'Response tracking', 'Follow-up management', 'Exception handling'],
                    timeRequired: '2-3 days quarterly',
                    painPoints: ['Low response rates', 'Manual follow-ups', 'Communication delays', 'Exception resolution time']
                },
                futureState: {
                    activities: ['Automated confirmations', 'Digital vendor portal', 'AI response tracking', 'Smart follow-ups', 'Predictive exception handling'],
                    aiAgents: ['ACL', 'DVP', 'ART', 'PEH'], // Automated Confirmation Letters, Digital Vendor Portal, AI Response Tracker, Predictive Exception Handler
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.CONFIRMATION_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Adjustment & Reporting',
                currentState: {
                    activities: ['Journal entry preparation', 'Supporting documentation', 'Management reporting', 'Trend analysis', 'Process improvements'],
                    timeRequired: '1-2 days',
                    painPoints: ['Manual adjustments', 'Documentation requirements', 'Static reporting', 'Limited insights']
                },
                futureState: {
                    activities: ['Auto-journal generation', 'Digital documentation', 'Real-time dashboards', 'AI trend analysis', 'Continuous improvement AI'],
                    aiAgents: ['AJG', 'RDD', 'ATA', 'CIA'], // Auto-Journal Generator, Real-time Dashboard, AI Trend Analyzer, Continuous Improvement AI
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ADJUSTMENT_APPROVAL],
                    timeReduction: '80% reduction'
                }
            }
        ],
        totalSteps: 4,
        futureStateWorkflow: [],
        estimatedTimeSavings: '80%',
        aiAgentsUsed: ['ADE', 'RLS', 'AAA', 'SIM', 'DSI', 'APM', 'ADD', 'SDR', 'ACL', 'DVP', 'ART', 'PEH', 'AJG', 'RDD', 'ATA', 'CIA'],
        humanCheckpointsCount: 4
    },
    {
        name: 'Lease Accounting',
        description: 'Lease classification, ROU asset management, and ASC 842/IFRS 16 compliance',
        platform: EXISTING_PLATFORMS.CONTROL_COMPLIANCE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Lease Identification & Classification',
                currentState: {
                    activities: ['Contract review', 'Lease vs service assessment', 'Term identification', 'Classification testing', 'Documentation'],
                    timeRequired: '2-3 days per lease',
                    painPoints: ['Manual contract review', 'Complex assessments', 'Embedded lease identification', 'Documentation burden']
                },
                futureState: {
                    activities: ['AI contract analysis', 'Automated classification', 'Smart term extraction', 'ML-based testing', 'Digital documentation'],
                    aiAgents: ['ACA', 'ACL', 'STE', 'MBT'], // AI Contract Analyzer, Automated Classifier, Smart Term Extractor, ML-Based Tester
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.CLASSIFICATION_APPROVAL],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'ROU Asset & Liability Calculation',
                currentState: {
                    activities: ['Present value calculations', 'Discount rate determination', 'Initial measurement', 'Amortization schedules', 'Journal entry preparation'],
                    timeRequired: '1-2 days per lease',
                    painPoints: ['Complex calculations', 'Rate determination', 'Manual schedules', 'Error-prone process']
                },
                futureState: {
                    activities: ['Automated PV calculations', 'AI rate optimization', 'Real-time measurement', 'Dynamic schedules', 'Auto-journal generation'],
                    aiAgents: ['APC', 'ARO', 'RTM', 'AJG'], // Automated PV Calculator, AI Rate Optimizer, Real-Time Measurement, Auto-Journal Generator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.CALCULATION_REVIEW],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Ongoing Lease Management',
                currentState: {
                    activities: ['Payment tracking', 'Modification assessments', 'Remeasurement triggers', 'Impairment testing', 'Termination processing'],
                    timeRequired: 'Ongoing - 2-3 hours monthly',
                    painPoints: ['Manual tracking', 'Missed modifications', 'Complex remeasurements', 'Delayed processing']
                },
                futureState: {
                    activities: ['Automated payment tracking', 'AI modification detection', 'Smart remeasurement', 'Predictive impairment', 'Real-time processing'],
                    aiAgents: ['APT', 'AMD', 'SRM', 'PIA'], // Automated Payment Tracker, AI Modification Detector, Smart Remeasurement, Predictive Impairment Analyzer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.MODIFICATION_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Reporting & Compliance',
                currentState: {
                    activities: ['Disclosure preparation', 'Roll-forward schedules', 'Maturity analysis', 'Audit support', 'Regulatory compliance'],
                    timeRequired: '3-4 days quarterly',
                    painPoints: ['Manual disclosures', 'Complex roll-forwards', 'Time-consuming analysis', 'Audit readiness']
                },
                futureState: {
                    activities: ['Automated disclosures', 'Dynamic roll-forwards', 'AI maturity analysis', 'Digital audit trail', 'RegTech compliance'],
                    aiAgents: ['ADG', 'DRF', 'AMA', 'RTC'], // Automated Disclosure Generator, Dynamic Roll-Forward, AI Maturity Analyzer, RegTech Compliance
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DISCLOSURE_REVIEW],
                    timeReduction: '80% reduction'
                }
            }
        ],
        totalSteps: 4,
        futureStateWorkflow: [],
        estimatedTimeSavings: '80%',
        aiAgentsUsed: ['ACA', 'ACL', 'STE', 'MBT', 'APC', 'ARO', 'RTM', 'AJG', 'APT', 'AMD', 'SRM', 'PIA', 'ADG', 'DRF', 'AMA', 'RTC'],
        humanCheckpointsCount: 4
    },
    {
        name: 'Perform Financial Reporting',
        description: 'Financial statement preparation, disclosures, and external reporting',
        platform: EXISTING_PLATFORMS.STATUTORY_REPORTING_HUB,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Data Collection & Validation',
                currentState: {
                    activities: ['Trial balance compilation', 'Adjustment gathering', 'Subsidiary data collection', 'FX translation', 'Data validation'],
                    timeRequired: '2-3 days monthly',
                    painPoints: ['Manual data collection', 'Version control', 'Translation errors', 'Validation gaps']
                },
                futureState: {
                    activities: ['Automated TB aggregation', 'Smart adjustment tracking', 'Real-time consolidation', 'AI FX translation', 'Continuous validation'],
                    aiAgents: ['ATA', 'SAT', 'RTC', 'AFT'], // Automated TB Aggregator, Smart Adjustment Tracker, Real-Time Consolidator, AI FX Translator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DATA_APPROVAL],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Financial Statement Preparation',
                currentState: {
                    activities: ['Statement formatting', 'Line item mapping', 'Comparative analysis', 'Variance explanations', 'Statement review'],
                    timeRequired: '2-3 days',
                    painPoints: ['Manual formatting', 'Mapping errors', 'Time-consuming comparisons', 'Narrative writing']
                },
                futureState: {
                    activities: ['Auto-statement generation', 'AI line mapping', 'Dynamic comparatives', 'Smart variance analysis', 'Automated narratives'],
                    aiAgents: ['ASG', 'ALM', 'SVA', 'ANG'], // Auto-Statement Generator, AI Line Mapper, Smart Variance Analyzer, Automated Narrative Generator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.STATEMENT_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Disclosure Preparation',
                currentState: {
                    activities: ['Note drafting', 'Supporting schedules', 'Accounting policy updates', 'Significant judgments', 'Related party disclosures'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual note preparation', 'Complex requirements', 'Policy tracking', 'Completeness risks']
                },
                futureState: {
                    activities: ['AI disclosure drafting', 'Automated schedules', 'Policy change detection', 'Smart judgment tracking', 'Digital disclosure library'],
                    aiAgents: ['ADD', 'ASC', 'PCD', 'DDL'], // AI Disclosure Drafter, Automated Schedule Creator, Policy Change Detector, Digital Disclosure Library
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DISCLOSURE_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Review & Distribution',
                currentState: {
                    activities: ['Internal review process', 'External auditor review', 'Final approvals', 'Filing preparation', 'Distribution'],
                    timeRequired: '2-3 days',
                    painPoints: ['Sequential reviews', 'Version control', 'Manual distribution', 'Filing complexity']
                },
                futureState: {
                    activities: ['Parallel review workflow', 'Digital collaboration', 'Smart approval routing', 'Auto-filing preparation', 'Secure distribution'],
                    aiAgents: ['PRW', 'SAR', 'AFP', 'SDP'], // Parallel Review Workflow, Smart Approval Router, Auto-Filing Prep, Secure Distribution Platform
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.FINAL_APPROVAL],
                    timeReduction: '70% reduction'
                }
            }
        ],
        totalSteps: 4,
        futureStateWorkflow: [],
        estimatedTimeSavings: '78%',
        aiAgentsUsed: ['ATA', 'SAT', 'RTC', 'AFT', 'ASG', 'ALM', 'SVA', 'ANG', 'ADD', 'ASC', 'PCD', 'DDL', 'PRW', 'SAR', 'AFP', 'SDP'],
        humanCheckpointsCount: 4
    }
]; 