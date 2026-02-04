import ReviewCard from "@/components/ReviewCard";

const reviews = [
  {
    name: "B.R.",
    result: "Root-cause focused treatment",
    body:
      "Courtney is a true professional. I’ve experienced many different modalities over the years, and her methods stand out. She focuses on addressing the root cause of issues, and her techniques are genuinely best-in-class. I would highly recommend her services.",
    rating: 5,
    source: "Google",
    screenshotUrl: "/reviews/bruce-review.jpg",
  },
  {
    name: "C.C.",
    result: "Consistent improvement for athletes",
    body:
      "I only have excellent things to say about Courtney’s work. I’ve been working with her for several months, and every visit has helped significantly. As a college athlete who constantly pushes my body, her unique skill set has made a real difference.",
    rating: 5,
    source: "Google",
    screenshotUrl: "/reviews/connor-review.jpg",
  },
  {
    name: "D.N.",
    result: "Expert MAT care",
    body:
      "Courtney truly knows her stuff. If you’re looking for a professional in Muscle Activation Techniques, I highly recommend seeing her. My sessions have been informative, welcoming, and eye-opening.",
    rating: 5,
    source: "Google",
    screenshotUrl: "/reviews/dave-review.jpg",
  },
  {
    name: "J.S.",
    result: "Post-surgery recovery",
    body:
      "Courtney was instrumental in my recovery after shoulder surgery. She helped reactivate dormant muscles and restore balance after years of overcompensation. Her approach made a huge difference.",
    rating: 5,
    source: "Google",
    screenshotUrl: "/reviews/jordan-review.jpg",
  },
  {
    name: "J.G.",
    result: "Knowledge-driven care",
    body:
      "Courtney’s knowledge is incredible. I’ve received a variety of treatments and truly enjoy learning new ways to work with my body during each session. Her approach is both effective and empowering.",
    rating: 5,
    source: "Google",
    screenshotUrl: "/reviews/jesse-review.jpg",
  },
  {
    name: "P.N.",
    result: "Pain-free performance",
    body:
      "Courtney is one of the main reasons I’m able to continue playing without pain. Her work has had a major impact on my ability to stay active and feel good in my body.",
    rating: 5,
    source: "Google",
    screenshotUrl: "/reviews/peter-review.jpg",
  },
];



const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[var(--max)] px-5">
      {/* HERO */}
      <section className="py-14 md:py-20">
        <p className="text-sm uppercase tracking-widest text-black/60">
          Sports Rehab
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Play pain-free.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-black/70">
          A movement-first approach to helping active people reduce pain, restore function,
          and return to the activities they love.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Book an Appointment
          </a>
          <a
            href="/services"
            className="rounded-full border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            View Services
          </a>
        </div>

        {/* Photo placeholder */}
        <div className="mt-10 h-56 w-full rounded-2xl border border-black/10 bg-black/5 md:h-72" />
      </section>

            {/* REVIEWS */}
      <section className="py-12 border-t border-black/10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Real stories. Real results.
            </h2>
            <p className="mt-2 max-w-2xl text-black/70">
              Feedback from clients who wanted to move better, feel stronger, and get back to what they love.
            </p>
          </div>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition md:mt-0"
          >
            Book an Appointment
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name + review.result} review={review} />
          ))}
        </div>

        <p className="mt-6 text-xs text-black/50">
          Note: Results vary from person to person. Your plan is tailored to your goals and current movement needs.
        </p>
      </section>


      {/* WHAT YOU HELP WITH */}
      <section className="py-12 border-t border-black/10">
        <h2 className="text-2xl font-semibold tracking-tight">What I help with</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Pain and tightness that keeps coming back",
            "Recovery after injury or overuse",
            "Movement limitations affecting performance",
          ].map((text) => (
            <div key={text} className="rounded-2xl border border-black/10 p-6">
              <p className="text-black/80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-12 border-t border-black/10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <a href="/services" className="text-sm underline underline-offset-4">
            See all services
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Assessment + Treatment", desc: "A clear plan built around how you move." },
            { title: "Sports Rehab", desc: "Strength + mobility focused recovery." },
            { title: "Performance Support", desc: "Stay durable for the season ahead." },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-black/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-black/10">
        <div className="rounded-2xl border border-black/10 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to move better?
          </h2>
          <p className="mt-3 max-w-2xl text-black/70">
            Book online in under a minute. If you’re not sure which appointment to choose,
            start with an assessment.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}
