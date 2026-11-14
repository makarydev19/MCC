import ServicesCard from '@/components/Cards/ServicesCard';
import SectionHeading from '@/components/ui/section-heading';

const ServicesCards = () => {
  return (
    <section className="pt-20 md:pt-28">
      <div className="container-x">
        <SectionHeading eyebrow="What we do" title="Our Services" />
        <div className="mt-12">
          <ServicesCard />
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
