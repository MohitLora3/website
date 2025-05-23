import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CTASection() {
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
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
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
  
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        delay: 0.3 + (custom * 0.1),
        duration: 0.4
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    }
  };
  
  const floatingIconVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 }
    },
    float: {
      y: [0, -15, 0],
      transition: { 
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };
  
  const backgroundShapeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom: number) => ({ 
      opacity: 0.15, 
      scale: 1,
      transition: { 
        delay: 0.2 + (custom * 0.2),
        duration: 0.8
      }
    }),
    animate: (custom: number) => ({
      y: [0, -20 * (custom % 2 ? 1 : -1), 0],
      x: [0, 15 * (custom % 3 ? 1 : -1), 0],
      rotate: [0, 5 * (custom % 2 ? 1 : -1), 0],
      scale: [1, 1.05, 1],
      transition: { 
        duration: 6 + (custom * 2),
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    })
  };

  // Background shape elements (more varied than just circles)
  const shapes = [
    // Circles
    { shape: "circle", size: { w: 180, h: 180 }, position: { top: "10%", left: "5%" }, delay: 0 },
    { shape: "circle", size: { w: 150, h: 150 }, position: { top: "60%", left: "85%" }, delay: 1 },
    
    // Squares (rotated to look like diamonds)
    { shape: "square", size: { w: 120, h: 120 }, position: { top: "75%", left: "15%" }, delay: 2 },
    { shape: "square", size: { w: 100, h: 100 }, position: { top: "20%", left: "90%" }, delay: 3 },
    
    // Blobs
    { shape: "blob", size: { w: 220, h: 180 }, position: { top: "40%", left: "60%" }, delay: 4 },
    { shape: "blob", size: { w: 260, h: 200 }, position: { top: "85%", left: "50%" }, delay: 5 }
  ];
  
  // Features to showcase in badges
  const features = [
    { 
      text: "24/7 Availability", 
      icon: (
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      text: "99% Customer Satisfaction", 
      icon: (
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    { 
      text: "Easy Integration", 
      icon: (
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      text: "Enterprise Security", 
      icon: (
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#7C3AED]"></div>
        
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")` 
          }}
        ></div>
      </div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((shape, i) => {
          let shapeClass = "rounded-full"; // Circle by default
          
          if (shape.shape === "square") {
            shapeClass = "rounded-lg transform rotate-45";
          } else if (shape.shape === "blob") {
            // Blob shapes have more organic custom paths
            shapeClass = "blob-shape";
          }
          
          return (
            <motion.div
              key={i}
              className={`absolute ${shapeClass} bg-white`}
              style={{
                width: shape.size.w,
                height: shape.size.h,
                top: shape.position.top,
                left: shape.position.left,
                opacity: 0,
                transformOrigin: "center",
                borderRadius: shape.shape === "blob" ? "60% 40% 70% 30% / 50% 60% 40% 50%" : undefined
              }}
              variants={backgroundShapeVariants}
              custom={shape.delay}
              initial="hidden"
              animate={loaded ? ["visible", "animate"] : "hidden"}
            />
          );
        })}
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Phone icon */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-16 h-16 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm flex items-center justify-center text-white border border-white border-opacity-30"
          variants={floatingIconVariants}
          initial="hidden"
          animate={loaded ? ["visible", "float"] : "hidden"}
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </motion.div>
        
        {/* Chat icon */}
        <motion.div
          className="absolute top-[20%] right-[10%] w-16 h-16 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm flex items-center justify-center text-white border border-white border-opacity-30"
          variants={floatingIconVariants}
          initial="hidden"
          animate={loaded ? ["visible", "float"] : "hidden"}
          custom={1}
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-block text-white font-medium mb-4 text-sm rounded-full bg-white bg-opacity-15 backdrop-blur-sm px-4 py-1 border border-white border-opacity-20"
            variants={itemVariants}
          >
            TRANSFORM YOUR BUSINESS TODAY
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            Ready to <span className="relative inline-block">
              <span className="relative z-10">Revolutionize</span>
              <motion.span 
                className="absolute bottom-1 left-0 w-full h-3 bg-white bg-opacity-20"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span> Your Customer Communications?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 text-white text-opacity-90 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Join forward-thinking businesses that are automating customer interactions and delivering exceptional experiences with our AI communication tools.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-5"
            variants={itemVariants}
          >
            <Link href="/contact">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ffffff] to-[#ffffff99] opacity-75 group-hover:opacity-100 rounded-lg blur-md transition duration-200"></div>
                <Button className="relative bg-white font-medium rounded-lg text-lg px-8 py-5 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <span className="absolute inset-0 w-full h-full bg-white rounded-lg"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#7C3AED]">Request a Demo</span>
                </Button>
              </motion.div>
            </Link>
            
            <Link href="/pricing">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-medium rounded-lg text-lg px-8 py-5 transition-all duration-300 shadow-inner"
                >
                  View Pricing
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Enhanced feature badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-15 backdrop-blur-sm px-5 py-3 rounded-full text-white flex items-center border border-white border-opacity-20 shadow-lg"
                variants={badgeVariants}
                custom={index}
                whileHover="hover"
              >
                {feature.icon}
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Trust badges/logos section removed */}
        </motion.div>
      </div>
    </section>
  );
}
