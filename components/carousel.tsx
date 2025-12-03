'use client';
import Image from 'next/image';
import hero1 from '../app/assets/hero1.png';
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CarouselData } from '@/variant/carousel.variant';
import { Typography } from '@/typography/typography';

export const Carousel = () => {
  return (
    <section className="w-full overflow-hidden h-[calc(100vh-4rem)]">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {CarouselData.map((data, idx) => (
          <SwiperSlide className="relative w-full h-full" key={idx}>
            <Image src={hero1} fill className="object-cover opacity-50" alt="image" />
            <div
              className="
    absolute
    top-1/2 left-1/3
    -translate-x-1/2 -translate-y-1/2
    
    w-[90%] max-w-xl
    bg-[#00000066]
    rounded-md
    shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]
    p-4
    flex flex-col gap-4
  "
            >
              <div>
                <Typography
                  text={data.heroHeading}
                  element="h2"
                  className="text-2xl md:text-4xl leading-snug md:leading-relaxed"
                />
              </div>

              <div>
                <Typography
                  text={data.heroSubHeading}
                  element="p"
                  className="text-base md:text-lg"
                />
              </div>

              <div className="flex items-center justify-center sm:justify-start">
                <Typography
                  text={data.heroButton}
                  element="button"
                  className="
        rounded-xl
        border-2 border-white
        px-4 py-2
        text-sm md:text-base
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
