'use client';

import Image from 'next/image';
import { Reveal } from '@/components/ui/reveal';

const ContentSection = () => {
  return (
    <>
      {/* Chairman */}
      <section className="section-y">
        <div className="container-x grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal className="relative mx-auto w-full max-w-[420px] pb-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-muted shadow-lift">
              <Image
                src="/Eng-Magdy.png"
                alt="Eng. Magdy Shaker Gabra"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />
            </div>
            <Reveal
              delay={0.25}
              className="absolute -right-2 bottom-0 rounded-2xl border border-line bg-surface px-7 py-5 shadow-lift sm:-right-10"
            >
              <p className="font-display text-xl font-bold tracking-tight text-fg">
                Magdy Shaker Gabra
              </p>
              <p className="mt-1 text-sm font-medium text-brand">
                General Director
              </p>
            </Reveal>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="eyebrow">Chairman Of Boards</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-section">Key to our success,</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead text-lg">
                is building long term relationships. Our aim is to achieve this
                with our clients’ by consistently delivering exceptional results
                that are on time and within budget reflecting the needs of our
                clients and end users. This achievement to date is the result of
                our highly dedicated and experienced project team. Our approach
                allows for the project team you start with to be the team that
                celebrates with you the successful completion of the project.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="pb-20 md:pb-28">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {[
            {
              eyebrow: 'Our Vision',
              title: (
                <>
                  To be <span className="text-brand">“the”</span> contractor of
                  your choice.
                </>
              ),
              body: null,
              img: '/Porto-October/20180203_132117.jpg',
            },
            {
              eyebrow: 'Our Mission',
              title: 'To achieve customer satisfaction,',
              body: 'maintain the highest levels of professionalism, honesty, and fairness with all our relative stakeholders; in addition to, growing continually through providing sustainable products, services, and solutions to markets we serve.',
              img: '/IMG-20211024-WA0014.jpg',
            },
          ].map((item, i) => (
            <Reveal
              key={item.eyebrow}
              delay={i * 0.1}
              className="group card overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4 p-8 md:p-10">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-fg md:text-4xl">
                  {item.title}
                </h3>
                {item.body && <p className="lead">{item.body}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContentSection;
