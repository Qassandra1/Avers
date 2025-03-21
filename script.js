// Language switch: EN / AR
document.getElementById("language-toggle").addEventListener("click", () => {
  const lang = document.documentElement.lang === "en" ? "ar" : "en";
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

// Section fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("section, .overlay-content, .text, .gallery").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// WhatsApp button vibration on first scroll
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
