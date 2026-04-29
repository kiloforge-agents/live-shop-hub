import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartToast } from "@/components/cart-toast";
import { StreamCard } from "@/components/stream-card";
import { categories, getLiveStreams, getUpcomingStreams, streams } from "@/lib/data";

export default function HomePage() {
  const live = getLiveStreams();
  const upcoming = getUpcomingStreams();
  const featured = live[0];

  return (
    <>
      <Header />
      <CartToast />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative border-b border-ink overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 self-start brutal-border bg-paper px-3 py-1 text-xs font-mono mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-live-ping" />
                {live.length} sellers live now
                <span className="text-muted">·</span>
                <span className="text-muted">{streams.reduce((s, x) => s + x.viewerCount, 0).toLocaleString()} watching</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                Live commerce,{" "}
                <span className="italic">made by</span>
                <br />
                <span className="relative inline-block">
                  the people
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 Q50 2, 100 6 T198 5"
                      stroke="var(--accent)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                <span className="italic">making the things.</span>
              </h1>

              <p className="mt-8 text-lg text-muted max-w-lg leading-relaxed">
                LiveShopHub gives independent sellers a stage. Stream a kiln-pull, a thrift haul, a knife forge — and let buyers tap to purchase, no checkout shuffle. <span className="text-ink font-medium">3% take rate. Always.</span>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/watch/${featured?.slug ?? ""}`}
                  className="inline-flex items-center gap-2 px-5 h-12 brutal-border bg-accent text-paper font-medium hover-lift"
                >
                  <span className="h-2 w-2 rounded-full bg-paper animate-live-ping" />
                  Watch live now
                </Link>
                <Link
                  href="/sell"
                  className="inline-flex items-center gap-2 px-5 h-12 brutal-border bg-paper text-ink font-medium hover-lift"
                >
                  Start selling
                  <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
                    <path d="M3 7h8M7 3l4 4-4 4" />
                  </svg>
                </Link>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                <Stat n="$1.5T" l="Live commerce TAM by 2028" />
                <Stat n="3%" l="Flat take rate" />
                <Stat n="0" l="Onboarding friction" />
              </dl>
            </div>

            <div className="lg:col-span-6 relative">
              {featured && <FeaturedHero stream={featured} />}
            </div>
          </div>
        </section>

        {/* Category strip */}
        <section className="border-b border-ink bg-paper sticky top-16 z-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
              {categories.map((c, i) => (
                <button
                  key={c}
                  className={`whitespace-nowrap px-3 h-8 text-sm font-medium brutal-border ${
                    i === 0 ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-accent-2"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Live grid */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="On stage right now"
              title="Live streams"
              meta={`${live.length} broadcasting`}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {live.map((s) => (
                <StreamCard key={s.id} stream={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Pull-quote / value prop */}
        <section className="bg-ink text-paper py-16 border-y border-ink">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
              <span className="text-accent-2">"</span>
              I sold out a kiln drop in eleven minutes from my studio. The chat
              was full of people who actually wanted the work. That doesn't
              happen on the big platforms.
              <span className="text-accent-2">"</span>
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-paper font-display text-xl border-2 border-paper">
                M
              </span>
              <div>
                <p className="text-sm font-medium">Marlo Yuen</p>
                <p className="text-xs text-paper/60 font-mono">@marlo.studio · Brooklyn</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="On the schedule"
              title="Upcoming"
              meta={`${upcoming.length} scheduled`}
              actionLabel="See all"
              actionHref="/upcoming"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {upcoming.map((s) => (
                <UpcomingCard key={s.id} stream={s} />
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t-2 border-ink bg-paper py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
                  How it works
                </p>
                <h2 className="font-display text-4xl lg:text-5xl leading-[1.05]">
                  Set it up in <span className="italic">ten minutes.</span>{" "}
                  Run it from your phone.
                </h2>
                <p className="mt-6 text-muted leading-relaxed">
                  No camera crew. No SKU spreadsheets. Tap a product card during your stream and it appears on every viewer's screen — instantly purchasable.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Step
                  n="01"
                  t="Connect your shop"
                  d="Stripe, Shopify, or just an IBAN. We handle the plumbing, you handle the craft."
                  c="bg-accent-2"
                />
                <Step
                  n="02"
                  t="Schedule a stream"
                  d="Pick a time, write a hook, and add the products you'll demo. Shareable URL in one click."
                  c="bg-paper"
                />
                <Step
                  n="03"
                  t="Go live from anywhere"
                  d="Phone camera is fine. Pin products to the bottom rail mid-stream as you bring them out."
                  c="bg-paper"
                />
                <Step
                  n="04"
                  t="Get paid daily"
                  d="3% take, no monthly fee. Payouts hit your account by next business day. That's it."
                  c="bg-accent text-paper"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sellers strip */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Made by"
              title="Featured sellers"
              meta="Curated weekly"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {streams.map((s) => (
                <Link
                  key={s.id}
                  href={`/watch/${s.slug}`}
                  className="group block brutal-border bg-paper p-3 hover-lift"
                >
                  <div className="relative aspect-square mb-2 overflow-hidden brutal-border">
                    <Image src={s.thumbnail} alt={s.seller.name} fill sizes="160px" className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <p className="font-mono text-xs">@{s.seller.handle}</p>
                  <p className="text-[11px] text-muted">{s.seller.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t-2 border-ink bg-accent-2 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-5xl lg:text-6xl leading-tight">
              Got something <span className="italic">to show?</span>
            </h2>
            <p className="mt-4 text-ink/80 max-w-xl mx-auto">
              Hit the air in under a minute. We'll notify your followers and warm up the chat for you.
            </p>
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <Link
                href="/sell"
                className="inline-flex items-center gap-2 px-6 h-12 brutal-border bg-ink text-paper font-medium hover-lift"
              >
                <span className="h-2 w-2 rounded-full bg-accent animate-live-ping" />
                Open seller console
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 h-12 brutal-border bg-paper text-ink font-medium hover-lift"
              >
                Read the manifesto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <dt className="font-display text-2xl">{n}</dt>
      <dd className="text-[11px] text-muted leading-tight mt-1">{l}</dd>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  meta,
  actionLabel,
  actionHref,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        {meta && (
          <span className="hidden sm:inline-flex font-mono text-xs text-muted">
            {meta}
          </span>
        )}
        {actionLabel && actionHref && (
          <Link
            href={actionHref}
            className="text-sm font-medium underline underline-offset-4 decoration-accent decoration-2 hover:decoration-ink"
          >
            {actionLabel} →
          </Link>
        )}
      </div>
    </div>
  );
}

function Step({ n, t, d, c }: { n: string; t: string; d: string; c: string }) {
  return (
    <div className={`brutal-border p-5 ${c}`}>
      <p className="font-mono text-xs opacity-60 mb-3">{n}</p>
      <p className="font-display text-2xl leading-tight mb-2">{t}</p>
      <p className="text-sm leading-relaxed opacity-80">{d}</p>
    </div>
  );
}

function FeaturedHero({ stream }: { stream: ReturnType<typeof getLiveStreams>[number] }) {
  return (
    <Link href={`/watch/${stream.slug}`} className="block group">
      <div className="relative aspect-[5/4] brutal-border brutal-shadow-lg overflow-hidden bg-ink">
        <Image src={stream.cover} alt={stream.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span className="inline-flex items-center gap-2 bg-accent text-paper px-3 py-1.5 brutal-border text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-paper opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-paper" />
            </span>
            Live
          </span>
          <div className="bg-paper/95 backdrop-blur brutal-border px-3 py-1.5 font-mono text-xs">
            <span className="text-accent">●</span> {stream.viewerCount.toLocaleString()} watching
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-paper">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-2 text-ink font-display text-base border-2 border-paper">
              {stream.seller.avatar}
            </span>
            <div>
              <p className="text-xs font-mono opacity-80">@{stream.seller.handle}</p>
              <p className="text-xs">{stream.seller.location}</p>
            </div>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl leading-tight">
            {stream.title}
          </h3>
          <div className="mt-3 inline-flex items-center gap-2 bg-paper text-ink px-3 py-2 brutal-border text-sm font-medium">
            Tap to join →
          </div>
        </div>
      </div>
    </Link>
  );
}

function UpcomingCard({ stream }: { stream: ReturnType<typeof getUpcomingStreams>[number] }) {
  return (
    <Link href={`/watch/${stream.slug}`} className="group flex gap-4 brutal-border bg-paper p-4 hover-lift">
      <div className="relative h-32 w-32 sm:h-40 sm:w-40 flex-shrink-0 brutal-border overflow-hidden">
        <Image src={stream.thumbnail} alt={stream.title} fill sizes="160px" className="object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="flex flex-col justify-between min-w-0 flex-1">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-paper text-ink brutal-border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
              Upcoming
            </span>
            <span className="font-mono text-[11px] text-muted">{stream.startsAt}</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl leading-tight">{stream.title}</h3>
          <p className="text-sm text-muted mt-2 line-clamp-2">{stream.description}</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="font-mono">@{stream.seller.handle}</span>
          <span className="text-muted">·</span>
          <span className="text-muted">{stream.seller.location}</span>
        </div>
      </div>
    </Link>
  );
}
