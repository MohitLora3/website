import { Link } from "wouter";
import { motion } from "framer-motion";

function SolutionsSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const arrowMotion = {
    rest: { x: 0 },
    hover: { 
      x: 5,
      transition: { duration: 0.3, ease: "easeOut", type: "tween" }
    }
  };

  const checkItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.2 + custom * 0.1, duration: 0.3 }
    })
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 + custom * 0.1, duration: 0.2 }
    }),
    hover: { x: 3, transition: { duration: 0.2 } }
  };

  // List of solutions
  const solutions = [
    {
      title: "AI Call Agent (Dialio)",
      description: "Fully automate inbound and outbound calls with natural voice conversations that handle inquiries, book appointments, and manage call workflows 24/7.",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: "#3B82F6",
      bgColor: "#DBEAFE",
      badge: "Most Popular",
      link: "/call-agent",
      keyFeatures: [
        "Real-time voice synthesis & recognition",
        "Context-aware conversation memory",
        "Multi-language support",
        "Seamless human handoff capability"
      ]
    },
    {
      title: "AI SMS Chatbot",
      description: "Engage customers instantly with 24/7 automated text conversations, lead capture, appointment reminders, and promotional campaigns.",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: "#10B981",
      bgColor: "#D1FAE5",
      link: "/sms-chatbot",
      keyFeatures: [
        "Automated appointment scheduling",
        "Personalized marketing campaigns",
        "Quick response templates",
        "Analytics dashboard for engagement"
      ]
    },
    {
      title: "AI WhatsApp Chatbot",
      description: "Connect with customers on their preferred messaging app with AI that handles support, sales, and notifications using text and rich media.",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      color: "#22C55E",
      bgColor: "#DCFCE7",
      link: "/whatsapp-chatbot",
      keyFeatures: [
        "Rich media message support",
        "Interactive buttons & quick replies",
        "Order tracking & notifications",
        "Group message broadcasting"
      ]
    },
    {
      title: "AI Website Chatbot",
      description: "Instantly engage website visitors with 24/7 support, answer questions, capture leads, and provide a seamless handover to human agents when needed.",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "#8B5CF6",
      bgColor: "#EDE9FE",
      link: "/website-chatbot",
      keyFeatures: [
        "Custom branding & widget design",
        "Proactive engagement triggers",
        "Knowledge base integration",
        "File & screen sharing capabilities"
      ]
    },
    {
      title: "AI Voice Assistant for Website",
      description: "Let visitors ask questions using their voice and get immediate spoken answers directly on your website, enhancing accessibility and user experience.",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      color: "#64748B",
      bgColor: "#F1F5F9",
      link: "/voice-assistant",
      keyFeatures: [
        "Speech-to-text & text-to-speech",
        "Noise cancellation technology",
        "Voice biometric authentication",
        "Accessibility compliance support"
      ]
    }
  ];

  // List of benefits
  const benefits = [
    "24/7 availability across all channels",
    "Natural, human-like interactions",
    "Seamless customer experience",
    "Significant cost reduction",
    "Scalable for any business size"
  ];

  return (
    <section id="solutions" className="py-28 solutions-bg relative overflow-hidden">
      {/* Section transition divider at top */}
      <div className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none">
        <div className="section-divider-wave transform rotate-180"></div>
      </div>
    
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-50/70 to-blue-100/70 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-80 blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-indigo-50/70 to-purple-100/70 rounded-full translate-x-1/3 translate-y-1/3 opacity-80 blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-br from-cyan-50/60 to-sky-100/60 rounded-full -translate-y-1/2 opacity-60 blur-[90px]"></div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-blue-100 opacity-30"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-16 h-16 rounded-md bg-purple-100 opacity-30"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-20 h-20 rounded-full bg-green-100 opacity-30"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header with enhanced styling */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={containerVariants}>
          <motion.div 
            className="inline-flex items-center justify-center gap-2 text-blue-600 font-semibold py-1 px-4 mb-4 bg-blue-50 rounded-full border border-blue-100 shadow-sm"
            variants={titleVariants}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            OUR AI SOLUTIONS SUITE
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            variants={titleVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] to-[#7C3AED]">
              Intelligent Automation for Every
            </span>
            <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] to-[#7C3AED]">
              <span className="relative">
                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.6em] w-full fill-blue-300/40" preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="text-[#1E40AF] bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] bg-clip-text text-transparent relative z-10">
                  Customer Interaction
                </span>
              </span>
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            variants={titleVariants}
          >
            Modern businesses need to be available across multiple channels. Our AI solutions ensure you never miss an opportunity to connect, no matter how your customers prefer to reach you.
          </motion.p>
        </motion.div>

        {/* Enhanced Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solution Cards - Enhanced Design */}
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              className="relative bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-slate-100 h-full group"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
              style={{
                boxShadow: "0 15px 50px -15px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.05)"
              }}
            >
              {/* Enhanced gradient header with animated glow */}
              <motion.div 
                className="h-3 bg-gradient-to-r from-transparent via-current to-transparent" 
                style={{ 
                  backgroundColor: solution.color,
                  boxShadow: `0 0 15px ${solution.color}40`
                }}
                animate={{
                  boxShadow: [
                    `0 0 15px ${solution.color}40`,
                    `0 0 25px ${solution.color}60`,
                    `0 0 15px ${solution.color}40`
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>

              <div className="p-8 flex flex-col h-[calc(100%-0.75rem)]">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="h-16 w-16 rounded-2xl flex items-center justify-center mr-5 transition-all duration-300 shadow-md"
                    style={{ 
                      backgroundColor: solution.bgColor,
                      border: `1px solid ${solution.color}30`
                    }}
                    whileHover={{ scale: 1.15, rotate: 5, boxShadow: `0 10px 25px -5px ${solution.color}40` }}
                  >
                    <motion.div
                      className="text-center"
                      style={{ color: solution.color }}
                      animate={{ 
                        scale: [1, 1.15, 1],
                        rotate: [0, 2, 0, -2, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    >
                      {solution.icon}
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800">{solution.title}</h3>
                </div>

                <p className="text-slate-600 mb-6 text-lg">
                  {solution.description}
                </p>

                {/* Enhanced Key Features List */}
                <div className="mb-8 p-5 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-blue-100">
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 flex items-center" style={{ color: solution.color }}>
                    <span className="flex items-center justify-center w-6 h-6 rounded-full mr-2" style={{ backgroundColor: `${solution.color}15` }}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {solution.keyFeatures.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-start"
                        variants={featureItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        custom={featureIndex}
                      >
                        <span 
                          className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-3"
                          style={{ backgroundColor: `${solution.color}15` }}
                        >
                          <svg 
                            className="w-3.5 h-3.5 flex-shrink-0" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                            style={{ color: solution.color }}
                          >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-slate-700 text-base font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {solution.badge && (
                  <div className="absolute top-4 right-4">
                    <motion.div 
                      className="bg-blue-50 text-blue-600 text-sm font-medium inline-flex items-center px-3 py-1 rounded-full"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 rgba(59, 130, 246, 0)",
                          "0 0 8px rgba(59, 130, 246, 0.5)",
                          "0 0 0 rgba(59, 130, 246, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                      {solution.badge}
                    </motion.div>
                  </div>
                )}

                <div className="mt-auto pt-5">
                  <Link href={solution.link}>
                    <motion.div
                      className="inline-flex items-center font-medium rounded-xl px-6 py-3 transition-all shadow-sm hover:shadow-md relative overflow-hidden group border"
                      style={{ 
                        color: solution.color, 
                        backgroundColor: solution.bgColor + '60',
                        borderColor: solution.color + '30'
                      }}
                      initial="rest"
                      whileHover={{ 
                        y: -3, 
                        backgroundColor: solution.bgColor + '80',
                        boxShadow: `0 10px 20px -5px ${solution.color}30`
                      }}
                    >
                      <span className="relative z-10 flex items-center font-semibold">
                        Learn more
                        <motion.svg 
                          className="ml-2 h-5 w-5 transition-transform" 
                          variants={arrowMotion}
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </motion.svg>
                      </span>

                      {/* Button shine effect */}
                      <motion.span 
                        className="absolute top-0 left-0 w-full h-full"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8 }}
                        style={{ 
                          background: `linear-gradient(90deg, transparent, ${solution.color}20, transparent)`,
                          zIndex: 0
                        }}
                      />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Why Choose Our Solutions - Enhanced Card */}
          <motion.div 
            className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl overflow-hidden text-white lg:row-span-2 lg:col-span-1"
            variants={cardVariants}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
              </svg>
            </div>

            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />

            <motion.div 
              className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />

            <div className="p-8 relative z-10 h-full flex flex-col">
              <motion.div
                className="inline-flex items-center mb-6 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <svg className="h-4 w-4 text-blue-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-blue-100 font-medium tracking-wide">WHY CHOOSE US</span>
              </motion.div>

              <motion.h3 
                className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Elevate Your Customer Experience
              </motion.h3>

              <motion.ul 
                className="space-y-5 mb-8"
                variants={containerVariants}
              >
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={checkItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mt-0.5 mr-4 shadow-glow"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg 
                        className="h-4 w-4 text-white" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <span className="text-slate-200 text-lg font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-auto">
                <Link href="/contact">
                  <motion.div 
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg px-6 py-3 shadow-lg group transition-transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get Started Today</span>
                    <motion.svg 
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
                </Link>

                {/* Stats */}
                {/* Stats section removed */}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default SolutionsSection;