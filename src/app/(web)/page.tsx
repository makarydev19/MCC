import LandingPage from "@/components/LandingPage/LandingPage";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import OurFeatures from "@/components/OurFeatures/OurFeatures";
import ChairmanOfBoards from "@/components/ChairmanOfBoards/ChairmanOfBoards";
import OurClients from "@/components/OurClients/OurClients";
import LatestProject from "@/components/LatestProject/LatestProject";
import ContactUsForm from "@/components/ContactUsForm/ContactUsForm";

import { getLatestProject } from "@/libs/apis";

const Home = async () => {
  const latestProject = await getLatestProject();
  return (
    <>
      <LandingPage />
      <WhoWeAre />
      <OurFeatures />
      <ChairmanOfBoards />
      <div className="lg:px-20">
        <OurClients />
      </div>
      <LatestProject latestProject={latestProject} />
      <ContactUsForm />
    </>
  );
};

export default Home;
