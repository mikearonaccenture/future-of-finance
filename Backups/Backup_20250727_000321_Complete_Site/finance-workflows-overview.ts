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
    APPROVAL: 'Approval Required',
    COMPLIANCE_REVIEW: 'Compliance Review',
    RISK_ASSESSMENT: 'Risk Assessment',
    QUALITY_ASSURANCE: 'Quality Assurance',
    STRATEGIC_DECISION: 'Strategic Decision',
    EXCEPTION_HANDLING: 'Exception Handling',
    FINAL_SIGNOFF: 'Final Sign-off'
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