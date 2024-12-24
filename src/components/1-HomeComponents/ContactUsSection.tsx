import React from 'react';
import { ContactUsForm, MCCInformation } from '../5-ContactUsComponents';
import { BlurFade } from '../ui/blur-fade';

const ContactUsSection = () => {
  return (
    <section className="container mx-auto lg:px-32 md:px-10 px-5 py-20">
      <div className="flex flex-col gap-4">
        <BlurFade delay={0.25} inView>
          <h1 className="text-center font-heading w-[80%] md:w-[90%] mx-auto dark:text-[whitesmoke]">
            What Can Us Do <br className="lg:hidden block" /> For You ?
          </h1>
        </BlurFade>
        <div>
          <BlurFade delay={0.25 * 2} inView>
            <p className="font-title w-full md:w-[90%] mx-auto tracking-wide dark:text-gray-400">
              Contact the Experts – Let’s Build Your Future
            </p>
          </BlurFade>
        </div>
      </div>
      <ContactUsForm />
      <MCCInformation />
    </section>
  );
};

export default ContactUsSection;
