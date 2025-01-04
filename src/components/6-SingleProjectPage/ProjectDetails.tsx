'use client';

import React from 'react';

const ProjectSidebar = ({
  project,
}: {
  project: {
    projectSector: string;
    location: string;
    endDate: string | null;
    client: string;
  };
}) => {
  return (
    <div className="flex flex-wrap gap-x-10 lg:w-[30%] w-[90%] sticky top-28 lg:border-0 dark:border-white/5 border-t-2 lg:pt-0 pt-10">
      <div className="space-y-5">
        <div>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="font-thin text-lg uppercase tracking-widest text-zinc-400"
          >
            Location
          </h2>
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-base text-nowrap w-32 capitalize"
          >
            {project.location}
          </h1>
        </div>
        <div className="flex items-center gap-x-20 justify-between">
          <div>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              className="font-thin text-lg uppercase tracking-widest text-zinc-400"
            >
              Sector
            </h2>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-base capitalize"
            >
              {project.projectSector}
            </h1>
          </div>
          <div>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              className="font-thin text-lg uppercase tracking-widest text-zinc-400"
            >
              End Date
            </h2>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-base capitalize text-nowrap"
            >
              {project.endDate
                ? new Date(project.endDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })
                : 'Still In Progress'}
            </h1>
          </div>
        </div>
        <div>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="font-thin text-lg uppercase tracking-widest text-zinc-400"
          >
            Client
          </h2>
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-base capitalize"
          >
            {project.client}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;
