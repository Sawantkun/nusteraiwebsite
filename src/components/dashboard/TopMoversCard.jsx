import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const TopMoversCard = () => {
  const gainers = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: '2,456.80', change: '+5.2%' },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: '3,890.50', change: '+4.8%' },
    { symbol: 'INFY', name: 'Infosys', price: '1,567.20', change: '+3.9%' },
  ];

  const losers = [
    { symbol: 'HDFC', name: 'HDFC Bank', price: '1,678.90', change: '-2.3%' },
    { symbol: 'ICICI', name: 'ICICI Bank', price: '987.40', change: '-1.8%' },
    { symbol: 'SBIN', name: 'State Bank of India', price: '567.80', change: '-1.5%' },
  ];

  return (
    <GlassCard animate delay={0.3}>
      <h3 className="text-lg font-bold text-white mb-4">Top Movers</h3>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        <button className="flex-1 py-2 px-4 bg-[#10B981]/20 text-[#10B981] rounded-lg font-semibold text-sm">
          Gainers
        </button>
        <button className="flex-1 py-2 px-4 bg-white/5 text-white/60 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors">
          Losers
        </button>
      </div>

      {/* Gainers List */}
      <div className="space-y-3">
        {gainers.map((stock, i) => (
          <motion.div
            key={stock.symbol}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <p className="text-white font-semibold text-sm mb-1">{stock.symbol}</p>
              <p className="text-white/50 text-xs">{stock.name}</p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold text-sm mb-1">₹{stock.price}</p>
              <div className="flex items-center justify-end space-x-1">
                <TrendingUp className="w-3 h-3 text-[#10B981]" />
                <span className="text-[#10B981] text-xs font-semibold">{stock.change}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
};

export default TopMoversCard;
