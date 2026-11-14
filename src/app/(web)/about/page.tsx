import {
  LandingSection,
  ContentSection,
  OurClientsSection,
} from '@/sections/2-AboutSections';
import { metadataConfig } from '@/libs/metadata';

export const metadata = metadataConfig.about;

const page = () => {
  return (
    <>
      <LandingSection />
      <ContentSection />
      <div className="bg-muted">
        <OurClientsSection />
      </div>
    </>
  );
};

export default page;
