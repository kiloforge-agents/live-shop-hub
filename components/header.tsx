"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./cart-context";
import { useState } from "react";
import { CartDrawer } from "./cart-drawer";

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const isWatch = pathname?.startsWith("/watch/");

  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/70 border-b border-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="relative inline-flex h-8 w-8 items-center justify-center bg-accent brutal-border">
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-accent-2 brutal-border" />
                <span className="font-display text-xl text-ink">L</span>
              </span>
              <span className="font-display text-2xl tracking-tight">
                LiveShop<span className="italic">Hub</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="/" active={pathname === "/"}>
                Discover
              </NavLink>
              <NavLink href="/upcoming" active={pathname === "/upcoming"}>
                Upcoming
              </NavLink>
              <NavLink href="/sell" active={pathname === "/sell"}>
                Sell live
              </NavLink>
              <NavLink href="/about" active={pathname === "/about"}>
                About
              </NavLink>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/sell"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 h-9 brutal-border bg-ink text-paper text-sm font-medium hover-lift"
              >
                <span className="h-2 w-2 rounded-full bg-accent animate-live-ping" />
                Go live
              </Link>
              <button
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
                className="relative inline-flex items-center justify-center h-9 w-9 brutal-border bg-paper hover-lift"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                >
                  <path d="M3 4h2l2.5 12h11L21 7H6.5" />
                  <circle cx="9" cy="20" r="1.5" fill="currentColor" />
                  <circle cx="18" cy="20" r="1.5" fill="currentColor" />
                </svg>
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-accent text-paper text-[10px] font-bold flex items-center justify-center brutal-border">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        {!isWatch && <LiveTicker />}
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "text-ink underline underline-offset-8 decoration-2 decoration-accent"
          : "text-muted hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}

function LiveTicker() {
  const items = [
    "🔴 Marlo just dropped 14 mugs",
    "💎 Rosa modeling Levi's 501 — W30",
    "🔥 Kenji slicing tomato — 1 of 3 left",
    "🌿 Juno: Thai Constellation goes live in 2h",
    "✨ Amani — cowrie restock now",
    "👃 Cleo: tonka Q&A Saturday",
  ];
  return (
    <div className="border-t border-ink bg-ink text-paper overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-1.5 text-xs font-medium tracking-wide">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="px-6 inline-flex items-center gap-2">
            {t}
            <span className="opacity-30">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
