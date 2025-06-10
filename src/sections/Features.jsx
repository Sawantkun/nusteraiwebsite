import React from 'react'
import { Brain, PieChart, Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <div className='
    min-h-screen bg-gray-950 text-white overflow-hidden'>{/* Features Section */}
    <div className=" relative px-6 lg:px-12 py-12 lg:py-20">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
           
          <span className="bg-gradient-to-r from-[#795EF6] to-[#F8A588] text-transparent bg-clip-text">Intelligent AI Solutions</span>
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Transform your business with our cutting-edge AI agents and SaaS solutions that automate, optimize, and revolutionize your operations.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Upload Feature */}
        {[0,1,2].map((i) => (
          <motion.div
            key={i}
            className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-[#795EF6]/50 p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#795EF6]-500/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            {i === 0 && (
              <>
                <div className="w-16 h-16 bg-gradient-to-br from-[#845EF6]/20 to-[#F8A588]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#845EF6]/30 group-hover:to-[#F8A588]/30 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#795EF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Agents</h3>
                <p className="text-gray-400 mb-6">
                  Deploy intelligent AI agents that handle complex tasks, automate workflows, and provide 24/7 support for your business operations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#795EF6] rounded-full"></div>
                    <span className="text-sm text-gray-300">Customer Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#795EF6] rounded-full"></div>
                    <span className="text-sm text-gray-300">Process Automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#795EF6] rounded-full"></div>
                    <span className="text-sm text-gray-300">Data Analysis</span>
                  </div>
                </div>
              </>
            )}
            {i === 1 && (
              <>
                <div className="w-16 h-16 bg-gradient-to-br from-[#845EF6]/20 to-[#F8A588]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#845EF6]/30 group-hover:to-[#F8A588]/30 transition-all duration-300">
                  <Brain className="w-8 h-8 text-[#795EF6]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">SaaS Solutions</h3>
                <p className="text-gray-400 mb-6">
                  Access our suite of cloud-based software solutions powered by advanced AI to streamline your business processes and boost productivity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#795EF6] rounded-full"></div>
                    <span className="text-sm text-gray-300">Cloud Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#795EF6] rounded-full"></div>
                    <span className="text-sm text-gray-300">Real-time Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#795EF6] rounded-full"></div>
                    <span className="text-sm text-gray-300">Scalable Infrastructure</span>
                  </div>
                </div>
              </>
            )}
            {i === 2 && (
              <>
                <div className="w-16 h-16 bg-gradient-to-br from-[#845EF6]/20 to-[#F8A588]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#845EF6]/30 group-hover:to-[#F8A588]/30 transition-all duration-300">
                  <PieChart className="w-8 h-8 text-[#795EF6]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Custom Solutions</h3>
                <p className="text-gray-400 mb-6">
                  Get tailored AI solutions designed specifically for your business needs, with continuous optimization and support.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#795EF6] rounded-full"></div>
                    <span className="text-sm text-gray-300">Custom Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#795EF6] rounded-full"></div>
                    <span className="text-sm text-gray-300">Integration Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#795EF6] rounded-full"></div>
                    <span className="text-sm text-gray-300">24/7 Support</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

    </div></div>
  )
}

export default Features