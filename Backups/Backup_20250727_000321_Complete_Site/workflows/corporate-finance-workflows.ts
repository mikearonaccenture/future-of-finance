// Corporate Finance Workflows

import { SubActivity } from '../finance-workflows-overview';

export const corporateFinanceWorkflows: SubActivity[] = [
    {
        name: 'M&A Support',
        description: 'Mergers and acquisitions evaluation, due diligence, and integration planning',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Target Identification and Screening',
                currentState: {
                    activities: ['Market research', 'Target company analysis', 'Strategic fit assessment'],
                    timeRequired: '2-3 weeks',
                    painPoints: ['Manual data gathering', 'Limited market intelligence', 'Time-intensive screening']
                },
                futureState: {
                    activities: ['AI-powered target scanning', 'Automated strategic fit scoring', 'Real-time market intelligence'],
                    aiAgents: ['MAS', 'SFS', 'MIS', 'BI'],
                    humanCheckpoints: ['Strategic alignment approval', 'Target selection decision'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Financial Due Diligence',
                currentState: {
                    activities: ['Financial statement analysis', 'Quality of earnings assessment', 'Working capital analysis'],
                    timeRequired: '3-4 weeks',
                    painPoints: ['Manual data room review', 'Complex spreadsheet models', 'Limited pattern recognition']
                },
                futureState: {
                    activities: ['AI document analysis', 'Automated QoE calculations', 'Pattern recognition for red flags'],
                    aiAgents: ['DDA', 'QEA', 'RFA', 'FMA'],
                    humanCheckpoints: ['Due diligence findings review', 'Risk assessment approval'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Valuation Modeling',
                currentState: {
                    activities: ['DCF modeling', 'Comparable company analysis', 'Precedent transaction analysis'],
                    timeRequired: '1-2 weeks',
                    painPoints: ['Complex Excel models', 'Manual comp selection', 'Static sensitivity analysis']
                },
                futureState: {
                    activities: ['AI-powered valuation models', 'Automated comp identification', 'Dynamic scenario analysis'],
                    aiAgents: ['VMA', 'CCA', 'PTA', 'SVM'],
                    humanCheckpoints: ['Valuation methodology approval', 'Final valuation range approval'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Deal Structuring and Negotiation Support',
                currentState: {
                    activities: ['Structure modeling', 'Term sheet preparation', 'Negotiation strategy development'],
                    timeRequired: '2-3 weeks',
                    painPoints: ['Manual structure optimization', 'Limited scenario planning', 'Static models']
                },
                futureState: {
                    activities: ['AI structure optimization', 'Dynamic deal modeling', 'Negotiation simulation'],
                    aiAgents: ['DSO', 'TSG', 'NSA', 'DMS'],
                    humanCheckpoints: ['Deal structure approval', 'Final terms approval'],
                    timeReduction: '65% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            { agentId: 'MAS', frequency: 1 },
            { agentId: 'SFS', frequency: 1 },
            { agentId: 'MIS', frequency: 1 },
            { agentId: 'BI', frequency: 1 },
            { agentId: 'DDA', frequency: 1 },
            { agentId: 'QEA', frequency: 1 },
            { agentId: 'RFA', frequency: 1 },
            { agentId: 'FMA', frequency: 1 },
            { agentId: 'VMA', frequency: 1 },
            { agentId: 'CCA', frequency: 1 },
            { agentId: 'PTA', frequency: 1 },
            { agentId: 'SVM', frequency: 1 },
            { agentId: 'DSO', frequency: 1 },
            { agentId: 'TSG', frequency: 1 },
            { agentId: 'NSA', frequency: 1 },
            { agentId: 'DMS', frequency: 1 }
        ],
        humanCheckpointsCount: 8,
        estimatedTimeSavings: '72% overall reduction'
    },
    {
        name: 'Capital Allocation',
        description: 'Strategic capital deployment decisions and portfolio optimization',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Capital Needs Assessment',
                currentState: {
                    activities: ['Business unit capital requests review', 'Strategic initiative evaluation', 'Capital availability analysis'],
                    timeRequired: '1-2 weeks',
                    painPoints: ['Manual consolidation', 'Inconsistent evaluation criteria', 'Limited optimization']
                },
                futureState: {
                    activities: ['AI capital request analysis', 'Automated scoring models', 'Real-time capital tracking'],
                    aiAgents: ['CNA', 'PES', 'CAT'],
                    humanCheckpoints: ['Capital priority approval', 'Strategic alignment validation'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Return Analysis and Optimization',
                currentState: {
                    activities: ['ROI calculations', 'NPV analysis', 'Portfolio optimization'],
                    timeRequired: '1 week',
                    painPoints: ['Static models', 'Limited scenario analysis', 'Manual optimization']
                },
                futureState: {
                    activities: ['AI-powered ROI modeling', 'Dynamic NPV calculations', 'ML portfolio optimization'],
                    aiAgents: ['ROC', 'NPM', 'POA', 'RAO'],
                    humanCheckpoints: ['Return threshold approval', 'Portfolio mix approval'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Risk-Adjusted Allocation',
                currentState: {
                    activities: ['Risk assessment', 'Risk-return trade-off analysis', 'Allocation recommendations'],
                    timeRequired: '1 week',
                    painPoints: ['Limited risk modeling', 'Static analysis', 'Manual calculations']
                },
                futureState: {
                    activities: ['AI risk modeling', 'Dynamic risk-return optimization', 'Real-time allocation adjustments'],
                    aiAgents: ['RMA', 'RTO', 'AAE'],
                    humanCheckpoints: ['Risk tolerance approval', 'Final allocation approval'],
                    timeReduction: '75% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'CNA', frequency: 1 },
            { agentId: 'PES', frequency: 1 },
            { agentId: 'CAT', frequency: 1 },
            { agentId: 'ROC', frequency: 1 },
            { agentId: 'NPM', frequency: 1 },
            { agentId: 'POA', frequency: 1 },
            { agentId: 'RAO', frequency: 1 },
            { agentId: 'RMA', frequency: 1 },
            { agentId: 'RTO', frequency: 1 },
            { agentId: 'AAE', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '77% overall reduction'
    },
    {
        name: 'Valuation Analysis',
        description: 'Business unit valuation, asset valuation, and fair value assessments',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Data Gathering and Normalization',
                currentState: {
                    activities: ['Financial data collection', 'Normalization adjustments', 'Market data gathering'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual data collection', 'Inconsistent adjustments', 'Outdated market data']
                },
                futureState: {
                    activities: ['Automated data extraction', 'AI normalization engine', 'Real-time market feeds'],
                    aiAgents: ['DG', 'NAE', 'MDF'],
                    humanCheckpoints: ['Data quality review', 'Adjustment approval'],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Valuation Model Development',
                currentState: {
                    activities: ['Model selection', 'Assumption development', 'Model building'],
                    timeRequired: '1 week',
                    painPoints: ['Complex Excel models', 'Static assumptions', 'Version control issues']
                },
                futureState: {
                    activities: ['AI model selection', 'Dynamic assumption modeling', 'Automated model generation'],
                    aiAgents: ['VMS', 'DAM', 'MGA'],
                    humanCheckpoints: ['Methodology approval', 'Key assumption validation'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Sensitivity and Scenario Analysis',
                currentState: {
                    activities: ['Sensitivity tables', 'Scenario development', 'Monte Carlo simulation'],
                    timeRequired: '2-3 days',
                    painPoints: ['Limited scenarios', 'Manual calculations', 'Static analysis']
                },
                futureState: {
                    activities: ['AI scenario generation', 'Real-time sensitivities', 'Advanced simulation'],
                    aiAgents: ['SSG', 'MC', 'ASE'],
                    humanCheckpoints: ['Scenario review', 'Range approval'],
                    timeReduction: '80% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'DG', frequency: 1 },
            { agentId: 'NAE', frequency: 1 },
            { agentId: 'MDF', frequency: 1 },
            { agentId: 'VMS', frequency: 1 },
            { agentId: 'DAM', frequency: 1 },
            { agentId: 'MGA', frequency: 1 },
            { agentId: 'SSG', frequency: 1 },
            { agentId: 'MC', frequency: 1 },
            { agentId: 'ASE', frequency: 1 }
        ],
        humanCheckpointsCount: 5,
        estimatedTimeSavings: '80% overall reduction'
    },
    {
        name: 'Strategic Initiatives',
        description: 'Strategic project evaluation, business case development, and initiative tracking',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Initiative Identification and Prioritization',
                currentState: {
                    activities: ['Initiative gathering', 'Strategic alignment assessment', 'Priority scoring'],
                    timeRequired: '1-2 weeks',
                    painPoints: ['Manual scoring', 'Subjective prioritization', 'Limited visibility']
                },
                futureState: {
                    activities: ['AI initiative scanning', 'Automated alignment scoring', 'Dynamic prioritization'],
                    aiAgents: ['IIS', 'SAS', 'DPE'],
                    humanCheckpoints: ['Strategic fit approval', 'Priority validation'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Business Case Development',
                currentState: {
                    activities: ['Financial modeling', 'Risk assessment', 'Implementation planning'],
                    timeRequired: '2-3 weeks',
                    painPoints: ['Complex models', 'Limited risk analysis', 'Static planning']
                },
                futureState: {
                    activities: ['AI-powered business cases', 'Automated risk scoring', 'Dynamic implementation models'],
                    aiAgents: ['BCG', 'ARS', 'IPM'],
                    humanCheckpoints: ['Business case approval', 'Risk tolerance approval'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Initiative Tracking and Reporting',
                currentState: {
                    activities: ['Progress tracking', 'KPI monitoring', 'Executive reporting'],
                    timeRequired: 'Ongoing',
                    painPoints: ['Manual updates', 'Delayed reporting', 'Limited insights']
                },
                futureState: {
                    activities: ['Real-time tracking', 'AI KPI analysis', 'Automated reporting'],
                    aiAgents: ['PTM', 'KAA', 'ARG'],
                    humanCheckpoints: ['Progress review', 'Corrective action approval'],
                    timeReduction: '80% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'IIS', frequency: 1 },
            { agentId: 'SAS', frequency: 1 },
            { agentId: 'DPE', frequency: 1 },
            { agentId: 'BCG', frequency: 1 },
            { agentId: 'ARS', frequency: 1 },
            { agentId: 'IPM', frequency: 1 },
            { agentId: 'PTM', frequency: 1 },
            { agentId: 'KAA', frequency: 1 },
            { agentId: 'ARG', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '75% overall reduction'
    },
    {
        name: 'Investment Analysis',
        description: 'Capital investment evaluation, portfolio management, and investment performance tracking',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Investment Opportunity Assessment',
                currentState: {
                    activities: ['Opportunity screening', 'Initial financial analysis', 'Strategic fit evaluation'],
                    timeRequired: '1-2 weeks',
                    painPoints: ['Manual screening', 'Limited analysis depth', 'Inconsistent evaluation']
                },
                futureState: {
                    activities: ['AI opportunity scanning', 'Automated financial modeling', 'Strategic scoring algorithms'],
                    aiAgents: ['IOS', 'AFM', 'SSA'],
                    humanCheckpoints: ['Investment thesis approval', 'Proceed/no-proceed decision'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Detailed Investment Analysis',
                currentState: {
                    activities: ['DCF modeling', 'Risk assessment', 'Return projections'],
                    timeRequired: '1-2 weeks',
                    painPoints: ['Complex Excel models', 'Static risk analysis', 'Manual projections']
                },
                futureState: {
                    activities: ['AI-powered DCF models', 'Dynamic risk modeling', 'ML return predictions'],
                    aiAgents: ['DCM', 'DRM', 'RPE'],
                    humanCheckpoints: ['Model validation', 'Investment committee approval'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Portfolio Impact Analysis',
                currentState: {
                    activities: ['Portfolio fit assessment', 'Diversification analysis', 'Performance impact modeling'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual portfolio analysis', 'Limited optimization', 'Static modeling']
                },
                futureState: {
                    activities: ['AI portfolio optimization', 'Real-time diversification metrics', 'Dynamic impact analysis'],
                    aiAgents: ['POM', 'DAA', 'PIM'],
                    humanCheckpoints: ['Portfolio allocation approval', 'Final investment approval'],
                    timeReduction: '75% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'IOS', frequency: 1 },
            { agentId: 'AFM', frequency: 1 },
            { agentId: 'SSA', frequency: 1 },
            { agentId: 'DCM', frequency: 1 },
            { agentId: 'DRM', frequency: 1 },
            { agentId: 'RPE', frequency: 1 },
            { agentId: 'POM', frequency: 1 },
            { agentId: 'DAA', frequency: 1 },
            { agentId: 'PIM', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '77% overall reduction'
    },
    {
        name: 'Debt Management',
        description: 'Debt portfolio optimization, refinancing analysis, and covenant monitoring',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Debt Portfolio Analysis',
                currentState: {
                    activities: ['Current debt review', 'Maturity profile analysis', 'Cost of debt calculation'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual data aggregation', 'Static analysis', 'Complex calculations']
                },
                futureState: {
                    activities: ['Automated debt tracking', 'Real-time maturity monitoring', 'Dynamic cost analysis'],
                    aiAgents: ['DPT', 'MMA', 'CDA'],
                    humanCheckpoints: ['Portfolio review', 'Key metrics validation'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Refinancing Analysis',
                currentState: {
                    activities: ['Market rate analysis', 'Refinancing scenarios', 'Cost-benefit analysis'],
                    timeRequired: '1 week',
                    painPoints: ['Manual market research', 'Limited scenarios', 'Static modeling']
                },
                futureState: {
                    activities: ['AI market intelligence', 'Automated scenario generation', 'Dynamic optimization'],
                    aiAgents: ['MRA', 'RSG', 'RBO'],
                    humanCheckpoints: ['Refinancing strategy approval', 'Timing decision'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Covenant Monitoring and Compliance',
                currentState: {
                    activities: ['Covenant calculation', 'Compliance tracking', 'Lender reporting'],
                    timeRequired: 'Monthly',
                    painPoints: ['Manual calculations', 'Risk of errors', 'Delayed reporting']
                },
                futureState: {
                    activities: ['Automated covenant tracking', 'Real-time compliance alerts', 'Auto-generated reports'],
                    aiAgents: ['CCM', 'RCA', 'LRG'],
                    humanCheckpoints: ['Compliance certification', 'Exception approval'],
                    timeReduction: '85% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'DPT', frequency: 1 },
            { agentId: 'MMA', frequency: 1 },
            { agentId: 'CDA', frequency: 1 },
            { agentId: 'MRA', frequency: 1 },
            { agentId: 'RSG', frequency: 1 },
            { agentId: 'RBO', frequency: 1 },
            { agentId: 'CCM', frequency: 1 },
            { agentId: 'RCA', frequency: 1 },
            { agentId: 'LRG', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '80% overall reduction'
    },
    {
        name: 'Dividend Policy',
        description: 'Dividend strategy development, payout analysis, and shareholder return optimization',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Financial Capacity Analysis',
                currentState: {
                    activities: ['Cash flow analysis', 'Capital needs assessment', 'Debt capacity review'],
                    timeRequired: '1 week',
                    painPoints: ['Manual analysis', 'Multiple data sources', 'Complex projections']
                },
                futureState: {
                    activities: ['AI cash flow modeling', 'Automated capital planning', 'Dynamic debt analysis'],
                    aiAgents: ['CFM', 'ACP', 'DCA'],
                    humanCheckpoints: ['Capacity validation', 'Constraint approval'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Dividend Policy Optimization',
                currentState: {
                    activities: ['Peer benchmarking', 'Payout ratio analysis', 'Shareholder impact modeling'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual benchmarking', 'Static analysis', 'Limited optimization']
                },
                futureState: {
                    activities: ['AI peer analysis', 'Dynamic payout optimization', 'Shareholder value modeling'],
                    aiAgents: ['PBA', 'DPO', 'SVM'],
                    humanCheckpoints: ['Policy recommendation review', 'Board approval'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Implementation and Communication',
                currentState: {
                    activities: ['Board presentation preparation', 'Investor communication', 'Market reaction analysis'],
                    timeRequired: '1 week',
                    painPoints: ['Manual presentation creation', 'Limited market insights', 'Reactive analysis']
                },
                futureState: {
                    activities: ['AI presentation generation', 'Automated investor materials', 'Predictive market analysis'],
                    aiAgents: ['PPG', 'ICG', 'MAE'],
                    humanCheckpoints: ['Communication approval', 'Final dividend declaration'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'CFM', frequency: 1 },
            { agentId: 'ACP', frequency: 1 },
            { agentId: 'DCA', frequency: 1 },
            { agentId: 'PBA', frequency: 1 },
            { agentId: 'DPO', frequency: 1 },
            { agentId: 'SVM', frequency: 1 },
            { agentId: 'PPG', frequency: 1 },
            { agentId: 'ICG', frequency: 1 },
            { agentId: 'MAE', frequency: 1 }
        ],
        humanCheckpointsCount: 5,
        estimatedTimeSavings: '75% overall reduction'
    },
    {
        name: 'Financial Strategy',
        description: 'Long-term financial strategy development, capital structure optimization, and strategic financial planning',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Strategic Financial Assessment',
                currentState: {
                    activities: ['Current state analysis', 'Market positioning review', 'Competitive benchmarking'],
                    timeRequired: '2-3 weeks',
                    painPoints: ['Extensive manual analysis', 'Data fragmentation', 'Limited insights']
                },
                futureState: {
                    activities: ['AI-powered diagnostics', 'Automated positioning analysis', 'Real-time benchmarking'],
                    aiAgents: ['SFA', 'MPA', 'CBE'],
                    humanCheckpoints: ['Assessment validation', 'Strategic priorities approval'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Capital Structure Optimization',
                currentState: {
                    activities: ['WACC analysis', 'Leverage optimization', 'Rating agency impact assessment'],
                    timeRequired: '1-2 weeks',
                    painPoints: ['Complex modeling', 'Multiple scenarios', 'Manual optimization']
                },
                futureState: {
                    activities: ['AI WACC optimization', 'Dynamic leverage modeling', 'Automated rating impact'],
                    aiAgents: ['WOE', 'DLM', 'RIA'],
                    humanCheckpoints: ['Structure approval', 'Risk tolerance validation'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Strategic Roadmap Development',
                currentState: {
                    activities: ['Initiative prioritization', 'Timeline development', 'Resource planning'],
                    timeRequired: '2 weeks',
                    painPoints: ['Manual planning', 'Static roadmaps', 'Limited scenario planning']
                },
                futureState: {
                    activities: ['AI initiative optimization', 'Dynamic timeline modeling', 'Automated resource allocation'],
                    aiAgents: ['SIO', 'DTM', 'RAE'],
                    humanCheckpoints: ['Roadmap approval', 'Executive sign-off'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'SFA', frequency: 1 },
            { agentId: 'MPA', frequency: 1 },
            { agentId: 'CBE', frequency: 1 },
            { agentId: 'WOE', frequency: 1 },
            { agentId: 'DLM', frequency: 1 },
            { agentId: 'RIA', frequency: 1 },
            { agentId: 'SIO', frequency: 1 },
            { agentId: 'DTM', frequency: 1 },
            { agentId: 'RAE', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '72% overall reduction'
    }
]; 