import { motion } from 'framer-motion';
import { Search, TrendingUp } from 'lucide-react';
import BottomNavigationBar from '../../components/common/BottomNavigationBar';
import GlassCard from '../../components/common/GlassCard';

const TradingScreen = () => {
  const stocks = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: '2,456.80', change: '+5.2%', isPositive: true },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: '3,890.50', change: '+4.8%', isPositive: true },
    { symbol: 'INFY', name: 'Infosys', price: '1,567.20', change: '+3.9%', isPositive: true },
    { symbol: 'HDFC', name: 'HDFC Bank', price: '1,678.90', change: '-2.3%', isPositive: false },
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
          Trading
        </motion.h1>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search stocks..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 outline-none focus:border-[#E91E63] transition-colors"
            />
          </div>
        </div>

        {/* Stocks List */}
        <div className="space-y-3">
          {stocks.map((stock, i) => (
            <GlassCard key={stock.symbol} animate delay={0.1 * i} hover>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-white font-bold text-lg mb-1">{stock.symbol}</p>
                  <p className="text-white/60 text-sm">{stock.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-lg mb-1">₹{stock.price}</p>
                  <div className="flex items-center justify-end space-x-1">
                    <TrendingUp className={`w-4 h-4 ${stock.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`} />
                    <span className={`text-sm font-semibold ${stock.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                      {stock.change}
                    </span>
                  </div>
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

export default TradingScreen;
