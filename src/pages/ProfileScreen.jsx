import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock, LogOut, Camera } from 'lucide-react';
import BottomNavigationBar from '../components/common/BottomNavigationBar';
import GlassCard from '../components/common/GlassCard';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    avatarUrl: null,
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A0B2E] to-[#16213E] pb-24">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Profile
        </motion.h1>

        {/* Profile Header Card */}
        <GlassCard className="mb-6" animate delay={0.1}>
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center border-2 border-[#10B981]">
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <User className="w-10 h-10 text-white" />
                )}
              </div>
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-[#E91E63] rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
              <p className="text-white/60 text-sm">{user.email}</p>
            </div>
          </div>
        </GlassCard>

        {/* Account Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="text-lg font-semibold text-white mb-3">Account Information</h3>

          <GlassCard className="space-y-4">
            {/* Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <User className="w-5 h-5 text-[#E91E63]" />
              </div>
              <div className="flex-1">
                <p className="text-white/60 text-sm">Display Name</p>
                <p className="text-white font-medium">{user.name}</p>
              </div>
            </div>

            {/* Email */}
            <div className="h-px bg-white/10" />
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#E91E63]" />
              </div>
              <div className="flex-1">
                <p className="text-white/60 text-sm">Email</p>
                <p className="text-white font-medium">{user.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="h-px bg-white/10" />
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#E91E63]" />
              </div>
              <div className="flex-1">
                <p className="text-white/60 text-sm">Phone</p>
                <p className="text-white font-medium">{user.phone}</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          {/* Change Password */}
          <GlassCard onClick={() => navigate('/change-password')} hover>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#E91E63]" />
                </div>
                <span className="text-white font-medium">Change Password</span>
              </div>
              <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </GlassCard>

          {/* Logout */}
          <GlassCard onClick={handleLogout} hover>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <LogOut className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-red-400 font-medium">Logout</span>
              </div>
              <svg className="w-5 h-5 text-red-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <BottomNavigationBar />
    </div>
  );
};

export default ProfileScreen;
