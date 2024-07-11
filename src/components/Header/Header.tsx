"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Correct import for client-side path navigation

import { Links } from "@/data/data";

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => (pathname === href ? "active" : "");

  return (
    <header className="absolute w-[90%] top-[8%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[aliceblue] rounded-xl py-2 z-50 bg-slate-300 shadow-2xl">
      <div className="flex flex-col items-center justify-center md:mx-14 mx-5">
        <div className="flex items-center justify-between w-full max-w-screen-lg">
          <Link href="/">
            <Image
              src={`/MCC_Logo-removebg-preview.png`}
              alt=""
              width={70}
              height={70}
            />
          </Link>
          <ul className="lg:flex items-center justify-between hidden gap-x-7">
            {Links.slice(0, -1).map((links) => (
              <li
                key={links.id}
                className={`rounded-2xl ${isActive(links.href)} text-black`}
              >
                <Link href={links.href} className="text-sm">
                  {links.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="hidden lg:block">
            <li
              className={`rounded-2xl ${isActive("/contactUs")} bg-[#141414] border-[1px] border-[#efefef22] text-white px-4 py-2 rounded-md`}
            >
              <Link href="/contactUs" className="text-sm">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
