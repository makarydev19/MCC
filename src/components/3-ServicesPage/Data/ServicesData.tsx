export interface Feature {
  id: number;
  icon: string; // SVG path or Icon component
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', // SVG Path
    title: 'Secured Payments',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    id: 2,
    icon: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z', // SVG Path
    title: 'Fast Delivery',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    id: 3,
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', // SVG Path
    title: 'Easy Integration',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
];

// Define types for the works and service

interface Work {
  title: string;
  description: string;
}

interface Service {
  id: number;
  num: string;
  title: string;
  works: Work[];
  img: string;
  img2: string;
}

export const Services: Service[] = [
  {
    id: 1,
    num: '01',
    title: 'Concrete work of all kinds',
    works: [],
    img: '/construction-crane-concept-illustration.png',
    img2: '/Porto-Said/IMG_0489.JPG',
  },
  {
    id: 2,
    num: '02',
    title: 'Architectural Finishing Works',
    works: [
      {
        title: 'Building Work, Plastering Works, Insulation works',
        description:
          '( Ceramic - Porcelain - Parquet - Marble - Vinyl - Interlock Soft Concrete - Formed Concrete - Basalt - Refractory Stone - Rubble Mound )',
      },
      {
        title: 'Walls coating works',
        description:
          '( Ceramic - Porcelain - Marble - Basalt - Refractory Stone - Rubble Mound - All kind of Natural and Artificial stones )',
      },
      {
        title:
          'Tile cladding works, Aluminum works, Metal works, Carpentry works',
        description:
          '( Wooden doors - Pergolas - Establishing and cladding ceiling and walls )',
      },
      {
        title: 'Interior paints work, Sanitations works',
        description:
          '( Inner feeding and drainage grids - Public feeding and drainage grids )',
      },
      {
        title: 'Electric works',
        description:
          '( Install all electrical outlets - Break Public Panels Major electrical transformers work )',
      },
      {
        title: 'Firefighting, alarm works, Air Conditioning works',
        description: '',
      },
    ],
    img: '/46f9eb42-9260-49d1-a977-4b6d991cfad1-removebg-preview.png',
    img2: '/Porto-October/SA832.jpg',
  },
  {
    id: 3,
    num: '03',
    title: 'Electro-Mechanic Works',
    works: [
      {
        title: 'Swimming pool works, Sanitary drainage works',
        description: '',
      },
      {
        title: 'Irrigation tanks works, Treatment plant works',
        description: '',
      },
    ],
    img: '/aae4de92-663c-4cc8-b391-4ffa06c932b1-removebg-preview.png',
    img2: '/SwimmingPool2.jpg',
  },
  {
    id: 4,
    num: '04',
    title: 'Roads and Landscape Works',
    works: [
      {
        title:
          'Curbstone works, Interlock works, Formed concrete, works Soft, concrete works, Basalt floors, walls work and Gravel works',
        description: '',
      },
    ],
    img: '/engineer-7689854_1280-removebg-preview (1).png',
    img2: '/Porto-October/IMG_0040.JPG',
  },
];
