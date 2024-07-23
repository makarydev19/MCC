"use client";

import { ChangeEvent, FC } from "react";
import { FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
  const handleProjectSectorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setProjectSectorFilter(event.target.value);
  };

  const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocationFilter(event.target.value);
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setEndDateFilter(event.target.value);
  };

  return (
    <div className="lg:w-full w-[85%] bg-white mx-auto lg:px-10 px-2 py-4 rounded-md shadow-xl lg:-mb-20">
      <div className="relative flex gap-5 items-center justify-between">
        <div className="flex flex-wrap flex-grow gap-4">
          {/* Project Sector Select with Icon */}
          <div className="flex flex-col lg:border-0 border-b-[1.3px] border-[#0000002b]">
            <div className="pl-4">
              <h3 className="text-gray-800 font-medium">Project Sector</h3>
            </div>
            <div className="relative lg:w-[15rem] w-[19.4rem]">
              <FaBuilding className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500" />
              <select
                aria-label="Project Sector"
                value={projectSectorFilter}
                onChange={handleProjectSectorChange}
                className="w-full pl-10 pr-4 py-2 mb-2 mr-10 capitalize rounded leading-tight bg-transparent dark:text-black focus:outline-none"
              >
                <option value="" disabled hidden>
                  Select project sector
                </option>
                <option value="All">All</option>
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
                <option value="Administrative">Administrative</option>
                <option value="Touristic">Touristic</option>
                <option value="Service">Service</option>
              </select>
            </div>
          </div>

          {/* End Date Select with Icon */}
          <div className="flex flex-col lg:border-l-[1.3px] lg:border-b-0 border-b-[1.3px] border-[#0000002b]">
            <div className="pl-4">
              <h3 className="text-gray-800 font-medium">End Date</h3>
            </div>
            <div className="flex flex-col relative lg:w-[15rem] w-[19.4rem]">
              <FaCalendarAlt className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500" />
              <select
                aria-label="End Date"
                value={endDateFilter}
                onChange={handleEndDateChange}
                className="w-full pl-10 pr-4 py-2 mb-2 capitalize rounded leading-tight bg-transparent focus:outline-none"
              >
                <option value="" disabled hidden>
                  Select end date
                </option>
                <option value="All">All</option>
                <option value="Still In Progress">Still In Progress</option>
                <option value="2005">2005</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2015">2015</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </div>
          {/* Location Select with Icon */}
          <div className="flex flex-col lg:border-l-[1.3px] lg:border-b-0 border-[#0000002b]">
            <div className="pl-4">
              <h3 className="text-gray-800 font-medium">Location</h3>
            </div>
            <div className="relative lg:w-[15rem] w-[19.4rem]">
              <FaLocationDot className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500" />
              <select
                aria-label="Location"
                value={locationFilter}
                onChange={handleLocationChange}
                className="w-full pl-10 pr-4 py-2 mb-2 rounded leading-tight bg-transparent focus:outline-none"
              >
                <option value="" disabled hidden>
                  Select your location
                </option>
                <option value="All">All</option>
                <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
                <option value="El-Obour City">El-Obour City</option>
                <option value="Porto Pyramids">Porto Pyramids</option>
                <option value="Octobor">Octobor</option>
                <option value="Port-Said">Port-Said</option>
                <option value="The New Administrative Capital">
                  The New Administrative Capital
                </option>
                <option value="North Coast">North Coast</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
