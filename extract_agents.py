#!/usr/bin/env python3
"""
Agent Context Extraction Script
Extracts all agent IDs and their contexts from workflow files
"""

import os
import re
import json
from collections import defaultdict, Counter
from typing import Dict, List, Tuple

def extract_agents_from_file(filepath: str) -> Dict[str, List[Dict]]:
    """Extract agents and their contexts from a workflow file."""
    agents = defaultdict(list)
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Find all aiAgents arrays with their context
    # Pattern to match aiAgents arrays including comments
    pattern = r'stepNumber:\s*(\d+),\s*\n\s*description:\s*[\'"]([^\'"]+)[\'"].*?\n.*?aiAgents:\s*\[([^\]]+)\]'
    
    matches = re.findall(pattern, content, re.DOTALL)
    
    for step_num, description, agents_str in matches:
        # Extract agent IDs
        agent_ids = re.findall(r'[\'"]([^\'"]+)[\'"]', agents_str)
        
        # Extract comment if present
        comment_match = re.search(r'//\s*(.+)$', agents_str, re.MULTILINE)
        comment = comment_match.group(1) if comment_match else ''
        
        # Parse comment to get agent descriptions
        agent_descriptions = []
        if comment:
            # Split by comma and clean up
            parts = comment.split(',')
            agent_descriptions = [part.strip() for part in parts]
        
        # Store context for each agent
        for i, agent_id in enumerate(agent_ids):
            context = {
                'file': os.path.basename(filepath),
                'step_number': int(step_num),
                'step_description': description,
                'agent_description': agent_descriptions[i] if i < len(agent_descriptions) else '',
                'co_agents': [aid for aid in agent_ids if aid != agent_id]
            }
            agents[agent_id].append(context)
    
    return dict(agents)

def analyze_all_workflows(workflow_dir: str) -> Tuple[Dict, Dict]:
    """Analyze all workflow files and extract agent information."""
    all_agents = defaultdict(list)
    
    # Get all workflow files
    workflow_files = [f for f in os.listdir(workflow_dir) if f.endswith('-workflows.ts')]
    
    print(f"Found {len(workflow_files)} workflow files")
    
    for file in workflow_files:
        filepath = os.path.join(workflow_dir, file)
        file_agents = extract_agents_from_file(filepath)
        
        # Merge results
        for agent_id, contexts in file_agents.items():
            all_agents[agent_id].extend(contexts)
    
    return dict(all_agents), workflow_files

def categorize_agents(agents: Dict) -> Dict[str, List[str]]:
    """Categorize agents based on their IDs and contexts."""
    categories = defaultdict(list)
    
    for agent_id, contexts in agents.items():
        # Categorize by ID pattern
        if re.match(r'^[A-Z]{2}$', agent_id):
            prefix = agent_id[0]
            categories[f'{prefix}* Series (2-letter)'].append(agent_id)
        elif re.match(r'^[A-Z]{3}$', agent_id):
            prefix = agent_id[0]
            categories[f'{prefix}** Series (3-letter)'].append(agent_id)
        elif '-' in agent_id:
            domain = agent_id.split('-')[0]
            categories[f'{domain} Domain (hyphenated)'].append(agent_id)
        else:
            categories['Other'].append(agent_id)
    
    return dict(categories)

def infer_agent_purpose(agent_id: str, contexts: List[Dict]) -> str:
    """Infer the purpose of an agent from its contexts."""
    # Collect all descriptions
    all_descriptions = []
    for ctx in contexts:
        if ctx['agent_description']:
            all_descriptions.append(ctx['agent_description'])
        all_descriptions.append(ctx['step_description'])
    
    # If we have explicit descriptions, use the most common one
    if any(ctx['agent_description'] for ctx in contexts):
        desc_counter = Counter(ctx['agent_description'] for ctx in contexts if ctx['agent_description'])
        most_common = desc_counter.most_common(1)
        if most_common:
            return most_common[0][0]
    
    # Otherwise, infer from ID pattern
    id_patterns = {
        r'^A[A-Z]$': 'Automation/Approval Agent',
        r'^D[A-Z]$': 'Data Management Agent',
        r'^R[A-Z]$': 'Reporting/Reconciliation Agent',
        r'^V[A-Z]$': 'Validation/Verification Agent',
        r'^C[A-Z]$': 'Control/Compliance Agent',
        r'^P[A-Z]$': 'Processing/Payment Agent',
        r'^S[A-Z]$': 'System/Smart Agent',
        r'^T[A-Z]$': 'Transaction/Tracking Agent',
        r'^E[A-Z]$': 'Engine/Execution Agent',
        r'^I[A-Z]$': 'Integration/Intelligence Agent',
        r'^M[A-Z]$': 'Management/Monitoring Agent',
        r'^F[A-Z]$': 'Financial/Forecasting Agent',
        r'-': 'Domain-Specific Agent'
    }
    
    for pattern, purpose in id_patterns.items():
        if re.match(pattern, agent_id):
            return purpose
    
    return 'Unknown Purpose'

def generate_report(agents: Dict, workflow_files: List[str]) -> str:
    """Generate a comprehensive report of all agents."""
    from datetime import datetime
    report = "# Agent Context Analysis Report\n\n"
    report += f"Generated: {datetime.now().isoformat()}\n\n"
    report += "## Summary\n\n"
    report += f"- Total Unique Agents: **{len(agents)}**\n"
    report += f"- Total Workflow Files: {len(workflow_files)}\n"
    report += f"- Total Agent References: {sum(len(contexts) for contexts in agents.values())}\n\n"
    
    # Categorize agents
    categories = categorize_agents(agents)
    report += "## Agent Categories\n\n"
    
    for category, agent_ids in sorted(categories.items()):
        report += f"### {category} ({len(agent_ids)} agents)\n"
        # Show first 10 agents in each category
        for agent_id in sorted(agent_ids)[:10]:
            purpose = infer_agent_purpose(agent_id, agents[agent_id])
            usage_count = len(agents[agent_id])
            report += f"- **{agent_id}** ({usage_count}x): {purpose}\n"
        if len(agent_ids) > 10:
            report += f"- ... and {len(agent_ids) - 10} more\n"
        report += "\n"
    
    # Most used agents
    usage_counts = [(agent_id, len(contexts)) for agent_id, contexts in agents.items()]
    usage_counts.sort(key=lambda x: x[1], reverse=True)
    
    report += "## Top 30 Most Used Agents\n\n"
    for agent_id, count in usage_counts[:30]:
        purpose = infer_agent_purpose(agent_id, agents[agent_id])
        report += f"- **{agent_id}** ({count} occurrences): {purpose}\n"
    
    # Duplicate analysis
    report += "\n## Potential Duplicate Groups\n\n"
    
    # Group by prefix
    prefix_groups = defaultdict(list)
    for agent_id in agents:
        if len(agent_id) == 2:
            prefix_groups[agent_id[0]].append(agent_id)
        elif len(agent_id) == 3:
            prefix_groups[agent_id[:2]].append(agent_id)
    
    # Report significant groups
    for prefix, group_agents in sorted(prefix_groups.items()):
        if len(group_agents) > 3:  # Only show groups with 4+ agents
            report += f"### {prefix}* Series ({len(group_agents)} agents)\n"
            report += "Likely duplicates serving similar functions:\n"
            for agent_id in sorted(group_agents)[:10]:
                purpose = infer_agent_purpose(agent_id, agents[agent_id])
                report += f"- {agent_id}: {purpose}\n"
            if len(group_agents) > 10:
                report += f"- ... and {len(group_agents) - 10} more\n"
            report += "\n"
    
    return report

def main():
    """Main execution function."""
    workflow_dir = 'site-build/workflows'
    
    print("Starting agent extraction...")
    agents, workflow_files = analyze_all_workflows(workflow_dir)
    
    print(f"\nFound {len(agents)} unique agents")
    
    # Generate report
    report = generate_report(agents, workflow_files)
    
    # Save report
    with open('agent-context-report.md', 'w') as f:
        f.write(report)
    print("\nReport saved to agent-context-report.md")
    
    # Save raw data
    from datetime import datetime
    data = {
        'extraction_date': datetime.now().isoformat(),
        'total_agents': len(agents),
        'total_workflows': len(workflow_files),
        'agents': {}
    }
    
    for agent_id, contexts in agents.items():
        data['agents'][agent_id] = {
            'id': agent_id,
            'occurrences': len(contexts),
            'inferred_purpose': infer_agent_purpose(agent_id, contexts),
            'contexts': contexts
        }
    
    with open('agent-context-data.json', 'w') as f:
        json.dump(data, f, indent=2)
    print("Raw data saved to agent-context-data.json")
    
    # Generate ID list for reference
    with open('all-agent-ids.txt', 'w') as f:
        for agent_id in sorted(agents.keys()):
            f.write(f"{agent_id}\n")
    print("Agent ID list saved to all-agent-ids.txt")

if __name__ == '__main__':
    main() 