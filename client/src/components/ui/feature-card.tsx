import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
  linkText?: string;
  variant?: 'blue' | 'purple' | 'green' | 'amber' | 'slate';
  className?: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
  link,
  linkText = "Learn more",
  variant = 'blue',
  className = ''
}: FeatureCardProps) {
  
  // Style variants
  const colorVariants = {
    blue: {
      gradient: "from-blue-500 to-indigo-600",
      lightGradient: "from-blue-50 to-indigo-50",
      textColor: "text-blue-600",
      hoverColor: "hover:text-blue-700",
      borderColor: "border-blue-100"
    },
    purple: {
      gradient: "from-purple-500 to-pink-600",
      lightGradient: "from-purple-50 to-pink-50",
      textColor: "text-purple-600",
      hoverColor: "hover:text-purple-700",
      borderColor: "border-purple-100"
    },
    green: {
      gradient: "from-green-500 to-teal-600",
      lightGradient: "from-green-50 to-teal-50",
      textColor: "text-green-600",
      hoverColor: "hover:text-green-700",
      borderColor: "border-green-100"
    },
    amber: {
      gradient: "from-amber-500 to-orange-600",
      lightGradient: "from-amber-50 to-orange-50",
      textColor: "text-amber-600",
      hoverColor: "hover:text-amber-700",
      borderColor: "border-amber-100"
    },
    slate: {
      gradient: "from-slate-600 to-slate-800",
      lightGradient: "from-slate-100 to-slate-200",
      textColor: "text-slate-600",
      hoverColor: "hover:text-slate-800",
      borderColor: "border-slate-200"
    }
  };
  
  const styles = colorVariants[variant];
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 500 }
    }
  };
  
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "40%",
      transition: { duration: 0.8, delay: 0.5 }
    }
  };
  
  const linkArrowVariants = {
    hidden: { x: -5, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    hover: { x: 5 }
  };

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden h-full ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="p-6 flex flex-col h-full">
        <motion.div 
          className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${styles.lightGradient} flex items-center justify-center`}
          variants={iconVariants}
        >
          <div className={`text-white bg-gradient-to-br ${styles.gradient} p-2 rounded-lg`}>
            {icon}
          </div>
        </motion.div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 mb-6 flex-grow">{description}</p>
        
        {/* Animated line separator */}
        <motion.div 
          className={`h-0.5 bg-gradient-to-r ${styles.gradient} w-0`}
          variants={lineVariants}
        />
        
        {link && (
          <div className="mt-6">
            <Link href={link}>
              <motion.div
                className={`font-medium flex items-center ${styles.textColor} ${styles.hoverColor} transition-colors cursor-pointer`}
                whileHover="hover"
              >
                {linkText}
                <motion.svg 
                  className="ml-2 h-5 w-5" 
                  variants={linkArrowVariants}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.div>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}