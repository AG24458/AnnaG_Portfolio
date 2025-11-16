// contact.js
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  if (!form) return; // jeśli formularza nie ma na stronie

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_7tl0e5l",         // Twój Service ID
      "template_c1y7idl",        // Twój Template ID
      "#contactForm"
    )
    .then(() => {
      msg.textContent = "Dziękujemy! Wiadomość została wysłana.";
      msg.className = "form-msg --ok";
      form.reset();
    })
    .catch(() => {
      msg.textContent = "Błąd podczas wysyłania. Spróbuj ponownie.";
      msg.className = "form-msg --err";
    });
  });

});
