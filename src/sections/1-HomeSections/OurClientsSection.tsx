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
import BoxReveal from '../../components/ui/box-reveal';
import { BlurFade } from '../../components/ui/blur-fade';
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
        <div className="rounded-3xl lg:px-16 px-5 lg:mt-16 mt-5 py-3 bg-LightModeBG/95">
          <Swiper
            slidesPerView={5}
            spaceBetween={100}
            watchSlidesProgress={true} // Ensures Swiper tracks slide loading progress
            autoplay={{
              delay: 2500,
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
            {Clients.map((clients, index) => (
              <SwiperSlide key={index} className="">
                <BoxReveal duration={0.5} boxColor="white">
                  <div className="lg:size-20 size-14 flex items-center justify-center">
                    <Image
                      src={clients.img}
                      alt=""
                      width={500}
                      height={500}
                      loading="eager"
                    />
                  </div>
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
