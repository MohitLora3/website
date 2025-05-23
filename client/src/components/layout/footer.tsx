import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import NewsletterForm from "@/components/shared/newsletter-form";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const glowControls = useAnimation();

  // Listen for scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse position for glow effect in footer
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update glow effect based on mouse position
  useEffect(() => {
    const updateGlow = () => {
      glowControls.start({
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.15) 0%, rgba(59, 130, 246, 0.05) 25%, rgba(0, 0, 0, 0) 50%)`,
      });
    };

    updateGlow();
  }, [mousePosition, glowControls]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const socialVariants = {
    hover: { 
      scale: 1.2, 
      rotate: [0, 10, 0],
      transition: { duration: 0.3 } 
    }
  };

  const columnVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const scrollTopVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    tap: { scale: 0.9 }
  };

  // Footer sections data
  const footerSections = [
    {
      title: "Solutions",
      color: "#3B82F6",
      items: [
        { label: "AI Call Agent", path: "/call-agent" },
        { label: "AI SMS Chatbot", path: "/sms-chatbot" },
        { label: "AI WhatsApp Chatbot", path: "/whatsapp-chatbot" },
        { label: "AI Website Chatbot", path: "/website-chatbot" },
        { label: "AI Voice Assistant", path: "/voice-assistant" }
      ]
    },
    {
      title: "Company",
      color: "#7C3AED",
      items: [
        { label: "About Us", path: "/about-us" },
        { label: "Careers", path: "#" },
        { label: "Blog", path: "/blog" },
        { label: "Press", path: "#" },
        { label: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      color: "linear-gradient(to right, #3B82F6, #7C3AED)",
      items: [
        { label: "Pricing", path: "/pricing" },
        { label: "Documentation", path: "#" },
        { label: "Case Studies", path: "#" },
        { label: "Help Center", path: "#" },
        { label: "Privacy Policy", path: "/privacy-policy" }
      ]
    }
  ];

  // Floating shapes animation variants
  const floatingShapes = [
    { size: "w-12 h-12", top: "top-20", left: "left-[15%]", background: "bg-blue-500", opacity: "opacity-5", delay: 0.1, duration: 8 },
    { size: "w-16 h-16", top: "top-40", right: "right-[10%]", background: "bg-indigo-500", opacity: "opacity-5", delay: 0.5, duration: 12 },
    { size: "w-10 h-10", bottom: "bottom-20", left: "left-[30%]", background: "bg-purple-500", opacity: "opacity-5", delay: 0.8, duration: 6 },
    { size: "w-32 h-32", bottom: "bottom-[10%]", right: "right-[25%]", background: "bg-blue-600", opacity: "opacity-3", delay: 0.2, duration: 15 }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white py-20 relative overflow-hidden">
      {/* Interactive background glow effect */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none" 
        animate={glowControls}
      />

      {/* Decorative floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div 
          key={i}
          className={`absolute rounded-full ${shape.size} ${shape.top} ${shape.left || ''} ${shape.right || ''} ${shape.bottom || ''} ${shape.background} ${shape.opacity} blur-xl pointer-events-none`}
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: shape.duration, 
            delay: shape.delay, 
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Background grid pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTSA2MCAwIEwgNjAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Brand column */}
          <motion.div 
            className="col-span-1 md:col-span-1"
            variants={itemVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredColumn(0)}
            onHoverEnd={() => setHoveredColumn(null)}
          >
            <Link href="/">
              <motion.div 
                className="mb-6 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col">
                  <motion.span 
                    className="font-bold text-2xl relative"
                    animate={{ 
                      color: hoveredColumn === 0 ? "#fff" : "#f8fafc" 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Dialio
                    <motion.span 
                      className="absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                    />
                  </motion.span>
                  <motion.span 
                    className="text-[10px] text-blue-200 font-semibold tracking-wider"
                  >
                    AI COMMUNICATION
                  </motion.span>
                </div>
              </motion.div>
            </Link>

            <motion.p 
              className="text-slate-300 mb-8 max-w-xs"
              variants={itemVariants}
            >
              Advanced AI communication tools that transform customer interactions with cutting-edge conversational AI that sounds and responds like a human.
            </motion.p>

            {/* Social media links */}
            <motion.div 
              className="flex space-x-5 mb-8" 
              variants={itemVariants}
            >
              {[
                { icon: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z", color: "#4267B2" },
                { icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.029 10.029 0 01-3.129 1.198c-.896-.96-2.172-1.56-3.583-1.56-2.717 0-4.92 2.203-4.92 4.92 0 .39.045.77.13 1.131-4.092-.207-7.72-2.166-10.149-5.143a4.881 4.881 0 00-.667 2.476c0 1.707.867 3.215 2.188 4.095a4.924 4.924 0 01-2.227-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.412.112-.849.171-1.296.171-.315 0-.624-.03-.923-.085a4.936 4.936 0 004.602 3.417 9.868 9.868 0 01-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.936 13.936 0 007.548 2.209c9.059 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636a10.002 10.002 0 002.455-2.549z", color: "#1DA1F2" },
                { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z", color: "#0A66C2" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  className="group"
                  whileHover="hover"
                >
                  <motion.div
                    className="h-12 w-12 rounded-full flex items-center justify-center relative"
                    variants={socialVariants}
                  >
                    {/* Gradient background */}
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 group-hover:from-slate-700 group-hover:to-slate-600 transition-colors duration-300"
                    ></motion.div>

                    {/* Glow effect on hover */}
                    <motion.div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: `0 0 15px 2px rgba(255, 255, 255, 0.1)`
                      }}
                    ></motion.div>

                    {/* Icon */}
                    <svg className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* Newsletter subscription */}
            <motion.div 
              className="mt-8 bg-slate-800/50 p-5 rounded-xl backdrop-blur-sm border border-slate-700/80 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated gradient border */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  background: [
                    "linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.3) 50%, rgba(59,130,246,0) 100%)",
                    "linear-gradient(90deg, rgba(59,130,246,0) 100%, rgba(59,130,246,0.3) 50%, rgba(59,130,246,0) 0%)"
                  ],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ 
                  mixBlendMode: "overlay" 
                }}
              />

              <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Subscribe to our newsletter
              </h4>
              <p className="text-xs text-slate-400 mb-4">Get the latest updates and news right to your inbox.</p>
              
              {/* Using the new newsletter form component */}
              <div className="w-full">
                <NewsletterForm 
                  source="footer"
                  inputClassName="bg-slate-700/70 text-white text-sm placeholder:text-slate-500 rounded-l-md px-3 py-2.5 w-full border-0 focus:ring-2 focus:ring-blue-500 focus:bg-slate-700 transition-all duration-300"
                  buttonClassName="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-r-md px-5 py-2.5 text-sm font-medium whitespace-nowrap relative overflow-hidden shadow-lg min-w-[100px]"
                  buttonText="Subscribe"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Footer columns */}
          {footerSections.map((section, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              custom={i + 1}
              whileHover="hover"
              onHoverStart={() => setHoveredColumn(i + 1)}
              onHoverEnd={() => setHoveredColumn(null)}
              className={`${hoveredColumn === i + 1 ? 'z-10' : 'z-0'}`}
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <motion.span 
                  className="h-6 w-1.5 rounded-full mr-2.5 relative overflow-hidden"
                  style={{ background: section.color }}
                  animate={{
                    height: hoveredColumn === i + 1 ? 24 : 24,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient highlight */}
                  <motion.span 
                    className="absolute inset-0 w-full opacity-70"
                    animate={{
                      y: [24, -24],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
                    }}
                  />
                </motion.span>
                <span>{section.title}</span>
              </h3>

              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <motion.li 
                    key={j}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    custom={j}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: 0.1 * j, duration: 0.3 }
                      }
                    }}
                  >
                    <Link href={item.path} className="text-slate-300 hover:text-white transition-colors inline-flex items-center group">
                      {/* Arrow indicator */}
                      <motion.span 
                        className="text-blue-400 opacity-0 group-hover:opacity-100 mr-1.5 transition-opacity duration-200"
                        initial={{ x: -4 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.span>

                      {/* Link text with underline effect */}
                      <span className="relative">
                        {item.label}
                        <motion.span 
                          className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.2 }}
                        />
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer bottom */}
        <motion.div 
          className="mt-20 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row md:justify-between text-slate-400 text-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6" variants={itemVariants}>
            <motion.p 
              whileHover={{ color: "#e2e8f0" }}
              transition={{ duration: 0.2 }}
            >
              &copy; {currentYear} Dialio AI Communication Tools
            </motion.p>

            <span className="hidden sm:block text-slate-600">|</span>

            <motion.p 
              className="text-slate-500 text-xs sm:text-sm"
              whileHover={{ color: "#e2e8f0" }}
              transition={{ duration: 0.2 }}
            >
              Transforming customer conversations with AI
            </motion.p>
          </motion.div>

          <motion.div className="flex items-center space-x-6 mt-4 md:mt-0" variants={itemVariants}>
            {["Terms", "Privacy", "Cookies", "About Us", "Blog"].map((item, i) => (
              <Link 
                key={i} 
                href={item === "Terms" ? "/terms-of-service" : item === "Privacy" ? "/privacy-policy" : item === "Cookies" ? "/cookie-policy" : item === "About Us" ? "/about-us" : "/blog"} 
                className="relative hover:text-white transition-colors group"
              >
                <span>{item}</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 group-hover:w-full transition-all duration-200"
                />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg z-50 flex items-center justify-center group"
            variants={scrollTopVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            whileTap="tap"
            whileHover={{ y: -3, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.5)" }}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>

            {/* Animated ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-indigo-300 opacity-0 group-hover:opacity-70"
              animate={{ scale: [0.8, 1.1, 0.8], opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}