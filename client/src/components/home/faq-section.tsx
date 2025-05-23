import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  // Toggle FAQ item
  const toggleQuestion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // FAQ data
  const faqs: FAQItem[] = [
    {
      question: "How does Dialio's AI voice technology work?",
      answer: "Dialio uses advanced natural language processing, speech recognition, and neural text-to-speech to create natural, human-like conversations. Our AI analyzes each caller's intent, responds appropriately, and learns from each interaction to continually improve performance."
    },
    {
      question: "Can Dialio integrate with our existing business systems?",
      answer: "Absolutely! Dialio seamlessly integrates with CRMs like Salesforce, HubSpot, and Zoho, scheduling platforms like Calendly and Acuity, payment processors, and custom business systems through our API. We also offer pre-built integrations for popular business tools."
    },
    {
      question: "How quickly can we implement Dialio in our business?",
      answer: "Most businesses can be up and running with Dialio in just days, not weeks or months. Our implementation team handles the technical setup, and you can easily configure your AI's knowledge base through our intuitive dashboard. Simple use cases can be live within 24 hours."
    },
    {
      question: "What languages does Dialio support?",
      answer: "Dialio currently supports over 30 languages including English, Spanish, French, German, Chinese, Japanese, Portuguese, Italian, Dutch, and many more. Our AI recognizes different accents and dialects within these languages for maximum accessibility."
    },
    {
      question: "How does Dialio handle complex or unusual customer requests?",
      answer: "Dialio is designed to handle a wide range of customer interactions, from simple to complex. For unusual or highly specialized requests that fall outside the AI's capabilities, Dialio can seamlessly transfer the call to a human agent with all context preserved, ensuring a smooth customer experience."
    },
    {
      question: "What kind of analytics and reporting does Dialio provide?",
      answer: "Our comprehensive analytics dashboard provides real-time insights into call volumes, resolution rates, common customer inquiries, sentiment analysis, and performance metrics. Custom reports can be automatically generated and sent to stakeholders, and all data can be exported for further analysis."
    }
  ];

  return (
    <section id="faq" className="py-28 bg-gradient-to-b from-white to-slate-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-50 rounded-full opacity-60 -translate-x-1/2 blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-purple-50 rounded-full opacity-60 translate-x-1/2 blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="inline-block text-blue-600 font-medium mb-2 bg-blue-50 px-4 py-1 rounded-full">
            FREQUENTLY ASKED QUESTIONS
          </motion.div>
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
          >
            Have Questions? We Have Answers.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about Dialio and how our AI-powered platform can revolutionize your business communications and customer experiences.
          </motion.p>
        </motion.div>
        
        {/* FAQ Items */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl border ${
                expandedId === index 
                  ? "border-blue-200 shadow-md" 
                  : "border-slate-100 shadow-sm hover:border-blue-100 hover:shadow"
              } transition-all duration-300`}
              variants={itemVariants}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                aria-expanded={expandedId === index}
              >
                <span className="text-lg font-medium text-slate-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: expandedId === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    expandedId === index 
                      ? "bg-blue-100 text-blue-600" 
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {expandedId === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional help CTA */}
        <motion.div 
          className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-slate-800 mb-3">Still have questions?</h3>
          <p className="text-slate-600 mb-5">Our team is here to help with any additional questions you might have.</p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg shadow-sm hover:bg-blue-50 transition-colors font-medium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg shadow-sm hover:bg-blue-50 transition-colors font-medium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;