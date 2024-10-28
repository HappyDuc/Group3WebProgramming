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


// Updates the food order summary section within the order page
$(document).ready(function() {

  function updateSummary() {
    // Get selected filling
    const filling = $('input[name="flexRadioDefault"]:checked').val();
    $('#summary-filling').text();

    // Get selected toppings
    const toppings = [];
    $('input[type="checkbox"]:checked').each(function() {
      toppings.push($(this).next('label').text());
    });
    $('#summary-toppings').html(toppings.length ? toppings.join('<br>') : 'None');
  }

  // Event listeners for filling and topping changes
  $('input[name="flexRadioDefault"]').change(updateSummary);
  $('input[type="checkbox"]').change(updateSummary);

  // Initial update
  updateSummary();
});

