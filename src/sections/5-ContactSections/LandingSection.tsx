'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LandingSection = () => {
  return (
    <section>
      <main className="relative flex flex-col contactUs-page-bg lg:h-[75vh] h-[50vh] justify-center items-start text-left lg:px-24 px-5">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
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
          <h1 className="lg:text-7xl text-4xl text-white">Contact Us</h1>
        </motion.div>
      </main>
    </section>
  );
};

export default LandingSection;
