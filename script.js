document.addEventListener("DOMContentLoaded", () => {
  // Языковое переключение
  const toggleBtn = document.getElementById("language-toggle");
  let currentLang = "en";

  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    document.querySelectorAll("[data-en], [data-ar]").forEach((el) => {
      el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });
    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
  });

  // Анимации появления блоков при прокрутке
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // Вибрация кнопки WhatsApp при первом скролле
  let whatsappBtn = document.querySelector(".whatsapp-icon");
  let vibrated = false;
  window.addEventListener("scroll", () => {
    if (!vibrated) {
      whatsappBtn.classList.add("vibrate");
      setTimeout(() => whatsappBtn.classList.remove("vibrate"), 1000);
      vibrated = true;
    }
  });
});
