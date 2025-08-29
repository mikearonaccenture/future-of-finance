// Cost Accounting Workflows

import { SubActivity } from '../finance-workflows-overview';

export const costAccountingWorkflows: SubActivity[] = [
    {
        name: 'Product Costing',
        description: 'Product cost calculation, margin analysis, and profitability tracking',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Cost Data Collection',
                currentState: {
                    activities: ['Material cost gathering', 'Labor cost tracking', 'Overhead allocation'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual data collection', 'Multiple source systems', 'Allocation complexity']
                },
                futureState: {
                    activities: ['Automated cost extraction', 'Real-time labor tracking', 'AI-driven overhead allocation'],
                    aiAgents: ['CDG', 'LCT', 'OAE'],
                    humanCheckpoints: ['Cost data validation', 'Allocation methodology approval'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Cost Calculation and Analysis',
                currentState: {
                    activities: ['Standard cost calculation', 'Actual cost computation', 'Variance analysis'],
                    timeRequired: '2-3 days',
                    painPoints: ['Complex calculations', 'Manual variance analysis', 'Limited drill-down']
                },
                futureState: {
                    activities: ['AI cost modeling', 'Automated variance detection', 'Predictive cost analytics'],
                    aiAgents: ['PCE', 'AVD', 'PCA'],
                    humanCheckpoints: ['Cost model validation', 'Significant variance review'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Margin and Profitability Analysis',
                currentState: {
                    activities: ['Margin calculation', 'Product profitability analysis', 'Pricing recommendations'],
                    timeRequired: '2 days',
                    painPoints: ['Static analysis', 'Limited scenario modeling', 'Delayed insights']
                },
                futureState: {
                    activities: ['Dynamic margin analytics', 'AI profitability optimization', 'Real-time pricing guidance'],
                    aiAgents: ['MAC', 'PPO', 'PRG'],
                    humanCheckpoints: ['Pricing strategy approval', 'Margin target validation'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'CDG', frequency: 1 },
            { agentId: 'LCT', frequency: 1 },
            { agentId: 'OAE', frequency: 1 },
            { agentId: 'PCE', frequency: 1 },
            { agentId: 'AVD', frequency: 1 },
            { agentId: 'PCA', frequency: 1 },
            { agentId: 'MAC', frequency: 1 },
            { agentId: 'PPO', frequency: 1 },
            { agentId: 'PRG', frequency: 1 }
        ],
        humanCheckpointsCount: 5,
        estimatedTimeSavings: '75% overall reduction'
    },
    {
        name: 'Service Line Profitability',
        description: 'Service cost analysis, customer profitability, and service line optimization',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Service Cost Allocation',
                currentState: {
                    activities: ['Direct cost assignment', 'Indirect cost allocation', 'Activity-based costing'],
                    timeRequired: '3-4 days',
                    painPoints: ['Complex allocation rules', 'Manual calculations', 'Time-intensive process']
                },
                futureState: {
                    activities: ['AI cost assignment', 'Automated ABC modeling', 'Real-time cost tracking'],
                    aiAgents: ['SCA', 'ABC', 'RCT'],
                    humanCheckpoints: ['Allocation logic approval', 'Cost pool validation'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Customer Profitability Analysis',
                currentState: {
                    activities: ['Revenue analysis', 'Cost to serve calculation', 'Customer segmentation'],
                    timeRequired: '3 days',
                    painPoints: ['Fragmented data', 'Manual segmentation', 'Limited insights']
                },
                futureState: {
                    activities: ['Integrated revenue-cost analysis', 'AI customer segmentation', 'Predictive profitability'],
                    aiAgents: ['CPA', 'ACS', 'PPM'],
                    humanCheckpoints: ['Segmentation criteria approval', 'Key customer review'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Service Line Optimization',
                currentState: {
                    activities: ['Performance benchmarking', 'Optimization opportunities', 'Implementation planning'],
                    timeRequired: '2-3 days',
                    painPoints: ['Limited benchmarks', 'Manual analysis', 'Static recommendations']
                },
                futureState: {
                    activities: ['AI benchmarking', 'Automated optimization modeling', 'Dynamic recommendations'],
                    aiAgents: ['SLB', 'AOM', 'DRE'],
                    humanCheckpoints: ['Optimization strategy approval', 'Implementation sign-off'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'SCA', frequency: 1 },
            { agentId: 'ABC', frequency: 1 },
            { agentId: 'RCT', frequency: 1 },
            { agentId: 'CPA', frequency: 1 },
            { agentId: 'ACS', frequency: 1 },
            { agentId: 'PPM', frequency: 1 },
            { agentId: 'SLB', frequency: 1 },
            { agentId: 'AOM', frequency: 1 },
            { agentId: 'DRE', frequency: 1 }
        ],
        humanCheckpointsCount: 5,
        estimatedTimeSavings: '75% overall reduction'
    },
    {
        name: 'Cost Allocation',
        description: 'Corporate cost allocation, shared services costing, and transfer pricing',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Cost Pool Definition',
                currentState: {
                    activities: ['Cost center mapping', 'Cost pool creation', 'Driver identification'],
                    timeRequired: '2-3 days',
                    painPoints: ['Manual mapping', 'Complex relationships', 'Driver selection challenges']
                },
                futureState: {
                    activities: ['AI cost center mapping', 'Automated pool optimization', 'Smart driver selection'],
                    aiAgents: ['CCM', 'CPO', 'DSA'],
                    humanCheckpoints: ['Cost pool structure approval', 'Driver validation'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Allocation Execution',
                currentState: {
                    activities: ['Allocation calculations', 'Multi-step allocations', 'Reciprocal allocations'],
                    timeRequired: '2-3 days',
                    painPoints: ['Complex calculations', 'Manual iterations', 'Error-prone process']
                },
                futureState: {
                    activities: ['Automated allocation engine', 'AI reciprocal solving', 'Real-time calculations'],
                    aiAgents: ['AAE', 'RSE', 'RTE'],
                    humanCheckpoints: ['Allocation results review', 'Exception approval'],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Transfer Pricing',
                currentState: {
                    activities: ['Transfer price calculation', 'Arm\'s length analysis', 'Documentation'],
                    timeRequired: '1 week',
                    painPoints: ['Complex regulations', 'Manual documentation', 'Compliance risks']
                },
                futureState: {
                    activities: ['AI transfer pricing', 'Automated compliance checks', 'Smart documentation'],
                    aiAgents: ['TPE', 'CCA', 'SDG'],
                    humanCheckpoints: ['Transfer price approval', 'Compliance sign-off'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'CCM', frequency: 1 },
            { agentId: 'CPO', frequency: 1 },
            { agentId: 'DSA', frequency: 1 },
            { agentId: 'AAE', frequency: 1 },
            { agentId: 'RSE', frequency: 1 },
            { agentId: 'RTE', frequency: 1 },
            { agentId: 'TPE', frequency: 1 },
            { agentId: 'CCA', frequency: 1 },
            { agentId: 'SDG', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '77% overall reduction'
    },
    {
        name: 'Variance Analysis',
        description: 'Cost variance analysis, root cause identification, and corrective action planning',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Variance Calculation',
                currentState: {
                    activities: ['Standard vs actual comparison', 'Variance computation', 'Variance categorization'],
                    timeRequired: '2 days',
                    painPoints: ['Manual calculations', 'Multiple variance types', 'Data reconciliation']
                },
                futureState: {
                    activities: ['Automated variance detection', 'AI categorization', 'Real-time monitoring'],
                    aiAgents: ['VAC', 'VCE', 'RTM'],
                    humanCheckpoints: ['Threshold setting approval', 'Significant variance review'],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Root Cause Analysis',
                currentState: {
                    activities: ['Investigation', 'Data drilling', 'Cause identification'],
                    timeRequired: '2-3 days',
                    painPoints: ['Time-consuming investigation', 'Limited data visibility', 'Manual analysis']
                },
                futureState: {
                    activities: ['AI root cause detection', 'Automated data mining', 'Pattern recognition'],
                    aiAgents: ['RCD', 'ADM', 'PRA'],
                    humanCheckpoints: ['Root cause validation', 'Analysis approval'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Corrective Action Planning',
                currentState: {
                    activities: ['Action identification', 'Impact assessment', 'Implementation planning'],
                    timeRequired: '1-2 days',
                    painPoints: ['Limited options', 'Manual impact analysis', 'Tracking challenges']
                },
                futureState: {
                    activities: ['AI action recommendations', 'Automated impact modeling', 'Smart tracking'],
                    aiAgents: ['CAR', 'IMA', 'STE'],
                    humanCheckpoints: ['Action plan approval', 'Implementation sign-off'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'VAC', frequency: 1 },
            { agentId: 'VCE', frequency: 1 },
            { agentId: 'RTM', frequency: 1 },
            { agentId: 'RCD', frequency: 1 },
            { agentId: 'ADM', frequency: 1 },
            { agentId: 'PRA', frequency: 1 },
            { agentId: 'CAR', frequency: 1 },
            { agentId: 'IMA', frequency: 1 },
            { agentId: 'STE', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '77% overall reduction'
    },
    {
        name: 'Standard Costing',
        description: 'Standard cost development, maintenance, and annual updates',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Standard Cost Development',
                currentState: {
                    activities: ['Historical data analysis', 'Engineering studies', 'Standard setting'],
                    timeRequired: '2-3 weeks',
                    painPoints: ['Extensive data gathering', 'Manual analysis', 'Subjective standards']
                },
                futureState: {
                    activities: ['AI historical analysis', 'Automated engineering models', 'Data-driven standards'],
                    aiAgents: ['HDA', 'AEM', 'DSS'],
                    humanCheckpoints: ['Methodology approval', 'Standard validation'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Standard Cost Maintenance',
                currentState: {
                    activities: ['Periodic reviews', 'Change impact analysis', 'Standard updates'],
                    timeRequired: 'Quarterly',
                    painPoints: ['Manual reviews', 'Limited change tracking', 'Update complexity']
                },
                futureState: {
                    activities: ['Continuous monitoring', 'AI change detection', 'Automated updates'],
                    aiAgents: ['CME', 'CDT', 'AUE'],
                    humanCheckpoints: ['Change approval', 'Update validation'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Annual Standard Reset',
                currentState: {
                    activities: ['Comprehensive review', 'Multi-scenario analysis', 'System updates'],
                    timeRequired: '3-4 weeks',
                    painPoints: ['Resource intensive', 'Complex modeling', 'System integration']
                },
                futureState: {
                    activities: ['AI-powered review', 'Automated scenario modeling', 'Seamless integration'],
                    aiAgents: ['APR', 'ASM', 'SIE'],
                    humanCheckpoints: ['Reset strategy approval', 'Final standard approval'],
                    timeReduction: '65% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'HDA', frequency: 1 },
            { agentId: 'AEM', frequency: 1 },
            { agentId: 'DSS', frequency: 1 },
            { agentId: 'CME', frequency: 1 },
            { agentId: 'CDT', frequency: 1 },
            { agentId: 'AUE', frequency: 1 },
            { agentId: 'APR', frequency: 1 },
            { agentId: 'ASM', frequency: 1 },
            { agentId: 'SIE', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '70% overall reduction'
    },
    {
        name: 'Activity-Based Costing',
        description: 'ABC model development, activity analysis, and cost driver optimization',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Activity Identification and Mapping',
                currentState: {
                    activities: ['Process mapping', 'Activity identification', 'Resource mapping'],
                    timeRequired: '2 weeks',
                    painPoints: ['Manual process mapping', 'Subjective activity definition', 'Complex relationships']
                },
                futureState: {
                    activities: ['AI process mining', 'Automated activity detection', 'Smart resource mapping'],
                    aiAgents: ['PME', 'AAD', 'SRM'],
                    humanCheckpoints: ['Activity structure approval', 'Resource allocation validation'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Cost Driver Analysis',
                currentState: {
                    activities: ['Driver identification', 'Driver data collection', 'Driver validation'],
                    timeRequired: '1 week',
                    painPoints: ['Manual driver selection', 'Data availability', 'Validation complexity']
                },
                futureState: {
                    activities: ['AI driver discovery', 'Automated data extraction', 'Statistical validation'],
                    aiAgents: ['DDE', 'ADE', 'SVE'],
                    humanCheckpoints: ['Driver selection approval', 'Data quality validation'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'ABC Model Implementation',
                currentState: {
                    activities: ['Model building', 'Cost assignment', 'Results analysis'],
                    timeRequired: '2 weeks',
                    painPoints: ['Complex modeling', 'Manual calculations', 'Limited insights']
                },
                futureState: {
                    activities: ['AI model generation', 'Automated cost flows', 'Advanced analytics'],
                    aiAgents: ['MGA', 'ACF', 'AAA'],
                    humanCheckpoints: ['Model validation', 'Results approval'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'PME', frequency: 1 },
            { agentId: 'AAD', frequency: 1 },
            { agentId: 'SRM', frequency: 1 },
            { agentId: 'DDE', frequency: 1 },
            { agentId: 'ADE', frequency: 1 },
            { agentId: 'SVE', frequency: 1 },
            { agentId: 'MGA', frequency: 1 },
            { agentId: 'ACF', frequency: 1 },
            { agentId: 'AAA', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '75% overall reduction'
    }
]; 