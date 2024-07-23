"use client";

import Link from "next/link";
import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Services } from "@/data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const OurFeatures = () => {
  return (
    <section className="flex my-20 justify-center items-center services-bg">
      <div className="w-full h-full lg:flex gap-20 items-center backdrop-brightness-[.3]">
        <div className="px-10 py-10 mx-auto lg:w-[70%]">
          <div className="lg:bg-secondary lg:h-80 lg:w-40 rounded-2xl">
            <div className="lg:absolute lg:top-[20%] lg:left-[7%] lg:w-[40%] flex flex-col lg:items-start items-center">
              <h1
                className="md:text-5xl text-4xl md:w-[80%] text-wrap text-white mb-5 lg:text-left text-center font-roboto"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-easing="ease-in-sine"
              >
                We Provide Strong Services For You
              </h1>
              <p
                className="md:text-lg lg:text-sm md:w-[85%] text-white mb-5 lg:text-left text-center font-roboto"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum eveniet explicabo quae. Quaerat a fugit est mollitia
                quae nihil placeat eius iusto ullam aut, illo nesciunt beatae
                unde vel recusandae!
              </p>
              <Link
                href="/services"
                className="relative"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
              >
                <button className="btn-primary px-12 md:px-[30px] lg:px-[35px]">
                  Explore All Services
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:hidden mt-20 md:mx-56 mx-2">
            <Swiper
              slidesPerView={1}
              spaceBetween={120}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]} // Include Navigation module
              className="myswiper"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-sine"
            >
              {Services.map((services) => (
                <SwiperSlide key={services.id}>
                  <div className="group flex flex-col justify-start items-start gap-24 w-72 h-72 duration-500 relative rounded-lg p-4 bg-black bg-opacity-60 backdrop-blur-lg hover:-translate-y-2 hover:shadow-xl shadow-gray-800 border-[1px] border-[#efefef60]">
                    <div className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-secondary z-50"></div>
                    <div>
                      <h2 className="absolute font-roboto md:top-[50%] top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold mb-2 text-gray-100 opacity-10 tracking-widest">
                        {services.num}
                      </h2>
                      <p
                        className="text-gray-200 line-clamp-3 mt-9 text-3xl capitalize font-roboto"
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-sine"
                      >
                        {services.title}
                      </p>
                    </div>
                    <Link
                      href={"/services"}
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-easing="ease-in-sine"
                    >
                      <button className="hover:bg-gray-700 bg-primary text-gray-100 self-baseline rounded p-2 px-6">
                        Explore
                      </button>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute w-[90%] md:w-[60%] z-50 top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="swiper-button-next custom-swiper-button-next bg-primary">
                <BiSolidRightArrow className="text-2xl text-[#1a1a1a]" />
              </div>
              <div className="swiper-button-prev custom-swiper-button-prev bg-primary">
                <BiSolidLeftArrow className="text-2xl text-[#1a1a1a]" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:w-[40%] lg:block hidden"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-easing="ease-in-sine"
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={200}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mywiper"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
          >
            {Services.map((services) => (
              <SwiperSlide key={services.id}>
                <div className="group flex flex-col justify-start items-start gap-24 w-72 h-72 duration-500 relative rounded-lg p-4 bg-black bg-opacity-60 backdrop-blur-lg hover:-translate-y-2 hover:shadow-xl shadow-gray-800 border-[1px] border-[#efefef60]">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-sine"
                    className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-secondary z-50"
                  ></div>
                  <div>
                    <h2 className="absolute md:top-[50%] top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold mb-2 text-gray-100 opacity-10 tracking-widest font-roboto">
                      {services.num}
                    </h2>
                    <p
                      className="text-gray-200 line-clamp-3 mt-9 text-3xl capitalize font-roboto"
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-easing="ease-in-sine"
                    >
                      {services.title}
                    </p>
                  </div>
                  <Link
                    href={"/services"}
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-sine"
                  >
                    <button className="hover:bg-primary bg-secondary text-gray-100 self-baseline rounded p-2 px-6">
                      Explore
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide className="hidden lg:block" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
