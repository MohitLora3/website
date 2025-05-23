
import { motion } from "framer-motion";
import CTASection from "../components/shared/cta-section";
import SectionHeading from "../components/ui/section-heading";

export default function VoiceAssistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4 md:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse mr-2"></div>
              <span>AI-Powered Website Voice Support</span>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600">
            Voice Assistant
          </h1>
          <p className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Provide real-time voice-based customer support directly in your website. No phone calls needed — just natural conversations through the browser, 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a href="/contact" className="block w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                Try Voice Demo
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a href="/contact" className="block w-full sm:w-auto bg-white text-orange-700 border border-orange-200 font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
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
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-orange-100">
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 h-10 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-b from-slate-50 to-white relative h-64 md:h-80">
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-orange-100 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 12C19 12 16 18 12 18C8 18 5 12 5 12C5 12 8 6 12 6C16 6 19 12 19 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-slate-800">Voice Assistant</div>
                </div>

                {/* Voice visualization */}
                <div className="flex items-end justify-center h-12 space-x-1 mb-2">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-orange-500 to-amber-500 rounded-full"
                      animate={{
                        height: [
                          `${Math.random() * 50 + 10}%`,
                          `${Math.random() * 80 + 20}%`,
                          `${Math.random() * 50 + 10}%`
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: i * 0.05
                      }}
                    />
                  ))}
                </div>

                <div className="text-sm text-slate-600 mb-2">
                  I heard you're looking for support with your account. Could you tell me which specific aspect you need help with?
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
            subtitle="Advanced capabilities for voice interactions"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Browser-Based Voice Interactions",
                description: "Enable natural voice conversations directly within your website without requiring phone calls.",
                icon: (
                  <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: "Real-Time Voice Recognition",
                description: "Advanced AI that instantly understands and processes natural speech with high accuracy.",
                icon: (
                  <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1V4M12 4C10.6193 4 9.5 5.11929 9.5 6.5V12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12V6.5C14.5 5.11929 13.3807 4 12 4ZM18 10V12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V10M12 18V23M8 23H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Cross-Browser Compatibility",
                description: "Works seamlessly across desktop and mobile browsers with no additional software required.",
                icon: (
                  <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H5M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12ZM12 3V5M12 19V21M19 12H21M5 5L7 7M19 19L17 17M5 19L7 17M19 5L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                title: "Text Fallback Option",
                description: "Automatically switches to text chat mode when voice input isn't possible or preferred.",
                icon: (
                  <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9H16M8 13H14M12 21L7.5 16.5H5C3.89543 16.5 3 15.6046 3 14.5V5.5C3 4.39543 3.89543 3.5 5 3.5H19C20.1046 3.5 21 4.39543 21 5.5V14.5C21 15.6046 20.1046 16.5 19 16.5H16.5L12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Customizable Voice Personality",
                description: "Tailor the voice, tone, and personality of your assistant to match your brand identity.",
                icon: (
                  <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 15C21 16.6569 19.6569 18 18 18C16.3431 18 15 16.6569 15 15C15 13.3431 16.3431 12 18 12C19.6569 12 21 13.3431 21 15Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 15V9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9V15" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )
              },
              {
                title: "Analytics Dashboard",
                description: "Track conversation metrics, user satisfaction, and identify common queries or issues.",
                icon: (
                  <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 12px 24px -8px rgba(249, 115, 22, 0.15)" }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100"
              >
                <div className="bg-orange-50 p-3 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
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
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="How It Works"
            subtitle="Simple implementation, powerful voice interactions"
            centered
          />
          
          <div className="mt-16">
            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  step: "01",
                  title: "Integrate",
                  description: "Add our voice assistant to your website with a simple JavaScript snippet that works across browsers."
                },
                {
                  step: "02",
                  title: "Customize",
                  description: "Train the AI with your business data, FAQs, and preferred voice personality to match your brand."
                },
                {
                  step: "03",
                  title: "Interact",
                  description: "Users click the voice button and speak naturally to get instant assistance without phone calls."
                },
                {
                  step: "04",
                  title: "Analyze",
                  description: "Review conversation data and insights to continuously improve the voice assistant's performance."
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
                  <div className="bg-white p-8 rounded-xl shadow-md h-full border border-orange-100">
                    <div className="text-3xl font-bold text-orange-600 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-4 text-slate-800">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white shadow-lg">
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
            subtitle="How businesses leverage website voice assistants"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "Customer Support",
                description: "Provide instant voice-based support for common questions and troubleshooting without waiting for live agents.",
                icon: (
                  <svg className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Appointment Scheduling",
                description: "Let visitors book appointments by simply speaking their preferences, available times, and contact information.",
                icon: (
                  <svg className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Product Assistance",
                description: "Guide customers through products with voice-based recommendations, comparisons, and detailed information.",
                icon: (
                  <svg className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Accessibility Enhancement",
                description: "Make your website more accessible for users with visual impairments, reading difficulties, or those who prefer speaking.",
                icon: (
                  <svg className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 7L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 17L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 17L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7L5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl shadow-md border border-orange-100"
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

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-orange-100/60 to-amber-100/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute top-0 right-0 w-1/2 h-auto text-orange-200/30 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M37.5,-64.1C50.5,-56,64,-48.5,70.5,-37.2C77,-25.9,76.5,-10.7,74.3,3.8C72.1,18.3,68.2,32.1,60.6,43.8C53,55.6,41.8,65.3,29.2,71.7C16.6,78.1,2.7,81.2,-10.9,79.1C-24.6,77,-38,69.6,-49.2,59.9C-60.5,50.1,-69.5,37.9,-73.3,24.5C-77.1,11.1,-75.7,-3.6,-72.1,-17.5C-68.5,-31.3,-62.8,-44.4,-52.8,-53.8C-42.9,-63.2,-28.9,-68.8,-15.4,-69.4C-1.9,-69.9,11.1,-65.4,23.3,-62.3C35.5,-59.2,47,-64.4,37.5,-64.1Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading
            title="Experience the Voice Assistant"
            subtitle="See how voice interactions enhance user experience"
            centered
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-orange-100"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Try Voice Interaction</h3>
                <p className="text-slate-600 mb-6">
                  Experience how the Voice Assistant can handle different types of queries. Click the microphone button and speak one of these example phrases:
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "How can I reset my password?",
                    "I'd like to book an appointment",
                    "Tell me about your pricing plans",
                    "What are your business hours?"
                  ].map((example, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3 flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-slate-700">{example}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <h4 className="text-amber-800 font-medium flex items-center mb-2">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Note
                  </h4>
                  <p className="text-amber-700 text-sm">
                    This is a demonstration. In a live implementation, you would speak into your microphone and receive voice responses.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.34998 9.6499V11.3499C4.34998 15.5699 7.77998 18.9999 12 18.9999C16.22 18.9999 19.65 15.5699 19.65 11.3499V9.6499" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.61 6.43C11.51 6.1 12.49 6.1 13.39 6.43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.2 8.55C11.73 8.41 12.28 8.41 12.81 8.55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-slate-800">Voice Assistant Demo</h4>
                </div>
                
                <div className="flex-1 bg-white rounded-lg border border-slate-200 p-4 mb-4 overflow-y-auto h-40">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center text-orange-600 mr-3 flex-shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-600 text-sm">Hello! I'm your Dialio Voice Assistant. How can I help you today?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end">
                      <div>
                        <p className="text-slate-600 text-sm bg-slate-50 p-2 rounded-lg">How can I reset my password?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center text-orange-600 mr-3 flex-shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-600 text-sm">To reset your password, please go to the login page and click on "Forgot Password". You'll receive an email with instructions to create a new password. Would you like me to guide you through it step by step?</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <button className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all mx-auto">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.35 9.65V11.35C4.35 15.57 7.78 19 12 19C16.22 19 19.65 15.57 19.65 11.35V9.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voice Assistant Demo Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="voice-toggle-btn fixed bottom-6 right-6 z-40"
      >
        <button className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-full p-4 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 18.5C14.21 18.5 16 16.71 16 14.5V9C16 6.79 14.21 5 12 5C9.79 5 8 6.79 8 9V14.5C8 16.71 9.79 18.5 12 18.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.34998 12.65V14.35C4.34998 18.57 7.77998 22 12 22C16.22 22 19.65 18.57 19.65 14.35V12.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </motion.div>

      {/* CTA Section */}
      <CTASection 
        title="Upgrade your website with voice"
        description="Start providing instant voice-based support directly on your website today."
        buttonText="Get Started"
        buttonLink="/contact"
        bgColor="from-orange-600 to-amber-600"
      />
    </div>
  );
}
