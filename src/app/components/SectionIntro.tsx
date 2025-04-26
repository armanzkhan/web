"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="bg-white text-black py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        
        {/* Small Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Your Innovation Delivery Partners
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          We’re so much more than an innovation delivery agency. We’re an extension to your team. We’re your trusted partners regardless of industry or business size.
          <br /><br />
          And no matter what, we’re your biggest supporters on your path to delivering real innovation. That’s our word.
        </motion.p>

      </div>
    </section>
  );
}
