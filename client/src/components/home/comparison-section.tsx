import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ComparisonSection() {
  const [activeTab, setActiveTab] = useState("call-center");
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  // Comparison content for each tab
  const comparisonData = {
    "call-center": {
      title: "Traditional Call Centers vs Dialio AI",
      dialio: [
        { title: "24/7 Availability", description: "Always available without staffing limitations" },
        { title: "No Hold Times", description: "Customers connect instantly with zero wait time" },
        { title: "Consistent Experience", description: "Every interaction follows your exact standards" },
        { title: "Real-time Data", description: "Instant insights into customer interactions" },
        { title: "Infinitely Scalable", description: "Handle unlimited calls without additional staff" }
      ],
      traditional: [
        { title: "Limited Hours", description: "Restricted by staff scheduling and availability" },
        { title: "Long Wait Times", description: "Customers often experience frustrating delays" },
        { title: "Variable Quality", description: "Inconsistent experiences based on individual agents" },
        { title: "Delayed Reporting", description: "Reports typically available next day or later" },
        { title: "Costly Scaling", description: "Adding capacity requires hiring and training" }
      ]
    },
    "chatbots": {
      title: "Basic Chatbots vs Dialio AI",
      dialio: [
        { title: "Natural Conversations", description: "Human-like interactions that understand context" },
        { title: "Omnichannel Support", description: "Seamless experience across all communication channels" },
        { title: "Advanced Understanding", description: "Comprehends complex queries and nuances" },
        { title: "Self-improving", description: "Learns from interactions to continuously improve" },
        { title: "Enterprise Integration", description: "Deep integration with all your business systems" }
      ],
      traditional: [
        { title: "Rigid Script Flows", description: "Limited to predetermined conversation paths" },
        { title: "Single Channel", description: "Typically limited to website or single platform" },
        { title: "Limited Comprehension", description: "Struggles with complex queries and context" },
        { title: "Static Responses", description: "Doesn't learn or improve over time" },
        { title: "Minimal Integration", description: "Limited connection to other business systems" }
      ]
    },
    "human-agents": {
      title: "Human Agents vs Dialio AI",
      dialio: [
        { title: "Unlimited Capacity", description: "Handle thousands of simultaneous interactions" },
        { title: "Perfect Memory", description: "Recalls every customer detail and interaction history" },
        { title: "No Human Error", description: "Consistently follows procedures without mistakes" },
        { title: "Instant Deployment", description: "New capabilities deployed instantly across all agents" },
        { title: "Fraction of the Cost", description: "Significantly lower operating costs" }
      ],
      traditional: [
        { title: "Limited Capacity", description: "Each agent handles one customer at a time" },
        { title: "Imperfect Recall", description: "May miss details about customer history" },
        { title: "Inconsistent Performance", description: "Quality varies with fatigue, mood, and training" },
        { title: "Slow Implementation", description: "Training new procedures takes weeks or months" },
        { title: "High Operational Costs", description: "Salaries, benefits, training, and facilities" }
      ]
    }
  };

  const tabOptions = [
    { id: "call-center", label: "vs Call Centers" },
    { id: "chatbots", label: "vs Basic Chatbots" },
    { id: "human-agents", label: "vs Human Agents" }
  ];

  // Specific comparison being displayed
  const currentComparison = comparisonData[activeTab as keyof typeof comparisonData];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-50 rounded-full opacity-50 blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="inline-block text-blue-600 font-medium mb-2 bg-blue-50 px-4 py-1 rounded-full">
            WHY CHOOSE DIALIO
          </motion.div>
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600"
          >
            See How We Compare
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600">
            Discover how Dialio AI transforms communication compared to traditional solutions.
          </motion.p>
          
          {/* Tab selector */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8"
            variants={itemVariants}
          >
            {tabOptions.map((tab) => (
              <motion.button
                key={tab.id}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Comparison area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-10 text-slate-800">{currentComparison.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dialio AI Column */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold ml-3 text-blue-800">Dialio AI</h4>
                  </div>
                  
                  <ul className="space-y-5">
                    {currentComparison.dialio.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex p-3 bg-white bg-opacity-60 backdrop-blur-sm rounded-lg shadow-sm border border-blue-50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800">{item.title}</h5>
                          <p className="text-sm text-slate-600">{item.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Traditional Column */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-slate-400 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center shadow">
                      <svg className="w-6 h-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold ml-3 text-slate-700">Traditional Solution</h4>
                  </div>
                  
                  <ul className="space-y-5">
                    {currentComparison.traditional.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex p-3 bg-white bg-opacity-60 backdrop-blur-sm rounded-lg shadow-sm border border-slate-100"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800">{item.title}</h5>
                          <p className="text-sm text-slate-600">{item.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Visual indicator of differences */}
        <motion.div 
          className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 max-w-3xl mx-auto border border-slate-200 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-xl font-bold mb-4 text-center text-slate-800">The Dialio Advantage</h4>
          
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Cost Savings", value: "75%", color: "text-green-600" },
              { label: "Customer Satisfaction", value: "+35%", color: "text-blue-600" },
              { label: "Response Time", value: "1.5s", color: "text-indigo-600" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ComparisonSection;