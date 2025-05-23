
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DemoSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.95 }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.2 * custom,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 section-shadow"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="md:flex">
        <div className="md:w-1/2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex items-center justify-center relative overflow-hidden">
          {/* Background patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#3B82F6]"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#7C3AED]"></div>
            <motion.div 
              className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#7C3AED]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          <div className="max-w-md mx-auto text-center relative z-10">
            <motion.div 
              className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#EFF6FF] mb-4"
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0.3)", "0px 0px 20px rgba(59, 130, 246, 0.6)", "0px 0px 0px rgba(59, 130, 246, 0.3)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.svg 
                className="h-8 w-8 text-[#3B82F6]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </motion.svg>
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2">See Dialio in Action</h3>

            <p className="text-slate-300 mb-6">
              Watch our demo video to experience how Dialio handles real customer calls with natural conversation.
            </p>

            <motion.div
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3B82F6] hover:bg-[#2563EB] transition-colors">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </Button>
            </motion.div>

            {/* Floating features */}
            <div className="mt-8 space-y-3">
              <motion.div 
                className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-left"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-[#3B82F6]/20 flex items-center justify-center mr-2">
                    <svg className="h-3 w-3 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-white">Natural Voice Processing</p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-left"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mr-2">
                    <svg className="h-3 w-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-white">24/7 Availability</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-8">
          <motion.h3 
            className="text-2xl font-bold mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience Dialio Technology
          </motion.h3>

          <motion.p 
            className="text-slate-600 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore interactive previews of our key features to see how Dialio transforms customer communications with AI-powered intelligence.
          </motion.p>

          <motion.div 
            className="bg-slate-50 rounded-xl p-6 flex flex-col"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              {[
                {
                  title: "Voice Recognition",
                  description: "Experience our advanced voice recognition with 98% accuracy across accents and languages.",
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  ),
                  color: "blue"
                },
                {
                  title: "Natural Language Processing",
                  description: "See how our AI understands context, sentiment, and intent to provide personalized responses.",
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  ),
                  color: "purple" 
                },
                {
                  title: "Real-time Analytics",
                  description: "Preview our dashboard displaying call statistics, sentiment analysis, and conversion metrics.",
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  color: "green"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 group"
                  variants={featureVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`flex-shrink-0 h-12 w-12 rounded-lg bg-${feature.color}-100 flex items-center justify-center text-${feature.color}-600 group-hover:bg-${feature.color}-200 transition-colors`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="pt-4 mt-6 border-t border-slate-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <a href="/call-agent#demo">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 rounded-lg hover:shadow-lg transition-shadow">
                    Schedule a Live Demo
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
