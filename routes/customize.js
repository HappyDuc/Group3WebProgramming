var express = require("express");
var router = express.Router();

/* GET customize page. */
router.get("/", function (req, res, next) {
  res.render("customize", { title: "Express" });
});

module.exports = router;
