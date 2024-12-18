import React from 'react';

import {
  LandingSection,
  ContentSection,
  CountsSection,
  OurClientsSection,
} from '@/components/2-AboutUsComponents';

const page = () => {
  return (
    <section className="pb-20">
      <LandingSection />
      <CountsSection />
      <ContentSection />
      <div className="lg:px-20 px-0">
        <OurClientsSection />
      </div>
    </section>
  );
};

export default page;
