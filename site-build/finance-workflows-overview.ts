// Finance Workflows Overview
// This file provides the structure and overview of all finance workflows

export interface WorkflowStep {
    stepNumber: number;
    description: string;
    currentState: {
        activities: string[];
        timeRequired: string;
        painPoints: string[];
    };
    futureState: {
        activities: string[];
        aiAgents: string[]; // Agent IDs
        humanCheckpoints: string[];
        timeReduction: string; // e.g., "80% reduction"
    };
}

export interface SubActivity {
    name: string;
    description: string;
    platform?: string; // Add platform mapping
    currentStateWorkflow: WorkflowStep[];
    futureStateWorkflow: WorkflowStep[];
    totalSteps: number;
    aiAgentsUsed: string[];
    humanCheckpointsCount: number;
    estimatedTimeSavings: string;
}

export interface FinanceFunction {
    name: string;
    subActivities: SubActivity[];
}

// Agent usage tracking
export interface AgentUsageStats {
    agentId: string;
    agentName: string;
    totalUsageCount: number;
    functionsUsedIn: string[];
    workflowsUsedIn: string[];
    criticalityScore: 'high' | 'medium' | 'low'; // Based on frequency and importance
}

// Master structure
export interface FinanceWorkflowSystem {
    functions: FinanceFunction[];
    totalWorkflows: number;
    totalAIAgents: number;
    agentUsageStats: AgentUsageStats[];
    humanCheckpointCategories: {
        approvals: number;
        complianceChecks: number;
        riskAssessments: number;
        qualityReviews: number;
        strategicDecisions: number;
    };
}

// Workflow categories based on the taxonomy image
export const FINANCE_FUNCTIONS = {
    PROCURE_TO_PAY: 'Procure to Pay',
    ORDER_TO_CASH: 'Order to Cash',
    COST_ACCOUNTING: 'Cost Accounting',
    CONTROLLERSHIP: 'Controllership',
    CORPORATE_FINANCE: 'Corporate Finance',
    FP_AND_A: 'FP&A',
    INVESTOR_RELATIONS: 'Investor Relations'
};

// Human checkpoint types
export const HUMAN_CHECKPOINT_TYPES = {
    // Core checkpoints
    APPROVAL: 'Approval Required',
    COMPLIANCE_REVIEW: 'Compliance Review',
    RISK_ASSESSMENT: 'Risk Assessment',
    QUALITY_ASSURANCE: 'Quality Assurance',
    STRATEGIC_DECISION: 'Strategic Decision',
    EXCEPTION_HANDLING: 'Exception Handling',
    FINAL_SIGNOFF: 'Final Sign-off',
    
    // Procure to Pay checkpoints
    VENDOR_NEGOTIATION: 'Vendor Negotiation',
    PAYMENT_RELEASE: 'Payment Release',
    TREASURY_REVIEW: 'Treasury Review',
    RECONCILIATION_REVIEW: 'Reconciliation Review',
    EXCEPTION_REVIEW: 'Exception Review',
    MISMATCH_REVIEW: 'Mismatch Review',
    INVESTIGATION_APPROVAL: 'Investigation Approval',
    ADJUSTMENT_APPROVAL: 'Adjustment Approval',
    REPORT_REVIEW: 'Report Review',
    CARD_APPROVAL: 'Card Approval',
    RECONCILIATION_APPROVAL: 'Reconciliation Approval',
    STRATEGIC_REVIEW: 'Strategic Review',
    TRAVEL_APPROVAL: 'Travel Approval',
    EXPENSE_APPROVAL: 'Expense Approval',
    AUDIT_REVIEW: 'Audit Review',
    DATA_VALIDATION: 'Data Validation',
    INSIGHT_REVIEW: 'Insight Review',
    REPORT_APPROVAL: 'Report Approval',
    ACTION_APPROVAL: 'Action Approval',
    
    // Order to Cash checkpoints
    NEW_CUSTOMER_APPROVAL: 'New Customer Approval',
    HIGH_VALUE_APPROVAL: 'High Value Approval',
    CREDIT_REDUCTION_APPROVAL: 'Credit Reduction Approval',
    LIMIT_APPROVAL: 'Limit Approval',
    TERMS_APPROVAL: 'Terms Approval',
    RISK_DECISION: 'Risk Decision',
    CREDIT_REVIEW: 'Credit Review',
    COLLECTION_STRATEGY: 'Collection Strategy',
    WRITE_OFF_APPROVAL: 'Write-off Approval',
    SETTLEMENT_NEGOTIATION: 'Settlement Negotiation',
    LEGAL_ESCALATION: 'Legal Escalation',
    DEDUCTION_REVIEW: 'Deduction Review',
    CASH_INVESTIGATION: 'Cash Investigation',
    CUSTOMER_COMMUNICATION: 'Customer Communication',
    BILLING_APPROVAL: 'Billing Approval',
    PAYMENT_TERMS_APPROVAL: 'Payment Terms Approval',
    CONTRACT_REVIEW: 'Contract Review',
    FINAL_APPROVAL: 'Final Approval',
    
    // Record to Report checkpoints
    SUB_LEDGER_REVIEW: 'Sub-ledger Review',
    JOURNAL_APPROVAL: 'Journal Approval',
    RECONCILIATION_SIGNOFF: 'Reconciliation Sign-off',
    FINANCIAL_REVIEW: 'Financial Review',
    ANALYSIS_VALIDATION: 'Analysis Validation',
    FINAL_CERTIFICATION: 'Final Certification',
    COA_APPROVAL: 'Chart of Accounts Approval',
    ACCRUAL_REVIEW: 'Accrual Review',
    ALLOCATION_VALIDATION: 'Allocation Validation',
    SYSTEM_CHANGE_APPROVAL: 'System Change Approval',
    CONTENT_REVIEW: 'Content Review',
    COMPLIANCE_SIGNOFF: 'Compliance Sign-off',
    EXECUTIVE_APPROVAL: 'Executive Approval',
    FILING_CONFIRMATION: 'Filing Confirmation',
    CAPITALIZATION_APPROVAL: 'Capitalization Approval',
    LEASE_CLASSIFICATION: 'Lease Classification',
    PHYSICAL_VERIFICATION: 'Physical Verification',
    IMPAIRMENT_DECISION: 'Impairment Decision',
    RECONCILIATION_CERTIFICATION: 'Reconciliation Certification',
    AUDIT_PLANNING: 'Audit Planning',
    TESTING_REVIEW: 'Testing Review',
    REMEDIATION_APPROVAL: 'Remediation Approval',
    RESPONSE_APPROVAL: 'Response Approval',
    IC_TRANSACTION_APPROVAL: 'Intercompany Transaction Approval',
    IC_RECONCILIATION: 'Intercompany Reconciliation',
    SETTLEMENT_APPROVAL: 'Settlement Approval',
    COMPLIANCE_CERTIFICATION: 'Compliance Certification',
    ALLOCATION_APPROVAL: 'Allocation Approval',
    REVENUE_RECOGNITION: 'Revenue Recognition',
    DISCLOSURE_REVIEW: 'Disclosure Review',
    FORECAST_APPROVAL: 'Forecast Approval',
    BANKING_APPROVAL: 'Banking Approval',
    GAAP_REVIEW: 'GAAP Review',
    TRANSLATION_REVIEW: 'Translation Review',
    TAX_REVIEW: 'Tax Review',
    BOARD_APPROVAL: 'Board Approval',
    AUDIT_SIGNOFF: 'Audit Sign-off',
    FILING_AUTHORIZATION: 'Filing Authorization',
    CONSOLIDATION_REVIEW: 'Consolidation Review',
    SEGMENT_REVIEW: 'Segment Review',
    PARTNER_APPROVAL: 'Partner Approval',
    JV_REVIEW: 'Joint Venture Review',
    CAPITAL_APPROVAL: 'Capital Approval',
    TAX_APPROVAL: 'Tax Approval',
    PROJECT_APPROVAL: 'Project Approval',
    PROJECT_REVIEW: 'Project Review',
    CHANGE_APPROVAL: 'Change Approval',
    CONTROL_DESIGN: 'Control Design',
    TEST_REVIEW: 'Test Review',
    DEFICIENCY_APPROVAL: 'Deficiency Approval',
    AUDIT_SUPPORT: 'Audit Support',
    SOX_CERTIFICATION: 'SOX Certification',
    
    // Corporate Finance checkpoints
    POSITION_VALIDATION: 'Position Validation',
    ACCOUNT_APPROVAL: 'Account Approval',
    PAYMENT_AUTHORIZATION: 'Payment Authorization',
    ANALYTICS_REVIEW: 'Analytics Review',
    
    // Additional checkpoints
    AGREEMENT_REVIEW: 'Agreement Review',
    STATEMENT_REVIEW: 'Statement Review',
    CALCULATION_VALIDATION: 'Calculation Validation',
    DISTRIBUTION_APPROVAL: 'Distribution Approval',
    POLICY_APPROVAL: 'Policy Approval',
    PROCEDURE_REVIEW: 'Procedure Review',
    ADJUSTMENT_AUTHORIZATION: 'Adjustment Authorization',
    REGULATORY_REVIEW: 'Regulatory Review',
    DISPUTE_RESOLUTION: 'Dispute Resolution',
    IC_APPROVAL: 'Intercompany Approval',
    ELIMINATION_APPROVAL: 'Elimination Approval',
    ELIMINATION_REVIEW: 'Elimination Review',
    DISPUTE_APPROVAL: 'Dispute Approval',
    
    // FP&A checkpoints
    BUDGET_APPROVAL: 'Budget Approval',
    FORECAST_REVIEW: 'Forecast Review',
    SCENARIO_APPROVAL: 'Scenario Approval',
    VARIANCE_REVIEW: 'Variance Review',
    PERFORMANCE_REVIEW: 'Performance Review',
    STRATEGIC_ALIGNMENT: 'Strategic Alignment',
    ASSUMPTION_VALIDATION: 'Assumption Validation',
    
    // Investor Relations checkpoints
    MESSAGE_APPROVAL: 'Message Approval',
    ENGAGEMENT_REVIEW: 'Engagement Review',
    INTELLIGENCE_REVIEW: 'Intelligence Review',
    ALERT_REVIEW: 'Alert Review',
    PATTERN_VALIDATION: 'Pattern Validation',
    MM_RELATIONSHIP: 'Money Manager Relationship',
    
    // Cost Accounting checkpoints
    COST_REVIEW: 'Cost Review',
    METHODOLOGY_APPROVAL: 'Methodology Approval',
    RATE_VALIDATION: 'Rate Validation',
    OUTPUT_REVIEW: 'Output Review',
    
    // Tax checkpoints
    TAX_CALCULATION_REVIEW: 'Tax Calculation Review',
    TAX_FILING_APPROVAL: 'Tax Filing Approval',
    TAX_PAYMENT_APPROVAL: 'Tax Payment Approval',
    TAX_PLANNING_REVIEW: 'Tax Planning Review',
    
    // Treasury checkpoints
    CASH_FORECAST_REVIEW: 'Cash Forecast Review',
    INVESTMENT_APPROVAL: 'Investment Approval',
    DEBT_APPROVAL: 'Debt Approval',
    HEDGE_APPROVAL: 'Hedge Approval',
    BANK_APPROVAL: 'Bank Approval',
    
    // Miscellaneous checkpoints
    VARIANCE_INVESTIGATION: 'Variance Investigation',
    THRESHOLD_MONITORING: 'Threshold Monitoring',
    KPI_VALIDATION: 'KPI Validation',
    NARRATIVE_REVIEW: 'Narrative Review',
    
    // Additional missing checkpoints
    ACCOUNTING_REVIEW: 'Accounting Review',
    ALLOCATION_REVIEW: 'Allocation Review',
    ANALYSIS_REVIEW: 'Analysis Review',
    APPEAL_APPROVAL: 'Appeal Approval',
    AUDIT_RESPONSE: 'Audit Response',
    AUDIT_STRATEGY: 'Audit Strategy',
    BILLING_REVIEW: 'Billing Review',
    CALCULATION_REVIEW: 'Calculation Review',
    CASH_APPLICATION_REVIEW: 'Cash Application Review',
    CERTIFICATION_SIGNOFF: 'Certification Signoff',
    CLASSIFICATION_APPROVAL: 'Classification Approval',
    COMMUNICATION_REVIEW: 'Communication Review',
    COMPLEX_DEDUCTION_REVIEW: 'Complex Deduction Review',
    COMPLEX_EXCEPTION_REVIEW: 'Complex Exception Review',
    COMPLEX_RESOLUTION_APPROVAL: 'Complex Resolution Approval',
    CONCENTRATION_APPROVAL: 'Concentration Approval',
    CONFIRMATION_APPROVAL: 'Confirmation Approval',
    CONTROL_APPROVAL: 'Control Approval',
    COST_ASSIGNMENT_REVIEW: 'Cost Assignment Review',
    COST_VALIDATION: 'Cost Validation',
    COVENANT_CERTIFICATION: 'Covenant Certification',
    CREDIT_APPROVAL: 'Credit Approval',
    CUSTOMER_ESCALATION: 'Customer Escalation',
    DATA_APPROVAL: 'Data Approval',
    DEFERRED_TAX_APPROVAL: 'Deferred Tax Approval',
    DISCLOSURE_APPROVAL: 'Disclosure Approval',
    DISCREPANCY_REVIEW: 'Discrepancy Review',
    DISPUTE_STRATEGY: 'Dispute Strategy',
    DOCUMENTATION_REVIEW: 'Documentation Review',
    EFFECTIVENESS_REVIEW: 'Effectiveness Review',
    EXAM_STRATEGY: 'Exam Strategy',
    EXECUTIVE_REVIEW: 'Executive Review',
    FEE_APPROVAL: 'Fee Approval',
    HEDGE_STRATEGY_APPROVAL: 'Hedge Strategy Approval',
    IMPLEMENTATION_APPROVAL: 'Implementation Approval',
    INSIGHT_VALIDATION: 'Insight Validation',
    INVOICE_APPROVAL: 'Invoice Approval',
    ISSUANCE_APPROVAL: 'Issuance Approval',
    LEGAL_APPROVAL: 'Legal Approval',
    LIQUIDITY_APPROVAL: 'Liquidity Approval',
    MARGIN_APPROVAL: 'Margin Approval',
    MODEL_APPROVAL: 'Model Approval',
    MODIFICATION_APPROVAL: 'Modification Approval',
    NARRATIVE_APPROVAL: 'Narrative Approval',
    OPTIMIZATION_APPROVAL: 'Optimization Approval',
    PAYMENT_APPROVAL: 'Payment Approval',
    PAYMENT_PLAN_APPROVAL: 'Payment Plan Approval',
    PERFORMANCE_VALIDATION: 'Performance Validation',
    POSTING_REVIEW: 'Posting Review',
    PRICING_APPROVAL: 'Pricing Approval',
    PROFITABILITY_VALIDATION: 'Profitability Validation',
    PROVISION_REVIEW: 'Provision Review',
    REFINANCING_DECISION: 'Refinancing Decision',
    REGULATORY_SIGNOFF: 'Regulatory Signoff',
    RETURN_APPROVAL: 'Return Approval',
    RETURN_REVIEW: 'Return Review',
    RISK_APPROVAL: 'Risk Approval',
    RISK_REVIEW: 'Risk Review',
    STRATEGY_APPROVAL: 'Strategy Approval',
    STRESS_TEST_REVIEW: 'Stress Test Review',
    SUBMISSION_REVIEW: 'Submission Review',
    SYSTEM_APPROVAL: 'System Approval',
    TAX_STRATEGY_APPROVAL: 'Tax Strategy Approval',
    TECHNOLOGY_APPROVAL: 'Technology Approval',
    TRADE_CONFIRMATION: 'Trade Confirmation',
    UPDATE_APPROVAL: 'Update Approval',
    VALIDITY_APPROVAL: 'Validity Approval',
    VALUATION_REVIEW: 'Valuation Review'
};

// Time savings categories
export const TIME_SAVINGS = {
    MINIMAL: '0-20%',
    MODERATE: '20-50%',
    SIGNIFICANT: '50-80%',
    TRANSFORMATIONAL: '80-95%'
};

// Workflow complexity levels
export const COMPLEXITY_LEVELS = {
    SIMPLE: 'Simple (1-5 steps)',
    MODERATE: 'Moderate (6-15 steps)',
    COMPLEX: 'Complex (16-30 steps)',
    HIGHLY_COMPLEX: 'Highly Complex (30+ steps)'
}; 