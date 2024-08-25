"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Counts from "../Counts/Counts";
import OurClients from "../OurClients/OurClients";
import WordRotate from "../ui/word-rotate";
import BoxReveal from "../ui/box-reveal";
import BlurFade from "../ui/blur-fade";

const AboutUs = () => {
  const words = ["construction", "building", "architectural"];
  return (
    <section className="pb-20">
      <main className="relative flex flex-col h-[100vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <h1 className="lg:text-7xl text-5xl dark:text-white">
            <p className="text-2xl">About Us</p>
            We specialize in turning your <br />
            <WordRotate
              className="text-red-700 dark:text-secondary"
              words={words}
            />
            dreams into reality
          </h1>
        </motion.div>
      </main>

      <Counts />

      <div className="lg:px-20 px-0 py-20">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="lg:grid flex flex-wrap-reverse items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
              <div className="relative lg:mb-12">
                <Image
                  className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                  width={100}
                  height={100}
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                  alt=""
                />
                <BoxReveal boxColor={"whitesmoke"} duration={0.5}>
                  <div className="pl-12 pr-6 h-[70vh] w-full">
                    <Image
                      width={900}
                      height={900}
                      className="img relative"
                      src="/pexels-pixabay-51325.jpg"
                      alt=""
                    />
                  </div>
                </BoxReveal>
                <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                  <div className="max-w-xs backdrop-blur-3xl rounded-lg sm:max-w-md xl:max-w-md">
                    <BoxReveal boxColor={"whitesmoke"} duration={0.5}>
                      <div className="px-3 py-4 sm:px-5 sm:py-8">
                        <div className="flex items-start">
                          <p className="text-3xl sm:text-4xl">👋</p>
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
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
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
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                  <BoxReveal boxColor={"whitesmoke"} duration={0.5}>
                    <img
                      className="ml-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                      alt=""
                    />
                  </BoxReveal>
                  <div className="absolute -bottom-10 -left-16">
                    <BoxReveal boxColor={"whitesmoke"} duration={0.5}>
                      <div className="bg-red-300">
                        <div className="px-8 py-10">
                          <span className="block text-4xl font-bold text-black lg:text-5xl">
                            {" "}
                            53%{" "}
                          </span>
                          <span className="block mt-2 text-base leading-tight text-black">
                            {" "}
                            High Conversions
                            <br />
                            Everything{" "}
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
        <OurClients />
      </div>
    </section>
  );
};

export default AboutUs;
