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
      <section className="lg:px-1 px-5 md:-mt-5 -mt-48 sticky rounded-3xl bg-LightModeBG dark:bg-DarkModeBG">
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
