// Language toggle
document.getElementById("language-toggle").addEventListener("click", () => {
  if (document.documentElement.lang === "en") {
    document.documentElement.lang = "ar";
    document.body.dir = "rtl";
  } else {
    document.documentElement.lang = "en";
    document.body.dir = "ltr";
  }
});

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
      entry.target.classList.add("fade-in-visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});
