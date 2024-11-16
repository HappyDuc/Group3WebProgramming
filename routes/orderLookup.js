var express = require("express");
var router = express.Router();

/* GET aboutUs listing. */
router.get("/", function (req, res, next) {
  res.render("orderLookup", { title: "Express" });
});

module.exports = router;
