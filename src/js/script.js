const nav = document.querySelector(".nav");
const navBTN = document.querySelector(".nav__btn");
const navLinks = document.querySelector(".nav__links--m");
const body = document.querySelector("body");
//! FUNCTIONs

const showNav = function () {
  nav.classList.toggle("nav--active");
  document.querySelector(".nav__btn-lone").classList.toggle("f-animation");
  document.querySelector(".nav__btn-ltwo").classList.toggle("th-animation");
  document.querySelector(".nav__btn-lthree").classList.toggle("s-animation");
  // if (nav.classList.contains("nav--active")) {
  //   setTimeout(() => {
  //     navLinks.classList.toggle("nav--links-active");
  //   }, 1000);
  // } else {
  navLinks.classList.toggle("nav--links-active");
  // }
};

//! EVENT listeners

navBTN.addEventListener("click", showNav);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    nav.style.background = "#f4f4f8";
  } else {
    nav.style.background = "transparent";
  }
});
