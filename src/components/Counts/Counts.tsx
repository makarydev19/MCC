'use client'

import CountUp from "react-countup";

const Counts = () => {
  return (
    <div className="flex w-[95%] items-center justify-center flex-wrap-reverse md:gap-x-5 mx-auto gap-y-2 gap-x-3 md:-mt-40 -mt-64">
      <div
        data-aos="fade-up"
        className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-36 h-36 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-xl"
      >
        <div className="z-20 flex flex-col justify-center items-center">
          <div className="flex gap-x-1">
            <CountUp
              start={0}
              end={20}
              duration={3}
              className="font-bold text-5xl ml-2"
            />
            <span className="text-5xl">+</span>
          </div>
          <p className="font-bold text-2xl">Projects</p>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-36 h-36 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-xl"
      >
        <div className="z-20 flex flex-col justify-center items-center">
          <div className="flex gap-x-1">
            <CountUp
              start={0}
              end={15}
              duration={3}
              className="font-bold text-5xl ml-2"
            />
            <span className="text-5xl">+</span>
          </div>
          <p className="font-bold text-2xl">Clients</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-36 h-36 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-xl"
      >
        <div className="z-20 flex flex-col justify-center items-center">
          <div className="flex gap-x-1">
            <CountUp
              start={0}
              end={100}
              duration={3}
              className="font-bold text-5xl ml-2"
            />
            <span className="text-5xl">+</span>
          </div>
          <p className="font-bold text-2xl">Employees</p>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-36 h-36 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-xl"
      >
        <div className="z-20 flex flex-col justify-center items-center">
          <div className="flex gap-x-1">
            <CountUp
              start={0}
              end={10}
              duration={3}
              className="font-bold text-5xl ml-2"
            />
            <span className="text-5xl">+</span>
          </div>
          <p className="font-bold text-2xl">Cities</p>
        </div>
      </div>
    </div>
  );
};

export default Counts;
