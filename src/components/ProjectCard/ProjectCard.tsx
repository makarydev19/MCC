import { Project } from "@/models/project";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  project: Project;
};

const ProjectCard: FC<Props> = (props) => {
  const {
    project: {
      projectName,
      location,
      slug,
      constructionWorks,
      finishingWorks,
      projectSector,
      coverImage,
      stillInProgress,
      endDate,
    },
  } = props;

  return (
    <div className="relative hover:-translate-y-3 transition-all duration-200">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={coverImage.url}
          alt={projectName}
          width={900}
          height={900}
          className="img"
        />
        {/* Overlay */}
        <Link href={`projects/${slug.current}`}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 rounded-lg">
            <div className=" text-center text-white w-[90%] flex flex-col gap-y-3">
              <h1 className="text-xl">{projectName}</h1>
              <p>{location}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
