'use client';

import { Image as ImageType } from '@/models/project';
import { CoverImage } from '@/models/project';
import { FC, useState } from 'react';
import Image from 'next/image';
import { MdCancel } from 'react-icons/md';
import BoxReveal from '../ui/box-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow } from 'swiper/modules';

const ProjectPhotoGallery: FC<{
  photos: ImageType[];
  coverImage: CoverImage;
}> = ({ photos, coverImage }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
                  initialSlide={1}
                  coverflowEffect={coverflowEffectConfig}
                  centeredSlides={true}
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
                          unoptimized
                          className="object-cover"
                        />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectPhotoGallery;
