import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
var postList=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>{
res.render("index.ejs",{list :postList});
});

var i=0;

//create post feature
app.post("/create",(req,res)=>{
const post_text=req.body["ptext"];
if(post_text!="")
{
postList.push({id:i,text:post_text});
}
i++;
res.render("index.ejs",{list :postList});
}
);




//edit post feature
app.post("/edit",(req,res)=>{
var id=req.body["pid"];
for(var j=0;j<postList.length;j++)
{
    if(postList[j]["id"]==id)
    {
        postList[j]["text"]=req.body["ptext"];
        res.render("index.ejs",{list :postList});
        break;
    }
}

});

//delete post feature
app.post("/delete",(req,res)=>{
    var id=req.body["pid"];
    postList=postList.filter(item=>item["id"]!==parseInt(id));
    console.log(postList);
    res.render("index.ejs",{list :postList});
});

app.listen(port,()=>{
    console.log(`listeneing on port ${port}`);
})