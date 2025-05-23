import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

type TabOption = "customer-service" | "sales" | "healthcare" | "real-estate" | "professional";

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState<TabOption>("customer-service");

  const tabContent = {
    "customer-service": {
      title: "Managing High Call Volumes",
      description: "For customer service teams struggling with high call volumes and limited staff, Dialio ensures every customer receives immediate attention without long hold times.",
      benefits: [
        {
          title: "Zero Wait Times",
          description: "Customers get instant responses, eliminating frustration from being placed on hold."
        },
        {
          title: "24/7 Availability",
          description: "Provide consistent support outside business hours, weekends, and holidays."
        },
        {
          title: "FAQ Handling",
          description: "Automatically answer common questions, freeing your team for complex issues."
        }
      ],
      quote: "Dialio reduced our average wait time from 15 minutes to zero, and our customer satisfaction scores improved by 35%.",
      complementaryTools: [
        {
          name: "AI WhatsApp Chatbot",
          description: "Offer alternative support channel for messaging-preferred customers.",
          icon: (
            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          ),
          bgColor: "bg-green-100",
          textColor: "text-green-600"
        },
        {
          name: "AI Website Chatbot",
          description: "Engage visitors directly on your website before they need to call.",
          icon: (
            <svg className="h-5 w-5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          bgColor: "bg-[#EDE9FE]",
          textColor: "text-[#8B5CF6]"
        }
      ]
    },
    "sales": {
      title: "Maximizing Lead Conversion",
      description: "For sales teams looking to reach more prospects and qualify leads efficiently, Dialio automates outbound calls and follow-ups to increase conversion rates.",
      benefits: [
        {
          title: "Automatic Lead Qualification",
          description: "Identify and prioritize high-potential prospects through intelligent conversations."
        },
        {
          title: "Immediate Follow-Up",
          description: "Respond to inquiries instantly, dramatically increasing conversion potential."
        },
        {
          title: "Consistent Messaging",
          description: "Ensure your sales pitch delivers the right information every time."
        }
      ],
      quote: "Our lead response time went from hours to seconds, and our conversion rate increased by 45% with Dialio's outbound capabilities.",
      complementaryTools: [
        {
          name: "AI SMS Chatbot",
          description: "Send follow-up text messages to nurture leads after calls.",
          icon: (
            <svg className="h-5 w-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          ),
          bgColor: "bg-[#D1FAE5]",
          textColor: "text-[#10B981]"
        },
        {
          name: "AI Website Chatbot",
          description: "Capture leads directly from your website 24/7.",
          icon: (
            <svg className="h-5 w-5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          bgColor: "bg-[#EDE9FE]",
          textColor: "text-[#8B5CF6]"
        }
      ]
    },
    "healthcare": {
      title: "Streamlining Patient Communication",
      description: "For healthcare providers, Dialio reduces missed appointments and improves patient experience by automating appointment scheduling, reminders, and routine inquiries.",
      benefits: [
        {
          title: "Reduced No-Shows",
          description: "Automated appointment reminders and confirmations cut missed appointments."
        },
        {
          title: "Patient Pre-Screening",
          description: "Gather necessary information before appointments to optimize clinical time."
        },
        {
          title: "Medication Reminders",
          description: "Improve treatment adherence with automated check-ins and reminders."
        }
      ],
      quote: "Dialio helped us reduce no-shows by 62% and freed up our front desk staff to provide better in-person patient care.",
      complementaryTools: [
        {
          name: "AI SMS Chatbot",
          description: "Send appointment reminders and allow easy rescheduling via text.",
          icon: (
            <svg className="h-5 w-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          ),
          bgColor: "bg-[#D1FAE5]",
          textColor: "text-[#10B981]"
        },
        {
          name: "AI WhatsApp Chatbot",
          description: "Provide patients with a familiar channel for healthcare queries.",
          icon: (
            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          ),
          bgColor: "bg-green-100",
          textColor: "text-green-600"
        }
      ]
    },
    "real-estate": {
      title: "Enhancing Property Inquiries",
      description: "For real estate agencies, Dialio handles property inquiries 24/7, qualifies potential buyers, and schedules viewings, ensuring no opportunity is missed.",
      benefits: [
        {
          title: "24/7 Property Information",
          description: "Answer inquiries about listings any time, even outside business hours."
        },
        {
          title: "Automated Viewing Scheduling",
          description: "Let potential buyers book property tours without agent involvement."
        },
        {
          title: "Prospect Qualification",
          description: "Identify serious buyers by understanding their needs and budget."
        }
      ],
      quote: "Our agents now focus exclusively on showings and closings, while Dialio handles all initial inquiries, saving us 30+ hours per week per agent.",
      complementaryTools: [
        {
          name: "AI Website Chatbot",
          description: "Engage visitors browsing listings on your website.",
          icon: (
            <svg className="h-5 w-5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          bgColor: "bg-[#EDE9FE]",
          textColor: "text-[#8B5CF6]"
        },
        {
          name: "AI Voice Assistant for Website",
          description: "Allow voice searching of listings on your property website.",
          icon: (
            <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          ),
          bgColor: "bg-slate-100",
          textColor: "text-slate-600"
        }
      ]
    },
    "professional": {
      title: "Enhancing Client Services",
      description: "For law firms, accountants, and consultants, Dialio streamlines client intake, appointment scheduling, and handles routine inquiries with professionalism.",
      benefits: [
        {
          title: "Efficient Client Intake",
          description: "Gather necessary information before appointments to maximize billable time."
        },
        {
          title: "Professional Availability",
          description: "Ensure clients can reach your firm even outside business hours."
        },
        {
          title: "Initial Consultation Screening",
          description: "Qualify potential clients before scheduling valuable consultation time."
        }
      ],
      quote: "Dialio transformed our intake process, reducing administrative work by 75% and increasing our capacity to take on new clients.",
      complementaryTools: [
        {
          name: "AI WhatsApp Chatbot",
          description: "Offer a confidential communication channel for sensitive matters.",
          icon: (
            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          ),
          bgColor: "bg-green-100",
          textColor: "text-green-600"
        },
        {
          name: "AI Website Chatbot",
          description: "Allow clients to schedule appointments directly from your website.",
          icon: (
            <svg className="h-5 w-5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          bgColor: "bg-[#EDE9FE]",
          textColor: "text-[#8B5CF6]"
        }
      ]
    }
  };

  const content = tabContent[activeTab];

  return (
    <>
      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-slate-200">
          <div className="flex overflow-x-auto">
            <button 
              className={`tab-button whitespace-nowrap px-6 py-3 border-b-2 font-medium text-lg focus:outline-none ${activeTab === 'customer-service' ? 'active' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
              onClick={() => setActiveTab("customer-service")}
            >
              Customer Service
            </button>
            <button 
              className={`tab-button whitespace-nowrap px-6 py-3 border-b-2 font-medium text-lg focus:outline-none ${activeTab === 'sales' ? 'active' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
              onClick={() => setActiveTab("sales")}
            >
              Sales & Marketing
            </button>
            <button 
              className={`tab-button whitespace-nowrap px-6 py-3 border-b-2 font-medium text-lg focus:outline-none ${activeTab === 'healthcare' ? 'active' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
              onClick={() => setActiveTab("healthcare")}
            >
              Healthcare
            </button>
            <button 
              className={`tab-button whitespace-nowrap px-6 py-3 border-b-2 font-medium text-lg focus:outline-none ${activeTab === 'real-estate' ? 'active' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
              onClick={() => setActiveTab("real-estate")}
            >
              Real Estate
            </button>
            <button 
              className={`tab-button whitespace-nowrap px-6 py-3 border-b-2 font-medium text-lg focus:outline-none ${activeTab === 'professional' ? 'active' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
              onClick={() => setActiveTab("professional")}
            >
              Professional Services
            </button>
          </div>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="tab-content">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100">
          <div className="md:flex">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
              <p className="text-slate-600 mb-6">
                {content.description}
              </p>
              
              <div className="space-y-4 mb-6">
                {content.benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EFF6FF] flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-[#3B82F6]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-slate-800">{benefit.title}</h4>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-6 p-4 bg-[#EFF6FF] rounded-lg border border-[#DBEAFE]">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-[#3B82F6]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-[#2563EB]">
                      "{content.quote}"
                    </p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#3B82F6] hover:bg-[#2563EB] transition-colors">
                  Explore {activeTab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Solution
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 md:mt-0 md:w-1/3">
              <div className="bg-slate-100 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Complementary Tools</h4>
                
                <div className="space-y-4">
                  {content.complementaryTools.map((tool, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-lg ${tool.bgColor} flex items-center justify-center`}>
                        {tool.icon}
                      </div>
                      <div className="ml-3">
                        <h5 className="text-md font-medium">{tool.name}</h5>
                        <p className="text-sm text-slate-600">{tool.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
