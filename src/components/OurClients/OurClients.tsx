"use client";

import Image from "next/image";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Clients } from "@/data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const OurClients = () => {
  return (
    <section className="md:px-32 px-5 py-32">
      <div className="text-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="font-heading capitalize"
        >
          Our Clients
        </h1>
        <hr className="underline w-[25%] absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 bg-[#1a1a1a70] " />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="mt-20 lg:block hidden"
      >
        <Swiper
          slidesPerView={5}
          spaceBetween={100}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {Clients.map((clients) => (
            <SwiperSlide key={clients.id} className="mb-10 ml-0">
              <Image
                src={clients.img}
                alt=""
                width={300}
                height={300}
                className=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="mt-10 lg:hidden block"
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {Clients.map((clients) => (
            <SwiperSlide key={clients.id} className="mb-10 ml-0">
              <Image
                src={clients.img}
                alt=""
                width={300}
                height={300}
                className=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClients;