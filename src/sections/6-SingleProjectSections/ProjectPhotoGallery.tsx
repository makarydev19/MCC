'use client';

import { Image as ImageType } from '@/models/project';
import { CoverImage } from '@/models/project';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import { EffectCoverflow, Keyboard, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import {
  IconArrowLeft,
  IconArrowRight,
  IconMapPin,
  IconPhoto,
  IconX,
} from '@tabler/icons-react';
import { EASE_OUT, WordsReveal } from '@/components/ui/reveal';

const VISIBLE_THUMBS = 4;

const ProjectPhotoGallery: FC<{
  photos: ImageType[];
  coverImage: CoverImage;
  title?: string;
  sector?: string;
  location?: string;
}> = ({ photos = [], coverImage, title, sector, location }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  const openModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const thumbs = photos.slice(0, VISIBLE_THUMBS);
  const remaining = photos.length - VISIBLE_THUMBS;

  // Keyboard: arrows navigate, Escape closes; lock page scroll while open
  useEffect(() => {
    if (!showModal) return;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (!swiperInstance) return;
      if (e.key === 'ArrowLeft') swiperInstance.slidePrev();
      if (e.key === 'ArrowRight') swiperInstance.slideNext();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeydown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [showModal, swiperInstance]);

  return (
    <>
      {/* Cover hero */}
      <section className="p-2 sm:p-3">
        <div className="relative isolate flex min-h-[78svh] items-end overflow-hidden rounded-[1.25rem] bg-ink sm:rounded-[1.75rem] lg:min-h-[680px]">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: EASE_OUT }}
            className="absolute inset-0 -z-10"
          >
            <Image
              src={coverImage.url}
              alt={title ?? 'Project photo'}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-ink via-ink/60 to-ink/10" />

          <div className="container-x flex flex-col gap-8 pb-10 pt-36 md:pb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex items-center gap-2 text-sm font-medium text-white/60"
              >
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </nav>
              {(sector || location) && (
                <p className="eyebrow mb-5 text-white">
                  {[sector, location].filter(Boolean).join(' · ')}
                </p>
              )}
              {title && (
                <h1 className="h-display max-w-4xl text-[2.75rem] text-white sm:text-6xl lg:text-[5rem]">
                  <WordsReveal text={title} delay={0.2} />
                </h1>
              )}
            </div>
            {photos.length > 0 && (
              <button
                type="button"
                onClick={() => openModal(0)}
                className="btn-ghost-light w-fit backdrop-blur-sm"
              >
                <IconPhoto />
                View gallery ({photos.length})
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Thumbnail strip */}
      {thumbs.length > 0 && (
        <div className="container-x mt-3 grid grid-cols-2 gap-3 sm:mt-4 md:grid-cols-4">
          {thumbs.map((photo, i) => {
            const isLast = i === thumbs.length - 1 && remaining > 0;
            return (
              <motion.button
                key={photo._key ?? photo.url}
                type="button"
                onClick={() => openModal(i)}
                aria-label={`Open photo ${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: EASE_OUT }}
                className="group relative aspect-[5/3] overflow-hidden rounded-2xl bg-muted"
              >
                <Image
                  src={photo.url}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {isLast && (
                  <span className="absolute inset-0 grid place-items-center bg-ink/60 font-display text-xl font-bold text-white backdrop-blur-[2px] transition-colors group-hover:bg-ink/70">
                    + {remaining} photos
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Project gallery"
            className="fixed inset-0 z-[100000000] flex flex-col justify-center bg-ink/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-white">
              <p className="font-display text-sm font-bold tracking-[0.1em]">
                {String(currentPhotoIndex + 1).padStart(2, '0')}
                <span className="text-white/50">
                  {' '}
                  / {String(photos.length).padStart(2, '0')}
                </span>
              </p>
              <button
                type="button"
                aria-label="Close gallery"
                onClick={closeModal}
                className="grid size-11 place-items-center rounded-xl border border-white/20 hover:bg-white/10"
              >
                <IconX size={22} />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              className="w-screen"
            >
              <Swiper
                observer
                observeParents
                effect="coverflow"
                initialSlide={currentPhotoIndex}
                onSwiper={setSwiperInstance}
                onSlideChange={(s) => setCurrentPhotoIndex(s.activeIndex)}
                watchSlidesProgress
                coverflowEffect={{
                  rotate: 20,
                  stretch: 0,
                  depth: 120,
                  modifier: 1,
                  slideShadows: false,
                }}
                centeredSlides
                keyboard={{ enabled: true }}
                navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
                breakpoints={{
                  320: { slidesPerView: 1.15, spaceBetween: 16 },
                  640: { slidesPerView: 1.6, spaceBetween: 24 },
                  1024: { slidesPerView: 1.8, spaceBetween: 40 },
                }}
                modules={[EffectCoverflow, Navigation, Keyboard]}
              >
                {photos.map((photo, index) => (
                  <SwiperSlide key={photo._key ?? index}>
                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/5">
                      <Image
                        src={photo.url}
                        alt={`Photo ${index + 1}`}
                        fill
                        sizes="(min-width: 1024px) 55vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            <div className="mt-8 flex justify-center gap-3">
              <button
                className="custom-prev grid size-12 place-items-center rounded-full bg-white text-ink transition-colors hover:bg-brand hover:text-white"
                aria-label="Previous photo"
              >
                <IconArrowLeft size={20} />
              </button>
              <button
                className="custom-next grid size-12 place-items-center rounded-full bg-white text-ink transition-colors hover:bg-brand hover:text-white"
                aria-label="Next photo"
              >
                <IconArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectPhotoGallery;
