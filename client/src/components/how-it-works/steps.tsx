
import { motion } from "framer-motion";

export default function HowItWorksSteps() {
  const steps = [
    {
      number: 1,
      title: "Incoming Call",
      description: "When a customer calls your business, Dialio answers immediately, ensuring no call goes unanswered regardless of time or day.",
      color: "#3B82F6" // Blue
    },
    {
      number: 2,
      title: "Natural Conversation",
      description: "Dialio greets the caller and engages in a natural, human-like conversation to understand their needs and purpose for calling.",
      color: "#8B5CF6" // Purple
    },
    {
      number: 3,
      title: "Task Execution",
      description: "Based on the conversation, Dialio performs the required tasks such as scheduling appointments, answering questions, or processing requests by accessing your systems.",
      color: "#10B981" // Green
    },
    {
      number: 4,
      title: "Resolution & Follow-up",
      description: "Dialio resolves the caller's request and concludes the conversation professionally, scheduling any necessary follow-ups or sending confirmation details.",
      color: "#F59E0B" // Amber
    },
    {
      number: 5,
      title: "Data & Analytics",
      description: "All interactions are recorded, transcribed, and analyzed to provide insights and continuously improve the system's performance and effectiveness.",
      color: "#EC4899" // Pink
    }
  ];

  // Animation variants
  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { 
      scaleY: 1, 
      transition: { 
        duration: 1.5, 
        ease: "easeInOut"
      }
    }
  };
  
  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({ 
      scale: 1, 
      opacity: 1, 
      transition: { 
        delay: 0.2 * custom,
        duration: 0.4, 
        type: "spring", 
        stiffness: 200 
      } 
    })
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.3 * custom,
        duration: 0.5 
      } 
    })
  };

  return (
    <div className="relative">
      {/* Process Steps with enhanced styling */}
      <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full">
        <motion.div 
          className="w-full h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        />
      </div>
      
      <div className="space-y-12 md:space-y-0 relative">
        {steps.map((step, index) => (
          <div key={index} className={`md:flex items-center md:space-x-8 relative ${index > 0 ? 'md:mt-24' : ''}`}>
            {index % 2 === 0 ? (
              <>
                <div className="hidden md:block w-1/2 text-right pr-8"></div>
                <motion.div 
                  className="absolute left-0 md:left-1/2 top-6 md:top-0 mt-0.5 md:ml-[-1.375rem] h-12 w-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10"
                  style={{ backgroundColor: step.color }}
                  variants={nodeVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,0,0,0.2)" }}
                >
                  <span className="text-white font-bold">{step.number}</span>
                  <div className="absolute w-full h-full rounded-full animate-ping opacity-20" style={{ backgroundColor: step.color }}></div>
                </motion.div>
                <motion.div 
                  className="pl-16 md:pl-0 md:w-1/2 md:pt-0"
                  variants={contentVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: step.color }}></div>
                      <h3 className="text-xl font-bold" style={{ color: step.color }}>{step.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div 
                  className="md:w-1/2 text-right pr-0 md:pr-8"
                  variants={contentVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center mb-3 justify-end">
                      <h3 className="text-xl font-bold" style={{ color: step.color }}>{step.title}</h3>
                      <div className="w-3 h-3 rounded-full ml-2" style={{ backgroundColor: step.color }}></div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="absolute left-0 md:left-1/2 top-6 md:top-0 mt-0.5 md:ml-[-1.375rem] h-12 w-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10"
                  style={{ backgroundColor: step.color }}
                  variants={nodeVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,0,0,0.2)" }}
                >
                  <span className="text-white font-bold">{step.number}</span>
                  <div className="absolute w-full h-full rounded-full animate-ping opacity-20" style={{ backgroundColor: step.color }}></div>
                </motion.div>
                <div className="pl-16 md:pl-0 md:w-1/2"></div>
              </>
            )}
          </div>
        ))}
      </div>
      
      {/* Visual decoration elements */}
      <div className="hidden md:block absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="hidden md:block absolute bottom-0 right-0 w-32 h-32 bg-purple-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
    </div>
  );
}
