import Image from 'next/image';
import { ContactUsForm, MCCInformation } from '../5-ContactSections';
import { Reveal } from '@/components/ui/reveal';

const ContactUsSection = () => {
  return (
    <section className="p-2 sm:p-3">
      <div className="dark relative isolate overflow-hidden rounded-[1.25rem] bg-ink sm:rounded-[1.75rem]">
        <Image
          src="/IMG_20210809_144241.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />

        <div className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="eyebrow text-[#E5383B]">Contact Us</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-display text-5xl text-white md:text-6xl lg:text-7xl">
                How may we assist you?
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-md text-lg leading-relaxed text-white/75">
                Contact the Experts – Let us craft your dreams to existence
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-2">
              <MCCInformation variant="list" />
            </Reveal>
          </div>
          <ContactUsForm className="light" />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
