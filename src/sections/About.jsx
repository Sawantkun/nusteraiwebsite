'use client';

import {
  BarChart,
  CheckCircle,
  Shield,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-[#795EF6]" />,
      number: '500+',
      label: 'Enterprise Clients',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#795EF6]" />,
      number: '1000+',
      label: 'AI Agents Deployed',
    },
    {
      icon: <BarChart className="w-6 h-6 text-[#795EF6]" />,
      number: '95%',
      label: 'Client Satisfaction',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#795EF6]" />,
      number: '100%',
      label: 'Data Security',
    },
  ];

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Alex leads Nuster AI with a vision to democratize AI technology and make it accessible to businesses of all sizes.',
    },
    {
      name: 'Sarah Martinez',
      role: 'Chief Technology Officer',
      bio: 'Sarah spearheads our AI research and development, focusing on creating cutting-edge AI agents and solutions.',
    },
    {
      name: 'Michael Park',
      role: 'Head of Product',
      bio: 'Michael ensures our AI solutions are intuitive, powerful, and deliver real business value to our clients.',
    },
  ];

  const values = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#795EF6]" />,
      title: 'Innovation',
      description:
        'We push the boundaries of AI technology to create solutions that transform how businesses operate.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#795EF6]" />,
      title: 'Trust',
      description:
        'We maintain the highest standards of data security and privacy in all our AI solutions.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#795EF6]" />,
      title: 'Client Success',
      description:
        'We are committed to our client achieving success, providing continuous support and optimization.',
    },
  ];

  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent">
            About Nuster AI
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We're on a mission to revolutionize business operations with intelligent AI agents and cutting-edge SaaS solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-[#845EF6]/30 p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex justify-center mb-4 text-[#795EF6]">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-center text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-center text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
             <span className='bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent'>Meet The Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className={`group bg-gray-900/50 backdrop-blur-sm border p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                  activeTeamMember === i
                    ? 'border-[#845EF6]/50 shadow-xl shadow-[#845EF6]/10'
                    : 'border-gray-700 hover:border-[#845EF6]/30'
                }`}
                onClick={() => setActiveTeamMember(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-[#795EF6] mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              <span className='bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent'>Our Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="text-center group bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-[#845EF6]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#845EF6]/20 to-[#F8A588]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#845EF6]/30 group-hover:to-[#F8A588]/30 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center mb-8 "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#795EF6] fill-current" />
            ))}
          </div>
        </motion.div>
        <motion.button
          className="bg-gradient-to-r from-[#845EF6] to-[#F8A588] hover:from-[#795EF6] hover:to-[#845EF6] px-8 py-4 rounded-lg font-semibold text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#845EF6]/25 mx-auto block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Start Your AI Journey
        </motion.button>
      </div>
    </div>
  );
}
