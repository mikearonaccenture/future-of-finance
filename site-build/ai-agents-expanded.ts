// Comprehensive AI Agents Dataset v2.0
// Total target: 150-200 agents across all finance functions

export interface AIAgentComprehensive {
    id: string;
    name: string;
    fullName: string;
    description: string;
    category: string;
    functions: string[]; // Which functional areas use this agent
    workflowSteps: string[];
    capabilities: string[];
    status: 'ready' | 'in-development' | 'planned';
    crossFunctional: boolean;
}

// Helper function to create agent
function createAgent(
    id: string,
    name: string,
    description: string,
    category: string,
    functions: string[],
    workflowSteps: string[],
    capabilities: string[],
    status: 'ready' | 'in-development' | 'planned' = 'ready'
): AIAgentComprehensive {
    return {
        id,
        name,
        fullName: `${name} (${id})`,
        description,
        category,
        functions,
        workflowSteps,
        capabilities,
        status,
        crossFunctional: functions.length > 1
    };
}

export const ComprehensiveAIAgents = {
    // Procure to Pay Agents (Target: 45+)
    procureToPay: [
        // Invoice Processing Workflow
        createAgent('IC', 'Invoice Capture Agent', 'AI-powered invoice capture from multiple sources',
            'Procure to Pay', ['P2P'], ['Invoice Receipt & Scanning'],
            ['OCR with 99% accuracy', 'Multi-format support', 'Email extraction', 'Portal integration'], 'ready'),

        createAgent('IP', 'Invoice Parser', 'Extracts and structures invoice data',
            'Procure to Pay', ['P2P'], ['Invoice Processing'],
            ['Field extraction', 'Line item parsing', 'Tax identification', 'Currency detection'], 'ready'),

        createAgent('IV', 'Invoice Validator', 'Validates invoice data against rules and contracts',
            'Procure to Pay', ['P2P'], ['Invoice Processing'],
            ['Contract matching', 'Price verification', 'Quantity validation', 'Tax compliance'], 'ready'),

        createAgent('IE', 'Invoice Enricher', 'Enriches invoices with additional data',
            'Procure to Pay', ['P2P'], ['Invoice Processing'],
            ['GL code assignment', 'Cost center mapping', 'Project tagging', 'Dimension coding'], 'ready'),

        // Payment Processing Workflow
        createAgent('PP', 'Payment Processor', 'Processes approved payments',
            'Procure to Pay', ['P2P'], ['Payment Processing'],
            ['Batch processing', 'Payment file generation', 'Bank integration', 'SWIFT handling'], 'ready'),

        createAgent('PS', 'Payment Scheduler', 'Optimizes payment timing',
            'Procure to Pay', ['P2P', 'Treasury'], ['Payment Processing'],
            ['Cash flow optimization', 'Discount capture', 'Due date management', 'Priority handling'], 'ready'),

        createAgent('PR', 'Payment Reconciler', 'Reconciles payments with bank statements',
            'Procure to Pay', ['P2P', 'R2R'], ['Payment Processing'],
            ['Bank reconciliation', 'Exception identification', 'Status updates', 'Confirmation matching'], 'ready'),

        // Vendor Management Workflow
        createAgent('VS', 'Vendor Screener', 'Screens vendors for compliance and risk',
            'Procure to Pay', ['P2P'], ['Vendor Statement Reconciliation'],
            ['Sanctions screening', 'Risk scoring', 'Compliance checking', 'Background verification'], 'ready'),

        createAgent('VM', 'Vendor Master Manager', 'Maintains vendor master data',
            'Procure to Pay', ['P2P'], ['Vendor Management'],
            ['Data validation', 'Duplicate detection', 'Update management', 'Approval workflow'], 'ready'),

        createAgent('VP', 'Vendor Performance Tracker', 'Tracks and scores vendor performance',
            'Procure to Pay', ['P2P'], ['Vendor Management'],
            ['KPI tracking', 'Scorecarding', 'Trend analysis', 'Alert generation'], 'ready'),

        // Expense Management Workflow
        createAgent('TE', 'T&E Examiner', 'Reviews travel and expense reports',
            'Procure to Pay', ['P2P'], ['Travel & Expense Administration'],
            ['Policy compliance', 'Receipt verification', 'Mileage calculation', 'Per diem validation'], 'ready'),

        createAgent('ER', 'Expense Router', 'Routes expenses for approval',
            'Procure to Pay', ['P2P'], ['Travel & Expense Administration'],
            ['Approval routing', 'Delegation handling', 'Escalation management', 'Policy-based routing'], 'ready'),

        createAgent('EA', 'Expense Auditor', 'Audits expense reports for compliance',
            'Procure to Pay', ['P2P'], ['Travel & Expense Administration'],
            ['Random sampling', 'Policy verification', 'Fraud detection', 'Pattern analysis'], 'ready'),

        // Procurement Card Management
        createAgent('PC', 'P-Card Monitor', 'Monitors procurement card transactions',
            'Procure to Pay', ['P2P'], ['Procurement Card Administration'],
            ['Transaction monitoring', 'Limit enforcement', 'Category restrictions', 'Real-time alerts'], 'ready'),

        createAgent('PM', 'P-Card Reconciler', 'Reconciles P-card statements',
            'Procure to Pay', ['P2P'], ['Procurement Card Administration'],
            ['Statement matching', 'Receipt collection', 'GL coding', 'Dispute management'], 'ready'),

        // Contract Management
        createAgent('CM', 'Contract Monitor', 'Monitors contract compliance and milestones',
            'Procure to Pay', ['P2P'], ['Contract Management'],
            ['Milestone tracking', 'SLA monitoring', 'Renewal alerts', 'Compliance checking'], 'ready'),

        createAgent('CN', 'Contract Negotiator Assistant', 'Assists in contract negotiations',
            'Procure to Pay', ['P2P'], ['Contract Management'],
            ['Terms analysis', 'Benchmark comparison', 'Risk identification', 'Clause recommendations'], 'in-development'),

        // Purchase Order Management
        createAgent('PO', 'PO Generator', 'Generates purchase orders from requisitions',
            'Procure to Pay', ['P2P'], ['Purchase Order Management'],
            ['PO creation', 'Approval routing', 'Budget checking', 'Vendor notification'], 'ready'),

        createAgent('PM', 'PO Matcher', 'Matches POs with invoices and receipts',
            'Procure to Pay', ['P2P'], ['Three-Way Match'],
            ['2-way matching', '3-way matching', 'Tolerance handling', 'Exception processing'], 'ready'),

        // Additional P2P Agents
        createAgent('GR', 'Goods Receiver', 'Processes goods receipts',
            'Procure to Pay', ['P2P'], ['Goods Receipt Processing'],
            ['Receipt confirmation', 'Quality checking', 'Quantity verification', 'Location tracking'], 'ready'),

        createAgent('DI', 'Discount Identifier', 'Identifies early payment discounts',
            'Procure to Pay', ['P2P'], ['Payment Processing'],
            ['Discount calculation', 'ROI analysis', 'Cash impact assessment', 'Recommendation engine'], 'ready'),

        createAgent('FR', 'Fraud Detector', 'Detects fraudulent invoices and payments',
            'Procure to Pay', ['P2P'], ['Invoice Processing', 'Payment Processing'],
            ['Pattern recognition', 'Anomaly detection', 'Vendor verification', 'Alert generation'], 'ready'),

        createAgent('BV', 'Budget Validator', 'Validates purchases against budgets',
            'Procure to Pay', ['P2P', 'FPA'], ['Purchase Requisition'],
            ['Budget checking', 'Availability confirmation', 'Forecast impact', 'Alternative suggestions'], 'ready'),

        createAgent('CE', 'Catalog Engine', 'Manages procurement catalogs',
            'Procure to Pay', ['P2P'], ['Catalog Management'],
            ['Catalog updates', 'Price maintenance', 'Item standardization', 'Search optimization'], 'ready'),

        createAgent('RQ', 'Requisition Qualifier', 'Qualifies and enriches requisitions',
            'Procure to Pay', ['P2P'], ['Purchase Requisition'],
            ['Requirement clarification', 'Specification validation', 'Alternative suggestions', 'Bundle recommendations'], 'ready'),

        createAgent('SP', 'Sourcing Pilot', 'Guides sourcing decisions',
            'Procure to Pay', ['P2P'], ['Strategic Sourcing'],
            ['Supplier identification', 'RFQ management', 'Bid analysis', 'Award recommendations'], 'in-development'),

        createAgent('CA', 'Compliance Auditor', 'Audits P2P compliance',
            'Procure to Pay', ['P2P', 'Audit'], ['Compliance Management'],
            ['Policy compliance', 'Regulatory adherence', 'Audit trail maintenance', 'Report generation'], 'ready'),

        createAgent('WF', 'Workflow Facilitator', 'Manages P2P workflows',
            'Procure to Pay', ['P2P'], ['Workflow Management'],
            ['Process orchestration', 'Status tracking', 'Bottleneck identification', 'SLA monitoring'], 'ready'),

        createAgent('DA', 'Document Archiver', 'Archives P2P documents',
            'Procure to Pay', ['P2P', 'R2R'], ['Document Management'],
            ['Document storage', 'Retention management', 'Retrieval optimization', 'Compliance tracking'], 'ready'),

        createAgent('TC', 'Tax Calculator', 'Calculates taxes on purchases',
            'Procure to Pay', ['P2P', 'Tax'], ['Tax Management'],
            ['Tax determination', 'Multi-jurisdiction handling', 'Exemption management', 'Filing support'], 'ready'),

        createAgent('AC', 'Accrual Creator', 'Creates purchase accruals',
            'Procure to Pay', ['P2P', 'R2R'], ['Month-end Processing'],
            ['Accrual calculation', 'Reversal management', 'GL posting', 'Reconciliation support'], 'ready'),

        createAgent('SA', 'Spend Analyzer', 'Analyzes procurement spend',
            'Procure to Pay', ['P2P', 'FPA'], ['Spend Analysis'],
            ['Spend categorization', 'Trend analysis', 'Savings identification', 'Supplier consolidation'], 'ready'),

        createAgent('RM', 'Remittance Manager', 'Manages remittance advices',
            'Procure to Pay', ['P2P'], ['Payment Processing'],
            ['Remittance generation', 'Delivery management', 'Format handling', 'Confirmation tracking'], 'ready'),

        createAgent('DH', 'Dispute Handler', 'Manages vendor disputes',
            'Procure to Pay', ['P2P'], ['Dispute Management'],
            ['Dispute logging', 'Resolution tracking', 'Communication management', 'Root cause analysis'], 'ready'),

        createAgent('SC', 'Statement Curator', 'Manages vendor statements',
            'Procure to Pay', ['P2P'], ['Statement Management'],
            ['Statement collection', 'Balance verification', 'Discrepancy identification', 'Aging analysis'], 'ready'),

        createAgent('BA', 'Batch Administrator', 'Manages batch processes',
            'Procure to Pay', ['P2P'], ['Batch Processing'],
            ['Batch scheduling', 'Error handling', 'Performance monitoring', 'Recovery management'], 'ready'),

        createAgent('KM', 'Knowledge Manager', 'Manages P2P knowledge base',
            'Procure to Pay', ['P2P'], ['Knowledge Management'],
            ['Documentation maintenance', 'FAQ updates', 'Training content', 'Best practice sharing'], 'ready'),

        createAgent('QA', 'Quality Assurer', 'Ensures P2P quality',
            'Procure to Pay', ['P2P'], ['Quality Management'],
            ['Quality monitoring', 'Error tracking', 'Process improvement', 'Performance metrics'], 'ready'),

        createAgent('PI', 'Process Improver', 'Identifies process improvements',
            'Procure to Pay', ['P2P'], ['Process Improvement'],
            ['Bottleneck analysis', 'Automation opportunities', 'Efficiency recommendations', 'ROI calculations'], 'in-development'),

        createAgent('HL', 'Helpdesk Liaison', 'Manages P2P help requests',
            'Procure to Pay', ['P2P'], ['Help Desk'],
            ['Ticket management', 'Issue resolution', 'FAQ responses', 'Escalation handling'], 'ready'),

        createAgent('RT', 'Report Tracker', 'Tracks P2P reports and metrics',
            'Procure to Pay', ['P2P'], ['Reporting & Analytics'],
            ['Report generation', 'KPI tracking', 'Dashboard updates', 'Trend analysis'], 'ready'),

        createAgent('BM', 'Benchmark Manager', 'Manages P2P benchmarking',
            'Procure to Pay', ['P2P'], ['Performance Management'],
            ['Benchmark tracking', 'Peer comparison', 'Gap analysis', 'Improvement planning'], 'ready')
    ],

    // Order to Cash Agents (Target: 45+)
    orderToCash: [
        // Order Management Workflow
        createAgent('OE', 'Order Entry Agent', 'Automates order entry from multiple channels',
            'Order to Cash', ['O2C'], ['Order Entry'],
            ['Multi-channel capture', 'Data validation', 'Product verification', 'Inventory checking'], 'ready'),

        createAgent('OV', 'Order Validator', 'Validates orders against business rules',
            'Order to Cash', ['O2C'], ['Order Validation'],
            ['Credit checking', 'Pricing validation', 'Terms verification', 'Compliance checking'], 'ready'),

        createAgent('OA', 'Order Allocator', 'Allocates inventory to orders',
            'Order to Cash', ['O2C'], ['Order Management'],
            ['Inventory allocation', 'Priority handling', 'Substitution management', 'Backorder processing'], 'ready'),

        createAgent('OS', 'Order Scheduler', 'Schedules order fulfillment',
            'Order to Cash', ['O2C'], ['Order Management'],
            ['Delivery scheduling', 'Route optimization', 'Capacity planning', 'Promise date management'], 'ready'),

        // Credit Management Workflow
        createAgent('CA', 'Credit Analyzer', 'Analyzes customer credit',
            'Order to Cash', ['O2C'], ['Credit Management'],
            ['Credit scoring', 'Risk assessment', 'Limit calculation', 'Terms recommendation'], 'ready'),

        createAgent('CM', 'Credit Monitor', 'Monitors credit exposure',
            'Order to Cash', ['O2C'], ['Credit Management'],
            ['Exposure tracking', 'Limit monitoring', 'Alert generation', 'Block management'], 'ready'),

        createAgent('CR', 'Credit Reviewer', 'Reviews credit applications',
            'Order to Cash', ['O2C'], ['Credit Management'],
            ['Application processing', 'Reference checking', 'Decision support', 'Documentation management'], 'ready'),

        // Billing Workflow
        createAgent('IG', 'Invoice Generator', 'Generates customer invoices',
            'Order to Cash', ['O2C'], ['Customer Billing'],
            ['Invoice creation', 'Format handling', 'Tax calculation', 'Delivery management'], 'ready'),

        createAgent('IB', 'Invoice Broadcaster', 'Distributes invoices to customers',
            'Order to Cash', ['O2C'], ['Customer Billing'],
            ['Multi-channel delivery', 'Format conversion', 'Delivery tracking', 'Confirmation management'], 'ready'),

        createAgent('BA', 'Billing Automator', 'Automates complex billing scenarios',
            'Order to Cash', ['O2C'], ['Customer Billing'],
            ['Milestone billing', 'Subscription management', 'Usage calculation', 'Proration handling'], 'ready'),

        // Collections Workflow
        createAgent('CM', 'Collections Manager', 'Manages collection activities',
            'Order to Cash', ['O2C'], ['Collections Management'],
            ['Worklist management', 'Priority scoring', 'Strategy assignment', 'Activity tracking'], 'ready'),

        createAgent('CC', 'Collections Caller', 'Automates collection communications',
            'Order to Cash', ['O2C'], ['Collections Management'],
            ['Call scheduling', 'Script management', 'Response logging', 'Follow-up planning'], 'in-development'),

        createAgent('CP', 'Collections Predictor', 'Predicts collection outcomes',
            'Order to Cash', ['O2C'], ['Collections Management'],
            ['Payment prediction', 'Risk scoring', 'Strategy optimization', 'Resource allocation'], 'ready'),

        // Cash Application Workflow
        createAgent('CR', 'Cash Reconciler', 'Reconciles customer payments',
            'Order to Cash', ['O2C'], ['Cash Application'],
            ['Payment matching', 'Remittance processing', 'Exception handling', 'Auto-application'], 'ready'),

        createAgent('CA', 'Cash Applier', 'Applies cash to open items',
            'Order to Cash', ['O2C'], ['Cash Application'],
            ['Invoice matching', 'Partial payment handling', 'Discount processing', 'Write-off management'], 'ready'),

        createAgent('UP', 'Unapplied Processor', 'Manages unapplied cash',
            'Order to Cash', ['O2C'], ['Cash Application'],
            ['Research automation', 'Customer contact', 'Application recommendations', 'Aging management'], 'ready'),

        // Deductions Management
        createAgent('DD', 'Deduction Detective', 'Investigates customer deductions',
            'Order to Cash', ['O2C'], ['Deductions Management'],
            ['Root cause analysis', 'Documentation gathering', 'Validity assessment', 'Recovery planning'], 'ready'),

        createAgent('DR', 'Deduction Resolver', 'Resolves valid deductions',
            'Order to Cash', ['O2C'], ['Deductions Management'],
            ['Credit memo creation', 'Approval routing', 'GL coding', 'Customer notification'], 'ready'),

        createAgent('DC', 'Deduction Collector', 'Collects invalid deductions',
            'Order to Cash', ['O2C'], ['Deductions Management'],
            ['Dispute creation', 'Documentation package', 'Follow-up management', 'Escalation handling'], 'ready'),

        // Additional O2C Agents
        createAgent('PM', 'Pricing Manager', 'Manages customer pricing',
            'Order to Cash', ['O2C'], ['Pricing Management'],
            ['Price maintenance', 'Contract pricing', 'Discount management', 'Approval workflow'], 'ready'),

        createAgent('QM', 'Quote Manager', 'Manages customer quotes',
            'Order to Cash', ['O2C'], ['Quote Management'],
            ['Quote generation', 'Approval routing', 'Version control', 'Conversion tracking'], 'ready'),

        createAgent('RR', 'Revenue Recognizer', 'Manages revenue recognition',
            'Order to Cash', ['O2C', 'R2R'], ['Revenue Recognition'],
            ['ASC 606 compliance', 'Performance obligations', 'Contract analysis', 'Journal creation'], 'ready'),

        createAgent('SM', 'Shipment Monitor', 'Tracks shipments and deliveries',
            'Order to Cash', ['O2C'], ['Shipment Management'],
            ['Tracking updates', 'Delivery confirmation', 'Exception alerts', 'POD management'], 'ready'),

        createAgent('DM', 'Dispute Manager', 'Manages customer disputes',
            'Order to Cash', ['O2C'], ['Dispute Management'],
            ['Case creation', 'Investigation tracking', 'Resolution management', 'Reporting'], 'ready'),

        createAgent('AG', 'Aging Analyzer', 'Analyzes AR aging',
            'Order to Cash', ['O2C'], ['AR Analysis'],
            ['Aging calculation', 'Trend analysis', 'Risk identification', 'Action recommendations'], 'ready'),

        createAgent('DO', 'Dunning Orchestrator', 'Manages dunning processes',
            'Order to Cash', ['O2C'], ['Collections Management'],
            ['Letter generation', 'Escalation management', 'Response tracking', 'Strategy optimization'], 'ready'),

        createAgent('ST', 'Statement Generator', 'Generates customer statements',
            'Order to Cash', ['O2C'], ['Customer Communications'],
            ['Statement creation', 'Balance calculation', 'Delivery management', 'Reconciliation support'], 'ready'),

        createAgent('RB', 'Rebate Manager', 'Manages customer rebates',
            'Order to Cash', ['O2C'], ['Rebate Management'],
            ['Accrual calculation', 'Qualification checking', 'Payment processing', 'Reconciliation'], 'ready'),

        createAgent('CM', 'Commission Calculator', 'Calculates sales commissions',
            'Order to Cash', ['O2C'], ['Commission Management'],
            ['Commission calculation', 'Plan management', 'Dispute handling', 'Payment processing'], 'ready'),

        createAgent('TT', 'Terms Tracker', 'Tracks payment terms compliance',
            'Order to Cash', ['O2C'], ['Terms Management'],
            ['Terms monitoring', 'Violation detection', 'Penalty calculation', 'Negotiation support'], 'ready'),

        createAgent('WO', 'Write-off Processor', 'Processes bad debt write-offs',
            'Order to Cash', ['O2C'], ['Write-off Management'],
            ['Write-off recommendation', 'Approval workflow', 'GL posting', 'Recovery tracking'], 'ready'),

        createAgent('CB', 'Chargeback Handler', 'Manages chargebacks',
            'Order to Cash', ['O2C'], ['Chargeback Management'],
            ['Chargeback processing', 'Dispute management', 'Documentation handling', 'Recovery planning'], 'ready'),

        createAgent('PG', 'Payment Gateway Manager', 'Manages payment gateways',
            'Order to Cash', ['O2C'], ['Payment Processing'],
            ['Gateway integration', 'Transaction monitoring', 'Settlement reconciliation', 'Fee management'], 'ready'),

        createAgent('LB', 'Lockbox Processor', 'Processes lockbox payments',
            'Order to Cash', ['O2C'], ['Payment Processing'],
            ['File processing', 'Image capture', 'Data extraction', 'Exception handling'], 'ready'),

        createAgent('ED', 'EDI Director', 'Manages EDI transactions',
            'Order to Cash', ['O2C'], ['EDI Management'],
            ['Message processing', 'Translation handling', 'Error management', 'Partner onboarding'], 'ready'),

        createAgent('CP', 'Customer Portal Manager', 'Manages customer self-service',
            'Order to Cash', ['O2C'], ['Customer Service'],
            ['Portal maintenance', 'Access management', 'Content updates', 'Usage analytics'], 'ready'),

        createAgent('CS', 'Customer Segmenter', 'Segments customers for treatment',
            'Order to Cash', ['O2C', 'FPA'], ['Customer Analysis'],
            ['Segmentation analysis', 'Behavior modeling', 'Value scoring', 'Strategy assignment'], 'ready'),

        createAgent('RL', 'Risk Limiter', 'Manages customer risk limits',
            'Order to Cash', ['O2C'], ['Risk Management'],
            ['Limit calculation', 'Exposure monitoring', 'Alert generation', 'Mitigation planning'], 'ready'),

        createAgent('FC', 'Finance Charge Calculator', 'Calculates finance charges',
            'Order to Cash', ['O2C'], ['Finance Charges'],
            ['Charge calculation', 'Rate management', 'Application processing', 'Dispute handling'], 'ready'),

        createAgent('IN', 'Installment Navigator', 'Manages installment billing',
            'Order to Cash', ['O2C'], ['Installment Management'],
            ['Schedule creation', 'Payment tracking', 'Default management', 'Restructuring support'], 'ready'),

        createAgent('RC', 'Recurring Charger', 'Manages recurring revenue',
            'Order to Cash', ['O2C'], ['Subscription Management'],
            ['Subscription billing', 'Renewal processing', 'Upgrade/downgrade handling', 'Cancellation management'], 'ready'),

        createAgent('AR', 'AR Reporter', 'Generates AR reports and analytics',
            'Order to Cash', ['O2C'], ['Reporting & Analytics'],
            ['Report generation', 'KPI calculation', 'Dashboard maintenance', 'Insight generation'], 'ready'),

        createAgent('CQ', 'Customer Query Handler', 'Handles customer inquiries',
            'Order to Cash', ['O2C'], ['Customer Service'],
            ['Query routing', 'Response generation', 'Issue resolution', 'Satisfaction tracking'], 'ready'),

        createAgent('RV', 'Revenue Validator', 'Validates revenue transactions',
            'Order to Cash', ['O2C', 'R2R'], ['Revenue Assurance'],
            ['Revenue verification', 'Leak detection', 'Compliance checking', 'Adjustment processing'], 'ready')
    ],

    // Record to Report Agents (Target: 45+)
    recordToReport: [
        // General Accounting Workflow
        createAgent('JE', 'Journal Entry Creator', 'Creates journal entries',
            'Record to Report', ['R2R'], ['General Accounting'],
            ['Entry creation', 'Template management', 'Validation rules', 'Auto-posting'], 'ready'),

        createAgent('JV', 'Journal Validator', 'Validates journal entries',
            'Record to Report', ['R2R'], ['General Accounting'],
            ['Balance checking', 'Account validation', 'Approval routing', 'Error detection'], 'ready'),

        createAgent('GL', 'GL Maintainer', 'Maintains general ledger',
            'Record to Report', ['R2R'], ['General Accounting'],
            ['Account management', 'Hierarchy maintenance', 'Mapping updates', 'Master data control'], 'ready'),

        createAgent('TB', 'Trial Balance Analyzer', 'Analyzes trial balances',
            'Record to Report', ['R2R'], ['General Accounting'],
            ['Balance analysis', 'Anomaly detection', 'Trend identification', 'Variance calculation'], 'ready'),

        // Period Close Workflow
        createAgent('CC', 'Close Calendar Manager', 'Manages close calendar',
            'Record to Report', ['R2R'], ['Period Close'],
            ['Task scheduling', 'Dependency tracking', 'Progress monitoring', 'Alert management'], 'ready'),

        createAgent('CT', 'Close Task Tracker', 'Tracks close tasks',
            'Record to Report', ['R2R'], ['Period Close'],
            ['Task assignment', 'Status updates', 'Bottleneck identification', 'SLA monitoring'], 'ready'),

        createAgent('CQ', 'Close Quality Checker', 'Ensures close quality',
            'Record to Report', ['R2R'], ['Period Close'],
            ['Checklist verification', 'Quality scoring', 'Issue identification', 'Sign-off management'], 'ready'),

        // Reconciliation Workflow
        createAgent('BR', 'Balance Reconciler', 'Reconciles balance sheet accounts',
            'Record to Report', ['R2R'], ['BS Reconciliation'],
            ['Auto-matching', 'Exception identification', 'Aging analysis', 'Certification workflow'], 'ready'),

        createAgent('IR', 'Intercompany Reconciler', 'Reconciles intercompany accounts',
            'Record to Report', ['R2R'], ['Intercompany Accounting'],
            ['Entity matching', 'Dispute identification', 'Netting calculation', 'Elimination entries'], 'ready'),

        createAgent('SR', 'Subledger Reconciler', 'Reconciles subledgers to GL',
            'Record to Report', ['R2R'], ['Subledger Reconciliation'],
            ['Balance matching', 'Detail verification', 'Discrepancy analysis', 'Adjustment creation'], 'ready'),

        // Financial Reporting Workflow
        createAgent('RG', 'Report Generator', 'Generates financial reports',
            'Record to Report', ['R2R'], ['Financial Reporting'],
            ['Report creation', 'Data aggregation', 'Format handling', 'Distribution management'], 'ready'),

        createAgent('VA', 'Variance Analyzer', 'Analyzes financial variances',
            'Record to Report', ['R2R'], ['Variance Analysis'],
            ['Variance calculation', 'Driver analysis', 'Commentary generation', 'Threshold monitoring'], 'ready'),

        createAgent('FC', 'Flux Commentator', 'Generates flux commentary',
            'Record to Report', ['R2R'], ['Financial Analysis'],
            ['Commentary creation', 'Insight generation', 'Trend explanation', 'Executive summaries'], 'ready'),

        // Consolidation Workflow
        createAgent('CE', 'Consolidation Engine', 'Performs consolidations',
            'Record to Report', ['R2R'], ['Group Consolidation'],
            ['Entity aggregation', 'Currency translation', 'Minority interest', 'Equity pickup'], 'ready'),

        createAgent('EJ', 'Elimination Judge', 'Processes elimination entries',
            'Record to Report', ['R2R'], ['Consolidation'],
            ['Elimination rules', 'Intercompany netting', 'Investment elimination', 'Profit elimination'], 'ready'),

        createAgent('CY', 'Currency Translator', 'Handles currency translation',
            'Record to Report', ['R2R'], ['Currency Translation'],
            ['Rate management', 'Translation methods', 'CTA calculation', 'Hedge accounting'], 'ready'),

        // Additional R2R Agents
        createAgent('AI', 'Accrual Identifier', 'Identifies and calculates accruals',
            'Record to Report', ['R2R'], ['Accrual Management'],
            ['Accrual calculation', 'Reversal management', 'Pattern recognition', 'Automation rules'], 'ready'),

        createAgent('FA', 'Fixed Asset Accountant', 'Manages fixed asset accounting',
            'Record to Report', ['R2R'], ['Asset Accounting'],
            ['Depreciation calculation', 'Asset tracking', 'Impairment testing', 'Disposal processing'], 'ready'),

        createAgent('LA', 'Lease Accountant', 'Manages lease accounting',
            'Record to Report', ['R2R'], ['Lease Accounting'],
            ['ASC 842 compliance', 'ROU asset calculation', 'Lease classification', 'Modification handling'], 'ready'),

        createAgent('PA', 'Prepaid Accountant', 'Manages prepaid expenses',
            'Record to Report', ['R2R'], ['Prepaid Management'],
            ['Amortization scheduling', 'Balance tracking', 'Expense recognition', 'Renewal alerts'], 'ready'),

        createAgent('TD', 'Tax Determiner', 'Determines tax treatments',
            'Record to Report', ['R2R', 'Tax'], ['Tax Accounting'],
            ['Tax calculation', 'Provision support', 'Deferred tax', 'Transfer pricing'], 'ready'),

        createAgent('SR', 'Statutory Reporter', 'Manages statutory reporting',
            'Record to Report', ['R2R'], ['Statutory Reporting'],
            ['Local GAAP conversion', 'Filing preparation', 'Compliance tracking', 'Multi-jurisdiction'], 'ready'),

        createAgent('XR', 'XBRL Reporter', 'Manages XBRL reporting',
            'Record to Report', ['R2R'], ['XBRL Reporting'],
            ['Tagging automation', 'Validation checking', 'Filing generation', 'Error resolution'], 'ready'),

        createAgent('BV', 'Book Validator', 'Validates multi-book accounting',
            'Record to Report', ['R2R'], ['Multi-book Accounting'],
            ['Book differences', 'Reconciliation', 'Adjustment tracking', 'Reporting support'], 'ready'),

        createAgent('AL', 'Allocation Engine', 'Processes cost allocations',
            'Record to Report', ['R2R'], ['Cost Allocation'],
            ['Driver calculation', 'Step-down allocation', 'Reciprocal methods', 'Validation checks'], 'ready'),

        createAgent('RJ', 'Reclassification Judge', 'Manages reclassifications',
            'Record to Report', ['R2R'], ['Reclass Management'],
            ['Reclass identification', 'Entry creation', 'Approval workflow', 'Audit trail'], 'ready'),

        createAgent('PE', 'Period End Processor', 'Manages period-end processes',
            'Record to Report', ['R2R'], ['Period End'],
            ['Cutoff management', 'Rollover processing', 'Opening balance', 'Period locking'], 'ready'),

        createAgent('MR', 'Management Reporter', 'Creates management reports',
            'Record to Report', ['R2R'], ['Management Reporting'],
            ['Package creation', 'KPI calculation', 'Narrative support', 'Board materials'], 'ready'),

        createAgent('AD', 'Audit Documenter', 'Manages audit documentation',
            'Record to Report', ['R2R', 'Audit'], ['Audit Support'],
            ['PBC management', 'Evidence collection', 'Query responses', 'Finding tracking'], 'ready'),

        createAgent('WP', 'Working Paper Organizer', 'Organizes working papers',
            'Record to Report', ['R2R'], ['Documentation'],
            ['Paper organization', 'Version control', 'Review workflow', 'Archive management'], 'ready'),

        createAgent('RL', 'Rollforward Ledger', 'Manages account rollforwards',
            'Record to Report', ['R2R'], ['Account Analysis'],
            ['Movement analysis', 'Beginning/ending ties', 'Activity categorization', 'Support schedules'], 'ready'),

        createAgent('BT', 'Balance Tracker', 'Tracks balance sheet movements',
            'Record to Report', ['R2R'], ['Balance Sheet Analysis'],
            ['Movement tracking', 'Ratio calculation', 'Trend analysis', 'Alert generation'], 'ready'),

        createAgent('PL', 'P&L Processor', 'Processes P&L statements',
            'Record to Report', ['R2R'], ['Income Statement'],
            ['P&L generation', 'Margin analysis', 'YoY comparison', 'Segment reporting'], 'ready'),

        createAgent('CF', 'Cash Flow Compiler', 'Compiles cash flow statements',
            'Record to Report', ['R2R'], ['Cash Flow Statement'],
            ['Direct method', 'Indirect method', 'Free cash flow', 'Reconciliation'], 'ready'),

        createAgent('NP', 'Note Preparer', 'Prepares financial statement notes',
            'Record to Report', ['R2R'], ['Financial Notes'],
            ['Note drafting', 'Disclosure checking', 'Reference updating', 'Consistency verification'], 'ready'),

        createAgent('MD', 'Master Data Guardian', 'Manages financial master data',
            'Record to Report', ['R2R'], ['Master Data'],
            ['Data governance', 'Change control', 'Quality monitoring', 'Integration management'], 'ready'),

        createAgent('SC', 'SOX Compliance Officer', 'Manages SOX compliance',
            'Record to Report', ['R2R', 'Compliance'], ['SOX Compliance'],
            ['Control testing', 'Documentation', 'Deficiency tracking', 'Remediation management'], 'ready'),

        createAgent('IG', 'Insight Generator', 'Generates financial insights',
            'Record to Report', ['R2R', 'FPA'], ['Financial Analysis'],
            ['Insight creation', 'Trend identification', 'Anomaly detection', 'Recommendation engine'], 'ready'),

        createAgent('FP', 'Close Finalizer', 'Finalizes period close',
            'Record to Report', ['R2R'], ['Close Finalization'],
            ['Final reviews', 'Sign-off collection', 'Lock processing', 'Archive creation'], 'ready'),

        createAgent('JV', 'Joint Venture Manager', 'Manages JV accounting',
            'Record to Report', ['R2R'], ['JV Accounting'],
            ['JV calculations', 'Partner billing', 'Cash calls', 'Distribution processing'], 'ready'),

        createAgent('RV', 'Revenue Accountant', 'Manages revenue accounting',
            'Record to Report', ['R2R', 'O2C'], ['Revenue Accounting'],
            ['Revenue recognition', 'Contract review', 'Modification handling', 'Disclosure support'], 'ready'),

        createAgent('PA', 'Project Accountant', 'Manages project accounting',
            'Record to Report', ['R2R'], ['Project Accounting'],
            ['Project tracking', 'Cost accumulation', 'Revenue recognition', 'WIP management'], 'ready'),

        createAgent('CM', 'Cash Manager', 'Manages cash accounting',
            'Record to Report', ['R2R', 'Treasury'], ['Cash Management'],
            ['Cash positioning', 'Bank reconciliation', 'Float management', 'Forecast support'], 'ready'),

        createAgent('FS', 'Financial Statement Preparer', 'Prepares financial statements',
            'Record to Report', ['R2R'], ['Financial Statements'],
            ['Statement preparation', 'Disclosure drafting', 'Comparative analysis', 'GAAP compliance'], 'ready'),

        createAgent('GR', 'GAAP Reporter', 'Manages GAAP adjustments',
            'Record to Report', ['R2R'], ['GAAP Reporting'],
            ['GAAP conversion', 'Adjustment tracking', 'Technical analysis', 'Policy documentation'], 'ready')
    ],

    // FP&A Agents (Target: 45+)
    fpAndA: [
        // Planning Workflow
        createAgent('BP', 'Budget Planner', 'Manages budget planning process',
            'FP&A', ['FPA'], ['Annual Planning'],
            ['Template distribution', 'Data collection', 'Consolidation', 'Version control'], 'ready'),

        createAgent('RF', 'Rolling Forecaster', 'Manages rolling forecasts',
            'FP&A', ['FPA'], ['Dynamic Forecasting'],
            ['Forecast updates', 'Trend analysis', 'Assumption tracking', 'Accuracy measurement'], 'ready'),

        createAgent('SP', 'Strategic Planner', 'Supports strategic planning',
            'FP&A', ['FPA'], ['Strategic Planning'],
            ['Long-range planning', 'Scenario development', 'Strategic initiatives', 'KPI alignment'], 'ready'),

        createAgent('DP', 'Driver-Based Planner', 'Manages driver-based planning',
            'FP&A', ['FPA'], ['Driver-Based Planning'],
            ['Driver identification', 'Correlation analysis', 'Model building', 'Sensitivity testing'], 'ready'),

        // Analysis Workflow
        createAgent('VA', 'Variance Analyzer', 'Analyzes budget variances',
            'FP&A', ['FPA'], ['Variance Analysis'],
            ['Variance calculation', 'Root cause analysis', 'Bridge building', 'Action planning'], 'ready'),

        createAgent('PA', 'Profitability Analyzer', 'Analyzes profitability',
            'FP&A', ['FPA'], ['Profitability Analysis'],
            ['Product profitability', 'Customer profitability', 'Channel analysis', 'Margin optimization'], 'ready'),

        createAgent('CA', 'Cost Analyzer', 'Analyzes costs',
            'FP&A', ['FPA'], ['Cost Analysis'],
            ['Cost breakdown', 'Benchmark analysis', 'Savings identification', 'Initiative tracking'], 'ready'),

        createAgent('TA', 'Trend Analyzer', 'Identifies and analyzes trends',
            'FP&A', ['FPA'], ['Trend Analysis'],
            ['Pattern recognition', 'Seasonality analysis', 'Growth tracking', 'Predictive insights'], 'ready'),

        // Modeling Workflow
        createAgent('SM', 'Scenario Modeler', 'Creates scenario models',
            'FP&A', ['FPA'], ['Scenario Modeling'],
            ['Scenario creation', 'Assumption management', 'Impact analysis', 'Probability weighting'], 'ready'),

        createAgent('WA', 'What-If Analyzer', 'Performs what-if analysis',
            'FP&A', ['FPA'], ['What-If Analysis'],
            ['Sensitivity testing', 'Variable manipulation', 'Outcome projection', 'Risk assessment'], 'ready'),

        createAgent('MC', 'Monte Carlo Simulator', 'Runs Monte Carlo simulations',
            'FP&A', ['FPA'], ['Statistical Modeling'],
            ['Distribution modeling', 'Random sampling', 'Confidence intervals', 'Risk quantification'], 'in-development'),

        createAgent('OM', 'Optimization Modeler', 'Optimizes financial models',
            'FP&A', ['FPA'], ['Optimization'],
            ['Constraint definition', 'Objective functions', 'Solution finding', 'Trade-off analysis'], 'in-development'),

        // Reporting Workflow
        createAgent('MR', 'Management Reporter', 'Creates management reports',
            'FP&A', ['FPA'], ['Management Reporting'],
            ['Report generation', 'Package assembly', 'Commentary drafting', 'Distribution management'], 'ready'),

        createAgent('DA', 'Dashboard Automator', 'Automates dashboards',
            'FP&A', ['FPA'], ['Dashboard Management'],
            ['Data refresh', 'Visualization updates', 'Alert configuration', 'User access'], 'ready'),

        createAgent('KT', 'KPI Tracker', 'Tracks key performance indicators',
            'FP&A', ['FPA'], ['KPI Management'],
            ['Metric calculation', 'Target tracking', 'Scorecard updates', 'Exception reporting'], 'ready'),

        createAgent('IR', 'Insight Reporter', 'Generates business insights',
            'FP&A', ['FPA'], ['Insight Generation'],
            ['Pattern identification', 'Correlation analysis', 'Recommendation creation', 'Action prioritization'], 'ready'),

        // Additional FP&A Agents
        createAgent('AM', 'Assumption Manager', 'Manages planning assumptions',
            'FP&A', ['FPA'], ['Assumption Management'],
            ['Assumption documentation', 'Sensitivity analysis', 'Validation tracking', 'Impact assessment'], 'ready'),

        createAgent('CA', 'Consolidation Agent', 'Consolidates plans and forecasts',
            'FP&A', ['FPA'], ['Consolidation'],
            ['Data aggregation', 'Elimination handling', 'Currency conversion', 'Validation checks'], 'ready'),

        createAgent('BP', 'Business Partner', 'Acts as finance business partner',
            'FP&A', ['FPA'], ['Business Partnership'],
            ['Stakeholder support', 'Analysis requests', 'Decision support', 'Training delivery'], 'ready'),

        createAgent('PM', 'Performance Monitor', 'Monitors business performance',
            'FP&A', ['FPA'], ['Performance Management'],
            ['Performance tracking', 'Benchmark comparison', 'Gap analysis', 'Improvement planning'], 'ready'),

        createAgent('AP', 'Approval Manager', 'Manages planning approvals',
            'FP&A', ['FPA'], ['Approval Workflow'],
            ['Workflow management', 'Escalation handling', 'Status tracking', 'Audit trail'], 'ready'),

        createAgent('DG', 'Data Gatherer', 'Gathers planning data',
            'FP&A', ['FPA'], ['Data Collection'],
            ['Data extraction', 'Quality validation', 'Gap identification', 'Source management'], 'ready'),

        createAgent('PA', 'Predictive Analyst', 'Performs predictive analytics',
            'FP&A', ['FPA'], ['Predictive Analytics'],
            ['Model building', 'Forecast generation', 'Accuracy tracking', 'Model refinement'], 'ready'),

        createAgent('RS', 'Review Support Agent', 'Supports planning reviews',
            'FP&A', ['FPA'], ['Review Support'],
            ['Material preparation', 'Question logging', 'Follow-up tracking', 'Decision documentation'], 'ready'),

        createAgent('TB', 'Target Builder', 'Builds performance targets',
            'FP&A', ['FPA'], ['Target Setting'],
            ['Target calculation', 'Stretch goals', 'Allocation logic', 'Achievement tracking'], 'ready'),

        createAgent('GP', 'Gap Analyzer', 'Analyzes performance gaps',
            'FP&A', ['FPA'], ['Gap Analysis'],
            ['Gap identification', 'Bridge analysis', 'Initiative sizing', 'Closure planning'], 'ready'),

        createAgent('BI', 'Benchmarking Investigator', 'Performs benchmarking',
            'FP&A', ['FPA'], ['Benchmarking'],
            ['Peer comparison', 'Best practice identification', 'Gap quantification', 'Improvement opportunities'], 'ready'),

        createAgent('QR', 'Quarterly Reviewer', 'Manages quarterly reviews',
            'FP&A', ['FPA'], ['Quarterly Business Reviews'],
            ['QBR preparation', 'Performance summaries', 'Action tracking', 'Executive briefings'], 'ready'),

        createAgent('AR', 'Annual Reviewer', 'Manages annual planning',
            'FP&A', ['FPA'], ['Annual Planning'],
            ['Calendar management', 'Template updates', 'Training delivery', 'Process improvement'], 'ready'),

        createAgent('CR', 'Commentary Robot', 'Generates commentary',
            'FP&A', ['FPA'], ['Commentary Generation'],
            ['Narrative creation', 'Variance explanation', 'Insight highlighting', 'Executive summaries'], 'ready'),

        createAgent('PC', 'Plan Comparator', 'Compares plans vs actuals',
            'FP&A', ['FPA'], ['Plan vs Actual'],
            ['Comparison analysis', 'Variance calculation', 'Trend identification', 'Forecast accuracy'], 'ready'),

        createAgent('RO', 'Reforecast Optimizer', 'Optimizes reforecasting',
            'FP&A', ['FPA'], ['Reforecasting'],
            ['Reforecast triggers', 'Update management', 'Impact analysis', 'Communication planning'], 'ready'),

        createAgent('ZB', 'Zero-Based Budgeter', 'Manages zero-based budgeting',
            'FP&A', ['FPA'], ['Zero-Based Budgeting'],
            ['Activity analysis', 'Cost justification', 'Priority ranking', 'Resource optimization'], 'ready'),

        createAgent('AB', 'Activity-Based Budgeter', 'Manages activity-based budgeting',
            'FP&A', ['FPA'], ['Activity-Based Budgeting'],
            ['Activity costing', 'Driver analysis', 'Resource planning', 'Efficiency tracking'], 'ready'),

        createAgent('RM', 'Resource Manager', 'Manages resource allocation',
            'FP&A', ['FPA'], ['Resource Allocation'],
            ['Capacity planning', 'Allocation optimization', 'Utilization tracking', 'Constraint management'], 'ready'),

        createAgent('HR', 'Headcount Reporter', 'Manages headcount planning',
            'FP&A', ['FPA', 'HR'], ['Headcount Planning'],
            ['HC tracking', 'Cost projection', 'Productivity analysis', 'Hiring planning'], 'ready'),

        createAgent('CE', 'CapEx Planner', 'Plans capital expenditures',
            'FP&A', ['FPA'], ['CapEx Planning'],
            ['Project evaluation', 'ROI calculation', 'Approval tracking', 'Spend monitoring'], 'ready'),

        createAgent('OE', 'OpEx Controller', 'Controls operating expenses',
            'FP&A', ['FPA'], ['OpEx Management'],
            ['Expense tracking', 'Budget control', 'Savings initiatives', 'Vendor management'], 'ready'),

        createAgent('PV', 'Plan Versioner', 'Manages plan versions',
            'FP&A', ['FPA'], ['Version Control'],
            ['Version tracking', 'Change documentation', 'Comparison tools', 'Archive management'], 'ready'),

        createAgent('WM', 'Workflow Manager', 'Manages FP&A workflows',
            'FP&A', ['FPA'], ['Workflow Management'],
            ['Process orchestration', 'Task management', 'Deadline tracking', 'Bottleneck resolution'], 'ready'),

        createAgent('CC', 'Collaboration Coordinator', 'Coordinates cross-functional work',
            'FP&A', ['FPA'], ['Collaboration'],
            ['Meeting management', 'Action tracking', 'Communication planning', 'Stakeholder alignment'], 'ready'),

        createAgent('SA', 'Strategic Advisor', 'Provides strategic advice',
            'FP&A', ['FPA'], ['Strategic Advisory'],
            ['Option analysis', 'Risk assessment', 'Opportunity identification', 'Decision support'], 'ready'),

        createAgent('SG', 'Sensitivity Gauge', 'Measures sensitivity',
            'FP&A', ['FPA'], ['Sensitivity Analysis'],
            ['Variable testing', 'Impact quantification', 'Risk mapping', 'Mitigation planning'], 'ready'),

        createAgent('BB', 'Beyond Budgeting Assistant', 'Supports beyond budgeting',
            'FP&A', ['FPA'], ['Beyond Budgeting'],
            ['Rolling targets', 'Relative measures', 'Adaptive planning', 'Decentralized control'], 'in-development'),

        createAgent('CA', 'Capacity Analyzer', 'Analyzes capacity',
            'FP&A', ['FPA'], ['Capacity Planning'],
            ['Utilization analysis', 'Bottleneck identification', 'Expansion planning', 'Efficiency optimization'], 'ready')
    ],

    // Cross-functional agents used by 2+ departments
    crossFunctionalAgents: [
        createAgent('DA', 'Data Aggregator', 'Collects and consolidates data from multiple sources',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA', 'CF', 'IR'],
            ['Data Collection', 'Data Validation', 'Data Consolidation'],
            ['Multi-source integration', 'Quality validation', 'Real-time updates', 'Format standardization'], 'ready'),

        createAgent('AV', 'Approval Validator', 'Validates and routes approvals based on business rules',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'CF', 'FPA'],
            ['Approval Routing', 'Policy Validation', 'Escalation Management'],
            ['Dynamic routing', 'Policy engine', 'Delegation handling', 'Audit logging'], 'ready'),

        createAgent('RR', 'Report Runner', 'Generates standardized reports across functions',
            'Cross-functional', ['R2R', 'FPA', 'CF', 'IR', 'CA'],
            ['Report Generation', 'Data Formatting', 'Distribution'],
            ['Template management', 'Schedule automation', 'Format conversion', 'Delivery tracking'], 'ready'),

        createAgent('AC', 'Audit Companion', 'Maintains audit trails and compliance documentation',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'CA', 'CF'],
            ['Audit Trail Creation', 'Compliance Checking', 'Documentation'],
            ['Trail maintenance', 'Evidence collection', 'Control testing', 'Finding management'], 'ready'),

        createAgent('DQ', 'Data Quality Guardian', 'Ensures data quality across systems',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA', 'CF'],
            ['Data Quality Management', 'Validation', 'Cleansing'],
            ['Quality scoring', 'Anomaly detection', 'Standardization', 'Enrichment'], 'ready'),

        createAgent('WC', 'Workflow Coordinator', 'Coordinates workflows across departments',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA'],
            ['Workflow Orchestration', 'Task Management', 'Process Integration'],
            ['Cross-functional routing', 'Dependency management', 'SLA tracking', 'Bottleneck resolution'], 'ready'),

        createAgent('NC', 'Notification Center', 'Manages notifications and alerts',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA', 'CF', 'IR'],
            ['Alert Management', 'Notification Routing', 'Communication'],
            ['Multi-channel delivery', 'Priority handling', 'Subscription management', 'Escalation'], 'ready'),

        createAgent('DC', 'Document Curator', 'Manages documents across functions',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'CF', 'IR'],
            ['Document Management', 'Storage', 'Retrieval'],
            ['Version control', 'Access management', 'Retention policies', 'Search optimization'], 'ready'),

        createAgent('TC', 'Tax Calculator', 'Calculates taxes across transactions',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'CF'],
            ['Tax Calculation', 'Compliance', 'Reporting'],
            ['Multi-jurisdiction', 'Rate management', 'Exemption handling', 'Filing support'], 'ready'),

        createAgent('CR', 'Currency Converter', 'Handles currency conversions',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA', 'CF'],
            ['Currency Conversion', 'Rate Management', 'Translation'],
            ['Real-time rates', 'Historical rates', 'Hedge accounting', 'Variance tracking'], 'ready'),

        createAgent('ML', 'Machine Learning Engine', 'Provides ML capabilities',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA', 'CF'],
            ['Pattern Recognition', 'Prediction', 'Optimization'],
            ['Model training', 'Feature engineering', 'Prediction serving', 'Model monitoring'], 'in-development'),

        createAgent('BI', 'Business Intelligence Hub', 'Provides BI capabilities',
            'Cross-functional', ['R2R', 'FPA', 'CF', 'IR'],
            ['Analytics', 'Visualization', 'Insights'],
            ['Dashboard creation', 'Ad-hoc analysis', 'Data exploration', 'Insight generation'], 'ready'),

        createAgent('CC', 'Compliance Checker', 'Checks compliance across processes',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'CF'],
            ['Compliance Validation', 'Policy Checking', 'Reporting'],
            ['Rule engine', 'Policy updates', 'Violation detection', 'Remediation tracking'], 'ready'),

        createAgent('KM', 'Knowledge Manager', 'Manages organizational knowledge',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA', 'CF', 'IR'],
            ['Knowledge Management', 'Documentation', 'Training'],
            ['Content curation', 'Search optimization', 'Learning paths', 'Best practices'], 'ready'),

        createAgent('PI', 'Process Improver', 'Identifies process improvements',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA'],
            ['Process Analysis', 'Optimization', 'Automation'],
            ['Bottleneck analysis', 'Automation opportunities', 'ROI calculation', 'Implementation planning'], 'in-development'),

        createAgent('EC', 'Exception Coordinator', 'Manages exceptions across processes',
            'Cross-functional', ['P2P', 'O2C', 'R2R'],
            ['Exception Handling', 'Resolution', 'Tracking'],
            ['Exception routing', 'Pattern analysis', 'Resolution workflows', 'Root cause analysis'], 'ready'),

        createAgent('SC', 'System Connector', 'Connects and integrates systems',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA', 'CF'],
            ['System Integration', 'Data Synchronization', 'API Management'],
            ['API orchestration', 'Data mapping', 'Error handling', 'Performance monitoring'], 'ready'),

        createAgent('PM', 'Performance Monitor', 'Monitors performance metrics',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA'],
            ['Performance Tracking', 'KPI Monitoring', 'Alerting'],
            ['Metric collection', 'Threshold monitoring', 'Trend analysis', 'Alert generation'], 'ready'),

        createAgent('RK', 'Risk Manager', 'Manages risks across functions',
            'Cross-functional', ['P2P', 'O2C', 'CF', 'Treasury'],
            ['Risk Assessment', 'Mitigation', 'Monitoring'],
            ['Risk scoring', 'Control assessment', 'Mitigation planning', 'Incident management'], 'ready'),

        createAgent('BK', 'Benchmark Keeper', 'Maintains benchmarks and comparisons',
            'Cross-functional', ['P2P', 'O2C', 'R2R', 'FPA'],
            ['Benchmarking', 'Comparison Analysis', 'Best Practices'],
            ['Data collection', 'Peer comparison', 'Gap analysis', 'Improvement recommendations'], 'ready')
    ],

    // Corporate Finance Agents (Target: 45+)
    corporateFinance: [
        // Treasury Workflow
        createAgent('CF', 'Cash Flow Forecaster', 'Forecasts cash flows across the organization',
            'Corporate Finance', ['CF', 'FPA'], ['Cash Flow Forecasting'],
            ['ML-based forecasting', 'Scenario modeling', 'Working capital optimization', 'Currency exposure'], 'ready'),

        createAgent('LP', 'Liquidity Planner', 'Manages liquidity planning and monitoring',
            'Corporate Finance', ['CF'], ['Liquidity Management'],
            ['Liquidity forecasting', 'Buffer optimization', 'Stress testing', 'Contingency planning'], 'ready'),

        createAgent('CP', 'Cash Pooler', 'Manages cash pooling operations',
            'Corporate Finance', ['CF'], ['Cash Pooling'],
            ['Zero balancing', 'Notional pooling', 'Interest optimization', 'Multi-currency handling'], 'ready'),

        createAgent('TO', 'Treasury Operator', 'Operates treasury management systems',
            'Corporate Finance', ['CF'], ['Treasury Operations'],
            ['Payment processing', 'Bank connectivity', 'Transaction monitoring', 'Settlement management'], 'ready'),

        createAgent('BR', 'Bank Relationship Manager', 'Manages banking relationships',
            'Corporate Finance', ['CF'], ['Bank Management'],
            ['Fee negotiation', 'Service monitoring', 'Account rationalization', 'KYC management'], 'ready'),

        // Risk Management Workflow
        createAgent('FH', 'FX Hedger', 'Manages foreign exchange risk',
            'Corporate Finance', ['CF'], ['FX Risk Management'],
            ['Exposure identification', 'Hedge execution', 'Effectiveness testing', 'Mark-to-market'], 'ready'),

        createAgent('IH', 'Interest Rate Hedger', 'Manages interest rate risk',
            'Corporate Finance', ['CF'], ['Interest Rate Management'],
            ['Rate forecasting', 'Swap management', 'Duration matching', 'Hedge accounting'], 'ready'),

        createAgent('CH', 'Commodity Hedger', 'Manages commodity price risk',
            'Corporate Finance', ['CF'], ['Commodity Risk'],
            ['Price forecasting', 'Futures management', 'Physical hedging', 'Basis risk management'], 'ready'),

        createAgent('CR', 'Credit Risk Manager', 'Manages counterparty credit risk',
            'Corporate Finance', ['CF'], ['Credit Risk'],
            ['Credit scoring', 'Limit setting', 'Exposure monitoring', 'Collateral management'], 'ready'),

        createAgent('RA', 'Risk Aggregator', 'Aggregates risk across the enterprise',
            'Corporate Finance', ['CF'], ['Enterprise Risk'],
            ['Risk consolidation', 'VaR calculation', 'Stress testing', 'Scenario analysis'], 'ready'),

        // Capital Management Workflow
        createAgent('CM', 'Capital Manager', 'Manages capital structure',
            'Corporate Finance', ['CF'], ['Capital Management'],
            ['Capital allocation', 'WACC optimization', 'Rating management', 'Dividend policy'], 'ready'),

        createAgent('DM', 'Debt Manager', 'Manages debt portfolio',
            'Corporate Finance', ['CF'], ['Debt Management'],
            ['Issuance planning', 'Refinancing optimization', 'Covenant monitoring', 'Maturity management'], 'ready'),

        createAgent('BC', 'Bond Calculator', 'Manages bond issuance and pricing',
            'Corporate Finance', ['CF'], ['Bond Management'],
            ['Pricing models', 'Spread analysis', 'Documentation management', 'Investor relations'], 'ready'),

        createAgent('LM', 'Loan Manager', 'Manages loan portfolio',
            'Corporate Finance', ['CF'], ['Loan Management'],
            ['Syndication support', 'Amendment processing', 'Compliance monitoring', 'Fee tracking'], 'ready'),

        createAgent('CC', 'Covenant Compliance Monitor', 'Monitors debt covenants',
            'Corporate Finance', ['CF'], ['Covenant Management'],
            ['Ratio calculation', 'Threshold monitoring', 'Breach prevention', 'Waiver management'], 'ready'),

        // Investment Management Workflow
        createAgent('IM', 'Investment Manager', 'Manages investment portfolio',
            'Corporate Finance', ['CF'], ['Investment Management'],
            ['Portfolio optimization', 'Asset allocation', 'Performance tracking', 'Risk monitoring'], 'ready'),

        createAgent('VA', 'Valuation Analyst', 'Performs investment valuations',
            'Corporate Finance', ['CF', 'FPA'], ['Valuation'],
            ['DCF modeling', 'Comparable analysis', 'Option pricing', 'Fair value assessment'], 'ready'),

        createAgent('PE', 'Pension Fund Manager', 'Manages pension investments',
            'Corporate Finance', ['CF'], ['Pension Management'],
            ['Asset-liability matching', 'Funding analysis', 'Actuarial coordination', 'Regulatory compliance'], 'ready'),

        createAgent('MD', 'M&A Deal Analyzer', 'Analyzes M&A opportunities',
            'Corporate Finance', ['CF'], ['M&A Analysis'],
            ['Target screening', 'Synergy modeling', 'Integration planning', 'Due diligence support'], 'ready'),

        createAgent('DS', 'Divestiture Specialist', 'Manages divestitures',
            'Corporate Finance', ['CF'], ['Divestiture Management'],
            ['Carve-out analysis', 'Buyer identification', 'Separation planning', 'TSA management'], 'in-development'),

        // Tax Management Workflow
        createAgent('TP', 'Tax Planner', 'Optimizes tax planning',
            'Corporate Finance', ['CF', 'Tax'], ['Tax Planning'],
            ['Structure optimization', 'Transfer pricing', 'Credits and incentives', 'Jurisdiction analysis'], 'ready'),

        createAgent('TC', 'Tax Compliance Manager', 'Manages tax compliance',
            'Corporate Finance', ['CF', 'Tax'], ['Tax Compliance'],
            ['Filing automation', 'Payment scheduling', 'Audit management', 'Documentation control'], 'ready'),

        createAgent('TD', 'Tax Digital Transformer', 'Digitizes tax processes',
            'Corporate Finance', ['CF', 'Tax'], ['Tax Technology'],
            ['Process automation', 'Data standardization', 'Real-time reporting', 'Blockchain integration'], 'in-development'),

        createAgent('TI', 'Tax Intelligence Gatherer', 'Monitors tax developments',
            'Corporate Finance', ['CF', 'Tax'], ['Tax Intelligence'],
            ['Regulation tracking', 'Impact analysis', 'Planning opportunities', 'Risk identification'], 'ready'),

        createAgent('TA', 'Tax Auditor Assistant', 'Supports tax audits',
            'Corporate Finance', ['CF', 'Tax'], ['Tax Audit'],
            ['Documentation preparation', 'Query response', 'Position defense', 'Settlement negotiation'], 'ready'),

        // Additional Corporate Finance Agents
        createAgent('WC', 'Working Capital Optimizer', 'Optimizes working capital',
            'Corporate Finance', ['CF', 'FPA'], ['Working Capital'],
            ['DPO/DSO optimization', 'Inventory management', 'Supply chain finance', 'Factoring analysis'], 'ready'),

        createAgent('NM', 'Netting Manager', 'Manages payment netting',
            'Corporate Finance', ['CF'], ['Netting Operations'],
            ['Multilateral netting', 'FX exposure reduction', 'Settlement optimization', 'Dispute resolution'], 'ready'),

        createAgent('LC', 'Letter of Credit Processor', 'Manages letters of credit',
            'Corporate Finance', ['CF'], ['Trade Finance'],
            ['LC issuance', 'Document checking', 'Discrepancy management', 'Fee optimization'], 'ready'),

        createAgent('BG', 'Bank Guarantee Manager', 'Manages bank guarantees',
            'Corporate Finance', ['CF'], ['Guarantee Management'],
            ['Guarantee issuance', 'Collateral management', 'Renewal tracking', 'Release processing'], 'ready'),

        createAgent('DR', 'Dividend Recommender', 'Recommends dividend policy',
            'Corporate Finance', ['CF'], ['Dividend Management'],
            ['Payout analysis', 'Peer benchmarking', 'Tax optimization', 'Shareholder impact'], 'ready'),

        createAgent('SC', 'Share Capital Manager', 'Manages share capital',
            'Corporate Finance', ['CF'], ['Equity Management'],
            ['Buyback analysis', 'Option management', 'Dilution tracking', 'Cap table maintenance'], 'ready'),

        createAgent('RR', 'Rating Reporter', 'Manages credit ratings',
            'Corporate Finance', ['CF'], ['Rating Management'],
            ['Agency liaison', 'Metric tracking', 'Presentation support', 'Action planning'], 'ready'),

        createAgent('SE', 'System Effectiveness Analyzer', 'Analyzes treasury systems',
            'Corporate Finance', ['CF'], ['System Management'],
            ['Performance monitoring', 'Gap analysis', 'Upgrade planning', 'Integration testing'], 'ready'),

        createAgent('TK', 'Treasury KPI Reporter', 'Reports treasury KPIs',
            'Corporate Finance', ['CF'], ['Treasury Reporting'],
            ['KPI calculation', 'Dashboard maintenance', 'Benchmark comparison', 'Trend analysis'], 'ready'),

        createAgent('RP', 'Regulatory Processor', 'Manages regulatory requirements',
            'Corporate Finance', ['CF'], ['Regulatory Compliance'],
            ['EMIR reporting', 'MiFID compliance', 'Dodd-Frank adherence', 'Local requirements'], 'ready'),

        createAgent('IE', 'Insurance Manager', 'Manages corporate insurance',
            'Corporate Finance', ['CF'], ['Insurance Management'],
            ['Coverage optimization', 'Claims management', 'Premium negotiation', 'Risk assessment'], 'ready'),

        createAgent('FT', 'Fund Transfer Pricer', 'Manages transfer pricing',
            'Corporate Finance', ['CF'], ['Transfer Pricing'],
            ['Rate setting', 'Methodology development', 'Performance measurement', 'Dispute resolution'], 'ready'),

        createAgent('CG', 'Collateral Guardian', 'Manages collateral',
            'Corporate Finance', ['CF'], ['Collateral Management'],
            ['Margin calls', 'Asset optimization', 'Substitution management', 'Dispute handling'], 'ready'),

        createAgent('EB', 'ESG Bond Manager', 'Manages ESG bonds',
            'Corporate Finance', ['CF'], ['ESG Finance'],
            ['Green bond issuance', 'Impact reporting', 'Framework compliance', 'Investor engagement'], 'in-development'),

        createAgent('TF', 'Trade Finance Facilitator', 'Facilitates trade finance',
            'Corporate Finance', ['CF'], ['Trade Finance'],
            ['Supply chain finance', 'Documentary credits', 'Collections management', 'Risk mitigation'], 'ready'),

        createAgent('BA', 'Balance Analyzer', 'Analyzes balance sheet',
            'Corporate Finance', ['CF', 'FPA'], ['Balance Sheet Management'],
            ['Ratio analysis', 'Optimization recommendations', 'Peer comparison', 'Forecast impact'], 'ready'),

        createAgent('RC', 'Return Calculator', 'Calculates investment returns',
            'Corporate Finance', ['CF'], ['Performance Measurement'],
            ['ROI calculation', 'IRR analysis', 'NPV modeling', 'Hurdle rate comparison'], 'ready'),

        createAgent('SH', 'Scenario Handler', 'Manages financial scenarios',
            'Corporate Finance', ['CF', 'FPA'], ['Scenario Planning'],
            ['Scenario creation', 'Stress testing', 'Sensitivity analysis', 'Action planning'], 'ready'),

        createAgent('PO', 'Portfolio Optimizer', 'Optimizes investment portfolio',
            'Corporate Finance', ['CF'], ['Portfolio Management'],
            ['Asset allocation', 'Risk-return optimization', 'Rebalancing recommendations', 'Constraint handling'], 'ready'),

        createAgent('LS', 'Liquidity Stress Tester', 'Stress tests liquidity',
            'Corporate Finance', ['CF'], ['Stress Testing'],
            ['Scenario modeling', 'Buffer calculation', 'Contingency planning', 'Regulatory compliance'], 'ready')
    ],

    // Cost Accounting Agents (Target: 45+)
    costAccounting: [
        // Product Costing Workflow
        createAgent('CC', 'Cost Calculator', 'Calculates product and service costs',
            'Cost Accounting', ['CA'], ['Product Costing'],
            ['Material cost tracking', 'Labor cost allocation', 'Overhead application', 'Variance analysis'], 'ready'),

        createAgent('SC', 'Standard Cost Setter', 'Sets and maintains standard costs',
            'Cost Accounting', ['CA'], ['Standard Costing'],
            ['Rate development', 'Annual updates', 'Variance tracking', 'Roll forward analysis'], 'ready'),

        createAgent('AB', 'ABC Analyzer', 'Performs activity-based costing',
            'Cost Accounting', ['CA'], ['Activity-Based Costing'],
            ['Activity identification', 'Driver analysis', 'Cost pool allocation', 'Profitability insights'], 'ready'),

        createAgent('MC', 'Material Cost Tracker', 'Tracks material costs',
            'Cost Accounting', ['CA'], ['Material Management'],
            ['Price variance analysis', 'Usage tracking', 'Waste monitoring', 'Supplier analysis'], 'ready'),

        createAgent('LC', 'Labor Cost Monitor', 'Monitors labor costs',
            'Cost Accounting', ['CA'], ['Labor Management'],
            ['Rate analysis', 'Efficiency tracking', 'Overtime monitoring', 'Productivity metrics'], 'ready'),

        // Overhead Management Workflow
        createAgent('OH', 'Overhead Allocator', 'Allocates overhead costs',
            'Cost Accounting', ['CA'], ['Overhead Allocation'],
            ['Pool definition', 'Driver selection', 'Rate calculation', 'Department charging'], 'ready'),

        createAgent('FC', 'Fixed Cost Monitor', 'Monitors fixed costs',
            'Cost Accounting', ['CA'], ['Fixed Cost Management'],
            ['Capacity analysis', 'Utilization tracking', 'Step cost identification', 'Commitment tracking'], 'ready'),

        createAgent('VC', 'Variable Cost Tracker', 'Tracks variable costs',
            'Cost Accounting', ['CA'], ['Variable Cost Analysis'],
            ['Volume correlation', 'Rate analysis', 'Efficiency measurement', 'Forecast modeling'], 'ready'),

        createAgent('MC', 'Mixed Cost Analyzer', 'Analyzes mixed costs',
            'Cost Accounting', ['CA'], ['Mixed Cost Analysis'],
            ['Fixed/variable separation', 'Regression analysis', 'High-low method', 'Scatter plot analysis'], 'ready'),

        createAgent('CA', 'Capacity Cost Manager', 'Manages capacity costs',
            'Cost Accounting', ['CA'], ['Capacity Management'],
            ['Idle capacity tracking', 'Bottleneck identification', 'Expansion analysis', 'Optimization recommendations'], 'ready'),

        // Process Costing Workflow
        createAgent('PC', 'Process Coster', 'Manages process costing',
            'Cost Accounting', ['CA'], ['Process Costing'],
            ['Equivalent unit calculation', 'Cost flow tracking', 'WIP valuation', 'Spoilage accounting'], 'ready'),

        createAgent('JC', 'Job Coster', 'Manages job order costing',
            'Cost Accounting', ['CA'], ['Job Order Costing'],
            ['Job tracking', 'Cost accumulation', 'Billing support', 'Profitability analysis'], 'ready'),

        createAgent('BC', 'Batch Coster', 'Manages batch costing',
            'Cost Accounting', ['CA'], ['Batch Costing'],
            ['Batch tracking', 'Setup cost allocation', 'Run cost analysis', 'Efficiency metrics'], 'ready'),

        createAgent('TC', 'Target Coster', 'Manages target costing',
            'Cost Accounting', ['CA'], ['Target Costing'],
            ['Market price analysis', 'Cost gap identification', 'Value engineering', 'Supplier collaboration'], 'ready'),

        createAgent('KC', 'Kaizen Cost Manager', 'Implements kaizen costing',
            'Cost Accounting', ['CA'], ['Kaizen Costing'],
            ['Continuous improvement', 'Small increment tracking', 'Team collaboration', 'Savings validation'], 'ready'),

        // Variance Analysis Workflow
        createAgent('PV', 'Price Variance Analyzer', 'Analyzes price variances',
            'Cost Accounting', ['CA'], ['Variance Analysis'],
            ['Purchase price variance', 'Sales price variance', 'Mix impact', 'Market analysis'], 'ready'),

        createAgent('QV', 'Quantity Variance Analyzer', 'Analyzes quantity variances',
            'Cost Accounting', ['CA'], ['Variance Analysis'],
            ['Usage variance', 'Yield analysis', 'Scrap tracking', 'Efficiency measurement'], 'ready'),

        createAgent('EV', 'Efficiency Variance Tracker', 'Tracks efficiency variances',
            'Cost Accounting', ['CA'], ['Variance Analysis'],
            ['Labor efficiency', 'Machine efficiency', 'Process optimization', 'Best practice identification'], 'ready'),

        createAgent('MV', 'Mix Variance Calculator', 'Calculates mix variances',
            'Cost Accounting', ['CA'], ['Variance Analysis'],
            ['Product mix impact', 'Customer mix analysis', 'Channel mix effects', 'Optimization opportunities'], 'ready'),

        createAgent('VV', 'Volume Variance Analyzer', 'Analyzes volume variances',
            'Cost Accounting', ['CA'], ['Variance Analysis'],
            ['Capacity utilization', 'Fixed cost absorption', 'Break-even impact', 'Scaling effects'], 'ready'),

        // Quality and Environmental Costing
        createAgent('QC', 'Quality Cost Analyzer', 'Analyzes quality costs',
            'Cost Accounting', ['CA'], ['Quality Management'],
            ['Prevention costs', 'Appraisal costs', 'Failure costs', 'COQ reporting'], 'ready'),

        createAgent('EC', 'Environmental Cost Tracker', 'Tracks environmental costs',
            'Cost Accounting', ['CA'], ['Environmental Accounting'],
            ['Compliance costs', 'Remediation tracking', 'Carbon accounting', 'Sustainability metrics'], 'ready'),

        createAgent('WC', 'Waste Cost Tracker', 'Tracks waste and scrap costs',
            'Cost Accounting', ['CA'], ['Waste Management'],
            ['Scrap tracking', 'Rework costs', 'Disposal fees', 'Recovery opportunities'], 'ready'),

        createAgent('RC', 'Rework Cost Calculator', 'Calculates rework costs',
            'Cost Accounting', ['CA'], ['Rework Management'],
            ['Defect tracking', 'Labor costs', 'Material waste', 'Root cause analysis'], 'ready'),

        createAgent('LC', 'Life Cycle Coster', 'Performs life cycle costing',
            'Cost Accounting', ['CA'], ['Life Cycle Analysis'],
            ['Development costs', 'Production costs', 'Service costs', 'Disposal costs'], 'ready'),

        // Profitability Analysis
        createAgent('PA', 'Product Profitability Analyzer', 'Analyzes product profitability',
            'Cost Accounting', ['CA'], ['Profitability Analysis'],
            ['Margin analysis', 'Contribution tracking', 'Breakeven calculation', 'Portfolio optimization'], 'ready'),

        createAgent('CA', 'Customer Profitability Analyzer', 'Analyzes customer profitability',
            'Cost Accounting', ['CA', 'O2C'], ['Customer Analysis'],
            ['Revenue analysis', 'Cost to serve', 'Lifetime value', 'Segmentation support'], 'ready'),

        createAgent('SA', 'Segment Analyzer', 'Analyzes business segments',
            'Cost Accounting', ['CA'], ['Segment Analysis'],
            ['Geographic profitability', 'Product line analysis', 'Channel performance', 'Market insights'], 'ready'),

        createAgent('BP', 'Break-even Processor', 'Calculates break-even points',
            'Cost Accounting', ['CA'], ['Break-even Analysis'],
            ['Fixed/variable analysis', 'Contribution margin', 'Safety margin', 'Sensitivity testing'], 'ready'),

        createAgent('CP', 'Contribution Processor', 'Analyzes contribution margins',
            'Cost Accounting', ['CA'], ['Contribution Analysis'],
            ['Product contribution', 'Customer contribution', 'Incremental analysis', 'Decision support'], 'ready'),

        // Cost Management
        createAgent('CR', 'Cost Reducer', 'Identifies cost reduction opportunities',
            'Cost Accounting', ['CA'], ['Cost Reduction'],
            ['Opportunity identification', 'Impact analysis', 'Implementation tracking', 'Savings validation'], 'ready'),

        createAgent('CO', 'Cost Optimizer', 'Optimizes cost structures',
            'Cost Accounting', ['CA'], ['Cost Optimization'],
            ['Structure analysis', 'Benchmark comparison', 'Best practice application', 'Continuous improvement'], 'ready'),

        createAgent('TC', 'Transfer Price Setter', 'Sets transfer prices',
            'Cost Accounting', ['CA', 'Tax'], ['Transfer Pricing'],
            ['Method selection', 'Arm\'s length testing', 'Documentation support', 'Dispute resolution'], 'ready'),

        createAgent('IC', 'Inventory Coster', 'Values inventory',
            'Cost Accounting', ['CA'], ['Inventory Valuation'],
            ['FIFO/LIFO calculation', 'Lower of cost or market', 'Obsolescence reserves', 'Cycle count support'], 'ready'),

        createAgent('DC', 'Distribution Cost Analyzer', 'Analyzes distribution costs',
            'Cost Accounting', ['CA'], ['Distribution Analysis'],
            ['Freight analysis', 'Warehouse costs', 'Last mile optimization', 'Mode selection'], 'ready'),

        // Additional Cost Accounting Agents
        createAgent('SC', 'Service Cost Calculator', 'Calculates service costs',
            'Cost Accounting', ['CA'], ['Service Costing'],
            ['Time tracking', 'Resource allocation', 'Indirect cost application', 'Billing support'], 'ready'),

        createAgent('AC', 'Allocation Auditor', 'Audits cost allocations',
            'Cost Accounting', ['CA', 'Audit'], ['Allocation Verification'],
            ['Method validation', 'Calculation checking', 'Documentation review', 'Recommendation generation'], 'ready'),

        createAgent('RC', 'Relevant Cost Identifier', 'Identifies relevant costs',
            'Cost Accounting', ['CA'], ['Decision Analysis'],
            ['Incremental analysis', 'Opportunity cost', 'Sunk cost exclusion', 'Make vs buy'], 'ready'),

        createAgent('OC', 'Opportunity Cost Calculator', 'Calculates opportunity costs',
            'Cost Accounting', ['CA'], ['Opportunity Analysis'],
            ['Alternative evaluation', 'Resource constraints', 'Trade-off analysis', 'Decision support'], 'ready'),

        createAgent('DC', 'Differential Cost Analyzer', 'Analyzes differential costs',
            'Cost Accounting', ['CA'], ['Differential Analysis'],
            ['Alternative comparison', 'Incremental revenue', 'Relevant cost identification', 'Decision modeling'], 'ready'),

        createAgent('IC', 'Incremental Cost Calculator', 'Calculates incremental costs',
            'Cost Accounting', ['CA'], ['Incremental Analysis'],
            ['Volume changes', 'Capacity impacts', 'Step cost identification', 'Marginal analysis'], 'ready'),

        createAgent('MC', 'Marginal Cost Processor', 'Processes marginal costs',
            'Cost Accounting', ['CA'], ['Marginal Analysis'],
            ['Unit cost changes', 'Volume sensitivity', 'Pricing support', 'Production decisions'], 'ready'),

        createAgent('CC', 'Contract Cost Accountant', 'Manages contract costing',
            'Cost Accounting', ['CA'], ['Contract Accounting'],
            ['Cost accumulation', 'Progress billing', 'POC calculation', 'Change order management'], 'ready'),

        createAgent('GA', 'Government Accountant', 'Manages government contract accounting',
            'Cost Accounting', ['CA'], ['Government Contracts'],
            ['FAR compliance', 'Cost pool management', 'Indirect rate calculation', 'DCAA audit support'], 'ready'),

        createAgent('PM', 'Performance Measurer', 'Measures cost performance',
            'Cost Accounting', ['CA'], ['Performance Measurement'],
            ['KPI tracking', 'Benchmark comparison', 'Trend analysis', 'Dashboard maintenance'], 'ready')
    ],

    // Investor Relations Agents (Target: 45+)
    investorRelations: [
        // Earnings Management Workflow
        createAgent('EC', 'Earnings Compiler', 'Compiles quarterly earnings',
            'Investor Relations', ['IR'], ['Earnings Preparation'],
            ['Results consolidation', 'Adjustment tracking', 'Pro forma calculations', 'Segment reporting'], 'ready'),

        createAgent('ER', 'Earnings Reporter', 'Prepares earnings releases',
            'Investor Relations', ['IR'], ['Earnings Release'],
            ['Press release drafting', 'Key metrics highlighting', 'Quote preparation', 'Distribution management'], 'ready'),

        createAgent('CC', 'Conference Call Manager', 'Manages earnings calls',
            'Investor Relations', ['IR'], ['Conference Calls'],
            ['Script preparation', 'Q&A coordination', 'Webcast management', 'Transcript review'], 'ready'),

        createAgent('QP', 'Q&A Preparer', 'Prepares Q&A materials',
            'Investor Relations', ['IR'], ['Q&A Preparation'],
            ['Question anticipation', 'Response drafting', 'Fact checking', 'Backup data preparation'], 'ready'),

        createAgent('SG', 'Script Generator', 'Generates call scripts',
            'Investor Relations', ['IR'], ['Script Writing'],
            ['Opening remarks', 'Financial highlights', 'Strategic updates', 'Closing statements'], 'ready'),

        // Investor Communications Workflow
        createAgent('PM', 'Presentation Manager', 'Creates investor presentations',
            'Investor Relations', ['IR'], ['Presentations'],
            ['Slide creation', 'Data visualization', 'Narrative development', 'Version control'], 'ready'),

        createAgent('WM', 'Website Manager', 'Manages IR website',
            'Investor Relations', ['IR'], ['Digital Communications'],
            ['Content updates', 'Document posting', 'Event calendar', 'Analytics tracking'], 'ready'),

        createAgent('PR', 'Press Release Writer', 'Writes press releases',
            'Investor Relations', ['IR'], ['Press Releases'],
            ['News drafting', 'Regulatory compliance', 'Quote integration', 'Distribution planning'], 'ready'),

        createAgent('SM', 'Social Media Manager', 'Manages IR social media',
            'Investor Relations', ['IR'], ['Social Media'],
            ['Content planning', 'Post scheduling', 'Engagement monitoring', 'Compliance checking'], 'ready'),

        createAgent('NM', 'News Monitor', 'Monitors news and media',
            'Investor Relations', ['IR'], ['Media Monitoring'],
            ['Coverage tracking', 'Sentiment analysis', 'Competitive monitoring', 'Alert generation'], 'ready'),

        // Shareholder Management Workflow
        createAgent('SA', 'Shareholder Analyzer', 'Analyzes shareholder base',
            'Investor Relations', ['IR'], ['Shareholder Analysis'],
            ['Ownership tracking', 'Movement analysis', 'Peer comparison', 'Targeting recommendations'], 'ready'),

        createAgent('IR', 'Investor Registry Manager', 'Manages investor database',
            'Investor Relations', ['IR'], ['Database Management'],
            ['Contact management', 'Interaction tracking', 'Preference recording', 'Segmentation support'], 'ready'),

        createAgent('IC', 'Investment Community Manager', 'Manages investor relationships',
            'Investor Relations', ['IR'], ['Relationship Management'],
            ['Meeting coordination', 'Follow-up tracking', 'Feedback collection', 'Relationship scoring'], 'ready'),

        createAgent('IF', 'Investor Feedback Collector', 'Collects investor feedback',
            'Investor Relations', ['IR'], ['Feedback Management'],
            ['Survey management', 'Interview coordination', 'Perception tracking', 'Action planning'], 'ready'),

        createAgent('AM', 'Annual Meeting Manager', 'Manages annual meetings',
            'Investor Relations', ['IR'], ['Annual Meetings'],
            ['Logistics coordination', 'Material preparation', 'Proxy management', 'Vote tabulation'], 'ready'),

        // Market Intelligence Workflow
        createAgent('SC', 'Stock Surveillance Monitor', 'Monitors stock activity',
            'Investor Relations', ['IR'], ['Stock Monitoring'],
            ['Price tracking', 'Volume analysis', 'Unusual activity alerts', 'Technical indicators'], 'ready'),

        createAgent('CI', 'Competitive Intelligence Gatherer', 'Gathers competitive intel',
            'Investor Relations', ['IR'], ['Competitive Analysis'],
            ['Peer monitoring', 'Industry tracking', 'Best practice identification', 'Positioning analysis'], 'ready'),

        createAgent('AC', 'Analyst Coverage Tracker', 'Tracks analyst coverage',
            'Investor Relations', ['IR'], ['Analyst Relations'],
            ['Coverage monitoring', 'Estimate tracking', 'Report analysis', 'Relationship management'], 'ready'),

        createAgent('CM', 'Consensus Manager', 'Manages consensus estimates',
            'Investor Relations', ['IR'], ['Consensus Management'],
            ['Estimate collection', 'Range analysis', 'Guidance comparison', 'Surprise prediction'], 'ready'),

        createAgent('MS', 'Market Sentiment Analyzer', 'Analyzes market sentiment',
            'Investor Relations', ['IR'], ['Sentiment Analysis'],
            ['News sentiment', 'Social sentiment', 'Analyst tone', 'Investor perception'], 'ready'),

        // Regulatory and Compliance Workflow
        createAgent('RD', 'Regulatory Disclosure Manager', 'Manages regulatory disclosures',
            'Investor Relations', ['IR'], ['Regulatory Compliance'],
            ['Filing preparation', 'Deadline tracking', 'Review coordination', 'Submission management'], 'ready'),

        createAgent('FD', 'Fair Disclosure Monitor', 'Ensures Reg FD compliance',
            'Investor Relations', ['IR'], ['Fair Disclosure'],
            ['Disclosure tracking', 'Materiality assessment', 'Selective disclosure prevention', 'Training support'], 'ready'),

        createAgent('IT', 'Insider Trading Monitor', 'Monitors insider trading',
            'Investor Relations', ['IR'], ['Insider Compliance'],
            ['Transaction tracking', 'Blackout management', 'Filing coordination', 'Compliance reporting'], 'ready'),

        createAgent('PS', 'Proxy Statement Preparer', 'Prepares proxy statements',
            'Investor Relations', ['IR'], ['Proxy Preparation'],
            ['Document drafting', 'Compensation disclosure', 'Governance reporting', 'Proposal management'], 'ready'),

        createAgent('CG', 'Corporate Governance Reporter', 'Reports on governance',
            'Investor Relations', ['IR'], ['Governance Reporting'],
            ['Board reporting', 'Committee updates', 'Policy documentation', 'Best practice tracking'], 'ready'),

        // Event Management Workflow
        createAgent('RC', 'Roadshow Coordinator', 'Coordinates investor roadshows',
            'Investor Relations', ['IR'], ['Roadshow Management'],
            ['Schedule planning', 'Meeting coordination', 'Material preparation', 'Feedback collection'], 'ready'),

        createAgent('ME', 'Marketing Event Coordinator', 'Coordinates IR events',
            'Investor Relations', ['IR'], ['Event Management'],
            ['Conference planning', 'Investor days', 'Site visits', 'Virtual events'], 'ready'),

        createAgent('VI', 'Virtual Investor Day Manager', 'Manages virtual events',
            'Investor Relations', ['IR'], ['Virtual Events'],
            ['Platform management', 'Content coordination', 'Attendee engagement', 'Analytics tracking'], 'ready'),

        createAgent('FC', 'Financial Calendar Manager', 'Manages financial calendar',
            'Investor Relations', ['IR'], ['Calendar Management'],
            ['Event scheduling', 'Blackout periods', 'Earnings dates', 'Conference tracking'], 'ready'),

        createAgent('BR', 'Board Reporter', 'Reports to board on IR matters',
            'Investor Relations', ['IR'], ['Board Reporting'],
            ['Activity summaries', 'Market updates', 'Shareholder feedback', 'Strategy recommendations'], 'ready'),

        // Strategic Communications Workflow
        createAgent('GC', 'Guidance Calculator', 'Develops financial guidance',
            'Investor Relations', ['IR', 'FPA'], ['Guidance Management'],
            ['Range setting', 'Scenario modeling', 'Sensitivity analysis', 'Communication planning'], 'ready'),

        createAgent('MA', 'M&A Communicator', 'Manages M&A communications',
            'Investor Relations', ['IR'], ['M&A Communications'],
            ['Deal announcement', 'Integration updates', 'Synergy tracking', 'Stakeholder messaging'], 'ready'),

        createAgent('CR', 'Crisis Communicator', 'Manages crisis communications',
            'Investor Relations', ['IR'], ['Crisis Management'],
            ['Response planning', 'Message development', 'Stakeholder coordination', 'Media management'], 'ready'),

        createAgent('SR', 'Sustainability Reporter', 'Reports on ESG matters',
            'Investor Relations', ['IR'], ['ESG Reporting'],
            ['Metric tracking', 'Report preparation', 'Framework compliance', 'Stakeholder engagement'], 'ready'),

        createAgent('DC', 'Dividend Communicator', 'Communicates dividend information',
            'Investor Relations', ['IR'], ['Dividend Communications'],
            ['Announcement preparation', 'Policy explanation', 'Yield analysis', 'Peer comparison'], 'ready'),

        // Additional IR Agents
        createAgent('PC', 'Peer Comparator', 'Performs peer comparisons',
            'Investor Relations', ['IR'], ['Peer Analysis'],
            ['Multiple comparison', 'Performance ranking', 'Best practice identification', 'Gap analysis'], 'ready'),

        createAgent('BM', 'Benchmark Manager', 'Manages performance benchmarks',
            'Investor Relations', ['IR'], ['Benchmarking'],
            ['Index comparison', 'Sector analysis', 'Geographic comparison', 'Size-adjusted metrics'], 'ready'),

        createAgent('RA', 'Rating Agency Liaison', 'Manages rating agency relations',
            'Investor Relations', ['IR', 'CF'], ['Rating Agencies'],
            ['Meeting coordination', 'Information provision', 'Rating defense', 'Outlook management'], 'ready'),

        createAgent('AT', 'Acquisition Tracker', 'Tracks acquisition integration',
            'Investor Relations', ['IR'], ['Integration Communications'],
            ['Milestone tracking', 'Synergy updates', 'Performance reporting', 'Success metrics'], 'ready'),

        createAgent('CS', 'Competitive Strategy Analyst', 'Analyzes competitive positioning',
            'Investor Relations', ['IR'], ['Strategic Analysis'],
            ['Market positioning', 'Competitive advantages', 'Threat assessment', 'Opportunity identification'], 'ready'),

        createAgent('TD', 'Trading Data Analyzer', 'Analyzes trading data',
            'Investor Relations', ['IR'], ['Trading Analysis'],
            ['Volume patterns', 'Price correlation', 'Options activity', 'Short interest tracking'], 'ready'),

        createAgent('SV', 'Share Value Tracker', 'Tracks shareholder value',
            'Investor Relations', ['IR'], ['Value Tracking'],
            ['TSR calculation', 'Value creation analysis', 'Return attribution', 'Peer comparison'], 'ready'),

        createAgent('EG', 'Engagement Gauge', 'Measures investor engagement',
            'Investor Relations', ['IR'], ['Engagement Measurement'],
            ['Interaction tracking', 'Quality scoring', 'Reach analysis', 'ROI measurement'], 'ready'),

        createAgent('TA', 'Targeting Assistant', 'Assists in investor targeting',
            'Investor Relations', ['IR'], ['Investor Targeting'],
            ['Prospect identification', 'Fit scoring', 'Outreach planning', 'Success tracking'], 'ready'),

        createAgent('VA', 'Valuation Advocate', 'Advocates for proper valuation',
            'Investor Relations', ['IR'], ['Valuation Management'],
            ['Multiple analysis', 'Discount investigation', 'Story refinement', 'Perception management'], 'ready'),

        createAgent('LP', 'Long-term Planner', 'Plans long-term IR strategy',
            'Investor Relations', ['IR'], ['Strategic Planning'],
            ['Goal setting', 'Program development', 'Resource planning', 'Success measurement'], 'ready')
    ]
};

// Summary statistics
export const AgentStatistics = {
    totalAgents:
        ComprehensiveAIAgents.procureToPay.length +
        ComprehensiveAIAgents.orderToCash.length +
        ComprehensiveAIAgents.recordToReport.length +
        ComprehensiveAIAgents.fpAndA.length +
        ComprehensiveAIAgents.corporateFinance.length +
        ComprehensiveAIAgents.costAccounting.length +
        ComprehensiveAIAgents.investorRelations.length +
        ComprehensiveAIAgents.crossFunctionalAgents.length,

    byFunction: {
        procureToPay: ComprehensiveAIAgents.procureToPay.length,
        orderToCash: ComprehensiveAIAgents.orderToCash.length,
        recordToReport: ComprehensiveAIAgents.recordToReport.length,
        fpAndA: ComprehensiveAIAgents.fpAndA.length,
        corporateFinance: ComprehensiveAIAgents.corporateFinance.length,
        costAccounting: ComprehensiveAIAgents.costAccounting.length,
        investorRelations: ComprehensiveAIAgents.investorRelations.length,
        crossFunctional: ComprehensiveAIAgents.crossFunctionalAgents.length
    },

    byStatus: {
        ready: ComprehensiveAIAgents.procureToPay.filter(a => a.status === 'ready').length +
            ComprehensiveAIAgents.orderToCash.filter(a => a.status === 'ready').length +
            ComprehensiveAIAgents.recordToReport.filter(a => a.status === 'ready').length +
            ComprehensiveAIAgents.fpAndA.filter(a => a.status === 'ready').length +
            ComprehensiveAIAgents.corporateFinance.filter(a => a.status === 'ready').length +
            ComprehensiveAIAgents.costAccounting.filter(a => a.status === 'ready').length +
            ComprehensiveAIAgents.investorRelations.filter(a => a.status === 'ready').length +
            ComprehensiveAIAgents.crossFunctionalAgents.filter(a => a.status === 'ready').length,
        inDevelopment: ComprehensiveAIAgents.procureToPay.filter(a => a.status === 'in-development').length +
            ComprehensiveAIAgents.orderToCash.filter(a => a.status === 'in-development').length +
            ComprehensiveAIAgents.recordToReport.filter(a => a.status === 'in-development').length +
            ComprehensiveAIAgents.fpAndA.filter(a => a.status === 'in-development').length +
            ComprehensiveAIAgents.corporateFinance.filter(a => a.status === 'in-development').length +
            ComprehensiveAIAgents.costAccounting.filter(a => a.status === 'in-development').length +
            ComprehensiveAIAgents.investorRelations.filter(a => a.status === 'in-development').length +
            ComprehensiveAIAgents.crossFunctionalAgents.filter(a => a.status === 'in-development').length
    }
};

// Helper function to get all agents for a functional tower
export function getAgentsForTower(towerName: string): AIAgentComprehensive[] {
    const towerMapping: { [key: string]: keyof typeof ComprehensiveAIAgents } = {
        'Procure to Pay': 'procureToPay',
        'Order to Cash': 'orderToCash',
        'Controllership': 'recordToReport',
        'FP&A': 'fpAndA',
        'Corporate Finance': 'corporateFinance',
        'Cost Accounting': 'costAccounting',
        'Investor Relations': 'investorRelations'
    };

    const categoryKey = towerMapping[towerName];
    if (!categoryKey || !ComprehensiveAIAgents[categoryKey]) {
        return [];
    }

    // Get function-specific agents
    const functionAgents = ComprehensiveAIAgents[categoryKey] || [];

    // Get cross-functional agents that support this tower
    const crossFunctionalForTower = ComprehensiveAIAgents.crossFunctionalAgents.filter(agent => {
        const functionAbbreviations: { [key: string]: string } = {
            'Procure to Pay': 'P2P',
            'Order to Cash': 'O2C',
            'Controllership': 'R2R',
            'FP&A': 'FPA',
            'Corporate Finance': 'CF',
            'Cost Accounting': 'CA',
            'Investor Relations': 'IR'
        };

        return agent.functions.includes(functionAbbreviations[towerName]);
    });

    return [...functionAgents, ...crossFunctionalForTower];
} 