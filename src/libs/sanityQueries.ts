import { groq } from 'next-sanity';

export const getProjectsQuery = groq`*[_type == "projects"] | order(projectName asc) {
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
    stillInProgress,
    projectSector,
    isHidden,
    contentDetails[] {
      content,
      details
    }
  }`;

export const getProject = groq`*[_type == "projects" && slug.current == $slug][0] {
    _id,
    constructionWorks,
    finishingWorks,
    complementaryWorks,
    restaurantFinishingWorks,
    images,
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
