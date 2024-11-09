var express = require("express");
var router = express.Router();

/* GET confirmation page. */
router.get("/", function (req, res, next) {
  res.render("confirmation", { title: "Express" });
});

module.exports = router;
