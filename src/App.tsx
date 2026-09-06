import { useState } from "react";
import { HashRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";
import type { CartItem } from "./types";
import { products } from "./data/products";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved: unknown = JSON.parse(
        localStorage.getItem("sbehat-mall-cart") || "[]",
      );
      return Array.isArray(saved)
        ? saved.filter(
            (item): item is CartItem =>
              item &&
              products.some((p) => p.id === item.id) &&
              Number.isInteger(item.quantity) &&
              item.quantity > 0,
          )
        : [];
    } catch {
      return [];
    }
  });
  const [notice, setNotice] = useState("");
  function updateCart(next: CartItem[]) {
    setCart(next);
    try {
      localStorage.setItem("sbehat-mall-cart", JSON.stringify(next));
    } catch {
      /* Cart remains usable when storage is unavailable. */
    }
  }
  function addToCart(id: number) {
    updateCart(
      cart.some((item) => item.id === id)
        ? cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...cart, { id, quantity: 1 }],
    );
    setNotice(`${products.find((p) => p.id === id)?.name} added to your cart`);
  }
  return (
    <HashRouter>
      <div className="border-b border-white/10 bg-lime-300/5 px-4 py-2 text-center text-[10px] tracking-[0.18em] text-lime-200">
        BUILT FOR THE NEXT LEVEL. READY FOR YOUR NEXT WIN.
      </div>
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-6">
          <Link
            to="/"
            className="flex items-center gap-3 text-xl font-bold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-300 text-zinc-950">
              <i className="fa-solid fa-bolt" />
            </span>
            sbehat<span className="font-normal text-zinc-400">mall</span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-5 text-xs sm:gap-8 sm:text-sm"
          >
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">Our story</NavLink>
            <NavLink to="/cart" className="flex items-center gap-2">
              <i className="fa-solid fa-bag-shopping" />
              <span>Cart</span>
              <span className="rounded bg-lime-300 px-1.5 text-xs text-black">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </NavLink>
          </nav>
        </div>
      </header>
      {notice && (
        <div
          role="status"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 bg-lime-300/10 px-6 py-3 text-sm text-lime-200"
        >
          {notice}
          <button
            onClick={() => setNotice("")}
            aria-label="Dismiss notification"
          >
            ?
          </button>
        </div>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} updateCart={updateCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home addToCart={addToCart} />} />
        </Routes>
      </main>
      <footer className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 px-6 py-8 text-xs text-zinc-500 sm:flex-row">
        <span className="font-semibold text-zinc-300">
          sbehat mall{" "}
          <span className="ml-3 font-normal text-zinc-500">
            Your next level starts here.
          </span>
        </span>
        <span>
          � {new Date().getFullYear()} sbehat mall. All rights reserved.
        </span>
      </footer>
    </HashRouter>
  );
}
