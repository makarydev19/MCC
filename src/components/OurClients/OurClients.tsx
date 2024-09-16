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
import BoxReveal from "../ui/box-reveal";

const OurClients = () => {
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
        <div className="mt-20 lg:block hidden dark:bg-zinc-100 rounded-3xl h-24 px-10">
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
                <BoxReveal boxColor={"whitesmoke"} duration={0.5}>
                  <Image
                    src={clients.img}
                    alt=""
                    width={300}
                    height={300}
                    className=""
                  />
                </BoxReveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-10 lg:hidden block">
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
                <BoxReveal boxColor={"whitesmoke"} duration={0.5}>
                  <Image
                    src={clients.img}
                    alt=""
                    width={300}
                    height={300}
                    className=""
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

    // <section className="md:px-32 px-5 py-32">
    //   <div className="text-center">
    //     <h1
    //       data-aos="fade-up"
    //       data-aos-duration="800"
    //       className="font-heading capitalize"
    //     >
    //       Our Clients
    //     </h1>
    //     <hr className="underline w-[25%] absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 bg-[#1a1a1a70] " />
    //   </div>
    // <div
    //   data-aos="fade-up"
    //   data-aos-anchor-placement="center-center"
    //   className="mt-20 lg:block hidden"
    // >
    //   <Swiper
    //     slidesPerView={5}
    //     spaceBetween={100}
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Pagination, Autoplay]}
    //     className="mySwiper"
    //   >
    //     {Clients.map((clients) => (
    //       <SwiperSlide key={clients.id} className="mb-10 ml-0">
    //         <Image
    //           src={clients.img}
    //           alt=""
    //           width={300}
    //           height={300}
    //           className=""
    //         />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    // <div
    //   data-aos="fade-up"
    //   data-aos-anchor-placement="center-center"
    //   className="mt-10 lg:hidden block"
    // >
    //   <Swiper
    //     slidesPerView={3}
    //     spaceBetween={50}
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Pagination, Autoplay]}
    //     className="mySwiper"
    //   >
    //     {Clients.map((clients) => (
    //       <SwiperSlide key={clients.id} className="mb-10 ml-0">
    //         <Image
    //           src={clients.img}
    //           alt=""
    //           width={300}
    //           height={300}
    //           className=""
    //         />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    // </section>
  );
};

export default OurClients;
