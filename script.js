document.addEventListener("DOMContentLoaded", function () {
  // Language Toggle
  document.getElementById("language-toggle").addEventListener("click", () => {
    const lang = document.documentElement.lang === "ar" ? "en" : "ar";
    document.documentElement.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en]").forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // WhatsApp vibration on first scroll
  let vibrated = false;
  window.addEventListener("scroll", () => {
    if (!vibrated) {
      const btn = document.querySelector(".whatsapp-float");
      if (btn) {
        btn.classList.add("vibrate");
        vibrated = true;
      }
    }
  });
});
