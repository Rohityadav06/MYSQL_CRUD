//import db_connection
//db_connection.js file exporting json object
//getConnection is the key
//getConnection key return connection object
var conn = require("../config/db.connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//import express module
var express = require("express");
//create the router instance
//router instance used to create the modules
var router = express.Router();
//where "router" object used to create the module

//create the Rest API
router.get("/",(req,res)=>{
    connection.query("select * from employees",
                        (err,array,fields)=>{
        res.send(array);
    });
});
//export module
module.exports = router;










