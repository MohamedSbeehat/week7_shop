import { Link } from "react-router-dom";
import { products, formatPrice } from "../data/products";
import type { CartItem } from "../types";
import { btnStart } from "../styles/buttonStyles";

export default function Cart({
  cart,
  updateCart,
}: {
  cart: CartItem[];
  updateCart: (cart: CartItem[]) => void;
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum +
      (products.find((p) => p.id === item.id)?.price || 0) * item.quantity,
    0,
  );
  return (
    <section className="mx-auto min-h-[65vh] max-w-4xl px-6 py-12">
      <p className="text-xs tracking-widest text-lime-300">ONE STEP CLOSER</p>
      <h1 className="my-4 text-4xl font-bold">Your loadout.</h1>
      {cart.length === 0 ? (
        <div className="rounded-xl border border-white/10 p-10 text-center">
          <i className="fa-solid fa-bag-shopping mb-5 text-4xl text-lime-300" />
          <p className="mb-6 text-zinc-400">
            Your cart is waiting for its first upgrade.
          </p>
          <Link to="/shop" className={btnStart}>
            Explore the gear ?
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-8 space-y-4">
            {cart.map((item) => {
              const product = products.find((p) => p.id === item.id)!;
              return (
                <article
                  key={item.id}
                  className="flex flex-wrap items-center gap-5 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold">{product.name}</h2>
                    <p className="mt-1 text-sm text-zinc-400">
                      {formatPrice(product.price)} each
                    </p>
                    <button
                      onClick={() =>
                        updateCart(cart.filter((i) => i.id !== item.id))
                      }
                      className="mt-2 text-xs text-zinc-400 underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      aria-label={`Decrease ${product.name} quantity`}
                      className="h-8 w-8 rounded border border-white/20"
                      onClick={() =>
                        updateCart(
                          cart
                            .map((i) =>
                              i.id === item.id
                                ? { ...i, quantity: i.quantity - 1 }
                                : i,
                            )
                            .filter((i) => i.quantity > 0),
                        )
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      aria-label={`Increase ${product.name} quantity`}
                      className="h-8 w-8 rounded border border-white/20"
                      onClick={() =>
                        updateCart(
                          cart.map((i) =>
                            i.id === item.id
                              ? { ...i, quantity: i.quantity + 1 }
                              : i,
                          ),
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <strong className="w-24 text-right">
                    {formatPrice(product.price * item.quantity)}
                  </strong>
                </article>
              );
            })}
          </div>
          <div className="mt-6 rounded-xl border border-lime-300/20 bg-lime-300/5 p-6">
            <div className="flex justify-between text-xl font-semibold">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              This is a demo storefront. Online checkout and payments are not
              available.
            </p>
            <Link to="/shop" className={`${btnStart} mt-5`}>
              Continue shopping
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
