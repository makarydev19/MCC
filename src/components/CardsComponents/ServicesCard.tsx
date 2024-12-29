import Image from 'next/image';
import { Services } from '../3-ServicesPage/Data/ServicesData';

const ServicesCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mx-20 md:mx-10">
      {Services.map((services) => (
        <div
          key={services.id}
          data-aos="fade-up"
          data-aos-duration="800"
          className="bg-slate-200 dark:bg-zinc-900 rounded-lg lg:w-[27rem] w-[21.5rem] h-48 p-4 flex"
        >
          <div className="flex flex-col gap-y-7">
            <h2 className="lg:text-4xl text-3xl">{services.title}</h2>
            <div className="text-lg w-60">
              {/* Displaying the titles of all works */}
              {services.works.slice(0, 1).map((work, index) => (
                <p key={index} className="line-clamp-2">
                  {work.title}
                </p>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="self-end lg:size-40 size-28"
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
