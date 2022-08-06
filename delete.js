const mydb = require("./db_con");

const delete_data = () => {
    let query = "DELETE FROM genre WHERE genre='Joko'";

    mydb.query(query, function(err, result) {

        if(err) throw err;

        console.log("Berhasil menghapus data");
    })
}

delete_data();
mydb.end();