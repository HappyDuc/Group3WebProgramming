var express = require("express");
var router = express.Router();

/* GET payment page. */
router.get("/", function (req, res, next) {
  res.render("payment", { title: "Express" });
});

module.exports = router;
