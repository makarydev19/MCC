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
  { id: 1, num: 20, title: 'Projects' },
  { id: 2, num: 15, title: 'Clients' },
  { id: 3, num: 100, title: 'Employees' },
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
    is building long term relationships. Our aim is to achieve this
    with our clients by consistently delivering exceptional results
    that are on time and within budget reflecting the needs of our
    clients and end users. This achievement to date is the result of
    our highly dedicated and experienced project team. Our approach
    allows for the project team you start with to be the team that
    celebrates with you the successful completion of the project.`,
    contentClasses:
      'lg:w-[45%] lg:m-0 p-5 bg-LightModeBG dark:bg-DarkModeBG shadow-2xl dark:shadow-white/10 dark:border-white/5 dark:border-2 rounded-2xl lg:absolute lg:left-[40%] -mt-36 z-50',
  },
  {
    imageSrc: '/Porto-Minya/building5.jpg',
    imageAlt: 'Porto Minya Building',
    imageClasses:
      'lg:w-[45%] w-full mx-4 lg:h-72 h-52 overflow-hidden shadow-xl rounded-2xl lg:absolute lg:left-[40%] z-10',
    content: `We have a long term vision <br />
    We are passionate about fostering a strong, sustainable and
    profitable growth through which every individual has an
    opportunity to attain quality of life. To make our vision a reality,
    it is our responsibility to look after our clients, end users,
    employees, and the environment.`,
    contentClasses:
      'lg:w-[55%] lg:m-0 p-5 bg-LightModeBG dark:bg-DarkModeBG shadow-2xl dark:shadow-white/10 dark:border-white/5 dark:border-2 rounded-2xl z-50 -mt-28',
  },
  {
    imageSrc: '/administrative-building.jpg',
    imageAlt: 'Administrative Building',
    imageClasses:
      'lg:w-[55%] mx-4 w-full lg:h-60 h-40 overflow-hidden shadow-xl rounded-2xl z-10',
    content: `Through this site <br />
    I am pleased to introduce our business and history since we
    established this company in 1998. Thanks to all our clients, staff,
    and suppliers who helped us achieve our goals and sustain our
    success.`,
    contentClasses:
      'lg:w-[45%] lg:m-0 p-5 bg-LightModeBG dark:bg-DarkModeBG shadow-2xl dark:shadow-white/10 dark:border-white/5 dark:border-2 rounded-2xl lg:absolute lg:left-[40%] -mt-24 z-50',
  },
];
