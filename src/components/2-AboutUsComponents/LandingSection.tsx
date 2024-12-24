'use client';

import { motion } from 'framer-motion';
import WordRotate from '../ui/word-rotate';

const LandingSection = () => {
  const words = ['construction', 'building', 'architectural'];
  return (
    <section>
      <main className="relative flex flex-col aboutUs-page-bg lg:h-[75vh] h-[50vh] rounded-b-3xl justify-end pb-14 lg:pb-20 items-start text-start lg:px-20 px-5">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative flex flex-col gap-4 lg:px-4"
        >
          <h1 className="lg:text-7xl text-4xl text-white">
            We specialize in turning your <br />
            <WordRotate
              className="text-red-700 dark:text-secondary"
              words={words}
            />
            dreams into reality
          </h1>
        </motion.div>
      </main>
    </section>
  );
};

export default LandingSection;
