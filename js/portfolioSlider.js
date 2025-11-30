// js/portfolioSliders.js

document.addEventListener('DOMContentLoaded', () => {
  const GAP = 32; // tyle masz w CSS w .project-strip { gap: 32px; }

  // dla każdego rzędu projektów
  document.querySelectorAll('.portfolio-row').forEach(row => {
    const strip = row.querySelector('.project-strip');
    const prevBtn = row.querySelector('.slider-nav__btn--prev');
    const nextBtn = row.querySelector('.slider-nav__btn--next');

    if (!strip || !prevBtn || !nextBtn) return;

    let step = getStep();

    // przelicz krok przy zmianie szerokości okna
    window.addEventListener('resize', () => {
      step = getStep();
    });

    function getStep() {
      const card = strip.querySelector('.project-item');
      if (!card) return strip.clientWidth;
      return card.offsetWidth + GAP;
    }

    prevBtn.addEventListener('click', () => {
      strip.scrollBy({
        left: -step,
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      strip.scrollBy({
        left: step,
        behavior: 'smooth'
      });
    });
  });
});
