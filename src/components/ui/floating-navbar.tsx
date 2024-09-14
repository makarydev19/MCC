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

      if (scrollYProgress.get() < 0.05) {
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
          "flex lg:max-w-[70%] bg-white dark:bg-zinc-950 w-full fixed lg:top-5 inset-x-0 mx-auto border lg:rounded-2xl rounded-b-3xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 lg:py-3 py-5 items-center lg:justify-around justify-between space-x-9 border-white/[0.2]",
          className
        )}
      >
        <div className="flex items-center lg:gap-x-10">
          <Link href="/" className="lg:w-[3.4rem] w-12">
            <Image
              src="/MCC_Logo-removebg-preview.png"
              alt="Modern Construction Company"
              width={70}
              height={70}
            />
          </Link>

          <div className="hidden lg:flex items-center lg:gap-x-5">
            {navItems.slice(1, 4).map((navItem: any, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  `${isActive(navItem.link)} relative dark:text-neutral-50 items-center flex dark:hover:text-neutral-300 hover:text-neutral-500 text-neutral-800 transition-all`
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-lg font-thin tracking-wide">
                  {navItem.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center lg:gap-x-10">
          <div className="hidden lg:block">
            <ToggleTheme />
          </div>
          <div className="flex items-center gap-5 lg:hidden">
            <div className="lg:hidden block">
              <ToggleTheme />
            </div>
            <ToggleMenu />
          </div>

          <Link href="/contactUs" className="hidden lg:block">
            <button className="uppercase border text-base tracking-wider relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-xl">
              <span>Contact Us</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent h-px" />
            </button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
