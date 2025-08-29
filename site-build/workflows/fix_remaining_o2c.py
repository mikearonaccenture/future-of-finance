import re

# Read the file
with open('order-to-cash-workflows.ts', 'r') as f:
    content = f.read()

# Find all aiAgents arrays with 2-letter IDs
pattern = r"aiAgents: \[((?:'[A-Z]{2}'(?:,\s*)?)+)\]"

def replace_agent_ids(match):
    agents_str = match.group(1)
    # Extract individual agent IDs
    agents = re.findall(r"'([A-Z]{2})'", agents_str)
    
    # Generate new IDs with O2C- prefix
    new_agents = []
    for i, agent in enumerate(agents):
        new_id = f"O2C-{agent}{i+1:02d}"
        new_agents.append(f"'{new_id}'")
    
    return f"aiAgents: [{', '.join(new_agents)}]"

# Replace all old agent IDs
content = re.sub(pattern, replace_agent_ids, content)

# Write back
with open('order-to-cash-workflows.ts', 'w') as f:
    f.write(content)

print("Fixed remaining O2C agent IDs")
