import Link from "next/link";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-[var(--max)] items-center justify-between px-5 py-4">
       <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Balanced Body Sports Rehab logo"
            className="h-16 w-auto"
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

        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
        >
          Book Now
        </a>
      </div>

      {/* Simple mobile nav */}
      <div className="mx-auto max-w-[var(--max)] px-5 pb-3 md:hidden">
        <div className="flex flex-wrap gap-4 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="underline-offset-4 hover:underline">
              {item.label}
            </Link>
          ))}
          <Link href="/book" className="underline-offset-4 hover:underline">
            Book
          </Link>
        </div>
      </div>
    </header>
  );
}
