#!/usr/bin/env python3
"""
Comprehensive workflow analysis to extract all agents and create mappings.
This will help us process all 63 workflows more efficiently.
"""

import os
import re
import json
from collections import defaultdict, Counter
from typing import Dict, List, Tuple, Set
import ast

def extract_workflow_info(content: str, filename: str) -> List[Dict]:
    """Extract workflow information including agents from TypeScript workflow files."""
    workflows = []
    
    # Find all workflow objects
    # Look for patterns like: name: 'Workflow Name', ... aiAgents: [...]
    workflow_pattern = r"{\s*name:\s*['\"]([^'\"]+)['\"].*?(?:aiAgents:\s*\[(.*?)\].*?)?}"
    
    # Also look for step-level agents in futureState
    step_pattern = r"futureState:\s*{[^}]*aiAgents:\s*\[([^\]]+)\]"
    
    # Extract workflow blocks
    workflow_blocks = re.findall(r"{\s*name:\s*['\"]([^'\"]+)['\"][^}]*currentStateWorkflow:\s*\[(.*?)\],\s*futureStateWorkflow", content, re.DOTALL)
    
    for workflow_name, workflow_content in workflow_blocks:
        agents_in_workflow = set()
        steps = []
        
        # Extract agents from each step
        step_matches = re.findall(step_pattern, workflow_content)
        for step_num, agents_str in enumerate(step_matches, 1):
            # Clean and parse agent list
            agents_str = agents_str.strip()
            # Extract individual agent IDs
            agent_ids = re.findall(r"['\"]([^'\"]+)['\"]", agents_str)
            
            # Look for inline comments
            comment_pattern = r"//\s*(.+?)(?:\n|$)"
            comments = re.findall(comment_pattern, agents_str)
            
            agents_in_workflow.update(agent_ids)
            steps.append({
                'step': step_num,
                'agents': agent_ids,
                'comments': comments[0] if comments else None
            })
        
        workflows.append({
            'name': workflow_name,
            'file': filename,
            'agents': list(agents_in_workflow),
            'steps': steps,
            'total_agents': len(agents_in_workflow)
        })
    
    return workflows

def create_agent_mapping(agent_id: str, context: str = "") -> Dict:
    """Create a new agent mapping based on ID pattern and context."""
    # Determine domain and function based on ID pattern
    if agent_id.startswith('FPA-'):
        domain = 'FPA'
    elif agent_id.startswith('RTR-'):
        domain = 'RTR'
    elif agent_id.startswith('PTP-') or agent_id.startswith('P2P-'):
        domain = 'PTP'
    elif agent_id.startswith('OTC-') or agent_id.startswith('O2C-'):
        domain = 'OTC'
    elif agent_id.startswith('TAX-'):
        domain = 'TAX'
    elif agent_id.startswith('TRS-'):
        domain = 'TRS'
    elif agent_id.startswith('CRP-') or agent_id.startswith('CF-'):
        domain = 'CRP'
    elif agent_id.startswith('CTL-') or agent_id.startswith('CTRL-'):
        domain = 'CTL'
    elif agent_id.startswith('INV-') or agent_id.startswith('IR-'):
        domain = 'INV'
    else:
        # For 2-3 letter codes, infer domain from context
        domain = 'GEN'  # Default to general
    
    # Create new ID based on pattern
    if len(agent_id) <= 3 and not '-' in agent_id:
        # Legacy 2-3 letter code
        if agent_id.startswith('D'):
            new_id = f"GEN-DATA-{agent_id}"
        elif agent_id.startswith('R'):
            new_id = f"GEN-REPORT-{agent_id}"
        elif agent_id.startswith('A'):
            new_id = f"GEN-ANALYZE-{agent_id}"
        elif agent_id.startswith('V'):
            new_id = f"GEN-VALIDATE-{agent_id}"
        elif agent_id.startswith('C'):
            new_id = f"GEN-CONTROL-{agent_id}"
        elif agent_id.startswith('M'):
            new_id = f"GEN-MANAGE-{agent_id}"
        elif agent_id.startswith('P'):
            new_id = f"GEN-PROCESS-{agent_id}"
        elif agent_id.startswith('T'):
            new_id = f"GEN-TRACK-{agent_id}"
        elif agent_id.startswith('S'):
            new_id = f"GEN-SYSTEM-{agent_id}"
        elif agent_id.startswith('I'):
            new_id = f"GEN-INTEGRATE-{agent_id}"
        elif agent_id.startswith('F'):
            new_id = f"FPA-FINANCE-{agent_id}"
        elif agent_id.startswith('B'):
            new_id = f"GEN-BUSINESS-{agent_id}"
        elif agent_id.startswith('E'):
            new_id = f"GEN-EXECUTE-{agent_id}"
        elif agent_id.startswith('N'):
            new_id = f"GEN-NOTIFY-{agent_id}"
        elif agent_id.startswith('G'):
            new_id = f"GEN-GENERAL-{agent_id}"
        elif agent_id.startswith('H'):
            new_id = f"GEN-HANDLE-{agent_id}"
        elif agent_id.startswith('K'):
            new_id = f"GEN-KEY-{agent_id}"
        elif agent_id.startswith('L'):
            new_id = f"GEN-LOGIC-{agent_id}"
        elif agent_id.startswith('O'):
            new_id = f"GEN-OPERATE-{agent_id}"
        elif agent_id.startswith('Q'):
            new_id = f"GEN-QUALITY-{agent_id}"
        elif agent_id.startswith('U'):
            new_id = f"GEN-UTILITY-{agent_id}"
        elif agent_id.startswith('W'):
            new_id = f"GEN-WORKFLOW-{agent_id}"
        elif agent_id.startswith('X'):
            new_id = f"GEN-EXECUTE-{agent_id}"
        elif agent_id.startswith('Y'):
            new_id = f"GEN-YIELD-{agent_id}"
        elif agent_id.startswith('Z'):
            new_id = f"GEN-ZONE-{agent_id}"
        else:
            new_id = f"GEN-AGENT-{agent_id}"
    else:
        # Already has hyphenated format, keep domain
        new_id = agent_id
    
    return {
        'legacy_id': agent_id,
        'new_id': new_id,
        'domain': domain,
        'context': context
    }

def main():
    workflow_dir = 'site-build/workflows'
    all_workflows = []
    all_agents = defaultdict(list)
    agent_usage = Counter()
    
    # Process all workflow files
    for filename in os.listdir(workflow_dir):
        if filename.endswith('.ts'):
            filepath = os.path.join(workflow_dir, filename)
            with open(filepath, 'r') as f:
                content = f.read()
            
            workflows = extract_workflow_info(content, filename)
            all_workflows.extend(workflows)
            
            # Collect agent usage
            for workflow in workflows:
                for agent in workflow['agents']:
                    all_agents[agent].append({
                        'workflow': workflow['name'],
                        'file': filename
                    })
                    agent_usage[agent] += 1
    
    # Generate comprehensive report
    print("# Comprehensive Workflow Analysis Report\n")
    print(f"## Summary")
    print(f"- Total Workflows Analyzed: {len(all_workflows)}")
    print(f"- Total Unique Agents Found: {len(all_agents)}")
    print(f"- Total Agent References: {sum(agent_usage.values())}")
    print(f"\n## Agent Usage by Frequency\n")
    
    # Top agents by usage
    for agent, count in agent_usage.most_common(30):
        print(f"- **{agent}**: {count} uses")
        workflows_using = [w['workflow'] for w in all_agents[agent]][:3]
        print(f"  - Used in: {', '.join(workflows_using)}{'...' if len(all_agents[agent]) > 3 else ''}")
    
    print(f"\n## Workflows by Agent Count\n")
    
    # Sort workflows by agent count
    sorted_workflows = sorted(all_workflows, key=lambda x: x['total_agents'], reverse=True)
    for workflow in sorted_workflows[:20]:
        print(f"- **{workflow['name']}** ({workflow['file']}): {workflow['total_agents']} agents")
    
    # Generate mapping recommendations
    print(f"\n## Agent Mapping Recommendations\n")
    
    mappings = {}
    for agent_id in sorted(all_agents.keys()):
        if len(agent_id) <= 3 and not '-' in agent_id:
            mapping = create_agent_mapping(agent_id)
            mappings[agent_id] = mapping['new_id']
            print(f"- `{agent_id}` → `{mapping['new_id']}`")
    
    # Save results
    results = {
        'summary': {
            'total_workflows': len(all_workflows),
            'total_unique_agents': len(all_agents),
            'total_references': sum(agent_usage.values())
        },
        'workflows': all_workflows,
        'agent_usage': dict(agent_usage),
        'agent_locations': dict(all_agents),
        'recommended_mappings': mappings
    }
    
    with open('workflow-analysis-results.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\n## Results saved to workflow-analysis-results.json")

if __name__ == '__main__':
    main() 