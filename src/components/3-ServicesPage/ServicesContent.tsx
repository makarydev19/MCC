import React from 'react';
import Image from 'next/image';
import { Services } from '@/data/data';

const ServicesContent = () => {
  return (
    <div className="flex flex-col lg:px-32 my-32 gap-y-36">
      {Services.map((services, index) => (
        <div
          key={services.id}
          className={`flex flex-col lg:flex-row ${
            index === Services.length - 1 ? 'lg:flex-row-reverse gap-x-20' : ''
          } ${index === 1 ? 'gap-x-20 gap-y-10 items-start lg:flex-row-reverse' : ''}`}
        >
          <div className="self-center lg:w-[60%]">
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-[10rem] text-[#2f2f2f20] dark:text-zinc-900 lg:-ml-10 -mb-10 font-sans font-semibold tracking-wider"
            >
              {services.num}
            </span>
            <div data-aos="fade-up" data-aos-duration="800" className="pb-6">
              <h1 className="text-6xl">{services.title}</h1>
            </div>
            <div
              className={`flex flex-col font-inter ${index === 1 ? 'gap-y-10' : ''}`}
            >
              <div data-aos="fade-up" data-aos-duration="800">
                <h3 className="text-2xl leading-9 dark:text-gray-100">
                  {services.works1}
                </h3>
                <p className="text-lg mt-2 dark:text-gray-300">
                  {services.kindOfWorks1}
                </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="800">
                <h3 className="text-2xl leading-9 dark:text-gray-100">
                  {services.works2}
                </h3>
                <p className="text-lg mt-2 dark:text-gray-300">
                  {services.kindOfWorks2}
                </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="800">
                <h3 className="text-2xl leading-9 dark:text-gray-100">
                  {services.works3}
                </h3>
                <p className="text-lg mt-2 dark:text-gray-300">
                  {services.kindOfWorks3}
                </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="800">
                <h3 className="text-2xl leading-9 dark:text-gray-100">
                  {services.works4}
                </h3>
                <p className="text-lg mt-2 dark:text-gray-300">
                  {services.kindOfWorks4}
                </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="800">
                <h3 className="text-2xl leading-9 dark:text-gray-100">
                  {services.works5}
                </h3>
                <p className="text-lg mt-2 dark:text-gray-300">
                  {services.kindOfWorks5}
                </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="800">
                <h3 className="text-2xl leading-9 dark:text-gray-100">
                  {services.works6}
                </h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:w-[40%] w-[100%] h-[70vh] top-28 sticky"
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
  );
};

export default ServicesContent;
