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
  }, []);

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

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Load more projects
  const loadMoreProjects = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Get the projects to display based on current page
  const displayedProjects = filteredProjects.slice(
    0,
    currentPage * projectsPerPage
  );

  return (
    <section>
      <div className="projects-page h-[80vh] rounded-b-xl">
        <div className="w-full h-full lg:flex gap-y-20 flex-col items-center justify-center backdrop-brightness-[.4] rounded-b-xl lg:py-0 py-44">
          <div className="flex flex-col gap-y-10">
            <h1 className="lg:text-8xl text-5xl text-center text-white">
              What We've Built
            </h1>
            <p className="text-gray-100 lg:text-3xl text-2xl text-center">
              Transforming blueprints into beautiful, functional spaces.
            </p>
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-duration="900"
            // data-aos-anchor-placement="top-bottom"
            className="lg:-mb-44 lg:mt-0 mt-20"
          >
            <Search
              projectSectorFilter={projectSectorFilter}
              setProjectSectorFilter={setProjectSectorFilter}
              locationFilter={locationFilter}
              setLocationFilter={setLocationFilter}
              endDateFilter={endDateFilter}
              setEndDateFilter={setEndDateFilter}
            />
          </div>
        </div>
      </div>
      <div className="lg:px-20 px-5">
        <div className="flex flex-col gap-y-2 mt-32">
          <h1 className="font-heading text-center">Latest Projects</h1>
          <p className="font-title">
            From blueprints to grand openings, see our freshest projects come to
            life
          </p>
        </div>
        <div className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
          {displayedProjects.length < filteredProjects.length && (
            <div className="flex justify-center mt-20">
              <button
                onClick={loadMoreProjects}
                className="bg-primary text-white py-2 px-4 rounded"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
