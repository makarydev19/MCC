import { metadataConfig } from '@/libs/metadata';
import {
  ChairmanOfBoardsSection,
  ContactUsSection,
  CountsSection,
  LandingSection,
  OurClientsSection,
  ServicesSection,
  WhoWeAreSection,
} from '@/sections/1-HomeSections';

export const metadata = metadataConfig.home;

const Home = () => {
  return (
    <>
      <LandingSection />
      <CountsSection />
      <WhoWeAreSection />
      <ServicesSection />
      <ChairmanOfBoardsSection />
      <OurClientsSection />
      <ContactUsSection />
    </>
  );
};

export default Home;
