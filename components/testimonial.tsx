'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Quote } from 'lucide-react';
import Profile from '../app/assets/Testimonial/Profile.png';

export default function Testimonial() {
  return (
    <div className="px-4 md:px-30 lg:px-40 py-5 space-y-2 bg-gray-200">
      <h1 className="text-red-600 text-lg md:text-xl font-semibold text-center">Testimonial</h1>
      <h1 className="text-black text-xl md:text-2xl font-bold text-center">
        Happy Client Says About Us
      </h1>

      <Swiper
        spaceBetween={30}
        freeMode={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        navigation={true}
        touchRatio={1}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1, allowTouchMove: true, navigation: false },
          640: { slidesPerView: 2, allowTouchMove: true, navigation: false },
          1024: { slidesPerView: 3, allowTouchMove: false, navigation: true },
        }}
        className="mySwiper pb-10"
      >
        {/* --- Slides --- */}
        {[1, 2, 3, 4, 5].map((i) => (
          <SwiperSlide key={i}>
            <div className="bg-white mt-14 rounded-md p-6 shadow-[0_3px_10px_rgb(0,0,0,0.1)] relative hover:shadow-[0_5px_20px_rgb(0,0,0,0.15)] transition-all duration-300">
              <div className="bg-red-500 size-16 rounded-md flex items-center justify-center absolute -top-8 left-6 shadow-lg">
                <Quote className="text-white size-6" />
              </div>

              <p className="mt-6 text-gray-700 leading-relaxed">
                &quot;RestoCare transformed our restaurant&apos;s online presence. Their expertise
                in digital marketing helped us reach a wider audience and boost our reservations
                significantly.&quot;
              </p>

              <div className="flex items-center gap-3 mt-5">
                <div className="bg-gray-300 size-12 rounded-full">
                  <Image
                    src={Profile}
                    alt="User"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-black font-semibold text-lg">Prakash Mani</h2>
                  <p className="text-sm text-gray-600">Web Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="custom-pagination flex justify-center mt-4"></div>
    </div>
  );
}
