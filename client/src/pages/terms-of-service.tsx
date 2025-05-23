
import { motion } from "framer-motion";
import { Link } from "wouter";
import CTASection from "@/components/shared/cta-section";

export default function TermsOfService() {
  // Last updated date
  const lastUpdated = "November 15, 2023";

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-white to-slate-50">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-6 text-slate-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Terms of Service
            </motion.h1>
            <motion.p
              className="text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Last Updated: {lastUpdated}
            </motion.p>
          </div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8 mb-12"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-6">
                These Terms of Service ("Terms") govern your access to and use of Dialio AI's website, products, and services. Please read these Terms carefully, and contact us if you have any questions.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 mb-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Changes to Terms</h2>
              <p className="text-slate-600 mb-4">
                We may modify the Terms at any time, in our sole discretion. If we do so, we'll let you know either by posting the modified Terms on the Site or through other communications. It's important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the Site, you are indicating to us that you agree to be bound by the modified Terms.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Services and Accounts</h2>
              <p className="text-slate-600 mb-4">
                Our Services provide AI-powered communication tools including but not limited to call agents, chatbots, and voice assistants. You may need to register for an account to access certain features. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Subscriptions and Payments</h2>
              <p className="text-slate-600 mb-4">
                Some of our Services are offered on a subscription basis. By subscribing to our services, you agree to pay all fees associated with the subscription plan you choose. We reserve the right to change our prices at any time, with advance notice provided to our users.
              </p>
              <p className="text-slate-600 mb-4">
                Unless otherwise stated, all fees are quoted in U.S. Dollars. You are responsible for paying all fees and applicable taxes associated with your use of the Services in a timely manner with a valid payment method. If your payment method fails or your account is past due, we may collect fees using other collection mechanisms.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Intellectual Property Rights</h2>
              <p className="text-slate-600 mb-4">
                The Services and all materials therein or transferred thereby, including, without limitation, software, images, text, graphics, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, and all intellectual property rights related thereto, are the exclusive property of Dialio AI and its licensors.
              </p>
              <p className="text-slate-600 mb-4">
                Except as explicitly provided herein, nothing in these Terms shall be deemed to create a license in or under any such intellectual property rights, and you agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from any materials or content accessible on the Services.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">6. User Content</h2>
              <p className="text-slate-600 mb-4">
                Our Services may allow you to store, send, receive, or otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You retain any rights that you may already have in your User Content, but you grant us a worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, and distribute your User Content in any existing or future media.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">7. Prohibited Conduct</h2>
              <p className="text-slate-600 mb-4">
                You agree not to use the Services to:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Violate any applicable law or regulation</li>
                <li>Infringe the rights of any third party</li>
                <li>Send spam or other unsolicited messages</li>
                <li>Upload malicious code or attempt to hack our systems</li>
                <li>Interfere with the proper working of the Services</li>
                <li>Bypass measures designed to prevent or restrict access to the Services</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="text-slate-600 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, DIALIO AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; OR (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">9. Termination</h2>
              <p className="text-slate-600 mb-4">
                We may terminate or suspend your access to all or part of the Services, without notice, for any conduct that we, in our sole discretion, believe is in violation of any applicable law or is harmful to the interests of another user, a third-party provider, a service provider, or us.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">10. Governing Law</h2>
              <p className="text-slate-600 mb-4">
                These Terms shall be governed by the laws of the state of California, without respect to its conflict of laws principles. You agree to submit to the personal jurisdiction of the federal and state courts located in San Francisco County, California.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">11. Contact Information</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about these Terms, please contact us at <a href="mailto:legal@dialio.ai" className="text-blue-600 hover:underline">legal@dialio.ai</a>.
              </p>
            </div>

            {/* Links to other legal pages */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link href="/privacy-policy">
                <a className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Privacy Policy
                </a>
              </Link>
              <Link href="/cookie-policy">
                <a className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Cookie Policy
                </a>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <CTASection />
    </>
  );
}
