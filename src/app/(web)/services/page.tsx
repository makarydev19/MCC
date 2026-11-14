import { metadataConfig } from '@/libs/metadata';
import {
  LandingSection,
  ServicesCards,
  ServicesContent,
} from '@/sections/3-ServicesSections';
import { FindConstructionTeam } from '@/sections/4-ProjectsSections';

export const metadata = metadataConfig.services;

const page = () => {
  return (
    <>
      <LandingSection />
      <ServicesCards />
      <ServicesContent />
      <FindConstructionTeam />
    </>
  );
};

export default page;
