'use client';

import { useState } from 'react';
import Search from '../Search/Search';

const PageSearch = () => {
  const [projectSectorFilter, setProjectSectorFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [endDateFilter, setEndDateFilter] = useState(''); // New state for end date filter

  return (
    <Search
      projectSectorFilter={projectSectorFilter}
      setProjectSectorFilter={setProjectSectorFilter}
      locationFilter={locationFilter}
      setLocationFilter={setLocationFilter}
      endDateFilter={endDateFilter} // Pass end date filter state
      setEndDateFilter={setEndDateFilter} // Pass setter for end date filter
    />
  );
};

export default PageSearch;
