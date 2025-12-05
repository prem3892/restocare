import Image from 'next/image';
import whyrestoimg1 from '../app/assets/why-resto-img-1.png';
import whyrestoimg2 from '../app/assets/why-resto-img-2.png';
import { WhyRestoCareData } from '@/variant/whyrestocare.variant';
import whyrestotick from '../app/assets/why-resto-tick-img.png';
import { Typography } from '@/typography/typography';

export const WhyRestoCare = () => {
  return (
    // flex min-h-fit sm:flex-row flex-col gap-[clamp(8px,50vw,80px) sm:gap-[clamp(8px,40vw,70px)]
    //   justify-center items-center
    // py-6
    // lg:min-h-[60vh]
    <section
      className="
      flex flex-col md:flex-row bg-white py-6
      gap-10
      items-center
    "
    >
      <div className="why-resto-left pb-3 sm:pb-0 flex-1 flex sm:justify-center justify-center items-center max-w-full sm:max-w-3/7">
        <div className="flex flex-col gap-[clamp(8px,2vw,24px)] relative w-fit h-fit">
          <Image
            src={whyrestoimg1}
            alt="main"
            className="w-[clamp(200px,25vw,500px)] rounded-3xl shadow-lg"
          />

          <Image
            src={whyrestoimg2}
            alt="overlap"
            className="
    absolute bottom-0 right-0
    w-[clamp(150px,20vw,360px)]
    translate-x-[30%] translate-y-[30%]
    rounded-3xl shadow-xl
  "
          />
        </div>
      </div>

      <div className="why-resto-right max-w-8/10 sm:max-w-3/7 flex flex-1 flex-col gap-[clamp(8px,1vw,24px)] justify-start sm:justify-start items-center">
        <Typography
          text={WhyRestoCareData.heading}
          element="h2"
          className="text-[clamp(16px,2vw,25px)] font-semibold
        text-[#C00404] text-center
        sm:text-center
        "
        />
        <Typography
          text={WhyRestoCareData.subHeading}
          element="h3"
          className="text-[clamp(18px,2vw,40px)] opacity-80
        text-[#000000]
        text-center
        font-semibold
        sm:text-start
        "
        />
        <Typography
          text={WhyRestoCareData.para}
          element="p"
          className="text-[clamp(14px,2vw,24px)] leading-relaxed
        text-[#000000]
        "
        />

        <ul
          className="flex flex-col items-start gap-[clamp(4px,1vw,12px)] text-[clamp(14px,2vw,18px)]
        text-[#616060]
        "
        >
          {WhyRestoCareData.bullets.map((point, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Image src={whyrestotick} alt="tick-img"></Image>
              <Typography text={point} element="p" className="" />
            </li>
          ))}
        </ul>
        <Typography
          text={WhyRestoCareData.outro}
          element="p"
          className="text-[clamp(14px,2vw,18px)] italic
        text-[#616060]"
        />
      </div>
    </section>
  );
};
