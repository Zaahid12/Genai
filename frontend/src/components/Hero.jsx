// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-yellow-400 py-20 relative overflow-hidden h-96 flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Build AI Websites Instantly
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Generate, preview, and publish websites using just a prompt. Powered by GenAI.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {/* Navigate to /chatbot */}
          <button
            onClick={() => navigate("/chatbot")}
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Try it now
          </button>

          <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;