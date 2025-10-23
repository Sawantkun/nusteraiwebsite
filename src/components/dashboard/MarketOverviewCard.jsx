import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const MarketOverviewCard = () => {
  const indices = [
    { name: 'NIFTY 50', value: '21,456.70', change: '+124.50', changePercent: '+0.58%', isPositive: true },
    { name: 'SENSEX', value: '71,234.89', change: '+328.40', changePercent: '+0.46%', isPositive: true },
    { name: 'BANK NIFTY', value: '45,678.20', change: '-89.30', changePercent: '-0.20%', isPositive: false },
    { name: 'NIFTY IT', value: '32,890.50', change: '+256.80', changePercent: '+0.79%', isPositive: true },
  ];

  return (
    <GlassCard animate delay={0.2}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Market Overview</h3>
        <span className="text-xs text-white/60">Live</span>
      </div>

      <div className="space-y-3">
        {indices.map((index, i) => (
          <motion.div
            key={index.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div>
              <p className="text-white font-semibold text-sm mb-1">{index.name}</p>
              <p className="text-white/60 text-xs">{index.value}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end space-x-1 mb-1">
                {index.isPositive ? (
                  <TrendingUp className="w-4 h-4 text-[#10B981]" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-[#EF4444]" />
                )}
                <span className={`text-sm font-semibold ${index.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                  {index.change}
                </span>
              </div>
              <span className={`text-xs ${index.isPositive ? 'text-[#10B981]/80' : 'text-[#EF4444]/80'}`}>
                {index.changePercent}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
};

export default MarketOverviewCard;
