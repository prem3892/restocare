'use client';
import { memo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/variant/faq.variant';
import { Typography } from '@/typography/typography';

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-gray-200 py-5 flex flex-col items-center space-y-10">
      {/* Title */}
      <div className="w-full text-center">
        <Typography
          element="h1"
          text="FAQs"
          className="text-red-800 text-lg md:text-xl font-semibold"
        />

        <Typography
          element="h1"
          text="Frequently Asked Questions"
          className="text-black text-xl md:text-2xl font-semibold"
        />
      </div>

      {/* FAQ List */}
      <div className="w-full md:w-7/8 px-4 space-y-4 text-black">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="rounded-md shadow-sm">
              {/* Question */}
              <button
                type="button"
                className="w-full flex items-center justify-between p-4 focus:outline-none"
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
              >
                <Typography
                  element="span"
                  text={item.question}
                  className="text-md md:text-lg font-semibold text-left"
                />

                <span className="p-1">
                  <ChevronDown
                    className={`h-6 w-6 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </span>
              </button>

              {/* Answer */}
              <div
                className={`
                  grid transition-all duration-300 ease-in-out
                  ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                `}
              >
                <div className="overflow-hidden">
                  <Typography
                    element="p"
                    text={item.answer}
                    className="text-md md:text-lg font-normal px-4 pb-4"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Faq);
