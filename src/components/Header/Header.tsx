"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Correct import for client-side path navigation
import { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi"; // Import the close icon

import { Links } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const pathname = usePathname();

  const isActive = (href: string) => (pathname === href ? "active" : "");

  return (
    <header className="lg:py-8 z-10 w-full lg:w-[90%] absolute top-[4%] lg:top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-16 bg-white md:rounded-md rounded-b-2xl shadow-lg lg:h-20 px-8 lg:py-6">
          <Link href="/" className="w-14">
            <Image
              src={`/MCC_Logo-removebg-preview.png`}
              alt=""
              width={70}
              height={70}
            />
          </Link>
          <ul className="lg:flex items-center justify-between hidden gap-x-10">
            {Links.slice(0, -1).map((links) => (
              <li
                key={links.id}
                className={`rounded-2xl ${isActive(links.href)} text-black transition-all duration-200 hover:translate-y-1`}
              >
                <Link href={links.href} className="text-md">
                  {links.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="hidden lg:block">
            <li
              className={`rounded-2xl ${isActive("/contactUs")} transition-all duration-200 active hover:translate-y-1`}
            >
              <Link href="/contactUs" className="text-sm">
                Contact Us
              </Link>
            </li>
          </ul>
          <button
            className="text-3xl lg:hidden transition-transform transform hover:scale-110"
            onClick={toggleMenu}
          >
            <HiMenuAlt3 />
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen py-10 origin-top bg-primary text-white"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between px-5">
                <Link
                  onClick={toggleMenu}
                  href="/"
                  className="flex gap-x-2 items-center"
                >
                  <Image
                    src={`/MCC_Logo-removebg-preview.png`}
                    alt=""
                    width={70}
                    height={70}
                  />
                  <h1>Modern Construction Company</h1>
                </Link>
                <button
                  className="text-3xl lg:hidden transition-transform transform hover:scale-110"
                  onClick={toggleMenu}
                >
                  <HiOutlineX />
                </button>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-roboto items-center gap-7"
              >
                {Links.slice(1).map((links) => (
                  <motion.div key={links.id} className="overflow-hidden">
                    <motion.div
                      variants={mobileLinkVars}
                      className="text-4xl uppercase"
                    >
                      <Link onClick={toggleMenu} href={links.href}>
                        {links.title}
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
