document.addEventListener("DOMContentLoaded", () => {
  const parent = document.querySelector(".menu__item--has-submenu");
  if (!parent) return;

  const link = parent.querySelector(".menu__parent");
  const submenu = parent.querySelector(".menu__submenu");

  const close = () => {
    parent.classList.remove("menu__item--open");
  };

  const open = () => {
    parent.classList.add("menu__item--open");
  };

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const openState = parent.classList.contains("menu__item--open");
    if (openState) close();
    else open();
  });

  document.addEventListener("click", (e) => {
    if (!parent.contains(e.target)) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
});
