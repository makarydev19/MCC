'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IconArrowUpRight } from '@tabler/icons-react';
import { ToggleTheme, ToggleMenu } from '../components/Toggle';
import { Links } from '@/Data/Data';
import { cn } from '@/libs/utils';

// Routes that open with a full-bleed image hero (nav starts transparent).
const HERO_ROUTES = ['/', '/about', '/services', '/projects', '/contact'];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const hasHero = HERO_ROUTES.some((r) =>
    r === '/' ? pathname === '/' : pathname.startsWith(r)
  );
  const solid = scrolled || !hasHero;

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-[5000] px-2 pt-2 sm:px-3 sm:pt-3">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'mx-auto flex max-w-container items-center justify-between gap-4 rounded-2xl border py-2 pl-4 pr-2 backdrop-blur-xl transition-[background-color,border-color,box-shadow,color] duration-300 ease-out sm:pl-6 lg:mt-3',
          solid
            ? 'border-line bg-surface/85 text-fg shadow-card'
            : 'border-white/15 bg-ink/30 text-white'
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Modern Construction Company, home"
        >
          <Image
            src="/MCC-LOGO.png"
            alt=""
            width={44}
            height={44}
            className="size-10 object-contain lg:size-11"
            priority
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg font-black tracking-[0.2em]">
              MCC
            </span>
            <span
              className={cn(
                'mt-1 text-[0.6875rem] font-medium',
                solid ? 'text-subtle' : 'text-white/70'
              )}
            >
              Modern Construction
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {Links.slice(0, 4).map((navItem) => {
            const active = isActive(navItem.href);
            return (
              <li key={navItem.id}>
                <Link
                  href={navItem.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'group relative flex flex-col items-center px-4 py-2.5 text-[0.9375rem] font-medium transition-colors duration-200',
                    active
                      ? 'font-semibold'
                      : solid
                        ? 'text-subtle hover:text-fg'
                        : 'text-white/75 hover:text-white'
                  )}
                >
                  {navItem.title}
                  <span
                    className={cn(
                      'absolute bottom-1 h-0.5 w-4 origin-center rounded-full bg-brand transition-transform duration-300 ease-out',
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ToggleTheme light={!solid} />
          <Link href="/contact" className="btn-brand hidden lg:inline-flex">
            Contact Us
            <IconArrowUpRight stroke={2.2} />
          </Link>
          <ToggleMenu light={!solid} />
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
