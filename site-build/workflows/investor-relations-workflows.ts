// Investor Relations Workflows

import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

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
                    aiAgents: ['IR-ERC', 'IR-NGE', 'IR-KMC'],
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
                    aiAgents: ['IR-PRD', 'IR-PGE', 'IR-SMC'],
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
                    aiAgents: ['IR-SDE', 'IR-QAP', 'IR-BMA'],
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
                    aiAgents: ['IR-RSA', 'IR-FAG', 'IR-FUP'],
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
                    aiAgents: ['IR-ITE', 'IR-ASC', 'IR-LOE'],
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
                    aiAgents: ['pattern-prediction-engine-engine-ir', 'IR-TPG', 'IR-RDI'],
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
                    aiAgents: ['IR-MAA', 'IR-ATE', 'IR-RDR'],
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
                    aiAgents: ['IR-MSE', 'institutional-tracker-tracker-ir', 'IR-CRI'],
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
                    aiAgents: ['IR-DAG', 'IR-SNF', 'IR-SEA', 'IR-FAA'],
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
                    aiAgents: ['IR-FBE', 'IR-APT', 'IR-SPR', 'IR-DMA'],
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
                    aiAgents: ['IR-IRS', 'IR-PTA', 'IR-DEW', 'real-time-industry-monitor-ir'],
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
                    aiAgents: ['IR-RAM', 'IR-RPE', 'IR-ACT', 'IR-SEE'],
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
                    aiAgents: ['IR-IIG', 'IR-PCA', 'IR-DRG', 'IR-RTD'],
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
    },
    // Additional Investor Relations Workflows (previously in separate file)
    {
        name: 'Investor Relations',
        description: 'Overall investor relations management, stakeholder engagement, and market perception',
        platform: EXISTING_PLATFORMS.INVESTOR_INTELLIGENCE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Investor Database Management',
                currentState: {
                    activities: ['Manual investor tracking', 'Contact information updates', 'Ownership monitoring', 'Investor categorization', 'Communication preferences'],
                    timeRequired: '2-3 days monthly',
                    painPoints: ['Outdated information', 'Manual updates', 'Limited segmentation', 'Fragmented data']
                },
                futureState: {
                    activities: ['AI-powered CRM', 'Real-time ownership tracking', 'Smart investor profiling', 'Automated categorization', 'Preference learning engine'],
                    aiAgents: ['analyst-portal-content-generator-ir', 'ownership-tracker-shareholder-ir', 'shareholder-insight-profiler-ir', 'preference-learning-engine-investor-ir'], // AI-Powered CRM, Real-time Ownership Tracker, Smart Investor Profiler, Preference Learning Engine
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DATA_VALIDATION],
                    timeReduction: '80% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Communication Strategy',
                currentState: {
                    activities: ['Message development', 'Channel selection', 'Timing coordination', 'Consistency management', 'Feedback tracking'],
                    timeRequired: '3-4 days per campaign',
                    painPoints: ['Message inconsistency', 'Channel effectiveness', 'Timing challenges', 'Limited feedback loops']
                },
                futureState: {
                    activities: ['AI message optimization', 'Smart channel selection', 'Optimal timing engine', 'Consistency automation', 'Real-time sentiment tracking'],
                    aiAgents: ['message-optimizer-communications-ir', 'channel-selector-ir', 'optimal-timing-engine-engine-ir', 'real-time-sentiment-tracker-tracker-ir'], // AI Message Optimizer, Smart Channel Selector, Optimal Timing Engine, Real-time Sentiment Tracker
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.MESSAGE_APPROVAL],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Stakeholder Engagement',
                currentState: {
                    activities: ['Meeting coordination', 'Presentation preparation', 'Q&A management', 'Follow-up tracking', 'Relationship scoring'],
                    timeRequired: '1-2 weeks per quarter',
                    painPoints: ['Scheduling complexity', 'Preparation time', 'Q&A readiness', 'Relationship tracking']
                },
                futureState: {
                    activities: ['Smart scheduling', 'AI presentation builder', 'Predictive Q&A engine', 'Automated follow-ups', 'Relationship analytics'],
                    aiAgents: ['scheduling-coordinator-ir', 'presentation-builder-ir', 'predictive-q&a-engine-engine-ir', 'relationship-analytics-engine-engine-ir'], // Smart Scheduling Coordinator, AI Presentation Builder, Predictive Q&A Engine, Relationship Analytics Engine
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ENGAGEMENT_REVIEW],
                    timeReduction: '70% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Market Intelligence',
                currentState: {
                    activities: ['Peer monitoring', 'Industry analysis', 'Investor feedback collection', 'Perception studies', 'Competitive positioning'],
                    timeRequired: '3-4 days monthly',
                    painPoints: ['Information overload', 'Analysis delays', 'Feedback fragmentation', 'Limited insights']
                },
                futureState: {
                    activities: ['AI peer analytics', 'Real-time industry monitoring', 'Sentiment aggregation', 'Perception AI', 'Dynamic positioning'],
                    aiAgents: ['peer-analytics-ir', 'real-time-industry-monitor-ir', 'sentiment-aggregation-ir', 'perception-ir'], // AI Peer Analytics, Real-time Industry Monitor, Sentiment Aggregation, Perception AI
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.INTELLIGENCE_REVIEW],
                    timeReduction: '80% reduction'
                }
            }
        ],
        totalSteps: 4,
        futureStateWorkflow: [],
        estimatedTimeSavings: '76%',
        aiAgentsUsed: ['analyst-portal-content-generator-ir', 'ownership-tracker-shareholder-ir', 'shareholder-insight-profiler-ir', 'preference-learning-engine-investor-ir', 'message-optimizer-communications-ir', 'channel-selector-ir', 'optimal-timing-engine-engine-ir', 'real-time-sentiment-tracker-tracker-ir', 'scheduling-coordinator-ir', 'presentation-builder-ir', 'predictive-q&a-engine-engine-ir', 'relationship-analytics-engine-engine-ir', 'peer-analytics-ir', 'real-time-industry-monitor-ir', 'sentiment-aggregation-ir', 'perception-ir'],
        humanCheckpointsCount: 4
    },
    {
        name: 'Stock Surveillance',
        description: 'Stock price monitoring, trading analysis, and market maker relationships',
        platform: EXISTING_PLATFORMS.MARKET_INTELLIGENCE,
        currentStateWorkflow: [
            {
                stepNumber: 1,
                description: 'Price & Volume Monitoring',
                currentState: {
                    activities: ['Daily price tracking', 'Volume analysis', 'Volatility monitoring', 'Peer comparison', 'Alert generation'],
                    timeRequired: 'Daily 1-2 hours',
                    painPoints: ['Manual monitoring', 'Delayed alerts', 'Limited pattern recognition', 'Basic analytics']
                },
                futureState: {
                    activities: ['Real-time price feeds', 'AI volume analytics', 'Predictive volatility', 'Smart peer tracking', 'Intelligent alerts'],
                    aiAgents: ['real-time-price-feed-ir', 'volume-analytics-ir', 'predictive-volatility-model-ir', 'alert-engine-engine-ir'], // Real-time Price Feed, AI Volume Analytics, Predictive Volatility Model, Intelligent Alert Engine
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ALERT_REVIEW],
                    timeReduction: '90% reduction'
                }
            },
            {
                stepNumber: 2,
                description: 'Trading Pattern Analysis',
                currentState: {
                    activities: ['Trade flow analysis', 'Institutional activity tracking', 'Short interest monitoring', 'Options activity review', 'Pattern identification'],
                    timeRequired: '2-3 hours daily',
                    painPoints: ['Complex data analysis', 'Pattern detection delays', 'Limited insights', 'Manual tracking']
                },
                futureState: {
                    activities: ['ML trade analysis', 'AI institutional tracking', 'Real-time short monitoring', 'Options AI', 'Pattern prediction engine'],
                    aiAgents: ['trade-analyzer-analyzer-ir', 'institutional-tracker-tracker-ir', 'real-time-short-monitor-ir', 'pattern-prediction-engine-engine-ir'], // ML Trade Analyzer, AI Institutional Tracker, Real-time Short Monitor, Pattern Prediction Engine
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.PATTERN_VALIDATION],
                    timeReduction: '85% reduction'
                }
            },
            {
                stepNumber: 3,
                description: 'Market Maker Relations',
                currentState: {
                    activities: ['MM communication', 'Liquidity monitoring', 'Spread analysis', 'Performance reviews', 'Issue escalation'],
                    timeRequired: '1-2 days monthly',
                    painPoints: ['Communication gaps', 'Liquidity visibility', 'Performance tracking', 'Relationship management']
                },
                futureState: {
                    activities: ['Automated MM portal', 'Real-time liquidity tracking', 'AI spread optimization', 'Performance analytics', 'Smart escalation'],
                    aiAgents: ['portal-ir', 'real-time-liquidity-tracker-tracker-ir', 'spread-optimizer-ir', 'escalation-platform-ir'], // Automated MM Portal, Real-time Liquidity Tracker, AI Spread Optimizer, Smart Escalation Platform
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.MM_RELATIONSHIP],
                    timeReduction: '75% reduction'
                }
            },
            {
                stepNumber: 4,
                description: 'Reporting & Action',
                currentState: {
                    activities: ['Daily reports', 'Management alerts', 'Board updates', 'Action recommendations', 'Regulatory filings'],
                    timeRequired: '1-2 hours daily',
                    painPoints: ['Report preparation time', 'Alert fatigue', 'Limited actionability', 'Manual filing']
                },
                futureState: {
                    activities: ['Auto-generated reports', 'Smart alert filtering', 'AI recommendations', 'Predictive actions', 'Automated filings'],
                    aiAgents: ['auto-generated-reports-ir', 'alert-filter-ir', 'recommender-ir', 'filing-framework-ir'], // Auto-Generated Reports, Smart Alert Filter, AI Recommender, Automated Filing Framework
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ACTION_APPROVAL],
                    timeReduction: '80% reduction'
                }
            }
        ],
        totalSteps: 4,
        futureStateWorkflow: [],
        estimatedTimeSavings: '83%',
        aiAgentsUsed: ['real-time-price-feed-ir', 'volume-analytics-ir', 'predictive-volatility-model-ir', 'alert-engine-engine-ir', 'trade-analyzer-analyzer-ir', 'institutional-tracker-tracker-ir', 'real-time-short-monitor-ir', 'pattern-prediction-engine-engine-ir', 'portal-ir', 'real-time-liquidity-tracker-tracker-ir', 'spread-optimizer-ir', 'escalation-platform-ir', 'auto-generated-reports-ir', 'alert-filter-ir', 'recommender-ir', 'filing-framework-ir'],
        humanCheckpointsCount: 4
    }
]; 