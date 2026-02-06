export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[var(--max)] px-5 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
        {/* Photo + Logo */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/5">
            <img
              src="/therapy%20photos/2.png"
              alt="Therapy session"
              className="h-80 w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-center rounded-2xl border border-black/10 bg-white p-8">
            <img
              src="/logo.png"
              alt="Balanced Body logo"
              className="max-h-52 w-auto"
            />
          </div>
        </div>

        <div>
          <p className="text-black/70">
            Balanced Body supports active people who want less pain, better movement, and a plan that makes sense.
            Treatment is centered on function, performance, and long-term progress.
          </p>

          <div className="mt-8 rounded-2xl border border-black/10 bg-black/5 p-6">
            <h2 className="text-xl font-semibold">Why</h2>
            <div className="mt-3 space-y-4 text-black/70 leading-relaxed">
              <p>
                You’re only as strong as your weakest link. When every isolated
                component is functioning at its best, the whole system performs
                better than ever.
              </p>

              <p>
                My mission is to identify the biomechanics contributing to pain
                and help you return to sport stronger and more resilient than before.
              </p>

              <p>
                Using Muscle Activation Techniques (MAT), I address isolated
                weakness to improve total body performance.
              </p>

              <p>
                I am committed to helping athletes return to the sport they love —
                confident, capable, and without the fear of repeat injury.
              </p>

              <p>
                Even if you’ve been dealing with pain for years or have tried
                multiple therapies, I work to uncover what’s holding you back and
                give you the tools you need to keep playing full-out, pain-free.
              </p>
            </div>
          </div>

          <h2 className="mt-8 text-xl font-semibold">Approach</h2>
          <p className="mt-3 text-black/70">
            We focus on how you move, what’s limiting you, and the steps that will help you return to the activities you love.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Who it’s for</h2>
          <ul className="mt-3 list-disc pl-5 text-black/70">
            <li>Recreational athletes</li>
            <li>Runners, skiers, cyclists, gym-goers</li>
            <li>Anyone rebuilding after injury or overuse</li>
          </ul>
        </div>
      </div>

      <section className="mt-14 border-t border-black/10 pt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Meet Your Practitioner</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-[240px_1fr] md:items-start">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/5">
            <img
              src="/bio-photo.jpg"
              alt="Courtney Dreifelds"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold">Courtney Dreifelds</h3>
            <p className="mt-1 text-sm uppercase tracking-widest text-black/60">
              Mastery Muscle Activation Practitioner
            </p>

            <div className="mt-4 space-y-4 text-black/70 leading-relaxed">
              <p>
                Courtney is dedicated to helping people move better, recover faster, and perform at their best using
                advanced Muscle Activation Techniques (MAT). With over 20 years of experience in sport performance—and
                more than a decade as a Mastery-level MAT Specialist—she has worked with elite athletes across the PGA,
                NHL, CFL, NFL, and the Alberta Ski Team.
              </p>

              <p>
                Her clinical approach is grounded in precision, curiosity, and a deep respect for how the human body
                adapts and heals.
              </p>

              <p>
                Courtney holds a Master of Science in Muscle Activation Techniques, a postgraduate degree in Recreation
                Therapy, and a Bachelor’s degree in Sport Psychology. This combination allows her to integrate physical
                assessment with an understanding of performance, resilience, and long-term wellbeing.
              </p>

              <p>
                Outside of clinical practice, Courtney is passionate about skiing and has worked as a ski instructor in
                Whistler. She has run a marathon in Iceland with Team Diabetes and cycled 660 km from Toronto to Montréal
                in support of the People With AIDS Foundation—reflecting her lifelong commitment to movement, challenge,
                and community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
