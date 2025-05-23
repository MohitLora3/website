import { motion } from "framer-motion";
import CTASection from "../components/shared/cta-section";
import SectionHeading from "../components/ui/section-heading";
import DemoForm from "../components/demo/demo-form";

export default function CallAgentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 md:py-32 bg-gradient-to-b from-blue-50 via-blue-50 to-white relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="particles-container">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                initial={{
                  opacity: Math.random() * 0.6 + 0.2,
                  scale: Math.random() * 0.6 + 0.5,
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                  ],
                  x: [
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                  ],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: `${Math.random() * 5 + 2}px`,
                  height: `${Math.random() * 5 + 2}px`,
                  borderRadius: "50%",
                  background: i % 2 === 0 ? "rgba(59, 130, 246, 0.3)" : "rgba(124, 58, 237, 0.3)",
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-20 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-10"
          animate={{
            x: [0, 30, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          className="absolute bottom-0 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-10"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 leading-tight">
              AI Call Agent
            </h1>
            <p className="text-xl text-slate-700 mb-10 max-w-lg mx-auto md:mx-0">
              Transform your business communication with our intelligent AI call agents that handle customer inquiries, route calls, and deliver exceptional service around the clock.
            </p>
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center">
                <span>Request Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Main visualization */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">Dialio AI Assistant</h2>
                    <div className="text-sm text-slate-500 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                      Online and ready
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Call visualization */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-700 mb-2">Live Call in Progress</div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Customer</div>
                        <div className="text-sm font-medium">John D.</div>
                      </div>
                      <div className="ml-auto text-xs text-slate-500">
                        02:34
                      </div>
                    </div>

                    {/* Audio waveform visualization */}
                    <div className="flex items-end justify-center h-12 space-x-1 mb-3">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-gradient-to-t from-blue-500 to-indigo-500 rounded-full"
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

                    <div className="bg-blue-50 p-3 rounded-lg text-sm text-slate-700 border-l-4 border-blue-500">
                      "I need to check the status of my recent order #45678"
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">AI Agent</div>
                        <div className="text-sm font-medium">Dialio Assistant</div>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Responding
                        </span>
                      </div>
                    </div>

                    <div className="text-sm text-slate-700">
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        I can help you with that. Let me check order #45678 for you right away.
                      </motion.span>
                      {/* Typing indicator */}
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="inline-block ml-1"
                      >
                        ●●●
                      </motion.span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-xs text-slate-500">
                    Smart suggestions enabled
                  </div>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 hover:bg-red-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating stats cards */}
              <motion.div
                className="absolute -top-5 -right-5 bg-white p-3 rounded-lg shadow-lg border border-slate-100 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Satisfaction</div>
                    <div className="text-sm font-semibold">98.7%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg border border-slate-100 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Resolution Rate</div>
                    <div className="text-sm font-semibold">95.2%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "99.9%", label: "Uptime", icon: "⏱️" },
              { value: "24/7", label: "Availability", icon: "🌐" },
              { value: "1.5s", label: "Avg. Response Time", icon: "⚡" },
              { value: "98%", label: "Satisfaction", icon: "🎯" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-6 rounded-xl shadow-sm border border-blue-100"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Features"
            subtitle="Our AI Call Agent delivers powerful capabilities"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Natural Conversations",
                description: "Advanced language processing enables natural, human-like conversations with callers.",
                icon: "🗣️"
              },
              {
                title: "24/7 Availability",
                description: "Never miss a customer call with round-the-clock service that never takes breaks.",
                icon: "🕒"
              },
              {
                title: "Seamless Handoff",
                description: "Smart escalation to human agents when needed, with complete conversation context.",
                icon: "🤝"
              },
              {
                title: "Multilingual Support",
                description: "Communicate with customers in their preferred language with real-time translation.",
                icon: "🌐"
              },
              {
                title: "Call Analytics",
                description: "Gain insights from call patterns, frequently asked questions, and customer sentiment.",
                icon: "📊"
              },
              {
                title: "Custom Voice & Personality",
                description: "Tailor the agent's voice and personality to match your brand identity.",
                icon: "🎭"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="text-4xl mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="How It Works"
            subtitle="Simple integration, powerful results"
            centered
          />

          <div className="mt-16">
            <div className="relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform -translate-y-1/2 z-0"></div>

              <div className="flex flex-col md:flex-row gap-8">
                {[
                  {
                    step: "01",
                    title: "Setup",
                    description: "Connect our AI Call Agent to your existing phone system or get a new dedicated number in minutes."
                  },
                  {
                    step: "02",
                    title: "Train",
                    description: "Customize the AI with your business information, FAQs, and preferred handling procedures."
                  },
                  {
                    step: "03",
                    title: "Launch",
                    description: "Go live with your AI Call Agent and start handling customer calls automatically."
                  },
                  {
                    step: "04",
                    title: "Optimize",
                    description: "Review call analytics and fine-tune your agent's responses and workflows over time."
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex-1 relative z-10"
                  >
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 h-full relative">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2 md:left-1/2 shadow-lg">
                        {step.step}
                      </div>
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-3 text-slate-800 text-center">{step.title}</h3>
                        <p className="text-slate-600 text-center">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Use Cases"
            subtitle="How businesses are leveraging our AI Call Agents"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Customer Service",
                description: "Handle common inquiries, process returns, and provide order status updates without human intervention.",
                icon: "👥"
              },
              {
                title: "Appointment Scheduling",
                description: "Allow customers to book, reschedule, or cancel appointments through natural voice conversations.",
                icon: "📅"
              },
              {
                title: "Lead Qualification",
                description: "Screen incoming sales calls, qualify leads, and route high-potential prospects to your sales team.",
                icon: "🎯"
              },
              {
                title: "After-Hours Support",
                description: "Maintain customer service quality outside business hours without staffing costs.",
                icon: "🌙"
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold text-slate-800">{useCase.title}</h3>
                </div>
                <p className="text-slate-600">{useCase.description}</p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <a href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section with Interactive Card */}
      <section id="demo" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">See Dialio AI in Action</h2>
              <p className="textlg text-slate-600 mb-8">
                Experience the power of our AI Call Agent with a personalized demo tailored to your business needs.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Customized Demonstration",
                    description: "We'll showcase how our AI handles specific scenarios relevant to your business."
                  },
                  {
                    title: "ROI Assessment",
                    description: "Get a detailed analysis of potential cost savings and efficiency improvements."
                  },
                  {
                    title: "Integration Planning",
                    description: "Learn how easily our solution fits with your existing systems and workflows."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <div className="mr-4 bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <a href="/contact" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center">
                  Schedule Your Demo
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Import the DemoForm component */}
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-500 rounded-full opacity-10"></div>

                {/* New Demo Form Component */}
                <DemoForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to transform your call center?"
        description="Join the businesses already saving time and delighting customers with our AI Call Agents."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}