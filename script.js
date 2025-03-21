document.addEventListener("DOMContentLoaded", function () {
    // Переключение языка (EN <-> AR)
    const langToggle = document.getElementById("language-toggle");
    langToggle.addEventListener("click", () => {
        const elements = document.querySelectorAll("[data-en][data-ar]");
        const currentLang = document.documentElement.lang === "ar" ? "en" : "ar";
        document.documentElement.lang = currentLang;
        document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

        elements.forEach(el => {
            el.innerHTML = el.getAttribute(`data-${currentLang}`);
        });
    });

    // Анимация при скролле (fade-in)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

    // Вибрация WhatsApp при первом скролле
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
