'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Parallax } from 'swiper/modules';
import Image from 'next/image';
import { TextGenerateEffect } from '../../components/ui/text-generate-effect';
import { HomeBackgrounds } from '@/Data/Data';
import { motion } from 'framer-motion';

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
        {HomeBackgrounds.map((image, index) => (
          <SwiperSlide key={index}>
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
      <div className="absolute lg:w-[90%] inset-0 z-20 flex flex-col items-start justify-end text-white lg:px-24 px-5 lg:py-20 pb-32">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          <p className="lg:text-2xl text-xl">We build your dreams</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          <TextGenerateEffect
            className="uppercase lg:text-6xl text-4xl text-left"
            words={
              'From concept to completion, We craft your dreams into existence...'
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LandingSection;
