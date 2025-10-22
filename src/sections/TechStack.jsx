import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Database,
  Cloud,
  Zap,
  Shield,
  Network,
  Brain,
  Code2,
  Server,
  Boxes,
  GitBranch,
  Container,
  Flame,
  Bot,
  Link,
  Sparkles,
  BarChart3,
  Globe,
  Layers,
  Package,
  FileCode,
  Activity,
  Lock,
  Key,
  Rocket,
  TrendingUp,
  Search,
  Circle
} from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      gradient: 'from-[#795EF6] to-[#845EF6]',
      tech: [
        { name: 'TensorFlow', icon: Layers },
        { name: 'PyTorch', icon: Flame },
        { name: 'OpenAI GPT', icon: Bot },
        { name: 'Langchain', icon: Link },
        { name: 'Hugging Face', icon: Sparkles },
        { name: 'Scikit-learn', icon: BarChart3 }
      ],
      delay: 0.1
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      gradient: 'from-[#F8A588] to-[#795EF6]',
      tech: [
        { name: 'AWS', icon: Cloud },
        { name: 'Google Cloud', icon: Globe },
        { name: 'Azure', icon: Cloud },
        { name: 'Docker', icon: Container },
        { name: 'Kubernetes', icon: Boxes },
        { name: 'Terraform', icon: Package }
      ],
      delay: 0.2
    },
    {
      category: 'Databases & Storage',
      icon: Database,
      gradient: 'from-[#845EF6] to-[#F8A588]',
      tech: [
        { name: 'PostgreSQL', icon: Database },
        { name: 'MongoDB', icon: Database },
        { name: 'Redis', icon: Circle },
        { name: 'Pinecone', icon: Cpu },
        { name: 'Elasticsearch', icon: Search },
        { name: 'Neo4j', icon: Network }
      ],
      delay: 0.3
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      gradient: 'from-[#795EF6] to-[#F8A588]',
      tech: [
        { name: 'Node.js', icon: Server },
        { name: 'Python', icon: Code2 },
        { name: 'FastAPI', icon: Zap },
        { name: 'GraphQL', icon: GitBranch },
        { name: 'REST APIs', icon: Layers },
        { name: 'WebSockets', icon: Activity }
      ],
      delay: 0.4
    },
    {
      category: 'Frontend & UI',
      icon: Code2,
      gradient: 'from-[#F8A588] to-[#845EF6]',
      tech: [
        { name: 'React', icon: Code2 },
        { name: 'Next.js', icon: Layers },
        { name: 'TypeScript', icon: FileCode },
        { name: 'Tailwind CSS', icon: Sparkles },
        { name: 'Framer Motion', icon: Activity },
        { name: 'Vite', icon: Zap }
      ],
      delay: 0.5
    },
    {
      category: 'Security & DevOps',
      icon: Shield,
      gradient: 'from-[#845EF6] to-[#795EF6]',
      tech: [
        { name: 'OAuth 2.0', icon: Lock },
        { name: 'JWT', icon: Key },
        { name: 'GitHub Actions', icon: GitBranch },
        { name: 'CI/CD', icon: Rocket },
        { name: 'Monitoring', icon: TrendingUp },
        { name: 'SSL/TLS', icon: Shield }
      ],
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
              <Cpu className="w-8 h-8 text-black" />
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enterprise-grade technologies powering our AI agents and intelligent automation solutions
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-[#845EF6]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: category.delay }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(121, 94, 246, 0.15)"
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <category.icon className="w-6 h-6 text-black" />
                </motion.div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#795EF6] transition-colors duration-300">
                  {category.category}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {category.tech.map((item, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 hover:bg-gray-800 transition-all duration-300 group/item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: category.delay + techIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-5 h-5 text-[#795EF6]" />
                      <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">
                        {item.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { value: '1000+', label: 'AI Agents Deployed' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '500+', label: 'Enterprise Clients' },
            { value: '100%', label: 'Secure & Compliant' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#795EF6]/20 to-[#F8A588]/10 border border-[#845EF6]/30 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="bg-gradient-to-br from-[#795EF6]/20 to-[#F8A588]/10 border border-[#845EF6]/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Deploy AI Agents at Scale?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Leverage our enterprise-grade technology stack to build and deploy intelligent AI solutions for your business
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#845EF6] to-[#F8A588] hover:from-[#795EF6] hover:to-[#845EF6] px-8 py-4 rounded-lg font-semibold text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#845EF6]/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
