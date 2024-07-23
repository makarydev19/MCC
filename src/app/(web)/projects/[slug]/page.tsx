"use client";

import { getProject } from "@/libs/apis";
import LoadingSpinner from "../../loading";
import useSWR from "swr";

const ProjectsDetails = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const fetchProject = async () => getProject(slug);

  const {
    data: project,
    error,
    isLoading,
  } = useSWR("/api/project", fetchProject);

  if (error) throw new Error("Cannot fetch data");
  if (typeof project === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (!project) return <LoadingSpinner />;

  return (
    <section>
      <h1>{project.projectName}</h1>
    </section>
  );
};

export default ProjectsDetails;
