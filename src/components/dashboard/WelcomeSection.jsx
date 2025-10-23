import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const WelcomeSection = ({ userName = 'Trader' }) => {
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { text: 'Good Morning', emoji: '🌅' };
    if (hour < 17) return { text: 'Good Afternoon', emoji: '☀️' };
    return { text: 'Good Evening', emoji: '🌙' };
  };

  const greeting = getTimeGreeting();
  const isMarketOpen = new Date().getHours() >= 9 && new Date().getHours() < 15;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl p-6 mb-6"
      style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(147, 51, 234, 0.12), rgba(245, 158, 11, 0.08))',
        border: '1.5px solid rgba(139, 92, 246, 0.3)',
        boxShadow: '0 8px 32px rgba(139, 92, 246, 0.15)',
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-60" />

      <div className="relative z-10">
        {/* Greeting */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/70 text-sm mb-1">
              {greeting.text} {greeting.emoji}
            </p>
            <h2 className="text-2xl font-bold text-white">{userName}</h2>
          </div>

          {/* Market Status Badge */}
          <div
            className={`px-3 py-1 rounded-full flex items-center space-x-2 ${
              isMarketOpen
                ? 'bg-[#10B981]/20 border border-[#10B981]/30'
                : 'bg-white/10 border border-white/20'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${isMarketOpen ? 'bg-[#10B981] animate-glow' : 'bg-white/60'}`} />
            <span className={`text-xs font-semibold ${isMarketOpen ? 'text-[#10B981]' : 'text-white/70'}`}>
              {isMarketOpen ? 'LIVE' : 'CLOSED'}
            </span>
          </div>
        </div>

        {/* Portfolio Value */}
        <div className="mb-4">
          <p className="text-white/60 text-sm mb-1">Portfolio Value</p>
          <h3 className="text-3xl font-black text-white mb-1">₹5,24,680</h3>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4 text-[#10B981]" />
            <span className="text-[#10B981] font-semibold text-sm">+₹12,450</span>
            <span className="text-[#10B981]/80 text-sm">(+2.43%)</span>
          </div>
        </div>

        {/* Quick Action Button */}
        <button className="w-full py-3 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] rounded-xl text-white font-semibold shadow-[0_4px_16px_rgba(233,30,99,0.3)] hover:shadow-[0_6px_20px_rgba(233,30,99,0.4)] transition-all">
          Start Trading
        </button>
      </div>
    </motion.div>
  );
};

export default WelcomeSection;
