import re

# Read the file
with open('fpa-workflows.ts', 'r') as f:
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
    # Skip if already has FPA- prefix
    if 'FPA-' in agents_str:
        return match.group(0)
    
    # Extract individual agent IDs
    agents = re.findall(r"'([A-Z]{2,3})'", agents_str)
    
    # Generate new IDs with FPA- prefix
    new_agents = []
    for agent in agents:
        new_id = f"FPA-{agent}"
        # Add unique suffix if needed
        if new_id in new_agents:
            new_id = get_next_id(f"FPA-{agent}")
        new_agents.append(f"'{new_id}'")
    
    return f"aiAgents: [{', '.join(new_agents)}]"

# Replace all old agent IDs
content = re.sub(pattern, replace_agent_ids, content)

# Also update the aiAgentsUsed arrays - simpler approach
pattern2 = r"aiAgentsUsed: \[((?:[^]]+)?)\]"
def replace_used_ids(match):
    agents_str = match.group(1)
    if 'FPA-' in agents_str:
        return match.group(0)
    
    # Extract individual agent IDs
    agents = re.findall(r"'([A-Z]{2,3})'", agents_str)
    
    # Generate new IDs
    new_agents = []
    for agent in agents:
        new_id = f"FPA-{agent}"
        if new_id in [a.strip("'") for a in new_agents]:
            new_id = get_next_id(f"FPA-{agent}")
        new_agents.append(f"'{new_id}'")
    
    # Preserve formatting if multiline
    if '\n' in agents_str:
        sep = ',\n            '
        return f"aiAgentsUsed: [\n            {sep.join(new_agents)}\n        ]"
    else:
        return f"aiAgentsUsed: [{', '.join(new_agents)}]"

content = re.sub(pattern2, replace_used_ids, content, flags=re.DOTALL)

# Write back
with open('fpa-workflows.ts', 'w') as f:
    f.write(content)

print("Updated all agent IDs in FPA workflows")
