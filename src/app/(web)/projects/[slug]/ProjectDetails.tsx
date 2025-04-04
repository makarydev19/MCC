'use client';

import { getProject } from '@/libs/apis';
import LoadingSpinner from '../../loading';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import {
  ProjectImages,
  ProjectContent,
  SideBarDetails,
} from '@/sections/6-SingleProjectSections';
import { FindConstructionTeam } from '@/sections/4-ProjectsSections';

const ProjectsDetails = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const {
    data: project,
    error,
    isLoading,
  } = useSWR(`/api/project/${slug}`, () => getProject(slug), {
    revalidateOnFocus: false,
  });

  if (error)
    return <p className="text-red-500 text-center">Error loading project.</p>;
  if (isLoading || !project) return <LoadingSpinner />;

  return (
    <section>
      <div className="dark:bg-DarkModeBG bg-LightModeBG dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-DarkModeBG bg-LightModeBG [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="pb-8">
          <ProjectImages
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
          className="absolute z-10 lg:top-[40%] top-[35%] lg:w-[60%] w-[85%] md:text-6xl text-4xl font-extrabold tracking-tight lg:text-5xl text-white lg:px-24 px-4"
        >
          <p>{project.projectName}</p>
        </motion.div>
      </div>
      <div className="w-full flex lg:flex-row flex-col gap-y-10 items-start justify-between lg:px-20 px-5 lg:pt-56 pt-32 lg:pb-32 pb-20">
        <ProjectContent project={project} />
        <SideBarDetails
          project={{
            projectSector: project.projectSector,
            location: project.location,
            endDate: project.endDate,
            client: project.client,
          }}
        />
      </div>
      <FindConstructionTeam />
    </section>
  );
};

export default ProjectsDetails;
