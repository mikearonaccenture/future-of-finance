import json

def generate_unique_id(code, description, domain):
    """Generate a truly unique ID for an agent"""
    
    # Extract domain suffix
    domain_suffix = domain.lower()
    if domain == 'CTL':
        domain_suffix = 'ctl'
    elif domain == 'CF':
        domain_suffix = 'cf'
    elif domain == 'CA':
        domain_suffix = 'ca'
    elif domain == 'IR':
        domain_suffix = 'ir'
    elif domain == 'FPA':
        domain_suffix = 'fpa'
    elif domain == 'O2C':
        domain_suffix = 'o2c'
    elif domain == 'PTP':
        domain_suffix = 'p2p'
    elif domain == 'GEN':
        domain_suffix = 'general'
    
    # Create descriptive ID from description
    words = description.lower().split()
    
    # Remove common words
    stop_words = {'ai', 'the', 'and', 'or', 'for', 'with', 'powered', 'based', 'agent', 'automated', 'smart', 'intelligent', 'digital'}
    words = [w for w in words if w not in stop_words and len(w) > 2]
    
    # Add context based on description
    if 'tracker' in description.lower():
        words.append('tracker')
    if 'analyzer' in description.lower():
        words.append('analyzer')
    if 'validator' in description.lower():
        words.append('validator')
    if 'engine' in description.lower():
        words.append('engine')
    if 'processor' in description.lower():
        words.append('processor')
    
    # Join words and add suffix
    unique_id = '-'.join(words[:4]) + f'-{domain_suffix}'
    
    # Clean up
    unique_id = unique_id.replace('--', '-')
    
    return unique_id

# Load existing files
with open('agent-code-mappings.json', 'r') as f:
    code_mappings = json.load(f)

with open('agent-unique-id-mappings.json', 'r') as f:
    unique_mappings = json.load(f)

# Add missing mappings
new_mappings = unique_mappings['mappings'].copy()
added_count = 0

for code, desc in code_mappings['agent_mappings'].items():
    if code not in new_mappings:
        # Extract domain from code
        domain = code.split('-')[0] if '-' in code else 'GEN'
        
        # Generate unique ID
        unique_id = generate_unique_id(code, desc, domain)
        
        # Ensure uniqueness by appending number if needed
        base_id = unique_id
        counter = 2
        while unique_id in new_mappings.values():
            unique_id = f"{base_id}-v{counter}"
            counter += 1
        
        new_mappings[code] = unique_id
        added_count += 1
        
        if added_count <= 10:  # Show first 10 examples
            print(f"Added: {code} -> {unique_id} ({desc})")

# Save updated mappings
updated_data = {
    "description": "Comprehensive mapping of old agent codes to new truly unique IDs - COMPLETE",
    "mappings": new_mappings
}

with open('agent-unique-id-mappings-complete.json', 'w') as f:
    json.dump(updated_data, f, indent=2)

print(f"\nTotal mappings added: {added_count}")
print(f"Total mappings now: {len(new_mappings)}")
print("\nSaved to agent-unique-id-mappings-complete.json") 