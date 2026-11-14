'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IconArrowUpRight, IconBrandFacebook } from '@tabler/icons-react';
import { Links, contactData } from '@/Data/Data';

const FACEBOOK_URL =
  'https://www.facebook.com/MCCEGY1998?mibextid=rS40aB7S9Ucbxw6v';

const Footer = () => {
  return (
    <footer className="dark relative overflow-hidden bg-ink text-white">
      {/* Oversized wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 select-none font-display text-[28vw] font-black leading-none tracking-[-0.06em] text-white/[0.03]"
      >
        MCC
      </div>

      <div className="container-x relative pt-20 md:pt-24">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/MCC-LOGO.png" alt="" width={52} height={52} />
              <span className="font-display text-3xl font-black tracking-[0.2em]">
                MCC
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-white/60">
              Modern Construction Company. From concept to completion, we
              craft your dreams into existence.
            </p>
            <Link href="/contact" className="btn-brand mt-8">
              Start a project
              <IconArrowUpRight stroke={2.2} />
            </Link>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#E5383B]">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {Links.slice(1).map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[0.9375rem] text-white/80 transition-colors hover:text-white"
                  >
                    {link.title}
                    <IconArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#E5383B]">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-white/80">
              {contactData.map((item) => (
                <li key={item.details}>
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      {item.details}
                    </Link>
                  ) : (
                    <a
                      href={`mailto:${item.details}`}
                      className="transition-colors hover:text-white"
                    >
                      {item.details}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MCC on Facebook"
              className="mt-6 inline-grid size-11 place-items-center rounded-xl border border-white/15 text-white transition-colors hover:border-[#1877F2] hover:bg-[#1877F2]"
            >
              <IconBrandFacebook size={20} stroke={1.8} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/50 md:flex-row">
          <p>
            © Copyright 2025, All Rights Reserved by{' '}
            <span className="font-semibold text-white/80">
              Modern Construction Company
            </span>
          </p>
          <Link
            href="https://makend.vercel.app/"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            SITE BY
            <Image
              src="/batch-5---design-6-1__2_-removebg-preview.png"
              alt="Makend"
              width={64}
              height={32}
              className="h-8 w-16 object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
