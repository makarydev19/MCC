import { FaHome } from "react-icons/fa";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Who We Are",
    link: "/aboutUs",
  },
  {
    name: "What We Do",
    link: "/services",
  },
  {
    name: "What We've Built",
    link: "/projects",
  },
  {
    name: "Contact Us",
    link: "/contactUs",
  },
];

export const Links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Who We Are", href: "/aboutUs" },
  { id: 3, title: "What We Do", href: "/services" },
  { id: 4, title: "What We've Built", href: "/projects" },
  { id: 5, title: "Contact Us", href: "/contactUs" },
];

export const ArchitecturalWorks6 = [
  { id: 1, kindOfWork: "Firefighting alarm works" },
  { id: 2, kindOfWork: "Air Conditioning works" },
];

export const Services = [
  {
    id: 1,
    num: "01",
    title: "Concrete work of all kinds",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab doloribus voluptatum a vitae. Numquam, possimus assumenda vero enim ut explicabo tenetur magnam. ",

    img: "/construction-crane-concept-illustration.png",
    img2: "/pexels-technobulka-10816119.jpg",
  },

  {
    id: 2,
    num: "02",
    title: "Architectural Finishing Works",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab doloribus voluptatum a vitae. Numquam, possimus assumenda vero enim ut explicabo tenetur magnam. ",

    img: "/46f9eb42-9260-49d1-a977-4b6d991cfad1-removebg-preview.png",
    img2: "/tiler-working-renovation-apartment (1).jpg",
    works1:
      "Building Work, Plastering Works, Insulation works of all kinds, hanging ceiling works, G.R.C facedas ornaments and cornices works, Geotextiles Works",
    kindOfWorks1:
      "( Ceramic - Porcelain - Parquet - Marble - Vinyl - Interlock Soft Concrete - Formed Concrete - Basalt - Refractory Stone - Rubble Mound )",

    works2: "Walls coating works",
    kindOfWorks2:
      "( Ceramic - Porcelain - Marble - Basalt - Refractory Stone - Rubble Mound - All kind of Natural and Artificial stones )",

    works3: "Tile cladding works, Aluminum works, Metal works, Carpentry works",
    kindOfWorks3:
      "( Wooden doors - Pergolas - Establishing and cladding ceiling and walls )",

    works4: "Interior paints work, Sanitations works",

    kindOfWorks4:
      "( Inner feeding and drainage grids - Public feeding and drainage grids )",

    works5: "Electric works",
    kindOfWorks5:
      "( Install all electrical outlets - Break Public Panels Major electrical transformers work )",

    works6: "Firefighting, alarm works, Air Conditioning works",
  },

  {
    id: 3,
    num: "03",
    title: "Electro-Mechanic Works",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab doloribus voluptatum a vitae. Numquam, possimus assumenda vero enim ut explicabo tenetur magnam. ",

    img: "/aae4de92-663c-4cc8-b391-4ffa06c932b1-removebg-preview.png",
    img2: "/pexels-ono-kosuki-5974048 (1).jpg",
    works1:
      "Swimming pool works, Sanitary drainage works, Irrigation tanks works, Treatment plant works",
  },

  {
    id: 4,
    num: "04",
    title: "Roads and Landscape Works",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab doloribus voluptatum a vitae. Numquam, possimus assumenda vero enim ut explicabo tenetur magnam. ",

    img: "/engineer-7689854_1280-removebg-preview (1).png",
    img2: "/heavy-excavator-digging-day-light.jpg",
    works1:
      "Curbstone works, Interlock works, Formed concrete works, Soft concrete works, Basalt floors and walls work, Gravel works",
  },
];

export const Clients = [
  { id: 1, img: `/Amer_group-removebg-preview.png` },
  { id: 2, img: `/Coral_Sea-removebg-preview.png` },
  { id: 3, img: `/SMG-removebg-preview.png` },
  { id: 4, img: `/Sharming-removebg-preview.png` },
  { id: 5, img: `/MI-removebg-preview.png` },
  { id: 6, img: `/Oriental_Weaver-removebg-preview.png` },
];

export const CountsBox = [
  {
    id: 1,
    num: 20,
    title: "Projects",
  },
  {
    id: 2,
    num: 15,
    title: "Clients",
  },
  {
    id: 3,
    num: 100,
    title: "Employees",
  },
  {
    id: 4,
    num: 10,
    title: "Cities",
  },
];

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

export const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/pexels-sevenstormphotography-439416.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const FeaturedProject = [
  {
    id: 1,
    coverImg: "/pexels-rquiros-2219024.jpg",
    title: "Porto Sharm",
  },
  {
    id: 2,
    coverImg: "/pexels-sevenstormphotography-439416.jpg",
    title: "Porto Sharm",
  },
  {
    id: 3,
    coverImg: "/pexels-rquiros-2219024.jpg",
    title: "Porto Sharm",
  },
  {
    id: 4,
    coverImg: "/pexels-rquiros-2219024.jpg",
    title: "Porto Sharm",
  },
  {
    id: 5,
    coverImg: "/pexels-rquiros-2219024.jpg",
    title: "Porto Sharm",
  },
];
