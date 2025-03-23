'use client';

import React from 'react';

const ProjectContent = ({ project }: { project: any }) => {
  return (
    <div className="lg:w-[80%] flex flex-col lg:gap-y-10 gap-y-5">
      <h2
        data-aos="fade-right"
        data-aos-duration="800"
        className="text-xl font-sans tracking-widest font-medium text-secondary uppercase"
      >
        Project Details
      </h2>
      {project.contentDetails?.map((item: any, index: number) => (
        <div key={index} className="flex flex-col gap-y-5 lg:max-w-[90%]">
          {item.content && (
            <h1
              data-aos="fade-right"
              data-aos-duration="800"
              className="lg:text-5xl text-3xl"
            >
              {item.content}
            </h1>
          )}
          {item.details && (
            <h4
              data-aos="fade-right"
              data-aos-duration="800"
              className="scroll-m-20 text-xl tracking-tight capitalize dark:text-zinc-500 text-zinc-600"
            >
              {item.details}
            </h4>
          )}
        </div>
      ))}
      {project.constructionWorks && (
        <div className="flex flex-col gap-y-5 lg:max-w-[90%]">
          <h1
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:text-5xl text-3xl"
          >
            Construction Works
          </h1>
          <h4
            data-aos="fade-right"
            data-aos-duration="800"
            className="scroll-m-20 text-xl tracking-tight capitalize dark:text-zinc-500 text-zinc-600"
          >
            {project.constructionWorks}
          </h4>
        </div>
      )}
      {project.finishingWorks && (
        <div className="flex flex-col gap-y-5 lg:max-w-[80%]">
          <h1
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:text-5xl text-3xl"
          >
            Finishing Works
          </h1>
          <h3
            data-aos="fade-right"
            data-aos-duration="800"
            className="scroll-m-20 text-xl tracking-tight capitalize dark:text-zinc-500 text-zinc-600"
          >
            {project.finishingWorks}
          </h3>
        </div>
      )}
      {project.complementaryWorks && (
        <div className="flex flex-col gap-y-5 lg:max-w-[80%]">
          <h1
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:text-5xl text-3xl"
          >
            Complementary Works
          </h1>
          <h3
            data-aos="fade-right"
            data-aos-duration="800"
            className="scroll-m-20 text-xl tracking-tight capitalize dark:text-zinc-500 text-zinc-600"
          >
            {project.complementaryWorks}
          </h3>
        </div>
      )}
      {project.restaurantFinishingWorks && (
        <div className="flex flex-col gap-y-5 lg:max-w-[80%]">
          <h1
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:text-5xl text-3xl"
          >
            Restaurant Finishing Works
          </h1>
          <h3
            data-aos="fade-right"
            data-aos-duration="800"
            className="scroll-m-20 text-xl tracking-tight capitalize dark:text-zinc-500 text-zinc-600"
          >
            {project.restaurantFinishingWorks}
          </h3>
        </div>
      )}
    </div>
  );
};

export default ProjectContent;
