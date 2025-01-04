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

type ContentDetail = {
  content: string;
  details: string;
};

export type Project = {
  project: Image;
  _id: string;
  projectName: string;
  slug: Slug;
  contentDetails: ContentDetail[];
  constructionWorks: string;
  finishingWorks: string;
  complementaryWorks: string;
  restaurantFinishingWorks: string;
  client: string;
  endDate: string;
  stillInProgress: boolean;
  images: Image[];
  coverImage: CoverImage;
  location: string;
  projectSector: string;
  isHidden: boolean;
};
