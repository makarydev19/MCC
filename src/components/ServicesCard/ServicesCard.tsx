import { Services } from "@/data/data";
import Image from "next/image";

const ServicesCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mx-20">
      {Services.map((services) => (
        <div
          key={services.id}
          data-aos="fade-up"
          data-aos-duration="800"
          className="bg-slate-200 rounded-lg lg:w-[27rem] w-[21.5rem] p-4 flex"
        >
          <div className="flex flex-col gap-y-7">
            <h2 className="lg:text-4xl text-3xl">{services.title}</h2>
            <p className="text-lg w-60 line-clamp-2">{services.works1}</p>
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
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
