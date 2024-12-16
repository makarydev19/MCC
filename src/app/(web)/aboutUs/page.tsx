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
      <OurClientsSection />
    </section>
  );
};

export default page;
