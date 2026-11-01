import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { nav, profile } from "./content";

export function ScrollProgress() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScale(height > 0 ? window.scrollY / height : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress pointer-events-none fixed top-0 left-0 z-[60] h-0.5 w-full origin-left bg-forest"
      style={{ transform: `scaleX(${scale})` }}
      aria-hidden="true"
    />
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("overview");
  const pendingScroll = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (window.scrollY < 280) setCurrent("overview");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 280) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0.12, 0.3, 0.55] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ${scrolled ? "px-3 pt-3 sm:px-5" : ""}`}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div
        className={`mx-auto flex h-18 w-full max-w-page items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "rounded-2xl border border-line bg-sheet/95 shadow-float backdrop-blur-md" : ""
        }`}
      >
        <a href="#top" className="inline-flex min-h-11 items-center gap-3 text-ink">
          <span className="grid size-10 place-items-center rounded-lg bg-forest font-serif text-sm text-sheet">AT</span>
          <span className="leading-tight">
            <span className="block font-serif text-base tracking-tight sm:text-lg">{profile.name}</span>
            <span className="block text-sm text-muted">{profile.roleLine}</span>
          </span>
        </a>

        <nav className="hidden items-center lg:flex" aria-label="Sections">
          {nav.map((item) => {
            const active = current === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={active ? "location" : undefined}
                className={`nav-link relative inline-flex h-11 items-center px-2.5 text-sm ${
                  active ? "font-semibold text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                <span className={`nav-underline ${active ? "is-on" : ""}`} aria-hidden="true" />
              </a>
            );
          })}
        </nav>

        <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
          Contact
        </a>

        <Dialog.Root
          onOpenChange={(open) => {
            if (open) return;
            const id = pendingScroll.current;
            if (!id) return;
            pendingScroll.current = null;
            window.setTimeout(() => {
              document.getElementById(id)?.scrollIntoView({ block: "start" });
            }, 180);
          }}
        >
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-6" strokeWidth={1.5} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="menu-overlay fixed inset-0 z-[70] bg-ink/35" />
            <Dialog.Content className="menu-panel fixed inset-y-0 right-0 z-[80] flex w-full max-w-sm flex-col bg-sheet text-ink shadow-float outline-none">
              <Dialog.Description className="sr-only">Links to sections of the portfolio.</Dialog.Description>
              <div className="flex h-18 items-center justify-between px-5">
                <Dialog.Title className="font-serif text-xl">{profile.name}</Dialog.Title>
                <Dialog.Close asChild>
                  <button type="button" className="inline-flex size-11 items-center justify-center" aria-label="Close menu">
                    <X className="size-6" strokeWidth={1.5} />
                  </button>
                </Dialog.Close>
              </div>
              <nav className="flex flex-1 flex-col px-5 pb-8" aria-label="Sections">
                {nav.map((item, index) => (
                  <Dialog.Close asChild key={item.id}>
                    <a
                      href={item.href}
                      className="menu-item flex min-h-14 items-center border-t border-line font-serif text-3xl"
                      style={{ ["--reveal-delay" as string]: `${80 + index * 50}ms` }}
                      onClick={() => {
                        pendingScroll.current = item.id;
                      }}
                    >
                      {item.label}
                    </a>
                  </Dialog.Close>
                ))}
                <span className="border-t border-line" />
                <a href={profile.resumePdf} download className="btn btn-primary mt-8 w-fit">
                  Download résumé
                </a>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
