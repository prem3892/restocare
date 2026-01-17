'use client';

import { useState } from 'react';

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-xl font-bold">{openIndex === index ? '−' : '+'}</span>
              </button>

              {openIndex === index && <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
