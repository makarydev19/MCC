import { Links } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mx-auto md:px-32 px-5 py-12 bg-accent">
      <div className="flex flex-col gap-y-7">
        <div className="flex items-center gap-x-5">
          <div className="bg-white w-fit rounded-2xl p-2">
            <Image
              src={`/MCC_Logo-removebg-preview.png`}
              alt=""
              width={60}
              height={60}
            />
          </div>
          <h3 className="text-md text-white font-serif">
            Modern Construction Company
          </h3>
        </div>
        <div className="flex flex-col ml-5">
          <ul className="flex items-center gap-x-7">
            {Links.slice(1).map((links) => (
              <li key={links.id}>
                <Link href={links.href} className="text-[7px] text-white">
                  {links.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 ">
        <p className="ml-5 text-[#ffffff72] text-sm font-thin">
          &copy;2024 MCC. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
