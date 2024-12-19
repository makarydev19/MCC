'use client';

import { motion } from 'framer-motion';
import WordRotate from '../ui/word-rotate';

const LandingSection = () => {
  const words = ['construction', 'building', 'architectural'];
  return (
    <section>
      <main className="relative flex flex-col services-page-bg lg:h-[80vh] h-[85vh] rounded-b-3xl justify-end pb-20 lg:px-20 px-5">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
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
          <h1 className="lg:text-7xl text-5xl text-white">
            We specialize in turning your <br />
            <WordRotate
              className="text-red-700 dark:text-secondary"
              words={words}
            />
            dreams into reality
          </h1>
        </motion.div>
      </main>
      <div className="text-center mx-auto -mt-7 z-10 py-4 relative w-[70%] lg:w-[25%] rounded-3xl bg-LightModeBG">
        <p className="lg:text-4xl text-3xl uppercase">Who We Are</p>
      </div>
    </section>
  );
};

export default LandingSection;
