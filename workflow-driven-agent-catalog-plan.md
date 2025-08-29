# Workflow-Driven AI Agent Catalog Implementation Plan

## Overview

Build our AI agent catalog by systematically reviewing all 63 workflows, extracting and properly documenting agents as we go. This ensures every agent has a clear purpose tied to our source of truth: 7 Finance Functions → 63 Activities → 17 Platforms → AI Agents.

## Pre-Implementation Setup

### 1. Create Master Catalog Structure
```typescript
interface AIAgentMasterCatalog {
    id: string;                          // Format: DOMAIN-FUNCTION-SEQUENCE
    name: string;
    description: string;
    capabilities: string[];
    
    // Source of truth tracking
    financeFunctions: string[];          // Which of the 7 functions
    activities: string[];                // Which of the 63 activities
    workflows: string[];                 // Specific workflow files
    platforms: string[];                 // Which of the 17 platforms
    
    // Usage tracking
    stepDescriptions: string[];          // What steps use this agent
    frequency: number;                   // Total usage count
    crossFunctional: boolean;           // Used across multiple functions?
    
    // Technical details
    status: 'active' | 'in-development' | 'planned';
    createdInWorkflow: string;          // First workflow where defined
    relatedAgents: string[];            // Similar agents for reference
}
```

### 2. Create Workflow Review Template
```markdown
# Workflow Review: [Workflow Name]
**File**: [workflow-file.ts]
**Function**: [One of 7 finance functions]
**Activity**: [One of 63 activities]
**Platform**: [One of 17 platforms]

## Agents Extracted
1. **Step X**: [Step Description]
   - Legacy IDs: [AA, BB, CC]
   - New Agent: DOMAIN-FUNCTION-001
   - Purpose: [Clear description]
   - Reusing?: [Yes/No - if yes, which agent]

## Cross-Functional Opportunities
- [List any agents that could be reused in other workflows]

## Notes
- [Any special considerations]
```

### 3. Create Tracking Spreadsheet
| Workflow # | Function | Activity | File | Status | Agents Created | Agents Reused | Notes |
|------------|----------|----------|------|--------|----------------|---------------|-------|
| 1/63 | FP&A | Annual Planning | fpa-workflows.ts | ❌ Not Started | 0 | 0 | - |
| 2/63 | RTR | Month-End Close | rtr-workflows.ts | ❌ Not Started | 0 | 0 | - |
| ... | ... | ... | ... | ... | ... | ... | ... |

## Implementation Process

### Phase 1: Initialize Catalog System (Day 1-2)

#### Tasks:
- [ ] Create `ai-agent-master-catalog.ts` with proper structure
- [ ] Create `workflow-review-tracker.md` 
- [ ] Create `agent-naming-conventions.md` with examples
- [ ] Set up `workflow-reviews/` directory for individual reviews
- [ ] Create helper functions for catalog management

#### Deliverables:
1. Empty catalog structure ready for population
2. Review templates and tracking system
3. Clear naming convention guide

### Phase 2: Systematic Workflow Review (Weeks 1-6)

#### Daily Process (Review ~2-3 workflows per day):

##### Step 1: Select Workflow
```bash
# Start with high-value workflows first
# Suggested order: FP&A → RTR → PTP → OTC → Others
```

##### Step 2: Extract Current Agents
```typescript
// For each workflow step with aiAgents:
1. Note the legacy agent IDs
2. Understand what the step does
3. Identify agent purpose from context
```

##### Step 3: Check Existing Catalog
```typescript
// Before creating new agent:
1. Search catalog for similar functionality
2. Can we reuse an existing agent?
   - Yes → Note cross-functional usage
   - No → Continue to Step 4
```

##### Step 4: Create/Update Agent Entry
```typescript
// If new agent needed:
1. Assign proper ID (DOMAIN-FUNCTION-SEQUENCE)
2. Write clear description
3. List capabilities from workflow context
4. Document source (function/activity/workflow)

// If reusing existing:
1. Add new activity to agent's activities[]
2. Add new workflow to agent's workflows[]
3. Update frequency count
4. Mark as crossFunctional if applicable
```

##### Step 5: Update Workflow File
```typescript
// Replace legacy IDs with new IDs:
aiAgents: ['AA', 'BB', 'CC'] // Legacy
// becomes:
aiAgents: ['FPA-FORECAST-001', 'GEN-DATA-001', 'FPA-VARIANCE-001'] // New
```

##### Step 6: Document Review
```markdown
# Save review in workflow-reviews/[workflow-name]-review.md
- What agents were found
- What was created vs reused
- Any patterns noticed
```

### Phase 3: Progressive Catalog Building

#### Week 1: FP&A Workflows (Target: 10 workflows)
Focus on Financial Planning & Analysis workflows first:
- [ ] Annual Budget Planning
- [ ] Quarterly Forecasting  
- [ ] Variance Analysis
- [ ] Scenario Planning
- [ ] Performance Reporting
- [ ] Driver-Based Planning
- [ ] Cash Flow Forecasting
- [ ] Profitability Analysis
- [ ] Cost Center Planning
- [ ] Capital Planning

**Expected Outcomes**:
- ~20-30 FP&A-specific agents
- ~10-15 general agents (data, automation, reporting)

#### Week 2: RTR Workflows (Target: 10 workflows)
Focus on Record to Report workflows:
- [ ] Month-End Close
- [ ] Journal Entry Processing
- [ ] Account Reconciliation
- [ ] Financial Reporting
- [ ] Intercompany Processing
- [ ] Fixed Asset Accounting
- [ ] Consolidation
- [ ] Sox Compliance
- [ ] External Reporting
- [ ] Audit Support

**Expected Outcomes**:
- ~15-20 RTR-specific agents
- Reuse ~10-15 agents from FP&A (data, reporting)

#### Week 3: PTP Workflows (Target: 10 workflows)
Focus on Procure to Pay workflows:
- [ ] Invoice Processing
- [ ] Purchase Order Management
- [ ] Vendor Management
- [ ] Payment Processing
- [ ] Expense Management
- [ ] Contract Management
- [ ] Three-Way Matching
- [ ] Fraud Detection
- [ ] Spend Analysis
- [ ] Procurement Planning

**Expected Outcomes**:
- ~20-25 PTP-specific agents
- Growing list of cross-functional agents

#### Week 4: OTC Workflows (Target: 10 workflows)
Focus on Order to Cash workflows:
- [ ] Order Management
- [ ] Credit Management
- [ ] Billing
- [ ] Collections
- [ ] Cash Application
- [ ] Dispute Management
- [ ] Customer Master
- [ ] Revenue Recognition
- [ ] Deduction Management
- [ ] Customer Analytics

**Expected Outcomes**:
- ~20-25 OTC-specific agents
- Clear patterns emerging for shared agents

#### Week 5-6: Remaining Workflows (Target: 23 workflows)
Complete remaining functions:
- [ ] Tax Management workflows
- [ ] Treasury workflows
- [ ] Cost Accounting workflows
- [ ] Investor Relations workflows
- [ ] Corporate Finance workflows
- [ ] Controllership workflows

### Phase 4: Catalog Optimization (Week 7)

#### Tasks:
- [ ] Review complete catalog for optimization opportunities
- [ ] Identify true cross-functional agents
- [ ] Consolidate any obvious duplicates
- [ ] Finalize agent relationships and groupings
- [ ] Create agent hierarchy visualization

#### Analysis Questions:
1. Which agents are used in 3+ workflows?
2. Which agents are used across 2+ functions?
3. Are there agents that should be merged?
4. Are there missing agents we should add?

### Phase 5: Implementation & Migration (Week 8)

#### Tasks:
- [ ] Create final compatibility layer for any legacy IDs
- [ ] Update all workflow files with new IDs
- [ ] Generate comprehensive documentation
- [ ] Create agent usage dashboard
- [ ] Build agent search/discovery tool

## Success Metrics

### Quantitative:
- [ ] All 63 workflows reviewed
- [ ] 100% of agents have proper IDs
- [ ] 100% of agents documented
- [ ] Cross-functional reuse rate >30%
- [ ] Total unique agents <200

### Qualitative:
- [ ] Every agent has clear business purpose
- [ ] No duplicate agents
- [ ] Easy to find right agent for new workflows
- [ ] Scalable for future additions

## Tools & Scripts Needed

### 1. Catalog Management Script
```typescript
// catalog-manager.ts
export function addAgent(agent: AIAgentMasterCatalog): void
export function findSimilarAgents(capabilities: string[]): AIAgentMasterCatalog[]
export function updateAgentUsage(agentId: string, workflow: string): void
export function generateCatalogReport(): void
```

### 2. Workflow Analyzer
```typescript
// workflow-analyzer.ts
export function extractAgentsFromWorkflow(file: string): LegacyAgent[]
export function suggestNewAgentId(purpose: string, domain: string): string
export function findReusableAgents(stepDescription: string): AIAgentMasterCatalog[]
```

### 3. Progress Tracker
```typescript
// progress-tracker.ts
export function updateWorkflowStatus(workflow: string, status: string): void
export function getProgressReport(): ProgressReport
export function identifyHighValueWorkflows(): string[]
```

## Daily Checklist

### Morning (Planning)
- [ ] Review progress tracker
- [ ] Select 2-3 workflows for the day
- [ ] Prepare workflow files

### During Review (Per Workflow)
- [ ] Extract all agents from workflow
- [ ] Check catalog for reuse opportunities
- [ ] Create new agents with proper IDs
- [ ] Update workflow file
- [ ] Document in review template
- [ ] Update tracking spreadsheet

### End of Day
- [ ] Commit catalog updates
- [ ] Update progress metrics
- [ ] Note any patterns or insights
- [ ] Plan next day's workflows

## Risk Mitigation

### Potential Issues & Solutions:

1. **Scope Creep**
   - *Risk*: Trying to perfect each agent
   - *Solution*: Time-box each workflow review (2 hours max)

2. **Inconsistent Naming**
   - *Risk*: Different people creating different IDs
   - *Solution*: Single person owns catalog, others propose

3. **Over-Consolidation**
   - *Risk*: Forcing different agents to be same
   - *Solution*: When in doubt, keep separate

4. **Under-Documentation**
   - *Risk*: Minimal descriptions
   - *Solution*: Minimum 3 capabilities per agent

## Next Steps

1. **Today**: Set up catalog structure and templates
2. **Tomorrow**: Begin with first FP&A workflow
3. **This Week**: Complete 10+ workflows
4. **Week 2**: Mid-point review and adjustment
5. **Week 8**: Complete implementation

---

This plan ensures we build our agent catalog the right way - grounded in actual business workflows, with clear purpose and documentation for every agent. 