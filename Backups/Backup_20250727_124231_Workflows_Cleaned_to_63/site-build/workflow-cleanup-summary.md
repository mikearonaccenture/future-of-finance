# Workflow Cleanup Summary

## Overview
We need to remove 19 workflows and fix 2 naming issues to align with our source of truth (63 activities).

## Naming Fixes (Already Completed ✓)
1. ✓ "Treasury Operations & Governance" → "Treasury Operating Model & Governance" (corporate-finance-workflows.ts)
2. ✓ "Decision Support & Modeling" → "Decision Support & Modelling" (fpa-workflows.ts)

## Workflows to Remove

### cost-accounting-workflows.ts (Already Cleaned ✓)
- ✓ Inventory Accounting
- ✓ Cost Allocation
- ✓ Variance Analysis
- ✓ Standard Costing
- ✓ Activity-Based Costing
- ✓ Cash Management (incorrectly placed here)
- ✓ Project Accounting (incorrectly placed here)

### record-to-report-workflows.ts
- Financial Reporting (line 223)
- Consolidation & Intercompany (line 324)
- Partner Accounting (line 1334)

### order-to-cash-workflows.ts
- Credit Management (line 92)
- Revenue Assurance (line 713)
- Order Modifications (line 814)

### investor-relations-workflows.ts
- ESG Reporting (line 270)
- Shareholder Services (line 336)
- Regulatory Filings (line 402)

### fpa-additional-workflows.ts
- Data / System Effectiveness & Governance (line 93)

### investor-relations-additional-workflows.ts
- Marketing & Events (line 149)

### controllership-additional-workflows.ts
- Invoice to Pay Support Help Desk (line 78)

## Final State
After cleanup, we will have exactly 63 workflow activities matching our source of truth. 