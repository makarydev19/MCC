'use client';

import { Image as ImageType } from '@/models/project';
import { CoverImage } from '@/models/project';

import { FC, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

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

  const closeMadal = () => {
    setShowModal(false);
  };

  const handlePrevious = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const maximiumVisiblePhotos = 1;
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(1, maximiumVisiblePhotos - 1);
  const remainingPhotosCount = totalPhotos - maximiumVisiblePhotos;

  return (
    <div className="container mx-auto">
      <div className="relative flex items-center justify-center">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="lg:w-[60rem] lg:h-96 w-[30rem] mx-auto h-60 shadow-xl">
            <Image
              src={coverImage.url}
              alt={`Project Photo ${currentPhotoIndex + 1}`}
              className="img scale-animation cursor-pointer"
              width={2000}
              height={2000}
              onClick={openModal.bind(this, 0)}
            />
          </div>

          {/* <div className="md:hidden flex justify-center items-center w-full h-full">
            <Image
              src={photos[currentPhotoIndex].url}
              alt={`Room Photo ${currentPhotoIndex + 1}`}
              className="img"
              width={1000}
              height={1000}
              onClick={openModal.bind(this, 0)}
            />
          </div>
        </div>
        <div className="md:hidden flex justify-between items-center">
          <div className="flex space-x-2">
            <FaArrowLeft className="cursor-pointer" onClick={handlePrevious} />
            <FaArrowRight className="cursor-pointer" onClick={handleNext} />
          </div>
          <span>
            {currentPhotoIndex + 1} / {photos.length}
          </span> */}
        </div>
        <div className="absolute lg:left-[68%] lg:top-[90%] top-[90%]">
          {remainingPhotosCount > 0 && (
            <div
              className="cursor-pointer relative lg:h-64 h-40 lg:w-[30rem] w-[20rem] rounded-2xl overflow-hidden shadow-xl shadow-black"
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
          )}
        </div>

        {showModal && (
          <div className="fixed left-0 top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 ">
            <div className="h-fit lg:h-[80vh] w-[320px] md:w-[1000px] relative mt-10 shadow-xl shadow-black">
              <Image
                src={photos[currentPhotoIndex].url}
                alt={`Room Photo ${currentPhotoIndex + 1}`}
                width={2000}
                height={2000}
                className="img"
              />
              <div className="flex justify-between items-center py-3">
                <div className="flex space-x-2 items-center text-white">
                  <FaArrowLeft
                    className="cursor-pointer"
                    onClick={handlePrevious}
                  />
                  <FaArrowRight
                    className="cursor-pointer"
                    onClick={handleNext}
                  />
                </div>
                <span className="text-white text-sm">
                  {currentPhotoIndex + 1} / {photos.length}
                </span>
              </div>
              <button
                title="btn"
                onClick={closeMadal}
                className="absolute top-2 right-2 text-white text-lg"
              >
                <MdCancel className="font-medium text-2xl text-tertiary-dark" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPhotoGallery;
