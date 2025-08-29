'use client';

import { AlertCircle, ArrowLeft, BarChart3, Brain, Calculator, ChevronDown, ChevronRight, Download, Lock, Redo, Save, TrendingUp, Undo } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ComparativeAnalysisView from './ComparativeAnalysisView';
import TrendAnalysisView from './TrendAnalysisView';

interface CellData {
    actual?: number;
    mlForecast?: number;
    userOverride?: number;
    locked?: boolean;
    confidence?: number;
    hasComment?: boolean;
    variance?: number;
}

interface GridRow {
    category: string;
    subcategory?: string;
    isHeader?: boolean;
    data: { [month: string]: CellData };
}

export default function ReviewDetailsView({ onBack }: { onBack: () => void }) {
    const [selectedCell, setSelectedCell] = useState<{ row: number; col: string } | null>(null);
    const [editingCell, setEditingCell] = useState<{ row: number; col: string } | null>(null);
    const [editValue, setEditValue] = useState<string>('');
    const [showMLOverlay, setShowMLOverlay] = useState(true);
    const [showTrendAnalysis, setShowTrendAnalysis] = useState(false);
    const [showComparativeAnalysis, setShowComparativeAnalysis] = useState(false);
    const [history, setHistory] = useState<any[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());
    const inputRef = useRef<HTMLInputElement>(null);

    // Sample months
    const months = ['Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24',
        'Jul-24', 'Aug-24', 'Sep-24', 'Oct-24', 'Nov-24', 'Dec-24'];
    const actualMonths = ['Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24'];

    // Sample data - now with much more detail
    const initialGridData: GridRow[] = [
        // REVENUE SECTION
        {
            category: 'REVENUE',
            isHeader: true,
            data: {}
        },
        {
            category: 'Revenue',
            subcategory: 'North America',
            data: {
                'Jan-24': { actual: 45600 },
                'Feb-24': { actual: 47200 },
                'Mar-24': { actual: 48900 },
                'Apr-24': { actual: 50200 },
                'May-24': { actual: 51800 },
                'Jun-24': { actual: 52900 },
                'Jul-24': { mlForecast: 54200, confidence: 92 },
                'Aug-24': { mlForecast: 55800, confidence: 90 },
                'Sep-24': { mlForecast: 57200, confidence: 88 },
                'Oct-24': { mlForecast: 58900, confidence: 85 },
                'Nov-24': { mlForecast: 61200, confidence: 82 },
                'Dec-24': { mlForecast: 63800, confidence: 80 }
            }
        },
        {
            category: 'Revenue',
            subcategory: 'EMEA',
            data: {
                'Jan-24': { actual: 32400 },
                'Feb-24': { actual: 33100 },
                'Mar-24': { actual: 33800 },
                'Apr-24': { actual: 34500 },
                'May-24': { actual: 35200 },
                'Jun-24': { actual: 35900 },
                'Jul-24': { mlForecast: 36800, confidence: 89 },
                'Aug-24': { mlForecast: 37600, confidence: 87 },
                'Sep-24': { mlForecast: 38500, confidence: 85 },
                'Oct-24': { mlForecast: 39400, confidence: 83 },
                'Nov-24': { mlForecast: 40300, confidence: 80 },
                'Dec-24': { mlForecast: 41200, confidence: 78 }
            }
        },
        {
            category: 'Revenue',
            subcategory: 'APAC',
            data: {
                'Jan-24': { actual: 28900 },
                'Feb-24': { actual: 29600 },
                'Mar-24': { actual: 30400 },
                'Apr-24': { actual: 31200 },
                'May-24': { actual: 32100 },
                'Jun-24': { actual: 33000 },
                'Jul-24': { mlForecast: 34200, userOverride: 33800, confidence: 91 },
                'Aug-24': { mlForecast: 35400, confidence: 89 },
                'Sep-24': { mlForecast: 36700, confidence: 87 },
                'Oct-24': { mlForecast: 38100, confidence: 85 },
                'Nov-24': { mlForecast: 39600, confidence: 82 },
                'Dec-24': { mlForecast: 41200, confidence: 80 }
            }
        },
        {
            category: 'Revenue',
            subcategory: 'Latin America',
            data: {
                'Jan-24': { actual: 12300 },
                'Feb-24': { actual: 12600 },
                'Mar-24': { actual: 12900 },
                'Apr-24': { actual: 13200 },
                'May-24': { actual: 13500 },
                'Jun-24': { actual: 13800 },
                'Jul-24': { mlForecast: 14200, confidence: 85 },
                'Aug-24': { mlForecast: 14600, confidence: 83 },
                'Sep-24': { mlForecast: 15000, confidence: 80 },
                'Oct-24': { mlForecast: 15400, confidence: 78 },
                'Nov-24': { mlForecast: 15800, confidence: 75 },
                'Dec-24': { mlForecast: 16200, confidence: 73 }
            }
        },
        {
            category: 'Revenue',
            subcategory: 'Total Revenue',
            isHeader: true,
            data: {
                'Jan-24': { actual: 119200 },
                'Feb-24': { actual: 122500 },
                'Mar-24': { actual: 126000 },
                'Apr-24': { actual: 129100 },
                'May-24': { actual: 132600 },
                'Jun-24': { actual: 135600 },
                'Jul-24': { mlForecast: 139400, userOverride: 138800, confidence: 90 },
                'Aug-24': { mlForecast: 143400, confidence: 88 },
                'Sep-24': { mlForecast: 147400, confidence: 86 },
                'Oct-24': { mlForecast: 151800, confidence: 84 },
                'Nov-24': { mlForecast: 156900, confidence: 81 },
                'Dec-24': { mlForecast: 162400, confidence: 79 }
            }
        },
        // COST OF GOODS SOLD SECTION
        {
            category: 'COST OF GOODS SOLD',
            isHeader: true,
            data: {}
        },
        {
            category: 'COGS',
            subcategory: 'Direct Materials',
            data: {
                'Jan-24': { actual: 35760 },
                'Feb-24': { actual: 36750 },
                'Mar-24': { actual: 37800 },
                'Apr-24': { actual: 38730 },
                'May-24': { actual: 39780 },
                'Jun-24': { actual: 40680 },
                'Jul-24': { mlForecast: 41820, confidence: 88 },
                'Aug-24': { mlForecast: 43020, confidence: 86 },
                'Sep-24': { mlForecast: 44220, confidence: 84 },
                'Oct-24': { mlForecast: 45540, confidence: 82 },
                'Nov-24': { mlForecast: 47070, confidence: 80 },
                'Dec-24': { mlForecast: 48720, confidence: 78 }
            }
        },
        {
            category: 'COGS',
            subcategory: 'Direct Labor',
            data: {
                'Jan-24': { actual: 17880 },
                'Feb-24': { actual: 18375 },
                'Mar-24': { actual: 18900 },
                'Apr-24': { actual: 19365 },
                'May-24': { actual: 19890 },
                'Jun-24': { actual: 20340 },
                'Jul-24': { mlForecast: 20910, confidence: 90 },
                'Aug-24': { mlForecast: 21510, confidence: 88 },
                'Sep-24': { mlForecast: 22110, confidence: 86 },
                'Oct-24': { mlForecast: 22770, confidence: 84 },
                'Nov-24': { mlForecast: 23535, confidence: 82 },
                'Dec-24': { mlForecast: 24360, confidence: 80 }
            }
        },
        {
            category: 'COGS',
            subcategory: 'Manufacturing Overhead',
            data: {
                'Jan-24': { actual: 11920 },
                'Feb-24': { actual: 12250 },
                'Mar-24': { actual: 12600 },
                'Apr-24': { actual: 12910 },
                'May-24': { actual: 13260 },
                'Jun-24': { actual: 13560 },
                'Jul-24': { mlForecast: 13940, confidence: 91 },
                'Aug-24': { mlForecast: 14340, confidence: 89 },
                'Sep-24': { mlForecast: 14740, confidence: 87 },
                'Oct-24': { mlForecast: 15180, confidence: 85 },
                'Nov-24': { mlForecast: 15690, confidence: 83 },
                'Dec-24': { mlForecast: 16240, confidence: 81 }
            }
        },
        {
            category: 'COGS',
            subcategory: 'Freight & Logistics',
            data: {
                'Jan-24': { actual: 5960 },
                'Feb-24': { actual: 6125 },
                'Mar-24': { actual: 6300 },
                'Apr-24': { actual: 6455 },
                'May-24': { actual: 6630 },
                'Jun-24': { actual: 6780 },
                'Jul-24': { mlForecast: 6970, userOverride: 7200, confidence: 85 },
                'Aug-24': { mlForecast: 7170, userOverride: 7400, confidence: 83 },
                'Sep-24': { mlForecast: 7370, userOverride: 7600, confidence: 81 },
                'Oct-24': { mlForecast: 7590, userOverride: 7800, confidence: 79 },
                'Nov-24': { mlForecast: 7845, userOverride: 8000, confidence: 77 },
                'Dec-24': { mlForecast: 8120, userOverride: 8200, confidence: 75 }
            }
        },
        {
            category: 'COGS',
            subcategory: 'Total COGS',
            isHeader: true,
            data: {
                'Jan-24': { actual: 71520 },
                'Feb-24': { actual: 73500 },
                'Mar-24': { actual: 75600 },
                'Apr-24': { actual: 77460 },
                'May-24': { actual: 79560 },
                'Jun-24': { actual: 81360 },
                'Jul-24': { mlForecast: 83640, userOverride: 84200, confidence: 88 },
                'Aug-24': { mlForecast: 86040, userOverride: 86600, confidence: 86 },
                'Sep-24': { mlForecast: 88440, userOverride: 89000, confidence: 84 },
                'Oct-24': { mlForecast: 91080, userOverride: 91600, confidence: 82 },
                'Nov-24': { mlForecast: 94140, userOverride: 94700, confidence: 80 },
                'Dec-24': { mlForecast: 97440, userOverride: 98000, confidence: 78 }
            }
        },
        // GROSS MARGIN
        {
            category: 'GROSS MARGIN',
            isHeader: true,
            data: {
                'Jan-24': { actual: 47680 },
                'Feb-24': { actual: 49000 },
                'Mar-24': { actual: 50400 },
                'Apr-24': { actual: 51640 },
                'May-24': { actual: 53040 },
                'Jun-24': { actual: 54240 },
                'Jul-24': { mlForecast: 55760, userOverride: 54600, confidence: 85 },
                'Aug-24': { mlForecast: 57360, userOverride: 56800, confidence: 83 },
                'Sep-24': { mlForecast: 58960, userOverride: 58400, confidence: 81 },
                'Oct-24': { mlForecast: 60720, userOverride: 60200, confidence: 79 },
                'Nov-24': { mlForecast: 62760, userOverride: 62200, confidence: 77 },
                'Dec-24': { mlForecast: 64960, userOverride: 64400, confidence: 75 }
            }
        },
        {
            category: 'Gross Margin %',
            data: {
                'Jan-24': { actual: 40.0 },
                'Feb-24': { actual: 40.0 },
                'Mar-24': { actual: 40.0 },
                'Apr-24': { actual: 40.0 },
                'May-24': { actual: 40.0 },
                'Jun-24': { actual: 40.0 },
                'Jul-24': { mlForecast: 40.0, userOverride: 39.3, confidence: 85 },
                'Aug-24': { mlForecast: 40.0, userOverride: 39.6, confidence: 83 },
                'Sep-24': { mlForecast: 40.0, userOverride: 39.6, confidence: 81 },
                'Oct-24': { mlForecast: 40.0, userOverride: 39.7, confidence: 79 },
                'Nov-24': { mlForecast: 40.0, userOverride: 39.6, confidence: 77 },
                'Dec-24': { mlForecast: 40.0, userOverride: 39.7, confidence: 75 }
            }
        },
        // OPERATING EXPENSES
        {
            category: 'OPERATING EXPENSES',
            isHeader: true,
            data: {}
        },
        {
            category: 'OpEx',
            subcategory: 'Sales & Marketing',
            data: {
                'Jan-24': { actual: 19072 },
                'Feb-24': { actual: 19600 },
                'Mar-24': { actual: 20160 },
                'Apr-24': { actual: 20656 },
                'May-24': { actual: 21216 },
                'Jun-24': { actual: 21696 },
                'Jul-24': { mlForecast: 22304, confidence: 87 },
                'Aug-24': { mlForecast: 22944, confidence: 85 },
                'Sep-24': { mlForecast: 23584, confidence: 83 },
                'Oct-24': { mlForecast: 24288, confidence: 81 },
                'Nov-24': { mlForecast: 25104, confidence: 79 },
                'Dec-24': { mlForecast: 25984, confidence: 77 }
            }
        },
        {
            category: 'OpEx',
            subcategory: 'Research & Development',
            data: {
                'Jan-24': { actual: 11920 },
                'Feb-24': { actual: 12250 },
                'Mar-24': { actual: 12600 },
                'Apr-24': { actual: 12910 },
                'May-24': { actual: 13260 },
                'Jun-24': { actual: 13560 },
                'Jul-24': { mlForecast: 13940, confidence: 90 },
                'Aug-24': { mlForecast: 14340, confidence: 88 },
                'Sep-24': { mlForecast: 14740, confidence: 86 },
                'Oct-24': { mlForecast: 15180, confidence: 84 },
                'Nov-24': { mlForecast: 15690, confidence: 82 },
                'Dec-24': { mlForecast: 16240, confidence: 80 }
            }
        },
        {
            category: 'OpEx',
            subcategory: 'General & Administrative',
            data: {
                'Jan-24': { actual: 8344 },
                'Feb-24': { actual: 8575 },
                'Mar-24': { actual: 8820 },
                'Apr-24': { actual: 9037 },
                'May-24': { actual: 9282 },
                'Jun-24': { actual: 9492 },
                'Jul-24': { mlForecast: 9758, confidence: 92 },
                'Aug-24': { mlForecast: 10038, confidence: 90 },
                'Sep-24': { mlForecast: 10318, confidence: 88 },
                'Oct-24': { mlForecast: 10626, confidence: 86 },
                'Nov-24': { mlForecast: 10983, confidence: 84 },
                'Dec-24': { mlForecast: 11368, confidence: 82 }
            }
        },
        {
            category: 'OpEx',
            subcategory: 'Total OpEx',
            isHeader: true,
            data: {
                'Jan-24': { actual: 39336 },
                'Feb-24': { actual: 40425 },
                'Mar-24': { actual: 41580 },
                'Apr-24': { actual: 42603 },
                'May-24': { actual: 43758 },
                'Jun-24': { actual: 44748 },
                'Jul-24': { mlForecast: 46002, confidence: 88 },
                'Aug-24': { mlForecast: 47322, confidence: 86 },
                'Sep-24': { mlForecast: 48642, confidence: 84 },
                'Oct-24': { mlForecast: 50094, confidence: 82 },
                'Nov-24': { mlForecast: 51777, confidence: 80 },
                'Dec-24': { mlForecast: 53592, confidence: 78 }
            }
        },
        // EBITDA
        {
            category: 'EBITDA',
            isHeader: true,
            data: {
                'Jan-24': { actual: 8344 },
                'Feb-24': { actual: 8575 },
                'Mar-24': { actual: 8820 },
                'Apr-24': { actual: 9037 },
                'May-24': { actual: 9282 },
                'Jun-24': { actual: 9492 },
                'Jul-24': { mlForecast: 9758, userOverride: 8598, confidence: 82 },
                'Aug-24': { mlForecast: 10038, userOverride: 9478, confidence: 80 },
                'Sep-24': { mlForecast: 10318, userOverride: 9758, confidence: 78 },
                'Oct-24': { mlForecast: 10626, userOverride: 10106, confidence: 76 },
                'Nov-24': { mlForecast: 10983, userOverride: 10423, confidence: 74 },
                'Dec-24': { mlForecast: 11368, userOverride: 10808, confidence: 72 }
            }
        },
        {
            category: 'EBITDA Margin %',
            data: {
                'Jan-24': { actual: 7.0 },
                'Feb-24': { actual: 7.0 },
                'Mar-24': { actual: 7.0 },
                'Apr-24': { actual: 7.0 },
                'May-24': { actual: 7.0 },
                'Jun-24': { actual: 7.0 },
                'Jul-24': { mlForecast: 7.0, userOverride: 6.2, confidence: 82 },
                'Aug-24': { mlForecast: 7.0, userOverride: 6.6, confidence: 80 },
                'Sep-24': { mlForecast: 7.0, userOverride: 6.6, confidence: 78 },
                'Oct-24': { mlForecast: 7.0, userOverride: 6.7, confidence: 76 },
                'Nov-24': { mlForecast: 7.0, userOverride: 6.6, confidence: 74 },
                'Dec-24': { mlForecast: 7.0, userOverride: 6.7, confidence: 72 }
            }
        },
        // ADDITIONAL METRICS
        {
            category: 'KEY METRICS',
            isHeader: true,
            data: {}
        },
        {
            category: 'Metrics',
            subcategory: 'Headcount',
            data: {
                'Jan-24': { actual: 1250 },
                'Feb-24': { actual: 1260 },
                'Mar-24': { actual: 1275 },
                'Apr-24': { actual: 1285 },
                'May-24': { actual: 1295 },
                'Jun-24': { actual: 1305 },
                'Jul-24': { mlForecast: 1320, confidence: 95 },
                'Aug-24': { mlForecast: 1335, confidence: 94 },
                'Sep-24': { mlForecast: 1350, confidence: 93 },
                'Oct-24': { mlForecast: 1365, confidence: 92 },
                'Nov-24': { mlForecast: 1380, confidence: 91 },
                'Dec-24': { mlForecast: 1395, confidence: 90 }
            }
        },
        {
            category: 'Metrics',
            subcategory: 'Revenue per Employee',
            data: {
                'Jan-24': { actual: 95.36 },
                'Feb-24': { actual: 97.22 },
                'Mar-24': { actual: 98.82 },
                'Apr-24': { actual: 100.47 },
                'May-24': { actual: 102.39 },
                'Jun-24': { actual: 103.91 },
                'Jul-24': { mlForecast: 105.61, userOverride: 105.15, confidence: 88 },
                'Aug-24': { mlForecast: 107.42, confidence: 86 },
                'Sep-24': { mlForecast: 109.21, confidence: 84 },
                'Oct-24': { mlForecast: 111.21, confidence: 82 },
                'Nov-24': { mlForecast: 113.70, confidence: 80 },
                'Dec-24': { mlForecast: 116.44, confidence: 78 }
            }
        },
        {
            category: 'Metrics',
            subcategory: 'Days Sales Outstanding',
            data: {
                'Jan-24': { actual: 45 },
                'Feb-24': { actual: 46 },
                'Mar-24': { actual: 44 },
                'Apr-24': { actual: 45 },
                'May-24': { actual: 47 },
                'Jun-24': { actual: 46 },
                'Jul-24': { mlForecast: 46, confidence: 90 },
                'Aug-24': { mlForecast: 47, confidence: 88 },
                'Sep-24': { mlForecast: 47, confidence: 86 },
                'Oct-24': { mlForecast: 48, confidence: 84 },
                'Nov-24': { mlForecast: 48, confidence: 82 },
                'Dec-24': { mlForecast: 49, confidence: 80 }
            }
        },
        {
            category: 'Metrics',
            subcategory: 'Inventory Turns',
            data: {
                'Jan-24': { actual: 8.2 },
                'Feb-24': { actual: 8.3 },
                'Mar-24': { actual: 8.1 },
                'Apr-24': { actual: 8.4 },
                'May-24': { actual: 8.5 },
                'Jun-24': { actual: 8.3 },
                'Jul-24': { mlForecast: 8.4, confidence: 87 },
                'Aug-24': { mlForecast: 8.5, confidence: 85 },
                'Sep-24': { mlForecast: 8.6, confidence: 83 },
                'Oct-24': { mlForecast: 8.7, confidence: 81 },
                'Nov-24': { mlForecast: 8.8, confidence: 79 },
                'Dec-24': { mlForecast: 8.9, confidence: 77 }
            }
        }
    ];

    const [gridData, setGridData] = useState<GridRow[]>(initialGridData);

    const getValue = (cell: CellData): number => {
        if (cell.actual !== undefined) return cell.actual;
        if (cell.userOverride !== undefined) return cell.userOverride;
        if (cell.mlForecast !== undefined) return cell.mlForecast;
        return 0;
    };

    const formatValue = (value: number, category?: string, subcategory?: string): string => {
        // Handle percentage values
        if (category === 'Gross Margin %' || category === 'EBITDA Margin %' ||
            subcategory === 'Revenue per Employee') {
            return value.toFixed(1) + '%';
        }

        // Handle count values
        if (subcategory === 'Headcount' || subcategory === 'Days Sales Outstanding') {
            return Math.round(value).toString();
        }

        // Handle decimal metrics
        if (subcategory === 'Inventory Turns') {
            return value.toFixed(1);
        }

        // Default to currency format (in thousands)
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value * 1000);
    };

    const getCellStyle = (cell: CellData, month: string): string => {
        const baseStyle = "px-2 py-1 text-right text-sm border-r border-gray-200 relative ";

        if (actualMonths.includes(month)) {
            return baseStyle + "bg-gray-50";
        }

        if (cell.userOverride !== undefined) {
            return baseStyle + "bg-blue-50 font-semibold";
        }

        if (cell.mlForecast !== undefined) {
            return baseStyle + "bg-purple-50";
        }

        return baseStyle + "bg-white";
    };

    const handleCellClick = (rowIndex: number, month: string) => {
        if (gridData[rowIndex].isHeader) return;

        setSelectedCell({ row: rowIndex, col: month });

        // Only allow editing forecast months
        if (!actualMonths.includes(month)) {
            const cellData = gridData[rowIndex].data[month];
            if (!cellData?.locked) {
                setEditingCell({ row: rowIndex, col: month });
                setEditValue(getValue(cellData).toString());
            }
        }
    };

    const handleCellEdit = (value: string) => {
        if (!editingCell) return;

        const numValue = parseFloat(value);
        if (isNaN(numValue)) return;

        const newData = [...gridData];
        const cell = newData[editingCell.row].data[editingCell.col];

        // Save to history for undo/redo
        const historyEntry = {
            row: editingCell.row,
            col: editingCell.col,
            oldValue: cell.userOverride,
            newValue: numValue
        };

        setHistory([...history.slice(0, historyIndex + 1), historyEntry]);
        setHistoryIndex(historyIndex + 1);

        // Update the cell
        newData[editingCell.row].data[editingCell.col] = {
            ...cell,
            userOverride: numValue,
            variance: ((numValue - (cell.mlForecast || 0)) / (cell.mlForecast || 1)) * 100
        };

        setGridData(newData);
        setEditingCell(null);
    };

    const handleUndo = () => {
        if (historyIndex < 0) return;

        const entry = history[historyIndex];
        const newData = [...gridData];
        const cell = newData[entry.row].data[entry.col];

        if (entry.oldValue === undefined) {
            delete cell.userOverride;
        } else {
            cell.userOverride = entry.oldValue;
        }

        setGridData(newData);
        setHistoryIndex(historyIndex - 1);
    };

    const handleRedo = () => {
        if (historyIndex >= history.length - 1) return;

        const entry = history[historyIndex + 1];
        const newData = [...gridData];
        const cell = newData[entry.row].data[entry.col];

        cell.userOverride = entry.newValue;

        setGridData(newData);
        setHistoryIndex(historyIndex + 1);
    };

    const calculateRowTotal = (data: { [month: string]: CellData }): number => {
        return months.reduce((sum, month) => sum + getValue(data[month] || {}), 0);
    };

    const toggleSection = (section: string) => {
        const newCollapsed = new Set(collapsedSections);
        if (newCollapsed.has(section)) {
            newCollapsed.delete(section);
        } else {
            newCollapsed.add(section);
        }
        setCollapsedSections(newCollapsed);
    };

    const getFilteredData = (): GridRow[] => {
        let currentSection = '';
        return gridData.filter(row => {
            // Update current section if this is a section header
            if (row.category === 'REVENUE' ||
                row.category === 'COST OF GOODS SOLD' ||
                row.category === 'GROSS MARGIN' ||
                row.category === 'OPERATING EXPENSES' ||
                row.category === 'EBITDA' ||
                row.category === 'KEY METRICS') {
                currentSection = row.category;
                return true; // Always show section headers
            }

            // Show row if section is not collapsed
            return !collapsedSections.has(currentSection);
        });
    };

    useEffect(() => {
        if (editingCell && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [editingCell]);

    if (showTrendAnalysis) {
        return <TrendAnalysisView onBack={() => setShowTrendAnalysis(false)} />;
    }

    if (showComparativeAnalysis) {
        return <ComparativeAnalysisView onBack={() => setShowComparativeAnalysis(false)} />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onBack}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span>Back to Forecast Command</span>
                        </button>
                        <div className="border-l border-gray-300 h-6" />
                        <h1 className="text-xl font-semibold text-gray-900">Detailed Forecast Review</h1>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => setShowMLOverlay(!showMLOverlay)}
                            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border ${showMLOverlay
                                ? 'bg-purple-50 border-purple-300 text-purple-700'
                                : 'bg-white border-gray-300 text-gray-700'
                                }`}
                        >
                            <Brain className="h-4 w-4" />
                            <span className="text-sm">ML Overlay</span>
                        </button>

                        <button
                            onClick={() => setShowTrendAnalysis(true)}
                            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-sm">Trend Analysis</span>
                        </button>

                        <button
                            onClick={() => setShowComparativeAnalysis(true)}
                            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                            <BarChart3 className="h-4 w-4" />
                            <span className="text-sm">Comparative Analysis</span>
                        </button>

                        <div className="border-l border-gray-300 h-6" />

                        <button
                            onClick={handleUndo}
                            disabled={historyIndex < 0}
                            className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-50"
                        >
                            <Undo className="h-4 w-4" />
                        </button>

                        <button
                            onClick={handleRedo}
                            disabled={historyIndex >= history.length - 1}
                            className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-50"
                        >
                            <Redo className="h-4 w-4" />
                        </button>

                        <div className="border-l border-gray-300 h-6" />

                        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                            <Save className="h-4 w-4" />
                            <span>Save Version</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            <Download className="h-4 w-4" />
                            <span>Export</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="bg-white border-b border-gray-200 px-6 py-3">
                <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-gray-50 border border-gray-300 rounded" />
                        <span className="text-gray-600">Actuals</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-purple-50 border border-purple-300 rounded" />
                        <span className="text-gray-600">ML Forecast</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-50 border border-blue-300 rounded" />
                        <span className="text-gray-600">User Override</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Calculator className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">Formula Cell</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Lock className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">Locked</span>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="sticky left-0 bg-gray-50 px-4 py-3 text-left text-sm font-medium text-gray-700 border-r border-gray-200 w-64">
                                        Category
                                    </th>
                                    {months.map(month => (
                                        <th key={month} className="px-2 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 min-w-[100px]">
                                            {month}
                                            {actualMonths.includes(month) && (
                                                <span className="block text-xs text-gray-500 font-normal">Actual</span>
                                            )}
                                        </th>
                                    ))}
                                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 min-w-[120px]">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {getFilteredData().map((row, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className={`border-b border-gray-200 ${row.category === 'REVENUE' ||
                                            row.category === 'COST OF GOODS SOLD' ||
                                            row.category === 'GROSS MARGIN' ||
                                            row.category === 'OPERATING EXPENSES' ||
                                            row.category === 'EBITDA' ||
                                            row.category === 'KEY METRICS'
                                            ? 'bg-gray-800 text-white'
                                            : row.isHeader
                                                ? 'bg-gray-100 font-semibold'
                                                : 'hover:bg-gray-50'
                                            }`}
                                    >
                                        <td className={`sticky left-0 px-4 py-2 text-sm border-r border-gray-200 ${row.category === 'REVENUE' ||
                                            row.category === 'COST OF GOODS SOLD' ||
                                            row.category === 'GROSS MARGIN' ||
                                            row.category === 'OPERATING EXPENSES' ||
                                            row.category === 'EBITDA' ||
                                            row.category === 'KEY METRICS'
                                            ? 'bg-gray-800 text-white'
                                            : 'bg-white'
                                            }`}>
                                            <div className="flex items-center space-x-2">
                                                {(row.category === 'REVENUE' ||
                                                    row.category === 'COST OF GOODS SOLD' ||
                                                    row.category === 'GROSS MARGIN' ||
                                                    row.category === 'OPERATING EXPENSES' ||
                                                    row.category === 'EBITDA' ||
                                                    row.category === 'KEY METRICS') && (
                                                        <button
                                                            onClick={() => toggleSection(row.category)}
                                                            className="p-0.5 hover:bg-gray-700 rounded"
                                                        >
                                                            {collapsedSections.has(row.category) ? (
                                                                <ChevronRight className="h-4 w-4" />
                                                            ) : (
                                                                <ChevronDown className="h-4 w-4" />
                                                            )}
                                                        </button>
                                                    )}
                                                {row.subcategory && !row.isHeader && <span className="text-gray-400 ml-4">└</span>}
                                                <span className={row.isHeader ? 'font-semibold' : ''}>
                                                    {row.subcategory || row.category}
                                                </span>
                                            </div>
                                        </td>
                                        {row.isHeader ? (
                                            <>
                                                {months.map(month => (
                                                    <td key={month} className="border-r border-gray-200" />
                                                ))}
                                                <td />
                                            </>
                                        ) : (
                                            <>
                                                {months.map(month => (
                                                    <td
                                                        key={month}
                                                        className={getCellStyle(row.data[month] || {}, month)}
                                                        onClick={() => handleCellClick(rowIndex, month)}
                                                    >
                                                        {editingCell?.row === rowIndex && editingCell?.col === month ? (
                                                            <input
                                                                ref={inputRef}
                                                                type="text"
                                                                value={editValue}
                                                                onChange={(e) => setEditValue(e.target.value)}
                                                                onBlur={() => handleCellEdit(editValue)}
                                                                onKeyDown={(e) => {
                                                                    if (e.key === 'Enter') handleCellEdit(editValue);
                                                                    if (e.key === 'Escape') setEditingCell(null);
                                                                }}
                                                                className="w-full px-1 py-0 text-right border-0 focus:ring-0 text-sm"
                                                            />
                                                        ) : (
                                                            <>
                                                                {formatValue(getValue(row.data[month] || {}), row.category, row.subcategory)}
                                                                {showMLOverlay && row.data[month]?.mlForecast && !actualMonths.includes(month) && (
                                                                    <div className="absolute top-0 right-0 text-xs text-purple-600 pr-1">
                                                                        {row.data[month].confidence}%
                                                                    </div>
                                                                )}
                                                                {row.data[month]?.locked && (
                                                                    <Lock className="absolute top-0.5 left-0.5 h-3 w-3 text-gray-400" />
                                                                )}
                                                                {row.data[month]?.userOverride && row.data[month]?.variance && (
                                                                    <div className={`absolute bottom-0 right-0 text-xs pr-1 ${row.data[month].variance! > 0 ? 'text-green-600' : 'text-red-600'
                                                                        }`}>
                                                                        {row.data[month].variance! > 0 ? '+' : ''}{row.data[month].variance!.toFixed(1)}%
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}
                                                    </td>
                                                ))}
                                                <td className="px-4 py-2 text-right text-sm font-medium">
                                                    {formatValue(calculateRowTotal(row.data))}
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <div className="px-6 pb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-800">
                            <p className="font-medium mb-1">Quick Tips:</p>
                            <ul className="space-y-1 text-xs">
                                <li>• Click any forecast cell to override the ML prediction</li>
                                <li>• Use Tab/Enter to move between cells, Esc to cancel editing</li>
                                <li>• Purple percentages show ML confidence levels</li>
                                <li>• Green/red percentages show variance from ML baseline</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 