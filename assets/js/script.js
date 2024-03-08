"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const drop = document.querySelector(".drop-menu");
const sliderArea = document.querySelector(".slider");
const academyPage = document.querySelector(".academy");
const lessonPage = document.querySelector(".lesson");
const drop2 = document.querySelector(".drop-menu2");
const cor = document.querySelector(".corpo");
const callPage = document.querySelector(".call");


academyPage.addEventListener("mouseover", function () {
  drop.classList.remove("d-none");
  drop2.classList.add("d-none");
});

sliderArea.addEventListener("mouseover",function(){
  drop.classList.add("d-none");
  drop2.classList.add("d-none");
})

cor.addEventListener("mouseover",function(){
  drop.classList.add("d-none");
  drop2.classList.add("d-none");
})

callPage.addEventListener("mouseover",function(){
  drop.classList.add("d-none");
  drop2.classList.add("d-none");
})


lessonPage.addEventListener("mouseover", function () {
  drop2.classList.remove("d-none");
  drop.classList.add("d-none");
});

