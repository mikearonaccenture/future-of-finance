'use client';

import { 
    RiskMetrics, 
    SensitivityAnalysis, 
    WorkingCapitalMetrics,
    BusinessDriver 
} from '@/lib/cfo-analytics-types';
import { motion } from 'framer-motion';
import {
    AlertTriangle,
    Shield,
    TrendingUp,
    TrendingDown,
    Activity,
    DollarSign,
    BarChart3,
    Clock,
    Target,
    Gauge,
    AlertCircle,
    CheckCircle,
    Package
} from 'lucide-react';
import { useState } from 'react';

interface RiskSensitivityViewProps {
    riskMetrics: RiskMetrics;
    sensitivityAnalysis: SensitivityAnalysis[];
    workingCapital: WorkingCapitalMetrics;
    businessDrivers: BusinessDriver[];
    onCFODecision: (area: string, decision: string) => void;
}

export default function RiskSensitivityView({
    riskMetrics,
    sensitivityAnalysis,
    workingCapital,
    businessDrivers,
    onCFODecision
}: RiskSensitivityViewProps) {
    const [activeTab, setActiveTab] = useState<'risk' | 'sensitivity' | 'working-capital' | 'drivers'>('risk');
    const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            notation: 'compact',
            maximumSignificantDigits: 3
        }).format(value);
    };

    const formatPercentage = (value: number) => {
        return `${(value * 100).toFixed(1)}%`;
    };

    const getRiskLevel = (metric: string, value: number): { level: string; color: string } => {
        // Risk thresholds would be customized per company
        if (metric === 'currentRatio') {
            if (value >= 2.0) return { level: 'Low', color: 'text-green-600 bg-green-50' };
            if (value >= 1.5) return { level: 'Medium', color: 'text-yellow-600 bg-yellow-50' };
            return { level: 'High', color: 'text-red-600 bg-red-50' };
        }
        if (metric === 'debtToEquity') {
            if (value <= 0.5) return { level: 'Low', color: 'text-green-600 bg-green-50' };
            if (value <= 1.0) return { level: 'Medium', color: 'text-yellow-600 bg-yellow-50' };
            return { level: 'High', color: 'text-red-600 bg-red-50' };
        }
        return { level: 'Medium', color: 'text-yellow-600 bg-yellow-50' };
    };

    const getDriverIcon = (category: string) => {
        switch (category) {
            case 'volume': return Target;
            case 'price': return DollarSign;
            case 'cost': return TrendingDown;
            case 'efficiency': return Activity;
            case 'market': return BarChart3;
            default: return Activity;
        }
    };

    return (
        <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="border-b border-gray-200">
                    <div className="flex">
                        <button
                            onClick={() => setActiveTab('risk')}
                            className={`flex-1 px-6 py-3 text-sm font-medium ${
                                activeTab === 'risk'
                                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Risk Metrics
                        </button>
                        <button
                            onClick={() => setActiveTab('sensitivity')}
                            className={`flex-1 px-6 py-3 text-sm font-medium ${
                                activeTab === 'sensitivity'
                                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Sensitivity Analysis
                        </button>
                        <button
                            onClick={() => setActiveTab('working-capital')}
                            className={`flex-1 px-6 py-3 text-sm font-medium ${
                                activeTab === 'working-capital'
                                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Working Capital
                        </button>
                        <button
                            onClick={() => setActiveTab('drivers')}
                            className={`flex-1 px-6 py-3 text-sm font-medium ${
                                activeTab === 'drivers'
                                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Business Drivers
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    {/* Risk Metrics */}
                    {activeTab === 'risk' && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Enterprise Risk Dashboard</h3>
                                <button
                                    onClick={() => onCFODecision('risk', 'Review risk mitigation strategies')}
                                    className="px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100"
                                >
                                    Add CFO Action
                                </button>
                            </div>

                            {/* Risk Categories */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Liquidity Risk */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-sm font-semibold text-gray-900">Liquidity Risk</h4>
                                        <Shield className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Current Ratio</span>
                                            <div className="flex items-center space-x-2">
                                                <span className="font-medium">{riskMetrics.liquidityRisk.currentRatio.toFixed(2)}</span>
                                                <span className={`px-2 py-1 text-xs rounded-full ${getRiskLevel('currentRatio', riskMetrics.liquidityRisk.currentRatio).color}`}>
                                                    {getRiskLevel('currentRatio', riskMetrics.liquidityRisk.currentRatio).level}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Quick Ratio</span>
                                            <span className="font-medium">{riskMetrics.liquidityRisk.quickRatio.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Cash Burn Rate</span>
                                            <span className="font-medium">{formatCurrency(riskMetrics.liquidityRisk.cashBurnRate)}/mo</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Runway</span>
                                            <span className="font-medium text-green-600">{riskMetrics.liquidityRisk.runwayMonths.toFixed(1)} months</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Credit Risk */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-sm font-semibold text-gray-900">Credit Risk</h4>
                                        <Shield className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Debt/Equity</span>
                                            <div className="flex items-center space-x-2">
                                                <span className="font-medium">{riskMetrics.creditRisk.debtToEquity.toFixed(2)}</span>
                                                <span className={`px-2 py-1 text-xs rounded-full ${getRiskLevel('debtToEquity', riskMetrics.creditRisk.debtToEquity).color}`}>
                                                    {getRiskLevel('debtToEquity', riskMetrics.creditRisk.debtToEquity).level}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Interest Coverage</span>
                                            <span className="font-medium text-green-600">{riskMetrics.creditRisk.interestCoverage.toFixed(2)}x</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Credit Rating</span>
                                            <span className="font-medium">{riskMetrics.creditRisk.creditRating}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Operational Risk */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-sm font-semibold text-gray-900">Operational Risk</h4>
                                        <Activity className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Customer Concentration</span>
                                            <span className="font-medium">{formatPercentage(riskMetrics.operationalRisk.customerConcentration)}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Supplier Concentration</span>
                                            <span className="font-medium text-yellow-600">{formatPercentage(riskMetrics.operationalRisk.supplierConcentration)}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Inventory Obsolescence</span>
                                            <span className="font-medium">{formatPercentage(riskMetrics.operationalRisk.inventoryObsolescence)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Market Risk */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-sm font-semibold text-gray-900">Market Risk</h4>
                                        <BarChart3 className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Beta Coefficient</span>
                                            <span className="font-medium">{riskMetrics.marketRisk.betaCoefficient.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Currency Exposure</span>
                                            <span className="font-medium text-yellow-600">{formatPercentage(riskMetrics.marketRisk.currencyExposure)}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Commodity Exposure</span>
                                            <span className="font-medium text-yellow-600">{formatPercentage(riskMetrics.marketRisk.commodityExposure)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Risk Alert */}
                            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <div className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-amber-900">CFO Risk Alert</h4>
                                        <p className="text-sm text-amber-800 mt-1">
                                            Currency and commodity exposure combined at 63% requires hedging review. 
                                            Supplier concentration risk elevated - consider diversification strategy.
                                        </p>
                                        <button className="mt-2 text-sm font-medium text-amber-700 hover:text-amber-800">
                                            Review Hedging Options →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Sensitivity Analysis */}
                    {activeTab === 'sensitivity' && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Scenario & Sensitivity Analysis</h3>
                                <button
                                    onClick={() => onCFODecision('sensitivity', 'Run Monte Carlo simulation')}
                                    className="px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100"
                                >
                                    Run Simulation
                                </button>
                            </div>

                            <div className="space-y-6">
                                {sensitivityAnalysis.map((analysis, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="p-4 bg-gray-50 border-b border-gray-200">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-semibold text-gray-900">{analysis.variable}</h4>
                                                <span className="text-sm text-gray-600">
                                                    Base Case: {formatCurrency(analysis.baseCase)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="space-y-3">
                                                {analysis.scenarios.map((scenario, sIndex) => (
                                                    <div
                                                        key={sIndex}
                                                        className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                                                        onClick={() => setSelectedScenario(`${index}-${sIndex}`)}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center space-x-3">
                                                                <div className={`p-2 rounded-lg ${
                                                                    scenario.change > 0 ? 'bg-red-50' : 
                                                                    scenario.change < 0 ? 'bg-green-50' : 
                                                                    'bg-gray-50'
                                                                }`}>
                                                                    {scenario.change > 0 ? (
                                                                        <TrendingUp className="h-4 w-4 text-red-600" />
                                                                    ) : scenario.change < 0 ? (
                                                                        <TrendingDown className="h-4 w-4 text-green-600" />
                                                                    ) : (
                                                                        <Activity className="h-4 w-4 text-gray-600" />
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    <p className="font-medium text-gray-900">{scenario.name}</p>
                                                                    <p className="text-sm text-gray-600">
                                                                        Change: {formatPercentage(scenario.change)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="text-sm text-gray-600">EBITDA Impact</p>
                                                                <p className={`font-semibold ${
                                                                    scenario.ebitdaImpact > 0 ? 'text-green-600' : 
                                                                    scenario.ebitdaImpact < 0 ? 'text-red-600' : 
                                                                    'text-gray-600'
                                                                }`}>
                                                                    {scenario.ebitdaImpact > 0 ? '+' : ''}
                                                                    {formatCurrency(scenario.ebitdaImpact)}
                                                                </p>
                                                                <p className="text-xs text-gray-500 mt-1">
                                                                    Probability: {formatPercentage(scenario.probability)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Probability-Weighted Outcome */}
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h4 className="text-sm font-semibold text-blue-900 mb-2">Probability-Weighted Financial Impact</h4>
                                <div className="grid grid-cols-3 gap-4 mt-3">
                                    <div>
                                        <p className="text-sm text-blue-700">Expected Revenue Impact</p>
                                        <p className="text-xl font-bold text-blue-900">+$2.8M</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-700">Expected EBITDA Impact</p>
                                        <p className="text-xl font-bold text-blue-900">-$1.2M</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-700">Expected Cash Flow Impact</p>
                                        <p className="text-xl font-bold text-blue-900">-$0.9M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Working Capital */}
                    {activeTab === 'working-capital' && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Working Capital Management</h3>
                                <button
                                    onClick={() => onCFODecision('working-capital', 'Optimize cash conversion cycle')}
                                    className="px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100"
                                >
                                    Optimization Plan
                                </button>
                            </div>

                            {/* Working Capital Metrics */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-sm font-medium text-gray-700">Days Sales Outstanding</h4>
                                        <Clock className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{workingCapital.dso.finalForecast.toFixed(0)} days</p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Target: 85 days • {workingCapital.dso.finalForecast > 85 ? 'Above' : 'Below'} target
                                    </p>
                                    <div className="mt-3 text-sm">
                                        <span className="text-gray-500">ML Forecast:</span>
                                        <span className="ml-2 font-medium">{workingCapital.dso.mlForecast.toFixed(0)} days</span>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-sm font-medium text-gray-700">Days Inventory Outstanding</h4>
                                        <Package className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{workingCapital.dio.finalForecast.toFixed(0)} days</p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Target: 110 days • {workingCapital.dio.finalForecast > 110 ? 'Above' : 'Below'} target
                                    </p>
                                    <div className="mt-3 text-sm">
                                        <span className="text-gray-500">ML Forecast:</span>
                                        <span className="ml-2 font-medium">{workingCapital.dio.mlForecast.toFixed(0)} days</span>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-sm font-medium text-gray-700">Days Payables Outstanding</h4>
                                        <DollarSign className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{workingCapital.dpo.finalForecast.toFixed(0)} days</p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Target: 70 days • {workingCapital.dpo.finalForecast < 70 ? 'Below' : 'Above'} target
                                    </p>
                                    <div className="mt-3 text-sm">
                                        <span className="text-gray-500">ML Forecast:</span>
                                        <span className="ml-2 font-medium">{workingCapital.dpo.mlForecast.toFixed(0)} days</span>
                                    </div>
                                </div>
                            </div>

                            {/* Cash Conversion Cycle */}
                            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                                <h4 className="text-lg font-semibold text-blue-900 mb-4">Cash Conversion Cycle</h4>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-3xl font-bold text-blue-900">
                                            {workingCapital.cashConversionCycle.finalForecast.toFixed(0)} days
                                        </p>
                                        <p className="text-sm text-blue-700 mt-1">
                                            DSO ({workingCapital.dso.finalForecast.toFixed(0)}) + 
                                            DIO ({workingCapital.dio.finalForecast.toFixed(0)}) - 
                                            DPO ({workingCapital.dpo.finalForecast.toFixed(0)})
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-blue-700">Industry Average</p>
                                        <p className="text-xl font-bold text-blue-900">135 days</p>
                                        <p className="text-sm text-green-600 mt-1">
                                            {workingCapital.cashConversionCycle.finalForecast < 135 ? '✓ Better' : '✗ Worse'} than average
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CFO Action Items */}
                            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <h4 className="text-sm font-semibold text-purple-900 mb-3">CFO Action Items</h4>
                                <ul className="space-y-2 text-sm text-purple-800">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>Implement early payment discounts to reduce DSO by 3 days</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>Negotiate extended payment terms with top 20% suppliers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>Implement JIT inventory for fast-moving SKUs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Business Drivers */}
                    {activeTab === 'drivers' && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Key Business Drivers Analysis</h3>
                                <button
                                    onClick={() => onCFODecision('drivers', 'Prioritize driver investments')}
                                    className="px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100"
                                >
                                    Investment Priority
                                </button>
                            </div>

                            <div className="space-y-4">
                                {businessDrivers.map((driver) => {
                                    const Icon = getDriverIcon(driver.category);
                                    return (
                                        <motion.div
                                            key={driver.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-start space-x-3">
                                                    <div className={`p-2 rounded-lg ${
                                                        driver.category === 'volume' ? 'bg-blue-50' :
                                                        driver.category === 'price' ? 'bg-green-50' :
                                                        driver.category === 'cost' ? 'bg-red-50' :
                                                        driver.category === 'efficiency' ? 'bg-purple-50' :
                                                        'bg-gray-50'
                                                    }`}>
                                                        <Icon className={`h-5 w-5 ${
                                                            driver.category === 'volume' ? 'text-blue-600' :
                                                            driver.category === 'price' ? 'text-green-600' :
                                                            driver.category === 'cost' ? 'text-red-600' :
                                                            driver.category === 'efficiency' ? 'text-purple-600' :
                                                            'text-gray-600'
                                                        }`} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-gray-900">{driver.name}</h4>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            Current: {driver.currentValue.toLocaleString()} → 
                                                            Forecast: {driver.forecastValue.toLocaleString()}
                                                        </p>
                                                        
                                                        {/* Impact Metrics */}
                                                        <div className="grid grid-cols-3 gap-4 mt-3">
                                                            <div>
                                                                <p className="text-xs text-gray-500">Revenue Impact</p>
                                                                <p className={`text-sm font-semibold ${
                                                                    driver.impact.revenue > 0 ? 'text-green-600' : 
                                                                    driver.impact.revenue < 0 ? 'text-red-600' : 
                                                                    'text-gray-600'
                                                                }`}>
                                                                    {driver.impact.revenue > 0 ? '+' : ''}
                                                                    {formatCurrency(driver.impact.revenue)}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500">Margin Impact</p>
                                                                <p className={`text-sm font-semibold ${
                                                                    driver.impact.margin > 0 ? 'text-green-600' : 
                                                                    driver.impact.margin < 0 ? 'text-red-600' : 
                                                                    'text-gray-600'
                                                                }`}>
                                                                    {driver.impact.margin > 0 ? '+' : ''}
                                                                    {formatPercentage(driver.impact.margin)}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500">Cash Flow Impact</p>
                                                                <p className={`text-sm font-semibold ${
                                                                    driver.impact.cashFlow > 0 ? 'text-green-600' : 
                                                                    driver.impact.cashFlow < 0 ? 'text-red-600' : 
                                                                    'text-gray-600'
                                                                }`}>
                                                                    {driver.impact.cashFlow > 0 ? '+' : ''}
                                                                    {formatCurrency(driver.impact.cashFlow)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Controllability & Timeline */}
                                                <div className="text-right">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                        driver.controllability === 'high' ? 'bg-green-100 text-green-800' :
                                                        driver.controllability === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                                    }`}>
                                                        {driver.controllability} control
                                                    </span>
                                                    <p className="text-xs text-gray-500 mt-2">{driver.leadTime}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Driver Summary */}
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                <h4 className="text-sm font-semibold text-gray-900 mb-3">Executive Summary</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div>
                                        <p className="text-xs text-gray-500">Total Revenue Impact</p>
                                        <p className="text-lg font-bold text-green-600">+$48.6M</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Total Margin Impact</p>
                                        <p className="text-lg font-bold text-green-600">+0.6%</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Total Cash Flow Impact</p>
                                        <p className="text-lg font-bold text-green-600">+$20.3M</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">High Control Drivers</p>
                                        <p className="text-lg font-bold text-blue-600">3 of 5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 