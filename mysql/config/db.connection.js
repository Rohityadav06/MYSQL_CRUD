//import db_properties
var prop = require("./db.properties");
//import mysql
var mysql = require("mysql");
//export JSON Object
module.exports = {
    getConnection   :   ()=>{
        return mysql.createConnection(prop);
    }
};







