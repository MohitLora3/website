
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up a simple timeout to simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      variants={containerVariants}
      initial="hidden"
      animate={!loading ? "visible" : "hidden"}
      exit={{ opacity: 0 }}
    >
      <div className="relative flex flex-col items-center z-10 max-w-md px-6">
        {/* Logo */}
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-5xl font-bold">
            <span className="text-blue-600">Dia</span>
            <span className="text-slate-800">lio</span>
          </div>
        </motion.div>

        {/* Simple loading indicator */}
        <motion.div 
          className="mb-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex space-x-3">
            <motion.div 
              className="h-3 w-3 rounded-full bg-blue-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 0.2,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
            <motion.div 
              className="h-3 w-3 rounded-full bg-blue-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 0.2,
                ease: "easeInOut",
                delay: 0.2,
                times: [0, 0.5, 1]
              }}
            />
            <motion.div 
              className="h-3 w-3 rounded-full bg-blue-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 0.2,
                ease: "easeInOut",
                delay: 0.4,
                times: [0, 0.5, 1]
              }}
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="text-sm text-slate-500 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          AI-Powered Communication Suite
        </motion.div>
      </div>
    </motion.div>
  );
}
