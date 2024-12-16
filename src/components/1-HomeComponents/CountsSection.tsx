'use client';

import { CountsBox } from '@/data/data';
import CountUp from 'react-countup';

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
          className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-36 h-36 flex text-text flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-xl"
        >
          <div className="z-20 flex flex-col justify-center items-center">
            <div className="flex gap-x-1">
              <CountUp
                start={0}
                end={counts.num}
                duration={3}
                className="font-bold text-4xl ml-2 font-sans"
              />
              <span className="text-3xl font-sans font-extrabold">+</span>
            </div>
            <p className="font-bold text-2xl font-mono">{counts.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountsSection;
