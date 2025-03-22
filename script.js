document.addEventListener("DOMContentLoaded", () => {
  // Переключение языка EN / AR
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

  // Анимации появления секций
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // Вибрация WhatsApp при КАЖДОМ скролле
  window.addEventListener("scroll", () => {
    const icon = document.querySelector(".whatsapp-icon");
    if (icon) {
      icon.classList.add("vibrate");
      setTimeout(() => icon.classList.remove("vibrate"), 500);
    }
  });

  // Галерея: устранение дёргания при прокрутке
  const debounce = (fn, delay) => {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, arguments), delay);
    };
  };

  const updateGalleryFocus = (gallery) => {
    const images = gallery.querySelectorAll("img");
    const center = gallery.scrollLeft + gallery.offsetWidth / 2;

    images.forEach(img => {
      const imgCenter = img.offsetLeft + img.offsetWidth / 2;
      const distance = Math.abs(center - imgCenter);
      img.classList.toggle("active", distance < img.offsetWidth / 2);
    });
  };

  document.querySelectorAll(".gallery").forEach(gallery => {
    gallery.addEventListener("scroll", debounce(() => {
      updateGalleryFocus(gallery);
    }, 80));
  });
});
