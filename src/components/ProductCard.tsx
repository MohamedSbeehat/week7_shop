import type { Product } from "../types";
import { formatPrice } from "../data/products";

export default function ProductCard({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (id: number) => void;
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#16181b] transition hover:border-lime-300/40">
      <div className="relative h-56 overflow-hidden bg-zinc-900">
        <img
          src={product.image}
          alt={
            product.category === "Gaming PCs"
              ? `${product.name} gaming desktop with illuminated components`
              : product.name + " " + product.category
          }
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded bg-black/70 px-2 py-1 text-[9px] font-medium tracking-widest text-lime-200">
          {product.label}
        </span>
      </div>
      <div className="p-5">
        <p className="mb-2 text-[10px] uppercase tracking-[0.15em] text-zinc-500">
          {product.category}
        </p>
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="mt-2 min-h-10 text-xs leading-5 text-zinc-400">
          {product.specs}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xl font-semibold">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addToCart(product.id)}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-300 text-black transition hover:bg-lime-200"
          >
            <i className="fa-solid fa-plus" />
          </button>
        </div>
      </div>
    </article>
  );
}
