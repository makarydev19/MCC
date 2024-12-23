'use client';

import React, { useState, useMemo, useCallback } from 'react';
import useSWR from 'swr';
import { getProjects } from '@/libs/apis';
import { Project } from '@/models/project';
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

  const fetchData = useCallback(() => getProjects(), []);

  const { data, error } = useSWR('get/projectSectors', fetchData, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  });

  // Filter the projects to include only those that are not hidden
  const filteredProjects = useMemo(() => {
    return (data || [])
      .filter((project: Project) => !project.isHidden) // Exclude hidden projects
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

        const matchEndDate =
          !endDateFilter ||
          endDateFilter.toLowerCase() === 'all' ||
          (endDateFilter.toLowerCase() === 'still in progress'
            ? project.stillInProgress
            : project.endDate &&
              new Date(project.endDate).getFullYear().toString() ===
                endDateFilter);

        return matchSector && matchLocation && matchEndDate;
      });
  }, [data, projectSectorFilter, locationFilter, endDateFilter]);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(
      (currentPage - 1) * projectsPerPage,
      currentPage * projectsPerPage
    );
  }, [filteredProjects, currentPage]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error loading projects
      </div>
    );
  }

  return (
    <section>
      <LandingSection />

      <FilterButton
        projectSectorFilter={projectSectorFilter}
        setProjectSectorFilter={setProjectSectorFilter}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        endDateFilter={endDateFilter}
        setEndDateFilter={setEndDateFilter}
      />

      <div className="lg:px-20 px-5">
        <ProjectCards projects={displayedProjects} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPreviousPage={() =>
            setCurrentPage((prev) => Math.max(prev - 1, 1))
          }
          goToNextPage={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          handlePageClick={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </div>

      <FindConstructionTeam />
    </section>
  );
};

export default Projects;
