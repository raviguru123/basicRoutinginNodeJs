var express=require("express");

var app=express();


app.set('view engine','html');
app.get("/",function(req,res){
	res.send("hello i am received your request");
});


app.listen(3000,function(){
	console.log("node server is running in port number 3000");
});