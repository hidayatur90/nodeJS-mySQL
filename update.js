const mysql = require("mysql");
const mydb = require("./db_con");

const update_data = () => {

    let genre = "Mbak Titt"; //dimamic query
    let params = {
        "genre" : "Regita"
    }

    let query = "UPDATE genre SET genre=? WHERE 1 = 1"; 
    let values = [genre];

    if("genre" in params) {
        query += " AND genre=" + mysql.escape(params["genre"]); // escape
    }

    mydb.query(query, values, function(err, result) {
        if(err) throw err;

        console.log("Berhasil update data");
        console.log(result);
    })
}

update_data();
mydb.end();