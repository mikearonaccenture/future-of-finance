#!/usr/bin/env python3
"""
Populate capabilities for all agents based on their type, domain, and function
"""

import json
import re

# Base capabilities by agent type
TYPE_CAPABILITIES = {
    'data_extraction': [
        'Extract data from multiple file formats',
        'OCR and document parsing',
        'Automated data validation',
        'Real-time data capture',
        'Intelligent field mapping'
    ],
    'validation': [
        'Business rule validation',
        'Data integrity checks',
        'Compliance verification',
        'Exception identification',
        'Automated error reporting'
    ],
    'calculation': [
        'Complex financial calculations',
        'Multi-dimensional analysis',
        'Scenario modeling',
        'Performance optimization',
        'Real-time computation'
    ],
    'reporting': [
        'Dynamic report generation',
        'Multi-format output support',
        'Scheduled report distribution',
        'Interactive dashboards',
        'Real-time data visualization'
    ],
    'approval': [
        'Multi-level approval routing',
        'Delegation management',
        'Audit trail maintenance',
        'Policy enforcement',
        'Automated notifications'
    ],
    'integration': [
        'API connectivity',
        'Real-time data synchronization',
        'Bi-directional data flow',
        'Error handling and retry logic',
        'Data transformation'
    ],
    'automation': [
        'Process orchestration',
        'Workflow automation',
        'Task scheduling',
        'Exception handling',
        'Performance monitoring'
    ],
    'monitoring': [
        'Real-time activity tracking',
        'Anomaly detection',
        'Alert generation',
        'Trend analysis',
        'Performance metrics tracking'
    ]
}

# Domain-specific capabilities
DOMAIN_CAPABILITIES = {
    'PTP': [
        'Vendor master management',
        'Three-way matching',
        'Payment processing automation',
        'Contract compliance monitoring',
        'Spend analytics'
    ],
    'O2C': [
        'Credit risk assessment',
        'Revenue recognition compliance',
        'Customer account reconciliation',
        'Collections automation',
        'Order fulfillment tracking'
    ],
    'CTL': [
        'Journal entry automation',
        'Account reconciliation',
        'Financial close optimization',
        'Regulatory reporting',
        'Audit readiness'
    ],
    'CF': [
        'Cash flow forecasting',
        'Treasury management',
        'Risk analysis',
        'Investment evaluation',
        'Capital structure optimization'
    ],
    'CA': [
        'Cost allocation',
        'Profitability analysis',
        'Variance analysis',
        'Activity-based costing',
        'Budget vs actual tracking'
    ],
    'FPA': [
        'Predictive forecasting',
        'Scenario planning',
        'Driver-based modeling',
        'Rolling forecast generation',
        'What-if analysis'
    ],
    'IR': [
        'Investor communication',
        'Market analysis',
        'Regulatory filing preparation',
        'Earnings call support',
        'Shareholder analytics'
    ],
    'GEN': [
        'Cross-functional integration',
        'Enterprise-wide automation',
        'Master data management',
        'Process standardization',
        'Collaborative workflows'
    ]
}

# Specific capabilities based on keywords in agent name
KEYWORD_CAPABILITIES = {
    'invoice': [
        'Invoice data extraction',
        'Line item processing',
        'Tax calculation',
        'Duplicate detection'
    ],
    'payment': [
        'Payment scheduling',
        'Bank integration',
        'Payment confirmation tracking',
        'Foreign exchange handling'
    ],
    'reconciliation': [
        'Automated matching',
        'Discrepancy identification',
        'Balance verification',
        'Historical trend analysis'
    ],
    'compliance': [
        'Regulatory requirement tracking',
        'Policy adherence monitoring',
        'Compliance reporting',
        'Risk assessment'
    ],
    'forecast': [
        'Predictive modeling',
        'Trend extrapolation',
        'Seasonality adjustment',
        'Accuracy tracking'
    ],
    'audit': [
        'Audit trail generation',
        'Control testing',
        'Evidence collection',
        'Finding documentation'
    ],
    'tax': [
        'Tax calculation',
        'Filing preparation',
        'Compliance checking',
        'Multi-jurisdiction support'
    ],
    'analytics': [
        'Advanced data analysis',
        'Pattern recognition',
        'Predictive insights',
        'Custom metric calculation'
    ]
}

def generate_capabilities(agent):
    """Generate capabilities for an agent based on its characteristics"""
    capabilities = []
    
    # Add type-based capabilities
    agent_type = agent.get('agent_type', 'automation')
    if agent_type in TYPE_CAPABILITIES:
        # Select 3-4 most relevant capabilities
        type_caps = TYPE_CAPABILITIES[agent_type][:4]
        capabilities.extend(type_caps)
    
    # Add domain-specific capabilities
    domain = agent.get('domain', 'GEN')
    if domain in DOMAIN_CAPABILITIES:
        # Select 2-3 domain capabilities
        domain_caps = DOMAIN_CAPABILITIES[domain][:3]
        for cap in domain_caps:
            if cap not in capabilities:
                capabilities.append(cap)
    
    # Add keyword-based capabilities
    name_lower = agent.get('description', '').lower()
    desc_lower = agent.get('brief_description', '').lower()
    combined_text = f"{name_lower} {desc_lower}"
    
    for keyword, keyword_caps in KEYWORD_CAPABILITIES.items():
        if keyword in combined_text:
            for cap in keyword_caps[:2]:  # Add up to 2 keyword capabilities
                if cap not in capabilities and len(capabilities) < 8:
                    capabilities.append(cap)
    
    # Add specific capabilities based on risk rating
    risk = agent.get('risk_rating', 'Low')
    if risk == 'High':
        if 'Security controls and encryption' not in capabilities:
            capabilities.append('Security controls and encryption')
        if 'Regulatory compliance monitoring' not in capabilities:
            capabilities.append('Regulatory compliance monitoring')
    
    # Ensure we have at least 5 capabilities
    if len(capabilities) < 5:
        additional_caps = [
            'Automated error handling',
            'Real-time processing',
            'Scalable architecture',
            'User-friendly interface',
            'Comprehensive logging'
        ]
        for cap in additional_caps:
            if cap not in capabilities and len(capabilities) < 5:
                capabilities.append(cap)
    
    # Limit to 8 capabilities max
    return capabilities[:8]

def main():
    # Load current catalog
    with open('agent-catalog.json', 'r') as f:
        catalog = json.load(f)
    
    print(f"Populating capabilities for {len(catalog['agents'])} agents...")
    
    # Populate capabilities for each agent
    updated_count = 0
    for agent_id, agent_data in catalog['agents'].items():
        # Generate capabilities
        agent_data['capabilities'] = generate_capabilities(agent_data)
        updated_count += 1
    
    # Save updated catalog
    with open('agent-catalog.json', 'w') as f:
        json.dump(catalog, f, indent=2)
    
    # Update public version
    with open('public/agent-catalog.json', 'w') as f:
        json.dump(catalog, f, indent=2)
    
    print(f"Successfully populated capabilities for {updated_count} agents")
    
    # Show examples from different types
    print("\nSample agents with capabilities:")
    examples = ['CTL-DAR', 'PTP-CARDREQ-001', 'FPA-FG-001', 'O2C-BM-001']
    for example_id in examples:
        if example_id in catalog['agents']:
            agent = catalog['agents'][example_id]
            print(f"\n{agent['description']} ({agent['agent_type']}):")
            for i, cap in enumerate(agent['capabilities'], 1):
                print(f"  {i}. {cap}")

if __name__ == '__main__':
    main() 