#!/usr/bin/env python3
"""
Enhance agent catalog with additional metadata fields
"""

import json
import re
from typing import Dict, List, Any

# Agent type classification based on keywords
AGENT_TYPE_KEYWORDS = {
    'data_extraction': ['extractor', 'capture', 'scanner', 'reader', 'parser', 'ocr'],
    'validation': ['validator', 'checker', 'verifier', 'compliance', 'matcher'],
    'calculation': ['calculator', 'analyzer', 'aggregator', 'optimizer', 'forecaster'],
    'reporting': ['reporter', 'generator', 'dashboard', 'visualizer', 'compiler'],
    'approval': ['approver', 'reviewer', 'authorizer', 'signer'],
    'integration': ['integrator', 'connector', 'synchronizer', 'bridge', 'api'],
    'automation': ['automator', 'processor', 'bot', 'engine', 'manager'],
    'monitoring': ['monitor', 'tracker', 'watcher', 'alerter', 'detector']
}

# Systems by domain
DOMAIN_SYSTEMS = {
    'PTP': ['SAP', 'Oracle', 'Ariba', 'Coupa', 'Concur', 'Workday'],
    'O2C': ['SAP', 'Oracle', 'Salesforce', 'NetSuite', 'Stripe', 'Square'],
    'CTL': ['SAP', 'Oracle', 'BlackLine', 'FloQast', 'Workiva', 'Trintech'],
    'CF': ['SAP', 'Oracle', 'Anaplan', 'Adaptive', 'OneStream', 'Excel'],
    'CA': ['SAP', 'Oracle', 'Epicor', 'JD Edwards', 'Infor', 'Excel'],
    'FPA': ['SAP', 'Anaplan', 'Oracle EPM', 'Adaptive', 'OneStream', 'Workday'],
    'IR': ['Bloomberg', 'Refinitiv', 'S&P Capital IQ', 'FactSet', 'Excel'],
    'GEN': ['Microsoft 365', 'Google Workspace', 'Slack', 'Teams', 'SharePoint']
}

# Common data sources by domain
DOMAIN_DATA_SOURCES = {
    'PTP': ['vendor_master', 'purchase_orders', 'invoice_images', 'contracts', 'payment_data'],
    'O2C': ['customer_master', 'sales_orders', 'billing_data', 'payment_receipts', 'credit_data'],
    'CTL': ['GL_data', 'journal_entries', 'trial_balance', 'account_reconciliations', 'audit_logs'],
    'CF': ['financial_statements', 'budget_data', 'forecast_models', 'market_data', 'treasury_data'],
    'CA': ['cost_centers', 'product_costs', 'labor_data', 'overhead_allocations', 'inventory_data'],
    'FPA': ['actuals_data', 'budget_data', 'forecast_assumptions', 'driver_data', 'scenario_models'],
    'IR': ['financial_reports', 'market_data', 'analyst_reports', 'press_releases', 'regulatory_filings'],
    'GEN': ['document_repositories', 'email_data', 'workflow_data', 'user_permissions', 'system_logs']
}

# Compliance requirements by domain
DOMAIN_COMPLIANCE = {
    'PTP': ['SOX', 'FCPA', 'Tax Compliance', 'Vendor Compliance'],
    'O2C': ['SOX', 'Revenue Recognition', 'PCI DSS', 'Credit Policies'],
    'CTL': ['SOX', 'GAAP', 'IFRS', 'SEC Reporting', 'Tax Compliance'],
    'CF': ['SOX', 'GAAP', 'IFRS', 'Basel III', 'Dodd-Frank'],
    'CA': ['GAAP', 'Cost Accounting Standards', 'Transfer Pricing'],
    'FPA': ['SOX', 'GAAP', 'Management Reporting Standards'],
    'IR': ['SEC Regulations', 'Fair Disclosure', 'Insider Trading'],
    'GEN': ['GDPR', 'Data Privacy', 'Information Security']
}

def determine_agent_type(agent_name: str, agent_id: str) -> str:
    """Determine agent type based on name and ID"""
    combined_text = f"{agent_name} {agent_id}".lower()
    
    for agent_type, keywords in AGENT_TYPE_KEYWORDS.items():
        for keyword in keywords:
            if keyword in combined_text:
                return agent_type
    
    return 'automation'  # Default

def determine_risk_rating(agent: Dict[str, Any]) -> str:
    """Determine risk rating based on agent characteristics"""
    # High risk for financial reporting, compliance, and payment agents
    high_risk_keywords = ['payment', 'compliance', 'sox', 'regulatory', 'financial', 'audit', 'tax']
    name_lower = agent['description'].lower()
    
    if any(keyword in name_lower for keyword in high_risk_keywords):
        return 'High'
    elif agent['domain'] in ['CTL', 'CF']:
        return 'Medium'
    elif 'approval' in name_lower or 'validation' in name_lower:
        return 'Medium'
    else:
        return 'Low'

def determine_status(agent: Dict[str, Any]) -> str:
    """Determine agent status"""
    # For now, we'll use a simple heuristic
    if len(agent.get('capabilities', [])) == 0:
        return 'in_development'
    else:
        return 'active'

def generate_brief_description(agent: Dict[str, Any], agent_type: str) -> str:
    """Generate a brief description based on agent name and type"""
    name = agent['description']
    domain = agent['domain']
    
    templates = {
        'data_extraction': f"Extracts and processes {domain} data from multiple sources for downstream processing",
        'validation': f"Validates {domain} data integrity and compliance with business rules",
        'calculation': f"Performs complex {domain} calculations and analysis",
        'reporting': f"Generates comprehensive {domain} reports and insights",
        'approval': f"Manages {domain} approval workflows and authorization",
        'integration': f"Integrates {domain} systems and synchronizes data",
        'automation': f"Automates {domain} processes for efficiency and accuracy",
        'monitoring': f"Monitors {domain} activities and alerts on exceptions"
    }
    
    return templates.get(agent_type, f"Enhances {domain} operations through intelligent automation")

def enhance_agent(agent: Dict[str, Any]) -> Dict[str, Any]:
    """Enhance a single agent with additional metadata"""
    agent_type = determine_agent_type(agent['description'], agent['descriptive_id'])
    
    # Add new fields
    agent['brief_description'] = generate_brief_description(agent, agent_type)
    agent['agent_type'] = agent_type
    agent['systems_integrated'] = DOMAIN_SYSTEMS.get(agent['domain'], ['Excel', 'Custom Systems'])[:3]
    agent['data_sources'] = DOMAIN_DATA_SOURCES.get(agent['domain'], ['operational_data'])[:3]
    agent['output_destinations'] = ['dashboard', 'reports', 'downstream_systems']
    agent['compliance_requirements'] = DOMAIN_COMPLIANCE.get(agent['domain'], ['Data Privacy'])[:2]
    agent['risk_rating'] = determine_risk_rating(agent)
    agent['status'] = determine_status(agent)
    agent['version'] = '1.0.0'
    
    # Customize based on specific agent characteristics
    if 'invoice' in agent['description'].lower():
        agent['data_sources'] = ['invoice_images', 'vendor_master', 'PO_data']
        agent['systems_integrated'].append('OCR System')
    
    if 'payment' in agent['description'].lower():
        agent['compliance_requirements'].append('Payment Security')
        agent['risk_rating'] = 'High'
    
    if 'forecast' in agent['description'].lower():
        agent['data_sources'].append('historical_trends')
        agent['output_destinations'] = ['forecast_models', 'planning_systems', 'executive_dashboards']
    
    return agent

def main():
    # Load current catalog
    with open('agent-catalog.json', 'r') as f:
        catalog = json.load(f)
    
    print(f"Enhancing {len(catalog['agents'])} agents...")
    
    # Enhance each agent
    enhanced_agents = {}
    for agent_id, agent_data in catalog['agents'].items():
        enhanced_agents[agent_id] = enhance_agent(agent_data.copy())
    
    # Create enhanced catalog
    enhanced_catalog = {
        'version': '2.0',
        'description': 'Enhanced Finance AI Agent Catalog with comprehensive metadata',
        'last_updated': '2024-01-27',
        'total_agents': len(enhanced_agents),
        'agents': enhanced_agents
    }
    
    # Save enhanced catalog
    with open('agent-catalog-enhanced.json', 'w') as f:
        json.dump(enhanced_catalog, f, indent=2)
    
    # Also update the public version
    with open('public/agent-catalog.json', 'w') as f:
        json.dump(enhanced_catalog, f, indent=2)
    
    print("Enhanced catalog saved to agent-catalog-enhanced.json")
    print("Public catalog updated")
    
    # Show sample enhanced agent
    sample_id = list(enhanced_agents.keys())[0]
    print(f"\nSample enhanced agent ({sample_id}):")
    print(json.dumps(enhanced_agents[sample_id], indent=2))

if __name__ == '__main__':
    main() 