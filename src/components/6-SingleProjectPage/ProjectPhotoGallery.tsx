'use client';

import { Image as ImageType } from '@/models/project';
import { CoverImage } from '@/models/project';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { MdCancel } from 'react-icons/md';
import BoxReveal from '../ui/box-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

SwiperCore.use([Navigation]);

const ProjectPhotoGallery: FC<{
  photos: ImageType[];
  coverImage: CoverImage;
}> = ({ photos, coverImage }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  const openModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const maximiumVisiblePhotos = 1;
  const totalPhotos = photos.length;
  const remainingPhotosCount = totalPhotos - maximiumVisiblePhotos;

  const coverflowEffectConfig = {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!showModal || !swiperInstance) return;
      if (e.key === 'ArrowLeft') {
        swiperInstance.slidePrev(); // Move to previous slide
      } else if (e.key === 'ArrowRight') {
        swiperInstance.slideNext(); // Move to next slide
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [showModal, swiperInstance]);

  // Modal Background Animation
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  // Image Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5 } },
  };

  return (
    <div className="mx-auto">
      <div className="relative flex items-center justify-center">
        <div className="relative lg:rounded-b-2xl rounded-b-2xl overflow-hidden">
          <BoxReveal duration={0.5}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="w-screen md:w- lg:h-[70vh] mx-auto md:h-[50vh] h-[70vh] shadow-xl"
            >
              <Image
                src={coverImage.url}
                alt={`Project Photo`}
                className="img scale-animation cursor-pointer"
                width={2000}
                height={2000}
                onClick={openModal.bind(this, 0)}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
            </motion.div>
          </BoxReveal>
        </div>

        <div className="absolute lg:left-[59%] md:left-[50%] lg:top-[70%] top-[90%]">
          {remainingPhotosCount > 0 && (
            <BoxReveal duration={0.5}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                className="cursor-pointer relative lg:h-64 h-40 lg:w-[30rem] w-[20rem] rounded-2xl overflow-hidden shadow-xl shadow-black dark:shadow-white/5"
                onClick={openModal.bind(this, maximiumVisiblePhotos)}
              >
                <Image
                  width={2000}
                  height={2000}
                  src={photos[maximiumVisiblePhotos - 1].url}
                  alt={`Project Photo ${maximiumVisiblePhotos}`}
                  className="img"
                  loading="eager"
                />
                <div className="absolute cursor-pointer text-white inset-0 flex justify-center items-center text-2xl bg-[rgba(0,0,0,0.5)]">
                  + {remainingPhotosCount}
                </div>
              </motion.div>
            </BoxReveal>
          )}
        </div>

        {/* Modal with Enter and Exit Animations */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              key="modal"
              className="fixed left-0 top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[100000000]"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              <button
                title="Close Modal"
                onClick={closeModal}
                className="absolute lg:bottom-10 bottom-44 text-white text-lg z-[1000000]"
              >
                <MdCancel className="font-medium text-2xl text-tertiary-dark" />
              </button>
              <div className="w-screen relative">
                <Swiper
                  effect="coverflow"
                  onSwiper={setSwiperInstance} // Capture Swiper instance
                  watchSlidesProgress
                  coverflowEffect={coverflowEffectConfig}
                  centeredSlides
                  keyboard={{ enabled: true }} // Enable keyboard control
                  navigation={{
                    nextEl: '.custom-next', // Custom next button
                    prevEl: '.custom-prev', // Custom prev button
                  }}
                  breakpoints={{
                    320: { slidesPerView: 1.2, spaceBetween: 20 },
                    640: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 2, spaceBetween: 40 },
                    1280: { slidesPerView: 2, spaceBetween: 50 },
                  }}
                  modules={[EffectCoverflow]}
                  className="h-full"
                >
                  {photos.map((photo, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={imageVariants}
                        className="relative aspect-[3/2] overflow-hidden rounded-xl"
                      >
                        <Image
                          src={photo.url}
                          alt={`Photo ${index + 1}`}
                          fill
                          className="object-cover"
                          loading="eager"
                        />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="absolute -bottom-20 left-0 right-0 flex justify-evenly space-x-36 z-50">
                  <button
                    className="custom-prev bg-gray-100 text-black rounded-full p-3 hover:bg-gray-800 hover:text-white"
                    aria-label="Previous Slide"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="custom-next bg-gray-100 text-black rounded-full p-3 hover:bg-gray-800 hover:text-white"
                    aria-label="Next Slide"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectPhotoGallery;
