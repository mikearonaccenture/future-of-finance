// Additional FP&A Workflows

import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

export const fpaAdditionalWorkflows: SubActivity[] = [
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
                    aiAgents: ['AME', 'DQV', 'RTC', 'SME'], // Automated Multi-source Extractor, Data Quality Validator, Real-Time Consolidator, Smart Mapping Engine
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
                    aiAgents: ['ARG', 'AVS', 'NLG', 'VCA'], // Automated Report Generator, AI Visualization Selector, Natural Language Generator, Version Control Automation
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
                    aiAgents: ['AVD', 'RCA', 'MTP', 'SDI'], // AI Variance Detector, Root Cause Analyzer, ML Trend Predictor, Smart Driver Identifier
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
                    aiAgents: ['RKM', 'DSC', 'AIB', 'SAT'], // Real-time KPI Monitor, Dynamic Scorecard, AI Benchmarking, Smart Action Tracker
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
                    aiAgents: ['ADT', 'SMS', 'AAA', 'FAU'], // Automated Distribution Tool, Smart Meeting Scheduler, AI Action Assigner, Feedback Automation
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DISTRIBUTION_APPROVAL],
                    timeReduction: '75% reduction'
                }
            }
        ],
        totalSteps: 5,
        estimatedTimeSavings: '79%',
        aiAgentsUsed: ['AME', 'DQV', 'RTC', 'SME', 'ARG', 'AVS', 'NLG', 'VCA', 'AVD', 'RCA', 'MTP', 'SDI', 'RKM', 'DSC', 'AIB', 'SAT', 'ADT', 'SMS', 'AAA', 'FAU'],
        humanCheckpointsCount: 5
    }
]; 