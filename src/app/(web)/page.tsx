import {
  ChairmanOfBoardsSection,
  ContactUsSection,
  CountsSection,
  LandingSection,
  LatestProjectSection,
  OurClientsSection,
  ServicesSection,
  WhoWeAreSection,
} from '@/components/1-HomeComponents';
import { getLatestProject } from '@/libs/apis';

const Home = async () => {
  const latestProject = await getLatestProject();
  return (
    <>
      <LandingSection />
      <div className="absolute w-full md:top-[95%] top-[95%] z-50">
        <CountsSection />
      </div>
      <WhoWeAreSection />
      <ServicesSection />
      <ChairmanOfBoardsSection />
      <div className="lg:px-20">
        <OurClientsSection />
      </div>
      <LatestProjectSection latestProject={latestProject} />
      <ContactUsSection />
    </>
  );
};

export default Home;
