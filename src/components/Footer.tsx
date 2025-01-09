'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeContext from '@/Context/themeContext';
import { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa6';
// import { RiLinkedinFill } from 'react-icons/ri';
import { Links } from '@/Data/Data';

const Footer = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section className="py-3 dark:bg-zinc-950 bg-[#fdfdfd] pt-16 lg:pt-8">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-wrap items-center justify-around gap-7">
          <div className="w-16 flex items-center justify-center">
            <Link href="/">
              <Image
                src={`/MCC-LOGO.png`}
                alt=""
                width={100}
                height={100}
                loading="eager"
              />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:gap-x-14 gap-7 lg:px-0 px-28">
            {Links.slice(1).map((link) => (
              <ul key={link.id}>
                <Link href={link.href}>
                  <li className="dark:text-[whitesmoke] text-balance tracking-wider uppercase text-base">
                    {link.title}
                  </li>
                </Link>
              </ul>
            ))}
          </div>
          <ul className="flex items-center space-x-3 md:order-3">
            <li>
              <Link
                href={
                  'https://www.facebook.com/MCCEGY1998?mibextid=rS40aB7S9Ucbxw6v'
                }
                className="flex items-center justify-center dark:text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full size-10 focus:bg-blue-500 hover:bg-blue-500 hover:border-blue-500 focus:border-blue-500"
              >
                <FaFacebook className="text-3xl" />
              </Link>
            </li>

            {/* <li>
              <Link
                href={''}
                className="flex items-center justify-center dark:text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full size-10 focus:bg-blue-500 hover:bg-blue-500 hover:border-blue-500 focus:border-blue-500"
              >
                <RiLinkedinFill className="text-3xl" />
              </Link>
            </li> */}
          </ul>
        </div>
        <hr className="my-10 dark:border-gray-800" />
        <div className="flex flex-col w-full justify-center items-center ">
          <p className="w-full mt-8 text-sm text-center dark:text-gray-100 md:mt-0 md:w-auto">
            © Copyright 2025, All Rights Reserved by{' '}
            <br className="block lg:hidden" />
            <span className="font-semibold font-inter">
              {' '}
              Modern Construction Company
            </span>
          </p>
          <div className="flex items-center justify-center">
            <p className="dark:text-gray-100 text-sm">SITE BY</p>
            <div className="w-16">
              <Link href={'https://makend.vercel.app/'}>
                {darkTheme ? (
                  <Image
                    src={`/batch-5---design-6-1__2_-removebg-preview.png`}
                    alt="logo"
                    width={100}
                    height={100}
                    className="img"
                  />
                ) : (
                  <Image
                    src={`/myLogo.png`}
                    alt="logo"
                    width={100}
                    height={100}
                    className="img"
                  />
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
