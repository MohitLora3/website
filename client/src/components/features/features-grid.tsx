import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FeaturesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Natural Voice Conversations",
      description: "Engage callers with sophisticated AI that understands context, handles complex queries, and responds with natural, human-like voice that's nearly indistinguishable from a real person.",
      benefit: "Customers never feel like they're talking to a robot.",
      icon: (
        <svg className="h-6 w-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      bgColor: "#EFF6FF",
      iconColor: "#3B82F6"
    },
    {
      title: "Full Call Management",
      description: "Seamlessly handle calls from greeting to conclusion with robust telephony integration. Route calls, manage hold times, and transfer to humans when needed.",
      benefit: "Never miss another important call, even after hours.",
      icon: (
        <svg className="h-6 w-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      bgColor: "#F0F9FF",
      iconColor: "#0EA5E9"
    },
    {
      title: "Customizable AI Personality",
      description: "Tailor the AI's tone, knowledge base, and conversational style to perfectly match your brand's identity and communication standards.",
      benefit: "Creates a consistent brand experience on every call.",
      icon: (
        <svg className="h-6 w-6 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      ),
      bgColor: "#F5F3FF",
      iconColor: "#8B5CF6"
    },
    {
      title: "Efficient Outbound Campaigns",
      description: "Automate reaching hundreds of customers with personalized calls simultaneously, perfect for appointment reminders, promotions, or follow-ups.",
      benefit: "Scale your outreach without scaling your team.",
      icon: (
        <svg className="h-6 w-6 text-[#EC4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      bgColor: "#FCE7F3",
      iconColor: "#EC4899"
    },
    {
      title: "Insightful Analytics",
      description: "Track performance with comprehensive dashboards showing call volumes, durations, outcomes, customer satisfaction, and conversion rates.",
      benefit: "Make data-driven decisions to optimize your communication strategy.",
      icon: (
        <svg className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      bgColor: "#ECFDF5",
      iconColor: "#10B981"
    },
    {
      title: "Smart Task Handling",
      description: "Let Dialio perform actions during calls like accessing your database, answering specific questions, scheduling appointments, or processing payments.",
      benefit: "Integrates with your existing business systems.",
      icon: (
        <svg className="h-6 w-6 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      bgColor: "#EEF2FF",
      iconColor: "#6366F1"
    }
  ];
  
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index} 
          className="relative overflow-hidden bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover-card gradient-border"
          variants={itemVariants}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          whileHover={{ y: -5 }}
        >
          {/* Background decoration element */}
          <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full opacity-10" style={{ backgroundColor: feature.iconColor }}></div>
          
          <div 
            className="h-14 w-14 rounded-full flex items-center justify-center mb-4" 
            style={{ backgroundColor: feature.bgColor }}
          >
            <motion.div
              animate={hoveredIndex === index ? { 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              {feature.icon}
            </motion.div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          
          <p className="text-slate-600 mb-4 relative z-10">
            {feature.description}
          </p>
          
          <div className="text-sm font-medium" style={{ color: feature.iconColor }}>
            {feature.benefit}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
