'use client';

import { getProject } from '@/libs/apis';
import LoadingSpinner from '../../loading';
import useSWR from 'swr';
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
    return (
      <p className="container-x py-48 text-center text-brand">
        Error loading project.
      </p>
    );
  if (isLoading || !project) return <LoadingSpinner />;

  return (
    <section>
      <ProjectImages
        photos={project.images}
        coverImage={project.coverImage}
        title={project.projectName}
        sector={project.projectSector}
        location={project.location}
      />
      <div className="container-x grid items-start gap-12 py-20 md:py-28 lg:grid-cols-[1fr_380px] lg:gap-20">
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
