
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CTASection from "../components/shared/cta-section";
import SectionHeading from "../components/ui/section-heading";

export default function WhatsappChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fff9] to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 lg:pt-28 lg:pb-24 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-15 -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-15 -z-10"></div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left md:pr-6">
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-600 text-sm font-semibold mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
                Smart Messaging Platform
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500 leading-tight">
              WhatsApp Chatbot <span className="block text-slate-800 mt-2">Engage On The World's #1 Messaging App</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Connect with billions of WhatsApp users around the world with our AI-powered chatbot that delivers personalized experiences on the platform they already use daily.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white" onClick={() => window.location.href = "/contact"}>
                  Request a Demo
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-green-500 text-green-600 hover:bg-green-50" onClick={() => window.location.href = "/contact"}>
                  Explore Features
                </Button>
              </motion.div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { number: "2B+", label: "Daily Users" },
                { number: "180+", label: "Countries" },
                { number: "100B+", label: "Messages Daily" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-green-100 shadow-sm">
                  <div className="text-xl lg:text-2xl font-bold text-green-600">{stat.number}</div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 border border-green-100 max-w-md mx-auto">
                <div className="bg-green-500 rounded-t-lg p-3 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-auto"></div>
                  <div className="text-white text-sm font-medium">WhatsApp Business</div>
                </div>
                
                <div className="p-4 bg-[#ECE5DD] h-[400px] overflow-hidden flex flex-col">
                  <div className="text-center text-xs text-gray-600 my-2">Today</div>
                  
                  {/* Business message */}
                  <div className="flex justify-start mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%] relative">
                      <p className="text-sm">Hello! Welcome to Dialio Support. How can I help you today?</p>
                      <div className="text-right text-[10px] text-gray-500">10:03 AM ✓✓</div>
                    </div>
                  </div>
                  
                  {/* User message */}
                  <div className="flex justify-end mb-4">
                    <div className="bg-[#DCF8C6] p-3 rounded-lg shadow-sm max-w-[80%] relative">
                      <p className="text-sm">Hi! I need help with my recent order #45678</p>
                      <div className="text-right text-[10px] text-gray-500">10:04 AM ✓✓</div>
                    </div>
                  </div>
                  
                  {/* Business message with buttons */}
                  <div className="flex justify-start mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%] flex flex-col gap-2">
                      <p className="text-sm">I found your order. What would you like to know about it?</p>
                      <div className="flex flex-col gap-1 mt-2">
                        <button className="bg-green-50 text-green-600 border border-green-200 rounded p-2 text-sm text-left hover:bg-green-100">Order Status</button>
                        <button className="bg-green-50 text-green-600 border border-green-200 rounded p-2 text-sm text-left hover:bg-green-100">Delivery Details</button>
                        <button className="bg-green-50 text-green-600 border border-green-200 rounded p-2 text-sm text-left hover:bg-green-100">Request Modification</button>
                      </div>
                      <div className="text-right text-[10px] text-gray-500">10:05 AM ✓✓</div>
                    </div>
                  </div>
                  
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] p-3 rounded-lg shadow-sm max-w-[80%] relative">
                      <p className="text-sm">Order Status please</p>
                      <div className="text-right text-[10px] text-gray-500">10:05 AM ✓✓</div>
                    </div>
                  </div>
                  
                  {/* Typing indicator */}
                  <div className="flex justify-start mt-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm w-20 flex items-center justify-center">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 -left-16 w-28 h-28 bg-green-100 rounded-full flex items-center justify-center z-0"
            >
              <div className="text-4xl">🚀</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center z-0"
            >
              <div className="text-3xl">💬</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Features"
            subtitle="World-class WhatsApp automation"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Rich Media Support",
                description: "Share images, videos, documents, and location links in conversations.",
                icon: "🖼️"
              },
              {
                title: "Interactive Buttons",
                description: "Provide quick-reply buttons and list menus for seamless interactions.",
                icon: "🔘"
              },
              {
                title: "Payment Integration",
                description: "Process payments directly within WhatsApp conversations.",
                icon: "💳"
              },
              {
                title: "Conversation Templates",
                description: "Create approved message templates for proactive outreach.",
                icon: "📋"
              },
              {
                title: "Shopping Catalogs",
                description: "Display product catalogs and enable shopping directly in chat.",
                icon: "🛍️"
              },
              {
                title: "End-to-End Encryption",
                description: "Ensure all communications are secure and private.",
                icon: "🔒"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-50"
              >
                <div className="text-4xl mb-4 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="How It Works"
            subtitle="From setup to success"
            centered
          />
          
          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-0 w-1 bg-gradient-to-b from-green-300 to-teal-300 transform -translate-x-1/2 rounded-full"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Connect",
                  description: "Set up your business WhatsApp account and connect it to our platform.",
                  image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  align: "right"
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Create conversation flows and design interactive elements using our visual builder.",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  align: "left"
                },
                {
                  step: "03",
                  title: "Train",
                  description: "Train your AI with your business data, FAQs, and product information.",
                  image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  align: "right"
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Activate your WhatsApp chatbot and start engaging with customers instantly.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  align: "left"
                }
              ].map((step, index) => (
                <div key={index} className={`flex flex-col ${step.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
                  <motion.div 
                    initial={{ opacity: 0, x: step.align === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex-1"
                  >
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 relative">
                      <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-slate-800">{step.title}</h3>
                      <p className="text-slate-600 text-lg">{step.description}</p>
                      
                      {index < 3 && (
                        <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 text-green-500">
                          {step.align === "left" ? (
                            <svg className="w-8 h-8 absolute -right-20" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <svg className="w-8 h-8 absolute -left-20" viewBox="0 0 24 24" fill="none">
                              <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex-1 flex justify-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 blur-lg opacity-30 rounded-xl transform scale-105"></div>
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="relative rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Use Cases"
            subtitle="How businesses are winning with WhatsApp"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "E-commerce Support",
                description: "Provide product recommendations, order status updates, and purchase assistance.",
                icon: "🛒",
                benefits: ["Order tracking", "Product discovery", "Cart abandonment recovery"]
              },
              {
                title: "Travel & Hospitality",
                description: "Enable bookings, reservations, check-ins, and itinerary management.",
                icon: "✈️",
                benefits: ["Reservation confirmation", "Travel updates", "Concierge services"]
              },
              {
                title: "Banking & Finance",
                description: "Offer account alerts, balance inquiries, and transaction notifications.",
                icon: "🏦",
                benefits: ["Account monitoring", "Fraud alerts", "Support requests"]
              },
              {
                title: "Healthcare",
                description: "Schedule appointments, deliver medication reminders, and provide care instructions.",
                icon: "🏥",
                benefits: ["Appointment scheduling", "Medication reminders", "Follow-up care"]
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl shadow-md overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200 to-green-100 rounded-full -mr-16 -mt-16 opacity-40"></div>
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-4xl mr-4 shadow-md border border-green-100">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{useCase.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{useCase.description}</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-green-600 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section - Alternative to Demo */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-100 to-teal-100">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="WhatsApp Chatbot Success Stories"
            subtitle="Real-world business impact"
            centered
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 grid md:grid-cols-2 gap-8"
          >
            {[
              {
                initial: "E",
                title: "E-Commerce Success",
                company: "Online Retailer",
                description: "Increased post-purchase customer engagement by 78% and reduced return processing time by 65% with automated order tracking and support.",
                result: "+42% Customer satisfaction",
                color: "green"
              },
              {
                initial: "F",
                title: "Financial Services",
                company: "Regional Bank",
                description: "Automated account inquiries and transaction alerts led to 54% reduction in call center volume and improved response times by 87%.",
                result: "+36% Digital engagement",
                color: "teal"
              },
              {
                initial: "H",
                title: "Healthcare Provider",
                company: "Multi-specialty Clinic",
                description: "Reduced appointment no-shows by 62% through automated reminders and easy rescheduling options via WhatsApp.",
                result: "$240K Annual savings",
                color: "emerald"
              },
              {
                initial: "T",
                title: "Travel Agency",
                company: "International Tours",
                description: "Enabled 24/7 booking assistance and travel updates, increasing customer satisfaction scores by 47% and repeat bookings by 28%.",
                result: "+52% Conversion rate",
                color: "green"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg overflow-hidden relative group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${story.color}-100 rounded-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110`}></div>
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className={`w-14 h-14 bg-${story.color}-200 rounded-full flex items-center justify-center text-${story.color}-700 text-2xl font-bold mr-4 shadow`}>
                      {story.initial}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-800">{story.title}</h3>
                      <p className="text-sm text-slate-500">{story.company}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{story.description}</p>
                  <div className="flex items-center mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      <span className="font-medium text-slate-700">Results:</span>
                    </div>
                    <span className={`ml-2 bg-${story.color}-50 text-${story.color}-600 px-3 py-1 rounded-full text-sm font-medium`}>{story.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Seamless Integration"
            subtitle="Works with your favorite tools"
            centered
          />
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-green-100">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-slate-100 rounded-lg animate-pulse"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions"
            centered
          />
          
          <div className="mt-10 space-y-4">
            {[
              {
                question: "How quickly can I get started with WhatsApp Business?",
                answer: "You can get started in as little as 24 hours. Our platform handles the integration with WhatsApp Business API, and we guide you through the account verification process."
              },
              {
                question: "Can I send promotional messages through WhatsApp?",
                answer: "Yes, with some limitations. WhatsApp allows promotional messages to be sent to users who have opted in and within 24 hours of their last interaction. Our platform helps you manage these opt-ins and message templates."
              },
              {
                question: "How does the AI understand what customers are asking?",
                answer: "Our AI is trained on your business data, FAQs, and products. It uses natural language processing to understand intent and context, allowing it to respond accurately to a wide range of customer queries."
              },
              {
                question: "Is WhatsApp chatbot suitable for my industry?",
                answer: "WhatsApp chatbots are versatile and work well across many industries including retail, travel, financial services, healthcare, education, and more. Our solution can be customized to your specific industry needs."
              },
              {
                question: "How do I measure the ROI of my WhatsApp chatbot?",
                answer: "Our platform provides comprehensive analytics including conversation metrics, resolution rates, user satisfaction, and conversion tracking. These metrics help you measure impact and continuously improve performance."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6">
                    <h3 className="text-lg font-medium text-slate-800">{faq.question}</h3>
                    <span className="text-green-500 transition-transform duration-300 group-open:rotate-180">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Reach customers where they already are"
        description="Join businesses using WhatsApp to drive engagement, sales and satisfaction."
        buttonText="Get Started"
        buttonLink="/contact"
        bgColor="from-green-500 to-teal-500"
      />
    </div>
  );
}
