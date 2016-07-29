var express=require("express");
var app=express();




app.all('/user',function(req,res,next){
	set++;
	console.log("request received in the all recveiver");
	next();
});

app.get('/',function(req,res){
	res.send("hello this is first request received in nodejs");
});

app.post("/",function(req,res){
	console.log("get a post request in port number 3000");
	res.send("ok i received post request");
});


var set=0;

var logger=function(req,res,next){
	console.log("logger call and register");
	next();
}


var requestTime=function(req,res,next){
	console.log("request time recoreded");
	req.requestTime=Date.now();
	next();
}
app.use(requestTime);
app.use(logger);
var route1=require("./route1");

app.use("/bird",route1);



app.listen(3000,function(response){
	console.log("you are now connected in port number 3000");
});




