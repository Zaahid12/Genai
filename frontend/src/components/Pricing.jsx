"use client";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic",
    price: "Free",
    features: ["1 Website", "AI Builder", "Live Preview", "Download Code"],
    
  },
  {
    title: "Pro",
    price: "$9/month",
    features: ["5 Websites", "Custom Domains", "Priority Support", "Analytics"],
    highlight: true,
  },
  {
    title: "Custom",
    price: "Contact Us",
    features: ["Unlimited Websites", "Branding", "Consultation", "Full Support"],
    
  },
];

export default function Pricing() {
  return (
    <section className="w-full py-20 bg-transparent dark:bg-transparent" id="pricing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          Affordable Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white dark:text-white mb-12"
        >
          Choose a plan that fits your needs.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
  className={`rounded-lg shadow-lg p-6 transition-all   duration-300 hover:scale-105 ${
  plan.highlight
    ? 'bg-yellow-600 text-white hover:shadow-yellow-600/40'
    : 'bg-white text-white dark:bg-gray-800  dark:text-whote hover:shadow-yellow-600/40 dark:hover:shadow-yellow-600/40'
}`}
>
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-lg font-medium ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-yellow-290 text-white dark:bg-white dark:text-black hover:opacity-90"
                } }`}
              >
                {plan.price === "Contact Us" ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}