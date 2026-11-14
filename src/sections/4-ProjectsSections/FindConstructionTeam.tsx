import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Reveal } from '@/components/ui/reveal';

const FindConstructionTeam = () => {
  return (
    <section className="container-x pb-20 md:pb-28">
      <Reveal className="relative isolate overflow-hidden rounded-[1.75rem] bg-brand px-6 py-14 text-white sm:px-12 md:px-16 md:py-16">
        {/* Blueprint grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.12] bg-grid-white [mask-image:radial-gradient(ellipse_at_right,black,transparent_70%)]"
        />
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="h-display text-4xl text-white md:text-5xl">
              Partner with us for success
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              Whether you have inquiries, project proposals, or feedback, we
              welcome your engagement as a valued partner in achieving project
              success...
            </p>
          </div>
          <Link
            href="/contact"
            className="btn shrink-0 bg-ink text-white hover:bg-ink/85 hover:shadow-lift"
          >
            Contact Us
            <IconArrowUpRight stroke={2.2} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default FindConstructionTeam;
