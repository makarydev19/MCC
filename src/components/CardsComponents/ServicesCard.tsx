import Image from 'next/image';
import { Services } from '@/Data/Data';

const ServicesCard = () => {
  return (
    <div className="relative flex flex-wrap items-center justify-center w-full h-full gap-4">
      {Services.map((services) => (
        <div
          key={services.id}
          data-aos="fade-up"
          data-aos-duration="800"
          className="relative dark:bg-zinc-900 bg-zinc-100 shadow-xl dark:shadow-2xl rounded-lg md:w-[27rem] w-full h-40 p-4 flex items-start"
        >
          <div className="flex flex-col gap-y-7 lg:w-full w-[50%]">
            <h2 className="lg:text-4xl text-3xl">{services.title}</h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className={`lg:relative lg:right-0 absolute bottom-0 right-5 lg:size-44 size-28 ${services.id === 2 || services.id === 4 ? '-bottom-5' : ''}`}
          >
            <Image
              src={services.img}
              alt={services.title}
              width={500}
              height={500}
              loading="eager"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
