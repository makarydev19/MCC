'use client';

import { useEffect, useRef, useContext } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ThemeContext from '@/Context/themeContext';

interface BoxRevealProps {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  boxColor?: string;
  duration?: number;
  className?: string;
}

export const BoxReveal = ({
  children,
  width = 'fit-content',
  boxColor,
  duration,
}: BoxRevealProps) => {
  const { darkTheme } = useContext(ThemeContext); // Consume the darkTheme value
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start('visible');
      mainControls.start('visible');
    } else {
      slideControls.start('hidden');
      mainControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  // Set dynamic boxColor based on darkTheme or provided boxColor
  const dynamicBoxColor = boxColor || (darkTheme ? 'black' : 'white');

  return (
    <div ref={ref} style={{ position: 'relative', width, zIndex: '1' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration || 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration || 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: dynamicBoxColor, // Use dynamic boxColor here
        }}
      />
    </div>
  );
};

export default BoxReveal;
