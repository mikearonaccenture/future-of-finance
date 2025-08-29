'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Calculator,
    ChevronDown,
    ChevronRight,
    Clipboard,
    Copy,
    Download,
    History,
    Lock,
    MessageSquare,
    Redo,
    Save,
    TrendingUp,
    Undo,
    Upload
} from 'lucide-react';
import { useRef, useState } from 'react';

interface CellData {
    value: number | null;
    type: 'manual' | 'calculated' | 'imported' | 'approved';
    note?: string;
    locked?: boolean;
    validation?: {
        min?: number;
        max?: number;
        error?: string;
    };
    history?: {
        timestamp: Date;
        oldValue: number | null;
        newValue: number | null;
        user: string;
    }[];
}

interface GridData {
    [rowId: string]: {
        [colId: string]: CellData;
    };
}

interface Product {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    sku: string;
    hierarchy: string[];
}

interface ForecastInputGridProps {
    products: Product[];
    periods: string[];
    initialData?: GridData;
    onSave?: (data: GridData) => void;
    readOnly?: boolean;
}

export default function ForecastInputGrid({
    products,
    periods,
    initialData = {},
    onSave,
    readOnly = false
}: ForecastInputGridProps) {
    const [gridData, setGridData] = useState<GridData>(initialData);
    const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());
    const [activeCell, setActiveCell] = useState<string | null>(null);
    const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
    const [undoStack, setUndoStack] = useState<GridData[]>([]);
    const [redoStack, setRedoStack] = useState<GridData[]>([]);
    const [showBulkOps, setShowBulkOps] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
    const [editingCell, setEditingCell] = useState<string | null>(null);
    const [copiedData, setCopiedData] = useState<CellData | null>(null);

    const gridRef = useRef<HTMLDivElement>(null);

    // Cell color coding based on type
    const getCellColor = (type: CellData['type']) => {
        switch (type) {
            case 'manual': return 'bg-white';
            case 'calculated': return 'bg-blue-50';
            case 'imported': return 'bg-yellow-50';
            case 'approved': return 'bg-green-50';
            default: return 'bg-white';
        }
    };

    // Handle cell value change
    const handleCellChange = (rowId: string, colId: string, value: number | null) => {
        const newData = { ...gridData };
        const cellKey = `${rowId}-${colId}`;

        // Add to undo stack
        setUndoStack(prev => [...prev, gridData]);
        setRedoStack([]);

        // Update cell
        if (!newData[rowId]) newData[rowId] = {};
        newData[rowId][colId] = {
            ...newData[rowId]?.[colId],
            value,
            type: 'manual',
            history: [
                ...(newData[rowId]?.[colId]?.history || []),
                {
                    timestamp: new Date(),
                    oldValue: gridData[rowId]?.[colId]?.value || null,
                    newValue: value,
                    user: 'Current User' // In real app, get from auth
                }
            ]
        };

        setGridData(newData);

        // Validate
        const validation = newData[rowId][colId].validation;
        if (validation && value !== null) {
            if (validation.min !== undefined && value < validation.min) {
                newData[rowId][colId].validation!.error = `Value must be >= ${validation.min}`;
            } else if (validation.max !== undefined && value > validation.max) {
                newData[rowId][colId].validation!.error = `Value must be <= ${validation.max}`;
            } else {
                delete newData[rowId][colId].validation!.error;
            }
        }
    };

    // Bulk operations
    const applyGrowthRate = (rate: number) => {
        const newData = { ...gridData };
        selectedCells.forEach(cellKey => {
            const [rowId, colId] = cellKey.split('-');
            const currentValue = newData[rowId]?.[colId]?.value || 0;
            if (!newData[rowId]) newData[rowId] = {};
            newData[rowId][colId] = {
                ...newData[rowId][colId],
                value: currentValue * (1 + rate / 100),
                type: 'calculated'
            };
        });
        setGridData(newData);
    };

    const copyFromPriorYear = () => {
        // Implementation for copying from prior year
        console.log('Copy from prior year');
    };

    const seasonalize = () => {
        // Implementation for seasonalization
        console.log('Apply seasonal factors');
    };

    // Context menu actions
    const handleContextMenu = (e: React.MouseEvent, rowId: string, colId: string) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY });
        setActiveCell(`${rowId}-${colId}`);
    };

    const handleCopy = () => {
        if (activeCell) {
            const [rowId, colId] = activeCell.split('-');
            setCopiedData(gridData[rowId]?.[colId] || null);
        }
        setContextMenu(null);
    };

    const handlePaste = () => {
        if (activeCell && copiedData) {
            const [rowId, colId] = activeCell.split('-');
            handleCellChange(rowId, colId, copiedData.value);
        }
        setContextMenu(null);
    };

    const handleFillRight = () => {
        if (activeCell) {
            const [rowId, activeColIndex] = activeCell.split('-');
            const colIndex = periods.indexOf(activeColIndex);
            const value = gridData[rowId]?.[activeColIndex]?.value;

            if (value !== null && colIndex >= 0) {
                const newData = { ...gridData };
                for (let i = colIndex + 1; i < periods.length; i++) {
                    if (!newData[rowId]) newData[rowId] = {};
                    newData[rowId][periods[i]] = {
                        ...newData[rowId][periods[i]],
                        value,
                        type: 'calculated'
                    };
                }
                setGridData(newData);
            }
        }
        setContextMenu(null);
    };

    // Undo/Redo
    const handleUndo = () => {
        if (undoStack.length > 0) {
            const previousState = undoStack[undoStack.length - 1];
            setRedoStack(prev => [...prev, gridData]);
            setUndoStack(prev => prev.slice(0, -1));
            setGridData(previousState);
        }
    };

    const handleRedo = () => {
        if (redoStack.length > 0) {
            const nextState = redoStack[redoStack.length - 1];
            setUndoStack(prev => [...prev, gridData]);
            setRedoStack(prev => prev.slice(0, -1));
            setGridData(nextState);
        }
    };

    // Calculate totals
    const calculateRowTotal = (rowId: string) => {
        return periods.reduce((sum, period) => {
            return sum + (gridData[rowId]?.[period]?.value || 0);
        }, 0);
    };

    const calculateColumnTotal = (colId: string) => {
        return products.reduce((sum, product) => {
            return sum + (gridData[product.id]?.[colId]?.value || 0);
        }, 0);
    };

    const formatValue = (value: number | null) => {
        if (value === null) return '';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    // Toggle category expansion
    const toggleCategory = (category: string) => {
        setExpandedCategories(prev => {
            const newSet = new Set(prev);
            if (newSet.has(category)) {
                newSet.delete(category);
            } else {
                newSet.add(category);
            }
            return newSet;
        });
    };

    // Group products by category
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, Product[]>);

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Toolbar */}
            <div className="border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={handleUndo}
                            disabled={undoStack.length === 0}
                            className="p-2 text-gray-600 hover:text-gray-900 disabled:text-gray-300"
                        >
                            <Undo className="h-4 w-4" />
                        </button>
                        <button
                            onClick={handleRedo}
                            disabled={redoStack.length === 0}
                            className="p-2 text-gray-600 hover:text-gray-900 disabled:text-gray-300"
                        >
                            <Redo className="h-4 w-4" />
                        </button>
                        <div className="h-6 w-px bg-gray-300 mx-2" />
                        <button
                            onClick={() => setShowBulkOps(!showBulkOps)}
                            className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md flex items-center space-x-2"
                        >
                            <Calculator className="h-4 w-4" />
                            <span>Bulk Operations</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${showBulkOps ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md flex items-center space-x-2">
                            <Upload className="h-4 w-4" />
                            <span>Import</span>
                        </button>
                        <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md flex items-center space-x-2">
                            <Download className="h-4 w-4" />
                            <span>Export</span>
                        </button>
                        <button
                            onClick={() => onSave?.(gridData)}
                            className="px-4 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md flex items-center space-x-2"
                        >
                            <Save className="h-4 w-4" />
                            <span>Save</span>
                        </button>
                    </div>
                </div>

                {/* Bulk Operations */}
                <AnimatePresence>
                    {showBulkOps && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-4 pt-4 border-t border-gray-200"
                        >
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => applyGrowthRate(5)}
                                    className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                                >
                                    Apply +5% Growth
                                </button>
                                <button
                                    onClick={seasonalize}
                                    className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                                >
                                    Seasonalize
                                </button>
                                <button
                                    onClick={copyFromPriorYear}
                                    className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                                >
                                    Copy Prior Year
                                </button>
                                <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md">
                                    Copy Latest Actuals
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Grid */}
            <div className="relative overflow-auto" style={{ maxHeight: '600px' }}>
                <table className="w-full">
                    <thead className="sticky top-0 z-20 bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="sticky left-0 z-30 bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                                Product
                            </th>
                            {periods.map(period => (
                                <th key={period} className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {period}
                                </th>
                            ))}
                            <th className="sticky right-0 z-20 bg-gray-50 px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-l border-gray-200">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
                            <React.Fragment key={category}>
                                {/* Category Header */}
                                <tr className="bg-gray-50">
                                    <td
                                        colSpan={periods.length + 2}
                                        className="px-4 py-2 text-sm font-medium text-gray-900"
                                    >
                                        <button
                                            onClick={() => toggleCategory(category)}
                                            className="flex items-center space-x-2"
                                        >
                                            {expandedCategories.has(category) ? (
                                                <ChevronDown className="h-4 w-4" />
                                            ) : (
                                                <ChevronRight className="h-4 w-4" />
                                            )}
                                            <span>{category}</span>
                                            <span className="text-gray-500">({categoryProducts.length} products)</span>
                                        </button>
                                    </td>
                                </tr>

                                {/* Products */}
                                {expandedCategories.has(category) && categoryProducts.map(product => (
                                    <tr key={product.id} className="hover:bg-gray-50">
                                        <td className="sticky left-0 z-10 bg-white px-4 py-2 text-sm text-gray-900 border-r border-gray-200">
                                            <div>
                                                <div className="font-medium">{product.name}</div>
                                                <div className="text-xs text-gray-500">{product.sku}</div>
                                            </div>
                                        </td>
                                        {periods.map(period => {
                                            const cellData = gridData[product.id]?.[period];
                                            const cellKey = `${product.id}-${period}`;
                                            const isEditing = editingCell === cellKey;
                                            const hasError = cellData?.validation?.error;

                                            return (
                                                <td
                                                    key={period}
                                                    className={`px-2 py-1 text-sm text-gray-900 text-center relative ${getCellColor(cellData?.type || 'manual')
                                                        } ${hasError ? 'ring-2 ring-red-500' : ''} ${selectedCells.has(cellKey) ? 'ring-2 ring-blue-500' : ''
                                                        }`}
                                                    onContextMenu={(e) => handleContextMenu(e, product.id, period)}
                                                    onClick={() => {
                                                        if (!readOnly && !cellData?.locked) {
                                                            setEditingCell(cellKey);
                                                        }
                                                    }}
                                                >
                                                    {isEditing ? (
                                                        <input
                                                            type="number"
                                                            className="w-full px-1 py-0.5 text-sm border-0 focus:outline-none"
                                                            defaultValue={cellData?.value || ''}
                                                            autoFocus
                                                            onBlur={(e) => {
                                                                const value = e.target.value ? parseFloat(e.target.value) : null;
                                                                handleCellChange(product.id, period, value);
                                                                setEditingCell(null);
                                                            }}
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter') {
                                                                    e.currentTarget.blur();
                                                                } else if (e.key === 'Escape') {
                                                                    setEditingCell(null);
                                                                }
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="relative">
                                                            {formatValue(cellData?.value || null)}
                                                            {cellData?.locked && (
                                                                <Lock className="absolute top-0 right-0 h-3 w-3 text-gray-400" />
                                                            )}
                                                            {cellData?.note && (
                                                                <MessageSquare className="absolute bottom-0 right-0 h-3 w-3 text-blue-500" />
                                                            )}
                                                        </div>
                                                    )}
                                                </td>
                                            );
                                        })}
                                        <td className="sticky right-0 z-10 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 text-center border-l border-gray-200">
                                            {formatValue(calculateRowTotal(product.id))}
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}

                        {/* Column Totals */}
                        <tr className="bg-gray-100 font-semibold">
                            <td className="sticky left-0 z-10 bg-gray-100 px-4 py-3 text-sm text-gray-900 border-r border-gray-200">
                                Total
                            </td>
                            {periods.map(period => (
                                <td key={period} className="px-4 py-3 text-sm text-gray-900 text-center">
                                    {formatValue(calculateColumnTotal(period))}
                                </td>
                            ))}
                            <td className="sticky right-0 z-10 bg-gray-100 px-4 py-3 text-sm text-gray-900 text-center border-l border-gray-200">
                                {formatValue(
                                    periods.reduce((sum, period) => sum + calculateColumnTotal(period), 0)
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Context Menu */}
            {contextMenu && (
                <div
                    className="fixed bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                    style={{ left: contextMenu.x, top: contextMenu.y }}
                    onMouseLeave={() => setContextMenu(null)}
                >
                    <button
                        onClick={handleCopy}
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                    </button>
                    <button
                        onClick={handlePaste}
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                        <Clipboard className="h-4 w-4" />
                        <span>Paste</span>
                    </button>
                    <div className="h-px bg-gray-200 my-1" />
                    <button
                        onClick={handleFillRight}
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                        <TrendingUp className="h-4 w-4" />
                        <span>Fill Right</span>
                    </button>
                    <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 rotate-90" />
                        <span>Fill Down</span>
                    </button>
                    <div className="h-px bg-gray-200 my-1" />
                    <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>Add Note</span>
                    </button>
                    <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                        <History className="h-4 w-4" />
                        <span>View History</span>
                    </button>
                </div>
            )}
        </div>
    );
} 