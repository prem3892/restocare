'use client';
import { Typography } from '@/typography/typography';
import { NeedSupportData } from '@/variant/needsupport.variant';
import { useState } from 'react';
import Getintouchform from './form/getintouchform';

export const NeedSupport = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative">
      <section className="need-support bg-[#F5F6F6] text-[#000000] flex justify-center">
        <div className="content flex sm:w-8/12 w-10/12 py-3 flex-col items-center gap-3">
          <Typography
            text={NeedSupportData.heading}
            element="h1"
            className="font-medium text-[18px] sm:text-xl text-red-600"
          />

          <Typography
            text={NeedSupportData.subHeading}
            element="h3"
            className="font-semibold text-[20px] md:text-2xl"
          />

          <Typography
            text={NeedSupportData.para}
            element="p"
            className="text-base sm:text-lg text-justify sm:text-center"
          />

          <Typography
            text={NeedSupportData.button}
            element="button"
            onClick={() => setShowForm(true)}
            className="bg-[#C00404] font-semibold text-sm sm:text-base px-5 py-2 rounded-lg text-white cursor-pointer"
          />
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <Getintouchform setShowForm={setShowForm} />
        </div>
      )}
    </div>
  );
};
