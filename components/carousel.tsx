'use client';
import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CarouselData } from '@/variant/carousel.variant';
import { Typography } from '@/typography/typography';

const Carousel = () => {
  return (
    <section className="scroll-mt-16 w-full overflow-hidden h-[calc(35vh-4rem)] sm:h-[calc(100vh-4rem)] ">
      {' '}
      {/* mt-16 */}
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {CarouselData.map((data, idx) => (
          <SwiperSlide className="relative w-full h-full" key={idx}>
            <Image
              src={data.banner}
              fill
              className="object-cover "
              alt="image"
              fetchPriority={'high'}
              priority
            />
            <div
              className="
      absolute
      top-1/2 left-3/7 sm:left-1/3
      -translate-x-1/2 -translate-y-1/2
      
      w-[60%] sm:w-[50%] md:w-[60%] lg:w-[60%] xl:max-w-xl
      bg-[#00000066]
      rounded-md
      shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]
      p-3 sm:p-4 md:p-5 lg:p-6
      flex flex-col gap-3 sm:gap-4

    "
            >
              <div>
                <Typography
                  text={data.heroHeading}
                  element="h2"
                  className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl :text-4xl leading-snug md:leading-relaxed"
                />
              </div>

              <div className="hidden sm:block">
                <Typography
                  text={data.heroSubHeading}
                  element="p"
                  className="text-white text-sm sm:text-base md:text-lg"
                />
              </div>

              <div className="text-white flex items-center justify-start sm:justify-start mt-1 sm:mt-0">
                <Typography
                  text={data.heroButton}
                  element="button"
                  className="
          rounded-xl
          border-2 border-white
          px-3 py-1.5 sm:px-4 sm:py-2
          text-sm sm:text-sm md:text-base
        "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
