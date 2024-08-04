import { FloatingNav } from "../ui/floating-navbar";

const Header = () => {
  const navItems = [
    {
      name: "About Us",
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
  ];

  return <FloatingNav navItems={navItems} />;
};

export default Header;
