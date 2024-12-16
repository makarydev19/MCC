'use client';

import { motion } from 'framer-motion';
import WordRotate from '../ui/word-rotate';

const LandingSection = () => {
  const words = ['construction', 'building', 'architectural'];
  return (
    <main className="relative flex flex-col h-[100vh] items-center justify-center">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
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
  );
};

export default LandingSection;
