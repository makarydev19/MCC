import Link from 'next/link';
import { Services } from '@/data/data';
import Image from 'next/image';
import BoxReveal from '../ui/box-reveal';

const ServicesSection = () => {
  return (
    <section className="my-20 services-bg h-full w-full">
      <div className="w-full h-full lg:flex gap-20 items-center justify-center backdrop-brightness-[.3]">
        <div className="lg:px-10 px-5 py-10 mx-auto">
          <div className="lg:w-[40%] flex flex-col lg:items-start items-center">
            <BoxReveal boxColor={'whitesmoke'} duration={0.5}>
              <h1 className="md:text-5xl text-4xl md:w-[80%] lg:mx-0 md:mx-auto text-wrap text-white mb-5 lg:text-left text-center font-roboto">
                We Provide Strong Services For You
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={'whitesmoke'} duration={0.5}>
              <p className="md:text-lg lg:text-sm md:w-[85%] lg:mx-0 md:mx-auto text-white mb-5 lg:text-left text-center font-roboto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum eveniet explicabo quae. Quaerat a fugit est mollitia
                quae nihil placeat eius iusto ullam aut, illo nesciunt beatae
                unde vel recusandae!
              </p>
            </BoxReveal>
            <BoxReveal boxColor={'whitesmoke'} duration={0.5}>
              <Link href="/services" className="relative z-50">
                <button className="btn-primary dark:bg-zinc-900 dark:text-white px-12 md:px-[30px] lg:px-[35px]">
                  Explore All Services
                </button>
              </Link>
            </BoxReveal>
          </div>

          <div className="pt-10 lg:absolute lg:inset-0">
            <div className="flex flex-col items-center justify-center lg:absolute lg:right-0 lg:w-1/2">
              <div className="flex justify-start w-full gap-6 pb-8 overflow-x-scroll snap-x hide-scrollbar">
                {Services.map((services) => (
                  <div
                    key={services.id}
                    className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6"
                  >
                    <BoxReveal boxColor={'whitesmoke'} duration={0.5}>
                      <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white dark:bg-zinc-900 border-gray-100 w-60 md:w-80 group rounded-xl hover:-translate-y-1">
                        <Link href="/services" className="w-full lg:h-72 h-48">
                          <Image
                            width={1000}
                            height={1000}
                            className="img transitpion-all duration-200 transform group-hover:scale-110"
                            src={services.img2}
                            alt="thumbnail-1"
                          />
                        </Link>
                        <div className="flex-1 px-4 py-5 sm:p-6">
                          <a href="/services" title="" className="">
                            <p className="text-lg font-bold text-gray-900 dark:text-white">
                              {services.title}
                            </p>
                          </a>
                        </div>
                        <div className="px-4 py-5 mt-auto border-t border-gray-100 dark:border-gray-500 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {services.num}
                              </p>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                •
                              </span>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                Explore
                              </p>
                            </div>
                            <Link href="/services">
                              <svg
                                className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                ></path>
                                <line x1="17" y1="7" x2="7" y2="17"></line>
                                <polyline points="8 7 17 7 17 16"></polyline>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </BoxReveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
