import { motion } from "framer-motion";
import { ReactNode } from "react";

type BrandBadgeProps = {
  text: string;
  icon?: ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  className?: string;
};

export default function BrandBadge({ 
  text, 
  icon, 
  variant = 'default',
  className = '' 
}: BrandBadgeProps) {
  
  // Style variants
  const variants = {
    default: "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600",
    accent: "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600", 
    muted: "bg-slate-100 text-slate-600"
  };
  
  // Animation variants
  const badgeVariants = {
    initial: { opacity: 0, scale: 0.9, y: 10 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      } 
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 } 
    }
  };
  
  const dotVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`inline-flex items-center px-4 py-1 rounded-full font-medium text-sm ${variants[variant]} ${className}`}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {icon ? (
        <span className="mr-1.5">{icon}</span>
      ) : (
        <motion.span 
          className="w-2 h-2 rounded-full bg-current mr-2 flex-shrink-0"
          variants={dotVariants}
          animate={["animate", "pulse"]}
        />
      )}
      {text}
    </motion.div>
  );
}