document.getElementById('language-toggle').addEventListener('click', () => {
  if (document.documentElement.lang === "en") {
    document.documentElement.lang = "ar";
    document.body.dir = "rtl";
  } else {
    document.documentElement.lang = "en";
    document.body.dir = "ltr";
  }
});
