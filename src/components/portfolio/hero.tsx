import { ArrowDown, Download, MapPin } from "lucide-react";
import { facts, profile, ribbon } from "./content";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto w-full max-w-page px-5 pt-nav sm:px-8">
        <div className="grid items-center gap-10 py-8 lg:grid-cols-12 lg:gap-12 lg:py-12">
          <div className="lg:col-span-6">
            <p className="hero-in kicker flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-2">
                <span className="pulse-dot size-1.5 rounded-full bg-forest" aria-hidden="true" />
                Open to opportunities
              </span>
              <span className="text-faint" aria-hidden="true">
                /
              </span>
              <span>Database architect</span>
            </p>
            <h1 className="hero-in d2 mt-5 font-serif text-display text-ink">
              {profile.first}
              <span className="mt-1 block italic text-forest">{profile.last}</span>
            </h1>
            <p className="hero-in d3 mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Senior backend engineer and database architect. Twenty years making financial and enterprise
              systems dependable — PostgreSQL performance, double-entry ledgers, and services that stay correct
              under load on Google Cloud and AWS.
            </p>
            <p className="hero-in d4 mt-5 flex items-start gap-2 text-sm text-ink">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
              <span>
                {profile.location}
                <span className="px-1.5 text-faint" aria-hidden="true">
                  ·
                </span>
                ESP Softtech Pvt. Ltd.
              </span>
            </p>
            <div className="hero-in d5 mt-8 flex flex-wrap gap-3">
              <a href="#experience" className="btn btn-primary">
                View experience
                <ArrowDown className="bob size-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a href={profile.resumePdf} className="btn btn-ghost" download>
                <Download className="size-4" strokeWidth={1.75} aria-hidden="true" />
                Résumé
              </a>
            </div>
          </div>

          <div className="hero-photo relative pb-14 lg:col-span-6 lg:pb-10">
            <div className="overflow-hidden rounded-card shadow-card">
              <img
                src="/images/desk.jpg"
                alt="A quiet oak desk with linen books, a ceramic cup, and a plant in warm daylight."
                className="kenburns h-80 w-full object-cover sm:h-96 lg:h-120"
                width={1200}
                height={1600}
              />
            </div>
            <aside className="hero-card absolute right-4 -bottom-2 left-4 rounded-2xl border border-line bg-sheet/95 p-5 shadow-float backdrop-blur-sm sm:right-auto sm:left-8 sm:max-w-sm">
              <p className="kicker">In practice</p>
              <p className="mt-2 text-base leading-relaxed text-ink">
                Production databases past 450GB. Wallets, ledgers, and the cloud around them.
              </p>
            </aside>
          </div>
        </div>

        <ul className="hero-in d6 mt-16 grid border-y border-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {facts.map((fact) => (
            <li
              key={fact}
              className="border-line px-4 py-5 text-center text-sm text-muted sm:border-l sm:first:border-l-0"
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <div className="marquee mt-2 border-b border-line py-4" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex items-center pr-8">
              {ribbon.map((item) => (
                <li key={`${copy}-${item}`} className="flex items-center gap-8 pr-8 text-sm tracking-wide text-muted">
                  {item}
                  <span className="size-1 rounded-full bg-gold" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
