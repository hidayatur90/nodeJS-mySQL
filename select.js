const mysql = require("mysql");
const mydb = require("./db_con");

const show_data = () => {

    let query = "SELECT * FROM books LIMIT 5";

    mydb.query(query, function (err, result) {
        if(err) throw err;

        // console.log("Berhasil tampil");
        console.log(result);
    })
}

const show_data_dynamic = () => {

    let params = {
        "genre_id" : 2,
        "year" : 2017
    }

    let query = "SELECT * FROM books WHERE 1 = 1";

    if("genre_id" in params) {
        query += " AND genre_id = " + mysql.escape(params["genre_id"]);
    }

    if("year" in params) {
        query += " AND year = " + mysql.escape(params["year"]);
    }

    query += " LIMIT 10";

    mydb.query(query, function (err, result) {
        if(err) throw err;

        // console.log("Berhasil tampil");
        console.log(result);
    })
}

show_data_dynamic()
mydb.end()