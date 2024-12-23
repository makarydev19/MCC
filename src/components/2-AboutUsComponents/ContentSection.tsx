import React from 'react';
import BoxReveal from '../ui/box-reveal';
import Image from 'next/image';
import { BlurFade } from '../ui/blur-fade';

const ContentSection = () => {
  return (
    <>
      <div className="lg:px-20 px-0 py-20">
        <section className="pb-24 sm:pb-16 lg:pb-24">
          <div className="w-full px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div>
                <BlurFade delay={0.25} inView>
                  <h2 className="text-lg font-sans font-medium text-secondary uppercase">
                    Chairman Of Boards
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25} inView>
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-[whitesmoke] sm:text-4xl lg:text-5xl">
                    Key to our success,
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25} inView>
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
                <div className="relative lg:w-[50%] w-full max-w-xs mt-4 mb-10 ml-auto">
                  <BoxReveal duration={0.5}>
                    <Image
                      width={250}
                      height={250}
                      className="rounded-2xl"
                      src="/Eng-Magdy.png"
                      alt="Eng.Magdy"
                    />
                  </BoxReveal>
                  <div className="absolute -bottom-10 -left-16">
                    <div className="backdrop-blur-custom rounded-2xl">
                      <BoxReveal duration={0.5}>
                        <div className="px-8 py-10">
                          <span className="block text-xl font-bold text-black lg:text-2xl">
                            General Director
                          </span>
                          <span className="block mt-2 text-lg leading-snug text-black">
                            {' '}
                            Magdy Shaker Gabra
                          </span>
                        </div>
                      </BoxReveal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-full">
            <div className="lg:grid flex flex-wrap-reverse items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
              <div className="relative lg:mb-12">
                <Image
                  className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                  width={100}
                  height={100}
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                  alt=""
                />
                <BoxReveal duration={0.5}>
                  <div>
                    <Image
                      width={900}
                      height={900}
                      className="img relative rounded-2xl"
                      src="/Porto-October/20180203_132117.jpg"
                      alt=""
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
                <BlurFade delay={0.25} inView>
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-[whitesmoke] sm:text-4xl lg:text-5xl lg:leading-tight">
                    To be the preferred contractor of choice.
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25} inView>
                  <p className="mt-4 text-xl leading-relaxed text-gray-900 dark:text-gray-400">
                    A company that our customers want to work with and our
                    employees are proud to work for.
                  </p>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div>
                <BlurFade delay={0.25} inView>
                  <h2 className="text-lg font-sans font-medium text-secondary uppercase">
                    Our Mission
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25} inView>
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-[whitesmoke] sm:text-4xl lg:text-5xl">
                    To provide quality workmanship,
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25} inView>
                  <p className="mt-4 text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                    customer service and maintain the highest level of
                    professionalism, honesty and fairness in our relationships
                    with our customers, employees and vendors. To grow by
                    continually providing useful and significant products,
                    services, and solutions to markets we already serve -and to
                    expand into new areas that build on our competencies and
                    customer interests.
                  </p>
                </BlurFade>
              </div>

              <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative justify-self-end">
                  <BoxReveal duration={0.5}>
                    <Image
                      width={310}
                      height={310}
                      className="ml-auto img rounded-2xl"
                      src="/IMG-20211024-WA0014.jpg"
                      alt=""
                    />
                  </BoxReveal>
                  <div className="absolute -bottom-10 -left-16">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContentSection;
