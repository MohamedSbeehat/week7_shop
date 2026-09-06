import { Link } from "react-router-dom";
import { products } from "../data/products";
import { btnScore, btnStart } from "../styles/buttonStyles";
import ProductCard from "../components/ProductCard";

export default function Home({
  addToCart,
}: {
  addToCart: (id: number) => void;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="relative my-8 grid min-h-[510px] overflow-hidden rounded-2xl border border-white/10 bg-[#15191a] lg:grid-cols-2">
        <div className="relative z-10 flex flex-col items-start justify-center p-7 sm:p-12">
          <p className="mb-6 flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-lime-300">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300" /> THE NEXT
            GENERATION OF PLAY
          </p>
          <h1 className="text-5xl font-bold leading-[1.06] tracking-tighter sm:text-7xl">
            Less lag.
            <br />
            More <span className="text-lime-300">legend.</span>
          </h1>
          <p className="my-6 max-w-sm text-sm leading-7 text-zinc-400">
            Power your biggest plays with gaming PCs and gear made to go all in.
            Find your next setup at sbehat mall.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/shop" className={btnStart}>
              Explore the gear <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link to="/shop?category=Gaming+PCs" className={btnScore}>
              Gaming PCs
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-3 text-[10px] tracking-wide text-zinc-400">
            <span className="h-px w-8 bg-lime-300" /> BIG PERFORMANCE. YOUR KIND
            OF PLAY.
          </div>
        </div>
        <div className="relative min-h-80">
          <img
            src="/images/hero.jpg"
            alt="RGB gaming PC and immersive desktop gaming setup"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#15191a] via-transparent to-transparent" />
          <div className="absolute bottom-7 right-7 rounded-xl border border-white/20 bg-black/60 px-5 py-4 backdrop-blur-md">
            <p className="text-[9px] tracking-[0.2em] text-lime-300">
              SETUP INSPIRATION / 01
            </p>
            <p className="mt-1 text-sm font-medium">
              Make room for your next level.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 border-b border-white/10 py-3 pb-9 sm:grid-cols-3">
        {[
          {
            icon: "microchip",
            title: "Power at every level",
            text: "From first builds to dream machines",
          },
          {
            icon: "display",
            title: "Your entire setup",
            text: "Desktops, displays & the finishing touches",
          },
          {
            icon: "bolt",
            title: "Made for your game",
            text: "Find the gear that fits your play style",
          },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <i className={`fa-solid fa-${item.icon} text-xl text-lime-300`} />
            <div>
              <h2 className="text-sm font-medium">{item.title}</h2>
              <p className="mt-1 text-xs text-zinc-500">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-7 mt-12 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[10px] tracking-[0.2em] text-lime-300">
            CURATED FOR YOUR NEXT WIN
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Meet your next upgrade.
          </h2>
        </div>
        <Link
          to="/shop"
          className="shrink-0 text-xs text-zinc-400 hover:text-lime-300"
        >
          View all <span className="ml-2">?</span>
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-lime-300/20 bg-lime-300/5 p-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] tracking-[0.2em] text-lime-300">
            MORE THAN A MACHINE
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            Your world. Your rules. Your setup.
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Find the little details that make a big difference.
          </p>
        </div>
        <Link to="/shop?category=Accessories" className={btnScore}>
          Shop accessories ?
        </Link>
      </div>
    </section>
  );
}
