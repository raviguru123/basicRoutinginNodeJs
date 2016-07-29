var express=require("express");

var router=express.Router();

router.get('/route1',function(req,res){
	console.log("request received in root path");
	res.send("it's ok we got your message="+req.requestTime);
});

module.exports=router;