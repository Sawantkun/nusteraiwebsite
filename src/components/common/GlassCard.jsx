import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  onClick,
  hover = false,
  animate = false,
  delay = 0,
}) => {
  const Component = animate ? motion.div : 'div';

  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay },
      }
    : {};

  return (
    <Component
      onClick={onClick}
      className={`
        glass-card rounded-2xl p-5
        shadow-[0_8px_20px_rgba(0,0,0,0.1)]
        ${hover ? 'hover:bg-white/10 transition-all cursor-pointer' : ''}
        ${className}
      `}
      {...animationProps}
    >
      {children}
    </Component>
  );
};

export default GlassCard;
