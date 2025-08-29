# Finance AI Agent Catalog Structure

## Agent Entry Standard

Each AI Agent in our catalog must have the following attributes:

### 1. **Abbreviation** (2-4 letters)
- Like periodic table symbols (e.g., "APV" for Approval Validator)
- Must be memorable and relate to function
- Unique across entire catalog

### 2. **Unique Identifier** 
- Descriptive, hyphenated format
- Example: `approval-validator-finance`
- No spaces, lowercase, clear purpose

### 3. **Full Name**
- Human-readable name
- Example: "Automated Approval Validator"
- Clear and professional

### 4. **Description**
- 1-2 sentences explaining what the agent does
- Focus on business value and function
- Example: "Validates approval workflows against policy rules and authorization matrices. Ensures compliance while accelerating approval cycles."

### 5. **Capabilities** (array)
- Specific functions the agent can perform
- Example:
  - Verify approval authority limits
  - Check delegation rules
  - Validate against approval policies
  - Route to appropriate approvers

### 6. **Domain**
- Primary finance functional area
- One of: FPA, Controllership, Order to Cash, Procure to Pay, Corporate Finance, Cost Accounting, Investor Relations

### 7. **Platforms** (array)
- Which of the 17 platforms use this agent
- Example: ["Continuous Close Platform", "Control & Compliance Suite"]

### 8. **Workflows** (array)
- Specific workflows where agent is used
- Example: ["Period Close", "Journal Entry Processing"]

### 9. **Activities** (array)
- Higher-level activities supported
- Example: ["General Accounting", "Period Close"]

### 10. **Integration Points**
- Other agents this agent works with
- Systems it connects to
- Data sources required

### 11. **Performance Metrics**
- How to measure agent effectiveness
- Example: "Approval cycle time reduction", "Policy compliance rate"

## Example Complete Agent Entry

```json
{
  "abbreviation": "APV",
  "unique_id": "approval-validator-finance",
  "full_name": "Automated Approval Validator",
  "description": "Validates approval workflows against policy rules and authorization matrices. Ensures compliance while accelerating approval cycles.",
  "capabilities": [
    "Verify approval authority limits",
    "Check delegation rules", 
    "Validate against approval policies",
    "Route to appropriate approvers",
    "Track approval history"
  ],
  "domain": "Controllership",
  "platforms": [
    "Continuous Close Platform",
    "Control & Compliance Suite"
  ],
  "workflows": [
    "Period Close",
    "Journal Entry Processing",
    "Accrual Management"
  ],
  "activities": [
    "General Accounting",
    "Period Close"
  ],
  "integration_points": {
    "works_with": ["WFO", "PCE", "NTF"],
    "systems": ["ERP", "Approval Matrix Database"],
    "data_sources": ["Employee Hierarchy", "Approval Policies"]
  },
  "performance_metrics": [
    "Approval cycle time reduction",
    "Policy compliance rate",
    "Auto-approval percentage"
  ]
}
```

## Abbreviation Guidelines

Like the periodic table, abbreviations should be:
1. **Memorable** - Related to the agent's function
2. **Unique** - No duplicates in the catalog
3. **Short** - 2-4 characters maximum
4. **Logical** - First letters of key words when possible

Examples:
- **ICP** - Invoice Capture Processor
- **APV** - Approval Validator
- **FXM** - Foreign Exchange Manager
- **REC** - Reconciliation Engine
- **DAQ** - Data Quality Guardian 