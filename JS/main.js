/*
when scroll down more than 100px , add scroll-down class to the header, please js

*/

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) headerID.classList.add("scroll-down");
  else headerID.classList.remove("scroll-down");
});
