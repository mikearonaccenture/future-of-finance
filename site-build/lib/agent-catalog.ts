// Agent Catalog - Maps agent IDs to human-readable names
// This file provides the mapping between technical agent IDs and their display names

export interface AgentInfo {
    id: string;
    name: string;
    description?: string;
}

export const agentCatalog: Record<string, AgentInfo> = {
    // Procure to Pay Agents
    'card-request-manager-p2p': {
        id: 'card-request-manager-p2p',
        name: 'Card Request Manager',
        description: 'Manages procurement card requests and approvals'
    },
    'spending-limit-recommender-p2p': {
        id: 'spending-limit-recommender-p2p',
        name: 'Spending Limit Recommender',
        description: 'AI-powered spending limit recommendations'
    },
    'virtual-card-issuer-p2p': {
        id: 'virtual-card-issuer-p2p',
        name: 'Virtual Card Issuer',
        description: 'Issues virtual procurement cards'
    },
    'invoice-capture-processor-intelligent-p2p': {
        id: 'invoice-capture-processor-intelligent-p2p',
        name: 'Invoice Capture Processor',
        description: 'Intelligent invoice capture and processing'
    },
    'data-extractor-general': {
        id: 'data-extractor-general',
        name: 'Data Extractor',
        description: 'General purpose data extraction'
    },

    // Add more agents as needed - for now, return a default formatted name
};

// Helper function to get agent info
export function getAgentInfo(agentId: string): AgentInfo {
    // Check if we have a specific mapping
    if (agentCatalog[agentId]) {
        return agentCatalog[agentId];
    }

    // Otherwise, create a readable name from the ID
    const name = agentId
        .replace(/-p2p$/, '') // Remove domain suffix
        .replace(/-o2c$/, '')
        .replace(/-ctl$/, '')
        .replace(/-fpa$/, '')
        .replace(/-cf$/, '')
        .replace(/-ca$/, '')
        .replace(/-ir$/, '')
        .replace(/-general$/, '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        id: agentId,
        name: name,
        description: `AI agent: ${name}`
    };
} 