'use client';

import { agentNotifications, aiAgents, aiAssistantMessages } from '@/lib/demo-data';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Send, Sparkles, X, Zap } from 'lucide-react';
import { useState } from 'react';

interface AIAssistantProps {
    isOpen: boolean;
    onClose: () => void;
}

interface AgentResponse {
    agentId: string;
    response: string;
    confidence: number;
    data?: any;
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

export default function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
    const [messages, setMessages] = useState<Message[]>(aiAssistantMessages as Message[]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [activeAgents, setActiveAgents] = useState<string[]>([]);

    const getAgentResponse = (query: string): AgentResponse => {
        const lowerQuery = query.toLowerCase();

        // Forecast Intelligence Agent responses
        if (lowerQuery.includes('forecast') || lowerQuery.includes('accuracy') || lowerQuery.includes('prediction')) {
            return {
                agentId: 'fi',
                confidence: 94.7,
                response: `**Forecast Intelligence Agent (FI) Analysis:**

📊 **Current Forecast Performance:**
• Accuracy: 94.7% (↑2.3% vs last quarter)
• Revenue forecast: $47.2M (confidence: 94.7%)
• Processing 1.2M data points across 47 drivers

🎯 **Key Insights:**
• Q4 revenue acceleration detected (+23% vs plan)
• SaaS segment driving $2.3M uplift
• APAC region showing unusual patterns (investigating)

📈 **Recommendations:**
• Increase Q1 targets by 8-12% based on momentum
• Monitor APAC region closely for validation
• Implement enhanced ML models for SaaS forecasting

Would you like me to deep dive into any specific area?`,
                data: {
                    currentAccuracy: 94.7,
                    forecastValue: 47.2,
                    drivers: 47,
                    dataPoints: '1.2M'
                }
            };
        }

        // Scenario Architect Agent responses
        if (lowerQuery.includes('scenario') || lowerQuery.includes('recession') || lowerQuery.includes('simulation')) {
            return {
                agentId: 'sa',
                confidence: 87.3,
                response: `**Scenario Architect Agent (SA) Analysis:**

🎲 **Monte Carlo Simulation Results (10,000 iterations):**
• P10 (Conservative): $41.3M
• P50 (Base Case): $47.2M
• P90 (Optimistic): $53.8M

📉 **Recession Scenario Impact:**
• Revenue: -18% to -24%
• EBITDA margin: -3.5pp to -5.2pp
• Recovery timeline: 6-9 months

🔄 **Current Simulations:**
• Market growth scenarios: 5 variations
• Win rate sensitivity: ±15% range
• Deal size impact: $75K-$200K range

💡 **Strategic Recommendations:**
• Build cash reserves to 6-month runway
• Diversify revenue streams (reduce concentration)
• Implement dynamic pricing models

Run specific scenario analysis?`,
                data: {
                    p10: 41.3,
                    p50: 47.2,
                    p90: 53.8,
                    iterations: 10000
                }
            };
        }

        // Variance Detective Agent responses
        if (lowerQuery.includes('variance') || lowerQuery.includes('difference') || lowerQuery.includes('gap')) {
            return {
                agentId: 'vd',
                confidence: 91.2,
                response: `**Variance Detective Agent (VD) Investigation:**

🔍 **Variance Analysis Results:**
• Total variance: -$2.3M (EMEA region)
• Root causes identified: 3 major factors

📊 **Breakdown by Factor:**
1. **FX Impact**: -$800K (delayed hedging)
2. **Volume shortfall**: -$1.2M (supply chain)
3. **Price erosion**: -$300K (competition)

🎯 **Corrective Actions:**
• Implement automated FX hedging
• Accelerate supply chain diversification
• Launch value-based pricing initiative

📈 **Recovery Forecast:**
• Q1 2025: Recover $1.2M
• Q2 2025: Full recovery + $300K upside

Need detailed variance bridge?`,
                data: {
                    totalVariance: -2.3,
                    fxImpact: -0.8,
                    volumeImpact: -1.2,
                    priceImpact: -0.3
                }
            };
        }

        // Default response
        return {
            agentId: 'fi',
            confidence: 85.0,
            response: `I'm analyzing your query with our AI agents. Here's what I found:

📊 **Quick Insights:**
• Current forecast accuracy: 94.7%
• Revenue trending: +8.3% vs plan
• Cash position strong: $12.8M

Which specific area would you like to explore:
1. 📈 Forecast details and drivers
2. 🎲 Scenario modeling and simulations
3. 🔍 Variance analysis and root causes
4. 📋 Consolidated reporting

Just ask, and I'll coordinate with the right agent!`,
            data: {}
        };
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            role: 'user',
            content: inputValue,
            timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate agent processing
        const agentResponse = getAgentResponse(inputValue);
        const agent = aiAgents?.find(a => a.id === agentResponse.agentId);

        if (agent) {
            setActiveAgents([agent.id]);
        }

        // Simulate response delay
        setTimeout(() => {
            const assistantMessage: Message = {
                role: 'assistant',
                content: agentResponse.response,
                timestamp: new Date().toISOString()
            };

            setMessages(prev => [...prev, assistantMessage]);
            setIsTyping(false);
            setActiveAgents([]);

            // Show agent notification
            if (agent && agentNotifications) {
                // Could trigger a notification here
            }
        }, 2000 + Math.random() * 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-40"
                    />

                    {/* Assistant Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">AI Assistant</h2>
                                    <p className="text-sm text-gray-500">Powered by 4 specialized agents</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Active Agents */}
                        {activeAgents.length > 0 && (
                            <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                                <div className="flex items-center space-x-2">
                                    <Zap className="w-4 h-4 text-purple-600 animate-pulse" />
                                    <span className="text-sm font-medium text-purple-900">Active Agents:</span>
                                    <div className="flex space-x-2">
                                        {activeAgents.map(agentId => {
                                            const agent = aiAgents?.find(a => a.id === agentId);
                                            if (!agent) return null;
                                            return (
                                                <div
                                                    key={agentId}
                                                    className={`w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold ${agent.color === 'blue' ? 'bg-blue-500' :
                                                            agent.color === 'purple' ? 'bg-purple-500' :
                                                                agent.color === 'orange' ? 'bg-orange-500' :
                                                                    'bg-green-500'
                                                        }`}
                                                >
                                                    {agent.symbol}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-sm ${message.role === 'user'
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                            : 'bg-gray-100 text-gray-900'
                                        } rounded-xl p-4`}>
                                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                        <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                                            }`}>
                                            {new Date(message.timestamp).toLocaleTimeString()}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-gray-100 rounded-xl p-4">
                                        <div className="flex space-x-2">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div className="p-4 border-t border-b bg-gray-50">
                            <p className="text-xs text-gray-500 mb-2">Quick Actions:</p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Show forecast accuracy',
                                    'Run recession scenario',
                                    'Analyze Q4 variance',
                                    'Monte Carlo simulation'
                                ].map((action, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setInputValue(action)}
                                        className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-6 bg-white border-t">
                            <div className="flex space-x-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask about forecasts, scenarios, or variances..."
                                    className="flex-1 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex items-center justify-center mt-4 space-x-2 text-xs text-gray-500">
                                <Sparkles className="w-3 h-3" />
                                <span>Powered by GPT-4 & specialized finance agents</span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
} 