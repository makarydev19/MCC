'use client';

import PageHero from '@/components/ui/page-hero';

const LandingSection = () => {
  return (
    <PageHero
      crumb="About Us"
      eyebrow="About MCC"
      title={'We specialize in turning\nyour vision into reality...'}
      highlight="vision"
      subtitle="Construction, building, and architectural expertise under one roof."
      images={['/Porto-October/IMG_20171019_160406.jpg']}
    />
  );
};

export default LandingSection;
