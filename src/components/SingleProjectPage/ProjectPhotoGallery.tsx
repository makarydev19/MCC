'use client';

import { Image as ImageType } from '@/models/project';
import { CoverImage } from '@/models/project';

import { FC, useState } from 'react';
import Image from 'next/image';
import { MdCancel } from 'react-icons/md';
import BoxReveal from '../ui/box-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Pagination, EffectCoverflow } from 'swiper/modules';

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
    rotate: 20, // Rotation of slides along the Y-axis
    stretch: 0, // Space between slides
    depth: 100, // Depth offset in 3D space
    modifier: 1, // Effect multipler
    slideShadows: true, // Enables slide shadows
  };

  return (
    <div className="mx-auto">
      <div className="relative flex items-center justify-center">
        <div className="relative lg:rounded-b-2xl rounded-b-2xl overflow-hidden">
          <BoxReveal duration={0.5}>
            <div className="w-screen md:w- lg:h-[70vh] mx-auto md:h-[50vh] h-[70vh] shadow-xl">
              <Image
                src={coverImage.url}
                alt={`Project Photo`}
                className="img scale-animation cursor-pointer"
                width={2000}
                height={2000}
                onClick={openModal.bind(this, 0)}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
            </div>
          </BoxReveal>
        </div>

        <div className="absolute lg:left-[59%] md:left-[50%] lg:top-[70%] top-[90%]">
          {remainingPhotosCount > 0 && (
            <BoxReveal duration={0.5}>
              <div
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
              </div>
            </BoxReveal>
          )}
        </div>

        {showModal && (
          <div className="fixed left-0 top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[100000000]">
            <div className="h-fit w-[600px] md:w-screen relative">
              <button
                title="Close Modal"
                onClick={closeModal}
                className="absolute lg:top-0 -top-20 lg:right-20 right-32 text-white text-lg z-[1000000]"
              >
                <MdCancel className="font-medium text-2xl text-tertiary-dark" />
              </button>
              <Swiper
                effect="coverflow"
                initialSlide={1}
                coverflowEffect={coverflowEffectConfig}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides
                breakpoints={{
                  320: { slidesPerView: 2, spaceBetween: 10 },
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                  1280: { slidesPerView: 4, spaceBetween: 25 },
                }}
                modules={[EffectCoverflow]}
                className="h-full"
              >
                {photos.map((photo, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center"
                  >
                    <BoxReveal duration={0.5}>
                      <Image
                        src={photo.url}
                        alt={`Photo ${index + 1}`}
                        width={3000}
                        height={3000}
                        className="img rounded-xl"
                      />
                    </BoxReveal>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPhotoGallery;
