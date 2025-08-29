'use client';

import { FINANCE_TAXONOMY } from '@/lib/constants';
import { Check } from 'lucide-react';

interface FunctionGridProps {
    onFunctionSelect?: (functionId: string) => void;
    selectedFunction?: string;
}

export default function FunctionGrid({ onFunctionSelect, selectedFunction = 'fpa' }: FunctionGridProps) {
    // Order functions exactly as requested
    const orderedFunctions = [
        { ...FINANCE_TAXONOMY.procureToPay, id: 'procureToPay' },
        { ...FINANCE_TAXONOMY.orderToCash, id: 'orderToCash' },
        { ...FINANCE_TAXONOMY.costAccounting, id: 'costAccounting' },
        { ...FINANCE_TAXONOMY.controllership, id: 'controllership' },
        { ...FINANCE_TAXONOMY.corporateFinance, id: 'corporateFinance' },
        { ...FINANCE_TAXONOMY.fpa, id: 'fpa' },
        { ...FINANCE_TAXONOMY.investorRelations, id: 'investorRelations' }
    ];

    return (
        <div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .function-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 480px) {
                    .function-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
            <div style={{
                width: '100%',
                maxWidth: '100%',
                margin: '0 auto'
            }}>
            <div className="function-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '0.75rem',
                width: '100%'
            }}>
                {orderedFunctions.map((func) => {
                    const isSelected = selectedFunction === func.id;
                    const isLive = func.id === 'fpa';

                    return (
                        <div
                            key={func.id}
                            onClick={() => onFunctionSelect?.(func.id)}
                            style={{
                                background: isSelected
                                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%)'
                                    : 'rgba(17, 24, 39, 0.5)',
                                borderRadius: '0.75rem',
                                padding: '1.25rem 1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: isSelected
                                    ? '2px solid rgba(59, 130, 246, 0.5)'
                                    : '2px solid transparent',
                                backdropFilter: 'blur(10px)',
                                position: 'relative' as const,
                                minHeight: '380px',
                                display: 'flex',
                                flexDirection: 'column' as const
                            }}
                            onMouseEnter={(e) => {
                                if (!isSelected) {
                                    e.currentTarget.style.background = 'rgba(31, 41, 55, 0.8)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isSelected) {
                                    e.currentTarget.style.background = 'rgba(17, 24, 39, 0.5)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }
                            }}
                        >
                            {/* Selected indicator */}
                            {isSelected && (
                                <div style={{
                                    position: 'absolute',
                                    top: '0.5rem',
                                    right: '0.5rem',
                                    width: '1.25rem',
                                    height: '1.25rem',
                                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Check style={{ width: '0.75rem', height: '0.75rem', color: 'white' }} />
                                </div>
                            )}

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: isSelected ? '#60a5fa' : '#ffffff',
                                marginBottom: '0.375rem',
                                letterSpacing: '-0.01em',
                                lineHeight: '1.3'
                            }}>
                                {func.name}
                            </h3>

                            {/* Status */}
                            {isLive ? (
                                <span style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.25rem',
                                    padding: '0.125rem 0.375rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.5625rem',
                                    fontWeight: '600',
                                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                    color: '#ffffff',
                                    textTransform: 'uppercase' as const,
                                    letterSpacing: '0.05em',
                                    marginBottom: '0.75rem',
                                    width: 'fit-content'
                                }}>
                                    <span style={{
                                        width: '3px',
                                        height: '3px',
                                        background: '#ffffff',
                                        borderRadius: '50%',
                                        animation: 'pulse 2s ease-in-out infinite'
                                    }} />
                                    Live
                                </span>
                            ) : (
                                <span style={{
                                    fontSize: '0.5625rem',
                                    color: '#64748b',
                                    fontStyle: 'italic' as const,
                                    marginBottom: '0.75rem',
                                    display: 'block'
                                }}>
                                    Coming Soon
                                </span>
                            )}

                            {/* Activities List */}
                            <div style={{
                                flex: 1,
                                overflowY: 'auto' as const,
                                paddingRight: '0.125rem'
                            }}>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {func.activities.slice(0, 9).map((activity, idx) => (
                                        <li key={idx} style={{
                                            fontSize: '0.6875rem',
                                            color: '#94a3b8',
                                            marginBottom: '0.25rem',
                                            paddingLeft: '0.625rem',
                                            position: 'relative' as const,
                                            lineHeight: '1.3'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '0.125rem',
                                                width: '2px',
                                                height: '2px',
                                                background: isSelected ? '#60a5fa' : '#475569',
                                                borderRadius: '50%'
                                            }} />
                                            {activity}
                                        </li>
                                    ))}
                                    {func.activities.length > 9 && (
                                        <li style={{
                                            fontSize: '0.625rem',
                                            color: '#64748b',
                                            fontStyle: 'italic' as const,
                                            paddingLeft: '0.625rem'
                                        }}>
                                            +{func.activities.length - 9} more...
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* Bottom border accent for selected */}
                            {isSelected && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                                    borderBottomLeftRadius: '0.75rem',
                                    borderBottomRightRadius: '0.75rem'
                                }} />
                            )}
                        </div>
                    );
                })}
            </div>
            </div>

            {/* Add pulse animation */}
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
} 