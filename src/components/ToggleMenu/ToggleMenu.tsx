import { Links } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import Image from "next/image";

const ToggleMenu = () => {
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
  return (
    <>
      <button
        title="toggle"
        className="text-3xl lg:hidden transition-transform transform hover:scale-110"
        onClick={toggleMenu}
      >
        <HiMenuAlt3 />
      </button>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen py-10 origin-top bg-[whitesmoke] dark:bg-zinc-950 dark:text-[whitesmoke] text-primary z-[9999]"
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
                {Links.map((links) => (
                  <motion.div key={links.id} className="overflow-hidden">
                    <motion.div
                      variants={mobileLinkVars}
                      className="text-4xl uppercase"
                    >
                      <Link
                        onClick={toggleMenu}
                        href={links.href}
                        className="uppercase"
                      >
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
    </>
  );
};

export default ToggleMenu;
