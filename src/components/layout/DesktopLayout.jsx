import Sidebar from '../common/Sidebar';
import BottomNavigationBar from '../common/BottomNavigationBar';
import { motion } from 'framer-motion';

const DesktopLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1A0B2E] to-[#16213E]">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-screen overflow-hidden">
        {/* Sidebar - Desktop only */}
        <Sidebar />

        {/* Main Content Area - Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 ml-[280px] overflow-y-auto"
        >
          <div className="min-h-screen">
            {children}
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {children}
        </motion.div>

        {/* Bottom Navigation - Mobile only */}
        <BottomNavigationBar />
      </div>
    </div>
  );
};

export default DesktopLayout;
