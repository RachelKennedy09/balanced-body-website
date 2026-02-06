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
          Balanced Body Sports Rehab
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Optimize your performance.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-black/70">
          Identify the root cause of pain and tightness to optimize your performance and unlock your full potential.
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

        {/* Hero video */}
        <div className="mt-10 overflow-hidden rounded-2xl">
          <video
            className="aspect-video w-full object-cover"
            src="/videos/hero-video.mp4.mp4"
            poster="/therapy%20photos/hero-photo.png.PNG"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* WHAT IS MAT */}
      <section className="py-12 border-t border-black/10">
        <div className="relative overflow-hidden rounded-2xl border border-black/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/therapy%20photos/IMG_0633.JPG)" }}
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />

          <div className="relative p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-black/60">
                Muscle Activation Therapy
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                What Is Muscle Activation Therapy?
              </h2>
              <p className="mt-4 text-black/70 leading-relaxed">
                Muscle Activation Techniques (MAT) is a targeted approach to fix muscle imbalances
                at the root—so you move better, feel stronger, and stay pain-free.
              </p>
              <p className="mt-4 text-black/70 leading-relaxed">
                Unlike treatments that mask symptoms, MAT gets to the source—helping athletes stay
                strong, recover fast, and play full-out.
              </p>
            </div>

            <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold">What MAT does</p>
              <ul className="mt-4 space-y-3 text-sm text-black/70">
                <li>Assesses mobility + muscle function</li>
                <li>Pinpoints weak or underperforming muscles</li>
                <li>Reactivates muscles with precise techniques</li>
                <li>Restores nervous system connection</li>
                <li>Reduces pain + prevents injury</li>
                <li>Boosts performance + recovery</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
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

      {/* PRO REVIEWS */}
      <section className="py-12 border-t border-black/10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            What the Pros Are Saying About MAT
          </h2>
          <p className="mt-2 max-w-2xl text-black/70">
            Trusted feedback from professional athletes and elite performance circles.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              image: "/reviews/pro-review-1.jpeg",
              label: "Video testimonial",
              href: "https://www.youtube.com/watch?v=EL8Xn83WvHU",
            },
            {
              image: "/reviews/pro-review-2.jpeg",
              label: "Video testimonial",
              href: "https://www.youtube.com/watch?v=4dXzwfg9ERw",
            },
            {
              image: "/reviews/pro-review-3.jpeg",
              label: "Sports Illustrated",
            },
          ].map((item) => (
            <div key={item.image} className="rounded-2xl border border-black/10 p-4">
              <div className="overflow-hidden rounded-xl border border-black/10 bg-black/5">
                <img
                  src={item.image}
                  alt="Professional review"
                  className="h-auto w-full object-contain"
                />
              </div>

              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
                >
                  {item.label}
                </a>
              ) : (
                <div className="mt-4 inline-block rounded-full border border-black px-4 py-2 text-sm font-medium text-black/70">
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MAT LINK */}
      <section className="py-12 border-t border-black/10">
        <div className="rounded-2xl border border-black/10 bg-black/5 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Muscle Activation Techniques
          </h2>
          <p className="mt-3 max-w-3xl text-black/70 leading-relaxed">
            MAT's primary goal is to activate inhibited muscles by addressing communication issues within the
            neuromuscular system rather than focusing solely on symptoms.
          </p>
          <a
            href="https://muscleactivation.com/for-clients/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            Learn more about MAT
          </a>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="py-12 border-t border-black/10">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
        <p className="mt-3 max-w-2xl text-black/70">
          Four steps designed to assess, address, and strengthen how you move.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Biomechanics Assessment",
              image: "/therapy%20photos/IMG_0930-1.JPG",
              label: "Assess",
              subtitle: "Biomechanics Assessment",
              lines: [
                "Find the underlying cause of the injury",
                "Identify even the most subtle limitation that is compromising your performance",
                "Determine what muscles aren’t contracting efficiently",
              ],
            },
            {
              title: "MAT Testing",
              body: "Text coming soon.",
              image: "/therapy%20photos/IMG_0866.JPG",
              label: "Test",
              subtitle: "Muscle Activation Therapy Testing",
              lines: [
                "Evaluate the function and recruitment of muscles.",
                "Optimize individual muscle function to ensure full-body function.",
                "If all muscles are working independently, they function more effectively together.",
              ],
            },
            {
              title: "MAT Treatment",
              body: "Text coming soon.",
              image: "/therapy%20photos/IMG_1460.JPG",
              label: "Treat",
              subtitle: "Muscle Activation Therapy Treatment",
              lines: [
                "Targeted palpations and specialized techniques, MAT treatments jumpstart dormant muscles to restore balance",
                "and function to the body's kinetic chain.",
              ],
            },
            {
              title: "Corrective Strength Training",
              body: "Text coming soon.",
              image: "/therapy%20photos/IMG_0921.JPG",
              label: "Train",
              subtitle: "Corrective Strength Training",
              lines: [
                "When you optimize your mechanics, you can peak your performance.",
                "Neuromuscular re-education, to increase communication between your brain and body.",
              ],
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-black/10 p-6">
              {item.image ? (
                <div className="relative overflow-hidden rounded-2xl border border-black/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover md:h-80"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full bg-black/25 p-5 text-white backdrop-blur-[1px]">
                      <p className="text-xs uppercase tracking-widest text-white/80">
                        {item.label}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">{item.subtitle}</h3>
                      <div className="mt-3 space-y-2 text-sm text-white/90 leading-relaxed">
                        {item.lines?.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-black/70">{item.body}</p>
                </>
              )}
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
