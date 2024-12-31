// <>------------------<>
// 0-Page Links
//<>-------------------<>

interface Links {
  id: number;
  title: string;
  href: string;
}

export const Links: Links[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'About Us', href: '/aboutUs' },
  { id: 3, title: 'Services', href: '/services' },
  { id: 4, title: 'Projects', href: '/projects' },
  { id: 5, title: 'Contact Us', href: '/contactUs' },
];

// <>------------------<>
// 1-Home Data
//<>-------------------<>

// Home Background

interface HomeBackground {
  id: number;
  image: string;
}

export const HomeBackgrounds: HomeBackground[] = [
  { id: 1, image: '/Porto-October/IMG_0045.JPG' },
  { id: 2, image: '/Porto-October/IMG-1.JPG' },
  { id: 3, image: '/Porto-Said/IMG-20200815-WA0058.jpg' },
  { id: 4, image: '/Oriental-Wavers/DSC00999.png' },
  { id: 5, image: '/Porto-Sharm/IMG_20180422_112345.png' },
  { id: 6, image: '/Porto-October/252.jpg' },
  { id: 7, image: '/Administrative-building/IMG-20241107-WA0010.jpg' },
  { id: 8, image: '/Porto-October/SAM_HGFHHF32.jpg' },
  { id: 9, image: '/Porto-Minya/building2.jpg' },
  { id: 10, image: '/The-Pearl/pearl.jpg' },
];

// Clients Logo

interface Client {
  id: number;
  img: string;
}

export const Clients: Client[] = [
  { id: 1, img: `/Amer_group-removebg-preview.png` },
  { id: 2, img: `/Coral_Sea-removebg-preview.png` },
  { id: 3, img: `/SMG-removebg-preview.png` },
  { id: 4, img: `/Sharming-removebg-preview.png` },
  { id: 5, img: `/MI-removebg-preview.png` },
  { id: 6, img: `/Oriental_Weaver-removebg-preview.png` },
];

// CountsBox

interface CountsBoxItem {
  id: number;
  num: number;
  title: string;
}

export const CountsBox: CountsBoxItem[] = [
  { id: 2, num: 15, title: 'Clients' },
  { id: 3, num: 200, title: 'Employees' },
  { id: 4, num: 10, title: 'Cities' },
];

// Chariman of boards Data

export interface SectionData {
  imageSrc: string;
  imageAlt: string;
  imageClasses: string;
  content: string;
  contentClasses: string;
}

export const chairmanOfBoardsData: SectionData[] = [
  {
    imageSrc: '/Coral-Sea/Layer 53 copy.png',
    imageAlt: 'Coral Sea Project',
    imageClasses:
      'lg:w-[55%] mx-4 w-full lg:h-96 h-60 shadow-xl overflow-hidden rounded-2xl dark:block z-10',
    content: `Key to our success <br />
    is developing long term relationships. Our aim is to achieve customer satisfaction
    by consistently delivering results
    on time and within budget reflecting the needs of all our stakeholders. This achievement to date is the result of the efforts of 
    our highly dedicated and experienced project teams. 
    Our approach allows for the project team you start with to be the team you celebrate with the successful completion of the project.`,
    contentClasses:
      'lg:w-[45%] lg:m-0 p-5 bg-LightModeBG dark:bg-DarkModeBG shadow-2xl dark:shadow-white/10 dark:border-white/5 dark:border-2 rounded-2xl lg:absolute lg:left-[40%] -mt-36 z-50',
  },
  {
    imageSrc: '/Porto-Minya/building5.jpg',
    imageAlt: 'Porto Minya Building',
    imageClasses:
      'lg:w-[45%] w-full mx-4 lg:h-72 h-52 overflow-hidden shadow-xl rounded-2xl lg:absolute lg:left-[40%] z-10',
    content: `Our long term vision <br />
    We are passionate about fostering a strong, sustainable and
    profitable growth through which every stakeholder has an
    opportunity to attain quality of life. To make our vision a reality,
    we commit to delivering excellence and value across all levels of engagement.`,
    contentClasses:
      'lg:w-[55%] lg:m-0 p-5 bg-LightModeBG dark:bg-DarkModeBG shadow-2xl dark:shadow-white/10 dark:border-white/5 dark:border-2 rounded-2xl z-50 -mt-28',
  },
  // {
  //   imageSrc: '/administrative-building.jpg',
  //   imageAlt: 'Administrative Building',
  //   imageClasses:
  //     'lg:w-[55%] mx-4 w-full lg:h-60 h-40 overflow-hidden shadow-xl rounded-2xl z-10',
  //   content: `Through this site <br />
  //   I am pleased to introduce our business and history since we
  //   established this company in 1998. Thanks to all our clients, staff,
  //   and suppliers who helped us achieve our goals and sustain our
  //   success.`,
  //   contentClasses:
  //     'lg:w-[45%] lg:m-0 p-5 bg-LightModeBG dark:bg-DarkModeBG shadow-2xl dark:shadow-white/10 dark:border-white/5 dark:border-2 rounded-2xl lg:absolute lg:left-[40%] -mt-24 z-50',
  // },
];

// <>------------------<>
// 2- Services Data
//<>-------------------<>

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
    img2: '/Porto-October/IMG_0040.JPG',
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
    title: 'Electro-Mechanical Works',
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
    title: 'Landscape Works',
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

// <>------------------<>
// 3-FeaturedProjects Data
//<>-------------------<>

interface FeaturedBackground {
  id: number;
  coverImg: string;
}

export const FeaturedProject: FeaturedBackground[] = [
  {
    id: 1,
    coverImg: '/Porto-October/IMG_0044.JPG',
  },
  {
    id: 2,
    coverImg: '/Porto-October/SAM_6832.jpg',
  },
  {
    id: 3,
    coverImg: '/Porto-Said/IMG-20200815-WA0059.jpg',
  },
  {
    id: 4,
    coverImg: '/Oriental-Wavers/DSC00999.png',
  },
  {
    id: 5,
    coverImg: '/Porto-October/252.jpg',
  },
  {
    id: 6,
    coverImg: '/Porto-October/IMG_0053.JPG',
  },
  {
    id: 7,
    coverImg: '/Sia-Lagoons/WhatsApp Image 2024-08-26 at 1.27.42 PM (3).jpeg',
  },
  {
    id: 8,
    coverImg: '/administrative-building.jpg',
  },
  {
    id: 9,
    coverImg: '/Vinci/IMG_5579.JPG',
  },
  {
    id: 10,
    coverImg:
      '/The-Pearl/صورة واتساب بتاريخ 1445-03-18 في 13.54.32_8552acde.jpg',
  },
];

// // <>------------------<>
// 4-Contact Us Data
//<>-------------------<>

export interface ContactItem {
  iconPath: string;
  details: string[];
}

export const contactData: ContactItem[] = [
  {
    iconPath:
      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    details: ['info@mcc-egy.com'],
  },
  {
    iconPath:
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    details: ['52 El-Ansar, Ad Doqi, Dokki, Giza Governorate 3751060'],
  },
];
