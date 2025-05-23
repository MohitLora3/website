
import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import FeaturesGrid from "@/components/features/features-grid";
import DemoSection from "@/components/features/demo-section";
import CTASection from "@/components/shared/cta-section";
import SectionHeading from "@/components/ui/section-heading";
import BrandBadge from "@/components/ui/brand-badge";
import FeatureCard from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";

export default function Features() {
  // Update document title
  useEffect(() => {
    document.title = "Dialio Features | AI Call Agent";
  }, []);

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

  // Technology features
  const technologies = [
    {
      title: "Natural Language Processing",
      description: "Advanced algorithms understand context, intent, and sentiment, allowing Dialio to follow complex conversations naturally.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      variant: "blue"
    },
    {
      title: "Continuous Learning",
      description: "Dialio improves with every interaction, learning from conversation patterns to deliver increasingly personalized experiences.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      variant: "purple"
    },
    {
      title: "Voice Recognition",
      description: "State-of-the-art voice recognition technology accurately understands callers even in noisy environments or with different accents.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      variant: "green"
    }
  ];

  return (
    <>
      {/* Hero section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Enhanced background with animated gradients */}
        <div className="absolute inset-0 bg-slate-50">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-100 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, -70, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BrandBadge text="DIALIO FEATURES" className="mb-4" />
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Experience the Future</span>
                <span className="relative"> of Voice AI
                  <motion.div 
                    className="absolute -z-10 w-full h-4 bg-blue-50 bottom-1 left-0 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>
              
              <motion.p 
                className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Dialio transforms how businesses handle phone conversations with 
                powerful AI capabilities. Discover our cutting-edge features that 
                deliver exceptional customer experiences.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl text-lg px-8 py-5 w-full sm:w-auto shadow-lg shadow-blue-200/40">
                      Request a Demo
                    </Button>
                  </motion.div>
                </Link>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-medium rounded-xl text-lg px-8 py-5 w-full sm:w-auto">
                    View Documentation
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-12 h-12 bg-blue-500 bg-opacity-10 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 0.8, 
                y: 0,
                transition: { delay: 0.3, duration: 0.8 }
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3
              }}
            />
            
            <motion.div
              className="absolute top-40 right-20 w-8 h-8 bg-indigo-500 bg-opacity-10 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 0.8, 
                y: 0,
                transition: { delay: 0.5, duration: 0.8 }
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4,
                delay: 1
              }}
            />
            
            <motion.div
              className="absolute bottom-20 left-1/4 w-10 h-10 bg-purple-500 bg-opacity-10 rounded-lg rotate-45"
              animate={{
                y: [0, -15, 0],
                rotate: [45, 90, 45]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          {/* Main features grid */}
          <FeaturesGrid />
          
          {/* Demo section */}
          <DemoSection />
        </div>
      </section>
      
      {/* Technology section with enhanced visuals */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-slate-100 opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full border border-slate-100 opacity-70"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading 
            eyebrow="CUTTING-EDGE TECHNOLOGY"
            title="Advanced AI Technology"
            description="Dialio leverages state-of-the-art AI to deliver conversations that feel human, with intelligent understanding and natural responses."
            align="center"
          />
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <FeatureCard
                  title={tech.title}
                  description={tech.description}
                  icon={tech.icon}
                  variant={tech.variant as any}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced technology highlights */}
          <motion.div 
            className="mt-24 rounded-2xl p-10 border border-slate-100 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/70 to-indigo-50/70 z-0"></div>
            
            {/* Decorative elements */}
            <div className="absolute right-0 top-0 w-60 h-60 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-2xl transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute left-0 bottom-0 w-60 h-60 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2">
                  <BrandBadge text="INTELLIGENT CONVERSATIONS" variant="accent" className="mb-4" />
                  <h3 className="text-3xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">Convert More Callers into Customers</h3>
                  <p className="text-slate-600 mb-8 text-lg">
                    Dialio doesn't just answer calls—it actively engages customers and guides them through 
                    your sales pipeline with intelligent conversation flows designed to maximize conversions.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "98% accurate intent recognition",
                      "Personalized conversation paths",
                      "Seamless human handoff when needed",
                      "Real-time sentiment analysis"
                    ].map((feature, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Animated decoration */}
                    <motion.div
                      className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotateZ: [0, 5, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <motion.div
                      className="absolute -left-10 -bottom-10 w-32 h-32 bg-indigo-50 rounded-full"
                      animate={{
                        scale: [1, 1.15, 1],
                        rotateZ: [0, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                    
                    <div className="relative z-10 space-y-5">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                        <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                        <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                        <div className="h-3 w-20 bg-slate-200 rounded-full ml-2"></div>
                      </div>
                      
                      <div className="h-2 w-40 bg-blue-100 rounded"></div>
                      <div className="h-2 w-32 bg-slate-100 rounded"></div>
                      <div className="h-2 w-24 bg-slate-100 rounded"></div>
                      
                      <div className="h-14 w-full bg-blue-50 rounded-lg flex items-center justify-center my-5 border border-blue-100">
                        <span className="text-blue-600 font-medium">Conversion Rate Analytics</span>
                      </div>
                      
                      <div className="flex justify-between gap-4">
                        <motion.div 
                          className="h-24 w-1/3 bg-green-50 rounded-lg flex items-center justify-center border border-green-100"
                          whileHover={{ y: -5 }}
                        >
                          <div className="text-center">
                            <div className="text-green-600 font-bold text-xl">76%</div>
                            <div className="text-green-700 text-xs">Conversion</div>
                          </div>
                        </motion.div>
                        <motion.div 
                          className="h-24 w-1/3 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100"
                          whileHover={{ y: -5 }}
                        >
                          <div className="text-center">
                            <div className="text-blue-600 font-bold text-xl">92%</div>
                            <div className="text-blue-700 text-xs">Satisfaction</div>
                          </div>
                        </motion.div>
                        <motion.div 
                          className="h-24 w-1/3 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100"
                          whileHover={{ y: -5 }}
                        >
                          <div className="text-center">
                            <div className="text-purple-600 font-bold text-xl">3.4m</div>
                            <div className="text-purple-700 text-xs">Calls</div>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="h-2 w-40 bg-slate-100 rounded"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* New feature showcase section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading 
            eyebrow="FUTURE READY"
            title="Continuously Evolving"
            description="We're constantly enhancing Dialio with new capabilities to keep you ahead of the competition."
            align="center"
          />
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div 
              className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-100 to-indigo-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      rotateY: [0, 360],
                      rotateX: [15, 20, 15]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <svg className="w-24 h-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Multilingual Support</h3>
                <p className="text-slate-600 mb-6">
                  Dialio now understands and speaks over 58 languages fluently, making it perfect for 
                  global businesses serving diverse customer bases. Each language preserves the natural 
                  conversational flow that makes Dialio feel human.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {["English", "Spanish", "French", "German", "Japanese", "+53 more"].map((lang, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-purple-100 to-pink-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <motion.div 
                      className="absolute h-32 w-32 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
                      animate={{ rotateZ: 360 }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400"></div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute h-20 w-20 rounded-full bg-white shadow-lg flex items-center justify-center top-20 left-20 z-0"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      animate={{ rotateZ: -360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-400 to-blue-400"></div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Emotion Intelligence</h3>
                <p className="text-slate-600 mb-6">
                  Our latest update enables Dialio to detect subtle emotional cues in a caller's voice,
                  allowing it to adapt its tone, pace, and content to match the emotional state of the customer
                  for a more empathetic experience.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                    <div className="flex items-center gap-2 text-purple-700 font-medium mb-1 text-sm">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Sentiment Detection</span>
                    </div>
                    <div className="bg-white rounded h-2 w-full">
                      <div className="bg-purple-400 h-2 rounded w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <div className="flex items-center gap-2 text-blue-700 font-medium mb-1 text-sm">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Response Adaptation</span>
                    </div>
                    <div className="bg-white rounded h-2 w-full">
                      <div className="bg-blue-400 h-2 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
