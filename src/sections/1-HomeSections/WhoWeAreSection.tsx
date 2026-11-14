'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Reveal } from '@/components/ui/reveal';

const WhoWeAreSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // Gentle parallax between the two photos
  const yBack = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yFront = useTransform(scrollYProgress, [0, 1], [90, -60]);

  return (
    <section className="section-y overflow-hidden">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-7">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h-section">
              For over 20 years, MCC has transformed visions and concepts into
              steel, masonry, and concrete realities.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead">
              Our clients represent a broad spectrum of industries and business
              sectors, allowing us the opportunity to apply our extensive
              experiences, know-how, and passion for excellence to each
              specific project in order to successfully handle every challenge
              and special circumstance.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="lead">
              With a well-respected track record behind us, and a solid outlook
              ahead, we’ve learned that our collaborative experiences with a
              variety of projects creates exceptional solutions and results for
              our clients.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <Link href="/about" className="btn-ink mt-2 w-fit">
              Explore more
              <IconArrowUpRight stroke={2.2} />
            </Link>
          </Reveal>
        </div>

        <div ref={ref} className="relative mx-auto h-[460px] w-full max-w-[560px] sm:h-[580px]">
          <motion.div
            style={{ y: yBack }}
            className="absolute left-0 top-0 h-[78%] w-[62%] overflow-hidden rounded-[1.25rem] shadow-lift"
          >
            <Image
              src="/Porto-October/G6832.jpg"
              alt="MCC residential project"
              fill
              sizes="(min-width: 1024px) 340px, 60vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </motion.div>
          <motion.div
            style={{ y: yFront }}
            className="absolute bottom-0 right-0 h-[62%] w-[50%] overflow-hidden rounded-[1.25rem] shadow-lift ring-8 ring-bg"
          >
            <Image
              src="/Porto-October/IMG_20181016_161451.jpg"
              alt="MCC building under construction"
              fill
              sizes="(min-width: 1024px) 280px, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </motion.div>
          <Reveal
            delay={0.3}
            className="absolute right-[4%] top-[6%] rounded-2xl bg-brand px-6 py-5 text-white shadow-brand"
          >
            <p className="font-display text-4xl font-black leading-none tracking-tight">
              20+
            </p>
            <p className="mt-1 text-xs font-medium text-white/85">
              Years of excellence
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
