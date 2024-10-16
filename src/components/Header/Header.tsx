'use client';

import { Links } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ToggleMenu from '../ToggleMenu/ToggleMenu';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => (pathname === href ? 'active' : '');

  return (
    <header>
      <nav className="bg-LightModeBG dark:bg-DarkModeBG shadow-md flex lg:max-w-[65%] w-full fixed lg:top-3 inset-x-0 mx-auto border lg:rounded-2xl rounded-b-xl z-[5000] px-10 lg:py-3 py-4 items-center lg:justify-around justify-between space-x-9 dark:border-zinc-100/20  transition-all duration-300">
        <Link href="/" className="lg:w-[3.4rem] w-12">
          <Image
            src="/MCC_Logo-removebg-preview.png"
            alt="Modern Construction Company"
            width={70}
            height={70}
          />
        </Link>

        <div className="flex items-center lg:gap-x-10">
          <div className="hidden lg:flex items-center lg:gap-x-10">
            {Links.slice(1, 4).map((navItem, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={navItem.href}
                className={`${isActive(navItem.href)} relative items-center flex hover:text-neutral-300 transition-all`}
              >
                <span className="hidden sm:block text-[1rem] font-thin tracking-wide uppercase">
                  {navItem.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center lg:gap-x-5">
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
            <button className="uppercase border text-base tracking-wider relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-1 rounded-xl">
              <span>Contact Us</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent h-px" />
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
