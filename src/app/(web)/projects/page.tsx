"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { getProjects } from "@/libs/apis";
import { Project } from "@/models/project";
import Search from "@/components/Search/Search";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Link from "next/link";
import BlurFade from "@/components/ui/blur-fade";
import { TbFilterSearch } from "react-icons/tb";
import { LayoutGridDemo } from "@/components/ProjectsLayoutGrid/ProjectsGrid";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";

const Projects = () => {
  const [projectSectorFilter, setProjectSectorFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const searchParams = useSearchParams();
  const showFilterIcon = useRef<HTMLHeadingElement | null>(null);
  const [showFilterButton, setShowFilterButton] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to "What We've Built" section

  useEffect(() => {
    const projectType = searchParams.get("projectType");
    if (projectType) setProjectSectorFilter(projectType);
  }, [searchParams]);

  const fetchData = useCallback(async () => getProjects(), []);

  const { data, error, isLoading } = useSWR("get/projectSectors", fetchData, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  });

  const filteredProjects = useMemo(() => {
    return (data || []).filter((project: Project) => {
      if (
        projectSectorFilter &&
        projectSectorFilter.toLowerCase() !== "all" &&
        project.projectSector.toLowerCase() !==
          projectSectorFilter.toLowerCase()
      ) {
        return false;
      }

      if (
        locationFilter &&
        locationFilter.toLowerCase() !== "all" &&
        project.location.toLowerCase() !== locationFilter.toLowerCase()
      ) {
        return false;
      }

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
  }, [data, projectSectorFilter, locationFilter, endDateFilter]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = useCallback(() => setDrawerOpen((prev) => !prev), []);

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

  const scrollToTop = useCallback(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prevPage) => {
      const nextPage = Math.min(prevPage + 1, totalPages);
      scrollToTop();
      return nextPage;
    });
  }, [totalPages, scrollToTop]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prevPage) => {
      const prevPageNumber = Math.max(prevPage - 1, 1);
      scrollToTop();
      return prevPageNumber;
    });
  }, [scrollToTop]);

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);
      scrollToTop();
    },
    [scrollToTop]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFilterButton(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const target = showFilterIcon.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;

      if (scrollPosition >= documentHeight) {
        setShowFilterButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (error) return <div>Error loading projects</div>;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFilterButton(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const target = showFilterIcon.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // Custom CSS for sliding transition
  const filterButtonClass = `fixed bottom-10  right-5 z-50 bg-primary text-white p-3 rounded-full shadow-2xl flex items-center justify-center transition-transform duration-500 ${
    showFilterButton ? "translate-x-0 rotate-0" : "translate-x-20 -rotate-90"
  }`;

  return (
    <section className="pb-20">
      <FeaturedProjects />

      {/* Filter Button with sliding animation */}
      <button
        type="button"
        title="Projects Filters"
        onClick={toggleDrawer}
        className={filterButtonClass}
      >
        <TbFilterSearch className="text-3xl" />
      </button>

      {/* Drawer Content */}
      <div
        className={`fixed lg:bg-transparent lg:backdrop-blur-xl bg-zinc-100 z-[4000] transform transition-transform duration-500
          ${
            drawerOpen
              ? "lg:translate-x-0 lg:left-0 lg:top-0 lg:w-96 lg:h-full bottom-0 w-full h-96 lg:overflow-hidden overflow-auto"
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
        <div className="flex flex-col gap-y-2 lg:mt-32 mt-10" ref={sectionRef}>
          <h1 className="lg:text-6xl text-4xl text-center">What We've Built</h1>
          <p className="font-title dark:text-zinc-300">
            From blueprints to grand openings, see our freshest projects come to
            life
          </p>
        </div>
        <div className="my-20">
          <div
            ref={showFilterIcon}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {displayedProjects.map((project, idx) => (
              <BlurFade key={project._id} delay={0.25 + idx * 0.2}>
                <ProjectCard project={project} />
              </BlurFade>
            ))}
          </div>

          <div className="flex justify-center mt-20 gap-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="bg-primary text-white py-2 px-4 rounded"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageClick(idx + 1)}
                className={`py-2 px-4 rounded ${currentPage === idx + 1 ? "bg-primary text-white" : "bg-gray-300"}`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="bg-primary text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
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
