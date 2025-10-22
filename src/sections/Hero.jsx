import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3, TrendingUp, Zap, Brain, CreditCard, PieChart, ArrowRight, Sparkles, Bot
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Aurora from "../components/Aurora"

export default function Hero() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedValues, setAnimatedValues] = useState({
    totalExpenses: 0,
    totalRevenue: 0,
    transactions: []
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        totalExpenses: 200,
        totalRevenue: 175,
        transactions: [
          { name: 'AI Analysis: Grocery', amount: '+$450', type: 'income', icon: Bot },
          { name: 'Smart Categorization', amount: '-$280', type: 'expense', icon: Brain },
          { name: 'Predicted Savings', amount: '+$1200', type: 'income', icon: Sparkles }
        ]
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Header */}
      <Navbar />
      <div className='md:block hidden absolute inset-0 overflow-hidden h-full w-full'>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#8B5CF6"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

     
      {/* Main Content */}
      <main className="px-4 lg:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Left Content */}
          <motion.div
            className="z-10 w-full lg:w-2/3 space-y-8 md:pt-[70px] pt-0"
            {...fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform Your Business with&nbsp;
              <span className="bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent">
                AI Agents
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Empower your business with intelligent AI agents and cutting-edge SaaS solutions that automate, optimize, and revolutionize your operations.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button className="group bg-gradient-to-r from-[#845EF6] to-[#F8A588] hover:from-[#795EF6] hover:to-[#845EF6] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#845EF6]/25 flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-4 border border-gray-600 hover:border-[#845EF6] rounded-lg font-semibold transition-all duration-300 hover:text-[#795EF6]">
                View Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            className="w-full lg:w-1/3 space-y-6 z-10"
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <motion.div
              className="bg-gradient-to-br from-[#795EF6]/30 to-[#F8A588]/20 backdrop-blur-sm border border-[#845EF6]/20 p-6 rounded-2xl hover:border-[#845EF6]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#845EF6]/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onMouseEnter={() => setHoveredCard('expenses')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card content */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[#795EF6] text-sm font-medium">Active AI Agents</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    {animatedValues.totalExpenses.toLocaleString()}+
                  </p>
                  <p className="text-gray-400 text-sm">This month</p>
                </div>
                <div className="w-10 h-10 bg-[#845EF6]/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#795EF6]" />
                </div>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#795EF6] to-[#F8A588] h-2 rounded-full transition-all duration-1000"
                  style={{ width: hoveredCard === 'expenses' ? '75%' : '60%' }}
                />
              </div>
            </motion.div>

            {/* AI Insights */}
            <motion.div
              className="bg-gray-900/50 border border-gray-700 p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-[#795EF6]" />
                <span>Latest AI Solutions</span>
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'SkillOrbit AI', amount: '+98 users', type: 'income', icon: Bot },
                  { name: 'AlgoSphere AI', amount: '+40 users', type: 'expense', icon: Brain },
                ].map((tx, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#845EF6]/20 rounded-full flex items-center justify-center">
                        <tx.icon className="w-4 h-4 text-[#795EF6]" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{tx.name}</p>
                        <p className="text-[#795EF6] text-xs">AI Generated</p>
                      </div>
                    </div>
                    <span className={`font-semibold text-sm ${tx.type === 'income' ? 'text-[#795EF6]' : 'text-gray-400'}`}>
                      {tx.amount}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* AI Metrics Card */}
            <motion.div
              className="bg-gradient-to-br from-[#795EF6]/20 to-[#F8A588]/10 border border-[#845EF6]/30 p-4 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#795EF6] to-[#F8A588] rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">AI Performance</p>
                    <p className="text-[#795EF6] text-sm">Real-time Metrics</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <p className="text-gray-400 text-xs">Accuracy</p>
                    <p className="text-white font-semibold">98.5%</p>
                  </div>
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <p className="text-gray-400 text-xs">Response Time</p>
                    <p className="text-white font-semibold">0.2s</p>
                  </div>
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <p className="text-gray-400 text-xs">Active Models</p>
                    <p className="text-white font-semibold">12</p>
                  </div>
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <p className="text-gray-400 text-xs">API Calls</p>
                    <p className="text-white font-semibold">1.2M</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </main>
    </div>
  );
}
