import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../theme';

// SVG Icons Components
const StockIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 12L10 9L13 12L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PortfolioIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69752 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69752 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SentimentIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PredictiveIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2358 14.7367 12.9315 14.9411 13.6467 14.9913C14.3618 15.0414 15.0796 14.9357 15.7515 14.6818C16.4235 14.4279 17.0337 14.0328 17.54 13.53L20.54 10.53C21.4508 9.59695 21.9548 8.33395 21.9434 7.02296C21.932 5.71196 21.4061 4.45791 20.479 3.53091C19.5519 2.60391 18.2979 2.07801 16.9869 2.06661C15.6759 2.05521 14.4129 2.55921 13.48 3.47001L11.75 5.19001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11C13.5705 10.4259 13.0226 9.95091 12.3934 9.60711C11.7642 9.26331 11.0685 9.05891 10.3533 9.00871C9.63821 8.95851 8.92041 9.06421 8.24852 9.31811C7.57663 9.57201 6.96637 9.96721 6.46 10.47L3.46 13.47C2.54921 14.403 2.04521 15.666 2.05661 16.977C2.06801 18.288 2.59391 19.5421 3.521 20.4691C4.4481 21.3961 5.70215 21.922 7.01314 21.9334C8.32414 21.9448 9.58714 21.4408 10.52 20.53L12.25 18.81" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SkillOrbit",
      description: "Skill Orbit connects you with the opportunities you deserve — faster, smarter, and tailored just for you.",
      status: "current",
      image: "/skillorbit.png",
      icon:  <PortfolioIcon />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "AlgoSphere",
      description: "Trade smarter with AI. Our tool analyzes, trades, and manages risk 24/7",
      status: "current",
      image: "/AlgoAI.png",
      icon:<StockIcon />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "DocuforgeAI",
      description: "Create domain-specific synthetic documents,tables and images",
      status: "current",
      image: "/docuforgeai.png",
      icon: <SentimentIcon />,
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "NusterDB",
      description: "Uncover the power of NusterDB—where lightning-fast, on-disk similarity search meets real-time updates and deep metadata filtering. Imagine millions of vectors served locally in under a millisecond, auto-tuned for your workload, with zero rebuild downtime. Ready to see what a vector database can really be? Keep an eye out for NusterDB.",
      status: "upcoming",
      image: "/images/predictive.jpg",
      icon: <PredictiveIcon />,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             
            <span className="bg-gradient-to-r from-[#795EF6] to-[#F8A588] text-transparent bg-clip-text">Projects Showcase</span>
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
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`bg-gray-900/50 backdrop-blur-sm border border-gray-700 relative rounded-xl overflow-hidden group cursor-pointer hover:border-[#845EF6]/30 hover:scale-102 transition-all duration-300
                ${project.status === 'upcoming' ? 'md:col-span-2 lg:col-span-3' : ''}`}
              style={{
                minHeight: project.status === 'upcoming' ? '300px' : '250px'
              }}
            >
              {/* Project background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="p-6 h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#795EF6] bg-gradient-to-br from-[#845EF6]/20 to-[#F8A588]/20 rounded-2xl flex items-center justify-center group-hover:from-[#845EF6]/30 group-hover:to-[#F8A588]/30 transition-all duration-300 p-3">{project.icon}</span>
                    <h3 className="text-2xl font-bold" style={{ color: colors.text }}>
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-lg opacity-90" style={{ color: colors.text }}>
                    {project.description}
                  </p>
                </div>
                <div 
                  className="mt-4 relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <a 
                    href={`/projects/${project.id}`}
                    className="inline-flex px-3 py-1 rounded-full text-sm hover:opacity-80 transition-opacity items-center gap-2"
                    style={{
                      backgroundColor: hoveredProject === project.id ? colors.accent : colors.purpleAccent,
                      color: colors.text
                    }}
                  >
                    {project.status === 'upcoming' ? (
                      <>
                        <ClockIcon />
                        Coming Soon
                      </>
                    ) : (
                      <>
                        <LinkIcon />
                        Visit
                      </>
                    )}
                  </a>
                  {hoveredProject === project.id && project.status !== 'upcoming' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-90 h-42 rounded-lg shadow-lg overflow-hidden"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/150/0000FF/FFFFFF?text=${project.title.replace(/\s+/g, '+')}`;
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </div>
              
              <motion.div
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 