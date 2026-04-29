"use client";

import { useCart } from "./cart-context";

export function CartToast() {
  const { toast } = useCart();
  if (!toast) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="brutal-border bg-ink text-paper px-4 py-2.5 brutal-shadow-sm flex items-center gap-2 text-sm">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-paper">
          <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
            <path d="M2.5 6.5l2 2 5-5" fill="none" />
          </svg>
        </span>
        {toast}
      </div>
    </div>
  );
}
