const express=require("express");
const app=express();
const fs=require("fs");
const bodyParser=require("body-parser");
const converter=require("json-2-csv");
const filename="node.csv";
app.use(bodyParser.urlencoded({extended:false}));
app.set("views","./views");
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("sampleForm");
});
app.post("/saveData",(req,res)=>{
    const reqbody=[req.body];
    const csvStr=converter.json2csv(reqbody,(err,csv)=>{
        if(fs.existsSync(filename)){
            let value=[];
            for(let item in req.body){
                value.push(req.body[item])
            }
            let strValue=value.join(",")
            fs.appendFile(filename,strValue,(err)=>{
                if (err) throw err
            })
            }
        else{
            fs.writeFile(filename,csv,(err)=>{
                if (err) throw err
            })
            res.send("successful!");
        };
    
    });
   
  
});
app.listen(3000);