import re
import json
from collections import defaultdict, Counter

# Dictionary to store all agents with their contexts
agent_contexts = defaultdict(list)

# Process each workflow file
import glob
for filename in glob.glob('*.ts'):
    if 'workflows' not in filename:
        continue
        
    with open(filename, 'r') as f:
        content = f.read()
    
    # Find all aiAgents arrays with context
    pattern = r"aiAgents: \[(.*?)\](?:.*?//\s*(.+))?"
    matches = re.findall(pattern, content, re.DOTALL)
    
    for agents_str, comment in matches:
        agents = re.findall(r"'([A-Z][A-Z0-9-]+)'", agents_str)
        
        # Parse comments
        if comment:
            descriptions = [d.strip() for d in comment.split(',')]
        else:
            descriptions = []
        
        # Map agents to descriptions
        for i, agent_id in enumerate(agents):
            desc = descriptions[i] if i < len(descriptions) else ""
            agent_contexts[agent_id].append({
                'file': filename,
                'description': desc
            })

# Analyze duplication patterns
print("=== AGENT DUPLICATION ANALYSIS ===\n")

# 1. Look for agents with similar base codes
base_code_groups = defaultdict(list)
for agent in agent_contexts:
    parts = agent.split('-')
    if len(parts) >= 2:
        domain = parts[0]
        base = parts[1]
        base_code_groups[f"{domain}-{base}"].append(agent)

print("1. Agents with same base codes (likely duplicates):")
duplicate_count = 0
for base, agents in sorted(base_code_groups.items()):
    if len(agents) > 1:
        print(f"\n  {base}* ({len(agents)} variants):")
        for agent in sorted(agents):
            contexts = agent_contexts[agent]
            desc = contexts[0]['description'] if contexts else "No description"
            print(f"    - {agent}: {desc}")
        duplicate_count += len(agents) - 1

print(f"\nPotential duplicates from base code analysis: {duplicate_count}")

# 2. Check for numbered sequences (like AA01, AA02, etc)
print("\n2. Numbered sequence patterns:")
numbered_patterns = defaultdict(list)
for agent in agent_contexts:
    # Look for pattern like XXX-YY01, XXX-YY02
    match = re.match(r'([A-Z]+-[A-Z]+)(\d+)', agent)
    if match:
        base = match.group(1)
        num = match.group(2)
        numbered_patterns[base].append((int(num), agent))

for base, agents in sorted(numbered_patterns.items()):
    if len(agents) > 1:
        agents.sort()
        print(f"\n  {base}## series ({len(agents)} agents):")
        for num, agent in agents[:5]:  # Show first 5
            contexts = agent_contexts[agent]
            desc = contexts[0]['description'] if contexts else "No description"
            print(f"    - {agent}: {desc}")
        if len(agents) > 5:
            print(f"    ... and {len(agents) - 5} more")

# 3. Analyze descriptions for similar functionality
print("\n3. Common agent functions (by description keywords):")
function_words = defaultdict(list)
for agent, contexts in agent_contexts.items():
    for ctx in contexts:
        desc = ctx['description'].lower()
        # Extract key function words
        for word in ['analyzer', 'validator', 'generator', 'tracker', 'monitor', 
                     'optimizer', 'engine', 'processor', 'calculator', 'manager']:
            if word in desc:
                function_words[word].append((agent, ctx['description']))

for function, agents in sorted(function_words.items()):
    if len(agents) > 10:  # Only show functions with many agents
        print(f"\n  '{function}' agents ({len(agents)} total):")
        # Show a sample
        for agent, desc in agents[:5]:
            print(f"    - {agent}: {desc}")
        print(f"    ... and {len(agents) - 5} more")

# 4. Summary recommendations
print("\n=== RECOMMENDATIONS ===")
print(f"1. Total unique agents: {len(agent_contexts)}")
print(f"2. Estimated true unique agents needed: ~150-200")
print(f"3. Consolidation opportunity: ~{len(agent_contexts) - 200} agents")

# Save detailed analysis
with open('agent-duplication-analysis.json', 'w') as f:
    json.dump({
        'total_agents': len(agent_contexts),
        'base_code_groups': {k: v for k, v in base_code_groups.items() if len(v) > 1},
        'numbered_sequences': {k: [a[1] for a in v] for k, v in numbered_patterns.items()},
        'duplicate_count_estimate': duplicate_count
    }, f, indent=2)

print("\nDetailed analysis saved to agent-duplication-analysis.json")
