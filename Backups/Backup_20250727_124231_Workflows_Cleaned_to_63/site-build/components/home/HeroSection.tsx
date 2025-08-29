'use client';

import { STATS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" style={{ background: '#0a0a0a' }}>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ color: '#ffffff' }}
                    >
                        <span className="block" style={{
                            background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Experience the AI-Powered
                        </span>
                        <span className="block" style={{
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Future of Finance
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ color: '#cbd5e1' }}
                    >
                        Interactive prototypes showcasing how artificial intelligence will transform every aspect of finance - from planning to reporting, from compliance to treasury.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button
                            onClick={() => scrollToSection('functions')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Explore Prototypes
                        </button>
                        <button
                            onClick={() => scrollToSection('demo')}
                            className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
                        >
                            CFO Executive Tour
                        </button>
                    </motion.div>

                    {/* Stats Section exactly like HTML */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="stat">
                            <div className="stat-value">
                                {STATS.planningTimeReduction}
                            </div>
                            <div className="stat-label">
                                Reduction in Planning Time
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-value">
                                {STATS.forecastAccuracy}
                            </div>
                            <div className="stat-label">
                                Forecast Accuracy
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-value">
                                {STATS.insightSpeed}
                            </div>
                            <div className="stat-label">
                                Faster Insights
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-value">
                                {STATS.roi}
                            </div>
                            <div className="stat-label">
                                ROI in 18 Months
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 