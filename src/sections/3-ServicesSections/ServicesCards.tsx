import React from 'react';
import ServicesCard from '@/components/Cards/ServicesCard';

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
      </div>
      <div className="my-10">
        <ServicesCard />
      </div>
    </>
  );
};

export default ServicesCards;
