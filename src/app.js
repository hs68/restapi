const express=require("express");
require("../conn/conn.js");
const  student=require("../conn/model/student");
const app= express();


app.use(express.json());


app.get("/",(req,res)=>{
res.send("hi");
});


app.post("/students",(req,res)=>{
console.log(req.body);
const user= new student(
    req.body
);
user.save().then(()=>{
    res.status(201).send(user);
}).catch((err)=>{
    res.status(400).send(err);
})
});

app.get("/students/:name",async(req,res)=>{
    const name=req.params.name;
    console.log(name);
    try{
        const user=await student.find({name});
        if(user)
        res.status(200).send(user);
        else
        res.status(501).send("");
    }catch(err)
    {
        res.status(401).send(err);
    }
});

app.listen(8080);