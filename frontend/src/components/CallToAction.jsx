import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function CallToAction() {
  return (
<section className="bg-transparent text-white py-20 px-4">

  {/* Your section content */}

     
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* 🚀 Rocket with launch animation */}
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={{ y: [-5, -10, -20, -40, -60], rotate: [0, -2, 2, -2, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <Rocket size={48} className="mx-auto  text-yellow-600 mb-4" />
          </motion.div>

          <h2 className="text-4xl font-bold mb-4">
            Ready to launch your AI website?
          </h2>
          <p className="text-lg text-white mb-8">
            Experience the future of web development. No coding, no limits.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-yellow-600 hover:bg-yellow-100 font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            🚀 Start Building Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}