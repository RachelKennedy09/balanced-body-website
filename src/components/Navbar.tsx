"use client";

import { useState } from "react";
import Link from "next/link";

const bookingUrl = "https://cortney.janeapp.com/#staff_member/1";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/10">
      <div className="relative mx-auto flex max-w-[var(--max)] items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex h-[50px] w-[140px] items-center gap-3 overflow-hidden flex-shrink-0 sm:w-[160px]"
        >
          <img
            src="/logo/navbar-logo.png"
            alt="Balanced Body Sports Rehab logo"
            className="h-[220px] w-full object-cover"
          />
        </Link>

        <nav className="hidden gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:underline underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            Book Now
          </a>
        </div>

<button
  type="button"
  aria-label="Toggle menu"
  aria-expanded={open}
  onClick={() => setOpen((v) => !v)}
  className="fixed right-4 top-4 z-[9999] flex h-14 w-20 items-center justify-center rounded-xl border-2 border- bg-white-300 md:hidden"
>
  <span className="text-xl font-bold">≡</span>
</button>

      </div>

      {open ? (
        <div className="mx-auto max-w-[var(--max)] px-5 pb-4 md:hidden">
          <div className="mt-2 rounded-2xl border border-black/10 p-4">
            <div className="flex flex-col gap-3 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="underline-offset-4 hover:underline"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-fit rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
