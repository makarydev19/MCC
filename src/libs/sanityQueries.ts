import { groq } from 'next-sanity';

export const getLatestProjectQuery = groq`*[_type == "projects" && latestProject == true][0] {
    _id,
    projectContent,
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

// export const getFeaturedProjectsQuery = groq`*[_type == "projects" && featuredProject == true][0] {
//     _id,
//     projectName,
//     slug,
//     coverImage,
//     client,
//     startDate,
//     endDate,
//     location,
//     projectSector,
// }`;

export const getProjectsQuery = groq`*[_type == "projects"] {
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
    isHidden
}`;

export const getProject = groq`*[_type == "projects" && slug.current == $slug][0] {
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
    isHidden
}`;
