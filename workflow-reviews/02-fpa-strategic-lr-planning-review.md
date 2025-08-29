# Workflow Review: Strategic or LR Planning

**Date**: 2024-01-27
**Reviewer**: AI Agent Catalog Team
**Workflow File**: site-build/workflows/fpa-workflows.ts
**Finance Function**: FPA (Financial Planning & Analysis)
**Activity**: Strategic or LR Planning
**Platform(s)**: Multiple (varies by step)

## Workflow Overview
Long-range planning, strategic initiatives, and multi-year forecasting. Focuses on market intelligence, scenario development, and strategic plan documentation with 74% overall time reduction.

## Agent Analysis

### Total Steps Analyzed: 4
### Steps with AI Agents: 4

## Agents Extracted

### New Agents Created

| Legacy ID(s) | New Agent ID | Name | Purpose | Capabilities |
|--------------|--------------|------|---------|--------------|
| SP | FPA-STRATEGY-001 | Strategic Planner | Strategic planning support | - Strategic framework<br>- Initiative tracking<br>- Goal alignment<br>- Progress monitoring |
| BI | GEN-INTEL-001 | Business Intelligence | Market and competitive intelligence | - Market research<br>- Competitive analysis<br>- Industry trends<br>- External data integration |
| TA | GEN-TREND-002 | Trend Analyzer | Advanced trend analysis | - Multi-variate analysis<br>- External trend tracking<br>- Macro-economic factors<br>- Industry benchmarking |
| MC | FPA-MONTE-001 | Monte Carlo Simulator | Monte Carlo simulations | - Probability modeling<br>- Risk simulation<br>- Outcome distributions<br>- Confidence intervals |
| OM | FPA-OPTIMIZE-001 | Optimization Model | Optimization algorithms | - Resource optimization<br>- Constraint solving<br>- Multi-objective optimization<br>- Scenario optimization |
| AM | FPA-ASSUME-001 | Assumption Manager | Manage planning assumptions | - Assumption tracking<br>- Sensitivity analysis<br>- Version control<br>- Impact assessment |
| DP | FPA-DRIVER-001 | Driver Planner | Driver-based planning | - Driver identification<br>- Relationship mapping<br>- Impact modeling<br>- Driver optimization |
| WA | FPA-WHATIF-001 | What-If Analyzer | What-if scenario analysis | - Scenario comparison<br>- Impact analysis<br>- Real-time modeling<br>- Outcome visualization |

### Existing Agents Reused

| Step | Agent ID | Why Reused | Additional Context |
|------|----------|------------|-------------------|
| 1 | GEN-DATA-001 | Standard data gathering needs | Market data collection |
| 2 | FPA-SCENARIO-001 | Scenario modeling capabilities | From workflow 1 |
| 3 | FPA-PREDICT-001 | Predictive analytics | Long-range projections |
| 3 | GEN-TREND-001 | Basic trend detection | Complements TA for analysis |
| 4 | GEN-COMMENT-001 | Commentary generation | Plan narratives |
| 4 | GEN-INSIGHT-001 | Insight extraction | Strategic insights |
| 4 | GEN-REPORT-001 | Management reporting | Executive presentations |

### Legacy Agent Mapping

```typescript
// Legacy IDs found in this workflow
const legacyMappings = {
    // New Strategic Agents
    'SP': 'FPA-STRATEGY-001',    // Strategic Planner
    'BI': 'GEN-INTEL-001',       // Business Intelligence
    'TA': 'GEN-TREND-002',       // Trend Analyzer (advanced)
    'MC': 'FPA-MONTE-001',       // Monte Carlo Simulator
    'OM': 'FPA-OPTIMIZE-001',    // Optimization Model
    'AM': 'FPA-ASSUME-001',      // Assumption Manager
    'DP': 'FPA-DRIVER-001',      // Driver Planner
    'WA': 'FPA-WHATIF-001',      // What-If Analyzer
    
    // Reused from Previous
    'DG': 'GEN-DATA-001',        // Data Gatherer (reused)
    'SM': 'FPA-SCENARIO-001',    // Scenario Modeler (reused)
    'PA': 'FPA-PREDICT-001',     // Predictive Analyzer (reused)
    'CR': 'GEN-COMMENT-001',     // Commentary Robot (reused)
    'IR': 'GEN-INSIGHT-001',     // Insight Reporter (reused)
    'MR': 'GEN-REPORT-001',      // Management Reporter (reused)
};
```

## Cross-Functional Opportunities Identified

1. **Agent**: `GEN-INTEL-001` (Business Intelligence)
   - **Current Use**: Market research for strategic planning
   - **Potential Reuse**: Corporate Finance (M&A), Marketing, Sales
   - **Notes**: Enterprise-wide competitive intelligence

2. **Agent**: `GEN-TREND-002` (Advanced Trend Analyzer)
   - **Current Use**: Strategic trend analysis
   - **Potential Reuse**: Treasury (market trends), Tax (regulatory trends)
   - **Notes**: Complements basic trend detector with external focus

3. **Agent**: `FPA-MONTE-001` (Monte Carlo Simulator)
   - **Current Use**: Strategic scenario simulation
   - **Potential Reuse**: Treasury (risk modeling), Project Management
   - **Notes**: Sophisticated probability modeling

## Workflow Code Updates

### Original Code Sample:
```typescript
// Step 1: Strategic Data Gathering
aiAgents: ['SP', 'BI', 'DG', 'TA'],

// Step 2: Scenario Development  
aiAgents: ['SM', 'MC', 'OM', 'AM'],

// Step 3: Long-Range Modeling
aiAgents: ['DP', 'TA', 'PA', 'WA'],

// Step 4: Strategic Plan Documentation
aiAgents: ['CR', 'IR', 'MR'],
```

### Updated Code:
```typescript
// Step 1: Strategic Data Gathering
aiAgents: ['FPA-STRATEGY-001', 'GEN-INTEL-001', 'GEN-DATA-001', 'GEN-TREND-002'],

// Step 2: Scenario Development  
aiAgents: ['FPA-SCENARIO-001', 'FPA-MONTE-001', 'FPA-OPTIMIZE-001', 'FPA-ASSUME-001'],

// Step 3: Long-Range Modeling
aiAgents: ['FPA-DRIVER-001', 'GEN-TREND-002', 'FPA-PREDICT-001', 'FPA-WHATIF-001'],

// Step 4: Strategic Plan Documentation
aiAgents: ['GEN-COMMENT-001', 'GEN-INSIGHT-001', 'GEN-REPORT-001'],
```

## Platform-Specific Considerations

- Multi-platform workflow - different steps may use different platforms
- Strategic planning often requires external data sources
- Board-level reporting requirements

## Patterns Observed

1. **Reuse Success**: 7 agents reused from first workflow (28% reuse rate)
2. **Specialization**: Strategic planning needs specialized agents (Monte Carlo, Optimization)
3. **Layered Analysis**: Basic trend detection (GEN-TREND-001) + Advanced analysis (GEN-TREND-002)
4. **Documentation Focus**: Heavy reuse of reporting/commentary agents in final step

## Questions/Concerns

- [x] Should we have two trend analyzers?
  - Decision: Yes - GEN-TREND-001 for internal, GEN-TREND-002 for external/advanced
- [ ] Monte Carlo simulation might be useful in other functions
- [ ] Driver-based planning overlaps with budgeting workflows

## Next Steps

- [x] Add 8 new agents to catalog
- [x] Update reuse tracking for 7 agents
- [ ] Review third workflow to confirm reuse patterns
- [ ] Consider consolidation opportunities in future

## Review Metrics

- **Time to Review**: 30 minutes
- **New Agents Created**: 8
- **Agents Reused**: 7
- **Legacy Agents Replaced**: 14
- **Reuse Rate**: 47% (7 of 15 agents)

---

**Review Complete**: ☑ Yes / ☐ No
**Catalog Updated**: ☐ Yes / ☑ No (pending)
**Code Updated**: ☐ Yes / ☑ No (pending) 