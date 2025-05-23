import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import HowItWorksSteps from "@/components/how-it-works/steps";
import CTASection from "@/components/shared/cta-section";
import SectionHeading from "@/components/ui/section-heading";
import BrandBadge from "@/components/ui/brand-badge";
import FeatureCard from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  // Update document title
  useEffect(() => {
    document.title = "How Dialio Works | AI Call Agent";
  }, []);
  
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
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
  
  // Implementation steps
  const implementationSteps = [
    {
      title: "1. Consultation",
      description: "Our team works with you to understand your business needs, call workflows, and specific requirements to personalize Dialio for your company.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      variant: "blue"
    },
    {
      title: "2. Configuration",
      description: "We set up your Dialio instance with your custom voice personality, knowledge base, and business logic to handle your specific call scenarios.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      variant: "purple"
    },
    {
      title: "3. Activation",
      description: "Your Dialio AI Call Agent goes live, immediately handling calls and intelligently managing conversations while continuously learning and improving.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      variant: "green"
    }
  ];
  
  // Support features
  const supportFeatures = [
    "Dedicated account manager for personalized support",
    "Regular performance reviews and optimization",
    "Continuous updates and AI learning improvements",
    "24/7 technical support and monitoring",
    "Custom integration assistance"
  ];
  
  // Path animation for connection lines
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  return (
    <>
      {/* Hero section */}
      <section className="pt-20 pb-16 lg:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-white">
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-slate-50 to-white"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 border border-slate-100 rounded-full opacity-60"></div>
          <div className="absolute top-40 -left-20 w-60 h-60 border border-slate-100 rounded-full opacity-60"></div>
          
          {/* Animated background elements */}
          <motion.div 
            className="absolute right-20 top-60 w-16 h-16"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full h-full bg-blue-100 rounded-lg rotate-12"></div>
          </motion.div>
          
          <motion.div 
            className="absolute left-40 top-40 w-8 h-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-full h-full bg-indigo-100 rounded-full"></div>
          </motion.div>
          
          <svg className="absolute top-80 left-0 right-0 mx-auto opacity-5 pointer-events-none" width="800" height="400" viewBox="0 0 800 400">
            <motion.path
              d="M200,50 C300,20 400,150 500,100 S700,200 800,150"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
            />
            <motion.path
              d="M0,200 C100,150 200,250 300,200 S500,300 600,250 S700,150 800,200"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
            />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BrandBadge text="HOW DIALIO WORKS" className="mb-4" variant="accent" />
              
              <motion.h1 
                className="text-3xl md:text-5xl font-bold mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="gradient-text relative">
                  Effortless
                  <motion.svg 
                    className="absolute -bottom-1 left-0 w-full" 
                    height="8" 
                    viewBox="0 0 100 8" 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                  >
                    <path 
                      d="M0,5 C30,2 70,8 100,4" 
                      fill="none" 
                      stroke="#8B5CF6" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span> 
                <span className="relative ml-2">
                  AI Interaction
                  <motion.div 
                    className="absolute -z-10 w-full h-5 bg-gradient-to-r from-blue-50 to-purple-50 bottom-1 left-0 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-slate-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Dialio simplifies your communication workflow with a seamless process that handles calls from 
                start to finish. See how easily it integrates into your business.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link href="/contact">
                  <Button className="cta-button text-white font-medium rounded-lg text-lg px-8 py-4 shadow-lg">
                    Get Started Today
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <HowItWorksSteps />
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="cta-button text-white font-medium rounded-lg text-lg px-8 py-4 shadow-lg">
                  Get Started with Dialio
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Implementation section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading 
            eyebrow="IMPLEMENTATION"
            title="Easy Implementation"
            description="Getting started with Dialio is simple with our guided setup process that ensures your AI Call Agent is up and running quickly."
            align="center"
          />
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {implementationSteps.map((step, index) => (
              <FeatureCard
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
                variant={step.variant as any}
              />
            ))}
          </motion.div>
          
          {/* Timeline illustration */}
          <div className="mt-24 relative flex flex-col items-center">
            <div className="text-center mb-12">
              <BrandBadge text="IMPLEMENTATION TIMELINE" className="mb-4" />
              <h3 className="text-2xl font-bold gradient-text">From Signup to Go-Live in Under 2 Weeks</h3>
            </div>
            
            <div className="w-full max-w-4xl relative">
              {/* Timeline line */}
              <motion.div 
                className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              ></motion.div>
              
              {/* Timeline nodes */}
              <div className="relative grid grid-cols-4 gap-4">
                {[
                  { label: "Day 1", title: "Configuration" },
                  { label: "Day 3-5", title: "Go Live!" },
                  { label: "Day 7-10", title: "Testing" },
                  { label: "Day 14", title: "Ready to Go!" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-white border-4 border-indigo-500 z-10 mb-4 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.2), duration: 0.4, type: "spring" }}
                    >
                      <span className="text-indigo-500 font-bold">{i+1}</span>
                    </motion.div>
                    <div className="text-center">
                      <div className="text-sm text-slate-500 font-medium">{item.label}</div>
                      <div className="font-semibold">{item.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Managed solution section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 relative z-10">
                {/* Subtle background pattern */}
                <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 z-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                      <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: "white", strokeWidth: 1 }} />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
                  </svg>
                </div>
                
                <div className="relative">
                  <BrandBadge text="FULLY MANAGED" variant="accent" className="mb-4" />
                  
                  <h2 className="text-3xl font-bold text-white mb-4">Fully Managed Solution</h2>
                  
                  <p className="text-slate-300 mb-6">
                    Our team handles all the technical details so you can focus on your business. From setup to maintenance, 
                    we ensure your AI Call Agent is always performing at its best.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {supportFeatures.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                          <svg className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href="/contact">
                      <Button className="bg-white hover:bg-slate-100 text-slate-900 font-medium px-8 py-3 shadow-lg">
                        Get In Touch
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gradient-to-br from-[#3B82F6] to-[#7C3AED] p-8 md:p-12 relative">
                {/* Animated dots pattern */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(20)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-white"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>
                
                <div className="flex h-full items-center justify-center">
                  <motion.div 
                    className="glass-bg rounded-xl p-8 border border-white border-opacity-20 shadow-lg max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">Ready to Get Started?</h3>
                    
                    <p className="text-white text-opacity-90 mb-6 text-center">
                      Our implementation process typically takes just 1-2 weeks, allowing you to quickly experience 
                      the benefits of AI-powered call automation.
                    </p>
                    
                    <motion.div 
                      className="text-sm bg-white bg-opacity-10 p-5 rounded-lg border border-white border-opacity-10 relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute -top-3 -left-3 text-3xl text-white opacity-50">"</div>
                      <p className="text-white">
                        The onboarding process was incredibly smooth. Dialio was fully operational within a week, 
                        and we saw ROI within the first month.
                      </p>
                      <div className="mt-4 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 mr-3"></div>
                        <div className="text-white opacity-90">
                          <div className="font-medium">Sarah Chen</div>
                          <div className="text-xs">Customer Service Director, TechCorp</div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
