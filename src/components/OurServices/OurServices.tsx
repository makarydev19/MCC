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
      <div className="rounded-b-2xl servicesbg-page h-[60vh]" />
      <section className="lg:px-10 px-5">
        <div className="mt-10 flex flex-col gap-y-3 items-center">
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
                  className={`flex flex-col ${index === 1 ? "gap-y-5" : ""}`}
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
  );
};
export default OurServices;
