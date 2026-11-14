'use client';

import React from 'react';
import { Reveal } from '@/components/ui/reveal';

const Block = ({ title, body }: { title?: string; body?: string }) => (
  <div className="flex flex-col gap-4 border-b border-line pb-10 last:border-0">
    {title && (
      <Reveal>
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-fg md:text-4xl">
          {title}
        </h2>
      </Reveal>
    )}
    {body && (
      <Reveal delay={0.08}>
        <p className="lead whitespace-pre-line text-lg first-letter:capitalize">
          {body}
        </p>
      </Reveal>
    )}
  </div>
);

const ProjectContent = ({ project }: { project: any }) => {
  return (
    <div className="flex flex-col gap-10">
      <Reveal>
        <p className="eyebrow">Project Details</p>
      </Reveal>
      {project.contentDetails?.map((item: any, index: number) => (
        <Block key={index} title={item.content} body={item.details} />
      ))}
      {project.constructionWorks && (
        <Block title="Construction Works" body={project.constructionWorks} />
      )}
      {project.finishingWorks && (
        <Block title="Finishing Works" body={project.finishingWorks} />
      )}
      {project.complementaryWorks && (
        <Block title="Complementary Works" body={project.complementaryWorks} />
      )}
      {project.restaurantFinishingWorks && (
        <Block
          title="Restaurant Finishing Works"
          body={project.restaurantFinishingWorks}
        />
      )}
    </div>
  );
};

export default ProjectContent;
