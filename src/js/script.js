const nav = document.querySelector(".nav");
const navBTN = document.querySelector(".nav__btn");
const navLinks = document.querySelector(".nav__links--m");
const body = document.querySelector("body");
const navGetInvolvedLinks = document.querySelectorAll(".nav__links--involved");
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

  navGetInvolvedLinks.forEach((e) => e.classList.remove("height"));
  // }
};

//! EVENT listeners

navBTN.addEventListener("click", showNav);

navGetInvolvedLinks.forEach((e) =>
  e.addEventListener("click", (e) => {
    console.log(e.target);
    if (body.clientWidth < 850) {
      console.log("success");
      e.target.closest(".nav__links--involved").classList.toggle("height");
    } else {
      console.log("fail");
    }
  })
);
