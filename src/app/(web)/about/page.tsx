import React from 'react';

import {
  LandingSection,
  ContentSection,
  OurClientsSection,
} from '@/sections/2-AboutSections';
import { metadataConfig } from '@/libs/metadata';

export const metadata = metadataConfig.about;

const page = () => {
  return (
    <section className="pb-20">
      <LandingSection />
      <div className="mx-auto my-5 relative rounded-3xl bg-LightModeBG dark:bg-DarkModeBG -mt-10">
        <ContentSection />
        <div className="lg:px-20 px-0">
          <OurClientsSection />
        </div>
      </div>
    </section>
  );
};

export default page;
