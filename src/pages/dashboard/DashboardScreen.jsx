import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Activity, Users, ArrowUpRight, ArrowDownRight, BarChart3, PieChart, Bell } from 'lucide-react';
import DesktopLayout from '../../components/layout/DesktopLayout';

const DashboardScreen = () => {
  const stats = [
    { title: "Today's P&L", value: "₹12,450", change: "+2.43%", icon: TrendingUp, color: "#10B981", isPositive: true },
    { title: "Total Invested", value: "₹5.1L", subtitle: "Active positions", icon: DollarSign, color: "#00BCD4" },
    { title: "Win Rate", value: "68.5%", subtitle: "Last 30 days", icon: Activity, color: "#8B5CF6" },
    { title: "Rank", value: "#124", subtitle: "Leaderboard", icon: Users, color: "#FFD700" },
  ];

  const marketIndices = [
    { name: "NIFTY 50", value: "21,456.35", change: "+1.24%", isPositive: true },
    { name: "SENSEX", value: "71,234.56", change: "+0.98%", isPositive: true },
    { name: "BANK NIFTY", value: "45,678.90", change: "-0.34%", isPositive: false },
  ];

  const topMovers = [
    { symbol: "RELIANCE", name: "Reliance Industries", price: "₹2,456", change: "+3.45%", isPositive: true },
    { symbol: "TCS", name: "Tata Consultancy", price: "₹3,678", change: "+2.34%", isPositive: true },
    { symbol: "HDFC", name: "HDFC Bank", price: "₹1,567", change: "-1.23%", isPositive: false },
    { symbol: "INFY", name: "Infosys", price: "₹1,456", change: "+1.87%", isPositive: true },
  ];

  const recentActivity = [
    { action: "Buy", symbol: "RELIANCE", quantity: 10, price: "₹2,450", time: "2 hours ago" },
    { action: "Sell", symbol: "TCS", quantity: 5, price: "₹3,680", time: "5 hours ago" },
    { action: "Buy", symbol: "INFY", quantity: 15, price: "₹1,440", time: "1 day ago" },
  ];

  return (
    <DesktopLayout>
      <div className="p-4 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6 md:mb-8"
        >
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2">Dashboard</h1>
            <p className="text-white/60 text-xs md:text-base">Track your trading performance and market insights</p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-2 md:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors relative">
              <Bell className="w-5 h-5 md:w-6 md:h-6 text-white/60" />
              <span className="absolute top-1 right-1 md:top-2 md:right-2 w-2 h-2 bg-[#10B981] rounded-full"></span>
            </button>
            <div className="hidden md:flex items-center space-x-3">
              <div className="text-right">
                <p className="text-white font-semibold text-sm">John Doe</p>
                <p className="text-white/60 text-xs">Premium Member</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center border-2 border-[#10B981]">
                <span className="text-white font-bold">JD</span>
              </div>
            </div>
            <div className="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center border-2 border-[#10B981]">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all hover:shadow-xl hover:shadow-[#10B981]/10"
              >
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: stat.color }} />
                  </div>
                  {stat.change && (
                    <span className={`text-xs md:text-sm font-semibold ${stat.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                      {stat.change}
                    </span>
                  )}
                </div>
                <p className="text-white/60 text-xs md:text-sm mb-1">{stat.title}</p>
                <p className="text-white text-xl md:text-2xl font-bold">{stat.value}</p>
                {stat.subtitle && <p className="text-white/40 text-xs mt-1">{stat.subtitle}</p>}
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Market Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00BCD4]/40 to-[#00BCD4]/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#00BCD4]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Market Overview</h3>
                  <p className="text-white/60 text-xs">Live market indices</p>
                </div>
              </div>
              <button className="text-[#10B981] text-sm font-semibold hover:underline">View All</button>
            </div>

            <div className="space-y-4">
              {marketIndices.map((index, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div>
                    <p className="text-white font-semibold">{index.name}</p>
                    <p className="text-white text-2xl font-bold mt-1">{index.value}</p>
                  </div>
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${index.isPositive ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#EF4444]/20 text-[#EF4444]'}`}>
                    {index.isPositive ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                    <span className="font-bold">{index.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6]/40 to-[#8B5CF6]/20 flex items-center justify-center">
                <PieChart className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Portfolio</h3>
                <p className="text-white/60 text-xs">Asset distribution</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { sector: "Technology", percentage: 45, color: "#10B981" },
                { sector: "Banking", percentage: 30, color: "#00BCD4" },
                { sector: "Pharma", percentage: 15, color: "#8B5CF6" },
                { sector: "Others", percentage: 10, color: "#FFD700" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white/80 text-sm">{item.sector}</p>
                    <p className="text-white font-semibold text-sm">{item.percentage}%</p>
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

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Top Movers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">Top Movers</h3>
              <button className="text-[#10B981] text-sm font-semibold hover:underline">View All</button>
            </div>

            <div className="space-y-3">
              {topMovers.map((stock, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#10B981]/40 to-[#10B981]/20 flex items-center justify-center">
                      <span className="text-[#10B981] font-bold text-xs">{stock.symbol.substring(0, 2)}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{stock.symbol}</p>
                      <p className="text-white/60 text-xs">{stock.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">{stock.price}</p>
                    <p className={`text-sm font-semibold ${stock.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                      {stock.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">Recent Activity</h3>
              <button className="text-[#10B981] text-sm font-semibold hover:underline">View All</button>
            </div>

            <div className="space-y-3">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-start space-x-3">
                    <div className={`px-3 py-1 rounded-lg text-xs font-bold ${activity.action === 'Buy' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#EF4444]/20 text-[#EF4444]'}`}>
                      {activity.action}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{activity.symbol}</p>
                      <p className="text-white/60 text-xs mt-1">{activity.quantity} shares @ {activity.price}</p>
                      <p className="text-white/40 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default DashboardScreen;
