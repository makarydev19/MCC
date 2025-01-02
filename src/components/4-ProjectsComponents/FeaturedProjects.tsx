import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import Image from 'next/image';
import styles from './FeaturedProjects.module.css';
import { BlurFade } from '../ui/blur-fade';
import { FeaturedProject } from '@/Data/Data';
import { motion } from 'framer-motion';

const FeaturedProjects: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [progress, setProgress] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const handleProgressUpdate = (swiper: any) => {
    const totalSlides = swiper.slides.length;
    const currentIndex = swiper.realIndex + 1;
    setCurrentSlide(currentIndex);
    const newProgress = (currentIndex / totalSlides) * 100;
    setProgress(newProgress);
  };

  return (
    <div className="relative h-[100vh]">
      <div className="absolute lg:bottom-20 bottom-40 lg:w-[50%] w-[20%] lg:left-28 left-6 right-0 z-50">
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
          <h2 className="text-white lg:text-7xl tracking-wide text-5xl font-bold">
            Our Projects
          </h2>
        </motion.div>
      </div>
      <Swiper
        loop={true}
        onSlideChange={handleProgressUpdate}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination, Autoplay]}
        watchSlidesProgress={true} // Ensures Swiper tracks slide loading progress
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={styles.customSwiper}
      >
        {FeaturedProject.map((project, index) => (
          <SwiperSlide key={index} className={`${styles.customSlide} relative`}>
            <Image
              width={1000}
              height={1000}
              src={project.coverImg}
              alt="projectImage"
              className="object-cover w-full h-full"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="bg-gradient-to-t from-zinc-950 to-transparent py-72 lg:px-32 px-8 flex items-start justify-start" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mySwiper lg:h-[20vh] h-[10vh] absolute lg:w-[50vw] w-[90vw] lg:top-[70%] top-[80%] right-0">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={false}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
        >
          {FeaturedProject.map((project, index) => (
            <SwiperSlide key={index} className="thumbs">
              <Image
                width={1000}
                height={1000}
                src={project.coverImg}
                alt="projectImage"
                className="img rounded-xl"
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Progress Bar and Current Slide Number */}
        <div className="absolute left-0 -bottom-12 right-10 z-50 flex items-center">
          {/* Custom Navigation Buttons */}
          <div className="flex items-center mr-4">
            <div className="swiper-button-prev-custom bg-white text-black w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
              &#8592;
            </div>
            <div className="swiper-button-next-custom bg-white text-black w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-2">
              &#8594;
            </div>
          </div>
          <div className="h-[2px] w-96 bg-zinc-400 rounded-full overflow-hidden flex-1">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
