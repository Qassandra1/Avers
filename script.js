document.addEventListener("DOMContentLoaded", () => {
  // Переключение языка
  const toggle = document.getElementById("language-toggle");
  let lang = "en";

  toggle.addEventListener("click", () => {
    lang = lang === "en" ? "ar" : "en";
    document.documentElement.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en]").forEach(el => {
      el.innerHTML = el.getAttribute(`data-${lang}`);
    });
  });

  // Анимация появления блоков
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // Вибрация WhatsApp при первом скролле
  let vibrated = false;
  window.addEventListener("scroll", () => {
    if (!vibrated) {
      const icon = document.querySelector(".whatsapp-icon");
      if (icon) {
        icon.classList.add("vibrate");
        setTimeout(() => icon.classList.remove("vibrate"), 1000);
        vibrated = true;
      }
    }
  });

  // Центрируем активное изображение в галерее
  document.querySelectorAll(".gallery").forEach(gallery => {
    gallery.addEventListener("scroll", () => {
      const images = gallery.querySelectorAll("img");
      const center = gallery.scrollLeft + gallery.offsetWidth / 2;

      images.forEach(img => {
        const imgCenter = img.offsetLeft + img.offsetWidth / 2;
        const distance = Math.abs(center - imgCenter);
        img.classList.toggle("active", distance < img.offsetWidth / 2);
      });
    });
  });
});
