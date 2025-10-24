import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, Briefcase, Sparkles, Trophy, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Trading', path: '/trading', icon: TrendingUp },
    { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
    { name: 'Insights', path: '/insights', icon: Sparkles },
    { name: 'Arena', path: '/gaming', icon: Trophy },
  ];

  return (
    <motion.div
      initial={{ x: -280 }}
      animate={{
        x: 0,
        width: isCollapsed ? '80px' : '280px'
      }}
      transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
      className="fixed left-0 top-0 h-screen bg-gradient-to-b from-[#0F0C29]/95 via-[#1A0B2E]/95 to-[#0F0C29]/95 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col"
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-lg">AlgoSphere</h1>
                <p className="text-white/60 text-xs">Trading Platform</p>
              </div>
            </motion.div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors ml-auto"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-white/60" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-white/60" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all relative group ${
                  isActive
                    ? 'bg-gradient-to-r from-[#10B981]/20 to-[#059669]/20 text-[#10B981]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#10B981] rounded-r-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <Icon className={`w-6 h-6 flex-shrink-0 ${isActive ? 'text-[#10B981]' : ''}`} />

                {!isCollapsed && (
                  <span className={`font-medium ${isActive ? 'text-[#10B981]' : ''}`}>
                    {item.name}
                  </span>
                )}

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-3 py-2 bg-[#1A0B2E] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                    <span className="text-white text-sm">{item.name}</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-white/10 space-y-2">
        <button
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all group"
        >
          <Settings className="w-6 h-6 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">Settings</span>}

          {isCollapsed && (
            <div className="absolute left-full ml-2 px-3 py-2 bg-[#1A0B2E] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
              <span className="text-white text-sm">Settings</span>
            </div>
          )}
        </button>

        <button
          onClick={() => navigate('/signin')}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400/80 hover:text-red-400 hover:bg-red-500/10 transition-all group"
        >
          <LogOut className="w-6 h-6 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">Logout</span>}

          {isCollapsed && (
            <div className="absolute left-full ml-2 px-3 py-2 bg-[#1A0B2E] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
              <span className="text-white text-sm">Logout</span>
            </div>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
