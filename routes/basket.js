var express = require("express");
var router = express.Router();

/* GET basket page. */
router.get("/", function (req, res, next) {
  res.render("basket", { title: "Express" });
});

module.exports = router;
