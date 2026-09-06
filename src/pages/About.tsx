import { Link } from "react-router-dom";
import { btnStart } from "../styles/buttonStyles";
export default function About() {
  return (
    <section className="mx-auto grid min-h-[65vh] max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-2">
      <div>
        <p className="text-xs tracking-[0.2em] text-lime-300">
          WELCOME TO SBEHAT MALL
        </p>
        <h1 className="my-5 text-5xl font-bold leading-tight">
          Built around
          <br />
          the way you play.
        </h1>
        <p className="mb-5 leading-8 text-zinc-400">
          From the first boot to the final round, your setup is part of the
          experience. sbehat mall brings gaming desktops, monitors, and
          accessories together in one place.
        </p>
        <p className="mb-8 leading-8 text-zinc-400">
          Explore a focused collection, compare the essentials, and put together
          a loadout that feels like you.
        </p>
        <Link to="/shop" className={btnStart}>
          Find your next upgrade ?
        </Link>
      </div>
      <img
        src="/images/hero.jpg"
        alt="An illuminated gaming workspace"
        className="h-[440px] w-full rounded-2xl object-cover"
      />
    </section>
  );
}
