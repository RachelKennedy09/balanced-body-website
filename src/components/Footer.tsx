export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-[var(--max)] px-5 py-10 text-sm text-black/70">
        <p className="font-medium text-black">Balanced Body</p>
        <p className="mt-2">Sports rehab focused on helping active people move and play pain-free.</p>
        <p className="mt-6 text-xs text-black/50">
          © {new Date().getFullYear()} Balanced Body. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
