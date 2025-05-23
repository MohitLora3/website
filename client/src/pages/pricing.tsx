
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/shared/cta-section";
import { Switch } from "@/components/ui/switch";

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [callMinutes, setCallMinutes] = useState(100);
  const [websiteChatbotMonths, setWebsiteChatbotMonths] = useState(1);
  const [priceReveal, setPriceReveal] = useState(false);
  const [annualBilling, setAnnualBilling] = useState(false);
  const calculateRef = useRef<HTMLDivElement>(null);
  
  const scrollToCalculate = () => {
    if (calculateRef.current) {
      calculateRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animate price reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      setPriceReveal(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const calculatedCallPrice = (callMinutes * 0.1).toFixed(2);
  const websiteChatbotMonthlyPrice = 50;
  const websiteChatbotAnnualDiscount = 0.2; // 20% discount
  const websiteChatbotPrice = annualBilling 
    ? (websiteChatbotMonthlyPrice * (1 - websiteChatbotAnnualDiscount) * websiteChatbotMonths).toFixed(2)
    : (websiteChatbotMonthlyPrice * websiteChatbotMonths).toFixed(2);

  // Plan data with features
  const pricingPlans = [
    {
      id: "call-agent",
      name: "AI Call Agent",
      description: "Fully automate inbound and outbound calls with natural voice conversations.",
      price: "$0.1 per minute",
      annualPrice: "$0.1 per minute",
      priceType: "usage-based",
      color: "#3B82F6",
      bgColor: "#EFF6FF",
      features: [
        "Real-time voice synthesis & recognition",
        "Context-aware conversation memory",
        "Multi-language support",
        "Seamless human handoff capability",
        "24/7 availability",
        "Detailed call analytics",
        "Custom voice and personality options",
      ],
      buttonText: "Calculate Cost",
      buttonAction: scrollToCalculate,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      id: "sms-chatbot",
      name: "AI SMS Chatbot",
      description: "Engage customers with 24/7 automated text conversations and SMS campaigns.",
      price: "Contact Us",
      annualPrice: "Contact Us",
      priceType: "custom",
      color: "#10B981",
      bgColor: "#ECFDF5",
      features: [
        "Automated appointment scheduling",
        "Personalized marketing campaigns",
        "Quick response templates",
        "Analytics dashboard for engagement",
        "Two-way conversation capabilities",
        "Custom keyword triggers",
        "Integration with CRM systems"
      ],
      buttonText: "Get Quote",
      buttonAction: () => window.location.href = '/contact',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: "whatsapp-chatbot",
      name: "AI WhatsApp Chatbot",
      description: "Connect with customers via WhatsApp with AI that handles support and sales.",
      price: "Contact Us",
      annualPrice: "Contact Us",
      priceType: "custom",
      color: "#22C55E",
      bgColor: "#F0FDF4",
      features: [
        "Rich media message support",
        "Interactive buttons & quick replies",
        "Order tracking & notifications",
        "Group message broadcasting",
        "End-to-end encrypted conversations",
        "Message templates approval system",
        "Global reach with multi-language support"
      ],
      buttonText: "Get Quote",
      buttonAction: () => window.location.href = '/contact',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      id: "website-chatbot",
      name: "AI Website Chatbot",
      description: "Instantly engage website visitors with 24/7 support and lead capture.",
      price: "$50 per month",
      annualPrice: "$40 per month",
      priceType: "subscription",
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
      features: [
        "Custom branding & widget design",
        "Proactive engagement triggers",
        "Knowledge base integration",
        "File & screen sharing capabilities",
        "Smart routing to human agents",
        "Website visitor analytics",
        "Unlimited conversations"
      ],
      buttonText: "Calculate Cost",
      buttonAction: scrollToCalculate,
      popular: true,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "voice-assistant",
      name: "AI Voice Assistant",
      description: "Let visitors ask questions using voice and get immediate spoken answers.",
      price: "Contact Us",
      annualPrice: "Contact Us",
      priceType: "custom",
      color: "#64748B",
      bgColor: "#F8FAFC",
      features: [
        "Speech-to-text & text-to-speech",
        "Noise cancellation technology",
        "Voice biometric authentication",
        "Accessibility compliance support",
        "Multilingual voice recognition",
        "Custom wake words",
        "Third-party service integrations"
      ],
      buttonText: "Get Quote",
      buttonAction: () => window.location.href = '/contact',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="pt-20 pb-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center gap-2 text-blue-600 font-semibold py-1 px-4 mb-4 bg-blue-50 rounded-full border border-blue-100 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              TRANSPARENT PRICING
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Simple Pricing for 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"> Every Need</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Choose the AI communication solution that's right for your business. 
              Scale up or down as your needs change with our flexible pricing options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToCalculate}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
              >
                Calculate Your Price
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/contact'}
                className="border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-6 py-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-lg font-medium"
              >
                Talk to Sales
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
          
          <motion.div 
            className="absolute top-1/3 left-1/4 w-12 h-12 rounded-lg bg-blue-200 opacity-40"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-indigo-200 opacity-40"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />

          <motion.div 
            className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-purple-200 opacity-30"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
        </div>
      </motion.section>

      {/* Billing Toggle */}
      <motion.div
        className="max-w-lg mx-auto mb-12 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="bg-white p-2 rounded-full shadow-md flex items-center justify-center space-x-3 border border-slate-200">
          <span className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${!annualBilling ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md' : 'text-slate-500'}`}>
            Monthly Billing
          </span>
          
          <Switch
            checked={annualBilling}
            onCheckedChange={setAnnualBilling}
            className={`${annualBilling ? 'bg-indigo-600' : 'bg-slate-200'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          />
          
          <span className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center ${annualBilling ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md' : 'text-slate-500'}`}>
            Annual Billing
            <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-bold">
              Save 20%
            </span>
          </span>
        </div>
      </motion.div>

      {/* Pricing Plans */}
      <motion.section 
        className="py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 h-full ${
                  hoveredCard === plan.id ? "shadow-xl scale-[1.02]" : "shadow-lg"
                } ${plan.popular ? "border-2 border-blue-500" : "border border-slate-200"}`}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ backgroundColor: hoveredCard === plan.id ? plan.bgColor : "white" }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 transform translate-x-[30%] translate-y-[40%] rotate-45">
                    POPULAR
                  </div>
                )}
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="h-12 w-12 rounded-xl flex items-center justify-center mr-4"
                      style={{ backgroundColor: plan.bgColor, color: plan.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {plan.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-800">{plan.name}</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <AnimatePresence>
                      {priceReveal && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="text-3xl font-bold text-slate-900">
                            {annualBilling && plan.annualPrice !== plan.price ? plan.annualPrice : plan.price}
                          </div>
                          <div className="text-sm text-slate-500 mt-1">
                            {plan.priceType === "subscription" && annualBilling && 
                              <span className="flex items-center">
                                Per month, billed annually
                                <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                                  20% off
                                </span>
                              </span>
                            }
                            {plan.priceType === "subscription" && !annualBilling && "Per month, billed monthly"}
                            {plan.priceType === "usage-based" && "Pay only for what you use"}
                            {plan.priceType === "custom" && "Custom pricing for your needs"}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center" style={{ color: plan.color }}>
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Features
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-600">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      onClick={plan.buttonAction}
                      className="w-full py-5 text-white transition-all duration-300 shadow-md hover:shadow-lg"
                      style={{ 
                        background: `linear-gradient(to right, ${plan.color}, ${plan.color}DD)` 
                      }}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Price Calculator */}
      <motion.section 
        ref={calculateRef}
        className="py-16 bg-gradient-to-b from-slate-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div 
              className="inline-flex items-center justify-center gap-2 text-indigo-600 font-semibold py-1 px-4 mb-4 bg-indigo-50 rounded-full border border-indigo-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              INTERACTIVE CALCULATOR
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Calculate Your <span className="text-indigo-600">Custom Price</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Adjust the sliders to see exactly how much you'll pay based on your usage.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Call Agent Calculator */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-3">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">AI Call Agent</h3>
                </div>
                <p className="mt-2 text-blue-100">$0.1 per minute of conversation</p>
              </div>
              
              <div className="p-6">
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-slate-600 font-medium">Monthly call minutes</label>
                    <span className="text-sm font-bold text-slate-700">{callMinutes} minutes</span>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="relative h-3 overflow-hidden flex rounded-full bg-blue-100">
                      <motion.div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" 
                        style={{ width: `${(callMinutes / 1000) * 100}%` }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${(callMinutes / 1000) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="1000"
                      value={callMinutes}
                      onChange={(e) => setCallMinutes(parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-3 opacity-0 cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>1 min</span>
                      <span>250 min</span>
                      <span>500 min</span>
                      <span>750 min</span>
                      <span>1000 min</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl mb-6 overflow-hidden relative">
                  <div className="z-10">
                    <p className="text-sm text-slate-600">Estimated monthly cost</p>
                    <motion.p 
                      className="text-3xl font-bold text-blue-600"
                      key={calculatedCallPrice}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${calculatedCallPrice}
                    </motion.p>
                  </div>
                  <div className="bg-blue-100 rounded-full p-3 z-10">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  {/* Animated background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-200/50"
                    animate={{
                      background: ['linear-gradient(to right, rgba(219, 234, 254, 0.5), rgba(191, 219, 254, 0.5))', 
                                   'linear-gradient(to right, rgba(191, 219, 254, 0.5), rgba(219, 234, 254, 0.5))'],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  <motion.div 
                    className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-blue-200 opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-slate-600">Only pay for actual conversation time</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-slate-600">No setup fees or monthly minimums</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-slate-600">Volume discounts available for high usage</p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = '/contact'}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
            
            {/* Website Chatbot Calculator */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-3">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">AI Website Chatbot</h3>
                </div>
                <p className="mt-2 text-indigo-100">
                  {annualBilling ? '$40 per month (billed annually)' : '$50 per month'}
                </p>
              </div>
              
              <div className="p-6">
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-slate-600 font-medium">Subscription length</label>
                    <span className="text-sm font-bold text-slate-700">{websiteChatbotMonths} {websiteChatbotMonths === 1 ? 'month' : 'months'}</span>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="relative h-3 overflow-hidden flex rounded-full bg-indigo-100">
                      <motion.div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" 
                        style={{ width: `${(websiteChatbotMonths / 12) * 100}%` }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${(websiteChatbotMonths / 12) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={websiteChatbotMonths}
                      onChange={(e) => setWebsiteChatbotMonths(parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-3 opacity-0 cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>1 month</span>
                      <span>3 months</span>
                      <span>6 months</span>
                      <span>9 months</span>
                      <span>12 months</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm text-slate-600 font-medium">Billing preference</label>
                    <div className="flex items-center">
                      <span className={`text-xs ${annualBilling ? 'text-slate-500' : 'text-indigo-600 font-medium'} mr-2`}>Monthly</span>
                      <Switch
                        checked={annualBilling}
                        onCheckedChange={setAnnualBilling}
                        className={`${annualBilling ? 'bg-indigo-600' : 'bg-slate-200'} relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                      />
                      <span className={`text-xs ${annualBilling ? 'text-indigo-600 font-medium' : 'text-slate-500'} ml-2 flex items-center`}>
                        Annual
                        {annualBilling && (
                          <span className="ml-1 text-xs text-green-600 font-medium">(-20%)</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl mb-6 overflow-hidden relative">
                  <div className="z-10">
                    <p className="text-sm text-slate-600">Total cost</p>
                    <motion.p 
                      className="text-3xl font-bold text-indigo-600"
                      key={websiteChatbotPrice}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${websiteChatbotPrice}
                    </motion.p>
                    <p className="text-xs text-slate-500 mt-1">
                      {annualBilling ? 'Billed annually' : 'Billed monthly'}
                    </p>
                  </div>
                  <div className="bg-indigo-100 rounded-full p-3 z-10">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  {/* Animated background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 to-purple-100/50"
                    animate={{
                      background: ['linear-gradient(to right, rgba(224, 231, 255, 0.5), rgba(237, 233, 254, 0.5))', 
                                   'linear-gradient(to right, rgba(237, 233, 254, 0.5), rgba(224, 231, 255, 0.5))'],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  <motion.div 
                    className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-purple-200 opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-slate-600">Unlimited conversations</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-slate-600">Fast implementation with no coding required</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-slate-600">
                      {annualBilling ? 'Annual billing saves 20%' : 'Switch to annual billing for 20% savings'}
                    </p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = '/contact'}
                  className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Cost Visualization */}
          <motion.div 
            className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Cost Visualization</h3>
            
            <div className="relative h-64 bg-slate-50 rounded-xl p-4 mb-8">
              <div className="absolute inset-0 p-4 flex items-end">
                {/* Call Agent Bar */}
                <motion.div 
                  className="w-1/2 flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-2">
                    <p className="text-sm font-medium text-slate-600">AI Call Agent</p>
                    <p className="text-lg font-bold text-blue-600">${calculatedCallPrice}</p>
                  </div>
                  <motion.div 
                    className="w-24 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg relative overflow-hidden"
                    style={{ 
                      height: `${Math.min(Math.max((callMinutes / 1000) * 180, 10), 180)}px` 
                    }}
                    initial={{ height: 0 }}
                    animate={{ 
                      height: `${Math.min(Math.max((callMinutes / 1000) * 180, 10), 180)}px`
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Animated water effect */}
                    <motion.div 
                      className="absolute inset-0 bg-blue-300 opacity-30"
                      animate={{
                        y: [0, 8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-blue-200 opacity-20"
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Website Chatbot Bar */}
                <motion.div 
                  className="w-1/2 flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-center mb-2">
                    <p className="text-sm font-medium text-slate-600">AI Website Chatbot</p>
                    <p className="text-lg font-bold text-indigo-600">${websiteChatbotPrice}</p>
                  </div>
                  <motion.div 
                    className="w-24 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg relative overflow-hidden"
                    style={{ 
                      height: `${Math.min(Math.max((websiteChatbotMonths / 12) * 180, 15), 180)}px` 
                    }}
                    initial={{ height: 0 }}
                    animate={{ 
                      height: `${Math.min(Math.max((websiteChatbotMonths / 12) * 180, 15), 180)}px`
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Animated water effect */}
                    <motion.div 
                      className="absolute inset-0 bg-indigo-300 opacity-30"
                      animate={{
                        y: [0, 8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.3
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-indigo-200 opacity-20"
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.8
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Horizontal lines for scale */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-4">
                <div className="h-0.5 w-full border-t border-dashed border-slate-200 relative">
                  <span className="absolute -top-6 right-0 text-xs text-slate-400">$1000</span>
                </div>
                <div className="h-0.5 w-full border-t border-dashed border-slate-200 relative">
                  <span className="absolute -top-6 right-0 text-xs text-slate-400">$750</span>
                </div>
                <div className="h-0.5 w-full border-t border-dashed border-slate-200 relative">
                  <span className="absolute -top-6 right-0 text-xs text-slate-400">$500</span>
                </div>
                <div className="h-0.5 w-full border-t border-dashed border-slate-200 relative">
                  <span className="absolute -top-6 right-0 text-xs text-slate-400">$250</span>
                </div>
                <div className="h-0.5 w-full border-t border-dashed border-slate-200 relative">
                  <span className="absolute -top-6 right-0 text-xs text-slate-400">$0</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">AI Call Agent Summary</h4>
                  <p className="text-sm text-slate-600 mb-3">
                    With {callMinutes} minutes per month, your total cost is ${calculatedCallPrice}.
                  </p>
                  <div className="text-sm text-slate-600">
                    <p>• Perfect for businesses handling {callMinutes < 200 ? 'low' : callMinutes < 500 ? 'medium' : 'high'} call volumes</p>
                    <p>• Only pay for actual conversation time</p>
                    <p>• Scale up or down based on seasonal demand</p>
                  </div>
                </div>
                
                {/* Animated decoration */}
                <motion.div 
                  className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-blue-200 opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-indigo-900 mb-3">AI Website Chatbot Summary</h4>
                  <p className="text-sm text-slate-600 mb-3">
                    With a {websiteChatbotMonths}-month{annualBilling ? ' annual' : ''} subscription, your total cost is ${websiteChatbotPrice}.
                  </p>
                  <div className="text-sm text-slate-600">
                    <p>• Flat monthly rate regardless of usage</p>
                    <p>• {annualBilling ? 'Annual billing provides 20% savings' : 'Consider annual billing for additional savings'}</p>
                    <p>• Unlimited website conversations included</p>
                  </div>
                </div>
                
                {/* Animated decoration */}
                <motion.div 
                  className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-indigo-200 opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </div>
            
            {/* Savings indicator */}
            {annualBilling && (
              <motion.div 
                className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100 flex items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-green-800">Annual savings</h4>
                  <p className="text-sm text-green-700">
                    You save ${(websiteChatbotMonthlyPrice * websiteChatbotMonths * websiteChatbotAnnualDiscount).toFixed(2)} with annual billing
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Other solutions */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-white to-slate-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Need a Custom Solution?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our SMS Chatbot, WhatsApp Chatbot, and Voice Assistant solutions have custom pricing based on your specific needs.
            </motion.p>
          </div>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full -translate-x-10 -translate-y-10 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-50 to-blue-100 rounded-full translate-x-10 translate-y-10 opacity-70"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Contact Our Team</h3>
                  <p className="text-slate-600 mb-6">
                    Our team will work with you to understand your specific requirements and create a tailored solution that's perfect for your business needs and budget.
                  </p>
                  
                  <div className="space-y-5 mb-8">
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-2 mr-4">
                        <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-slate-900">Tailored Implementation</h4>
                        <p className="text-sm text-slate-600">Customized for your industry and specific use case</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-2 mr-4">
                        <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-slate-900">Flexible Pricing</h4>
                        <p className="text-sm text-slate-600">Models based on your usage patterns and scale</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-2 mr-4">
                        <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-slate-900">Dedicated Support</h4>
                        <p className="text-sm text-slate-600">Personal account manager and technical assistance</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contact Sales
                  </Button>
                </div>
                
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 shadow-md">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Solutions with Custom Pricing</h3>
                  
                  <div className="space-y-6">
                    {pricingPlans.filter(plan => plan.priceType === "custom").map((plan, i) => (
                      <motion.div 
                        key={i}
                        className="flex p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <div className="mr-4">
                          <div 
                            className="h-12 w-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: plan.bgColor, color: plan.color }}
                          >
                            {plan.icon}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-base font-medium text-slate-900">{plan.name}</h4>
                          <p className="text-sm text-slate-600 mb-3">{plan.description}</p>
                          <div className="flex items-center">
                            <span className="text-xs font-medium bg-blue-50 text-blue-700 py-1 px-2 rounded-full">Contact for Pricing</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                      <p className="text-sm text-slate-700 italic">
                        "Our custom solutions typically start at $500/month depending on volume, features, and integration requirements."
                      </p>
                      <div className="mt-2 flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">D</div>
                        <span className="text-xs font-medium text-slate-700">David Chen, Customer Success Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-slate-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Everything you need to know about our pricing and services.
            </motion.p>
          </div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              {
                question: "How is billing for the AI Call Agent handled?",
                answer: "Billing for the AI Call Agent is usage-based at $0.1 per minute. We only charge for actual conversation time, not for setup, wait time, or silent periods. You'll receive a detailed breakdown of all calls in your monthly invoice."
              },
              {
                question: "Can I upgrade or downgrade my Website Chatbot plan?",
                answer: "Yes, you can upgrade or downgrade your AI Website Chatbot subscription at any time. Changes will take effect at the start of your next billing cycle. There are no penalties for changing your plan."
              },
              {
                question: "Do you offer discounts for annual commitments?",
                answer: "Yes, we offer discounts for annual commitments across all our services. For the AI Website Chatbot, you can save up to 20% with an annual plan. Contact our sales team for specific pricing on annual plans."
              },
              {
                question: "What determines the pricing for SMS and WhatsApp Chatbots?",
                answer: "SMS and WhatsApp Chatbot pricing is customized based on factors including expected monthly message volume, integration complexity, and required features. We work with you to create a plan that aligns with your specific use case and budget."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for our AI Website Chatbot. For other solutions, we provide limited-time demos so you can experience the technology firsthand before making a commitment."
              },
              {
                question: "What happens if I exceed my expected usage?",
                answer: "For usage-based services like the AI Call Agent, you'll simply be billed for the additional minutes used. For subscription services like the Website Chatbot, your service continues uninterrupted regardless of usage volume."
              },
              {
                question: "Can I deploy these AI solutions on my existing infrastructure?",
                answer: "Yes, all our AI solutions can be deployed on your existing infrastructure or hosted in our secure cloud environment. We offer flexible deployment options to suit your security requirements and technical specifications."
              },
              {
                question: "Are there any setup or onboarding fees?",
                answer: "For standard implementations, there are no setup fees. For custom solutions requiring complex integrations or specialized development, there may be a one-time setup fee that will be clearly communicated during the consultation process."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Deployment Information */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div 
              className="inline-flex items-center justify-center gap-2 text-teal-600 font-semibold py-1 px-4 mb-4 bg-teal-50 rounded-full border border-teal-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              DEPLOYMENT OPTIONS
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Flexible Deployment for Your Business
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our solutions can be deployed quickly and securely in multiple environments to meet your needs.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Hosted",
                description: "Our fully managed cloud solution with autoscaling capabilities and 99.9% uptime guarantee.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                features: ["No maintenance required", "Automatic updates", "Elastic scaling", "Global availability"],
                color: "blue"
              },
              {
                title: "On-Premises",
                description: "Deploy within your existing infrastructure for maximum control and data sovereignty.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
                features: ["Complete data control", "Enhanced security", "Integration with legacy systems", "Custom configurations"],
                color: "green"
              },
              {
                title: "Hybrid Solution",
                description: "Combine cloud and on-premises components for the best of both worlds.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                features: ["Flexible architecture", "Optimized performance", "Balanced control", "Progressive migration path"],
                color: "purple"
              }
            ].map((option, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className={`bg-${option.color}-50 p-6`}>
                  <div className="flex items-center">
                    <div className={`bg-${option.color}-100 rounded-lg p-3 mr-4 text-${option.color}-600`}>
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{option.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm">
                        <svg className={`h-5 w-5 text-${option.color}-500 mr-2`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Customer Communication?"
        description="Start with our transparent pricing and scale as your business grows."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
    </div>
  );
}
