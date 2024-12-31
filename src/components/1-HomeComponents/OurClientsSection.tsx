'use client';

import React from 'react';

import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import BoxReveal from '../ui/box-reveal';
import { BlurFade } from '../ui/blur-fade';
import { Clients } from '@/Data/Data';

const OurClientsSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:pb-14">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-20">
        <div className="mx-auto text-center">
          <BlurFade delay={0.25} inView>
            <h2 className="font-heading dark:text-[whitesmoke]">
              Trusted by world class companies
            </h2>
          </BlurFade>
        </div>
        <div className="mt-10 rounded-full lg:h-24 h-20 lg:px-16 px-3">
          <Swiper
            slidesPerView={5}
            spaceBetween={100}
            watchSlidesProgress={true} // Ensures Swiper tracks slide loading progress
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 4, spaceBetween: 30 },
              640: { slidesPerView: 4, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 100 },
              1280: { slidesPerView: 5, spaceBetween: 100 },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {Clients.map((clients) => (
              <SwiperSlide key={clients.id} className="mb-10 ml-0">
                <BoxReveal duration={0.5}>
                  <Image
                    src={clients.img}
                    alt=""
                    width={400}
                    height={400}
                    className="dark:bg-white rounded-full p-1"
                    loading="eager"
                  />
                </BoxReveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <p className="mt-8 text-base text-center text-gray-500 ">
        and many more...
      </p>
    </section>
  );
};

export default OurClientsSection;
