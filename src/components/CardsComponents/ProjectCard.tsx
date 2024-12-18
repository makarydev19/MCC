import { Project } from '@/models/project';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  project: Project;
};

const ProjectCard: FC<Props> = (props) => {
  const {
    project: { projectName, location, slug, coverImage },
  } = props;

  return (
    <>
      <div className="relative hover:-translate-y-3 transition-all duration-200">
        <div className="absolute top-7 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center rounded-3xl py-3 w-[50%] border-[0.5rem] border-LightModeBG dark:border-DarkModeBG -mt-6 text-white dark:text-black bg-DarkModeBG dark:bg-LightModeBG z-50">
          <p>{location}</p>
        </div>
        <div className="overflow-hidden rounded-xl h-64 shadow-lg shadow-black">
          <Image
            src={coverImage.url}
            alt={projectName}
            width={1000}
            height={1000}
            className="img"
          />
          {/* Overlay */}
          <Link href={`projects/${slug.current}`}>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
              <div className=" text-center text-white w-[90%] flex flex-col gap-y-3">
                <h1 className="text-xl">{projectName}</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
