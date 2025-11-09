// js/toolsMarquee.js
(function () {
  const section  = document.querySelector(".tools-strip");
  if (!section) return;

  const viewport = section.querySelector(".tools-strip__viewport");
  const trackA   = section.querySelector(".tools-strip__track");
  if (!viewport || !trackA) return;

  const trackB = trackA.cloneNode(true);
  trackB.setAttribute("aria-hidden", "true");
  viewport.appendChild(trackB);

  // Pozycjonowanie (tylko w tej sekcji)
  trackA.style.position = trackB.style.position = "absolute";
  trackA.style.left = trackB.style.left = "0";
  trackA.style.top  = trackB.style.top  = "0";

  let speedPxSec = 60;  // px/s
  let w = 0;            // szerokość jednego toru
  let offset = 0;
  let running = true;
  let last = null;

  function measure() {
    w = trackA.getBoundingClientRect().width;
    offset = 0;
    place(0);
  }

  function place(x) {
    const m = ((x % w) + w) % w; // modulo [0,w)
    const aX = -m;
    const bX = aX + w;
    trackA.style.transform = `translateX(${aX}px)`;
    trackB.style.transform = `translateX(${bX}px)`;
  }

  function frame(ts) {
    if (last === null) last = ts;
    const dt = (ts - last) / 1000;
    last = ts;

    if (running) {
      offset -= speedPxSec * dt;
      place(offset);
    }
    requestAnimationFrame(frame);
  }

  viewport.addEventListener("mouseenter", () => (running = false));
  viewport.addEventListener("mouseleave", () => (running = true));
  window.addEventListener("resize", measure);

  if (document.readyState === "complete") {
    measure(); requestAnimationFrame(frame);
  } else {
    window.addEventListener("load", () => { measure(); requestAnimationFrame(frame); });
  }
})();


