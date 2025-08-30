// src/components/Features.jsx
import { motion } from "framer-motion";
import { Sparkles, Brain, Globe2, Zap } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="text-yellow-600" size={32} />,
    title: "1-Click AI Generation",
    desc: "Convert your prompt into a fully working website in seconds.",
  },
  {
    icon: <Brain className="text-yellow-600" size={32} />,
    title: "Smart Layout Engine",
    desc: "AI optimizes structure, styling, and responsiveness automatically.",
  },
  {
    icon: <Globe2 className="text-yellow-600" size={32} />,
    title: "Export & Publish",
    desc: "Download code or publish online — instantly and globally.",
  },
  {
    icon: <Zap className="text-yellow-600" size={32} />,
    title: "No Coding Needed",
    desc: "Even beginners can create advanced websites with zero code.",
  },
];

export default function Features() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 🌌 Multiple star layers for depth */}
      <div className="absolute inset-0 z-0">
        <div className="stars stars1"></div>
        <div className="stars stars2"></div>
        <div className="stars stars3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Powerful Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-yellow-600/40 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="mb-4 text-blue-400">{feat.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feat.title}
              </h3>
              <p className="text-zinc-300">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🎨 Starfield CSS */}
      <style>
        {`
          .stars {
            position: absolute;
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
            background-image: radial-gradient(1px 1px at 100px 200px, #ffffff, transparent),radial-gradient(1px 1px at 300px 400px, #ffecb3, transparent),
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
    </section>
  );
}