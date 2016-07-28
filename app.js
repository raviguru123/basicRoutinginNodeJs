var express=require("express");
var app=express();

app.get('/',function(req,res){
	res.send("hello this is first request received in nodejs");
});

app.post("/",function(){
	console.log("get a post request in port number 3000");
	res.send("ok i received post request");
})

app.put('/user',function(req,res){
	console.log("received put request from");
	res.send("i received put request from user");
});

app.delete("/user",function(req,res){
	console.log("we received from delete request");
	res.send("hello this is delete request");
});

app.listen(3000,function(response){
	console.log("you are now connected in port number 3000");
});

