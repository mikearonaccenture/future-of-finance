import json
import re
from collections import defaultdict

def load_activity_mappings():
    """Load the mapping of workflows to activities from constants"""
    # Manual mapping based on finance taxonomy
    workflow_to_activities = {
        'procure-to-pay': [
            'Invoice to Pay', 'Receipt & Scanning', 'Invoice Processing',
            'Payment Processing', 'Vendor Statement Reconciliation',
            'Accounts Payable Reconciliation', 'Procurement Card Administration',
            'Travel & Expense Administration', 'AP Reporting & Analytics'
        ],
        'order-to-cash': [
            'Receivable Management', 'Credit Management', 'Product & Service Costing',
            'Manage Customer Billing', 'Collections & Disputes Management',
            'Maintain AR Ledger and Apply Cash', 'Deductions Management',
            'Manage Customer Requests & Inquiries'
        ],
        'cost-accounting': [
            'Product Costing', 'Product & Service Costing'
        ],
        'controllership': [
            'Record to Report', 'General Accounting', 'Cash Management and Banking',
            'Intercompany Accounting', 'Asset Accounting', 'Lease Accounting',
            'Partner and Revenue Accounting', 'Project Accounting', 'Period Close',
            'Statutory-Regulatory Reporting', 'Manage Policy, Controls and Reporting',
            'Group Reporting & Consolidations', 'Financial Statements & Disclosures',
            'Statutory Reporting', 'Regulatory Reporting', 'Audit & Response Management'
        ],
        'corporate-finance': [
            'Tax', 'Manage Tax Planning and Strategy', 'Manage Direct Tax',
            'Manage Indirect Tax', 'Manage Transfer Pricing',
            'Manage Digital Tax Compliance', 'Treasury',
            'Cash and Liquidity Management', 'Investment Management',
            'Debt Management', 'Financial Risk Management'
        ],
        'fpa': [
            'Financial Planning and Analysis', 'Strategic or LR Planning',
            'Integrated Enterprise Planning', 'Budgeting', 'Dynamic Forecasting',
            'Decision Support & Modelling', 'Reporting & Analysis'
        ],
        'investor-relations': [
            'Investor Relations', 'Quarterly Earnings', 'Competitive Intelligence',
            'Stock Surveillance', 'Investment Community Relationship Mgmt'
        ]
    }
    return workflow_to_activities

def generate_unique_id(description):
    """Generate a descriptive unique ID from agent description"""
    words = description.lower().split()
    
    # Remove common words
    stop_words = {'ai', 'the', 'and', 'or', 'for', 'with', 'powered', 'based', 
                  'agent', 'automated', 'smart', 'intelligent', 'digital', 'engine'}
    words = [w for w in words if w not in stop_words and len(w) > 2]
    
    # Take up to 4 significant words
    if not words:
        words = description.lower().split()[:3]
    
    unique_id = '-'.join(words[:4])
    return re.sub(r'[^a-z0-9-]', '', unique_id)

def generate_abbreviation(description, existing_abbrevs, domain=None):
    """Generate a unique abbreviation for the agent"""
    words = description.upper().split()
    
    # Filter out common words for abbreviation
    significant_words = [w for w in words if len(w) > 2 and w not in 
                        ['THE', 'AND', 'FOR', 'WITH', 'BASED', 'POWERED']]
    
    if not significant_words:
        significant_words = words
    
    # Try different strategies
    strategies = [
        # Strategy 1: First letter of each significant word (up to 3)
        lambda: ''.join([w[0] for w in significant_words[:3]]),
        # Strategy 2: First 2 letters of first word + first letter of second
        lambda: (significant_words[0][:2] + significant_words[1][0]) if len(significant_words) > 1 else significant_words[0][:3],
        # Strategy 3: Use domain prefix + initials
        lambda: (domain[:1] + ''.join([w[0] for w in significant_words[:2]])) if domain else significant_words[0][:3],
        # Strategy 4: First 3 letters of main word
        lambda: significant_words[0][:3]
    ]
    
    for strategy in strategies:
        try:
            abbrev = strategy()
            if abbrev and abbrev not in existing_abbrevs and 2 <= len(abbrev) <= 4:
                return abbrev
        except:
            continue
    
    # Fallback: use first 2 letters + number
    base = significant_words[0][:2] if significant_words else 'UN'
    for i in range(1, 100):
        abbrev = f'{base}{i}'
        if abbrev not in existing_abbrevs:
            return abbrev
    
    return 'UNK'

def generate_capabilities(description, domain):
    """Generate capabilities based on agent description and domain"""
    capabilities = []
    
    desc_lower = description.lower()
    
    # Common capability patterns
    if 'validator' in desc_lower or 'validate' in desc_lower:
        capabilities.extend([
            'Validate data accuracy and completeness',
            'Check compliance with business rules',
            'Flag exceptions and anomalies'
        ])
    
    if 'analyzer' in desc_lower or 'analysis' in desc_lower:
        capabilities.extend([
            'Perform deep data analysis',
            'Identify patterns and trends',
            'Generate actionable insights'
        ])
    
    if 'matcher' in desc_lower or 'matching' in desc_lower:
        capabilities.extend([
            'Match and reconcile data across systems',
            'Identify discrepancies',
            'Suggest resolution paths'
        ])
    
    if 'generator' in desc_lower or 'creator' in desc_lower:
        capabilities.extend([
            'Automatically generate required outputs',
            'Create documentation and reports',
            'Produce audit trails'
        ])
    
    if 'monitor' in desc_lower or 'tracker' in desc_lower:
        capabilities.extend([
            'Real-time monitoring of processes',
            'Track KPIs and metrics',
            'Alert on threshold breaches'
        ])
    
    # Domain-specific capabilities
    if domain == 'FPA':
        capabilities.append('Support planning and forecasting processes')
    elif domain == 'CTL':
        capabilities.append('Ensure accounting accuracy and compliance')
    elif domain == 'CF':
        capabilities.append('Optimize tax and treasury operations')
    
    # Return unique capabilities
    return list(set(capabilities))[:5]  # Limit to 5 capabilities

def transform_agents():
    """Transform all agents to the new comprehensive structure"""
    
    # Load existing catalog
    with open('agent-catalog-final.json', 'r') as f:
        catalog = json.load(f)
    
    # Load activity mappings
    workflow_to_activities = load_activity_mappings()
    
    # Track abbreviations to ensure uniqueness
    existing_abbrevs = set()
    
    # Transform each agent
    transformed_catalog = {
        'total_agents': 0,
        'agents': {},
        'abbreviation_index': {},  # Quick lookup by abbreviation
        'domain_summary': defaultdict(int),
        'platform_summary': defaultdict(int)
    }
    
    for code, agent in catalog['agents'].items():
        # Generate unique ID
        unique_id = generate_unique_id(agent['description'])
        
        # Generate abbreviation
        abbrev = generate_abbreviation(agent['description'], existing_abbrevs, agent['domain'])
        existing_abbrevs.add(abbrev)
        
        # Map to activities
        activities = set()
        for workflow in agent['workflows']:
            if workflow in workflow_to_activities:
                activities.update(workflow_to_activities[workflow][:3])  # Limit activities
        
        # Generate capabilities
        capabilities = generate_capabilities(agent['description'], agent['domain'])
        
        # Create full agent entry
        transformed_agent = {
            'abbreviation': abbrev,
            'unique_id': unique_id,
            'full_name': agent['description'],
            'description': f"{agent['description']}. Automates and optimizes {agent['domain'].lower()} processes.",
            'capabilities': capabilities,
            'domain': agent['domain'],
            'platforms': agent['platforms'][:5] if agent['platforms'] else [],  # Limit to 5
            'workflows': agent['workflows'][:5] if agent['workflows'] else [],  # Limit to 5
            'activities': list(activities)[:5] if activities else [],  # Limit to 5
            'integration_points': {
                'works_with': [],  # To be populated in next phase
                'systems': ['ERP', 'Data Warehouse'],  # Generic for now
                'data_sources': []  # To be populated based on domain
            },
            'performance_metrics': [
                'Process cycle time reduction',
                'Error rate improvement',
                'Automation percentage'
            ],
            'original_code': code
        }
        
        # Add to catalog
        transformed_catalog['agents'][unique_id] = transformed_agent
        transformed_catalog['abbreviation_index'][abbrev] = unique_id
        
        # Update summaries
        transformed_catalog['domain_summary'][agent['domain']] += 1
        for platform in agent['platforms']:
            transformed_catalog['platform_summary'][platform] += 1
    
    transformed_catalog['total_agents'] = len(transformed_catalog['agents'])
    
    return transformed_catalog

# Run transformation
print("Transforming agent catalog...")
transformed = transform_agents()

# Save the transformed catalog
with open('agent-catalog-transformed.json', 'w') as f:
    json.dump(transformed, f, indent=2)

# Create a readable summary
print(f"\nTransformation Complete!")
print(f"Total agents transformed: {transformed['total_agents']}")
print(f"\nDomain Distribution:")
for domain, count in sorted(transformed['domain_summary'].items()):
    print(f"  {domain}: {count} agents")

print(f"\nSample Transformed Agents:")
# Show first 5 agents
for i, (unique_id, agent) in enumerate(list(transformed['agents'].items())[:5]):
    print(f"\n{i+1}. {agent['abbreviation']} - {agent['full_name']}")
    print(f"   ID: {unique_id}")
    print(f"   Domain: {agent['domain']}")
    print(f"   Platforms: {', '.join(agent['platforms'][:2]) if agent['platforms'] else 'None'}")

print(f"\nFull catalog saved to agent-catalog-transformed.json") 