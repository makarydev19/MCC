import {
  LandingSection,
  ServicesCards,
  ServicesContent,
} from '@/sections/3-ServicesSections';

const page = () => {
  return (
    <>
      <LandingSection />
      <section className="lg:px-1 px-5 md:-mt-5 -mt-48 sticky rounded-3xl bg-LightModeBG dark:bg-DarkModeBG">
        <section className="pt-20">
          <ServicesCards />
          <ServicesContent />
        </section>
      </section>
    </>
  );
};

export default page;
