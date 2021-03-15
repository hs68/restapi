const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/student",{ useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
console.log("sucesful");
}).catch((err)=>{
    console.log("not succesful");
});