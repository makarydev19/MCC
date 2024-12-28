import { groq } from 'next-sanity';

export const getLatestProjectQuery = groq`*[_type == "projects" && latestProject == true][0] {
    _id,
    constructionWorks,
    finishingWorks,
    images,
    projectName,
    slug,
    coverImage,
    client,
    startDate,
    endDate,
    location,
    projectSector,
    isHidden
}`;

export const getProjectsQuery = groq`
*[_type == "projects"] {
    _id,
    constructionWorks,
    finishingWorks,
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
    projectSector,
    isHidden,
    contentDetails[] {
      content,
      details
    }
}`;

export const getProject = groq`
*[_type == "projects" && slug.current == $slug][0] {
    _id,
    constructionWorks,
    finishingWorks,
    complementaryWorks,
    restaurantFinishingWorks,
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
    projectSector,
    isHidden,
    contentDetails[] {
      content,
      details
    }
}`;
