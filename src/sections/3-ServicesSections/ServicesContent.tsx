'use client';

import Image from 'next/image';
import { Services } from '@/Data/Data';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/libs/utils';

const ServicesContent = () => {
  return (
    <section className="section-y">
      <div className="container-x flex flex-col gap-24 md:gap-32">
        {Services.map((service, index) => {
          const reversed = index % 2 === 1;
          return (
            <article
              key={service.id}
              id={`service-${service.num}`}
              className="grid scroll-mt-28 items-start gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <div
                className={cn(
                  'flex flex-col gap-6 lg:py-10',
                  reversed && 'lg:order-2'
                )}
              >
                <Reveal>
                  <span
                    aria-hidden
                    className="block font-display text-[7rem] font-black leading-[0.8] tracking-[-0.06em] text-fg/[0.07] md:text-[9rem]"
                  >
                    {service.num}
                  </span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="h-section -mt-10 md:-mt-14">{service.title}</h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="lead text-lg">{service.works}</p>
                </Reveal>
              </div>

              <Reveal
                delay={0.1}
                className={cn(
                  'relative aspect-[4/5] overflow-hidden rounded-[1.25rem] shadow-lift lg:sticky lg:top-28 lg:aspect-auto lg:h-[70vh]',
                  reversed && 'lg:order-1'
                )}
              >
                <Image
                  src={service.img2}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesContent;
