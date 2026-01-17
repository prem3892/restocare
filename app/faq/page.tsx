'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What is Restocare?',
    answer:
      'Restocare is a platform designed to simplify restaurant management, customer care, and service operations.',
  },
  {
    question: 'Who can use Restocare?',
    answer:
      'Restocare is ideal for restaurant owners, managers, staff members, and customers looking for a smooth dining experience.',
  },
  {
    question: 'Is Restocare free to use?',
    answer:
      'Restocare offers both free and premium plans depending on the features and scale of usage.',
  },
  {
    question: 'Can I manage multiple restaurants?',
    answer: 'Yes, Restocare supports multi-restaurant management from a single dashboard.',
  },
  {
    question: 'How do I contact support?',
    answer:
      'You can reach Restocare support through the contact page or by emailing our support team.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h1>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-800">{faq.question}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="px-6 pb-5 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
