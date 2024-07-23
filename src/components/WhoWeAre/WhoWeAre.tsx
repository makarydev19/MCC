"use client";

import { useEffect } from "react";
import useAOS from "@/hooks/useAOS"; // Replace with correct path to your useAOS hook

import Image from "next/image";
import Link from "next/link";

const WhoWeAre = () => {
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
    <section className="md:px-32 px-5 py-10">
      <div className="mt-10 lg:m-0">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="text-lg font-sans font-medium text-secondary uppercase"
        >
          Who We Are
        </h2>
        <div className="flex flex-wrap lg:w-full items-end">
          <div className="flex-grow lg:w-5/12 lg:mb-0 mb-10 ">
            <h1
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="text-4xl mt-4"
            >
              For over 20 years, MCC has transformed visions and ideas into
              steel, masonry, and concrete realities.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="mt-8 text-sm rounded-2xl px-4 py-3"
            >
              Our clients represent a broad spectrum of industries and business
              sectors, allowing us the opportunity to apply our extensive
              experience, know-how, and passion for excellence to each specific
              project in order to successfully handle every challenge and
              special circumstance.
            </p>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="mt-5 text-sm rounded-2xl px-4 py-3"
            >
              With a well-respected track record behind us, and a solid outlook
              ahead, we’ve learned that our collaborative experience with a
              variety of projects creates exceptional solutions and results for
              our clients, no matter what they are building.
            </p>
          </div>
          <div className="flex flex-grow lg:w-3/6 justify-end lg:ml-10">
            <div
              className="lg:mt-5 mr-3 overflow-hidden rounded-2xl shadow-2xl lg:h-[65vh] lg:w-[20vw] h-[48vh]"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Image
                src={`/pexels-technobulka-10816119.jpg`}
                alt=""
                width={300}
                height={300}
                className="img scale-animation"
              />
            </div>
            <div
              className="-mt-3"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              <div className="mb-3 shadow-2xl rounded-2xl overflow-hidden lg:size-52 md:size-60 size-40">
                <Image
                  src={`/pexels-matreding-11739070.jpg`}
                  alt=""
                  width={150}
                  height={150}
                  className="scale-animation img"
                />
              </div>
              <div className="shadow-2xl rounded-2xl overflow-hidden lg:h-32 md:h-48 h-32">
                <Image
                  src={`/pexels-pixabay-209272.jpg`}
                  alt=""
                  width={150}
                  height={150}
                  className="img scale-animation"
                />
              </div>
              <div className="absolute bg-bgcolor size-10 rounded-full ml-8 -mt-5 opacity-90"></div>
              <Link href="/aboutUs" className="relative">
                <button
                  className="overflow-hidden relative mt-10 w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
                  data-aos="flip-down"
                >
                  More Info!
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-secondary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    Explore!
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-slate-700 w-[80%]" />
    </section>
  );
};

export default WhoWeAre;
