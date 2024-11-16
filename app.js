var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Connect to and create SQL database
//const database = require("./databaseConnection");

// Import routing files
var aboutUsRouter = require("./routes/aboutUs");
var basketRouter = require("./routes/basket");
var confirmationRouter = require("./routes/confirmation");
var customizeRouter = require("./routes/customize");
var indexRouter = require("./routes/index");
var orderRouter = require("./routes/order");
var paymentRouter = require("./routes/payment");
var templateRouter = require("./routes/template");
var orderLookupRouter = require("./routes/orderLookup");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/aboutUs", aboutUsRouter);
app.use("/basket", basketRouter);
app.use("/confirmation", confirmationRouter);
app.use("/customize", customizeRouter);
app.use("/", indexRouter);
app.use("/order", orderRouter);
app.use("/payment", paymentRouter);
app.use("/template", templateRouter);
app.use("/orderLookup", orderLookupRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
