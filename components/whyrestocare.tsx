import Image from 'next/image';
import { WhyRestoCareData } from '@/variant/whyrestocare.variant';
import { Typography } from '@/typography/typography';

export const WhyRestoCare = () => {
  return (
    // flex min-h-fit sm:flex-row flex-col gap-[clamp(8px,50vw,80px) sm:gap-[clamp(8px,40vw,70px)]
    //   justify-center items-center
    // py-6
    // lg:min-h-[60vh]
    <section
      className="
      flex flex-col md:flex-row py-3
      gap-10
      bg-white
      items-center
      
      
    "
    >
      <div className="why-resto-left pb-3 sm:pb-0 flex-1 flex sm:justify-center justify-center items-center sm:max-w-3/7  relative">
        <div className="relative inline-block">
          <Image
            src={WhyRestoCareData.img[0]}
            alt="main"
            className="rounded-3xl shadow-lg w-52 md:w-44 lg:w-64"
            width={100}
            height={100}
          />

          <div className="relative -mt-[20%] w-fit h-fit left-[40%]">
            <Image
              src={WhyRestoCareData.img[1]}
              alt="overlap"
              className="rounded-3xl shadow-xl w-40 md:w-36 lg:w-56"
              width={100}
              height={100}
            />
          </div>
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
              <Image src={point.img} alt="tick-img" width={20} height={20}></Image>
              <Typography text={point.text} element="p" className="" />
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
