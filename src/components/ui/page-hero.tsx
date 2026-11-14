'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal, WordsReveal, EASE_OUT } from './reveal';

type PageHeroProps = {
  crumb: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  images: string[];
  highlight?: string;
  children?: React.ReactNode;
};

/** Inset, rounded image hero shared by every inner page. */
export default function PageHero({
  crumb,
  eyebrow,
  title,
  subtitle,
  images,
  highlight,
  children,
}: PageHeroProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      6000
    );
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="p-2 sm:p-3">
      <div className="relative isolate flex min-h-[78svh] items-end overflow-hidden rounded-[1.25rem] bg-ink sm:rounded-[1.75rem] lg:min-h-[640px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={images[active]}
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image
              src={images[active]}
              alt=""
              fill
              priority
              sizes="100vw"
              className="animate-kenburns object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-ink via-ink/70 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />

        <div className="container-x pb-12 pt-36 md:pb-16 lg:pb-20">
          <Reveal y={12}>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-sm font-medium text-white/60"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white">{crumb}</span>
            </nav>
          </Reveal>
          <Reveal y={12} delay={0.05}>
            <p className="eyebrow mb-5 text-white">{eyebrow}</p>
          </Reveal>
          <h1 className="h-display max-w-4xl text-[2.75rem] text-white sm:text-6xl lg:text-[5.25rem]">
            <WordsReveal text={title} delay={0.15} highlight={highlight} />
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
