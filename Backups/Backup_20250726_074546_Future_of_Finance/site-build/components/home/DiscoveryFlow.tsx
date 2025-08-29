'use client';

import { ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const PROCESS_AREAS = [
    { id: 'fpa', name: 'FP&A', description: 'Planning, forecasting, and analysis' },
    { id: 'controllership', name: 'Controllership', description: 'Close processes and controls' },
    { id: 'orderToCash', name: 'Order to Cash', description: 'Collections and credit management' },
    { id: 'procureToPay', name: 'Procure to Pay', description: 'Purchasing and payments' },
    { id: 'corporateFinance', name: 'Corporate Finance', description: 'Tax and treasury' },
];

const FPA_SUBPROCESSES = [
    { id: 'planning', name: 'Connected Planning & Forecasting', painPoints: ['15+ days planning cycles', 'Manual data consolidation', 'Version control chaos'] },
    { id: 'reporting', name: 'Management Reporting & Insights', painPoints: ['Days to prepare board decks', 'No real-time visibility', 'Static reports'] },
];

export default function DiscoveryFlow() {
    const [step, setStep] = useState(1);
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedSubProcess, setSelectedSubProcess] = useState('');
    const [currentState, setCurrentState] = useState({
        timeSpent: '',
        painPoints: [],
        teamImpact: ''
    });
    const [valueCommitment, setValueCommitment] = useState({
        worthChange: false,
        readyToLead: false
    });

    const handleAreaSelect = (areaId: string) => {
        setSelectedArea(areaId);
        setStep(2);
    };

    const handleSubProcessSelect = (subId: string) => {
        setSelectedSubProcess(subId);
        setStep(3);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white mb-8">
                            What process areas do you want to reinvent?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {PROCESS_AREAS.map((area) => (
                                <button
                                    key={area.id}
                                    onClick={() => handleAreaSelect(area.id)}
                                    className="p-6 text-left rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                                    style={{
                                        background: 'rgba(17, 24, 39, 0.5)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-semibold text-white">{area.name}</h4>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <p className="text-gray-400">{area.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 2:
                if (selectedArea !== 'fpa') {
                    return (
                        <div className="text-center py-12">
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                {PROCESS_AREAS.find(a => a.id === selectedArea)?.name} Transformation
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Our AI-powered {PROCESS_AREAS.find(a => a.id === selectedArea)?.name} solutions are coming soon.
                            </p>
                            <button
                                onClick={() => { setStep(1); setSelectedArea(''); }}
                                className="text-blue-400 hover:text-blue-300 font-medium"
                            >
                                ← Explore other areas
                            </button>
                        </div>
                    );
                }

                return (
                    <div className="space-y-6">
                        <button
                            onClick={() => { setStep(1); setSelectedArea(''); }}
                            className="text-blue-400 hover:text-blue-300 font-medium mb-4"
                        >
                            ← Back
                        </button>
                        <h3 className="text-2xl font-semibold text-white mb-8">
                            Within FP&A, let's get specific. What's your priority?
                        </h3>
                        <div className="space-y-4">
                            {FPA_SUBPROCESSES.map((sub) => (
                                <button
                                    key={sub.id}
                                    onClick={() => handleSubProcessSelect(sub.id)}
                                    className="w-full p-6 text-left rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                                    style={{
                                        background: 'rgba(17, 24, 39, 0.5)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="text-xl font-semibold text-white">{sub.name}</h4>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-500 mb-2">Current pain points:</p>
                                        {sub.painPoints.map((pain, idx) => (
                                            <p key={idx} className="text-gray-400 text-sm">• {pain}</p>
                                        ))}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <button
                            onClick={() => { setStep(2); setSelectedSubProcess(''); }}
                            className="text-blue-400 hover:text-blue-300 font-medium mb-4"
                        >
                            ← Back
                        </button>
                        <h3 className="text-2xl font-semibold text-white mb-8">
                            Tell us about your current state
                        </h3>
                        <div className="space-y-6 bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <div>
                                <label className="block text-gray-300 mb-2">How much time does your team spend on this today?</label>
                                <select
                                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                                    onChange={(e) => setCurrentState({ ...currentState, timeSpent: e.target.value })}
                                >
                                    <option value="">Select time spent</option>
                                    <option value="10-20">10-20 days per cycle</option>
                                    <option value="20-30">20-30 days per cycle</option>
                                    <option value="30+">30+ days per cycle</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">How does your team feel during this process?</label>
                                <textarea
                                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                                    rows={3}
                                    placeholder="e.g., Stressed during month-end, frustrated with manual work..."
                                    onChange={(e) => setCurrentState({ ...currentState, teamImpact: e.target.value })}
                                />
                            </div>

                            {currentState.timeSpent && currentState.teamImpact && (
                                <button
                                    onClick={() => setStep(4)}
                                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
                                >
                                    Show Me the Future State →
                                </button>
                            )}
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white mb-8">
                            Your Future State Vision
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 rounded-lg border border-red-900/50 bg-red-900/10">
                                <h4 className="text-xl font-semibold text-red-400 mb-4">Today's Reality</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• {currentState.timeSpent} days per planning cycle</li>
                                    <li>• Team feeling: {currentState.teamImpact}</li>
                                    <li>• 80% manual work</li>
                                    <li>• Limited strategic time</li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-lg border border-green-900/50 bg-green-900/10">
                                <h4 className="text-xl font-semibold text-green-400 mb-4">AI-Powered Future</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• 2-3 days per planning cycle</li>
                                    <li>• Team focused on strategy</li>
                                    <li>• 80% automated</li>
                                    <li>• Real-time insights</li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-6 rounded-lg bg-blue-900/20 border border-blue-800">
                            <h4 className="text-xl font-semibold text-blue-400 mb-3">What This Means for You as CFO</h4>
                            <p className="text-gray-300">
                                Your team spends 80% of their time on strategic analysis instead of data gathering.
                                You have real-time visibility into performance. Your forecasts are 95% accurate.
                                Most importantly, your team is energized and focused on driving business value.
                            </p>
                        </div>

                        <div className="p-6 rounded-lg bg-yellow-900/20 border border-yellow-800">
                            <h4 className="text-xl font-semibold text-yellow-400 mb-3">⚡ Why Act Now?</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Your competitors are already implementing AI-driven FP&A</li>
                                <li>• Top talent expects modern tools - or they'll leave</li>
                                <li>• Every month of delay costs ~$50K in productivity</li>
                            </ul>
                        </div>

                        <button
                            onClick={() => setStep(5)}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
                        >
                            I'm Ready to Transform My Team →
                        </button>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white mb-8">
                            Value Commitment Checkpoint
                        </h3>

                        <div className="space-y-4 bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="worthChange"
                                    className="mt-1"
                                    onChange={(e) => setValueCommitment({ ...valueCommitment, worthChange: e.target.checked })}
                                />
                                <label htmlFor="worthChange" className="text-gray-300">
                                    <span className="font-semibold">Yes</span>, this future state creates enough value to justify the change effort
                                </label>
                            </div>

                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="readyToLead"
                                    className="mt-1"
                                    onChange={(e) => setValueCommitment({ ...valueCommitment, readyToLead: e.target.checked })}
                                />
                                <label htmlFor="readyToLead" className="text-gray-300">
                                    <span className="font-semibold">Yes</span>, I'm ready to lead my team through this transformation
                                </label>
                            </div>
                        </div>

                        {valueCommitment.worthChange && valueCommitment.readyToLead && (
                            <div className="space-y-6 animate-fadeIn">
                                <div className="p-6 rounded-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800">
                                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-yellow-400" />
                                        Here's How AI Agents Make This Possible
                                    </h4>
                                    <p className="text-gray-300 mb-4">
                                        Our AI agents become your team's intelligent assistants, automating the manual work
                                        while your experts focus on insights and strategy. See exactly how this works with
                                        our live prototype.
                                    </p>
                                </div>

                                <Link
                                    href="/functions/fpa/forecasting"
                                    className="block w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold text-lg text-center hover:shadow-xl transition-all duration-300"
                                >
                                    Experience Your Team's Future Workflow →
                                </Link>

                                <div className="text-center">
                                    <p className="text-gray-400 mb-2">Or start with a pilot:</p>
                                    <button className="text-blue-400 hover:text-blue-300 font-medium">
                                        90-Day Proof of Value Program →
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section style={{
            padding: '5rem 2rem',
            background: '#0a0a0a',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="text-center mb-12">
                    <h2 style={{
                        fontSize: '3rem',
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '400',
                        letterSpacing: '-0.02em'
                    }}>
                        Let's Reinvent Your Finance Function
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#94a3b8',
                        fontWeight: '300'
                    }}>
                        A guided journey to your AI-powered future
                    </p>
                </div>

                {/* Progress indicator */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div
                                key={num}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${num <= step ? 'bg-blue-500 w-8' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Step content */}
                <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
                    {renderStep()}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </section>
    );
} 