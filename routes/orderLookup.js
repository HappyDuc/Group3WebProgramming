var express = require("express");
var router = express.Router();
const pool = require("../databaseConnection");

// Route to render the order lookup page
router.get("/", function (req, res, next) {
  res.render("orderLookup", { title: "Order Lookup" });
});

// Route to fetch an order by its ID (for AJAX requests)
router.get("/:id", function (req, res) {
  const orderId = req.params.id;

  // Query to fetch the order by ID
  pool.query("SELECT * FROM foodcontent WHERE id = ?", [orderId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }

    if (result.length === 0) {
      return res.status(404).send("Order not found");
    }

    res.json(result[0]); // Send the first result as JSON
  });
});

module.exports = router;
