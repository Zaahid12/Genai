import { motion } from "framer-motion";

const previewSites = [
  {
    title: "Business Website",
    image: "/preview/business-site.png",
  },
  {
    title: "Portfolio",
    image: "/preview/portfolio.png",
  },
  {
    title: "Blog Site",
    image: "/preview/blog-site.png",
  },
];

export default function Previetw() {
  return (
    <section className="bg-transparent py-20 px-4">
            <div className="absolute inset-0 z-0">
        <div className="stars stars1"></div>
        <div className="stars stars2"></div>
        <div className="stars stars3"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-white"
        >
          Live Website Preview
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewSites.map((site, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-yellow-600/40 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={site.image}
                alt={site.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-100">{site.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
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