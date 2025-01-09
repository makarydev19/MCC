import React from 'react';
import Image from 'next/image';
import { Services } from '@/Data/Data';

const ServicesContent = () => {
  return (
    <div className="flex flex-col lg:px-32 my-32 gap-y-36">
      {Services.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col lg:flex-row gap-x-20 gap-y-10  ${index === 1 || index === 3 ? 'items-start lg:flex-row-reverse' : ''}`}
        >
          <div className="self-center lg:w-[60%]">
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-[10rem] text-[#2f2f2f20] dark:text-zinc-800 lg:-ml-10 -mb-10 font-sans font-semibold tracking-wider"
            >
              {service.num}
            </span>
            <div data-aos="fade-up" data-aos-duration="800" className="pb-6">
              <h1 className="text-6xl">{service.title}</h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="lg:w-[95%] w-full"
            >
              <h2 className="lg:text-lg text-base text-black/90 dark:text-white/60 leading-2">
                {service.works}
              </h2>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:w-[40%] w-[100%] h-[70vh] top-28 sticky"
          >
            <Image
              src={service.img2}
              alt={service.title}
              width={1000}
              height={1000}
              className="img shadow-2xl dark:shadow-white/10 rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesContent;
