'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Fade + rise into view. Transform/opacity only. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Splits a headline into words that rise in one after another. */
export function WordsReveal({
  text,
  className,
  delay = 0,
  highlight,
}: {
  text: string;
  className?: string;
  delay?: number;
  highlight?: string;
}) {
  const lines = text.split('\n');
  let index = 0;
  return (
    <span className={className} aria-label={text.replace(/\n/g, ' ')}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden>
          {line.split(' ').map((word) => {
            const i = index++;
            return (
              <span
                key={`${word}-${i}`}
                className="inline-block overflow-hidden pb-[0.08em] align-bottom"
              >
                <motion.span
                  className={`inline-block ${
                    highlight && word.includes(highlight) ? 'text-brand' : ''
                  }`}
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: delay + i * 0.06,
                    ease: EASE_OUT,
                  }}
                >
                  {word}
                  {' '}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
