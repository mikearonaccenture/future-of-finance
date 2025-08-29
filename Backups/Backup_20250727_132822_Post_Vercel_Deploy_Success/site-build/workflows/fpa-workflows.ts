// FP&A (Financial Planning & Analysis) Workflows

import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

export const fpAndAWorkflows: SubActivity[] = [
    {
        name: 'Financial Planning and Analysis',
        description: 'Core FP&A activities including variance analysis, performance reporting, and business partnering',
        platform: EXISTING_PLATFORMS.CONNECTED_ENTERPRISE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Data Collection and Integration',
                currentState: {
                    activities: ['Manual login to 10+ source systems', 'Excel-based data downloads', 'Copy-paste data consolidation', 'Email requests for missing data', 'Manual data formatting and cleaning'],
                    timeRequired: '3-4 days',
                    painPoints: ['Data inconsistencies across systems', 'Version control nightmares', 'Manual errors in consolidation', 'Delayed data availability', 'No audit trail']
                },
                futureState: {
                    activities: ['Automated multi-system data extraction', 'Real-time data validation', 'AI-powered anomaly detection', 'Intelligent data mapping'],
                    aiAgents: ['DG', 'DA', 'CA', 'DQ'], // Data Gatherer, Data Analyzer, Consolidation Agent, Data Quality Agent
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DATA_VALIDATION],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Data Quality & Preparation',
                currentState: {
                    activities: ['Manual data cleansing', 'Currency conversions', 'Hierarchy alignments', 'Intercompany eliminations', 'Master data reconciliation'],
                    timeRequired: '1-2 days',
                    painPoints: ['Inconsistent hierarchies', 'FX rate discrepancies', 'Manual elimination errors', 'Time-consuming reconciliations']
                },
                futureState: {
                    activities: ['AI-powered data cleansing', 'Automated currency conversions', 'Smart hierarchy management', 'Automated eliminations'],
                    aiAgents: ['DQ', 'FX', 'HM', 'IE'], // Data Quality, FX Manager, Hierarchy Manager, Intercompany Eliminator
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXCEPTION_HANDLING],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Variance Calculation & Analysis',
                currentState: {
                    activities: ['Manual variance calculations', 'Drill-down to transaction level', 'Root cause investigation', 'Trend analysis', 'Bridge creation'],
                    timeRequired: '2-3 days',
                    painPoints: ['Complex manual calculations', 'Limited drill-down capability', 'Time to identify drivers', 'Inconsistent analysis depth']
                },
                futureState: {
                    activities: ['Automated variance calculation', 'AI-driven root cause analysis', 'Predictive driver identification', 'Auto-generated bridges'],
                    aiAgents: ['VA', 'CA', 'DA', 'TD'], // Variance Analyzer, Causal Analyzer, Driver Analyzer, Trend Detector
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ANALYSIS_REVIEW],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Commentary & Insights Generation',
                currentState: {
                    activities: ['Manual commentary writing', 'Business driver explanations', 'Action item identification', 'Risk and opportunity flagging', 'Executive summary preparation'],
                    timeRequired: '1-2 days',
                    painPoints: ['Time-consuming narrative creation', 'Inconsistent quality', 'Missing insights', 'Delayed delivery']
                },
                futureState: {
                    activities: ['AI-generated commentary', 'Smart insight extraction', 'Automated action item tracking', 'Predictive risk identification'],
                    aiAgents: ['IR', 'CR', 'NS', 'RA'], // Insight Reporter, Commentary Robot, Narrative Synthesizer, Risk Analyzer
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.NARRATIVE_APPROVAL],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Performance Dashboard Updates',
                currentState: {
                    activities: ['Manual KPI calculations', 'Dashboard data updates', 'Visual creation and formatting', 'Distribution list management', 'Mobile optimization'],
                    timeRequired: '1 day',
                    painPoints: ['Manual update processes', 'Multiple dashboard versions', 'Formatting inconsistencies', 'Limited interactivity']
                },
                futureState: {
                    activities: ['Real-time KPI updates', 'AI-powered visualizations', 'Smart alert generation', 'Personalized views'],
                    aiAgents: ['MR', 'KT', 'VD', 'AL'], // Management Reporter, KPI Tracker, Visualization Designer, Alert Manager
                    humanCheckpoints: [],
                    timeReduction: '90% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Stakeholder Reporting & Distribution',
                currentState: {
                    activities: ['Report compilation', 'Executive presentation creation', 'Email distribution', 'Meeting scheduling', 'Follow-up tracking'],
                    timeRequired: '1 day',
                    painPoints: ['Multiple report versions', 'Manual distribution', 'Inconsistent formatting', 'Limited tracking']
                },
                futureState: {
                    activities: ['Automated report generation', 'AI-powered presentation creation', 'Smart distribution', 'Automated follow-up'],
                    aiAgents: ['RG', 'PD', 'DM', 'FM'], // Report Generator, Presentation Designer, Distribution Manager, Follow-up Manager
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.EXECUTIVE_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 7,
                description: 'Business Partner Collaboration',
                currentState: {
                    activities: ['Meeting preparation', 'Ad-hoc analysis requests', 'What-if scenario modeling', 'Recommendation development', 'Action plan tracking'],
                    timeRequired: '2-3 days ongoing',
                    painPoints: ['Limited time for analysis', 'Reactive approach', 'Manual scenario modeling', 'Poor action tracking']
                },
                futureState: {
                    activities: ['AI-powered meeting prep', 'Real-time scenario modeling', 'Predictive recommendations', 'Automated action tracking'],
                    aiAgents: ['BP', 'SM', 'PA', 'AT'], // Business Partner, Scenario Modeler, Predictive Analyzer, Action Tracker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.STRATEGIC_DECISION],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 7,
        aiAgentsUsed: ['DG', 'DA', 'CA', 'DQ', 'FX', 'HM', 'IE', 'VA', 'TD', 'IR', 'CR', 'NS', 'RA', 'MR', 'KT', 'VD', 'AL', 'RG', 'PD', 'DM', 'FM', 'BP', 'SM', 'PA', 'AT'],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '78%'
    },
    {
        name: 'Strategic or LR Planning',
        description: 'Long-range planning, strategic initiatives, and multi-year forecasting',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Strategic Data Gathering',
                currentState: {
                    activities: ['Market research compilation', 'Competitive analysis', 'Internal capability assessment'],
                    timeRequired: '5-7 days',
                    painPoints: ['Fragmented data sources', 'Manual research', 'Outdated information']
                },
                futureState: {
                    activities: ['AI-powered market intelligence', 'Automated competitive tracking', 'Real-time capability mapping'],
                    aiAgents: ['SP', 'BI', 'DG', 'TA'],
                    humanCheckpoints: ['Strategic assumption validation', 'Market insight review'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Scenario Development',
                currentState: {
                    activities: ['Manual scenario creation', 'Assumption documentation', 'Impact modeling'],
                    timeRequired: '3-4 days',
                    painPoints: ['Limited scenarios', 'Static assumptions', 'Complex interdependencies']
                },
                futureState: {
                    activities: ['AI scenario generation', 'Dynamic assumption modeling', 'Monte Carlo simulations'],
                    aiAgents: ['SM', 'MC', 'OM', 'AM'],
                    humanCheckpoints: ['Scenario approval', 'Key assumption validation'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Long-Range Modeling',
                currentState: {
                    activities: ['Multi-year projection building', 'Driver-based modeling', 'Sensitivity analysis'],
                    timeRequired: '4-5 days',
                    painPoints: ['Complex Excel models', 'Version control', 'Limited flexibility']
                },
                futureState: {
                    activities: ['AI-powered projections', 'Automated driver analysis', 'Real-time sensitivities'],
                    aiAgents: ['DP', 'TA', 'PA', 'WA'],
                    humanCheckpoints: ['Model validation', 'Strategic direction approval'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Strategic Plan Documentation',
                currentState: {
                    activities: ['Plan narrative writing', 'Executive presentation creation', 'Board package preparation'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual document creation', 'Multiple review cycles', 'Inconsistent messaging']
                },
                futureState: {
                    activities: ['AI-generated narratives', 'Automated presentation creation', 'Smart document assembly'],
                    aiAgents: ['CR', 'IR', 'MR'],
                    humanCheckpoints: ['Executive review', 'Board approval'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            'SP',
            'BI',
            'DG',
            'TA',
            'SM',
            'MC',
            'OM',
            'AM',
            'DP',
            'PA',
            'WA',
            'CR',
            'IR',
            'MR'
        ],
        humanCheckpointsCount: 8,
        estimatedTimeSavings: '74% overall reduction'
    },
    {
        name: 'Integrated Enterprise Planning',
        description: 'Cross-functional planning alignment and enterprise-wide resource optimization',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Cross-Functional Data Integration',
                currentState: {
                    activities: ['Department plan collection', 'Manual consolidation', 'Reconciliation of differences'],
                    timeRequired: '4-5 days',
                    painPoints: ['Siloed planning', 'Inconsistent formats', 'Timing misalignment']
                },
                futureState: {
                    activities: ['Automated plan integration', 'Real-time consolidation', 'AI reconciliation'],
                    aiAgents: ['CA', 'DG', 'DA'],
                    humanCheckpoints: ['Cross-functional alignment review'],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Data Harmonization & Validation',
                currentState: {
                    activities: ['Standardize data formats', 'Validate assumptions', 'Align planning calendars', 'Resolve data conflicts'],
                    timeRequired: '2-3 days',
                    painPoints: ['Inconsistent data standards', 'Manual validation', 'Calendar misalignment']
                },
                futureState: {
                    activities: ['AI data standardization', 'Automated validation', 'Smart calendar sync', 'Conflict resolution AI'],
                    aiAgents: ['DH', 'VA', 'CS', 'CR'],
                    humanCheckpoints: ['Data quality approval'],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Scenario Development & Modeling',
                currentState: {
                    activities: ['Build planning scenarios', 'Develop driver models', 'Test assumptions', 'Sensitivity analysis'],
                    timeRequired: '3-4 days',
                    painPoints: ['Limited scenarios', 'Manual modeling', 'Static assumptions']
                },
                futureState: {
                    activities: ['AI scenario generation', 'Dynamic driver modeling', 'Automated testing', 'Real-time sensitivity'],
                    aiAgents: ['SG', 'DM', 'AT', 'SA'],
                    humanCheckpoints: ['Scenario selection', 'Model validation'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Resource Optimization & Allocation',
                currentState: {
                    activities: ['Analyze resource needs', 'Identify constraints', 'Optimize allocation', 'Balance trade-offs'],
                    timeRequired: '2-3 days',
                    painPoints: ['Manual optimization', 'Limited visibility', 'Suboptimal decisions']
                },
                futureState: {
                    activities: ['AI resource optimization', 'Constraint solving', 'Multi-objective optimization', 'Dynamic rebalancing'],
                    aiAgents: ['OM', 'CS', 'MO', 'DR'],
                    humanCheckpoints: ['Allocation approval'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Performance Target Setting',
                currentState: {
                    activities: ['Define KPIs', 'Set targets', 'Cascade objectives', 'Link to compensation'],
                    timeRequired: '2-3 days',
                    painPoints: ['Arbitrary targets', 'Poor cascade', 'Weak linkage']
                },
                futureState: {
                    activities: ['AI-driven KPI selection', 'Smart target setting', 'Automated cascading', 'Dynamic compensation modeling'],
                    aiAgents: ['KS', 'TS', 'AC', 'CM'],
                    humanCheckpoints: ['Target approval', 'Compensation review'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 6,
                description: 'Enterprise Plan Assembly & Communication',
                currentState: {
                    activities: ['Consolidate plans', 'Create presentations', 'Develop communication strategy', 'Roll out to organization'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual consolidation', 'Static presentations', 'Poor adoption']
                },
                futureState: {
                    activities: ['Automated consolidation', 'AI presentation generation', 'Smart communication planning', 'Digital rollout'],
                    aiAgents: ['PC', 'PG', 'CP', 'DO'],
                    humanCheckpoints: ['Executive approval', 'Communication sign-off'],
                    timeReduction: '75% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 6,
        aiAgentsUsed: [
            'CA',
            'DG',
            'DA',
            'OM',
            'DP',
            'WA',
            'SM',
            'MR',
            'KT',
            'IR',
            'PM'
        ],
        humanCheckpointsCount: 5,
        estimatedTimeSavings: '80% overall reduction'
    },
    {
        name: 'Budgeting',
        description: 'Annual budget preparation, review, and approval process',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Budget Preparation',
                currentState: {
                    activities: ['Template distribution', 'Department input collection', 'Initial consolidation'],
                    timeRequired: '5-7 days',
                    painPoints: ['Multiple iterations', 'Manual data entry', 'Template management']
                },
                futureState: {
                    activities: ['AI-guided budget creation', 'Automated templates', 'Smart consolidation'],
                    aiAgents: ['BP', 'DG', 'TB'],
                    humanCheckpoints: ['Department head review'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Budget Analysis and Validation',
                currentState: {
                    activities: ['Variance analysis vs prior year', 'Reasonableness checks', 'Target alignment'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual analysis', 'Limited benchmarking', 'Time-consuming reviews']
                },
                futureState: {
                    activities: ['AI variance analysis', 'Automated benchmarking', 'Predictive validation'],
                    aiAgents: ['VA', 'CA', 'BI', 'GP'],
                    humanCheckpoints: ['Variance justification review', 'Target alignment approval'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Budget Negotiation and Finalization',
                currentState: {
                    activities: ['Review meetings', 'Revision cycles', 'Final consolidation'],
                    timeRequired: '4-5 days',
                    painPoints: ['Multiple revision rounds', 'Manual updates', 'Communication delays']
                },
                futureState: {
                    activities: ['AI-facilitated negotiations', 'Real-time updates', 'Automated communications'],
                    aiAgents: ['BP', 'SM', 'AP', 'MR'],
                    humanCheckpoints: ['Executive approval', 'Board approval'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Budget Communication',
                currentState: {
                    activities: ['Budget book creation', 'Department communication', 'System updates'],
                    timeRequired: '2-3 days',
                    painPoints: ['Manual document creation', 'Inconsistent messaging', 'System entry delays']
                },
                futureState: {
                    activities: ['Automated budget book', 'AI-powered communications', 'System integration'],
                    aiAgents: ['MR', 'CR', 'DA'],
                    humanCheckpoints: ['Final budget sign-off'],
                    timeReduction: '85% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            'BP',
            'DG',
            'TB',
            'VA',
            'CA',
            'BI',
            'GP',
            'SM',
            'AP',
            'MR',
            'CR',
            'DA'
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '77% overall reduction'
    },
    {
        name: 'Dynamic Forecasting',
        description: 'Rolling forecasts, real-time updates, and predictive analytics',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Forecast Data Preparation',
                currentState: {
                    activities: ['Actual data gathering', 'Trend analysis', 'Driver identification'],
                    timeRequired: '2-3 days',
                    painPoints: ['Data lag', 'Manual trending', 'Static drivers']
                },
                futureState: {
                    activities: ['Real-time data feeds', 'AI trend analysis', 'Dynamic driver modeling'],
                    aiAgents: ['RF', 'DG', 'TA', 'DP'],
                    humanCheckpoints: ['Driver validation'],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Forecast Generation',
                currentState: {
                    activities: ['Manual projection', 'Scenario creation', 'Consolidation'],
                    timeRequired: '3-4 days',
                    painPoints: ['Time-consuming projections', 'Limited scenarios', 'Manual consolidation']
                },
                futureState: {
                    activities: ['AI forecast generation', 'Automated scenarios', 'Real-time consolidation'],
                    aiAgents: ['RF', 'SM', 'MC', 'PA'],
                    humanCheckpoints: ['Forecast assumption review', 'Scenario selection'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Forecast Analysis and Review',
                currentState: {
                    activities: ['Variance analysis', 'Risk assessment', 'Management review'],
                    timeRequired: '2 days',
                    painPoints: ['Manual analysis', 'Limited risk insights', 'Sequential reviews']
                },
                futureState: {
                    activities: ['AI variance insights', 'Automated risk scoring', 'Parallel review process'],
                    aiAgents: ['VA', 'PA', 'IR', 'RS'],
                    humanCheckpoints: ['Risk mitigation approval', 'Forecast sign-off'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Forecast Communication',
                currentState: {
                    activities: ['Report creation', 'Dashboard updates', 'Stakeholder briefings'],
                    timeRequired: '1-2 days',
                    painPoints: ['Manual reporting', 'Static dashboards', 'Delayed insights']
                },
                futureState: {
                    activities: ['Auto-generated reports', 'Real-time dashboards', 'AI-powered briefings'],
                    aiAgents: ['MR', 'DA', 'CR', 'PM'],
                    humanCheckpoints: ['Key message approval'],
                    timeReduction: '85% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            'RF',
            'DG',
            'TA',
            'DP',
            'SM',
            'MC',
            'PA',
            'VA',
            'IR',
            'RS',
            'MR',
            'DA',
            'CR',
            'PM'
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '81% overall reduction'
    },
    {
        name: 'Decision Support & Modelling',
        description: 'Business case development, investment analysis, and strategic decision support',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Business Case Development',
                currentState: {
                    activities: ['Data gathering', 'Financial modeling', 'Assumption documentation'],
                    timeRequired: '3-4 days',
                    painPoints: ['Complex modeling', 'Data availability', 'Assumption tracking']
                },
                futureState: {
                    activities: ['AI-assisted modeling', 'Automated data collection', 'Dynamic assumptions'],
                    aiAgents: ['SM', 'DG', 'AM', 'CA'],
                    humanCheckpoints: ['Model structure approval', 'Key assumption validation'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Scenario and Sensitivity Analysis',
                currentState: {
                    activities: ['Manual scenario building', 'Sensitivity tables', 'Risk analysis'],
                    timeRequired: '2-3 days',
                    painPoints: ['Limited scenarios', 'Static sensitivities', 'Basic risk assessment']
                },
                futureState: {
                    activities: ['AI scenario generation', 'Dynamic sensitivities', 'Advanced risk modeling'],
                    aiAgents: ['MC', 'OM', 'WA', 'PA'],
                    humanCheckpoints: ['Scenario review', 'Risk tolerance approval'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Decision Analysis',
                currentState: {
                    activities: ['Option evaluation', 'Trade-off analysis', 'Recommendation development'],
                    timeRequired: '2 days',
                    painPoints: ['Subjective evaluation', 'Limited optimization', 'Bias in analysis']
                },
                futureState: {
                    activities: ['AI option scoring', 'Optimization algorithms', 'Bias-free analysis'],
                    aiAgents: ['OM', 'PA', 'BP', 'IR'],
                    humanCheckpoints: ['Strategic alignment review', 'Decision criteria approval'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Decision Documentation',
                currentState: {
                    activities: ['Presentation creation', 'Executive summary', 'Approval documentation'],
                    timeRequired: '1-2 days',
                    painPoints: ['Manual documentation', 'Multiple revisions', 'Approval delays']
                },
                futureState: {
                    activities: ['AI presentation generation', 'Automated summaries', 'Digital approvals'],
                    aiAgents: ['CR', 'MR', 'AP'],
                    humanCheckpoints: ['Final decision approval'],
                    timeReduction: '75% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            'SM',
            'DG',
            'AM',
            'CA',
            'MC',
            'OM',
            'WA',
            'PA',
            'BP',
            'IR',
            'CR',
            'MR',
            'AP'
        ],
        humanCheckpointsCount: 7,
        estimatedTimeSavings: '75% overall reduction'
    }
]; 