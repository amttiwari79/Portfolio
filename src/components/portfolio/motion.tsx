import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useSeen<T extends HTMLElement>(rootMargin = "0px 0px -8% 0px") {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reducedMotion()) {
      setSeen(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, seen };
}

type Variant = "up" | "left" | "right" | "scale" | "clip";

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
}) {
  const { ref, seen } = useSeen<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${seen ? "is-in" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Seen({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, seen } = useSeen<HTMLDivElement>();
  return (
    <div ref={ref} className={`${className} ${seen ? "is-in" : ""}`}>
      {children}
    </div>
  );
}

export function Words({ text, className = "" }: { text: string; className?: string }) {
  const { ref, seen } = useSeen<HTMLSpanElement>("0px 0px -12% 0px");
  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`word ${seen ? "is-in" : ""}`}
          style={{ ["--reveal-delay" as string]: `${index * 42}ms` }}
        >
          {word}{" "}
        </span>
      ))}
    </span>
  );
}

export function CountUp({ to }: { to: number }) {
  const { ref, seen } = useSeen<HTMLSpanElement>("0px 0px -6% 0px");
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return;
    if (reducedMotion()) {
      setValue(to);
      return;
    }
    const start = performance.now();
    const duration = 1300;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * to));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, to]);

  return <span ref={ref}>{value}</span>;
}

export function Parallax({
  children,
  className = "",
  strength = 36,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion()) return;
    let frame = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      node.style.transform = `translate3d(0, ${progress * -strength}px, 0)`;
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
  }, [strength]);

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}
