const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[var(--max)] px-5 py-14">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
        <p className="mt-4 max-w-2xl text-black/70">
          Clear, movement-focused rehab designed to help you return to training, sport, and life with confidence.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "90 min Muscle Activation Techniques - Initial Consultation",
            bullets: [
              "Comprehensive biomechanics assessment to pinpoint root causes",
              "Activate dormant muscles to restore balance and function",
              "Leave with less tension, reduced pain, and improved performance",
            ],
            image: "/therapy%20photos/IMG_0001.JPG",
          },
          {
            title: "1 hour Muscle Activation Techniques (multiple pain points)",
            bullets: [
              "Identify the root cause through biomechanics assessment",
              "Test range of motion to reveal weak links",
              "Targeted neuromuscular treatment to restore function",
            ],
            image: "/therapy%20photos/IMG_0650.JPG",
          },
          {
            title: "30 min Muscle Activation Techniques Follow-Up (1 issue / pain)",
            bullets: [
              "Focused follow-up for a single issue",
              "Reactivation for limited ranges and improved function",
              "Build momentum between sessions",
            ],
            image: "/therapy%20photos/IMG_0630.JPG",
          },
          {
            title: "Biomechanics Consult and/or Assessment",
            bullets: [
              "Focused consult to uncover imbalances",
              "Clarify root causes of pain or performance limits",
              "Actionable next steps and recommendations",
            ],
            image: "/therapy%20photos/IMG_0929.JPG",
          },
          {
            title: "45 min Muscle Activation Techniques",
            bullets: [
              "Ideal for one primary issue or two smaller concerns",
              "More depth than 30 minutes without a full hour",
              "Focused assessment and treatment",
            ],
            image: "/therapy%20photos/IMG_0866.JPG",
          },
          {
            title: "Mobility Class online",
            bullets: [
              "20-minute guided mobility session",
              "Reduce stiffness and improve joint stability",
              "Build athletic performance from home",
            ],
            image: "/therapy%20photos/IMG_0921.JPG",
          },
        ].map((s) => (
          <div key={s.title} className="flex justify-center">
            <div className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-2xl border border-black/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${s.image})` }}
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative p-7 text-white">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <ul className="mt-4 list-disc pl-5 text-sm text-white/90">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
              </ul>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full border border-white/80 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition"
              >
                Book this service
              </a>
            </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12 border-t border-black/10 pt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Before + After</h2>
        <p className="mt-3 max-w-2xl text-black/70">
          See the difference in movement after targeted activation and treatment.
        </p>

        <div className="mt-6 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-black/10">
          <video
            className="w-full aspect-video"
            src="/videos/before-after-video.mp4"
            controls
            playsInline
          />
        </div>
      </section>
    </div>
  );
}
