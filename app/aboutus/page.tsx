import React from 'react';
import { OurCompanyData } from '@/variant/ourcompany.variant';
import { OurClientData } from '@/variant/ourclient.variant';
import { Count } from '@/components/ui/count';
import { NeedSupport } from '@/components/needsupport';
import Offer from '@/components/offer';

const page = () => {
  return (
    <>
      {/* our company */}
      <div className="space-y-12 bg-gray-100 dark:text-black">
        {/* our company page */}
        <section>
          <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-xl font-bold leading-none sm:text-2xl">
              <span className="text-[#C00404]">{OurCompanyData.headingP1}</span>
              {OurCompanyData.headingP2}
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">{OurCompanyData.subHeading}</p>
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 m-2 text-sm font-semibold rounded bg-[#C00404] text-gray-50 cursor-pointer">
                {OurCompanyData.button1}
              </button>
              <button className="px-8 py-3 m-2 text-lg border rounded text-black border-[#C00404] cursor-pointer">
                {OurCompanyData.button2}
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* metrices */}
      <div className="space-y-12 bg-gray-100 text-black">
        <section className="p-6 bg-gray-100">
          {/* matrix */}
          <div className="container grid justify-center grid-cols-1 gap-3 sm:gap-0 mx-auto text-center lg:grid-cols-3">
            {OurClientData.map((item, idx) => (
              <div className="flex flex-col justify-start m-2 lg:m-6" key={idx}>
                <p className="text-2xl font-bold leading-none lg:text-4xl text-[#C00404]">
                  <Count end={item.value} />
                  {item.label ? (item.label.includes('Years') ? '+' : '') : ''}
                  {item.label ? (item.label.includes('Clients') ? '+' : '') : ''}
                  {item.label ? (item.label.includes('Followers') ? 'K+' : '') : ''}
                </p>
                <p className="text-sm sm:text-base ">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Offer />
      <NeedSupport />
    </>
  );
};

export default page;
