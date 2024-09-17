"use client";

import React, { useRef } from "react";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { getProjects } from "@/libs/apis";
import { Project } from "@/models/project";
import Search from "@/components/Search/Search";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

import Link from "next/link";
import { LayoutGridDemo } from "@/components/ProjectsLayoutGrid/ProjectsGrid";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import { IoFilter } from "react-icons/io5";

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

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
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
    <section className="pb-20">
      <FeaturedProjects />

      {/* Drawer Toggle Button with Search Icon */}
      <button
        onClick={toggleDrawer}
        className="fixed bottom-10 right-5 z-50 bg-primary text-white p-3 rounded-full shadow-2xl flex items-center justify-center"
      >
        <IoFilter className="text-3xl" />
      </button>

      {/* Drawer Component */}
      <div
        className={`fixed lg:bg-transparent lg:backdrop-blur-xl bg-zinc-100 z-[4000] transform transition-transform duration-500
        ${
          drawerOpen
            ? "lg:translate-y-0 lg:left-0 lg:top-0 lg:w-96 lg:h-full bottom-0 w-full h-96 lg:overflow-hidden overflow-auto"
            : "lg:-translate-x-full lg:left-0 lg:top-0 lg:w-96 lg:h-full bottom-0 w-full h-96 translate-y-full"
        }`}
      >
        <div className="lg:px-5 px-0 py-10 flex flex-col gap-y-4 h-full justify-start items-start lg:py-24">
          <div className="px-5 flex items-center justify-center gap-x-12">
            <h1 className="text-4xl pb-3">Projects Filters</h1>
            <button
              onClick={toggleDrawer}
              className="text-3xl text-black font-bold"
            >
              &times;
            </button>
          </div>
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
          <h1 className="lg:text-6xl text-4xl text-center">What We've Built</h1>
          <p className="font-title dark:text-zinc-300">
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
            <h1 className="text-white lg:text-5xl text-3xl text-center">
              Find Construction Team
            </h1>
            <p className="lg:text-lg text-md text-white text-center w-[70%]">
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

      <section>
        <div className="flex flex-col gap-y-10 lg:w-[60%] w-[90%] mx-auto">
          <h1 className="lg:text-6xl text-4xl text-center">Projects by Area</h1>
          <p className="text-center lg:text-xl text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam
            animi harum
          </p>
        </div>
        <LayoutGridDemo />
      </section>
    </section>
  );
};

export default Projects;
