const mysql = require('mysql2/promise');

const dbName = process.env.DATABASE_DB || "device_management";

mysql.createConnection({
    host: process.env.DATABASE_HOST || "127.0.0.1",
    port: process.env.DATABASE_PORT || "3306",
    user     : process.env.DATABASE_USER || "root",
    password : process.env.DATABASE_PASSWORD || "root",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Database create or successfully checked");
        process.exit(0);
    })
})