import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact/contact-form";
import SectionHeading from "@/components/ui/section-heading";
import BrandBadge from "@/components/ui/brand-badge";

export default function Contact() {
  // Update document title
  useEffect(() => {
    document.title = "Contact Us | Dialio AI Communication Tools";
  }, []);
  
  // FAQ accordion state
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  
  // Toggle FAQ item
  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  
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
  
  // Benefits data
  const benefits = [
    {
      title: "Secure Implementation",
      description: "Your data security is our priority. All our AI solutions follow industry-standard security protocols.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Quick Setup",
      description: "Get up and running within days, not months. Our specialists handle the integration process for you.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Dedicated Support",
      description: "Our team is available to help you maximize the value of your AI communication tools.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0a2 2 0 010 0m0 0l3.536 3.536M9.172 9.172L5.636 5.636m3.536 3.536a2 2 0 010 0M5.636 18.364l3.536-3.536m0 0a2 2 0 010 0m0 0l-3.536-3.536M12 12h.01M16 17a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      ),
      color: "purple"
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "How quickly can we implement Dialio?",
      answer: "Most businesses can be up and running with Dialio in 1-2 weeks, depending on the complexity of your call flows and integration requirements."
    },
    {
      question: "Can Dialio integrate with our existing phone system?",
      answer: "Yes, Dialio is designed to work with most modern phone systems and can be implemented alongside your existing infrastructure. We offer multiple integration options including SIP trunking, API-based connections, and more."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "All communications are encrypted, and we follow industry best practices for data protection. We're compliant with major regulations like GDPR and CCPA. Our solutions are regularly audited for security compliance."
    },
    {
      question: "What languages does Dialio support?",
      answer: "Dialio currently supports multiple languages including English, Spanish, French, German, Japanese, Chinese, and more. Contact us for the full list of supported languages and regional dialects."
    },
    {
      question: "Do you offer pricing tiers for different company sizes?",
      answer: "Yes, we offer flexible pricing plans designed to accommodate businesses of all sizes, from small startups to enterprise organizations. Our team can provide a custom quote based on your specific needs and call volume."
    },
    {
      question: "What kind of results can we expect?",
      answer: "Our clients typically see 40-60% reduction in call handling costs, 30% increase in customer satisfaction, and significant improvements in call resolution rates. We'll work with you to establish KPIs and track performance."
    }
  ];

  return (
    <>
      {/* Hero section with enhanced visual elements */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Enhanced background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-indigo-50/20 to-white">
          <div className="absolute inset-0">
            <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-grid)" />
            </svg>
          </div>
          
          <motion.div 
            className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/40 to-blue-300/20 opacity-70 -z-10 blur-3xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          
          <motion.div 
            className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-200/30 to-purple-200/20 opacity-60 -z-10 blur-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.8, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BrandBadge text="GET IN TOUCH" className="mb-4" />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Let's Connect</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600">
              We're ready to help you transform your customer communications with AI
            </p>
          </motion.div>
          
          <div className="md:flex md:items-start md:gap-12 lg:gap-20">
            {/* Left column - Benefits with enhanced styling */}
            <div className="md:w-1/2 mb-16 md:mb-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl shadow-blue-100/30 p-8 border border-blue-50"
              >
                <motion.h2 
                  className="text-2xl font-bold mb-8 pb-4 border-b border-slate-100 text-slate-800"
                  variants={itemVariants}
                >
                  Why Work With Us
                </motion.h2>
                
                <div className="space-y-10">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index} 
                      className="flex gap-5 group"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className={`flex-shrink-0 h-16 w-16 rounded-2xl bg-${benefit.color}-50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:bg-${benefit.color}-100`}>
                        <div className={`text-${benefit.color}-500`}>{benefit.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-12 pt-6 border-t border-slate-100"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-500">Response time</span>
                    <span className="text-sm font-semibold text-green-600">Usually within 24 hours</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Right column - Contact form with enhanced styling */}
            <div className="md:w-1/2">
              <motion.div 
                className="glass-card rounded-3xl p-10 border border-blue-100/30 shadow-2xl shadow-blue-100/20 relative overflow-hidden backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Form card decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 rounded-full -ml-32 -mb-32"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">Send us a message</h3>
                  <p className="text-slate-600 mb-8 pb-4 border-b border-slate-100">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ section with enhanced styling */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="#3B82F6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading 
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Have Questions? We Have Answers"
            description="Find quick answers to common questions about our AI communication tools below."
            align="center"
          />
          
          <div className="mt-16 space-y-5">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`border ${
                  activeQuestion === index 
                    ? "border-blue-200 bg-white shadow-xl" 
                    : "border-slate-200 bg-white/80 hover:shadow-lg hover:border-blue-100"
                } rounded-2xl overflow-hidden transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                layout
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                  aria-expanded={activeQuestion === index}
                >
                  <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeQuestion === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      activeQuestion === index 
                        ? "bg-blue-100 text-blue-600" 
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </motion.div>
                </button>
                
                <motion.div
                  animate={{ 
                    height: activeQuestion === index ? "auto" : 0,
                    opacity: activeQuestion === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-slate-600 border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional support options with enhanced styling */}
          <div className="mt-20 pt-10 border-t border-blue-100">
            <div className="text-center">
              <BrandBadge text="MORE WAYS TO CONNECT" className="mb-4" variant="accent" />
              <h3 className="text-3xl font-bold mb-8 text-slate-800">Other Ways to Reach Us</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Email Us",
                  description: "Send us a message anytime",
                  contact: "info@dialio.io",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  color: "blue"
                },
                {
                  title: "Call Us",
                  description: "Available 24/7",
                  contact: "+1 231 447 3304",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  color: "green"
                },
                {
                  title: "Live Chat",
                  description: "Chat with our support team",
                  contact: "Available 24/7",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ),
                  color: "purple"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="glass-card rounded-2xl p-8 text-center bg-white shadow-xl border border-slate-100 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-50 rounded-full opacity-40 -mr-16 -mt-16 blur-xl`}></div>
                  
                  <div className="relative">
                    <div className={`mx-auto w-16 h-16 bg-gradient-to-r from-${item.color}-100 to-${item.color}-50 rounded-2xl flex items-center justify-center mb-6 shadow-md text-${item.color}-600`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 mb-4">{item.description}</p>
                    <p className="font-medium text-lg text-blue-600">{item.contact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Social media links */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-slate-500 mb-6">Connect with us on social media</p>
            <div className="flex justify-center space-x-6">
              {[
                {
                  name: "Twitter",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  ),
                },
                {
                  name: "Facebook",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="text-slate-400 hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="sr-only">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
