import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import BottomNavigationBar from '../../components/common/BottomNavigationBar';
import GlassCard from '../../components/common/GlassCard';

const PortfolioScreen = () => {
  const holdings = [
    { symbol: 'RELIANCE', qty: 10, avgPrice: '2,340.50', currentPrice: '2,456.80', pnl: '+₹1,163', pnlPercent: '+4.97%', isPositive: true },
    { symbol: 'TCS', qty: 5, avgPrice: '3,750.00', currentPrice: '3,890.50', pnl: '+₹702', pnlPercent: '+3.75%', isPositive: true },
    { symbol: 'HDFC', qty: 15, avgPrice: '1,720.00', currentPrice: '1,678.90', pnl: '-₹616', pnlPercent: '-2.39%', isPositive: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A0B2E] to-[#16213E] pb-24">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-6"
        >
          Portfolio
        </motion.h1>

        {/* Summary Card */}
        <GlassCard className="mb-6" animate>
          <div className="text-center py-4">
            <p className="text-white/60 text-sm mb-2">Total Portfolio Value</p>
            <h2 className="text-4xl font-black text-white mb-3">₹5,24,680</h2>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-[#10B981]" />
              <span className="text-[#10B981] font-bold text-lg">+₹12,450</span>
              <span className="text-[#10B981]/80 text-sm">(+2.43%)</span>
            </div>
          </div>
        </GlassCard>

        {/* Holdings */}
        <h3 className="text-lg font-bold text-white mb-4">Holdings</h3>
        <div className="space-y-3">
          {holdings.map((holding, i) => (
            <GlassCard key={holding.symbol} animate delay={0.1 * (i + 1)} hover>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-white font-bold text-lg mb-1">{holding.symbol}</p>
                  <p className="text-white/60 text-sm">Qty: {holding.qty}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-lg mb-1">₹{holding.currentPrice}</p>
                  <p className="text-white/60 text-sm">Avg: ₹{holding.avgPrice}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-white/60 text-sm">P&L</span>
                <div className="text-right">
                  <span className={`font-bold ${holding.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                    {holding.pnl}
                  </span>
                  <span className={`text-sm ml-2 ${holding.isPositive ? 'text-[#10B981]/80' : 'text-[#EF4444]/80'}`}>
                    {holding.pnlPercent}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <BottomNavigationBar />
    </div>
  );
};

export default PortfolioScreen;
