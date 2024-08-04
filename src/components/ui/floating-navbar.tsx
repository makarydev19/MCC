"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/libs/utils";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Links } from "@/data/data";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

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
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex lg:max-w-[60vw] max-w-[90vw] fixed top-2 lg:top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-2xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] lg:px-1 px-7 py-3 items-center lg:justify-around justify-between space-x-4",
          className
        )}
      >
        <Link href="/" className="w-12">
          <Image
            src={`/MCC_Logo-removebg-preview.png`}
            alt="Modern Construction Company"
            width={70}
            height={70}
          />
        </Link>
        <button
          title="toggle"
          className="text-3xl lg:hidden transition-transform transform hover:scale-110"
          onClick={toggleMenu}
        >
          <HiMenuAlt3 />
        </button>
        <div className="hidden lg:flex items-center justify-between lg:gap-x-6">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                `rounded-2xl ${isActive(navItem.link)} text-black transition-all duration-200 hover:translate-y-1 border-b-[1.5px] px-4 py-2`
              )}
            >
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent  h-px" />
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-md">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <Link href="/contactUs" className="hidden lg:block">
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-xl">
            <span>Contact Us</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent  h-px" />
          </button>
        </Link>
      </motion.div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen py-10 origin-top bg-[whitesmoke] text-primary z-[9999]"
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
                    alt="Modern Construction Company"
                    width={70}
                    height={70}
                  />
                  <h1>Modern Construction Company</h1>
                </Link>
                <button
                  title="toggle"
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
    </AnimatePresence>
  );
};
