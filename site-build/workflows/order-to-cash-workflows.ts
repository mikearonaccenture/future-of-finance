// Order to Cash Detailed Workflows
import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

export const orderToCashWorkflows: SubActivity[] = [
    {
        name: 'Receivable Management',
        description: 'Managing accounts receivable balances, aging, and portfolio health',
        platform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'AR Balance Monitoring',
                currentState: {
                    activities: ['Manual balance reconciliation', 'Aging bucket analysis', 'Customer account reviews', 'Past due identification', 'Credit exposure tracking'],
                    timeRequired: '4-6 hours daily',
                    painPoints: ['Manual reconciliation errors', 'Delayed aging visibility', 'Reactive management', 'Limited portfolio view']
                },
                futureState: {
                    activities: ['Real-time balance monitoring', 'AI-powered aging predictions', 'Automated exposure alerts', 'Dynamic portfolio dashboards'],
                    aiAgents: ['ar-balance-monitor-receivables-o2c', 'aging-prediction-analyzer-ar-o2c', 'credit-exposure-analyzer-receivables-o2c'], // AR Balance Monitor, Aging Prediction Analyzer, Credit Exposure Analyzer
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Risk Assessment & Prioritization',
                currentState: {
                    activities: ['Manual risk scoring', 'Collection priority setting', 'Customer segmentation', 'Write-off risk assessment', 'Portfolio health metrics'],
                    timeRequired: '1-2 days weekly',
                    painPoints: ['Subjective risk assessment', 'Static prioritization', 'Limited predictive capability', 'Manual calculations']
                },
                futureState: {
                    activities: ['AI-driven risk scoring', 'Dynamic collection prioritization', 'Predictive default modeling', 'Automated segmentation'],
                    aiAgents: ['customer-risk-scoring-engine-o2c', 'collection-priority-optimizer-ar-o2c', 'default-prediction-modeler-credit-o2c'], // Customer Risk Scoring Engine, Collection Priority Optimizer, Default Prediction Modeler
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.RISK_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Portfolio Analytics',
                currentState: {
                    activities: ['DSO calculations', 'Turnover ratio analysis', 'Bad debt trending', 'Customer payment patterns', 'Benchmark comparisons'],
                    timeRequired: '2-3 days monthly',
                    painPoints: ['Manual metric calculation', 'Limited insight depth', 'Lagging indicators', 'Static reporting']
                },
                futureState: {
                    activities: ['Real-time KPI dashboards', 'AI-powered trend analysis', 'Predictive cash flow modeling', 'Automated benchmarking'],
                    aiAgents: ['ar-kpi-analytics-dashboard-o2c', 'receivables-trend-analyzer-predictive-o2c', 'ar-cash-flow-prediction-modeler-o2c'], // AR KPI Analytics Dashboard, Receivables Trend Analyzer, AR Cash Flow Prediction Modeler
                    humanCheckpoints: [],
                    timeReduction: '90% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Action Planning & Optimization',
                currentState: {
                    activities: ['Collection strategy planning', 'Credit limit reviews', 'Payment term optimization', 'Process improvement identification', 'Team workload balancing'],
                    timeRequired: '1 week quarterly',
                    painPoints: ['Reactive strategies', 'Manual planning processes', 'Limited optimization tools', 'Resource inefficiencies']
                },
                futureState: {
                    activities: ['AI-optimized collection strategies', 'Dynamic credit limit recommendations', 'Smart payment term modeling', 'Automated workload distribution'],
                    aiAgents: ['collection-strategy-optimizer-ai-o2c', 'credit-limit-recommendation-engine-o2c', 'payment-terms-optimization-modeler-o2c'], // Collection Strategy Optimizer, Credit Limit Recommendation Engine, Payment Terms Optimization Modeler
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.STRATEGY_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Reporting & Compliance',
                currentState: {
                    activities: ['Management report preparation', 'Audit trail maintenance', 'Compliance documentation', 'Provision calculations', 'Board reporting'],
                    timeRequired: '3-4 days monthly',
                    painPoints: ['Manual report creation', 'Complex provision calculations', 'Audit documentation gaps', 'Time-consuming preparation']
                },
                futureState: {
                    activities: ['Automated report generation', 'AI-powered provision modeling', 'Real-time audit trails', 'Self-service analytics'],
                    aiAgents: ['ar-reporting-automation-engine-o2c', 'bad-debt-provision-calculator-ai-o2c', 'receivables-audit-trail-tracker-o2c'], // AR Reporting Automation Engine, Bad Debt Provision Calculator, Receivables Audit Trail Tracker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.REPORT_APPROVAL],
                    timeReduction: '85% reduction'
                }
            }
        ],
        totalSteps: 5,
        futureStateWorkflow: [],
        estimatedTimeSavings: '83%',
        aiAgentsUsed: ['ar-balance-monitor-receivables-o2c', 'aging-prediction-analyzer-ar-o2c', 'credit-exposure-analyzer-receivables-o2c', 'customer-risk-scoring-engine-o2c', 'collection-priority-optimizer-ar-o2c', 'default-prediction-modeler-credit-o2c', 'ar-kpi-analytics-dashboard-o2c', 'receivables-trend-analyzer-predictive-o2c', 'ar-cash-flow-prediction-modeler-o2c', 'collection-strategy-optimizer-ai-o2c', 'credit-limit-recommendation-engine-o2c', 'payment-terms-optimization-modeler-o2c', 'ar-reporting-automation-engine-o2c', 'bad-debt-provision-calculator-ai-o2c', 'receivables-audit-trail-tracker-o2c'],
        humanCheckpointsCount: 3
    },
    {
        name: 'Credit Management',
        description: 'Customer credit evaluation, limit setting, and risk monitoring',
        platform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Credit Application & Evaluation',
                currentState: {
                    activities: ['Credit application review', 'Financial statement analysis', 'Reference checking', 'Manual risk scoring', 'Credit report review'],
                    timeRequired: '2-3 days per application',
                    painPoints: ['Manual analysis process', 'Inconsistent evaluation criteria', 'Delayed decisions', 'Limited data sources']
                },
                futureState: {
                    activities: ['Automated application intake', 'AI financial analysis', 'Digital reference validation', 'ML risk scoring', 'Real-time credit insights'],
                    aiAgents: ['credit-application-intake-processor-o2c', 'financial-statement-analyzer-ai-credit-o2c', 'customer-reference-validator-automated-o2c', 'credit-risk-scoring-engine-ml-o2c'], // Credit Application Intake Processor, Financial Statement Analyzer AI, Customer Reference Validator, Credit Risk Scoring Engine
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.NEW_CUSTOMER_APPROVAL],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Credit Limit Setting',
                currentState: {
                    activities: ['Risk assessment', 'Limit calculation', 'Approval routing', 'System updates', 'Customer notification'],
                    timeRequired: '4-6 hours per customer',
                    painPoints: ['Subjective limit setting', 'Manual approval chains', 'System update delays', 'Communication gaps']
                },
                futureState: {
                    activities: ['AI-powered limit recommendations', 'Dynamic risk modeling', 'Automated approvals', 'Real-time system updates', 'Smart notifications'],
                    aiAgents: ['credit-limit-recommendation-calculator-o2c', 'dynamic-credit-risk-modeler-ai-o2c', 'credit-approval-automation-engine-o2c', 'customer-notification-smart-system-o2c'], // Credit Limit Recommendation Calculator, Dynamic Credit Risk Modeler, Credit Approval Automation Engine, Customer Notification Smart System
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.HIGH_VALUE_APPROVAL, HUMAN_CHECKPOINT_TYPES.CREDIT_REDUCTION_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Ongoing Credit Monitoring',
                currentState: {
                    activities: ['Payment behavior tracking', 'Financial health monitoring', 'News and alerts review', 'Periodic reassessment', 'Risk reporting'],
                    timeRequired: '2-3 hours per customer monthly',
                    painPoints: ['Manual monitoring', 'Delayed alerts', 'Limited visibility', 'Reactive approach']
                },
                futureState: {
                    activities: ['Real-time behavior analytics', 'AI health monitoring', 'Automated news aggregation', 'Continuous risk scoring', 'Predictive alerts'],
                    aiAgents: ['customer-payment-behavior-analyzer-o2c', 'financial-health-monitor-realtime-o2c', 'credit-news-aggregator-intelligence-o2c', 'predictive-alert-system-credit-o2c'], // Customer Payment Behavior Analyzer, Financial Health Monitor Real-time, Credit News Aggregator Intelligence, Predictive Alert System
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Credit Risk Mitigation',
                currentState: {
                    activities: ['Risk identification', 'Action planning', 'Credit insurance evaluation', 'Collection strategy', 'Exposure management'],
                    timeRequired: '1-2 days per high-risk account',
                    painPoints: ['Late risk detection', 'Manual action planning', 'Limited mitigation options', 'Slow response times']
                },
                futureState: {
                    activities: ['Predictive risk detection', 'AI mitigation strategies', 'Automated insurance optimization', 'Dynamic collection plans', 'Real-time exposure management'],
                    aiAgents: ['predictive-credit-risk-detector-ml-o2c', 'risk-mitigation-strategy-generator-o2c', 'credit-insurance-optimizer-automated-o2c', 'credit-exposure-manager-realtime-o2c'], // Predictive Credit Risk Detector, Risk Mitigation Strategy Generator, Credit Insurance Optimizer, Credit Exposure Manager
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.RISK_DECISION],
                    timeReduction: '80% reduction'
                }
            }
        ],
        totalSteps: 4,
        futureStateWorkflow: [],
        estimatedTimeSavings: '80%',
        aiAgentsUsed: ['credit-application-intake-processor-o2c', 'financial-statement-analyzer-ai-credit-o2c', 'customer-reference-validator-automated-o2c', 'credit-risk-scoring-engine-ml-o2c', 'credit-limit-recommendation-calculator-o2c', 'dynamic-credit-risk-modeler-ai-o2c', 'credit-approval-automation-engine-o2c', 'customer-notification-smart-system-o2c', 'customer-payment-behavior-analyzer-o2c', 'financial-health-monitor-realtime-o2c', 'credit-news-aggregator-intelligence-o2c', 'predictive-alert-system-credit-o2c', 'predictive-credit-risk-detector-ml-o2c', 'risk-mitigation-strategy-generator-o2c', 'credit-insurance-optimizer-automated-o2c', 'credit-exposure-manager-realtime-o2c'],
        humanCheckpointsCount: 4
    },
    {
        name: 'Manage Customer Billing',
        description: 'Invoice generation and delivery process',
        platform: EXISTING_PLATFORMS.PROFITABILITY_ANALYTICS,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Billing Data Preparation',
                currentState: {
                    activities: ['Shipment data collection', 'Service completion verification', 'Pricing agreement lookup', 'Tax calculation preparation', 'Billing worksheet creation'],
                    timeRequired: '2-3 hours per billing cycle',
                    painPoints: ['Data scattered across systems', 'Manual verification processes', 'Complex pricing structures', 'Tax complexity']
                },
                futureState: {
                    activities: ['Automated data aggregation', 'AI completion verification', 'Dynamic pricing engine', 'Automated tax engine'],
                    aiAgents: ['billing-data-aggregator-multichannel-o2c', 'service-completion-verifier-ai-o2c', 'dynamic-pricing-engine-billing-o2c', 'automated-tax-calculation-engine-o2c'], // Billing Data Aggregator, Service Completion Verifier, Dynamic Pricing Engine, Automated Tax Engine
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Invoice Generation',
                currentState: {
                    activities: ['Invoice template selection', 'Line item creation', 'Discount application', 'Tax calculation', 'Invoice numbering'],
                    timeRequired: '15-30 minutes per invoice',
                    painPoints: ['Manual data entry', 'Template errors', 'Calculation mistakes', 'Numbering conflicts']
                },
                futureState: {
                    activities: ['AI template selection', 'Automated line item generation', 'Smart discount engine', 'Real-time calculations'],
                    aiAgents: ['invoice-template-selector-intelligent-o2c', 'billing-line-item-generator-automated-o2c', 'smart-discount-calculator-billing-o2c', 'realtime-invoice-calculator-engine-o2c'], // Invoice Template Selector, Billing Line Item Generator, Smart Discount Calculator, Real-time Invoice Calculator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.BILLING_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Invoice Validation & Approval',
                currentState: {
                    activities: ['Accuracy checking', 'Contract compliance verification', 'Manager approval routing', 'Customer-specific requirements', 'Exception handling'],
                    timeRequired: '1-2 hours per batch',
                    painPoints: ['Manual validation', 'Approval delays', 'Missed requirements', 'Exception complexity']
                },
                futureState: {
                    activities: ['AI accuracy validation', 'Automated compliance checking', 'Smart approval workflows', 'Exception automation'],
                    aiAgents: ['invoice-accuracy-validator-ai-o2c', 'billing-compliance-checker-automated-o2c', 'smart-approval-workflow-engine-o2c', 'billing-exception-automation-handler-o2c'], // Invoice Accuracy Validator, Billing Compliance Checker, Smart Approval Workflow Engine, Billing Exception Handler
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.INVOICE_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Invoice Distribution',
                currentState: {
                    activities: ['Distribution list maintenance', 'Format preparation (PDF, EDI, etc.)', 'Email/portal uploads', 'Postal mail processing', 'Delivery confirmation'],
                    timeRequired: '2-3 hours per billing run',
                    painPoints: ['Multiple distribution channels', 'Format inconsistencies', 'Delivery failures', 'Manual tracking']
                },
                futureState: {
                    activities: ['Omnichannel distribution', 'Automated format conversion', 'Smart delivery routing', 'Real-time tracking'],
                    aiAgents: ['omnichannel-invoice-distributor-o2c', 'invoice-format-converter-automated-o2c', 'smart-delivery-router-billing-o2c', 'delivery-tracking-realtime-monitor-o2c'], // Omnichannel Distributor, Format Converter, Delivery Router, Real-time Tracker
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Customer Portal Management',
                currentState: {
                    activities: ['Portal access setup', 'Invoice uploads', 'Supporting document attachment', 'Customer training', 'Query handling'],
                    timeRequired: '1-2 hours per customer',
                    painPoints: ['Manual uploads', 'Access management complexity', 'Limited self-service', 'Training overhead']
                },
                futureState: {
                    activities: ['Automated portal provisioning', 'Real-time invoice posting', 'AI document management', 'Self-service enablement'],
                    aiAgents: ['customer-portal-provisioner-automated-o2c', 'invoice-portal-poster-realtime-o2c', 'billing-document-manager-ai-o2c', 'customer-self-service-enabler-o2c'], // Portal Provisioner, Invoice Poster, Document Manager, Self-service Enabler
                    humanCheckpoints: [],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Billing Inquiries & Adjustments',
                currentState: {
                    activities: ['Customer inquiry logging', 'Investigation processes', 'Adjustment calculations', 'Credit memo creation', 'Re-billing processes'],
                    timeRequired: '30-60 minutes per inquiry',
                    painPoints: ['Manual investigation', 'Complex adjustments', 'Slow resolution times', 'High inquiry volumes']
                },
                futureState: {
                    activities: ['AI inquiry resolution', 'Automated investigation', 'Smart adjustment engine', 'Self-service adjustments'],
                    aiAgents: ['billing-inquiry-resolver-ai-o2c', 'invoice-investigation-automator-o2c', 'billing-adjustment-engine-smart-o2c', 'self-service-adjustment-portal-o2c'], // Inquiry Resolver, Automated Investigator, Adjustment Engine, Self-service Adjustments
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ADJUSTMENT_APPROVAL],
                    timeReduction: '70% reduction'
                }
            }
        ],
        totalSteps: 6,
        futureStateWorkflow: [],
        estimatedTimeSavings: '79%',
        aiAgentsUsed: ['DA', 'CV', 'PE', 'TE', 'TS', 'LG', 'DE', 'RC', 'AV', 'CC', 'AW', 'EA', 'OD', 'FC', 'DR', 'RT', 'PP', 'IP', 'DM', 'SE', 'IR', 'AI', 'AE', 'SA'],
        humanCheckpointsCount: 3
    },
    {
        name: 'Collections & Disputes Management',
        description: 'Systematic approach to collecting outstanding receivables',
        platform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Account Prioritization & Segmentation',
                currentState: {
                    activities: ['Aging report generation', 'Account balance review', 'Risk scoring calculation', 'Collection strategy assignment', 'Workload distribution'],
                    timeRequired: '4-6 hours daily',
                    painPoints: ['Manual prioritization', 'Static segmentation', 'Inefficient workload balancing', 'Limited risk insights']
                },
                futureState: {
                    activities: ['AI-driven prioritization', 'Dynamic segmentation', 'Predictive risk scoring', 'Optimized work distribution'],
                    aiAgents: ['collections-account-prioritizer-ai-o2c', 'customer-dynamic-segmenter-ml-o2c', 'collections-risk-scorer-predictive-o2c', 'workload-distributor-optimizer-o2c'], // Account Prioritizer, Dynamic Segmenter, Risk Scorer, Work Distributor
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Customer Contact & Communication',
                currentState: {
                    activities: ['Contact list preparation', 'Phone call campaigns', 'Email template sending', 'Letter generation', 'Contact logging'],
                    timeRequired: '6-8 hours per collector daily',
                    painPoints: ['Manual dialing', 'Limited contact channels', 'Generic messaging', 'Poor contact rates']
                },
                futureState: {
                    activities: ['Omnichannel orchestration', 'AI conversation assistance', 'Personalized messaging', 'Optimal timing engine'],
                    aiAgents: ['omnichannel-outreach-orchestrator-o2c', 'collections-conversation-assistant-ai-o2c', 'personalized-message-generator-o2c', 'optimal-contact-timing-engine-o2c'], // Omnichannel Orchestrator, Conversation Assistant, Personalized Messenger, Timing Engine
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.CUSTOMER_ESCALATION],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Promise to Pay Management',
                currentState: {
                    activities: ['Promise documentation', 'Follow-up scheduling', 'Reminder sending', 'Promise tracking', 'Broken promise handling'],
                    timeRequired: '2-3 hours per day',
                    painPoints: ['Manual tracking', 'Missed follow-ups', 'No predictive insights', 'Reactive management']
                },
                futureState: {
                    activities: ['Automated promise tracking', 'AI follow-up optimization', 'Predictive promise scoring', 'Proactive intervention'],
                    aiAgents: ['promise-tracker-tracker-o2c', 'follow-up-optimizer-o2c', 'promise-scorer-o2c', 'proactive-intervener-o2c'], // Promise Tracker, Follow-up Optimizer, Promise Scorer, Proactive Intervener
                    humanCheckpoints: [],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Payment Plan Negotiation',
                currentState: {
                    activities: ['Financial situation assessment', 'Payment capacity analysis', 'Plan terms calculation', 'Approval seeking', 'Agreement documentation'],
                    timeRequired: '45-60 minutes per plan',
                    painPoints: ['Subjective assessments', 'Manual calculations', 'Slow approvals', 'Inconsistent terms']
                },
                futureState: {
                    activities: ['AI capacity analysis', 'Optimized plan generation', 'Automated approval routing', 'Digital agreement processing'],
                    aiAgents: ['content-analyzer-analyzer-o2c', 'plan-generator-o2c', 'approval-router-o2c', 'agreement-processor-processor-o2c'], // Capacity Analyzer, Plan Generator, Approval Router, Agreement Processor
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.PAYMENT_PLAN_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Dispute Resolution',
                currentState: {
                    activities: ['Dispute logging', 'Root cause investigation', 'Documentation gathering', 'Internal coordination', 'Resolution tracking'],
                    timeRequired: '2-4 hours per dispute',
                    painPoints: ['Lengthy investigations', 'Poor documentation', 'Slow internal coordination', 'Repeated disputes']
                },
                futureState: {
                    activities: ['AI dispute categorization', 'Automated investigation', 'Smart documentation retrieval', 'Predictive resolution'],
                    aiAgents: ['deduction-capturer-o2c', 'invoice-investigation-automator-o2c', 'smart-delivery-router-billing-o2c', 'predictive-resolver-o2c'], // Dispute Categorizer, Automated Investigator, Document Retriever, Predictive Resolver
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DISPUTE_RESOLUTION],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Escalation & Legal Action',
                currentState: {
                    activities: ['Escalation criteria checking', 'Legal documentation preparation', 'Agency assignment', 'Legal action tracking', 'Cost-benefit analysis'],
                    timeRequired: '3-4 hours per account',
                    painPoints: ['Manual escalation decisions', 'Slow legal processes', 'Limited agency visibility', 'Poor ROI tracking']
                },
                futureState: {
                    activities: ['AI escalation recommendations', 'Automated legal documentation', 'Smart agency matching', 'ROI optimization'],
                    aiAgents: ['exception-resolver-o2c', 'legal-documenter-o2c', 'agency-matcher-o2c', 'roi-optimizer-o2c'], // Escalation Recommender, Legal Documenter, Agency Matcher, ROI Optimizer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.LEGAL_APPROVAL],
                    timeReduction: '65% reduction'
                }
            },
            {
                stepNumber: 7,
                description: 'Cash Application',
                currentState: {
                    activities: ['Payment identification', 'Customer matching', 'Invoice matching', 'Partial payment allocation', 'Unapplied cash handling'],
                    timeRequired: '4-6 hours daily',
                    painPoints: ['Manual matching', 'High error rates', 'Complex allocations', 'Unidentified payments']
                },
                futureState: {
                    activities: ['AI payment matching', 'Automated allocation', 'Machine learning optimization', 'Exception automation'],
                    aiAgents: ['payment-matcher-o2c', 'allocator-o2c', 'machine-learning-o2c', 'billing-exception-automation-handler-o2c'], // Payment Matcher, Automated Allocator, Machine Learning, Exception Automator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.CASH_APPLICATION_REVIEW],
                    timeReduction: '90% reduction'
                }
            }
        ],
        totalSteps: 7,
        futureStateWorkflow: [],
        estimatedTimeSavings: '76%',
        aiAgentsUsed: ['AP', 'DS', 'RS', 'WD', 'OO', 'CA', 'PM', 'TE', 'PT', 'FO', 'PS', 'PI', 'PG', 'AR', 'DC', 'AI', 'DR', 'PR', 'ER', 'LD', 'AM', 'RO', 'AA', 'ML', 'EA'],
        humanCheckpointsCount: 5
    },
    {
        name: 'Deductions Management',
        description: 'Processing and resolving customer deductions',
        platform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Deduction Identification',
                currentState: {
                    activities: ['Short payment identification', 'Deduction coding', 'Documentation collection', 'Initial categorization', 'System entry'],
                    timeRequired: '20-30 minutes per deduction',
                    painPoints: ['Manual identification', 'Missing documentation', 'Coding errors', 'Delayed processing']
                },
                futureState: {
                    activities: ['Automated deduction capture', 'AI categorization', 'Smart documentation retrieval', 'Real-time processing'],
                    aiAgents: ['deduction-capturer-o2c', 'communicator-o2c', 'smart-delivery-router-billing-o2c', 'real-time-processor-processor-o2c'], // Deduction Capturer, AI Categorizer, Document Retriever, Real-time Processor
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Root Cause Analysis',
                currentState: {
                    activities: ['Transaction research', 'Shipment verification', 'Pricing validation', 'Quality issue investigation', 'Pattern identification'],
                    timeRequired: '1-2 hours per deduction',
                    painPoints: ['Time-consuming research', 'System limitations', 'Incomplete data', 'Manual pattern analysis']
                },
                futureState: {
                    activities: ['AI-powered research', 'Automated verification', 'Pattern recognition', 'Predictive analytics'],
                    aiAgents: ['researcher-o2c', 'verifier-o2c', 'pattern-recognizer-o2c', 'predictive-analytics-o2c'], // AI Researcher, Automated Verifier, Pattern Recognizer, Predictive Analytics
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.COMPLEX_DEDUCTION_REVIEW],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Validity Assessment',
                currentState: {
                    activities: ['Contract terms review', 'Compliance verification', 'Supporting document analysis', 'Validity determination', 'Decision documentation'],
                    timeRequired: '30-45 minutes per deduction',
                    painPoints: ['Complex contract terms', 'Manual verification', 'Subjective decisions', 'Inconsistent documentation']
                },
                futureState: {
                    activities: ['AI contract analysis', 'Automated compliance checking', 'Smart validity scoring', 'Decision automation'],
                    aiAgents: ['content-analyzer-analyzer-o2c', 'billing-compliance-checker-automated-o2c', 'validity-scorer-o2c', 'decision-automator-o2c'], // Contract Analyzer, Compliance Checker, Validity Scorer, Decision Automator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.VALIDITY_APPROVAL],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Resolution Processing',
                currentState: {
                    activities: ['Resolution strategy selection', 'Customer communication', 'Credit memo processing', 'Repayment requests', 'Settlement negotiations'],
                    timeRequired: '1-2 hours per deduction',
                    painPoints: ['Manual processing', 'Communication delays', 'Complex negotiations', 'System limitations']
                },
                futureState: {
                    activities: ['AI resolution recommendations', 'Automated communications', 'Smart settlement engine', 'Digital processing'],
                    aiAgents: ['resolution-recommender-o2c', 'communicator-o2c', 'settlement-engine-engine-o2c', 'processor-processor-o2c'], // Resolution Recommender, Automated Communicator, Settlement Engine, Digital Processor
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.SETTLEMENT_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Recovery & Follow-up',
                currentState: {
                    activities: ['Recovery action planning', 'Follow-up scheduling', 'Collection efforts', 'Escalation management', 'Write-off decisions'],
                    timeRequired: '45-60 minutes per deduction',
                    painPoints: ['Manual follow-ups', 'Ineffective recovery', 'Delayed escalations', 'Poor write-off criteria']
                },
                futureState: {
                    activities: ['AI recovery optimization', 'Automated follow-ups', 'Predictive collection', 'Smart write-off recommendations'],
                    aiAgents: ['recovery-optimizer-o2c', 'follow-up-o2c', 'predictive-collector-o2c', 'write-off-recommender-o2c'], // Recovery Optimizer, Automated Follow-up, Predictive Collector, Write-off Recommender
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.WRITE_OFF_APPROVAL],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Reporting & Prevention',
                currentState: {
                    activities: ['Deduction reporting', 'Trend analysis', 'Root cause reporting', 'Prevention recommendations', 'Stakeholder communication'],
                    timeRequired: '4-6 hours monthly',
                    painPoints: ['Manual reporting', 'Limited insights', 'Reactive prevention', 'Poor stakeholder visibility']
                },
                futureState: {
                    activities: ['Real-time dashboards', 'AI trend analysis', 'Predictive prevention', 'Automated stakeholder updates'],
                    aiAgents: ['real-time-dashboard-o2c', 'trend-analyzer-analyzer-o2c', 'predictive-preventer-o2c', 'stakeholder-updater-o2c'], // Real-time Dashboard, Trend Analyzer, Predictive Preventer, Stakeholder Updater
                    humanCheckpoints: [],
                    timeReduction: '80% reduction'
                }
            }
        ],
        totalSteps: 6,
        futureStateWorkflow: [],
        estimatedTimeSavings: '76%',
        aiAgentsUsed: ['DC', 'AC', 'DR', 'RP', 'AR', 'AV', 'PR', 'PA', 'CA', 'CC', 'VS', 'DA', 'RR', 'SE', 'DP', 'RO', 'AF', 'PC', 'WR', 'RD', 'TA', 'PP', 'SU'],
        humanCheckpointsCount: 4
    },
    {
        name: 'Maintain AR Ledger and Apply Cash',
        description: 'AR ledger maintenance, journal entries, and cash application to invoices',
        platform: EXISTING_PLATFORMS.INTELLIGENT_RECEIVABLES,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Payment Receipt & Capture',
                currentState: {
                    activities: ['Bank file download', 'Check processing', 'Wire transfer logging', 'ACH batch processing', 'Payment registration'],
                    timeRequired: '2-3 hours daily',
                    painPoints: ['Multiple payment channels', 'Manual data entry', 'Format inconsistencies', 'Processing delays']
                },
                futureState: {
                    activities: ['Automated bank integration', 'AI payment capture', 'Real-time processing', 'Format standardization'],
                    aiAgents: ['bank-integrator-o2c', 'policy-checker-o2c', 'real-time-processor-processor-o2c-v2', 'format-standardizer-o2c'], // Bank Integrator, Payment Capturer, Real-time Processor, Format Standardizer
                    humanCheckpoints: [],
                    timeReduction: '90% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Customer Identification',
                currentState: {
                    activities: ['Remittance parsing', 'Customer name matching', 'Account number lookup', 'Reference verification', 'Manual research'],
                    timeRequired: '5-10 minutes per payment',
                    painPoints: ['Poor remittance quality', 'Name variations', 'Missing references', 'Time-consuming research']
                },
                futureState: {
                    activities: ['AI customer matching', 'Fuzzy logic algorithms', 'Machine learning optimization', 'Automated enrichment'],
                    aiAgents: ['customer-matcher-o2c', 'fuzzy-logic-o2c', 'machine-learning-o2c', 'enricher-o2c'], // Customer Matcher, Fuzzy Logic, Machine Learning, Automated Enricher
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Invoice Matching',
                currentState: {
                    activities: ['Invoice number search', 'Amount matching', 'Multiple invoice handling', 'Partial payment allocation', 'Discount verification'],
                    timeRequired: '10-15 minutes per payment',
                    painPoints: ['Complex matching logic', 'Partial payments', 'Discount disputes', 'Manual allocation']
                },
                futureState: {
                    activities: ['AI invoice matching', 'Smart allocation engine', 'Automated discount handling', 'Optimization algorithms'],
                    aiAgents: ['invoice-matcher-o2c', 'allocation-engine-engine-o2c', 'discount-handler-o2c', 'optimization-algorithm-o2c'], // Invoice Matcher, Allocation Engine, Discount Handler, Optimization Algorithm
                    humanCheckpoints: [],
                    timeReduction: '88% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Exception Handling',
                currentState: {
                    activities: ['Unmatched payment investigation', 'Customer contact', 'Internal research', 'Manual matching attempts', 'Suspense account management'],
                    timeRequired: '30-45 minutes per exception',
                    painPoints: ['High exception rates', 'Manual investigation', 'Communication delays', 'Growing suspense accounts']
                },
                futureState: {
                    activities: ['AI exception resolution', 'Automated customer outreach', 'Predictive matching', 'Self-learning algorithms'],
                    aiAgents: ['exception-resolver-o2c', 'customer-outreach-o2c', 'personalized-message-generator-o2c', 'self-learner-o2c'], // Exception Resolver, Customer Outreach, Predictive Matcher, Self-learner
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.COMPLEX_EXCEPTION_REVIEW],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Posting & Reconciliation',
                currentState: {
                    activities: ['GL posting preparation', 'Batch processing', 'Account reconciliation', 'Variance investigation', 'Report generation'],
                    timeRequired: '2-3 hours daily',
                    painPoints: ['Manual posting', 'Reconciliation errors', 'Timing differences', 'Report delays']
                },
                futureState: {
                    activities: ['Automated posting', 'Real-time reconciliation', 'AI variance analysis', 'Dynamic reporting'],
                    aiAgents: ['collections-account-prioritizer-ai-o2c', 'real-time-reconciler-o2c', 'variance-analyzer-analyzer-o2c', 'dynamic-reporter-o2c'], // Automated Poster, Real-time Reconciler, Variance Analyzer, Dynamic Reporter
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.POSTING_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Customer Communication',
                currentState: {
                    activities: ['Payment confirmation emails', 'Statement generation', 'Query responses', 'Dispute handling', 'Account status updates'],
                    timeRequired: '1-2 hours daily',
                    painPoints: ['Manual communications', 'Delayed confirmations', 'Inconsistent messaging', 'High query volumes']
                },
                futureState: {
                    activities: ['Automated confirmations', 'Real-time statements', 'AI query resolution', 'Self-service portals'],
                    aiAgents: ['confirmer-o2c', 'real-time-statementer-o2c', 'query-resolver-o2c', 'self-service-portal-o2c'], // Automated Confirmer, Real-time Statementer, Query Resolver, Self-service Portal
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            }
        ],
        totalSteps: 6,
        futureStateWorkflow: [],
        estimatedTimeSavings: '83%',
        aiAgentsUsed: ['BI', 'PC', 'RP', 'FS', 'CM', 'FL', 'ML', 'AE', 'IM', 'DH', 'OA', 'ER', 'CO', 'PM', 'SL', 'AP', 'RR', 'VA', 'DR', 'AC', 'RS', 'QR', 'SP'],
        humanCheckpointsCount: 3
    },
    {
        name: 'Manage Customer Requests & Inquiries',
        description: 'Managing customer service requests and inquiries',
        platform: EXISTING_PLATFORMS.CUSTOMER_EXPERIENCE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Request Intake & Logging',
                currentState: {
                    activities: ['Multi-channel request receipt', 'Manual ticket creation', 'Category assignment', 'Priority setting', 'Initial acknowledgment'],
                    timeRequired: '10-15 minutes per request',
                    painPoints: ['Manual data entry', 'Channel fragmentation', 'Inconsistent categorization', 'Delayed acknowledgments']
                },
                futureState: {
                    activities: ['Omnichannel integration', 'AI ticket creation', 'Smart categorization', 'Automated acknowledgment'],
                    aiAgents: ['omnichannel-integrator-o2c', 'ticket-creator-o2c', 'categorizer-o2c', 'auto-acknowledger-o2c'], // Omnichannel Integrator, Ticket Creator, Smart Categorizer, Auto Acknowledger
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Request Analysis & Routing',
                currentState: {
                    activities: ['Request content review', 'Skill requirement assessment', 'Agent assignment', 'Workload balancing', 'Escalation decisions'],
                    timeRequired: '5-10 minutes per request',
                    painPoints: ['Manual routing', 'Skill mismatches', 'Uneven workload', 'Routing delays']
                },
                futureState: {
                    activities: ['AI content analysis', 'Skill-based routing', 'Dynamic load balancing', 'Predictive escalation'],
                    aiAgents: ['content-analyzer-analyzer-o2c', 'skill-router-o2c', 'load-balancer-o2c', 'predictive-escalator-o2c'], // Content Analyzer, Skill Router, Load Balancer, Predictive Escalator
                    humanCheckpoints: [],
                    timeReduction: '90% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Information Gathering',
                currentState: {
                    activities: ['Account history review', 'Transaction research', 'Document retrieval', 'System navigation', 'Internal consultation'],
                    timeRequired: '15-30 minutes per request',
                    painPoints: ['Multiple system searches', 'Slow document access', 'Incomplete history', 'Knowledge gaps']
                },
                futureState: {
                    activities: ['Unified data access', 'AI-powered research', 'Automated document retrieval', 'Knowledge base integration'],
                    aiAgents: ['unified-data-o2c', 'researcher-o2c-v2', 'smart-delivery-router-billing-o2c', 'knowledge-base-o2c'], // Unified Data, AI Researcher, Document Retriever, Knowledge Base
                    humanCheckpoints: [],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Resolution Development',
                currentState: {
                    activities: ['Solution identification', 'Policy verification', 'Approval seeking', 'Documentation preparation', 'Quality checking'],
                    timeRequired: '20-40 minutes per request',
                    painPoints: ['Complex policies', 'Approval delays', 'Inconsistent solutions', 'Quality variations']
                },
                futureState: {
                    activities: ['AI solution recommendations', 'Automated policy checking', 'Smart approvals', 'Quality automation'],
                    aiAgents: ['solution-recommender-o2c', 'policy-checker-o2c', 'sentiment-analyzer-analyzer-o2c', 'quality-automator-o2c'], // Solution Recommender, Policy Checker, Smart Approver, Quality Automator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.COMPLEX_RESOLUTION_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Customer Communication',
                currentState: {
                    activities: ['Response drafting', 'Personalization efforts', 'Channel selection', 'Message sending', 'Follow-up scheduling'],
                    timeRequired: '15-20 minutes per request',
                    painPoints: ['Manual drafting', 'Limited personalization', 'Channel inefficiencies', 'Missed follow-ups']
                },
                futureState: {
                    activities: ['AI response generation', 'Dynamic personalization', 'Optimal channel selection', 'Automated follow-ups'],
                    aiAgents: ['response-generator-o2c', 'dynamic-personalizer-o2c', 'channel-selector-o2c', 'follow-up-o2c-v2'], // Response Generator, Dynamic Personalizer, Channel Selector, Automated Follow-up
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.COMMUNICATION_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Closure & Feedback',
                currentState: {
                    activities: ['Resolution confirmation', 'Ticket closure', 'Survey sending', 'Feedback collection', 'Reporting updates'],
                    timeRequired: '10-15 minutes per request',
                    painPoints: ['Manual closure processes', 'Low survey responses', 'Delayed feedback', 'Basic reporting']
                },
                futureState: {
                    activities: ['Automated closure workflows', 'AI feedback collection', 'Sentiment analysis', 'Real-time insights'],
                    aiAgents: ['closure-workflow-o2c', 'invoice-format-converter-automated-o2c', 'sentiment-analyzer-analyzer-o2c', 'real-time-insights-o2c'], // Closure Workflow, Feedback Collector, Sentiment Analyzer, Real-time Insights
                    humanCheckpoints: [],
                    timeReduction: '85% reduction'
                }
            }
        ],
        totalSteps: 6,
        futureStateWorkflow: [],
        estimatedTimeSavings: '82%',
        aiAgentsUsed: ['OI', 'TC', 'SC', 'AA', 'CA', 'SR', 'LB', 'PE', 'UD', 'AR', 'DR', 'KB', 'PC', 'SA', 'QA', 'RG', 'DP', 'CS', 'AF', 'CW', 'FC', 'RI'],
        humanCheckpointsCount: 2
    }
]; 