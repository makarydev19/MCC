'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Parallax } from 'swiper/modules';
import Image from 'next/image';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { HomeBackgrounds } from '@/Data/Data';

const LandingSection = () => {
  return (
    <section className="h-[100vh] relative">
      <Swiper
        loop={true}
        speed={1000}
        parallax={true}
        watchSlidesProgress={true} // Ensures Swiper tracks slide loading progress
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Autoplay]}
        className="mySwiper"
      >
        {HomeBackgrounds.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-[100vh]">
              {/* Image */}
              <Image
                src={image.image}
                alt={image.image}
                layout="fill"
                objectFit="cover"
                className="img"
                loading="eager"
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
          words={
            'From concept to completion, We craft your dreams into existence...'
          }
        />
      </div>
    </section>
  );
};

export default LandingSection;
