import re

with open('controllership-workflows.ts', 'r') as f:
    content = f.read()

# Remove Cash Management and Banking workflow
pattern1 = r',\s*\{\s*name: \'Cash Management and Banking\'[^}]*\}(?:\s*,\s*\{[^}]*\})*?\s*\}'
content = re.sub(pattern1, '', content, flags=re.DOTALL)

# Remove Accounts Payable Reconciliation workflow
pattern2 = r',\s*\{\s*name: \'Accounts Payable Reconciliation\'[^}]*\}(?:\s*,\s*\{[^}]*\})*?\s*\}'
content = re.sub(pattern2, '', content, flags=re.DOTALL)

with open('controllership-workflows.ts', 'w') as f:
    f.write(content)

print("Removed extra workflows")
