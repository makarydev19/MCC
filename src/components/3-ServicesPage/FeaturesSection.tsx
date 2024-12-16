import React from 'react';
import BlurFade from '../ui/blur-fade';
import BoxReveal from '../ui/box-reveal';

const FeaturesSection = () => {
  return (
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
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
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
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
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
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
