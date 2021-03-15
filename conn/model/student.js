const mongoose= require("mongoose");
const validator=require("validator");
const studentschema= new mongoose.Schema({
    name:{
        type:String,
        minLength:5,
        unique:true,
        required:true,
    },
    phone:{
        type:Number,
        minLength:10,
        required:true,
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("invalid email");
            }
        }
    }
});

const student=new mongoose.model("Student",studentschema);

module.exports=student;