import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sameer Khan",
    title: "Student & Developer",
    quote:
      "This AI tool helped me generate and launch a complete website in minutes. Unreal experience!",
  },
  {
    name: "Riya Sharma",
    title: "Freelance Designer",
    quote:
      "The best thing is I don’t need to code. My client sites are ready in just a few clicks.",
  },
  {
    name: "Aman Verma",
    title: "Startup Founder",
    quote:
      "AI Website Builder saved me weeks of development time. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-transparent text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          What Users Are Saying
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-yellow-600/40 transition-all duration-300 hover:scale-105">
              <p className="text-gray-100 mb-4 text-lg">“{testimonial.quote}”</p>
              <h4 className="font-bold text-gray-100">{testimonial.name}</h4>
              <p className="text-sm text-gray-100">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}