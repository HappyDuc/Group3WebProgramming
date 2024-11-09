// Object decleration for a food item
class FoodItem {
  constructor(price, filling, toppings, base) {
    this.price = price;
    this.filling = filling;
    this.toppings = toppings;
    this.base = base;
  }
}

// Function will (hopefully) add a food item to session storage
function addToCart() {
  const base = $(this).find(".card-title").text();
  const filling = $('input[name="flexRadioDefault"]:checked').val();
  const toppings = Array.from(
    document.querySelectorAll('.toppings input[type="checkbox"]:checked')
  ).map((topping) => topping.id);
  const price = 9.95;

  const foodItem = new FoodItem(price, filling, toppings, base);

  let id = "item1";

  sessionStorage.setItem(id, JSON.stringify(foodItem));
}

$(function () {
  $(".template").load("template");
});

const myCarouselElement = document.querySelector("#teamCarousel");

function addItem(basket, foodItem) {
  console.log("item added yay");
  basket.addItem(foodItem);
  console.log("item added yay");
}

class basket {
  constructor() {
    this.contents = [];
  }

  addItem(foodItem) {
    this.contents.push(foodItem);
  }

  static save() {
    console.log(JSON.stringify(this));
    sessionStorage.setItem("basket", JSON.stringify(this));
  }
}

function showCustomize() {
  // Function reveals zone seperator and customize section when a menu item is clicked
  $("#menuItemsGrid .card").on("click", function (e) {
    $(".zoneSeperator").show();
    $("#customize").show();
  });
}

// Function updates the order summary section when customising an order
$(document).ready(function () {
  let selectedBase = "";
  showCustomize();

  function updateSummary() {
    // Get selected filling from radios and update
    const filling = $('input[name="flexRadioDefault"]:checked').val();
    if (filling) {
      $("#summary-filling").text(
        filling.charAt(0).toUpperCase() + filling.slice(1)
      );
    } else {
      $("#summary-filling").text("Select Filling");
    }
    // Update base name
    $("#summary-base").text(selectedBase || "Select Base");
  }

  // Event listener for filling selection
  $('input[name="flexRadioDefault"]').change(updateSummary);

  // Event listener for base selection
  $("#menuItemsGrid .card").on("click", function (e) {
    selectedBase = $(this).find(".card-title").text();

    // If Dip and Chip or Churros is selected hide appropriate sections (e.g. churros cannot have a topping)
    if (selectedBase === "Dip and Chip") {
      // Hide the fillings section
      $(".fillings").hide();
      $(".toppings").show();
      $("#summary-filling").hide();
      $(".summary").css("height", "auto");
    } else if (selectedBase === "Churros") {
      $(".fillings").hide();
      $(".toppings").hide();
      $("#summary-filling").hide();
      $(".summary").css("height", "322px");
    } else {
      // Show the fillings section
      $(".toppings").show();
      $(".fillings").show();
      $("#summary-filling").show();
      $(".summary").css("height", "auto");
    }

    updateSummary();
  });

  // Initial update for default selections
  updateSummary();
});
