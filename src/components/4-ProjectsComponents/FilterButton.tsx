'use client';
import React, { useState, useRef, useEffect } from 'react';
import { TbFilterSearch } from 'react-icons/tb';
import Search from '@/components/Search/Search';

interface FiltersProps {
  projectSectorFilter: string;
  setProjectSectorFilter: React.Dispatch<React.SetStateAction<string>>;
  locationFilter: string;
  setLocationFilter: React.Dispatch<React.SetStateAction<string>>;
  endDateFilter: string;
  setEndDateFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filters: React.FC<FiltersProps> = ({
  projectSectorFilter,
  setProjectSectorFilter,
  locationFilter,
  setLocationFilter,
  endDateFilter,
  setEndDateFilter,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(false);
  const showFilterIcon = useRef<HTMLHeadingElement | null>(null);

  // Toggle Drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Show/Hide Filter Button based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowFilterButton(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (showFilterIcon.current) {
      observer.observe(showFilterIcon.current);
    }

    return () => {
      if (showFilterIcon.current) observer.unobserve(showFilterIcon.current);
    };
  }, []);

  return (
    <>
      {/* Filter Button */}
      <button
        type="button"
        title="Projects Filters"
        onClick={toggleDrawer}
        className={`fixed bottom-[7%] right-5 z-50 bg-zinc-900 dark:bg-LightModeBG text-white dark:text-black p-3 rounded-full shadow-2xl flex items-center justify-center transition-transform duration-500 ${
          showFilterButton
            ? 'translate-x-0 rotate-0'
            : 'translate-x-20 -rotate-90'
        }`}
      >
        <TbFilterSearch className="text-3xl" />
      </button>

      {/* Drawer Filter */}
      <div
        className={`fixed rounded-xl shadow-2xl bg-zinc-50 dark:bg-zinc-900 z-[6000] transform transition-transform duration-500 ${
          drawerOpen
            ? 'lg:-translate-x-0 lg:left-0 lg:top-20 lg:w-96 lg:h-[80%] bottom-0 w-full h-96 overflow-auto hide-scrollbar'
            : 'lg:-translate-y-full lg:left-0 lg:top-0 lg:w-96 lg:h-[80%] bottom-0 w-full h-96 translate-y-full'
        }`}
      >
        <div className="lg:px-5 px-0 py-10 flex flex-col gap-y-4 h-full justify-start items-start lg:py-24">
          <div className="px-5 flex items-center justify-center gap-x-12">
            <h1 className="text-4xl pb-3">Projects Filters</h1>
            <button
              onClick={toggleDrawer}
              className="text-3xl text-black dark:text-zinc-100 font-bold"
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
      <div ref={showFilterIcon} />
    </>
  );
};

export default Filters;