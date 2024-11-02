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

function addItem(basket, foodItem) {
  console.log("item added yay");
  basket.addItem(foodItem);
  console.log("item added yay");
}

class FoodItem {
  constructor(price, name, image) {
    this.price = price;
    this.name = name;
    this.image = image;
    this.filling = filling;
    this.toppings = [];
  }
}

class basket {
  constructor() {
    this.contents = [];
  }

  addItem(foodItem) {
    this.contents.push(foodItem);
  }

  save() {
    console.log(JSON.stringify(this));
    sessionStorage.setItem("basket", JSON.stringify(this));
  }
}

$(document).ready(function () {
  let selectedBase = '';

  function updateSummary() {
    // Get selected filling from radios and update 
    const filling = $('input[name="flexRadioDefault"]:checked').val();
    if (filling) {
      $('#summary-filling').text(filling.charAt(0).toUpperCase() + filling.slice(1));
    } else {
      $('#summary-filling').text('Select Filling');
    }
    // Update base name 
    $('#summary-base').text(selectedBase || 'Select Base');
  }

  // Event listener for filling selection
  $('input[name="flexRadioDefault"]').change(updateSummary);

  // Event listener for base selection 
  $('#menuItemsGrid .card').on('click', function (e) {
   
    selectedBase = $(this).find('.card-title').text();

    updateSummary();
  });

  // Initial update for default selections
  updateSummary();
});
