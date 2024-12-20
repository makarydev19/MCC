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
  projectContent1: string;
  projectContent2: string;
  projectContent3: string;
  projectContent4: string;
  details1: string;
  details2: string;
  details3: string;
  details4: string;
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
  isHidden: boolean;
};
