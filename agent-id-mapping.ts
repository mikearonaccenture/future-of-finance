// Agent ID Mapping - Old to New ID Conversions
// Purpose: Map legacy agent IDs to new standardized IDs for migration

export interface AgentIdMapping {
    oldId: string;
    newId: string;
    agentName: string;
    reason: string;
    conflicts?: string[];  // Other agents that used the same old ID
}

// Complete mapping of all legacy IDs to new IDs
export const AGENT_ID_MAPPINGS: AgentIdMapping[] = [
    // ===== UNIQUE MAPPINGS (No conflicts) =====
    {
        oldId: 'TB',
        newId: 'RTR-BALANCE-001',
        agentName: 'Trial Balance Analyzer',
        reason: 'Unique ID - no conflicts'
    },
    {
        oldId: 'JE',
        newId: 'RTR-JOURNAL-001',
        agentName: 'Journal Entry Creator',
        reason: 'Primary journal entry agent'
    },
    {
        oldId: 'BR',
        newId: 'RTR-RECON-001',
        agentName: 'Balance Reconciler',
        reason: 'Balance sheet reconciliation'
    },
    {
        oldId: 'IR',
        newId: 'RTR-INTERCO-001',
        agentName: 'Intercompany Reconciler',
        reason: 'Intercompany reconciliation'
    },
    {
        oldId: 'RG',
        newId: 'RTR-REPORT-001',
        agentName: 'Report Generator',
        reason: 'Financial report generation'
    },
    {
        oldId: 'IC',
        newId: 'PTP-INVOICE-001',
        agentName: 'Invoice Capture Agent',
        reason: 'Invoice capture and processing'
    },
    {
        oldId: 'DV',
        newId: 'PTP-VALIDATE-001',
        agentName: 'Data Validation Agent',
        reason: 'Invoice data validation'
    },
    {
        oldId: 'EH',
        newId: 'PTP-EXCEPTION-001',
        agentName: 'Exception Handler',
        reason: 'Exception handling primary agent'
    },
    {
        oldId: 'AR',
        newId: 'PTP-APPROVAL-001',
        agentName: 'Approval Router',
        reason: 'Approval routing and workflow'
    },
    {
        oldId: 'DM',
        newId: 'PTP-DECISION-001',
        agentName: 'Decision Maker',
        reason: 'Automated approval decisions'
    },
    {
        oldId: 'PO',
        newId: 'PTP-PAYMENT-001',
        agentName: 'Payment Optimizer',
        reason: 'Payment optimization'
    },
    {
        oldId: 'FD',
        newId: 'PTP-FRAUD-001',
        agentName: 'Fraud Detector',
        reason: 'Fraud detection and prevention'
    },
    {
        oldId: 'PE',
        newId: 'PTP-PAYMENT-001',
        agentName: 'Payment Executor',
        reason: 'Merged with Payment Optimizer'
    },
    {
        oldId: 'DG',
        newId: 'FPA-DATA-001',
        agentName: 'Data Gatherer',
        reason: 'FP&A data collection'
    },
    {
        oldId: 'SM',
        newId: 'FPA-SCENARIO-001',
        agentName: 'Scenario Modeler',
        reason: 'Scenario planning and modeling'
    },
    {
        oldId: 'OV',
        newId: 'OTC-ORDER-001',
        agentName: 'Order Validator',
        reason: 'Order validation'
    },
    {
        oldId: 'CR',
        newId: 'OTC-CASH-001',
        agentName: 'Cash Reconciler',
        reason: 'Cash application and reconciliation'
    },
    {
        oldId: 'CF',
        newId: 'CRP-CASH-001',
        agentName: 'Cash Flow Forecaster',
        reason: 'Corporate finance cash forecasting'
    },
    {
        oldId: 'EC',
        newId: 'INV-EARN-001',
        agentName: 'Earnings Compiler',
        reason: 'Investor relations earnings'
    },

    // ===== CONFLICTED MAPPINGS (Multiple agents used same ID) =====

    // CC - Used by multiple agents
    {
        oldId: 'CC',
        newId: 'RTR-CLOSE-001',
        agentName: 'Close Calendar Agent',
        reason: 'Primary close management agent in RTR',
        conflicts: ['CST-CALC-001']
    },
    {
        oldId: 'CC',
        newId: 'CST-CALC-001',
        agentName: 'Cost Calculator',
        reason: 'Cost calculation agent in Cost Accounting',
        conflicts: ['RTR-CLOSE-001']
    },

    // VA - Used by multiple agents (major conflict)
    {
        oldId: 'VA',
        newId: 'RTR-VARIANCE-001',
        agentName: 'Variance Analyzer (RTR)',
        reason: 'Variance analysis in Record to Report',
        conflicts: ['FPA-VARIANCE-001', 'CRP-VALUE-001']
    },
    {
        oldId: 'VA',
        newId: 'FPA-VARIANCE-001',
        agentName: 'Variance Analyzer (FPA)',
        reason: 'Variance analysis in FP&A',
        conflicts: ['RTR-VARIANCE-001', 'CRP-VALUE-001']
    },
    {
        oldId: 'VA',
        newId: 'CRP-VALUE-001',
        agentName: 'Valuation Analyst',
        reason: 'Business valuation in Corporate Finance',
        conflicts: ['RTR-VARIANCE-001', 'FPA-VARIANCE-001']
    },

    // IG - Used by multiple agents
    {
        oldId: 'IG',
        newId: 'RTR-INSIGHT-001',
        agentName: 'Insight Generator (RTR)',
        reason: 'Financial insights in Record to Report',
        conflicts: ['OTC-INVOICE-001', 'FPA-INSIGHT-001']
    },
    {
        oldId: 'IG',
        newId: 'OTC-INVOICE-001',
        agentName: 'Invoice Generator',
        reason: 'Invoice generation in Order to Cash',
        conflicts: ['RTR-INSIGHT-001', 'FPA-INSIGHT-001']
    },
    {
        oldId: 'IG',
        newId: 'FPA-INSIGHT-001',
        agentName: 'Insight Engine',
        reason: 'Strategic insights in FP&A',
        conflicts: ['RTR-INSIGHT-001', 'OTC-INVOICE-001']
    },

    // CM - Used by multiple agents
    {
        oldId: 'CM',
        newId: 'RTR-CHECKLIST-001',
        agentName: 'Close Checklist Manager',
        reason: 'Close checklist management',
        conflicts: ['OTC-COLLECT-001']
    },
    {
        oldId: 'CM',
        newId: 'OTC-COLLECT-001',
        agentName: 'Collections Manager',
        reason: 'Collections management in OTC',
        conflicts: ['RTR-CHECKLIST-001']
    },

    // CA - Used by multiple agents
    {
        oldId: 'CA',
        newId: 'FPA-CONSOL-001',
        agentName: 'Consolidation Agent',
        reason: 'Budget consolidation in FP&A',
        conflicts: ['OTC-CREDIT-001']
    },
    {
        oldId: 'CA',
        newId: 'OTC-CREDIT-001',
        agentName: 'Credit Analyzer',
        reason: 'Credit analysis in Order to Cash',
        conflicts: ['FPA-CONSOL-001']
    },

    // PA - Used by multiple agents
    {
        oldId: 'PA',
        newId: 'FPA-PREDICT-001',
        agentName: 'Predictive Analyst',
        reason: 'Predictive analytics in FP&A',
        conflicts: ['CST-PROFIT-001']
    },
    {
        oldId: 'PA',
        newId: 'CST-PROFIT-001',
        agentName: 'Profitability Analyzer',
        reason: 'Profitability analysis in Cost Accounting',
        conflicts: ['FPA-PREDICT-001']
    },

    // AM - Used by multiple agents
    {
        oldId: 'AM',
        newId: 'FPA-ASSUME-001',
        agentName: 'Assumption Manager',
        reason: 'Assumption management in FP&A',
        conflicts: ['FPA-APPROVE-001']
    },
    {
        oldId: 'AM',
        newId: 'FPA-APPROVE-001',
        agentName: 'Approval Manager',
        reason: 'Approval workflow in FP&A',
        conflicts: ['FPA-ASSUME-001']
    },

    // CO - Used by multiple agents
    {
        oldId: 'CO',
        newId: 'RTR-CLOSE-001',
        agentName: 'Close Orchestrator',
        reason: 'Merged with Close Calendar Agent',
        conflicts: ['CST-OPTIMIZE-001']
    },
    {
        oldId: 'CO',
        newId: 'CST-OPTIMIZE-001',
        agentName: 'Cost Optimizer',
        reason: 'Cost optimization in Cost Accounting',
        conflicts: ['RTR-CLOSE-001']
    },

    // SG - Used by multiple agents
    {
        oldId: 'SG',
        newId: 'RTR-REPORT-001',
        agentName: 'Statement Generator',
        reason: 'Merged with Report Generator',
        conflicts: ['INV-SCRIPT-001']
    },
    {
        oldId: 'SG',
        newId: 'INV-SCRIPT-001',
        agentName: 'Script Generator',
        reason: 'Earnings call scripts in IR',
        conflicts: ['RTR-REPORT-001']
    },

    // AI - Special case (Accrual Identifier)
    {
        oldId: 'AI',
        newId: 'RTR-ACCRUAL-001',
        agentName: 'Accrual Identifier',
        reason: 'Accrual identification (not Artificial Intelligence)'
    },

    // ===== KEBAB-CASE IDs FROM lib/agents =====
    {
        oldId: 'forecast-optimizer',
        newId: 'FPA-FORECAST-001',
        agentName: 'Forecast Optimizer',
        reason: 'Standardizing to new format'
    },
    {
        oldId: 'variance-detective',
        newId: 'FPA-VARIANCE-001',
        agentName: 'Variance Detective',
        reason: 'Standardizing to new format'
    },
    {
        oldId: 'cash-flow-prophet',
        newId: 'OTC-CASH-001',
        agentName: 'Cash Flow Prophet',
        reason: 'Merged with Cash Reconciler'
    },
    {
        oldId: 'risk-sentinel',
        newId: 'CRP-RISK-001',
        agentName: 'Risk Sentinel',
        reason: 'Standardizing to new format'
    },
    {
        oldId: 'insight-engine',
        newId: 'FPA-INSIGHT-001',
        agentName: 'Insight Engine',
        reason: 'Standardizing to new format'
    },
    {
        oldId: 'automation-orchestrator',
        newId: 'GEN-AUTO-001',
        agentName: 'Automation Orchestrator',
        reason: 'Standardizing to new format'
    }
];

// Helper function to get all mappings for a specific old ID
export function getMappingsForOldId(oldId: string): AgentIdMapping[] {
    return AGENT_ID_MAPPINGS.filter(mapping => mapping.oldId === oldId);
}

// Helper function to get the primary mapping for an old ID (for automated migration)
export function getPrimaryMappingForOldId(oldId: string): AgentIdMapping | undefined {
    const mappings = getMappingsForOldId(oldId);

    // If only one mapping, return it
    if (mappings.length === 1) {
        return mappings[0];
    }

    // If multiple mappings, try to determine the primary one
    // This would need business logic to determine which is primary
    // For now, return the first one and log a warning
    if (mappings.length > 1) {
        console.warn(`Multiple mappings found for ${oldId}. Returning first mapping.`);
        return mappings[0];
    }

    return undefined;
}

// Helper function to check if an old ID has conflicts
export function hasConflicts(oldId: string): boolean {
    const mappings = getMappingsForOldId(oldId);
    return mappings.length > 1 || (mappings[0]?.conflicts && mappings[0].conflicts.length > 0);
}

// Get all unique old IDs
export function getAllOldIds(): string[] {
    const oldIds = new Set<string>();
    AGENT_ID_MAPPINGS.forEach(mapping => oldIds.add(mapping.oldId));
    return Array.from(oldIds).sort();
}

// Get conflict report
export function getConflictReport() {
    const conflicts: Record<string, AgentIdMapping[]> = {};

    AGENT_ID_MAPPINGS.forEach(mapping => {
        if (mapping.conflicts && mapping.conflicts.length > 0) {
            if (!conflicts[mapping.oldId]) {
                conflicts[mapping.oldId] = [];
            }
            conflicts[mapping.oldId].push(mapping);
        }
    });

    return conflicts;
} 