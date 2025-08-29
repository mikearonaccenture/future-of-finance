// AI Agents Reference File
// This file contains all AI agents designed across the Intelligent Finance Transformation platform

export const AIAgentsReference = {
    // AI Refinery Agents (Internal/Custom Built)
    aiRefineryAgents: {
        // Record to Report
        recordToReport: [
            {
                id: 'CC',
                name: 'Close Calendar Agent',
                fullName: 'Close Calendar Agent (CC)',
                description: 'AI-powered close calendar with intelligent task assignment',
                capabilities: [
                    'Automated task assignment based on workload and skills',
                    'Real-time progress tracking and alerts',
                    'Dynamic schedule optimization',
                    'Dependency management'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'TB',
                name: 'Trial Balance Analyzer',
                fullName: 'Trial Balance Analyzer (TB)',
                description: 'AI-powered trial balance anomaly detection',
                capabilities: [
                    'ML-based anomaly detection with 95% accuracy',
                    'Pattern recognition for unusual transactions',
                    'Automated root cause analysis',
                    'Predictive variance forecasting'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'AI',
                name: 'Accrual Identifier',
                fullName: 'Accrual Identifier (AI)',
                description: 'AI-powered accrual identification and calculation',
                capabilities: [
                    'Pattern-based accrual identification',
                    'Automated accrual calculations',
                    'Historical trend analysis',
                    'Exception flagging'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'CM',
                name: 'Close Checklist Manager',
                fullName: 'Close Checklist Manager (CM)',
                description: 'Automated close checklist management and tracking',
                capabilities: [
                    'Real-time progress tracking',
                    'Automated reminders and escalations',
                    'Dependency monitoring',
                    'Performance analytics'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'JE',
                name: 'Journal Entry Creator',
                fullName: 'Journal Entry Creator (JE)',
                description: 'AI-powered journal entry creation and validation',
                capabilities: [
                    'Automated entry generation with 98% accuracy',
                    'Built-in validation rules',
                    'Duplicate detection',
                    'Auto-reversal handling'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'AV',
                name: 'Approval Validator',
                fullName: 'Approval Validator (AV)',
                description: 'Intelligent journal entry approval and routing',
                capabilities: [
                    'Risk-based approval routing',
                    'Automated validation checks',
                    'Policy compliance verification',
                    'Audit trail creation'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'BR',
                name: 'Balance Reconciler',
                fullName: 'Balance Reconciler (BR)',
                description: 'AI-powered balance sheet reconciliation',
                capabilities: [
                    'Automated matching with 99% accuracy',
                    'Pattern-based exception identification',
                    'Multi-source data reconciliation',
                    'Variance explanation generation'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'IR',
                name: 'Intercompany Reconciler',
                fullName: 'Intercompany Reconciler (IR)',
                description: 'Automated intercompany reconciliation and elimination',
                capabilities: [
                    'Multi-entity matching and netting',
                    'Automated elimination entries',
                    'Dispute identification and routing',
                    'Currency conversion handling'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'VA',
                name: 'Variance Analyzer',
                fullName: 'Variance Analyzer (VA)',
                description: 'AI-powered variance analysis and insights',
                capabilities: [
                    'Automated root cause identification',
                    'Predictive variance forecasting',
                    'Natural language explanations',
                    'Trend analysis and alerting'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'RG',
                name: 'Report Generator',
                fullName: 'Report Generator (RG)',
                description: 'Automated financial statement generation',
                capabilities: [
                    'Template-based report creation',
                    'Dynamic data population',
                    'Multi-format output generation',
                    'Version control and tracking'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'IG',
                name: 'Insight Generator',
                fullName: 'Insight Generator (IG)',
                description: 'AI-powered financial insights and commentary',
                capabilities: [
                    'Automated narrative generation',
                    'Key metric identification',
                    'Trend analysis and forecasting',
                    'Executive summary creation'
                ],
                category: 'Record to Report',
                status: 'ready'
            },
            {
                id: 'FP',
                name: 'Close Finalizer',
                fullName: 'Close Finalizer (FP)',
                description: 'Automated close package finalization',
                capabilities: [
                    'Completeness verification',
                    'Automated sign-off routing',
                    'Archive and retention management',
                    'Regulatory compliance checking'
                ],
                category: 'Record to Report',
                status: 'ready'
            }
        ],

        // Procure to Pay
        procureToPay: [
            {
                id: 'IC',
                name: 'Invoice Capture Agent',
                fullName: 'Invoice Capture Agent (IC)',
                description: 'AI-powered invoice capture from multiple sources',
                capabilities: [
                    'OCR and ML-based data extraction',
                    'Multi-format invoice processing',
                    '95% automation rate',
                    'Duplicate detection'
                ],
                category: 'Procure to Pay',
                status: 'ready'
            },
            {
                id: 'DV',
                name: 'Data Validation Agent',
                fullName: 'Data Validation Agent (DV)',
                description: 'AI-powered validation of invoice data and coding',
                capabilities: [
                    'ML-based validation with 98% accuracy',
                    'Automated GL coding',
                    'Vendor master matching',
                    'Tax compliance verification'
                ],
                category: 'Procure to Pay',
                status: 'ready'
            },
            {
                id: 'EH',
                name: 'Exception Handler',
                fullName: 'Exception Handler (EH)',
                description: 'AI-powered handling of invoice exceptions',
                capabilities: [
                    'Intelligent routing and resolution',
                    'Pattern-based exception categorization',
                    'Automated resolution suggestions',
                    'Escalation management'
                ],
                category: 'Procure to Pay',
                status: 'ready'
            },
            {
                id: 'AR',
                name: 'Approval Router',
                fullName: 'Approval Router (AR)',
                description: 'AI-powered approval routing based on rules and history',
                capabilities: [
                    'Intelligent routing with 99% accuracy',
                    'Dynamic approval matrix',
                    'Workload balancing',
                    'Out-of-office handling'
                ],
                category: 'Procure to Pay',
                status: 'ready'
            },
            {
                id: 'DM',
                name: 'Decision Maker',
                fullName: 'Decision Maker (DM)',
                description: 'AI-powered approval decisions for standard invoices',
                capabilities: [
                    'ML-based decision making',
                    'Policy compliance verification',
                    'Risk assessment',
                    'Automated approval for low-risk items'
                ],
                category: 'Procure to Pay',
                status: 'ready'
            },
            {
                id: 'EE',
                name: 'Exception Escalator',
                fullName: 'Exception Escalator (EE)',
                description: 'Intelligent escalation of exceptions to humans',
                capabilities: [
                    'Smart escalation with context',
                    'Priority-based routing',
                    'SLA monitoring',
                    'Resolution tracking'
                ],
                category: 'Procure to Pay',
                status: 'in-development'
            },
            {
                id: 'PO',
                name: 'Payment Optimizer',
                fullName: 'Payment Optimizer (PO)',
                description: 'AI-powered payment timing optimization',
                capabilities: [
                    'Cash flow optimization algorithms',
                    'Early payment discount analysis',
                    'Working capital optimization',
                    'Payment scheduling'
                ],
                category: 'Procure to Pay',
                status: 'ready'
            },
            {
                id: 'FD',
                name: 'Fraud Detector',
                fullName: 'Fraud Detector (FD)',
                description: 'AI-powered fraud detection and prevention',
                capabilities: [
                    'ML-based fraud detection',
                    'Real-time anomaly detection',
                    'Vendor risk scoring',
                    'Pattern recognition'
                ],
                category: 'Procure to Pay',
                status: 'ready'
            },
            {
                id: 'PE',
                name: 'Payment Executor',
                fullName: 'Payment Executor (PE)',
                description: 'Automated payment execution and reconciliation',
                capabilities: [
                    'Straight-through processing',
                    'Multi-channel payment support',
                    'Automated reconciliation',
                    'Payment confirmation tracking'
                ],
                category: 'Procure to Pay',
                status: 'ready'
            }
        ],

        // Plan to Perform / FP&A
        planToPerform: [
            {
                id: 'DG',
                name: 'Data Gatherer',
                fullName: 'Data Gatherer (DG)',
                description: 'AI-powered collection of historical and forecast data',
                capabilities: [
                    'Automated data extraction and validation',
                    'Multi-source data integration',
                    'Data quality verification',
                    'Historical trend analysis'
                ],
                category: 'Plan to Perform',
                status: 'ready'
            },
            {
                id: 'PA',
                name: 'Predictive Analyst',
                fullName: 'Predictive Analyst (PA)',
                description: 'AI-powered predictive modeling for budget assumptions',
                capabilities: [
                    'ML-based forecasting models',
                    'Scenario generation',
                    'Sensitivity analysis',
                    'Confidence interval calculation'
                ],
                category: 'Plan to Perform',
                status: 'ready'
            },
            {
                id: 'AM',
                name: 'Assumption Manager',
                fullName: 'Assumption Manager (AM)',
                description: 'AI-powered assumption documentation and validation',
                capabilities: [
                    'Automated assumption tracking',
                    'Dependency mapping',
                    'Impact analysis',
                    'Version control'
                ],
                category: 'Plan to Perform',
                status: 'in-development'
            },
            {
                id: 'CA',
                name: 'Consolidation Agent',
                fullName: 'Consolidation Agent (CA)',
                description: 'AI-powered budget consolidation and validation',
                capabilities: [
                    'Automated consolidation with validation',
                    'Multi-entity aggregation',
                    'Currency conversion',
                    'Elimination handling'
                ],
                category: 'Plan to Perform',
                status: 'ready'
            },
            {
                id: 'VA',
                name: 'Variance Analyzer',
                fullName: 'Variance Analyzer (VA)',
                description: 'AI-powered variance analysis and root cause identification',
                capabilities: [
                    'ML-based variance analysis',
                    'Root cause identification',
                    'Driver-based analytics',
                    'Automated commentary'
                ],
                category: 'Plan to Perform',
                status: 'ready'
            },
            {
                id: 'OA',
                name: 'Optimization Agent',
                fullName: 'Optimization Agent (OA)',
                description: 'AI-powered budget optimization and scenario modeling',
                capabilities: [
                    'Optimization algorithms',
                    'Constraint-based modeling',
                    'What-if analysis',
                    'Resource allocation'
                ],
                category: 'Plan to Perform',
                status: 'in-development'
            },
            {
                id: 'RS',
                name: 'Review Support Agent',
                fullName: 'Review Support Agent (RS)',
                description: 'AI-powered review insights and recommendations',
                capabilities: [
                    'Automated insights generation',
                    'Comparison analysis',
                    'Risk identification',
                    'Recommendation engine'
                ],
                category: 'Plan to Perform',
                status: 'ready'
            },
            {
                id: 'SM',
                name: 'Scenario Modeler',
                fullName: 'Scenario Modeler (SM)',
                description: 'AI-powered scenario modeling and sensitivity analysis',
                capabilities: [
                    'Automated scenario generation',
                    'Monte Carlo simulation',
                    'Sensitivity testing',
                    'Outcome probability analysis'
                ],
                category: 'Plan to Perform',
                status: 'ready'
            },
            {
                id: 'AM',
                name: 'Approval Manager',
                fullName: 'Approval Manager (AM)',
                description: 'Streamlined approval workflow with AI support',
                capabilities: [
                    'Intelligent workflow management',
                    'Automated notifications',
                    'Progress tracking',
                    'Bottleneck identification'
                ],
                category: 'Plan to Perform',
                status: 'ready'
            }
        ],

        // Order to Cash
        orderToCash: [
            {
                id: 'OV',
                name: 'Order Validator',
                fullName: 'Order Validator (OV)',
                description: 'AI-powered order validation and verification',
                capabilities: [
                    'Credit limit checking',
                    'Inventory availability verification',
                    'Pricing validation',
                    'Terms verification'
                ],
                category: 'Order to Cash',
                status: 'ready'
            },
            {
                id: 'CA',
                name: 'Credit Analyzer',
                fullName: 'Credit Analyzer (CA)',
                description: 'AI-powered credit analysis and risk assessment',
                capabilities: [
                    'Real-time credit scoring',
                    'Payment history analysis',
                    'Risk-based credit limits',
                    'Early warning indicators'
                ],
                category: 'Order to Cash',
                status: 'ready'
            },
            {
                id: 'IG',
                name: 'Invoice Generator',
                fullName: 'Invoice Generator (IG)',
                description: 'Automated invoice generation and distribution',
                capabilities: [
                    'Template-based generation',
                    'Multi-channel distribution',
                    'Tax calculation',
                    'Currency handling'
                ],
                category: 'Order to Cash',
                status: 'ready'
            },
            {
                id: 'CM',
                name: 'Collections Manager',
                fullName: 'Collections Manager (CM)',
                description: 'AI-powered collections optimization',
                capabilities: [
                    'Predictive collections scoring',
                    'Automated dunning',
                    'Collection strategy optimization',
                    'Customer segmentation'
                ],
                category: 'Order to Cash',
                status: 'ready'
            },
            {
                id: 'CR',
                name: 'Cash Reconciler',
                fullName: 'Cash Reconciler (CR)',
                description: 'Automated cash application and reconciliation',
                capabilities: [
                    'ML-based payment matching',
                    'Automated cash application',
                    'Exception handling',
                    'Remittance processing'
                ],
                category: 'Order to Cash',
                status: 'ready'
            }
        ],

        // Product Costing
        productCosting: [
            {
                id: 'CC',
                name: 'Cost Calculator',
                fullName: 'Cost Calculator (CC)',
                description: 'AI-powered product cost calculation',
                capabilities: [
                    'Activity-based costing',
                    'Standard cost maintenance',
                    'Variance calculation',
                    'Cost roll-up'
                ],
                category: 'Product Costing',
                status: 'ready'
            },
            {
                id: 'PA',
                name: 'Profitability Analyzer',
                fullName: 'Profitability Analyzer (PA)',
                description: 'AI-powered profitability analysis',
                capabilities: [
                    'Product profitability analysis',
                    'Customer profitability',
                    'Channel analysis',
                    'Margin optimization'
                ],
                category: 'Product Costing',
                status: 'ready'
            },
            {
                id: 'CO',
                name: 'Cost Optimizer',
                fullName: 'Cost Optimizer (CO)',
                description: 'AI-powered cost optimization recommendations',
                capabilities: [
                    'Cost reduction opportunities',
                    'Make vs buy analysis',
                    'Sourcing optimization',
                    'Process improvement suggestions'
                ],
                category: 'Product Costing',
                status: 'in-development'
            }
        ],

        // Corporate Finance
        corporateFinance: [
            {
                id: 'CF',
                name: 'Cash Flow Forecaster',
                fullName: 'Cash Flow Forecaster (CF)',
                description: 'AI-powered cash flow forecasting',
                capabilities: [
                    'ML-based cash flow prediction',
                    'Scenario modeling',
                    'Working capital optimization',
                    'Liquidity management'
                ],
                category: 'Corporate Finance',
                status: 'ready'
            },
            {
                id: 'RA',
                name: 'Risk Assessor',
                fullName: 'Risk Assessor (RA)',
                description: 'AI-powered financial risk assessment',
                capabilities: [
                    'Market risk analysis',
                    'Credit risk modeling',
                    'Operational risk assessment',
                    'Stress testing'
                ],
                category: 'Corporate Finance',
                status: 'ready'
            },
            {
                id: 'VA',
                name: 'Valuation Analyst',
                fullName: 'Valuation Analyst (VA)',
                description: 'AI-powered business valuation',
                capabilities: [
                    'DCF modeling',
                    'Comparable analysis',
                    'Market multiples',
                    'Sensitivity analysis'
                ],
                category: 'Corporate Finance',
                status: 'in-development'
            }
        ],

        // Investor Relations
        investorRelations: [
            {
                id: 'EC',
                name: 'Earnings Compiler',
                fullName: 'Earnings Compiler (EC)',
                description: 'AI-powered earnings report compilation',
                capabilities: [
                    'Automated report generation',
                    'Key metrics extraction',
                    'YoY/QoQ analysis',
                    'Guidance tracking'
                ],
                category: 'Investor Relations',
                status: 'ready'
            },
            {
                id: 'SG',
                name: 'Script Generator',
                fullName: 'Script Generator (SG)',
                description: 'AI-powered earnings call script generation',
                capabilities: [
                    'Natural language generation',
                    'Key talking points',
                    'Q&A preparation',
                    'Tone optimization'
                ],
                category: 'Investor Relations',
                status: 'in-development'
            }
        ]
    },

    // External Platform Agents
    externalPlatformAgents: {
        blackLine: {
            vendor: 'BlackLine',
            category: 'Financial Close Management',
            agents: [
                {
                    name: 'Close Calendar Agent',
                    description: 'Automated close task management and scheduling',
                    capabilities: ['Task automation', 'Progress tracking', 'SLA monitoring']
                },
                {
                    name: 'Reconciliation Agent',
                    description: 'Automated account reconciliation and matching',
                    capabilities: ['Auto-matching', 'Exception handling', 'Certification workflow']
                },
                {
                    name: 'Journal Entry Agent',
                    description: 'Automated journal entry creation and posting',
                    capabilities: ['Template-based entries', 'Approval routing', 'Audit trail']
                },
                {
                    name: 'Variance Analysis Agent',
                    description: 'Automated variance analysis and reporting',
                    capabilities: ['Flux analysis', 'Threshold monitoring', 'Commentary generation']
                }
            ]
        },

        sapS4Hana: {
            vendor: 'SAP S/4HANA',
            category: 'ERP Platform',
            agents: [
                {
                    name: 'Financial Reporting Agent',
                    description: 'Real-time financial reporting and analytics',
                    capabilities: ['Real-time reporting', 'Drill-down analysis', 'KPI monitoring']
                },
                {
                    name: 'Close Management Agent',
                    description: 'Integrated close process management',
                    capabilities: ['Close orchestration', 'Task dependencies', 'Status tracking']
                },
                {
                    name: 'Intelligent Accruals Agent',
                    description: 'ML-based accrual calculation and posting',
                    capabilities: ['Predictive accruals', 'Pattern recognition', 'Auto-posting']
                },
                {
                    name: 'Cash Management Agent',
                    description: 'Intelligent cash position and forecast management',
                    capabilities: ['Cash visibility', 'Forecast accuracy', 'Liquidity planning']
                }
            ]
        },

        coupa: {
            vendor: 'Coupa',
            category: 'Procure to Pay',
            agents: [
                {
                    name: 'Invoice Processing Agent',
                    description: 'AI-powered invoice capture and processing',
                    capabilities: ['Smart capture', 'Auto-coding', 'Duplicate detection']
                },
                {
                    name: 'Approval Workflow Agent',
                    description: 'Intelligent approval routing and escalation',
                    capabilities: ['Dynamic routing', 'Mobile approvals', 'Smart escalation']
                },
                {
                    name: 'Spend Analysis Agent',
                    description: 'AI-driven spend analytics and insights',
                    capabilities: ['Spend categorization', 'Savings opportunities', 'Compliance monitoring']
                },
                {
                    name: 'Supplier Risk Agent',
                    description: 'Automated supplier risk assessment',
                    capabilities: ['Risk scoring', 'Performance tracking', 'Alert management']
                }
            ]
        },

        sapAriba: {
            vendor: 'SAP Ariba',
            category: 'Procurement',
            agents: [
                {
                    name: 'Invoice Management Agent',
                    description: 'End-to-end invoice automation',
                    capabilities: ['Invoice matching', 'Exception resolution', 'Payment processing']
                },
                {
                    name: 'Payment Processing Agent',
                    description: 'Automated payment optimization',
                    capabilities: ['Payment scheduling', 'Discount capture', 'Cash flow optimization']
                },
                {
                    name: 'Contract Compliance Agent',
                    description: 'Automated contract compliance monitoring',
                    capabilities: ['Terms verification', 'Price compliance', 'SLA tracking']
                }
            ]
        },

        workday: {
            vendor: 'Workday',
            category: 'HR & Finance',
            agents: [
                {
                    name: 'Approval Workflow Agent',
                    description: 'Unified approval management across HR and Finance',
                    capabilities: ['Cross-functional approvals', 'Policy enforcement', 'Audit compliance']
                },
                {
                    name: 'Expense Management Agent',
                    description: 'AI-powered expense report processing',
                    capabilities: ['Receipt scanning', 'Policy compliance', 'Mileage tracking']
                },
                {
                    name: 'Financial Planning Agent',
                    description: 'Integrated planning and forecasting',
                    capabilities: ['Driver-based planning', 'Workforce planning', 'Scenario modeling']
                }
            ]
        },

        anaplan: {
            vendor: 'Anaplan',
            category: 'Planning & Performance',
            agents: [
                {
                    name: 'Planning Agent',
                    description: 'Connected planning across the enterprise',
                    capabilities: ['Collaborative planning', 'Real-time updates', 'Version management']
                },
                {
                    name: 'Forecasting Agent',
                    description: 'AI-enhanced forecasting and predictive analytics',
                    capabilities: ['ML forecasting', 'Demand sensing', 'Accuracy tracking']
                },
                {
                    name: 'Scenario Planning Agent',
                    description: 'Advanced scenario modeling and analysis',
                    capabilities: ['What-if analysis', 'Monte Carlo simulation', 'Sensitivity testing']
                }
            ]
        },

        oracleHyperion: {
            vendor: 'Oracle Hyperion',
            category: 'EPM',
            agents: [
                {
                    name: 'Budget Planning Agent',
                    description: 'Comprehensive budget planning and control',
                    capabilities: ['Budget templates', 'Approval workflows', 'Version control']
                },
                {
                    name: 'Consolidation Agent',
                    description: 'Automated financial consolidation',
                    capabilities: ['Multi-entity consolidation', 'Currency translation', 'Elimination entries']
                },
                {
                    name: 'Financial Reporting Agent',
                    description: 'Automated financial and management reporting',
                    capabilities: ['Report automation', 'XBRL support', 'Narrative reporting']
                }
            ]
        },

        adaptiveInsights: {
            vendor: 'Adaptive Insights',
            category: 'Planning',
            agents: [
                {
                    name: 'Consolidation Agent',
                    description: 'Cloud-based consolidation and reporting',
                    capabilities: ['Real-time consolidation', 'Multi-currency', 'Audit trail']
                },
                {
                    name: 'Scenario Planning Agent',
                    description: 'Dynamic scenario planning and modeling',
                    capabilities: ['Rolling forecasts', 'Driver-based models', 'Collaboration tools']
                }
            ]
        },

        tableau: {
            vendor: 'Tableau',
            category: 'Analytics',
            agents: [
                {
                    name: 'Visualization Agent',
                    description: 'AI-powered data visualization',
                    capabilities: ['Auto-visualization', 'Natural language queries', 'Mobile dashboards']
                },
                {
                    name: 'Insights Agent',
                    description: 'Automated insight discovery',
                    capabilities: ['Anomaly detection', 'Trend identification', 'Predictive insights']
                }
            ]
        },

        databricks: {
            vendor: 'Databricks',
            category: 'Data & AI Platform',
            agents: [
                {
                    name: 'Data Processing Agent',
                    description: 'Scalable data processing and transformation',
                    capabilities: ['ETL automation', 'Data quality', 'Real-time processing']
                },
                {
                    name: 'ML Pipeline Agent',
                    description: 'Automated machine learning pipelines',
                    capabilities: ['AutoML', 'Model deployment', 'Feature engineering']
                },
                {
                    name: 'Anomaly Detection Agent',
                    description: 'Real-time anomaly detection in financial data',
                    capabilities: ['Pattern recognition', 'Fraud detection', 'Alert generation']
                }
            ]
        },

        oracle: {
            vendor: 'Oracle',
            category: 'ERP & Database',
            agents: [
                {
                    name: 'Financial Close Agent',
                    description: 'Automated period-end close processes',
                    capabilities: ['Close automation', 'Subledger reconciliation', 'Journal processing']
                },
                {
                    name: 'Revenue Recognition Agent',
                    description: 'ASC 606 compliant revenue automation',
                    capabilities: ['Contract analysis', 'Performance obligations', 'Revenue scheduling']
                },
                {
                    name: 'Tax Compliance Agent',
                    description: 'Automated tax calculation and reporting',
                    capabilities: ['Tax determination', 'E-invoicing', 'Compliance reporting']
                }
            ]
        }
    },

    // Agent Status Summary
    statusSummary: {
        ready: {
            count: 45,
            description: 'Agents that are built and ready for deployment'
        },
        inDevelopment: {
            count: 6,
            description: 'Agents currently under development'
        },
        planned: {
            count: 12,
            description: 'Agents planned for future development'
        }
    },

    // Agent Categories
    categories: [
        'Record to Report',
        'Procure to Pay',
        'Order to Cash',
        'Plan to Perform',
        'Product Costing',
        'Corporate Finance',
        'Investor Relations'
    ],

    // Value Metrics
    valueMetrics: {
        automationRate: '85-95%',
        accuracyImprovement: '95-99%',
        timeReduction: '70-90%',
        costSavings: '$50M annually',
        roiPeriod: '12-18 months'
    }
}

// Export individual agent lists for easy access
export const allAIRefineryAgents = [
    ...AIAgentsReference.aiRefineryAgents.recordToReport,
    ...AIAgentsReference.aiRefineryAgents.procureToPay,
    ...AIAgentsReference.aiRefineryAgents.planToPerform,
    ...AIAgentsReference.aiRefineryAgents.orderToCash,
    ...AIAgentsReference.aiRefineryAgents.productCosting,
    ...AIAgentsReference.aiRefineryAgents.corporateFinance,
    ...AIAgentsReference.aiRefineryAgents.investorRelations
]

export const readyAgents = allAIRefineryAgents.filter(agent => agent.status === 'ready')
export const inDevelopmentAgents = allAIRefineryAgents.filter(agent => agent.status === 'in-development')

// Helper function to get agents by category
export function getAgentsByCategory(category: string) {
    return allAIRefineryAgents.filter(agent => agent.category === category)
}

// Helper function to get external agents by vendor
export function getExternalAgentsByVendor(vendor: string) {
    const vendorKey = Object.keys(AIAgentsReference.externalPlatformAgents).find(
        key => AIAgentsReference.externalPlatformAgents[key as keyof typeof AIAgentsReference.externalPlatformAgents].vendor === vendor
    )

    if (vendorKey) {
        return AIAgentsReference.externalPlatformAgents[vendorKey as keyof typeof AIAgentsReference.externalPlatformAgents].agents
    }

    return []
} 