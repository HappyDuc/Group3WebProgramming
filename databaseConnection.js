var mysql = require("mysql");

const databaseConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});
/*
databaseConnection.connect(function (err) {
  if (err) throw err;
  databaseConnection.query("CREATE DATABASE db", function (err, result) {
    if (err) throw err;
    console.log("Database created successfully.");
  });
});

module.exports = databaseConnection;
*