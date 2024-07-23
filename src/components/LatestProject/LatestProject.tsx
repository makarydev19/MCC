"use client";

import Image from "next/image";

import { Project } from "@/models/project";
import { FC } from "react";

import Link from "next/link";

type Props = {
  latestProject: Project;
};

const LatestProject: FC<Props> = (props) => {
  const { latestProject } = props;
  return (
    <section className="container mx-auto md:px-16 px-5 py-24">
      <div className="flex flex-col gap-y-3">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="font-heading text-center"
        >
          Latest Project
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          className="font-title lg:w-[35rem] w-0 self-center"
        >
          Experience the pinnacle of our construction expertise in our latest
          creation
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-12 mt-20 items-center">
        <div className="md:grid grid-cols-1 grid-rows-2 gap-4 lg:w-[50%]">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="rounded-2xl overflow-hidden h-48 mb-4 md:mb-0"
          >
            <Image
              alt={latestProject.projectName}
              src={latestProject.coverImage.url}
              width={2000}
              height={2000}
              className="img scale-animation"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="grid grid-cols-2 grid-rows-1 gap-4 h-48"
          >
            {latestProject.images.slice(1, 3).map((image) => (
              <div key={image._key} className="rounded-2xl overflow-hidden">
                <Image
                  alt={image._key}
                  src={image.url}
                  width={2000}
                  height={2000}
                  className="img scale-animation"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[50%] flex flex-col gap-7">
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <h2 className="text-3xl font-medium capitalize">
              {latestProject.projectName}
            </h2>
            {/* <p className="text-lg mt-8">
              Construction Works: {latestProject.constructionWorks}
            </p>
            <p className="text-lg mt-4">
              Finishing Works: {latestProject.finishingWorks}
            </p> */}
          </div>
          <div className="flex flex-wrap items-end">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="flex flex-col gap-3"
            >
              {/* <h3 className="text-2xl">Project Info</h3> */}
              <p className="text-lg">Client: {latestProject.client}</p>
              <p className="capitalize text-lg">
                Category: {latestProject.projectSector}
              </p>
              <p className="text-lg">Completed On: {latestProject.endDate}</p>

              <Link href={`/projects`}>
                <div className="">
                  <button
                    className="overflow-hidden relative mt-10 md:w-40 w-80 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
                    data-aos="flip-down"
                  >
                    All Projects
                    <span className="absolute md:w-36 w-80 h-32 -top-8 -left-2 bg-red-400 lg:rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                    <span className="absolute md:w-36 w-80 h-32 -top-8 -left-2 bg-white lg:rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                    <span className="absolute md:w-36 w-80 h-32 -top-8 -left-2 bg-secondary lg:rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                    <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                      Explore!
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
