'use client';

import { MASTER_FINANCE_TAXONOMY } from '@/lib/finance-taxonomy-master';

interface FunctionGridProps {
    onFunctionSelect?: (functionId: string) => void;
    selectedFunction?: string;
}

// Define gradients for each function area
const functionGradients: { [key: string]: string } = {
    'procure-to-pay': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'order-to-cash': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'cost-accounting': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'controllership': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'corporate-finance': 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'fpa': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    'investor-relations': 'linear-gradient(135deg, #764ba2 0%, #f953c6 100%)'
};

// Define border colors for visual indicators
const borderColors: { [key: string]: string } = {
    'procure-to-pay': 'rgba(102, 126, 234, 0.3)',
    'order-to-cash': 'rgba(240, 147, 251, 0.3)',
    'cost-accounting': 'rgba(79, 172, 254, 0.3)',
    'controllership': 'rgba(250, 112, 154, 0.3)',
    'corporate-finance': 'rgba(48, 207, 208, 0.3)',
    'fpa': 'rgba(59, 130, 246, 0.3)',
    'investor-relations': 'rgba(118, 75, 162, 0.3)'
};

export default function FunctionGrid({ onFunctionSelect, selectedFunction = 'fpa' }: FunctionGridProps) {
    return (
        <div>
            <style jsx>{`
                @media (max-width: 1024px) {
                    .function-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                    }
                }
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
            <div className="function-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '0.75rem',
                width: '100%'
            }}>
                {MASTER_FINANCE_TAXONOMY.map((func) => {
                    const isSelected = selectedFunction === func.id;
                    const isLive = func.id === 'fpa';
                    const gradient = functionGradients[func.id];
                    const borderColor = borderColors[func.id];

                    // Get all activities for this functional area
                    const allActivities: { name: string; subCategory?: string }[] = [];

                    if (func.activities) {
                        // Direct activities (no subcategories)
                        func.activities.forEach(activity => {
                            allActivities.push({ name: activity.name });
                        });
                    }

                    if (func.subCategories) {
                        // Activities within subcategories
                        func.subCategories.forEach(subCat => {
                            subCat.activities.forEach(activity => {
                                allActivities.push({
                                    name: activity.name,
                                    subCategory: subCat.name
                                });
                            });
                        });
                    }

                    return (
                        <div
                            key={func.id}
                            onClick={() => onFunctionSelect?.(func.id)}
                            style={{
                                background: isSelected
                                    ? 'rgba(255, 255, 255, 0.05)'
                                    : 'rgba(255, 255, 255, 0.02)',
                                border: isSelected
                                    ? '2px solid rgba(59, 130, 246, 0.5)'
                                    : '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.75rem',
                                padding: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '550px',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {/* Title */}
                            <h3 style={{
                                fontSize: '0.9375rem',
                                fontWeight: '600',
                                marginBottom: '0.75rem',
                                background: gradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                {func.name}
                            </h3>

                            {/* Activity Count */}
                            <div style={{
                                fontSize: '0.75rem',
                                color: '#94a3b8',
                                marginBottom: '0.5rem'
                            }}>
                                {func.totalActivities} Activities
                            </div>



                            {/* Activities List */}
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                flex: 1,
                                overflowY: 'auto'
                            }}>
                                {/* For areas with subcategories, show activities under each subcategory */}
                                {func.subCategories ? (
                                    func.subCategories.map((subCat) => (
                                        <div key={subCat.id} style={{ marginBottom: '0.75rem' }}>
                                            <div style={{
                                                fontSize: '0.6875rem',
                                                color: '#60a5fa',
                                                fontWeight: '600',
                                                marginBottom: '0.375rem',
                                                textTransform: 'uppercase' as const,
                                                letterSpacing: '0.025em'
                                            }}>
                                                {subCat.name}
                                            </div>
                                            {subCat.activities.map((activity, idx) => (
                                                <li key={idx} style={{
                                                    fontSize: '0.6875rem',
                                                    color: '#cbd5e1',
                                                    marginBottom: '0.375rem',
                                                    paddingLeft: '0.75rem',
                                                    borderLeft: `2px solid ${borderColor}`,
                                                    transition: 'all 0.2s ease',
                                                    lineHeight: '1.3'
                                                }}>
                                                    {activity.name}
                                                </li>
                                            ))}
                                        </div>
                                    ))
                                ) : (
                                    /* For areas without subcategories, show activities directly */
                                    allActivities.map((activity, idx) => (
                                        <li key={idx} style={{
                                            fontSize: '0.6875rem',
                                            color: '#cbd5e1',
                                            marginBottom: '0.375rem',
                                            paddingLeft: activity.subCategory ? '0.75rem' : '0.5rem',
                                            borderLeft: `2px solid ${borderColor}`,
                                            transition: 'all 0.2s ease',
                                            lineHeight: '1.3'
                                        }}>
                                            {activity.name}
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
} 