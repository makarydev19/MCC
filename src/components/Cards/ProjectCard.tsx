import { Project } from '@/models/project';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IconArrowUpRight, IconMapPin } from '@tabler/icons-react';

type Props = {
  project: Project;
};

const ProjectCard: FC<Props> = (props) => {
  const {
    project: { projectName, location, slug, coverImage, projectSector },
  } = props;

  return (
    <Link href={`/projects/${slug.current}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-muted shadow-card transition-shadow duration-300 group-hover:shadow-lift">
        <Image
          src={coverImage.url}
          alt={projectName}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold capitalize text-ink backdrop-blur">
          <IconMapPin size={13} stroke={2} />
          {location}
        </span>
        <span className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-white text-ink transition-all duration-300 ease-out group-hover:bg-brand group-hover:text-white">
          <IconArrowUpRight
            size={18}
            stroke={2.2}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </span>
      </div>
      <div className="mt-5">
        {projectSector && (
          <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand">
            {projectSector}
          </p>
        )}
        <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-fg transition-colors group-hover:text-brand">
          {projectName}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
