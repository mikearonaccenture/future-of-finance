# Workflow File Consolidation Plan

## Purpose
Consolidate split workflow files to improve code hygiene and maintainability.

## Files to Consolidate

### ✅ Completed
1. **Procure to Pay**
   - Main: `procure-to-pay-workflows.ts` (516 lines → 1017 lines)
   - Additional: `procure-to-pay-additional-workflows.ts` (501 lines) - DELETED ✅
   - Status: ✅ Consolidated into main file

2. **FP&A**
   - Main: `fpa-workflows.ts` (578 lines → 672 lines)
   - Additional: `fpa-additional-workflows.ts` (94 lines) - DELETED ✅
   - Status: ✅ Consolidated into main file

3. **Corporate Finance**
   - Main: `corporate-finance-workflows.ts` (1537 lines → 1631 lines)
   - Additional: `corporate-finance-additional-workflows.ts` (94 lines) - DELETED ✅
   - Status: ✅ Consolidated into main file

4. **Investor Relations**
   - Main: `investor-relations-workflows.ts` (270 lines → 421 lines)
   - Additional: `investor-relations-additional-workflows.ts` (151 lines) - DELETED ✅
   - Status: ✅ Consolidated into main file

5. **Controllership**
   - Created new main file: `controllership-workflows.ts` (668 lines)
   - Additional: `controllership-additional-workflows.ts` (295 lines) - DELETED ✅
   - Statutory: `controllership-statutory-workflows.ts` (373 lines) - DELETED ✅
   - Status: ✅ Merged both files into new main file

### ✓ Already Consolidated
- `order-to-cash-workflows.ts` - Single file (618 lines)
- `record-to-report-workflows.ts` - Single file (1449 lines)
- `cost-accounting-workflows.ts` - Single file (211 lines)

## Benefits
1. **Reduced Complexity**: Single source of truth for each function
2. **Easier Navigation**: No need to search multiple files
3. **Better Imports**: One import per function area
4. **Cleaner Structure**: Aligns with our agent hygiene initiative

## Process
1. Copy content from additional file to main file
2. Update the main file's array to include additional workflows
3. Delete the additional file
4. Update any imports in other files if needed 