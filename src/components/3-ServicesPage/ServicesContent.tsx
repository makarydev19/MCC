import React from 'react';
import Image from 'next/image';
import { Services } from '@/Data/Data';

const ServiceDetails = ({ works, index }: { works: any[]; index: number }) => (
  <div className={`flex flex-col pb-5 ${index === 1 ? 'gap-y-10' : ''}`}>
    {works.map((work, i) => (
      <div key={i} data-aos="fade-up" data-aos-duration="800">
        <h3 className="text-2xl leading-9 dark:text-gray-100">{work.title}</h3>
        {work.description && (
          <p className="text-lg mt-2 dark:text-gray-300">{work.description}</p>
        )}
      </div>
    ))}
  </div>
);

const ServicesContent = () => {
  return (
    <div className="flex flex-col lg:px-32 my-32 gap-y-36">
      {Services.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col lg:flex-row ${
            index === Services.length - 1 ? 'lg:flex-row-reverse gap-x-20' : ''
          } ${index === 1 ? 'gap-x-20 gap-y-10 items-start lg:flex-row-reverse' : ''}`}
        >
          {/* Text content */}
          <div className="self-center lg:w-[60%]">
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-[10rem] text-[#2f2f2f20] dark:text-zinc-900 lg:-ml-10 -mb-10 font-sans font-semibold tracking-wider"
            >
              {service.num}
            </span>
            <div data-aos="fade-up" data-aos-duration="800" className="pb-6">
              <h1 className="text-6xl">{service.title}</h1>
            </div>

            {/* Service works */}
            <ServiceDetails works={service.works} index={index} />
          </div>

          {/* Image */}
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
              className="img rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesContent;
