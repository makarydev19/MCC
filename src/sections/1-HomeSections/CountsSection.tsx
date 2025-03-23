'use client';

import CountUp from 'react-countup';
import { CountsBox } from '@/Data/Data';
import { FaPlus } from 'react-icons/fa6';

const CountsSection = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="flex w-[95%] items-center justify-center flex-wrap md:gap-x-5 mx-auto gap-y-2 gap-x-3"
    >
      {CountsBox.map((counts) => (
        <div
          key={counts.id}
          className="hover:-translate-y-1 group bg-LightModeBG shadow-xl dark:shadow-white/10 dark:shadow-lg dark:bg-DarkModeBG duration-500 w-36 h-32 flex dark:text-white text-text flex-col justify-center items-center relative rounded-3xl overflow-hidden"
        >
          <div className="z-20 flex flex-col justify-center items-center">
            <div className="flex gap-x-1">
              <CountUp
                start={0}
                end={counts.num}
                duration={4}
                className="font-bold text-4xl ml-2 font-roboto"
              />
              <span className="flex items-center justify-center text-2xl font-sans font-extrabold">
                <FaPlus />
              </span>
            </div>
            <p className="font-semibold text-2xl font-sans">{counts.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountsSection;
