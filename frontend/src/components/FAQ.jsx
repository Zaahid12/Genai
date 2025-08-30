import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is this tool used for?',
    answer: 'It helps you generate and publish professional websites using AI with just a prompt.'
  },
  {
    question: 'Is it completely free to use?',
    answer: 'You can generate and preview websites for free. Publishing may require a subscription.'
  },
  {
    question: 'Can I download the websites?',
    answer: 'Yes, you can download the generated website code and host it anywhere.'
  },
  {
    question: 'Is there a support team?',
    answer: 'Yes, you can contact us via email or WhatsApp from the Contact section.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-transparent py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-3">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <span className="text-xl text-white">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
                    className="text-white overflow-hidden"
                  >
                    <div className="py-2">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;