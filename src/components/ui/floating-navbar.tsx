"use client";
import React, { useContext, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/libs/utils";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

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
          "flex lg:max-w-[75vw] max-w-[90vw] fixed top-2 lg:top-7 inset-x-0 mx-auto border border-transparent dark:border-white/[0.1] rounded-2xl dark:bg-zinc-950 bg-zinc-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-7 py-4 items-center justify-between",
          className
        )}
      >
        <Link href="/" className="lg:w-16 w-12">
          <Image
            src={`/MCC_Logo-removebg-preview.png`}
            alt="Modern Construction Company"
            width={70}
            height={70}
          />
        </Link>

        <div className="flex items-center gap-5">
          <div className="lg:hidden block">
            <ToggleTheme />
          </div>
          <ToggleMenu />
        </div>

        <div className="hidden lg:flex items-center justify-between lg:gap-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                `rounded-xl ${isActive(navItem.link)}  transition-all duration-200 hover:translate-y-1 px-3 py-2`
              )}
            >
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent  h-px" />
              <span className="hidden sm:block text-[1rem] font-semibold">
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <ToggleTheme />
        </div>
        <Link href="/contactUs" className="hidden lg:block">
          <button className="border text-[1rem] font-semibold relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-xl">
            <span>Contact Us</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent  h-px" />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
