"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Correct import for client-side path navigation
import { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi"; // Import the close icon

import { Links } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";
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
