import Image from 'next/image';
import { Services } from '@/Data/Data';

const ServicesCard = () => {
  return (
    <div className="relative flex flex-wrap items-center justify-center w-full h-full gap-4">
      {Services.map((services, index) => (
        <div
          key={services.id}
          data-aos="fade-up"
          data-aos-duration="800"
          className={`relative bg-secondary/10 dark:bg-zinc-900 rounded-lg md:w-[27rem] w-full h-48 p-4 flex ${index === 3 ? 'items-end' : ''}`}
        >
          <div className="flex flex-col gap-y-7">
            <h2 className="lg:text-4xl text-3xl">{services.title}</h2>
            <div className="text-lg w-60">
              {services.works.slice(0, 1).map((work, index) => (
                <p
                  key={index}
                  className="line-clamp-3 text-gray-600 dark:text-gray-400"
                >
                  {work.title}
                </p>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="absolute bottom-0 right-0 lg:size-40 size-28"
          >
            <Image
              src={services.img}
              alt={services.title}
              width={200}
              height={200}
              className="img"
              loading="eager"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
