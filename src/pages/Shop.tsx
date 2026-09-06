import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop({
  addToCart,
}: {
  addToCart: (id: number) => void;
}) {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "All gear";
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = products
    .filter(
      (p) =>
        (category === "All gear" || p.category === category) &&
        `${p.name} ${p.specs}`.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) =>
      sort === "low"
        ? a.price - b.price
        : sort === "high"
          ? b.price - a.price
          : a.id - b.id,
    );
  return (
    <section className="mx-auto min-h-[65vh] max-w-7xl px-6 py-12">
      <p className="text-xs tracking-widest text-lime-300">FIND YOUR EDGE</p>
      <h1 className="mt-3 text-4xl font-bold">The gear room.</h1>
      <p className="mt-4 text-zinc-400">
        A new level of play starts with the right setup.
      </p>
      <div className="my-8 flex flex-wrap gap-3">
        {["All gear", "Gaming PCs", "Monitors", "Accessories"].map((item) => (
          <button
            key={item}
            onClick={() =>
              setParams(item === "All gear" ? {} : { category: item })
            }
            aria-pressed={category === item}
            className={`rounded-lg border px-4 py-2 text-sm ${category === item ? "border-lime-300 bg-lime-300 text-black" : "border-white/15 text-zinc-400 hover:text-white"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <input
          type="search"
          aria-label="Search products"
          placeholder="Search your next upgrade..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm"
        />
        <select
          aria-label="Sort products"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-white/15 bg-zinc-900 px-4 py-3 text-sm"
        >
          <option value="featured">Featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>
      <p className="mb-5 text-xs text-zinc-500">
        {filtered.length} products � Prices in USD � Images are illustrative
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-12 text-center text-zinc-400">
          No gear found. Try another search or category.
        </p>
      )}
    </section>
  );
}
