const scrollBtn = document.querySelector(".footer__arrow-up");
const rootElement = document.documentElement;

//Function to be called on click on button
scrollBtn.addEventListener("click", () => {
  rootElement.scrollTo ({
    //Scroll up to the top of the page
    top: 0,
    behavior: "smooth"
  })
});