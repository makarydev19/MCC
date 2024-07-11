import LandingPage from "@/components/LandingPage/LandingPage";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import OurFeatures from "@/components/OurFeatures/OurFeatures";
import ChairmanOfBoards from "@/components/ChairmanOfBoards/ChairmanOfBoards";
import OurClients from "@/components/OurClients/OurClients";
import LatestProject from "@/components/LatestProject/LatestProject";
import ContactForm from "@/components/ContactForm/ContactForm";

import { getLatestProject } from "@/libs/apis";
import Counts from "@/components/Counts/Counts";

const Home = async () => {
  const latestProject = await getLatestProject();
  return (
    <>
      <LandingPage />
      <Counts />
      <WhoWeAre />
      <OurFeatures />
      <ChairmanOfBoards />
      <OurClients />
      <LatestProject latestProject={latestProject} />
      <ContactForm />
    </>
  );
};

export default Home;
