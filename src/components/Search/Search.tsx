"use client";

import { FC } from "react";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import CustomSelect from "@/components/CustomSelect/CustomSelect";

type Props = {
  projectSectorFilter: string;
  setProjectSectorFilter: (value: string) => void;
  locationFilter: string;
  setLocationFilter: (value: string) => void;
  endDateFilter: string;
  setEndDateFilter: (value: string) => void;
};

const Search: FC<Props> = ({
  projectSectorFilter,
  setProjectSectorFilter,
  locationFilter,
  setLocationFilter,
  endDateFilter,
  setEndDateFilter,
}) => {
  const projectSectors = [
    "All",
    "Commercial",
    "Residential",
    "Administrative",
    "Touristic",
    "Service",
  ];
  const locations = [
    "All",
    "Sharm El-Sheikh",
    "El-Obour City",
    "Porto Pyramids",
    "Octobor",
    "Port-Said",
    "The New Administrative Capital",
    "North Coast",
  ];
  const years = [
    "All",
    "Still In Progress",
    ...Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) =>
      (2000 + i).toString()
    ),
  ];

  return (
    <div className="lg:w-full mx-auto w-[90%] bg-white dark:bg-zinc-900 lg:px-10 px-2 py-4 rounded-md shadow-5xl">
      <div className="relative flex gap-5 items-center justify-between">
        <div className="flex flex-wrap flex-grow gap-4">
          {/* Project Sector Select with Icon */}
          <div className="flex flex-col lg:border-0 border-l-[1.5px] border-[#00000022]">
            <div className="pl-4 flex gap-x-4 items-center pb-1">
              <FaBuilding className="text-gray-500 dark:text-gray-200" />
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">
                Project Sector
              </h3>
            </div>
            <div className="relative lg:w-[15rem] w-[19.4rem]">
              <CustomSelect
                options={projectSectors}
                value={projectSectorFilter}
                onChange={setProjectSectorFilter}
                placeholder="Select project sector"
              />
            </div>
          </div>

          {/* End Date Select with Icon */}
          <div className="flex flex-col border-l-[1.5px]  border-[#00000022] dark:border-zinc-700">
            <div className="pl-4 flex gap-x-4 items-center pb-1">
              <FaCalendarAlt className="text-gray-500 dark:text-gray-200" />
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">
                End Date
              </h3>
            </div>
            <div className="flex flex-col relative lg:w-[15rem] w-[19.4rem]">
              <CustomSelect
                options={years}
                value={endDateFilter}
                onChange={setEndDateFilter}
                placeholder="Select end date"
              />
            </div>
          </div>

          {/* Location Select with Icon */}
          <div className="flex flex-col border-l-[1.5px] border-[#00000022] dark:border-zinc-700">
            <div className="pl-4 flex items-center gap-x-4 pb-1">
              <FaLocationDot className="text-gray-500 dark:text-gray-200" />
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">
                Location
              </h3>
            </div>
            <div className="relative lg:w-[15rem] w-[19.4rem]">
              <CustomSelect
                options={locations}
                value={locationFilter}
                onChange={setLocationFilter}
                placeholder="Select your location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
