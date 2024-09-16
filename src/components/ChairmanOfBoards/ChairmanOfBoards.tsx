"use client";

import Aos from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useAOS from "@/hooks/useAOS";

const ChairmanOfBoards = () => {
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
    <section className="lg:px-32 md:px-20 px-0 py-20">
      <div className="flex flex-col justify-center items-center gap-y-3">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center font-heading dark:text-[whitesmoke]"
        >
          Chairman Of Boards
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          className="font-title dark:text-[#f5f5f5b1] px-10"
        >
          Building trust and excellence from the foundation up
        </p>
        {/* <hr className="underline w-[50%] absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 bg-[#1a1a1a70] " /> */}
      </div>
      <div className="flex flex-col lg:gap-y-32 gap-y-12">
        <div className="flex lg:flex-nowrap flex-wrap px-2 mt-20 lg:gap-y-0 gap-y-8 w-full h-full items-center">
          <div
            className="lg:w-[55%] mx-4 w-full lg:h-96 h-60 overflow-hidden rounded-xl dark:block z-10"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <Image
              alt=""
              src={"/portrait-engineers-work-hours-job-site.jpg"}
              width={500}
              height={500}
              className="img scale-animation"
            />
          </div>
          <div
            className="lg:w-[45%] lg:m-0 p-5 backdrop-blur-custom2 shadow-2xl rounded-lg lg:absolute lg:left-[40%] -mt-36 z-50"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <ul>
              <li className="font-normal tracking-widest first-line:text-3xl first-letter:text-5xl first-line:font-medium">
                Key to our success <br />
                is building long term relationships.Our aim is to achieve this
                with our clients’ by consistently delivering exceptional results
                that are on time and within budget reflecting the needs of our
                clients and end users.This achievement to date is the result of
                our highly dedicated and experienced project team. our approach
                allows for the project team you start with to be the team that
                celebrates with you the successful completion of the project.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap-reverse lg:flex-nowrap px-2 lg:gap-y-0 gap-y-8 w-full h-full items-center">
          <div
            className="lg:w-[55%] lg:m-0 p-5 backdrop-blur-custom2 shadow-2xl rounded-lg z-50 -mt-28"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <ul>
              <li className="font-normal tracking-widest lg:first-line:text-3xl first-letter:text-5xl first-line:text-xl first-line:font-medium">
                We have a long term vision <br /> We are passionate about
                fostering a strong, sustainable and pro table growth through
                which every individual has an opportunity to attain quality of
                life. To make our vision a reality, it is our responsibility to
                look after our clients, end users, employees and the
                environment. project.
              </li>
            </ul>
          </div>
          <div
            className="lg:w-[45%] w-full mx-4 lg:h-72 h-52 overflow-hidden rounded-xl lg:absolute lg:left-[40%] z-10"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Image
              alt=""
              src={"/logo_make_11_06_2023_145.jpg"}
              width={500}
              height={500}
              className="img scale-animation"
            />
          </div>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap px-2 lg:gap-y-0 gap-y-8 w-full h-full items-center">
          <div
            className="lg:w-[55%] mx-4 w-full lg:h-60 h-40 overflow-hidden rounded-xl z-10"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <Image
              alt=""
              src={"/pexels-rquiros-2219024.jpg"}
              width={500}
              height={500}
              className="img scale-animation"
            />
          </div>
          <div
            className="lg:w-[45%] lg:m-0 p-5  backdrop-blur-custom2 shadow-2xl rounded-lg lg:absolute lg:left-[40%] -mt-24 z-50"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <ul>
              <li className="font-normal tracking-widest first-line:text-3xl first-letter:text-5xl first-line:font-medium">
                Through this site
                <br />I am a pleasure to introduce our business and history
                since we establish this company in 1998. Thanks to all our
                clients, our staff and suppliers which they help us to achieve
                our goals and keep success.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanOfBoards;
