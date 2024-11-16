'use client';

import { Services } from '@/data/data';
import ServicesCard from '../ServicesCard/ServicesCard';
import Image from 'next/image';
import useAOS from '@/hooks/useAOS';
import { useEffect } from 'react';
import { ContainerScroll } from '../ui/container-scroll-animation';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Spotlight } from '../ui/Spotlight';
import WordPullUp from '../ui/word-pull-up';
import BlurFade from '../ui/blur-fade';
import BoxReveal from '../ui/box-reveal';

const OurServices = () => {
  const aos = useAOS();

  useEffect(() => {
    aos.refresh(); // Refresh AOS on initial load

    // Refresh AOS on route change in Next.js
    const handleRouteChange = () => {
      aos.refresh();
    };

    // Clean up event listener
    window.addEventListener('routeChangeComplete', handleRouteChange);

    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, [aos]);
  return (
    <section className="pb-20">
      <div className="flex flex-col overflow-hidden">
        <div className="w-full rounded-md flex md:items-center md:justify-center antialiased dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative overflow-hidden">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-DarkModeBG bg-LightModeBG [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Spotlight
            className="top-40 left-0 md:left-60 md:-top-20"
            fill="red"
          />
          <Spotlight
            className="top-50 left-0 md:left-100 md:top-20"
            fill="red"
          />

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
                width={2000}
                height={2000}
                src={'/IMG-20211024-WA0014.jpg'}
                alt={'img'}
                className="img"
              />
            </div>
          </ContainerScroll>
        </div>
      </div>
      <section className="lg:px-1 px-5 lg:-mt-28 md:-mt-[4.6rem] -mt-36 sticky">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-28">
            <div className="max-w-xl mx-auto text-center">
              <BlurFade delay={0.25}>
                <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-red-600">
                  <p className="text-xs font-semibold tracking-widest text-white uppercase">
                    130+ Handcoded Blocks
                  </p>
                </div>
              </BlurFade>
              <BlurFade delay={0.25}>
                <h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-[whitesmoke] sm:text-4xl lg:text-5xl">
                  Celebration helps you build beautiful website
                </h2>
              </BlurFade>
              <BlurFade delay={0.25}>
                <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </BlurFade>
            </div>

            <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
              <BoxReveal boxColor={'whitesmoke'} duration={0.5}>
                <div className="transition-all duration-200 bg-white dark:bg-zinc-900 hover:shadow-xl rounded-xl">
                  <div className="py-10 px-9">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black dark:text-[whitesmoke]">
                      Secured Payments
                    </h3>
                    <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                  </div>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={'whitesmoke'} duration={0.5}>
                <div className="transition-all duration-200 bg-white dark:bg-zinc-900 hover:shadow-xl rounded-xl">
                  <div className="py-10 px-9">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black dark:text-[whitesmoke]">
                      Secured Payments
                    </h3>
                    <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={'whitesmoke'} duration={0.5}>
                <div className="transition-all duration-200 bg-white dark:bg-zinc-900 hover:shadow-xl rounded-xl">
                  <div className="py-10 px-9">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black dark:text-[whitesmoke]">
                      Secured Payments
                    </h3>
                    <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                  </div>
                </div>
              </BoxReveal>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-col gap-y-3 items-center">
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="font-heading text-center dark:text-[whitesmoke]"
            >
              Our Services
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-lg text-center lg:w-[50%] dark:text-gray-100"
            >
              General constructions which include designing and constructing
              buildings, residential neighborhoods, hotels, resorts, commercial
              and administrative building; in addition, finishing works and
              infrastructure.
            </p>
          </div>
          <div className="my-10">
            <ServicesCard />
          </div>
          <div className="flex flex-col lg:px-32 my-32 gap-y-36">
            {Services.map((services, index) => (
              <div
                key={services.id}
                className={`flex flex-col lg:flex-row ${
                  index === Services.length - 1
                    ? 'lg:flex-row-reverse gap-x-20'
                    : ''
                } ${index === 1 ? 'gap-x-20 gap-y-10 items-start lg:flex-row-reverse' : ''}`}
              >
                <div className="self-center lg:w-[60%]">
                  <span
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="text-[10rem] text-[#2f2f2f20] dark:text-zinc-900 lg:-ml-10 -mb-10 font-sans font-semibold tracking-wider"
                  >
                    {services.num}
                  </span>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="pb-6"
                  >
                    <h1 className="text-6xl">{services.title}</h1>
                  </div>
                  <div
                    className={`flex flex-col font-inter ${index === 1 ? 'gap-y-10' : ''}`}
                  >
                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl leading-9 dark:text-gray-100">
                        {services.works1}
                      </h3>
                      <p className="text-lg mt-2 dark:text-gray-300">
                        {services.kindOfWorks1}
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl leading-9 dark:text-gray-100">
                        {services.works2}
                      </h3>
                      <p className="text-lg mt-2 dark:text-gray-300">
                        {services.kindOfWorks2}
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl leading-9 dark:text-gray-100">
                        {services.works3}
                      </h3>
                      <p className="text-lg mt-2 dark:text-gray-300">
                        {services.kindOfWorks3}
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl leading-9 dark:text-gray-100">
                        {services.works4}
                      </h3>
                      <p className="text-lg mt-2 dark:text-gray-300">
                        {services.kindOfWorks4}
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl leading-9 dark:text-gray-100">
                        {services.works5}
                      </h3>
                      <p className="text-lg mt-2 dark:text-gray-300">
                        {services.kindOfWorks5}
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">
                      <h3 className="text-2xl leading-9 dark:text-gray-100">
                        {services.works6}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="800"
                  className="lg:w-[40%] w-[100%] h-[70vh] top-28 sticky"
                >
                  <Image
                    src={services.img2}
                    alt={services.title}
                    width={1000}
                    height={1000}
                    className="img rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};
export default OurServices;
