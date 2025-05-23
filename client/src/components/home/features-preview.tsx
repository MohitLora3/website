import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";

function FeaturesPreview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Enhanced animation variants with smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } // Cubic bezier for smoother motion
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (custom: number) => ({ 
      y: 0, 
      opacity: 1,
      transition: { 
        delay: 0.15 * custom,
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }),
    hover: { 
      y: -18,
      scale: 1.03,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -10 },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 500, damping: 10 }
    }
  };

  // Feature cards - UPDATED
  const featureCards = [
    {
      title: "AI Call Agent: Sophie",
      description: "Powered by advanced AI voice technology, Sophie speaks and understands 58 worldwide languages, handling inbound and outbound calls with natural, human-like conversations.",
      icon: (
        <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      lightGradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "Call Analytics",
      description: "Track comprehensive metrics about call performance with detailed analytics dashboard, helping you continuously improve customer experiences.",
      icon: (
        <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      lightGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "Bulk Campaign Management",
      description: "Create and manage call campaigns to multiple recipients, perfect for marketing outreach or appointment reminders.",
      icon: (
        <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "green",
      gradient: "from-green-500 to-teal-600",
      lightGradient: "from-green-50 to-teal-50"
    },
    {
      title: "Real-time Transcription",
      description: "Dialio provides real-time and stored transcripts of all conversations, making it easy to review and extract valuable insights.",
      icon: (
        <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "indigo",
      gradient: "from-indigo-500 to-purple-600",
      lightGradient: "from-indigo-50 to-purple-50"
    },
    {
      title: "Call Recording",
      description: "Record all calls for quality assurance and analysis, helping you train staff and improve service standards.",
      icon: (
        <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      color: "amber",
      gradient: "from-amber-500 to-orange-600",
      lightGradient: "from-amber-50 to-orange-50"
    },
    {
      title: "Real-time Call Monitoring",
      description: "View active calls and live transcripts through an intuitive dashboard interface, ensuring quality control and timely assistance.",
      icon: (
        <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      color: "rose",
      gradient: "from-rose-500 to-pink-600",
      lightGradient: "from-rose-50 to-pink-50"
    }
  ];

  return (
    <section className="py-28 features-bg relative overflow-hidden">
      {/* Section transition divider at top */}
      <div className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none">
        <div className="section-divider-wave transform rotate-180"></div>
      </div>

      {/* Enhanced background decoration with richer gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mix-blend-multiply opacity-60 blur-[80px]"></div>
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply opacity-60 blur-[80px]"></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full mix-blend-multiply opacity-40 blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full mix-blend-multiply opacity-30 blur-[60px]"></div>
      </div>

      {/* Enhanced animated particles with better aesthetics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 12 + 4,
              height: Math.random() * 12 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 4 === 0 
                ? "rgba(59, 130, 246, 0.2)" 
                : i % 4 === 1 
                ? "rgba(124, 58, 237, 0.2)" 
                : i % 4 === 2
                ? "rgba(20, 184, 166, 0.2)"
                : "rgba(14, 165, 233, 0.2)",
              filter: "blur(2px)",
            }}
            animate={{
              y: [0, -30 - Math.random() * 40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-2 rounded-full text-blue-600 font-medium shadow-sm border border-blue-100 mb-4"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            POWERFUL CAPABILITIES
          </motion.div>
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
          >
            Features That Make Dialio Stand Out
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover how our AI communication suite transforms customer interactions with powerful features designed to elevate experiences and streamline your business operations.
          </motion.p>
        </motion.div>

        {/* Enhanced Feature cards grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featureCards.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 overflow-hidden h-full group"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
              whileHover={{ 
                y: -12, 
                rotateY: 5, 
                rotateX: -5,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(79, 70, 229, 0.1)",
                transition: { duration: 0.4, ease: "easeOut" } 
              }}
            >
              <div className="h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-75"></div>
              <div className="p-8 relative">
                {/* Enhanced background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-80 transition-all duration-500 -z-10 rounded-2xl"></div>

                {/* Subtle flowing gradient animation on hover */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-5 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
                </motion.div>

                <motion.div 
                  className={`w-24 h-24 mb-8 rounded-2xl bg-gradient-to-br ${feature.lightGradient} flex items-center justify-center border border-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  variants={iconVariants}
                  animate={hoveredCard === index ? "hover" : "visible"}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px -15px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <div className={`text-white bg-gradient-to-br ${feature.gradient} p-4 rounded-xl shadow-inner transform group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">{feature.title}</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">{feature.description}</p>

                {/* Enhanced animated line separator with glow */}
                <motion.div 
                  className={`h-1.5 bg-gradient-to-r ${feature.gradient} rounded-full w-0`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  style={{ boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" }}
                />

                {/* Subtle corner accent */}
                <div className="absolute bottom-3 right-3 w-6 h-6 rounded-br-xl border-r-2 border-b-2 border-indigo-200 group-hover:border-indigo-400 transition-colors duration-300 opacity-70"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA button */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/features">
            <motion.button 
              className="inline-flex items-center px-10 py-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-2xl transition-all overflow-hidden relative group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center text-lg font-semibold">
                Explore All Features
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute top-0 left-0 w-full h-full overflow-hidden">
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
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesPreview;