export type CoverImage = {
  url: string;
  file: string;
};

export type Image = {
  _key: string;
  url: string;
  file: string;
};

type Slug = {
  _type: string;
  current: string;
};

export type Project = {
  project: Image;
  _id: string;
  projectName: string;
  slug: Slug;
  constructionWorks: string;
  finishingWorks: string;
  complementaryWorks: string;
  restaurantFinishingWorks: string;
  client: string;
  startDate: string;
  endDate: string;
  stillInProgress: boolean;
  images: Image[];
  coverImage: CoverImage;
  location: string;
  latestProject: boolean;
  projectSector: string;
};
