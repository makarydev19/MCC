"use client";

import { getProject } from "@/libs/apis";
import LoadingSpinner from "../../loading";
import useSWR from "swr";
import ProjectPhotoGallery from "@/components/ProjectPhotoGallery/ProjectPhotoGallery";

const ProjectsDetails = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const fetchProject = async () => getProject(slug);

  const {
    data: project,
    error,
    isLoading,
  } = useSWR("/api/project", fetchProject);

  if (error) throw new Error("Cannot fetch data");
  if (typeof project === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (!project) return <LoadingSpinner />;

  return (
    <section>
      <div className="h-full w-full dark:bg-black bg-[#FBFCF8] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col lg:items-start relative lg:px-20 px-1">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* <Spotlight fill="red" className="top-[40%]" /> */}
        <div className="py-8 lg:pt-24 pt-20 z-10">
          <ProjectPhotoGallery
            photos={project.images}
            coverImage={project.coverImage}
          />
        </div>
        <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:h-[30vh] lg:w-[55%] w-[95%] relative bg-clip-text dark:text-transparent text-black bg-gradient-to-b from-neutral-200 to-neutral-500 lg:mt-0 mt-32 px-4">
          {project.projectName}
        </p>
        <hr className="bg-slate-700 w-[80%] mb-10" />
      </div>
      <div className="lg:mt-10 w-full flex lg:flex-row flex-col gap-y-10 items-start justify-between lg:px-20 px-5 lg:pt-10 pt-4 pb-32">
        <div className="lg:w-[80%] flex flex-col lg:gap-y-10 gap-y-5">
          <h2
            //   data-aos="fade-in"
            //   data-aos-easing="linear"
            //   data-aos-duration="800"
            className="text-xl font-sans tracking-widest font-medium text-secondary uppercase"
          >
            Project Details
          </h2>
          <div className="flex flex-col gap-y-5 lg:max-w-[90%]">
            <h1 className="lg:text-5xl text-3xl">Construction Works</h1>
            <h4 className="scroll-m-20 text-xl  tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
              {project.constructionWorks}
            </h4>
          </div>
          <div className="flex flex-col gap-y-5 lg:max-w-[80%]">
            <h1 className="lg:text-5xl text-3xl">Finishing Works</h1>
            <h3 className="scroll-m-20 text-xl  tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
              {project.finishingWorks}
            </h3>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-x-8 w-[95%] justify-between lg:sticky lg:top-28 lg:pr-0 pr-14 gap-y-6 lg:w-[30%]">
          <div>
            <h2 className="font-thin text-lg uppercase tracking-widest text-zinc-400">
              Sector
            </h2>
            <h1 className="text-lg capitalize">{project.projectSector}</h1>
          </div>
          <div>
            <h2 className="font-thin text-lg uppercase tracking-widest text-zinc-400">
              Client
            </h2>
            <h1 className="text-lg capitalize">{project.client}</h1>
          </div>
          <div>
            <h2 className="font-thin text-lg uppercase tracking-widest text-zinc-400">
              Start Date
            </h2>
            <h1 className="text-lg capitalize">
              {new Date(project.startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </h1>
          </div>
          <div>
            <h2 className="font-thin text-lg uppercase tracking-widest text-zinc-400">
              End Date
            </h2>
            <h1 className="text-lg capitalize">
              {project.endDate
                ? new Date(project.endDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })
                : "Still In Progress"}
            </h1>
          </div>
          <div>
            <h2 className="font-thin text-lg uppercase tracking-widest text-zinc-400">
              Location
            </h2>
            <h1 className="text-lg capitalize">{project.location}</h1>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="w-96 h-52">
          <Image
            src={project.coverImage.url}
            alt={project.projectName}
            width={1000}
            height={1000}
            className="img"
          />
        </div>
        <div className="w-96 h-52">
          <Image
            src={project.images}
            alt={project.projectName}
            width={1000}
            height={1000}
          />
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsDetails;
