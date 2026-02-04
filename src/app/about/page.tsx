export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[var(--max)] px-5 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
        {/* Photo placeholder */}
        <div className="h-80 rounded-2xl border border-black/10 bg-black/5" />

        <div>
          <p className="text-black/70">
            Balanced Body supports active people who want less pain, better movement, and a plan that makes sense.
            Treatment is centered on function, performance, and long-term progress.
          </p>

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
    </div>
  );
}
