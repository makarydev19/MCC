import React from 'react';
import { Feature, features } from '@/Data/Data';
import { BlurFade } from '@/components/ui/blur-fade';
import BoxReveal from '@/components/ui/box-reveal';

const FeaturesSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-28">
        <div className="max-w-2xl mx-auto text-center">
          <BlurFade delay={0.25} inView>
            <h2 className="font-heading mt-6 font-bold leading-tight text-black dark:text-[whitesmoke]">
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
