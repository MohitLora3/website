import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from "@/components/ui/button";

function PricingSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  // Pricing data from the system overview
  const plans = [
    {
      title: "Monthly Plan",
      price: "$0.10",
      unit: "per minute",
      description: "Flexible pay-as-you-go pricing with no long-term commitment",
      discount: null,
      recommended: false,
      features: [
        "Business phone numbers included",
        "Call recording functionality",
        "Inbound calling capabilities",
        "Outbound calling capabilities",
        "Access to all 58 languages",
        "Analytics dashboard"
      ]
    },
    {
      title: "Six Month Plan",
      price: "$0.09",
      unit: "per minute",
      description: "Medium-term commitment with 10% discount on all usage",
      discount: "10% discount",
      recommended: true,
      features: [
        "Business phone numbers included",
        "Call recording functionality",
        "Inbound calling capabilities",
        "Outbound calling capabilities", 
        "Access to all 58 languages",
        "Analytics dashboard",
        "Priority support"
      ]
    },
    {
      title: "Yearly Plan",
      price: "$0.08",
      unit: "per minute",
      description: "Our best value with a 20% discount for annual commitment",
      discount: "20% discount",
      recommended: false,
      features: [
        "Business phone numbers included",
        "Call recording functionality",
        "Inbound calling capabilities",
        "Outbound calling capabilities",
        "Access to all 58 languages",
        "Analytics dashboard",
        "Priority support",
        "Advanced campaign features"
      ]
    }
  ];

  return (
    <section className="py-24 pricing-bg relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full mix-blend-multiply opacity-60 blur-[120px]"></div>
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full mix-blend-multiply opacity-60 blur-[120px]"></div>
      </div>

      {/* Background dots pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-2 rounded-full text-blue-600 font-medium shadow-sm border border-blue-100 mb-4"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            FLEXIBLE PRICING
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
          >
            Simple, Transparent Pricing
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Choose the plan that fits your business needs. All plans include our AI call agent Sophie and core call management features.
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border transition-all duration-300 h-full flex flex-col relative ${
                plan.recommended ? "border-blue-400 md:scale-105 z-10" : "border-slate-200 hover:border-blue-200"
              }`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), 0 15px 20px rgba(79, 70, 229, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-1.5 text-xs text-center">
                  RECOMMENDED
                </div>
              )}

              <div className={`p-8 ${plan.recommended ? "pt-12" : "pt-8"}`}>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{plan.title}</h3>

                <div className="flex items-baseline mb-1">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600 ml-2">{plan.unit}</span>
                </div>

                {plan.discount && (
                  <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
                    {plan.discount}
                  </div>
                )}

                <p className="text-slate-600 mb-6 text-sm">{plan.description}</p>

                <hr className="my-6 border-slate-200" />

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto p-8 pt-0">
                <Link href="/contact">
                  <Button 
                    className={`w-full py-6 ${
                      plan.recommended 
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700" 
                        : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ section */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-6 text-slate-800"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h3>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "Are there any setup fees?",
                answer: "No, there are no setup fees for any of our plans. You only pay for the minutes you use according to your selected plan."
              },
              {
                question: "What happens if I exceed my expected usage?",
                answer: "Our pricing is entirely based on per-minute usage. There are no penalties for high usage - you simply pay the per-minute rate for your plan."
              },
              {
                question: "Can I change plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle."
              },
              {
                question: "Are all features included in every plan?",
                answer: "All plans include business phone numbers, call recording, and both inbound and outbound calling capabilities. Some advanced features are reserved for higher tier plans."
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="border-b border-slate-200 pb-4 last:border-0 last:pb-0"
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{item.question}</h4>
                <p className="text-slate-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-8 text-center"
            variants={itemVariants}
          >
            <p className="text-slate-600 mb-4">Need help choosing the right plan for your business?</p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingSection;