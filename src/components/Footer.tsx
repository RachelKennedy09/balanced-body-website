export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-[var(--max)] px-5 py-10 text-center text-sm text-black/70">
       <div className="flex justify-center">
  <img
    src="/logo/logo-1.png"
    alt="Balanced Body logo"
    style={{
      height: "300px",
      width: "auto",
    }}
  />
</div>

        <p className="mt-2">Sports rehab focused on helping active people move and play pain-free.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3 text-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-black/50">Location</p>
            <p className="mt-2">Mickelson National Gold Club</p>
            <p className="mt-1 text-black/70">34122 East Harmony Trail, Rocky View County AB T3Z 0G8</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-black/50">Contact</p>
            <p className="mt-1">
              Email:{" "}
              <a href="mailto:balanced_body@icloud.com" className="underline underline-offset-4">
                balanced_body@icloud.com
              </a>
            </p>
            <p className="mt-1">
              Mobile:{" "}
              <a href="tel:7056067794" className="underline underline-offset-4">
                705-606-7794
              </a>
            </p>
            <p className="mt-1">
              <a href="https://www.balancedbody.ca" className="underline underline-offset-4">
                www.balancedbody.ca
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-black/50">Office Hours</p>
            <p className="mt-2">Mon-Fri 9am-3pm</p>
          </div>
        </div>

        <p className="mt-6 text-xs text-black/50">
          © {new Date().getFullYear()} Balanced Body. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
