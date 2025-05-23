import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Set active link based on location
  useEffect(() => {
    const path = location === "/" ? "home" : location.slice(1);
    setActiveLink(path);
  }, [location]);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Add shadow and background change when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // If we're not on the home page and the link is a hash, go to home first
      if (location !== "/" && !location.includes(href)) {
        window.location.href = `/${href}`;
        return;
      }
      
      // Handle smooth scroll
      smoothScrollTo(href);
    }
  };

  const isActive = (path: string) => {
    if (path === 'home' && location === '/') return true;
    if (location === `/${path}`) return true;
    return false;
  };

  // Nav item animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      x: -10
    }
  };
  
  // Logo animation variants
  const logoCircleVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 15, 0],
      background: [
        "linear-gradient(to right, rgba(59, 130, 246, 1), rgba(124, 58, 237, 1))",
        "linear-gradient(to right, rgba(99, 102, 241, 1), rgba(139, 92, 246, 1))",
        "linear-gradient(to right, rgba(59, 130, 246, 1), rgba(124, 58, 237, 1))"
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };
  
  const logoInnerDotVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      background: [
        "rgba(255, 255, 255, 1)",
        "rgba(240, 240, 255, 1)",
        "rgba(255, 255, 255, 1)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };
  
  // Menu button animation variants
  const menuButtonVariants = {
    closed: {},
    open: {}
  };
  
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 }
  };
  
  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };
  
  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 }
  };

  // Navigation links data
  const navLinks = [
    { path: "home", label: "Home", href: "/" },
    { path: "solutions", label: "Solutions", href: "/solutions", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, 'solutions') },
    { path: "features", label: "Features", href: "/features" },
    { path: "how-it-works", label: "How It Works", href: "/how-it-works" },
    { path: "use-cases", label: "Use Cases", href: "/use-cases" },
    { path: "pricing", label: "Pricing", href: "/pricing" },
  ];
  
  // Chatbot/Assistant solution links for dropdown
  const solutionLinks = [
    { path: "call-agent", label: "AI Call Agent", href: "/call-agent" },
    { path: "sms-chatbot", label: "SMS Chatbot", href: "/sms-chatbot" },
    { path: "whatsapp-chatbot", label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
    { path: "website-chatbot", label: "Website Chatbot", href: "/website-chatbot" },
    { path: "voice-assistant", label: "Voice Assistant", href: "/voice-assistant" }
  ];

  return (
    <motion.nav 
      className={`sticky top-0 z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled 
          ? 'bg-white/90 shadow-lg border-b border-slate-100' 
          : 'bg-white/80'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <motion.div 
                className="flex-shrink-0 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col">
                  <motion.span 
                    className="font-bold text-xl text-slate-800 relative"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Dialio
                    <motion.span 
                      className="absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 via-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.7 }}
                    ></motion.span>
                  </motion.span>
                  <motion.span 
                    className="text-[10px] text-slate-500 font-medium tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    AI COMMUNICATION
                  </motion.span>
                </div>
              </motion.div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div
              className="flex items-center space-x-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navLinks.map((link, i) => (
                <motion.div key={link.path} custom={i + 1} variants={navItemVariants}>
                  <Link href={link.href} onClick={link.onClick}>
                    <div 
                      className="relative px-3 py-2 group"
                      onMouseEnter={() => setHoveredLink(link.path)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span 
                        className={`text-sm font-medium transition-colors ${
                          isActive(link.path) 
                            ? 'text-blue-600' 
                            : 'text-slate-600 group-hover:text-blue-600'
                        }`}
                      >
                        {link.label}
                      </span>
                      
                      {/* Active indicator */}
                      {isActive(link.path) && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
                          layoutId="navbar-underline"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                      
                      {/* Hover indicator */}
                      {hoveredLink === link.path && !isActive(link.path) && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-200"
                          layoutId="navbar-hover"
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "100%" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div custom={5} variants={navItemVariants}>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
                  <Button 
                    className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium border-0 hover:from-blue-600 hover:to-indigo-700 shadow-md group-hover:shadow-lg transition-all duration-300"
                  >
                    <span className="relative z-10">Get Started</span>
                    
                    {/* Button glow effect */}
                    <motion.div 
                      className="absolute inset-0 bg-white opacity-20 rounded-md"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0.3, x: 50 }}
                      transition={{ duration: 0.6 }}
                    ></motion.div>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <motion.button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none w-10 h-10 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={menuButtonVariants}
              aria-label="Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-between items-center">
                <motion.span
                  className="w-full h-0.5 bg-current rounded-full transform origin-right"
                  variants={topLineVariants}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <motion.span
                  className="w-full h-0.5 bg-current rounded-full"
                  variants={middleLineVariants}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <motion.span
                  className="w-full h-0.5 bg-current rounded-full transform origin-right"
                  variants={bottomLineVariants}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with AnimatePresence for smooth enter/exit */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-100 overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="px-2 pt-2 pb-3 space-y-1 max-w-md mx-auto">
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.path}
                  variants={mobileItemVariants}
                  custom={i}
                  whileHover={{ x: 5 }}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <Link href={link.href} onClick={link.onClick}>
                    <div className={`block px-4 py-3 rounded-lg text-base font-medium ${
                      isActive(link.path) 
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span>{link.label}</span>
                        {isActive(link.path) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                variants={mobileItemVariants}
                custom={navLinks.length}
                className="mt-4 pt-4"
              >
                <Link href="/contact">
                  <div className="block py-3 text-center">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative group overflow-hidden rounded-lg"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
                      <Button 
                        className="relative w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium border-0 hover:from-blue-600 hover:to-indigo-700 shadow-md group-hover:shadow-lg transition-all duration-300"
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
