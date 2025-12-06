document.addEventListener('DOMContentLoaded', () => {

  const tracks = document.querySelectorAll('.thumb-loop__track');

  tracks.forEach(track => {
    const viewport = track.parentElement;   // .thumb-loop
    const baseItems = Array.from(track.children);

    // 1) powielamy bazowe elementy,
    //    dopóki jeden blok (A) nie będzie >= szerokości viewportu
    let baseWidth = track.scrollWidth;

    while (baseWidth < viewport.offsetWidth) {
      baseItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
      });
      baseWidth = track.scrollWidth;
    }

    // 2) teraz duplikujemy cały ten blok jeszcze raz -> A A
    const allNow = Array.from(track.children);

    allNow.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  });

});


