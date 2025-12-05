'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: 'Q1: What is RestoCare?',
    answer:
      'A1: RestoCare is a comprehensive restaurant management solution designed to streamline operations, enhance customer experience, and boost overall efficiency in the food service industry.',
  },
  {
    question: 'Q1: What is RestoCare?',
    answer:
      'A1: RestoCare is a comprehensive restaurant management solution designed to streamline operations, enhance customer experience, and boost overall efficiency in the food service industry.',
  },
  {
    question: 'Q1: What is RestoCare?',
    answer:
      'A1: RestoCare is a comprehensive restaurant management solution designed to streamline operations, enhance customer experience, and boost overall efficiency in the food service industry.',
  },
  {
    question: 'Q1: What is RestoCare?',
    answer:
      'A1: RestoCare is a comprehensive restaurant management solution designed to streamline operations, enhance customer experience, and boost overall efficiency in the food service industry.',
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-gray-200 py-10 flex flex-col items-center space-y-10">
      <div className="w-full text-center">
        <h1 className="text-red-600 text-lg md:text-xl font-semibold">FAQs</h1>
        <h1 className="text-black text-xl md:text-2xl font-semibold">Frequently Asked Questions</h1>
      </div>

      <div className="w-full md:w-7/8 px-4 space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="rounded-md shadow-sm">
              <button
                type="button"
                className="w-full flex items-center justify-between p-4 focus:outline-none"
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
              >
                <span className="text-md md:text-lg font-semibold text-left">{item.question}</span>
                <span className="p-1">
                  <ChevronDown
                    className={`h-6 w-6 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </span>
              </button>

              {/* Answer with smooth open/close animation */}
              <div
                className={`
                  grid transition-all duration-300 ease-in-out
                  ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                `}
              >
                <div className="overflow-hidden">
                  <p className="text-md md:text-lg font-normal px-4 pb-4">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
