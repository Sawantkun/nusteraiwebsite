import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp, Award, Flame, Star, Medal, Crown, Zap, Calendar, Users } from 'lucide-react';
import DesktopLayout from '../../components/layout/DesktopLayout';

const GamingScreen = () => {
  const topPlayers = [
    { rank: 1, name: 'Alex Morgan', score: 12450, winRate: '72%', level: 15, avatar: 'AM' },
    { rank: 2, name: 'Sarah Chen', score: 11890, winRate: '70%', level: 14, avatar: 'SC' },
    { rank: 3, name: 'Mike Johnson', score: 10230, winRate: '68%', level: 13, avatar: 'MJ' },
    { rank: 4, name: 'Emma Davis', score: 9870, winRate: '65%', level: 12, avatar: 'ED' },
    { rank: 5, name: 'Chris Lee', score: 9540, winRate: '64%', level: 12, avatar: 'CL' },
    { rank: 6, name: 'Anna Wilson', score: 9120, winRate: '62%', level: 11, avatar: 'AW' },
    { rank: 7, name: 'David Brown', score: 8890, winRate: '61%', level: 11, avatar: 'DB' },
    { rank: 8, name: 'Lisa Martinez', score: 8450, winRate: '60%', level: 10, avatar: 'LM' },
  ];

  const achievements = [
    { title: 'First Win', description: 'Won your first game', icon: Trophy, color: '#10B981', unlocked: true },
    { title: 'Win Streak', description: '5 consecutive wins', icon: Flame, color: '#F59E0B', unlocked: true },
    { title: 'Top 10', description: 'Reached top 10 leaderboard', icon: Star, color: '#8B5CF6', unlocked: true },
    { title: 'Century', description: 'Played 100 games', icon: Medal, color: '#00BCD4', unlocked: true },
    { title: 'Champion', description: 'Reach rank #1', icon: Crown, color: '#FFD700', unlocked: false },
    { title: 'Master', description: 'Reach level 20', icon: Zap, color: '#E91E63', unlocked: false },
  ];

  const recentGames = [
    { opponent: 'Sarah Chen', result: 'Win', score: '+250', date: '2 hours ago', profit: '+₹5,240' },
    { opponent: 'Mike Johnson', result: 'Win', score: '+220', date: '5 hours ago', profit: '+₹4,850' },
    { opponent: 'Emma Davis', result: 'Loss', score: '-180', date: '1 day ago', profit: '-₹2,340' },
    { opponent: 'Chris Lee', result: 'Win', score: '+200', date: '1 day ago', profit: '+₹3,920' },
  ];

  const challenges = [
    { title: 'Daily Challenge', description: 'Make 5 profitable trades', reward: '500 points', timeLeft: '6 hours', progress: 60 },
    { title: 'Weekly Tournament', description: 'Top 3 players win prizes', reward: '5,000 points', timeLeft: '3 days', progress: 45 },
    { title: 'Monthly Master', description: 'Maintain 70% win rate', reward: '20,000 points', timeLeft: '12 days', progress: 30 },
  ];

  const userStats = [
    { label: 'Total Score', value: '8,450', icon: Target, color: '#10B981' },
    { label: 'Win Rate', value: '68.5%', icon: TrendingUp, color: '#00BCD4' },
    { label: 'Current Streak', value: '5', icon: Flame, color: '#F59E0B' },
    { label: 'Total Games', value: '124', icon: Trophy, color: '#8B5CF6' },
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
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#F59E0B] flex items-center justify-center">
              <Trophy className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2">Gaming Arena</h1>
              <p className="text-white/60 text-xs md:text-base">Compete, earn rewards, and climb the leaderboard</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-xs md:text-sm mb-1">Your Rank</p>
            <p className="text-white text-2xl md:text-3xl font-black">#8</p>
          </div>
        </motion.div>

        {/* User Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                </div>
                <p className="text-white/60 text-sm mb-1">{stat.label}</p>
                <p className="text-white text-2xl font-bold">{stat.value}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD700]/40 to-[#FFD700]/20 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Global Leaderboard</h3>
                  <p className="text-white/60 text-xs">Top performers this month</p>
                </div>
              </div>
              <button className="text-[#10B981] text-sm font-semibold hover:underline">View All</button>
            </div>

            <div className="space-y-2">
              {topPlayers.map((player, i) => (
                <motion.div
                  key={player.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer ${
                    player.rank <= 3
                      ? 'bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 border border-[#FFD700]/30'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        player.rank === 1
                          ? 'bg-gradient-to-br from-[#FFD700] to-[#F59E0B] text-white'
                          : player.rank === 2
                          ? 'bg-gradient-to-br from-[#C0C0C0] to-[#A8A8A8] text-white'
                          : player.rank === 3
                          ? 'bg-gradient-to-br from-[#CD7F32] to-[#B87333] text-white'
                          : 'bg-white/10 text-white/60'
                      }`}
                    >
                      {player.rank <= 3 ? (player.rank === 1 ? '👑' : player.rank === 2 ? '🥈' : '🥉') : player.rank}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{player.avatar}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{player.name}</p>
                      <p className="text-white/60 text-xs">Level {player.level} • Win Rate: {player.winRate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-lg">{player.score.toLocaleString()}</p>
                    <p className="text-white/60 text-xs">points</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6]/40 to-[#8B5CF6]/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Achievements</h3>
                <p className="text-white/60 text-xs">4 of 6 unlocked</p>
              </div>
            </div>

            <div className="space-y-3">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl transition-all ${
                      achievement.unlocked ? 'bg-white/10' : 'bg-white/5 opacity-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${achievement.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: achievement.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold text-sm">{achievement.title}</p>
                        <p className="text-white/60 text-xs mt-1">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && <Star className="w-4 h-4 text-[#FFD700]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Recent Games */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981]/40 to-[#10B981]/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#10B981]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Recent Games</h3>
                <p className="text-white/60 text-xs">Your latest matches</p>
              </div>
            </div>

            <div className="space-y-3">
              {recentGames.map((game, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`px-3 py-1 rounded-lg text-xs font-bold ${game.result === 'Win' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#EF4444]/20 text-[#EF4444]'}`}>
                        {game.result}
                      </div>
                      <p className="text-white font-semibold">vs {game.opponent}</p>
                    </div>
                    <p className={`font-bold ${game.result === 'Win' ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                      {game.score}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60">{game.date}</span>
                    <span className={`font-semibold ${game.profit.startsWith('+') ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                      {game.profit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E91E63]/40 to-[#E91E63]/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-[#E91E63]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Active Challenges</h3>
                <p className="text-white/60 text-xs">Complete to earn rewards</p>
              </div>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="text-white font-semibold mb-1">{challenge.title}</p>
                      <p className="text-white/60 text-xs mb-2">{challenge.description}</p>
                      <div className="flex items-center space-x-2 text-xs">
                        <Calendar className="w-3 h-3 text-white/60" />
                        <span className="text-white/60">{challenge.timeLeft} left</span>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-[#FFD700] font-bold text-sm">{challenge.reward}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-xs">Progress</span>
                    <span className="text-white text-xs font-semibold">{challenge.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${challenge.progress}%` }}
                      transition={{ delay: 1 + idx * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-[#E91E63] to-[#8B5CF6] rounded-full"
                    />
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

export default GamingScreen;
