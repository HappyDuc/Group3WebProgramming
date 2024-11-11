// Object decleration for a food item
class FoodItem {
  constructor(price, filling, toppings, base) {
    this.price = price;
    this.filling = filling;
    this.toppings = toppings;
    this.base = base;
  }
}

var idCounter = 0; /// initialise counter of foodItem ids 

// Function will (hopefully) add a food item to session storage
function addToCart() {
  const base = $(this).find(".card-title").text();
  const filling = $('input[name="flexRadioDefault"]:checked').val();
  const toppings = Array.from(
    document.querySelectorAll('.toppings input[type="checkbox"]:checked') /// checkbox is type but radio is name???
  ).map((topping) => topping.id);
  const price = 9.95; /// this will change

  const foodItem = new FoodItem(price, filling, toppings, base); 
  idCounter++;
  let id = "Item"+ idCounter; /// create a new id for the new food item then increment counter
  sessionStorage.setItem(id, JSON.stringify(foodItem));
  defaultForms(); /// resets forms to empty
  defaultSummary();
  $("#checkout-button").text("Checkout to enjoy : "+idCounter+" Items");
  //console.log("addToCart ran");

}

//resets the forms to unchecked after the item has been added, will occur after itemAdded
function defaultForms(){
  $("input[name='flexRadioDefault']").prop('checked', false);
  $("input[type='checkbox']").prop('checked', false);
}

//resets the summary to being empty after adding an order to the cart
function defaultSummary(){ 
  $("#summary-base").text("Select Base");
  $("#summary-filling").text("Select Filling");
  $("#add-to-cart-button").text("item added to cart")
  //$(".zoneSeperator").hide(); these lines make it unclear that the order has gone through
  //$("#customize").hide(); rather, a success message should appear
}


$(function () {
  $(".template").load("template");
});

const myCarouselElement = document.querySelector("#teamCarousel");



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
