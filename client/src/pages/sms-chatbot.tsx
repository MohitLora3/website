
import { motion } from "framer-motion";
import CTASection from "../components/shared/cta-section";
import SectionHeading from "../components/ui/section-heading";
import { Button } from "@/components/ui/button";

export default function SmsChatbotPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-4 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-white z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-4 border-emerald-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 border-4 border-teal-200 rounded-full opacity-30 animate-pulse delay-700"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-emerald-600 font-medium text-sm"
          >
            Next-Gen Communication
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 leading-tight"
          >
            SMS Chatbot <span className="block md:inline">for Modern Business</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Engage your customers via text messaging with our intelligent SMS chatbot that handles inquiries, sends updates, and provides assistance through their preferred channel.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg" onClick={() => window.location.href = "/contact"}>
              Try It Now
            </Button>
            <Button variant="outline" className="bg-white text-emerald-600 border-emerald-200 hover:border-emerald-400 font-medium py-6 px-8 rounded-lg shadow-sm hover:shadow transition-all duration-300 text-lg" onClick={() => window.location.href = "/contact"}>
              Watch Demo
            </Button>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 max-w-sm mx-auto relative"
          >
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-3 rounded-[40px] shadow-2xl border-4 border-slate-700">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl"></div>
              <div className="bg-white h-[500px] w-full rounded-[30px] overflow-hidden relative">
                <div className="bg-emerald-500 text-white p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs opacity-70">Chatbot</div>
                      <div className="font-medium">Dialio SMS</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-white mr-1 opacity-70"></div>
                      <div className="text-xs">Online</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 h-[400px] overflow-y-auto">
                  {/* Message bubbles */}
                  <div className="flex justify-end mb-4">
                    <div className="bg-slate-100 p-3 rounded-lg rounded-tr-none max-w-[80%] text-sm">
                      Hi, I'd like to check my order status please.
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    <div className="bg-emerald-100 p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm">
                      Hi there! I'd be happy to help you check your order status. Could you please provide your order number?
                    </div>
                  </div>
                  
                  <div className="flex justify-end mb-4">
                    <div className="bg-slate-100 p-3 rounded-lg rounded-tr-none max-w-[80%] text-sm">
                      Sure, it's #ORD-28456
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    <div className="bg-emerald-100 p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm">
                      Thanks! I found your order #ORD-28456. Your package is currently out for delivery and should arrive by 5pm today. Would you like to receive a notification when it's delivered?
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-slate-100 p-3 rounded-lg rounded-tr-none max-w-[80%] text-sm">
                      Yes please, that would be great!
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-100">
                  <div className="flex">
                    <input type="text" placeholder="Type a message..." className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-300" />
                    <button className="ml-2 bg-emerald-500 text-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Intelligent Features"
            subtitle="Smart messaging capabilities designed for growth"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Natural Language Processing",
                description: "Understands customer queries in everyday language and responds appropriately.",
                icon: "💬",
                color: "from-emerald-50 to-emerald-100",
                iconBg: "bg-emerald-500"
              },
              {
                title: "Automated Workflows",
                description: "Trigger actions based on specific keywords or customer responses.",
                icon: "⚙️",
                color: "from-teal-50 to-teal-100",
                iconBg: "bg-teal-600"
              },
              {
                title: "Personalization",
                description: "Address customers by name and provide tailored recommendations based on history.",
                icon: "👤",
                color: "from-cyan-50 to-cyan-100",
                iconBg: "bg-cyan-600"
              },
              {
                title: "Quick Replies",
                description: "Suggest response options to create intuitive conversation flows.",
                icon: "⚡",
                color: "from-blue-50 to-blue-100",
                iconBg: "bg-blue-600"
              },
              {
                title: "Multimedia Support",
                description: "Send and receive images, links, and documents via MMS.",
                icon: "📷",
                color: "from-indigo-50 to-indigo-100",
                iconBg: "bg-indigo-600"
              },
              {
                title: "Campaign Management",
                description: "Schedule and send bulk messages for promotions or announcements.",
                icon: "📊",
                color: "from-purple-50 to-purple-100",
                iconBg: "bg-purple-600"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${feature.color} p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group`}
              >
                <div className={`${feature.iconBg} text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading
            title="How It Works"
            subtitle="Set up your SMS chatbot in minutes, not weeks"
            centered
          />
          
          <div className="mt-16">
            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  step: "01",
                  title: "Set Up",
                  description: "Choose a dedicated phone number or shortcode and connect to our platform.",
                  color: "bg-emerald-500"
                },
                {
                  step: "02",
                  title: "Configure",
                  description: "Create conversation flows and response templates for common scenarios.",
                  color: "bg-teal-600"
                },
                {
                  step: "03",
                  title: "Integrate",
                  description: "Connect with your CRM, e-commerce platform, or other business tools.",
                  color: "bg-cyan-500"
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Start engaging with customers via SMS and monitor conversations in real time.",
                  color: "bg-blue-600"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex-1 relative"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-full border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                    <div className={`${step.color} w-14 h-14 rounded-2xl text-white flex items-center justify-center text-xl font-bold mb-6`}>
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-800">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5L21 12L14 19" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 12H20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Use Cases"
            subtitle="How businesses leverage SMS chatbots"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {[
              {
                title: "Customer Support",
                description: "Resolve common issues and answer FAQs instantly via text, reducing support costs by up to 30% while improving response times.",
                icon: "🛠️",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Order Notifications",
                description: "Send shipping updates, delivery confirmations, and order status changes automatically, keeping customers informed at every step.",
                icon: "📦",
                image: "https://images.unsplash.com/photo-1533749047870-3eb68519c7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Appointment Reminders",
                description: "Reduce no-shows with automated appointment reminders and easy rescheduling, increasing attendance rates by an average of 25%.",
                icon: "🗓️",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Feedback Collection",
                description: "Gather customer feedback through simple SMS surveys after purchases or interactions, capturing valuable insights while the experience is fresh.",
                icon: "📝",
                image: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-lg group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10"></div>
                <img 
                  src={useCase.image} 
                  alt={useCase.title} 
                  className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-xl mr-3">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-slate-200">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Section - Alternative to Demo */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-30"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading
            title="SMS AI Innovations"
            subtitle="The cutting edge of conversational technology"
            centered
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-10"
          >
            {[
              {
                icon: "🤖",
                title: "Contextual Understanding",
                description: "Our AI remembers conversation history and maintains context between multiple exchanges, creating a more natural interaction flow.",
                color: "border-emerald-300"
              },
              {
                icon: "📱",
                title: "Rich Media Support",
                description: "Beyond text, our system supports images, videos, and interactive elements to enhance engagement with your customers.",
                color: "border-teal-300"
              },
              {
                icon: "🔄",
                title: "Omnichannel Capability",
                description: "Seamlessly transition conversations between SMS, web chat, and other channels while maintaining conversation context.",
                color: "border-cyan-300"
              },
              {
                icon: "📊",
                title: "Performance Analytics",
                description: "Track conversation flows, popular queries, and customer satisfaction through comprehensive dashboards and reports.",
                color: "border-blue-300"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${item.color}`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Stats showcase */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 overflow-hidden relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "98%", label: "Customer Satisfaction" },
                { value: "85%", label: "Increase in Response Rate" },
                { value: "65%", label: "Reduction in Support Costs" },
                { value: "3.2min", label: "Average Resolution Time" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to transform customer messaging?"
        description="Start building meaningful conversations with your customers today through their most used communication channel."
        buttonText="Get Started"
        buttonLink="/contact"
        bgColor="from-emerald-500 to-teal-600"
      />
    </div>
  );
}
