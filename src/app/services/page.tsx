const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[var(--max)] px-5 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
      <p className="mt-4 max-w-2xl text-black/70">
        Clear, movement-focused rehab designed to help you return to training, sport, and life with confidence.
      </p>

      <div className="mt-10 grid gap-4">
        {[
          {
            title: "Assessment + Treatment",
            bullets: ["Movement assessment", "Plan for pain + function", "Treatment tailored to your goals"],
          },
          {
            title: "Sports Rehab Sessions",
            bullets: ["Rebuild strength and capacity", "Mobility + stability work", "Progressions you can repeat at home"],
          },
          {
            title: "Performance Support",
            bullets: ["Prehab + maintenance", "Season planning", "Address patterns before they become injuries"],
          },
        ].map((s) => (
          <div key={s.title} className="rounded-2xl border border-black/10 p-7">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <ul className="mt-4 list-disc pl-5 text-black/70">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Book this service
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
