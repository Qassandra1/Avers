// Переключение языка EN / AR
document.getElementById("language-toggle").addEventListener("click", () => {
  const lang = document.documentElement.lang === "en" ? "ar" : "en";
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

// Анимации появления блоков при скролле
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
      if (entry.target.classList.contains("fade-left")) {
        entry.target.classList.add("fade-left-visible");
      }
      if (entry.target.classList.contains("fade-right")) {
        entry.target.classList.add("fade-right-visible");
      }
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in, .fade-left, .fade-right").forEach(el => {
  observer.observe(el);
});

// Вибрация иконки WhatsApp при первом скролле
let vibrated = false;
window.addEventListener('scroll', () => {
  if (!vibrated) {
    const btn = document.querySelector('.whatsapp-float');
    if (btn) {
      btn.classList.add('vibrate');
      vibrated = true;
    }
  }
});
