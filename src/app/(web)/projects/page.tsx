"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { getProjects } from "@/libs/apis";
import { Project } from "@/models/project";
import Search from "@/components/Search/Search";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const Projects = () => {
  const [projectSectorFilter, setProjectSectorFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const projectType = searchParams.get("projectType");

    if (projectType) setProjectSectorFilter(projectType);
  }, [searchParams]);

  async function fetchData() {
    return getProjects();
  }

  const { data, error, isLoading } = useSWR("get/projectSectors", fetchData);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  
  const filterProjects = (projects: Project[]) => {
    return projects.filter((project) => {
      // Apply project sector filter
      if (
        projectSectorFilter &&
        projectSectorFilter.toLowerCase() !== "all" &&
        project.projectSector.toLowerCase() !==
          projectSectorFilter.toLowerCase()
      ) {
        return false;
      }

      // Apply location filter
      if (
        locationFilter &&
        locationFilter.toLowerCase() !== "all" &&
        project.location.toLowerCase() !== locationFilter.toLowerCase()
      ) {
        return false;
      }

      // Apply end date filter
      if (endDateFilter && endDateFilter.toLowerCase() !== "all") {
        if (
          endDateFilter.toLowerCase() === "still in progress" &&
          !project.stillInProgress
        ) {
          return false;
        }
        if (
          endDateFilter.toLowerCase() !== "still in progress" &&
          project.endDate &&
          new Date(project.endDate).getFullYear().toString() !==
            endDateFilter.toLowerCase()
        ) {
          return false;
        }
      }

      return true;
    });
  };

  const filteredProjects = filterProjects(data || []);

  return (
    <div className="container mx-auto px-20 py-40">
      <Search
        projectSectorFilter={projectSectorFilter}
        setProjectSectorFilter={setProjectSectorFilter}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        endDateFilter={endDateFilter}
        setEndDateFilter={setEndDateFilter}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
