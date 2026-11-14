'use client';

import Image from 'next/image';
import { Clients } from '@/Data/Data';
import SectionHeading from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';

const OurClientsSection = () => {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...Clients, ...Clients];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Our Clients"
          title="Trusted by world class companies"
        />
      </div>

      <Reveal delay={0.1} className="mask-fade-x mt-14 overflow-hidden">
        <ul className="flex w-max animate-marquee gap-4 pause-on-hover">
          {loop.map((client, index) => (
            <li
              key={`${client.img}-${index}`}
              aria-hidden={index >= Clients.length}
              className="grid h-24 w-44 shrink-0 place-items-center rounded-2xl border border-line bg-white px-6 md:h-28 md:w-52"
            >
              <Image
                src={client.img}
                alt=""
                width={160}
                height={80}
                loading="eager"
                className="max-h-14 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:max-h-16"
              />
            </li>
          ))}
        </ul>
      </Reveal>
      <p className="mt-8 text-center text-sm text-subtle">and many more...</p>
    </section>
  );
};

export default OurClientsSection;
