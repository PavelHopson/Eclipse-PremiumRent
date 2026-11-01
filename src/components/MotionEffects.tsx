import React, { useEffect } from "react";

const REVEAL_SELECTOR = ".rent-fleet-intro, .rent-routes h2, .rent-clients h2, .rent-about-lead, .rent-about-grid article, .rent-info-inner > *, .rent-app-copy, .rent-footer-grid > *";

// Световой шлейф и кольцо-прицел за курсором.
function startCursor() {
  const canvas = document.createElement("canvas");
  canvas.className = "rent-cursor-trail";
  canvas.setAttribute("aria-hidden", "true");
  const ring = document.createElement("div");
  ring.className = "rent-cursor-ring";
  ring.setAttribute("aria-hidden", "true");
  document.body.append(canvas, ring);
  const ctx = canvas.getContext("2d")!;

  const fit = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  fit();
  window.addEventListener("resize", fit);

  const points: { x: number; y: number; life: number }[] = [];
  const target = { x: -100, y: -100 };
  const pos = { x: -100, y: -100 };
  let frame = 0;

  const onMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    target.x = event.clientX;
    target.y = event.clientY;
    points.push({ x: target.x, y: target.y, life: 1 });
    if (points.length > 26) points.shift();
    ring.classList.add("is-on");
    const element = event.target as Element | null;
    ring.classList.toggle("is-link", !!element?.closest?.("a, button, select, input"));
    ring.classList.toggle("is-car", !!element?.closest?.(".rent-car"));
  };
  const onLeave = () => ring.classList.remove("is-on");
  window.addEventListener("pointermove", onMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);

  const tick = () => {
    pos.x += (target.x - pos.x) * 0.2;
    pos.y += (target.y - pos.y) * 0.2;
    ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.lineCap = "round";
    for (let i = points.length - 1; i > 0; i -= 1) {
      const a = points[i - 1];
      const b = points[i];
      b.life -= 0.045;
      if (b.life <= 0) continue;
      ctx.strokeStyle = `rgba(232, 200, 140, ${b.life * 0.55})`;
      ctx.lineWidth = b.life * 2.4;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    while (points.length && points[0].life <= 0) points.shift();
    frame = requestAnimationFrame(tick);
  };
  tick();

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", fit);
    window.removeEventListener("pointermove", onMove);
    document.documentElement.removeEventListener("pointerleave", onLeave);
    canvas.remove();
    ring.remove();
  };
}

// Свет фар на первом экране и наклон карточек машин.
function startPointerLights() {
  const onMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    const element = event.target as Element | null;
    const hero = element?.closest?.(".rent-hero") as HTMLElement | null;
    if (hero) {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--light-x", `${event.clientX - rect.left}px`);
      hero.style.setProperty("--light-y", `${event.clientY - rect.top}px`);
      hero.classList.add("has-light");
    }
    const card = element?.closest?.(".rent-car") as HTMLElement | null;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--tilt-x", `${(0.5 - y) * 6}deg`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * 6}deg`);
      card.style.setProperty("--sheen-x", `${x * 100}%`);
    }
  };
  const onOut = (event: PointerEvent) => {
    const element = event.target as Element | null;
    const card = element?.closest?.(".rent-car") as HTMLElement | null;
    if (card && !card.contains(event.relatedTarget as Node | null)) {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    }
    const hero = element?.closest?.(".rent-hero") as HTMLElement | null;
    if (hero && !hero.contains(event.relatedTarget as Node | null)) hero.classList.remove("has-light");
  };
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerout", onOut, { passive: true });
  return () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerout", onOut);
  };
}

function startReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  const scan = () => {
    document.querySelectorAll(`${REVEAL_SELECTOR}`).forEach((node) => {
      if (node.classList.contains("rent-reveal")) return;
      node.classList.add("rent-reveal");
      observer.observe(node);
    });
  };
  scan();
  const mutations = new MutationObserver(scan);
  mutations.observe(document.getElementById("main") ?? document.body, { childList: true, subtree: true });
  return () => {
    observer.disconnect();
    mutations.disconnect();
  };
}

export const MotionEffects: React.FC = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const stops = [startReveal()];
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      stops.push(startCursor(), startPointerLights());
    }
    return () => stops.forEach((stop) => stop());
  }, []);
  return null;
};
