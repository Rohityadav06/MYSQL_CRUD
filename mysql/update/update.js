var express= require("express");
var router = express.Router();

var conn = require("../config/db.connection");
var connection= conn.getConnection();

connection.connect();

router.post("/",(req,res)=>
{ var e_id= req.body.e_id;
    var e_name= req.body.e_name;
    var e_sal= req.body.e_sal;

     connection.query("update employees set e_name='"+e_name+"',e_sal="+e_sal+" where e_id="+e_id,
                    (err,result)=>{
        if(err){
            res.send({"update":"fail"})
        }else{
            res.send({"update":"success"})
        }

    })
   
})
 module.exports= router;