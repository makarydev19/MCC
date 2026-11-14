'use client';

import Image from 'next/image';
import { IconQuote } from '@tabler/icons-react';
import { chairmanOfBoardsData } from '@/Data/Data';
import SectionHeading from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/libs/utils';

const ChairmanOfBoardsSection = () => {
  return (
    <section className="section-y bg-muted">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Chairman Of Boards"
          title="Building trust and excellence from the foundation up"
        />

        <div className="mt-16 flex flex-col gap-20 md:mt-20 lg:gap-28">
          {chairmanOfBoardsData.map((section, index) => {
            const [lead, ...rest] = section.content.split(/<br\s*\/?>/i);
            const reversed = index % 2 === 1;
            return (
              <div
                key={section.imageSrc}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal
                  className={cn(
                    'relative aspect-[4/3] overflow-hidden rounded-[1.25rem] shadow-lift',
                    reversed && 'lg:order-2'
                  )}
                >
                  <Image
                    alt={section.imageAlt}
                    src={section.imageSrc}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </Reveal>
                <div className="flex flex-col gap-6">
                  <Reveal>
                    <IconQuote
                      size={52}
                      stroke={1.5}
                      className="-ml-1 text-brand"
                      aria-hidden
                    />
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-fg md:text-4xl">
                      {lead.trim()}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <p className="lead">{rest.join(' ').replace(/\s+/g, ' ').trim()}</p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChairmanOfBoardsSection;
