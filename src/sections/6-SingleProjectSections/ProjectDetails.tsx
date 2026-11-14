'use client';

import React from 'react';
import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Reveal } from '@/components/ui/reveal';

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
  const facts = [
    { label: 'Location', value: project.location },
    { label: 'Sector', value: project.projectSector },
    {
      label: 'End Date',
      value: project.endDate
        ? new Date(project.endDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })
        : 'Still In Progress',
    },
    { label: 'Client', value: project.client },
  ];

  return (
    <Reveal className="card sticky top-28 p-7 shadow-card md:p-8">
      <dl>
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-line py-5 first:pt-0"
          >
            <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-subtle">
              {fact.label}
            </dt>
            <dd className="mt-1.5 font-display text-xl font-bold capitalize tracking-tight text-fg">
              {fact.value || '—'}
            </dd>
          </div>
        ))}
      </dl>
      <Link href="/contact" className="btn-brand mt-7 w-full">
        Start a similar project
        <IconArrowUpRight stroke={2.2} />
      </Link>
    </Reveal>
  );
};

export default ProjectSidebar;
