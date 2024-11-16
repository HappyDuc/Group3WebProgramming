var express = require("express");
var router = express.Router();

/* GET orderLookup listing. */
router.get("/", function (req, res, next) {
  res.render("orderLookup", { title: "Express" });
});

module.exports = router;
