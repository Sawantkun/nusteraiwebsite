import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, BarChart3, AlertCircle } from 'lucide-react';
import BottomNavigationBar from '../../components/common/BottomNavigationBar';
import GlassCard from '../../components/common/GlassCard';

const InsightsScreen = () => {
  const insights = [
    {
      title: 'Market Bullish Trend',
      description: 'Nifty 50 showing strong upward momentum. Consider buying tech stocks.',
      sentiment: 'Bullish',
      icon: TrendingUp,
      color: '#10B981',
    },
    {
      title: 'Banking Sector Analysis',
      description: 'Bank Nifty consolidating. Wait for breakout before entering positions.',
      sentiment: 'Neutral',
      icon: BarChart3,
      color: '#F59E0B',
    },
    {
      title: 'Volatility Alert',
      description: 'Increased volatility expected in IT sector. Use stop-loss orders.',
      sentiment: 'Caution',
      icon: AlertCircle,
      color: '#EF4444',
    },
  ];

  const trendingStocks = [
    { symbol: 'RELIANCE', sentiment: 'Bullish', confidence: 85 },
    { symbol: 'TCS', sentiment: 'Bullish', confidence: 78 },
    { symbol: 'INFY', sentiment: 'Neutral', confidence: 65 },
    { symbol: 'HDFC', sentiment: 'Bearish', confidence: 72 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A0B2E] to-[#16213E] pb-24">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Sparkles className="w-8 h-8 text-[#8B5CF6]" />
            <h1 className="text-3xl font-bold text-white">AI Insights</h1>
          </div>
          <p className="text-white/60">Powered by advanced market analysis</p>
        </motion.div>

        {/* AI Insights */}
        <div className="space-y-4 mb-6">
          {insights.map((insight, i) => (
            <GlassCard key={i} animate delay={0.1 * i} hover>
              <div className="flex items-start space-x-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${insight.color}40, ${insight.color}20)`,
                  }}
                >
                  <insight.icon className="w-6 h-6" style={{ color: insight.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold">{insight.title}</h3>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{
                        background: `${insight.color}20`,
                        color: insight.color,
                      }}
                    >
                      {insight.sentiment}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Trending Stocks */}
        <GlassCard animate delay={0.4}>
          <h3 className="text-lg font-bold text-white mb-4">Trending Stocks</h3>
          <div className="space-y-3">
            {trendingStocks.map((stock, i) => (
              <motion.div
                key={stock.symbol}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5"
              >
                <div className="flex-1">
                  <p className="text-white font-bold mb-1">{stock.symbol}</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#E91E63]"
                        style={{ width: `${stock.confidence}%` }}
                      />
                    </div>
                    <span className="text-white/60 text-xs">{stock.confidence}%</span>
                  </div>
                </div>
                <span
                  className={`ml-4 text-sm font-semibold ${
                    stock.sentiment === 'Bullish'
                      ? 'text-[#10B981]'
                      : stock.sentiment === 'Bearish'
                      ? 'text-[#EF4444]'
                      : 'text-[#F59E0B]'
                  }`}
                >
                  {stock.sentiment}
                </span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      <BottomNavigationBar />
    </div>
  );
};

export default InsightsScreen;
