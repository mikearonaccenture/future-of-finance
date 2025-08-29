import json
import re
import os

def update_workflow_file(filename, mappings):
    """Update a workflow file with new unique IDs"""
    
    with open(filename, 'r') as f:
        content = f.read()
    
    original_content = content
    updates_made = 0
    
    # Pattern to match aiAgents arrays
    pattern = r"aiAgents: \[(.*?)\]"
    
    def replace_agents(match):
        nonlocal updates_made
        agent_codes_str = match.group(1)
        
        # Extract individual agent codes
        agent_codes = re.findall(r"'([^']+)'", agent_codes_str)
        
        # Replace with new unique IDs
        new_codes = []
        for code in agent_codes:
            if code in mappings:
                new_codes.append(f"'{mappings[code]}'")
                updates_made += 1
            else:
                # Keep original if no mapping found
                new_codes.append(f"'{code}'")
                print(f"  Warning: No mapping found for {code}")
        
        return f"aiAgents: [{', '.join(new_codes)}]"
    
    # Replace all occurrences
    content = re.sub(pattern, replace_agents, content)
    
    # Also update aiAgentsUsed arrays
    agents_used_pattern = r"aiAgentsUsed: \[(.*?)\]"
    content = re.sub(agents_used_pattern, replace_agents, content)
    
    # Write updated content
    if content != original_content:
        print(f"\nUpdating {filename}...")
        print(f"  Made {updates_made} agent ID updates")
        
        with open(filename, 'w') as f:
            f.write(content)
        
        return updates_made
    else:
        print(f"\n{filename} - No changes needed")
        return 0

def main():
    # Load mappings
    with open('agent-unique-id-mappings-complete.json', 'r') as f:
        data = json.load(f)
    mappings = data['mappings']
    
    print(f"Loaded {len(mappings)} agent ID mappings")
    
    # Get all workflow files
    workflow_files = [f for f in os.listdir('.') if f.endswith('-workflows.ts')]
    workflow_files.sort()
    
    print(f"\nFound {len(workflow_files)} workflow files to update:")
    for f in workflow_files:
        print(f"  - {f}")
    
    # Update each file
    total_updates = 0
    for filename in workflow_files:
        updates = update_workflow_file(filename, mappings)
        total_updates += updates
    
    print(f"\n{'='*50}")
    print(f"SUMMARY: Updated {total_updates} agent references across all workflows")
    print(f"{'='*50}")

if __name__ == "__main__":
    main() 