"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0F]"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-white"
        >
          Umair Ahmad
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 md:hidden"
        >
          <div className="flex flex-col gap-1">
            <span
              className={`h-0.5 w-4 bg-white transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 bg-white transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0A0A0F] md:hidden">
          <ul className="flex flex-col px-6 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
