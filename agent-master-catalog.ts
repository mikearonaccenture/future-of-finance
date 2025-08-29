// Agent Master Catalog - Single Source of Truth for All Agents
// Generated on: ${new Date().toISOString()}
// Purpose: Complete agent registry with new unique IDs and legacy mappings

export interface MasterAgent {
    id: string;                    // New unique ID format: DOMAIN-FUNCTION-SEQUENCE
    legacyIds: string[];          // Old IDs for backward compatibility
    name: string;
    fullName: string;
    category: string;
    domain: string;
    description: string;
    capabilities: string[];
    status: 'active' | 'deprecated' | 'planned' | 'duplicate';
    duplicateOf?: string;         // For consolidation tracking
    usageLocations: {
        workflows: string[];
        platforms: string[];
        activities: string[];
    };
    confidence?: number;
    specialty?: string;
    integrations?: string[];
    vendor?: string;              // For external platform agents
}

// Domain definitions for consistent categorization
export const DOMAINS = {
    FPA: 'Financial Planning & Analysis',
    RTR: 'Record to Report',
    PTP: 'Procure to Pay',
    OTC: 'Order to Cash',
    TAX: 'Tax Management',
    TRS: 'Treasury',
    INV: 'Investor Relations',
    CRP: 'Corporate Finance',
    CTL: 'Controllership',
    CST: 'Cost Accounting',
    GEN: 'General/Cross-functional'
} as const;

// Master Agent Catalog - All agents with new IDs
export const MASTER_AGENT_CATALOG: MasterAgent[] = [
    // ========== RECORD TO REPORT AGENTS ==========
    {
        id: 'RTR-CLOSE-001',
        legacyIds: ['CC', 'CO'],
        name: 'Close Calendar Agent',
        fullName: 'Close Calendar & Orchestrator Agent',
        category: 'Record to Report',
        domain: 'RTR',
        description: 'AI-powered close calendar with intelligent task assignment and orchestration',
        capabilities: [
            'Automated task assignment based on workload and skills',
            'Real-time progress tracking and alerts',
            'Dynamic schedule optimization',
            'Dependency management',
            'Close orchestration'
        ],
        status: 'active',
        usageLocations: {
            workflows: ['record-to-report', 'month-end-close'],
            platforms: ['BlackLine', 'SAP S/4HANA'],
            activities: ['Close Management', 'Task Coordination']
        }
    },
    {
        id: 'RTR-BALANCE-001',
        legacyIds: ['TB'],
        name: 'Trial Balance Analyzer',
        fullName: 'Trial Balance Analyzer',
        description: 'AI-powered trial balance anomaly detection',
        capabilities: [
            'ML-based anomaly detection with 95% accuracy',
            'Pattern recognition for unusual transactions',
            'Automated root cause analysis',
            'Predictive variance forecasting'
        ],
        category: 'Record to Report',
        domain: 'RTR',
        status: 'active',
        usageLocations: {
            workflows: ['record-to-report', 'balance-sheet-reconciliation'],
            platforms: ['BlackLine', 'SAP'],
            activities: ['Trial Balance Review', 'Anomaly Detection']
        }
    },
    {
        id: 'RTR-ACCRUAL-001',
        legacyIds: ['AI', 'AE'],
        name: 'Accrual Intelligence Agent',
        fullName: 'Accrual Identifier & Engine',
        description: 'AI-powered accrual identification, calculation, and automation',
        capabilities: [
            'Pattern-based accrual identification',
            'Automated accrual calculations',
            'Historical trend analysis',
            'Exception flagging',
            'Auto-reversal handling'
        ],
        category: 'Record to Report',
        domain: 'RTR',
        status: 'active',
        usageLocations: {
            workflows: ['record-to-report', 'month-end-accruals'],
            platforms: ['SAP S/4HANA', 'Oracle'],
            activities: ['Accrual Management', 'Period-End Processing']
        }
    },
    {
        id: 'RTR-JOURNAL-001',
        legacyIds: ['JE', 'JA', 'JG'],
        name: 'Journal Entry Creator',
        fullName: 'Journal Entry Creation & Automation Agent',
        description: 'AI-powered journal entry creation, validation, and automation',
        capabilities: [
            'Automated entry generation with 98% accuracy',
            'Built-in validation rules',
            'Duplicate detection',
            'Auto-reversal handling',
            'Template-based creation'
        ],
        category: 'Record to Report',
        domain: 'RTR',
        status: 'active',
        usageLocations: {
            workflows: ['record-to-report', 'journal-processing'],
            platforms: ['BlackLine', 'SAP', 'Oracle'],
            activities: ['Journal Entry Processing', 'Month-End Adjustments']
        }
    },
    {
        id: 'RTR-RECON-001',
        legacyIds: ['BR', 'RE', 'RM'],
        name: 'Balance Reconciler',
        fullName: 'Balance Sheet & Account Reconciliation Agent',
        description: 'AI-powered balance sheet and account reconciliation',
        capabilities: [
            'Automated matching with 99% accuracy',
            'Pattern-based exception identification',
            'Multi-source data reconciliation',
            'Variance explanation generation',
            'Real-time reconciliation'
        ],
        category: 'Record to Report',
        domain: 'RTR',
        status: 'active',
        usageLocations: {
            workflows: ['record-to-report', 'balance-reconciliation'],
            platforms: ['BlackLine', 'ReconNet'],
            activities: ['Account Reconciliation', 'Balance Sheet Review']
        }
    },
    {
        id: 'RTR-INTERCO-001',
        legacyIds: ['IR', 'IE'],
        name: 'Intercompany Reconciler',
        fullName: 'Intercompany Reconciliation & Elimination Agent',
        description: 'Automated intercompany reconciliation and elimination',
        capabilities: [
            'Multi-entity matching and netting',
            'Automated elimination entries',
            'Dispute identification and routing',
            'Currency conversion handling',
            'Intercompany invoice processing'
        ],
        category: 'Record to Report',
        domain: 'RTR',
        status: 'active',
        usageLocations: {
            workflows: ['record-to-report', 'intercompany-processing'],
            platforms: ['BlackLine', 'SAP ICR'],
            activities: ['Intercompany Reconciliation', 'Eliminations']
        }
    },
    {
        id: 'RTR-VARIANCE-001',
        legacyIds: ['VA'],
        name: 'Variance Analyzer',
        fullName: 'Variance Analysis & Detective Agent',
        description: 'AI-powered variance analysis and insights',
        capabilities: [
            'Automated root cause identification',
            'Predictive variance forecasting',
            'Natural language explanations',
            'Trend analysis and alerting',
            'Flux analysis'
        ],
        category: 'Record to Report',
        domain: 'RTR',
        status: 'active',
        duplicateOf: 'FPA-VARIANCE-001', // Note: This is a duplicate that needs consolidation
        usageLocations: {
            workflows: ['record-to-report', 'variance-analysis', 'fpa-analysis'],
            platforms: ['Multiple'],
            activities: ['Variance Analysis', 'Performance Review']
        }
    },
    {
        id: 'RTR-REPORT-001',
        legacyIds: ['RG', 'SG', 'FG'],
        name: 'Report Generator',
        fullName: 'Financial Statement & Report Generation Agent',
        description: 'Automated financial statement and report generation',
        capabilities: [
            'Template-based report creation',
            'Dynamic data population',
            'Multi-format output generation',
            'Version control and tracking',
            'Statement generation',
            'Footnote generation'
        ],
        category: 'Record to Report',
        domain: 'RTR',
        status: 'active',
        usageLocations: {
            workflows: ['record-to-report', 'financial-reporting'],
            platforms: ['Multiple BI Tools'],
            activities: ['Financial Reporting', 'Statement Generation']
        }
    },

    // ========== PROCURE TO PAY AGENTS ==========
    {
        id: 'PTP-INVOICE-001',
        legacyIds: ['IC', 'IP'],
        name: 'Invoice Capture Agent',
        fullName: 'Invoice Capture & Parser Agent',
        description: 'AI-powered invoice capture and data extraction',
        capabilities: [
            'OCR and ML-based data extraction',
            'Multi-format invoice processing',
            '95% automation rate',
            'Duplicate detection',
            'Invoice parsing'
        ],
        category: 'Procure to Pay',
        domain: 'PTP',
        status: 'active',
        usageLocations: {
            workflows: ['procure-to-pay', 'invoice-processing'],
            platforms: ['Coupa', 'SAP Ariba'],
            activities: ['Invoice Processing', 'AP Automation']
        }
    },
    {
        id: 'PTP-VALIDATE-001',
        legacyIds: ['DV', 'IV'],
        name: 'Data Validation Agent',
        fullName: 'Invoice Data Validation Agent',
        description: 'AI-powered validation of invoice data and coding',
        capabilities: [
            'ML-based validation with 98% accuracy',
            'Automated GL coding',
            'Vendor master matching',
            'Tax compliance verification',
            'Three-way matching'
        ],
        category: 'Procure to Pay',
        domain: 'PTP',
        status: 'active',
        usageLocations: {
            workflows: ['procure-to-pay', 'invoice-validation'],
            platforms: ['Coupa', 'SAP Ariba', 'Workday'],
            activities: ['Invoice Validation', 'PO Matching']
        }
    },
    {
        id: 'PTP-EXCEPTION-001',
        legacyIds: ['EH', 'EE', 'ER'],
        name: 'Exception Handler',
        fullName: 'Exception Handling & Escalation Agent',
        description: 'AI-powered handling of invoice exceptions',
        capabilities: [
            'Intelligent routing and resolution',
            'Pattern-based exception categorization',
            'Automated resolution suggestions',
            'Escalation management',
            'Smart escalation with context'
        ],
        category: 'Procure to Pay',
        domain: 'PTP',
        status: 'active',
        usageLocations: {
            workflows: ['procure-to-pay', 'exception-management'],
            platforms: ['Multiple P2P Platforms'],
            activities: ['Exception Handling', 'Dispute Resolution']
        }
    },
    {
        id: 'PTP-APPROVAL-001',
        legacyIds: ['AR', 'AV', 'AA'],
        name: 'Approval Router',
        fullName: 'Approval Routing & Validation Agent',
        description: 'AI-powered approval routing and decision support',
        capabilities: [
            'Intelligent routing with 99% accuracy',
            'Dynamic approval matrix',
            'Workload balancing',
            'Out-of-office handling',
            'Risk-based approval routing',
            'Policy compliance verification'
        ],
        category: 'Procure to Pay',
        domain: 'PTP',
        status: 'active',
        usageLocations: {
            workflows: ['procure-to-pay', 'approval-workflow'],
            platforms: ['Coupa', 'Workday'],
            activities: ['Invoice Approval', 'Payment Authorization']
        }
    },
    {
        id: 'PTP-PAYMENT-001',
        legacyIds: ['PO', 'PE', 'PS'],
        name: 'Payment Optimizer',
        fullName: 'Payment Optimization & Execution Agent',
        description: 'AI-powered payment timing optimization and execution',
        capabilities: [
            'Cash flow optimization algorithms',
            'Early payment discount analysis',
            'Working capital optimization',
            'Payment scheduling',
            'Straight-through processing',
            'Multi-channel payment support'
        ],
        category: 'Procure to Pay',
        domain: 'PTP',
        status: 'active',
        usageLocations: {
            workflows: ['procure-to-pay', 'payment-processing'],
            platforms: ['Treasury Systems', 'Banking Platforms'],
            activities: ['Payment Processing', 'Cash Management']
        }
    },
    {
        id: 'PTP-FRAUD-001',
        legacyIds: ['FD'],
        name: 'Fraud Detector',
        fullName: 'Fraud Detection & Prevention Agent',
        description: 'AI-powered fraud detection and prevention',
        capabilities: [
            'ML-based fraud detection',
            'Real-time anomaly detection',
            'Vendor risk scoring',
            'Pattern recognition',
            'Duplicate payment prevention'
        ],
        category: 'Procure to Pay',
        domain: 'PTP',
        status: 'active',
        usageLocations: {
            workflows: ['procure-to-pay', 'fraud-prevention'],
            platforms: ['Multiple P2P Platforms'],
            activities: ['Fraud Prevention', 'Risk Management']
        }
    },

    // ========== FP&A AGENTS ==========
    {
        id: 'FPA-FORECAST-001',
        legacyIds: ['forecast-optimizer', 'FP', 'PF'],
        name: 'Forecast Optimizer',
        fullName: 'Predictive Forecasting & Planning Agent',
        description: 'Advanced ML model for financial forecasting and planning',
        capabilities: [
            'Real-time forecast generation',
            'Scenario modeling and simulation',
            'Confidence interval calculation',
            'Seasonal pattern recognition',
            'Market trend integration',
            'Risk-adjusted projections'
        ],
        category: 'Plan to Perform',
        domain: 'FPA',
        status: 'active',
        confidence: 96,
        specialty: 'Revenue and profit forecasting with 95%+ accuracy',
        usageLocations: {
            workflows: ['fpa-workflows', 'annual-planning', 'quarterly-forecasting'],
            platforms: ['Anaplan', 'Oracle Hyperion', 'Adaptive Insights'],
            activities: ['Forecasting', 'Planning', 'Budgeting']
        },
        integrations: ['Salesforce', 'SAP', 'Oracle', 'PowerBI', 'Snowflake']
    },
    {
        id: 'FPA-VARIANCE-001',
        legacyIds: ['variance-detective', 'VA', 'VD'],
        name: 'Variance Detective',
        fullName: 'Variance Analysis & Root Cause Agent',
        description: 'AI-powered variance analysis with root cause identification',
        capabilities: [
            'Automated variance detection',
            'Root cause analysis',
            'Impact quantification',
            'Corrective action recommendations',
            'Trend pattern analysis',
            'Anomaly detection'
        ],
        category: 'Plan to Perform',
        domain: 'FPA',
        status: 'active',
        confidence: 92,
        specialty: 'Real-time variance analysis and root cause identification',
        usageLocations: {
            workflows: ['fpa-workflows', 'performance-reporting', 'month-end-analysis'],
            platforms: ['Multiple BI Tools'],
            activities: ['Variance Analysis', 'Performance Management']
        },
        integrations: ['Excel', 'Tableau', 'Power BI', 'QlikSense', 'Looker']
    },
    {
        id: 'FPA-DATA-001',
        legacyIds: ['DG', 'DA', 'DI'],
        name: 'Data Gatherer',
        fullName: 'Data Collection & Integration Agent',
        description: 'AI-powered collection and integration of financial data',
        capabilities: [
            'Automated data extraction and validation',
            'Multi-source data integration',
            'Data quality verification',
            'Historical trend analysis',
            'Real-time data synchronization'
        ],
        category: 'Plan to Perform',
        domain: 'FPA',
        status: 'active',
        usageLocations: {
            workflows: ['fpa-workflows', 'data-preparation'],
            platforms: ['Data Warehouses', 'ETL Tools'],
            activities: ['Data Collection', 'Data Preparation']
        }
    },
    {
        id: 'FPA-SCENARIO-001',
        legacyIds: ['SM', 'SC', 'SA'],
        name: 'Scenario Modeler',
        fullName: 'Scenario Planning & Modeling Agent',
        description: 'AI-powered scenario modeling and sensitivity analysis',
        capabilities: [
            'Automated scenario generation',
            'Monte Carlo simulation',
            'Sensitivity testing',
            'Outcome probability analysis',
            'What-if analysis',
            'Driver-based modeling'
        ],
        category: 'Plan to Perform',
        domain: 'FPA',
        status: 'active',
        usageLocations: {
            workflows: ['fpa-workflows', 'strategic-planning', 'scenario-analysis'],
            platforms: ['Anaplan', 'Oracle Hyperion'],
            activities: ['Scenario Planning', 'Strategic Analysis']
        }
    },
    {
        id: 'FPA-INSIGHT-001',
        legacyIds: ['IG', 'IR', 'insight-engine'],
        name: 'Insight Engine',
        fullName: 'Strategic Intelligence & Insights Agent',
        description: 'Advanced analytics AI for business insights',
        capabilities: [
            'Pattern recognition across datasets',
            'Strategic recommendation generation',
            'Performance benchmarking',
            'Market opportunity identification',
            'Competitive analysis automation',
            'Business intelligence synthesis',
            'Automated narrative generation'
        ],
        category: 'Plan to Perform',
        domain: 'FPA',
        status: 'active',
        confidence: 94,
        specialty: 'Strategic business insights and recommendation engine',
        usageLocations: {
            workflows: ['fpa-workflows', 'executive-reporting', 'strategic-planning'],
            platforms: ['BI Tools', 'Analytics Platforms'],
            activities: ['Business Intelligence', 'Executive Reporting']
        },
        integrations: ['Business intelligence tools', 'Market research platforms', 'CRM systems']
    },

    // ========== ORDER TO CASH AGENTS ==========
    {
        id: 'OTC-ORDER-001',
        legacyIds: ['OV'],
        name: 'Order Validator',
        fullName: 'Order Validation & Verification Agent',
        description: 'AI-powered order validation and verification',
        capabilities: [
            'Credit limit checking',
            'Inventory availability verification',
            'Pricing validation',
            'Terms verification',
            'Contract compliance'
        ],
        category: 'Order to Cash',
        domain: 'OTC',
        status: 'active',
        usageLocations: {
            workflows: ['order-to-cash', 'order-management'],
            platforms: ['ERP Systems', 'Order Management Systems'],
            activities: ['Order Processing', 'Credit Management']
        }
    },
    {
        id: 'OTC-CREDIT-001',
        legacyIds: ['CA'],
        name: 'Credit Analyzer',
        fullName: 'Credit Analysis & Risk Assessment Agent',
        description: 'AI-powered credit analysis and risk assessment',
        capabilities: [
            'Real-time credit scoring',
            'Payment history analysis',
            'Risk-based credit limits',
            'Early warning indicators',
            'Customer segmentation'
        ],
        category: 'Order to Cash',
        domain: 'OTC',
        status: 'active',
        duplicateOf: 'OTC-CREDIT-002', // Note: Duplicate CA id exists
        usageLocations: {
            workflows: ['order-to-cash', 'credit-management'],
            platforms: ['Credit Management Systems'],
            activities: ['Credit Analysis', 'Risk Assessment']
        }
    },
    {
        id: 'OTC-INVOICE-001',
        legacyIds: ['IG'],
        name: 'Invoice Generator',
        fullName: 'Invoice Generation & Distribution Agent',
        description: 'Automated invoice generation and distribution',
        capabilities: [
            'Template-based generation',
            'Multi-channel distribution',
            'Tax calculation',
            'Currency handling',
            'E-invoicing support'
        ],
        category: 'Order to Cash',
        domain: 'OTC',
        status: 'active',
        duplicateOf: 'RTR-INSIGHT-001', // Note: IG id collision
        usageLocations: {
            workflows: ['order-to-cash', 'billing'],
            platforms: ['Billing Systems', 'ERP'],
            activities: ['Invoice Generation', 'Billing']
        }
    },
    {
        id: 'OTC-COLLECT-001',
        legacyIds: ['CM'],
        name: 'Collections Manager',
        fullName: 'Collections Management & Optimization Agent',
        description: 'AI-powered collections optimization',
        capabilities: [
            'Predictive collections scoring',
            'Automated dunning',
            'Collection strategy optimization',
            'Customer segmentation',
            'Payment prediction'
        ],
        category: 'Order to Cash',
        domain: 'OTC',
        status: 'active',
        duplicateOf: 'RTR-CHECKLIST-001', // Note: CM id collision
        usageLocations: {
            workflows: ['order-to-cash', 'collections'],
            platforms: ['AR Systems', 'Collections Platforms'],
            activities: ['Collections', 'Dunning Management']
        }
    },
    {
        id: 'OTC-CASH-001',
        legacyIds: ['CR', 'cash-flow-prophet'],
        name: 'Cash Reconciler',
        fullName: 'Cash Application & Reconciliation Agent',
        description: 'Automated cash application and reconciliation',
        capabilities: [
            'ML-based payment matching',
            'Automated cash application',
            'Exception handling',
            'Remittance processing',
            'Daily cash position forecasting',
            'Working capital optimization'
        ],
        category: 'Order to Cash',
        domain: 'OTC',
        status: 'active',
        confidence: 89,
        specialty: 'Cash flow prediction and working capital optimization',
        usageLocations: {
            workflows: ['order-to-cash', 'cash-application'],
            platforms: ['AR Systems', 'Banking Platforms'],
            activities: ['Cash Application', 'Bank Reconciliation']
        },
        integrations: ['Treasury systems', 'Banking APIs', 'ERP systems']
    },

    // ========== COST ACCOUNTING AGENTS ==========
    {
        id: 'CST-CALC-001',
        legacyIds: ['CC'],
        name: 'Cost Calculator',
        fullName: 'Product Cost Calculation Agent',
        description: 'AI-powered product cost calculation',
        capabilities: [
            'Activity-based costing',
            'Standard cost maintenance',
            'Variance calculation',
            'Cost roll-up',
            'Overhead allocation'
        ],
        category: 'Product Costing',
        domain: 'CST',
        status: 'active',
        duplicateOf: 'RTR-CLOSE-001', // Note: CC id collision
        usageLocations: {
            workflows: ['cost-accounting', 'product-costing'],
            platforms: ['ERP Systems', 'Cost Management Systems'],
            activities: ['Cost Calculation', 'Standard Costing']
        }
    },
    {
        id: 'CST-PROFIT-001',
        legacyIds: ['PA'],
        name: 'Profitability Analyzer',
        fullName: 'Profitability Analysis Agent',
        description: 'AI-powered profitability analysis',
        capabilities: [
            'Product profitability analysis',
            'Customer profitability',
            'Channel analysis',
            'Margin optimization',
            'Contribution analysis'
        ],
        category: 'Product Costing',
        domain: 'CST',
        status: 'active',
        duplicateOf: 'FPA-PREDICT-001', // Note: PA id collision
        usageLocations: {
            workflows: ['cost-accounting', 'profitability-analysis'],
            platforms: ['Analytics Platforms'],
            activities: ['Profitability Analysis', 'Margin Analysis']
        }
    },
    {
        id: 'CST-OPTIMIZE-001',
        legacyIds: ['CO'],
        name: 'Cost Optimizer',
        fullName: 'Cost Optimization & Reduction Agent',
        description: 'AI-powered cost optimization recommendations',
        capabilities: [
            'Cost reduction opportunities',
            'Make vs buy analysis',
            'Sourcing optimization',
            'Process improvement suggestions',
            'Waste identification'
        ],
        category: 'Product Costing',
        domain: 'CST',
        status: 'active',
        duplicateOf: 'RTR-CLOSE-001', // Note: CO id collision
        usageLocations: {
            workflows: ['cost-accounting', 'cost-optimization'],
            platforms: ['Cost Management Systems'],
            activities: ['Cost Optimization', 'Process Improvement']
        }
    },

    // ========== CORPORATE FINANCE AGENTS ==========
    {
        id: 'CRP-CASH-001',
        legacyIds: ['CF'],
        name: 'Cash Flow Forecaster',
        fullName: 'Cash Flow Forecasting & Management Agent',
        description: 'AI-powered cash flow forecasting',
        capabilities: [
            'ML-based cash flow prediction',
            'Scenario modeling',
            'Working capital optimization',
            'Liquidity management',
            'Investment timing'
        ],
        category: 'Corporate Finance',
        domain: 'CRP',
        status: 'active',
        usageLocations: {
            workflows: ['corporate-finance', 'treasury-management'],
            platforms: ['Treasury Systems'],
            activities: ['Cash Forecasting', 'Liquidity Management']
        }
    },
    {
        id: 'CRP-RISK-001',
        legacyIds: ['RA', 'risk-sentinel', 'RS'],
        name: 'Risk Assessor',
        fullName: 'Financial Risk Assessment & Monitoring Agent',
        description: 'AI-powered financial risk assessment and monitoring',
        capabilities: [
            'Market risk analysis',
            'Credit risk modeling',
            'Operational risk assessment',
            'Stress testing',
            'Real-time risk scoring',
            'Regulatory compliance tracking'
        ],
        category: 'Corporate Finance',
        domain: 'CRP',
        status: 'active',
        confidence: 85,
        specialty: 'Proactive financial risk identification and mitigation',
        usageLocations: {
            workflows: ['corporate-finance', 'risk-management'],
            platforms: ['Risk Management Systems'],
            activities: ['Risk Assessment', 'Compliance Monitoring']
        },
        integrations: ['Credit bureaus', 'Market data feeds', 'Compliance systems']
    },
    {
        id: 'CRP-VALUE-001',
        legacyIds: ['VA'],
        name: 'Valuation Analyst',
        fullName: 'Business Valuation & Analysis Agent',
        description: 'AI-powered business valuation',
        capabilities: [
            'DCF modeling',
            'Comparable analysis',
            'Market multiples',
            'Sensitivity analysis',
            'Deal structuring support'
        ],
        category: 'Corporate Finance',
        domain: 'CRP',
        status: 'active',
        duplicateOf: 'RTR-VARIANCE-001', // Note: VA id collision
        usageLocations: {
            workflows: ['corporate-finance', 'valuation'],
            platforms: ['Financial Modeling Tools'],
            activities: ['Business Valuation', 'M&A Analysis']
        }
    },

    // ========== INVESTOR RELATIONS AGENTS ==========
    {
        id: 'INV-EARN-001',
        legacyIds: ['EC', 'ERC'],
        name: 'Earnings Compiler',
        fullName: 'Earnings Report Compilation Agent',
        description: 'AI-powered earnings report compilation',
        capabilities: [
            'Automated report generation',
            'Key metrics extraction',
            'YoY/QoQ analysis',
            'Guidance tracking',
            'Earnings release creation'
        ],
        category: 'Investor Relations',
        domain: 'INV',
        status: 'active',
        usageLocations: {
            workflows: ['investor-relations', 'earnings-reporting'],
            platforms: ['IR Platforms'],
            activities: ['Earnings Reporting', 'Investor Communications']
        }
    },
    {
        id: 'INV-SCRIPT-001',
        legacyIds: ['SG'],
        name: 'Script Generator',
        fullName: 'Earnings Call Script Generation Agent',
        description: 'AI-powered earnings call script generation',
        capabilities: [
            'Natural language generation',
            'Key talking points',
            'Q&A preparation',
            'Tone optimization',
            'Executive briefing'
        ],
        category: 'Investor Relations',
        domain: 'INV',
        status: 'active',
        duplicateOf: 'RTR-REPORT-001', // Note: SG id collision
        usageLocations: {
            workflows: ['investor-relations', 'earnings-calls'],
            platforms: ['IR Platforms'],
            activities: ['Earnings Calls', 'Investor Presentations']
        }
    },

    // ========== GENERAL/CROSS-FUNCTIONAL AGENTS ==========
    {
        id: 'GEN-AUTO-001',
        legacyIds: ['automation-orchestrator', 'AO'],
        name: 'Automation Orchestrator',
        fullName: 'Process Automation & Orchestration Agent',
        description: 'Intelligent automation platform for financial processes',
        capabilities: [
            'Process automation design',
            'Workflow optimization',
            'Exception handling',
            'Quality control automation',
            'Approval routing intelligence',
            'Performance monitoring'
        ],
        category: 'General',
        domain: 'GEN',
        status: 'active',
        confidence: 98,
        specialty: 'Financial process automation and optimization',
        usageLocations: {
            workflows: ['multiple', 'process-automation'],
            platforms: ['RPA Platforms', 'Workflow Tools'],
            activities: ['Process Automation', 'Workflow Management']
        },
        integrations: ['RPA platforms', 'ERP systems', 'Document management']
    }
];

// Helper function to get all unique legacy IDs
export function getAllLegacyIds(): string[] {
    const legacyIds = new Set<string>();
    MASTER_AGENT_CATALOG.forEach(agent => {
        agent.legacyIds.forEach(id => legacyIds.add(id));
    });
    return Array.from(legacyIds).sort();
}

// Helper function to find agent by legacy ID
export function findAgentByLegacyId(legacyId: string): MasterAgent | undefined {
    return MASTER_AGENT_CATALOG.find(agent =>
        agent.legacyIds.includes(legacyId)
    );
}

// Helper function to get agents by domain
export function getAgentsByDomain(domain: keyof typeof DOMAINS): MasterAgent[] {
    return MASTER_AGENT_CATALOG.filter(agent => agent.domain === domain);
}

// Helper function to get all duplicate agents
export function getDuplicateAgents(): MasterAgent[] {
    return MASTER_AGENT_CATALOG.filter(agent => agent.duplicateOf);
}

// Helper function to get agent usage statistics
export function getAgentUsageStats() {
    const stats = {
        totalAgents: MASTER_AGENT_CATALOG.length,
        byDomain: {} as Record<string, number>,
        byStatus: {} as Record<string, number>,
        duplicates: getDuplicateAgents().length,
        uniqueLegacyIds: getAllLegacyIds().length
    };

    MASTER_AGENT_CATALOG.forEach(agent => {
        // Count by domain
        stats.byDomain[agent.domain] = (stats.byDomain[agent.domain] || 0) + 1;

        // Count by status
        stats.byStatus[agent.status] = (stats.byStatus[agent.status] || 0) + 1;
    });

    return stats;
} 