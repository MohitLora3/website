import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import SolutionsSection from "@/components/home/solutions-section";
import CTASection from "@/components/shared/cta-section";
import SectionHeading from "@/components/ui/section-heading";
import BrandBadge from "@/components/ui/brand-badge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Solutions() {
  // Update document title
  useEffect(() => {
    document.title = "AI Solutions Suite | Dialio";
  }, []);
  
  // Scroll based animations
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [isInView, setIsInView] = useState(false);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
  
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  
  // Integration benefits
  const integrationBenefits = [
    {
      title: "Unified Customer Data",
      description: "All customer interactions are stored in a central database, giving you a complete view of each customer's journey regardless of which communication channel they use.",
      benefit: "Personalized service across all channels based on previous interactions.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Consistent Brand Voice",
      description: "Maintain a consistent tone and personality across all AI communication tools, ensuring your brand voice is preserved no matter how customers reach you.",
      benefit: "Stronger brand recognition and professional customer experience.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    }
  ];
  
  // Channels illustration data
  const channelConnections = [
    { name: "Voice", color: "#3B82F6", x: "20%", y: "30%" },
    { name: "SMS", color: "#7C3AED", x: "50%", y: "15%" },
    { name: "WhatsApp", color: "#10B981", x: "80%", y: "30%" },
    { name: "Website", color: "#F59E0B", x: "20%", y: "70%" },
    { name: "Email", color: "#EF4444", x: "50%", y: "85%" },
    { name: "Social", color: "#8B5CF6", x: "80%", y: "70%" }
  ];
  
  // Central node animation
  const centralNodeVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 300, damping: 10 }
    }
  };
  
  // Connection line animation
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut", delay: 0.3 }
    }
  };
  
  // Channel node animation
  const channelNodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: 0.5 + (custom * 0.1),
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  return (
    <>
      {/* Enhanced Hero section */}
      <section className="pt-20 pb-24 lg:pt-24 lg:pb-28 relative overflow-hidden">
        {/* Background decoration with enhanced depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-slate-50/80 to-white">
          <div className="absolute top-0 left-0 w-full h-full hero-bg opacity-40"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Enhanced animated circles with glow */}
          <motion.div 
            className="absolute top-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/40 to-blue-300/20 opacity-70 -z-10 blur-2xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          
          <motion.div 
            className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-indigo-200/30 to-purple-200/20 opacity-70 -z-10 blur-3xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          ></motion.div>
          
          <motion.div 
            className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-green-100/30 to-emerald-200/20 opacity-60 -z-10 blur-xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          ></motion.div>
        </div>
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="mb-8"
              >
                <motion.div variants={itemVariants}>
                  <Badge className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 mb-6 border border-blue-100 shadow-sm">
                    <span className="flex h-2 w-2 relative mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    NEXT-GENERATION AI SOLUTIONS
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  variants={itemVariants}
                >
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                      Intelligent Automation
                    </span>
                    <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -bottom-2 left-0 h-[0.6em] w-full fill-blue-300/40" preserveAspectRatio="none">
                      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                    </svg>
                  </span>
                  <span className="block mt-2 text-slate-800">for Every Customer Touchpoint</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  variants={itemVariants}
                >
                  Modern businesses need to be available across multiple channels. Our AI solutions ensure you never 
                  miss an opportunity to connect, no matter how your customers prefer to reach you.
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-4 justify-center lg:justify-start items-center" 
                  variants={itemVariants}
                >
                  <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg text-lg px-8 py-4 shadow-lg hover:shadow-blue-200/50">
                        Get Started Today
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Button>
                    </motion.div>
                  </Link>
                  
                  <Link href="/features">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="outline" className="border-2 border-blue-200 text-blue-700 bg-white/80 backdrop-blur-sm hover:bg-blue-50 font-medium rounded-lg text-lg px-8 py-4">
                        View Features
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Trust indicators */}
              <motion.div 
                className="mt-12 hidden lg:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-sm text-slate-500 mb-4">OUR SOLUTIONS:</p>
                <div className="flex space-x-8 items-center">
                  {['CALL', 'SMS', 'WHATSAPP', 'VOICE', 'CHATBOT'].map((company, i) => (
                    <div key={i} className="text-slate-400 font-semibold text-sm md:text-base opacity-70">{company}</div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* 3D illustration */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Main central platform */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold transform rotate-12 perspective-1000">
                    <div className="text-center text-lg">Dialio Platform</div>
                  </div>
                </motion.div>
                
                {/* Connection orbits */}
                <div className="relative h-[400px] w-full max-w-[500px] mx-auto">
                  {/* Orbital paths */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[320px] h-[320px] border border-dashed border-blue-200 rounded-full"></div>
                    <div className="absolute w-[420px] h-[250px] border border-dashed border-indigo-200 rounded-full transform rotate-45"></div>
                  </div>
                  
                  {/* Channel nodes */}
                  {[
                    { name: "Voice", icon: "phone", color: "blue", x: "-130px", y: "0px", delay: 0 },
                    { name: "Messaging", icon: "message-square", color: "indigo", x: "0px", y: "-120px", delay: 0.1 },
                    { name: "Email", icon: "mail", color: "purple", x: "130px", y: "0px", delay: 0.2 },
                    { name: "Web", icon: "globe", color: "emerald", x: "0px", y: "120px", delay: 0.3 },
                    { name: "Social", icon: "users", color: "amber", x: "100px", y: "100px", delay: 0.4 },
                    { name: "WhatsApp", icon: "message-circle", color: "green", x: "-100px", y: "-100px", delay: 0.5 }
                  ].map((node, i) => (
                    <motion.div
                      key={i}
                      className={`absolute flex flex-col items-center`}
                      style={{ 
                        left: "calc(50% + " + node.x + ")",
                        top: "calc(50% + " + node.y + ")",
                        zIndex: 10
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + node.delay, duration: 0.5, type: "spring" }}
                    >
                      <motion.div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-br from-${node.color}-500 to-${node.color}-600 shadow-lg flex items-center justify-center text-white mb-2`}
                        whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      >
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {node.icon === "phone" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                          {node.icon === "message-square" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />}
                          {node.icon === "mail" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                          {node.icon === "globe" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />}
                          {node.icon === "users" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                          {node.icon === "message-circle" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                        </svg>
                      </motion.div>
                      <span className="text-sm font-medium text-slate-700">{node.name}</span>
                    </motion.div>
                  ))}
                  
                  {/* Animated connection lines */}
                  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      d="M250,200 L120,200" 
                      stroke="url(#blue-gradient)" 
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 1 }}
                    />
                    <motion.path 
                      d="M250,200 L250,80" 
                      stroke="url(#indigo-gradient)" 
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.9, duration: 1 }}
                    />
                    <motion.path 
                      d="M250,200 L380,200" 
                      stroke="url(#purple-gradient)" 
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1.0, duration: 1 }}
                    />
                    <motion.path 
                      d="M250,200 L250,320" 
                      stroke="url(#emerald-gradient)" 
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1.1, duration: 1 }}
                    />
                    <motion.path 
                      d="M250,200 L350,300" 
                      stroke="url(#amber-gradient)" 
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 1 }}
                    />
                    <motion.path 
                      d="M250,200 L150,100" 
                      stroke="url(#green-gradient)" 
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1.3, duration: 1 }}
                    />
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                      <linearGradient id="indigo-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                      <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                      <linearGradient id="amber-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                      <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22C55E" />
                        <stop offset="100%" stopColor="#22C55E" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Solutions section with enhanced visuals */}
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
          
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <pattern id="diagonalHatch" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#3B82F6" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              eyebrow="OUR SOLUTIONS"
              title="AI-Powered Communication Suite"
              description="Our comprehensive suite of AI solutions enhances every customer interaction across all communication channels."
              align="center"
            />
          </motion.div>
          
          {/* Enhanced Features Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Voice AI Agent",
                description: "Intelligent voice assistant that handles calls, answers questions, and routes complex inquiries to human agents when needed.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                color: "blue",
                link: "/voice-assistant",
                features: ["Natural conversations", "24/7 availability", "Seamless human handoff"]
              },
              {
                title: "SMS Chatbot",
                description: "Engage customers through text messaging with interactive AI chatbots that provide instant responses and personalized service.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                ),
                color: "indigo",
                link: "/sms-chatbot",
                features: ["Two-way conversations", "Smart response routing", "Appointment scheduling"]
              },
              {
                title: "Website Chatbot",
                description: "Convert website visitors into customers with an intelligent chatbot that answers questions and guides users through your site.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                color: "purple",
                link: "/website-chatbot",
                features: ["Custom workflows", "Smart lead capture", "Knowledge base integration"]
              },
              {
                title: "WhatsApp Business",
                description: "Leverage the world's most popular messaging app to provide customer service, notifications, and interactive experiences.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "green",
                link: "/whatsapp-chatbot",
                features: ["Rich media support", "Verified business profile", "Automated notifications"]
              },
              {
                title: "Email Automation",
                description: "Intelligently respond to customer emails, categorize inquiries, and automate follow-ups with AI-powered email assistance.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                color: "amber",
                link: "/email-automation",
                features: ["Smart email triage", "Sentiment analysis", "Template management"]
              },
              {
                title: "Analytics Dashboard",
                description: "Gain insights across all channels with unified analytics that tracks customer journeys, sentiment, and conversation outcomes.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: "rose",
                link: "/analytics",
                features: ["Cross-channel reporting", "Conversion tracking", "AI-powered insights"]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-xl border border-${solution.color}-100 shadow-xl p-8 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Background decoration */}
                <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-${solution.color}-50 opacity-80`}></div>
                <div className={`absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-${solution.color}-50 opacity-60`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`h-16 w-16 rounded-xl bg-gradient-to-br from-${solution.color}-500 to-${solution.color === 'amber' ? 'orange' : solution.color}-600 flex items-center justify-center mb-6 shadow-lg text-white transform -rotate-3`}>
                    <div className="transform rotate-3">
                      {solution.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{solution.title}</h3>
                  <p className="text-slate-600 mb-6">{solution.description}</p>
                  
                  {/* Feature list */}
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`flex-shrink-0 h-5 w-5 rounded-full bg-${solution.color}-100 flex items-center justify-center mt-1 mr-3`}>
                          <svg className={`h-3 w-3 text-${solution.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Link */}
                  <Link href={solution.link}>
                    <Button variant="link" className={`text-${solution.color}-600 p-0 flex items-center font-medium`}>
                      Learn more
                      <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced CTA banner */}
          <motion.div 
            className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* Background decorations */}
            <div className="absolute inset-0 w-full h-full opacity-30">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
              </svg>
              
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white opacity-20 blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <motion.div 
                className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white opacity-10 blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 2 }}
              />
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Experience?</h3>
                <p className="text-lg text-blue-100 max-w-2xl">
                  Our AI solutions work together to create a seamless, personalized experience for your customers across all channels.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg text-lg px-8 py-4 shadow-lg">
                      Request a Demo
                      <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/features">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="border-2 border-white/40 text-blue-600 hover:bg-white/10 font-medium rounded-lg text-lg px-8 py-4">
                      Compare Solutions
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Integration section with enhanced visuals */}
      <section className="py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circlePattern" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(45)">
              <circle cx="30" cy="30" r="3" fill="#3B82F6" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circlePattern)" />
          </svg>
          
          {/* Enhanced background elements */}
          <motion.div
            className="absolute -top-48 -right-48 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <motion.div
            className="absolute -bottom-48 -left-48 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              eyebrow="OMNICHANNEL EXPERIENCE"
              title="Seamless Integration Across Channels"
              description="Our AI solutions work together to provide a consistent experience across all communication channels. Conversations can seamlessly transition between voice, messaging, and web interfaces."
              align="center"
            />
          </motion.div>
          
          {/* Enhanced benefit cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {integrationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white backdrop-blur-md rounded-xl border border-slate-100 shadow-xl p-8 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-50 rounded-full opacity-70"></div>
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-indigo-50 rounded-full opacity-70"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-5 shadow-lg transform -rotate-6">
                      <div className="text-white transform rotate-6">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{benefit.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6 text-lg">{benefit.description}</p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-100 shadow-inner">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-blue-800 font-medium text-sm mb-1">KEY BENEFIT</h4>
                        <p className="text-blue-900 font-semibold">{benefit.benefit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced visualization with 3D effect */}
          <div className="mt-16 mb-20">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="px-4 py-1.5 mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-100">
                <svg className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                UNIFIED PLATFORM
              </Badge>
              
              <h3 className="text-3xl font-bold mb-3">One Platform, Multiple Channels</h3>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Your customers can start a conversation on one channel and continue it on another, with all context preserved.
              </p>
            </motion.div>
            
            <div className="w-full max-w-4xl mx-auto relative h-[400px] perspective-1000">
              {/* Enhanced 3D platform visualization */}
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* 3D platform base */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-2xl flex items-center justify-center z-30"
                  initial={{ scale: 0, rotateY: 45, rotateX: 15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    type: "spring",
                    stiffness: 100
                  }}
                  animate={{
                    rotateY: [45, 55, 45],
                    rotateX: [15, 20, 15]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="text-white font-bold text-lg text-center">
                    <div>Dialio</div>
                    <div>Platform</div>
                  </div>
                </motion.div>
                
                {/* 3D platform reflection */}
                <div className="absolute top-[calc(50%+64px)] left-1/2 transform -translate-x-1/2 w-32 h-8 bg-blue-900/10 rounded-full blur-sm z-20"></div>
                
                {/* 3D orbital platform */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border-2 border-dashed border-blue-200 z-10"
                  initial={{ opacity: 0, rotateX: 60, rotateZ: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  animate={{ rotateZ: 360 }}
                  transition={{ 
                    duration: 40, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                ></motion.div>
                
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-2 border-dashed border-indigo-200 z-10"
                  initial={{ opacity: 0, rotateX: 60, rotateZ: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  animate={{ rotateZ: -360 }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                ></motion.div>
                
                {/* Enhanced channel nodes */}
                {channelConnections.map((channel, i) => (
                  <motion.div
                    key={i}
                    className="absolute z-20"
                    style={{ 
                      top: `calc(50% - 24px + ${channel.y === "50%" ? 0 : channel.y})`,
                      left: `calc(50% - 24px + ${channel.x === "50%" ? 0 : channel.x})`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.7 + (i * 0.1), 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg cursor-pointer transform perspective-1000 transition-all"
                      style={{ backgroundColor: channel.color }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {channel.name === "Voice" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                        {channel.name === "SMS" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />}
                        {channel.name === "WhatsApp" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                        {channel.name === "Website" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />}
                        {channel.name === "Email" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                        {channel.name === "Social" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />}
                      </svg>
                    </motion.div>
                    <motion.div
                      className="mt-2 text-center text-sm font-semibold text-slate-700 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm"
                      initial={{ opacity: 0, y: -5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + (i * 0.1), duration: 0.3 }}
                    >
                      {channel.name}
                    </motion.div>
                  </motion.div>
                ))}
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
                  {channelConnections.map((channel, i) => {
                    const xCoord = parseFloat(channel.x.replace('%', '')) * 4;
                    const yCoord = parseFloat(channel.y.replace('%', '')) * 4;
                    return (
                      <motion.path
                        key={i}
                        d={`M200,200 L${xCoord},${yCoord}`}
                        stroke={`url(#line-gradient-${i})`}
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        filter="drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + (i * 0.05), duration: 0.8 }}
                      />
                    );
                  })}
                  <defs>
                    {channelConnections.map((channel, i) => (
                      <linearGradient key={i} id={`line-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor={channel.color} />
                      </linearGradient>
                    ))}
                  </defs>
                </svg>
              </motion.div>
            </div>
          </div>
          
          {/* Enhanced CTA section */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to experience seamless customer interactions?</h3>
              <p className="text-slate-600 mb-6">
                Discover how our integrated AI solutions can transform your customer experience across all channels.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/features">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg text-lg px-8 py-4 shadow-lg">
                    Explore All Features
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </motion.div>
              </Link>
              
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 font-medium rounded-lg text-lg px-8 py-4">
                    Schedule a Demo
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Customization section */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-50 to-indigo-50 opacity-60 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-slate-50 to-blue-50 opacity-60 rounded-tr-full"></div>
          
          {/* Animated particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-200 opacity-30"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                filter: 'blur(50px)'
              }}
              animate={{
                y: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
                x: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <motion.div 
                  className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-blue-100 z-0"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 45, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                />
                
                <Badge className="inline-flex items-center gap-1 px-4 py-1.5 mb-6 bg-blue-50 text-blue-700 font-medium border border-blue-100 rounded-full">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                  TAILORED SOLUTIONS
                </Badge>
                
                <h2 className="text-4xl font-bold mb-6 text-slate-800 leading-tight">
                  Customized AI Solutions 
                  <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    For Your Unique Business
                  </span>
                </h2>
                
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Our AI solutions adapt to your industry, brand voice, and specific requirements. We work closely with you to ensure a perfect integration that enhances your customer experience.
                </p>
                
                <div className="space-y-6 mb-10">
                  {[
                    { 
                      title: "Industry-Specific Knowledge", 
                      description: "Solutions trained on data relevant to your industry",
                      icon: (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )
                    },
                    { 
                      title: "Custom Workflows", 
                      description: "Seamless integration with your existing business processes",
                      icon: (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      )
                    },
                    { 
                      title: "Branded Experience", 
                      description: "Personalized to match your company's tone and style",
                      icon: (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.171 2.171a2 2 0 010 2.828l-8.486 8.486a2 2 0 01-2.828 0l-2.171-2.171a2 2 0 010-2.828L7.343 11" />
                        </svg>
                      )
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4 shadow-md">
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <span className="font-bold text-lg text-slate-800 block mb-1">{item.title}</span>
                        <span className="text-slate-600">{item.description}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-block"
                    >
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg text-lg px-8 py-4 shadow-lg">
                        Schedule a Consultation
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div 
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Card header with gradient */}
                <div className="h-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600"></div>
                
                <div className="p-8">
                  <div className="relative">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 bg-opacity-10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500 bg-opacity-10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mr-5 shadow-md">
                          <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800">Success Story: RetailPlus</h3>
                          <p className="text-blue-600 font-medium">Nationwide retail chain with 200+ locations</p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow-inner mb-8 relative border border-blue-100">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          <div className="text-lg font-medium italic text-slate-700 relative z-0">
                            The Dialio team took the time to understand our specific needs and created a custom solution that integrated perfectly with our existing systems. The AI voice agent has the same friendly, helpful tone our customers expect from our brand.
                          </div>
                          <div className="mt-6 flex items-center border-t border-blue-100 pt-4">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                              DC
                            </div>
                            <div>
                              <div className="font-bold text-slate-800">David Chen</div>
                              <div className="text-slate-600">Chief Technology Officer, RetailPlus</div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Results section */}
                      <motion.div
                        className="grid grid-cols-3 gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        {[
                          { value: "95%", label: "Customer satisfaction", icon: "👍", color: "from-blue-50 to-blue-100" },
                          { value: "45%", label: "Cost reduction", icon: "💰", color: "from-green-50 to-green-100" },
                          { value: "3 wks", label: "Implementation", icon: "⚡", color: "from-amber-50 to-amber-100" }
                        ].map((stat, i) => (
                          <motion.div
                            key={i}
                            className={`rounded-xl bg-gradient-to-br ${stat.color} p-4 text-center shadow-sm border border-slate-100`}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
                          >
                            <div className="text-3xl mb-1">{stat.icon}</div>
                            <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                            <div className="text-sm text-slate-600">{stat.label}</div>
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      {/* Additional implementation details */}
                      <motion.div
                        className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                      >
                        <div className="text-sm">
                          <span className="text-slate-500">Used solutions: </span>
                          <span className="font-medium text-blue-600">Voice Agent, SMS Chatbot, WhatsApp Integration</span>
                        </div>
                        
                        <Link href="/use-cases">
                          <Button variant="link" className="text-blue-600 font-medium p-0">
                            View full case study
                            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Additional micro-testimonials */}
              <motion.div 
                className="grid grid-cols-2 gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                {[
                  { company: "TechFlow", industry: "SaaS", quote: "Custom workflows saved us hours daily" },
                  { company: "MediCare+", industry: "Healthcare", quote: "Perfect integration with our patient portal" }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm">
                    <div className="text-blue-600 font-semibold">{item.company}</div>
                    <div className="text-sm text-slate-500">{item.industry}</div>
                    <div className="mt-2 text-slate-700 italic">"{item.quote}"</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
