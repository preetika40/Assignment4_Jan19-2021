const scrollBtn = document.querySelector(".footer__arrow-up");
const rootElement = document.documentElement;
scrollBtn.addEventListener("click", () => {
  rootElement.scrollTo ({
    top: 0,
    behavior: "smooth"
  })
});