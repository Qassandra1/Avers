document.addEventListener("DOMContentLoaded", () => {
  // Language toggle
  const toggle = document.getElementById("language-toggle");
  let currentLang = "en";

  toggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en]").forEach(el => {
      el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });
  });

  // Animate on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // WhatsApp vibration on first scroll
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

  // Active image in gallery on scroll
  document.querySelectorAll(".gallery-scroll").forEach(gallery => {
    gallery.addEventListener("scroll", () => {
      const imgs = gallery.querySelectorAll("img");
      const center = gallery.scrollLeft + gallery.offsetWidth / 2;

      imgs.forEach(img => {
        const imgCenter = img.offsetLeft + img.offsetWidth / 2;
        const distance = Math.abs(center - imgCenter);
        img.classList.toggle("active", distance < img.offsetWidth / 2);
      });
    });
  });
});
