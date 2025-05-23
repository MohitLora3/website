import { motion } from "framer-motion";
import CTASection from "@/components/shared/cta-section";

export default function AboutUs() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-white to-slate-50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Dialio AI
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Coming soon
            </motion.p>
          </div>
        </motion.div>
      </section>

      <CTASection />
    </>
  );
}