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
      slug,
      description,
      projectSector,
      coverImage,
      stillInProgress,
      endDate,
    },
  } = props;

  return (
    <div>
      <div className="rounded-xl w-11/12 md:w-72 lg:w-80 mb-10 mx-auto md:mx-0 overflow-hidden text-black">
        <div className="h-60 overflow-hidden">
          <Image
            src={coverImage.url}
            alt={projectName}
            width={250}
            height={250}
            className="img scale-animation"
          />
        </div>

        <div className="p-4 bg-white">
          <div className="flex justify-between text-2xl font-semibold">
            <p>{projectName}</p>
          </div>

          <p className="pt-2 text-xs">{projectSector}</p>

          <p className="pt-3 pb-6">{description.slice(1, 100)}...</p>

          <p>
            {stillInProgress ? "Still In Progress" : <span>{endDate}</span>}
          </p>

          <Link
            href={`rooms/${slug.current}`}
            className="bg-primary inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:shadow-lg transition-all duration-500"
          >
            {stillInProgress ? "" : "Still In Progress"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
