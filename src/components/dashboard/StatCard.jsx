import { motion } from 'framer-motion';

const StatCard = ({
  title,
  value,
  subtitle,
  change,
  icon: Icon,
  color = '#10B981',
  isPositive = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative overflow-hidden rounded-2xl p-4"
      style={{
        background: `linear-gradient(135deg, ${color}15, ${color}08)`,
        border: `1.5px solid ${color}30`,
        boxShadow: `0 4px 16px ${color}15`,
      }}
    >
      {/* Icon Container */}
      <div
        className="w-12 h-12 rounded-xl mb-3 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${color}40, ${color}20)`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>

      {/* Content */}
      <div>
        <p className="text-white/60 text-xs mb-1">{title}</p>
        <h4 className="text-2xl font-bold text-white mb-1">{value}</h4>
        {subtitle && <p className="text-white/50 text-xs">{subtitle}</p>}
        {change && (
          <div className="mt-2">
            <span className={`text-sm font-semibold ${isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
              {isPositive ? '+' : ''}{change}
            </span>
          </div>
        )}
      </div>

      {/* Glow Effect */}
      <div
        className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-20 blur-2xl"
        style={{ background: color }}
      />
    </motion.div>
  );
};

export default StatCard;
