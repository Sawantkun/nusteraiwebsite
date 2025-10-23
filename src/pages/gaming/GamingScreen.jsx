import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp, Award } from 'lucide-react';
import BottomNavigationBar from '../../components/common/BottomNavigationBar';
import GlassCard from '../../components/common/GlassCard';

const GamingScreen = () => {
  const topPlayers = [
    { rank: 1, name: 'Alex Morgan', score: 12450, medal: '🥇' },
    { rank: 2, name: 'Sarah Chen', score: 11890, medal: '🥈' },
    { rank: 3, name: 'Mike Johnson', score: 10230, medal: '🥉' },
    { rank: 4, name: 'Emma Davis', score: 9870, medal: '' },
    { rank: 5, name: 'Chris Lee', score: 9540, medal: '' },
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
          Gaming Arena
        </motion.h1>

        {/* Profile Card */}
        <GlassCard className="mb-6" animate>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#2196F3] flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">Level 8 Trader</h3>
              <p className="text-white/60 text-sm">Keep trading to level up!</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Total Score', value: '8,450', icon: Target },
              { label: 'Win Rate', value: '68.5%', icon: TrendingUp },
              { label: 'Streak', value: '5', icon: Award },
              { label: 'Games', value: '124', icon: Trophy },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-white/5 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#E91E63]" />
                </div>
                <p className="text-white font-bold text-sm mb-1">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Leaderboard */}
        <GlassCard animate delay={0.1}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Top Players</h3>
            <Trophy className="w-6 h-6 text-[#FFD700]" />
          </div>

          <div className="space-y-3">
            {topPlayers.map((player, i) => (
              <motion.div
                key={player.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      player.rank <= 3
                        ? 'bg-gradient-to-br from-[#FFD700] to-[#F59E0B] text-white'
                        : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {player.medal || player.rank}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{player.name}</p>
                    <p className="text-white/50 text-xs">Rank #{player.rank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{player.score.toLocaleString()}</p>
                  <p className="text-white/50 text-xs">points</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      <BottomNavigationBar />
    </div>
  );
};

export default GamingScreen;
