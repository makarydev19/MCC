'use client';

import { getProject } from '@/libs/apis';
import LoadingSpinner from '../../loading';
import useSWR from 'swr';
import ProjectPhotoGallery from '@/components/SingleProjectPage/ProjectPhotoGallery';
import FindConstructionTeam from '@/components/4-ProjectsComponents/FindConstructionTeam';
import { motion } from 'framer-motion';

const ProjectsDetails = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const fetchProject = async () => getProject(slug);

  const {
    data: project,
    error,
    isLoading,
  } = useSWR('/api/project', fetchProject);

  if (error) throw new Error('Cannot fetch data');
  if (typeof project === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  if (!project) return <LoadingSpinner />;

  return (
    <section>
      <div className="dark:bg-DarkModeBG bg-LightModeBG dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-DarkModeBG bg-LightModeBG [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="pb-8">
          <ProjectPhotoGallery
            photos={project.images}
            coverImage={project.coverImage}
          />
        </div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute z-10 lg:top-[40%] top-[35%] lg:w-[60%] w-[85%] text-4xl font-extrabold tracking-tight lg:text-5xl text-white lg:px-24 px-4"
        >
          <p className="">{project.projectName}</p>
        </motion.div>
        {/* <hr className="bg-slate-700 w-[80%] mb-10" /> */}
      </div>
      <div className="w-full flex lg:flex-row flex-col gap-y-10 items-start justify-between lg:px-20 px-5 lg:pt-56 pt-32 lg:pb-32 pb-20">
        <div className="lg:w-[80%] flex flex-col lg:gap-y-10 gap-y-5">
          <h2
            data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="text-xl font-sans tracking-widest font-medium text-secondary uppercase"
          >
            Project Details
          </h2>
          {project.projectContent1 && (
            <div className="flex flex-col gap-y-5 lg:max-w-[90%]">
              <h1 className="lg:text-5xl text-3xl">
                {project.projectContent1}
              </h1>
              <h4 className="scroll-m-20 text-xl  tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
                {project.details1}
              </h4>
            </div>
          )}
          {project.projectContent2 && (
            <div className="flex flex-col gap-y-5 lg:max-w-[90%]">
              <h1 className="lg:text-5xl text-3xl">
                {project.projectContent2}
              </h1>
              <h4 className="scroll-m-20 text-xl  tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
                {project.details2}
              </h4>
            </div>
          )}
          {project.projectContent3 && (
            <div className="flex flex-col gap-y-5 lg:max-w-[90%]">
              <h1 className="lg:text-5xl text-3xl">
                {project.projectContent3}
              </h1>
              <h4 className="scroll-m-20 text-xl  tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
                {project.details3}
              </h4>
            </div>
          )}
          {project.projectContent4 && (
            <div className="flex flex-col gap-y-5 lg:max-w-[90%]">
              <h1 className="lg:text-5xl text-3xl">
                {project.projectContent4}
              </h1>
              <h4 className="scroll-m-20 text-xl  tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
                {project.details4}
              </h4>
            </div>
          )}
          {project.projectContent5 && (
            <div className="flex flex-col gap-y-5 lg:max-w-[90%]">
              <h1 className="lg:text-5xl text-3xl">
                {project.projectContent5}
              </h1>
              <h4 className="scroll-m-20 text-xl  tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
                {project.details5}
              </h4>
            </div>
          )}
          {project.constructionWorks && (
            <div className="flex flex-col gap-y-5 lg:max-w-[90%]">
              <h1 className="lg:text-5xl text-3xl">Construction Works</h1>
              <h4 className="scroll-m-20 text-xl  tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
                {project.constructionWorks}
              </h4>
            </div>
          )}
          {project.finishingWorks && (
            <div className="flex flex-col gap-y-5 lg:max-w-[80%]">
              <h1 className="lg:text-5xl text-3xl">Finishing Works</h1>
              <h3 className="scroll-m-20 text-xl  tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
                {project.finishingWorks}
              </h3>
            </div>
          )}
          {project.complementaryWorks && (
            <div className="flex flex-col gap-y-5 lg:max-w-[80%]">
              <h1 className="lg:text-5xl text-3xl">Complementary Works</h1>
              <h3 className="scroll-m-20 text-xl tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
                {project.complementaryWorks}
              </h3>
            </div>
          )}
          {project.restaurantFinishingWorks && (
            <div className="flex flex-col gap-y-5 lg:max-w-[80%]">
              <h1 className="lg:text-5xl text-3xl">
                Restaurant Finishing Works
              </h1>
              <h3 className="scroll-m-20 text-xl tracking-tight capitalize dark:text-zinc-500 text-zinc-600">
                {project.restaurantFinishingWorks}
              </h3>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-x-10 lg:w-[30%] w-[90%] sticky top-28 lg:border-0 dark:border-white/5 border-t-2 lg:pt-0 pt-10">
          <div className="space-y-5">
            <div>
              <h2 className="font-thin text-lg uppercase tracking-widest text-zinc-400">
                Sector
              </h2>
              <h1 className="text-base capitalize">{project.projectSector}</h1>
            </div>
            <div>
              <h2 className="font-thin text-lg uppercase tracking-widest text-zinc-400">
                Location
              </h2>
              <h1 className="text-base text-wrap w-32 capitalize">
                {project.location}
              </h1>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <h2 className="font-thin text-nowrap text-lg uppercase tracking-widest text-zinc-400">
                Start Date
              </h2>
              <h1 className="text-base capitalize">
                {new Date(project.startDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </h1>
            </div>
            <div>
              <h2 className="font-thin text-lg uppercase tracking-widest text-zinc-400">
                End Date
              </h2>
              <h1 className="text-base capitalize text-nowrap">
                {project.endDate
                  ? new Date(project.endDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })
                  : 'Still In Progress'}
              </h1>
            </div>
          </div>
          <div className="pt-5">
            <h2 className="font-thin text-lg uppercase tracking-widest text-zinc-400">
              Client
            </h2>
            <h1 className="text-base capitalize">{project.client}</h1>
          </div>
        </div>
      </div>
      <FindConstructionTeam />
    </section>
  );
};

export default ProjectsDetails;
