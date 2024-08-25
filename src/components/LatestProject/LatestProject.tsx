"use client";

import Image from "next/image";

import { Project } from "@/models/project";
import { FC } from "react";
import BoxReveal from "../ui/box-reveal";
import BlurFade from "../ui/blur-fade";

type Props = {
  latestProject: Project;
};

const LatestProject: FC<Props> = (props) => {
  const { latestProject } = props;
  return (
    <section className="container mx-auto md:px-16 px-5 py-24">
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col gap-y-3">
          <h1 className="font-heading text-center dark:text-[whitesmoke]">
            Latest Project
          </h1>

          <p className="font-title lg:w-[35rem] w-[100%] text-center self-center dark:text-[#f5f5f5d4]">
            Experience the pinnacle of our construction expertise in our latest
            creation
          </p>
        </div>
      </BlurFade>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-6xl lg:px-20">
          <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <div className="relative lg:pl-16 lg:pr-10 px-10 md:pl-0 xl:pr-0 md:order-2">
              <BoxReveal boxColor={"whitesmoke"} duration={0.5}>
                <Image
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  width={100}
                  height={100}
                  className="absolute top-6 -right-4 xl:-right-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg"
                  alt=""
                />
              </BoxReveal>
              <div className="relative max-w-xs ml-auto">
                <BoxReveal boxColor={"whitesmoke"} duration={0.5}>
                  <div className="overflow-hidden lg:h-[65vh] md:h-[30vh] lg:w-[25vw] h-[35vh] w-[100%] rounded-lg">
                    <Image
                      alt={latestProject.projectName}
                      src={latestProject.coverImage.url}
                      width={2000}
                      height={2000}
                      className="img scale-animation"
                    />
                  </div>
                </BoxReveal>

                <div className="absolute bottom-5 lg:-left-16 -left-10 z-50">
                  <div className="backdrop-blur-custom shadow-2xl rounded-md">
                    <BoxReveal boxColor={"whitesmoke"} duration={0.5}>
                      <div className="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                        {/* <h2 className="lg:text-xl font-bold">Category :{""}</h2> */}

                        <span className="block text-xl font-boldsm:text-4xl lg:text-2xl capitalize">
                          {latestProject.projectSector}
                        </span>
                        <span className="block mt-2 text-sm font-medium leading-snug sm:text-base">
                          {" "}
                          Completed on:
                          <br />
                          {latestProject.endDate}{" "}
                        </span>
                      </div>
                    </BoxReveal>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:order-1">
              <BlurFade delay={0.25} inView>
                <h2 className="text-3xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                  {latestProject.projectName}
                </h2>
              </BlurFade>
              <BlurFade delay={0.25 * 2} inView>
                <p className="mt-4 text-base leading-relaxed text-gray-500">
                  {latestProject.client}
                </p>
              </BlurFade>

              <a
                href="/projects"
                className="inline-flex items-center justify-center max-sm:w-full px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-secondary rounded-md hover:bg-primary focus:bg-primary"
                role="button"
              >
                {" "}
                Start exploring{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LatestProject;
