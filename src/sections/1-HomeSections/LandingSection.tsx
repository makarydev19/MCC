'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { IconArrowUpRight } from '@tabler/icons-react';
import { HomeBackgrounds } from '@/Data/Data';
import { WordsReveal, EASE_OUT } from '@/components/ui/reveal';

const SLIDE_MS = 5000;

const LandingSection = () => {
  const [active, setActive] = useState(0);
  const total = HomeBackgrounds.length;
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <Swiper
        loop
        speed={1200}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: SLIDE_MS, disableOnInteraction: false }}
        onSlideChange={(s) => setActive(s.realIndex)}
        modules={[EffectFade, Autoplay]}
        className="!absolute inset-0"
      >
        {HomeBackgrounds.map((image, index) => (
          <SwiperSlide key={image.image}>
            {({ isActive }) => (
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={image.image}
                  alt=""
                  fill
                  sizes="100vw"
                  priority={index < 2}
                  className={`object-cover ${isActive ? 'animate-kenburns' : ''}`}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink via-ink/30 to-ink/40" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />

      {/* Content */}
      <div className="container-x relative z-10 flex h-full flex-col justify-end pb-28 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
          className="eyebrow mb-6 text-white"
        >
          We build your dreams
        </motion.p>

        <h1 className="h-display max-w-5xl text-[2.6rem] text-white sm:text-6xl lg:text-[5.5rem]">
          <WordsReveal
            text={'From concept to completion,\nwe craft your dreams\ninto existence.'}
            delay={0.2}
            highlight="dreams"
          />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: EASE_OUT }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link href="/projects" className="btn-brand">
            Explore projects
            <IconArrowUpRight stroke={2.2} />
          </Link>
          <Link href="/contact" className="btn-ghost-light backdrop-blur-sm">
            Talk to our team
            <IconArrowUpRight stroke={2.2} />
          </Link>
        </motion.div>
      </div>

      {/* Bottom bar: scroll cue + slide progress */}
      <div className="container-x absolute inset-x-0 bottom-8 z-10 flex items-end justify-between">
        <a
          href="#counts"
          className="hidden items-center gap-3 text-sm font-medium text-white/70 transition-colors hover:text-white md:flex"
        >
          <span className="relative flex h-9 w-6 justify-center rounded-full border-[1.5px] border-white/60 pt-2">
            <span className="h-2 w-1 animate-scroll-dot rounded-full bg-white" />
          </span>
          Scroll to explore
        </a>

        <div className="ml-auto flex flex-col items-end gap-3">
          <p className="font-display text-sm font-bold tracking-[0.1em] text-white">
            {pad(active + 1)}
            <span className="text-white/50"> / {pad(total)}</span>
          </p>
          <div className="relative h-[3px] w-40 overflow-hidden rounded-full bg-white/25 md:w-56">
            <span
              key={active}
              className="absolute inset-0 origin-left animate-progress rounded-full bg-white"
              style={{ animationDuration: `${SLIDE_MS + 1200}ms` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
