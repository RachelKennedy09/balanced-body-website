const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[var(--max)] px-5 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-2xl text-black/70">
        Muscle Activation Practitioner: Courtney Dreifeld
      </p>
      <p className="mt-2 text-black/70">
        Email:{" "}
        <a href="mailto:balanced_body@icloud.com" className="underline underline-offset-4">
          balanced_body@icloud.com
        </a>
      </p>
      <p className="mt-2 text-black/70">
        Mobile:{" "}
        <a href="tel:7056067794" className="underline underline-offset-4">
          705-606-7794
        </a>
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
            34122 East Harmony Trail, Rocky View County AB T3Z 0G8
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-black/10">
            <iframe
              title="Balanced Body location map"
              src="https://www.google.com/maps?q=34122%20East%20Harmony%20Trail,%20Rocky%20View%20County%20AB%20T3Z%200G8&output=embed"
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href="https://www.google.com/maps?q=34122%20East%20Harmony%20Trail,%20Rocky%20View%20County%20AB%20T3Z%200G8"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </div>
  );
}
