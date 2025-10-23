import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Activity, Users } from 'lucide-react';
import BottomNavigationBar from '../../components/common/BottomNavigationBar';
import WelcomeSection from '../../components/dashboard/WelcomeSection';
import StatCard from '../../components/dashboard/StatCard';
import MarketOverviewCard from '../../components/dashboard/MarketOverviewCard';
import TopMoversCard from '../../components/dashboard/TopMoversCard';

const DashboardScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A0B2E] to-[#16213E] pb-24">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h1 className="text-3xl font-black text-white">Dashboard</h1>
            <p className="text-white/60 text-sm mt-1">Track your trading performance</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center border-2 border-[#10B981]">
            <span className="text-white font-bold text-sm">JD</span>
          </div>
        </motion.div>

        {/* Welcome Section */}
        <WelcomeSection userName="John" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatCard
            title="Today's P&L"
            value="₹12,450"
            change="+2.43%"
            icon={TrendingUp}
            color="#10B981"
            isPositive={true}
            delay={0.1}
          />
          <StatCard
            title="Total Invested"
            value="₹5.1L"
            subtitle="Active positions"
            icon={DollarSign}
            color="#00BCD4"
            delay={0.15}
          />
          <StatCard
            title="Win Rate"
            value="68.5%"
            subtitle="Last 30 days"
            icon={Activity}
            color="#8B5CF6"
            delay={0.2}
          />
          <StatCard
            title="Rank"
            value="#124"
            subtitle="Leaderboard"
            icon={Users}
            color="#FFD700"
            delay={0.25}
          />
        </div>

        {/* Market Overview */}
        <div className="mb-6">
          <MarketOverviewCard />
        </div>

        {/* Top Movers */}
        <div className="mb-6">
          <TopMoversCard />
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-4"
        >
          <button className="glass-card rounded-2xl p-4 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981]/40 to-[#10B981]/20 flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-[#10B981]" />
            </div>
            <p className="text-white font-semibold text-sm">Buy Stocks</p>
            <p className="text-white/50 text-xs mt-1">Start trading now</p>
          </button>

          <button className="glass-card rounded-2xl p-4 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6]/40 to-[#8B5CF6]/20 flex items-center justify-center mb-3">
              <Activity className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <p className="text-white font-semibold text-sm">View Insights</p>
            <p className="text-white/50 text-xs mt-1">AI predictions</p>
          </button>
        </motion.div>
      </div>

      <BottomNavigationBar />
    </div>
  );
};

export default DashboardScreen;
