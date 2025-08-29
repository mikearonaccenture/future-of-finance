import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatCurrency(value: number, unit: string = 'M'): string {
    if (unit === 'M') {
        return `$${value.toFixed(1)}M`;
    } else if (unit === 'K') {
        return `$${value.toFixed(0)}K`;
    } else if (unit === '%') {
        return `${value.toFixed(1)}%`;
    }
    return value.toString();
}

export function formatTrend(value: number): string {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
}

export function getTrendColor(value: number): string {
    return value >= 0 ? 'text-green-600' : 'text-red-600';
}

export function getTrendBgColor(value: number): string {
    return value >= 0 ? 'bg-green-100' : 'bg-red-100';
}

export function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
} 