
import { motion } from "framer-motion";
import { Link } from "wouter";
import CTASection from "@/components/shared/cta-section";

export default function PrivacyPolicy() {
  // Last updated date
  const lastUpdated = "November 1, 2023";

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
              Privacy Policy
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
                At Dialio AI, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Important Information and Who We Are</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Purpose of This Privacy Policy</h3>
              <p className="text-slate-600 mb-4">
                This privacy policy aims to give you information on how Dialio AI collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up for our newsletter, purchase a product or service, or take part in a survey.
              </p>
              <p className="text-slate-600 mb-4">
                This website is not intended for children and we do not knowingly collect data relating to children.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Controller</h3>
              <p className="text-slate-600 mb-4">
                Dialio AI is the controller and responsible for your personal data (collectively referred to as "Dialio AI", "we", "us" or "our" in this privacy policy).
              </p>
              <p className="text-slate-600 mb-4">
                We have appointed a data protection officer (DPO) who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact the DPO using the details set out below.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Contact Details</h3>
              <p className="text-slate-600 mb-4">
                Our full details are:<br />
                Dialio AI<br />
                Email address: privacy@dialio.ai<br />
                Postal address: 123 AI Boulevard, Tech City, TC 12345
              </p>
              <p className="text-slate-600 mb-4">
                You have the right to make a complaint at any time to the supervisory authority for data protection issues in your country. We would, however, appreciate the chance to deal with your concerns before you approach the authority, so please contact us in the first instance.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. The Data We Collect About You</h2>
              <p className="text-slate-600 mb-4">
                Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
              </p>
              <p className="text-slate-600 mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, and title.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                <li><strong>Financial Data</strong> includes payment card details.</li>
                <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products, and services.</li>
                <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>
              
              <p className="text-slate-600 mb-4">
                We also collect, use and share <strong>Aggregated Data</strong> such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.
              </p>
              
              <p className="text-slate-600 mb-4">
                We do not collect any <strong>Special Categories of Personal Data</strong> about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offenses.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. How We Collect Your Personal Data</h2>
              <p className="text-slate-600 mb-4">
                We use different methods to collect data from and about you including through:
              </p>
              
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Direct interactions</h3>
              <p className="text-slate-600 mb-4">
                You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Apply for our products or services;</li>
                <li>Create an account on our website;</li>
                <li>Subscribe to our service or publications;</li>
                <li>Request marketing to be sent to you;</li>
                <li>Enter a competition, promotion or survey; or</li>
                <li>Give us feedback or contact us.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Automated technologies or interactions</h3>
              <p className="text-slate-600 mb-4">
                As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Third parties or publicly available sources</h3>
              <p className="text-slate-600 mb-4">
                We may receive personal data about you from various third parties and public sources as set out below:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Technical Data from analytics providers such as Google; advertising networks; and search information providers.</li>
                <li>Contact, Financial and Transaction Data from providers of technical, payment and delivery services.</li>
                <li>Identity and Contact Data from data brokers or aggregators.</li>
                <li>Identity and Contact Data from publicly available sources.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. How We Use Your Personal Data</h2>
              <p className="text-slate-600 mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
              
              <p className="text-slate-600 mb-4">
                Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Data Security</h2>
              <p className="text-slate-600 mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
              <p className="text-slate-600 mb-4">
                We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">6. Data Retention</h2>
              <p className="text-slate-600 mb-4">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
              </p>
              <p className="text-slate-600 mb-4">
                To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">7. Your Legal Rights</h2>
              <p className="text-slate-600 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              <p className="text-slate-600 mb-4">
                If you wish to exercise any of the rights set out above, please contact us.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">8. Changes to the Privacy Policy</h2>
              <p className="text-slate-600 mb-4">
                We keep our privacy policy under regular review. This version was last updated on {lastUpdated}. Historic versions can be obtained by contacting us.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">9. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact our data protection officer:
              </p>
              <p className="text-slate-600 mb-4">
                Email address: privacy@dialio.ai<br />
                Postal address: 123 AI Boulevard, Tech City, TC 12345
              </p>
            </div>
          </motion.div>

          {/* Quick navigation links */}
          <motion.div 
            className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-12"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/about-us">
                <a className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Us
                </a>
              </Link>
              <Link href="/contact">
                <a className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </a>
              </Link>
              <Link href="/terms-of-service">
                <a className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Terms of Service
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
