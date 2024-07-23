

type CoverImage = {
    url: string;
    file: File;
};



export type Image = {
    _key: string;
    url: string;
    file: File;
};


type Slug = {
    _type: string;
    current: string;
};



export type Project = {
    _id: string;
    projectName: string;
    slug: Slug;
    constructionWorks: string;
    finishingWorks: string;
    client: string;
    startDate: string;
    endDate: string;
    stillInProgress: boolean;
    images: Image[];
    coverImage: CoverImage;
    location: string;
    latestProject: boolean;
    projectSector: string;
}
