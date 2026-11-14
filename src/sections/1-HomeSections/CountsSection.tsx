'use client';

import CountUp from 'react-countup';
import { CountsBox } from '@/Data/Data';
import { Reveal } from '@/components/ui/reveal';

const CountsSection = () => {
  const stats = [{ id: 0, num: 20, title: 'Years of experience' }, ...CountsBox];

  return (
    <section id="counts" className="border-b border-line bg-surface">
      <div className="container-x grid gap-10 py-14 md:py-16 lg:grid-cols-[1.1fr_repeat(4,1fr)] lg:items-center lg:gap-8">
        <Reveal>
          <p className="max-w-xs font-display text-xl font-bold leading-snug tracking-tight text-fg md:text-2xl">
            A track record built project by project, from the foundations up.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:contents">
          {stats.map((counts, i) => (
            <Reveal key={counts.id} delay={0.08 * (i + 1)}>
              <div className="border-l-[3px] border-brand pl-5">
                <p className="font-display text-5xl font-black leading-none tracking-[-0.04em] text-fg md:text-[3.5rem]">
                  <CountUp
                    end={counts.num}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </p>
                <p className="mt-2 text-sm font-medium text-subtle">
                  {counts.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountsSection;
