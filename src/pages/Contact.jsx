import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Sparkles,
  Brain,
  Zap,
  Shield,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    aiInterest: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Your{" "}
            <span className="bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent">
              AI Future
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to transform your business with AI? Our team of experts is
            here to help you navigate the future of intelligent automation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#845EF6] transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#845EF6] transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#845EF6] transition-all duration-300"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  AI Interest
                </label>
                <select
                  name="aiInterest"
                  value={formData.aiInterest}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#845EF6] transition-all duration-300"
                >
                  <option value="">Select your interest</option>
                  <option value="ai-agents">AI Agents</option>
                  <option value="automation">Process Automation</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="custom-solution">Custom AI Solution</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#845EF6] h-32 transition-all duration-300"
                  placeholder="Tell us about your AI needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#845EF6] to-[#F8A588] hover:from-[#795EF6] hover:to-[#845EF6] px-6 py-3 rounded-lg font-semibold text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#845EF6]/25 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#845EF6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#795EF6]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">contact@nusterai.com</p>
                    <p className="text-gray-400">support@nusterai.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#845EF6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#795EF6]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#845EF6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#795EF6]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Office</h4>
                    <p className="text-gray-400">123 AI Street</p>
                    <p className="text-gray-400">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Solutions Card */}
            <div className="bg-gradient-to-br from-[#795EF6]/20 to-[#F8A588]/10 border border-[#845EF6]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our AI Solutions
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#845EF6]/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-[#795EF6]" />
                  </div>
                  <span className="text-white">Intelligent AI Agents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#845EF6]/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#795EF6]" />
                  </div>
                  <span className="text-white">Process Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#845EF6]/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#795EF6]" />
                  </div>
                  <span className="text-white">Secure AI Integration</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">4:30pm - 2am IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday - Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
