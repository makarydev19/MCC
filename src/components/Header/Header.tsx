import { navItems } from "@/data/data";
import { FloatingNav } from "../ui/floating-navbar";

const Header = () => {
  return <FloatingNav navItems={navItems} />;
};

export default Header;
