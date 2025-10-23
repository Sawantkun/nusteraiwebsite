import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const GradientButton = ({
  children,
  icon: Icon,
  onClick,
  isLoading = false,
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        relative h-[52px] rounded-2xl
        bg-gradient-to-br from-[#E91E63] to-[#9C27B0]
        text-white font-bold text-base
        shadow-[0_8px_20px_rgba(233,30,99,0.3),0_8px_20px_rgba(156,39,176,0.3)]
        hover:shadow-[0_12px_28px_rgba(233,30,99,0.4),0_12px_28px_rgba(156,39,176,0.4)]
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        flex items-center justify-center space-x-2
        ${fullWidth ? 'w-full' : 'px-8'}
        ${className}
      `}
    >
      {isLoading ? (
        <Loader2 className="w-6 h-6 animate-spin" strokeWidth={2.5} />
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5" />}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
};

export default GradientButton;
