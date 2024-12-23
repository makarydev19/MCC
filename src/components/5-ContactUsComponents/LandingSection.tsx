'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { BlurFade } from '../ui/blur-fade';

const LandingSection = () => {
  return (
    <section>
      <main className="relative flex flex-col contactUs-page-bg lg:h-[75vh] h-[50vh] justify-end items-center text-center pb-20 lg:px-20 px-5">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          <h1 className="lg:text-7xl text-4xl text-white">
            Your Dream Project Starts Here
          </h1>
        </motion.div>
      </main>
      <div className="text-center mx-auto -mt-7 z-10 py-5 relative w-[85%] lg:w-[45%] rounded-3xl bg-LightModeBG dark:bg-DarkModeBG dark:text-white">
        <BlurFade duration={0.35} inView>
          <p className="font-heading dark:text-[whitesmoke]">
            Contact Our Team
          </p>
        </BlurFade>
      </div>
    </section>
  );
};

export default LandingSection;
