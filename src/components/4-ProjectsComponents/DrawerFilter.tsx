'use client';
import React from 'react';
import Search from '@/components/Search/Search';

interface DrawerFilterProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  projectSectorFilter: string;
  setProjectSectorFilter: React.Dispatch<React.SetStateAction<string>>;
  locationFilter: string;
  setLocationFilter: React.Dispatch<React.SetStateAction<string>>;
  endDateFilter: string;
  setEndDateFilter: React.Dispatch<React.SetStateAction<string>>;
}

const DrawerFilter: React.FC<DrawerFilterProps> = ({
  drawerOpen,
  toggleDrawer,
  projectSectorFilter,
  setProjectSectorFilter,
  locationFilter,
  setLocationFilter,
  endDateFilter,
  setEndDateFilter,
}) => (
  <div
    className={`fixed rounded-xl shadow-2xl bg-zinc-50 dark:bg-zinc-900 z-[6000] transform transition-transform duration-500
      ${
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
);

export default DrawerFilter;
