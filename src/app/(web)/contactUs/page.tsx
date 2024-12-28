import {
  ContactUsForm,
  LandingSection,
  MCCInformation,
} from '@/components/5-ContactUsComponents';

const page = () => {
  return (
    <section className="lg:pb-20 pb-10">
      <LandingSection />
      <div className="px-4 mx-auto py-10 sm:px-6 lg:px-8 max-w-7xl bg-LightModeBG dark:bg-DarkModeBG rounded-3xl -mt-20 relative">
        <div className="max-w-5xl mx-auto my-1 sm:my-5 flex flex-col gap-y-5">
          <MCCInformation />
          {/* Map Location */}
          <iframe
            className="w-[100%] border-0 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.860014100586!2d31.19624177468242!3d30.04087367492535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847dfadab6abb%3A0x613111d2768cb9b8!2zTUNDIC0g2LTYsdmD2Kkg2KfZhNin2YbYtNin2KHYp9iqINin2YTYrdiv2YrYq9ipINmE2YTZhdmC2KfZiNmE2KfYqg!5e0!3m2!1sen!2seg!4v1729085172479!5m2!1sen!2seg"
            width="600"
            height="450"
            allowFullScreen
            title="Location Map"
            referrerPolicy="no-referrer-when-downgrade"
            loading="eager"
          />
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default page;
