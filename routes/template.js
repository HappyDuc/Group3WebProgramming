var express = require("express");
var router = express.Router();

/* GET template page. */
router.get("/", function (req, res, next) {
  res.render("template", { title: "Express" });
});

module.exports = router;
