// Object decleration for a food item
class MainItem {
  constructor(price, filling, toppings, base, id) {
    /// this is for the mains
    this.price = price;
    this.filling = filling;
    this.toppings = toppings;
    this.base = base;
    this.id = id;
  }
}

class DipChip {
  constructor(price, toppings, base, id) {
    /// this is for the dip and chip
    this.price = price;
    this.toppings = toppings;
    this.base = base;
    this.id = id;
  }
}

class Churro {
  constructor(price, base, id) {
    /// this is for the churros
    this.price = price;
    this.base = base;
    this.id = id;
  }
}

class Basket {
  /// basket will just be an array of items
  constructor() {
    this.contents = [];
  }

  pushItem(item) {
    this.contents.push(item);
  }
}

/// make a function that will take the contents ad add to the basket

function displayBasket() {
  // Template element for the basket item card
  let basketItemCardTemplate = $(".basket-card").first().clone(true);
  $("#basketList").empty(); // Clear existing items in the basket list

  let basketData = JSON.parse(sessionStorage.getItem("basket"));
  let basket = new Basket();

  // Populate basket instance with stored data if available
  if (basketData !== null) {
    for (let item of basketData.contents) {
      basket.pushItem(item);
    }
  }
  // Loop through each item in basket and add to the display
  for (let item of basket.contents) {
    let newCard = basketItemCardTemplate.clone(true).removeAttr("hidden");
    let imageName = item.base.toLowerCase();
    if (imageName === "dip and chip") {
      imageName = "guacamole";
    }
    newCard
      .find("#itemImage")
      .attr("src", `/public/images/menuImages/${imageName}.jpg`);
    newCard.find("#basket-item-name").text(item.base || "Unknown Item");
    newCard
      .find("#basket-filling-name")
      .text("Filling: " + (item.filling || "Unknown filling") + "\n");
    newCard
      .find("#basket-topping-name")
      .text("Topping(s): " + (item.toppings || "No toppings"));
    newCard.find("#basket-item-price").text(`$${item.price || "0.00"}`);
    // Append the populated card to the basket list
    $("#basketList").append(newCard);
  }
}

// function displayBasket() {
//   console.log("Displaying basket");
//   let basketItemCard = $(".basket-card");
//   console.log("basketItemCard=", basketItemCard);
//   let basketData = JSON.parse(sessionStorage.getItem("basket"));
//   let basket = new Basket();
//   if (basketData !== null) {
//     for (let index = 0; index < basketData.contents.length; index++) {
//       basket.pushItem(basketData.contents[index]);
//     }
//   }
//   console.log("basket.contents=", basket.contents);
//   for (let index = 0; index < basket.contents.length; index++) {
//     const element = basket.contents[index];
//     let newCard = basketItemCard.clone(true);
//     $("#basketList").append(newCard);
//   }
// }

function calcTotalPrice() { /// unused i believe, not going to remove just yet
  let basket = JSON.parse(sessionStorage.getItem("basket")); /// get basket from storage
  let baskContents = basket.contents; /// get itemArray

  ///console.log("length is "+baskContents.length);
  let totalPrice = 0; ///initial total price
  for (let item in baskContents) {
    ///iterate through array

    let foodItem = baskContents[item];
    //console.log(item);
    totalPrice += foodItem.price; /// add item price to total
  }
  $("#total-price").text("Total Price : £ " + totalPrice.toFixed(2)); /// display total price to 2dp
  return totalPrice; /// when using at checkout, and after discount code
}

function displayFinalPrice(){ /// make a method to show all of the item bases and fillings in the summary
  let priceObj = sessionStorage.getItem("totalPrice");
  price = parseFloat(priceObj);
  console.log(typeof(price));
  $("#final-price").text("Total price : £" + price);
}


// Updates the price on the basket page when an item quantity is changed.
function updatePrice() {
  let total = 0;
  $(".basket-card").each(function () {
    //console.log("food item : "+$(".basket-card").text());
    // console.log(" number of"+ $(this).find(".form-control").val());
    // console.log(" price per : "+$(this).find("#basket-item-price").text().slice(1));
    total +=
      $(this).find(".form-control").val() * /// the number of copies of the item 
      $(this).find("#basket-item-price").text().slice(1); /// the price per item
  });
  $("#total-price").text("£" + total.toFixed(2));
  sessionStorage.setItem("totalPrice", total.toFixed(2));
}

var idCounter = 0; /// initialise counter of foodItem ids

function createBasket() {
  const basket = new Basket();
  ///console.log("all done")
  sessionStorage.setItem("basket", JSON.stringify(basket));
  sessionStorage.setItem("totalPrice",0.00);
}

// Function will (hopefully) add a food item to session storage
function addToCart() {
  updatePrice(); /// update the price
  let basket = JSON.parse(sessionStorage.getItem("basket"));
  console.log(typeof basket);

  const base = $("#summary-base").text(); /// this isnt quite right
  const filling = $('input[name="flexRadioDefault"]:checked').val();
  const toppings = Array.from(
    document.querySelectorAll('.toppings input[type="checkbox"]:checked') /// checkbox is type but radio is name???
  ).map((topping) => topping.id);
  const price = 9.95; /// this will change

  idCounter++;

  if (base === "Churros") {
    const churro = new Churro(4.95, base, idCounter);
    basket.contents.push(churro); /// pushes item to basket []
  } else if (base === "Dip and Chip") {
    const dipChip = new DipChip(5.95, toppings, base, idCounter);
    basket.contents.push(dipChip); /// pushes item to basket []
  } else {
    /// item is a main
    const mainItem = new MainItem(price, filling, toppings, base, idCounter);
    basket.contents.push(mainItem); /// pushes item to basket []
  }
  //sessionStorage.setItem(idCounter, JSON.stringify(foodItem));

  /// here, instead of pushing to session storage, i need to add it to the basket

  sessionStorage.setItem("basket", JSON.stringify(basket));
  defaultForms(); /// resets forms to empty
  defaultSummary();
  $("#checkout-button").text("Checkout to enjoy : " + idCounter + " Items");
  //console.log("addToCart ran");
}

function applyDiscount(inputCode) {
  /// incomplete
  if ((inputCode = "BANANA")) {
    sessionStorage.setItem("totalPrice", (0.00).toFixed(2));
    $("#total-price").text("£" + (0).toFixed(2));
  }
}

//resets the forms to unchecked after the item has been added, will occur after itemAdded
function defaultForms() {
  $("input[name='flexRadioDefault']").prop("checked", false);
  $("input[type='checkbox']").prop("checked", false);
}

//resets the summary to being empty after adding an order to the cart
function defaultSummary() {
  $("#summary-base").text("Select Base");
  $("#summary-filling").text("Select Filling");
  $("#add-to-cart-button").text("item added to cart");
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
    //$("#summary-price").text($(this).find(".card-text").text()); /// update the item price
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
      $("#summary-price").text("Price : 5.95"); /// update price

      $(".summary").css("height", "auto");
    } else if (selectedBase === "Churros") {
      // Hide the fillings section
      // Hide the toppings section
      $(".fillings").hide();
      $(".toppings").hide();
      $("#summary-filling").hide();
      $("#summary-price").text("Price : 4.95"); /// update price
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
  displayBasket();

  $(".form-control").change(updatePrice);
});

// Database Input
// $(document).ready(function () {
//   $("#searchBtn").click(function () {
//     var orderID = $("#orderID").val(); // Get the order ID input value

//     if (orderID) {
//       $.get(`/lookupOrder?orderID=${orderID}`, function (data) {
//         // Display the result
//         if (data.message) {
//           $("#orderDetails").html(`<p>${data.message}</p>`);
//         } else {
//           var detailsHtml = "<ul>";
//           data.forEach(function (item) {
//             detailsHtml += `<li>Food Name: ${item.foodName}, Description: ${item.fDescription}, Price: $${item.price}</li>`;
//           });
//           detailsHtml += `</ul><p>Total Price: $${data[0].Totalprice}</p>`;
//           $("#orderDetails").html(detailsHtml);
//         }
//       });
//     } else {
//       $("#orderDetails").html("<p>Please enter a valid Order ID.</p>");
//     }
//   });
// });
