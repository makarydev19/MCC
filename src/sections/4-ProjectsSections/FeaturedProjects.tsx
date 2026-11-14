'use client';

import PageHero from '@/components/ui/page-hero';
import { FeaturedProject } from '@/Data/Data';

// Projects page hero: crossfades through the featured project photos.
const FeaturedProjects: React.FC = () => {
  return (
    <PageHero
      crumb="Projects"
      eyebrow="Our Portfolio"
      title="Our Projects"
      highlight="Projects"
      subtitle="From blueprints to grand openings, see our projects come to life"
      images={FeaturedProject.map((p) => p.coverImg)}
    />
  );
};

export default FeaturedProjects;
