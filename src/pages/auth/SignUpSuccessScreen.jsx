import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import GradientButton from '../../components/common/GradientButton';

const SignUpSuccessScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0B2E] via-[#16213E] to-[#0F3460] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="glass-card-strong rounded-3xl p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-[0_8px_32px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Account Created!</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Welcome to AlgoSphere! Your account has been successfully created.
              You can now sign in and start trading.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/signin">
              <GradientButton fullWidth>
                Sign In Now
              </GradientButton>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpSuccessScreen;
