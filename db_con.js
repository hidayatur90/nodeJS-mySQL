let mysql = require("mysql");

let mydb = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "",
    database: "books"
})

mydb.connect(function(err){
    if (err) throw err;
    console.log("Success");
})

module.exports = mydb;