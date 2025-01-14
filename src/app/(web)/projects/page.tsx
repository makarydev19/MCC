'use client';

import React, { useState, useCallback } from 'react';
import useSWR from 'swr';
import { getProjects } from '@/libs/apis';
import { Project } from '@/models/project';
import LoadingSpinner from '../loading';
import {
  FilterButton,
  LandingSection,
  Pagination,
  ProjectCards,
  FindConstructionTeam,
} from '@/components/4-ProjectsComponents';

const Projects = () => {
  // State for filters
  const [projectSectorFilter, setProjectSectorFilter] = useState('');
  const [endDateFilter, setEndDateFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const fetchData = useCallback(() => getProjects(), []);

  const { data, error, isLoading } = useSWR('get/projectSectors', fetchData, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  });

  if (error) throw new Error('Cannot fetch data');
  if (!data && !isLoading) throw new Error('Cannot fetch data');
  if (!data) return <LoadingSpinner />;

  // Filter projects
  const filteredProjects = (data || [])
    .filter((project: Project) => !project.isHidden)
    .filter((project: Project) => {
      const matchSector =
        !projectSectorFilter ||
        projectSectorFilter.toLowerCase() === 'all' ||
        project.projectSector.toLowerCase() ===
          projectSectorFilter.toLowerCase();

      const matchLocation =
        !locationFilter ||
        locationFilter.toLowerCase() === 'all' ||
        project.location.toLowerCase() === locationFilter.toLowerCase();

      return matchSector && matchLocation;
    });

  // Get the first 6 projects with unique locations
  const firstUniqueProjects: Project[] = [];
  const seenLocations = new Set<string>();

  for (const project of filteredProjects) {
    if (!seenLocations.has(project.location.toLowerCase())) {
      firstUniqueProjects.push(project);
      seenLocations.add(project.location.toLowerCase());
    }
    if (firstUniqueProjects.length === 6) break;
  }

  // Combine first unique projects with the rest for full pagination
  const combinedProjects = [
    ...firstUniqueProjects,
    ...filteredProjects.filter(
      (project) => !firstUniqueProjects.includes(project)
    ),
  ];

  // Pagination
  const totalPages = Math.ceil(combinedProjects.length / projectsPerPage);
  const displayedProjects = combinedProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log('Current Page:', page);
  };

  return (
    <section>
      <LandingSection />

      <FilterButton
        projectSectorFilter={projectSectorFilter}
        setProjectSectorFilter={setProjectSectorFilter}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
      />

      <div className="lg:px-20 px-5">
        <ProjectCards projects={displayedProjects} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <FindConstructionTeam />
    </section>
  );
};

export default Projects;
