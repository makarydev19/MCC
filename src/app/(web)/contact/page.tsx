import { metadataConfig } from '@/libs/metadata';
import {
  ContactUsForm,
  LandingSection,
  MCCInformation,
} from '@/sections/5-ContactSections';
import SectionHeading from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';

export const metadata = metadataConfig.contact;

const page = () => {
  return (
    <>
      <LandingSection />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Get in touch"
              title="Talk to the experts."
              description="Whether you have inquiries, project proposals, or feedback, we welcome your engagement as a valued partner."
            />
            <Reveal delay={0.2}>
              <MCCInformation />
            </Reveal>
          </div>
          <ContactUsForm />
        </div>

        <Reveal className="container-x mt-16 md:mt-24">
          <div className="overflow-hidden rounded-[1.25rem] border border-line">
            <iframe
              className="h-[420px] w-full border-0 grayscale transition-[filter] duration-500 hover:grayscale-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.860014100586!2d31.19624177468242!3d30.04087367492535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847dfadab6abb%3A0x613111d2768cb9b8!2zTUNDIC0g2LTYsdmD2Kkg2KfZhNin2YbYtNin2KHYp9iqINin2YTYrdiv2YrYq9ipINmE2YTZhdmC2KfZiNmE2KfYqg!5e0!3m2!1sen!2seg!4v1729085172479!5m2!1sen!2seg"
              allowFullScreen
              title="Location Map"
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default page;
