import Image from 'next/image';
import { BlurFade } from '../ui/blur-fade';
import { chairmanOfBoardsData } from '@/Data/Data';

const ChairmanOfBoardsSection = () => {
  return (
    <section className="lg:px-32 md:px-20 px-0 py-32">
      <div className="flex flex-col justify-center items-center gap-y-3">
        <BlurFade delay={0.25} inView>
          <h1 className="text-center font-heading dark:text-[whitesmoke]">
            Chairman Of Boards
          </h1>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <p className="font-title dark:text-[#f5f5f5b1] px-10">
            Building trust and excellence from the foundation up
          </p>
        </BlurFade>
      </div>
      <div className="flex flex-col lg:gap-y-18 gap-y-3">
        {chairmanOfBoardsData.map((section, index) => (
          <div
            key={index}
            className="flex lg:flex-nowrap flex-wrap px-2 mt-20 lg:gap-y-0 gap-y-8 w-full h-full items-center"
          >
            <div
              className={section.imageClasses}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <Image
                alt={section.imageAlt}
                src={section.imageSrc}
                width={500}
                height={500}
                className="img scale-animation"
                loading="eager"
              />
            </div>
            <div
              className={section.contentClasses}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <ul>
                <li
                  className="font-normal tracking-widest first-line:text-3xl first-letter:text-5xl first-line:font-medium"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                ></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChairmanOfBoardsSection;
