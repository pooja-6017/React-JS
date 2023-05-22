const { process_params } = require("express/lib/router");
const mysql2 = require("mysql2");
require("dotenv").config();

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ads",
});

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        connection = null;
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
