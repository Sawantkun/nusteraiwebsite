import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Rocket,
  Shield,
  Zap,
  Users,
  Database,
  LineChart,
  Globe
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BrainCircuit,
      title: 'AI Agent Development',
      description: 'Custom AI agents tailored to your business needs, automating complex workflows and decision-making processes.',
      gradient: 'from-[#795EF6] to-[#845EF6]',
      delay: 0.1
    },
    {
      icon: Code2,
      title: 'SaaS Solutions',
      description: 'Scalable cloud-based software solutions designed to streamline operations and boost productivity.',
      gradient: 'from-[#F8A588] to-[#795EF6]',
      delay: 0.2
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and machine learning models.',
      gradient: 'from-[#845EF6] to-[#F8A588]',
      delay: 0.3
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures ensuring your data is protected and compliant with regulations.',
      gradient: 'from-[#795EF6] to-[#F8A588]',
      delay: 0.4
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows, freeing your team to focus on strategic initiatives.',
      gradient: 'from-[#F8A588] to-[#845EF6]',
      delay: 0.5
    },
    {
      icon: Globe,
      title: 'Integration Services',
      description: 'Seamlessly integrate AI solutions with your existing systems and third-party platforms.',
      gradient: 'from-[#845EF6] to-[#795EF6]',
      delay: 0.6
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#795EF6] to-[#F8A588] rounded-2xl flex items-center justify-center">
              <Rocket className="w-8 h-8 text-black" />
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your business operations and drive growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-[#845EF6]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(121, 94, 246, 0.15)"
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-7 h-7 text-black" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#795EF6] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <motion.div
                className="mt-6 flex items-center text-[#795EF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <span className="text-sm font-semibold">Learn more</span>
                <motion.svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-gradient-to-br from-[#795EF6]/20 to-[#F8A588]/10 border border-[#845EF6]/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help you achieve your goals
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#845EF6] to-[#F8A588] hover:from-[#795EF6] hover:to-[#845EF6] px-8 py-4 rounded-lg font-semibold text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#845EF6]/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
