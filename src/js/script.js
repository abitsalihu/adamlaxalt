const nav = document.querySelector(".nav");
const navBTN = document.querySelector(".nav__btn");
const navLinks = document.querySelector(".nav__links--m");
const body = document.querySelector("body");
const navGetInvolvedLinks = document.querySelectorAll(".nav__links--involved");

//? Donations
const donationBtns = document.querySelectorAll(".donation_btn");
const donationMonthlyBtns = document.querySelectorAll(".donation_monthly--btn");

//? Merch

const mainImg = document.querySelector(".main-img");
const modelCon = document.querySelectorAll(".model-con");
const typeBtn = document.querySelectorAll(".type-btn");
const sizeBtn = document.querySelectorAll(".size-btn");

let currentImg = "../images/merch/merch-black.jpeg";
//! FUNCTIONs

const showNav = function () {
  nav.classList.toggle("nav--active");
  document.querySelector(".nav__btn-lone").classList.toggle("f-animation");
  document.querySelector(".nav__btn-ltwo").classList.toggle("th-animation");
  document.querySelector(".nav__btn-lthree").classList.toggle("s-animation");
  navLinks.classList.toggle("nav--links-active");
  navGetInvolvedLinks.forEach((e) => e.classList.remove("height"));
};

const removeAddClass = function (array, classList, e) {
  array.forEach((e) => e.classList.remove(`${classList}`));
  e.classList.add(`${classList}`);
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

donationBtns.forEach((e) =>
  e.addEventListener("click", (e) => {
    removeAddClass(donationBtns, "btn-active", e.target);
  })
);

donationMonthlyBtns.forEach((e) =>
  e.addEventListener("click", (e) => {
    removeAddClass(donationMonthlyBtns, "btn-active", e.target);
  })
);

modelCon.forEach((e) =>
  e.addEventListener("mouseenter", (e) => {
    let model = e.target.getAttribute("data-src");
    mainImg.src = model;
  })
);

modelCon.forEach((e) =>
  e.addEventListener("mouseleave", (e) => {
    mainImg.src = currentImg;
  })
);

modelCon.forEach((e) =>
  e.addEventListener("click", (e) => {
    removeAddClass(modelCon, "active-border", e.target);
    currentImg = e.target.getAttribute("data-src");
    mainImg.src = e.target.getAttribute("data-src");
    return currentImg;
  })
);

typeBtn.forEach((e) =>
  e.addEventListener("click", (e) => {
    removeAddClass(typeBtn, "active", e.target);
  })
);

sizeBtn.forEach((e) =>
  e.addEventListener("click", (e) => {
    removeAddClass(sizeBtn, "active", e.target);
  })
);
