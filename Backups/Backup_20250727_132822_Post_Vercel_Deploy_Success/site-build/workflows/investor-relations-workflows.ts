// Investor Relations Workflows

import { SubActivity } from '../finance-workflows-overview';

export const investorRelationsWorkflows: SubActivity[] = [
    {
        name: 'Quarterly Earnings',
        description: 'Quarterly earnings preparation, press releases, and earnings call management',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Earnings Results Preparation',
                currentState: {
                    activities: ['Financial results compilation', 'Narrative development', 'Key metrics calculation'],
                    timeRequired: '1-2 weeks',
                    painPoints: ['Manual data aggregation', 'Multiple review cycles', 'Version control issues']
                },
                futureState: {
                    activities: ['Automated results compilation', 'AI narrative generation', 'Real-time metrics calculation'],
                    aiAgents: ['ERC', 'NGE', 'KMC'],
                    humanCheckpoints: ['Results validation', 'Key message approval'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Press Release and Materials Development',
                currentState: {
                    activities: ['Press release drafting', 'Presentation creation', 'Supporting materials preparation'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual drafting', 'Formatting challenges', 'Consistency issues']
                },
                futureState: {
                    activities: ['AI press release generation', 'Automated presentation assembly', 'Smart materials creation'],
                    aiAgents: ['PRD', 'PGE', 'SMC'],
                    humanCheckpoints: ['Content approval', 'Legal/compliance review'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Earnings Call Preparation',
                currentState: {
                    activities: ['Script development', 'Q&A preparation', 'Participant briefing'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual Q&A compilation', 'Limited scenario planning', 'Time-intensive preparation']
                },
                futureState: {
                    activities: ['AI script generation', 'Predictive Q&A modeling', 'Automated briefing materials'],
                    aiAgents: ['SDE', 'QAP', 'BMA'],
                    humanCheckpoints: ['Script approval', 'Executive review'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Post-Earnings Analysis',
                currentState: {
                    activities: ['Market reaction analysis', 'Analyst feedback compilation', 'Follow-up planning'],
                    timeRequired: '2-3 days',
                    painPoints: ['Manual tracking', 'Delayed insights', 'Fragmented feedback']
                },
                futureState: {
                    activities: ['Real-time sentiment analysis', 'AI feedback aggregation', 'Automated follow-up recommendations'],
                    aiAgents: ['RSA', 'FAG', 'FUP'],
                    humanCheckpoints: ['Strategy adjustment approval', 'Follow-up action approval'],
                    timeReduction: '80% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            'ERC',
            'NGE',
            'KMC',
            'PRD',
            'PGE',
            'SMC',
            'SDE',
            'QAP',
            'BMA',
            'RSA',
            'FAG',
            'FUP'
        ],
        humanCheckpointsCount: 8,
        estimatedTimeSavings: '75% overall reduction'
    },
    {
        name: 'Investment Community Relationship Mgmt',
        description: 'Conference planning, roadshow management, and one-on-one investor meetings',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Meeting Planning and Scheduling',
                currentState: {
                    activities: ['Investor targeting', 'Schedule coordination', 'Logistics planning'],
                    timeRequired: '1-2 weeks',
                    painPoints: ['Manual coordination', 'Complex scheduling', 'Time zone challenges']
                },
                futureState: {
                    activities: ['AI investor targeting', 'Automated scheduling', 'Smart logistics optimization'],
                    aiAgents: ['ITE', 'ASC', 'LOE'],
                    humanCheckpoints: ['Target investor approval', 'Schedule confirmation'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Meeting Materials Preparation',
                currentState: {
                    activities: ['Presentation customization', 'Talking points development', 'Supporting data compilation'],
                    timeRequired: '3-4 days',
                    painPoints: ['Manual customization', 'Version management', 'Data updates']
                },
                futureState: {
                    activities: ['AI presentation personalization', 'Dynamic talking points', 'Real-time data integration'],
                    aiAgents: ['PPE', 'TPG', 'RDI'],
                    humanCheckpoints: ['Content approval', 'Message consistency review'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Meeting Execution Support',
                currentState: {
                    activities: ['Meeting facilitation', 'Note taking', 'Real-time support'],
                    timeRequired: 'During meetings',
                    painPoints: ['Manual note taking', 'Limited real-time data', 'Follow-up tracking']
                },
                futureState: {
                    activities: ['AI meeting assistant', 'Automated transcription', 'Real-time data retrieval'],
                    aiAgents: ['MAA', 'ATE', 'RDR'],
                    humanCheckpoints: ['Key commitment approval', 'Follow-up validation'],
                    timeReduction: '60% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Post-Meeting Follow-up',
                currentState: {
                    activities: ['Meeting summaries', 'Action item tracking', 'Relationship management'],
                    timeRequired: '2-3 days',
                    painPoints: ['Manual summary creation', 'Tracking complexity', 'CRM updates']
                },
                futureState: {
                    activities: ['AI meeting summaries', 'Automated action tracking', 'Smart CRM integration'],
                    aiAgents: ['MSE', 'AIT', 'CRI'],
                    humanCheckpoints: ['Summary approval', 'Action prioritization'],
                    timeReduction: '80% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 4,
        aiAgentsUsed: [
            'ITE',
            'ASC',
            'LOE',
            'PPE',
            'TPG',
            'RDI',
            'MAA',
            'ATE',
            'RDR',
            'MSE',
            'AIT',
            'CRI'
        ],
        humanCheckpointsCount: 8,
        estimatedTimeSavings: '71% overall reduction'
    },
    {
        name: 'Competitive Intelligence',
        description: 'Stock performance monitoring, peer analysis, and market intelligence',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Market Data Collection & Monitoring',
                currentState: {
                    activities: ['Price and volume tracking', 'News monitoring', 'Social media scanning', 'Regulatory filing alerts'],
                    timeRequired: 'Daily 2-3 hours',
                    painPoints: ['Multiple data sources', 'Information overload', 'Manual filtering']
                },
                futureState: {
                    activities: ['AI-powered data aggregation', 'Smart news filtering', 'Sentiment analysis', 'Auto filing alerts'],
                    aiAgents: ['DAG', 'SNF', 'SEA', 'FAA'],
                    humanCheckpoints: ['Alert threshold setting'],
                    timeReduction: '90% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Competitive Analysis & Benchmarking',
                currentState: {
                    activities: ['Peer financial analysis', 'Product comparison', 'Strategy assessment', 'Market share tracking'],
                    timeRequired: 'Weekly 1-2 days',
                    painPoints: ['Manual analysis', 'Incomplete data', 'Subjective assessment']
                },
                futureState: {
                    activities: ['AI financial benchmarking', 'Automated product tracking', 'Strategy pattern recognition', 'Dynamic market analysis'],
                    aiAgents: ['FBE', 'APT', 'SPR', 'DMA'],
                    humanCheckpoints: ['Peer group validation', 'Strategic insight review'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Industry & Trend Analysis',
                currentState: {
                    activities: ['Industry report review', 'Trend identification', 'Technology disruption monitoring', 'Regulatory change tracking'],
                    timeRequired: 'Monthly 3-4 days',
                    painPoints: ['Information fragmentation', 'Trend lag', 'Missing weak signals']
                },
                futureState: {
                    activities: ['AI report synthesis', 'Predictive trend analysis', 'Disruption early warning', 'Regulatory impact modeling'],
                    aiAgents: ['IRS', 'PTA', 'DEW', 'RIM'],
                    humanCheckpoints: ['Trend validation', 'Impact assessment'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Analyst & Investor Perception',
                currentState: {
                    activities: ['Analyst report tracking', 'Rating changes monitoring', 'Estimate compilation', 'Investor feedback analysis'],
                    timeRequired: 'Weekly 1 day',
                    painPoints: ['Scattered sources', 'Delayed insights', 'Limited context']
                },
                futureState: {
                    activities: ['Real-time analyst monitoring', 'AI rating predictions', 'Automated consensus tracking', 'Sentiment evolution analysis'],
                    aiAgents: ['RAM', 'RPE', 'ACT', 'SEE'],
                    humanCheckpoints: ['Coverage change review', 'Perception shift analysis'],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 5,
                description: 'Intelligence Synthesis & Reporting',
                currentState: {
                    activities: ['Data synthesis', 'Insight generation', 'Report creation', 'Executive briefing preparation'],
                    timeRequired: 'Weekly 1-2 days',
                    painPoints: ['Manual synthesis', 'Insight gaps', 'Static reporting']
                },
                futureState: {
                    activities: ['AI insight generation', 'Pattern connection analysis', 'Dynamic report generation', 'Real-time dashboards'],
                    aiAgents: ['IIG', 'PCA', 'DRG', 'RTD'],
                    humanCheckpoints: ['Insight validation', 'Report approval'],
                    timeReduction: '80% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 5,
        aiAgentsUsed: [
            'SPM',
            'VPD',
            'PIM',
            'PBE',
            'DSA',
            'RVE',
            'ARM',
            'ETE',
            'COA'
        ],
        humanCheckpointsCount: 5,
        estimatedTimeSavings: '80% overall reduction'
    }
]; 