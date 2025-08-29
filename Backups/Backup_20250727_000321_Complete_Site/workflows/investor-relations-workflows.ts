// Investor Relations Workflows

import { SubActivity } from '../finance-workflows-overview';

export const investorRelationsWorkflows: SubActivity[] = [
    {
        name: 'Earnings Communications',
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
            { agentId: 'ERC', frequency: 1 },
            { agentId: 'NGE', frequency: 1 },
            { agentId: 'KMC', frequency: 1 },
            { agentId: 'PRD', frequency: 1 },
            { agentId: 'PGE', frequency: 1 },
            { agentId: 'SMC', frequency: 1 },
            { agentId: 'SDE', frequency: 1 },
            { agentId: 'QAP', frequency: 1 },
            { agentId: 'BMA', frequency: 1 },
            { agentId: 'RSA', frequency: 1 },
            { agentId: 'FAG', frequency: 1 },
            { agentId: 'FUP', frequency: 1 }
        ],
        humanCheckpointsCount: 8,
        estimatedTimeSavings: '75% overall reduction'
    },
    {
        name: 'Investor Meetings',
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
            { agentId: 'ITE', frequency: 1 },
            { agentId: 'ASC', frequency: 1 },
            { agentId: 'LOE', frequency: 1 },
            { agentId: 'PPE', frequency: 1 },
            { agentId: 'TPG', frequency: 1 },
            { agentId: 'RDI', frequency: 1 },
            { agentId: 'MAA', frequency: 1 },
            { agentId: 'ATE', frequency: 1 },
            { agentId: 'RDR', frequency: 1 },
            { agentId: 'MSE', frequency: 1 },
            { agentId: 'AIT', frequency: 1 },
            { agentId: 'CRI', frequency: 1 }
        ],
        humanCheckpointsCount: 8,
        estimatedTimeSavings: '71% overall reduction'
    },
    {
        name: 'Market Analysis',
        description: 'Stock performance monitoring, peer analysis, and market intelligence',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Stock Performance Monitoring',
                currentState: {
                    activities: ['Price tracking', 'Volume analysis', 'Technical indicators monitoring'],
                    timeRequired: 'Daily',
                    painPoints: ['Manual monitoring', 'Delayed alerts', 'Limited analysis depth']
                },
                futureState: {
                    activities: ['Real-time price monitoring', 'AI volume pattern detection', 'Predictive indicators'],
                    aiAgents: ['SPM', 'VPD', 'PIM'],
                    humanCheckpoints: ['Significant movement review', 'Alert threshold approval'],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Peer and Sector Analysis',
                currentState: {
                    activities: ['Peer performance comparison', 'Sector trend analysis', 'Relative valuation'],
                    timeRequired: 'Weekly',
                    painPoints: ['Manual data collection', 'Static comparisons', 'Limited insights']
                },
                futureState: {
                    activities: ['AI peer benchmarking', 'Dynamic sector analysis', 'Real-time relative valuation'],
                    aiAgents: ['PBE', 'DSA', 'RVE'],
                    humanCheckpoints: ['Peer group validation', 'Insight approval'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Analyst Coverage Monitoring',
                currentState: {
                    activities: ['Report tracking', 'Estimate compilation', 'Consensus analysis'],
                    timeRequired: 'Ongoing',
                    painPoints: ['Manual tracking', 'Delayed updates', 'Fragmented sources']
                },
                futureState: {
                    activities: ['Automated report monitoring', 'Real-time estimate tracking', 'AI consensus analysis'],
                    aiAgents: ['ARM', 'ETE', 'COA'],
                    humanCheckpoints: ['Coverage change review', 'Estimate variance analysis'],
                    timeReduction: '75% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'SPM', frequency: 1 },
            { agentId: 'VPD', frequency: 1 },
            { agentId: 'PIM', frequency: 1 },
            { agentId: 'PBE', frequency: 1 },
            { agentId: 'DSA', frequency: 1 },
            { agentId: 'RVE', frequency: 1 },
            { agentId: 'ARM', frequency: 1 },
            { agentId: 'ETE', frequency: 1 },
            { agentId: 'COA', frequency: 1 }
        ],
        humanCheckpointsCount: 5,
        estimatedTimeSavings: '80% overall reduction'
    },
    {
        name: 'ESG Reporting',
        description: 'Sustainability reporting, ESG metrics tracking, and stakeholder engagement',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'ESG Data Collection',
                currentState: {
                    activities: ['Environmental data gathering', 'Social metrics compilation', 'Governance documentation'],
                    timeRequired: '3-4 weeks',
                    painPoints: ['Fragmented data sources', 'Manual collection', 'Verification challenges']
                },
                futureState: {
                    activities: ['Automated ESG data extraction', 'AI metric validation', 'Real-time tracking'],
                    aiAgents: ['EDC', 'MVE', 'RTE'],
                    humanCheckpoints: ['Data accuracy verification', 'Metric approval'],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'ESG Report Development',
                currentState: {
                    activities: ['Report writing', 'Framework alignment', 'Visual design'],
                    timeRequired: '2-3 weeks',
                    painPoints: ['Manual report creation', 'Multiple framework requirements', 'Design complexity']
                },
                futureState: {
                    activities: ['AI report generation', 'Automated framework mapping', 'Dynamic visualization'],
                    aiAgents: ['ERG', 'FMA', 'DVE'],
                    humanCheckpoints: ['Content approval', 'Framework compliance review'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Stakeholder Engagement',
                currentState: {
                    activities: ['Stakeholder identification', 'Communication planning', 'Feedback management'],
                    timeRequired: 'Ongoing',
                    painPoints: ['Manual stakeholder mapping', 'Limited engagement tracking', 'Feedback fragmentation']
                },
                futureState: {
                    activities: ['AI stakeholder mapping', 'Automated engagement campaigns', 'Integrated feedback analysis'],
                    aiAgents: ['SMA', 'ECA', 'IFA'],
                    humanCheckpoints: ['Engagement strategy approval', 'Response validation'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'EDC', frequency: 1 },
            { agentId: 'MVE', frequency: 1 },
            { agentId: 'RTE', frequency: 1 },
            { agentId: 'ERG', frequency: 1 },
            { agentId: 'FMA', frequency: 1 },
            { agentId: 'DVE', frequency: 1 },
            { agentId: 'SMA', frequency: 1 },
            { agentId: 'ECA', frequency: 1 },
            { agentId: 'IFA', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '72% overall reduction'
    },
    {
        name: 'Shareholder Services',
        description: 'Shareholder inquiries, proxy management, and annual meeting coordination',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Shareholder Inquiry Management',
                currentState: {
                    activities: ['Inquiry receipt and routing', 'Response drafting', 'Follow-up tracking'],
                    timeRequired: 'Daily',
                    painPoints: ['Manual routing', 'Response delays', 'Tracking complexity']
                },
                futureState: {
                    activities: ['AI inquiry classification', 'Automated response generation', 'Smart tracking'],
                    aiAgents: ['ICA', 'RGE', 'STE'],
                    humanCheckpoints: ['Complex inquiry review', 'Response approval'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Proxy Solicitation and Voting',
                currentState: {
                    activities: ['Proxy material preparation', 'Solicitation campaign', 'Vote tabulation'],
                    timeRequired: '2-3 months',
                    painPoints: ['Complex preparation', 'Manual solicitation', 'Vote tracking challenges']
                },
                futureState: {
                    activities: ['AI proxy generation', 'Automated solicitation', 'Real-time vote tracking'],
                    aiAgents: ['PGE', 'ASO', 'VTE'],
                    humanCheckpoints: ['Proxy content approval', 'Voting results certification'],
                    timeReduction: '65% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Annual Meeting Management',
                currentState: {
                    activities: ['Meeting planning', 'Material preparation', 'Shareholder registration'],
                    timeRequired: '3-4 months',
                    painPoints: ['Complex logistics', 'Manual registration', 'Material distribution']
                },
                futureState: {
                    activities: ['AI meeting planning', 'Automated material assembly', 'Digital registration'],
                    aiAgents: ['MPA', 'MAG', 'DRE'],
                    humanCheckpoints: ['Meeting agenda approval', 'Final material review'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'ICA', frequency: 1 },
            { agentId: 'RGE', frequency: 1 },
            { agentId: 'STE', frequency: 1 },
            { agentId: 'PGE', frequency: 1 },
            { agentId: 'ASO', frequency: 1 },
            { agentId: 'VTE', frequency: 1 },
            { agentId: 'MPA', frequency: 1 },
            { agentId: 'MAG', frequency: 1 },
            { agentId: 'DRE', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '72% overall reduction'
    },
    {
        name: 'Regulatory Filings',
        description: 'SEC filings, exchange compliance, and regulatory communication',
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Filing Preparation',
                currentState: {
                    activities: ['Document compilation', 'XBRL tagging', 'Review and validation'],
                    timeRequired: '1-2 weeks',
                    painPoints: ['Manual compilation', 'Complex tagging', 'Multiple review cycles']
                },
                futureState: {
                    activities: ['Automated document assembly', 'AI XBRL tagging', 'Smart validation'],
                    aiAgents: ['FDA', 'XTE', 'SVA'],
                    humanCheckpoints: ['Content accuracy review', 'Final filing approval'],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Compliance Monitoring',
                currentState: {
                    activities: ['Deadline tracking', 'Requirement monitoring', 'Change management'],
                    timeRequired: 'Ongoing',
                    painPoints: ['Manual tracking', 'Regulatory complexity', 'Change detection']
                },
                futureState: {
                    activities: ['AI deadline management', 'Automated requirement tracking', 'Real-time change alerts'],
                    aiAgents: ['DMA', 'RTE', 'CAL'],
                    humanCheckpoints: ['Compliance confirmation', 'Change impact assessment'],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Regulatory Communication',
                currentState: {
                    activities: ['Comment letter responses', 'Regulatory inquiries', 'Disclosure updates'],
                    timeRequired: 'As needed',
                    painPoints: ['Complex responses', 'Time pressure', 'Consistency challenges']
                },
                futureState: {
                    activities: ['AI response drafting', 'Automated disclosure updates', 'Smart consistency checks'],
                    aiAgents: ['RDE', 'DUE', 'CCE'],
                    humanCheckpoints: ['Response approval', 'Legal review'],
                    timeReduction: '70% reduction'
                }
            }
        ],
        futureStateWorkflow: [],
        totalSteps: 3,
        aiAgentsUsed: [
            { agentId: 'FDA', frequency: 1 },
            { agentId: 'XTE', frequency: 1 },
            { agentId: 'SVA', frequency: 1 },
            { agentId: 'DMA', frequency: 1 },
            { agentId: 'RTE', frequency: 1 },
            { agentId: 'CAL', frequency: 1 },
            { agentId: 'RDE', frequency: 1 },
            { agentId: 'DUE', frequency: 1 },
            { agentId: 'CCE', frequency: 1 }
        ],
        humanCheckpointsCount: 6,
        estimatedTimeSavings: '75% overall reduction'
    }
]; 