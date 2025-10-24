import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, PieChart, BarChart3, Download, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import DesktopLayout from '../../components/layout/DesktopLayout';

const PortfolioScreen = () => {
  const holdings = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', qty: 10, avgPrice: '2,340.50', currentPrice: '2,456.80', pnl: '+1,163', pnlPercent: '+4.97%', isPositive: true, invested: '23,405', currentValue: '24,568' },
    { symbol: 'TCS', name: 'Tata Consultancy', qty: 5, avgPrice: '3,750.00', currentPrice: '3,890.50', pnl: '+702', pnlPercent: '+3.75%', isPositive: true, invested: '18,750', currentValue: '19,452' },
    { symbol: 'HDFC', name: 'HDFC Bank', qty: 15, avgPrice: '1,720.00', currentPrice: '1,678.90', pnl: '-616', pnlPercent: '-2.39%', isPositive: false, invested: '25,800', currentValue: '25,183' },
    { symbol: 'INFY', name: 'Infosys', qty: 8, avgPrice: '1,520.00', currentPrice: '1,567.20', pnl: '+377', pnlPercent: '+3.11%', isPositive: true, invested: '12,160', currentValue: '12,537' },
    { symbol: 'ICICIBANK', name: 'ICICI Bank', qty: 20, avgPrice: '945.00', currentPrice: '987.45', pnl: '+849', pnlPercent: '+4.49%', isPositive: true, invested: '18,900', currentValue: '19,749' },
  ];

  const transactions = [
    { type: 'Buy', symbol: 'RELIANCE', qty: 10, price: '2,340.50', date: '15 Nov 2024', amount: '23,405' },
    { type: 'Sell', symbol: 'WIPRO', qty: 20, price: '465.00', date: '12 Nov 2024', amount: '9,300' },
    { type: 'Buy', symbol: 'TCS', qty: 5, price: '3,750.00', date: '10 Nov 2024', amount: '18,750' },
    { type: 'Buy', symbol: 'HDFC', qty: 15, price: '1,720.00', date: '8 Nov 2024', amount: '25,800' },
  ];

  const performanceMetrics = [
    { label: 'Total Invested', value: '₹4,98,015', color: '#00BCD4' },
    { label: 'Current Value', value: '₹5,24,680', color: '#10B981' },
    { label: 'Total P&L', value: '+₹26,665', subtext: '+5.35%', color: '#10B981', isPositive: true },
    { label: 'Day P&L', value: '+₹12,450', subtext: '+2.43%', color: '#10B981', isPositive: true },
  ];

  const sectorAllocation = [
    { sector: 'Technology', percentage: 35, value: '₹1,83,638', color: '#10B981' },
    { sector: 'Banking', percentage: 30, value: '₹1,57,404', color: '#00BCD4' },
    { sector: 'Energy', percentage: 25, value: '₹1,31,170', color: '#8B5CF6' },
    { sector: 'Others', percentage: 10, value: '₹52,468', color: '#FFD700' },
  ];

  return (
    <DesktopLayout>
      <div className="p-4 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-3"
        >
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2">Portfolio</h1>
            <p className="text-white/60 text-xs md:text-base">Track your investments and performance</p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-3">
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-white/80 transition-all flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Last 30 Days</span>
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#059669] hover:shadow-lg hover:shadow-[#10B981]/50 rounded-xl text-white transition-all flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Export</span>
            </button>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <p className="text-white/60 text-sm mb-2">{metric.label}</p>
              <p className="text-white text-2xl font-bold mb-1">{metric.value}</p>
              {metric.subtext && (
                <div className={`flex items-center space-x-1 ${metric.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                  {metric.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  <span className="text-sm font-semibold">{metric.subtext}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Holdings Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981]/40 to-[#10B981]/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Holdings</h3>
                  <p className="text-white/60 text-xs">{holdings.length} positions</p>
                </div>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-7 gap-4 pb-3 mb-3 border-b border-white/10">
              <div className="col-span-2">
                <p className="text-white/60 text-xs font-semibold">Stock</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-xs font-semibold">Qty</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-xs font-semibold">Avg Price</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-xs font-semibold">LTP</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-xs font-semibold">Current Value</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-xs font-semibold">P&L</p>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {holdings.map((holding, idx) => (
                <div
                  key={holding.symbol}
                  className="grid grid-cols-7 gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <div className="col-span-2 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#10B981]/40 to-[#10B981]/20 flex items-center justify-center">
                      <span className="text-[#10B981] font-bold text-xs">{holding.symbol.substring(0, 2)}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{holding.symbol}</p>
                      <p className="text-white/60 text-xs">{holding.name}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center justify-end">
                    <p className="text-white text-sm">{holding.qty}</p>
                  </div>
                  <div className="text-right flex items-center justify-end">
                    <p className="text-white/80 text-sm">₹{holding.avgPrice}</p>
                  </div>
                  <div className="text-right flex items-center justify-end">
                    <p className="text-white font-semibold text-sm">₹{holding.currentPrice}</p>
                  </div>
                  <div className="text-right flex items-center justify-end">
                    <p className="text-white font-semibold text-sm">₹{holding.currentValue}</p>
                  </div>
                  <div className="text-right flex items-center justify-end">
                    <div>
                      <p className={`font-bold text-sm ${holding.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                        ₹{holding.pnl}
                      </p>
                      <p className={`text-xs ${holding.isPositive ? 'text-[#10B981]/80' : 'text-[#EF4444]/80'}`}>
                        {holding.pnlPercent}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sector Allocation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6]/40 to-[#8B5CF6]/20 flex items-center justify-center">
                <PieChart className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Sector Allocation</h3>
                <p className="text-white/60 text-xs">Diversification breakdown</p>
              </div>
            </div>

            <div className="space-y-4">
              {sectorAllocation.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <p className="text-white/80 text-sm font-medium">{item.sector}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold text-sm">{item.percentage}%</p>
                      <p className="text-white/60 text-xs">{item.value}</p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ delay: 0.8 + idx * 0.1, duration: 0.8 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold text-lg">Recent Transactions</h3>
            <button className="text-[#10B981] text-sm font-semibold hover:underline">View All</button>
          </div>

          <div className="space-y-3">
            {transactions.map((transaction, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <div className="flex items-center space-x-4">
                  <div className={`px-3 py-1 rounded-lg text-xs font-bold ${transaction.type === 'Buy' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#EF4444]/20 text-[#EF4444]'}`}>
                    {transaction.type}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{transaction.symbol}</p>
                    <p className="text-white/60 text-sm">{transaction.qty} shares @ ₹{transaction.price}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">₹{transaction.amount}</p>
                  <p className="text-white/60 text-sm">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DesktopLayout>
  );
};

export default PortfolioScreen;
