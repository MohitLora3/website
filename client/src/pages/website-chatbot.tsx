
import { motion } from "framer-motion";
import CTASection from "../components/shared/cta-section";
import SectionHeading from "../components/ui/section-heading";

export default function WebsiteChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4 md:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse mr-2"></div>
              <span>AI-Powered Website Solutions</span>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700">
            Website Chatbot
          </h1>
          <p className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your website experience with an intelligent AI chatbot that engages visitors, answers questions, and converts prospects into customers 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a href="/contact" className="block w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Try Demo
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a href="/contact" className="block w-full sm:w-auto bg-white text-purple-700 border border-purple-200 font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                Explore Features
              </a>
            </motion.div>
          </div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-5xl mx-auto mt-16 relative"
        >
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-purple-100">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-10 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-b from-slate-50 to-white relative h-64 md:h-80">
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-purple-100 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-slate-800">Dialio Assistant</div>
                </div>
                <div className="text-sm text-slate-600 mb-2">
                  Hello! 👋 Welcome to our website. How can I help you today?
                </div>
                <div className="flex justify-end">
                  <div className="text-xs text-slate-400">Just now</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Features"
            subtitle="Advanced capabilities for modern websites"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "AI-Powered Conversations",
                description: "Natural language processing that understands context and provides relevant responses.",
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )
              },
              {
                title: "No-Code Builder",
                description: "Visual flow editor to design conversation paths without any technical knowledge.",
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20V16H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Custom Branding",
                description: "Match your chatbot's appearance to your brand with customizable colors, logos, and styles.",
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9V2L9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 13H2V22H22V13H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9C15 6.79086 13.6569 5 12 5C10.3431 5 9 6.79086 9 9C9 11.2091 10.3431 13 12 13C13.6569 13 15 11.2091 15 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Lead Generation",
                description: "Capture visitor information and qualify leads through interactive conversations.",
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Analytics Dashboard",
                description: "Track engagement metrics, conversation trends, and user satisfaction ratings.",
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Seamless Integration",
                description: "Easy integration with your CRM, help desk, and other business tools.",
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16L20 12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8L4 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 20L14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 12px 24px -8px rgba(124, 58, 237, 0.15)" }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100"
              >
                <div className="bg-purple-50 p-3 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="How It Works"
            subtitle="Simple implementation, powerful results"
            centered
          />
          
          <div className="mt-16">
            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  step: "01",
                  title: "Design",
                  description: "Customize your chatbot's appearance and create conversation flows with our visual builder."
                },
                {
                  step: "02",
                  title: "Train",
                  description: "Feed your chatbot with FAQs, product information, and custom responses to common queries."
                },
                {
                  step: "03",
                  title: "Integrate",
                  description: "Add a single line of code to your website or use our plugin for popular platforms."
                },
                {
                  step: "04",
                  title: "Optimize",
                  description: "Analyze conversations and refine your chatbot's responses for better performance."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-1 relative"
                >
                  <div className="bg-white p-8 rounded-xl shadow-md h-full border border-purple-100">
                    <div className="text-3xl font-bold text-purple-600 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-4 text-slate-800">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0L20 10L10 20L8.6 18.6L16.2 11H0V9H16.2L8.6 1.4L10 0Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Use Cases"
            subtitle="How businesses leverage website chatbots"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "E-commerce",
                description: "Provide product recommendations, assist with checkout, and reduce cart abandonment.",
                icon: (
                  <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "SaaS Companies",
                description: "Qualify leads, demo products, and convert trial users to paying customers.",
                icon: (
                  <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H15M9 17V21M9 17H15M15 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Financial Services",
                description: "Guide visitors through complex financial products and capture qualified leads.",
                icon: (
                  <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C14.7614 22 17 19.7614 17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17C7 19.7614 9.23858 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 13H22C22 11.3431 20.6569 10 19 10H16M7 13H2C2 11.3431 3.34315 10 5 10H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Real Estate",
                description: "Answer property questions, schedule viewings, and qualify potential buyers.",
                icon: (
                  <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-md border border-purple-100"
              >
                <div className="bg-white w-20 h-20 rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">{useCase.title}</h3>
                <p className="text-slate-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section - Alternative to Demo */}
      <section id="demo" className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-purple-100/60 to-indigo-100/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute top-0 right-0 w-1/2 h-auto text-purple-200/30 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M37.5,-64.1C50.5,-56,64,-48.5,70.5,-37.2C77,-25.9,76.5,-10.7,74.3,3.8C72.1,18.3,68.2,32.1,60.6,43.8C53,55.6,41.8,65.3,29.2,71.7C16.6,78.1,2.7,81.2,-10.9,79.1C-24.6,77,-38,69.6,-49.2,59.9C-60.5,50.1,-69.5,37.9,-73.3,24.5C-77.1,11.1,-75.7,-3.6,-72.1,-17.5C-68.5,-31.3,-62.8,-44.4,-52.8,-53.8C-42.9,-63.2,-28.9,-68.8,-15.4,-69.4C-1.9,-69.9,11.1,-65.4,23.3,-62.3C35.5,-59.2,47,-64.4,37.5,-64.1Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading
            title="Industry-Specific Solutions"
            subtitle="Tailored chatbot experiences for your business"
            centered
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-purple-100">
              <div className="flex items-start mb-6">
                <div className="bg-purple-100 p-4 rounded-xl mr-4">
                  <svg className="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">E-Commerce</h3>
                  <p className="text-slate-500 text-sm">Boost sales and support</p>
                </div>
              </div>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Product recommendations based on browsing history</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Abandoned cart recovery with personalized incentives</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Order tracking & real-time delivery updates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-purple-100">
              <div className="flex items-start mb-6">
                <div className="bg-indigo-100 p-4 rounded-xl mr-4">
                  <svg className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C14.7614 22 17 19.7614 17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17C7 19.7614 9.23858 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 13H22C22 11.3431 20.6569 10 19 10H16M7 13H2C2 11.3431 3.34315 10 5 10H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Financial Services</h3>
                  <p className="text-slate-500 text-sm">Secure client engagement</p>
                </div>
              </div>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure account balance inquiries and transaction history</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Interactive loan application assistance with pre-qualification</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Real-time fraud detection alerts and verification</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-purple-100">
              <div className="flex items-start mb-6">
                <div className="bg-purple-100 p-4 rounded-xl mr-4">
                  <svg className="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4V20M8 4V20M3 8H21M3 16H21M4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5C3 4.44772 3.44772 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Education</h3>
                  <p className="text-slate-500 text-sm">Student support solutions</p>
                </div>
              </div>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized admissions information and application guidance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Course registration and schedule management assistance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 learning support and resource recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-purple-100">
              <div className="flex items-start mb-6">
                <div className="bg-indigo-100 p-4 rounded-xl mr-4">
                  <svg className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Real Estate</h3>
                  <p className="text-slate-500 text-sm">Property engagement</p>
                </div>
              </div>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized property search assistance and recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Automated viewing appointments and scheduling</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Interactive mortgage calculator and financing options</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chat toggle button - appears when chat is closed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="chat-toggle-btn fixed bottom-6 right-6 z-40 hidden"
      >
        <button 
          onClick={() => {
            const chatElement = document.querySelector('.fixed.bottom-6.right-6.z-50');
            const toggleBtn = document.querySelector('.chat-toggle-btn');
            if (chatElement && toggleBtn) {
              chatElement.classList.remove('hidden');
              toggleBtn.classList.add('hidden');
            }
          }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-4 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </motion.div>

      {/* Demo Chat Box */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 z-50 chat-widget"
        id="dialio-chat-widget"
      >
        <div className="bg-white rounded-xl shadow-2xl border border-purple-200 w-72 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-white font-medium">Dialio Chatbot</div>
            </div>
            <div className="flex items-center space-x-2">
              {/* Minimize button */}
              <button 
                className="text-white hover:text-white/80"
                onClick={() => {
                  const chatBody = document.querySelector('.chat-body');
                  const chatInput = document.querySelector('.chat-input');
                  if (chatBody && chatInput) {
                    chatBody.classList.toggle('hidden');
                    chatInput.classList.toggle('hidden');
                  }
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Close button */}
              <button 
                className="text-white hover:text-white/80"
                onClick={() => {
                  const chatElement = document.querySelector('.fixed.bottom-6.right-6.z-50');
                  const toggleBtn = document.querySelector('.chat-toggle-btn');
                  if (chatElement && toggleBtn) {
                    chatElement.classList.add('hidden');
                    toggleBtn.classList.remove('hidden');
                  }
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 bg-gradient-to-b from-purple-50/50 to-white chat-body">
            <div className="flex flex-col space-y-3">
              <div className="flex items-start max-w-xs">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100">
                  <p className="text-sm text-slate-700">Hello 👋 Welcome to Dialio's Website Chatbot demo. How can I help you today?</p>
                  <span className="text-xs text-slate-400 mt-1 block">10:24 AM</span>
                </div>
              </div>

              <div className="flex items-start max-w-xs ml-auto">
                <div className="bg-purple-600 rounded-lg p-3 text-white">
                  <p className="text-sm">I'm interested in learning more about pricing</p>
                  <span className="text-xs text-purple-200 mt-1 block">10:25 AM</span>
                </div>
              </div>

              <div className="flex items-start max-w-xs">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100">
                  <p className="text-sm text-slate-700">Our plans start at $49/month for small businesses. Would you like me to show you our different pricing tiers?</p>
                  <span className="text-xs text-slate-400 mt-1 block">10:25 AM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-t border-slate-200 chat-input">
            <div className="flex items-center">
              <input type="text" placeholder="Type a message..." className="flex-1 border border-slate-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              <button className="ml-2 bg-purple-600 text-white p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <CTASection 
        title="Elevate your website experience"
        description="Start converting more visitors into customers with intelligent conversations."
        buttonText="Get Started"
        buttonLink="/contact"
        bgColor="from-purple-600 to-indigo-600"
      />
    </div>
  );
}
