document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".tools-strip__track");
  if (!track) return;

  // Klonowanie zawartości
  const clone = track.cloneNode(true);
  track.parentNode.appendChild(clone);

  let speed = 0.6; // px per frame
  let pos = 0;

  function loop() {
    pos -= speed;
    if (Math.abs(pos) >= track.scrollWidth) pos = 0;

    track.style.transform = `translateX(${pos}px)`;
    clone.style.transform = `translateX(${pos + track.scrollWidth}px)`;

    requestAnimationFrame(loop);
  }

  loop();

  // Pauzuj na hover
  const viewport = document.querySelector(".tools-strip__viewport");
  viewport.addEventListener("mouseenter", () => speed = 0);
  viewport.addEventListener("mouseleave", () => speed = 0.6);

  // Dopasowanie po resize
  window.addEventListener("resize", () => {
    pos = 0;
    clone.style.transform = `translateX(${track.scrollWidth}px)`;
  });
});
