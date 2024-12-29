import React from 'react';
import BoxReveal from '../ui/box-reveal';
import { BlurFade } from '../ui/blur-fade';
import { Feature, features } from './Data/ServicesData';

const FeaturesSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-28">
        <div className="max-w-xl mx-auto text-center">
          <BlurFade delay={0.25} inView>
            <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-red-600">
              <p className="text-xs font-semibold tracking-widest text-white uppercase">
                130+ Handcoded Blocks
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-[whitesmoke] sm:text-4xl lg:text-5xl">
              Celebration helps you build beautiful website
            </h2>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
          {features.map((feature: Feature) => (
            <BoxReveal key={feature.id} duration={0.5}>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d={feature.icon} // Using dynamic icon from the data
                    />
                  </svg>
                  <h3 className="mt-8 text-lg font-semibold text-black dark:text-[whitesmoke]">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </BoxReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
