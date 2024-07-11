import { groq } from 'next-sanity';

export const getLatestProjectQuery = groq`*[_type == "projects" && latestProject == true][0] {
    _id,
    description,
    images,
    projectName,
    slug,
    coverImage,
    client,
    startDate,
    endDate,
    location,
    projectSector,
}`;

export const getProjectsQuery = groq`*[_type == "projects"] {
    _id,
    description,
    images,
    latestProject,
    projectName,
    slug,
    coverImage,
    client,
    startDate,
    endDate,
    location,
    stillInProgress,
    projectSector
}`;

export const getProject = groq`*[_type == "projects" && slug.current == $slug][0] {
     _id,
    description,
    images,
    latestProject,
    projectName,
    slug,
    coverImage,
    client,
    startDate,
    endDate,
    location,
    stillInProgress,
    projectSector
}`