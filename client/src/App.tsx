import { Route, Router, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/layout/loading-screen";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Solutions from "@/pages/solutions";
import Features from "@/pages/features";
import HowItWorks from "@/pages/how-it-works";
import UseCases from "@/pages/use-cases";
import Contact from "@/pages/contact";
import AboutUs from "@/pages/about-us";
import Blog from "@/pages/blog";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import Pricing from "@/pages/pricing";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CallAgent from "@/pages/call-agent";
import SmsChatbot from "@/pages/sms-chatbot";
import WhatsappChatbot from "@/pages/whatsapp-chatbot";
import WebsiteChatbot from "@/pages/website-chatbot";
import VoiceAssistant from "@/pages/voice-assistant";
import N8nChat from "@/components/ui/n8n-chat";
import BackToTop from "@/components/ui/back-to-top";


function AppRouter() {
  // Add useEffect to handle route changes and scroll to top
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/features" component={Features} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/use-cases" component={UseCases} />
          <Route path="/contact" component={Contact} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/blog" component={Blog} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/call-agent" component={CallAgent} />
          <Route path="/sms-chatbot" component={SmsChatbot} />
          <Route path="/whatsapp-chatbot" component={WhatsappChatbot} />
          <Route path="/website-chatbot" component={WebsiteChatbot} />
          <Route path="/voice-assistant" component={VoiceAssistant} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <BackToTop />
      <N8nChat webhookUrl="https://mohitlora2.app.n8n.cloud/webhook/bdab5a97-1bf9-415f-9c95-c0f2bed6a94f/chat" />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <AppRouter key="app" />
          )}
        </AnimatePresence>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;