
import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import IndustryTabs from "@/components/use-cases/industry-tabs";
import CTASection from "@/components/shared/cta-section";

export default function UseCases() {
  // Update document title
  useEffect(() => {
    document.title = "Use Cases | Dialio AI Solutions";
  }, []);

  return (
    <>
      <section id="use-cases" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-200 opacity-20 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">USE CASES</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">AI Solutions Built For Your Business</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our AI communication tools can be tailored to solve specific challenges across various industries. Discover how they can address your unique business needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <button className="cta-button bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700">
                  Find Your Solution
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <IndustryTabs />
          </motion.div>
        </div>
      </section>
      
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_110%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Common Business Challenges Solved</h2>
            <p className="text-lg text-slate-600">
              Regardless of your industry, Dialio and our AI communication suite can address these universal business challenges.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Managing After-Hours Communication
              </h3>
              <p className="text-slate-600 mb-4 pl-12">
                Never miss an important call or message outside business hours. Our AI solutions work 24/7, ensuring customers always receive immediate assistance.
              </p>
              <div className="text-sm text-blue-600 font-medium pl-12 mt-6 flex items-center">
                <span className="p-1 bg-blue-100 rounded-md mr-2">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Solution: AI Call Agent (Dialio) + AI Website Chatbot
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                Staff Shortage and Scaling Issues
              </h3>
              <p className="text-slate-600 mb-4 pl-12">
                Scale your communication capabilities without expanding your team. Automate routine interactions, allowing your staff to focus on high-value activities.
              </p>
              <div className="text-sm text-blue-600 font-medium pl-12 mt-6 flex items-center">
                <span className="p-1 bg-blue-100 rounded-md mr-2">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Solution: Complete AI Communication Suite
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Lead Response Time
              </h3>
              <p className="text-slate-600 mb-4 pl-12">
                Respond to inquiries instantly to maximize conversion rates. Research shows that the odds of qualifying a lead drop dramatically after just 5 minutes of waiting.
              </p>
              <div className="text-sm text-blue-600 font-medium pl-12 mt-6 flex items-center">
                <span className="p-1 bg-blue-100 rounded-md mr-2">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Solution: AI Call Agent (Dialio) + AI SMS Chatbot
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>
                Inconsistent Customer Experience
              </h3>
              <p className="text-slate-600 mb-4 pl-12">
                Deliver a consistent brand voice and level of service across all customer touchpoints, regardless of channel, time of day, or volume of inquiries.
              </p>
              <div className="text-sm text-blue-600 font-medium pl-12 mt-6 flex items-center">
                <span className="p-1 bg-blue-100 rounded-md mr-2">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Solution: Complete AI Communication Suite
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOGZhZmMiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTYgdi02aDZWMzB6TTMwIDMwaC02di02aDZWMzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-10">
              <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-3">REAL RESULTS</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Success Stories</h2>
                <p className="text-slate-600 max-w-3xl mx-auto">
                  Businesses across industries have transformed their operations with our AI communication tools. Here are some real results from our customers.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex items-center mb-5">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">National Retail Chain</h3>
                      <div className="text-sm text-slate-500">Customer Service</div>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 pl-1">
                    Reduced call abandonment rate from 23% to under 2% while handling 3x the call volume with the same staff.
                  </p>
                  <div className="flex items-center mt-4 pl-1">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-slate-700 ml-2">
                      Using: AI Call Agent + Website Chatbot
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100 hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex items-center mb-5">
                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <span className="text-indigo-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Medical Practice Group</h3>
                      <div className="text-sm text-slate-500">Healthcare</div>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 pl-1">
                    Reduced appointment no-shows by 67% while freeing up front desk staff to focus on in-office patient care.
                  </p>
                  <div className="flex items-center mt-4 pl-1">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-slate-700 ml-2">
                      Using: AI Call Agent + SMS Chatbot
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="flex items-center mb-5">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Real Estate Brokerage</h3>
                      <div className="text-sm text-slate-500">Real Estate</div>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 pl-1">
                    Increased qualified lead generation by 43% through 24/7 property information and automated follow-ups.
                  </p>
                  <div className="flex items-center mt-4 pl-1">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                      <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-slate-700 ml-2">
                      Using: Complete AI Suite
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Decorative elements */}
      <div className="relative">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -top-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-200 to-indigo-200 opacity-20 blur-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
          animate={{ rotateZ: -360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <CTASection />
    </>
  );
}
