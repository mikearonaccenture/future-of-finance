// Additional Investor Relations Workflows

import { EXISTING_PLATFORMS } from '../finance-platform-mapping';
import { HUMAN_CHECKPOINT_TYPES, SubActivity } from '../finance-workflows-overview';

export const investorRelationsAdditionalWorkflows: SubActivity[] = [
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
                    aiAgents: ['APC', 'ROT', 'SIP', 'PLE'], // AI-Powered CRM, Real-time Ownership Tracker, Smart Investor Profiler, Preference Learning Engine
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
                    aiAgents: ['AMO', 'SCS', 'OTE', 'RST'], // AI Message Optimizer, Smart Channel Selector, Optimal Timing Engine, Real-time Sentiment Tracker
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
                    aiAgents: ['SSC', 'APB', 'PQE', 'RAE'], // Smart Scheduling Coordinator, AI Presentation Builder, Predictive Q&A Engine, Relationship Analytics Engine
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
                    aiAgents: ['APA', 'RIM', 'SAG', 'PAI'], // AI Peer Analytics, Real-time Industry Monitor, Sentiment Aggregation, Perception AI
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.INTELLIGENCE_REVIEW],
                    timeReduction: '80% reduction'
                }
            }
        ],
        totalSteps: 4,
        futureStateWorkflow: [],
        estimatedTimeSavings: '76%',
        aiAgentsUsed: ['APC', 'ROT', 'SIP', 'PLE', 'AMO', 'SCS', 'OTE', 'RST', 'SSC', 'APB', 'PQE', 'RAE', 'APA', 'RIM', 'SAG', 'PAI'],
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
                    aiAgents: ['RPF', 'AVA', 'PVM', 'IAE'], // Real-time Price Feed, AI Volume Analytics, Predictive Volatility Model, Intelligent Alert Engine
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
                    aiAgents: ['MTA', 'AIT', 'RSM', 'PPE'], // ML Trade Analyzer, AI Institutional Tracker, Real-time Short Monitor, Pattern Prediction Engine
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
                    aiAgents: ['AMP', 'RLT', 'ASO', 'SEP'], // Automated MM Portal, Real-time Liquidity Tracker, AI Spread Optimizer, Smart Escalation Platform
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
                    aiAgents: ['AGR', 'SAF', 'AIR', 'AFF'], // Auto-Generated Reports, Smart Alert Filter, AI Recommender, Automated Filing Framework
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ACTION_APPROVAL],
                    timeReduction: '80% reduction'
                }
            }
        ],
        totalSteps: 4,
        futureStateWorkflow: [],
        estimatedTimeSavings: '83%',
        aiAgentsUsed: ['RPF', 'AVA', 'PVM', 'IAE', 'MTA', 'AIT', 'RSM', 'PPE', 'AMP', 'RLT', 'ASO', 'SEP', 'AGR', 'SAF', 'AIR', 'AFF'],
        humanCheckpointsCount: 4
    }
];