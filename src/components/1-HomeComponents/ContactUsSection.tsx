import React from 'react';
import Form from '../Form/Form';
import MccInfo from '../MccInfo';

const ContactUsSection = () => {
  return (
    <section className="container mx-auto lg:px-32 md:px-10 px-5 py-20">
      <div className="flex flex-col gap-4">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center font-heading w-[80%] md:w-[90%] mx-auto dark:text-[whitesmoke]"
        >
          What Can Us Do <br className="lg:hidden block" /> For You ?
        </h1>
        <div>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-center font-sans w-[90%] md:w-[90%] mx-auto tracking-wide lg:text-2xl text-md dark:text-gray-400"
          >
            We are ready to work on <br className="block lg:hidden" /> a project
            of any complexity
            <br className="hidden lg:block" /> whether its commercial or
            residential.
          </p>
        </div>
      </div>
      <Form />
      <MccInfo />
    </section>
  );
};

export default ContactUsSection;
