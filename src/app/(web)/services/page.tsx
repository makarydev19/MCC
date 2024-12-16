import {
  FeaturesSection,
  LandingSection,
  ServicesCards,
  ServicesContent,
} from '@/components/3-ServicesPage';

const page = () => {
  return (
    <>
      <LandingSection />
      <section className="lg:px-1 px-5 lg:-mt-28 md:-mt-[4.6rem] -mt-36 sticky">
        <FeaturesSection />
        <section className="mt-10">
          <ServicesCards />
          <ServicesContent />
        </section>
      </section>
    </>
  );
};

export default page;
