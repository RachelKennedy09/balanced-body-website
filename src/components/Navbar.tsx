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
    <header className="navbar">
      <div className="bar">
        {/* LEFT: Logo */}
        <Link href="/" className="logoLink" aria-label="Go to homepage">
          <img
            src="/logo/logo.png"
            alt="Balanced Body Sports Rehab logo"
            className="logoImg"
          />
        </Link>

        {/* CENTER: Desktop nav */}
        <nav className="desktopNav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="navLink">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: CTA (desktop) + Hamburger (mobile) */}
        <div className="rightControls">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="cta"
          >
            Book Now
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="hamburger"
          >
            <span className="hamburgerIcon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobileMenu">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobileLink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mobileCta"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .navbar {
          background: white;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

       .bar {
  max-width: 72rem;
  margin: 0 auto;
  padding: 8px 16px; /* was 14px 20px */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px; /* slightly tighter */
}

        /* LOGO */
       .logoLink {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

       .logoImg {
  height: 50px;  /* set actual visible size */
  width: auto;
  object-fit: contain;
  display: block;
}

        /* DESKTOP NAV */
        .desktopNav {
          display: none;
          gap: 24px;
        }

        .navLink {
          font-size: 14px;
          color: black;
          text-decoration: none;
        }

        .navLink:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        /* RIGHT SIDE */
        .rightControls {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

      .cta {
  display: none;
  border: 1px solid black;
  padding: 6px 12px;  /* was 8px 14px */
  border-radius: 999px;
  font-size: 13px;    /* was 14 */
  font-weight: 600;
  background: white;
  color: black;
  text-decoration: none;
}

        .cta:hover {
          background: black;
          color: white;
        }

        /* HAMBURGER */
        .hamburger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.35);
          background: white;
        }

       .hamburgerIcon {
  width: 22px;   /* was 34 */
  height: 14px;  /* was 22 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


      .hamburgerIcon span {
  height: 2px;   /* was 4 */
  width: 100%;
  background: black;
  border-radius: 999px;
  display: block;
}

        /* MOBILE MENU */
        .mobileMenu {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding: 14px 20px 18px;
          max-width: 72rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: white;
        }

        .mobileLink {
          font-size: 14px;
          color: black;
          text-decoration: none;
        }

        .mobileLink:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .mobileCta {
          margin-top: 8px;
          border: 1px solid black;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          background: white;
          color: black;
          text-decoration: none;
          width: fit-content;
        }

        .mobileCta:hover {
          background: black;
          color: white;
        }

        /* DESKTOP BREAKPOINT */
        @media (min-width: 1024px) {
          .desktopNav {
            display: flex;
          }

          .cta {
            display: inline-flex;
          }

          .hamburger {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
