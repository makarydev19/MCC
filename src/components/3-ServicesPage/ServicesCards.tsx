import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const ServicesCards = () => {
  return (
    <>
      <div className="flex flex-col gap-y-3 items-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="font-heading text-center dark:text-[whitesmoke]"
        >
          Our Services
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-lg text-center lg:w-[50%] dark:text-gray-100"
        >
          General constructions which include designing and constructing
          buildings, residential neighborhoods, hotels, resorts, commercial and
          administrative building; in addition, finishing works and
          infrastructure.
        </p>
      </div>
      <div className="my-10">
        <ServicesCard />
      </div>
    </>
  );
};

export default ServicesCards;
