'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import { Links } from '@/Data/Data';

const ToggleMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prevOpen) => !prevOpen);
  };

  const pathname = usePathname();

  const isActive = (href: string) => (pathname === href ? 'active' : '');

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
      y: '30vh',
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
              <div className="flex justify-between px-10">
                <Link
                  onClick={toggleMenu}
                  href="/"
                  className="flex items-center"
                >
                  <Image
                    src={`/MCC-LOGO.png`}
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
                  <HiOutlineX />
                </button>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-roboto items-start pl-6 gap-7"
              >
                {Links.map((links) => {
                  const isActiveLink = isActive(links.href);
                  return (
                    <motion.div key={links.id} className="overflow-hidden">
                      <motion.div
                        variants={mobileLinkVars}
                        className="text-4xl uppercase"
                      >
                        <Link
                          onClick={toggleMenu}
                          href={links.href}
                          className={`relative items-center flex hover:text-secondary dark:hover:text-red-500 transition-all ${
                            isActiveLink
                              ? 'text-secondary dark:text-red-500'
                              : ''
                          }`}
                        >
                          {links.title}
                        </Link>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
              <p className="w-full mt-8 text-sm text-center dark:text-gray-100 md:mt-0 md:w-auto">
                © Copyright 2025, All Rights Reserved by{' '}
                <br className="block lg:hidden" />
                <span className="font-semibold font-inter">
                  {' '}
                  Modern Construction Company
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ToggleMenu;
