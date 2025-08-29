import re
from collections import defaultdict, Counter

# Read all workflow files and extract agents with their context
agent_usage = defaultdict(list)
total_references = 0

import glob
for filename in glob.glob('*.ts'):
    if 'workflows' not in filename:
        continue
        
    with open(filename, 'r') as f:
        content = f.read()
    
    # Find workflow names
    workflow_names = re.findall(r"name: '([^']+)'", content)
    current_workflow_idx = 0
    
    # Find all aiAgents arrays
    for match in re.finditer(r"aiAgents: \[(.*?)\]", content, re.DOTALL):
        agents_str = match.group(1)
        agents = re.findall(r"'([^']+)'", agents_str)
        
        # Find which workflow this belongs to
        workflow_name = workflow_names[min(current_workflow_idx, len(workflow_names)-1)]
        
        for agent in agents:
            agent_usage[agent].append({
                'file': filename,
                'workflow': workflow_name
            })
            total_references += 1

# Analyze
print("=== AI AGENT DUPLICATION REPORT ===\n")
print(f"Total agent references across all workflows: {total_references}")
print(f"Total unique agent IDs: {len(agent_usage)}")
print(f"Average uses per agent ID: {total_references/len(agent_usage):.1f}")

# Group by domain
domain_stats = defaultdict(lambda: {'agents': set(), 'references': 0})
for agent, uses in agent_usage.items():
    domain = agent.split('-')[0]
    domain_stats[domain]['agents'].add(agent)
    domain_stats[domain]['references'] += len(uses)

print("\n=== By Domain ===")
for domain, stats in sorted(domain_stats.items()):
    print(f"\n{domain}:")
    print(f"  Unique agents: {len(stats['agents'])}")
    print(f"  Total references: {stats['references']}")
    print(f"  Avg refs/agent: {stats['references']/len(stats['agents']):.1f}")

# Find most overused agents
print("\n=== Most Overused Agent IDs (need unique variants) ===")
overused = [(agent, len(uses)) for agent, uses in agent_usage.items() if len(uses) > 5]
overused.sort(key=lambda x: x[1], reverse=True)

for agent, count in overused[:20]:
    print(f"\n{agent}: used {count} times")
    # Show first few uses
    for use in agent_usage[agent][:3]:
        print(f"  - {use['workflow']} ({use['file']})")
    if count > 3:
        print(f"  ... and {count-3} more places")

# Recommendations
print("\n=== RECOMMENDATIONS ===")
print("1. Problem: Our automated conversion created duplicate IDs")
print("   - Same 2-letter codes (AA, DD, AR, etc.) were converted to same domain prefix")
print("   - This created massive duplication (e.g., CTL-AA used 23 times)")
print("\n2. Solution: Each agent needs a unique ID based on its specific function")
print("   - Instead of CTL-AA everywhere, use CTL-AUDIT-ANALYZER-001, CTL-ACCOUNT-ADJUSTER-001, etc.")
print("   - Base the ID on what the agent actually does, not just generic codes")
print("\n3. Estimated actual unique agents needed: ~200-250")
print("   - Each workflow step typically needs 3-5 specific agents")
print("   - Some agents can be genuinely shared across workflows")

# Save detailed data
detailed_overuse = {}
for agent, count in overused:
    detailed_overuse[agent] = {
        'count': count,
        'uses': [{'workflow': u['workflow'], 'file': u['file']} for u in agent_usage[agent]]
    }

import json
with open('agent-overuse-report.json', 'w') as f:
    json.dump(detailed_overuse, f, indent=2)

print("\nDetailed overuse data saved to agent-overuse-report.json")
