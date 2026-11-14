'use client';

import { FC } from 'react';
import { IconBuilding, IconMapPin } from '@tabler/icons-react';
import CustomSelect from './CustomSelect';
import { cn } from '@/libs/utils';

type Props = {
  projectSectorFilter: string;
  setProjectSectorFilter: (value: string) => void;
  locationFilter: string;
  setLocationFilter: (value: string) => void;
};

const projectSectors = [
  'All',
  'Administrative',
  'Commercial',
  'Residential',
  'Service',
  'Touristic',
];
const locations = [
  'All',
  'El-Obour City',
  'Giza',
  'Minya Governorate',
  'New Cairo',
  'New Mansoura',
  'Mostakbel City',
  'El-Ain Sokhna',
  'North Coast',
  'Octobor',
  'Port-Said',
  'Sharm El-Sheikh',
  'Suez Road Fifth Settlement',
  'New Administrative Capital',
];

const Search: FC<Props> = ({
  projectSectorFilter,
  setProjectSectorFilter,
  locationFilter,
  setLocationFilter,
}) => {
  const activeSector = projectSectorFilter || 'All';

  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-line bg-surface/90 p-2 shadow-card backdrop-blur-xl md:flex-row md:items-center md:justify-between">
      {/* Sector chips (desktop) */}
      <div
        role="radiogroup"
        aria-label="Project sector"
        className="hidden flex-wrap gap-1 md:flex"
      >
        {projectSectors.map((sector) => {
          const active = activeSector === sector;
          return (
            <button
              key={sector}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setProjectSectorFilter(sector)}
              className={cn(
                'relative min-h-[44px] rounded-xl px-4 text-sm font-semibold transition-colors duration-200',
                active
                  ? 'bg-ink text-white dark:bg-white dark:text-ink'
                  : 'text-subtle hover:bg-muted hover:text-fg'
              )}
            >
              {sector}
            </button>
          );
        })}
      </div>

      {/* Sector select (mobile) */}
      <div className="md:hidden">
        <CustomSelect
          icon={<IconBuilding size={16} />}
          options={projectSectors}
          value={projectSectorFilter}
          onChange={setProjectSectorFilter}
          placeholder="All sectors"
        />
      </div>

      <div className="md:w-64">
        <CustomSelect
          icon={<IconMapPin size={16} />}
          options={locations}
          value={locationFilter}
          onChange={setLocationFilter}
          placeholder="All locations"
        />
      </div>
    </div>
  );
};

export default Search;
