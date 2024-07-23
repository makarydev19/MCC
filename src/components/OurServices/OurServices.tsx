"use client";

import { Services } from "@/data/data";
import ServicesCard from "../ServicesCard/ServicesCard";
import Image from "next/image";
import useAOS from "@/hooks/useAOS";
import { useEffect } from "react";

const OurServices = () => {
  const aos = useAOS();

  useEffect(() => {
    aos.refresh(); // Refresh AOS on initial load

    // Refresh AOS on route change in Next.js
    const handleRouteChange = () => {
      aos.refresh();
    };

    // Clean up event listener
    window.addEventListener("routeChangeComplete", handleRouteChange);

    return () => {
      window.removeEventListener("routeChangeComplete", handleRouteChange);
    };
  }, [aos]);
  return (
    <section className="pb-20">
      <div className="rounded-b-2xl servicesbg-page h-[80vh]">
        <div className="w-full h-full lg:flex gap-y-20 flex-col items-center justify-center backdrop-brightness-[.4] rounded-b-xl lg:py-0 py-44">
          <h1 className="lg:text-8xl text-5xl text-center text-white">
            What We Do
          </h1>
          <p className="text-gray-100 lg:text-3xl text-2xl text-center">
            Building the future with comprehensive construction solutions
          </p>
        </div>
      </div>
      <section className="lg:px-1 px-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]">
          <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
            <div className="transition-all duration-200 bg-white shadow-xl rounded-xl">
              <div className="py-10 px-9 flex flex-col items-center justify-center">
                <svg
                  className="w-16 h-10 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <h3 className="mt-8 text-3xl">Modern Design</h3>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white shadow-xl rounded-xl">
              <div className="py-10 px-9 flex flex-col items-center justify-center">
                <svg
                  className="w-16 h-10 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Professional Services
                </h3>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white shadow-xl rounded-xl">
              <div className="py-10 px-9 flex flex-col items-center justify-center">
                <svg
                  className="w-16 h-10 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  High Quality
                </h3>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-64">
          <div className="flex flex-col gap-y-3 items-center">
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="font-heading text-center"
            >
              Our Services
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-lg text-center lg:w-[50%]"
            >
              General constructions which include designing and constructing
              buildings, residential neighborhoods, hotels, resorts, commercial
              and administrative building; in addition, finishing works and
              infrastructure.
            </p>
          </div>
          <div className="my-10">
            <ServicesCard />
          </div>
          <div className="flex flex-col lg:px-32 my-32 gap-y-36">
            {Services.map((services, index) => (
              <div
                key={services.id}
                className={`flex flex-col lg:flex-row ${
                  index === Services.length - 1
                    ? "lg:flex-row-reverse gap-x-20"
                    : ""
                } ${index === 1 ? "gap-x-20 gap-y-10 items-start lg:flex-row-reverse" : ""}`}
              >
                <div className="self-center lg:w-[60%]">
                  <span
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="text-[10rem] text-[#2f2f2f20] lg:-ml-10 -mb-10 font-sans font-semibold tracking-wider"
                  >
                    {services.num}
                  </span>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="pb-6"
                  >
                    <h1 className="text-6xl">{services.title}</h1>
                  </div>
                  <div
                    className={`flex flex-col font-inter ${index === 1 ? "gap-y-10" : ""}`}
                  >
                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl tracking-wider leading-9">
                        {services.works1}
                      </h3>
                      <p className="text-lg mt-2">{services.kindOfWorks1}</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl tracking-wider leading-9">
                        {services.works2}
                      </h3>
                      <p className="text-lg mt-2">{services.kindOfWorks2}</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl tracking-wider leading-9">
                        {services.works3}
                      </h3>
                      <p className="text-lg mt-2">{services.kindOfWorks3}</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl tracking-wider leading-9">
                        {services.works4}
                      </h3>
                      <p className="text-lg mt-2">{services.kindOfWorks4}</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl tracking-wider leading-9">
                        {services.works5}
                      </h3>
                      <p className="text-lg mt-2">{services.kindOfWorks5}</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl tracking-wider leading-9">
                        {services.works6}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="800"
                  className="lg:w-[40%] w-[100%] h-[70vh] top-10 sticky"
                >
                  <Image
                    src={services.img2}
                    alt={services.title}
                    width={1000}
                    height={1000}
                    className="img rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};
export default OurServices;
