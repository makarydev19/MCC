'use client';
import React from 'react';
import ProjectCard from '@/components/Cards/ProjectCard';
import { Project } from '@/models/project';
import { BlurFade } from '../../components/ui/blur-fade';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
  <>
    <div className="flex flex-col gap-y-2 lg:mt-32 mt-24">
      <h1 className="font-heading dark:text-[whitesmoke] text-center">
        What we have accomplished...
      </h1>
      <p className="font-title dark:text-zinc-300">
        From blueprints to grand openings, see our projects come to life
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 pt-28">
      {projects.map((project, idx) => (
        <BlurFade key={project._id} delay={0.25 + idx * 0.1} inView>
          <ProjectCard project={project} />
        </BlurFade>
      ))}
    </div>
  </>
);

export default ProjectGrid;
