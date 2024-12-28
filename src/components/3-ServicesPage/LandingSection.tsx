import Image from 'next/image';
import React from 'react';
import { ContainerScroll } from '../ui/container-scroll-animation';
import { Spotlight } from '../ui/Spotlight';
import WordPullUp from '../ui/word-pull-up';

const LandingSection = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-full rounded-md flex md:items-center md:justify-center antialiased dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-900 bg-zinc-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Spotlight className="top-40 left-0 md:left-60 md:-top-20" fill="red" />
        <Spotlight className="top-50 left-0 md:left-100 md:top-20" fill="red" />

        <ContainerScroll
          titleComponent={
            <>
              <h1 className="lg:text-4xl text-xl font-semibold text-black dark:text-white">
                Building the future with
              </h1>
              <WordPullUp
                className="text-5xl md:text-[7rem] font-bold mt-1 leading-none"
                words="Comprehensive Construction Solutions"
              />
            </>
          }
        >
          <div className="overflow-hidden">
            <Image
              width={4000}
              height={4000}
              src={'/Porto-October/IMG_00449.JPG'}
              alt={'img'}
              className="img"
              loading="eager"
            />
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
};

export default LandingSection;
