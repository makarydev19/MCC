'use client';

import React from 'react';
import Search from '@/components/Search/Search';

interface FiltersProps {
  projectSectorFilter: string;
  setProjectSectorFilter: React.Dispatch<React.SetStateAction<string>>;
  locationFilter: string;
  setLocationFilter: React.Dispatch<React.SetStateAction<string>>;
}

// Inline, sticky filter bar (replaces the old off-canvas drawer).
const Filters: React.FC<FiltersProps> = (props) => {
  return (
    <div className="sticky top-[88px] z-40 sm:top-[96px] lg:top-[108px]">
      <div className="container-x">
        <Search {...props} />
      </div>
    </div>
  );
};

export default Filters;
