const express=require("express");
const app=express();
const fs=require("fs");
const bodyParser=require("body-parser");
const converter=require("json-2-csv");
const filename="main.csv";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set("views","./views");
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("sampleForm")
    console.log(Object.keys(req.body))
});

fs.appendFile(filename,"name,phone,email",(err)=>{
    if(err) throw err
});
app.post("/saveData",(req,res)=>{
    });
    converter.json2csv(req.body,(err,csv)=>{
        fs.appendFile(filename,"\r\n"+csv,(err)=>{
            if (err) throw err},
        )
    },{"emptyFieldValue":"empty","prependHeader":false});
    res.send("successful!");
app.listen(3000);