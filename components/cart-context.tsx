"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/lib/data";

export type CartItem = Product & { qty: number; streamId?: string };

type CartCtx = {
  items: CartItem[];
  add: (p: Product, streamId?: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
  toast: string | null;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("liveshophub.cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("liveshophub.cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = useCallback((p: Product, streamId?: string) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found) {
        return prev.map((i) =>
          i.id === p.id ? { ...i, qty: Math.min(i.qty + 1, p.stock) } : i
        );
      }
      return [...prev, { ...p, qty: 1, streamId }];
    });
    setToast(`Added ${p.name}`);
    setTimeout(() => setToast(null), 1800);
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: Math.max(0, Math.min(qty, i.stock)) } : i
        )
        .filter((i) => i.qty > 0)
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const total = useMemo(
    () => items.reduce((s, i) => s + i.price * i.qty, 0),
    [items]
  );
  const count = useMemo(
    () => items.reduce((s, i) => s + i.qty, 0),
    [items]
  );

  const value: CartCtx = { items, add, remove, setQty, clear, total, count, toast };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
