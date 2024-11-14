var mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function (err) {
 if(err) throw err;
 console.log("Connected!");
 con.query("CREATE DATABASE mydb", function(err, result){
  if(err) throw err;
  console.log("Database Created")
 })
});

module.exports = databaseConnection;