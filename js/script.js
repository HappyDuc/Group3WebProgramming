$(function () {
  $(".template").load("/template.html");
});

const myCarouselElement = document.querySelector("#teamCarousel");
/*
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
});

*/



function addItem(basket, foodItem){
    console.log('item added yay')
    basket.addItem(foodItem);
    console.log('item added yay')
}


class FoodItem{
  constructor(price, name, image) {
    this.price = price;
    this.name = name;
    this.image = image;
  }
}

class basket{

constructor(){
  this.contents = [];
}

addItem(foodItem){
    this.contents.push(foodItem)
    console.log('item added to basket')
  }
}


