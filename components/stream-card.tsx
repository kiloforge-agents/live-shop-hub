import Link from "next/link";
import Image from "next/image";
import { type Stream, formatViewers } from "@/lib/data";

export function StreamCard({ stream, size = "md" }: { stream: Stream; size?: "sm" | "md" | "lg" }) {
  const isLive = stream.status === "live";
  const ratio =
    size === "lg" ? "aspect-[5/4]" : size === "sm" ? "aspect-[4/5]" : "aspect-[4/5]";

  return (
    <Link
      href={`/watch/${stream.slug}`}
      className="group block hover-lift brutal-border bg-paper"
    >
      <div className={`relative overflow-hidden ${ratio}`}>
        <Image
          src={stream.thumbnail}
          alt={stream.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

        {/* Top row */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 bg-accent text-paper px-2 py-1 brutal-border text-[10px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-paper animate-live-ping" />
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 bg-paper text-ink px-2 py-1 brutal-border text-[10px] font-bold uppercase tracking-wider">
              Upcoming
            </span>
          )}
          {isLive && (
            <span className="inline-flex items-center gap-1 bg-ink/80 backdrop-blur text-paper px-2 py-1 text-[10px] font-mono">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
                <circle cx="6" cy="6" r="2.5" />
                <path d="M1 6c0-1.5 2-4 5-4s5 2.5 5 4-2 4-5 4-5-2.5-5-4z" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
              {formatViewers(stream.viewerCount)}
            </span>
          )}
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 text-paper">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-2 text-ink text-[10px] font-bold border border-ink">
              {stream.seller.avatar}
            </span>
            <span className="text-xs font-mono opacity-90">@{stream.seller.handle}</span>
          </div>
          <h3 className="text-sm font-medium leading-tight line-clamp-2">{stream.title}</h3>
        </div>

        {/* Category chip */}
        <span className="absolute bottom-3 right-3 bg-paper/95 brutal-border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider">
          {stream.category}
        </span>
      </div>

      <div className="px-3 py-2 flex items-center justify-between text-xs">
        <span className="text-muted">
          {stream.products.length} {stream.products.length === 1 ? "item" : "items"} ·{" "}
          {stream.products.filter((p) => p.compareAt).length > 0 ? "Deals" : "Drop"}
        </span>
        <span className="font-mono">
          from ${Math.min(...stream.products.map((p) => p.price))}
        </span>
      </div>
    </Link>
  );
}
