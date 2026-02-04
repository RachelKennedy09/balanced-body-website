const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[var(--max)] px-5 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-2xl text-black/70">
        For booking, please use the online scheduler. For general questions, add an email/phone here later.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 p-7">
          <h2 className="font-semibold">Booking</h2>
          <p className="mt-2 text-sm text-black/70">Book online anytime.</p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            Book Now
          </a>
        </div>

        <div className="rounded-2xl border border-black/10 p-7">
          <h2 className="font-semibold">Location</h2>
          <p className="mt-2 text-sm text-black/70">
            Add address + map embed later (once you have details).
          </p>
          <div className="mt-4 h-28 rounded-xl border border-black/10 bg-black/5" />
        </div>
      </div>
    </div>
  );
}
