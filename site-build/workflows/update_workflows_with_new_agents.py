import json
import re
import os

def load_agent_mappings():
    """Load mappings from old codes to new unique IDs"""
    
    # Load transformed catalog
    with open('agent-catalog-transformed.json', 'r') as f:
        transformed = json.load(f)
    
    # Load old code mappings  
    with open('agent-code-mappings.json', 'r') as f:
        old_mappings = json.load(f)
    
    # Create mapping from old code to new unique ID and abbreviation
    code_to_new_id = {}
    
    # First, map by original_code field
    for uid, agent in transformed['agents'].items():
        if 'original_code' in agent:
            old_code = agent['original_code']
            code_to_new_id[old_code] = {
                'unique_id': uid,
                'abbreviation': agent['abbreviation'],
                'full_name': agent['full_name']
            }
    
    # For any missing ones, try to match by description
    for code, desc in old_mappings['agent_mappings'].items():
        if code not in code_to_new_id:
            # Try to find by matching description
            for uid, agent in transformed['agents'].items():
                if agent['full_name'].lower() == desc.lower():
                    code_to_new_id[code] = {
                        'unique_id': uid,
                        'abbreviation': agent['abbreviation'],
                        'full_name': agent['full_name']
                    }
                    break
    
    return code_to_new_id

def update_workflow_file(filename, mappings):
    """Update a single workflow file with new agent IDs"""
    
    with open(filename, 'r') as f:
        content = f.read()
    
    original_content = content
    updates_made = 0
    
    # Pattern to match aiAgents arrays with comments
    pattern = r"aiAgents: \[(.*?)\],?\s*//\s*(.+)"
    
    def replace_agents(match):
        nonlocal updates_made
        agent_codes = match.group(1)
        descriptions = match.group(2)
        
        # Parse the agent codes
        codes = [c.strip().strip("'\"") for c in agent_codes.split(',')]
        desc_list = [d.strip() for d in descriptions.split(',')]
        
        # Replace with new unique IDs
        new_codes = []
        new_descs = []
        
        for i, code in enumerate(codes):
            if code in mappings:
                new_id = mappings[code]['unique_id']
                abbrev = mappings[code]['abbreviation']
                full_name = mappings[code]['full_name']
                
                # Use abbreviation in the array, full description in comment
                new_codes.append(f"'{abbrev}'")
                new_descs.append(f"{abbrev}:{full_name}")
                updates_made += 1
            else:
                # Keep original if no mapping found
                new_codes.append(f"'{code}'")
                new_descs.append(desc_list[i] if i < len(desc_list) else code)
        
        # Reconstruct the line
        return f"aiAgents: [{', '.join(new_codes)}], // {', '.join(new_descs)}"
    
    # Replace all occurrences
    content = re.sub(pattern, replace_agents, content)
    
    # Only write if changes were made
    if content != original_content:
        # Create backup
        backup_name = filename.replace('.ts', '_backup.ts')
        with open(backup_name, 'w') as f:
            f.write(original_content)
        
        # Write updated content
        with open(filename, 'w') as f:
            f.write(content)
        
        print(f"Updated {filename}: {updates_made} agent references updated")
        return updates_made
    else:
        print(f"No changes needed for {filename}")
        return 0

def main():
    """Update all workflow files with new agent IDs"""
    
    print("Loading agent mappings...")
    mappings = load_agent_mappings()
    print(f"Loaded mappings for {len(mappings)} agents")
    
    # Find all workflow files
    workflow_files = [f for f in os.listdir('.') if f.endswith('-workflows.ts')]
    
    print(f"\nFound {len(workflow_files)} workflow files to update")
    
    total_updates = 0
    for filename in workflow_files:
        updates = update_workflow_file(filename, mappings)
        total_updates += updates
    
    print(f"\nTotal updates made: {total_updates}")
    
    # Show sample of mappings for verification
    print("\nSample mappings applied:")
    sample_codes = ['O2C-BM', 'O2C-RS', 'FPA-DG', 'CTL-AA', 'PTP-CAPTURE-001']
    for code in sample_codes:
        if code in mappings:
            m = mappings[code]
            print(f"  {code} -> {m['abbreviation']} ({m['unique_id']}) - {m['full_name']}")

if __name__ == "__main__":
    main() 