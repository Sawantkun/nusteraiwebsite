import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };
  const handleRedirect=()=>{
    window.location.href="/contact"
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) { 
        setIsVisible(false);
      } else { 
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (sectionId) => {
    return activeSection === sectionId ? 'text-[#795EF6]' : 'text-white';
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between md:pb-4 md:pt-2 py-2 px-4 m-2 rounded-lg lg:px-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700 md:mx-12 md:mt-5 md:rounded-2xl"
        >
          <motion.div
            transition={{ duration: 1 }}
            className="flex items-center space-x-2 md:mb-2 lg:mb-0 justify-between w-full"
          >
            <div className='flex items-center w-48 cursor-pointer'>
              <img onClick={() => scrollToSection('hero')}  src="/NusterLogo.svg" alt="Nuster Logo" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('hero')} 
                className={`hover:text-[#795EF6] cursor-pointer transition-colors ${isActive('hero')}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`hover:text-[#795EF6] cursor-pointer transition-colors ${isActive('about')}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className={`hover:text-[#795EF6] cursor-pointer transition-colors ${isActive('features')}`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className={`hover:text-[#795EF6] cursor-pointer transition-colors ${isActive('projects')}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className={`hover:text-[#795EF6] cursor-pointer transition-colors ${isActive('pricing')}`}
              >
                Pricing
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variants={hamburgerVariants}
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <span className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </motion.button>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex items-center space-x-3 md:mt-2 mt-0">
              <button 
                onClick={() => handleRedirect()} 
                className="px-4 py-2 cursor-pointer border border-[#845EF6] text-[#795EF6] hover:bg-[#845EF6] hover:text-black transition-all duration-300 rounded-md"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="fixed top-[-10px] right-[-10px] h-[80vh] w-64 bg-gray-900/95 backdrop-blur-md md:hidden"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  <button 
                    onClick={() => {
                      scrollToSection('hero');
                      setIsMobileMenuOpen(false);
                    }} 
                    className={`text-xl hover:text-[#795EF6] transition-colors ${isActive('hero')}`}
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection('about');
                      setIsMobileMenuOpen(false);
                    }} 
                    className={`text-xl hover:text-[#795EF6] transition-colors ${isActive('about')}`}
                  >
                    About
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection('features');
                      setIsMobileMenuOpen(false);
                    }} 
                    className={`text-xl hover:text-[#795EF6] transition-colors ${isActive('features')}`}
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection('projects');
                      setIsMobileMenuOpen(false);
                    }} 
                    className={`text-xl hover:text-[#795EF6] transition-colors ${isActive('projects')}`}
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection('pricing');
                      setIsMobileMenuOpen(false);
                    }} 
                    className={`text-xl hover:text-[#795EF6] transition-colors ${isActive('pricing')}`}
                  >
                    Pricing
                  </button>
                  <button 
                    onClick={() => {
                      handleRedirect();
                      setIsMobileMenuOpen(false);
                    }} 
                    className="border-[#795EF6] px-6 py-2 cursor-pointer border text-[#795EF6] hover:bg-[#845EF6] hover:text-black transition-all duration-300 rounded-md"
                  >
                    Get In Touch
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
} 