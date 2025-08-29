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
                    aiAgents: ['fpa-data-gatherer-multichannel-planning', 'driver-analyzer-causal-analysis-fpa', 'causal-relationship-analyzer-ml-fpa', 'data-quality-validator-planning-fpa'], // Data Gatherer, Data Analyzer, Consolidation Agent, Data Quality Agent
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
                    aiAgents: ['data-quality-validator-planning-fpa', 'fx-impact-analyzer-planning-fpa', 'hierarchy-manager-consolidation-fpa', 'intercompany-eliminator-automated-fpa'], // Data Quality, FX Manager, Hierarchy Manager, Intercompany Eliminator
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
                    aiAgents: ['variance-analyzer-intelligent-fpa', 'causal-relationship-analyzer-ml-fpa', 'driver-analyzer-causal-analysis-fpa', 'trend-detector-fpa'], // Variance Analyzer, Causal Analyzer, Driver Analyzer, Trend Detector
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
                    aiAgents: ['insight-reporter-fpa', 'commentary-robot-fpa', 'narrative-synthesizer-fpa', 'risk-analyzer-analyzer-fpa'], // Insight Reporter, Commentary Robot, Narrative Synthesizer, Risk Analyzer
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
                    aiAgents: ['management-reporter-fpa', 'kpi-tracker-tracker-fpa', 'visualization-designer-fpa', 'alert-manager-fpa'], // Management Reporter, KPI Tracker, Visualization Designer, Alert Manager
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
                    aiAgents: ['report-generator-fpa', 'presentation-designer-fpa', 'distribution-manager-fpa', 'follow-up-manager-fpa'], // Report Generator, Presentation Designer, Distribution Manager, Follow-up Manager
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
                    aiAgents: ['business-partner-fpa', 'scenario-modeler-fpa', 'predictive-analyzer-analyzer-fpa', 'action-tracker-tracker-fpa'], // Business Partner, Scenario Modeler, Predictive Analyzer, Action Tracker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.STRATEGIC_DECISION],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 7,
        aiAgentsUsed: ['fpa-data-gatherer-multichannel-planning', 'driver-analyzer-causal-analysis-fpa', 'causal-relationship-analyzer-ml-fpa', 'data-quality-validator-planning-fpa', 'fx-impact-analyzer-planning-fpa', 'hierarchy-manager-consolidation-fpa', 'intercompany-eliminator-automated-fpa', 'variance-analyzer-intelligent-fpa', 'trend-detector-fpa', 'insight-reporter-fpa', 'commentary-robot-fpa', 'narrative-synthesizer-fpa', 'risk-analyzer-analyzer-fpa', 'management-reporter-fpa', 'kpi-tracker-tracker-fpa', 'visualization-designer-fpa', 'alert-manager-fpa', 'report-generator-fpa', 'presentation-designer-fpa', 'distribution-manager-fpa', 'follow-up-manager-fpa', 'business-partner-fpa', 'scenario-modeler-fpa', 'predictive-analyzer-analyzer-fpa', 'action-tracker-tracker-fpa'],
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
                    aiAgents: ['FPA-SP', 'FPA-BI', 'fpa-data-gatherer-multichannel-planning', 'FPA-TA'],
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
                    aiAgents: ['scenario-modeler-fpa', 'FPA-MC', 'FPA-OM', 'FPA-AM'],
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
                    aiAgents: ['FPA-DP', 'FPA-TA', 'predictive-analyzer-analyzer-fpa', 'FPA-WA'],
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
                    aiAgents: ['commentary-robot-fpa', 'insight-reporter-fpa', 'management-reporter-fpa'],
                    humanCheckpoints: ['Executive review', 'Board approval'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            'FPA-SP',
            'FPA-BI',
            'FPA-DG',
            'FPA-TA',
            'FPA-SM',
            'FPA-MC',
            'FPA-OM',
            'FPA-AM',
            'FPA-DP',
            'FPA-PA',
            'FPA-WA',
            'FPA-CR',
            'FPA-IR',
            'FPA-MR'
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
                    aiAgents: ['causal-relationship-analyzer-ml-fpa', 'fpa-data-gatherer-multichannel-planning', 'driver-analyzer-causal-analysis-fpa'],
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
                    aiAgents: ['FPA-DH', 'variance-analyzer-intelligent-fpa', 'FPA-CS', 'commentary-robot-fpa'],
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
                    aiAgents: ['FPA-SG', 'distribution-manager-fpa', 'action-tracker-tracker-fpa', 'FPA-SA'],
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
                    aiAgents: ['FPA-OM', 'FPA-CS', 'FPA-MO', 'FPA-DR'],
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
                    aiAgents: ['FPA-KS', 'FPA-TS', 'FPA-AC', 'FPA-CM'],
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
                    aiAgents: ['FPA-PC', 'FPA-PG', 'FPA-CP', 'FPA-DO'],
                    humanCheckpoints: ['Executive approval', 'Communication sign-off'],
                    timeReduction: '75% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 6,
        aiAgentsUsed: [
            'FPA-CA',
            'FPA-DG',
            'FPA-DA',
            'FPA-OM',
            'FPA-DP',
            'FPA-WA',
            'FPA-SM',
            'FPA-MR',
            'FPA-KT',
            'FPA-IR',
            'FPA-PM'
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
                    aiAgents: ['business-partner-fpa', 'fpa-data-gatherer-multichannel-planning', 'FPA-TB'],
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
                    aiAgents: ['variance-analyzer-intelligent-fpa', 'causal-relationship-analyzer-ml-fpa', 'FPA-BI', 'FPA-GP'],
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
                    aiAgents: ['business-partner-fpa', 'scenario-modeler-fpa', 'FPA-AP', 'management-reporter-fpa'],
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
                    aiAgents: ['management-reporter-fpa', 'commentary-robot-fpa', 'driver-analyzer-causal-analysis-fpa'],
                    humanCheckpoints: ['Final budget sign-off'],
                    timeReduction: '85% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            'FPA-BP',
            'FPA-DG',
            'FPA-TB',
            'FPA-VA',
            'FPA-CA',
            'FPA-BI',
            'FPA-GP',
            'FPA-SM',
            'FPA-AP',
            'FPA-MR',
            'FPA-CR',
            'FPA-DA'
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
                    aiAgents: ['rolling-forecast-engine-fpa', 'fpa-data-gatherer-multichannel-planning', 'FPA-TA', 'FPA-DP'],
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
                    aiAgents: ['rolling-forecast-engine-fpa', 'scenario-modeler-fpa', 'FPA-MC', 'predictive-analyzer-analyzer-fpa'],
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
                    aiAgents: ['variance-analyzer-intelligent-fpa', 'predictive-analyzer-analyzer-fpa', 'insight-reporter-fpa', 'FPA-RS'],
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
                    aiAgents: ['management-reporter-fpa', 'driver-analyzer-causal-analysis-fpa', 'commentary-robot-fpa', 'FPA-PM'],
                    humanCheckpoints: ['Key message approval'],
                    timeReduction: '85% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            'FPA-RF',
            'FPA-DG',
            'FPA-TA',
            'FPA-DP',
            'FPA-SM',
            'FPA-MC',
            'FPA-PA',
            'FPA-VA',
            'FPA-IR',
            'FPA-RS',
            'FPA-MR',
            'FPA-DA',
            'FPA-CR',
            'FPA-PM'
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
                    aiAgents: ['scenario-modeler-fpa', 'fpa-data-gatherer-multichannel-planning', 'FPA-AM', 'causal-relationship-analyzer-ml-fpa'],
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
                    aiAgents: ['FPA-MC', 'FPA-OM', 'FPA-WA', 'predictive-analyzer-analyzer-fpa'],
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
                    aiAgents: ['FPA-OM', 'predictive-analyzer-analyzer-fpa', 'business-partner-fpa', 'insight-reporter-fpa'],
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
                    aiAgents: ['commentary-robot-fpa', 'management-reporter-fpa', 'FPA-AP'],
                    humanCheckpoints: ['Final decision approval'],
                    timeReduction: '75% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            'FPA-SM',
            'FPA-DG',
            'FPA-AM',
            'FPA-CA',
            'FPA-MC',
            'FPA-OM',
            'FPA-WA',
            'FPA-PA',
            'FPA-BP',
            'FPA-IR',
            'FPA-CR',
            'FPA-MR',
            'FPA-AP'
        ],
        humanCheckpointsCount: 7,
        estimatedTimeSavings: '75% overall reduction'
    },
    // Additional FP&A Workflow (previously in separate file)
    {
        name: 'Reporting & Analysis',
        description: 'Management reporting, variance analysis, and business insights generation',
        platform: EXISTING_PLATFORMS.MANAGEMENT_REPORTING,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Data Collection & Preparation',
                currentState: {
                    activities: ['Manual data extraction from multiple systems', 'Excel-based consolidation', 'Data quality checks', 'Currency conversions', 'Mapping to reporting structure'],
                    timeRequired: '2-3 days monthly',
                    painPoints: ['Fragmented data sources', 'Manual reconciliation', 'Version control issues', 'Time-consuming preparation']
                },
                futureState: {
                    activities: ['Automated multi-source extraction', 'AI data quality validation', 'Real-time consolidation', 'Smart mapping engine', 'Continuous data readiness'],
                    aiAgents: ['multi-source-extractor-fpa', 'data-quality-validator-validator-fpa', 'real-time-consolidator-fpa', 'mapping-engine-engine-fpa'], // Automated Multi-source Extractor, Data Quality Validator, Real-Time Consolidator, Smart Mapping Engine
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DATA_VALIDATION],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Report Generation & Formatting',
                currentState: {
                    activities: ['Manual report creation', 'Chart and graph preparation', 'Formatting and layout', 'Commentary writing', 'Version management'],
                    timeRequired: '2-3 days',
                    painPoints: ['Repetitive formatting', 'Inconsistent layouts', 'Manual commentary', 'Multiple report versions']
                },
                futureState: {
                    activities: ['Automated report generation', 'AI visualization selection', 'Dynamic formatting', 'Natural language generation', 'Version control automation'],
                    aiAgents: ['report-generator-fpa-v2', 'visualization-selector-fpa', 'natural-language-generator-fpa', 'version-control-automation-fpa'], // Automated Report Generator, AI Visualization Selector, Natural Language Generator, Version Control Automation
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.REPORT_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Variance & Trend Analysis',
                currentState: {
                    activities: ['Manual variance calculations', 'Root cause investigation', 'Trend identification', 'Driver analysis', 'Insight documentation'],
                    timeRequired: '3-4 days',
                    painPoints: ['Time-consuming analysis', 'Limited drill-down capability', 'Manual calculations', 'Subjective insights']
                },
                futureState: {
                    activities: ['AI variance detection', 'Automated root cause analysis', 'ML trend prediction', 'Smart driver identification', 'Insight automation'],
                    aiAgents: ['variance-detector-fpa', 'root-cause-analyzer-analyzer-fpa', 'trend-predictor-fpa', 'driver-identifier-fpa'], // AI Variance Detector, Root Cause Analyzer, ML Trend Predictor, Smart Driver Identifier
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.INSIGHT_VALIDATION],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Performance Measurement',
                currentState: {
                    activities: ['KPI calculation', 'Scorecard preparation', 'Benchmark comparisons', 'Performance narratives', 'Action item tracking'],
                    timeRequired: '2-3 days',
                    painPoints: ['Manual KPI tracking', 'Static scorecards', 'Limited benchmarking', 'Delayed action tracking']
                },
                futureState: {
                    activities: ['Real-time KPI monitoring', 'Dynamic scorecards', 'AI benchmarking', 'Automated narratives', 'Smart action tracking'],
                    aiAgents: ['real-time-kpi-monitor-fpa', 'dynamic-scorecard-fpa', 'benchmarking-fpa', 'action-tracker-tracker-fpa-v2'], // Real-time KPI Monitor, Dynamic Scorecard, AI Benchmarking, Smart Action Tracker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.PERFORMANCE_REVIEW],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Distribution & Follow-up',
                currentState: {
                    activities: ['Report distribution', 'Stakeholder meetings', 'Action item assignment', 'Follow-up tracking', 'Feedback incorporation'],
                    timeRequired: '1-2 days',
                    painPoints: ['Manual distribution', 'Meeting coordination', 'Action tracking gaps', 'Feedback loops']
                },
                futureState: {
                    activities: ['Automated distribution', 'Smart meeting scheduling', 'AI action assignment', 'Real-time tracking', 'Feedback automation'],
                    aiAgents: ['distribution-tool-fpa', 'meeting-scheduler-fpa', 'action-assigner-fpa', 'feedback-automation-fpa'], // Automated Distribution Tool, Smart Meeting Scheduler, AI Action Assigner, Feedback Automation
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DISTRIBUTION_APPROVAL],
                    timeReduction: '75% reduction'
                }
            }
        ],
        totalSteps: 5,
        futureStateWorkflow: [],
        estimatedTimeSavings: '79%',
        aiAgentsUsed: ['multi-source-extractor-fpa', 'data-quality-validator-validator-fpa', 'real-time-consolidator-fpa', 'mapping-engine-engine-fpa', 'report-generator-fpa-v2', 'visualization-selector-fpa', 'natural-language-generator-fpa', 'version-control-automation-fpa', 'variance-detector-fpa', 'root-cause-analyzer-analyzer-fpa', 'trend-predictor-fpa', 'driver-identifier-fpa', 'real-time-kpi-monitor-fpa', 'dynamic-scorecard-fpa', 'benchmarking-fpa', 'action-tracker-tracker-fpa-v2', 'distribution-tool-fpa', 'meeting-scheduler-fpa', 'action-assigner-fpa', 'feedback-automation-fpa'],
        humanCheckpointsCount: 5
    }
]; 