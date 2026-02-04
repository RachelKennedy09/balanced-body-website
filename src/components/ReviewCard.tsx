type Review = {
  name: string;              // Initials only (e.g. "B.R.")
  result?: string;           // Short outcome line
  body: string;              // The testimonial text
  rating?: number;           // 1–5 (only include if verified)
  source?: string;           // "Google", "JaneApp", etc.
  screenshotUrl?: string;    // Optional image link
};

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="rounded-2xl border border-black/10 p-6 bg-white">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium text-black">{review.name}</p>
          {review.result && (
            <p className="text-sm text-black/60">{review.result}</p>
          )}
        </div>

        {/* Stars */}
        {review.rating && (
          <div
            className="text-sm text-black"
            aria-label={`${review.rating} star review`}
          >
            {"★".repeat(review.rating)}
          </div>
        )}
      </div>

      {/* Review body */}
      <blockquote className="mt-4 text-black/80 leading-relaxed">
        “{review.body}”
      </blockquote>

      {/* Footer */}
      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-black/60">
        {review.source && <span>Source: {review.source}</span>}

        {review.screenshotUrl && (
          <>
            <span className="text-black/20">•</span>
            <a
              href={review.screenshotUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-black"
            >
              View original screenshot
            </a>
          </>
        )}
      </div>
    </figure>
  );
}
