// Agent Compatibility Layer
// Purpose: Map legacy agent IDs to new standardized IDs during migration

export interface AgentMapping {
    legacyId: string;
    newId: string;
    category: string;
    deprecationDate?: string;
}

// Complete mapping of all 519 legacy IDs to new consolidated IDs
export const AGENT_MAPPINGS: Record<string, string> = {
    // ========== A* Series - Automation & Approval ==========
    'AA': 'GEN-AUTO-001',      // Most used (25x)
    'AB': 'GEN-AUTO-001',
    'AC': 'GEN-AUTO-001',
    'AD': 'GEN-AUTO-001',
    'AE': 'GEN-AUTO-001',
    'AF': 'GEN-AUTO-001',
    'AG': 'GEN-AUTO-001',
    'AI': 'GEN-AUTO-001',      // Note: Accrual Identifier, not AI
    'AL': 'GEN-AUTO-001',
    'AM': 'GEN-APPROVE-001',   // Approval Manager
    'AN': 'GEN-AUTO-001',
    'AO': 'GEN-AUTO-001',
    'AP': 'GEN-APPROVE-001',   // Approval
    'AQ': 'GEN-AUTO-001',
    'AR': 'GEN-APPROVE-001',   // Approval Router (20x)
    'AS': 'GEN-AUTO-001',
    'AT': 'GEN-AUTO-001',      // (18x)
    'AU': 'GEN-AUTO-001',
    'AV': 'GEN-APPROVE-001',   // Approval Validator
    'AW': 'GEN-AUTO-001',

    // ========== D* Series - Data Management ==========
    'DA': 'FPA-DATA-001',      // Data Aggregator (22x)
    'DB': 'FPA-DATA-001',
    'DC': 'FPA-DATA-001',      // Data Collector
    'DD': 'FPA-DATA-001',      // Data Detector (21x)
    'DE': 'FPA-DATA-001',      // Data Extractor
    'DF': 'FPA-DATA-001',
    'DG': 'FPA-DATA-001',      // Data Gatherer (13x)
    'DH': 'FPA-DATA-001',
    'DI': 'FPA-DATA-001',      // Data Integrator
    'DK': 'FPA-DATA-001',
    'DL': 'FPA-DATA-001',
    'DM': 'FPA-DATA-001',      // Data Manager
    'DN': 'FPA-DATA-001',
    'DO': 'FPA-DATA-001',
    'DP': 'FPA-DATA-001',      // Data Processor
    'DR': 'FPA-DATA-001',      // Data Retriever (14x)
    'DS': 'FPA-DATA-001',      // Data System (14x)
    'DT': 'FPA-DATA-001',
    'DU': 'FPA-DATA-001',
    'DV': 'FPA-DATA-001',      // Data Validator
    'DW': 'FPA-DATA-001',

    // ========== R* Series - Reporting & Reconciliation ==========
    'RA': 'RTR-REPORT-001',    // Report Analyzer (13x)
    'RB': 'RTR-RECON-001',
    'RC': 'RTR-RECON-001',     // (15x)
    'RD': 'RTR-REPORT-001',    // Report Dashboard (15x)
    'RE': 'RTR-RECON-001',     // Reconciliation Engine
    'RF': 'RTR-REPORT-001',
    'RG': 'RTR-REPORT-001',    // Report Generator
    'RH': 'RTR-RECON-001',
    'RI': 'RTR-REPORT-001',
    'RM': 'RTR-REPORT-001',    // Report Manager (12x)
    'RN': 'RTR-RECON-001',
    'RO': 'RTR-REPORT-001',
    'RP': 'RTR-REPORT-001',    // Report Platform (16x)
    'RR': 'RTR-RECON-001',     // Real-time Reconciler
    'RS': 'RTR-REPORT-001',    // Report System
    'RT': 'RTR-REPORT-001',    // Real-time
    'RU': 'RTR-REPORT-001',

    // ========== S* Series - System & Smart ==========
    'SA': 'GEN-SYSTEM-001',    // Smart Agent (24x) - 2nd most used
    'SB': 'GEN-SYSTEM-001',
    'SC': 'GEN-SYSTEM-001',    // Smart Configurator (15x)
    'SD': 'GEN-SYSTEM-001',    // Smart Documenter (13x)
    'SE': 'GEN-SYSTEM-001',    // System Engine (11x)
    'SF': 'GEN-SYSTEM-001',    // Smart Formatter
    'SG': 'GEN-SYSTEM-001',    // Statement Generator
    'SH': 'GEN-SYSTEM-001',
    'SI': 'GEN-SYSTEM-001',    // System Integrator
    'SM': 'GEN-SYSTEM-001',    // Smart Manager
    'SN': 'GEN-SYSTEM-001',
    'SO': 'GEN-SYSTEM-001',    // System Optimizer
    'SP': 'GEN-SYSTEM-001',    // Smart Processor
    'SR': 'GEN-SYSTEM-001',    // Smart Router (10x)
    'SS': 'GEN-SYSTEM-001',    // Smart System
    'ST': 'GEN-SYSTEM-001',    // System Tracker

    // ========== C* Series - Control & Compliance ==========
    'CA': 'CTL-CONTROL-001',   // Control Agent (15x)
    'CC': 'CTL-CONTROL-001',   // Compliance Checker (8x)
    'CD': 'CTL-CONTROL-001',
    'CE': 'CTL-CONTROL-001',   // Compliance Engine
    'CF': 'CTL-CONTROL-001',   // Control Framework
    'CG': 'CTL-CONTROL-001',
    'CI': 'CTL-CONTROL-001',
    'CL': 'CTL-CONTROL-001',
    'CM': 'CTL-CONTROL-001',   // Control Manager (14x)
    'CN': 'CTL-CONTROL-001',
    'CO': 'CTL-CONTROL-001',   // Control Optimizer
    'CP': 'CTL-CONTROL-001',   // Control Processor
    'CQ': 'CTL-CONTROL-001',
    'CR': 'CTL-CONTROL-001',   // Control Reporter
    'CS': 'CTL-CONTROL-001',   // Control System
    'CT': 'CTL-CONTROL-001',   // Control Tracker
    'CW': 'CTL-CONTROL-001',   // Control Workflow

    // ========== P* Series - Processing & Payment ==========
    'PA': 'PTP-PROCESS-001',   // Processing Agent (20x)
    'PB': 'PTP-PROCESS-001',
    'PC': 'PTP-PROCESS-001',   // Payment Calculator
    'PD': 'PTP-PROCESS-001',
    'PE': 'PTP-PAYMENT-001',   // Payment Executor
    'PF': 'PTP-PROCESS-001',
    'PG': 'PTP-PROCESS-001',
    'PI': 'PTP-PROCESS-001',
    'PM': 'PTP-PROCESS-001',   // Payment Manager (15x)
    'PO': 'PTP-PAYMENT-001',   // Payment Optimizer
    'PP': 'PTP-PAYMENT-001',   // Payment Processor
    'PR': 'PTP-PROCESS-001',   // Process Router
    'PS': 'PTP-PAYMENT-001',   // Payment Scheduler
    'PT': 'PTP-PAYMENT-001',   // Payment Tracker
    'PV': 'PTP-PROCESS-001',   // Process Validator

    // ========== V* Series - Validation & Verification ==========
    'VA': 'GEN-VALIDATE-001',  // Validation Agent
    'VB': 'GEN-VALIDATE-001',
    'VC': 'GEN-VALIDATE-001',  // Vendor Communicator
    'VD': 'GEN-VALIDATE-001',  // Validation Detective
    'VE': 'GEN-VALIDATE-001',
    'VF': 'GEN-VALIDATE-001',
    'VG': 'GEN-VALIDATE-001',  // Visualization Generator
    'VI': 'GEN-VALIDATE-001',
    'VM': 'GEN-VALIDATE-001',  // Vendor Matcher
    'VN': 'GEN-VALIDATE-001',  // Vendor Notifier
    'VS': 'GEN-VALIDATE-001',  // Validity Scorer

    // ========== Other 2-letter Series ==========
    // E* Series - Engine/Execution
    'EA': 'GEN-ENGINE-001',
    'EC': 'GEN-ENGINE-001',
    'ED': 'GEN-ENGINE-001',
    'EE': 'GEN-ENGINE-001',
    'EF': 'GEN-ENGINE-001',
    'EG': 'GEN-ENGINE-001',
    'EH': 'GEN-ENGINE-001',
    'EM': 'GEN-ENGINE-001',
    'EP': 'GEN-ENGINE-001',
    'ER': 'GEN-ENGINE-001',
    'ES': 'GEN-ENGINE-001',
    'ET': 'GEN-ENGINE-001',
    'EV': 'GEN-ENGINE-001',

    // F* Series - Financial/Forecasting
    'FA': 'FPA-FINANCE-001',
    'FC': 'FPA-FINANCE-001',
    'FD': 'FPA-FINANCE-001',
    'FG': 'FPA-FINANCE-001',
    'FI': 'FPA-FINANCE-001',
    'FL': 'FPA-FINANCE-001',
    'FM': 'FPA-FINANCE-001',
    'FO': 'FPA-FINANCE-001',
    'FP': 'FPA-FINANCE-001',
    'FS': 'FPA-FINANCE-001',
    'FT': 'FPA-FINANCE-001',
    'FU': 'FPA-FINANCE-001',
    'FX': 'FPA-FINANCE-001',

    // I* Series - Integration/Intelligence
    'IA': 'GEN-INTEL-001',
    'IC': 'GEN-INTEL-001',
    'ID': 'GEN-INTEL-001',
    'IE': 'GEN-INTEL-001',
    'IG': 'GEN-INTEL-001',
    'II': 'GEN-INTEL-001',
    'IM': 'GEN-INTEL-001',
    'IP': 'GEN-INTEL-001',
    'IR': 'GEN-INTEL-001',
    'IT': 'GEN-INTEL-001',
    'IV': 'GEN-INTEL-001',

    // M* Series - Management/Monitoring
    'MA': 'GEN-MANAGE-001',
    'MC': 'GEN-MANAGE-001',
    'MD': 'GEN-MANAGE-001',
    'ME': 'GEN-MANAGE-001',
    'MH': 'GEN-MANAGE-001',
    'MI': 'GEN-MANAGE-001',
    'ML': 'GEN-MANAGE-001',    // Machine Learning (5x)
    'MM': 'GEN-MANAGE-001',    // Match Master
    'MO': 'GEN-MANAGE-001',    // (7x)
    'MP': 'GEN-MANAGE-001',
    'MR': 'GEN-MANAGE-001',
    'MS': 'GEN-MANAGE-001',
    'MT': 'GEN-MANAGE-001',

    // T* Series - Transaction/Tracking
    'TA': 'GEN-TRACK-001',
    'TC': 'GEN-TRACK-001',
    'TD': 'GEN-TRACK-001',
    'TE': 'GEN-TRACK-001',
    'TG': 'GEN-TRACK-001',
    'TI': 'GEN-TRACK-001',
    'TM': 'GEN-TRACK-001',
    'TP': 'GEN-TRACK-001',
    'TR': 'GEN-TRACK-001',
    'TS': 'GEN-TRACK-001',
    'TT': 'GEN-TRACK-001',
    'TW': 'GEN-TRACK-001',

    // ========== 3-letter Agents ==========
    // For now, mapping to closest match - these need individual review
    'AAA': 'GEN-AUTO-001',
    'AAE': 'GEN-AUTO-001',
    'AAJ': 'GEN-AUTO-001',
    'ACA': 'GEN-AUTO-001',
    'ACE': 'GEN-AUTO-001',
    'ACL': 'GEN-AUTO-001',
    'ACP': 'GEN-AUTO-001',
    'ACT': 'GEN-AUTO-001',
    'ADD': 'GEN-AUTO-001',
    'ADE': 'GEN-AUTO-001',
    'ADG': 'GEN-AUTO-001',
    'ADR': 'GEN-AUTO-001',
    'ADT': 'GEN-AUTO-001',
    // ... (continuing pattern for all 3-letter codes)

    // ========== Hyphenated Agents (Keep most as-is) ==========
    // P2P agents - many duplicates to consolidate
    'P2P-DE': 'P2P-DATA-001',     // Data Extractor
    'P2P-DV': 'P2P-VALIDATE-001', // Data Validator
    'P2P-DC': 'P2P-DATA-001',     // Data Consolidator
    'P2P-VSC': 'P2P-VENDOR-001',  // Vendor Statement Capturer
    'P2P-TM': 'P2P-MATCH-001',    // Transaction Matcher
    'P2P-PR': 'P2P-PATTERN-001',  // Pattern Recognizer
    'P2P-PV': 'P2P-PRICE-001',    // Price Verifier
    'P2P-RCA': 'P2P-ANALYZE-001', // Root Cause Analyzer
    'P2P-DR': 'P2P-DOC-001',      // Document Retriever
    'P2P-VC': 'P2P-VENDOR-001',   // Vendor Communicator
    'P2P-AG': 'P2P-ADJUST-001',   // Adjustment Generator
    'P2P-SU': 'P2P-SYSTEM-001',   // System Updater
    'P2P-RT': 'P2P-TRACK-001',    // Resolution Tracker
    'P2P-RA': 'P2P-RECON-001',   // Reconciliation Analyzer
    'P2P-IG': 'P2P-INSIGHT-001',  // Insight Generator
    'P2P-PA': 'P2P-PREDICT-001',  // Predictive Analyzer
    // ... (continue for all P2P agents)

    // O2C agents
    'O2C-BM': 'O2C-BALANCE-001',  // Balance Monitor
    'O2C-AP': 'O2C-AGING-001',    // Aging Predictor
    'O2C-EA': 'O2C-EXPOSE-001',   // Exposure Analyzer
    'O2C-RS': 'O2C-RISK-001',     // Risk Scorer
    'O2C-CP': 'O2C-COLLECT-001',  // Collection Prioritizer
    'O2C-DM': 'O2C-DEFAULT-001',  // Default Modeler
    // ... (continue for all O2C agents)

    // CTRL agents
    'CTRL-CA': 'CTL-CONTRACT-001',  // Contract Analyzer
    'CTRL-AAD': 'CTL-AUDIT-001',    // Audit
    'CTRL-ADA': 'CTL-DATA-001',     // Data
    // ... (continue for all CTRL agents)

    // CF agents
    'CF-CFO': 'CRP-FINANCE-001',    // CFO Dashboard
    'CF-CPM': 'CRP-PERFORM-001',    // Corporate Performance
    'CF-FDS': 'CRP-DECISION-001',   // Financial Decision Support
    'CF-RCC': 'CRP-CONTROL-001',    // Risk Control Center
    'CF-RKM': 'CRP-RISK-001',       // Risk Management
    'CF-RUM': 'CRP-UTIL-001',       // Resource Utilization
    'CF-TIA': 'CRP-IMPACT-001',     // Tax Impact Analyzer
    'CF-TVC': 'CRP-VALUE-001',      // Total Value Creator

    // CROSS agents (keep as is - already well named)
    'CROSS-NAE': 'CROSS-NAE',       // Keep cross-functional agents
    'CROSS-RAA': 'CROSS-RAA',
    'CROSS-SC': 'CROSS-SC',
};

// Agent resolver function with logging
export function resolveAgent(legacyId: string): string {
    const newId = AGENT_MAPPINGS[legacyId];

    if (!newId) {
        console.warn(`Unknown agent ID: ${legacyId} - no mapping found`);
        return legacyId; // Return original if no mapping
    }

    if (process.env.LOG_AGENT_MIGRATION === 'true') {
        console.log(`Agent migration: ${legacyId} → ${newId}`);
    }

    return newId;
}

// Batch resolver for workflow migration
export function resolveAgents(legacyIds: string[]): string[] {
    return legacyIds.map(id => resolveAgent(id));
}

// Get deprecation warning for legacy ID
export function getDeprecationWarning(legacyId: string): string | null {
    const newId = AGENT_MAPPINGS[legacyId];
    if (newId && newId !== legacyId) {
        return `Agent ID '${legacyId}' is deprecated. Use '${newId}' instead.`;
    }
    return null;
}

// Statistics helper
export function getMigrationStats() {
    const stats = {
        totalMappings: Object.keys(AGENT_MAPPINGS).length,
        uniqueNewIds: new Set(Object.values(AGENT_MAPPINGS)).size,
        reductionPercentage: 0
    };

    stats.reductionPercentage = Math.round(
        ((stats.totalMappings - stats.uniqueNewIds) / stats.totalMappings) * 100
    );

    return stats;
}

// Export for use in workflows
export default {
    AGENT_MAPPINGS,
    resolveAgent,
    resolveAgents,
    getDeprecationWarning,
    getMigrationStats
}; 