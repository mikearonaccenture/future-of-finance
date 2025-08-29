import json

# Read the current file
with open('controllership-workflows.ts', 'r') as f:
    content = f.read()

# List of workflows to remove
remove_list = [
    'Accounts Payable Reconciliation',
    'Perform Joint Venture Accounting', 
    'Partner Accounting',
    'Cash Management and Banking'
]

# Count how many we're removing
print(f"Removing {len(remove_list)} workflows...")

# For each workflow to remove, find it and remove the entire object
for workflow_name in remove_list:
    # Find the start of this workflow
    import re
    # Pattern to match a complete workflow object with this name
    pattern = r',?\s*\{\s*name:\s*["\']' + re.escape(workflow_name) + r'["\'][^}]*(?:\{[^}]*\}[^}]*)*\}(?=\s*(?:,\s*\{|\s*\]))'
    
    # Remove the workflow
    content = re.sub(pattern, '', content, flags=re.DOTALL)
    print(f"Removed: {workflow_name}")

# Clean up any double commas or comma before ]
content = re.sub(r',\s*,', ',', content)
content = re.sub(r',\s*\]', ']', content)

# Save the cleaned content
with open('controllership-workflows.ts', 'w') as f:
    f.write(content)

print("Cleanup complete!")
