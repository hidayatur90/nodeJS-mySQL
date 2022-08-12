const mydb = require('./db_con');

const insert_data = () => {
    let query = "INSERT INTO genre(genre) VALUES ('Horror')";

    mydb.query(query, function(err, result) {
        if (err) throw err;

        console.log("Berhasil menambahkan data ke dalam db");
        console.log(result);
    })
}

const insert_data_placeholder = () => {
    let genre = "Joko";
    let query = "INSERT INTO genre(genre) VALUES (?)";
    let values = [genre];

    mydb.query(query, values, function(err, result) {
        if (err) throw err;

        console.log("Berhasil menambahkan data ke dalam db");
        console.log(result);
    })
}

insert_data_placeholder();
mydb.end();
