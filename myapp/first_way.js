const express=require("express");
const app=express();
const fs=require("fs");
const bodyParser=require("body-parser");
const converter=require("json-2-csv");
const filename="data.csv";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set("views","./views");
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("sampleForm");
});
app.post("/saveData",(req,res)=>{
    const csvStr=converter.json2csv(req.body,(err,csv)=>{
        if(fs.existsSync(filename)){
            fs.appendFile(filename,"\r\n"+Object.values(req.body).join(","),(err)=>{
                if (err) throw err
            })
            }
        else{
            fs.writeFile(filename,csv,(err)=>{
                if (err) throw err
            })
        };
        res.send("successful!");
    
    });
   
  
});
app.listen(3000);