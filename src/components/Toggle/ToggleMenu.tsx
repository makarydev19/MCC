"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import { Links, contactData } from "@/Data/Data";
import { cn } from "@/libs/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const ToggleMenu = ({ light = false }: { light?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Lock scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={cn(
          "grid size-11 place-items-center rounded-xl border transition-colors lg:hidden",
          light
            ? "border-white/20 text-white hover:bg-white/10"
            : "border-line text-fg hover:bg-muted",
        )}
      >
        <IconMenu2 size={22} stroke={2} />
      </button>

      {/* Portal to <body>: the navbar uses backdrop-filter/transform, which
          would otherwise trap this fixed overlay inside the bar's box. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                exit={{ clipPath: "inset(0 0 100% 0)" }}
                transition={{ duration: 0.55, ease: EASE }}
                className="fixed inset-0 z-[9999] flex flex-col bg-ink text-white"
              >
                <div className="flex items-center justify-between px-5 pt-5">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <Image src="/MCC-LOGO.png" alt="" width={44} height={44} />
                    <span className="font-display text-lg font-black tracking-[0.2em]">
                      MCC
                    </span>
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

                <nav className="flex flex-1 flex-col justify-center px-6">
                  <ul className="flex flex-col gap-2">
                    {Links.map((link, i) => (
                      <li key={link.id} className="overflow-hidden">
                        <motion.div
                          initial={{ y: "110%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "110%" }}
                          transition={{
                            duration: 0.6,
                            delay: 0.15 + i * 0.06,
                            ease: EASE,
                          }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-baseline gap-4 py-1 font-display text-5xl font-extrabold tracking-tight transition-colors sm:text-6xl",
                              isActive(link.href)
                                ? "text-[#E5383B]"
                                : "text-white hover:text-white/70",
                            )}
                          >
                            <span className="font-display text-sm font-bold tracking-[0.2em] text-white/40">
                              0{i + 1}
                            </span>
                            {link.title}
                          </Link>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.5 } }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4 border-t border-white/10 px-6 py-6"
                >
                  <p className="text-sm text-white/60">
                    {contactData[0].details}
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="btn-brand w-full"
                  >
                    Get a quote
                    <IconArrowUpRight stroke={2.2} />
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default ToggleMenu;
