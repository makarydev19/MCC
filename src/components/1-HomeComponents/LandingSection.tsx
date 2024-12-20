'use client';

import { Parallax, Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { LandingPageBackgrounds } from '@/data/data';
import Image from 'next/image';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const LandingSection = () => {
  return (
    <section className="h-[100vh] relative">
      {/* Swiper for background images */}
      <Swiper
        loop={true}
        speed={1000}
        parallax={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Autoplay]}
        className="mySwiper"
      >
        {LandingPageBackgrounds.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-[100vh]">
              {/* Image */}
              <Image
                src={image.image}
                alt={image.image}
                layout="fill"
                objectFit="cover"
                className="img"
              />
              {/* Bottom-to-top gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Content - Outside the Swiper for stability */}
      <div className="absolute lg:w-[80%] inset-0 z-20 flex flex-col items-start justify-end text-white lg:px-24 px-5 lg:py-20 py-24">
        <p className="lg:text-2xl text-xl">We build your dreams</p>
        <TextGenerateEffect
          className="uppercase lg:text-6xl text-4xl text-left"
          words={'From concept to completion, we bring your dreams to life'}
        />
      </div>
    </section>
  );
};

export default LandingSection;
