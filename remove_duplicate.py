import re

# Read the file
with open('site-build/workflows/corporate-finance-workflows.ts', 'r') as f:
    content = f.read()

# Find and remove the duplicate Cash Management and Banking workflow
# It starts with the comment about additional workflow and ends with the closing brace
pattern = r',\s*// Additional Corporate Finance Workflow \(previously in separate file\)\s*\{[^}]*name: \'Cash Management and Banking\'[^}]*\}(?:\s*,\s*\{[^}]*\})*?\s*\}\s*(?=\];)'

# Remove the duplicate workflow
new_content = re.sub(pattern, '', content, flags=re.DOTALL)

# Write back
with open('site-build/workflows/corporate-finance-workflows.ts', 'w') as f:
    f.write(new_content)

print("Removed duplicate Cash Management workflow from corporate finance")
