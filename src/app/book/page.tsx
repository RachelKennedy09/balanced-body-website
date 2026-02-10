const bookingUrl = "https://cortney.janeapp.com/#staff_member/1";
export default function BookPage() {
  return (
    <div className="mx-auto max-w-[var(--max)] px-5 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Book</h1>
      <p className="mt-4 max-w-2xl text-black/70">
        Appointments are booked online. Click below to view availability and choose a time that works for you.
      </p>

      <a
        href={bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
      >
        Book on JaneApp
      </a>
    </div>
  );
}
