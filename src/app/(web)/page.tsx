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
      <div className="absolute w-full md:top-[95%] top-[96%] z-50">
        <CountsSection />
      </div>
      <WhoWeAreSection />
      <ServicesSection />
      <ChairmanOfBoardsSection />
      <div className="lg:px-20">
        <OurClientsSection />
      </div>
      <ContactUsSection />
    </>
  );
};

export default Home;
