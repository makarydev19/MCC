import React from 'react';
import BoxReveal from '../ui/box-reveal';
import Image from 'next/image';
import { BlurFade } from '../ui/blur-fade';

const ContentSection = () => {
  return (
    <>
      <section className="lg:px-20 px-0 lg:pt-44 py-10">
        <section className="pb-24 sm:pb-16 lg:pb-14">
          <div className="w-full px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div>
                <BlurFade delay={0.25} inView>
                  <h2 className="text-lg font-sans font-medium text-secondary uppercase">
                    Chairman Of Boards
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-[whitesmoke] sm:text-4xl lg:text-5xl">
                    Key to our success,
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 3} inView>
                  <p className="mt-4 lg:text-xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    is building long term relationships. Our aim is to achieve
                    this with our clients’ by consistently delivering
                    exceptional results that are on time and within budget
                    reflecting the needs of our clients and end users.This
                    achievement to date is the result of our highly dedicated
                    and experienced project team. our approach allows for the
                    project team you start with to be the team that celebrates
                    with you the successful completion of the project.
                  </p>
                </BlurFade>
              </div>

              <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative z-10 lg:w-[50%] w-full max-w-xs mt-4 mb-10 ml-auto">
                  <BoxReveal duration={0.5}>
                    <Image
                      width={200}
                      height={200}
                      className="rounded-2xl"
                      src="/Eng-Magdy.png"
                      alt="Eng.Magdy"
                      loading="eager"
                    />
                  </BoxReveal>
                  <div className="absolute -bottom-28 -left-16">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="800"
                      className="backdrop-blur-custom z-20 relative rounded-2xl"
                    >
                      <div className="px-8 py-10">
                        <span className="block text-xl font-bold text-black dark:text-white lg:text-2xl">
                          General Director
                        </span>
                        <span className="block mt-2 text-lg leading-snug text-black dark:text-white">
                          {' '}
                          Magdy Shaker Gabra
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 sm:py-16 lg:pb-14">
          <div className="px-4 mx-auto max-w-full">
            <div className="lg:grid flex flex-wrap-reverse items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
              <div className="relative lg:mb-12">
                <Image
                  className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                  width={100}
                  height={100}
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                  alt=""
                  loading="eager"
                />
                <BoxReveal duration={0.5}>
                  <div>
                    <Image
                      width={900}
                      height={900}
                      className="img relative rounded-2xl"
                      src="/Porto-October/20180203_132117.jpg"
                      alt=""
                      loading="eager"
                    />
                  </div>
                </BoxReveal>
                <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                  <div className="max-w-xs backdrop-blur-3xl rounded-lg sm:max-w-md xl:max-w-md">
                    <BoxReveal duration={0.5}>
                      <div className="px-3 py-4 sm:px-5 sm:py-8">
                        <div className="flex items-start">
                          <blockquote className="ml-5">
                            <p className="text-sm font-medium text-white sm:text-lg">
                              “You made it so simple. My new site is so much
                              faster and easier to work with than my old site.”
                            </p>
                          </blockquote>
                        </div>
                      </div>
                    </BoxReveal>
                  </div>
                </div>
              </div>

              <div className="2xl:pl-16">
                <BlurFade delay={0.25} inView>
                  <h2 className="text-lg font-sans font-medium text-secondary uppercase">
                    Our Vision
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-[whitesmoke] sm:text-4xl lg:text-5xl lg:leading-tight">
                    To be <span className="text-secondary">"the"</span>{' '}
                    contractor of your choice.
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 3} inView>
                  <p className="mt-4 text-xl leading-relaxed text-gray-900 dark:text-gray-400">
                    {/* A company that our customers want to work with and our
                    employees are proud to work for. */}
                  </p>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 sm:py-16 lg:pb-14">
          <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-end grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div>
                <BlurFade delay={0.25} inView>
                  <h2 className="text-lg font-sans font-medium text-secondary uppercase">
                    Our Mission
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-[whitesmoke] sm:text-4xl lg:text-5xl">
                    To achieve customer satisfaction,
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 3} inView>
                  <p className="mt-4 text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                    maintain the highest levels of professionalism, honesty, and
                    fairness with all our relative stakeholders; in addition to,
                    growing continually through providing sustainable products,
                    services, and solutions to markets we serve.
                  </p>
                </BlurFade>
              </div>

              <div className="relative">
                <div className="relative lg:justify-self-end justify-self-center">
                  <BoxReveal duration={0.5}>
                    <Image
                      width={510}
                      height={510}
                      className="aspect-video img rounded-2xl"
                      src="/IMG-20211024-WA0014.jpg"
                      alt="img"
                      loading="eager"
                    />
                  </BoxReveal>
                  {/* <div className="absolute -bottom-10 -left-16">
                    <BoxReveal duration={0.5}>
                      <div className="bg-red-300 rounded-2xl">
                        <div className="px-8 py-10">
                          <span className="block text-4xl font-bold text-black lg:text-5xl">
                            {' '}
                            53%{' '}
                          </span>
                          <span className="block mt-2 text-base leading-tight text-black">
                            {' '}
                            High Conversions
                            <br />
                            Everything{' '}
                          </span>
                        </div>
                      </div>
                    </BoxReveal>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ContentSection;
