import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Testimonial type
type Testimonial = {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating: number;
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Sample testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Dialio AI has revolutionized our customer service operations. We've reduced wait times by 78% and increased satisfaction ratings to an all-time high.",
      author: "Sarah Johnson",
      position: "Customer Service Director",
      company: "TechNova Solutions",
      image: "1",
      rating: 5
    },
    {
      id: 2,
      quote: "The AI Call Agent technology is incredible. Our appointments are now scheduled automatically 24/7, and the voice quality is so natural that customers often don't realize they're speaking with an AI.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "HealthFirst Clinic",
      image: "2",
      rating: 5
    },
    {
      id: 3,
      quote: "We implemented Dialio's suite of AI communication tools across our entire organization, and the ROI has been exceptional. 35% cost reduction with improved customer experience.",
      author: "Priya Patel",
      position: "Chief Innovation Officer",
      company: "GlobalConnect",
      image: "3",
      rating: 5
    }
  ];

  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }, 8000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, testimonials.length]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.4
      }
    }
  };
  
  // Design elements
  const QuoteIcon = () => (
    <svg className="h-12 w-12 text-blue-100 absolute top-0 -left-6 opacity-60" fill="currentColor" viewBox="0 0 32 32">
      <path d="M10 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10l-.1-1c-.3-6.6-5.5-13-11.9-15v4c3.5 1.9 6 6.1 6 10 0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6h2V8h-2zm20 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10l-.1-1c-.3-6.6-5.5-13-11.9-15v4c3.5 1.9 6 6.1 6 10 0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6h2V8h-2z" />
    </svg>
  );
  
  const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const AvatarPlaceholder = ({ id }: { id: string }) => (
    <div className={`h-14 w-14 rounded-full flex items-center justify-center text-white text-xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600`}>
      {id[0].toUpperCase()}
    </div>
  );
  
  return (
    <section 
      className="py-20 overflow-hidden bg-gradient-to-b from-white to-slate-50 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-white"></div>
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="inline-block text-blue-600 font-medium mb-2 bg-blue-50 px-4 py-1 rounded-full">
            TESTIMONIALS
          </motion.div>
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600"
          >
            What Our Customers Are Saying
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600">
            See how our AI communication solutions can transform your business operations.
          </motion.p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl relative">
            <div className="relative p-1">
              <motion.div
                key={testimonials[activeIndex].id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-slate-100 relative"
              >
                <div className="relative">
                  <QuoteIcon />
                  <p className="text-slate-700 text-lg md:text-xl mb-6 font-medium pl-6">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <AvatarPlaceholder id={testimonials[activeIndex].image} />
                    <div className="ml-4">
                      <h4 className="text-slate-900 font-semibold">{testimonials[activeIndex].author}</h4>
                      <p className="text-slate-500 text-sm">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                  <RatingStars rating={testimonials[activeIndex].rating} />
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-20 blur-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? "bg-blue-500 w-8" 
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Removed stats section */}
      </div>
    </section>
  );
}