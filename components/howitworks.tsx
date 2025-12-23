import { Typography } from '@/typography/typography';
import { HowItWorksData } from '@/variant/howitworks.variant';
// import { male } from '@app/assets/.male.png'
// import male from '../app/assets/why-resto-img-1.png';
import Image from 'next/image';
import { memo } from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-[#F5F6F6] text-[#000000] py-3 flex justify-center items-center flex-col gap-5">
      <div className="pb-5 flex flex-col items-center">
        <Typography
          text={HowItWorksData.heading}
          element="h2"
          className="text-center font-semibold  text-lg sm:text-xl md:text-2xl lg:text-2xl "
        />
        <Typography
          text={HowItWorksData.subHeading}
          element="h3"
          className="text-[#616060] text-center max-w-[80%]"
        />
      </div>
      <article className="w-full flex flex-wrap justify-center gap-10 pt-5">
        {HowItWorksData.process.map((item, idx) => (
          <div
            key={idx}
            className="relative w-[87%] sm:w-[45%] lg:w-[30%] bg-white rounded-md shadow-sm hover:shadow-md transition-all p-6 py-12"
          >
            {/* ICON BLOCK */}
            <div className="absolute -top-6 left-6 w-14 h-14 rounded-xs bg-black flex items-center justify-center shadow-md">
              <Image src={item.img} alt="icon" width={28} height={28} />
            </div>

            {/* TEXT BLOCK */}
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-lg font-semibold">{item.processTitle}</h3>

              <p className="text-[15px] text-gray-600 leading-relaxed">{item.processInfo}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default memo(HowItWorks);
