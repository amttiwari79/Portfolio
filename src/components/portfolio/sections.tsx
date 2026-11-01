import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Check, Copy, Download, FileText } from "lucide-react";
import {
  arc,
  education,
  expertise,
  highlights,
  layers,
  practiceAreas,
  principles,
  profile,
  roles,
  solutions,
  summary,
  systems,
} from "./content";
import { CountUp, Reveal, Seen } from "./motion";

function Block({
  id,
  labelledBy,
  children,
  className = "",
}: {
  id?: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={className}>
      {children}
    </section>
  );
}

export function Overview() {
  return (
    <Block id="overview" labelledBy="overview-title">
      <div className="mx-auto grid w-full max-w-page items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-7" variant="up">
          <p className="kicker">01 — Overview</p>
          <h2 id="overview-title" className="mt-4 max-w-xl font-serif text-title text-ink">
            Systems that stay correct when the volume is real.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
            {summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5" variant="left" delay={120}>
          <ul className="overflow-hidden rounded-card border border-line bg-card shadow-card">
            {practiceAreas.map((area) => (
              <li key={area} className="border-b border-line px-6 py-4 text-ink last:border-b-0">
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Block>
  );
}

export function Metrics() {
  return (
    <Block>
      <div className="mx-auto w-full max-w-page px-5 pb-6 sm:px-8">
        <Seen className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <article key={item.label} className="metric" style={{ ["--i" as string]: index }}>
              <p className="font-serif text-stat text-ink tabular-nums">
                <CountUp to={item.value} />
                {item.unit ? (
                  <span className={item.accent ? "stat-unit" : "stat-plain"}>{item.unit}</span>
                ) : null}
              </p>
              <h3 className="mt-4 text-base font-semibold text-ink">{item.label}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{item.note}</p>
            </article>
          ))}
        </Seen>

        <Seen className="timeline relative mt-16">
          <p className="kicker">Career arc</p>
          <div className="relative mt-8">
            <div className="timeline-line absolute top-1.5 right-3 left-3 hidden h-px bg-line sm:block" />
            <ol className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-5">
            {arc.map((stop) => (
              <li key={stop.year}>
                <span className="timeline-dot relative z-10 block size-3 rounded-full bg-forest ring-4 ring-paper" />
                <p className="mt-4 text-sm font-semibold text-gold">{stop.year}</p>
                <p className="mt-1 font-semibold text-ink">{stop.title}</p>
                <p className="mt-1 text-sm text-muted">{stop.detail}</p>
              </li>
            ))}
            </ol>
          </div>
        </Seen>
      </div>
    </Block>
  );
}

export function Expertise() {
  return (
    <Block id="expertise" labelledBy="expertise-title">
      <div className="border-y border-line bg-sheet">
        <div className="mx-auto w-full max-w-page px-5 py-16 sm:px-8 sm:py-20">
          <p className="kicker">What I do</p>
          <h2 className="mt-4 max-w-3xl font-serif text-title text-ink">
            I design the databases behind financial and enterprise systems.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            PostgreSQL performance, wallet and ledger systems, and backend services on Google Cloud and AWS.
            Twenty years in production, including databases larger than 450GB.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-page px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="kicker">02 — Expertise</p>
          <h2 id="expertise-title" className="mt-4 max-w-3xl font-serif text-title text-ink">
            Four practices, one production standard.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Schema and query work at the centre. Service boundaries, cloud operations, and the domains those
            systems were built to carry.
          </p>
        </Reveal>
      </div>

      <div className="border-t border-line">
        {expertise.map((group, index) => (
          <div key={group.title} className={index % 2 === 1 ? "bg-band" : "bg-paper"}>
            <div className="mx-auto grid w-full max-w-page items-start gap-8 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:py-12">
              <Reveal className="lg:col-span-4" variant={index % 2 === 0 ? "right" : "left"} delay={40}>
                <p className="text-sm font-semibold text-gold">{group.index}</p>
                <h3 className="mt-2 font-serif text-3xl text-ink">{group.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{group.summary}</p>
              </Reveal>
              <Seen className="chip-stagger flex flex-wrap content-start gap-2.5 lg:col-span-8">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </Seen>
            </div>
          </div>
        ))}
      </div>
    </Block>
  );
}

export function Experience() {
  return (
    <Block id="experience" labelledBy="experience-title" className="bg-paper">
      <div className="mx-auto w-full max-w-page px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">03 — Experience</p>
          <h2 id="experience-title" className="mt-4 max-w-3xl font-serif text-title text-ink">
            Two long engagements. The same standard of care.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            From enterprise ERP and e-governance to wallets, ledgers, and cloud-hosted financial platforms.
          </p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {roles.map((role, roleIndex) => (
            <Reveal key={role.id} variant="up" delay={roleIndex * 80}>
              <article className="border-l border-line pl-5 sm:pl-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="kicker">{role.range}</p>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${
                      role.status === "Current" ? "bg-forest-soft text-forest" : "bg-band text-muted"
                    }`}
                  >
                    {role.status}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">{role.title}</h3>
                <p className="mt-2 text-lg text-ink">
                  {role.org}
                  {role.place ? <span className="text-muted"> · {role.place}</span> : null}
                </p>
                <p className="mt-1 text-sm text-muted">{role.dates}</p>
                <ul className="mt-6 space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="grid grid-cols-[0.7rem_1fr] gap-3 text-sm leading-relaxed text-ink sm:text-base">
                      <span className="mt-2 size-1.5 rounded-full bg-forest" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="kicker">Selected systems</p>
            <h3 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">Platforms the schemas were built for.</h3>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {systems.map((system, index) => (
              <Reveal key={system.name} variant="scale" delay={index * 90}>
                <article className="lift h-full rounded-card border border-line bg-card p-6 shadow-card sm:p-7">
                  <p className="kicker">{system.kind}</p>
                  <h4 className="mt-3 font-serif text-2xl text-ink">{system.name}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{system.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Block>
  );
}

export function Solutions() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const layer = layers[active] ?? layers[0];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => {
      setActive((current) => (current + 1) % layers.length);
    }, 5200);
    return () => window.clearTimeout(id);
  }, [active, paused]);

  return (
    <Block id="solutions" labelledBy="solutions-title" className="bg-sheet">
      <div className="mx-auto w-full max-w-page px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">04 — Solutions</p>
          <h2 id="solutions-title" className="mt-4 max-w-3xl font-serif text-title text-ink">
            A stack you can walk through, layer by layer.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Service edge, ledger, PostgreSQL, and the cloud plane. Select a layer — or let it advance.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" variant="clip">
            <div className="overflow-hidden rounded-card shadow-card">
              <img
                src="/images/stones.jpg"
                alt="Three limestone slabs stacked with brass plates between them."
                className="h-80 w-full object-cover sm:h-112"
                width={1200}
                height={1600}
              />
            </div>
          </Reveal>

          <div
            className="lg:col-span-7"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(event) => {
              const next = event.relatedTarget;
              if (next instanceof Node && event.currentTarget.contains(next)) return;
              setPaused(false);
            }}
          >
            <div className="grid gap-3" role="tablist" aria-label="System layers">
              {layers.map((item, index) => {
                const selected = index === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`tab-${item.id}`}
                    aria-selected={selected}
                    aria-controls="layer-panel"
                    className={`layer-btn relative overflow-hidden rounded-2xl border px-5 py-4 text-left ${
                      selected ? "border-forest bg-forest-soft" : "border-line bg-card hover:border-forest/40"
                    }`}
                    onClick={() => setActive(index)}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="font-medium text-ink">{item.label}</span>
                      <span className="text-sm text-faint tabular-nums">{item.index}</span>
                    </span>
                    {selected && !paused ? <span className="layer-progress" aria-hidden="true" /> : null}
                  </button>
                );
              })}
            </div>

            <div
              id="layer-panel"
              role="tabpanel"
              aria-labelledby={`tab-${layer.id}`}
              key={layer.id}
              className="swap-in mt-4 rounded-card border border-line bg-band/70 p-6 sm:p-7"
            >
              <h3 className="font-serif text-2xl text-ink sm:text-3xl">{layer.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{layer.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {layer.chips.map((chip) => (
                  <li key={chip} className="rounded-full bg-sheet px-3 py-1 text-sm text-forest">
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <Reveal key={solution.index} variant={index % 2 === 0 ? "up" : "scale"} delay={(index % 2) * 100}>
              <article className="lift h-full rounded-card border border-line bg-card p-6 sm:p-8">
                <p className="text-sm font-semibold text-faint">{solution.index}</p>
                <h3 className="mt-3 font-serif text-3xl text-ink">{solution.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{solution.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {solution.points.map((point) => (
                    <li key={point} className="grid grid-cols-[0.8rem_1fr] gap-2 text-sm text-ink">
                      <span className="mt-2 size-1.5 rounded-full bg-forest/80" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Block>
  );
}

export function Principles() {
  return (
    <Block id="principles" labelledBy="principles-title" className="bg-band">
      <div className="mx-auto w-full max-w-page px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">05 — Principles</p>
          <h2 id="principles-title" className="mt-4 max-w-3xl font-serif text-title text-ink">
            What the work is judged by.
          </h2>
        </Reveal>
        <ol className="mt-12">
          {principles.map((principle, index) => (
            <Reveal key={principle.index} variant={index % 2 === 0 ? "right" : "left"} delay={index * 40}>
              <li className="principle grid gap-2 border-t border-line/80 py-6 md:grid-cols-[4rem_14rem_1fr] md:items-baseline md:gap-8">
                <span className="text-sm font-semibold text-gold">{principle.index}</span>
                <h3 className="font-serif text-2xl text-ink">{principle.title}</h3>
                <p className="text-muted">{principle.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Block>
  );
}

export function Resume() {
  return (
    <Block id="resume" labelledBy="resume-title" className="bg-sheet">
      <div className="mx-auto grid w-full max-w-page items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5" variant="right">
          <p className="kicker">06 — Résumé</p>
          <h2 id="resume-title" className="mt-4 font-serif text-title text-ink">
            Take the record with you.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Everything on this page is in the file. PDF for forwarding, Word if you need to edit a copy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resumePdf} className="btn btn-primary" download>
              <Download className="size-4" aria-hidden="true" />
              Download PDF
            </a>
            <a href={profile.resumeDocx} className="btn btn-ghost" download>
              <FileText className="size-4" aria-hidden="true" />
              Download Word
            </a>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" variant="left" delay={100}>
          <article className="resume-card rounded-card bg-band p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <p className="kicker">Database architect</p>
              <p className="font-serif text-4xl text-forest italic">AKT</p>
            </div>
            <h3 className="mt-4 font-serif text-4xl text-ink">{profile.name}</h3>
            <p className="mt-1 text-muted">Senior backend engineer · Indore</p>
            <div className="my-6 h-px bg-line" />
            <dl className="grid gap-5 sm:grid-cols-3">
              <div>
                <dt className="kicker">Practice</dt>
                <dd className="mt-2 font-semibold text-ink">20+ years</dd>
              </div>
              <div>
                <dt className="kicker">Production</dt>
                <dd className="mt-2 font-semibold text-ink">450GB+ databases</dd>
              </div>
              <div>
                <dt className="kicker">Cloud</dt>
                <dd className="mt-2 font-semibold text-ink">GCP and AWS</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-ink">
              PostgreSQL performance, wallet and ledger architecture, high-volume transactions, and cloud-hosted
              services. ESP Softtech since 2019. Elbiz Systems, 2005–2019.
            </p>
            <p className="mt-5 text-sm text-muted">Same résumé as the downloads — a one-glance copy, not a second biography.</p>
          </article>
        </Reveal>
      </div>

      <div className="mx-auto w-full max-w-page px-5 pb-20 sm:px-8">
        <p className="kicker">Education</p>
        <div className="mt-6 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.credential} variant="up" delay={index * 90}>
              <p className="text-sm font-semibold text-gold">{item.year}</p>
              <h3 className="mt-2 font-serif text-2xl text-ink">{item.credential}</h3>
              <p className="mt-2 text-sm text-muted">{item.school}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          Languages: {profile.languages.join(" and ")}. Systems: {profile.systems}.
        </p>
      </div>
    </Block>
  );
}

export function Contact() {
  return (
    <Block id="contact" labelledBy="contact-title" className="border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-page px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" variant="up">
            <p className="kicker">07 — Contact</p>
            <h2 id="contact-title" className="mt-4 font-serif text-title text-ink">
              Where the next system can start.
            </h2>
            <p className="mt-5 text-lg text-muted">{profile.availability}.</p>
            <p className="mt-3 text-sm text-muted">{profile.location}</p>
          </Reveal>
          <dl className="lg:col-span-7">
            <Row label="Email">
              <CopyValue text={profile.email} href={`mailto:${profile.email}`} />
            </Row>
            <Row label="Phone">
              <CopyValue text={profile.phone} href={profile.phoneHref} />
            </Row>
            <Row label="LinkedIn">
              <a
                className="inline-flex items-center gap-1 underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer me"
              >
                <span className="break-all">{profile.linkedinLabel}</span>
                <ArrowUpRight className="size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Row>
          </dl>
        </div>
      </div>
    </Block>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[8rem_1fr] sm:items-center sm:gap-6">
      <dt className="kicker">{label}</dt>
      <dd className="text-lg text-ink">{children}</dd>
    </div>
  );
}

function CopyValue({ text, href }: { text: string; href: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      <a className="underline decoration-forest/30 underline-offset-4 break-all hover:decoration-forest" href={href}>
        {text}
      </a>
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-full border border-line text-muted hover:text-forest"
        aria-label={copied ? "Copied" : `Copy ${text}`}
        onClick={() => {
          const clipboard = navigator.clipboard;
          if (!clipboard) return;
          void clipboard.writeText(text).then(
            () => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1600);
            },
            () => setCopied(false),
          );
        }}
      >
        {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      </button>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-sheet">
      <div className="mx-auto flex w-full max-w-page flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-3xl text-ink">
            {profile.first} <span className="italic text-forest">{profile.last}</span>
          </p>
          <p className="mt-2 text-muted">Database architect · Senior backend engineer</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <a className="inline-flex min-h-11 items-center gap-1 hover:text-forest" href={profile.linkedin} target="_blank" rel="noreferrer me">
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a className="inline-flex min-h-11 items-center hover:text-forest" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="inline-flex min-h-11 items-center hover:text-forest" href={profile.resumePdf} download>
            Download résumé
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-page px-5 py-5 text-sm text-muted sm:px-8">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
