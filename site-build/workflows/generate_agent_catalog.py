import re
import json
from collections import defaultdict

# Read all workflow files
agent_data = defaultdict(lambda: {
    'name': '',
    'description': '',
    'domain': '',
    'workflows': [],
    'steps': [],
    'capabilities': []
})

domain_map = {
    'FPA': 'Financial Planning & Analysis',
    'PTP': 'Procure to Pay',
    'O2C': 'Order to Cash',
    'CA': 'Cost Accounting',
    'CTL': 'Controllership',
    'CF': 'Corporate Finance',
    'IR': 'Investor Relations'
}

# Process each workflow file
import glob
for filename in glob.glob('*.ts'):
    if 'workflows' not in filename:
        continue
        
    with open(filename, 'r') as f:
        content = f.read()
    
    # Extract workflow name
    workflow_type = filename.replace('-workflows.ts', '').replace('-', ' ').title()
    
    # Find all agent references with comments
    pattern = r"aiAgents: \[(.*?)\](?:.*?//\s*(.+))?"
    matches = re.findall(pattern, content, re.DOTALL)
    
    for agents_str, comment in matches:
        # Extract individual agents
        agents = re.findall(r"'([A-Z0-9-]+)'", agents_str)
        
        # Parse comments if available
        if comment:
            # Split comment by commas to get descriptions
            descriptions = [d.strip() for d in comment.split(',')]
        else:
            descriptions = []
        
        # Map agents to descriptions
        for i, agent_id in enumerate(agents):
            if agent_id not in agent_data:
                # Extract domain
                domain_prefix = agent_id.split('-')[0]
                agent_data[agent_id]['domain'] = domain_map.get(domain_prefix, domain_prefix)
                
            # Add workflow reference
            if workflow_type not in agent_data[agent_id]['workflows']:
                agent_data[agent_id]['workflows'].append(workflow_type)
            
            # Add description if available
            if i < len(descriptions) and descriptions[i]:
                if not agent_data[agent_id]['description']:
                    agent_data[agent_id]['description'] = descriptions[i]

# Generate catalog markdown
print("# Comprehensive AI Agent Catalog")
print(f"\nTotal Unique Agents: **{len(agent_data)}**")
print("\n## Agent Distribution by Domain\n")

# Count by domain
domain_counts = defaultdict(int)
for agent_id, data in agent_data.items():
    domain_counts[data['domain']] += 1

for domain, count in sorted(domain_counts.items()):
    print(f"- **{domain}**: {count} agents")

# Generate detailed catalog by domain
for domain_name in domain_map.values():
    agents_in_domain = [(aid, data) for aid, data in agent_data.items() 
                        if data['domain'] == domain_name]
    
    if agents_in_domain:
        print(f"\n## {domain_name} Agents\n")
        print("| Agent ID | Description | Used In Workflows |")
        print("|----------|-------------|-------------------|")
        
        for agent_id, data in sorted(agents_in_domain):
            desc = data['description'] or 'AI-powered automation agent'
            workflows = ', '.join(data['workflows'][:3])
            if len(data['workflows']) > 3:
                workflows += f' (+{len(data["workflows"])-3} more)'
            print(f"| {agent_id} | {desc} | {workflows} |")

# Save to JSON for programmatic use
with open('agent-catalog-data.json', 'w') as f:
    json.dump(dict(agent_data), f, indent=2)

print("\n\n*Note: Agent descriptions extracted from code comments where available.*")
