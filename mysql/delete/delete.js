
var conn = require("../config/db.connection");
var connection = conn.getConnection();
connection.connect();

var express = require("express");
var router = express.Router();


router.post("/",(req,res)=>{
var e_id= req.body.e_id;
 connection.query("delete from employees where e_id="+e_id,
 (err,result)=>{
if(err){
    res.send({"delete":"fail"})

}
else{
    res.send({"delete":"success"});
}
 });
});

module.exports= router;

