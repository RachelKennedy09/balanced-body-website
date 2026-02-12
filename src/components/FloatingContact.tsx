"use client";

import Link from "next/link";

export default function FloatingContact() {
  return (
    <Link
      href="/contact"
      style={{
        position: "fixed",
        right: 24,
        bottom: 24, // 👈 move to bottom
        zIndex: 9999,
      }}
      className="rounded-full border border-black bg-black px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-white hover:text-black"
      aria-label="Go to contact page"
    >
      Contact
    </Link>
  );
}
