import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Sparkles, Trophy, BarChart3 } from 'lucide-react';

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A0B2E] to-[#16213E] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-20"
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <h1 className="text-2xl font-bold text-white">ALGOSPHERE</h1>
          </div>

          <div className="flex space-x-4">
            <Link to="/signin">
              <button className="px-6 py-2 text-white/80 hover:text-white transition-colors">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-2 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white rounded-xl font-semibold hover:shadow-[0_4px_20px_rgba(233,30,99,0.4)] transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Trade Smart,
              <br />
              <span className="text-gradient-primary">Win Big</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Experience the future of algorithmic trading with AI-powered insights,
              <br />
              real-time market data, and competitive gaming arena.
            </p>
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white rounded-2xl font-bold text-lg shadow-[0_8px_32px_rgba(233,30,99,0.4)] hover:shadow-[0_12px_40px_rgba(233,30,99,0.5)] transition-all"
              >
                Start Trading Now
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: 'Real-Time Trading',
              description: 'Execute trades instantly with live market data',
              color: 'from-[#10B981] to-[#059669]',
            },
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: 'AI Insights',
              description: 'Get intelligent market analysis and predictions',
              color: 'from-[#8B5CF6] to-[#9333EA]',
            },
            {
              icon: <Trophy className="w-8 h-8" />,
              title: 'Gaming Arena',
              description: 'Compete with traders and climb the leaderboard',
              color: 'from-[#FFD700] to-[#F59E0B]',
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: 'Portfolio Analytics',
              description: 'Track performance with detailed insights',
              color: 'from-[#00BCD4] to-[#0891B2]',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="glass-card-strong rounded-3xl p-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-4xl font-black text-gradient-primary mb-2">10K+</h4>
                <p className="text-white/60 text-sm">Active Traders</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-gradient-success mb-2">₹50Cr+</h4>
                <p className="text-white/60 text-sm">Volume Traded</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-gradient-primary mb-2">99.9%</h4>
                <p className="text-white/60 text-sm">Uptime</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 text-center py-12 mt-20"
      >
        <p className="text-white/40 text-sm">
          © 2025 AlgoSphere. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default HomeScreen;
