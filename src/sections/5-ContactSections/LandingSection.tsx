'use client';

import PageHero from '@/components/ui/page-hero';

const LandingSection = () => {
  return (
    <PageHero
      crumb="Contact Us"
      eyebrow="Get in touch"
      title="Contact Us"
      highlight="Us"
      subtitle="Contact the Experts – Let us craft your dreams to existence"
      images={['/Porto-October/IMG_0053.JPG']}
    />
  );
};

export default LandingSection;
