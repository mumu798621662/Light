var light=require("./light");
var query=require("./query");
var body=require("./post");
var cookie=require("./cookie");
var app=light();
app.use(query());
app.use(body())
app.use(cookie("mumu"))

var name="zhangsan";

app.listen(8888,function(){
    console.log("服务器开启，端口号"+app.port);
});

app.get("/message",function(req,res){
    if(req.cookies.login=="yes"){

        res.send("message");
    }else{
        res.redirect("/login");
    }
})
app.get("/load",function(req,res){
    res.download("./post.js");
})




