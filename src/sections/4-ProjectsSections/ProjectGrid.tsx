'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from '@/components/Cards/ProjectCard';
import { Project } from '@/models/project';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
  <motion.div
    layout
    className="grid grid-cols-1 gap-x-6 gap-y-12 pt-10 md:grid-cols-2 lg:grid-cols-3"
  >
    <AnimatePresence mode="popLayout">
      {projects.map((project, idx) => (
        <motion.div
          key={project._id}
          layout
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{
            duration: 0.5,
            delay: idx * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </AnimatePresence>
    {projects.length === 0 && (
      <div className="col-span-full rounded-2xl border border-dashed border-line py-20 text-center">
        <p className="font-display text-xl font-bold text-fg">
          No projects match these filters
        </p>
        <p className="mt-2 text-subtle">
          Try another sector or location.
        </p>
      </div>
    )}
  </motion.div>
);

export default ProjectGrid;
