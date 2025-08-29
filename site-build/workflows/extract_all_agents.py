import re
import json
from collections import defaultdict, Counter

# Dictionary to store all agents
all_agents = defaultdict(list)
agent_comments = {}

# Process each workflow file
import glob
for filename in glob.glob('*.ts'):
    if 'workflows' not in filename:
        continue
        
    with open(filename, 'r') as f:
        lines = f.readlines()
    
    # Extract workflow type from filename
    workflow_type = filename.replace('-workflows.ts', '').replace('-', ' ').title()
    
    # Look for aiAgents arrays
    for i, line in enumerate(lines):
        if 'aiAgents:' in line and '[' in line:
            # Extract agents from this line
            agents = re.findall(r"'([A-Z][A-Z0-9-]+)'", line)
            
            # Look for comment on same line
            comment_match = re.search(r'//\s*(.+)$', line)
            if comment_match:
                comment = comment_match.group(1)
                # Parse comment
                parts = [p.strip() for p in comment.split(',')]
                for j, agent in enumerate(agents):
                    if j < len(parts):
                        agent_comments[agent] = parts[j]
            
            # Store agents with their workflow
            for agent in agents:
                all_agents[agent].append(workflow_type)

# Count total unique agents
total_agents = len(all_agents)

# Count by domain
domain_counts = Counter()
for agent in all_agents:
    domain = agent.split('-')[0]
    domain_counts[domain] += 1

# Output results
print(f"Total unique agents: {total_agents}")
print("\nBreakdown by domain:")
for domain, count in domain_counts.most_common():
    print(f"  {domain}: {count}")

print(f"\nTotal agent references: {sum(len(v) for v in all_agents.values())}")
print(f"Average references per agent: {sum(len(v) for v in all_agents.values()) / total_agents:.1f}")

# Save detailed data
output = {
    'total_agents': total_agents,
    'domain_counts': dict(domain_counts),
    'agents': {}
}

for agent, workflows in sorted(all_agents.items()):
    output['agents'][agent] = {
        'workflows': list(set(workflows)),
        'reference_count': len(workflows),
        'description': agent_comments.get(agent, '')
    }

with open('agent-inventory.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"\nDetailed agent inventory saved to agent-inventory.json")
