import { motion } from "framer-motion";
import { ReactNode } from "react";
import BrandBadge from "./brand-badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  titleGradient?: boolean;
  eyebrowIcon?: ReactNode;
  eyebrowVariant?: 'default' | 'accent' | 'muted';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  titleGradient = true,
  eyebrowIcon,
  eyebrowVariant = 'default',
  className = ''
}: SectionHeadingProps) {
  
  // Alignment styles
  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <motion.div 
      className={`max-w-3xl mb-16 ${alignStyles[align]} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={itemVariants} className="mb-2">
        <BrandBadge 
          text={eyebrow} 
          icon={eyebrowIcon} 
          variant={eyebrowVariant}
        />
      </motion.div>
      
      <motion.h2 
        variants={itemVariants} 
        className={`text-3xl md:text-4xl font-bold mb-6 ${
          titleGradient 
            ? 'bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600' 
            : 'text-slate-800'
        }`}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          variants={itemVariants} 
          className="text-lg text-slate-600"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}