import Link from "next/link";

const bookingUrl = "https://cortney.janeapp.com/#staff_member/1";

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
        <Link href="/" className="flex h-[50px] items-center gap-3 overflow-hidden">
          <img
            src="/logo/navbar-logo.png"
            alt="Balanced Body Sports Rehab logo"
            className="h-[220px] w-auto object-cover"
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
    </header>
  );
}
