import React from "react";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Previetw from "../components/Previetw";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Hero2 from "../components/Hero2";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants ek jagah
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative overflow-hidden bg-black min-h-screen">
      {/* 🌌 Stars Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="stars stars1"></div>
        <div className="stars stars2"></div>
        <div className="stars stars3"></div>
      </div>

      {/* Page Content with Animations */}
      <Navbar />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Hero2 />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Features />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Previetw />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <CallToAction />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Pricing />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <FAQ />
      </motion.div>

      <Footer />

      <style>
        {`
          .stars {
            width: 200%;
            height: 200%;
            background-repeat: repeat;
            background-position: center;
            transform: translate(-25%, -25%);
          }

          .stars1 {
            background-image: radial-gradient(2px 2px at 20px 30px, white, transparent),
                              radial-gradient(2px 2px at 80px 120px, white, transparent),
                              radial-gradient(2px 2px at 200px 150px, white, transparent),
                              radial-gradient(2px 2px at 300px 80px, white, transparent);
            background-size: 400px 400px;
            animation: moveStars 100s linear infinite;
          }

          .stars2 {
            background-image: radial-gradient(1.5px 1.5px at 50px 60px, #9ae6ff, transparent),
                              radial-gradient(1.5px 1.5px at 170px 200px, #fff7ae, transparent),
                              radial-gradient(1.5px 1.5px at 250px 100px, #ffffff, transparent),
                              radial-gradient(1.5px 1.5px at 400px 300px, #ffd6ff, transparent);
            background-size: 600px 600px;
            animation: moveStars 160s linear infinite;
          }

          .stars3 {
            background-image: radial-gradient(1px 1px at 100px 200px, #ffffff, transparent),
                              radial-gradient(1px 1px at 300px 400px, #ffecb3, transparent),
                              radial-gradient(1px 1px at 500px 100px, #d0eaff, transparent),
                              radial-gradient(1px 1px at 700px 600px, #ffffff, transparent);
            background-size: 800px 800px;
            animation: moveStars 240s linear infinite;
          }

          @keyframes moveStars {
            from { transform: translate(-25%, -25%) rotate(0deg); }
            to { transform: translate(-25%, -25%) rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}