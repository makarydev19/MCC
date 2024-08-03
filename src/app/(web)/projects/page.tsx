"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { getProjects } from "@/libs/apis";
import { Project } from "@/models/project";
import Search from "@/components/Search/Search";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Link from "next/link";

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
      <div className="projects-page lg:h-[75vh] h-[45vh] rounded-b-xl">
        <div className="w-full h-full flex gap-y-20 flex-col items-center justify-end backdrop-brightness-[.4] rounded-b-xl lg:py-20 py-10">
          <div className="flex flex-col lg:gap-y-10 gap-y-5">
            <h1 className="lg:text-8xl text-5xl text-center text-white">
              What <br className="lg:hidden block" /> We've Built
            </h1>
            <p className="text-gray-100 lg:text-3xl text-2xl w-[95%] mx-auto text-center">
              Transforming blueprints into beautiful, functional spaces
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full lg:flex flex-col items-center lg:-mt-11 -mt-5 sticky z-50">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-anchor-placement="top-bottom"
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
      <div className="lg:px-20 px-5">
        <div className="flex flex-col gap-y-2 lg:mt-32 mt-10">
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
      <div className="h-[60vh] my-20 services-bg">
        <div className="w-full h-full flex flex-col gap-y-7 items-center justify-center backdrop-brightness-[.3]">
          <div className="flex flex-col gap-y-5 items-center justify-center">
            <h1 className="text-white text-5xl ">Find Construction Team</h1>
            <p className="text-lg text-white text-center w-[70%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              sequi quod tempore totam magni ex consequatur ad ipsam.
            </p>
          </div>
          <Link
            href={"/contactUs"}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
          >
            <button className="hover:bg-primary bg-transparent border-[1.7px] border-[#f2f2f23a] text-gray-100 self-baseline rounded p-2 px-6">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
