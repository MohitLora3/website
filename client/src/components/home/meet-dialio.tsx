import { Link } from "wouter";
import { motion } from "framer-motion";

function MeetDialio() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: { 
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // SVG wave animation for voice
  const waveVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const wavePath = {
    initial: { height: 5 },
    animate: {
      height: [5, 15, 5],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse" as const, // Type assertion to fix TypeScript error
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto mb-28 px-4 sm:px-6">
      <motion.div 
        className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 section-shadow relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        whileHover={{
          y: -15,
          boxShadow: "0 50px 80px -25px rgba(0, 0, 0, 0.18), 0 30px 50px -15px rgba(79, 70, 229, 0.15)"
        }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        style={{
          boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.1), 0 15px 30px -5px rgba(0, 0, 0, 0.05)"
        }}
      >
        {/* Decorative accent elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-tr-full"></div>
        <div className="md:flex">
          <motion.div 
            className="md:flex-1 p-8 md:p-12 flex flex-col justify-center"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gradient-to-r from-[#EFF6FF] to-[#F5F3FF] text-[#3B82F6] px-4 py-1 rounded-full inline-flex items-center space-x-1 text-sm font-medium mb-4 w-fit"
              variants={itemVariants}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse mr-1"></span>
              Meet Dialio
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#7C3AED]">AI Call Agent</span> That Never Sleeps
            </motion.h2>

            <motion.p 
              className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Dialio transforms your business communication with natural, human-like conversations for both inbound and outbound calls. From answering complex inquiries to scheduling appointments, our 24/7 AI assistant Sophie ensures your business never misses a customer connection and can speak and understand 58 worldwide languages.
            </motion.p>

            <motion.ul className="space-y-4 mb-8">
              {[
                "Natural human-like voice conversations",
                "Complete automation of inbound and outbound calls",
                "Support for 58 worldwide languages",
                "Ability to transfer calls to human agents when needed",
                "Custom AI personality that reflects your brand"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start"
                  variants={itemVariants}
                  custom={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mt-1"
                    whileHover={{ scale: 1.2, backgroundColor: "#BFDBFE" }}
                  >
                    <svg className="h-4 w-4 text-[#3B82F6]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <span className="ml-3 text-lg text-slate-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <Link href="/features">
                <motion.div 
                  className="text-[#3B82F6] font-medium flex items-center hover:text-[#2563EB] transition-colors inline-flex"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more about Dialio
                  <motion.svg 
                    className="ml-2 h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-8 grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="text-sm text-slate-500 mb-1">Average Response Time</div>
                <div className="text-2xl font-bold text-slate-800 flex items-end">
                  1.5s
                  <span className="text-green-500 text-sm ml-2 flex items-center">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    -25%
                  </span>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="text-sm text-slate-500 mb-1">Customer Satisfaction</div>
                <div className="text-2xl font-bold text-slate-800 flex items-end">
                  98%
                  <span className="text-green-500 text-sm ml-2 flex items-center">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    +12%
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:flex-1 bg-gradient-to-br from-[#3B82F6] to-[#7C3AED] relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white opacity-10"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <motion.div 
              className="absolute bottom-20 left-5 w-32 h-32 rounded-full bg-white opacity-10"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -5, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />

            <div className="h-96 md:h-full flex items-center justify-center p-8 relative z-10">
              <motion.div 
                className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-white border border-white border-opacity-20 max-w-md relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                {/* Pulse effect around the dialog */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-white border-opacity-30 z-0"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />

                <div className="flex items-center mb-6 relative z-10">
                  <motion.div 
                    className="h-14 w-14 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.svg 
                      className="h-7 w-7 text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ 
                        rotateZ: [0, 10, -10, 0],
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </motion.svg>
                  </motion.div>
                  <div>
                    <div className="text-xl font-medium">Dialio AI Call Agent</div>
                    <div className="text-white text-opacity-80 text-sm flex items-center">
                      <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      Active and ready
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <motion.div 
                    className="bg-white bg-opacity-10 p-5 rounded-lg relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p className="text-white font-medium mb-3">"Hello! I'm Dialio, your AI call assistant. I can handle customer inquiries, book appointments, and manage your calls 24/7."</p>

                    {/* Voice waveform visualization */}
                    <motion.div 
                      className="flex items-end h-5 space-x-1 mt-2"
                      variants={waveVariants}
                      initial="initial"
                      animate="animate"
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-blue-400 rounded-full"
                          variants={wavePath}
                          style={{ 
                            height: Math.random() * 10 + 5,
                            backgroundColor: `rgba(96, 165, 250, ${0.5 + Math.random() * 0.5})`
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>

                  <div className="bg-white bg-opacity-10 rounded-lg p-3">
                    <div className="flex justify-between mb-1">
                      <div className="text-white font-medium">Call Activity</div>
                      <div className="text-white text-opacity-80 text-sm">Today</div>
                    </div>

                    <div className="h-24 relative">
                      {/* Call volume graph visual */}
                      <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                        {[...Array(12)].map((_, i) => {
                          const height = Math.random() * 70 + 30; // Random height between 30% and 100%
                          return (
                            <motion.div 
                              key={i}
                              className="flex-1 mx-0.5 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ 
                                duration: 1, 
                                delay: 1 + (i * 0.1),
                                ease: "easeOut"
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-between mt-3">
                      <div className="text-white text-opacity-90 text-sm font-medium">Calls handled: 127</div>
                      <div className="text-white text-opacity-90 text-sm font-medium">Satisfaction: 98%</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default MeetDialio;