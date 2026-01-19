'use client';

import { Typography } from '@/typography/typography';
import { faqs } from '@/variant/faq.variant';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Typography
          element="h1"
          text="Frequently Asked Questions"
          className="text-3xl font-bold text-center mb-8"
        />

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
