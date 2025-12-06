import { Typography } from '@/typography/typography';
import { NeedSupportData } from '@/variant/needsupport.variant';

export const NeedSupport = () => {
  return (
    <section
      className="need-support
        bg-[#F5F6F6] text-[#000000]
        flex justify-center
        "
    >
      <div
        className="content flex
      sm:w-8/12
      w-10/12
      
      py-3
        flex-col items-center justify-between gap-3
      "
      >
        <div className="top">
          <Typography
            text={NeedSupportData.heading}
            element="h1"
            className="font-medium text-[18px] sm:text-[22px]"
          />
        </div>
        <div className="main-content flex flex-col items-center gap-3">
          <Typography
            text={NeedSupportData.subHeading}
            element="h3"
            className="font-semibold text-[20px] sm:text-[38px]"
          />
          <Typography
            text={NeedSupportData.para}
            element="p"
            className="text-base sm:text-xl text-justify cursor-pointer"
          />
        </div>
        <div
          className="bottom
        
        "
        >
          <Typography
            text={NeedSupportData.button}
            element="button"
            className="bg-[#C00404] font-semibold 
          text-sm
          sm:text-base
          px-3 py-4 rounded-lg text-white
          "
          />
        </div>
      </div>
    </section>
  );
};
