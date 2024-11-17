var express = require("express");
var router = express.Router();
const pool = require("../databaseConnection"); // Ensure the pool is configured correctly

// Route to render the order lookup page
router.get("/", function (req, res, next) {
  res.render("orderLookup", { title: "Order Lookup" });
});

// Route to fetch an order by its ID (for AJAX requests)
router.get("/:id", function (req, res) {
  const orderId = req.params.id; // Extract the order ID from the URL parameter

  // Query to fetch all items for the given order ID
  pool.query("SELECT * FROM foodContent WHERE orderID = ?", [orderId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }

    if (result.length === 0) {
      return res.status(404).send("Order not found");
    }

    res.json(result); // Send all items for the order as JSON
  });
});

module.exports = router;
