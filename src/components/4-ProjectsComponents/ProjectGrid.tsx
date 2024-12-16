'use client';
import React from 'react';
import BlurFade from '@/components/ui/blur-fade';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { Project } from '@/models/project';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
  <>
    <div className="flex flex-col gap-y-2 lg:mt-32 mt-10">
      <h1 className="lg:text-6xl text-4xl text-center">What We've Built</h1>
      <p className="font-title dark:text-zinc-300">
        From blueprints to grand openings, see our freshest projects come to
        life
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-16">
      {projects.map((project, idx) => (
        <BlurFade key={project._id} delay={0.25 + idx * 0.1}>
          <ProjectCard project={project} />
        </BlurFade>
      ))}
    </div>
  </>
);

export default ProjectGrid;
