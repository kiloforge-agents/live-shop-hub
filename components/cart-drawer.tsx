"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./cart-context";
import { useEffect } from "react";

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, total, remove, setQty } = useCart();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        aria-label="Cart"
        className={`fixed right-0 top-0 z-50 h-full w-full sm:w-[420px] bg-paper border-l border-ink transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-ink">
          <h2 className="font-display text-2xl">Your bag</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="h-9 w-9 brutal-border bg-paper hover-lift inline-flex items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scroll-pretty">
          {items.length === 0 ? (
            <div className="p-8 text-center">
              <div className="mx-auto h-24 w-24 brutal-border bg-paper flex items-center justify-center mb-4">
                <span className="text-4xl">🛍️</span>
              </div>
              <p className="font-display text-2xl mb-2">Bag is empty</p>
              <p className="text-sm text-muted mb-6">
                Tap a product on any live stream to add it instantly.
              </p>
              <Link
                href="/"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 h-10 brutal-border bg-ink text-paper text-sm font-medium hover-lift"
              >
                Browse live streams →
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-ink/15">
              {items.map((item) => (
                <li key={item.id} className="p-4 flex gap-3">
                  <div className="relative h-20 w-20 brutal-border overflow-hidden flex-shrink-0 bg-paper">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm leading-tight">{item.name}</p>
                    <p className="text-sm font-mono mt-1">${item.price}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="inline-flex brutal-border bg-paper">
                        <button
                          aria-label="Decrease"
                          onClick={() => setQty(item.id, item.qty - 1)}
                          className="h-7 w-7 flex items-center justify-center hover:bg-ink hover:text-paper text-sm"
                        >
                          −
                        </button>
                        <span className="h-7 w-8 inline-flex items-center justify-center text-sm font-mono">
                          {item.qty}
                        </span>
                        <button
                          aria-label="Increase"
                          onClick={() => setQty(item.id, item.qty + 1)}
                          className="h-7 w-7 flex items-center justify-center hover:bg-ink hover:text-paper text-sm"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-xs text-muted hover:text-accent underline underline-offset-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink p-4 bg-paper">
            <div className="flex justify-between mb-1 text-sm">
              <span className="text-muted">Subtotal</span>
              <span className="font-mono">${total}</span>
            </div>
            <div className="flex justify-between mb-4 text-sm">
              <span className="text-muted">Shipping</span>
              <span className="font-mono">Calculated at checkout</span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 h-12 brutal-border bg-accent text-paper font-medium hover-lift"
            >
              Checkout — ${total}
              <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
                <path d="M4 8h8M8 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
