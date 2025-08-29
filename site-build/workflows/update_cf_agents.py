import re

# Read the file
with open('corporate-finance-workflows.ts', 'r') as f:
    content = f.read()

# Counter for unique IDs
id_counter = {}

def get_next_id(prefix):
    if prefix not in id_counter:
        id_counter[prefix] = 1
    else:
        id_counter[prefix] += 1
    return f"{prefix}-{id_counter[prefix]:03d}"

# Find all aiAgents arrays with old IDs
pattern = r"aiAgents: \[((?:'[A-Z]{2,3}'(?:,\s*)?)+)\]"

def replace_agent_ids(match):
    agents_str = match.group(1)
    # Extract individual agent IDs
    agents = re.findall(r"'([A-Z]{2,3})'", agents_str)
    
    # Generate new IDs with CF- prefix
    new_agents = []
    for agent in agents:
        new_id = f"CF-{agent}"
        # Add unique suffix if needed
        if new_id in new_agents:
            new_id = get_next_id(f"CF-{agent}")
        new_agents.append(f"'{new_id}'")
    
    return f"aiAgents: [{', '.join(new_agents)}]"

# Replace all old agent IDs
content = re.sub(pattern, replace_agent_ids, content)

# Also update the aiAgentsUsed arrays
pattern2 = r"aiAgentsUsed: \[((?:'[A-Z]{2,3}'(?:,\s*)?)+)\]"
content = re.sub(pattern2, replace_agent_ids, content)

# Write back
with open('corporate-finance-workflows.ts', 'w') as f:
    f.write(content)

print("Updated all agent IDs in corporate finance workflows")
