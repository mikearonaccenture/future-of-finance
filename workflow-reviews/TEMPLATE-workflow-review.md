# Workflow Review: [WORKFLOW NAME]

**Date**: [DATE]
**Reviewer**: [NAME]
**Workflow File**: [workflow-file.ts]
**Finance Function**: [One of 7: FPA/RTR/PTP/OTC/TAX/TRS/CRP/CTL/INV]
**Activity**: [One of 63 activities]
**Platform(s)**: [List platforms used]

## Workflow Overview
[Brief description of what this workflow accomplishes]

## Agent Analysis

### Total Steps Analyzed: [X]
### Steps with AI Agents: [Y]

## Agents Extracted

### New Agents Created

| Legacy ID(s) | New Agent ID | Name | Purpose | Capabilities |
|--------------|--------------|------|---------|--------------|
| [AA, AB] | FPA-FORECAST-001 | Forecast Optimizer | Generate accurate financial forecasts | - ML-based prediction<br>- Trend analysis<br>- Scenario modeling |

### Existing Agents Reused

| Step | Agent ID | Why Reused | Additional Context |
|------|----------|------------|-------------------|
| 3 | GEN-DATA-001 | Standard data extraction fits | No customization needed |

### Legacy Agent Mapping

```typescript
// Legacy IDs found in this workflow
const legacyMappings = {
    'AA': 'FPA-FORECAST-001',  // Forecast Agent
    'BB': 'GEN-DATA-001',       // Data Gatherer (reused)
    'CC': 'FPA-VARIANCE-001',   // New variance analyzer
};
```

## Cross-Functional Opportunities Identified

1. **Agent**: [AGENT-ID]
   - **Current Use**: [This workflow's use]
   - **Potential Reuse**: [Other workflows/functions that could use this]
   - **Notes**: [Any considerations]

## Workflow Code Updates

### Original Code Sample:
```typescript
// Step X: [Description]
aiAgents: ['AA', 'BB', 'CC'], // Legacy agents
```

### Updated Code:
```typescript
// Step X: [Description]
aiAgents: ['FPA-FORECAST-001', 'GEN-DATA-001', 'FPA-VARIANCE-001'], // Updated with new IDs
```

## Platform-Specific Considerations

- [Any platform-specific agent requirements noted]
- [Integration points that might need special agents]

## Patterns Observed

1. **Data Operations**: [Common data patterns seen]
2. **Approval Flows**: [Approval patterns noted]
3. **Reporting Needs**: [Reporting patterns identified]

## Questions/Concerns

- [ ] [Any questions that came up during review]
- [ ] [Agents that might need further discussion]

## Next Steps

- [ ] Update workflow file with new agent IDs
- [ ] Add new agents to master catalog
- [ ] Document cross-functional opportunities
- [ ] Review with team (if needed)

## Review Metrics

- **Time to Review**: [X minutes]
- **New Agents Created**: [X]
- **Agents Reused**: [Y]
- **Legacy Agents Replaced**: [Z]
- **Potential Consolidations**: [Number identified]

---

**Review Complete**: ☐ Yes / ☐ No
**Catalog Updated**: ☐ Yes / ☐ No
**Code Updated**: ☐ Yes / ☐ No 