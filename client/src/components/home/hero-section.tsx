import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Helper function for smooth scrolling
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth"
    });
  }
};

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  // Enhanced text rotation for hero tagline
  const rotatingTexts = [
    "Don't Let Voicemail Be Your First Impression",
    "Transform Customer Support Communication",
    "AI That Speaks 58 Languages Fluently",
    "Complete Multi-Channel Communication Suite",
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Set up text rotation interval
    const intervalId = setInterval(() => {
      setActiveTextIndex((current) => (current + 1) % rotatingTexts.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    smoothScrollTo(target);
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.96 }
  };

  const floatingIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    float: {
      y: [0, -12, 0],
      rotate: [0, 6, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Enhanced text rotation animation variants
  const textVariants = {
    enter: { 
      y: 30, 
      opacity: 0 
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    exit: {
      y: -30,
      opacity: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="homepage" className="hero-bg pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden relative min-h-[90vh] flex items-center">
      {/* Enhanced background particles with improved aesthetics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                opacity: Math.random() * 0.5 + 0.2,
                scale: Math.random() * 0.8 + 0.5,
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                ],
                x: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                ],
                opacity: [
                  Math.random() * 0.4 + 0.2,
                  Math.random() * 0.7 + 0.3,
                  Math.random() * 0.4 + 0.2,
                ],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                borderRadius: "50%",
                background: i % 5 === 0 
                  ? "rgba(59, 130, 246, 0.3)" 
                  : i % 5 === 1 
                  ? "rgba(124, 58, 237, 0.3)" 
                  : i % 5 === 2
                  ? "rgba(14, 165, 233, 0.3)"
                  : i % 5 === 3
                  ? "rgba(236, 72, 153, 0.25)"
                  : "rgba(79, 70, 229, 0.3)",
                filter: "blur(1.5px)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced light rays effect */}
      <div className="absolute -top-40 left-1/4 w-[900px] h-[600px] bg-gradient-to-b from-blue-500/15 to-transparent rotate-12 opacity-50 blur-3xl"></div>
      <div className="absolute -top-20 right-1/4 w-[700px] h-[500px] bg-gradient-to-b from-purple-500/15 to-transparent -rotate-12 opacity-40 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-b from-pink-500/10 to-transparent rotate-45 opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced animated background elements with improved colors and animations */}
        <motion.div 
          className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-[150px] opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.18, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          className="absolute -bottom-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-[160px] opacity-25"
          animate={{
            x: [0, -40, 0],
            y: [0, 35, 0],
            scale: [1, 1.12, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        <motion.div 
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-sky-500 via-cyan-400 to-teal-300 rounded-full mix-blend-multiply filter blur-[150px] opacity-25"
          animate={{
            x: [0, 60, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />

        {/* Additional enhanced gradient blobs */}
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-tl from-indigo-600 via-blue-500 to-cyan-400 rounded-full mix-blend-multiply filter blur-[130px] opacity-20"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.14, 1]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.2
          }}
        />

        {/* New accent blob for visual interest */}
        <motion.div 
          className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-15"
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />

        {/* Add more dynamic elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                initial={{
                  opacity: Math.random() * 0.5 + 0.1,
                  scale: Math.random() * 0.8 + 0.2,
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                  ],
                  x: [
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                  ],
                }}
                transition={{
                  duration: Math.random() * 20 + 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  borderRadius: "50%",
                  background: i % 3 === 0 
                    ? "rgba(59, 130, 246, 0.35)" 
                    : i % 3 === 1 
                    ? "rgba(124, 58, 237, 0.35)" 
                    : "rgba(14, 165, 233, 0.35)",
                  filter: "blur(1.5px)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - content */}
          <motion.div
            className="text-left max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.div className="mb-6 flex" variants={itemVariants}>
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 text-sm font-semibold inline-flex items-center shadow-sm border border-blue-100">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse mr-2"></div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI-Powered Communication Suite</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={activeTextIndex}
                  className="gradient-text shimmer block"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {rotatingTexts[activeTextIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="mt-3 block text-black">Our AI Has the Answer</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Revolutionize your customer connections with Dialio's intelligent AI-powered communication tools. Our 24/7 solution never misses a call, speaks and understands 58 worldwide languages, and consistently delivers exceptional experiences that transform your business.
            </motion.p>

            {/* Enhanced Stats section with improved visuals and animations */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-3 gap-6 mb-12 text-center"
            >
              {[
                { 
                  value: "58", 
                  label: "Languages", 
                  icon: (
                    <svg className="w-6 h-6 mx-auto text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  bgGradient: "from-amber-50 to-amber-100/50", 
                  valueGradient: "from-amber-600 to-amber-500",
                  borderColor: "border-amber-100",
                  hoverBorder: "group-hover:border-amber-200"
                },
                { 
                  value: "24/7", 
                  label: "Availability", 
                  icon: (
                    <svg className="w-6 h-6 mx-auto text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  bgGradient: "from-emerald-50 to-emerald-100/50", 
                  valueGradient: "from-emerald-600 to-emerald-500",
                  borderColor: "border-emerald-100",
                  hoverBorder: "group-hover:border-emerald-200"
                },
                { 
                  value: "98%", 
                  label: "Satisfaction", 
                  icon: (
                    <svg className="w-6 h-6 mx-auto text-violet-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  bgGradient: "from-violet-50 to-violet-100/50", 
                  valueGradient: "from-violet-600 to-violet-500",
                  borderColor: "border-violet-100",
                  hoverBorder: "group-hover:border-violet-200"
                }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className={`bg-gradient-to-br ${stat.bgGradient} backdrop-blur-md px-4 py-6 rounded-2xl border ${stat.borderColor} ${stat.hoverBorder} shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    transition: { duration: 0.3, ease: "easeOut" } 
                  }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{ background: `radial-gradient(circle at center, ${stat.color}15, transparent 70%)` }}
                  ></div>

                  {/* Subtle animation shine */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"
                    animate={{
                      background: [
                        `linear-gradient(45deg, transparent 20%, ${stat.color}10 40%, ${stat.color}20 50%, ${stat.color}10 60%, transparent 80%)`,
                        `linear-gradient(45deg, transparent 40%, ${stat.color}20 50%, transparent 60%)`
                      ],
                      backgroundSize: "200% 200%",
                      backgroundPosition: ["0% 0%", "100% 100%"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  ></motion.div>

                  <motion.div 
                    className="mb-3 opacity-90 group-hover:opacity-100 transition-all"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    whileHover={{ 
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className={`text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.valueGradient}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.7 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-blue-500 transition-colors mt-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.9 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5">
              <Link href="/contact">
                <motion.button 
                  className="cta-button text-white font-semibold rounded-xl text-lg px-12 py-5 text-center w-full sm:w-auto shadow-xl hover:shadow-2xl border border-transparent relative overflow-hidden group"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Request a Demo
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>

                  {/* Enhanced button effects */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 -z-10"></span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>

                  {/* Light shine effect */}
                  <span className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl">
                    <motion.span 
                      className="absolute top-0 left-[-100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 skew-x-[-20deg]"
                      animate={{ left: ['[-100%]', '[150%]'] }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity, 
                        repeatDelay: 5,
                        ease: "easeInOut" 
                      }}
                    />
                  </span>
                </motion.button>
              </Link>

              <motion.a 
                href="#solutions" 
                onClick={(e) => handleSmoothScroll(e, '#solutions')}
                className="bg-white/90 text-slate-700 border border-slate-200 hover:bg-white hover:border-blue-200 hover:text-blue-600 font-semibold rounded-xl text-lg px-12 py-5 text-center transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl backdrop-blur-sm relative overflow-hidden group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Solutions
                  <svg className="w-5 h-5 opacity-0 transition-all duration-300 group-hover:opacity-100 transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>

                {/* Enhanced background effects */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>

                {/* Border highlight effect */}
                <span className="absolute inset-0 w-full h-full border border-blue-200 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></span>
              </motion.a>
            </motion.div>

            {/* Enhanced Trust badges */}
            <motion.div 
              variants={itemVariants}
              className="mt-12"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-3 font-medium">Dialio Communication Suite</div>
              <div className="flex flex-wrap gap-7 items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-7 w-24 bg-gradient-to-r from-slate-200 to-slate-100 rounded-md shadow-sm"></div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - enhanced visual */}
          <motion.div 
            className="flex justify-center relative hidden lg:block"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Main illustration with glass morphism effect */}
            <div className="relative">
              <motion.div 
                className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 max-w-md hover:shadow-blue-100/30 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white mr-4 shadow-lg shadow-blue-500/20">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-800">Dialio AI Assistant</h2>
                    <div className="text-sm text-slate-500 flex items-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse mr-2"></span>
                      <span className="text-green-600 font-medium">Online and ready</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 mb-7">
                  {/* Enhanced Call stats */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100/50 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm font-semibold text-slate-700">Today's Performance</div>
                      <div className="text-xs text-green-600 font-medium flex items-center px-2 py-1 bg-green-50 rounded-full border border-green-100">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        +12%
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-indigo-50 hover:border-indigo-100 transition-colors">
                        <div className="text-2xl font-bold text-blue-600">156</div>
                        <div className="text-xs font-medium text-slate-500">Calls Handled</div>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-indigo-50 hover:border-indigo-100 transition-colors">
                        <div className="text-2xl font-bold text-indigo-600">98%</div>
                        <div className="text-xs font-medium text-slate-500">Resolution Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Audio waveform visualization */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-inner">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm font-semibold text-slate-700 flex items-center">
                        <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse mr-2"></span>
                        Voice Recognition Active
                      </div>
                      <div className="text-xs text-slate-500">00:17</div>
                    </div>
                    <div className="flex items-end justify-center h-14 space-x-1 px-2">
                      {[...Array(24)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 bg-gradient-to-t from-blue-500 to-indigo-500 rounded-full"
                          animate={{
                            height: [
                              `${Math.random() * 50 + 10}%`,
                              `${Math.random() * 90 + 20}%`,
                              `${Math.random() * 50 + 10}%`
                            ],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: i * 0.04
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <div className="bg-blue-50 text-blue-600 font-medium px-3 py-1 rounded-full text-xs border border-blue-100">
                    Avg. Response Time: 1.2s
                  </div>
                  <div className="text-slate-500 font-medium">Built with ❤️ by Dialio AI</div>
                </div>
              </motion.div>

              {/* Enhanced Floating elements around main illustration */}
              <motion.div
                className="absolute -top-10 -right-12 bg-white p-4 rounded-2xl shadow-xl border border-blue-50"
                variants={floatingIconVariants}
                initial="hidden"
                animate={isLoaded ? ["visible", "float"] : "hidden"}
                custom={1}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 mr-3 shadow-inner">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-slate-700">Call Agent</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -left-12 bg-white p-4 rounded-2xl shadow-xl border border-green-50"
                variants={floatingIconVariants}
                initial="hidden"
                animate={isLoaded ? ["visible", "float"] : "hidden"}
                custom={2}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-600 mr-3 shadow-inner">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-slate-700">SMS Chatbot</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-24 bg-white p-4 rounded-2xl shadow-xl border border-purple-50"
                variants={floatingIconVariants}
                initial="hidden"
                animate={isLoaded ? ["visible", "float"] : "hidden"}
                custom={3}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-600 mr-3 shadow-inner">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-slate-700">Voice Assistant</div>
                </div>
              </motion.div>

              {/* New floating notification component */}
              <motion.div
                className="absolute top-20 right-10 bg-white p-3 rounded-2xl shadow-xl border border-indigo-50 max-w-[180px]"
                variants={floatingIconVariants}
                initial="hidden"
                animate={isLoaded ? ["visible", "float"] : "hidden"}
                custom={4}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800">New call received</div>
                    <div className="text-[10px] text-slate-500 mt-1">AI agent responding in real-time</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom wave effect with glass morphism */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-20 bg-gradient-to-b from-transparent to-white/95 backdrop-blur-sm"></div>
        <div className="h-1.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/30 to-purple-500/20" style={{boxShadow: "0 0 20px rgba(79, 70, 229, 0.4)"}}></div>
      </div>
    </section>
  );
}

export default HeroSection;