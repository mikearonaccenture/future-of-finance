#!/usr/bin/env python3
"""
Remove original_code field from agent catalog
"""

import json

def main():
    # Load enhanced catalog
    with open('agent-catalog-enhanced.json', 'r') as f:
        catalog = json.load(f)
    
    print(f"Removing original_code from {len(catalog['agents'])} agents...")
    
    # Remove original_code from each agent
    for agent_id, agent_data in catalog['agents'].items():
        if 'original_code' in agent_data:
            del agent_data['original_code']
    
    # Save updated catalog
    with open('agent-catalog-enhanced.json', 'w') as f:
        json.dump(catalog, f, indent=2)
    
    # Also update the main catalog
    with open('agent-catalog.json', 'w') as f:
        json.dump(catalog, f, indent=2)
    
    # Update public version
    with open('public/agent-catalog.json', 'w') as f:
        json.dump(catalog, f, indent=2)
    
    print("Successfully removed original_code field from all catalogs")
    
    # Show sample agent to confirm
    sample_id = list(catalog['agents'].keys())[0]
    print(f"\nSample agent ({sample_id}) fields:")
    print(list(catalog['agents'][sample_id].keys()))

if __name__ == '__main__':
    main() 