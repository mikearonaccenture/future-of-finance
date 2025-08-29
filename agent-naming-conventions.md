# AI Agent Naming Conventions Guide

## Standard Format: `DOMAIN-FUNCTION-SEQUENCE`

### Examples:
- `FPA-FORECAST-001` - Financial Planning & Analysis, Forecasting Function, First Agent
- `RTR-RECON-001` - Record to Report, Reconciliation Function, First Agent
- `GEN-DATA-001` - General/Cross-functional, Data Management, First Agent

## Domain Codes (First Part)

### Function-Specific Domains
| Code | Domain | Description |
|------|--------|-------------|
| `FPA` | Financial Planning & Analysis | Budgeting, forecasting, variance analysis |
| `RTR` | Record to Report | Close, reconciliation, reporting |
| `PTP` | Procure to Pay | Invoice, vendor, payment processing |
| `OTC` | Order to Cash | Order, billing, collections |
| `TAX` | Tax Management | Tax planning, compliance, reporting |
| `TRS` | Treasury | Cash, FX, investments, debt |
| `CRP` | Corporate Finance | M&A, capital structure, strategy |
| `CTL` | Controllership | Cost, performance, regulatory |
| `INV` | Investor Relations | Earnings, communications, analysis |

### Cross-Functional Domain
| Code | Domain | Description |
|------|--------|-------------|
| `GEN` | General | Used across multiple functions |
| `INT` | Integration | Platform/system integration |
| `DAT` | Data Platform | Data-specific operations |

## Function Codes (Second Part)

### Common Functions Across Domains

#### Data Operations
- `DATA` - General data management
- `EXTRACT` - Data extraction
- `TRANSFORM` - Data transformation
- `VALIDATE` - Data validation
- `INTEGRATE` - Data integration

#### Processing Operations
- `PROCESS` - General processing
- `AUTO` - Automation
- `CALCULATE` - Calculations
- `GENERATE` - Generation/Creation
- `EXECUTE` - Execution

#### Analysis Operations
- `ANALYZE` - General analysis
- `FORECAST` - Forecasting/Prediction
- `VARIANCE` - Variance analysis
- `INSIGHT` - Insight generation
- `REPORT` - Reporting

#### Control Operations
- `APPROVE` - Approval workflows
- `CONTROL` - Control/Compliance
- `VALIDATE` - Validation checks
- `AUDIT` - Audit operations
- `MONITOR` - Monitoring

### Domain-Specific Functions

#### FPA Functions
- `BUDGET` - Budget planning
- `FORECAST` - Forecasting
- `SCENARIO` - Scenario planning
- `DRIVER` - Driver-based planning
- `CONSOLIDATE` - Budget consolidation

#### RTR Functions
- `CLOSE` - Close management
- `JOURNAL` - Journal entries
- `RECON` - Reconciliation
- `REPORT` - Financial reporting
- `COMPLY` - Compliance

#### PTP Functions
- `INVOICE` - Invoice processing
- `VENDOR` - Vendor management
- `PAYMENT` - Payment processing
- `MATCH` - Three-way matching
- `EXPENSE` - Expense management

#### OTC Functions
- `ORDER` - Order management
- `CREDIT` - Credit management
- `BILL` - Billing
- `COLLECT` - Collections
- `CASH` - Cash application

## Sequence Numbers (Third Part)

- `001` - First agent of this type
- `002` - Second agent (different specific function)
- `003` - Third agent (another variation)

### When to Increment:
- Different specific capabilities within same function
- Different technical implementation
- Different platform-specific version

### When NOT to Increment:
- Same agent used in different workflow
- Same agent with minor configuration changes
- Cross-functional usage

## Examples by Use Case

### Scenario 1: Creating First Data Agent for FP&A
```
Need: Agent to gather budget data from multiple sources
Name: FPA-DATA-001
Why: FP&A domain, Data function, First of its kind
```

### Scenario 2: Reusing Existing Agent
```
Need: Data gathering for RTR month-end close
Check: Does FPA-DATA-001 work for this?
Yes: Use FPA-DATA-001, note cross-functional usage
No: Create RTR-DATA-001 if RTR-specific needs
```

### Scenario 3: Creating Variant Agent
```
Have: GEN-APPROVE-001 (general approval)
Need: Complex hierarchical approval for large purchases
Create: GEN-APPROVE-002
Why: Same function, different complexity/capabilities
```

### Scenario 4: Platform-Specific Agent
```
Need: SAP-specific journal entry creation
Option 1: RTR-JOURNAL-001 (if works across platforms)
Option 2: RTR-JOURNAL-SAP-001 (if SAP-specific)
Prefer: Option 1 unless truly platform-specific
```

## Best Practices

### DO:
✅ Check catalog before creating new agent
✅ Reuse agents across workflows when possible
✅ Use most specific domain that applies
✅ Document why new agent vs reusing
✅ Keep names concise but clear

### DON'T:
❌ Create new agent without checking catalog
❌ Use function codes as domain codes
❌ Skip sequence numbers
❌ Create platform-specific unless necessary
❌ Use abbreviations not in this guide

## Special Cases

### Cross-Functional Agents
When agent is used equally across 3+ domains:
- Use `GEN` domain
- Document all usage locations
- Consider if truly general or needs variants

### Integration Agents
For platform/system integration:
- Can use `INT-[PLATFORM]-001`
- Example: `INT-SAP-001`, `INT-ORACLE-001`
- Only if integration-specific logic

### Migration Helpers
For temporary migration agents:
- Use `MIG-[PURPOSE]-001`
- Example: `MIG-LEGACY-001`
- Plan deprecation date

## Decision Tree

```
Need new agent?
├─ Is it for specific function (FPA, RTR, etc)?
│  ├─ Yes → Use function domain (FPA-, RTR-, etc)
│  └─ No → Is it cross-functional?
│     ├─ Yes → Use GEN-
│     └─ No → Is it integration?
│        ├─ Yes → Use INT-
│        └─ No → Use GEN-
│
├─ What operation category?
│  ├─ Data → Use -DATA-, -EXTRACT-, etc
│  ├─ Process → Use -PROCESS-, -AUTO-, etc
│  ├─ Analysis → Use -ANALYZE-, -FORECAST-, etc
│  └─ Control → Use -APPROVE-, -CONTROL-, etc
│
└─ Check existing agents
   ├─ Exact match exists? → Reuse it
   ├─ Similar exists? → Can extend? 
   │  ├─ Yes → Reuse it
   │  └─ No → Create new with next sequence
   └─ None exist? → Create -001
```

## Quick Reference Card

```
DOMAIN-FUNCTION-SEQUENCE

Domains: FPA RTR PTP OTC TAX TRS CRP CTL INV GEN INT DAT
Common Functions: DATA PROCESS ANALYZE CONTROL
Sequences: 001, 002, 003...

Examples:
- FPA-FORECAST-001 (FP&A Forecasting)
- RTR-CLOSE-001 (Close Management)
- GEN-DATA-001 (General Data Management)
- PTP-INVOICE-001 (Invoice Processing)
```

---

*Remember: The goal is clarity and reusability. When in doubt, check if an existing agent can be reused before creating a new one.* 