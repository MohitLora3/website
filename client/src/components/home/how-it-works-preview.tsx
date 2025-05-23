
import { Link } from "wouter";
import { motion } from "framer-motion";

function HowItWorksPreview() {
  // Animation variants - enhanced for smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };
  
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({ 
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.3 * custom,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] // Cubic bezier for more natural movement
      }
    })
  };
  
  // Content for the steps with enhanced icons
  const steps = [
    {
      title: "Connect With Your System",
      description: "Easily integrate Dialio with your system through our simple API or use our cloud telephony service.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600",
      lightColor: "from-blue-50 to-indigo-50"
    },
    {
      title: "Train Your AI Agent",
      description: "Customize the AI to match your brand voice, business rules, and frequently asked questions in just minutes.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-600",
      lightColor: "from-purple-50 to-pink-50"
    },
    {
      title: "Watch It Work 24/7",
      description: "Your AI agent handles calls, captures data, and can transfer to human agents when needed, all while you monitor performance.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-green-500 to-teal-600",
      lightColor: "from-green-50 to-teal-50"
    }
  ];

  return (
    <section className="py-32 overflow-hidden relative how-it-works-bg">
      {/* Section transition divider at top */}
      <div className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none">
        <div className="section-divider-wave transform rotate-180"></div>
      </div>
    
      {/* Enhanced decorative background with more dynamic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Animated gradient blobs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 blur-3xl opacity-60"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1, 0.8], 
            opacity: [0, 0.6, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 blur-3xl opacity-60"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [0.9, 1.1, 0.9], 
            opacity: [0, 0.6, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10, 
            delay: 0.5, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Subtle floating elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-10 h-10 rounded-full bg-blue-200 opacity-20"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-8 h-8 rounded-full bg-purple-200 opacity-20"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 6, 
            delay: 1,
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        ></motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 text-blue-600 font-semibold py-2 px-5 mb-6 bg-blue-50 rounded-full border border-blue-100 shadow-sm hover:shadow-md transition-all glass-bg"
            whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)" }}
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            HOW DIALIO AI WORKS
          </motion.div>
          
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              Simplified Implementation
            </span>
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "12rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)" }}
            />
          </motion.h2>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your customer communications in minutes, not months. Dialio's implementation process is designed to be seamless and straightforward, getting you up and running quickly with powerful AI communication tools.
          </motion.p>
        </motion.div>
        
        {/* Steps section with enhanced visual design and interactions */}
        <div className="relative">
          {/* Enhanced connecting line with gradient and animation */}
          <motion.div 
            className="absolute top-24 left-[42px] h-[calc(100%-120px)] w-3 bg-gradient-to-b from-blue-300 via-purple-300 to-green-300 rounded-full hidden md:block"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)" }}
          />
          
          <div className="grid gap-20 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-start gap-10"
                variants={stepVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="md:text-center flex-shrink-0 relative z-10">
                  {/* Enhanced step number with animation */}
                  <motion.div 
                    className={`h-24 w-24 rounded-full bg-gradient-to-br ${step.lightColor} flex items-center justify-center md:mx-auto border-2 border-white shadow-xl glass-bg`}
                    whileHover={{ 
                      scale: 1.15,
                      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    style={{
                      boxShadow: `0 15px 30px -10px ${step.color.split(' ')[1].replace('to-', '')}30`
                    }}
                  >
                    <div className={`h-16 w-16 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} text-white shadow-inner`}
                      style={{
                        boxShadow: `inset 0 4px 10px rgba(0, 0, 0, 0.2)`
                      }}
                    >
                      {step.icon}
                      
                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          boxShadow: [
                            `0 0 0 0px ${step.color.split(' ')[1].replace('to-', '')}20`,
                            `0 0 0 10px ${step.color.split(' ')[1].replace('to-', '')}00`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.2) }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mt-4 text-slate-800 hidden md:block"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.05)"
                    }}
                  >
                    Step {index + 1}
                  </motion.div>
                </div>
                
                <motion.div 
                  className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 shadow-xl border border-slate-100 flex-1 glass-card"
                  whileHover={{ 
                    y: -15, 
                    rotateY: 2,
                    rotateX: -2,
                    scale: 1.03,
                    boxShadow: "0 30px 40px -15px rgba(0, 0, 0, 0.15), 0 15px 25px -10px rgba(99, 102, 241, 0.15)",
                    borderColor: "rgba(99, 102, 241, 0.25)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <div className="md:hidden text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 px-3 py-1 border border-blue-100 rounded-full w-fit">STEP {index + 1}</div>
                  
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 mb-4">{step.title}</h3>
                  
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">{step.description}</p>
                  
                  {/* Enhanced features box with glass effect */}
                  <div className="p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-100 shadow-md">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full mr-2" 
                        style={{ background: step.color.split(' ')[1].replace('to-', '') + '20' }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          style={{ color: step.color.split(' ')[1].replace('to-', '') }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      Key Benefits
                    </h4>
                    
                    <div className="space-y-4">
                      {[
                        "Quick setup with no coding required",
                        "Customizable to your business needs",
                        "Real-time performance analytics"
                      ].map((feature, i) => (
                        <motion.div 
                          key={i}
                          className="flex items-start group"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + (i * 0.15) }}
                          whileHover={{ x: 5 }}
                        >
                          <div className={`h-7 w-7 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`}
                            style={{ background: step.color.split(' ')[1].replace('to-', '') + '15' }}
                          >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                              style={{ color: step.color.split(' ')[1].replace('to-', '') }}
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-base text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Enhanced CTA with animation and styling */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <Link href="/how-it-works">
            <motion.button 
              className="inline-flex items-center px-8 py-4 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-blue-500/30 transition-all overflow-hidden relative group"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.2)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                Learn more about our process
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ 
                  background: [
                    "linear-gradient(to right, rgb(37, 99, 235), rgb(79, 70, 229))",
                    "linear-gradient(to right, rgb(29, 78, 216), rgb(67, 56, 202))",
                    "linear-gradient(to right, rgb(37, 99, 235), rgb(79, 70, 229))"
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorksPreview;
