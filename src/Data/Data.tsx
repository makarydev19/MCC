import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

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
  image: string;
}

export const HomeBackgrounds: HomeBackground[] = [
  { image: '/LandingImages/IMG_0045.JPG' },
  { image: '/Administrative-building/IMG-20241107-WA0010.jpg' },
  { image: '/LandingImages/IMG_0053.JPG' },
  { image: '/The-Pearl/pearl.jpg' },
  { image: '/LandingImages/WhatsApp Image 2024-08-25 at 2.38.35 PM (3).jpeg' },
  { image: '/Porto-Sharm/IMG_20180422_112345.png' },
  { image: '/LandingImages/252.jpg' },
  { image: '/LandingImages/IMG-20200815-WA0059.jpg' },
  { image: '/LandingImages/IMG_0025.JPG' },
  { image: '/LandingImages/IMG_0044.JPG' },
  { image: '/LandingImages/IMG_0054.JPG' },
  { image: '/LandingImages/IMG_0494.JPG' },
  { image: '/LandingImages/SAM_6832.jpg' },
  { image: '/LandingImages/SAM_6832.jpg' },
  { image: '/LandingImages/SAM_FFGG32.jpg' },
  { image: '/LandingImages/WhatsApp Image 2024-08-25 at 2.38.34 PM (2).jpeg' },
];

// Clients Logo

interface Client {
  img: string;
}

export const Clients: Client[] = [
  { img: `/Logos/images..2.png` },
  { img: `/Logos/imagesss.png` },
  { img: `/Logos/Layer 59.png` },
  { img: `/Logos/Layer 60.png` },
  { img: `/Logos/Layer 61.png` },
  { img: `/Logos/Layer 63.png` },
  { img: `/Logos/Layer 64.png` },
  { img: `/Logos/logo-2-white.png` },
  { img: `/Logos/logo-3-white.png` },
  { img: `/Logos/logo.png` },
  { img: `/Logos/logos neyoum-arab-03.png` },
  { img: `/Logos/misr_italia_properties_logo_003.png` },
  { img: `/Logos/october-03.png` },
  { img: `/Logos/porto said.png` },
  { img: `/Logos/montazalogo (2).png` },
  { img: `/Logos/porto_group.png` },
  { img: `/Logos/Sharming Inn Logo.png` },
  { img: `/Logos/OW1.png` },
];

// CountsBox

interface CountsBoxItem {
  id: number;
  num: number;
  title: string;
}

export const CountsBox: CountsBoxItem[] = [
  { id: 2, num: 15, title: 'Clients' },
  { id: 4, num: 10, title: 'Cities' },
  { id: 3, num: 200, title: 'Employees' },
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

interface Service {
  id: number;
  num: string;
  title: string;
  works: string;
  img: string;
  img2: string;
}

export const Services: Service[] = [
  {
    id: 1,
    num: '01',
    title: 'Concrete work of all kinds',
    works:
      'Our concrete works are executed with meticulous adherence to the principles of project integration management, ensuring seamless coordination of scope, schedule, and quality. Leveraging high-grade materials and advanced construction methodologies, we deliver outputs that meet stakeholder requirements and conform to industry standards. Our deliverables include reinforced concrete structures, foundations, and pavements, each crafted to ensure durability and alignment with the defined project baselines.',

    img: '/construction-crane-concept-illustration.png',
    img2: '/Porto-October/IMG_0040.JPG',
  },
  {
    id: 2,
    num: '02',
    title: 'Infrastructure Works',
    works:
      'Our infrastructure projects are managed through a structured approach to scope and schedule management, emphasizing comprehensive Work Breakdown Structures (WBS) and milestone tracking. We specialize in developing essential deliverables, such as roads, bridges, and utility systems, employing risk management techniques to mitigate project uncertainties. Quality assurance processes and continuous stakeholder engagement ensure that the outcomes align with the projects objectives and community impact assessments.',
    img: '/rb_109175.png',
    img2: '/Porto-October/SA832.jpg',
  },
  {
    id: 3,
    num: '03',
    title: 'Finishing Works',
    works:
      'Our finishing works are governed by detailed project scope management and quality control plans, ensuring the final deliverables meet both functional and aesthetic requirements. From interior partitions and ceiling designs to exterior cladding and decorative finishes, our focus remains on stakeholder satisfaction and alignment with the project charter. Utilizing advanced resource scheduling and change management practices, we ensure the project achieves its intended objectives within the specified constraints.',
    img: '/46f9eb42-9260-49d1-a977-4b6d991cfad1-removebg-preview2.png',
    img2: '/Porto-October/SA832.jpg',
  },
  {
    id: 4,
    num: '04',
    title: 'Electro-Mechanical Works',
    works:
      'Electromechanical works are planned and executed using resource optimization techniques and robust procurement management strategies. Our team integrates mechanical and electrical deliverables, such as HVAC systems, electrical installations, and fire safety solutions, into cohesive project environments. Emphasizing compliance, safety standards, and value engineering, we ensure all systems align with the defined project constraints and deliver maximum efficiency and sustainability.',
    img: '/freepik__background__99288.png',
    img2: '/SwimmingPool2.jpg',
  },
  {
    id: 5,
    num: '05',
    title: 'Landscape Works',
    works:
      'Our landscape works are executed through meticulous project planning and integration processes, ensuring alignment with the overall project charter and environmental management plans. Deliverables include hardscape and softscape installations, irrigation systems, and outdoor lighting solutions, each tailored to meet stakeholder expectations. Through effective resource leveling, risk mitigation strategies, and adherence to sustainability practices, we enhance the projects value by creating functional and aesthetically pleasing outdoor environments that align with the projects defined baselines.',
    img: '/40315-removebg-preview.png',
    img2: '/Porto-October/IMG_0040.JPG',
  },
];

// <>------------------<>
// 3-FeaturedProjects Data
//<>-------------------<>

interface FeaturedBackground {
  coverImg: string;
}

export const FeaturedProject: FeaturedBackground[] = [
  {
    coverImg: '/Sia-Lagoons/WhatsApp Image 2024-08-26 at 1.27.42 PM (3).jpeg',
  },
  {
    coverImg: '/HUB-Mall/WhatsApp Image 2025-01-02 at 8.52.59 PM.jpeg',
  },
  {
    coverImg: '/Porto-October/SAM_6832.jpg',
  },
  {
    coverImg: '/Porto-Said/IMG-20200815-WA0059.jpg',
  },
  {
    coverImg: '/Oriental-Wavers/DSC00999.png',
  },
  {
    coverImg: '/Porto-October/252.jpg',
  },
  {
    coverImg: '/Porto-October/IMG_0053.JPG',
  },
  {
    coverImg: '/Porto-October/IMG_0044.JPG',
  },
  {
    coverImg: '/administrative-building.jpg',
  },
  {
    coverImg:
      '/The-Pearl/صورة واتساب بتاريخ 1445-03-18 في 13.54.32_8552acde.jpg',
  },
];

// // <>------------------<>
// 4-Contact Us Data
//<>-------------------<>

export interface ContactItem {
  iconPath: string;
  details: string;
  link: string;
  icon: any;
}

export const contactData: ContactItem[] = [
  {
    iconPath:
      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    details: '',
    link: '',
    icon: <MdEmail className="text-4xl" />,
  },
  {
    iconPath:
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    details: '52 El-Ansar, Ad Doqi, Dokki, Giza Governorate 3751060',
    link: 'https://www.google.com/maps/place/MCC+-+%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%A7%D9%86%D8%B4%D8%A7%D8%A1%D8%A7%D8%AA+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%D8%A9+%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA%E2%80%AD/@30.040874,31.198817,16z/data=!4m6!3m5!1s0x145847dfadab6abb:0x613111d2768cb9b8!8m2!3d30.0408737!4d31.1988167!16s%2Fg%2F11fkvym5s7?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
    icon: <FaLocationDot className="text-4xl" />,
  },
];
