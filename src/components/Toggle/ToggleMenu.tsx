'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IconArrowUpRight, IconMenu2, IconX } from '@tabler/icons-react';
import { Links, contactData } from '@/Data/Data';
import { cn } from '@/libs/utils';

/**
 * Full-screen mobile menu.
 *
 * - Rendered through a portal on <body>: the navbar uses backdrop-filter and
 *   transforms, which would otherwise trap this fixed overlay inside the bar.
 * - Open/close uses plain CSS transitions (opacity + transform) instead of a
 *   JS/WAAPI clip-path animation, which is unreliable in iOS Safari. The
 *   panel's visibility never depends on an animation finishing.
 * - Scrolls and scales its type to the screen height so every link stays
 *   reachable on short/landscape screens.
 */
const ToggleMenu = ({ light = false }: { light?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // Close whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const panel = (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-[2147483000] flex h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-ink text-white transition-[opacity,visibility] duration-300 ease-out lg:hidden',
        open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
      )}
    >
      <div className="flex shrink-0 items-center justify-between px-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <Image src="/MCC-LOGO.png" alt="" width={44} height={44} />
          <span className="font-display text-lg font-black tracking-[0.2em]">MCC</span>
        </Link>
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="grid size-11 place-items-center rounded-xl border border-white/20 hover:bg-white/10"
        >
          <IconX size={22} stroke={2} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center px-6 py-6">
        <ul className="flex flex-col gap-1">
          {Links.map((link, i) => (
            <li
              key={link.id}
              style={{ transitionDelay: open ? `${100 + i * 50}ms` : '0ms' }}
              className={cn(
                'transition-[opacity,transform] duration-500 ease-out',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={cn(
                  'flex items-baseline gap-4 py-1 font-display font-extrabold leading-[1.1] tracking-tight transition-colors',
                  'text-[clamp(1.75rem,min(11vw,8svh),3.75rem)]',
                  isActive(link.href) ? 'text-[#E5383B]' : 'text-white active:text-white/70'
                )}
              >
                <span className="font-display text-sm font-bold tracking-[0.2em] text-white/40">
                  0{i + 1}
                </span>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex shrink-0 flex-col gap-4 border-t border-white/10 px-6 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <p className="text-sm text-white/60">{contactData[0].details}</p>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          className="btn-brand w-full"
        >
          Get a quote
          <IconArrowUpRight stroke={2.2} />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className={cn(
          'grid size-11 touch-manipulation place-items-center rounded-xl border transition-colors lg:hidden',
          light
            ? 'border-white/20 text-white hover:bg-white/10'
            : 'border-line text-fg hover:bg-muted'
        )}
      >
        <IconMenu2 size={22} stroke={2} />
      </button>
      {mounted && createPortal(panel, document.body)}
    </>
  );
};

export default ToggleMenu;
