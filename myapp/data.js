const express=require("express");
const app=express();
const fs=require("fs");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.set("views","./views");
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("sampleForm");
});
app.post("/saveData",(req,res)=>{
    const body=req.body;
    console.log(body);
    res.send("successful!");

});
app.listen(3000);