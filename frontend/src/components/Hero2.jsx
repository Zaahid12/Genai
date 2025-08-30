"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero2() {
  const navigate = useNavigate();
  const floatingWords = ["⚡️ AI", "🚀 Fast", "🎨 Modern", "🌍 Global"];

  // Entry Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Floating Words Orbit Style */}
      {floatingWords.map((word, i) => (
        <motion.span
          key={i}
          className="absolute text-lg md:text-2xl font-bold text-white/60"
          initial={{
            x: Math.random() * window.innerWidth - window.innerWidth / 2,
            y: Math.random() * window.innerHeight - window.innerHeight / 2,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth - window.innerWidth / 2,
              Math.random() * window.innerWidth - window.innerWidth / 2,
            ],
            y: [
              Math.random() * window.innerHeight - window.innerHeight / 2,
              Math.random() * window.innerHeight - window.innerHeight / 2,
            ],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {word}
        </motion.span>
      ))}

      {/* Main Content */}
      <div className="relative z-20 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Build Websites with <span className="text-yellow-400">AI</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Launch your first professional website in seconds using the power of
          AI.
        </motion.p>

        <motion.button
          onClick={() => navigate("/chatbot")}
          className="px-6 py-3 bg-yellow-600 text-gray-200 mt-6 font-semibold rounded-full hover:bg-yellow-500 transition"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Try it now
        </motion.button>
      </div>

      {/* Stats Strip */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 bg-black/40 px-6 py-3 rounded-xl backdrop-blur-md"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <div className="text-center">
          <p className="text-xl font-bold text-yellow-400">10k+</p>
          <p className="text-sm text-gray-300">Websites Created</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-yellow-400">⚡️ 1 min</p>
          <p className="text-sm text-gray-300">Launch Time</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-yellow-400">🤖 100%</p>
          <p className="text-sm text-gray-300">AI Powered</p>
        </div>
      </motion.div>
    </section>
  );
}