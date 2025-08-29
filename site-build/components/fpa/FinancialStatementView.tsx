'use client';

import { BalanceSheet, CashFlow, PLStatement } from '@/lib/cfo-analytics-types';
import {
    Brain,
    Check,
    ChevronDown,
    ChevronRight,
    Edit3,
    User,
    X
} from 'lucide-react';
import { useState } from 'react';

interface FinancialStatementViewProps {
    plStatement: PLStatement;
    balanceSheet: BalanceSheet;
    cashFlow: CashFlow;
    onCFOAdjustment: (statement: string, line: string, adjustment: number) => void;
}

export default function FinancialStatementView({
    plStatement,
    balanceSheet,
    cashFlow,
    onCFOAdjustment
}: FinancialStatementViewProps) {
    const [activeStatement, setActiveStatement] = useState<'pl' | 'bs' | 'cf'>('pl');
    const [editingCell, setEditingCell] = useState<string | null>(null);
    const [tempAdjustment, setTempAdjustment] = useState<number>(0);
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        'opex': true,
        'assets': true,
        'liabilities': true,
        'operating': true,
        'investing': true,
        'financing': true
    });

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    const formatPercentage = (value: number) => {
        return `${(value * 100).toFixed(1)}%`;
    };

    const getVarianceColor = (variance: number, isPositiveGood: boolean = true) => {
        if (variance === 0) return 'text-gray-600';
        if (isPositiveGood) {
            return variance > 0 ? 'text-green-600' : 'text-red-600';
        } else {
            return variance < 0 ? 'text-green-600' : 'text-red-600';
        }
    };

    const getConfidenceColor = (confidence: number) => {
        if (confidence >= 90) return 'text-green-600';
        if (confidence >= 80) return 'text-yellow-600';
        return 'text-red-600';
    };

    const handleEdit = (lineItem: string, currentAdjustment: number) => {
        setEditingCell(lineItem);
        setTempAdjustment(currentAdjustment);
    };

    const handleSave = (statement: string, lineItem: string) => {
        onCFOAdjustment(statement, lineItem, tempAdjustment);
        setEditingCell(null);
    };

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const renderFinancialLine = (
        label: string,
        data: any,
        isPercentage: boolean = false,
        isPositiveGood: boolean = true,
        indent: number = 0,
        isBold: boolean = false
    ) => {
        const variance = ((data.finalForecast - data.mlForecast) / data.mlForecast) * 100;
        const isEditing = editingCell === label;

        return (
            <tr className={`${isBold ? 'font-semibold bg-gray-50' : ''} hover:bg-gray-50`}>
                <td className={`px-6 py-3 text-sm text-gray-900 ${indent > 0 ? `pl-${6 + indent * 4}` : ''}`}>
                    {label}
                </td>
                <td className="px-6 py-3 text-sm text-gray-600 text-right">
                    <div className="flex items-center justify-end space-x-1">
                        <Brain className="h-3 w-3 text-blue-500" />
                        <span>{isPercentage ? formatPercentage(data.mlForecast) : formatCurrency(data.mlForecast)}</span>
                    </div>
                </td>
                <td className="px-6 py-3 text-sm text-gray-600 text-right">
                    {isEditing ? (
                        <div className="flex items-center justify-end space-x-2">
                            <input
                                type="number"
                                value={tempAdjustment}
                                onChange={(e) => setTempAdjustment(parseFloat(e.target.value) || 0)}
                                className="w-24 px-2 py-1 border rounded text-sm"
                                autoFocus
                            />
                            <button
                                onClick={() => handleSave(activeStatement, label)}
                                className="text-green-600 hover:text-green-700"
                            >
                                <Check className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => setEditingCell(null)}
                                className="text-red-600 hover:text-red-700"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-end space-x-2">
                            <User className="h-3 w-3 text-purple-500" />
                            <span className={data.cfoAdjustment !== 0 ? 'text-purple-600 font-medium' : ''}>
                                {isPercentage ? formatPercentage(data.cfoAdjustment) : formatCurrency(data.cfoAdjustment)}
                            </span>
                            <button
                                onClick={() => handleEdit(label, data.cfoAdjustment)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Edit3 className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                            </button>
                        </div>
                    )}
                </td>
                <td className={`px-6 py-3 text-sm text-right ${isBold ? 'font-bold' : 'font-medium'}`}>
                    {isPercentage ? formatPercentage(data.finalForecast) : formatCurrency(data.finalForecast)}
                </td>
                <td className={`px-6 py-3 text-sm text-right ${getVarianceColor(variance, isPositiveGood)}`}>
                    {variance > 0 ? '+' : ''}{variance.toFixed(1)}%
                </td>
                <td className={`px-6 py-3 text-sm text-right ${getConfidenceColor(data.confidence)}`}>
                    {data.confidence}%
                </td>
            </tr>
        );
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Statement Selector */}
            <div className="border-b border-gray-200">
                <div className="flex">
                    <button
                        onClick={() => setActiveStatement('pl')}
                        className={`flex-1 px-6 py-4 text-sm font-medium ${activeStatement === 'pl'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        P&L Statement
                    </button>
                    <button
                        onClick={() => setActiveStatement('bs')}
                        className={`flex-1 px-6 py-4 text-sm font-medium ${activeStatement === 'bs'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Balance Sheet
                    </button>
                    <button
                        onClick={() => setActiveStatement('cf')}
                        className={`flex-1 px-6 py-4 text-sm font-medium ${activeStatement === 'cf'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Cash Flow
                    </button>
                </div>
            </div>

            {/* Financial Statement Content */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {activeStatement === 'pl' && 'Profit & Loss Statement'}
                        {activeStatement === 'bs' && 'Balance Sheet'}
                        {activeStatement === 'cf' && 'Cash Flow Statement'}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-2">
                            <Brain className="h-4 w-4 text-blue-500" />
                            <span className="text-gray-600">AI Forecast</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-purple-500" />
                            <span className="text-gray-600">CFO Adjustment</span>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Line Item
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ML Forecast
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    CFO Adjustment
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Final Forecast
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Variance %
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Confidence
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 group">
                            {activeStatement === 'pl' && (
                                <>
                                    {renderFinancialLine('Revenue', plStatement.revenue, false, true, 0, true)}
                                    {renderFinancialLine('Cost of Goods Sold', plStatement.cogs, false, false)}
                                    {renderFinancialLine('Gross Profit', plStatement.grossProfit, false, true, 0, true)}
                                    {renderFinancialLine('Gross Margin %', plStatement.grossMargin, true, true)}

                                    <tr>
                                        <td colSpan={6} className="px-6 py-2">
                                            <button
                                                onClick={() => toggleSection('opex')}
                                                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                                            >
                                                {expandedSections.opex ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                                <span>Operating Expenses</span>
                                            </button>
                                        </td>
                                    </tr>

                                    {expandedSections.opex && (
                                        <>
                                            {renderFinancialLine('Sales & Marketing', plStatement.opex.sales, false, false, 1)}
                                            {renderFinancialLine('Marketing', plStatement.opex.marketing, false, false, 1)}
                                            {renderFinancialLine('R&D', plStatement.opex.rd, false, false, 1)}
                                            {renderFinancialLine('G&A', plStatement.opex.ga, false, false, 1)}
                                        </>
                                    )}

                                    {renderFinancialLine('Total OpEx', plStatement.opex.total, false, false, 0, true)}
                                    {renderFinancialLine('EBITDA', plStatement.ebitda, false, true, 0, true)}
                                    {renderFinancialLine('EBITDA Margin %', plStatement.ebitdaMargin, true, true)}
                                    {renderFinancialLine('Depreciation', plStatement.depreciation, false, false)}
                                    {renderFinancialLine('EBIT', plStatement.ebit, false, true, 0, true)}
                                    {renderFinancialLine('Interest Expense', plStatement.interestExpense, false, false)}
                                    {renderFinancialLine('Tax Expense', plStatement.taxExpense, false, false)}
                                    {renderFinancialLine('Net Income', plStatement.netIncome, false, true, 0, true)}
                                    {renderFinancialLine('Net Margin %', plStatement.netMargin, true, true)}
                                    {renderFinancialLine('EPS', plStatement.eps, false, true)}
                                </>
                            )}

                            {activeStatement === 'bs' && (
                                <>
                                    <tr>
                                        <td colSpan={6} className="px-6 py-2 bg-gray-50 font-semibold">Assets</td>
                                    </tr>
                                    {renderFinancialLine('Cash & Equivalents', balanceSheet.assets.cash, false, true, 1)}
                                    {renderFinancialLine('Accounts Receivable', balanceSheet.assets.accountsReceivable, false, true, 1)}
                                    {renderFinancialLine('Inventory', balanceSheet.assets.inventory, false, true, 1)}
                                    {renderFinancialLine('Current Assets', balanceSheet.assets.currentAssets, false, true, 0, true)}
                                    {renderFinancialLine('PP&E', balanceSheet.assets.ppe, false, true, 1)}
                                    {renderFinancialLine('Total Assets', balanceSheet.assets.totalAssets, false, true, 0, true)}

                                    <tr>
                                        <td colSpan={6} className="px-6 py-2 bg-gray-50 font-semibold">Liabilities</td>
                                    </tr>
                                    {renderFinancialLine('Accounts Payable', balanceSheet.liabilities.accountsPayable, false, false, 1)}
                                    {renderFinancialLine('Current Liabilities', balanceSheet.liabilities.currentLiabilities, false, false, 0, true)}
                                    {renderFinancialLine('Long-term Debt', balanceSheet.liabilities.longTermDebt, false, false, 1)}
                                    {renderFinancialLine('Total Liabilities', balanceSheet.liabilities.totalLiabilities, false, false, 0, true)}

                                    <tr>
                                        <td colSpan={6} className="px-6 py-2 bg-gray-50 font-semibold">Equity</td>
                                    </tr>
                                    {renderFinancialLine('Total Equity', balanceSheet.equity.totalEquity, false, true, 0, true)}
                                </>
                            )}

                            {activeStatement === 'cf' && (
                                <>
                                    <tr>
                                        <td colSpan={6} className="px-6 py-2 bg-gray-50 font-semibold">Operating Activities</td>
                                    </tr>
                                    {renderFinancialLine('Net Income', cashFlow.operating.netIncome, false, true, 1)}
                                    {renderFinancialLine('Depreciation', cashFlow.operating.depreciation, false, true, 1)}
                                    {renderFinancialLine('Working Capital Changes', cashFlow.operating.workingCapitalChanges, false, false, 1)}
                                    {renderFinancialLine('Operating Cash Flow', cashFlow.operating.totalOperating, false, true, 0, true)}

                                    <tr>
                                        <td colSpan={6} className="px-6 py-2 bg-gray-50 font-semibold">Investing Activities</td>
                                    </tr>
                                    {renderFinancialLine('CapEx', cashFlow.investing.capex, false, false, 1)}
                                    {renderFinancialLine('Investing Cash Flow', cashFlow.investing.totalInvesting, false, false, 0, true)}

                                    <tr>
                                        <td colSpan={6} className="px-6 py-2 bg-gray-50 font-semibold">Financing Activities</td>
                                    </tr>
                                    {renderFinancialLine('Debt Issuance', cashFlow.financing.debtIssuance, false, true, 1)}
                                    {renderFinancialLine('Dividends', cashFlow.financing.dividends, false, false, 1)}
                                    {renderFinancialLine('Financing Cash Flow', cashFlow.financing.totalFinancing, false, true, 0, true)}

                                    {renderFinancialLine('Net Cash Flow', cashFlow.netCashFlow, false, true, 0, true)}
                                    {renderFinancialLine('Ending Cash', cashFlow.endingCash, false, true, 0, true)}
                                </>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* CFO Notes Section */}
                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="text-sm font-semibold text-purple-900 mb-2">CFO Strategic Notes</h4>
                    <textarea
                        className="w-full px-3 py-2 text-sm border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        rows={3}
                        placeholder="Add strategic context for your adjustments..."
                    />
                </div>
            </div>
        </div>
    );
} 