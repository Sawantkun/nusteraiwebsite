import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Users,
  Clock,
  Award,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Briefcase,
} from "lucide-react";

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      company: "SkillOrbit AI",
      industry: "Career Intelligence Platform",
      title: "AI-Powered Career Matching & Job Discovery",
      challenge:
        "Job seekers were spending countless hours manually searching through job boards, struggling to find positions that truly matched their skills, experience, and career aspirations.",
      solution:
        "Built SkillOrbit AI - an intelligent platform that connects professionals with opportunities faster and smarter. Our AI agents analyze skills, preferences, and career goals to deliver personalized job recommendations tailored to each user.",
      results: [
        { metric: "98+", label: "Active Users", icon: Users },
        { metric: "80%", label: "Match Accuracy", icon: Award },
        { metric: "5x", label: "Faster Job Discovery", icon: Clock },
        { metric: "92%", label: "User Satisfaction", icon: TrendingUp },
      ],
      testimonial:
        "SkillOrbit AI has transformed how professionals discover opportunities. Our AI-powered matching delivers the right opportunities at the right time.",
      author: "Nuster AI Team",
      gradient: "from-[#795EF6] to-[#845EF6]",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      company: "AlgoSphere AI",
      industry: "Financial Trading Platform",
      title: "Intelligent Algorithmic Trading System",
      challenge:
        "Traders needed to monitor markets 24/7, make split-second decisions, and manage complex risk across multiple assets - an impossible task for human traders alone.",
      solution:
        "Developed AlgoSphere AI - an advanced trading platform where AI agents analyze markets, execute trades, and manage risk autonomously. Our intelligent system operates 24/7, processing real-time data to make informed trading decisions.",
      results: [
        { metric: "40+", label: "Active Traders", icon: Users },
        { metric: "24/7", label: "Market Monitoring", icon: Clock },
        { metric: "95%", label: "Risk Management Accuracy", icon: Award },
        { metric: "3x", label: "Trading Efficiency", icon: TrendingUp },
      ],
      testimonial:
        "AlgoSphere AI empowers traders with AI-driven insights and automation, turning complex market data into profitable opportunities.",
      author: "Nuster AI Team",
      gradient: "from-[#F8A588] to-[#795EF6]",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    },
    {
      company: "DocuForge AI",
      industry: "Synthetic Data Generation",
      title: "Domain-Specific Document Generation Platform",
      challenge:
        "Businesses and researchers needed large volumes of realistic, domain-specific training data for AI models, but creating synthetic documents, tables, and images manually was time-consuming and expensive.",
      solution:
        "Created DocuForge AI - a powerful platform that generates high-quality synthetic documents, tables, and images tailored to specific domains. Our AI understands context and creates realistic data for training and testing ML models.",
      results: [
        { metric: "1000+", label: "Documents Generated Daily", icon: TrendingUp },
        { metric: "99%", label: "Data Quality Score", icon: Award },
        { metric: "10x", label: "Faster Than Manual Creation", icon: Clock },
        { metric: "50+", label: "Domain Specializations", icon: Users },
      ],
      testimonial:
        "DocuForge AI solves the synthetic data challenge with precision and speed, enabling faster AI development and testing.",
      author: "Nuster AI Team",
      gradient: "from-[#845EF6] to-[#F8A588]",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=600&fit=crop",
    },
    {
      company: "NusterDB",
      industry: "Vector Database Technology",
      title: "Next-Generation Vector Database (Coming Soon)",
      challenge:
        "Existing vector databases struggled with scalability, required expensive cloud infrastructure, and couldn't handle real-time updates without complete rebuilds, limiting AI application performance.",
      solution:
        "Building NusterDB - a revolutionary on-disk vector database with lightning-fast similarity search serving millions of vectors locally in under a millisecond. Features real-time updates, deep metadata filtering, and auto-tuning with zero rebuild downtime.",
      results: [
        { metric: "<1ms", label: "Query Latency", icon: Clock },
        { metric: "1M+", label: "Vectors Indexed", icon: TrendingUp },
        { metric: "100%", label: "Local Performance", icon: Award },
        { metric: "Zero", label: "Rebuild Downtime", icon: Users },
      ],
      testimonial:
        "NusterDB will redefine what vector databases can achieve - unmatched speed, scalability, and efficiency for AI applications.",
      author: "Nuster AI Team",
      gradient: "from-[#795EF6] to-[#F8A588]",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  };

  const currentStudy = caseStudies[activeCase];

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
              <Briefcase className="w-8 h-8 text-black" />
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Success{" "}
            <span className="bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent">
              Stories
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how our AI-powered platforms are revolutionizing careers, trading, data generation, and database technology
          </p>
        </motion.div>

        {/* Case Study Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden"
            >
              {/* Image and Company Info */}
              <div className="grid lg:grid-cols-2 gap-0 mb-10">
                {/* Left: Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={currentStudy.image}
                    alt={currentStudy.company}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentStudy.gradient} opacity-20`}
                  />

                  {/* Company Badge */}
                  <div className="absolute top-6 left-6 bg-gray-900/90 backdrop-blur-sm border border-[#845EF6]/30 rounded-xl px-4 py-2">
                    <p className="text-sm text-gray-400">
                      {currentStudy.industry}
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      {currentStudy.company}
                    </h3>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold mb-6 text-white">
                    {currentStudy.title}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-[#795EF6] font-semibold mb-2">
                      The Challenge
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {currentStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h4 className="text-[#795EF6] font-semibold mb-2">
                      Our Solution
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {currentStudy.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 lg:p-12 pt-0 lg:pt-0">
                {currentStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-center hover:border-[#845EF6]/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <result.icon className="w-8 h-8 text-[#795EF6] mx-auto mb-2" />
                    <h4 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent mb-1">
                      {result.metric}
                    </h4>
                    <p className="text-gray-400 text-xs lg:text-sm">
                      {result.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 lg:-mx-16 pointer-events-none">
            <motion.button
              onClick={prevCase}
              className="pointer-events-auto w-12 h-12 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center hover:border-[#845EF6] hover:bg-[#845EF6]/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              onClick={nextCase}
              className="pointer-events-auto w-12 h-12 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center hover:border-[#845EF6] hover:bg-[#845EF6]/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeCase
                    ? "w-8 bg-gradient-to-r from-[#795EF6] to-[#F8A588]"
                    : "w-2 bg-gray-700 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-[#795EF6]/20 to-[#F8A588]/10 border border-[#845EF6]/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join the AI revolution with our suite of intelligent platforms designed to solve real-world challenges
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#845EF6] to-[#F8A588] hover:from-[#795EF6] hover:to-[#845EF6] px-8 py-4 rounded-lg font-semibold text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#845EF6]/25 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
