import Image from 'next/image';
import { WhyRestoCareData } from '@/variant/whyrestocare.variant';
import { Typography } from '@/typography/typography';
import { memo } from 'react';

const WhyRestoCare = () => {
  return (
    <section
      className="
        flex flex-col md:flex-row 
        py-10
        bg-gray-100
        items-center gap-10
      "
    >
      {/* LEFT IMAGE SECTION */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-4">
        <Image
          src={WhyRestoCareData.img[0]}
          alt="main"
          width={400}
          height={400}
          priority
          fetchPriority="high"
          className="rounded-lg"
        />
      </div>

      {/* RIGHT TEXT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 px-4 sm:px-6 md:px-0">
        <Typography
          text={WhyRestoCareData.heading}
          element="h2"
          className="
            text-[clamp(18px,2vw,26px)]
            font-semibold
            text-[#C00404]
            text-center md:text-start
          "
        />

        <Typography
          text={WhyRestoCareData.subHeading}
          element="h3"
          className="
            text-[clamp(22px,2.5vw,40px)]
            font-semibold 
            text-black
            opacity-90
            text-center md:text-start
          "
        />

        <Typography
          text={WhyRestoCareData.para}
          element="p"
          className="
            text-[clamp(14px,1.6vw,20px)]
            leading-relaxed
            text-gray-700
            text-center md:text-start
          "
        />

        <ul className="flex flex-col gap-2 mt-2">
          {WhyRestoCareData.bullets.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Image src={point.img} alt="tick" width={20} height={20} />
              <Typography
                text={point.text}
                element="p"
                className="text-[clamp(14px,1.5vw,18px)] text-gray-600"
              />
            </li>
          ))}
        </ul>

        <Typography
          text={WhyRestoCareData.outro}
          element="p"
          className="
            text-[clamp(14px,1.5vw,18px)]
            italic text-gray-600 mt-3
            text-center md:text-start
          "
        />
      </div>
    </section>
  );
};

export default memo(WhyRestoCare);
