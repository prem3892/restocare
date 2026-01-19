'use client';
import { Typography } from '@/typography/typography';
import { NeedSupportData } from '@/variant/needsupport.variant';
import { memo, useState } from 'react';
import Getintouchform from './form/getintouchform';

export default memo(function NeedSupport() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative">
      <section className="need-support bg-[#F5F6F6] text-[#000000] flex justify-center">
        <div className="content flex sm:w-8/12 w-10/12 py-3 flex-col items-center gap-3">
          <Typography
            text={NeedSupportData.heading}
            element="h1"
            className="font-medium text-[18px] sm:text-[22px]"
          />

          <Typography
            text={NeedSupportData.subHeading}
            element="h2"
            className="font-semibold text-[20px] sm:text-[38px]"
          />

          <Typography
            text={NeedSupportData.para}
            element="p"
            className="text-base sm:text-xl text-justify sm:text-center"
          />

          <Typography
            text={NeedSupportData.button}
            element="button"
            onClick={() => setShowForm(true)}
            className="bg-[#C00404] font-semibold text-sm sm:text-base px-4 py-3 rounded-lg text-white cursor-pointer"
          />
        </div>
      </section>

      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowForm(false);
            }
          }}
        >
          <Getintouchform setShowForm={setShowForm} />
        </div>
      )}
    </div>
  );
});
