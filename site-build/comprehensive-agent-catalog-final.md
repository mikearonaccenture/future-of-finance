# Comprehensive AI Agent Catalog

Total Unique Agents: **25**

## Agent Distribution by Domain

- **Controllership**: 4 agents
- **Corporate Finance**: 4 agents
- **Cost Accounting**: 4 agents
- **Financial Planning & Analysis**: 4 agents
- **GEN**: 1 agents
- **Investor Relations**: 3 agents
- **Order to Cash**: 3 agents
- **Procure to Pay**: 2 agents

## Financial Planning & Analysis Agents

| Agent ID | Description | Used In Workflows |
|----------|-------------|-------------------|
| FPA-CA | Consolidation Agent | Fpa |
| FPA-DA | Data Analyzer | Fpa |
| FPA-DG | Data Gatherer | Fpa |
| FPA-DQ | Data Quality Agent
                    humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.DATA_VALIDATION] | Fpa |

## Procure to Pay Agents

| Agent ID | Description | Used In Workflows |
|----------|-------------|-------------------|
| PTP-CAPTURE-001 | Invoice Capture Agent | Procure To Pay |
| PTP-PARSE-001 | Invoice Parser | Procure To Pay |

## Order to Cash Agents

| Agent ID | Description | Used In Workflows |
|----------|-------------|-------------------|
| O2C-AP | Aging Predictor | Order To Cash |
| O2C-BM | Balance Monitor | Order To Cash |
| O2C-EA | Exposure Analyzer
                    humanCheckpoints: [] | Order To Cash |

## Cost Accounting Agents

| Agent ID | Description | Used In Workflows |
|----------|-------------|-------------------|
| CA-BV | BOM Validator | Cost Accounting |
| CA-DCP | Dynamic Cost Pooler
                    humanCheckpoints: [] | Cost Accounting |
| CA-MDA | Multi-System Data Aggregator | Cost Accounting |
| CA-RCF | Real-time Cost Feeder | Cost Accounting |

## Controllership Agents

| Agent ID | Description | Used In Workflows |
|----------|-------------|-------------------|
| CTL-ACA | Automated Cost Aggregator | Controllership |
| CTL-ATE | AI Term Extractor | Controllership |
| CTL-DAR | Dynamic Agreement Reviewer | Controllership |
| CTL-SMT | Smart Mapping Tool
            humanCheckpoints: [HUMAN_CHECKPOINT_TYPES.ALLOCATION_APPROVAL] | Controllership |

## Corporate Finance Agents

| Agent ID | Description | Used In Workflows |
|----------|-------------|-------------------|
| CF-LT | Legislative Tracker | Corporate Finance |
| CF-OS | Opportunity Scanner | Corporate Finance |
| CF-PM | Predictive Modeler | Corporate Finance |
| CF-RA | Real-time Alerter
                    humanCheckpoints: [] | Corporate Finance |

## Investor Relations Agents

| Agent ID | Description | Used In Workflows |
|----------|-------------|-------------------|
| IR-ERC | Additional Investor Relations Workflows (previously in separate file)
    {
        name: 'Investor Relations' | Investor Relations |
| IR-KMC | stakeholder engagement | Investor Relations |
| IR-NGE | description: 'Overall investor relations management | Investor Relations |


*Note: Agent descriptions extracted from code comments where available.*
