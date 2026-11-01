import React, { useEffect } from "react";

const REVEAL_SELECTOR = ".rent-fleet-intro, .rent-routes h2, .rent-clients h2, .rent-about-lead, .rent-about-grid article, .rent-info-inner > *, .rent-app-copy, .rent-footer-grid > *";

const WHEEL_SVG = `<svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">
  <circle cx="32" cy="32" r="29" fill="#0d0d0c"/>
  <circle cx="32" cy="32" r="29" fill="none" stroke="#3a3a36" stroke-width="6" stroke-dasharray="5 3.1"/>
  <circle cx="32" cy="32" r="18.5" fill="#161614" stroke="#e8c88c" stroke-width="2.4"/>
  <g stroke="#e8c88c" stroke-width="3.2" stroke-linecap="round">
    <path d="M32 32V15"/><path d="M32 32L48.2 26.7"/><path d="M32 32L42 45.8"/><path d="M32 32L22 45.8"/><path d="M32 32L15.8 26.7"/>
  </g>
  <circle cx="32" cy="32" r="4.6" fill="#e8c88c"/>
</svg>`;

interface TreadStamp { x: number; y: number; angle: number; life: number }

// Колесо вместо курсора: катится вслед за мышью и оставляет след протектора.
function startCursor() {
  document.documentElement.classList.add("rent-wheel-cursor");
  const canvas = document.createElement("canvas");
  canvas.className = "rent-cursor-trail";
  canvas.setAttribute("aria-hidden", "true");
  const wheel = document.createElement("div");
  wheel.className = "rent-wheel";
  wheel.setAttribute("aria-hidden", "true");
  wheel.innerHTML = `<div class="rent-wheel-spin">${WHEEL_SVG}</div>`;
  const spin = wheel.firstElementChild as HTMLElement;
  document.body.append(canvas, wheel);
  const ctx = canvas.getContext("2d")!;

  const fit = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  fit();
  window.addEventListener("resize", fit);

  const WHEEL_RADIUS = 17;
  const STAMP_STEP = 9;
  const stamps: TreadStamp[] = [];
  const target = { x: -100, y: -100 };
  const pos = { x: -100, y: -100 };
  let rotation = 0;
  let sinceStamp = 0;
  let hasPointer = false;
  let frame = 0;

  const onMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    target.x = event.clientX;
    target.y = event.clientY;
    if (!hasPointer) {
      pos.x = target.x;
      pos.y = target.y;
      hasPointer = true;
    }
    wheel.classList.add("is-on");
    const element = event.target as Element | null;
    wheel.classList.toggle("is-link", !!element?.closest?.("a, button, select, input, label"));
    wheel.classList.toggle("is-car", !!element?.closest?.(".rent-car"));
  };
  const onLeave = () => wheel.classList.remove("is-on");
  const onDown = () => wheel.classList.add("is-press");
  const onUp = () => wheel.classList.remove("is-press");
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerdown", onDown, { passive: true });
  window.addEventListener("pointerup", onUp, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);

  const drawStamp = (stamp: TreadStamp, index: number) => {
    // Два ряда косых шашек, как у шины на асфальте
    ctx.save();
    ctx.translate(stamp.x, stamp.y);
    ctx.rotate(stamp.angle);
    ctx.lineCap = "butt";
    ctx.lineWidth = 2.4;
    ctx.strokeStyle = `rgba(150, 142, 128, ${stamp.life * 0.6})`;
    const lean = index % 2 === 0 ? 4 : -4;
    ctx.beginPath();
    ctx.moveTo(-lean / 2, -11);
    ctx.lineTo(lean / 2, -3);
    ctx.moveTo(lean / 2, 3);
    ctx.lineTo(-lean / 2, 11);
    ctx.stroke();
    ctx.restore();
  };

  const tick = () => {
    const dx = (target.x - pos.x) * 0.3;
    const dy = (target.y - pos.y) * 0.3;
    const moved = Math.hypot(dx, dy);
    pos.x += dx;
    pos.y += dy;
    if (moved > 0.05) {
      rotation += ((dx >= 0 ? 1 : -1) * moved) / WHEEL_RADIUS;
      sinceStamp += moved;
      if (hasPointer && sinceStamp >= STAMP_STEP) {
        sinceStamp = 0;
        stamps.push({ x: pos.x, y: pos.y, angle: Math.atan2(dy, dx), life: 1 });
        if (stamps.length > 260) stamps.shift();
      }
    }
    wheel.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    spin.style.transform = `rotate(${rotation}rad)`;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stamps.forEach((stamp, index) => {
      stamp.life -= 0.0075;
      if (stamp.life > 0) drawStamp(stamp, index);
    });
    while (stamps.length && stamps[0].life <= 0) stamps.shift();
    frame = requestAnimationFrame(tick);
  };
  tick();

  return () => {
    cancelAnimationFrame(frame);
    document.documentElement.classList.remove("rent-wheel-cursor");
    window.removeEventListener("resize", fit);
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerdown", onDown);
    window.removeEventListener("pointerup", onUp);
    document.documentElement.removeEventListener("pointerleave", onLeave);
    canvas.remove();
    wheel.remove();
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
