import {
  ChairmanOfBoardsSection,
  ContactUsSection,
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
