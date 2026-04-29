import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative inline-flex h-8 w-8 items-center justify-center bg-accent border-2 border-paper">
                <span className="font-display text-xl">L</span>
              </span>
              <span className="font-display text-2xl">
                LiveShop<span className="italic">Hub</span>
              </span>
            </div>
            <p className="text-sm text-paper/70 max-w-sm leading-relaxed">
              An honest live commerce platform built for independent makers,
              vintage curators, and small shops. No middleman markup, no algorithmic gates.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Stat label="Active sellers" value="14,210" />
              <Stat label="GMV last quarter" value="$48M" />
              <Stat label="Avg. take rate" value="3%" />
            </div>
          </div>

          <FCol title="Platform">
            <FLink href="/">Discover</FLink>
            <FLink href="/upcoming">Upcoming streams</FLink>
            <FLink href="/sell">Sell live</FLink>
            <FLink href="/about">About</FLink>
          </FCol>

          <FCol title="Help">
            <FLink href="#">Seller handbook</FLink>
            <FLink href="#">Buyer protection</FLink>
            <FLink href="#">Shipping & returns</FLink>
            <FLink href="#">Status</FLink>
          </FCol>
        </div>

        <div className="mt-12 pt-6 border-t border-paper/15 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-paper/60">
          <p>© {new Date().getFullYear()} LiveShopHub Cooperative. Made with care.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-paper">Terms</Link>
            <Link href="#" className="hover:text-paper">Privacy</Link>
            <Link href="#" className="hover:text-paper">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-paper/40 px-3 py-2">
      <div className="font-mono text-base">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-paper/60">{label}</div>
    </div>
  );
}

function FCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono uppercase text-xs tracking-widest text-paper/60 mb-3">
        {title}
      </h4>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-paper/80 hover:text-paper hover:underline underline-offset-4">
        {children}
      </Link>
    </li>
  );
}
