'use client';

import Image from 'next/image';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Clients } from '@/data/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import BoxReveal from '../ui/box-reveal';

const OurClientsSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-20">
        <div
          className="mx-auto text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <h2 className="font-heading dark:text-[whitesmoke]">
            Trusted by world class companies, design teams & popular designers
          </h2>
        </div>
        <div className="mt-20 lg:block hidden rounded-full h-24 px-16">
          <Swiper
            slidesPerView={5}
            spaceBetween={100}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
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
                  />
                </BoxReveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-10 lg:hidden block rounded-2xl h-16 px-3">
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
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
                    className="dark:bg-white rounded-full"
                  />
                </BoxReveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <p className="mt-10 text-base text-center text-gray-500 md:mt-20">
        and, 1000+ more companies
      </p>
    </section>
  );
};

export default OurClientsSection;
