"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

const revealSelector = [
  "main:not(.h-svh) > section:not(.page-hero)",
  "main:not(.h-svh) > article > section",
  "main:not(.h-svh) > article > div",
  "main:not(.h-svh) > .section-pad",
].join(",");

export default function SiteExperience() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);
  const returnToTop = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const progressElement = progress.current;
    const returnButton = returnToTop.current;
    if (!progressElement || !returnButton) return;

    let animationFrame = 0;
    const updatePosition = () => {
      const maximum = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
      const amount = maximum ? Math.min(window.scrollY / maximum, 1) : 0;
      const hasReadingDistance = maximum > window.innerHeight * 0.55;
      const isImmersiveHome = document.querySelector("main")?.classList.contains("h-svh") ?? false;
      const showReturnButton =
        hasReadingDistance && !isImmersiveHome && window.scrollY > Math.max(window.innerHeight * 0.85, 560);

      progressElement.style.transform = `scaleX(${amount})`;
      progressElement.toggleAttribute("data-visible", hasReadingDistance && !isImmersiveHome);
      returnButton.style.setProperty("--page-progress", `${amount * 360}deg`);
      returnButton.toggleAttribute("data-visible", showReturnButton);
      returnButton.tabIndex = showReturnButton ? 0 : -1;
      returnButton.setAttribute("aria-hidden", showReturnButton ? "false" : "true");
      document.documentElement.toggleAttribute("data-scrolled", window.scrollY > 18);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updatePosition);
    };

    updatePosition();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      document.documentElement.removeAttribute("data-scrolled");
    };
  }, [pathname]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    if (!elements.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.06 },
    );

    for (const element of elements) {
      element.classList.add("site-reveal");
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      for (const element of elements) element.classList.remove("site-reveal", "is-revealed");
    };
  }, [pathname]);

  return (
    <>
      <div ref={progress} className="site-reading-progress" aria-hidden="true" />
      <button
        ref={returnToTop}
        type="button"
        className="site-return-top"
        aria-label="Return to the top of the page"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => {
          const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        }}
      >
        <span><ArrowUp size={15} aria-hidden="true" /></span>
      </button>
    </>
  );
}
