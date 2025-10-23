import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, Briefcase, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Trading', path: '/trading', icon: TrendingUp },
    { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
    { name: 'Insights', path: '/insights', icon: Sparkles },
    { name: 'Arena', path: '/gaming', icon: Trophy },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      <div className="relative">
        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-[0.5px] bg-white/10" />

        {/* Navigation Bar */}
        <div className="bg-gradient-to-r from-[#0F0C29]/95 to-[#0F0C29]/95 backdrop-blur-xl">
          <div className="flex justify-around items-center px-4 py-3">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.path}
                  onClick={() => navigate(tab.path)}
                  className="flex flex-col items-center space-y-1 min-w-[64px] relative"
                >
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      y: isActive ? -2 : 0,
                    }}
                    className="relative"
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors ${
                        isActive ? 'text-[#10B981]' : 'text-white/60'
                      }`}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -inset-2 bg-[#10B981]/10 rounded-xl -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>

                  {/* Label */}
                  <span
                    className={`text-[10px] font-semibold transition-colors ${
                      isActive ? 'text-[#10B981]' : 'text-white/60'
                    }`}
                  >
                    {tab.name}
                  </span>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="indicator"
                      className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#10B981] rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
