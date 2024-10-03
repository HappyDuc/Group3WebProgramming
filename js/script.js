$(function () {
  $(".template").load("/template.html");
});

const myCarouselElement = document.querySelector("#teamCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
});
