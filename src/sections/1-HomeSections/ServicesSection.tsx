'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Services } from '@/Data/Data';
import SectionHeading from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/libs/utils';

const ServicesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="dark section-y bg-ink text-fg">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            light
            eyebrow="Our Services"
            title={
              <>
                Everything it takes to build,
                <br className="hidden md:block" /> under one roof.
              </>
            }
          />
          <Reveal delay={0.2}>
            <Link href="/services" className="btn-ghost-light w-fit">
              Explore All Services
              <IconArrowUpRight stroke={2.2} />
            </Link>
          </Reveal>
        </div>

        {/* Desktop: expanding accordion cards. Mobile: snap scroller. */}
        <div className="-mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 hide-scrollbar lg:mx-0 lg:h-[480px] lg:overflow-visible lg:px-0 lg:pb-0">
          {Services.map((service, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  'group relative h-[420px] w-[78vw] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-[1.25rem] bg-muted sm:w-[300px] lg:h-full lg:w-auto lg:max-w-none lg:shrink lg:transition-[flex-grow] lg:duration-700 lg:ease-out',
                  isActive ? 'lg:flex-[2.4]' : 'lg:flex-1'
                )}
              >
                <Link
                  href="/services"
                  className="absolute inset-0 z-20"
                  aria-label={service.title}
                />
                <Image
                  src={service.img2}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className={cn(
                    'object-cover transition-transform duration-700 ease-out',
                    isActive ? 'lg:scale-105' : 'scale-100'
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

                <span className="absolute left-6 top-6 font-display text-sm font-bold tracking-[0.12em] text-white">
                  {service.num}
                </span>
                <span
                  className={cn(
                    'absolute right-5 top-5 grid size-10 place-items-center rounded-full text-white transition-colors duration-300',
                    isActive ? 'bg-brand' : 'bg-white/15 backdrop-blur-sm'
                  )}
                >
                  <IconArrowUpRight size={18} stroke={2.2} />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-white lg:text-2xl">
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-3 line-clamp-3 max-w-md text-sm leading-relaxed text-white/75 transition-all duration-500 lg:max-h-0 lg:opacity-0',
                      isActive && 'lg:max-h-24 lg:opacity-100'
                    )}
                  >
                    {service.works}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
